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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3B32PWR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDJllpHA2euuYMx%2BiFNg6qss94VD9oELJSXrORa00z2nwIgM4ci3GNDJke506dH68tj74muoBZTU6NzNP0EvaW89GAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDKrwQdfXWKthStDg5yrcAz9ACtpjp%2Ba7cPM5aTUyvptvo05jk1BY3t%2FzUw82aN1ylmRd4xo%2FofYt0bKjyt8M8LMhiOV%2FEdfvUVsJohCnR3dmwfTBLnMJrKqu8RetzKm4QVVGMOCuQ%2FbO8DNAWCbqnDxfyP%2Bki%2FJptqdmcTp9GhLaWalODCuqDVttUGIE8utLeytDL6abAPovswxZJAkDfN7kjKtcae8FBXh3tYfmk3WjyQrvCE9HHLNHtKk%2FTtrY%2FrQVty77Ip5fsTUqYXUcOtYvxOc6Lfm6qwBj8YPswsRbTy%2B6fOyabsm6Gl08qZDzG9WtrGW1oc5dkiLmLWkFABkxzpl1QSYeItETXF9AeZpt2cBdifvVFcicorCmXxwI4QvTfpbec5DtUG9mGT37ggMcNccF33%2FBuDWyhTn0JPaCsZb6zAqAa2cnyb233RuqiaaXmYsIxcNzMCmzjnO2lQ8oHa%2FvfJIarAWhH7Tmw%2FixmTGsvPIRhdJL%2F3Hxgd5RIa4to%2FltAF8TmXgLu4AKL0LmTm6I2eZzMRGak4o99vaue9oLXrIFVPFPB61kN2xh1dyRnDT3XxsTGU8hDgr2MV5HAJuAcBiXcB04eSM4mPLgQbsCfSA8qlOdpYCTEgJFQiKnik%2Bzd93kzDazMPaGjsQGOqUBpZY6mIQfdd%2F23Pk2KjNnpUqXEU2ERRgGeOH9cGTNtpYgV%2B0EsH44k2k%2F8GofgTQCHqSBb%2FQSlqapHcIZnpK53X9zmmFaOQ1lGEUWoc73woP9IGKmCa4b1Z0Xmm7Kj%2F%2BRP0880mb3xRyfr7U%2F7S%2FnTIRhmhWLBE%2FK3SZ%2BoEHDIqpmYreIARbtbjD0QJ0ijwE0sBhR9TJgYKCucRlOyHF2x8WJ%2FYrA&X-Amz-Signature=d1267c217f3e00e3071258b557f62b5be59ad289b1ed58bb9c097ebb6ff79bda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJJLWVH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQChsvkA7b0%2BtuOiuOjFo%2BB1Mg1x63Hb3f8QUk9Z4wzeAAIhANit8oEwKjyo34bFebbFkFBXg87stjgHo03hKuWAxkoMKv8DCEYQABoMNjM3NDIzMTgzODA1IgzPV0wGMdJ04ELSOqIq3AP8mbG0BisyEsahvvaeAUyGuBodEvkWaEViRGtGl%2Bq760waSGDFMAib3J3DicCpOgDU6S3MWllV%2FZLor5VRnGqitVl%2FWp7C%2BSWdQCfxR4nVff3dQWX9XRqxgF%2FqFmI6UASgk65DcSXC8kls2pObzP5tBImIVJ2vqUNJcL1uoiOLZkBQZpieKLEpcr9ACsWUDEWhfWdGvvjUfAqn80ugxKN4ePUQE3EYo3V1cSZ8HdskctJNN4exb%2B5fJr2N69hrnCRMYXz2WXgFqrMH%2BZeULYSaDVP1GMSU%2B9x5Xc3Ipqe0cAhDQUhw5FcVV%2FjcRlhklsyxVrmVmiAcmME4sUMauB1oj9k6vuUOj24aJctzfGrb7TuttXbfWdOQaRDBuXg98EezRDLS8OJbpMpxJfCngUw0uLaz0WL7NiCiym12tKgXFoAIvO1IiJTCzV0ghOrhDLIZGcni5VEQtC5Hog1iK3RZFVdakhKG%2FzRoDfFjGQhKMNMuXhxiKMeMYptId42H%2FUrJFT5bhpAs41kZdehNVa0fLLl3ixsBRjrboTOph2oSlCs962%2Fc58Ez1nBmjBppRSsPNb1NH%2Fmjg0oR6Tjaw9cwBcaBCZ29dIsFGbsu4DJaidOceKX96eZ71YbOQjCJh47EBjqkAXYvi%2BUrhUv5fisOwrakkVZCLK9FQqjH29ccCXrZ2rmsVi1Fu0Kp4al8ST%2BnvhmPoCVRe9BHfyuBqcu3afdd9hPcgr5gfuxUVl0gojPAOkj5cQzlzEt1tPDh90cuGMZ60COHohmn3ghtuepjN8uX9jg3mhzIWgjfrO8Alpyhat03oGf9VWxA4b9dNyrbNUt7lD5K7TZ6lX4SUeM1JtR3n6Ouyv%2BN&X-Amz-Signature=c33f2bad43520b1f4c0eaa11906fed5465e00e05ba5aeeaf33a85489226dfb55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
