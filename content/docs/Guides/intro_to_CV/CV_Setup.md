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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJTETQM2%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQC3IVkCT32CHAby8EgaNCZlas5j34Z7U8SSVm8mHq9RqgIhAOTx2iORCfBC09lehu1%2BhmftJBCYk9pLD1RLUw0%2FuZp8Kv8DCEkQABoMNjM3NDIzMTgzODA1IgxZ8LnLcne5mGIg0C4q3AMUY1qJGk4uH1nahhvxJjrQ2OxssWF6lp0RVpgBDsStKo29xsFFgbPXuIq7J6WQ8NqqHNxk5W2C4i%2BVrpni6x3hZly6VGEH56qGnYSZYurno7r0vlJiakB5EaBSJsB2aMyHhedOsls9Z1f61q0DNfvYNL%2B%2BnTHlS5NJu0uL2ZvoNLNhtRak%2FaAxATbP%2FHe7JDf1JAWTuCg7oUTnc%2FCVED3pTq8V8TgIkS%2Fb43BjuxcwaDnhtdUoPTn2LVCBm%2BX2iw3wmN94YuYHKroVQrSZUDETYdSvdbfpr7jxrjr32Owsw5k%2FZn8lXTlCYzVeE1A4ccu6Cb15NQo3WNQgLLolzAXcTxHQADKf5A%2FH%2BgcScqHL3soOmzMWaE%2FeJP5CLfwYIVww%2FLBMA1KdjtYOJjLw4RELzG4ylLpDPPWDkffKpeEd%2B5VRU%2Fx4Ugv2CmI9BKpkfvZp9C9wGK8IiKPyhcpWF4G6J7RsoD%2FA9JROgPvehLNmxt4inFY0DLt7jlDzKZPryNWJkZ4rQ8MCAg3ino5R2mmTaMu6%2Fx%2FizBBheV7t2IefwzHlHIbzWuTOclTd7H8hWbTRAgDx4k%2Bn1%2BSzJU03Fp6Ss6sOUcnQsyCoAkfRCw1S8DbnDlTqDgaoMMaVaTCrn6y%2BBjqkAXTPCBRuW7YMjeTBM6AH6bEwa3%2Fp9Vg2AEqtqQ0p1%2BCkvBn%2B7dS7jt4GgGlP6tt3ikl%2BIlmMukNOHqM%2FTD%2FTg%2FvAtjIHWr1YHn%2BVoxDg233ALUCieNCuIh1Mv%2FzEbzRniBIsQR3jBUIyF2tT9r%2BcoRfZNrFHJba5xUCyWtQWrviJkBxJf%2BSjgXoBMiTMVEN%2F3tKX8TWB%2B18l5YYjQR8uuINt4xsh&X-Amz-Signature=237d5f8e55fafaf4c4a0119f4081cc7bff4b93859820af197baa597380fed3ff&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOCFGKHD%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICxHiatK%2BPmWiNfIGC7ne2V9LM%2BbeLjRtoLZDufZ1yqdAiEA7w5fnGwWj2ZuR9HCO9C7W57asvMTskUk67oQuHDMQXAq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNdskoR89ePCEO4p%2FircAw%2BrQfC5HN21sXbdU4G8kgWOlNMvdl%2FU7aazgwb330j0tPlavRk7rag9Runs1VCR9wDMw70BBpc0S33dknlGHGMGSk6df5bYyBZWqPtDdx5xOEwg09ZZD%2FYYWZ2%2BLDYNOgSjiJ%2FK4BrShm8Lm7%2FaXWtsL66d2BtQV4CZF3wexF4pkkInDDSFHhF8JOXpf%2BxrC9DxLMFOf%2BSKE4by3M79TtJpsuZ5GvHmeEKY%2BC1B%2BZgfXUqdTbJoAyHTgn%2BAp523H0u0kQ7j1B%2F0j0ebvtHXdQyDA8k4Ktugw%2B6%2Fr00B30hwZuJN2IUWVkk7TcsWyIqRy0GCnFiUW9GXEHyi%2FMsI4yHqDg%2BNSzr0dMvEN2BBcKcGCWCRfcW7oOtuGG88305rJ8mrqgSQAZWMNWBGOgkJmU6Lq4RIxwmJ8GZIVKK6kucoR%2FqN3FUwPCjuCc1%2BVqNJKmMilidf6SqlDXa20CRAQ%2FaLPDb9Vv%2By6CjFwt9PorOkk5i6lESmy5lyvh2ap0S4wrQ22y0cTDdMBg5Pt%2BiAVuFjTpVoWhUT5ylFlwvD%2FLdvHD5sKMnwMWlgb%2F3OQJuyeyD%2F2LRQnltVPrvaa78JOgJ6eZn56ka1KlbS6xJVFufxcZ5hg%2BPAllDuz9x1MIygrL4GOqUBbfI4%2BFeuHp0iDTkIsAaCcRREJAYfzqpPnufY867lCUcf21nY7SozHieuAQNcju%2FVP6GW7U6aVm4fJ%2F27HjsY94U3KQ%2Fj0%2BHSz%2BGzmV8RXaWzBF%2Bu%2B1aWVWaWBr8wbz6pph4iiOqyuNRNrQVkN8le2GRLq0z0E5w%2BpFoIutqSTC3Smwp7nCHFjaMd8Fy5%2BovijkORAMlNr7rE73DmQh4OFGkNorsT&X-Amz-Signature=effe57d76d2a4ef7de97aa1c3cafa7e65b904a682991f95a5e56dc360c486c62&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
