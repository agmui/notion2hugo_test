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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZI4YFQ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD6cz40QmgZv%2BtDcDQdeW3AO5aZL5dOPo38ECrSoQzCZAIhALHQHSz07QDi1bgpmN8rZ%2BcuMgom%2FUIVKeJVAmo4DoU1KogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygFUiWSIkwFWIHv3wq3AOSAVI%2FBydHdO%2FYJ4EgZWWd9KMosGtoOUlj9fv2ehFANoiwFwRkP1Lk30n7AIBx11ersraDh3Au%2Bn3DIgLHbKxtKxbAepGevDGxzeHCISGnrZUM4XfCXyCl2M7fsUNyMRio8igrEdHKiGeTx7biJGBvpFPuossuMUZAFaaBeksjVrnym9nM1861BPCA5dz6OiXdaVAVA5mk%2BaHEPxXJnHu6qB2XDWCNAOTwuPlCL1RdTdhGZzq6Q6BjgNOUb8J%2BHuA34gPbDibIu6OZNo85CR1UY1%2BLSDKSe6Mj1y0V9UeAy8q4Xsq1Z6sgXR4SF2FwdNTtJbi33O3avjlfVd%2FqhiRncQD%2BnN1KV6UU4Ar4DbXGCID9yz0Qfmo8JjCSL6XU85tgAlt9qKmQuEZCgbwbkvYVbPDJ09mm9fDGAEjaIwALx6%2BAirB9NpKMkVoSvwtVzvGPlNZ0tU8MN1eJdYBYKfjFIbXh%2F2PvgthqwTxRlL%2BlslSiT4Ef8L%2BQ13d1gkzJKwibW7auCNl%2B5L1KevCcGp4ijFz36zUBQ%2FzBctwUGqXLZZF6It7RtoQdrY2zaeu6M6yApou18gMiies2s4POZlPSUZ7d14QwwRJ8Ub59xLFb9iDc4A9ucUjCA8%2BYCzCW0aK%2FBjqkAdJcsqpNyo0QlcPbzlwKI4HzWTNrgFLk8EplGg8VhJ2f43OVXXe8rqa%2FhlsI0FLn7ZW0BtYOE%2Bb%2FD4WfvOXwoNZkR4hvVmJYPAU%2F6rPL5HiN5BWs0YaAIASGGsYn0GdSCGzK7%2BpyCnVkUx9h8ElQUNZyWcVaNJdL%2BHV2IyZaSzCKOCfPKt3Db5F%2BMydZUyv6fk8Y2yxhJTjglCgtpTiEPpimX46h&X-Amz-Signature=0f2644ee3e2d968e68a7a878bff468fa8e27fa5987f2bb2dad00d952e31a2a95&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U7PR73K%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6w4RU4x19XLnTa%2B1O6rt3TOVdXkzB9aOozGo4NAb1hgIgRaMqSJcpTHfHRaFkvlysrte0HMKWBNouPtJPQFVg%2BRYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCAIp9C7xhZ%2BImsMyrcA4m6pmOmPVAh6FIr3AmMu65F7uVu04t3K3yOJWtqQL%2FQIwkg5eCm419CAyaiDlDaR3greCl2S%2B8M7C6%2B8XAQ0SiLAihG6lLLB%2BI7M7kVBsaM173QImYq5mOLKpzlJWUwirKRkyS046bmgejS3JAZJKLIosT3%2F%2B6lYMRho%2FCZMq3rdwFyARj7eH%2Bl%2F9lpBlAPdy4dQkXLUrW2KdV3zeGE1BO%2BZ0mIvtXpCoi1ECxRjSRrGthMyFmFXPUiqXgC1xtqU2xU1kIpPlYjXWvbEw3KavDOhR%2BD%2FWm9ecTbUfMPmuVPvOlY8A1oNFDq2QL0ew6iPq8sColI31nmIP4RR7ZVYsxUHDOWUK4iW03NrUBeqnYPQ%2BmfmABa6AITNkJ6dQyumay1LnPtj2bjbK9nFZgdkvgncR2rjGjCXkr12oudbZGGLq5ACvNunM0Ke%2F5XAtgUz3SYolr3nuOYTydGnR%2B8QXggD97szziIdcWSji3Ws12OtYSGlNOtqfagDjpR3h4cpu7wTZctGTO4t3J0VMnFxUIlhn2JEQOGkj67u1bWGJika1MuGqQOsevrZftiwwyxrnLiJK1JH%2B9omuRAslDe7DZ0TTgYTHei4cXftJLOj3qFKmQ4YmjwJMP0TeB7MJXRor8GOqUBiqmIeRoHcvquVeOYO2r2T7q2sg%2BFojz387UPo%2F0Y5hO9kW2yNsTCiRp0xGto8LACuL0NcC4ocPtgD5A3ujjGM8oOwfY7KLFnx%2BMJ%2BsNYtrYQ0o36b%2FoG%2FBRfsVmrgJ%2FrxNEH%2F9yTuSwtRIr63MV8EVpeTunG8PNzhAFuy5dSY0YWaby5xJXool90Tqhw2AwXpgpzPYGFHAdjDrEc0wO0x4XLHPQN&X-Amz-Signature=6f989a811d60cc2223b49505058d1b51f5084137270eb24fea2fc7d627983913&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
