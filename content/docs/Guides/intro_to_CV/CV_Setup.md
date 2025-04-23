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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EPXHFT4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDILaEjfaN5We6oIWNIme1w6mxP8aTCmPkGHcYojuNpLQIhAMVLyMZMMKXRFraYe%2F3FVRNY6KOladX1%2BjxL5Y4ZYBjrKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl7xzNc2FqyLRfJEYq3APGIPq4AWJhMeml1DmTEPheXPnspxO7eEIu7gejYWlVuz2nOnAJiWomnzSbpjzTe7BTtu4%2Bke1IdkTQ0NU%2BiQLdp9VsHBDHLYv6eDJ8dVTbl%2FD3BA7YuDxNqLn4SM4dB58n1LhbowyZyOX%2F5UtTIsowMrZO4RuGORebMdLeLA5NGWQc46u1IfgNlTO5oak7QJPAVFkD4ONQnT%2FRMnozagHCHQoNKq2tDFsrzXPXwFZ01dDknzLZjmYqIlA%2FmfxLKN0Az15zTCwxlq%2FD2hw7cqrNO41By5LgIQVcl7Oy%2FVv22MSvWbLtYa1PCr%2B7qAkeOCWKKjp2ZJihqRpXJF0L49S11pKrtusS0dDM13HBGuf7f64v7GYgqeSyx0eYKoNXPOoCmZ4NFjWhCEzdfbQwsVUcgxpiQRkIU9L4ErR3ybMD0cBdE6ONSTl5LsX0zWKigyUritXgNrrZJ3vzNZb4nsab%2FLywgKjH%2BR3OZNWwVz5O3kJlBzpgwHT04nzfJCdX%2FwBzYN0vvHcr85a8gRL%2BCsUNeBfjw1G7PkzeT%2BkFXzZdxWLzLn0RFGsFnW%2Fg%2BuidyXearZCsnt2fFr%2Bad4MMmHYAv0GdxtLxgb7QeazjFocsx37Kmmd87n1%2FNWTd0TCd9KTABjqkAX5TrjT9OvgpBmmn%2FScLS7FwMpgJuWdD6XjaQQracBmI34sxGLcbdqGzJH%2BVUXdmiN%2B6JdqoJfGf3zR8s2LNm%2BigiiORNtlRd1YLGwKjvsn20cUVxEWYp9r7zikrwn5RCs4fdGDodAjfudKa0TUSfaL4tOowqoXtT%2BTGrtWa4pVncHdNOqeWsXUycVspQPauzV1NZ0x1%2FMcJvrlehQ72v%2Fre2cb8&X-Amz-Signature=efe7a92d2212953ab5e1c16ea34c87403e86aad050f8037a96527763eaf19b2a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HT6LLJZ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCID%2BLwrURNxOIzUNRzJuzx3oh1D8t3xIRSo1MalsHNTXUAiBbi39E%2B0cawqHkMUvtVfJE3mdgs0VZ3n14bEwPf5J38SqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYMDtmViHCY%2FfbgcZKtwDc18Dob2Uy3Cczo8Ivhe%2Flhpnj%2BCDchp3kfDUd0%2FS7O8ybrbYAewDX9JwxMAtdK23ZvDolC4ZvCbqFmc662i2BMRbYY%2FHesomY%2B1wsJOiexi3eWC6laDxQFYErLFtd1JXJMrB8nzdAd6lziq5bJL3s1x%2BIUYnD5u3hv901HzbWr0tybq1c2esCiyI1sJsjNCtdSPeh%2BxSwFc%2BjZey1yw3qHMODredW%2FESw4F%2Bc%2BHYgrlHy2cpwoW0K5zUPjUPCEcOd%2FrZYHp7MgN%2Bzsjgr%2FvpdKufW%2FsyEzDRFFCHuL0A2zZoxoRLAJ1aP1OahyMiAQcVA0nY%2FseKRi7ve%2FeRYE0lQoYA31OGXS642biSQNN3%2Fl0v7Ztk%2BRxsXxOURimFR9mpLRKWcDx6%2Bq%2F4x0xKuY6qT0z1bv%2Buk%2BAzDuEyWXF48ozB2JNHAxEraBB9FVTxz1S%2BDzkPrVqpiWggRnsBVSV84jfBcUdkuueSN0j51bdrSb%2BibntOLcqI%2FlhKs5aibb%2FksZewm9O8q8ZwRGejExZF%2BX%2F%2FGjfO7zXq4DY%2Fpqa4b%2FM%2F1GeOaIPhXNl89TDtmJXE4WzK%2FjJDgvYyx3FlcmyXEy0agdHIzfWBcp5Aa0lsOigr1w7i2wAnuRTjLCcw9vOkwAY6pgHykPED5fEPaLLEw8%2FCUAZGKGZS2Vj4o1UWrW3P6bvFpKp%2FEuiyeDKx4e371bU7lrMWlfbss8CTUTHUIcFeTxEGX9tjIKsIKE9VWQd0PYBMEjksNq33nd8KkTqaiWg7U0IPkVKNCmEtPjv3JS8NBeaT5QKkJ5nvpxJRrUlgJ8eqjLN6j2FbaXhUlnoQYyouGvXmP299hQ%2F5tFQlsUNG8KUYz01RRnxA&X-Amz-Signature=877339609b513d430bebf0684914d3439e0f4b8380493ca07b6c78a702bf1a3d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
