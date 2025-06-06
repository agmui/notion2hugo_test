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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUNRYX7D%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHwNoVBy1mhSvnn27NDRwkNfkWZT6Z7IKo2Ypg1eHIdsAiEA7EDDrVEWeqgap7uqvPinur3mYyVk3w5S2UIZgzc9dOEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJjJAgqNDc5DnN3aMSrcA6DyaZAfwJNrhXyLICLCJ%2B9GfWdsvrg94Xd%2BXVxK4p6SuWX73WOIvqLXj3aIzZdEEHirGY3QX0%2F0uWcPUmwVNInzB3UzCnbQxWyQo%2B9A5L6cCc6oPPu2pHmaPaRrKZCD8IMAz025%2BECB05nXvAJ3FvBf6R818TrXLy8jI8zbDeGk4%2FkK1wp27azwdPZMBIoOOv5nHJcuoebawqXXhxv4fBzFtCB8UK4j7ClvzWQX7QguXK2j5kRC1VdjRAO4B2QilLxY5DESRTRFPEy0gLNcftxL%2BnGts3BM4R03SQtE8bSdW50Bc7AIStAuXr00PcGa78D%2FuJUcDiIWVIYstzVEt81cnOY5wbqYGOPLcGq50KUxSonvhOznWaVuaU5U4FvjjquZTIZOuu7h6hGoqxXOItoJ919%2Bvds0aAeoAwwzt5M65neu%2FnlzBTNsXK1fvFRnct%2FPWJ2uR57qF4dGouWVYHpA%2BvowNoud%2F2MZiACAomxsLuKrdx8DIWUNxPj0GfnXrSRZKxduf72oapb1lEJB9suWO4M1%2FI%2B4r7o%2Fp4quqKL189%2FUgxCL5egXHb1jUnvlpvIugFO%2Fx%2BM1j2bkA%2FyHFNJ%2B1CMBDzAy%2BxRW5VnfohI5xzbCSjfiLqtunvywMOXYh8IGOqUBqGFvUmxLwY2EKSLs0tQ2FyfWygegFzPI5sqCufX9N4se1q7w7Oc7%2B1fQyXYHsTWNRyzCVFTIYKmmPH3ThtF0wht6PWj8xBd1rgxsBFMDmni1gxSqjGAZ31U4H9%2F5LNBSaENW2ZwMCzax7ErlhWKdAo6YNaYuKW7sgDhTohDzET2CEhUeDr8M2UHa9givx5MIFlmUz%2B777LYF3IwuLiyY1Fn9yvEF&X-Amz-Signature=e9f888136cea29ad54d4071f22508a2cd674b9ce7ef26911784c1d9b078b577c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP62HUGO%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCmwzoy91HnfRMmkdIfhPigJHlMc9S%2BHolck9KuPwldZgIgW0%2FM%2B%2FCchSuwstbHXOScwu9nF7OmvePE%2FnknE1cZNMkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJV8A7C%2FbBb9byYHLyrcAxBeFrmJzSpPNBwZhp%2B1JtoQzXRp0Uxz784Cv4GF%2BpxvJHht2AHQQhJ6t33yE%2FsYk5j77Is9HcFzo4qoeZVwNkI9OEfb%2BN1G7W9c7hSWbnsLAoZuXubxn7TkimxNu6%2BQLDKKSize21T9jQZdKaPC%2F2CKjvtbPjgopqYhwfJq8ErUV7RwXXfjlvyvjlCUvhu79lnwxk5CaD4qAQzBA84OA4%2F2OOhoISCe4MMneWgiCr3DuZ6u3v3Uq7DIWlUUoTW4qWL1yPY%2B1vKwqoHNxhKRWduvZC4aAIgUMsf2Q%2BC3I5dswzgPNeB2v1%2BzpZ1BzRIyGuY%2FfyAHCafLhui1b69qUn0RYzq7XN%2BU4e7bvsIYOHFE81YPFST6ZstnKkU7nZdc11WL2cYr9b5kAfFZhj2uoVuOjuI6AKfVSak1yHHVhbtlMI%2Fa0YuyaYJgMMrvJ6O0J1lhmci9%2BNJC9O52LgUdoYlTC8rkuAfo8j%2Byd5q%2Bqgp12IyQCztaPbGpta8DkwaAszboXU3mqJKNmV4ISgRS4AlFRNFIj%2BR7wwQaFSYtyltQi3UFRc4NS4cy%2BaDHEFAj3ncRcz0qJh554pilZbrGtoWSjFk51iuBNePUeF6Pyq0wCDgwmtbDfOaCv1x7MJTYh8IGOqUBc%2By%2Fs%2FxFyyEMQVCtFgYVs8u3F4CgYtupK9I%2BJ%2Fk9HSr2xfeIpjYZfIORy02fjv45Ivp2%2B%2FNiWswaRXDIQBowJo6P6w%2BwmE%2BkflrpKxnIjSWfFj1dJnArdb7lVDGhb4Qlzwih7sBZbSCaKGUzmxbrL4HTYDBbLqVLTNsIykssXYxnJir0ifv40d4xHzOIhgLOF4VqpFXwJutepAsa1xreV8tBtGBx&X-Amz-Signature=93fb2688ef4479726906cd33f9a4206078edc0ef07c4131a5c29f3bb2de118b2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
