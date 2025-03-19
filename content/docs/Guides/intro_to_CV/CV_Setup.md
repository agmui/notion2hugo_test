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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WONADOG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJFMEMCHwSplVUtdl5Lb%2FTWxzUG%2FW975%2FPph9Mr%2BMS9jEIKDgICICAVk1%2Bl%2BIOVJC%2BklEbZdS4vK8b1YjjZIpktYagK5sGNKv8DCHgQABoMNjM3NDIzMTgzODA1IgyvgmuJa0QmLLcOZe0q3AMlPugzb9XcuGN5IxT6sDY70Kugcc4vSCh%2F7INzBpDEW87wsQbyKVkR7Irf%2BKz5lHUQt92poZ2DbqGUfzFT29ZF%2FetcgLd%2BhUHNcGxu%2BOXlk228%2Btsejqmqr3GU7q47y%2F97dNit0MO9rDD6I%2BLjDtQx79vFGjAZyCDjUIIdBh7IkkUw6Cms9b0pVQ4EB0ptPOvASRQIk9Ah3yYDrkCcAtCdlR1YLCZg99Z%2Bj7a5ZEnlZfBwOCNvhpL0x7YcP3Ts7CJS5%2BqsItQCTiDLfpp7CjUu%2BVDg83NPozmfh9ee9oKo%2BZTaGnXoI%2B8HYNGSbezN4%2F%2BOuPgFBPt1iBnSZlj79Rc5hVs7p704TSTRqK5SsnUKKBZ99HMcEGzqzYdxsIMdRZcFA3ZCNOqMVlh7u7vtCiEu2KEkRx5kN%2FJPH2QkO%2FSkA2X4%2BbUxXrx9DgRH5FXcofbqE92vsRhOB659m7jLgY3ZWG3pVBFj%2BsZ0kAklv08hYzkS493aFzgNOYUmMlwLcJwGOf%2B5z7wirWXZBzgRJFcTqMWOu1ech6CNzyE4QhQ0USZlLlIJwFs4hNPMPCuYEn%2FRT5AaJirimgUZshcJrF28cgdmFVv2Ly2arbDdHZMC74QuSzp1y%2BP8lQXrizCRvOu%2BBjqnARCRdyYH0n8SSog1N%2BbptfdUsHYwYc8nwyDfFKYAp%2FNK38ZpgCNRN25G0K0a6FipVCbvF7ZJs%2F7vMW6DQA09VJonsODt9v9ee8etAnociIT21UTXZ8EXM3Ve%2F18pCNdpeJ0CizeXkMn0OB0ofZsJRik0Uw5B2uRAjxptbHZYQuAfdD4Ze5YmQ67ZsBblEgt4hhLFiz3klbT%2FdtsqHn02JP1BvhIPR3T8&X-Amz-Signature=d1ca3ca7751ff7a5c5b2adcb657f2c9d420781201cbd9dbdf82b1557df336267&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TMLFIKA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIDQmU6UE1OX2daEZUHMJJYgwhwemEQcMF2SFlrqP6wReAiEA3f4%2FMqMw4QCiNWfzh1IgT%2FVaxZTXBhkPOTukKb3GilQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGaHELJS2OtbFnbfLyrcAz1i4JtxeBEY7RCZwpMt6hp%2FrTSqRYW%2BORBfFMk0vQ%2FpeAT2O6zWyUhJB2TXOtdKa2F2sd%2BHFskdDY3UgD3t0Xib02MG%2FbhR2X0qWJDCq4Zjh8WEue1En8ntKydlzSFp3yHHR4xQP1BQn48UN4IyMgz4Sy6qHPzRToRBqeun7lcY3feMBZIKULBYPWV7NWk8LDj3OcDOK9w%2BEl28YI7%2B4Du%2FpP%2BE7epPtPwuUTv1QORnd6%2B%2FAKwUAvvVzp0eaXcS%2F19UUW2UgAOWq7oZE0uuAOfSxaZNJyJQXkMgx%2BtF%2BxmdtCbPaCkN%2FjbPk30zDWnfmmxJTXajFiAWve1OryoS9q7mV6ngmEN6KfAUj5rXazRsBbX3DG7TR2Z1xk6HygCDIzRbLXc4azo9FEL5hALDbZaMA5JjeZOQfsr2dc7jBU1O6DkL4X7yIijt0fbj3hNsHYQzJopgH6TI99NXnFZKtmQnVW5NDtA16JD2cW6D6iZej7I7UyjiR2UDx%2BWGGmxX7ZARB1tubSyBMPbiT2Ktn1pfIf3QgFjPo1XTIOJFbaPRp26nnytDDhcjH6D4IN9%2Ftnj74J3MZYQlF7XuQ3PoKGPqnTMfFd40O23e8i900S3jdOYzzEEj1ordsJfhMJ69674GOqUBq2Araqw5AE%2B3sFggNJoTFZYS6La5uTUbbj59r0g5TThWLh5KCgRazbPuwyN2c%2FI8oQulrUAXRcwV5sRhO3GULqcfXAf5zPBJ68MdbjDMFVE3KX%2Flg7Fps5EcNBmM54sc5vf7c%2F20QytmhEtftCdvcAuoykhbsu%2BcI3t2jrLxZHC9nFU86O4KcqK21JgmgEa%2BoLxN2cvBFYLdQ%2BQSA7lHVbDwyS2z&X-Amz-Signature=9fddc5abc1f328ee2116b64ff848ab96712e0ba693f2590fc8fff352646b4ad2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
