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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XFNTYD5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfkF%2BA1g5Wpch0ZqPzYSxuvwmRCXZYvYLm3Q83rCWVZAIhALQzWYEj2PhnIMEhpmPKi2gm2B31d9Zz13ECFzFePuqEKv8DCCMQABoMNjM3NDIzMTgzODA1Igzlq6YI8uTX28IwOl8q3AO7kQOOnLhQFOuy%2BVJZjIwhM6bGOw5JPX%2BT0aG0PvXBa3f4WnnmzrHPeFoaFRx9LQdBrehz6PGYfsNuKq6LMQ5aX2ydcLryq9BrCVAtWmCQheDea8Wsc7rVe1%2B9W7myrcmwSZCnpH%2BYfiCol1f83v92BlsWc56meEE%2FgRKAj5a699C6RDGtQe5ijK6O8jvK0kWkPQ6muRLXWhOOfFy06KskoREkOlmJLSClB9PIs9OhDMzN55dNYtnd02AdIr%2FKPxDZLNcg3gHZuvQjdbmKC%2Bcr%2FnhzJ784Dtj3FmZFR5XCwhfMj11H8aWi888d3qHhmuw8KLrZ6lSo5T%2BcSqelNUP4sE95QpTJxUbD6lCDgBCIS40adG4NSyufbCRbXq2GyP%2B%2BuJbMyaTZqgd3iNhKO4dLMq9CLB8CFfTtoZwInHdf1lxsgI7KOr8FLD%2FsmNn1obdbRPxkNZyEKdU3qh55af%2F5Lcl2D2%2BDSneJLPer8tHRevBp8X3v9CfUJn%2BQD3wZeGQZ2r2NjvfrQffOnaCPL3bb6YIAXYgxBptqtIdxxu%2F4NVVjeRx37ijioU0x7bwLMpDrdGOiVxPCetbNKj0DhmgjE6WW%2BF6dvfknIVgnUBm%2FSUqI%2F05wlxtFVdw%2FWTDIosK%2FBjqkAQEHqXU5hs1x%2FaSBu5oMJZXhLgXwhCux1IIrWyJhqpALslSXnLvsGakLtNBaOsKreJ5sJa9dTEVxlFMEfyjEgBHAhnI05glXX3dMEyfi07b4LL5l2KMkP%2BeaJ5OumL%2FLiz4UTbZRfgo2ICLzklIAzJuNoux6LDgMTLyS0YEoSQPaGEg1oiYZUfI0nnY6rk1kK3chMLcIX5Xq0K9CjqmjFN2%2FZfop&X-Amz-Signature=eb618ecbdd69a0d74fb7737567e0d92560497f606df68c1947eca331e94f2419&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466732YAKMW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg6KVSsjN3zmLeiR37kd5FRREjKqeWqhBynq1Sdh6cSgIhAJeRQAz%2B3AsnKY4Ez1p%2F5%2BiIaPRe7GldYlaVozs10Ku6Kv8DCCMQABoMNjM3NDIzMTgzODA1IgwAo50famqy5VuCHZMq3APVuJYatPSpmlfSRHU3c9TcfaEPjTyMcKrwwO5zXNpffPEACEIHetsGWn3BnV5N1XfMMKyDa8dzStGU0aZTQNZ%2FzFf2MpsHs6q6UARFznPJsAByEuyFZYNuGmUF32iOW6iGprU4yl7BHE8IHJUshzIGCZubTfj9yPYTAh4r49wVmkF0BiHoM%2BmAHXKuIsI7o4hb9B1VVXxVm66gpC5yiXw%2BVd42zPbkjq%2FiIT%2ByXTTxacjOkYmT6U1oa3yOjRVyanDK0LTCx0im9%2B8tJ0l%2F8%2BRbEHuKHPzbkZHf2kP7gvCm%2F5yjwvaI6rcKevf7FuT7u3HNoqsRe4OKy9s%2FyxZSfs7%2FZLv8zILyg3Na0z49ezi59zAG7mMKKWoz5hWYt1E61BdZTbbIFqLhE%2BQTfns9Hw79lqAh92G3FnGZ52B6dtDgd%2BmY80ymRxL3pjM2n%2B4cehd7vZ2AeUETF3rP2%2Fm9CNkmQCtc9noSF0iuvzbToIGG5nITunGMSP6x%2FtNzcnW%2FRPIcfyVFuC614fxQOvRQvOZospvAr7Qfu7nnXQ0cXl%2Bp9eZEkEHEAGpGMkPlnVzuVt8Uoa1QGAOFhAeHFbLoAW9ZBdCC8yJjlukZ6MI2X3CTmAwSsIyMedwLPLCXzDC7osK%2FBjqkAetauiNEdFTRrgV8WstOv16%2Fql%2F1p4fxMPs7dvVdzGxNGqoGEKUukZ0Ly52X5qiom%2BLKhLcEZvP%2F5JTv0KUlAisrzM7R8aX%2BmBglJ2FoEmPXFJ03eE5VYJjt5Q1uNmZKWR7X5dp5RHaLOavJUX%2FDlO1gMoFJXvUVThhvXoUdCOo3QxzbnNoielWaDXGKWdWUZo%2FTTO2yBU3ZnnL9lBjQzaEvZN3%2F&X-Amz-Signature=29d92d6f01a03a88625aec4901908a546ccb515f6540d8c4373807bacbdb140f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
