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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4MH2IZ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOtsc56DZw5PCh0A5gA7hNEp92gba5CfmcnH9BZh2Z%2BAIgNVbteA10oapBRYG%2Bx%2Fvy3Lf63dFJ9zyfB7SEDYUI6V4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVm7KpL9r%2BANv3O0yrcA161WBHVIOHsXDkLvuFFg3hJLkQ4LHmtdRVpt65sd3qr0X9oKQmVvArG7M4VF0ufG435j1WYllcknUOjM911aXiBJ3%2FKowWxSY5iRLS3Jl9brb6%2FULEaqJNrXVTkQNhj%2BMTxiNjnp6xdwIca83Rd7lc%2BVGKzScbl0Pmtyu20J0WwpkC2n1StWGrEH2uPfEa5QRy2%2Bfc9ugWnKtw8s0havSUwzt06teM5Yu3aguQqTmWZjGvAyvhkJBQoA%2FKASUTliTDH68sh1Pc1GWJOEEmCEtLYHan0dYSE2BWDuyP%2By5hDzkKC2XI9ExWunWUfmiJFw0PxdgI0GTHIvNNietETbY54FxwDMaaUhkLAyU%2FtSliPjpvnTehGCEVQ4u3izRiVM2feRtQshpVQRUKoghM2l8ycJ1aDp4adW9JI%2BPLHQlWbDeGrzMaxTg5Lv%2BTrGwu0pGKH8PUaTzxwpA2LkPelGhPUEVZFyqVvPpfqeLWCEVYf98KruJwVzxw2295PcN7gYz43HkDuYbFEVBtn8WKSBvvPdL0MTT9%2BrIjbu8aCQuQp1o7SCpndzsRP5EdDVDQelUQXiQ%2BvR9pvHFt5nN9VjteBKlNNwC6%2FLPYhkJI%2BHRD7%2F8wAEkOvPS%2Bht189MOfeo8IGOqUBhSvg%2F597L00ZXg%2FSGk1d5r%2BfUFFvpDS6ndkSZUu0%2Bl2DAbyKUEYUXyzXTVWL%2F9OQNOlWi0hBVPBOO9MWQMyNZiarwWJYLMnf9etv0TmGzJTJbTHADz%2BhzpJoM8W0MphwQ3FOJSsnRQNnUeUNStZX2u6b9DaVvseXp2Ryp%2Fk92qu4aYSul8gJCYTI9Fe%2BQAfsEpUmtZ6oPs%2FhiHsQEY0TT3UzItEb&X-Amz-Signature=613b9c90fa70d7291db0974f060aa855341e22689463e5eb9b0d8455df960ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MOAJCOC%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJOo%2FlRawkgoA2oz1ppcUYJ1J6Es%2FE3wvdPbn%2FNFt5NAIgcJGsQ4ayfD4dsL8ggGMOtZc4b3H9xcUh9nn8MxhoMukqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUAeB3Qpng4uomXTyrcA2qQTR65N0UtQ4gs5dbmmQsTEWUYAMo9MEq4dYyyjWH0a95S%2FsFTH4FExeENJegBxlapU%2FiV5EkvPuVFvrqCT%2FQDyR1KAQiVxg5DIHfIUt3bS0XffzzClhT0B7CT14YSuj40C%2Bsuqyey%2FAKU%2BD0CGu7O%2Fr4Uv7YVBfo1zFBxBnCt8uy05FdW1tnej604TfXFOUCo31j4ZNxwOdTzfLfyjLUfxWSjSaMvNhxxleLzx4T%2Bwq43Gh8%2FpxmTWz%2FsU0%2F5UOeVxrZTE%2B%2F26jB7u9gryNITzfDo9TYzMC68LFTrzkarL8ibdSP4nSaYzGmbnDeznACseC6Vrf9FuhhCuvNpaFQaNPxvThoWURePKE8pRLs75MtogcXMAZgcYH7EkFacwI4rDDla%2F7jTyItUVSYRA7574fQJJC08lZgxEV9cM5PmfzuHHnFLE5FWCRY8Of8N9mZ0Z0kXngg8vg8nxW%2BHPJ3MM1dFayf1aFYj6KvV5SqQUX0Ps2BU9iQBtpQ7qtKBSWls75TTMZPdTpyHG5gdazWL5lbecCu%2B87sJmPNPi%2FRYOaANdIhcNd1tM68xRS1wpnw1kGbuNOybIxYuxhKeQ1k4fx9%2F476W6tE9YTut5I8b3DujX5Hw9gV7DkhFMODeo8IGOqUBFFT%2BVHXpBGGa9pDSBB7xuFE82LsuKy%2F5R5iOlNHfRhKo4IACr13rGr63npymbCxJ4uC7qmQdtZ6K4tHv7uJ7w%2Ba9WSBRYaRko%2Fm9mOFHk12LTKdxZ6fjqFKuw465iShgwG6Lb%2B1fgL7MYn9JgQAPrXMRRKM%2BDdn%2FrvyoXo%2BIgeoaCf2Ou%2F1JPxNU1DbLSFgXT%2Fy8zCzrd439zbgG57sjFfna3KNr&X-Amz-Signature=214d3591f19bf36e6727313b515d7b021a006dfb462a9f0c2bd6b6e51a8cdbf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
