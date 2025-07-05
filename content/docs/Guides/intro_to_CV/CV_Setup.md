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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMJYCGC2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICHtFbglTsJzhLjSvUdJU%2BcJF8N%2Fk2KqCpAr6WWYalM0AiArb9%2FZS7nilkIMWrrAbhRxi4%2BkvkOYFHLRScJpTlbusyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMaUM9gCp%2BpGSqJRI7KtwDK9BljlBm4VWStnIP0Ppchck6qG0EYdE6ehL39L8s%2FhkQaZ5NYvmkK0HDMFp8tBkwHmkSB2LfcsPeZkhbdaqRTAGDDYrJcdMpa70lLQsOibPNkIpTWDBJnitxtte%2FNUTedT7G6owdgdwsUgnVYQ2AhnuGpIcI4EJuldNlNZtSNpHmfLMnYdKhsFb46sLB%2BnatcHL4n4qUue6XWrU0g%2FO7x80QaIeXEXalWbKSf%2FfVMqTEoweUGgdMk7LQhxXSED717WW537azr4WhoXYSIGC7dQGKDw2ZQ%2Fv4qOhUF8SvmC%2FlgfmngQc3Dxyld83bVt5r4TnqLYPL6%2BP9aUF4oWRa%2FbJ4r%2ByxPDqMfgqEhQrnWNPDkTA1GJldRkKWhRKE9x%2B7WlVx6i4lEjYjoyRXwHcbLbRHBK%2BZBXC%2FJBwhu1sAhiWKgO5SKwRnlHCaf8GZ%2BYvymnUd4QiOs7xI1aswetXc49VwfNbRsKgai07OKMQlTgM2jY3PXQWtp9WWLl3oJELiq8pgBZO%2FV3VcI13cHF9wPEQ%2FTD%2FBlSsawqm4jNJWNk3q3Z6FwAp9UtO3q%2FzNNJ%2B4le9jfp0hSGumqIy9ZE3yjuY6HArAxgKesC7v1R5QN06Wjq42RsltfhxMcDcwoOSlwwY6pgGUtAHtEG1SC0FKGsmdLrK7e3wR5w9vtqGNENTgn%2F7YNW0ae1GfO1KV%2F80OqLjU5qDixsRh1my4pQcaDDctBiJhKfuXIY%2BlTGphUpPZo9WF8kcUQ67nUJCKSSGYoYrHhMuIld66C8wjkvPh36B6u9vfi%2B0oJHxExhFM2GbyDjYVaChd%2ByuTGUgpAea2UwP%2FuaAGDW2ZQXLrYggZzG%2BraeeOD3kMOPnB&X-Amz-Signature=f16370323f9f26b3b1c7223e0896091e749e69fd2160a5456b69065779e3b0ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ELCOQEV%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGta8BavIzAB%2FU6Dqd25CAH%2BUYnCH1LNbYWov0yd7wpMAiEAoUSHF5Urcr7IF3ibP08HYdvey8X9V3YVC3%2FGmO2JZfcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIOmRWyW0ldF1IOCxyrcAytXkk9ShRXo66r6eVjR771LfLw3mkznRcivZNO3U0DcOgM1vTWgvnlPk9pUX0WpnBihd6Tto1nDrR%2B2qYjZiQSGtzTy6p5ibKh5lAE%2FsO7Bsl2dsyAyk0nFTDz1Y3DALnRuOEougGLz16YL9VbRSPRI89eRlA9QH2wiaGbsg8BQk8SZmE3aAd2nSIW7Fe%2BAyLArkkAtRMQQoEFZX0GUWzObf5kh43yILlMeacc76F0pv6%2FOKFSd7Ryk4qIFyvLEzJI3HtU5aRKRrAHSZxiG%2FobHoeQm2KnW%2BAWSw5%2BaUci74I3ouOKmVYJnZGue5ewZTVz%2BINBa%2B5e2nVBCfzgOEq%2FBu5u9%2FtTfxaiggEflCeySteqdA2AlUial3SThmBTIizSMAZWh%2F2X2015OSSsNZYmvDUkvJdEed9yE3h5DzCipXwueAbRghndlizsi7rmIYKF%2FhEDrL1fr12vZ3z6edkgZ6ha0hLEdtxicHPMMZj8ar3tsV221vtXKCsjq9YRQ%2F1ItT94DeXMIsc%2BAy%2B%2Fq5Rx5Czb9cAtQa9NazADw99rrlPI6BsxmSiAzvtv4CKOxYymF%2F2GyS0wHVBVEAQlG09vw4hhv5xGWA0pv4KgNV%2FJn%2FZ4m6ALdBmb2ZnNcMKfopcMGOqUB72AE8v93c0HZTMOzFmSExzKsnhRMVBF%2FvagMfAX6%2B2JIpc8SNpLMiODCC4ZwwjeKqeCs4rzEiYR3RmitwScfOj56dONFZStoZZ0ZP7k0yjA1tg%2BqULe9AaX0ZtUtSy1PKGC9IT3sbMjSwwV0zoNcHzqFPC3YLkRw54lmbHiDpE3nu9IeVcV6%2FMCpqOjiIkCnCaZ2BPif5qI6JQJMnYl1FyazQERS&X-Amz-Signature=4f530f19937a78487f2943344df3f452af54190e724a25a6b7ab1ea1dbc90f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
