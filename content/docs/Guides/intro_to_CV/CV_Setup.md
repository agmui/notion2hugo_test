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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQM2ZL5U%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnwgPAeHEA0N16bz4M2JU1xX82J1EVPCdyordD%2Fs8MAQIgH0Rp%2BA1A8ODy6j0ZIxRcJ6umjRkHfRZ8sqoZLktDu1gq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDWrrKDjXJeg47UGXCrcA%2F1ktJmk5M867BS1BDaVv5k0n4kEriebDiEfG3vOz%2BSJHtdK5rfQuI4gAWYV5dTPz%2FvtzCpDoWLyAp%2F6H7exkHtHEH8KN6fY1IGHJn6uJWX%2BAmYhD0GlMWBeApsD%2BGp55jEcIYvt0pZcBDog6nd4d2iymQiSFibV3KMGVjyXZeCE3HNhAXP4fOBZWrQeJ%2FcaOhfFWjydCyNQPWPhpgyW6y4BYic4zkeRldZP%2Fc7zC9uADfOEUfHidhLHDkbSL27n8WR7CrP2vJBK4MJV4dgt2DyW7q3weR6r9vGbd%2BQEBtDlbMz1%2B0xhkl%2BYEctgGqBZNbuI8Fnm%2F0Xvp6ADzyHpEzkaMIi1%2BVMozsLHXFEWsLZgLKtZnOEHBleT4pO36jE8hqjALUT5Ivu3sQpTRAV%2BWLMRRleGq9TnazDbVauYxhvp9tf9jpzwZxQ6sA0DqHamZH%2BN1H6CW2IeOfQ7qWzwhnmtFz2udAboB9H1Pz%2BqNnLMO6KZLhMwU02BayKsaZ%2F817GIrgbr5uI3s8DGwq8%2Fxpb5NZ7B4RIX904TzocTKX00AHBTFqWgBtIRu2FA5KC9uG7bkiIpDaUhckVT0lemOsihNrlIrA3%2BvWNqdwfY5rk5VlFkMdOzTCYZVHoiMKGQ9L8GOqUBvAtxlOdkhbd7Y9GbcoWDCvBq2hUN51PuwEKOKv5VWzZNIRiMa4xDcwot6am%2FULsD%2BCHUABvBg3NBqY98zaWdbkNMkVD9IynNjhj7N65b5PUQ9QnTJEU6J4Jo%2BT4Nv5mFrDXzxuZWSmw5btwx775r2tOOGbnXWJUDlqAv5Z4iKXQh5Fay0ph2mdRbn1UwFshlhztbMxlrKfGAQg1Jayr6d0r6NWwK&X-Amz-Signature=5fb2351308a82267a1ee628a08f4268d670b34e8b474163fa90a50a6623c15eb&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B2SOFPY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqnU%2BgBvAYgLWXIfn%2BIUQQaSktNYd%2BAXrWsofX3eoKtAiB0Qy2GHABaNe7VPG2M%2FrXhiQYvu%2B9bHIJ7Eha1zQeugSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMeKZgrLimHMDv8qH0KtwDYllFpgeiQhhfOW50aefPFu54yM94v8roDTJtqygK5ycFJ7iiGG11AkLfsuXIz6dFAG3rHkeD0kPJzlMFsvTtDBsg3yovK0qF3xUbmQpgrdFvTGR8O5ZqY6kcm5iHHGlfZxd%2FmqkxNs%2B88%2FX0bCIw2sKsORjOGiYc6HkNskIwOIoQbR9RKwkIzcKRnS61vcqb7i%2FVpfN6DRFklqvHu76fEc4RMKM12qMFUL709H%2FJJ65CeftXWrMScE6YvygIkjrMjWeX%2FOuikEG57yRH16py29o69g8UZ1jUZr7cEALGB4CQWrkMXE%2Bai1aXsSHurFScmJT6HkTi32kYi6XcydWsZcKy5rqLE3nEl%2Buibzb0FHQSMOm8%2FnFyWIS4dvWG7mvVKj3gGRKsc%2Fl17hrqIFmYWMPFvZM%2F884t0XxgHDks1BN6jVdbXf%2Bm3uXES%2FXniGcXNNTP6YHjCPx8pp3jTiWTnI8TuCPW5h%2BPRltHvdlD06XAJxyyJnDZ7mcrjHoMOXAcNrWIVZdsjdrUFNGFYKrlC3XXRXi0BNxuNgO4vWJdXo%2FNR12j8tny99VEgy3A7oS9PRaglP2h2xCAXi3kpePxLuRPUJVuPoIMieqj%2BBWpa%2FvPp4uQg4%2BaTs0Ps5kwn470vwY6pgHevv%2F9aYJ%2FvP5Q9zlRf6qGnCRSsqb8aCMWc04M6a1xHhg49IEwut1S%2FEOkvwCy0Sbrt12nohHPkHUr8iOY7Pxzxf3ypnxRPju2th%2F674zxe705%2BK5m2R1X8s7Rc0HQAqthoHOySD0z4o4kcpG1RuX6eENBF%2FNe3VGA0qQBgA0%2BeYb4iCGhPHYgdhmPPlg49GxUs0GBr76ApK%2Bououh4dXZYYfcHrs9&X-Amz-Signature=cc507b0c2733a2b65e3ee0dd710b256bba91be6031db0110052dac5d4e849cc7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
