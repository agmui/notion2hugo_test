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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4HJWZJ2%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDXQrNfwV266PuoSHVajfjYxsPgM7u3jbxY5bN4%2FY9TdQIhAM4OUg8yL0EhOgcKxBHKLwhHr1cZSrie3kGE8o6T8Ar9Kv8DCFIQABoMNjM3NDIzMTgzODA1IgwQ2uA%2F4uscVdLWN14q3AOuN2bVZv9e5BbTSnfbG5spbjnBoBV0xhPowJzXh5UaN0KmdX7gaFHFJ%2Bikx%2FumyclkdYRSEYH1qCs6aGcwQjbRZWc425uUNHTm4pPngMjGuj0zf0EDjCso3qJKnbVrJvi2qZ6FxeeDTYKcRW%2FDes6RzFoWRHccXWv6c1USvaWO%2FvSzmw5NHLE3phPbDdbhUzfq4AZCP6yM3JuUt4MTnv0kHZ8a8BQqcLTaJtfaHq8sFZpR2co%2BlpU0dQLB3RztTRzHb3trcIzV%2FkUKD%2FjSweZQ38hZVuuC1hKgblvNOADwLQMvTwt3rEXwoLodj0Wh2AB3hlyW0zDEsONKtgNCetJKSriNLWSw2jRWcSRDekjTjb80Izz4ZmgTwk3usFoXuJWafZqzijrQEEiw%2FHBJzdgaxQxWCaek5ezS7NrQdhLurjszVnX%2B1iHlzhQ3ibzjYq%2BqVLcY%2BwDEzKuw%2BMoo6JHuxR8ZgBn%2FDVBHNmdBXA59z%2BRsZWXfKQulqZ0sVzkNffI3IuaV9Ou398EPnSgtS0rbV6FyLhaO%2F1QcVXe%2BKwYvBlQfcSWgk5P0Sm5V88al8tUBODP1zEqRjZsw2UEW9iCJcXdNBAASDu%2B4q9LTPfMTG7HPHSArrDbz3uUIrDCTqfLCBjqkAVMlg7veO3%2FBqNm%2FngfNK5I9GeZatb%2F0xMCHBD3sinJ5V17lMcUGmAonVg2cJAnt5EkvoYNs8rYCjqJMmYOLaIw8A1YKAScf6G7BDMFLt087B6nwzrhlzckuWq74Hekf%2FpD2%2BtQQEWe%2BbTjsULtKKEdhzng0dFukYfSEFVIHM79EDQNX7mdQTA%2BO%2B3myLZWQRj7iG2aNqrD1Lc%2FC8%2BvXtfoee6ZZ&X-Amz-Signature=3b24d0c1014faa7c09ba136f8b900dbf61652de04dca807de7b41bcbe144e3bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPAKO5WE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFQyrenIhLLlEXMBJL%2Be8dVi2WOu1mbawCmno74uuivrAiBajnn6HJ5EyzLqcUSP7BNEqWi0GFb3hcXCgm31Dq%2FGNyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMJnVVJEOKVe7gEEL%2BKtwDv5SkW%2FP6kCQ3cqvPhCIpwPYudtoQRjFYQXgUQAjYGupJSJt9U3JtvCtuufCrdpH2X9yfdPFLES6NHvRxxx8fd2l5Kcm8pkrU4CUA0%2BWtApg0fhNZkDsHu2B1ZxXtc2cNYX3NpPRapVULnL2589C2Og9rTsowzqUYMw3B%2Fc7OYJZi7qbj%2FMc10ypPjgNnlO%2F%2BTAxCTXycdbzoucxP8fLhfrsD%2F9%2FUT281dI8%2FVp%2BeK7RVs7X3klsIFMAjIcH%2B9HFQcc3c6mn%2FBMOkLEzH%2Fzz8nnGkT1nrqUKWl6QPQ5%2F3KaGOFc4dADTY2%2B429d0MFyk2N32ZNBd3xgKxqIdf10iyxNA%2Bz77EL7j3kb6N2GmtjZVeFyQ7ngSwEEBt9jpGINHBIdZv11SDe6gOrrwYOaMHSKDu5cO4PyJ0H0zLqsKhtgfR663VG0YbLDeMqJhgC7fPvVzK6I9vSQnP5FrSxcR2TfCA5Mu9QBac1xJdRRwRUbqpxXnS4ALsxlpQvQqhmkaqxE0AmyPvphS9wzSPnHGT8fhUZnksYK%2BWmLhVgGUR%2Bzw6318assHlr6h9cYaxnt4dPkln0s05Ico%2B95pq8bNTZnISKYmUjX4YeIFSfuDhMby7jul9NW%2BkB9AcD78wsKrywgY6pgFe8Cv%2Fksc8Yv8HYyMsal5YAppRnoAuxTL%2FWX3fHmCqqchuem0ktrAXbfBuGWKVokFl%2B0DJQZemriNSLYGkz3KdHYJ%2BArcXyoxuwIynr813X00kG8umDp4y2s6vSPZAmUaQ1%2Bb6zYFiSlV%2BBRB6rXvkJJcGucjqKGLYWS14XyvA1Qxy360NfFco1Dv%2FLNSVH5qCqsjV97Khm6%2BpvZNFBDd5qUyEsMZX&X-Amz-Signature=3719a8b9aaec59010d6075b3f5bd4a74bbcaed0178d023fab755ba625af0343a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
