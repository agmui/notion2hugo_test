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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLZ5KWKY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHkZGV9C0gHCPFc%2BkbPxUgHdW1sUCNevncR9liA69zp%2FAiBT%2FCCaNhqQrzHyJR53qNtKqYOwR9O6MeFrQ4ORWa5e4ir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM8cssvUPdugBC3uKeKtwDBMLlfHFtvflpjKFQES78qkR5SQeC0Hh7N6t0ZNC5xMVh0%2B9hlXtabbi9uUueIjvuQBBk%2B0tGXQ3duGsLyq3FDHRHA8prYGYx6ZR9K1CwXnkYCcw11QyLZqPImNIzdPsfna6SNlI4fdxMGSXNeJem1TwqEmamGidPFXOddZX2iU73hmF4b9jDx0fFnwTNFdkJK64GekZxatzk%2BLuMX81%2Fvf8BOtxw%2BSmyQxCzYaucjWSlWEDxFA8QnK4S9zQPQWN7WYi0LxvkeYSbgJxoHmRscbsiqQz%2BtJDlS5YBgZMcHgPk%2Bi6C8lgb7bvrcZ9xsz3ckK5z%2Bs3XjuioJhc34H2qObtIZeAbtBiJJ0xuQvmBtF2%2FGIbXNEMLWJKndqcM0JiE%2B%2FEgropojy7B%2BvJGlftJlGnARnPsQ7fKZpoZPuXcPny29iCx0VLsnghsqji60t%2BY1xxdVi3RBXAgJIE9UoRV%2BLh4ADQbAXVdtNVQNSbJZGGyudcIE73abhBS66VhHyN1rNWS%2F8z%2F163ENrnLIC5VVFAH%2Blfd5QB8OYSmQlnt92Mi1LPBLAcOVVlNbcZ%2B0mqBATke6kUX5E9gUSFKKX4pRLMhmYBaM0YxkXq5FBctwjV8aCkrg0okuK9Fv0Ywsd%2BcvwY6pgF7Qz%2Btf9B1dvmX6dIES0RPpU41xTDXIma8m8dM7DAfzwmDbNVhmelRo96kfi8qjgbYQBlPKUmH4VYxWPSUguvg9NU9y7kHKM1HVQhPiurvFX%2FqNWEfsFjaeo2IwKEJ16PnoA0TBj9VmoY9QHPFYcSE2biUdavvEDrC%2FPHh%2FD48lYxDGofLHt7l9BhuAoVmdIYKBa2K3EiJ%2FgKtgNwkCsbf6511j6ZB&X-Amz-Signature=a58170b162c5813a9276f3ba4f6edaa9080303125113e3560281433e0ddb9482&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4K2XICC%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDXbq2KmoGqjDxCmX9vbYw7LOv5GltZ%2F8wHqll2FtbgvQIgM66YvsAPrAhB%2BKtuP509HWkXPKWBUWjdM5CZVL64f1Aq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDJUYyl%2B0n12OAawO0yrcA9eSYfCXdNExCSXuqMhUvk2on%2F207vmCm211dCGcuKA%2BE%2BbLjIz3eHh8ESPoqUc1BBdp7P%2Bh5I7vzfFqQ8nUMr5bJgwGOsv%2BcLVWMKltcoPWGs98BtMkR65D26EG9F1HGTGY%2FPj0uuex0%2BpLQjy6XHYGABqupRUkY03%2FN1k0Dc3A96EIVN8KTw5IWeagyJ%2FxQPS3Eh0%2BNXVNdKEI%2FQNEw9SOnqlTFrcCOXm4BUhsTmYefnINmkFcGUh9XxpnTT0S2EHRW2J4O5cfPA%2F%2FiH4GRLv5q7NhZOYRI%2B9pLQnglrC9TqJom1EmJ7Oicy4aAPLjJGTlkqXu9gAxKwTkxR%2BvNuCfO%2BPwwvQTdBAmAxxAFbEcnj20yzqcTS5ptAd2%2FO1HKtXjVZ6WTKLn1%2FEXzIQmqtQS5T9av6os6z9MzRosCly7N6054ORgesc%2B%2Fl53wiuI8rl2e5o%2BZqZMkL9gvmFaeEMKev8lD6uBqDyb4jfZrFWjR7PLF8X0uR7hpi6orO3hrWmYRiU3zUyoUJJxoqcgEcdk8S96u4AYsOBMECWSx5VfatYaSHNvlzSC04Dke%2Bmc49LMSsgLmniJ7FNS%2FNbzdojtdWKSu368vkuZCZhTq4MwqRtE%2FY3vpKFcRSnlMMf6nL8GOqUBJCACMVxei%2Bf0ThF%2BkPVzZGhqmvvmDBTClr311Q%2B%2FDEI8G5cv8MRoZOBwovpUY56tljTVrFnJTddyz5o9AiSYbq9zK7PPvA96x9m3iMkFvvzqmboAVFwIWmiEMKQVpXXu%2FmAF23i1zXhD7mrHfn87%2F%2B8bgporLc4F4XKrIUwZOZ45GhXaJOABsOHx3dsslj3BAL1A81FDKEPahTU2VH52d%2BC6CE1s&X-Amz-Signature=d2b5ba962d164ce88e023efbbd59bcad0a1dea99b7aa26661f08889751a8fe7f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
