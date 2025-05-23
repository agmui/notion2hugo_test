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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJJYB3NK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDLqsqmQBJb4bEX16eyeDjiEUHHOQFEbIFRD54LQgAGywIgEmW3G0uLcIZKifKxW8BxbXUjAPGpQaK97lHQrES7duwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzIR8WB08VtOZQDLyrcA%2B1e6YQGePB7b9N3lt3dDG9On6C2ClE7Q528KJW%2FoVcC1D8hWk1IGnVphqlg90SpTNxUMXozBk1%2Ft0K9l70U%2B88nIe6SozbCUiZS6fYYGSiQzHU5KvrKRfwC3WJy1P4dx5TohXBxeIRzXRMVmQZY5%2Bb7g6abTZciMG96LkBHd3ktW%2BXvO3IIGlglfs7VmE2CORp%2FtnFni57MpgfKbUTU%2Fror5mP9tdzjo%2B2KE9oQ8MrY9cxVk%2FI26aX0MRohegaa60hZ6R9ZpsuO8AvAOLgeeAKsk19KEiv4OQM9UrguLOZn1WmkUSefgoHoIkKh%2FQT3JT53xAh%2BgpiS7u1nuPKYJr1u7e%2FcIfG5Q9mfVbjsTbSbbOnaJ8js0cWeLB1R7qDLy9Ccjgf6%2Bx0%2BGNwvUvBcoOdbv3Q0J4Lz6vfj%2B9JNagt70I04Vp5q3DgDgdQVY%2BvBl7HhjVo2PCwVfOEB%2BimunTzCb%2Bvo4fYbpYwN93N6mUn4%2Bnn3XYN%2BTnqev0gMc4Rv77KsaSkwFYAGnxP3sXAZuds9SFnU8HKwkgc9rjO%2Bf4tpPlhI7woyHFxMwmsLuep8ZnqFy4gNEDmuhxXPGhhOQvfKheKBCfP3eciDQa3z9aInBbYtFDdxvq45NcmoMIXDv8EGOqUBSKvBsqjms3Q1nCM8SR5f9TR%2B485W1fS06Ixmi8oDbCIaohXKDonhIeoIrhY4s0WkbuGLT%2BDV6CYV%2BqI%2B8wfL7r8jeO1EUwMHbzEM%2FmI0VuY0XzXYlA8%2BqJE85BGR41h6Br%2FlqV0DVG8uy02ugtL0scF5%2B%2B4cNDFM%2BhuZF8n9GA%2FlV19lxB8ngVUnv%2F51LpybxIEjga92ptghloweJgVvnYEKMISM&X-Amz-Signature=1add6c60fe46779d3e97ddc4a764f8c37905beb4577b378550cbf857d6e5e1b5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGC2EOK%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDCgyyWRbCsP1J7tpwSFrqTq0hGuUUuuDZxPZVgaMXsmQIhANvaUOR8zuil9JpJ0qna8AHTnYOVeew1DOJHYAsTn%2FWJKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuCi49nlDkWnfqJHEq3ANfO6%2BIYXbjtyXAZ4V%2FOuknLntELm2kE9245AdrdMpkmsi3eViBn0Pgccr%2F4pJUlc9gWUnZzImtFd4FOqh6kzaWlOgvmtUOUO%2BXevJBGgERX75HNTqoQnnjMnDcAcskV57IK4uiS%2FIQ5TUaBSYwJrZzroZQcGrExNSMYPRHM%2FPysIushad9FHjXukK7bvLnyYHIo9qoAESGeYWVNEZpmofqJHghWfZLBP2f%2FTgPMtl4hy5GJSAHG4NgPAmdXhfGU%2FVafKmHzZfdOjKvCFdQrcLbZUNHtnTN26APrs%2F2eMJ8FUAav1DWIKigoSRil9QPgZETrxuU%2BtP3bJF16EYvoJJBm7%2B4JWjkHCjwaH7eZSMuEb3vvqeuIFlyAsTcWB%2F5QI%2FFBQ751lpOBhMOh1aY8h2QTRcPUysVszLxuQuZ4TvnZnoU5S5Ok3Pl10Rf9QVsXIDuTh%2BoB0Cj6qO5sELDIihuNefLRCsWOYYyoPjZo12qMN2vYclEXBquAgzOJxt%2FX9KS%2F4235NMX6gcjsvZO8XqE8%2BiQ22fV7mHrsFte3iY3bYJAJN%2FGAxzsBvhR2l6SBwEXNXAgWbfvq0gPFuzs9yUPzMmr2%2BsPMdre6H0pierjN08iLfTev2e3zesuKjDkwr%2FBBjqkAbcbmZAGxP5HE5%2BVKvq48SLRl5rKrb1cWclGFiEf4%2Bz1ekLSamRbGH%2FtzB%2FN3z%2FT22u%2BdLEvUlsvkJK2ae7%2FNlCocMCw4dvFP3a5gQr3XImO2cUaODOnDqoVXmpfapHrqeBmhuN8iKZ7iHTUHBU6ba1Z%2FzKEvE6YWZNfw8Rco%2FC9wYzRycC4W19Pga9qcrfmHSzOAdkrElq8Tw71i8V08He%2BL9xx&X-Amz-Signature=c44978bf8c533b9c830f8051a206674da40bd40da2893f54ad53f63d151cca59&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
