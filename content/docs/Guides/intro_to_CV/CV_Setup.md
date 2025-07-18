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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3JR26T%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDtVEqXVehf2FmphC71SBzuEiaZ1mlUIVJsHrywqs9IVAIhALGnI2Hex9%2BZX%2FmfP5zcOtEOKAPPWrwm9d8tRTrr9hSpKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuWecxGR9zuC4lvQIq3AOssQW8RZPy72xaNsnou38Zge3e5xcd5kgLu%2FnAdl3Lw9li3bC6XU0Qxm%2F6YR8gjLD0dOH1bx7Z6cFR3wf%2FV75as8xr7mq6uK2W3lFJJfrFW2YvgTFb%2BjC7zHm6wrs0p0ph3R5ObeF2XVRjTkRB%2FmYJk3Yb6jc0jlQFOWywb03JMeTqWDbGYTQ8R2fE47UlAeYOD0LbgDB9vHr5WtNbudnL7I7EvHmQYQk8s7OEEocDzZHKPusfUaIzKFz%2BxYp7GnXR9PYpglw4alr0fleZuo2PHPfXpNMEivpl0fTu2lVKGkMJ0t31Bpd9ilSIr9Ws3whatMpHQVp%2FjQ4ilD05CZ6ZOQ4i5mzWou%2FGkLykSA3oOwdjiBgjHyr6dHjnvwpZ%2BpUA2rK%2FWzkZ0QWuHs2kcykZgQ6WEIW6P%2BP6uWr28ulycD7YfcdhawtKvSHmOZFy7nvWvh%2Bw92Wu0bXicw5ZFrV2TKMyaQCinvW8zDQEEpu4BSNDjmAhGxDQpcBi8YURrqEfyGog7MxxoEZt%2BfaP%2BVKnM7g2OwQ1KHUvfMGdyLorcgZWDz8A0HKICROIPJJHMh9JRLsc2xYNt7w5v1feOU2yexaj1hQhX9239NT7vAtqpr1HCorc%2BXkLiyujCDDhmerDBjqkAXQUSpb%2BR%2B6IL2UYYtd3TNWZvjNZZm7NBRjmquOHFgwlHpoKXBrAOihFJZ5Mx8FOFawZCNACmWrIqTVpafvvFqmQGE9Ex8ehrYTo1PeYnGtK1sKSn6oTxYq1sxPCE6r7NliJwMQAVirb0wapjt2jXWhcXnlno43HLmNInNkGBtf9FJsck%2FejQbQZBN4RMprTCoN9Ke0G13Hc1oNUUJw7DYM3doHJ&X-Amz-Signature=f885fcf91cb140ed35f78dde4aefe1556e95232a75a5c4dd121f2a544aa2b2b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPU7HUT3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDS0yRPKF100MaH6FWVXFdJCgoNoCQ0ZxDvsSK5ZQYYbAIgKB3TgjPagmxbveFwN7Tr0K5UQdxVItErnM0IMAN75IgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHC3NMvPPjTgdTnvircA7GQbh%2BAwA6SADONr5woj%2Fi%2F%2BuHonlmSPRCqixeaFDKHtKCdimgrtsjrYMn7A6m3RsOzfhbm8CsJxELS8QO17OMGq1mSXcX8lczJ34%2FhJzbzyGp4%2F2M6O%2BSDo4F7muq3ECCwfD3IacMGYajyx0rckG5ZQpk8WGM2n6c98yU4j2dav804v7QFI5t59MJxXrL4f6qo%2FZdJvdtWyyvZdLVTvOM62YKFmgu%2F3QFMFoixAdysUhC7dnC%2B8NMX%2Fcp00XtXvcnOA2DzAp18xl7%2FjrHGdo5sucj%2BLDJoJdYSRooe5%2BKFgOCiI9D4bpooh89bgCvpecYPsllzQ4SxZ9TznnuO0XUrtJJ%2BWB0kDFgRwt98jcoQ3M1DV7W62zuV5npsGCNeBghOxXCj5PlQYhQzxlQLTdDbTWzW1J1XUlYWBSYVrBBGhAOilWjfxWv4vnHsIo9I4AcmPjyGp9dC0PJNozNYN6kF3WqPi%2BL3Znl%2Fp4agIfAYELs4BGAvDJ%2Fd3tQoUYuLZUqAYyQTHp0p82JvvxxzmRQxajeF9hxQWW3b9v0fFT4MgqRuKh67QT6ZjxWRu04%2FeRVE9QJNxTEeCSoDJcZjHqsY0bnciQVFPKlqqmIrW5%2F8asLKDom6HvLcvfFKML6Z6sMGOqUB9T2jgr2oH1RYoXXCxMCj%2BshAJg5%2FBt34R0HWEfsHcx%2FvFFTuybVQlOjKuGaXv25w85pgVbLVVxLtDbxIIWV3Rv6pbGeA%2BrFowls2oNbVXugZA%2Bnpeav5sUZtZDlvy8ocuBstplMK3Vs5ZGpwoMG7pxhVWrDJ2YprTEkn2Kdq1YTyXd5c8dccg66hZxB%2BBJBd9uzj0IBwx701ubX9Q%2F%2BscaHReNfG&X-Amz-Signature=a9f540b1512c9731c6ea4b8dc28aee3ef68f818b1cdf36657d6c53e74e59bb21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
