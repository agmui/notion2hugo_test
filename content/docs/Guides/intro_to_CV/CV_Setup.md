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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL3PKOP3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIE73DOjhaJUD2iuUfyLwmTsbnXEL4s1gHIpYo1U6T2CbAiEA1H%2F1xYTAjldLjuCJiLg95hUimRJ%2Febk2t5i6VXegw%2BYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ60rnwgj24kEceY5ircA2zQkmrYgHXJz7XtOmfsVJyUK0jx82j1%2FEOZ8ZxR8kDJ6JcGbHb8El3mF5CC71oLnOa61H1f4sNW8gcnDogyYo4YLEqKfKCNIooxYozSaN9jdFIyJQzTzGuIX1VgQa9xNpgB7f%2BlvxD6BQ7m6OtbjVeXBdCpmPAZCfFKKXy7kbuPCNVr14CT3gl12lPJ9BNxIvcYf%2FUWRU%2FaBtOVvUZ6eK4CmJuSC%2BLlE%2Bzk%2Bx5hwb7T7c4RhN76G1zIGClBND%2F%2BX755wdce8uzooMeKvpyVfWyodovt8CxIkbLNt8ZmqXKDU038ZJbqRQIpyH8Rhj4ZhfKl5QEp89uixFJrWLN0YGC7nNGZJpxevUf0670oTxhTLHbZ0JHDw%2Bpo2Y5SurOzOHyeE8h0J%2BknYkrNJqUdsYDM0jo3HoNUrLQ7xToWSIVLO9cEpDl3Hn6z2H%2Bw2E7eefKnU8DbThHOpsBvefbEQ%2FctEg9wCTlGgA4fZYO9SPCNnRCBw4rSfdKvswA%2Fc8NUriFu1z2XHVgUR8DWEZW87%2FCjNgqSglUs%2Fb2dGLysyL8iz1WWBQ1SeBqV2VBAXfH5y0J2Cj%2Fi9oBvV2nJ6GlONaQIk9grkIcVr7d2yYzsRd8E8dhu4V8dZhkJyWsMMIXQ6MMGOqUBH7T8K1XolboEOKB%2Fat9s8D2jbhJiDIzPzo915us%2B1xI4EZLTTWvP9aabmzElXQzvfGAeJarnrTuAqU3Ayl3vkbcdyIFgAH4gVAai8hEvQvyjfnw%2BvJHVylZnWOoLAoIyPHiMpq5D2ftMzew1rnXcm94s0C0b%2Fj46Fi7ru1hcq2X6NQCD6vRw2nY68ZzqplT6EpuKImp4lWJyxrJLB3ftwVzOhRLU&X-Amz-Signature=d4257e0f152f573650b2993cc6ec63a67a263e85ce9156ca43f73a0d81061366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFUNX2YM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD%2B8WyEDe8EDQn25%2B0p8gL2c2QHxXrArhrn3Q%2F0GUDJOQIgesIvrm8FN6Ne%2B29juVhOZBxik7UQ7j%2FabCXNgTPaSaUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKQEjE8oazPJ4P2fircAzdEmWtR5FamlePTThM%2B8qbgpYGkJ%2FsUwv8cpMe9SF8C32JQzPQpMrd7AmbpyPsi6iQ3pclTnTdQNDvGkcZTGSLNEIRjmARpGVc3h4ZD%2B%2Bfn21OEH%2FvFKnI639LnXLUYcplbTuNUAgMPaKmMCody9FYTkLoqzCmDZGBj68pWGQ1u2C0DQ3pZynBTyWWZqOdt0spkkZjcbfVfvPe3iowF4O%2Fk%2B6zyIR%2FpZV5z%2Bb4uq8coaTVj7vn2TJgHwMwYAQHvgXMqJmyZ%2B%2F7VLwBWxj9Mr3kbBGXi3pcPay0EqnU9EomdTcpW98Y5ucp8VQAZSyHpCDDXqn42vspti8vDYT6LZsDqJ8N93KgHma6H0AYewkOQ53BBoKtL7rzab8Q170RY8ppYhSHmuEMVRXIE5JNhwHNJpYSvm3tPSLpUtz8vHPOZZtrYCSbOJBU5guE9ddtLUc0ePXrwMkj2kBHKetIBwxS%2FHpP4DP%2FxinhcyU3YPWWx3sQhJBUfydDtmPet9IRv%2BSML04pX8Zx6oXbKIm4sejRS9pWivdoZiWgHxk%2FxHZRaLAxq2H82L8DeqZCK%2Fpl%2Fz7UNS%2FErU%2FpHziPci5qYGbwek4lThli6WqJENpaFSLqSnylx94HYnTKgqeLCMMrP6MMGOqUBUXFMvnlCjwsa4DBUVYDH0i5z0zaopgpuRFmwVVk1CVjsXFLjfLnAQvcxHP0V4IxON145u%2FdSpOMsw8h6wZdbMv%2BAxUlLOtiXxJhgjwAzIuzKDXxRVjMetWxY1pXHSY7Tq%2FRuHezAqbQPAWXb5pIShAS3v5YQqOWmetpaPiCOA8Am0mwFqwhx2FVzj6K0iIA5Y%2F2nJzR23dlGU0gJuK3e6dgPvSsw&X-Amz-Signature=fcc209228f566cd1bef8f1b15d11da6788fb105e9d470f2d3f069899ee9dcd98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
