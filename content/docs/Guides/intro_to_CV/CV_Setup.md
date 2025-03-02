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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656UJK3E2%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC%2BRD3kvtzjQxzmtLQ7eXowf8kGZ9eruhWASkt2PFaAmgIhAL8bg7Hu3uJtlEH%2BtcC8cr%2FpOROd900FdbLxN7QqKOL5KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLvzBsOA8cocxU1OQq3AOkChtYH80FUnP2S%2BCC6Q%2F8YLcEsJaJJOcUt2bi88xbydE%2Bw64PyF4wBvCPWAwjpnEpgvSfwroFmeGbSNoEYd%2B7KNu%2Bft%2FYyTzumRdsdelSHWtviV3AdeyIbz%2BdgD3fzFxRj5cR5av6G88hPwNZhYIdhUkiADF1HEHDs8wJtbBvCxrEj957E06RLITXVPf6aNug5hRz9oMHB57Rx%2FGiXPUKCYCC6tkasSNbaoZU9s%2FiDK2hAPuiZu8J3mRM6d4304RVatpXBxIL0HyhRQUjCGRor%2F95Qx3nuPfoA1Dqi0faGN0kHLFb%2Fo3SxNcNNPzMibmGJFznLYyv4t09xWL0PfTv6kp3uTK4yF3dKiQK3qKEtMbfezouHzxcgIzivvKP59nNLyR%2Fv4hZB0aK7UoFFd4tAZUhp%2FM2%2Fq8D%2FdhZzW8Xrk5EIJntYYUi1dWs%2BOvcMqK%2Bn8wR7B%2BC8J%2ByAZX6x6I9YRjxKMQz%2F5CHGPljwgri9AoE4z64ThNzwt5Qopko87BQBrAEZMFuszq0m%2BowDDJYjV8tp9eOk2EYBjWHk14Uay81EUEJ9lVlGbsLyM2hNnXoMaRou7jbcfDyR9rTptb4TLnyWRufTx9f3n%2BjKurb5CLCCoBR2aMXpjjQwjCu9o6%2BBjqkAehG5yi2Kw9JA%2FDl%2FYJiHYQSTSAe7cOnc0CU8dmXwiR30%2BJ5oIHMCaBTbak0tjt1Wcdg134cfqQAFGPnjTYt9U057XB0W3UCqBUmy7tu2Ww9UT4NyZfOm%2B9hyJyP39eFRnvNUiX7mdRy%2F8XlfAO0M7jlw%2BoADL08DaUJfPa1AQ1koEEtzJzszT8InxVY5g8ZPgGzUrTFnVR%2BXC8aQhp1hhRS6DGT&X-Amz-Signature=7f5c06abfb1916b9f07a51d64999301df1633ea38df6c6b254730b763a837d06&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJN4MF6K%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCUfl4TzdwdlQtRXnmOHdDCL56LuOkx8UqEZAh6l7VoAwIhAOrmPgLie9Y3M35r%2BRs%2FB%2FsOetLgNFFX4Ag6QEj6Yv39KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwxj85YDFszX0tbw%2B8q3APBNHHfTzuaSqKvyAGEyxM71CGhxxUaivUW5NKL5ox66ByBIvsRHcrEFfGr%2Bn8B2uUQHEZvH02s3lFMC4BfJlBrZ3ui7vXewVjH3MCTuPl%2BsL3RHITSF%2FfA3NU%2F76theanen3IGaGh%2BXJb2LV7MNit4rBB1ixfm6TnKjwVTo0flUV0EDUAOZl%2BwlDrmD%2F8pqsuf6suAgiBZ5UoFrvv8Nu6aCRDcmHwJISi7FSMwgfEA9mmWETn6Q0FWXZsNQCk5HST0lupLQD3YF1gWmnCTCjbHcEFzLY0Ac9rLRQx6ZXUtsicD%2BaRdFU7oResBrcA0%2B84a2n9ZETMvNapjo%2Bvwa40ae%2BNdxFHkBRWydewAGgN9NCVmHnC6c8VTgj%2FqSgetllV6Wb%2FzFGDqGzG7hptEnTGZ1TSDOEKTLRJ8bpstL4y8n6UVibS7bjjxjNS7Uu9dJMSY0g1ByUFz1ueuIXhUKIYr09o4QUpbjth5WKWN7MloBuEwC8hgDWRvSzjWUi8CiDvqX3IVV3g9EZ9P9bvIlH9UetO8dia2ofGlIKLc3SZkHUMU95vAqb1sGZBtmjeoGAniv6BdI4JpKGnco2przB%2BTE5jVb%2FnBBe%2F3%2BT8px4RIrjVrSvmB38FuTMT6MDD09Y6%2BBjqkAfqXOK8M%2FuiOxw5QjdCYAMxoto8xWIRr65CTFH0tltVFXk%2BCerVsWC21fVpt1IW0DqZjMTsFNGnq%2FWEq38lWNvLQOHxlJnyrKXMan7q0nk56xPSxDZ%2B86iTZeCbChXt5ek85O3XZcybXA%2F2WclMn%2Bq3DBP834xlgK8%2BMe5JRFDCIwG8kafL%2BoFGomFVmMoort7bGGLb6mdT0bYipn5vQ927gnnfm&X-Amz-Signature=dca633dbdb7f8fc23b692080a7b1d3c5c2af078a166547307f7deadd79e2d580&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
