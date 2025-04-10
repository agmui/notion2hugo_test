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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3INT4RD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIF7GCb6oI1ZCbXGNk%2BuGhnItDx3l7BNeeJJoSmRsqoEyAiEA7VWbG1M5XfmLx23rPaNOc1PKmqSezdtq8EKBs6w1MosqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXhnxro5t3g1TVNuyrcA5qIhtcBZuIPeeNujBj16PzFhY6UfCRKyv%2FabCsYfP7NCOiGl54xmadArVtFuH4p0G4XrwlzG2TRwA81VH%2FAcdT86Y3y9kwP6%2BIdmXm6TMMc9Y1y6xPCKnXYh4J8vPo23pU2%2ByDIqVG26dAubHSfCKOalOYTv621c34kvP9Wg6uXfzQyjPmluSwBDkT2dzPrArZhDnZExLaMiUNbjoWgVwgDlmwNdgEckAwXQZbJPEEzYWN561vKYvZ5SLVo1GviQmayYjWhxgRdsnhNFwbxFcA69H%2Fk9cfqSEUg0Nun3pCcePdDxgJcoEC4IztnZZkh64%2B6ZXlvIKM7Qaq8TAix1tB4fpQSKXlKjTQKDPmNV4PgTDDBfQWpdw4juI6lbL%2FD7KnCKWJ6IG7%2FoWwCCyrRkvK%2FBRJA2FKrfxu10GoMUDTfl8e8X7HEcNFWqPHoeem8FdITJF7ZSzc0d%2B5FKlr54UWHyu%2BrGAQ0xv3J1KeIyYufDnQtsBeobzdIdVExON0aJgIqlobWAI9gg61DXcKxjOAY3ljhk8iX1JkYrNcjVRSR7wyjlYCg9yHWTqF0hyyfTnmoqpuDfattztbqw1FNxNBzVlfxgpvFGUyjYxwLYdECv5mWFxSoGYv3WrUJMOrT378GOqUBMEpY37m4PCSMbVFzvvn0QuHYXhbXg3g%2Fj9FJ3VVUy%2F1%2FLFmWTLX%2B1J0gTs30snwWVikj4OSp4y9%2Bkf7T4OKT0Yp02ixRBM7IEXFodlO6cVhq9BcVKG4QRO%2FZD0Yh6HM7y8Hed3q1b6GArNlALVxFOG13%2B%2BeT5PKv2croHnJdIPFX8kWvwJIArmtDyMUIbXZI8PZ6Q7VrbFEp2njiKwDiBuTbEDI6&X-Amz-Signature=927257204a666fc2ed7cc44146f96535be673e252f9a04f1a744bad3ac49c919&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3INT4RD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIF7GCb6oI1ZCbXGNk%2BuGhnItDx3l7BNeeJJoSmRsqoEyAiEA7VWbG1M5XfmLx23rPaNOc1PKmqSezdtq8EKBs6w1MosqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXhnxro5t3g1TVNuyrcA5qIhtcBZuIPeeNujBj16PzFhY6UfCRKyv%2FabCsYfP7NCOiGl54xmadArVtFuH4p0G4XrwlzG2TRwA81VH%2FAcdT86Y3y9kwP6%2BIdmXm6TMMc9Y1y6xPCKnXYh4J8vPo23pU2%2ByDIqVG26dAubHSfCKOalOYTv621c34kvP9Wg6uXfzQyjPmluSwBDkT2dzPrArZhDnZExLaMiUNbjoWgVwgDlmwNdgEckAwXQZbJPEEzYWN561vKYvZ5SLVo1GviQmayYjWhxgRdsnhNFwbxFcA69H%2Fk9cfqSEUg0Nun3pCcePdDxgJcoEC4IztnZZkh64%2B6ZXlvIKM7Qaq8TAix1tB4fpQSKXlKjTQKDPmNV4PgTDDBfQWpdw4juI6lbL%2FD7KnCKWJ6IG7%2FoWwCCyrRkvK%2FBRJA2FKrfxu10GoMUDTfl8e8X7HEcNFWqPHoeem8FdITJF7ZSzc0d%2B5FKlr54UWHyu%2BrGAQ0xv3J1KeIyYufDnQtsBeobzdIdVExON0aJgIqlobWAI9gg61DXcKxjOAY3ljhk8iX1JkYrNcjVRSR7wyjlYCg9yHWTqF0hyyfTnmoqpuDfattztbqw1FNxNBzVlfxgpvFGUyjYxwLYdECv5mWFxSoGYv3WrUJMOrT378GOqUBMEpY37m4PCSMbVFzvvn0QuHYXhbXg3g%2Fj9FJ3VVUy%2F1%2FLFmWTLX%2B1J0gTs30snwWVikj4OSp4y9%2Bkf7T4OKT0Yp02ixRBM7IEXFodlO6cVhq9BcVKG4QRO%2FZD0Yh6HM7y8Hed3q1b6GArNlALVxFOG13%2B%2BeT5PKv2croHnJdIPFX8kWvwJIArmtDyMUIbXZI8PZ6Q7VrbFEp2njiKwDiBuTbEDI6&X-Amz-Signature=09644e8a72c7f7554f89b5d67f44dbe997c7bb97e0d00ac9f51220926c30b2ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
