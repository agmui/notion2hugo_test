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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW6M4WNC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCIsPEu%2BYMz7pRadEX3ABI4ZnspRGeI104xPV96OiRW7QIhALv34w5boNAX6isgloA%2F6rpIbTVzHT9b53KsLNvlf7D7Kv8DCBIQABoMNjM3NDIzMTgzODA1IgynxJBXcEB8FvvXs0Qq3AMXFiKCdHK4pSGF0DsSISSYWT12K3xT%2BAmUC3BiCJrxyFAHXFy67h8XzjhsPmNOMalNilGG16o9z95FSWWLzdWFAs%2B7UKOzNMPi2AiXWvM7gYNl228M%2BekdL9CrDEUnpf9W1pv2ePnDoAg7QETX9sJe3LZ56ZUuqz%2B9it2jVxHAonzHmoXijfyXYUDWpizTTmzqwmYLWtXk5HHI1KCC9rwKaOyf4ruPx8eLaBsml2%2F5sUIInmDNGjZul0dPAmC6mkov8eTSPsRdpqMNvQ5iVoFNWd4hEo4Y2%2BTkGNwqWNzLH7A4I4X8Xo8uKrsTjmHt7vA2gSlWwaWXXGWFLGBadCMwbwx6lZDlIib9XYwDhnBFWEQEgPn7KtkWCtWN3lN8AX%2FWX6iuuD0sYlwTPw54w9oZoL7WZVzjO9hAvSiTUTYiUACJTcHzjYgrwRvQU3VQWztzWmwdfetaCkbAHVllQx%2FJ7h7AhijHZKtE2aKGyHkYV6lIUbhJTmUVOprQ7fsREG0Uc1OgZ1BWeVQFScJ5V8McFxPjFeZ9b8fGs0p8JnQZ6Drmacllszyhgo220Tz9H0akpMaGw9VA63gOxk4H%2FCF%2BdOqNiLIpVEvCD0pNAnlTIBWiQy25NVg8CHqq9DDtuJHBBjqkAZeRM9lJ3OUwMvyQ0CEeZnJWx7fnx5mm2BPCDKtL6wvX0R37mgZKg20Y%2FzPaNUkOrSZ%2BLQ0IHbqHD8HAaXvVNcXL1dUudcPpfBFBlsY3a3otIZJV5QnXbzn7Qo4CCd2OWKSBpGVTEquQUmPQfLgacuGhVkMEnrwxaaPeYDcpwUHRouV7jos2Ak63RrSIUERKspO46Of6eA9ajIW6OZEN0JQqeQff&X-Amz-Signature=5b5d0ad1b9d975643eed1442fb57fc668f29aaf9c17d33c85607cbca4ab837ba&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL5MLOGD%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCkZX%2BhBGYxwvB4wX2VIkbRjiqmVo2KmgfeKrWifocoGAIhAJ50dfFWBBwG70zWv2qOjkw6AUlRd8ngFE%2BJeIsU4RimKv8DCBIQABoMNjM3NDIzMTgzODA1Igwh2gVl6IVy%2BYIEnsgq3ANU%2FOwxT7GGYf8yHurCt0zbxKb88S4qBrUtwDaty6cUEhguB6eLDuOroS%2BbcbpKEKyKvUv0UeJs5O1dh8qXkpCTPNOQQw0pFj3ECNJ0DI9UtjPQXhZJeBRs91FuVa3PldS7uHjhCDDeNmD8QpY9SomebwuUix1aWwddxgwIS8Uwnt8pLcR8WJi8z8z4nQyf04xZdK0TWO%2FcgYMwWXLVLPAfHBWhY1QXrk30Bq9zIyKnTnhcOkitk%2BfwCPaMPZZttLFBC4e6pX2CJkOSUXDG5bF2VWV6SNWgmQO4hGTihBjKnxycjz74KVN2ssamCwLYrhabphG7pftEI4e5P93OEKZivZGeXqtodIOQnJG4DuXExK5GNxCcReU6kJCOzk%2F8SuxpCajf4wnsgaXT389iIPFBsv8N0hmgEW8Bmjcet0PhVISKXw6CvGjAZhwudR95BNl76opLM2xIP%2FOXlMQ58TIQEjclStl6MhEABuZ7GLLUBFLTM1nvZFF9oWNLdN63aqNziIjyDrm31EjgQ19ihge2PzlesRRgZdecsDB8VBkvnFULB8chQSadr5Y1plJIgse1drtZ9QO%2Bgft4BuVhsG7U%2FPC28g6I0EYvx91%2FBtrcs7ZUzW20j92uKRul%2FjDbuJHBBjqkATlooAyEuLngyZh%2FADiHF8P%2Bm0gWy3otja3jrRcjGIAPAd0bTOfzmJc1tC26U5HYSHmJYjmIyjVP%2B%2BQhVqHyOkqpmLt%2FssKxRYFCKHOrklfF58%2BN%2FsdcLWyKzllDxxzyzlNK0WqQew67On7u6JpgIlzJ1yEQnvByt%2BD%2BeKNgho2z43jOBrLbOjHB%2FtMFWxzAv%2Bj2Khk4Omsi90oVppBTuNkLXEtA&X-Amz-Signature=e1b262dabfc976132ce00fcff06289bb78d5e85b21488ad6f338ab41ab538f51&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
