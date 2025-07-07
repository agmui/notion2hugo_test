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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STL72I7P%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAuMPG34Wbg5t8USaV36stD4vvuc79pcaMaD7Sh5J7QeAiEAxsOjP46mtmnAdxaUj3wl%2BT5ZWO0jajquoon2O8dHXvwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDC3D%2BbjEJ1KMfyD0WCrcA4R1VUbwG5WjQKcwMcIfaVEhgwk27x6Sqo8ev8s3yDVth1zBZpTfz1HBoNAMeLYtQgZmK4EYW4foeJLYAVYgK8psf3CUjnKhStn192mdpie8PHlK2TpiVtqtX2YBlWzuenVk9s7n06f1f3Ydb1v5DKVFsGHXFqYRE4clhO5Pn0BMuofsjn9rZL7LNaINPjL4u2KAY1RFxpUJEy4VoKddWKLXG1CUHN%2BPPhujmbnqhIImnNQLpK1sWLnYY5np7QxFMK8y9KT4citIe1%2FjJIviA2e8Uh3oNmCGari2mi9N8q7oyyTfR%2F2WhhfaAYPp66yJzuEBl%2BRkj2Sjtt8Vx6x9jvAlrHrTAcbC6TumCWRtXs1ayC4x8%2FMmmmJpZWQGacBpCw75XyYWz9AQjAWosYx1SK69NCS4jv04XTEdsom%2F5zs4cDdH%2BOMWt2twnEBBXK3IqwjRD3yFR8HWMec4MArtgSyMujT%2BmIO0YHLWwBTCQlaGM8QXDAQdwU0leAVVO%2Fryz18QDuITiK2j28OmzY8j3VCP4XPJIslfR3q1KbE%2BD8HpgeDHd9NupYj25N9H70ixn%2B4fvImZBfskYC496l4pYJIJhebeg%2FFaDrY%2BOufySAIrH14fmS7VllA7O1edMLK%2BsMMGOqUBeRHiNBoWhevXQZuTURz0WXx4ZsQXZrK%2BVCDbKQs1U8HncEg4WRK%2FFUq0dlJ2Y8Mwyyg7tVY0LYGuN9mv82bx55NgzRqfSCPNH%2BoGYedUmWpxus9RMAevmoPmgNeKWye9YFX6JrCi4EYH7QKV9z86OlyPYe79JAqmleSecOH1mhQkQ6wKMJJvbrYFnE1eYd1%2FKDLkpBYtj7NuIXLYxd0xMC8Qhq5N&X-Amz-Signature=c8a2f08569abb6c7751adc754f4844f07cb2ddc8380eb830b956d2fda4f11949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XEXW6VC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQChc21Kijs0OwlIDK5B4ICo9sdjiBa6Vympm89waLjVdQIgDdc6RC021H4EgT50CGDy2FXTvpsngJEurGSul7bvX1Yq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNgjUm60d6ztSR2Q4ircA2E6RhL8geftiJ9%2BH8aDmi4Cej77W36N3vj5A4pZrkqhTFVKl21c8JIJ00%2FIb1hiENP24b2d5kn4hJIk7w8FG08Z99fOs8g1tyhx6REYVSkvJXlUfcFnOwnJRp9hm9035ymEWOextfRd3BQOuwo6y1f%2Blc8GFht76D1Ecw96wgy381Xhe04dyAEVjiZqoIFphWbEpCRG0MfKcM9LKQSE3TvOLx%2FAxzrm8YwsfddMaEchCT0%2BnbgevAhqzmM5xJMx8gjQd1uhStUSzMpgpmCIQjH7AeFxs3Ql%2F6Iv7ykvZNiXWMiWZrE6zvL7r7gd9tyT7uNematvWYuG%2Bd%2FhJka9Qu4zaIg5tk2CX8b6fA8TOkYf1yU2TwD6p2kThrB57v%2BReErL84qnEdDsAHqtC9aAmf5C44tQ2FCDfOsfEn9t5dWmDKlv37TiB5d5VM3clgzkSp46IwUaPNi%2FKlWtO2b9SB6Cmk973yXlkshNYDkzuuKbVEIMiSUv%2FmROHWQclpH85HkuQtkE6t0WDbIdm8WNG08wrJ29k0d7oce1fT%2F0ojT5JBy5D2XKMFi%2BGszrc6qxwkXQrEFEvnqD0VPrDWRP%2FfhgeqQ3IBLT9bOEsAgWNqFcdF4MHS8gQjcco4fwMO%2B9sMMGOqUBdGx7Hh1iaCDGAy3LMuagcAT8SpceoNiArFvGpZGgQ2jpvaCH1odFZpuVGKGtdwS6qpFdfwyh0gktaz%2BcWMKsMfak2pVWAWkbksw2rdPZz79LAjKAqkld9WexOVnetys3keqrCEMFqI0lOkcOd%2F9I1cwqa3QfFOyNHMqeXgYFuKhp3KrTGmGmSi4cFKMLbtF%2FDi26Hor1j5mG2LEnaP7tWagyhUr6&X-Amz-Signature=c78eb4cc2f5d802dfab2405d847e9bfec20a28bec8468def178e2f48b5ac873e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
