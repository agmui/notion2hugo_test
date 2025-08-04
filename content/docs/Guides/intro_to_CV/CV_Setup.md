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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKJCHP5R%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFjk5t7JJXIKD1%2Bg4h%2FBBqwdWJgdubwSc38EMrHDT5%2FHAiEAjG8YrDuLtGqerAddRbOidfh0p5g55sRV5urRwKxzsVYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHRdnoFavZcW6GC%2BiSrcA%2Fy0ig3YMGVTqsd4Xerlfz%2FWAQdxaGE1H%2FN2zJ8v4AkixOeNMyX0flQGnPURzuK0UmgsopC7QFFKWbyMdjIze69CVmnRGTZi6goO6mfNS3RcTmKitzQoqKG%2BKTOR2my8%2BeL0nezYPtV1%2BedEvxgw2UQJ2%2F8xot6Nk5kxx%2BIJxi3vcgzUytron%2BXVDi8k%2FoFea9EQN%2FseuEKibRgdLdsItEBGjHLqHNd%2F5SL9ptk7yKGv8Z2%2Bcqv03lnKy6UYaDUJCUDmyI%2FBWyyAMKmqn%2FtFzHumZb8c1LcS8TlU%2F5r7UXPJdfWJ6%2Badh97l2o3hz3EC%2F1uWWqIzilOdremx%2FumiDI2R2WaOI4QOQdtXYt0joh3%2BXovhggOPzRtdHxk%2BXjv3Dg7WbSUXAWBqGe%2BHZX9QGSeITSelXSwhqMKOiFgllXTVQKBj%2Fz8NCU1yd6rW0q3TaLEl027Axyc6aq2%2Btw7qrrA47cIfHquwYNKEvD7bEPHQr%2FXrBZglVP1X%2BXWXS2m6Iab9WuSvcUyk9efkfvkKjSluYrfdqlwpdK8OQLIJpvgkEOkzWggExiEHmKHV2rJybJiv6gtsyYx6LUKWxMHZQIwE6UKPjlvagythpZnQpseGn8tfzRVeYqzqyPnaMLSmwsQGOqUBAeQa7X0wWBzjQyFWWgtKvmPIQaauHrMS4lJ0lckqYtrB1w%2Bz7%2FNhxrTOGpvwC7Sp%2B3%2FyI%2FoqYHSZzf29J83gRno3oqqC9lFWb4Um3zsS4h%2BEcoN1P0AjHwZmcEKVF88b%2BOOIAv4gvI0rrLyXIWJEHp%2B5D4JLZY2lYpZQd8dJ8YlTHHdaSb7H5IoofEMBszXVi84izO%2Bn3Yhh38FPrpq3vlL54B%2BH&X-Amz-Signature=856b94350a587e8ece6eb754dbcf5d7c2ab938145cd090a180253f488af9406d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V72RIHR6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBGNLENgCXEGGWGMbNI4pZ8z%2FYD2nbpmvlx1npc81CjrAiB6NEbc7q%2FRFECuk%2F%2FeO8XAOUCuxBBPLL1evi4RZP7lVSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMbF6DJnfPyTfx9GMEKtwD8PQphragms%2BHxFIM1binONe9pStqbl77qJYPcrTMOTsJKhxEofnIp9la5FzVR3JE5G6IoXfkg0bquC8Ej9dZ7KDubS33yrAkY%2BDwEEIb6hRisUuxXgJsmq5Gzq5y%2FhgdWRZLyAEFvQrkBlgNYoub4FJqB5u3NWf3S51Nqk4n6o3m6u7jdiCl9YB5h6o9LnL1BbNSaKeS%2FVP%2FX1nBRxTMOsl5wi92qTSZcn5yYIMKdRVJJtArgO5fk2l0jG6z4wpTuxjZWXex5PThd1KtqmR2GAD%2B%2BDCe8fb4Ur109JHH3ja9aN6%2F0KOLGAnJUVDTjUwXuJQsyN7NZUKAnD2vJHWHnzZP%2F6bxh%2FLNhhSIMOpg8unLXJvnDvTCECWn2RO7mEd6aDxaAkPqHpAFkhp6MECA1QbLmBd5mvF4%2Bx1CipHJGZRSV33nIqS%2F8p%2BLnsk2WZ4AzC%2FrbpgvU2pXJUHFgSxU4kfWIhA9D8jsh100LwMweBebvdNSBFy7ZtFhAMVJBNMhS23AgNmoSgU93wrWRMKfoFqVfvT8VcHRtrLHxRqKtW2I%2BuahDdZ8OnsJWP8YlU9VcNjRF%2FMon5qUcP18irWzRooM1yrvHvNc%2BqW7eAbveASYfsU0dOc%2BPlpJBeEwnqbCxAY6pgG%2Fi4XB174vaF4uMKcK5BCpSA6ZwrWv17wJNHNraQKkMhJB%2B4nkYnP4aT0LI5lBM%2FCHAq2c48RpH0aPifGHwkO3T3NO6KKj9rih7lUSyjEZHdIy5D3PdGGULIon6cNqcTMCCY6dUNSKiLIJ14HQ7%2B3TaloXEFaB931XVrpSU%2BsB4OU1TvY%2FXwzd0VdcaapQcconjZQkCtX568OAhrfIV8dJF0nzJvyi&X-Amz-Signature=f89d5a1bf75bdd9292a8f33825079cf6c2f7aa971ceed4190ea3fa2ae892d017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
