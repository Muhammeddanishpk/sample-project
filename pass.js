let lower = (inp) => {
  const lowerCase = /^[a-z]+$/g;
  let test = lowerCase.test(inp);
  return test;
};

const secretPassword = (inp) => {
  if (!lower(inp) || inp.length !== 9) {
    console.log("Bang Bang ⚠");
  }
  //* step 2

  const [first, sec, thrd] = inp.match(/.{1,3}/g);
  // console.log(first);

  //* step 3

  const firsrSetpos1 = first.split("")[0].charCodeAt() - 96;

  //!  -----------------
  const firsrSetpos3 = thrd.split("")[0].charCodeAt() - 96;
  //! -----------------
  const firstSetResult = [firsrSetpos1, first.split("")[1], firsrSetpos3];
  //! -----------------

  // console.log(firstSetResult);
  //* step 4
  const secondPos = sec.split("").reverse();
  // console.log(secondPos);
  //*step 5

  let thirdValue = thrd.split("").map((lett) => {
    if (lett == "z") return "a";
    const test = String.fromCharCode(lett.charCodeAt() + 1);
    return test;
  });

  const password = [...secondPos, ...thirdValue, ...firstSetResult];
  // console.log(password);
  return password.join("").toString();
};

let res = secretPassword("mhubeshir");
console.log(res);
