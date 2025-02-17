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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZC6ENC3%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIH7r281IUenZIM7Z44cBxQpBMO9z5qsTPBbQcw1GoSoaAiAA1IMVpROGeZrZYuWALgBkdp7OPVenbmtN%2BgL%2FumizXCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMDrgphMFbVek9VYpGKtwDco064qmisquN3xEen80HnY60h9Kv%2FbS7R8ccsIiXore1Yx1BtHTvYQ9cJpCL8m3CuSheI4eyLaIk5L4EkV%2FDOXbySiweHMIpCYxaoZJKhsTnVyHNbl0wHuDLAtBKW%2F6qp%2BPUxvEUhA%2FDJ9Ons0TI9MAsmc3CROuP4O2RB5DDyYJxH6hs0b00GOG1jn4Wv%2FSLQjq%2FouPNBWPSz9uMjX1vNpiMJUThTuGx1KcaAMj9uCmokHb7a2jwpMQf0c5Wz4MqEWrDxzf2ICvohFgj0jz%2FFSuUJ7Vjo9czWvJt27Nf8kUarZAp9Kn%2FPrh3WOUGdSlfU3F0aerWMqnt2f6mLshSMEXFRjtEiPo%2B%2BTnRa2xFg0ggrIk0DUqIgQsc3KHTxjY9nzAgGFiMVo1KSjj4GSJNyn%2B%2BHbscFlRG0%2BErfVYAfbwN2rplXeSYSptkQJCtOAyzDJ1ozDfETNQFfr0c6mfesHOTWdKZom3gkopXRjrUUCWFFBjgnqBxVbvWiSbD%2FCb%2FY9WNxBQrz0jkoYgzOmgzVHocTpd%2BxF%2B%2B2TNVGlTNu%2FA7XmCQ6gEI5WXc3n6hhrqSK4P2c8bKCcN5MYqsg0AVhJ7dG%2BlsHSy%2FdamXhn5xfBVSVLaQP%2FngVoR0VtUwsdzMvQY6pgHKuIBDqVOPwJdvbsLhaKEggPnLn4PzjWpo0qT0GCo%2F7XjHiDvC3iPv9h0apPkcjC%2BA1vShJEzpXVRN%2BVx%2BZfVXbeJgbnQ%2Bqf4Vh%2FYZct1OiddlTtF2iYK8ju5x%2BuVk6rTV3JxkFxRFunIk%2FIecjdXXPF%2BIDVvOPlu8%2BWk2tl9pRHCZ3U1QUbt3eIpL0j4dNDPhd7%2FvqZeeX57oJNd9ArFmAFTHDRxx&X-Amz-Signature=e9781adc38cf4554ee9e1983b9321768fe92a1144fdbc6080c2e23b451a50f7b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSZLFL5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCPSQtJlenqH1vEsBzfo4xBwKwpOA3o1NkaUAwjjLQ09gIgRCFAMaSKndX%2FZUjHhO%2FyETNbOacRGAPDSq7tCR9NcBYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDN8ohK8sn5RGMueUkSrcAwNhmWcmxNzoO%2FV45q1qGOlIBu98xJ%2Bu4ayO4dgWT%2FCQNF8vAyzxFB5tzKcxsPMGjQbymXY1qEwP4W3qr1RFI0bMY1Eu2SL1fZc47ZyBOftm0z9ybRd9IZwnFTxc1717mWjwnIKGsPEjSs0qSzk5LcWXer%2BzzKH0PbKrXQf8iS4e4NLbW7%2FzvYxhhTPj99UcIBqYCcOkeLL9nAxP%2BAZKPBy3zvXQXTCEcNqHMAUXkwdrFJrxEBvdTmGSSVW91ZSHbzM5m8uSPAbV4dzYfZe9mozRGN6ekJUfa8ZRg2f4ssWtgir5OhmlAWfjnbN2e78f0UBpKzQfj7nBQcnj4ftUJ2L%2B7zF%2F8RcZWKIbkggAipFy%2BXH3JP10LMTbs%2BvpjaPvQN0bqNQ0PbZJCVkEFYQS5hHPgVJVTqYZI1Ygn7b1pVBXAAIwfc7Ca5eLE8Q5PTXNPpcu8l%2BI%2BQEZoiAyx4QHY5MUF1RR5Ex5ELHYn1IkKdd9d9orvXNZLGztTJBDFDOrKOj7wKyNLVYeaGSKmEAPZ5dKsGs9AM90Kk7dqKE4ah%2BgDqzVXsgx9PgA%2BTpvDsnHl3NoNsJy4dQxGwjM3DtF5eHSHk889Q%2FQ3LwArVPIjVbt9uwPVn1FLYpYhP2XMPXbzL0GOqUBu9GxqN9t4vuq8x6Ea2MYn5xZMsuqxkvaAmJy0m83Knor5V33mmzLKmv8%2F2s3DDmgHVZKmABtW2V%2BlPyaWXHshy8fu9kQ1J5TR2%2BtEBLSOEkqizguh%2Bc%2BjQiGpRuO%2BxsQYPs5LsFjF9aa87zGdSQo0I9io5ucv3QKQ4tsXJzhP3FofFLh9eYrcl%2B0BYlCYAq1bwjtLyy4DTLTeOKEl%2B%2FgWezYvdED&X-Amz-Signature=137f5e04921feea109f75bf8773cdae4a33a112ba8359786d14d4d7eeb80fb10&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
