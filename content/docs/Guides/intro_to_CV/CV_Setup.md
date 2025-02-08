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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTBT7AC2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCAToQAG1ODX9i1wKSV7P1LiX2hhgy%2BAk2HXuXRV5%2F2DgIgDagouHLjyrnG0aBUxSuXeR6zUaHsjDiVRVk4aiYJL6UqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGP7c2eQ%2BSMfZRJuSrcAwtke8nejoyF2sVWl0Vmv7fkvK2VZVBDwKW1MuRU1sa27KbOwtlxzSdo7BGAxkSE%2F8w418XEfdCRo%2FGH2ymNuHMQGQJOcAEbCr60%2BWT9siIB6gzGZwFG5P74u0aU6rpWwgr2ZJte1AD2ZLwhS4jdhp68KLImreAE6GT8VURtz6Gl8EXWEPXALDRq9N%2FWmBzFIFuXcCzqYEnJuyttCPcPxHE9DUa%2Fqf%2Fk2mzXtLDqG5kS8vilQedOl9%2FxhqzZ%2Fu9JG16xuOuj%2BXW85DdSYcg7MktK%2BFQM0GTW%2BvbaXeYCJIzN3vXSGGqDKj3OfrxWJGtIE7jP9ZVzZ2ygA2vT3aYo9bMf8fD9%2BRBKemln3Sw2ltG3%2BjAg5XKhOFQDhhD9%2FlDvuVrPSoHJRthMErFoWZEy7qApedF7bg3ygtAL6rKIBj7zVH6hrCVI6%2B5%2BQd%2FBW9arpAWFbp0DqMxUwj86yam58nz28OFWsxO3qk%2FMGwnv0E%2FtjMRSr%2BdB8hNLHCAKPop7pi75XJIfgB5UWznAFN12O02N9eKoo9HbvBYKSfaANnBYI685VPKu8LjJvnKislodWkLK2hkHHyJBbcx8cWKLfMfZU1HMYfTyfO2VedPo%2BNBq7HxjwmAMMrCSBQD%2FMNGYn70GOqUBbdH8XzA7n0OkKi2OLWj9Ww9%2FM6ZforPJrGVyvYjgSTrS%2F35vDD2AHaA%2BW5%2Btuj6xCJ07JcxdQRsvhJTYg0dyjKrLl08nMhaNb5l3zFymlRFNzQgU8RwziJlM8JQgCZwMU1q8bgbJ8%2B58V0lh3QVyslKxXOfDm9GHjYTGDmiNZUdrv%2BmbTxRHgnMKS5iVXO9yFB1yS3ytPBuxLjJK3NtVwRHKjqbO&X-Amz-Signature=4f5a8a22723f4bae347f901712e4999eaeeaabfca458ddfe1afa0dbe5f178f70&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOUN2JVP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCm8PL9xt%2Fo%2BPmtR6CaqgLI%2FIv2EerJyt7J6HtLoVhJ2wIhANmvl9Zoj%2Fo%2FuJHqMgXslkdPG39KuCc943RYK9oLo%2FqbKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZxx1YW9C5jfxqQDEq3APoUjqab8tJWEyE8LOkwyLOyWCMwp0u4c8LLmP1KdoEg5xYsJy0VWBq5wYGB0q80pCIe3xc3u7CdWczVy%2FTybKSkOZ15urbvCDfpBAsM6lHdQLBYq7tZiFZlyJLHKeTTazFEVMNG6c5xhp2kadxpYsiDKOoVkPtC%2BXL4PDrSZKH9zIVzCfEnSTlKS%2F784KGfOdTZ0DMGBGnpx1kPgYxzKIw6bzxIFB0Qr9%2Fzv6tZnZphHO0AIUBgUTFeX3lnvVKwx%2FCKYQDNcnIpVoJwnwqFOSLMezf%2Bz9dC30rVPQAG%2Bv4XE2Rkkzwu6UFp9cHdPsPv2dJDK1tP7FGl1mAHtGy%2BHbaJoqJN%2BuR0Eca%2F0bRpr3DIz4d951SS6b4PzIxw2Rc5jyICxA2yrBpBN80j%2ByMDoc8jmV8oAtFSkWYXZj9TYw5kAp5hOo7LhEdmBHWsyJJWlnY02rQW9xmxPrNmo9NS%2B9DTAdkKisXu%2FzPfizPbDY9S1X9BHQ4Dx5aBtG8J9LgUB7MqKYVwIeboE%2F8fw9gTvvOr2BXQ9D8QX9ypfrsFDqZRXItsT8%2Fsps6H6oGjfVbgODKc7nnK48F9EI9Eqr0NfsCLs8wRZseB62SymbIdxkXAB9%2B59SPZ6R3z%2FQEXjCSmZ%2B9BjqkAdpEi6Il9Ma26onfKKzFt45KVFM3T2vmZIx1dtUALzGqofLzhb0csAQpAvdUv3ramaJU2H8q2zYD3orA5ETp9iI2UCsIpWF9MPUaToSMD8hvUdidWoQyKtHJjpozu4kAOootPwx2%2B25imhdShcDupkrY09tXC2AEIAVq21B7G6t6cywrk6LjpyvKSjRvXYZzXsSpOEkb0tfiwhIr54xt%2B7V7vHOw&X-Amz-Signature=4c7f484ed5e55a1562337b2eae3c49931229ad67554ae5e2ae01ae466dd4d5a7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
