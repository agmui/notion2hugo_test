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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFGR3U6L%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIE6f%2F4zfdLozZnO%2BabKIPwOPSF3zpbAMUwUajM%2BMfknPAiEA4hWWhUfdrQi%2BhpCsdWoDazaviJxP0%2BjUr1UH3Iz4IAcq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNUVvKHWC%2B7DFofZjSrcA%2BbT4owLHtEtMnD2tmXkK6Wn%2F%2B4vtSSXfBwZ9hmWs0FYlX7xgtJ9wLRlAxMOyIUmkd57rGJX3iC7JGb8MxINDoQ7DjyuOJJwdXNY%2F9sYOj%2ByVkRPM%2BbAgnbeWVfowB7zBuevxz9Qg476q%2BqJjVpavQd30jX1fDzERo0YM1nX8QMfEyf9fUyofXSIeqO9eBDFACpitWVp0ydqGgKkLpigPJiL8Ge9lEE3mslomMhopEDlA8GoDfrYgRFZ5%2FavNGXOKbVh8A8rf4BMeY4S6FZtcPD4QiqpY8w934OvB5T2dknDwVLGuRYpC9VigVg%2FI13kBL7oGO9BxZVx%2BjIi9g%2B9WmOADhTOoMaZ7%2BW9b7M5uq1nq8SKodmEhZK6pVe8vVwDhmT6KfIfqhhhkgu3pnRWsN08qaoElt22Fg%2F87Pz040X02aQkEtUW%2B1KTBWgH3nGHo1HTPAxqyw9ExObrzz%2Fd4Bbu9I%2BnaItSxenYtmWzwfxxNsuFULy5EMvZLDuiTNDyOmtotVMdhbFivcCK%2FroLhFNwDvsXQjBT5n7BChAXctmoN7pY%2Bn9XM10%2FYl0MAwUtL%2F3IT4X%2BZXruHUcEirlioUdMO%2Boh%2FhRqXaf0yFEpyKqNNzcEBSLYiQD4aR5rMP%2Ft4cMGOqUBeHS6QjfS3tnXh4MQ1Y3ZPkrx6VFtVq4dqI3uCr7CVr%2B%2FGnOgf4WSgbak2qlv2NnS937aeG4HdWCy1X4RZBjmkgk6riDZUw6R6hy8RbCXF2Jn4Z3jNNoZVU%2F%2F1iMCLdTF%2Bind4PwGfxvZd%2F4YS9sHqhcYf7%2FKFhLAU7M6E17LgHWnFyr9nx%2FIc3WGPL3ePShh5SLpz00cGMBftTm45mn43Vs%2FCuwP&X-Amz-Signature=33c5fa0cf78b527748caef770c74af88214767f09fa55d789edd9efd05cd74d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6QWJBYP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQD0lWZ7lnXMdaHhW1%2Bv5HDGWmyVPyjiMuNJAd93Pt4%2BtwIhANL4Rn56P3GoROG8W%2FT%2FNTK9eDb4sizzHjTdJW62OmDdKv8DCG0QABoMNjM3NDIzMTgzODA1IgyqIZ%2FmxxgKu5wUnAUq3AMO2r1cqvCCpBOATYfQ%2BnyXBpYFxU0hoxy%2BX4VHYFxs2D%2FlktK%2Bqd5heU1tX7uGzrvybflhePdrB3ONWLjwMEd1kIdXwYukO2QBd0w%2BcyjyYL0X4AzVUpJACJjjADyy%2BIPzn2ZUteHeJDqB6ao61yJKDosarJS61Tq%2BceoXTSTFl5eIC6emLTKETDIlFiIsJZ%2FpBRcoq0WZcD81c9gzfomuoqHEcfEce%2FvtlvJtJwfdafg%2BN7P8vffu0IxThjFd%2FM5bvMXjoUU3d0efohs3EjqunmcLnNesUN3ZZ1W%2FzAqRUYJlOZ%2FNz2EH8ddz3LbzI1vYqCsIJy99GwtGJyb4%2FsB62oE2sljO0ubo8ozoCqvoVw4NQZvodRY0X9rcMEyG1IBLM1SAJdF3NAjnh7zPGjVGJTBgYTZXiyGdo95SygdXNn3KYmAarszEkEJzBFu5HoicSkPySPA85Nvj%2BHY3KhieX%2FJ4RKxHXWIwLTJ6NnNRsLEIwzmqogsH91g0kMzsx%2Fs0pu59wQZjWDZQ7oDLo8bsahep9eBJcIA9vZ7toQEeba6fe2OcedKP6G4trji27nJm0WQ59gJLqGBhCgO5UBNTo3Up4e7wpCEjZTmuqw9r%2FFn1eBY%2BW3w1QhK%2F2zCR7uHDBjqkAdrdWf3WSd6ec1jXeTaL9d3jPQqhds%2FK5Uf880vI0qo%2B2GHEuGGIl56o9dLTInIogD54rl7mfxftjnLDcWMBRa%2FLtFkA17m7HhvTGm1TAwATqvQZ1oOTMnSo55evc%2BPIiF%2FWrTmIAmELL3w4meH1cRRmXuIXo3z9p0UsnxafB5gpPA55HgOn%2FBmsbEwEUHJtd%2FMBN%2FRQc9W0WsGuDtiQCr5brsDD&X-Amz-Signature=cf38ca4e7edf017fd984a5e709802b7b0225b3532851ece249dceba20e27fb7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
