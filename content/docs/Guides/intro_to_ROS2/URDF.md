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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTKTOEU2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQambyckNT1YtTG3rawpqSpbsAqr04gPYyG7%2BUG%2BgY4AiAmxXArVSOuYEZE2j3%2BNLrQGq%2FRQ3V7WimqbcOK5FtHpCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMMsOfmy1%2Fit8IxfQYKtwDnBMjO0G%2B7fpxz2nkCfjiref%2FkBDkDfBog23JZSGC9v66f9%2Fpt0pavWxO7GGTxS%2Bx%2FdSy6QeJ6WgvQERLDz4LJrusIYYsMnHKI8VJQjC93vXLxxlGStqyHGttnQfUqvmoDVAm5iDoK0n5wbKXyP56ri1L2jMDHX%2BFuJPHvEJ2XHzLCg1UGOnI01hwM%2BZNYgCFgNAMhL6SzI4bX0jaJl1btfxqyXfa1WiPrJWH6HWgjwGb981VG7SDKZSDIGO4%2F6iMuU8hfpUy9o1LMBCkwwXVk%2FJEAGEJtpa5gZbhBB3uuEz2e3BIlGXNXc9J5VC01cWMiJwXrmsPMDzSRZlgxDkArKYLJkvRnegiMT7T5u903D3oUKBvDihB5B8s%2Bm63fHNdHfIQHB0%2B7%2BlftNJAiUvSKLJHVA8EVgY%2B1wogRsVpFEFVsZL3GoVDhOo6OOYIJ%2Bzzswty2RGG6v2xHSkvLafVFppZJAMm2cmWzlHYqEvqjPy6XZoU%2BXbnQfN4Q8rirLdE8u6TuXFLc%2Fe%2F3WX5878u8SiACQCQbBNnbiu6x9sRtDCRjJ7X7mpzQ7YsNg2QBmxBfYATSgZjLSbTZ8LXPvXTFemDtKVRt%2BIjvuZeoiDjhuTAG8aU99ZxOxGYkMYwmIGRwgY6pgE%2F6L4auLkDNn%2BSGLwEpRvlft1MFRjLNzq469jwXaNgBIi20oDZBTcWt6LHhzM2UZaq2iA7OpI2rdXWH4Wiy6opnb2L4oimKrnxv%2B4hqABq0ZXO1%2FOURDvnQHXip%2FKwRuEj%2FypiS7BFG7L20GBduQ3OxY9olNI4zaPUz4Le2OWn2LNbEnNo946BaUru8YTqKQtPCoEQCouzq9ThPJ9fXES8EcjOlRus&X-Amz-Signature=6340b86a7430c2132ceda5d4eaeb419655bd3291b9e8a568c2284f29683ecb73&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTKTOEU2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQambyckNT1YtTG3rawpqSpbsAqr04gPYyG7%2BUG%2BgY4AiAmxXArVSOuYEZE2j3%2BNLrQGq%2FRQ3V7WimqbcOK5FtHpCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMMsOfmy1%2Fit8IxfQYKtwDnBMjO0G%2B7fpxz2nkCfjiref%2FkBDkDfBog23JZSGC9v66f9%2Fpt0pavWxO7GGTxS%2Bx%2FdSy6QeJ6WgvQERLDz4LJrusIYYsMnHKI8VJQjC93vXLxxlGStqyHGttnQfUqvmoDVAm5iDoK0n5wbKXyP56ri1L2jMDHX%2BFuJPHvEJ2XHzLCg1UGOnI01hwM%2BZNYgCFgNAMhL6SzI4bX0jaJl1btfxqyXfa1WiPrJWH6HWgjwGb981VG7SDKZSDIGO4%2F6iMuU8hfpUy9o1LMBCkwwXVk%2FJEAGEJtpa5gZbhBB3uuEz2e3BIlGXNXc9J5VC01cWMiJwXrmsPMDzSRZlgxDkArKYLJkvRnegiMT7T5u903D3oUKBvDihB5B8s%2Bm63fHNdHfIQHB0%2B7%2BlftNJAiUvSKLJHVA8EVgY%2B1wogRsVpFEFVsZL3GoVDhOo6OOYIJ%2Bzzswty2RGG6v2xHSkvLafVFppZJAMm2cmWzlHYqEvqjPy6XZoU%2BXbnQfN4Q8rirLdE8u6TuXFLc%2Fe%2F3WX5878u8SiACQCQbBNnbiu6x9sRtDCRjJ7X7mpzQ7YsNg2QBmxBfYATSgZjLSbTZ8LXPvXTFemDtKVRt%2BIjvuZeoiDjhuTAG8aU99ZxOxGYkMYwmIGRwgY6pgE%2F6L4auLkDNn%2BSGLwEpRvlft1MFRjLNzq469jwXaNgBIi20oDZBTcWt6LHhzM2UZaq2iA7OpI2rdXWH4Wiy6opnb2L4oimKrnxv%2B4hqABq0ZXO1%2FOURDvnQHXip%2FKwRuEj%2FypiS7BFG7L20GBduQ3OxY9olNI4zaPUz4Le2OWn2LNbEnNo946BaUru8YTqKQtPCoEQCouzq9ThPJ9fXES8EcjOlRus&X-Amz-Signature=b736daec387e934901e87a6efc5a02516bb0fd8e3806f45ef0c117eb36c4377e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
