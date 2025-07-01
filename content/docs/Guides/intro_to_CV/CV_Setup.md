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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7GDQ26W%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT1WVFvkvz4rja9owtoCLjaHRVewoQW3N1ZzBNQlKNLAIgcYFwLw8i3GlB6lDFxVKhpfrT7EcOxKkghTof03W%2BIjUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWc%2BhVC8RHBmitlqCrcAxHBSRes%2FYqLzKN0OWeWq7A5XCyaHBSMWXL64%2FioiWuySDwqpXkFc2JYEDJ4YI2tXDkbB13p6AlgSarWWgTyccvveMVsvNzGfV21x%2BC1ezxJ3XD7XnYvZMSJiGd2PZ05ho4Sc7DuGpkf%2FqHvDF408nxO5zGrHl5tsGEeHdPdVVo1q6i1%2FkWpbmr%2FvMSWvi7TAFGLcXJELT4P%2FLuxQL4ew3CH901kqkLcHQbT9NWMx8xLQvnMLAKi5ho84MV7g4sAJjmDWeTM1lhtySvYnnBzesnvoIWA5ivMeiFgn0O0YC5qHeAp7ULu2leL4lrnXfi4nLQbtjMLm2kuD2Df%2FhJLF4wdP4qxqw9PQ8qb1iA6mm3hvw340vTaSaAw%2BG8VxUsGWtbKYYe%2FynvGPB6%2FmmCJVcGlVslWjjkHmk4DCSOoN9CbRIIPVjDKX%2FIVwpWFN0BnG%2F6RKkqxZ8H92u9%2B8bOFdz9nx7wlYpExHEhcA9HqQQdatuYRz4y2lasoNJxpjOBf09%2BLPvLbDeL4trPdckezR5VxCrYunHJg8sxbrhBPqam1zdLFdc1wL54ZFfsCGFn7Zu%2FxH9FujSQszunBrksuvzgjabUjp4XfwvSgMFv58ylXJUeVQobCTzcRpkVPMLrMjMMGOqUBlDxvySJiA777yu2loLNIn7nn4963nu9uzJf03ah0MWK%2FWi5uosC2dccmrCi1tBTY66q8cEu7TzbB2OYVae3HeK0tWL%2F6XTr8E71oMthsJLNKNcJR1DcDUeYcqRLco8G%2FpTibPIsgytwT4H2d%2Fy5hUhy7JUauRHjYDu9nXPNSdTA70FooJAJ4%2BFUyiGpdXjTTgEBMt%2BDma66uWSQiNT5cZatSHrUt&X-Amz-Signature=3cfa54d0cdb3c2554aba531b480d336373ee3248569d7a7cdcdda71d839c41b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HA3KP7R%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOpDj%2BjqSx9vpn72fVDTcXZE7L2c%2BXAA23r9KFaPREUAIgVzRFYWIkDiASfLI5obJrUMUCuG%2F5qC8pRcfhg4IdpjkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlo8Yjf6Z17In0SZyrcAxWk%2B9yCvYIKdjJnYsTGb8XE%2F7yA0eYMDMzgLPiFCfnv5b0rELALxYtTclDP7Lo7qmARlwWavL%2FgaoxTDSQdr35ebW%2BQ9cemXBONJvrxYQuCIPnjuIj0KTKpRI96Yh6Pr08TMLCrJQqBlFGDO9QxRzvmI%2B8qRzsqk%2Bv88gSTHn3ozdSRu0Advu0Ny6DJQfYc6enSzgfOFipAM4DERf9h%2Fwxse%2FI2F9l08VOstRLt5tZwjYiM%2BepZkmd1axNK5EO1lXBtDVot65to0y%2FY%2BC7eEGPAl92iilRWS6sqNbrHAqDT8aQgm7Dkr1cEC44A05GntY2NFmKsqhBQuGd9tR3nlPWF%2F4cic05t28PXkuVXguQ8Ev2FX50bz2haffPtbfaJadwAFUlNgUJRQElHyheOFL49YsLGjYbX%2BVWRGsmVa3o8%2FCNy60%2FePEKmvNn9A25kyFaEIdGJhZ2tdrwVh66zxJqTLJwMUgWIZyu6WNU0NWKkDIjOX2UsoPRfHf%2FF9y5SjT8tAiXq5YsaTf6EZUuUu76KdoouzcQvqu6WjNEnmgiTNwiu%2Fs9Rv3dh8HQ5xnPAq3s1u%2BlOX%2B1Q6LpqzjYNfQJxmFQfxANsxcvTZ4suMaBKbK86JJVySB49Y5c7MMzNjMMGOqUB26mwn%2BlLWqPXkCiCNwwkw2wrQ5qdk8xNRvpyh7ugMqxr4ids2wC4cLOGfCK%2Bpi4sNg8HxG0OLJ5R7U1mGEk%2Bs9BXKcRtAz0xK4AztczS3KIOZysWwA5mbiPpMa5ixOkjbTvJcFoDoKrLcrWra5oCIdCo2P4xHcdZSxyGvTOiS5%2BslzJBFqeKMeS4lNp%2BW84MljevlCnNuYJ4fDnBQ7pz3RRuq%2B9R&X-Amz-Signature=6268113cf852a72a60fa69fc46a29bd32dd6628359c0a126a5b012e3e6bb9883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
