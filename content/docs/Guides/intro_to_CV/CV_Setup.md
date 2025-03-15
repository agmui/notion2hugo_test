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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKWOYQK%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD88DzNMfUXTfgIA2HjAs3hZWCKLwTEeQwBidgUTuQMBAIgRTXyTGWpCSkRgwFHC6S0n2YDklPdpTPzGXBXSytb9eUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFkqIBlyNU3bRS2e%2FircA60yYL7zi%2Bd9Tw7Kv%2FY3OUAchj6iDavQHhaEB3hWLleRb9TzrZ%2BqMg6UwS1oMEeldnHBfSTbKrroG4yBDWDdddqEpdX1GdAXxvmVtmReBRPwXYQvWB%2FE5Xbbf3q8LODj5KCbVxjA46Q5TQ%2Bl%2BPH3UZnQDQVpyNsNHIS%2BPriUYb%2Bd0QE7CVf40ZoGAo31PG%2BIncmTuysuqzVaOJayeAUQi%2Fonl4JQ64%2Bvkc6UP42fYxzDfp9S8ygtCzHtkhd7P4fPcUMsEEf4ngmqTpuFWCI4EppwBdxQEgHxUmozTHotSwOFzn7HeUkAw6XuwHzJMnfGsHFs3npPzJAkiWyAWaaD5iJPyt6SVTqG2LX51mW2%2BsuhV%2F%2BAqQSkRNP8S0rqR68Qh%2B9Z4Px0Lg1aol8V0jPsGio%2FfLgRiQAHdXf8NMXEwO8gcNqvcbTUFv%2F2tsl5kvAKJFTatt7S4xWRJ1RHQyYYYS4LU9qpO%2BUnefR7bqIvnhnwmWxKnfS6pEaKYINXSqDyTBMFjd8cUMcaQ5FCJFJooRBLYUFaj0mnwH%2FcIgoGXWiMi%2FkEg4G95ZzJpbSMa3kRqANj7oF1sBYLQHoKNT2co7tZlucGgyue%2BVumvfpwVEE%2B2LntGHMIlyodIZvZMPju1b4GOqUBLgPlBExLKioeBwervlgmWFlwYi%2BEy7SG04gCQk0epjTzc0DcxQ6Ja0iCsStVAxXCOKInEEsb7oS24RbNpDgSS60ADVwFbOVPMOGZbouPZsjl79ymjiPXvNQfx9ANQeUeI%2Fm7EbEs5kTp%2BUX7EFNFzSs1nSHE8c4drJI5w7xb8Z62N29ueSebtW%2FczIE%2ByblJihc0vWRF3yvdUlRXOx69nCx94P6x&X-Amz-Signature=fab979589ef2c1f5f2839bfd7b77b4a39eb7c16b4c35c2de6321b30621c0498a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNQBC5FG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5pyNNUMrCstPxUYSm%2Bk%2B8RYsAC5y%2B4sWtOf%2FRrTChhAiAIqgwpuBITbrEnogyxpAbjMs3dP9WSF3osTo1LbI8S6Cr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMyK4YBcOsvB9%2BvbOMKtwDGy87n3%2B2lRA3j3nPRinSdYqSvkCsONBrdW1%2FhnCFwUXEVimVOniaGIKihMLmhR44cDeq%2Bc7rCR7zt9WMlOMG%2F%2FGHG5BNKzg7cQCu9puLEc%2F3%2B7FaAPoWyPT6WY1Ky1BMg08VU2Dwt%2FDCUqWDoWtPtikWwpdJSxFlV9v1tqIifeD%2BJWmrNdDKi7L%2Bu6uuiEtIvptifnN4FImz1T7QuUbHVUQkxvWxQSOOkhZ6yV1vqqZ36YojQAJAUYFJV8aG9zU9FGjEOF%2BHJLSh9PZ7HWKEFYFjuNpMOJ7GJYAXc2YAkONBL7O0XXQ26iYhcEpSiRRxYce4OINXsDq0Aw3NF1wAjX37H9xCz0vzcdIeorwEQZgBTlwfkiDXXV2qUFEz9MRmZCc%2FoStu6xO5Kz3OuM3lWg6jv4QYueIKU67o23Ce23TMQkgFGBS1jX3sZIAKzwEdENotZIdW%2BfEaSC3iszs1zbvwsbhRrejJZ6bJJj6GJsHiNhQdMZPg0y84oT8%2FEYi05SZ8FXvkxOv3pcYuyfIpCF%2FtwwD8PNlCaYxWpap0EUMT3X79Sx7axShHF%2FoSl5EZmI%2Fj78ZCbQaL8HoQXu4F%2Fz%2FhLlZOCG6vBJZlF5k%2BjYtsiufPrCGVKH63uw8w7u7VvgY6pgEOhjaopJQ0Wo1yBPB3pTzBcwogX6mWvcZW9meJo%2F2%2FTpaiWs1TjN2txAtafEmPnrCQsFFcoHaGV6PJHX%2Bv6Lk%2FFu2dD%2BaQ3SVgqYsFLM%2Fp%2BE%2BVDiDO7ZtIis1zWKHe3OP%2BXAUf3XwlJ29CUY27f%2BDlnO2p5EpRhnUBF6gCv%2FtoMRwKcz42E1oKzXthJCTen0%2By39yQrMDJoBBDDR360xXr5RfWTOSM&X-Amz-Signature=d6679dcf2d82e8eb34c381aefd740e7a7698d4630c58133045b868e3e72933ac&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
