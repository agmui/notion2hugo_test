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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USWZAGNA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFXGlFB3HUCrZ4Zxfou5JIJAy6UzrWBCC4n0O9c8ZMzLAiEA6v1mNnxZLdWtojk6qfK6mI82shcJII92KjDnqviEpX4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDDweCBf9e5i%2FigRSoSrcA8D9FshdJOeCY8HxtXL6uKhztqx6SFZ7OhXah47VzRer8ia1mFyY4KtnvxEYrWog7TGY3I5SATyXNueQjIeBlHAF3aM9%2Fe%2BmtYJ3iObcJsvxRG8Sn2A1sYhl9K6e0dR1%2BUp30bFUWad33pjYT2Hq6xIQr3LszgTkzJIg%2BrnJ%2BtAQxELM4gow9J0ZtLxDHICHwcCeszap8lE6Z5ZaB5aqbkHZTUZYi5voHODIridwzhZIKh4wrb05s2pJycA7lujf88tm4oLsxN1yKPFoWzKdc4o9olxyZfFhM9vyRo7Q1rb19AuWxakTTHboOlB6xK5kBkxBsOYVSdsB%2BFjRnJqzzsfGEJVj5v8tGlWWr0WmyyBVoVdoJIDLObW9xdm0oKYbUm1UAWWEezI6svcfZVH5UXI%2F7lQTUqLeC8hmZBZ3YAaD1wS82DVXWmYPXmJMFi%2BFsPLBjRDeimbpxdmrlCfzfr8RFOItDa3ndBTpW8M%2Fqudp8TNdkMUV1n6DawFgDNIWM1ZQnqmNuwIb%2BMFMRpr%2BkNLSemPcLcEpbF%2B2qicOI8dyzIBO9A24bYjG2n4HcJJ5XIqCAPjXF%2BALQrmgaoCDY%2B0OASU27EtsNt%2F5ZZS3NtpoteTwNNQLT0Rej%2F8uMLqdkcEGOqUBgTnRTs1KgqZRsfBMFr6%2Bl%2FmFks6Pm7xqqUbDHBGSgd%2B%2BPxcAwEsgU5MqcvwDfujmdsfNIcWq0R3GEze8WpuAA%2FNQDMNa7Jvrhi7EAT18zP1Yda7dnOp2nyrm%2FaOMjpkbSvr47e0OKfxblXLzIGDD2rFZjCPIBXmaTP5peuZXKwZ38AdiGyXRGjoip9N9CwPPEsrahYMckcG378QEcTzOhXfOFRvK&X-Amz-Signature=362ade9bf1b870be526b9ccfe2f2f780340ffbb484d96ff1ba40de69fb081963&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EU22OZ2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC3BLk3aNhv0Io3if3SgrEr2CDqAp03RXulNphZCceZIwIgHkDxpa4qYAQk65q%2BVkFS62xYGWYgR0p3dNs9XlmLWpkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKme%2FVHzu00TSk%2BcDircA7BHY8%2B%2FYY28g5%2F5%2BqU0ooPjoxW7%2FBqsA%2BRn2Q8iyLuSqiA5vVuOGtV19ra1gB7vJc73fHr8rmurwfNVyxEedNh8GbJZjTIIhlaQD8%2FkyUIqAKHs48ZiesEicGGDHKezKeKnMcM1f9R%2BWbLd2z7yOaVeeLWAqG8J%2FE2B1sOf1iUqnm84aIOJhcjDJ53h4I1EjFlDUFixMhh09tFS9jtxuEw9i1ftQygoFKSK2YxDSoTBW69qUJ1iTssoAAqv5%2F6eY8jP4cB8DvfTDqF7X7c%2Bdt13GsSqXLiw%2FWnXyg4OFQuS5mB5uvHJZ1w0WrblzrlAQl82F%2FFZEMKj7RMnd11OlFhIRmvge05DI6XFj5dH5GgWE4eT7SIl1K0zpHDyxrtnT1JXHQEDt%2BdvqulQKZh57BtGVM%2FWXrh%2BdcfY2%2BEfNHIDRiUhAeyEIV7hq%2F9EeEfi6ZxXGi%2BHOQf5SXIYQPm4AiPPmSr2B%2BnQfScslRZWdaxdt7or34eFo8d7ZwPPdnnhoyty5sUU6EQ9UyNHmnmEpfk0Dd4u%2BpBTvaNiLlZmSk9m476PiRNpWe7zUAeQQYT7wyjuF4UcacJg%2FtaMtlO%2Fm78OLDRpQnppvoO1qi9BA3Ggk19fGJxoV1MamwJ0MOGdkcEGOqUBmhy0WX16mM1Ivx8jSAZtr4B8XffheHOFbOp%2BpVaqayr5kkgt92ULxQIyMRKffbHfJuANgU0uVl8gP8cBSb3fVoNxDNG84Hh72f%2FAPKkaeON6GNPJ9LzhOWCzaloCMW3EUKfBwtvW90STMsSpmT7eTE9YDo%2F1rNB0DTInrGW%2FVlzXetW9nMyHumbKyVrWZ2EGAihnkGDR%2FAQSej%2FS7DFKvkcGvX6n&X-Amz-Signature=6d1d8d06b266ad747245a46c6509655ab9eb03935c4db813b495a862a334e873&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
