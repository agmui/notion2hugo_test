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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPMBNBRZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCjercgCTDHWXYQeSMfdJkRvdc3r0atTOcSC7gN%2BKPSCgIgQvdrrbIGGAuqL2s7h96jJqlfbkNRe8J2enDbuXf959gq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDA8HuvKLh7RzS1vdHCrcA1yGdqzKsZTK5O4m6g2EiljgSdCH%2BYbRh%2FccglzCdYi%2Bi5KaYZCiH5%2BgM38Y6YS4U1XfvepskZzGDcUnJrB6fa88iD%2FSf%2BriwJTQzFThYK8iI8t0po5pE6lJeMo2%2F2pDJAG2rRM%2Fv09dvyNMFkELiPm72c%2FpDeyoX1ZOoCqtPh5gibFDY1JO9lVlBQIzaMIWsS7aiIMt4hUzNzwUpcoJi8uYWmb8rwIoNVuYqMJSuiB4N9YKl9lBi6N6wyF6tWFaqRrCOxCrVEa8G001osDdgsb6AaVhTYf9OSNHe0NDm3p%2FkgN%2B6PBJhyuF6FzHy2EfK44xTIWm9b1mqdE7tQ0DdbGl6KmUkDvHalHBViRDVvjddODzIrcJ7dQTN9RIToaAGsWAA3PbYWPbxaSKYGRDqNz3k1epvEDx6XDDDLSd54O%2FIi%2FMtbEulR31pA93tJ8dDyR06U293A81qmeEAZzaMYFhEwCZtdt0VEBITK3B0cpdOsK6A5ejWuDKSra%2B6nuVx9%2Bb%2BrJtzHVQec%2BXKDNshLkztvYAuSaOq5s9%2FrHuj09snGktvXjgqD8dGJA9FQt6VicNMzQtAHFhKQoC7JUYZllqe%2F4Z2lSXji1TJE7lS0vH2GYwRW86OtbYb%2BUgMJ%2FZiMQGOqUBlQtPkfUvxBvcFjK5p6MdMUe5kvQEs8tS0HV%2FXC8J1Y5KfIi9WkkQu813jSGT1qcIy0O4ypLn4M4MUiPhF3TKLyO0TCuYsoW7qQT8Ekh6BjJWyiV%2Fm2YgWs9FV%2F5G4lNlAecdDigLZSF1ZrDq%2BYTmNksSDS9P5I8tKapl56bcIvqnCrtqCJrcZoK%2Bv2prplhF2HJCtOm5XBeH0MXi%2Bq3V6C4IPuXz&X-Amz-Signature=492cfdf799875a1300012f26419a42b6cd67f198cd96e9225bcc73ae4f7daada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP5X7QDL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICCyNGtbzUvA%2BH2A0vXINKIQzmItlYJPZBF%2BBVAszJiTAiEA3n6vv1%2F%2FnpRCOO9Z4upixWfooLMGLLAK17IpQ%2BMZU38q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDwbrrsFMb4k8vRIvSrcA11%2FLC1Eq8XOS9ZixccGTMM3CW7OTPrbgZWOjfBC%2FAtKo%2Bw06Njwph7wOV5BV5KJ0FAmkGrS%2Fp7E9XqlgGpMICyNX1R0pqn7DyIIUN9gLm2RlEzIoiqAJnHUY4aTqfmhyj%2Fog5GTLrDe1FQFWV0jSDf3Ur%2Bi11iPgHX8mK1vRD7qrg4XvFuSXP1rIeVEjbz6QAoGEAF5LeKxtguix3wBgykEV9yqlIHWqNTcCzKQhR%2FJq6it1MiNA7PewYrw5ZRlxsxjGZQWljw2kys7ZaIP9kdIYxQvBRvPCo2Sub9Djs%2FPETMP5CRUltHH3yhTySLAHYuMUuFPObQnwlrLsfbH0yaFyBc0WXY59pw8xTkwUmILZMIJcMof5F%2Fs7jji697fDmgIwvNiJhxM5LSr5iJtwVW1Tn2qszPsAAlZj%2BWydod5KfBhmxdaeHzb7CoXhx12SE4ugN0OQtB7B47yXIkXleZDE%2FDLTe7gyyszUaMpEbiy%2BCa37GPO1CMEwH88boWAUzt7CjyH2sB2vPHoA%2BHhZhZLA%2FCnJayuxDkqTtzKKTnWkyOrzDg9YrKW1wZqik0wjzC0PbFLSVGKGR2aqnMk%2BM3xm%2BuMEIM4%2B4jbWOOWtW5Cn4WwTwt7Fn54o%2FHIMNbZiMQGOqUBdrfQJarLtEiC5rzwsqoPDaTTsIBdtADMEQquStehcq90rXesnkb%2BE5u2u1XN5hQ49Aj6Ok95DUV%2FX%2FdGM%2BKFZhXDP0lARO%2F30aHlhjaYb4YSSpcM%2FpX4DCB7S4EyjopgQDwWmf0rfrxK97lBspIi1X%2Bjrbvpro16FvE0wHLyub9T6ZGo%2BsyFGrGkK9mVZZn8rXx8%2FZSETt%2F93sGGEpGdkMQkxkP%2B&X-Amz-Signature=84c6c87ee61e56fa9a8bd3138a724a96718bdb738ac647a48e75238aadc139fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
