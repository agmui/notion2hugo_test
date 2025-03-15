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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWUGUEHF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsvGDSK1kuNdw%2FetegYSBJF7qKaTZBtAx45SYLFMEkagIgYnLVyPAQUPVU%2BJmKPV%2BGnM5PJU9dI4uwdpEPQRPVM7cq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDP4qvrFVKD7q%2Bmqa0yrcAzdCr4IWZgMaYLq4%2F9J9PwGqFDA%2FEN2pHbeSHfU7iP6KwJYP8gQTeijQQTJRujlMhTDMt9m5JV0uJ7NM6IzB0EFI5wKdL2OximFVXfUEFg67kdUPpLsUmce9Tk02MspZT2SLqf65cNLWSPjYZu08v7VXJWYYqPVfV%2BwlB0N%2FEb0lly7ivQ88OebqfFPO5TBTUqa0Z5lp%2BK85m9HKUfAeHhWkBtQABiJaVY5KcGRVAw%2Bc%2FsyOG9KAyweV63JENeJ80jNFIaY6IOw247DpYsLlm%2BW8D7FFwHsQO5rZ9TgMqD0%2Bhfx2nO8Ag64vJvWNbkzJMqR3uFCPxfwJLB%2BMN52itx%2FvZ2BNVwY50d6qg6OWmI4IEwrQuyko7bGrnWrSvfRCBQMQeBBVHRhO0pUpAcguzoiphVV8Bk5ljtAB%2BH0pCpVH7K%2BCy9aGnwX8TFtr1jb8ejP4RZgSRsygrhqdz4VDTjxlsq9oKxWU44y0K%2FnpAMEsOoMzOfHDnHXHq4ib5W5mJv5vLszOqsFX9YlS0nRfTfytHTFDRrRJfDpe3grnTPGhwteKDp3Mo0HpURWRvFvrbWG1WiSfJkWuDur3VufZLNkV3e4BkGD4HU8CLTVai8KB9x6btjEYXuJTJ339MKXv1b4GOqUBoya7VCbafcb96JUFixl20MA5wSRTXCvHZLSduen9nRYFrqP9xwb3FqNv81XCg9g4RUBxNze2z60urDy1rWqcceSOiwFvCEJFlP6ZmCORa4Pg5z0k85iHRrMCpnTCoyAiylQTb628iEqyv4hgfiaiGnh3ODGuWIYvWHj7K2aiFTLAnRwLqAlTlDHng1an4ulEcnyGOzPLwIPky0jFURM5Fu9tSgWD&X-Amz-Signature=8a618e0155fc71b0a72dcc0feb9277861bd9a69a0f46d32ccd2fe3d05a34d595&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPZ4C5XD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjXxxQefhTlI%2Fo2AtiibnXx8pwYh3zf16kiGgBByqSCAiBdOy%2BG9RWVnHqyWJkDl1V8cw7XchSK%2FzlYaGwVNMKKMSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMrNIwK2nbFSqfw%2FPfKtwDbh4ccqAJS%2Foi%2BCsgiBv%2FwA1PU%2F4R0RCIw0zYtMjzaDYZ%2B5M4d79I9YVsBx6O%2FfRebmFzgx9zy5LgBjaZMo8UcdQtA2Yj5eztKSZGYfUHOAC6smdZ%2B9fUoRFrcQF97UGl5p9A4oaZc%2Fwj20%2BFjX6L2YWFr%2BZYdswcaDtr%2FdtduCVMYAtAo4cYmFyh2vdg4zTfICwFRReRpPS6ApJyyhPaR3nWKGwAfjCsefw4NOFL15h%2F8mRtyOZfX7ea2lV%2FQqTklhqh0yLqt1KLyoiF6BVVqPHwB6Ri9SVLR0Z%2F%2B8Uv7ofGbPlrF%2BgRZDLoegFj6SvoIi8hQCfLaNQZfyI52Er%2BcDJnlcNd8%2B7i4eP%2Bz9mzvr4IDqwba0WkQ76b%2FnekvIGuSgISfnWWaB%2BFYbVvb6%2BkkiafO26wMcAq3qpHUKoWesKdPjCAqlczkjoiY8Q015Pz9LJUX%2BGw40qP40j%2BSKpLmbDm%2FV80oB1nnQSc8Zz5SYzx%2FQfoKcmpNQRrP1NDTJHRmcA1B54mQNlI25ttyyKtOhIzknNJk7JK4PSI5%2BIwdTyUR6N6u%2FgGOS9UvjlP3OfkkKj%2Fx8OG%2BqJHB%2Ft%2B56QDtoId1kss4gXtMYijSitmD6IY9ofeDVfr1Y6sFjcw5%2B7VvgY6pgFneN%2FF8tXtcc0Zxa9P9JyoAyRU07ndOaMAyXAyd9C4UMk8JNsyT%2Fd%2FPY70y46exyArIsaTfQfRyHxKxfpTNrl%2BBPr2wd3CDLapbxu%2Fg6RRd8m1aWXSP17QYkFQlYQXG0UHvEulUA0twGI%2FHKwow9fqPFQYjGbnrV7kKpYDzo0buQTWgimkMt4HmKls9BUC%2FSkBxEm1PVsN%2BEJj8Nzf9uIKKG7zgEFA&X-Amz-Signature=025896a4cfcdb874ccc590a96ecdc534f0f2754761245a3001675fc31f118845&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
