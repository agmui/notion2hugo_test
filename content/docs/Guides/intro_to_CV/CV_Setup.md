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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SM5U2PL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCVanqj2JvtORh9h%2BIrpcKy0u4H7k06DteNXzNWuEvGqQIgaD6XKphXSdk9aTWT8eGqwEgoGO145ckLGdblJSDMisEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzy2GLpyAGrkljMsircA6zqjx1p%2F77KCdCfIksWr9SWbhkPi867rMkFT8moij2Fdzp2SvF54BUN52%2FRWUvI8i%2B4I0Hp3tOkzsQ71py7U%2BsZ2JVEWO5Sn55wPkXF4SqlefJb5EvuU3yBi1SwMYPXibpK69OZzsavM0n5YLQUzshaeowSILL9Gm65%2BfRGNppfIUct5V8tKd51BhU2hnX5ZEGtHmIP8plG95lGVnIHNquIfHPlj7nLjajjUa0Z9j%2BPqs0339VObTFf3YfWFQAPzMDKDd7hzwyrt3K%2F%2BP%2B77zhi76HtUkP%2BxsUN4HfFU3MCKgjK6fP0MJLur0hCL0WHnh3R0IMy2hyjQ0MY0dwgzSbjo0KTDtMK%2BgR98GXttXy5f3D2HC4XdaH7MRGyt8Ui4GT8lTUfF5h6u8CUQ37bfTpAuqOc4FnbwY0jl3vpKIxHsuNOxCzD4uqEERLhKi%2BqazQAkgNoPHoyY0eUpCjX8eEyB2heaiQvGy0gPwhj%2F089eH9JX7ogtp4G2ZXsxy%2FFdoFtaoHrcPa%2BDO8t45vTidV69TMblFBzRHV28mOSHxz%2F4chZqfUmp%2BZVsjj%2FaCF4tECIMh2%2FjzsybiFhFTbJNO%2FXp6vpf60lD81oNwQaL2DqaM%2F4sVz4V8AUL0EqMLaxpsAGOqUB384hv%2BT2hVP9S7HQL7d1HdoQgkQrevYnSEikldPalRQlKwL3VYJTQW6F8%2Bq3Fwrk1usSkTsIBqMF%2BdTyE9FyEMNvNQQSN7hL7OXejObSThy4xqyUsrE7Z6NVGkcg2Jmsdp%2BxCkGKAX0GGwwDS%2FP3UVRRtXGTTkVSb4TDDO81kHYKWf0y0WVlr7o4qqe7ZMSQrAAt3rlXzlc8lP51XdNZFZFpwkIT&X-Amz-Signature=e2f33d72d745fd5305a65253006199a9bddf9aa1d202529c8bb2bb07e85ff595&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLL4AVN3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAeReLq%2BHtZgw9PAum17S%2BksnptGLaitZ07LeymkHKSTAiEAvNdauXIHvYG9bOoZeIQ4u9jPNBi9SMrF%2FY9s%2Fc6D20wqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKG%2FkiwJlgnP3FUVSyrcA%2Behd6vQ1fhzCbG%2BS2vUdLbA1SO8F%2BBlKKABnzZC2xSfXRtrvLUbLXcOYg5n%2BsZaDqMZfeMx9LmFWB%2BOb25IlucKbNd%2FdPRFbt%2BijftzKsC0Ez6TzIrGhekacgtPb%2BaOIqYVX5MyXKC1rm%2BVS1lLjHc0Te2di9k8yYFIzTDz%2BjT8iaLOQPC5U%2FMCPARepgykINZ9hYYoWp4zfzQ6rnB6iJ8c6VDtv0zd1MutXCoKMGBxU0EJ%2B1OVIgca6m0WSvljoacAcEQThI28hVE642K8JkfkqU3Xa6pa1FNnqsE5C9mcuei6HelrLtTSL89SV1p08UDPdGg2cry5vZpepgKe0PMaLN82t%2BUv6KZOubtmDVLLNbhvXT8xTrKJ1nJcajCHbewuqwJ7MgafS5Np48EYFdsHdWFp4lsZ37WofrBQDhz7JUXJs3Gp9faj58y%2FXV8DCJBFkUXwv7Tq%2BkVxjnxQFuDUFhxwlWOom%2B6etH8ZkEr9f9zTu8JXohXYZ155%2BGWLaNoR2wb9CV7mk4uDzukEg7xY8rBQ0ln91Krm3tTo3MomJWc3KPKqNHiUkERymsFPgSzUWifwYg6dHkr6WMInfwTljYZHXRiRSeUvo2iPhHl1LnwnKgSkihP3j31AMLKxpsAGOqUBp1pFi2WOczmoeZIz%2F7P0NPJSkUIhrioBHOHsjrAYw4scuVX6uQI6ROTR7wGSJDY32FqV8y0fPnYVtaBLd5eOLICBIK%2BnHclgOqrYKsCYgbogBZknToB8ZvqNcn8jhZuQR8DG4wFHK66%2B3Fyd8q9BUmG03mh4siC2eR9WbyGgbU4yGAJGruTqnS1%2Fu6fDGArS9HzewL2TwFe81ILZLfMpEW%2FOab%2Fx&X-Amz-Signature=fe2ebc5e99d4b6dc45aa84b2bde78def66b8438e6439a76152698a185ada85f6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
