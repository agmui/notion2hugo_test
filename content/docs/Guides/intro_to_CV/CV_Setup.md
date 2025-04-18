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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYDEDXKM%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAc%2BNzOzUskRtfr5e2sUy1TIW26GlFtj6IB2iVvS9jsAAiAGPDOhGLTyaSUwhFUOyfj7Gsiz29MfzxEF8nSuK%2F2lmir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM0FVKawsIya4EVMUKKtwDJ42o3ZSw%2F3e3IPcvpZz5stN9dT6ZfPrniDUIuhCs2WflxkWEuqJMKFn9wR7F2XQ11L9Fq3qSfB5EJwTfH0rNhc8JgtNt%2BdlJlQ7WPaG1yXLKFC1aNzsfXsfG6fOvFftNUEMxUNUyjTcM1GXgVoFOQlabHtLBNpa5sTmxUCaJ77YHtDqRiULtpkp11pUZPzXtad3UfK5%2BRYJbZQQDQolqnvKVeJ9vZhqgGjgXlaOrRjzczBZcOj1o1udKAK6yoxT91ODUViZtB5q3dSLGHS28vLUNYoN80MyX9qRcjDqIcb50ugJ1wyPQwmb1OFkWJKb3JZEP7CQnfXHkrma5jtWARvced26hLmQ3UeB5bOFLpY8uRQzrf9jxc%2FE1uP966j4%2FvCRtR5drUeeIuTp%2BSe1dZQLFV3yGXD4XAQlgovpEy7BBfWAF%2FqvkljNclpxvMUXJyYSFX6NrI2bPTLFJf4jWsPue3yePm4HNJfGW%2F0wYFKHCaMU519ZHfa4L62NL8N%2B3iy%2BkaB3jB%2Fh2ypOqPQrte2paj9kKOBHCy%2BBPdnWb69y6HCSP0m7%2BwkbI8DAOHesB0gwE0H7iP7srM2%2FGxCkAt9DN%2Fx8667USvLyuakda3dA0VYLYo4lsx7aY7ugwnfWGwAY6pgGdsx5ofWs56cp26m3PPReIn9UXCrOIujh8I7GBvtpG%2Bbqp%2FrqLyjF0rUCP20814YDRmZKHBI00%2FvPVrvG8sZVT%2Bq%2F00DX0NggloWfJJg4AZyG058dP%2FFe6pthCRTTmpeFXsZ6v5jDjQ1Hp3llfBPY8QbfcNEcLs7k6S4D0GyrJkj7zNiG89L8iJ4eyO2pqw1J8IagzpNMXJ9lFINdP9yIXJkBxGOPP&X-Amz-Signature=24ff5f3454a9d455f96fb7ecc998c4192d626d742b7fde8fd217f91afbace56e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWDE5HNC%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEPDz8NTslHeiLfreCc7ZkExQUb5crteWWNIzzrkBu9AiBoNUvUBpOS40LMq31Fr1f4BnqljXevodtjY%2FhlTg0Qcir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMK7rfC7qQEmjmFcZMKtwDhOv2kX4cXQImvERVMOhv2z4pyNWy9IUNlPrzAeVCAaHeCqvv8uvPVmE9VBCzqz5uUKWl6a2xL6pr%2FrALxmpe0h5L5PYXZAVBhp0V73Usd2jkpQ4f70XM2HuZ%2FjIx9iKojr1QN9u3Z2U9LIfyp2M3A669D9hA5Fw5uWBng92ActNaXzHMh4tXh9%2F1XBxno322Z5f4RQ19rarsu0ppcPdC4P3SQsWXqJvHhrice33TiPK%2BhKfB4TjyRtOUmRyzZXpbkSZY0y5TOmMGVjvb510CHnoCD58oDbI20JO0TXc5ju14EumDywrfJNZBPeyLlans4sBmuqRi%2BS5fng4FU7n1gEo9%2BhpbvFpf%2BWVLKH%2BJohHexQ%2B6rp41E9SUswP2qnpwK%2BzpdwPh4GkJDprq5RZ5AxBEgHyyEqR060YEwAMh5Dz3MRnjtG7H10BP8%2BPvguEZ6PYbGO9AuasAABTo5EfdlZVO08c287GW4YTSpaPgJLY%2BKrwzGFy5X3DC7EkxXe9cc0NGaKGK4rJ4QU%2BeTfiORkGcfBlr2i6lWrmzl2F7wG1zgdWxt%2FvZd3tvDNzsapZxihcr67EviYMfw1qH4n3fzAO2yhXJpPgwwia60rHiWwyKKYUKoddnJ9oXUWwwt%2FSGwAY6pgFtTopZW7YyQitIzdeD6XyMLsDCt5Arln7vVU%2FkhsIemnGUNBEXGhiN1hQjxx8j7y2iLdA0SBtcdYwWVLJb1kxv2b9e4WuU2MC4Kxr367xZ8z%2FoOJV2eFcuAiNRlXh4JyDyjNQbZx%2BXiUYxf5QhFeFOmAM%2B6ygbkx5y%2Bk8YhBDMbGtZ%2FR2eEsiN14klMqnC0Xf3Ln4GmrwSJ3xA9BRxdXM5XaveVbGX&X-Amz-Signature=cd94e5df5f15dcdd32e279125feb62a53ae9fed3c96a40f51323d1f359713167&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
