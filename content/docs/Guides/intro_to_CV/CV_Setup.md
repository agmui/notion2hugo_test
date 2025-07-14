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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5QMWYAD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAe0c8F5hsd%2FLDY7svB7fybD79%2FJh03y%2FFfGkQ822ijzAiEAnlkQBGeUuDDLXf5d6RqwQt3XOQ4DiSGvB0CkIWI3wzAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDK6AYyT0fCO9cvyS2CrcAy7g9k2VsJRNx%2FA%2BOCCkXcN9DIQgk8l505Q4VLxV3ooPMAlHhQ2Kf1u6Y8FRpF%2BUeb4O9UtcmHXMYvhg662mVNuSN1CCUJ%2B%2FNjJhHTtoEhHYv%2FO7mTGgBd%2BBFJy6RiyQX9akpRl%2BS2Yo42pNnwioFQLCC7XZnPxhcP5O4%2BRfE1tSZYGHanD4jfXzbvZE4v5l1NFHuqda3O5aMipKzMslWgDcnW%2FvrgUHhekNBH4AGtbu4AA1RbnEn7J%2Fvkgh2XfiP0eREDQR4Ku1Mh28QIRpS0GvKSplCJ%2FL5Q6BcGV59jh7HGScKNDuneZdQN9O48dqXvaggp9o%2FBnbcS3hcV7wOO7r8o9iEJY0rsFHC6N38GlF3E7YzEHHaIUUPwHVXb0E0FHI2FzSDle2LQTbBswTm%2Bb1Af0lDyg4EF6ygH5%2FYvOvkyqTSERzu1GwSMQFmv52214dq5U3ouha66IpnrRIh1KssBfkUFxP%2FD7FGQxgnL9z18k3bH%2FvMVevbnwDJ%2Bg9il1k3jqGyl4fOrSOisfh82NpiDdW4ndqhLFMOyqVWt4ZjjqxY5NFAIBZLB9VPX9%2FFsVK3oSyL4SHez0WFhiSFSK6a6Zd%2FVedBLzTcV9guqqIXzZIeMu36Zy01u9BMOKF1MMGOqUBbILYJdjW0oIA0u8kFP4KEWvOVR4N3%2Bvz0Llwbx3IfC1NBougCX03A0D0c8BHVzgBxT9U9CKHB5z%2FesLZxVNFBN7zz45CHrYtQM7WUy4NxQdvP1ON6zZiaAWoUm%2B9cAxnRcyKzpmNkqsYht1QxEnaH7za0XB%2Fm2QIsxIuZVPC5VW6GNQRf5BVqU4aROVAo2zA4FBZx3THVEnQ7VbvMmmUMdUdhcnP&X-Amz-Signature=de421312f46f0fb070817da5dc5d98c7f31a5232fcf83e9bafefcccc839f51a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUUFNKB5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDCqtAKud89gQ0VUdbzxQLz%2F42ssMBJboy%2B5bRXwyMBkwIgDcJCTToLttB2A76%2F8TzMWrgV8kWjqDt4FFH5fpIwdWsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPUi%2FcX6LoGDrJK2RircA%2F12wvZkCHd8StV9K2DiyUr3u%2B3MDGsf1EOICaOsu3XvatFmUYLz7lY5JTk%2BCteRuw6urGetkfrTHKkiSt1GUJ3XtIWQRRyMcBjVNcHcQ3aI2OTy5MhquIvsf8eBSSTzM0ZsiXLKrEhuXY18mf6vgRPNEfsehlTDYDNfNIhy1cd2JqMsmtop%2FcWpKNUpVFdjBcpYd1pNPyQE%2B0mNJnqhetebLHdcXc2Uta%2BwXj%2FbJFKhRxEPO1Gbr38f53S6ZDFNTWm6N5SlUbb%2BgLNPTZowzLzmfs43xqq3gx7iWYK3IlnM3viOEodt6XrfhgEtiPW%2FytGJQATJKkEt%2FbV5a%2BZQFiic681vcp1sIpb1RcT9wPvnavGZTK%2BPBBVp1ehS8B2I9Aj9ZqsIvqF68tZXwCIRyUBzrjnhqD%2Bh7AdxSl4pHZj9NnHIOttUR7p3aBEZJ594ZePkP0EZr60yrPg1Sdpzl3uUIcS5Z86x75PfrbcYlyc9LeEC9IulwaiGdW%2FhHuSeAGKXeEWtBFM0EuiK2ZuTfUpcuRD5QoMDB6OO5pfdnzY0WDaZHLywVutJ68JyW%2BOS1nsBXiaTe0krGpkBulrwFegh8rA30TWMG5onkgJWkH6QD42yL53I7e5pvoG2MLGF1MMGOqUBDycprJn9cu3I9PPRxmlvLnqqG9Niyu9Bk2C1Q%2BZ1Y%2BD5XJJfwJfOf6u5WaN9xZwQ9h130J0lxA65i2d4d0xXxRSikC6%2FB%2BcleKY9QydmqkNd%2BzV8WXXAPaTske6J5SK5992zNeujkcQ1Yi83gAgVt1cbfpB1Z5Wpp5DRiHTmrAVUZtmG1Mo5qEy%2BuHWbRBUC%2FuHQFF9xShtm0aPxdVDcmI9L6Fub&X-Amz-Signature=2b5a6c4baed906bfcd4258a6f05d15342c9608423c825105827db2adbc5a56f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
