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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BP4TN3U%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIH8HSqqwpNTtIYL91RYSUwMK8zGWdyhIIhgfuW14wsFcAiBzvalX0Apna0FYH%2FFX2G9cDDHgCpcXfjbdAe8w%2Bti7iiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS25PSdu9%2FINsq5txKtwDNO0sruzdHqD9NDAu8Iszqytch9JwqFiLrcEAHZFpmY0XLx23%2Bliqkq8w2PhlMDG3ojqOnBkPxSQOpCyXT3yxISrdlU9VzdRZtpOaKvCYU%2BSv4VHTYV04J9U49AevxSHil%2Fy7lEIobHpGPt%2Ff4SJSvGtyGpFLpR2p0Jq5X022xgvdZNj1Df3I0m6i%2BdPnWSzOkXrORybrZDOjuJrRt2w%2FnTDXbEd9Is3RdMsGQrpvrRNfaRjCqhiFQphvxqQCQwJRPvWX7I30kztZuUILkW5wdfWdirodHBrnolY%2BObqhxL%2BM9XSrvppsLeEAT0M2f%2BH6wS%2FevSTTq%2B7weWEEWNhPTvVnuJezG2MPD%2FYnSfRftIuEZaPvAKuL%2Bfvc6CmKfCxknPsFimHkC4uGkkCyojDK6dzm%2FrpThXmcE%2BlLlyIwKWehIZIdCwONyuy%2BvIqXW6WrsYBGB0xiz6Io%2BH8Fj5SWGQqDkPNMF6IZixS7OqU2MYJnV00KEI5Jc1NBfyxh%2FYwL9%2FmAbKES6%2BLRkzqDKOqw0mGefUuBbkoE2kI4Hk7euZSIySkfhILU%2FFqMuwmzIS8PtPasj6Byt9Tejgs0R4EzZfZb6%2BTsXIdlTJkgLL8Kmgh%2BhlzTye4K413vT3gw%2B5KGvgY6pgEQEBXrTppgvJz%2FBwp%2FnhWsNklKU4Lv%2FeJBBdbRoE073V35ofdq5yhKElf3JoDOaZnPNRL4u%2B5T6HMg81oxbUpQS4cSWkusreq6zTPnJkTTX%2FkE2KQbNF6RXGlk7yrxxHlgxZlBucpxGElr%2FgJJKffVnBaiXZY31DmQsuziYBrrlf3k2lc6SeVwf6Ir1z%2FD7eiZZlfNcAy5%2BDIDkUJ%2BRgp7DJDP%2BExC&X-Amz-Signature=adc8b27d95d9a7b0c727786a06ecb8eb7f3cebb930ffbd542df11b5681940567&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYWBZKUR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCDt8QA5AOjwNpAsEhFVkymNFirrO3fFUmRYz39De0QFAIhAMFPo2sxMn3UyjHIrZNfp%2BR%2BIrUcgPkMx4Hy25gSSh3MKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9Ut32b4vD8geA9ngq3AOLvKCOnHU1nSo0eVxPrTNjn5%2FXW78E%2Ftjqx7cxDB6CBdgjVmW9WfacIKqaMrjixdSbgGvtoTFVoxtjPF2ZmBXEjwYC6MtoKBdQ%2FkIQFKCq0NvotdgzwrLM8fiMx3e8oOzxtJB2l368BFZsAnz5w%2Faius7%2FgC7f5VZ0cxNUenzZxlzYtIfoThiV0%2FdrIdiEZK9jvjDTrnw2MgtPkBH%2B7y13EtaafuW0VfjwKXTGXr7zaz2fJ1PWD3k3hxAGhh3fDJNvU5NbTb0IQec5RPgQTsK%2BH18Zb16pWUhIx6s50%2FHshCGZAF3YjCQyxoWZWUlv8eAmDxk8fNxNbRzxyPkA5pztueqSf9q9Jn5GpNqnHn6SHneKh9C%2Fsq1Rhgdzgv%2BsO22NxJ1X5GPOsnwQ4dCQTbNlcyqy6TnxzG1FFALnvygJK8hjzis2dC%2FAcMF2Bv8KYZKqpHa9HSZOmk%2BEZYPld5FcTvc%2B1jIJmIVsgxUG7u8IheSQTyQ0Q1fERo89ba%2FlP1Wf0C%2FEKQabMTAtA48PsYc%2FDKllhjFBHXJlo2E1pi7hg%2BvFjwI6TzD%2F3H0dWHBJx5fDqgsMAGl0x9x5rK1FtQcI%2FENAR6ALiMBswnOZBtVuhdtyGHenmFUKRIXDgDDtkoa%2BBjqkAeCGnZLMF6vEF2cooaUJ%2BdxRWSv8doCGNhff8GZ08px%2B5nr%2BdH%2Bo21%2FhAgegBOsSsSk8vTXnRxyP%2FF5Qgo8GDuqNlqLhDU79RKlzLHd2SI2x7F0pfCrzgBPhxqNaNsdsQVR%2BiLbpflxKCkMSP9%2BOLMmj2%2B0YLvInXo%2BNYY1bmVP3Ih%2BYqZtjXys%2FOLQoxFJAuzXZAz9VKmTnFTuq62HxAG7cR74h&X-Amz-Signature=0784ce14a3311e8fa9f09e9eee313d32622b215f6b4aae3dbfdc090d83332a71&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
