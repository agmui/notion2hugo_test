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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WKS4QG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFI9LFJukxhTW3T4Zt9vVvIdhvqG%2By5HJVTVVrl8NOVfAiEAtQifdVYmknalhuCKgT%2FbtV7lUZGwN3iVY2NVmgvwO2UqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGZETzTWUbZlogNGircA15jA1UgeSz96vl3Itwany4VC4HAnkqh5%2FNEULyPv9c3g0UvnO3sYfyivAA5JU6MguOxemwQ0FcqdRhM9mWJFJJBO9ZiI5B8sY5%2FyvQEGk7egkMeI3Tkg85YqsyvCYRhkFUReG8RnyqlYwb9xKop7ry7Zp6lLFU3m1R0sO7QBYdILAco66rwwr9SQEbyV08UNXchMAK8vTEbNKwK%2BXCPkcogoLFRdtEleR5RNNC8H2TaeJmljtmpuDpFE7We4c%2BgZ2%2F79NbVVitMaZ7UeLIB%2FlRIO0uA6IWynQhOdRIA5%2BSLTjoPOnGazeyWnlEqLTBu8f8g5uEm3jXJdoIciK1hBM8T7XKwuq2oVVa8EehQEdfUbEZ9DkyCrDmiOyA1e17EVmXdufJXUlayfCLCenp7Mc%2FSTB%2BYbFDyQ%2BIY46wy9RJ5zxqL6Q23xYz1nkBWyCouKQm%2FzMuSw%2BmwT0QYEdJTGNhW0jnr0XjjYdRAryogeTN9RFJC5zN%2BTvKElw8dX%2FkrsvKZqRk0bT1kCBYlHs3l%2FHaf%2B%2F0oNeFM8LVxq5EcD8TLlbmOIJMEZuQJdRKbwkhcIAxkE3YccSFLA09%2BC22oleUJbTUP6QR7NXONf%2F67hkETWXCdJD7ERenqZG4KMPCO28IGOqUBCem3u5GXmTdtA9PJauV0I3ACs7vpj5eoLfxpU2m18uXkcfqE87GRpnCH7b6%2F1njQYhM7Z2LKB4EkWPG1CbhCv147hfVPxFaJZbXn9YBHBCBMh2BF7odjuNMAVt0NTO%2BxBYzPOmnvGCi0yFZK26rxSxipCIM3iWQa11BGRKIHUhVYgM3zofAVlKbls1zvGGBw0ENRzV0dfbPjn1lR4idWAmB6XXgG&X-Amz-Signature=b6652796dd10c423be6f04ca7ab4abfe306946a6c632c35eb9cc0c86c984a48c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJRKJSI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJu4e9XbNxjOkWHkkp3K9Y9AwkXis80bBcXAkXRQ6QVAiAvXVvFAcskuM6Rxg5uSOvDsF%2Bn0EDKpSosregz91eZciqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfRLcKxOcEmKY%2FtYfKtwDPy%2Bir6K1T6rDZc1abB2%2BhugW7%2BW2brKSI9oUOVMde7cu8REKeYc5Iq%2BPpkaw8FWQg3K8PCAUb7QDaQa0lWwcreLadS6j3Vs6DMCUssPvkWaj3pNqJqxVR5mJmvdCFaF79P7K6LNjXPqGK4tdLj3LByCNFmN8nRn38w0hzLPEYHNGV%2FyzJmqOAIzKmmSO8PLwTFe6ducH0VY5LVzUnTtDbzi8vNWAEySVmektxWnG%2FJgJxtGkhr2tGQkojqgH4JEHF0JMPIYtP3zI8v1K7vMGmA676FLAqVOut9h989xhgr2WCtDx%2FS%2FGX1ilnFHgDhcVn2P350uOZ9VylmLOAnPphIuTPLs5I7d00LmG8efQpEu8wEjsLKW6lOXT%2Bc9hS344hL6%2Fou%2Ftr3%2F%2FpA7Ruz3RaP56HUX9XU2XTv6PLJ2ih4d8gv0y%2FgNB2dU%2FZ6FancMMC5tfzAh8IdDh5obtOr%2BGjfsp1%2BTgvFryHZu6E7vVopFG%2BwululXLjxXggpqeQLGsl0VfveyexHXYyExA8VcGywcxrvdRu28fREwDDF12TINFt7xRiPRu0W%2B93tL4B%2BXfE0RxFv%2BaTPj6ZJSkcrpmRKCpKR8rI5j%2BR2N0%2BjlrsE4ZWX1g7iwcHtmywrswhI%2FbwgY6pgHHN1OsRQ1NjGxrWnK0WG5X6xokSOcbM0YBQ7x8aOJX9DlFZcjFiSBeq85mqGNk5cPAcJgdepBPlQNlgK4kEZ5hLkobEMPD8VgfGUbKvtLy1PBKeIZfXkeT%2FFT23ZHLGa02XmZ6DKe4lJ%2B2J%2BxQsULExi2yCIGL%2F3E%2Bm495oWVtdr4jBmF2hCevjmsD%2B7d%2F52DX%2FniGwtUqabiPaeEMwBjpuAdH21Vx&X-Amz-Signature=e3f39bc0c3ae738f0751f2a71d48b8dd27123d6fec1396dc5cd1a0c30934c47d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
