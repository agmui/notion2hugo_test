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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5TLSBVU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCpVs5hs00rFU0t1i1qq9spE22udi1q6C6tlRML%2Fg3EmQIhALbb6Rvde0UQsIWHhOblIHplVna4QSvq8lGr6qGBFX4ZKv8DCG4QABoMNjM3NDIzMTgzODA1IgzUmmYZyG4Kw1wHqbcq3AP8e07gyrf%2FmUkr5JAQyAvuAQyICzHspXqVCj2JiI30idHD%2BL7hAG7nvYM7GtE6y%2FfYbgC2J0uaCN%2BWf5dtjM4ManAbOdtX0nrJLtE4TaIQ0LhMVUTZWR04OyNN%2Bq4lQNAFYAffTJIFl1zfHRWvg2VeZDwgGhKtmp37QT%2F4Hu34pHV9Yeh5U7c22bODXb7Ww7wG2tNqsFxl6Pg%2BJEmLaJL9q%2Fi%2FVi9IbX1i%2BISxA4MTM4Epl%2BvTJKgE5QJ7qZXpaOU9BN0rbyVZkfSCB5y%2BTpNkjP%2Ba%2B%2Ft%2Blvb4EkJJpRMsI6SvVyQZjXjArUHNlfzQbWBrRUqDNdxG19AgV7LpLD1fyT0tZ0UCiA8Gjgvthl696xTJ3DtBzWtZCV1OkpiusnuSC0z%2BwrsZEacK3wCOwCzL3RK%2F2ZbdIpy7EHkFSQ9dMbqSn2h5RGpNxKMs1Lp44g3QfNoKHmzmj2CCfXUvpL9shETSAv6xvtL3BlD1qg3afH0%2BJnOutIOdO1xRSy2xdMWEIaNzSAwqTcA0tmt3GcUQ8rMHSPMn4wpKyNn2eEv%2FlESqkJ%2FIeNkFWgG6JaMuzEbodS4cvggaPsYuduXvXKNgzQXvOlbafJP2ewWP%2BGRWlD%2BIxsVAIs8yNuuTtzDrpq3DBjqkAW0mrpW%2B66uc0qYA%2FyYtr0UCYjDfN4WJintiNgkrTwpWLLbBe9knBAfAjnRruoF2QCJR8c7E1SwoDoaAvpd1ELNGml2bgWlJj0qvthaWn36rl19lHz4DkwztjUz%2B4noDC6kNsgDRhrOjpycA03t%2BQ6haODLsRaraOgTvQb5t8AHWlN23zqt2ELpCUvmqyWYOlHfo98BjY6DMJcMnj2qc4yM%2BV0Us&X-Amz-Signature=47ed044b5451802e87bf4c7726471821ca9951a03a7707a1f513ca5dc534edef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBHVY7W%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCT0vPGg89zAokg4IwByuUkWwBTs81AsGWjgRFg1cPRXgIhANJBjHoUU9ohqmc%2FjKYC%2BmvdBWHvmUA6y4o%2F5gDbWZ4rKv8DCG4QABoMNjM3NDIzMTgzODA1IgxrE49XNd7B9sJofUsq3AOl%2FIgHS24kW9J0r4d4C5rZcvMOMMR7VjfUL1ZAbhsSpQDde7Bm0Ngk98UGzju9u%2F93Mop%2FPNet7KeaSPs0Tha5wtNu%2BY%2B2h7cWrrkVtQ7pjk00midf701AmNREtVvI9DSRSOB%2F1yEIY8VOubO8k7J8LSY%2FzH1JIkVIPgs2rdddKfnEN%2BzhuJb8Bap%2F18PYgFQ02M9WMagxXAov1oHhOpW0rZSWdCJ6MOsdIdmAENBM1pYPYyEHe%2F6or9jjWV3BaYYcxuWRkBV2HLleejIgLJQVOYNbvjZWGRNfA1KFmXaawEu2Gj6n%2BKjzxFkFSKTMm7VMJ66DzG7a5ByncTp6iW1mNinQVBBH%2Be45gkH8yS6Ov7V%2FkdaLIUaWbMZKpR9bsd0yO58zvT6WcDgmHQLAoMJFrfw7%2FjTXlJQCLmYm3Q%2BKXEJ8wjqDppdELwF2ZyPsfbTfSzhYc2qoik%2F8Clco7Tdboz6Rr2McCjKqfGtjX5xtZkUmAchRgd1k1Yy0%2Bz1UD6EPLeUUAE9SwboTHSZ6rQwrvISQ0ykVqs1kxfkVwXM1N526bbAyRQnuvSWGJDZBzbxV1h6%2FTNdaS8xvLoiUldHALzbnv7HQJKpZ224fONKuWtgnxtg9IndAej4HdjCRsq3DBjqkAdoMM9Vm2sTSLqxA12KDvkfUK2OvfVZkwCRA578mkokKAVStgazlakfC9mTcHkuTcxZEXmhW8MKrlVGnQZnn8cYMdJ2qpRRYzpIyrfuy%2Bcs1Js0pscpcL1KkY%2B4FLPqkEcQ6nYkq%2F3Qc7FOWlCoBRVn2iDY0HF%2FpHmDLLkicU3COluVv9ZcmpgVX8unX%2BItVzSlufeAetxRVYcBpQfdUdLskXRoz&X-Amz-Signature=5cd666ef4bc1e8a97f9694ce48958596c85360bf896fd538b09ea187534fd907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
