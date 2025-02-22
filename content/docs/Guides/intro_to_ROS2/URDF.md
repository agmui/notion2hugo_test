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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW6PLRRO%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSkN0%2BA4erkbXpW5G2op2AkPr%2F2f09l8jo9owW%2Bec6gAIhAODj%2BCbHdIlOBDAaA6wQV5V7ORwA6QbHNRH4FGsNuRQwKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsSGokylqlCkOdHFEq3AOVJM8T2XKJdDIs0ZlAnqRcX5YCRdfpOgMNwC1bShMGqVjLLSxxGRzEXJUJbarYgWGhMU5jYVJ5diwtfU3i2%2BocEMEIQVf88fj005I6hC9btqwANx1PlEBrtMq8pZ1SLSA2WcU6UY5mn6eXmADP%2FSc8jRLCQxoNHDWvvuJCLFGbXZiUU4DXth2oKmPncederOF%2F48abMYp6GBOLFbtT7gCD2V4aXM0lUvYhYTuqFXFHPkNwenOU2MiHXRPOt2RF6gnSux5v57g0amEwmSIjIy5HdgsLEzGY6vdP%2Bp3Ahv5vcfIbwvLP%2BK5%2Bqez8UXrcGk49pF5WnV4RweyTppRtQYSCyjN%2BZKc%2FgUTDVpS1JrsptvwFpdQ%2Bx8NfyXySP93tZDi2nInMzc%2FmHG7gMXlaFRU5iBM87pIUG7cAcE6jNXLBt9kH5kD8QQiVkGpKBu%2BR9YxhSy7n1JDIqTVVJLLNs7z13EhNqzyrXO8oDz1JEbb2IboJaU0kTcyTT2Ybf6Nuh6GKDNpGq4uOS%2BphLVvzmBbhxl690NyzuHKHpNIjcz5fshzerjo8Bq4w3%2FulxvpKWx6bV0toXCPoJeUqHJ8epTbb9KmWEXDw%2Ft3kaK7%2B4%2FSRUcT56RAujZQhYIY3IDCZ5ua9BjqkASoNoptYlOPSA%2F3FqSt6QvG5GaP6skEG7QinmfPH%2FxMq%2FYSr2qjb7x3HRekYu9GDyxaFDS%2BUzHI2KUcuDjhzViJrJUYBwtZXC4A4bIhfIkCeZN2kZiurhym1w3G8LjNfcHUr8tRsoDKfq0gMK6rYiRCBTyi0u3y894IyOFTvH2B7DPtHsbFrCTNfDtGQu%2BMOiTgBPjx2lzln9SQpkJg7Ew9JaE6l&X-Amz-Signature=165c51b89aa2bc57ef9f6effcee66aaa15ccfa54cf19ecafd02e5fce9d4fd842&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW6PLRRO%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSkN0%2BA4erkbXpW5G2op2AkPr%2F2f09l8jo9owW%2Bec6gAIhAODj%2BCbHdIlOBDAaA6wQV5V7ORwA6QbHNRH4FGsNuRQwKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsSGokylqlCkOdHFEq3AOVJM8T2XKJdDIs0ZlAnqRcX5YCRdfpOgMNwC1bShMGqVjLLSxxGRzEXJUJbarYgWGhMU5jYVJ5diwtfU3i2%2BocEMEIQVf88fj005I6hC9btqwANx1PlEBrtMq8pZ1SLSA2WcU6UY5mn6eXmADP%2FSc8jRLCQxoNHDWvvuJCLFGbXZiUU4DXth2oKmPncederOF%2F48abMYp6GBOLFbtT7gCD2V4aXM0lUvYhYTuqFXFHPkNwenOU2MiHXRPOt2RF6gnSux5v57g0amEwmSIjIy5HdgsLEzGY6vdP%2Bp3Ahv5vcfIbwvLP%2BK5%2Bqez8UXrcGk49pF5WnV4RweyTppRtQYSCyjN%2BZKc%2FgUTDVpS1JrsptvwFpdQ%2Bx8NfyXySP93tZDi2nInMzc%2FmHG7gMXlaFRU5iBM87pIUG7cAcE6jNXLBt9kH5kD8QQiVkGpKBu%2BR9YxhSy7n1JDIqTVVJLLNs7z13EhNqzyrXO8oDz1JEbb2IboJaU0kTcyTT2Ybf6Nuh6GKDNpGq4uOS%2BphLVvzmBbhxl690NyzuHKHpNIjcz5fshzerjo8Bq4w3%2FulxvpKWx6bV0toXCPoJeUqHJ8epTbb9KmWEXDw%2Ft3kaK7%2B4%2FSRUcT56RAujZQhYIY3IDCZ5ua9BjqkASoNoptYlOPSA%2F3FqSt6QvG5GaP6skEG7QinmfPH%2FxMq%2FYSr2qjb7x3HRekYu9GDyxaFDS%2BUzHI2KUcuDjhzViJrJUYBwtZXC4A4bIhfIkCeZN2kZiurhym1w3G8LjNfcHUr8tRsoDKfq0gMK6rYiRCBTyi0u3y894IyOFTvH2B7DPtHsbFrCTNfDtGQu%2BMOiTgBPjx2lzln9SQpkJg7Ew9JaE6l&X-Amz-Signature=f7cbcd0d358d257476f3e20a9d1d2421107afdc210e92af6a94ab023653b13a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
