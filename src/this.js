//fonctionnement du keyword this
import "./test";
function func() {
  // console.log(this);
}

func();

//définir this avec .call() ou .apply() ou .bind()

const b = {
  name: "Jean",
  lastName: "Dupont",
};

function bonjour(lang) {
  if (lang === "fr") {
    console.log(`bonjour: ${this.name} ${this.lastName}`);
  } else {
    console.log(`Hello: ${this.name + this.lastName}`);
  }
}
bonjour.call(b, "en");
bonjour.apply(b, ["fr"]);

//bind()

const c = bonjour.bind(b);
c("en");
