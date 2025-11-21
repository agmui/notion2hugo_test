---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-19T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-19T10:24:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 171
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFQ3DWZ%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCQpD7PzFRqhZd4ufIk9xHJEFOwd56Jh3FYbb%2BFS%2FsnOAIgKCyTKR90dVdL629lVJvaSTf6%2FwXCYoEVtwU0wDqU48Qq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDFN49YptFinchgsImircAzU3LdQ9RNuNixAB4SZYwLn%2BOVf0tKfGGhsqbqOO2RALgi78z2at7j61CSpMnjO%2FUfCYXZcZAgha8inAAJvmFLcUwTnsKi%2FjoR2uXOFEmuptQPlVcc7H3%2BO5CKdCw%2BJjOAfXGV5FgrZRGplUTQZcZ%2BIDFY89plA7NtrI3snACKZWDVOaoFtGF0WFTKzem16VW%2FvEVoLOYmZBWs05r6l7IhvOeA%2B50BJYKdh%2Bob%2FehO8CXGvtirbaWcsGAxKuo4BP2JjBb3x89%2FDKEBhH03bZLG4KYU7Mf7G85w%2BMrF5fb6gms%2BNupyg1H6t%2BXXyBD%2FBH4rP2ul9xBSnrwCmzdN9dT8BQllcNok0qmactTZ6qPo7qTO2rY6g7poMVk%2FFsjSvbtTCE1%2B5REb7hlLUjvEnTr7PnFPdB4rqjPi%2BoGbkZkQkBRsvybGm%2BudFjLG66bCn7EXyvmA%2BdADPspVNYBga0voocIp448gZZgp95fap2FF0zVKrcKYfoWwocCS2MMkZmT%2F2qM0F8izmvYcbDmDQ4BdW%2F%2BzFkN6mrKetGVEHoLP%2BYXlqDinoCTXMqK%2FwkK27SMON9dv5VFJ4se%2BuSMutFStxLDjj%2FPY9z3JSEcTSF6WRpQ3e6dx5Lt4HAGDS4MNmB%2F8gGOqUBZE73Jwov7m9836Z0%2BS%2BEwThJcbE0QAo%2FUS%2B6z3yVMhQE8XHw4ZBWmPbt40MjJ%2BhxaZr3ym4LdXyvok03cRTp22UiXmbD6ijJEvVECxJrgrRcYsZHxbY554mfcne3zU6dkAgC3QzjXp3aWZiSMvA1wz0tDpPViNtRYvL86MJL0fqVfAtdoFKNNZ3aht%2BZOrZRmIyqAedryOGZyVU8ZntJAFvEWAXF&X-Amz-Signature=847b5f4138f0c6a575a41654e4a4ce04a1310c98f9c3fb302051823006333b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNGBZRDX%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBeXf93RBfClomVjIxhZzqQvivmpLHJI3lYeY88pWnLoAiBFkk0jVOoqFnsxh2J%2BNlhQDQpLHlyi9XkYr%2FSmKNTICSr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMnbmuHXgcph4c47Q8KtwDTCuk%2BXDWiOpGlgP9qd3ML456vvOW6R6UVeKDnmh5jPA6PXMJebXK79S9GeJnW991cDDuCpUUqJYk2dFpECWiqOmMA1cVl64xH3uizPT8bPWr3SBq7w%2B8Skomo3RYNAF0RqPzaM%2BjmJlCMv%2B0lE3LMrl6XidBBkoPhG2qO83hRh1lyTyXPmWF8xBs6zh47vQOc5mIMZsgjH2xICGbwMPNlrKcWRmGfYqGF8c1qPyaKW%2B%2FWLP2dq05diX7cJjXCI8cx1jpsmBMjnB%2BUSnPArMrwudb%2BogLSHaQE2yks%2BnX%2F5hk37Asv1K04WNUVST9pevx3ENBtD8INmaa0cjM24PgiFkvjfocVKoFUKEZYBPiC3objpvttNJdqlww7PRQZlbjHNulYRTqigNSa1TmkQGvtuouo08Ac4%2FyvAJQDxMKj%2B05tOHsOpu9VPDz1hAlzSne5F%2BWCcm%2FSiY7fQj44Fhh8JayrrdiyB8iryKgUEVAajYhNIe37VPTWmMqmpjHzcPENVOLBOZ0wm15Ht07JVRuRhAUcU7HFnHnWc2VbumAU0YzZp8rKQNIcE%2B8CaekzIsytTEaecujwNd6Rjr8BtPvvlP9u0V%2B1rn%2Fpm4LHJJ%2FOjoXXe7fXP4BVWCMy%2FUwvoH%2FyAY6pgHu0U5vf9ll97hXKdx7pzpTzXrgYRsQdE3rg7UfVeEx5E9H6jZspchHY3M5m5RYtHOf18f8mnhPL3zWC4Ah8Q1ZDMM0vk4AjjFHPjTcf4bPWz0qhO7lTsQO8jXHBuj%2FspXkz8pJdoriGLcmuyLnsabo0QgcaQQ7VnFIE4L5WCNGrn83Rd2FNjBMm2QobuoYB%2FbvqYTjO0US79M6cNTySjMPn%2B6VR52m&X-Amz-Signature=0abff34790d9e74b0f0676d0083ed64b4e49a29a14130449c8f0d2502afa7ae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
