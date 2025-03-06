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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKZZPLTH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0ka%2Fg8rUlJPZSTWLvd7Yql21NQUFFNcFgvMlbey4eYAiEA2FNOGpBt7hufNhYey3Eo%2BTEiV7bjjNcPsaN%2BH4MGk9Uq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMmeztJ2fch6f57bGCrcA72j6lmgH2EXT8RKfgyVQe%2FiRW7f063ik%2B1BM9ZKgfIORPMi2RqNu6SBeQ7EL%2FOzI0Xoi16ytxf%2Ba1deX%2FRZls6Ti36FFj9TmVnySIi%2F0SmRvTbsv4gBOBytoDR3NOkm6PyQfcqUaRnwO7h9j6g5TcNuUmmPV6Y8KNXfzpMAfOthjf9f1bG2I4r0toH1sWDInf6myulJiovf%2BC%2BSWD8eKuigNZ%2F8s59MKn3C6TdsHxlfqy13rpiLLkg8CHQKKAHchINnAPtDT1rmSiLiGmo0fw38HmTYTdzlknTUJAY2J2oXd8DZYNalFy3AUhOhMymz4NTYrU0689ILgthE03UFlo87jg2lpk%2FQloH3shdc%2FnIddm10zo%2FEL7KmfWuCpGJ%2BZ0049tr673UvyCdFwwJFn80RBFcaNnGK2yznHlG4Fyz2JQJzinYDJyxkaR0dI5i7Y%2B6PllzoRT51SQVwMuQgmiMnBnOtTN3580TVPcYodtKzEqhFU%2BiluxANOugzcQ6DymWLhW7p9zz%2BBkRLYtwGYxXsdFiJABOHEYDLzLOJi8rR1F5IuT2ZGXgnwogon2uYBusPZKrkpfs%2FQonOZzwyfwM5XQJOf2QiiQJbJX1zN70Ko%2B%2B50PmTKFlO06%2B7MJuWpb4GOqUB%2Bl2%2BZNl0YY0muIt4GaxC7TT5dcoae65JNBcfkIVGQJY9LZxQ4uq5z4IJ76yktYs42L0OuEcShRqSMmC84Jqxhy2zODOUxNhqG9IUWjNpv99AT%2FhAj1XRr69iA%2BofCPQYws0V0MEkPJyPGhn8MKpqhisP%2B9%2F%2Bh6qXdesFirwWzKp058xly2HlB7GfmnMcID259DFOZy2%2B8u1YJ4ZHdVBZk5jWfT1m&X-Amz-Signature=ca922d35a54bee93912cae3ce59d2cf8d9d87f9b7ba906ba6e3a19d76a361dc3&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PBE7KX3%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnDLihc0jQ1BL6SdHsqsIAt1Xf%2B0iOPNNx9Ebao02sAAIhAIgH%2FSZQCep%2FwXN4v9bBIqnwD9GOcfyEjxeCP9o79T7WKv8DCCgQABoMNjM3NDIzMTgzODA1IgyrXqeZWaelPMtXlOcq3APNmxgKhE%2BTQZjJbBwQLcR4%2FuOTz1Y5SH9ZQ2OaTnIEnwcyWzDZP2Atg89KIdNn4ddKKOkD7UUsurFncmSjYQUySoD%2Bf0YYV4rdPJelqZadHFR7PJJW5VCNHTeBQdsd9b%2BGVrLdeVUj0ILOPJvX7v4NiETR8RGTPqQZUY%2BWUDZ5cE3HnudZhiSym61%2Fs4gn%2FwlG3%2Bq6A2p8BdnYCsnO3RcSBUWBmp3AdbGDz2l6cWV81YdyKrPU4gyVeUiTfELW0YQUSP0RDJW5QWv3D9HloTS42VOU7LB23Dr4kgEcAv%2FM%2Bbi0ymlT2SuEHdbTuMU2EnH%2FkbiecL9IAY8IJa7B%2B%2F6Wlxt4raS1XiZjFfsnq%2Fu4fmzEH1zN9RC7DAxtIgpcuEkCkupo1gVfBw0fMFzZESB21TDWS6fnjCoyS6QhAkYAvbnESxSdcLBgJNSSjz6dgTjIE%2BmYavkF6Md74RdDDdZtL4YvB2u3sDdbageJcVyiiiLgWOWXcXhs5TmoTLZZ78uWsiD3VidOrEp2VDtUZKHwB88T9F3fCcSo%2F2oF%2BVbWwKXw%2BAHyXK1XLzabFSgFCDPEkb5BcSFD9EfcJLSODr676ZdY%2B2NSNSqloZQ4ld3KWVcz%2B8Cjl8EgNmAt%2BzCnlqW%2BBjqkAU654CWeU1eVu7oj8zRJyfgf%2FAEZTcsxzVkoyX%2Bpa1XHck8nzvUkGUqZg6k42EXBwHUzUnKxeDeflcDK4jIzI85B%2FK2cbTjVguwvbxf7kfQWzWLiQ2Qdd7vEm0ZITRosEiJ%2FET1aDwloXJqF6qsX3pL9AJBxrHPZ0zaWhpXwWTaGb5%2FnVVS0P5YZNzU5YOGoWNX6oP0QC4RrklkhSh88YMk6Zm5z&X-Amz-Signature=64ec8ffca06be205f3a78510f3544c71680449bf9df8a2b3fa9cbc396e57b700&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
