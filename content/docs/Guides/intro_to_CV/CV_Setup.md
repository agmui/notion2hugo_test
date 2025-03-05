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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7VER2S5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyf1T%2BdbwS%2FOZrdO3wLTUsnwghMci3%2FkfQwrQJwMpBqAIgO%2FbuWV%2FMMmW0tfxqPXotjmxjfVkaglf%2FohwCgQymcy0q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNXEJvM0nFs%2BjePntSrcA95IRkW3s%2FoVN8CZ%2Fy6HTCvLoKzPn9Fy07u4wsfTcXggSskKJT3Wg%2FIVSXjOp%2FiYacW0fd9fiWuwHTe4zM41NhlSikIt%2B%2BmEgFFDuIgbr2q1MsJMscnByTXOGcjYIyHLO4sES1w6kyTYmEesV5nkHZ8hytYZD07qXv4tm%2BqIUSC0evBhGnSYAGsUVd6JvRDjOXlHXBb5DxDVcuaFr4XXKlcSd58Z0yZxRijc%2BAbTV%2BrDejNwMoN0%2BTQy4ATqDLcvUa4uIB48p%2BGnFj5V3YBYsnzTuMCFheYvN47lFEwTbJS%2F888F4lK7REcsg5LMGSO%2Busw0T0sjvZ5%2BeBWQay6TRGuZNcVaNGba3dhD%2FIAfAWBzbcYwWAbzHvpJqo78BU72HP6IGFJoz3Xx48fXuFelF22CXVQpDvWfxqPvftntEmaXFeoAH0Ru1L%2FtWdUIESPTrMwIPGALd6278idYm7fpWyZcLHEwQuYdDVP4Nyn4FSENDrMl8EI3diFJesE6zLHgtnyUn6nEsxCpPxvG3I1q4dxeTsuo9wu55gUlI78%2BGUebU7ArSebwaTVaSi8rCipOKvBi5AnMc2JjOI68JxaR7gA1z0lHrBYZsVtA3Bay8MPOOoZ6cqlSb9%2FwfPh4MMGvoL4GOqUBkVDCFuP%2F7FncK8blwxQ5AdvH6rsnYRV7ODXFUPtRwHzzPxuOi7N%2F3ycuBbcIXU7xltUsauMzOjcsm7l%2BAAeLEfNLg3kNRCVsbNatfVz7smuXzJeAa1JpNwpWa9FcrIGgHHNV99KBLeMa%2BS2EBQaIBUVmki7gFjA0Na5eERhZ%2BFBIyfjBsghACwQAy60va1ynLatN0U9c9iTI5xPI%2BermSJBQ9Ifc&X-Amz-Signature=36898b55cd4a146ba86f8b8b5a105b84554e94a98d80ab4b9d9fddf2a6466e22&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SYG5NL%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJKgPUzJ2bkBUrL5xNX1ZyrmgtCAAyfAEsQsnjrbbkwAiAVMudx1AVRlKEzDizqJ4o4ULr31CN%2B1BtsXcA9QB6fQir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMhkah6SjnAJZ%2BVuLEKtwDGIuqCTOIQwuOVzBpAOGbKhjpkpcloVPiPqDLj%2FdX2OAHSsHUBfuO9I0uGBBrzfdejh%2BHK6vEAZrEKO8498hCzxKWZlJyWH87G426LtBz2AWIqtAeqVYhEVeOZpp9tuvE05F0Tq9C9qYa0ToCvxTZ9qqIey4NbBQ%2BP5JwMO9%2Bs4Kls3%2BCTy3ljGTP49FoU590w%2BFVB%2BBNwjg%2BoLLQccOP2MMv8r%2BWRrrrW5Xr2m9Z5h310AV1XfER%2Fn6TjF7f45aSR0XdQZEpLrLEnSuaq5jPrvfi4V5rwWaJNhZvWFczbASUZ9QNCIqoYL0ixtZey%2BtQ9MTePg7bSWBK1PG3w1%2BFHfhFpOKuVGZ6%2FBXzWm8mSB0aucPlwrNv152lZ5Pt0mU2LogaMA8%2B7jy2c2oljM06wBCW6Rbqk78TAD2W2KqvfWE7uu%2B17V4ge%2FqCTEGpjnn3jYhIvgFY7JLr9FpiBVXNhkcKcosVH9najeJ8lR915N8JhSdViGLE8BdzAqR0hN5I7V5GzbtLN1uHGu5Tkb62%2F%2B8Es7%2Bx5ubyekhzEBrEtQCk%2BQ%2FWdwANsrjHAxQC69N5WsljUFxHfkFiINkAXeNKoqiU1nfpSpNCa1A7fFHWol3gz%2FRGhnJgIEMmjc4wwq%2BgvgY6pgGZdH%2F4GBEKVUv05dDL1g2PgMd2OesPHIErwEkYZ0vEiaJ%2BzYtaj4ATe8MtLXcP6gNi2%2BLca3ZChvBIUbBs5wClHurdFK1QzEz28YFaVDp3ItWrxeLN3YEQHfcSDVCYLLGCxGJdTzf3%2BVz6Io35cByA%2FvCZE2KdocmD4qAkLdKAe7pC2fSTIlOBwKHPrHmF0c9%2Bkx2rTFmwlgFdqO1aeytFzdESiIdB&X-Amz-Signature=9872c1bcdba18c5e0077cb9cce34dbaf74e854fba6d32d7bb999eb2dcf6c6498&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
