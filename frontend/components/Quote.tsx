const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className="text-3xl font-bold mb-4">
            "The customer support I received was exceptional. The support team
            went above and beyond to address my concerns"
          </div>
          <div className="max-w-md text-left text-xl font-semibold">
            Prashant Singh
          </div>
          <div className="max-w-md text-left text-sm font-semibold text-slate-400">
            CEO | Acme corp
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
