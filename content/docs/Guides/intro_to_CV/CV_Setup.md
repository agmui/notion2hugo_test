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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AN2E4B%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIF3z2XMgNzb6FJLcyUTjtwk2eGJV8mKz03%2B%2BzCcxM6DMAiAM4nH4p3%2FFsbve1dUYnBaBaGKHWVlJlSL%2BRTW0mAnTNSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMDK19%2BgqiqIsRZ9hxKtwDOZKKdokR7igpCmpYZnVLPe%2BSq%2B2Rt2lVrRa2ZZchc3LINKNaoBRWP%2BsrHlozpa3blOVV2EP%2Fv0veMD4KJ7FYHglRYirz%2FoRWH2SFV7AHWd2GLGET8JPm7vCRY3H8rpP4ZP2gGpi5hpitnau9ijHKKgFM0Ua4iwGqlaoTEvx8U3bH4vx1NQbFS1R8nfuWX5oFZYPu5jzKR8frYl5xw7o4635gk97bDjAC4Xd9Qh2JJDVjB1tZ0wlPWU3Y5%2FwXGtmwP%2FzmRvfjMs0LAHvdFChwxmlF8jtTq0a1ndDNBjfjcUqWl3yhgdsSti3JALlyENqHXbV4R2PZ6nhJb1SnqPPYDb8TMDBJpIgsmpGZnZdWI76FNvdHz8NVwji8MgzmSR5aBrTe37S%2Bct7J0e2kLAglCRvuIOqrkIL4wGbcjrNrB%2FBunh4RLHoNcNDbAa45o2N2uT6gLSwf6PgwzSE89FHEYYEWhNXUQGNKpauD9Z35FCY1LbfoomsVnAZ9WmKfz3thpb40ruSEIb2xUXQqtptngHkHBsOia0u65ccyR6Iy18vXUSrzKOeM6ghrs2A93r7%2BRoolQ7Ecwo5fOplYc6WZzVka5M%2BCsv7vYP8CUVYUxNDi2o3JWw0CsfRVmHAwr6mwwgY6pgFldoXdQAiaW3ysICDm8gCwZRuJrHyy5CyZIvkIi8sah94nViNfr3EZna%2FE93315X59XdFRDqsDfaeWxBpok3qya2ZSpUisqj1EQhLf1u%2FGIPTavYXvEb%2FRrg6zWCuP6KAGvVGnEBvQSbQltYekKu56dKYEJWhAoK8pRf9JuHC1kunSY04WogBItpnbTyhKgUBryP9qdY%2FYsZLFuQx660GXsjGtaJ7C&X-Amz-Signature=69156785b072e603376bf7b15d22f31510b172f3fbf441728befc1d4d115951c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB5LMBNS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIB157um1RHkVWhIq2M0IV%2B6bc%2BXsPUTtkskSIlanlZ3NAiAb7oQjj1Ngr7yqEXKN7nEdWG3%2FcOUGnbJFGBeKmRGW%2BSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMli8MUkB5npR0hKX%2BKtwDxgsIPSw8qKtRTemqWHZtlBlD%2BPFv25KfZgCIpEdm%2FiloG7g26HpVv6dB18f57hytcWAq8pl%2BUUyoBDMOAJT7TLu3RbqP%2FzBwUQp5BLXmREGgTJGHNUpZxT7jRyxRqPL0NFImLGeSqpyYp2N37SkxKE9cFDfu5aB8g5JF30iGQDq2vxkC%2F5IFT6VJ%2B4f1y93WmTPa5kjzLWxSGnf6AEbsmLNxVasz4bqj7ixk3dH2o5S6E1I8V5x4OhaMPxebgpKlaRkGk5JMJrCO6%2F4tUCtg4DZf2S19SOy6fJ9aHhJarOcaTLw9mJXQ5GOLbSzMc92oEJHKL3jaEp7Lb2SpHjAZB3SBOwf%2FMxO9080DxNHC9Omm3R%2F2igFBZVpSLcyDHFPktA0XG2vvJKuhArw9Bn3G4sJIMfeF1sTKRWNQTfmGi0VRKlxK33Agk6tTxhSILJQm3%2FWafcL%2F7UjGCLh6XcZd5Nl7RxA6Vj2BWJDk3kXmApHWAndmNIhb%2FQz%2BEa1Hs3fqjI8wKa2OJMGNrRceE3lWTGNBXOKRfP0UOchuBAWBiB2J9ei1oxAhfwxajOqKTMe3lZGvRqjC8vsT0AC1%2BNZuoQJiukOpjp46jc2ZpEDDSLkwoQWzWO5nEBDnqJ8wj6qwwgY6pgF3OzKrlRmTlE8lwke6xCgBIc1reEV6r3XuVOOGh2vUZjoz75alysEb9L1qNXG5eM1%2B%2FYI6sooZfQUDxf27xK0ul0DhI4qWNeHTxLUBMZLwK1GSsx9aEKA52lGrQlFInTSI0Ieg6foSRDuRduZ2ssgjva1j9VIy0XpiBmWM%2BTatsVhQguC7%2FdvTyJ41zv907Vjxn6CO286ap91GZEn8CK2uK8rkRLZw&X-Amz-Signature=680c8f985469eccf83c2e71b9f527e8f4105f8ae42371d68b3c4a53d0318d292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
