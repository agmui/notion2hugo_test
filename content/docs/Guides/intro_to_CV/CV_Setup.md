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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5D46PDS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCKOkKEYIEdp%2BogV32p2Y8BjeFB2M6d%2B18s%2BvldIQhT%2FwIhAKV6P2JRX5Gpyl8pn%2BshxemUmXdUp62K4Mjkmc5TE6wgKv8DCDkQABoMNjM3NDIzMTgzODA1Igx%2Bl%2BkMtWpDPUh2HLMq3APhGeKn%2BiP4F7fIu5BXM06HnMDc0%2FY620OlUP1Jrk1DnzZAfObKeOf0k6vYtwDaANjaa0PqnjYXqRFvMPykLrlqNLx07LBbWZG7PBPQlr2rZ%2BzZYjAyXiBYNFoIDnZJ2rDkRvjE5YMhluL3YRjY2wD%2B%2BF%2FqV5Wwttop6P65g%2BeL48xBEexwxJ0CXixH6BGRDSa9wY3rOc65MZecgLMsENGpeWIn6LC5qd0xR0H%2BF%2BmV16rQ34o51fnOtXxnSiSEK7gQu%2F%2FODHRIMRyNtWEJ80KgjV0kEqw3WaUv%2F9bno1rdp8Os8T%2Bwenqze3LNNHg4EEnmJD5vOvTzRVWN7fiLT1fsCwJAYrwi2qb73bW0f8xKzKtj9hSCFqzh4B%2FeEtrl09%2FRJmM%2FoCz%2FOvUuvxWgdnsQ%2BswT2%2F6FJgSegVju15XiPBHgmI2z0ufMw04jYQ7xOzI6y31k0%2Fe5b5AywiIQWHquBClt%2FWL918Ohy2TAmPYWZiskUchHTf3Iwpw2qyaCCqC9QnFi9pol0l%2FsnkmfoxyCdW5YHOIGtZ0wL%2BGappdvBlJ11KG1SGRw7q96sEyBXWSpyztzwBY5ScBc9t40OLNbdpB%2B6hdbci7C%2BjV%2FXQF3%2Bmb%2FGdssozBQb0FrtjCfx6HDBjqkAaE3sghD%2BRg%2Fm%2FOgJwHIXm9UkBVR3%2B%2BYKvhSkHV2XdLINackj8ZHYC2yz%2BXmNI%2FAO7jPhmcNOWKFYnp3fV1xaBNTshRvqOXB7mcd2mOE5bcKQ8t48Fk5Y2yJNBOxeczbmw1Q4x48pWnHt6cwPiI0kjPg9rxtx2KE%2FeNrTVTuO1KjlzY%2BmHmTi9adL3lPom4lNpiB95n79tbdX%2F3lBljEGJwztUME&X-Amz-Signature=8a5b74fd29c7c9dd375f82a8453b38760756094cbed7e847ce13af4e1f3c5ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK2DB4WZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIC9SMFyn%2F7pXermZN6Jp59Y4zVp1WSzJcStH3QzhKVYFAiEAiJj6%2FwFAq7%2FbLpcgYKjjLmkzSuTaEzbuCCWJWrkYjtQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDA63w8uXz4eVW7%2B8yyrcA2IeqAXyu%2BPRCMqMbyjrM0BsTeTDxdWufM7itQbgCktzC3DL3AIzeb3AuA9sl0RJe1lcgw5sU%2B0sCVC5DBOjm1iCLQLAPQO1HYNfUbD17nsMaO0P2w7YW68DnBDG3SOHyvge%2FvcTMcWiytPDvE2WQNsWgyniVfbx4eCqRtzsWYKGcqjKO7Pl1LzL74D8Vdg3VWYHWZaAVKj2TFFDCb72IhsAR0xqMj86xY51pbjyDkBAsXsN3rZkEP3ORw4vFJarl1Qdg1AKXq%2BSFLruLsQUEopKYy4reVYrtlPdQWhc1A0P1fzQtNVFU2phQZTvrsPKPg7Jl5e%2FsS0KjQzZpuRA6ra%2FQa5vAg8SoQ1oyIaTA%2FTtM9sSVgBfU36VXTT6VhyI3mKICv9LbDgx8%2BmgjRw2J1dnrrvtFZKpKqNyfJJyuAyU7cnO%2BLVaDD3CJJV%2FxW6sTzz4%2FxpvLMMKBBYJ8zAfgQB6%2BEgMeYhIPw6CP8jp%2FA8k%2FEvY17g2cJYGN28aUewumkTGydC5bhW9gp1ZGpemlUMLWhCppdbr2pNPdQ9Q3XY2El0msV22hKw0V72raDsB6C20W7xCIXI6QrZNr94IcngN8htDFGUggbU6OkSTHzWssDcq6yFAN33riFBFMIeOosMGOqUBVoix9LTm4u9A0e1cA7I4qgMj1GCT1xXmxJUrNPBYsV0k8dyDx%2B5rUbvkJH0IbYHnZOI18mQyW8bruhj5NCYHVJ0K%2B38iB9OX38jByoIVmQynyrMrU5mHtYSEAgQOBXNuY4HzQcUAu2GlzqGz8ApTRCGG5AGMii1Z4ENA7VYcRp6B0Hk2oPceJ3URvLUnFEtc1ocpPh7S3q2Y1PFlpv7mIu5k%2FbMm&X-Amz-Signature=6f63238b1c0fb9bc1fb626c256d5c2190baf5e988e62688e0522a63c474620d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
