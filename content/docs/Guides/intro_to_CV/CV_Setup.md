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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6C6E7VG%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCYg%2BX9El8SbIf5B9rxVkesveziKRLJZV99l6j9RyGKywIgR05dkCScEJeMYbH7%2BauGLVKQRXG%2Bj%2FnXC%2FebCWFnzGAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv%2B7t%2FN6T%2BfDROcRyrcA0d5ACesJWjIpnSsN7Dfnhb8OaOtY%2Fi8YJHxk2%2BmuAJoLyq5gdVqbBh%2FuilxfzyuT9qDXKFHmGGQ2anyYFcbubGI2zERgGsOtuI5gAnOAWui5HYUnCs%2BXi1udfR26Qtf6L99ruNpMG4WalyltXJcOqM%2BZnr%2B64FuHQ8e2A%2FVT7hZRnblxW0R8XbOuDYDnnlLHRJJe0aoCWY5FV7kn3YENAhNO%2FOSyqcFomnGYB8tpwqec%2FzZwfdqiysp6kLjvdFByw24Zgr%2B4Raq8QtGIYIFl3BY9lWxrYkIzg2Zz7NzwlT6FlVKjJ16KYLYihDAVTwIFXkbKpkcJv0Nji6P0BcfpgavP%2B%2FCqpnrQ49nJlKrMK8eSipY%2F221pR6MJMN0ox26P9e30YiRRdZNFsrAEwhqwnQ%2BbEIKjimHLdG8O4DZSfDA3ZiXDGEJBbK4MB9%2Fw9Uy6ShHcaEI4jHmvzaN%2F%2BJqoYp0DVy1pA4Al3ONwpXh%2B85NcKlFtcdxxtQIYWgIUMa7mJ8kS7ndOH9PHi4fRujt1nrJzU0culWtSJQrVGI8QRiAJHxqOqz%2BCNgVon5JTp9JiqfzGvxExgLfv2yR2nnCk%2BSNwOqSz2arPmSgZT67%2BZpE7PlxH7GraxkSfUceMNSUzMAGOqUBwPMF9HviersOYyEbsG0fWcRvqOMf1Up8hWxV1gY5fG5ZAl5T1qIxB%2BEvuyFZahLuBJw%2BNDdzBuUQbR7vAsUokTuK1UVu1nV3TVv65Eigr5EKTzyb1eQEDhUZhPVBUzlXbvy8Kk56gOjkveRcMaZTQgED0l3wtlHGGHL%2BkVShDB3ap2%2Fcq78T3skJZZ1eFjMnRqmo%2BRBijjBsKetFBNkUdjy7o8o%2B&X-Amz-Signature=2217a919185c536ec5445a04e04ee26c46e398c818fc721d8518252bfc956d2d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PRQDYQL%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHv2CkXv14RG7VFCNy8lQkr1bCNGFQ9FKQJDTJF%2Bc9ZjAiEA7iYvItwtY4BB1oir0Wxi%2F4sySjqjhVgCFOsrOisd7ocqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILQE%2FkvsrRQvAmvsCrcA9PW1omu8w2xfrZgiQ9HNJgMXWlxydXb1SrMPzS7SQwZPn9z8RyzdjswXJVWMeJWUJwSMORYatp%2FICtaJggvNxqS2Ou0ThULCma%2B9f7zuI%2BmP%2Fsd0QXY9o2JCoUdSQ8Yfx6w7YuSPtzDSH5o6FpoyMsEPf9ntyIy%2BiFLCkJmbwN%2FbH8FIdqgof%2BiGUq3zC2Bcj1IWpl2a5iEhLhH%2FNa6TTF3QiJnx9rj2mHjnPpKp6I2XL3NEbPOW4XncBmD6EiZrfrVVjHbT6rHITITjr5oM%2F%2Fowr3PX27qV1pbzdK85OumxvOEidAeDG%2BfGcuHAtdA28ISeQLGdhn04ZJMbUxdQVHpLf3XAeO%2BZs72RW9kJpxz4TdAx%2BDVNqkLUT%2Ftg56ryBvUS8vVBTUDQYJK6cRkEq0zsYnKG0aQijgurmsQK9o6Jr2xe5bAH4w62J1blIrhZTrGGD1nFOUuAYmx%2FnMkH4BvDs6UoXLkbyVn3iKiD8sC5xArb%2BcjIO3LnFPvT2%2Fd0YGXuXmhJLv1i%2BNxYxhJwEOozEOtf2Z3lmPnRuj0NkORujPDy7cOI5EnWQBwVsG%2B4Lf8oTWQqOgssZuMgzdBJbsjPIcIEwi6nNbBfgH1bXHiE2fqje6EFAIj1mqnMPKUzMAGOqUBUwSLYUMqhsRQm3KkhcIT0xt9I1redo43IchSzPIMIxu6Zl31DrrtbpqHMuQNAH5EYAv6HCvIYAkenvt7NZuJPTMuaEuAEanL5YzbHnZeTZru9ZBZoHBc4qs2msADc4ggGbRBciq6rMX8VCjAAdJ9bWSzH%2B540WAGVX7lr0lv4F5%2FPmYu0Sn3pTiiRNmNGvNp9PmLe64Evu8BJq%2FsEkjNfKzFsUEr&X-Amz-Signature=9b3b0827bebe154f68bbd44c3c02eedad94eba5c1171e3647eca830928d1034a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
