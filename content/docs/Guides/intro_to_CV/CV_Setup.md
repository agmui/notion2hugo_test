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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YTALHM5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIEZqp0xmCnjVYn3Mw1wCdrSNpllFVQZWLFL68FcMhrbCAiEAkTBrRiG3%2Bl7GtqIaRHSolya1C%2B4NAmcAWeajy2MHWTwqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqF2%2F1dLjzARPwotyrcA8C%2Bp%2B0W7dG7bAxiFSimQvBuF9TtOOc%2B87gm4jbhWXAB82sH2Xj7w4it9ZoQ1i4KQuBh0jINu%2BlQajpKKSzUKcvJeRAFzkVMt8YjA8FSiHadkybs44yEEJ9BvhxY4BpYhLQdQeSwsRncQYWCocq%2FcuVGUj4Z44X6OS%2BCxYFrxZ%2BfBWZHjGc3OBpX18kO%2B4YhW25q1YC9nOO0A4fd8xiL%2BprbvYaA50evESlwzlwRM8aSX4PTdcGwITwsK9LKTTiNz7v7xM%2BkcXTTHziQFXk6OyY4T2ahf9KrlUEMAyVw64Lv%2Fr%2BHNA%2FOLTp0OsxKVTqnLK6AKveI2JHGC9oRKLfpzd%2BD7vKdy4I%2BmSaOtga9Ncjyc6YellZovB1lILQhsD1xZF2YU84q9p9VSst%2BK5bpnIefLnhaK8jZSlKINr5ucv5884zwxqlZWXDdVZi62TcWP0uAFqoV5D9ihssJZmsFdBnM9Hta%2BJ%2FnJsanT73Mosq%2BiR2sN6UeCrxiCFTz03ZKH7tmWnBxqp24iyrlyFQ7AiEqWZohXwoXTFclErneAfr%2FyLF3ULD2fGyQUcm8OoJ%2BLAz6fouVBx85EHkDqSWoeaOfNvCGBknK1Ah9qVDELg8dmlnnjKRUmtxd08hGMIeWhMEGOqUBeleu0NZd0lA0zagzsHb9b59Ih3616L%2BxBnZ%2FQqo1bUVlY5bk2k4K%2FKORKcjQ9uz7hx5ymtrnFJOoOHh2AIb%2Fib6kVp58OKV%2F0P%2FmaqzWgX0LjOhP1vwUx4Ba3t%2FR4wnVjJRWamRJuNig8tmTxABXP%2F6%2BqSoFMj3VGc%2FFQLxkdoTvVjtCq9fnxVhsUUPK3WO8QYiUHTQR1JuUTlurOH5ydW2AJro%2B&X-Amz-Signature=dd230031886586211130f8e36a36c3bdd6ef8a7298a42efe5031d4569309c24c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFXDFIP3%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCeIhxNqfOpKlC9p850nuH6wGjLlJ0uBTWeArtvyTmQzgIgUn3wls4%2B%2FxMi6Lnsr%2BtP75g9N3D7AXpWttiTX%2BdKFEAqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEp8ShJqnEDRlcpEvyrcA7WNfK%2BKYBKiuiw8UDWvP1%2Bo5cI33rM%2BgGjQzm1yeh48ZUop8rc%2B%2BYGi9oo0g27Kduxk9fC7DZ5VQgKoC2%2Flk24gsFpkpQfmIsiHKEab7P1FSXucsOsyjcLn8l3ADOV0k3xK21VJ99Ypfquid5rb9qCBMzZwNDCU2rl0ZOsxgvncuoTZRc811PzILDyB%2F1DOl0oSFRXCAJg8VENnyuBD6KWLBcU6tGOCABsYGPrcyH%2Fx9wrKo4HUn1DmvbLqEN4nBzznFdEByMdeXUp1oclTHLZqUgPkxzW2NV46YopU23V5e3TSqdqTdzCCqRpztVLAWN4z1FNA8ZE43n%2FscOy6fsFniv0Gt%2F%2Fobnr5N8c4uJ4reCzaBXhR4oQJ0oTj4l6Gpiws7miZHTheJ34rldZiqRiOJ%2Fu7s48hzFvBP8a2BWmF2klGjZi%2B8UkqTSTs5u1jlM592B4grltXXSaIysofUrialZAKYtRsUNOUY0KlPeP165ckQfFjKOzQYjPXwkVB9kIZdchNtohSEFXBBzI031wCdI7X%2F1OOaliD%2Fuwn2J%2FBX80BjRXce62P2VVdzYpnxg%2FTeUwjzHurhEt%2FIwEG1OFNpXbs%2FrKS9gD0z0uUjCs%2Bl2vxQs1p%2B9AGm2v%2FMJmWhMEGOqUB4ApuSGdGx0AaCwIuPmIqPJBzZ692JcYM3P5NW4ZjvjHYMGMrOy2Y2Xx%2BJ%2FJ597XqiYTWJeJmNYg3orF292PviTkkYjGiZlXwxxu4o5b7ZBG%2Ba53TJWa0GRxxbJ8xmVESv%2BhvXGH4lySZrz7%2BtJhNhk5vFEdwL8ybjxBFkGWaSYDlS2iDOkVs4JXUBvNZ8NUcc8OCFuvvch0C6KCvOSfYgnllD0RE&X-Amz-Signature=f0d905aac9dccac30f7406c35f0a563c6d9dc5acc11602af2c0dcd9890fb01d6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
