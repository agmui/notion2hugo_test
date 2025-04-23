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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY3L33ZZ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCuTaSLqDbVrKwk6nzKhtWMS7d9KGPEHdbIwuH9ceWqrQIgQ7aY2FqjKJlXgOq46bgc4hdItfjWLNv9Tb0yduXb52AqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHq%2Fd8LFdbMGzYEMOCrcA3K58ZEaYPTo55dtzMEv9AOFZn%2FwAjDLIpsCQPoU3HgMyLSJu6zjdpJZKe%2F9fXKahI8AQU9ZMcAH33cI6n6VlCAxvo8c51DT%2Bxyj15%2BpvlbkdBqnqp9suThsk41Pn%2BFdcHm%2FdrA%2B9NbrENAeutaBGgZ7e0LVzEgiUjDnKD64vtnsaYPFIO%2FO7C4Fj0gDz0MRUMlnE%2BoGsufP0SjbxiyhP%2BBjM%2B110m7RMggOxaCNYZL6jT5VOxvLOdzKs5LniDQvtJQe8%2Bpi5dok0WIUUBicMFWbHSDqd4RmrWaKSuLtTPjMZ3rXmv798a4kP7CCv1fLMAy5sUM6Hh71Vr%2BOsd9UFYCNfwLmBTRkKwgZXK%2FsUy3Cw6NTk6EzeGheMHrlrTAlYeEvbmFT6TfG0FkY3O%2BC8ie8fR2KYuXdizFVPFn4L1lEoyCisajWaOhSjDKE1gEgyvVyTAs0MDJfx0Vc5OMXwGj%2BHt8Wj56ZQeZz1kOMwNlfHOylJqpwBuuzCgZjwJIH2wgzMNnsFKzLXQf2YG6R0Wl06aLlYTwTAbMw6sbKQlBR93Elnja%2FAoARSdb97dVXFHeeQIPzFz0oFLFVt3yYFF%2BT%2FvtkcYTSA4%2FufgK%2FZFZPiWN9gm8QcxtyjmYYMLXXosAGOqUBbphdxFO2KhS2H0NBwYHAKtXl3f4VsCjes0%2ByM3lMlPYuCAU%2FQmLYpuyWsY2EdQ6mcMePAQDRmQixB2v1z8UQ0ejQEHPiHTGkX%2B8P288HsKkc6iafoDntfiwvhtBx6IkErDZz9W84oHpLn7Hl8WtCB6qI1iDOVTadoJ2AkEr7cDF9xmmbiFD4x51LoF0OQZ2Sp7PSg%2F1C5UZf%2F8E6BuLEbwRyPTeQ&X-Amz-Signature=18f800e4c040bfafe192e52309069cef9ab06bc600f86ec77532b125d96b308e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY3L33ZZ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCuTaSLqDbVrKwk6nzKhtWMS7d9KGPEHdbIwuH9ceWqrQIgQ7aY2FqjKJlXgOq46bgc4hdItfjWLNv9Tb0yduXb52AqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHq%2Fd8LFdbMGzYEMOCrcA3K58ZEaYPTo55dtzMEv9AOFZn%2FwAjDLIpsCQPoU3HgMyLSJu6zjdpJZKe%2F9fXKahI8AQU9ZMcAH33cI6n6VlCAxvo8c51DT%2Bxyj15%2BpvlbkdBqnqp9suThsk41Pn%2BFdcHm%2FdrA%2B9NbrENAeutaBGgZ7e0LVzEgiUjDnKD64vtnsaYPFIO%2FO7C4Fj0gDz0MRUMlnE%2BoGsufP0SjbxiyhP%2BBjM%2B110m7RMggOxaCNYZL6jT5VOxvLOdzKs5LniDQvtJQe8%2Bpi5dok0WIUUBicMFWbHSDqd4RmrWaKSuLtTPjMZ3rXmv798a4kP7CCv1fLMAy5sUM6Hh71Vr%2BOsd9UFYCNfwLmBTRkKwgZXK%2FsUy3Cw6NTk6EzeGheMHrlrTAlYeEvbmFT6TfG0FkY3O%2BC8ie8fR2KYuXdizFVPFn4L1lEoyCisajWaOhSjDKE1gEgyvVyTAs0MDJfx0Vc5OMXwGj%2BHt8Wj56ZQeZz1kOMwNlfHOylJqpwBuuzCgZjwJIH2wgzMNnsFKzLXQf2YG6R0Wl06aLlYTwTAbMw6sbKQlBR93Elnja%2FAoARSdb97dVXFHeeQIPzFz0oFLFVt3yYFF%2BT%2FvtkcYTSA4%2FufgK%2FZFZPiWN9gm8QcxtyjmYYMLXXosAGOqUBbphdxFO2KhS2H0NBwYHAKtXl3f4VsCjes0%2ByM3lMlPYuCAU%2FQmLYpuyWsY2EdQ6mcMePAQDRmQixB2v1z8UQ0ejQEHPiHTGkX%2B8P288HsKkc6iafoDntfiwvhtBx6IkErDZz9W84oHpLn7Hl8WtCB6qI1iDOVTadoJ2AkEr7cDF9xmmbiFD4x51LoF0OQZ2Sp7PSg%2F1C5UZf%2F8E6BuLEbwRyPTeQ&X-Amz-Signature=08dc6a15b1caf000668ba5a12f69aaa46726503569cf1c5c0b080d974b67f1eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
