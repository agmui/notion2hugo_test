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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNGNWDH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCQg9AoYEC7y%2BQQzcaEL4NqvD%2FgdPH94YH%2FC1kHMbqrFwIgVSPRhIHToWPRxlr91x1xX2%2BGWqFBXaSqXAD8%2BsKD%2FRUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5pS19IleMs6FTs4CrcA3Jh2Wc4L7frdDEeHPPztLQYQNW6i4pxGlPANo%2Fn8jVgIaRP4qLuFgUFY%2FvxjAl7LUDilCHkHxfcW29yTA3OBWLytprJydgokS70fZXBcUoQAVRy3iEDX8LB7OxqNLgauG%2Fhjtcf0SCaPH45mSEKpG1bTjB8YiwHx0qAQY92Qi981PjtHojZXbCaFcz7H12QOcqrYKgUGLdQ%2BZfWdUGAScRPRfjDCWwnjkjPhp2k3U3rWpHUFAqJrGsMqPz5KxS6qfRtPea%2F1tPQaXkSQKW6eF8E8Pojj0vY7feo5TkH8YfD6qa7SnSErnx3%2FAvpu3liZ4oBAEQdPvVjae2phn4rG%2F2LKrnAzViYDeSBE%2BxMc%2Bqfoj%2B4tmpANkt4DnxbsT%2FGigpVobRg7mwa75o13j6UeVs1rRsepWZVMsgl9g9%2FLrmlsLuwrF7OkKZls0iyDEv5C8qnpvZIeauZf1KEeOLh8fjVyzXH2Z1q3RYI6jzxXLd8U4tZhTM8dprC3GuEHej9h4ScILMPJq%2FMQadQ2hqA5M1EzgA%2FVXL2LTI00XRM5AegWU4uv8eXhSsWtnGE3kVOAJ469SDF4dM6Edkh8024dQXrX3Q3rbiAaO%2Bh11NcEpGtGYkhVPuOXECKIwO9MNGrxcEGOqUB5Ab7FWNJnUlrtjL96b2HaCvmWcYj5a7PvxNBqaCDqyKpKhPJIjz2QM%2BGAglQHbjJiSqqzR6DohwSmFQLaIBnhP%2FUTpNcRFT2MfzcOS8i2HDXU%2B%2FmM%2F%2BnNnmanH1SOkaGyogzVxXEGWNlOfit7sfFEvrpQDykfTWRiGifJ%2BTWQiBGkQ%2FJT9XSvSdJAAP4PnPythRbxn4BKDS03fOPn%2BDrY3xMKQL%2B&X-Amz-Signature=848e934eaafa2de3124d0a25526b7bcbf3d984852851f45bbba7de093a840f47&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FKJYJYR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIFfFgoDbxjo9e2FCEGz%2FmAkZBuadzpN1EgajWX4wNhYMAiEAsSe4uefOa3iN6RBf%2FV26655ZUJaLOEW%2BTsFAkbqeHJYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BezaJKPzojgfrrXSrcAynKPj5%2FMNhR8u1UT3YEXs53VWGIuEBD3mYa1zLajLL0H3qzYAHuOFLy6TxFWbhJMVNBkTZ8eyPzd5cVEITjH3n%2BoQHxBYeIGX8xhsyMGz%2FbELsYej4NXMFi2sGT16jt%2FWQJfrbm2M9ID3im38Q6X8H5Hi4TM3cjSWlj28ePVvqRq%2FIDqgdgW8vxEHrZNaUcBH%2FbZkGLZ%2B4dNz4vgUefYpzCyVLXc0KBJUJvv9cK1lR8ayRL1MQqScn%2FxYCZX9RJMe5d5OYmhmnhX3oruMxFNcDsf13edVsuXf4gmDkiczFb4Z19%2BzlILrBH61dN9CwmpEs7mSccPGXPIx%2FFLEbTbni%2BAXzGycr55uDHG6Ni3cs%2B0%2BGR902k1C8DDdTLNsi1jUlmQ9m5YWoEcozuP%2BFkG266bXoQRj19JulLCNlmkf8osDiaEW6KxdvD0xS07rkGq2S8UNJvIOmbIpx44yB12uGx6xvEornaEHJBZM2TsnYY81IU%2FsAO9DU%2Bx%2FQ1RSFw00HmdRqXPvkAfUOKkkbdf11Ud%2FLFu7T3JDfDEaf55RRIqIzS7iFuiHILxslnmkub1gRA2dJNtOOZ7%2BIaFkWIUpyghjb0Oz51j7hptTM%2B%2BChMCGe7Rv9f%2FYd3y27GMKurxcEGOqUBODaCj%2BG%2BLJ0gjdZVXrYqbddKjkqZSoEcBlhsemNHPXsh54lWY9o1EZoZfcjLtr653%2BudqzfitkhzfU5mNkQQNKnS0flyHaP8%2FPmly2dh1Kvq%2FoxLXLdb4Tg6xfp0GKuKn3dueDPzHD%2B1QSIDiL2VLxifdDE80UxYLbM%2BmNbKw64CNEJ9fduDdlUdld4JtXVgiBVC7bxmx68hfLZYp%2FllYh2zfWip&X-Amz-Signature=4d768b1f0aa51ac335d9198244c5e4f45300feb5601f5069ef21ed4973f90f94&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
