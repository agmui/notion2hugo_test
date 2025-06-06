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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AEEFOKD%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBJB%2BKI9j0Aq9%2BYG2zeOHz1%2FsFCloNWfK8F%2FGd8NfmQcAiAGld32yKK%2BWFoC0xFrmj0hj%2F4BbnX8LJ3Vp0RqcnWvsSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMC2Jlv3hs%2FaRWDLAvKtwDXdnLk19%2FjJbi3ZBS5ZJCC71oAsuiPNu2PChqQdKVKXsMGdpuewI2OVFPG4tXs1HFrg2mmMTJQG99HfTSQ671aJYO4mwVmUpV2zeDBsvR2iP2oNnosktnGbmr2AxklStq%2FC3Dbz4VV2gTA7FpKBmU2eEuzy8%2F1VEYcoL6zttO65I2jbQ1oKHYLiPwJpbLVFoW34e6QG47GdbV1GlHedIb3G5oLNKkEEVoBMHfhTpahGkoHhIhVLVDZ9GV4bWoe0uLaRf5B9WQI4FmewWEbZmvMigp5COsO041XdnKDU4w%2FuG6WMC4MQhZGsVeUE3hJ6tChIRstWEyrtR7EQw1ZEQiZiMXdr0OMSgwDN%2FjkBEL7wh9DAhwdNSW2hQiTjseuRcBnkvWSpHtICc3sc2w4hWN22ZH7ePcA4xQx%2F0oEwcEj9qCaCEhrtxhgeO%2BRheHiEh3tDXuKwCAkIrPIAMSM3eypn70coU9DXrmdCZfMy2E84srBVhOi7qmGbgRX%2Bnq10pinu77SIXl%2FZGeywluL7E%2FZ%2FZyEv6G8ctj9TjznXRkKb6%2FMkV1NvMhGSVZ7GqA8DvCYQukhxO5kCEbA2mLxj4saB5%2FQ90PvsRgNrD6155RjCYO%2BEXx9S50oTyTPlQw7PaIwgY6pgHMycOgIiuP3F3UvkzfTk8lHIqXXf0BqnBuHuqwKU1K0Xs%2FaABUT6hrEHg3mTueZOBqJJ88Y%2BQTNAsfC52kVRQFXILeyjWq6BqKZUWMKHnuCYJpLM%2BwyO4SlcJPkdrXyZffyLy4DPLM48arIeLxv2grRtdaNbITFCUCxgHO2N2qDc%2BJkmcDpk%2FYTvaapNGe0yUl4bF6nVqZoErKL3T4%2BmJlj0gVLWsD&X-Amz-Signature=cc3022d24389e4f07ed37b3af3aeaba4b29de215ba580bba56daabea6234bbe9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AEEFOKD%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBJB%2BKI9j0Aq9%2BYG2zeOHz1%2FsFCloNWfK8F%2FGd8NfmQcAiAGld32yKK%2BWFoC0xFrmj0hj%2F4BbnX8LJ3Vp0RqcnWvsSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMC2Jlv3hs%2FaRWDLAvKtwDXdnLk19%2FjJbi3ZBS5ZJCC71oAsuiPNu2PChqQdKVKXsMGdpuewI2OVFPG4tXs1HFrg2mmMTJQG99HfTSQ671aJYO4mwVmUpV2zeDBsvR2iP2oNnosktnGbmr2AxklStq%2FC3Dbz4VV2gTA7FpKBmU2eEuzy8%2F1VEYcoL6zttO65I2jbQ1oKHYLiPwJpbLVFoW34e6QG47GdbV1GlHedIb3G5oLNKkEEVoBMHfhTpahGkoHhIhVLVDZ9GV4bWoe0uLaRf5B9WQI4FmewWEbZmvMigp5COsO041XdnKDU4w%2FuG6WMC4MQhZGsVeUE3hJ6tChIRstWEyrtR7EQw1ZEQiZiMXdr0OMSgwDN%2FjkBEL7wh9DAhwdNSW2hQiTjseuRcBnkvWSpHtICc3sc2w4hWN22ZH7ePcA4xQx%2F0oEwcEj9qCaCEhrtxhgeO%2BRheHiEh3tDXuKwCAkIrPIAMSM3eypn70coU9DXrmdCZfMy2E84srBVhOi7qmGbgRX%2Bnq10pinu77SIXl%2FZGeywluL7E%2FZ%2FZyEv6G8ctj9TjznXRkKb6%2FMkV1NvMhGSVZ7GqA8DvCYQukhxO5kCEbA2mLxj4saB5%2FQ90PvsRgNrD6155RjCYO%2BEXx9S50oTyTPlQw7PaIwgY6pgHMycOgIiuP3F3UvkzfTk8lHIqXXf0BqnBuHuqwKU1K0Xs%2FaABUT6hrEHg3mTueZOBqJJ88Y%2BQTNAsfC52kVRQFXILeyjWq6BqKZUWMKHnuCYJpLM%2BwyO4SlcJPkdrXyZffyLy4DPLM48arIeLxv2grRtdaNbITFCUCxgHO2N2qDc%2BJkmcDpk%2FYTvaapNGe0yUl4bF6nVqZoErKL3T4%2BmJlj0gVLWsD&X-Amz-Signature=f43694efc6767e97fbdd852d19769d8406a893bbc228c7381075de419087f20a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
