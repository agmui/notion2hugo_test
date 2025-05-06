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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CD6WPX2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTqiU%2FlLFS3zMTGWXdiCZWI%2BXx1VZWmPwA8FzroWC%2FpQIhAPUvLyKoCvoY0e1bDExAIfPF9APXCeN3zqE%2FrGk1ec%2BgKv8DCEYQABoMNjM3NDIzMTgzODA1IgwBV3vCCcsJgE%2BfCM4q3AMZisrC4GvgGrlUUWxGIiVqQBit9J2ju46N%2FiOZIIJOrudZSaUdSgORAQzB71uU2Anc5fOTS0Cxxc523LwgXmYJfyV5r2jDGAh5uL5HpHjEd0EAg5Tu%2Fr6W%2FMooNz%2FwErG2Fhh3lFmraB3xz73rQEkUopnpTQWrUxx4fajCZ0MC2tAZrApBgsbZ4tq2Y4j9deUPl1vdxcBi7OsoL1LT81Oj4bFXP5tb4iOXiaFkBe0%2BRhSY%2B69gn1gntMAT%2BqCGFUNWIb4cVFaghJw3IhRbWx6HgfTbYPEuRhUU6jEDicgUgsqJtbErQjCYbTg6RJTOf1oSDKewMe6NvhgLv7iVCvDsFeF1U4uDwA5VAhCpVqpck9II9%2BsY3pmS055dWZeO9%2B%2Bu8hzuyReSEA2MhLuDoCbgAyqFud1oSMpijTouwddkfHT7rfZmew56URXEjVCDaxywZpe90e6Yb1tdzsEMRgXNAmhNpuTrrg1rOf4lssXCumpjF6ZFZDbJvvIz1u%2FlAWIYJu3qddrS45SQARtEuY%2BywKmnuEetLVpXsNmlMVftaAIXp6O0Q655ZoqjqvHaKdRhlCKX9Bq9muCUFvj7CnGhWziwCNxXLvPOK51o7lXxgr5BonhYVRlXpLG2OjDJl%2BjABjqkAXIMbmujY8jd3zaaSnQabqgYeme0S3cBOfls%2FdrLBFPZYImyNDNyVcrcAD9g%2FMNfb0iXMaof0wCshaAclcnJGN4pkeSahvOOfC7Y6NgTfvlbZYQKZWWgAifRmIslp%2Bfp0eozolIMiNwgc7vIrHYpU3b6%2FD%2B%2BQykopAfbSN7KjeN1dFv4AIvgh9QhR3cvhGzRf8eUCOS8CK5b9nIUuRhRT8bvBsLS&X-Amz-Signature=5b04d723e97932dd93e30552baef9b1da05dc303f4d250d19fff5d0262fc719e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CD6WPX2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTqiU%2FlLFS3zMTGWXdiCZWI%2BXx1VZWmPwA8FzroWC%2FpQIhAPUvLyKoCvoY0e1bDExAIfPF9APXCeN3zqE%2FrGk1ec%2BgKv8DCEYQABoMNjM3NDIzMTgzODA1IgwBV3vCCcsJgE%2BfCM4q3AMZisrC4GvgGrlUUWxGIiVqQBit9J2ju46N%2FiOZIIJOrudZSaUdSgORAQzB71uU2Anc5fOTS0Cxxc523LwgXmYJfyV5r2jDGAh5uL5HpHjEd0EAg5Tu%2Fr6W%2FMooNz%2FwErG2Fhh3lFmraB3xz73rQEkUopnpTQWrUxx4fajCZ0MC2tAZrApBgsbZ4tq2Y4j9deUPl1vdxcBi7OsoL1LT81Oj4bFXP5tb4iOXiaFkBe0%2BRhSY%2B69gn1gntMAT%2BqCGFUNWIb4cVFaghJw3IhRbWx6HgfTbYPEuRhUU6jEDicgUgsqJtbErQjCYbTg6RJTOf1oSDKewMe6NvhgLv7iVCvDsFeF1U4uDwA5VAhCpVqpck9II9%2BsY3pmS055dWZeO9%2B%2Bu8hzuyReSEA2MhLuDoCbgAyqFud1oSMpijTouwddkfHT7rfZmew56URXEjVCDaxywZpe90e6Yb1tdzsEMRgXNAmhNpuTrrg1rOf4lssXCumpjF6ZFZDbJvvIz1u%2FlAWIYJu3qddrS45SQARtEuY%2BywKmnuEetLVpXsNmlMVftaAIXp6O0Q655ZoqjqvHaKdRhlCKX9Bq9muCUFvj7CnGhWziwCNxXLvPOK51o7lXxgr5BonhYVRlXpLG2OjDJl%2BjABjqkAXIMbmujY8jd3zaaSnQabqgYeme0S3cBOfls%2FdrLBFPZYImyNDNyVcrcAD9g%2FMNfb0iXMaof0wCshaAclcnJGN4pkeSahvOOfC7Y6NgTfvlbZYQKZWWgAifRmIslp%2Bfp0eozolIMiNwgc7vIrHYpU3b6%2FD%2B%2BQykopAfbSN7KjeN1dFv4AIvgh9QhR3cvhGzRf8eUCOS8CK5b9nIUuRhRT8bvBsLS&X-Amz-Signature=dc5d22989f7b591f1709720aa8fb031bf50baed69d34cbb102a0c6d7ecab2326&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
