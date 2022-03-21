function anagram(a, b) {
  const split1 = a.split("");
  const split2 = b.split("");
  const sort1 = split1.sort();
  const sort2 = split2.sort();
  let join1 = sort1.join("");
  let join2 = sort2.join("");
  return join1 === join2;
}
console.log(anagram("aaz", "zza"));
