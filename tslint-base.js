module.exports = {
  extends: ["tslint:recommended", "tslint-microsoft-contrib/recommended"],
  rules: {
    "arrow-parens": [true, "ban-single-arg-parens"],
    "object-literal-sort-keys": [
      true,
      "locale-compare",
      "match-declaration-order"
    ],
    "function-name": [
      true,
      {
        "method-regex": "^[a-z][\\w\\d]+$",
        "private-method-regex": "^[a-z][\\w\\d]+$",
        "protected-method-regex": "^[a-z][\\w\\d]+$",
        "static-method-regex": "^[A-Z_\\d]+$",
        "function-regex": "^[A-Za-z][\\w\\d]+$"
      }
    ],
    "interface-name": false,
    "prefer-type-cast": false,
    "no-relative-imports": false
  }
};
