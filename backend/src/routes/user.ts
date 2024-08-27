import { Hono } from "hono";
import { decode, sign, verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signupInput ,siginpInput} from "@prashant-medium-fullstack/common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  console.log(success)
  if(!success){
    c.status(411)
   return c.json({
      message:"Input is not correct"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });

    const jwt = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );

    return c.text(jwt);
  } catch (error) {
    return c.text("Invalid");
  }
});

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const {success}=siginpInput.safeParse(body);

  if(!success){
    c.status(411)
    return c.json({
      message:'Invalid inputs'
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      c.status(401);
      c.text("No user found");
    }

    const jwt = await sign(
      {
        id: user?.id,
      },
      c.env.JWT_SECRET
    );

    return c.text(jwt);
  } catch (error) {
    return c.text("Invalid");
  }
});
