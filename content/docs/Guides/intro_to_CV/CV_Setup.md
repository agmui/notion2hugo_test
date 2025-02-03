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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZKMS4ZG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIGfok4iAn%2B%2BTGN2b2pssQgqU4D8xu33m7EpbHCTf67RLAiEA3fkmCojFlmjUnQ35K2mDoJcJjcfe050kTlBJeetHtL4q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDK6xjgW2c8lQ1iNJLCrcAxNA3LwgW5RhrXQGD8Q8zQkzs5gBYkbSD7GchtYnI5P8PcCFYBFhDPx64EL4vzuBx%2BX0uxF1Wu87QxY8m1izo0VbCy1xrlCrs89ZikVxKCg4O0cXk3Ha84zCwQahzu0Bb6HopzIyxAIwbjim6G1zsTX%2F6av%2B1hwFJQXRa0SV2RT5vd%2B5apTwKV524vJ1gPfsTHrpiT2lLtckLHH4gJ8wnwqhC1ncw%2Beg2ym6N%2FKtDv7olCanvCpeUQd5GhOb7bKKjyYf54bPlJa6h3WVpV5orJQvX005sTO0SOUvQZcPpaqiIYYO0T6%2Fxl6vGkpyUEqGVUv38B2TA7lzkpBVjMu31OR6js189EtDCJaysPiVUW%2B0wDtfa%2BX5n%2FeOgsPN2sER%2FKEFO%2B4FzFSXegRu8gdIvuw50P2q0iTJR84MRp58KKi76qrLNPy79W8qF1d0NA7NM8lpalnuUGkFfGDdsrHGCc5ikO8g67w8ONd3QGC4ebQJ%2F0PjJozlJF5NgF2icLGS2Yq14aWbFOHt61BaR06em5KW0EsI0AdcqSBP%2BYUBbvxua3qS5OmwzpSSIill8YpmQ1uLQIvvVEVKfKzvmdINYsKrbj3DieGrs7q8nLVKV3Qho6vy41lAn9RLDRwpMPvLg70GOqUB%2FHhJjKJELQbnVeH4eAXq6Eu%2BlEoI8QH5ioXrtdpywIjOmiUubZ1UBL%2BeOye5JYXcTD%2F3Vdi9ADw5cuvWMESpZaYaCf%2FRlNUvYQdk0AqA2tETSbKAEU2YDfcP2%2B5wOHA19PtOk7xx1sYGQ1EEmq0aMzaJ4m4p2sFqhZZDziPnJ4kpMiv7iICgT%2FlOGHTTEVhENzipr8Im1Pf%2F%2Fc55wVKK6UBRviy3&X-Amz-Signature=b6915075d3c09a02408915c102049d0035adf77aa3cc3ae8e4d432b1879eb331&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGGEHHRS%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIE%2B7%2BPAvGD%2B87BP%2F%2BE5hsR3ZGPA4CPJ7y9qZZdRQouM%2FAiEAqafHDfluUVWe6bd51uBoPBIhtlqTvgzadkmw4L8ilvUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDLRb1t00AK0Dv8SPVircA11sGCgrT%2FIe5XeTkdDZdROtw1jkh7ytqZzcqhz9hKwnF0LQr%2BfFpJzkYQXczJ5moMab453M3D8Wh6Nf6XCgKDeJ6hNLH1y8xyatcvgq8MkhTx9xfUlDQAW0vsDd2Xtj%2FJbYNWmBnVGQVDdQAfwtqkT3iJmvAsmVnZsUvE8dHEiYAiakRYWQlzladNAXFrcwb1DuFYc6WUdZXk9F%2FJcLCJvWHnzfC1H812DRRZVGWAdE2pE47huTZIwZBtTy7BpwYIgM7Rkn4MV8plOg6bOPB2Ub4eWyqmVyDtb5eu3ZXeel6MdvVenz7QEJD%2BwJI0j9nlopQO7673egf%2BAdkEy9Z%2B%2BJC4%2B2im7NhfwQ11tAPNocZE6X67ZxLG8S9JfzPY1apgob9IJUuHDWBerBPVVL%2BBjnJ8sobHYOn8rjAPDw%2FbjRBztEtMyxoCIKAT9iF7rd4QNH0Qy81eaZXwW%2F2iOfpmvI2grf1Hg89ULgCNworl1ZXr6HC0k1il01Ixi5cX7oIRZ03HPXTzSRPWInsPwx1U4efNLLela%2FNPjxTTEbUEBAz8D9UBhIXEmsKMhneTbL2vzWBB27UzfSdcsTqYFrko75CcPUElnbmDDi3KodocQ%2Fia6A3jVh%2BQpgYfMaMPrLg70GOqUBcYnKcjPFo5MwbYbXGTp1xk3lcJJ8WRwBFyXQ1DhYZqPfI0la%2FSK4c8zEGONkQZL%2FYZt113s0vvMnrGYEK6yFh8J8IPVuwtgZWjSeENy90QiiVVRzDKk8xQlK7FIY4cqCD1Ir0Fggdbegq1xTugUocjwj%2BdSNSLGb4JYpk5UtTBsm5jMH5Pdkri%2BYWTpflEMWGF7zk7xVe8VWQTc5TOHl5CVYct3A&X-Amz-Signature=3711ec5a4b9cb5ded9f4806184723bd4e742ec9f13a0a6ffa5a3ced09f23ba1d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
