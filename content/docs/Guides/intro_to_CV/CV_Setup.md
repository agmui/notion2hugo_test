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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKU6ECGG%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDV4KS%2FYEwrr5Hws6nPsnSeq1nC5BWl9EhVB9ixCShl%2BQIhANJIHeJULK6eCGXPKxg%2FzJ4N6IIPy2ZqujTO7nRd1438Kv8DCCQQABoMNjM3NDIzMTgzODA1IgwwpvaGvfdYyao87ogq3AME9s%2FVMeutM56KWXZFhBpCz%2FSNTBQSiSj%2FqylJIOpniBucnlC8Q%2FMoXtRd5LaDp6TGXwxMy%2FPYq4yZAz9SkUS5EU%2BREQEOOdGjd8C2sfsNy9WDy0r45m%2Fd%2FHB7sUE19CV18qzo3rdh1RmJFyxewKCZ3o4lu7G8XdZ9vGSn6LbBV7FyGOcgRUyaZfE%2BCbnFiEPyx177bBxxqKzsFi442I9AGXT6M5HqfB4mJltilqoyrcUVHc4gLB97Yhnx8%2F274JUCa%2BKOfzur2iu4HZUqqHkN%2BhVbvo8ELNKmww6fT1RIubY972XoIJiuSLuXK0Pv4ZxzItAfcsyRVFHT8iTeHh2G%2F9zkhQ0vUSSu6KP2NG99KhTzdxiNWUJQzXNYioSIhR6L%2BdoOh43HsJl8mXYmXXBF6nhpey6vkM5Ud95zsTKTLqswldVW0b2jeE8LAEqkWfRLB%2BohxRlBjVRcF4VXpf44%2F7Y9nmGBsz6S4Z4lCbdZyEar71RQRKQXWZQ%2FHD6cOaAYESzvzovPkdfz3wPAM1fxMzWXyLaj5OUMrATNKTaONpSaIpr8tSEizr5EcVDbOmkBZrSVDT0vmT8peDagKOYpmcR9T6kMTPxx7%2Bq52TeHyS7aSJMhSq2nb4upjDD2tZXBBjqkASIVgKvDp%2FvOK%2FUQadiIKkO9GwKPvgIV9pX9LkYA79S7JRxextQ4xD51GaZkefgTAxanuOn%2BXy27fMqH8QEKH0xYwp8QTN%2FnPDGAGFZkLBbU0nnuKKkd2mOINP2VM3uv2B9Ip5zasF7SmSv0mDKvyROpBXjnBk%2BXba6otgzRzWHNyczASkW%2Fpmq%2F7oekFB4XI4KwaaBfGH7xc8fHS6OZPplZlL3J&X-Amz-Signature=3ac71cb47dd145219c67318395e9c0a61556f14b024c4d885874590294d7d141&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXBP42P7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHdYUuNrQGypmJw176zsaGrXjj%2BB8%2BryioepmULeKL04AiEAra23KDFtiyW6qN72nNAsO2fzsaBTwk1wtf5E%2BpFcsc8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLcV5RAOQZp1rfkWNircA7BQ7kqSnkc0QiC8No7hTPo1En2Q4hecfoyCsZvfq6eP44GFeTDgXc6RywyB3XZeX7aCD6CHD5wlhtgMahMwhkVHTaGRzbQg5sAScTbcmawRLOtmCa6dlPyRUe6mJidh0VjlRV1ZWmnOik9%2BNojopoG64NM0FHeHumAdrHycmOyYInPmMz4mvCDKTWOxmcToN%2Fo9gCcNWaxWDn930haP42Q%2FewdJfBwwUhqN1mG30ACto69LgZpnMaRsa5UT24J4S32NH7x6RKDZ2rBOM3iq34LHx668EqhdEgqx%2F8Pd6QloPNClg%2FyG2vr35AhYzKNH0UhkkRJu2bP6B26bGCkNcewMrYKX%2FyD88NuotBMrJEqzyFrcUYBfLPBBCAgdbAOSQxNyc31Aokchmm1llwyvF%2FcgKWHNt4dJ%2F3jf7KmUDIi6abYkoJwnyfEY3Zs%2BPttDo4AbG1jCHApL1bvILYoEhao4WWmwyzAbMWUOgct0JnvZUIzMEJg2mUatZFrAfbg%2B82jLc2pJd5UZpxlfCe%2FJQHhkPIRAdb6f%2B3ehh1u6C57FWqfZasNmDGdPoN27bqZbn3RHqoHRxhW%2BMMrbD%2FH3XdgiXxQdVyXvjV6Qa6FZsf61CbEorKzZKx0SPFsfMN%2B1lcEGOqUBPWcONVNR8tlzlP0eBZRtRg2C1uy%2FHex5o7iObHy7P2oEy16l%2FK71Rp8IKLfxlJudKOGrQYLCuScbA0F0vn81NAR7RJctVaiP2K8Am4274OCCiwhs2LKv1H3S6g3fLTiEZVcqPaEC7ZcPfUr2fA3rDkgVUkZwsRGv3piTp1ZbFtwcSmS0GlnM%2FXMi%2F16p95oEScq%2FwroXhaLTYWE%2BMKb519tdZcyQ&X-Amz-Signature=eec7d56a91688f3874273f4e9524ea94c251e072baa9db604349f4491c6b508d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
