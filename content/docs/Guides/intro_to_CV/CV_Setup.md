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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7AU5OAH%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCesbrxVyOEnYds1MDfRObm%2FDA4uQiwbOfHXB%2Bd%2BJs0kAIgHM%2Fcb9N1kJC5krkqSg0L0EYA9NjVnlGkFCeoxknpFaAqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFQoWuhc%2B9RiMJMiircA5qntsqESZ3L7eKKYfPfKk3fyZXDaDwDrEgLMRrM2zaGTOOYos8pxb6ov9bLKQs32STKeeJFNooAhMLA6PDAYPFvxzBR5fFUwgzOLxk8cM94wuKMlZhGXIli9n5LLqlJHVqX%2BBcXGPYxZNywloq29R5OH%2BnCaFf8xQeYiX2jUbXdofy8BYeuC%2F9vR9i%2BMtXpvqnVLnwpmOz7B7HIDIx1uK7RuEQgu1oUHewNGXJZ2gt%2BrNkMJdOte9Jo73vNJUZOm%2FsQAXY49sR1aipG84KdDB5asJi7zULeiXVDWp6nQJCO6xRWLej%2BI0EXdGaIWx2pvOnvRlMjcjwT9PMCGbVlZEAfm8J%2FrfTY5faecbXlasQrjQoFoZQKhKKWSRctgl8K7BFEaFqpAH1KmsJ0c%2BcpnDyAj8i7JAogkRlrXvkwLFv7yVHRUck0g9mLhMYRoEjtYcXn1sJB53wTY%2FH4dqxFP0xLMqthY7uDj8GM2DC3eeum3zGuMbiKPGtrQbLOv7U%2BMM8t2xU7J%2BJ%2F%2B%2FBM000Pap20eLy%2Fz18wzQIuFRGg7Rj3QE3nKWjnVQANhDBGCmzR138Gg30RevM%2FHSzF2YqmZJah5CY5Ii4jwl%2Fea%2Bg2Xw3njn9pKlJKCcYj6jdvMNiLiL4GOqUBC9C4OlsO0PnfqBsgPiFvw6KkNVcyimXKBDV0bfaWUSfpkxMlvYrodkkb8LKO%2Fcq2LsngIBBbqyUWYtAEm1o4Tv%2BdGYY1pBIblo2%2BeH056yoKAcIzW4kuLMEhrJqkcD1J%2FsUDhQ4TDWstLP6B9g3qqS9a2qpnhbC0duVwUmH2BvJyvswRF2g0y45jjjX6UFp%2F%2FKMjTA6YHZjtptsKXjzCep%2FONq2H&X-Amz-Signature=a9424a2a9fe1d1b8df07847a66610fe845f9c06a9f5c8aec003d65a44f6b00b0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LWFL5XU%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGsmGph8h8vz9uKyKjdwWi7gl93Pzy%2BJG7iCkz3Gf17EAiEAtlFoNKrW6%2F3augOTdwvsZ1eDAMRo%2F62eQZZkXOiS4wIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzGtbk%2FgtUR%2BmtCmSrcA%2FGKlhZRKkKahaPlWUmSsx5wbAwTrFRJDzp%2BsmterdNiN%2BFqC4%2BXAZQVhjpwlT6uDdWsGOqiM%2FpunAEeDbw9LX3mPpyWujofldjk9CI6RxDZo%2BtSJeuAUx%2BbbkveGk9f4M0NyQSTsse6V8JGFLDpmeHtEpG80ux%2Bs1t7%2BtBtVNQ12A6YzQf6daMPXbzo0gsvRVhUvkLhkn%2BvFWrB6y1vJGZ81Bz7d40NaIqPPIn1JkucMNmMIzoKhd88r6dWJGWAUZTCTcXMiifsZBYN1YsVLjSIT5qozGL5DPbGG0K7sCaKCxww6CwEfzJrT%2BvkRpkFuX0P6k3HKESv3jK3Qds%2BVKM%2B%2BnUKXYzr0mBB41qnO1xvO3qPo619oCt%2BGnmvpP3%2F5gYWw4rAixN4%2FSaD8%2FkNq5ClQZNZnK8pycwszETak%2B%2BdguufZFtCOhkbY6VVxtL7pNBWYzH9AyjLCMymAOSx76uuViRtD4VabuUoOB%2F511j8UefiiLGCzr2qVAoAwj%2BZwvRfN0vrqrxRxHxWoO9z04IO6gHQWxI1%2FBzQ0p%2FY%2ByawJid53%2Bx88Eeedvx4KrSq%2Ft6JWoCXtNbqvarmC%2BwT3rybqki5eVUyYQaho3mHvnVCVJ68aRT%2BpkO3YO6%2BMOiLiL4GOqUBx7AsilvGwB6nNcsQ4E6QhGGcnwCqU0EuQ77JwBUMBZs%2BBmqnPvBucmINH17Xjf3JNtzTypGEXaGtREm5tDrW%2F%2BmP%2B28k1BMd2qCEOCJXwkM2PWjZ5bNdmypOnWX9MaHhGtq5KidT66rwZ9nEwLyzrJuV%2FasX4wIU6qgWjbn3DZ6jnrenmcrph1EnMYQquvIZu8DL7cfUeWCjAg1ka0NMW4i8cRqQ&X-Amz-Signature=f3a5cf898d123f761db1e077ac52b87345c54463c5f52f6dd53c7474159787a5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
