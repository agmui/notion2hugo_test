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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QYVRXCP%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIGf4%2FMmJBAetgH%2FPEqVTAo4uHA7ZSazXd%2F%2Fz0gNRH3ZkAiEAzDB8HmrYjDum%2BoQ3C762w7S%2BIBAT0s2LWI8gIYCaZOwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKtEjAKk8ShZeG5kFircAwf3e7XDI12Ay4F3iBkj%2F1NSWlCs%2BwunF3EjLy9OnGLHT1tCtUhoLEHUbueaFfpNSaIMyxqiuYtVoksP7ZNwtb3SgcpSrxLPnb5E5HsS7zu6UMsmqivmYt6AqJFIqqGQPCbLfWEuqbX7urd4T9RqfAIDo3IXgPKIkgog4OCoel4NOuNnN7yMySPlsqCsBZYfqx%2FTKyheGr5r6gkNBgpYAlqXYfpWLlsz4cimAxn5R5CL6P6Z%2BZKpe9Pd%2BnUUUVHxB080RJU1koA9PQxBzNXzJfPaJhaUbNJfnSg4kMqKOB7Jk8lqc2hrwHee%2BtNv8Ij3SEvjmyZI71XJkOqEinpVvqzLUtvInsVMjVXdcJ%2BFDcfwYwIM30I6um%2BGqbE1nEUKrSh3SAaEqV5i2Uq7yGDZokqWdEuQLZrDuGsZkVkjhn67FpbctfTWlA5BJx7s%2B%2Bdnevl7UhwwKUj84l8tcxqs2q42Hxe15g0ll57%2Bus8BU0Yoch2vfYV5HY6SSf2yP7oK2dGIeOjK1DT5Zru2LmMvg0A0lh6KWA7U9rW74AB%2Fh9RtyFeUrkNuqGEcZaSTK782OYJaWGRHi4OJyp2ovb4cd%2B9GE5JmzfKJvEpunPb%2FEekSBXpKAfyub4mKanMAMNz%2Fv8QGOqUBku0ZfDJmMcSyWM6i7U2GaxJa%2FgnutvefBqPo419Rtbgb9vuLmMv163itUlbvkdQhdn6m6u00h%2B6XDjmRFACUkEg8sQRVQBLrsv18oXs%2BUP6x54ztu4p2dYSYm2KjMkPUbKA7HO50RNE93Jmkv8oTTFqYxD3XO7JZ6n66w%2FwHKrGqL4LM0Q5YlJprT1WvZUkiB%2BYr%2Fu11IZEoup1yqtieA%2B8Grlv6&X-Amz-Signature=aebb316e39339f78c23a28af2712a02df7d58f6429b00c98464f0ad8e2b6254d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY45I42V%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCDyyUNMI4%2FyFjtQbMvG%2FRr9Yvxl2gIG2N5vLgdSIyK6wIgItCMfR1o0x5oQbajUrzukQOpeSJA%2Bnh0cv8K8V2jvygq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCwvIc2Fpub2e4IGeyrcAweUOGd8KUe6smcWjL4Pl%2BWhtj8o67thXkMLPo5Z2WZzqedrQxyc%2Fn4%2Bi%2BgpAJRz%2F87AkHU8hv4eDiuSlypy5EBctary0soLOzZWYgho2L8OQLsp9TK5Tfadbw%2Fb9p3EIX6x9QsLVC%2B44y%2BSTlphvVzWSaHU1G17nElTkZVYUiKcW0hQkHtDwlxrnRxOD6sD%2FxX3LljGQeD7ndvRKUP8YaukyXH2XuCvPm4mn55Kv0X4NNuuN9Wui%2BXTQ6PnhG2n8ZovaxBjp4exurJrkA%2BQW5QdbII1pvsR2E6hDLfGdnpN4bswXD2TcbtsCwMZUJjN6xexpC%2FAgBVmGYBclH9B7upJ5z3tSAZGxop8sS2fNBTzrzaRlUFdCGGwgVXia0ecRoyPSD3tmsrLt3fXAMv%2BGubvHOB%2B9rFuDtyiAoRyF3kEjY9q7davwNLnzgmW%2FJU0tSLsGrUB1pMDv%2BsgZBTN%2F5Eww82wvOzO35vxrQYn%2FsptZcQZMK4%2B1gjXEjHjMVY6ImbmNhkfhpuirN%2Bjspo7H1CGxadJdfP7Wf528zz7Q0I03FmU9ERx65ly09Aq6Lm1v47Bor298BzoNIjQfubdOY2NR4x4WMCNd%2BaJKwn25hceH7BU%2FvsUQNCDY7PpMMvFwMQGOqUBIWSSAmYzkdKs6IlpM2jOEaMcaPa0zDt%2BWxV%2BukvLB9wP39xTmRs4%2FELEDN601t4HRX6AvfcikBPuzxGyng%2FOGuo%2BRbeD6Elc4BEc4M237IQBlv1KZKcLKWkA7RKPA1n%2FMCYbleNv9NWYDLaq%2BrCNaXnKs28BHbT4x2QoXpA2G01%2Fka3wxDjQ3XIhIBNFsIYFwfq1AxXf5bv6NqJKh8Zt%2FfWugLUI&X-Amz-Signature=64ba4d10e701d59b42aeb9f11c6a54b7cbbfe837acf12c39200238d8e2b09392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
