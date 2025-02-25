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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T4OKVDI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIF13XZ8TaN6FCkyzw7XOkfRM%2FsnWc0cpMv7G%2FE5Czmm0AiBFv0M3YViNKfIkENSxKjAz0r%2BrCBH7RQVbMy3DO2cRgir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMGt6PQeyFFIDItxefKtwDBfDVuTziiLGJ%2F50NpP8cbe1ABGVADqHg3dQdcS8hruV2CnGkb85WzNYi9pPsf%2FAmOyh5eU37r1vgrQn0ve09gkY1I1NWGLC51D%2BajsIv4XScUu%2BejUlKCMZhzixZOgyzQj9ZSeqLYR556H%2F6L91j%2Fg%2Fg2AiZyrv%2FFhMO74TGpQMqVnleSEpiJNkRDVbKhiK%2FTmXeeOTqC3UJJ2dXLkX2%2BBL8rwXnfHqSEGh5ura14UhRjkCFAa6Rucg7Yiv%2BRnVJXJHZiM%2F3ivUGQkw9bDgusRYSzoY6Xs9M6qr77oYGCShspTI%2FBzfu6P7PlgS9U7k4uiAycPhX8ytmVvbueccKsjGqooGiYUcnIuwcxhlaUGc2Uy9AiQ5RfY%2F8Kc469Ol9DzY48ktgpTEYj%2BNpaJ5ZG6SFKlBjt0Yey1TJ6akWztBw2onkZVWUSq0p8d5WdZjeahBnG8ygqjjjhExYtuOOg6xNC1sksRINJnML%2Fp8sVg6vtGXbQ3d7XO08x%2FijamOpemlmUWwyVsgX60n5YwcN%2Fz0G2s6eVm8%2FzCyyIBmKW3YXvVb0qfV%2FaJD5u7lrjQSr0EengsWLdfWEqDGTpnp7OxDVaYk1lCj%2FFlW%2BnedrRDJzqTJ%2FwgUNRUWU%2FvAwj%2Bj1vQY6pgGaKSmD6CmeZboUvErL3LkWDuhfCmkBAO3T9ZHIiPAiTyJEkJWbFZhwF2014gTb4EAI0HfmOERpIn7QZFY1Hv2qQvEzwhgQ0za1W0YPeTXMbVCuTV6bpNynTZgyy9aRk1pKho2FSU9XF49gEUItXA9FVzSD%2FN6kiVOuah%2BIHDBfFaxWeOrGh7ZtDmJdcH1YSlt47NgkWkKG6DlMHS3HA7mZzOsCtSMQ&X-Amz-Signature=fe1b0240e2365832e32fd17c00b3d1e05030cb30ec135c5aa8c6f94d4c70b489&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T4OKVDI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIF13XZ8TaN6FCkyzw7XOkfRM%2FsnWc0cpMv7G%2FE5Czmm0AiBFv0M3YViNKfIkENSxKjAz0r%2BrCBH7RQVbMy3DO2cRgir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMGt6PQeyFFIDItxefKtwDBfDVuTziiLGJ%2F50NpP8cbe1ABGVADqHg3dQdcS8hruV2CnGkb85WzNYi9pPsf%2FAmOyh5eU37r1vgrQn0ve09gkY1I1NWGLC51D%2BajsIv4XScUu%2BejUlKCMZhzixZOgyzQj9ZSeqLYR556H%2F6L91j%2Fg%2Fg2AiZyrv%2FFhMO74TGpQMqVnleSEpiJNkRDVbKhiK%2FTmXeeOTqC3UJJ2dXLkX2%2BBL8rwXnfHqSEGh5ura14UhRjkCFAa6Rucg7Yiv%2BRnVJXJHZiM%2F3ivUGQkw9bDgusRYSzoY6Xs9M6qr77oYGCShspTI%2FBzfu6P7PlgS9U7k4uiAycPhX8ytmVvbueccKsjGqooGiYUcnIuwcxhlaUGc2Uy9AiQ5RfY%2F8Kc469Ol9DzY48ktgpTEYj%2BNpaJ5ZG6SFKlBjt0Yey1TJ6akWztBw2onkZVWUSq0p8d5WdZjeahBnG8ygqjjjhExYtuOOg6xNC1sksRINJnML%2Fp8sVg6vtGXbQ3d7XO08x%2FijamOpemlmUWwyVsgX60n5YwcN%2Fz0G2s6eVm8%2FzCyyIBmKW3YXvVb0qfV%2FaJD5u7lrjQSr0EengsWLdfWEqDGTpnp7OxDVaYk1lCj%2FFlW%2BnedrRDJzqTJ%2FwgUNRUWU%2FvAwj%2Bj1vQY6pgGaKSmD6CmeZboUvErL3LkWDuhfCmkBAO3T9ZHIiPAiTyJEkJWbFZhwF2014gTb4EAI0HfmOERpIn7QZFY1Hv2qQvEzwhgQ0za1W0YPeTXMbVCuTV6bpNynTZgyy9aRk1pKho2FSU9XF49gEUItXA9FVzSD%2FN6kiVOuah%2BIHDBfFaxWeOrGh7ZtDmJdcH1YSlt47NgkWkKG6DlMHS3HA7mZzOsCtSMQ&X-Amz-Signature=6eb027c9f2341fe19fe9d44f0eb80cf537c894fbecf73d240478257eebc7c118&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
