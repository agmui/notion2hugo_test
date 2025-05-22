---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 148
toc: false
icon: ""
---

## Setup

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5BOTOHN%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDJtHZnw9dGvHq9xi9D817vXR8wkhEHfRpOXr9s2W9qGAiAY%2BscpJupBdmuyfYmXyfUiPpKZcGxyGZGkbIK8PbqSxiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoAohDuSWmfnLPqavKtwDTkr18%2FMBnfxqOi4ePxzcYCugUO4mWFc1CPaGMmGO1p4WUmt0SEx1H3lS2l0pv0%2F7F1mHodbrPBcjeA5Mfh9swHuk%2BAvxrdbEizzPP7WVJWXIsIdunupjQ0peFH69pB0INPJxYjd7mHqwngmMcDPu6XedVAW88sYsL0ZVGUDYWfuNkZ2L44UUvvNbo%2BqT4HY63S0tVWpS0ueYUbQa7rmVFQPAmw%2BmTXoKBxhNK5KPipStyFquZ3PCwVe0PPPOHgMM39N4gCHbey2TGUoNm195cfUwluKxVGfbo08HKAPxgEgqsPHtzpHNdytacUJWb6xa%2FtCrczQEn2MT01pfdKL79KvKGdWB3yH0yzlqGr24m4lXEy7dzXuTcxaBNd%2FIK7RMO4CiN1MQ1S2ikVfhrWc6PLBvU0J3nbDEBSAYGqj1NRwNggVGtQVuVPCOtUs3WItugkVg0RXYAuHPTrx9ZUOCBtacaNjOvPkgRQipPBoJyM809AFl1NC1TMKUoRTJFcuEJTteZEhiCKXeP2YKf5m4obPtGf30zJAdxC1M1byalwCKvDl%2FTSE8rb7pEEb0XaLF4KAaD%2Bc4ijgxvl1F9lipYazsf%2B8FZRMBr6Aem9i8eCeRs5POh0SYI%2B8p9G8w8MS8wQY6pgGuqzKIIsZJMCZ1hGXpE1EMhVkYNvPyYuKVpdknCW%2B97r7HtbeRi3BcoEqdbMCo6%2BovvzYEkFEawFXzVLhbkO3X00bCDssb%2BgPju%2BtYIqTTwOjZ3jzW9L3Xotx76PG2H2w3K%2FvK6yuE2GDMjgGWnAZvRW9WppOa13Z3keHM6HwxqePCGvDH47q9rY%2B0q%2FODFWH1ni%2FUDiZTiAp3GacwnYAZEWKH3DGG&X-Amz-Signature=3fe19a19a652c8bd776c9029b6711f467cf07fd9f32b6a49863ce68874a462fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5BOTOHN%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDJtHZnw9dGvHq9xi9D817vXR8wkhEHfRpOXr9s2W9qGAiAY%2BscpJupBdmuyfYmXyfUiPpKZcGxyGZGkbIK8PbqSxiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoAohDuSWmfnLPqavKtwDTkr18%2FMBnfxqOi4ePxzcYCugUO4mWFc1CPaGMmGO1p4WUmt0SEx1H3lS2l0pv0%2F7F1mHodbrPBcjeA5Mfh9swHuk%2BAvxrdbEizzPP7WVJWXIsIdunupjQ0peFH69pB0INPJxYjd7mHqwngmMcDPu6XedVAW88sYsL0ZVGUDYWfuNkZ2L44UUvvNbo%2BqT4HY63S0tVWpS0ueYUbQa7rmVFQPAmw%2BmTXoKBxhNK5KPipStyFquZ3PCwVe0PPPOHgMM39N4gCHbey2TGUoNm195cfUwluKxVGfbo08HKAPxgEgqsPHtzpHNdytacUJWb6xa%2FtCrczQEn2MT01pfdKL79KvKGdWB3yH0yzlqGr24m4lXEy7dzXuTcxaBNd%2FIK7RMO4CiN1MQ1S2ikVfhrWc6PLBvU0J3nbDEBSAYGqj1NRwNggVGtQVuVPCOtUs3WItugkVg0RXYAuHPTrx9ZUOCBtacaNjOvPkgRQipPBoJyM809AFl1NC1TMKUoRTJFcuEJTteZEhiCKXeP2YKf5m4obPtGf30zJAdxC1M1byalwCKvDl%2FTSE8rb7pEEb0XaLF4KAaD%2Bc4ijgxvl1F9lipYazsf%2B8FZRMBr6Aem9i8eCeRs5POh0SYI%2B8p9G8w8MS8wQY6pgGuqzKIIsZJMCZ1hGXpE1EMhVkYNvPyYuKVpdknCW%2B97r7HtbeRi3BcoEqdbMCo6%2BovvzYEkFEawFXzVLhbkO3X00bCDssb%2BgPju%2BtYIqTTwOjZ3jzW9L3Xotx76PG2H2w3K%2FvK6yuE2GDMjgGWnAZvRW9WppOa13Z3keHM6HwxqePCGvDH47q9rY%2B0q%2FODFWH1ni%2FUDiZTiAp3GacwnYAZEWKH3DGG&X-Amz-Signature=660ab9fe5db5b942354cf85e44a9739f2507da29ce0fe6e946f624ecc5936b8f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
