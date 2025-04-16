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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z4KWKGE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BgSCrMEojTAYAkJ7AAknx6aW2GiXoc%2BUw3xOcK%2Fvz7AiEAtpq2IHttxRPoa%2Bypa033xwTjNF7UO%2FDybO95O5oJFdwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHbUG4whQanwynX2hCrcA4rPCtl2pTdqfhsO5DGAUCc1mw5gHwWuc%2FbBT0Q5%2BqT2rWvrVledk3YhzZehcdA%2FCmteiQjEmrVmLNhFSIqQG8AC7NVKhZddEfJHhGQ6ujCcszYUOLudCixZrbmD1FR9s2hm90QG61bqyVnB%2Bi8lFCEBQ2U5wo4PUnB2gExjcVsRXfgvliKdPGZNUstbCOqMKNRCYW7x8nxc920yu3TYDEC%2B2I1G4p8z1hJ1jDuImmKO086llUhXIkiPVK8mqRWihbCPX6%2BIdUZw7uL%2FMaqlnAdsmt8MWms9KtczPP9RvwtB91%2F%2BDL15KduvgPnIHTFdkQlavUiCplefhzbdBbJf6xsFs2tXaGU9buo5Ao%2FPOxsyjkb9ysBOpRZn3UOWGvkmCBnDSYEekNfzm53Uqdz5HT0Ht35n1pwqJn9sB%2FPJlTEnmSp7im%2FGEnWQmS09h1ysdpL%2B9Jw18Y4sLYE0aGszIHk0K6AwfiPkyxgcQk3C%2B21SHCjORJ5Cl469dKcZzmANjm41Z8k4EB70CnppDupXzrz1%2BbjJiHLY6CMsEqVRPrpjunE8ZKyqx6csgC0biEWiANBYad1UjwD8ntzZYevm270AsNWA02ZBibGGf%2BaIuHT4El%2FSiKKZ9zqzFOHiMOju%2B78GOqUBvxkSorjRx%2BjPS06kqYFFjoeITAdbUsoVAk2Yqh0VNWTQZGdCWszUWXAie%2F4m%2FOUlUbQXagZcXwVl5BKavVbcGjdl7tG6owvHeeUQRo1jmi5WWPgvNGt6t05zTJRNpPtbEunlCHEJQKTrlqF33PSjZG1FF3bZUfh5zlRRlPncE6tkaVFExryt2%2FwUhmoFWszD%2FmojwMVxyTzvXzrYo00%2B1169ZgEM&X-Amz-Signature=7366ff0d44b694c4593213d3ba7bf9501d7529ef459bc7f1a745ba13a3a92f49&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEBU4DI%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrB%2BDUeb7E34%2F4qa1JYRALANOP20ww2y0Kb8kCEtgYZQIhAJkKu9S01MWNqoDX667R9%2B%2BU5xbaADs5d42ouApIRTxfKv8DCDkQABoMNjM3NDIzMTgzODA1Igw32F995%2BxNYLmhRaoq3APVjVItFww3xUv2DMN0i8f%2FdKj79dvB%2FgXfljG92%2BSSVYdh44VcYpRCqDUDzBXdSMIkzkNfZ3jS9a9jdg2HBfgJbOGr85rih5yfGQ3BTXTrr4Ir50Tb%2FJVl8rM11IfeJAsH2fTxYLh%2FXyJnBMWfgPFNdqE9OwZFFZKlQN8Qp8f%2Fa0n4vK%2BORpjdOHHzSIuTz0OPwdji6DQ2vzOT4G4lcZe7nzRyPK8k9iBJYukUZkdQ6gCx7GMU3ag1bQlgJfSXYmZqlASpxRMakuVoOdkFCHYZC%2BfNAJHPJLezwCCjwYSWICBZa79hp9WHNO5XqLREe57V5cR%2F3zmNVDsfkCeJ%2FOMrUEZk2p3SPdRJrGLbJkAOUZUP1Vb6SZmRBhAtEn%2FgHSKoPib%2B5nDpOgxKeDtb0K0T9sbipivPVFcFEiMQcGL2txCmgOKCD4jJZFGR43kZ85TxuPD1pOKoXGH6Tw1BIVgGvL9%2FvMeYQhHABqGw8zQMPh6I2LSVBqVnfZsVfYdDWeuDcOrjKfzAOJ36Eu6EMMdhPdF9YKA%2BPywpQhhfWrtRzDvY39AngbmoOZSyWJK8W04OW%2Be5pQfckeP1aqYyTa4cBQ3pThMfBh4AkF6l1sVVipj4lowpxOBPQQMlGDCa7%2Fu%2FBjqkAeFumhJ5WiF2Ahyg4wHLDKl%2BhInnxosXPhQ4lWUjpdp1bN5ovS6mDNwAmqvhu7B%2FdEPjSNRQA3DCmz%2BJlPMHOQ5etduA7jUknZNKHwbUlw%2F3gKepEMwoUqYyqf5OFUjayBjv0WcF6Z39DWU2CxpWarYBnU6mmgMVKyFRWmOkAIlsJgxEO%2BjIs%2Bh9pTnobxQacLLHdbCvM1I2tujL%2B3HBIsfGMdVi&X-Amz-Signature=931e5a1900a3ecd7de856c8daa79a5876fc08045c7eadb13ea6620bf4dfaf798&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
