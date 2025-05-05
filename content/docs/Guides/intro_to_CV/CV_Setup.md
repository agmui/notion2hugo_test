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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JQ6RTPD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCREmrcCkTJLcJdDFDRE%2FiSBqElpP441UkRcizqzX7A%2BgIhAMsecRwAJ%2Bbf0y5javS%2FGyAXVDPb8LHyaFiRJkss2LKIKv8DCDAQABoMNjM3NDIzMTgzODA1IgyKKEPVeEL3U1kVBowq3AOFJ9IFEGDMLBYpd1MZ7IQupZzA02J4xazTxxFINVloRyFVTqaR4yVIPp93Ziaarewxz8jhtvjoV1JSKet3QGCt4AGuF4UBOb%2FkQy8elq6gc%2BQaZ4k%2FSN8gi1Dkc4GEDs5Wkqtt%2BZ7GvUYjbJvThqcm4Ra9sg2FTkdjcNntD3XiDFHDO0YeU2oc9DqMhEMR9Ca05HowG8se%2BYGxktmjsw%2BcCgYwN6PcomP9HpJEmzpUNxur1cJ6MB04mn28XcIfIedc32eMfibopr6YIJr9LX9weEUcF2NoWYeCIbyWMqJbj6Hxdi%2FxqFYwjX1kdO8ikSN0DJlOU7%2FGsuQZPnlWSAyEheflY4Z2NUK5HT69Wo7fommvbDDJgnjwH6jP75u7W4PN%2BAzjL5qUkpQxt%2Fj1uBxN7ZlWI20EP25o2i%2BtUEVAWp%2FGzff%2BsS5EjGrUj9RX%2F%2BvAajCUdJqv1oRNJvmBmUwIrb2m3plqSqJWkVgISIvLLOXKUn3DblxIuqmxEhEcZwT8lkeN47sQYpKmq6ibpio3vmO77rKxASlWCPAi9F7cVfdYnLi7gvL8XTXJIVoJoil4kgvgDSuDCYpNMdHAc7Ka9oTp9jIaMTOwrpTGsFmzbVyqB1i8nYoiCmFH1DCgluPABjqkAScyJZfsBOgcfNfrkiwi03ZVMSpn3Zw7W1dLnVwOKrm5R%2FfgC9hqlpYQ5hnn9G%2B7WV%2FOAFqXEXupE8kcsbLRSgacFwxzon9lrLpp2aUM64PRtmIFjn204dN4HiVX6A43bcWUQ8GfWKDMydo7%2BWHEmxRgqvVDrsh4ooIMI5r21qhRwvOT7vMv7ALWFXB975f9BQYEDroyD3%2FUP8JSBjb1wlrJ5XYG&X-Amz-Signature=88ec9e9b976a4a176ec8239f19eae1256f79e46fa182f6935f1fa81661c486ae&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTSZPN6J%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuTuJSQAhAcYTXT4DHD0EeAGjvQWAny1LLPa%2BCcB7iGAiEAr7iZ2xCaQcA8hIhaBr%2FurxzGQw%2FQ79guT%2B%2FHpGIRUboq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDB3CI8mW%2Fk1uQGXEWSrcA88metSNNt2rlYekt3n4kB%2FF%2Bmcqp4yhSQUL2Da6Ido6fEr8KL2EGBZ9yEX7t8h1IB2fNFj1mZZENCU4w5jolCbpbp%2B3E0xtvh5Dsdno4FNxRa%2B6qu1vOgW0yXVGOwN6HNeYvp6kCaw04kJvpDALS52NamFUElRfFzCGU3Ptrvz4bFtWQOeN9F37cHrjbfeEYKUx9YudKZP7So9BmpbUk5O4qx3g36%2FnpAWHEVWSag3WykMgeWvfs0FX8j%2Bg9hQrxMUtRBtucqC%2FKqCw%2BaL5Iwxkq9OzWqGy8gre9thNnYR97l4TphnlRnfInO%2BWG9e6TQ3UHxd8N%2BOfay7Vj6am0KArEOCmfvC%2FhxmPIZ90RwbuDAOc5IYD8QttpeaGkIs%2BD%2FWwDAfS6kgOeMDIpmwqujeIrdC0%2BkhXLGiHq45EQtw04LnlQkD5X0Gi6%2Br%2FpJlxGF53cDJq72ZCHyAptSuFnaJgrSeIbjQv33i7EtIyi51yhEJWBT6RxtEQdPXIDJQVKz5vk6LDJ2S%2BEK1V6Reny49utwO6dgjHde7Q%2FPCtYBRwJtEIwaelyIKBJMJXd2rZFwmPEDXt6%2F7KsbPAeGHAhyX6TgDBcXt4rrESGxHaMuR%2FrHn1wEfUJCvaQsUHMKWX48AGOqUBFPHQYQT1aF7E6Ta0bLN34i0OatmzZonWqqLMgyp0QNyExpWt5%2FSYFEwj6whu3PBDyi%2FM9GcFJB659YQ%2BpVpNb%2FGEwGInIaGORg%2BZvFSKfsZTtoJU%2BBzBM1JP7iO4o2yNK5%2Fu%2B4dy%2FzXalstxNlUrVltmh7ukOQSQV5soYj5S1eTeLrzgDG96S%2F8d1eBJ1y15%2BT4P9JTT0wI6AJCfNqrZRZVNjtA9&X-Amz-Signature=522bb873be7411e049148a50198105e7dd692697859c4a63cd706a87f9468eb4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
