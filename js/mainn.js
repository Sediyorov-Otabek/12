{
  // 1. "janob " va "xonim" manosini qoshib qaytaring
  const mrMs = [
    {
      name: "Akmal",
      gender: "male",
    },
    {
      name: "Laylo",
      gender: "female",
    },
    {
      name: "Ozod",
      gender: "male",
    },
    {
      name: "Aisha",
      gender: "female",
    },
  ];
  for (let value of mrMs) {
    if (value.gender === "male") {
      console.log(`janob ${value.name}`);
    } else {
      console.log(`xonim ${value.name}`);
    }
  }
}
{
  // 2 masala Agar 2chi argument false bo'lsa karta raqami yashirilsin aks holda aksi chiqsin.

  function card(num, bool) {
    if (bool === false) {
      num = num.slice(0, 4) + "*******";
    }
    console.log(num);
  }

  console.log(card("29381209809123", true));
  console.log(card("29381209809123", false));
}
{
  // 3-masala. Primetirini qaytaradigan function tuzing
  function perimetr(a, b) {
    let = sum = 0;
    for (let i = 0, len = perimetr.length; i <= len; i++) {
      if ((sum = 2 * (a + b))) {
        console.log(`2 * (${a} + ${b}) = ${sum}`);
      }
    }
  }
  console.log(perimetr(6, 6));
}

{
  // 4 masala
  const haYoq = (str) =>
    str === "Ha" ? console.log(true) : console.log(false);
  haYoq();

  console.log(haYoq("Ha"));
  console.log(haYoq("Yo'q"));
  console.log(haYoq("Salom"));
}
{
  // 5 masla
  function tell(n) {
    console.log(n.replace(n, `+${n}`));
  }
  console.log(tell("998990091621"));
}
{
  // 6 masla
  {
    const hi = () => "Hello world";

    console.log(hi());
  }
}
{
  // 7 masala
  const haYoq = (str) =>
    str === "light" ? console.log("dark") : console.log("light");
  haYoq();

  console.log(haYoq("light"));
  // console.log(haYoq("dark"));
}
