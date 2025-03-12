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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGUHMU6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGSBifcqzMNPtOnNAcw41%2FcJTXKCpqShTJuwMGT3eqd5AiA4hrumHUG%2F21uHqHM9OL2l5iKuZeEwVs9nrVYr0%2FjRqSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdPnOaqiKdOHkVsc6KtwDDagd6DG01KMec1nbhTXm8%2FTMLBBVyOSgjyub8Ahik0ovcrJ51IUzszk0GKHqtAbld1m02MpJIjeSVobS%2BibllrpV2JH8%2F%2FLn%2Bp15%2BmSVkahvdFJqHUE2SgsluhkpXDQOi5959RRcAw4w%2BSil6qwEcRf1PcAVbjJs1rLCF%2FPKIfgfM%2FTJqqZSr%2F5rbfdt19dpVaYHmiKMm3RociHsRhZuQ9Z9UHfuemE4FHwDx4VZsDcpj2OyjTkIaHIge7IKnwGS3OM679zu%2B0%2By8MHlGb%2BxsjCj%2FpXrTuSyedx3iKZkex8fk1cY6whPH886hF8gcH1X7nuTducTBGF9YJVCNKzbSsRWY8tSE13tQWPddKor1y7cqSEVOojqT7VYrBMS0WQdhaXhR3K9n5wVugKdk7Nn%2Fgu%2BSEIc%2Fbyqbs055g%2Fr1yIKZeN3G2cJMhJqTCaFkOA2YDCoRdnZHvLSqgYJkWf7oF1u%2B1PLBlbUBfP2S3xSpaNfhlI5%2FEWVWCL4W2MJwS0zkI7bP604%2B2ErOZufh1w9UVLET8cbnf4rRyOPQQT0IZV0Dv7DtomZ5iIUZ3F3bvNfnS2tfhDzsrtd3V5b%2FVZUYpZm4i4DrqlC78fTrjAoCjKmSsaQQihHTemI31swy5vFvgY6pgGcQ4JlAUMNSuWcxaG1hcqGCiOI2AcV6PdO%2B9eDgDozwo7Ovqv3%2Bj%2BTlpzD1De0FlVnJwWQf0imAh5HNCO53sRTmMfio0Tz547oRCoNRUWV1kjanrlK4zsYHQM0rf7tV9MA%2Fa5HJBWEJrI%2Flhv%2F4kQgcay2dNCBC5gWudhbyA5wuua9AxmQIWIgXQ6tPwNmrkvenPW%2FLxQ7i0vFHjxamwklqyRFflL%2B&X-Amz-Signature=b2a09c59797596d75d609c0629fc10942a4ee82b608b14cfd7e05a15627e7723&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNTC5O3Q%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJFMEMCIFfvWpqQOaGAxVkG%2FvHvwC4iTncPhx7VtQD7xs113PyjAh9I01%2BQjCMjv4Ln9uKcPpICj0x1W%2BAMOyj5SwFpoVELKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbW6xgQVP4I9kiViAq3AN8hlfvAY3h%2FZN7ak8dRvlj%2FTH9CuZmj9pjAipz5ZZ2B6SZKWTRG8a%2FfkzKn8FE9G0PGsOmWzQqC5F3pfpsUnY8OfmQZy70dX3%2BZrFOudz2ziUomOPKI31smKhP9i3CveuY8gNqaDDzoQTYz%2BK6ROzif73VUOiSg4DYT%2B9Unu8OC5Ne4TsimBLyjvvZIbPIXizN69alm6CRLcJM0oO0jhc1fNE2f6d%2BOwzRrersXlw5R5a07YJ9%2BcQ18uaKUnOz4Qjq3wCf3FBWtDI3LuQklM7fclHc2BaKqSsRHLEmmfcjIUcma7hFpIPzO4ly1Yv%2FX6%2F7iXvjrivQLKmITLOdBY5MV4YyFA5cc5BALnZWMS3zMK5ZFmcw6odwZGKGviR2oeVvsIRpGEESHh7rq25krg8NsocT5ZdU6BH2eXF%2Byz2DW5kt1eY%2BZg1l%2BXJLV1%2F0JjlSwSFV4xDFvKT7pevhhzsthh85pJ7RvMfpIQH%2FkHBYXlPnNereXhyijWlm2ip5VuTlYA5Xn4Lybrcq%2FCzmadVzUgfh5Bjj%2BM7seKbDxczOcBQx0bu7Ucdr1cGOLug7VginJDfSZvzVco0e2BfCmrALFqL2uPo2IDTYdze63oU573BRzfJlOI3WY1GvSTDBm8W%2BBjqnASq9XnDFZsBtWT70Q0h92Ldl2duXtKFhxriVJc5wA9XkUn4QGMZ0KiuaTRgeHmwUdgdy5lKFsFx0ABYxgLF5R8qbYcUY8khLLHtUjrk%2BuJuy6t54OyIIQz0WWQCpvSjbgNw8YgD91LcyZjYGPRHQ1KyFuLN2jmptWnl8I5d%2FTw8ORuPxSG8oU8AyKGl2VE2wIuomiHI7z8Cv%2FEr2yB3OBSAX4ngUCe8%2B&X-Amz-Signature=61f228802ff643b0a08606c0aa448f11fc796d3a8ef32c83eb8bbdc4d8776afd&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
