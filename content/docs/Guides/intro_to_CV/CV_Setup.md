---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6BJVEQN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAPv7wiGxLgfRksjpZcWmHOpEIiPgCv1WoJGCh8Spd6ZAiAOXiUlRkqYPTwOWxhkoOxgqFxTAUaNpU539rZlKmrIwir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMNwG%2BsVSfQtAFpKiaKtwDwGYLafeuE0J5ScrtNuO5E7NhMmElQ3mMyaHEqGbti0tstfRKrEYnPiWC5eCg%2FdAjlnmpknM7tROU%2F2v29%2BAKtEAR8b1NZAutgLqJ62gDp%2B6iWrrLxmO6Zfex%2BlovWag2zAhl8BN8EEN3q%2FBh7PRcVMBazKordomjIXdH9Y8gfheUTmLfy8fUZl58Bvev5yyW0RPx1YkGGoqioS0JHgwkOjWMdf1zlb9In%2B1%2BEGDz%2Fb6bXJw%2BaYVNny%2BS%2BnD5LTHm%2FUVJPvuCr2jbXyjM%2F3M3sT6UtrzWj%2B3OxYaDLwRazNZPRFDauNaznZ22k9aojBVuZQy5qS2QsZtYEdbJB45yVASXQygCK4aXK5cj46gsmqozrdFXC2Tpzd7mtmJxO%2BhQVg7ckpxpurk4rLG9WrwKtRm9GNGtc66Xgei52fxOIRmDxOCje6%2Fwct5BsfdPjqFloHsSwS42RoSqo64dohal4S47aXTEF4R2VRtEsEVVe8M3O2t%2F4LzBYlXq3sG2a4V2Ri6G%2BATEIvvQvpaCPLStKKYsb0vKOCmS%2F2CW07FFmAq2i9pAZfEVu8VczS59auLtP1%2BzNWBcxnax9RK1YGhnItBnhREVHI3H33ZaK0B4BLOC55CUIb0WMA7Ch7owvKH2vQY6pgHtUIJqijISdgydV8c%2FibElYNj4Omd51kS9xJc4iYDvXcl0xEAE76J1X65p4UnC%2Ft5p4K1DabDsiDy7w9G6usroM%2B7H0Reo4vz1yg96qPRUeSebnpqT2bGO2jXXEWPRvLD7MABzSmao98StGvQkw2nHs58fSf7X%2FrVSIpUCXivoc7hGBMQQ%2FTAGotSqTo2bIEAcD5waR1J0oHZfNS9DfvJk0AQZMavo&X-Amz-Signature=aa00b3de9a0a4cc931e9588fe10dcae70c23cf140a9bf8c6915665331909b348&X-Amz-SignedHeaders=host&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIHGAUP%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBkBIVhLl1Q4DZkQGK8W%2FX8KSstSB%2FdQtFH6SRGz19yOAiAnje9uDwXkD%2FjqXRKbh9frjBiwcFpHtxjh0sYmX6DcISr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMOD9x5aBa4tJ6geGCKtwD9Tr%2Bsq9T5wihYvL8%2FMctMk5JHDlQnAHkBpWCawm0CRRE05Dw2S02pLCM0W40WhZvzzpR3WnsXEvGGHxL0m15USWHKq9zUk7NCeqvGLfjKDKocyXdUw7Pp9T8PDQ1gJdeQSllk%2FWMJMuKwKKw3ZV0THum%2BzWuR19df41HUYyCh7CSgztnYiQr106%2Bu%2FFVZACBRhJ%2FkrIRXbCCwygCAST8%2FecWUlzFBH8ezEsJ2bd7VRlbFT4l%2FRBvHpmLKoBBcvS%2BQjBo7WndkOSGoKrke9pOfmGT6AC%2BKd1ocs8esapNA1dcjXPA6wL2RcVyj2pX%2BvugmkxPgYybM%2B8%2Fe8u9k9HRXXEsad5DfYSImQl%2Fa%2FnPh9KB4IaHa5SLfhjd%2FF6GRjEaFRSGVm66DX8%2BJsmX32si3RdrFPfpTsznloAAK9EfLzT%2Bi0qAjHh7Ndre9uqADtsnthC%2FNMlO7eK6GEa3ORCovmSW76K2%2F8O18dXz2YIL%2BG%2F%2Fzy2IzOof4pDwN%2Fnziip1xK3fB4VKXbBdx9oUC8ISGIDYGtmzQJAwxGYasPYK0oZ7exYsIngrLjxhVQqsOS1cNjKlW2Uh5uk63eqsoEftQRafiOwPn%2BDEGhDLfBwiPQtMZ46fsoCWpij6tWEw1aH2vQY6pgHk3%2Br24qpYUCoCZDH5KqaqTQLZyPt6kA8eYP6W02txbiHVw6%2Fh75nGlfpS0YlEQElkMXcov%2FNXnmPHJ2aOVFsOfMiryYQZ6PrlFthNpId4mwlgv1fOO5ylXQrHThGK60ADFSt3DNg4HgEXZQfIgjsgv7ML61%2BseSXjQE%2B3wMYo0d6RzEkkIDVhBkV2r7SyYOQppVrgJlvF3BRpOwOaxvkHFLneuZo%2F&X-Amz-Signature=a7e8c38fe8fa27eea87ef2c25ec65c8275877d6c67eb160249d26abd531265c5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
