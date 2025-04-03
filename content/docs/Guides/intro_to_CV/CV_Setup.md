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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIVMTUC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC0pQy%2Fi9v28RxzZn8n0cKwbfn5VAs3hMYMds5UuaDAqAIhAOOkZwOZNgcPOfryBJxE6qnzBdawzddkBSoGYDDeMW%2FRKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1PMtkn6RF0lJMcjYq3AP%2B%2BB1kMMz4g3tnPAV5oFxe1M0m2ZfqR59v4QMmWZYhHeUqxsfLQkPiOBSIeOAzgqm0W9KqHYdu2wMkc1t6w5fcIQaLY2YuELu9ibv5lQs2Gu%2BfewUhzoB2rtiQHjLay7vTDajntmLOAKDsTyWvRIeJwYK11FYw1yt%2Bn42f56JQLaM%2BVnKwv9x4hfCVlToMGfsVxQE%2Fpj7ujQARnFjdB7JiATGj8d7%2F1Jqp8xrepN7eH%2BWpYHZuqFqE19G8HGTlz5a1o3VAVjOSXvi%2BeyC9vJv81EINwkFaPZgHjlD2e4LC%2Bvov8VSVStxW2DrqALzjz8Zv3m1spB2XeLQ92B9SJhKfjiaRUCu40YCGlsXhuMwZ5PYNCsivMl0OlNFd6kTlaUArOPDe1%2B%2FveDOwJ5VgrCZpV9tFigfcvhN6BGqJ5uaooptXWrPDRR3AXdmsdti5i%2FXDRxg8DZnX2jwRSncv1GyAuRt57fe6VX0fO0MRN7SGc7CjKiDQzL6DZiM%2FijQPbgIYHkBYrhgz%2BDjr3GrGM8DLexiinBeGOnJgt7%2F6go3k8IhZndLanqG8KtVzFRATCTWnILCo3LkucJoSHrJrnz9%2B9IallhxHM1cwX6NCcgXxJtlO%2BQ9P6dIJ1MYCozC%2B%2B7e%2FBjqkAf6YJ9CwTDekq%2FzAsFf26NZ3Zn494EBoLUCRKY4SqT9bBwGsGxGE1xZFmNrmXY2Nbdyw84O0%2BsSt%2FC%2FjMT1qKNc%2Bq%2BNalgaNs9ymgWAuuvKSIUNypTaw3nMExdweOIg0g%2BfegOLZPvL8ZFQTmNxfCBjOLAI629jCA46cE8uyYkwwQrRmYy3V99136%2F5PPCDWH8sCvs0OPEJeG5UkW34vTtEXdU4T&X-Amz-Signature=c82bb9ae45f3ad7c6c3f8e69556e6166361a9a87252aafd613dcbeca6dfeea04&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NTHU54K%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEUlpXcFE94RqoSu9JuWKgP0tPB%2BAhJwwQA2WG0owIbcAiBXOLGowVR3Fs9v4PXnsjS3cFoJxafubuuDCPcmf8dGDCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIDHnjKNwefvx8VU1KtwDDmctSHyrjp0onDvcxHg1MFmYPNF1CmsWblGJMDfAa22YspCuCtr%2Bf3NT79Hx2fEcUfMVXaRTlmYrR9retVu9fzi2mFv7W6zFRD%2Fj2DUFmbmt79wQvc2CYkTApbjnqycX0cRqLZgZwxaPPgVWDgsbHcsuAhk5nAX5l%2FeY9D31ZfwY75c%2BTU%2BGOOtq%2BPL8CCQ5vj7Q%2FQO4O0zvNdgviYxe1K34Y6euLfS8bdo75m1SXbyyo7O5vn9nxJuHiIKgrmOdVagm1ITIGoOLFJZZlEk9LSDZQBnZJWkVDuXg%2BXXutZPf51MgYsduws4HYxm9N92zm5GYdokBXAY6UHVpvITfYkZcomluHItGJK17t5e62D9hl2riiH33S9EXcfBz3pOXV7Zt3DpEwWG4v6%2BiHet9f0sDgc37nv4H%2BhFvgVD3dBMNnLZjxkG1lJUxI%2FLDqcSy5DJ5WgTeIUfgA8GQSR8ag4g8mrgagn5CevF%2Bf8L1NWL%2B4vcpdiVtvZZ6auh7g1FZLlvrZoGY39ohMmzQQoV1Jte2m%2FyYHbklyHn3hsFdMALwNq9llBfqA9aByzrBZdGp85%2FVctMkK9eVP%2FEdnEIEQZONYcK3hvJeL6VDBceVPOWYWYy5mgYXoNJP9pUwg%2Fy3vwY6pgErQdA482QHGBDnwSGl5eBYVFTUAfJq4LDsVkpvmibKyrv8Rz4ebHVDGSeavJhm3nD2aAwOIMS669C1S8P5%2B5lPpjkVw3g4pGu4vuF44nQsFnf2jSt1qGPhVqIOpBJfp7U%2FONkKe6aJiwbM2vNdlWL8sLEvYtJc7j5YSuVFFUL1AGpyNDJa%2FhZEjeUNzEbTjQlvQq34VVE1cY%2FMaw08W11EFaoAyIwz&X-Amz-Signature=fd01188130b7e7d1e1b56d5118793e721b394036c1a9c7ed6330659b2948daf4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
