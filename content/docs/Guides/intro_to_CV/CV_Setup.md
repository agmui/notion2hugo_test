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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYXQN37C%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCuqEC7oZ1mQZ0IPU3rpd%2BHoJsWJUQXYtWaloMSwA7Z2wIhAJhYV8LfqeZIV%2F%2B3bvGmv1FM2TDWv37Q%2Bp1ZuWGYZ53%2BKv8DCCcQABoMNjM3NDIzMTgzODA1IgzCsTkGd%2BW8lCnVrbUq3APsBKfxNd3YNAsqBb%2BYHccWcqYJJz6V%2B8AScaRyabDEavrCbiR8ei1CUqRR5KFQ6O0eAFFRvflHnO8SubcyQmRN7w84yEv3Soe8WkP7ByXjh159kGwAlUQEaede7F4judXbETw2pn4yHfzPxVCDJCv%2BQfUN3IKWSeNot30uo0k5teXeypoCDfZP40Q%2FNaDlAmHmPsk7epp0gmaM7S5xzc0%2FUHQybm1%2FChY8V1ZHW5eFf7UTcDv77ehfol54FsW02DavFuEcuXO%2BbCqNbZJvBw3KrI763452VJpsPzcxP2zHxskGm%2B7jtq28m%2B0Q7wznwHk%2FCkoycpHW8xMkjtOXjdKHNBJZXosTMTDmigMMPH2ojDdK9FtBZdODXJv2VbWbZBeniqYofexL%2BGaeoCP7WgxYMDIlKoyrKf%2B3Kar8zKD7ad4WCr%2FXu3HFQFi2jM34u%2BHGcU44K2oieJPihGcploKteqcLL8whUz6qEjG2JL%2BqStnVowffxz1RXvEs%2Fbw9H01g944r0Za41QPRIi29kTFbl4PLrIcYU3DHREAxtvNpuiqCvxObbGc1p%2Bcc9ukz%2BcVeAtUnojkHyCCTpfS1tPTX25TzpSbABwMF5qM5Jnw4bqialUFATNg%2BMF%2F4kjDghJbBBjqkAXqPFjaIXKm202zOjjO5Lwq405IrRpPLDAEWnLjV%2FX%2FpNLen9GwAGMVpIbkbXRJDRewcxt6nmKoYeqQ2daOXQJF7gQsUAqSGz6U9rL9jKpd7jFBROlRrzYBR6Bqi4e1vIILpPiUnSjl4A0pQz3EOUDUlIHOnG%2F2nloqX%2BdcFWOvpsVvCL5uGAjYLesm4vlhpR4OTS9aOWaZQvRbPU48Gs%2FxU3hBt&X-Amz-Signature=83bd8a2eb39dfd166361da6b7e11050a3b3c75e7582f21d3241b6201fd80991d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF3IIDUQ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDjUZ%2BIBsM1DmTdTyNU81K3HB4I6jwvq0djhiLfVMe1CwIgZ0b7owxhSWN372aUfaVIAszejNFmDcWPCovDWM%2BjQ6Qq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDI6AhudmbU9yUD2mZircAzH3jjrjQfC6kbYpfatUWMe1BHOi7LnEOQB9UpsSMb4HhXVak5Zx5LWj7YnDq0%2FEqFBoLExJyQLnkmU1hXICBZRiQrMeqKfUouRMf7nMqj2IX8uvhUeBJwW6OxnKeSZfEQ2rj%2FidFxlXLfGM6qoI8b0Q0SXF%2BOZLfZCeWoKWvGZpRPdd%2FIBVhUcriYDmnvH1nXjbMvhhh8r5EtYKv%2FvVMvN2qws3uhsBm33r3f7HA3uQic%2FwualsMPrafu8bRRaxvzg3XPb1NwTdsvDXr8%2B6i0UOrinMpSAnI2QN1sGJiQHjzBEKerGtp7tpd49iRQ6NlUhD1pfNDuasWca%2F8jafmef7H8UoegWMAR18SJUljQ%2BnpK%2BNyFaDCgIIvUUU8fhheCn6G21C5kJdA3AJlxRPlQY62x%2FWiT2aojiZefm1inmE15Rphx6ERG2dux3E5JHLq3Y%2Bw7VHINjJYSV0%2Fc45ZS4t5VmsYSY%2F6mwIrUJWLanaj1EoTVpy4y%2Bz5ree3CArQ1Ukn7NQWeGZX6AEDC18bJzIKNDjKqPrKe99UkkTcGDUYEc1QNXvxsDOpUGX13KiHSRuzowYGms2qV8O8Oect5kKbBvxhPjCOZAu2iOcUxN5Ncjxd4Fw7VO%2B5TBEMKiElsEGOqUBlB30uk3yexgGaGjxnF30ExWDbRzqUBpZW6r%2BwPa2aH2TD9MPokHeu0RfKPIxS4bREmAk%2BejXo%2BmsY4vQdNYxnII5diW8ToPNaW0Z%2F9UN4v5Af9NxPk%2B2kqxHzYmP%2FPyWGd6M0Gy4Kbu4Jh5A4heOL6DIrQ6SEy3KAY7l%2BNDV7AbKdbTHqDpqAlCIT7CIVoZKv6fQV%2FnLWU318HMF0UGfsv%2Blc5O%2B&X-Amz-Signature=d9ae48d6e8fcda6967f8f0b4af807ff87074ed6cdb7233b5f22ec8152ff4ac58&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
