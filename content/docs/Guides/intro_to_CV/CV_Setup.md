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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMGG26U%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIEU14Vs%2F9cu030T3rwHkVDvZlBVR89CTVgNIxqdk4%2BDDAiEA8fHNq1b04wrdVnJ%2FC2%2BKAYPb2LXUlhxj1FHzZEvinMUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFD0siDrE8uitc8u5yrcA7vHz5Z7hB2aQfpEP2RI0XvW2X9FbkLQW%2FDnAw3DZYh6yDqNJVuzcH6ovkQC0XrhGEyfzHYNHQeq9535cJIRtNPEvfBJiASQemlWj8x%2FZxe3eLXgeqHbrOj0xWqyjSKrNDl10RsgUY9MAGDdiYQCNGfVy4NH%2FKqnH%2B3gu9%2FIBjWFwoJFe8%2BF0OFTyWVP31t6%2F5wYN001O7nxu%2FJLnVPHvdii0RYoeSAj7caeUZGX9PSfF2Xptwbdln1sKiW%2BN6TMvnOhAWA4ZUIFa0VxdVJ5j%2BPPfb%2FyIjtUHLQ%2BUe05NJBHwS4qI1l0T9foQIkeR3qGKT4D51PmhIIpn0Gv2Wh5YKPFQYZHA7jjPnKthiMJuKWDE2SLPn%2BjM03Zrl0KG4ycS3ZTx1a97JkbyLfB0y2Y70BrZHWPN5Vv8yo%2FonPNiwMAPqOZzoA%2FlclEWWaZ13BUHsFUzsJtbm9x85anuaZ9WNyDh%2BzF7Gsmm2mjW%2FXn1E3eU1Hfg0pZtd%2BF7e%2BDN94A6sD4J0AqzlR%2FfRtXTKKhuhB7lsvajBi6HaUM25GkbbisulPgMR4dJ3o%2FdxUhiX06H9iDr%2BYukGnEod3pRUUWHfV%2BiqVWnUn7%2FtQ06fESOGvewrkoxquA7CxYNGoqMO7vo78GOqUB%2Bn04uY59UatyjSoZrzwYadc2hPgspy2284qINUuAsXlmEIkDzI2AMychdNqe8Jq7V9aLpPpKBct5s09FrR6Zz0gJddcIbRTkdUo4cZlXtsAfZPg2C1xeTC8p%2BNH%2BCoEEDIyJliXdoXxg69SaCbeCbpfOnmQ%2BEDG%2F9w6ytiX0lyxNefmtVVO%2B9AIgaab4owdBYRk43lrJ2Ji88zDOBdN8AvUgRlj8&X-Amz-Signature=d8be5c30332f86bfcde4e4f6628390681ad8a25d564be0214ae7ea8507cec8e7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCSCSEGL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDl4VMhbcZBSuDK%2FPKuGj0GJqY0Mab5jEvea8FNDkIqUQIhANmVTMx2jEoQlrs0H%2BagNw4isbZxBexr8OqsNVXmG3luKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydpekPPUuNw80ntYYq3AOi1pHiQ1P8IfqUT9Uzqxl0zTMS798hGmaAmUhv64w2F%2BexchQAFvZjnZRech8bhXXOJfZXe9CYT%2FO91rMHp0ZFNBx%2BzXJbaKIF%2FCneUiQuMbpbGgRt%2FOaZMmaixOn%2BTFoZWPzApbFCJiWublxSynmyyCX%2F5braydPgOfOwCl0dZMn%2BM5MEHw%2B0VlBc0xT5texvxIhgnWyfUy%2FfK79m3jscxRc%2FuNhtHnyW6zs53ogJVY%2Ft7NgZTw739TGFQqxLCgsInlQbgqsu9FGgh9DTpSS776RIHx6t5RNkgBFFPVc8aoBSIIffu2abo4aUu%2FwglGD73OjVGf32JlHxHErNFDJJ9kDzHgC%2BWBRrzWbYZUUMmj2dTT7BHpuM7uJym%2BtZXZdjnXvNNEH5sk9aVgyU%2FedwF4cUBv%2B8%2BGV3vT4fxI9DvlRJ2PAHJyiYDIVjben8ikkUoqH9eJzJzqpPwjXHP8Fkaaqm7E9LqRR5GNlku41Zj%2FpwToC3I5%2FClBBmfaYSw2uSAUxQ7arjk0%2BHlQhTXP3t2FYNX8eMFbhH8q1qOL%2FyKj8FBrTDzWyNT0r5xnA8YcrWy06H3wWoEg%2BwzmrTMHe7HTeFuRyi%2BiNNiRsO86ZzoxfciP9ZSnuuggRjbDDw76O%2FBjqkAXtdNp%2FlFjOIqNKxSK%2BJUiy1G2K%2FWj3INu6uenlJhYPLnQzaDGmcKGfG9FHcG4QzNQPQ4Y0XpsU82HiJWJohOFp%2BsWW9vNWc9G4RH7ev1TD47e7sr%2Fe908em4TpP2%2FD2qhC2dA8gTFbXep7vg9zm4LHKEyojlnnHdSFyw%2BA9aNXFbv7k3zzrd6T2gtEFc1SYy%2BS9wxxMtCkVbRpJeey%2FVdM7ZJk3&X-Amz-Signature=fb94d72e7cf601fc7e3c0c09dedacf6779310ecc6e34b47086ed1c6311db83a0&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
