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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3T3CHNS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQkpQsIS5X%2B%2BYMLUno6%2FP0R4RsgHUgPmfEiXlhLyUgzAiAFk6Wz7ICRWXMt2rhvlJOeDVXJeKCoJv9MYbOWfSUZgCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMkRO4hkRzYytrcFXYKtwDD8sJvTQ9dPkCD%2BegjLx4db9pRA5ipYzbi0aVJTx23xFdvzpAFmfCoUTwM0RifXFV5%2FSOXVDaI9Ar53Da1UR%2B8BYBBiUY5nEXDUToKASXp1ktpt%2FfhpP5DOgPjQwbEfrd%2B86z5jWqt1yAlNkNPn6ZKkFzVdnuBMMxffOjFYFuTqLjQaz%2BKQxNqG99m%2BE24w7xCX1IixoSi70D5mgjlVAbS%2FDyPwsnUlJ%2BRpcJrGFt48UugxACA4TlHx8fSFfKv8P1HsOe9FyJlPQAsns6fD%2FTvsBqutIKmh7uz92n3wcE%2FynJxdATKzEFGgsOLCtMgmH%2BKvonS9VvUCxIvwRdKzoQMGzuUAaE9Q3cXL3p9WmLFr3cfhV6tsa2qV2TH4VGQt8JuoupZd%2BCpSmEd9gZOJ51%2FrOgmVIiF3yuX39SVGi1xc%2F%2Fbc%2Bqt6YRsbhVynXec7k32aXvT%2FFnPiptY6an8ccVWtF1F8IYRcKnlekhQkdmU4k0zb%2BmPOKJpbhVHOscT%2BHbL8tr5I4CLnd5sVnadU4HW3dgfjRPZPsQQkBUFsrUFq3l0myvHm%2FWbWJ%2B%2F28g%2BAf4apzuLpJmqz0S4RNH4g%2B8fFi8Vi2R2hoAg%2BZVIkaK9%2Bp3Fe0oihGBfEsADmww3O%2B2xAY6pgHzJA%2FADzt30jKA2EHZ8s9KsLxMQcvSjfgjTQbjYBDpn0SoECuLieIHcl82aKzOoeH1d5%2BgBkCAXYk9gzqKBh1oFoRsShdCs3VSzIaNvJHo8gvbzuhj7S0AVcGBwWJqioyqZAHxy3oqasdzHrzusQVby31njdOgnGnGPLHlT84JhWKm1Iq3op3Bd13uAyVyx2Q7GU1xxou7Os0NCRhXQXbPwgxvFlNZ&X-Amz-Signature=d883c595207b8238a174072b85e7d55034ed1e5b80776433cf01f55aee793856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4DUAA3A%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP44HvVQ0asSuvQwKhy%2BJZ2frugfoZoLD18ojBZRzbqgIhAIzdaf0rBmvlaZPDphOxKYw%2BZu6mgy6NgdXA8CR35JPFKv8DCBAQABoMNjM3NDIzMTgzODA1IgxCMICU4vHsnPigsr8q3AOaPYzoLJ6vnFNH0Vh8Sd%2BnPhFqQ53MooUKAtc9lTUs9AwAa97w6joHkVU36c9PmhNwYLLmWPUCbj7tRwK71mzzAi0vnb1OLF1S1dCH3AGCNHGjX%2FSYwBkTqppp8emCp%2BCwpDSB9d%2BHDlZDQ3qPU%2BHf26NsywH6dgqdTK5NKWlJqNbb%2BKxW2FxNn4KOTz6VPAuU99npGXOYJuz8ijYKoJqkU4Wh7VBZ%2B8rh0mQ0UfPWdCQ9Otegb5LgxvZNHHta3mWEo6x4mTb7Q4I02r5QZMwvUmKqUvFZGCXL9SgalJj0mPbAGqiSl0dgXjx7%2FY6Mlg5QPWUJazkA9j3Rj53efb1KQNoiPISmhqOPBTZiIqwF7MH1JZqq2LIyp7%2FRERUX5TcCt%2FBy9yylI8ekPJ8LKXj6rRlv89%2Fp0u3fcrasbK8inwk89OCM2NqQoTDOV6KhFgbYKjpoHcWZ7XefeR3kUi4Y52Q%2BaDiq5i0aTxpVj%2Bz3bqpjmXVYV0efSozH4oqmgB24ZT00UJdWp3O0VSZopN461m6qrgaa5zfnvGR6kC2OmbMcDFiwWAtmPgvdv%2FEWyN%2FCR%2F%2B%2BDg4UdUhFzyt4uOqGNX4xn03SDW2VLTH0zvzgcO7%2BmgzQxLy00VX%2BUTD977bEBjqkAVMFo1X%2BaqIsmHw%2BNmldGaHoQMJtAhYUiiDptEaGLbg6Zq%2B%2B8VPgt43hd2mJKA6yWGZUdz2rmMk%2BzXPaLjetU0%2BAbbtNKlyD5pFJ8p%2F958RtGn3ODg22IOwxALxKD4%2FiSZSGQ74adxIeuFEz2H9AJntvBwykprshp%2BqFhg69IcbNMXy669DrrGIZfuBnuMb23FefHylcfyzyJP3n3UwneMQcDql0&X-Amz-Signature=089326ec71805a214c2350dcd93789f0723377e9e834c092efd32abd9bb59406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
