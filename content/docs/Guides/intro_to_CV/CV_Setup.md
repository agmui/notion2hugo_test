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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOVZ27S4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCkfvny9MLKEpBaZl3DquXNXLOwMP3ZhZMnJRQp9OPlKwIhAJabAPXuwza8WsNm3VkIheO5TqwYbMECXyFRYKtzjVpdKv8DCGgQABoMNjM3NDIzMTgzODA1IgzT%2F79AX7yJN3VIwEYq3AOvkNzNT9hQC0NFzyqZlyGTwj9V%2BSpmaLQKUxsbgNOmTfRXw2Pk3pdkjgsfC%2FmFFgLPMEiH%2FD8RL01qOddEXxEQm8rw1WTUrCqj9DV5TAOk3FsF29hE2P45NECVeA9OdSfzG9yZ%2B%2FabUmCbTzkV6i03weQgj5n4IiMnm2aPVHjCCzLqsti2NlblB2Rcy8C9KXa2zCzq%2BLtd5YVkSw3Kyiqh0rgqGh3B2X9kaCT6Ux7mM7hl9g%2Bn%2BzJlw%2B4SFQ28mMGb1b3zLC%2BA9BAwWz9%2BR%2BWGVIi9uaa0jdQVJzjXGDvhhuUHyGeoXkC2qwGSMGZMjMhEWLsnMI4UxrCXTfvG1wsqFDihWJkOoCNlbY8kVEZAAjprRrf%2Fvf9sPl5UkhplbP%2BXVauJJ73uxqSzPXflYcHAP4DeiqjpEbqZgbzNVJdH%2BDxmr7z59ZBBEqB0Yn%2F6Rib1arhszHGa0xn%2B9TZ5DBpsDbjbalPR0%2BQSK1I3afB0o6T5Bi9TegGCkmQ0EwE%2F23kuoJlb4NyI%2F5SGkbpk6siuR%2BGxKCyVfI4IKWf42akwFb3%2BI%2B1hDp62LWwI71HSvSSFvenTw2y5m9KEniaQvIg8v%2B0actb5F%2BsGpcJTPrh%2FgJckq4kHmNSvPEwR2jDM0eDDBjqkAcfNCQKdjxYauk9oq0JzVKS7zI541ZUBM7sAW%2FA0lZjeIpIHg1xUeCLdsxugcY1VE3wMMw%2FwJQtOkRlCIMHnu5oOzw%2BApqD1lJltpEAwyJYj8NoCTpQpGFjQZ%2B%2BXTlkOiy932cXPNydKoOKWfe3oXqhrdjO6kWtkYf3XxaNy8UZT4Oxz3TzmdXYZraGWBfwKuTdcqJEJflx7GQJqfjr0dydH6KzI&X-Amz-Signature=3fc04e4cfb93f80eb0a0e90a72cb15eb80cf601c3a6498ec994762d6f6b11094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CT4TXTM%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCMYcx7dyFSr0kv6NUmGzYx6hw6%2BkWemZmDtQX4Zl8crwIgMiHfTAjsnntAd6oMQu4%2FBIkgSfYsDvZXNpDPkImXEZUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDEoOmOEY26Q5UIaw5ircA%2BktRi16O%2FJp8VM9TQeTur7b1ZQCxWv9B13RZtbSViMyfStd27mTPKcmBBFhs7tH62sXRpnYQFUhpF%2F8kcVl3zmcwdi70lWqEtfm6lZmSyDbzTfy1KaSEkKO4UZflveygfW%2FQShE5gapBMWyxpllOd40%2FNHdcbS8L%2BKVfe9lMVXooRB%2B3biwYsQIQl980fMtKu%2FMghOud8kDiuqxKnR%2FcquJZ9SysdZjI1T%2FT6bna79iLdnl0ZL2TNRzXpdGx7yAKR6GmIJmMHAHIWvllPFMCNjmUrhY5OSShaS%2Br0FF%2BbPbquE3VMU5%2BCTGdWYTnwPz0YdXFVkPBnlZZK49tlssl%2FowwCHsbd888WC%2Fqm5j0qY2XGx%2FbwAru5YND3EUq%2BbD1kWFvbYRG5M%2BE2l40db3wmy%2FQIID494ymJW6H8x5PSXI%2Bs2vt8x6yigLKT%2FkCbjhVG0xkfe5aVNEZYfJpyK5AB0QLj9yRMR5mQbSAEwcUoOiN7EGmNfFU1ulUsoo3SZfx475CJU6OasxBqiz9mc0p%2FWS8QQtuv%2B2hgaroIcUqrN4TNEAeGOxxHXPWPuN69qt%2BVOHcCNkbVoLxNs%2FVVFswwdW80XOKBJYTb6YJ9R6R4p%2FNO9O%2BIWKzaE8Rt9EMOfQ4MMGOqUBB%2BdfrZ07086vCo%2FVB9Ary9Ppewf6RBRvR9Uq0gA%2Fd%2BiksMccaJLiCVR2qfjP9N%2FCT4rQ%2BdnImdx84S3VH5qZFZwicDo%2Fv0U3KQ0EErPuesOuTX2y8HOIowcNYh%2B9saZHCcYSuYRnU%2Bax8XVwBLiyYJHPHlzX%2F0%2BgYQQBqK0eJPVp7lA00qeGMvJQkKmnUV2QG%2ByIJ0YQo2%2FKNkoEutyAar8jmADn&X-Amz-Signature=62db834e04636b20cfeb8876dfde29486861d9d7f57c2fdd93ce41461814ad2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
