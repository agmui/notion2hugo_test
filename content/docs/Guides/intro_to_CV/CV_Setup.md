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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQ53FQ4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZOALY7ZZfsUHAy0Z4vPXRY8Gzn6INOtPMGmTubhlakAiBrslqeLR1S8%2FlJw3Wkp%2FatkHAhuVGGxyfqwF6sHOuJxCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMs2nnTfYBnOix4iybKtwDz5HgF3RzCznBxI1uk68S0k0483CMciTu46PVlLClCjsea%2B8SjcuPCqT02SD%2FxiU6OZg5AN8kaMoVLRbDDHIJhvrQM7hgD4ryTBd1Jpr6%2F12nan13RVO9AveHeQFHmk%2BKzJ3leUm3%2BmRNy3UfsTsBIcTYOOwyA0O9u1P6rxZmx9s5IpCalRRQmLRMGdqnS0FYnE1YaaW4Vux0LG8WbeGJA712PxeobDkZ8juJg2JoyvAGJWDyfeqa30d97ZxAfX0T7Cx%2FKvzkyy%2FujgRYbPxgwYB5WP0ZwpgNgzFqZKcPbewmeFUpDZnpMOplx9H4FmWBDna%2B3purmrXpNKJ3gu4AWW1s8%2BYMFMGAAdYKO5jaZgqJBoK0PqzRD0MpnorS0WmqkTHyhuekpNTv6HXbux1SLEW8z%2BY1PSVB62BssVBhVXuyroVXxG1DGa3Dl11zMRJxiFML5LQcBUUqD733mYnw6yySqOUdUbAK1e80VJ3vf4SEF%2BGc7U5jaCSbNbHkzAZIpkusA0cGe%2BooBzjEkd6ya0ArVCQ7CqlhSyaL%2BZ%2Bgzo54Zo8GzT6JKxUFOh2UdvE9Cxg%2FKUEUciUHFiQVcnRvXjEcTLyc5DKOk%2BiDJVocURE4KfFQsCkwSsyxN4sw8IWLvwY6pgGTDD6aRyfgR2x7xALtJ%2BCt9LhZyXF%2FbZ1K85SHhyvEfRDDDjeRIbBWgTONFtCPpB7bW1EenVVvh4hT3GIw0vpu%2FwfbWtNlTw7yVTZxBB%2B6lvq%2Fbd0taid74EkWfVzN3QpPu%2Fovzu6oFu2bk9fSsuwg%2BDTe9VCq7quxHm3rGgMx1P9f4Uqmw9Vot2GX17SsqWD5rvNMzRwg%2BExDqdnFzbbx%2BpV%2FuzN1&X-Amz-Signature=c8b82f53145d5dadcb16843b709281b7c536d89f8937a5f506ff14e6708231d4&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ5BMXFS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPj5aR0yzBLpgmLJz6upWIYhnJQ1QRtnXqYbSWkE8kzAiEAkFCjTNUJhkKJ3N8rZL1yqK7oHDjmSmdGIOmmYSAQKCEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDHRFvGo5QSAZiMFk%2BircA5W08S9JVBwUZG4pepfSenJc1cCsFZ5Am9nQgZxo%2BefwA3ImRa5tHnPdtkoxX0m%2FB2o5kdZybrUETzaE9a%2BqUeTrRyyqdvFXvMFxfBfFPRfcUOxnWM13UY%2FLB2uoR9lFUXrGLNfwJmuFz4b4a4BgU9nPG3bmaptFyPf9bdKltMOwgqqwDzZ%2FF8Gne7jDZgMdo%2F7J4sEYf4rdhocCJCNBruNhDdlG8XeHD%2FbA%2BfWkStrvmyjiX%2F4vOkirnFW6Wrs2SIItUXRO0Kw7TraTtzrSuYLGkEF9gL1W4e5xBjZ%2BehfX9Qf6vHW9%2FtM24n3VytUhWuQVuEDGVvqwjvxYnSzY%2FBb%2FB5i6dRX0NvQkNZEEzsJXoCl0YfDkD9BML1gu7Cc%2FX12ukhybvVxPX7wgLWdxSAWaz%2BRDiPj4iyd1Yhmn3MCVpyYCT6Smunb3x5%2F5q0fY71mmLZLjYiI6%2FteCxjrkqv7RUfmQg5pB3dOxRvEqudUSOWmzHgQS5PQqu0q%2BNQNUGge5YmOJBh%2BHlcr%2BS0agkr6JIWzWdKFBRhBVwLMmga%2FOgnWLj46CeVFxrND2Z1j8KC6GtNXNbGAuN7TCa%2Bg3xMnh7lZB2HM89RRIYt%2BGvZIp2wrcOC45U9FL7gZyML%2BFi78GOqUBpffHMKZPGPMSVKV2bY6HQP7LDyJqWs83nuXZrP2RnnA9uxKhFX36nZ%2F%2FsXlhFuWJfr5Ab8Wxb1ZSobvJjYB5nEaxUkkPBQA8NwzjAPoAOoOBLcm5c8Klc3HADtblFvutN7v42dYeAIS5Fz40JGJOJyZrmV6C2dcriHW6nUc9lMXyD0BYenbfI5iE5obb2V10K%2Be5bHPViXIJf1azfwKlcuYrLHVy&X-Amz-Signature=32c93a9af3ebf5da6aa3077d7344cc70499a8545e4dea223f06e63e4c528e1a4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
