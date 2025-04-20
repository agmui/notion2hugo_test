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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z74RSVYR%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAYlq1B6E4FKH6WZ9%2FmWNmQ6sdiWgjclyZDvQ2vSmn5zAiEAw1%2FwpDjznzdLQld0hvwVtfo19P5%2Fok%2F2ezyoO6ykZR8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0m%2FCmDfPeywFGJdyrcA34EVS%2FFl4Qp2MHj9sRZiGRLZrOQyTQRbozzZCDN44ZAmBDOtwu4ft%2F3qie22h2PB5KQ67dH1lONagGdGrYV8lxzeVLffoul6OiFZ7dNvZo%2FZDmg%2FGXhPzoLbSYYhwsdNy1XlZvxVeERLm8hEJfMgaO2XX4KY9ZAiDIvw0MIysbfm0vIIJnOMGrLplmtZG%2Bx64fEyF%2BkSSQ8g5xk5ESv11LupacdpqGsD4HSBibrSG7vxhkzr0YhkCqqULLQCUWONSMgahR%2FcptgxuDWvwqQ4eiYpz3qG6Kc6Q0gpRWJ6Qpj8u4YONJHF8c2zbXcAVERz87re%2ByousIKdWxxeFM8gxRBIZJn30G9C4vEmjihHGYWDGZJslRHoFnTDQR8bgdJZDriS%2FjDHlr%2Fdk4SoUqxqIXh%2BpJI5k0CxeLbNByPads65BlEpCB%2Fj%2Bzjc2EEJaNN1ybw8GOxsp6O%2BAweZV8DQxjbiogPDbIcRwb1mnaSkfdaBvrkbtUfnX%2BFqOu40twwLAxX0Du8qMbXhIkGe6aHljH9o6CVgCyVHL%2FZG%2BEk%2B7P98YsBC1ES1m58cMUkVrnyEOlMwwa1Ev3tdCQCaePNJlI%2Bakm5wNoPOspCc%2BGHJP%2BW3xe9vaE0lS%2Fpirf%2BMKekksAGOqUBmVv9Fg0AeomCXsA5cH8sbPR9Ms6mVfharQu55TiKBrtZFVaVIOUn6Fgzn2IMaG5hWIEF472dSglZ7aSn1J5lb9fyO1CWXNdJrDu5JHBTDT%2BaqH1bq1fTkOyeb7bYc91wlCDj%2B1ffrukgE8PfSEUiTZ8%2BqoAG%2BxL1w%2FMRUGXUl3isXLHMCKNqp7eZrrueIS4O8oNULlibsrMY1OVtAJxdHsiefH0V&X-Amz-Signature=de02a3e147d61803d459a9c8cd50e0d92a63282ab1204ea19c6b7c362fcba5a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z74RSVYR%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAYlq1B6E4FKH6WZ9%2FmWNmQ6sdiWgjclyZDvQ2vSmn5zAiEAw1%2FwpDjznzdLQld0hvwVtfo19P5%2Fok%2F2ezyoO6ykZR8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0m%2FCmDfPeywFGJdyrcA34EVS%2FFl4Qp2MHj9sRZiGRLZrOQyTQRbozzZCDN44ZAmBDOtwu4ft%2F3qie22h2PB5KQ67dH1lONagGdGrYV8lxzeVLffoul6OiFZ7dNvZo%2FZDmg%2FGXhPzoLbSYYhwsdNy1XlZvxVeERLm8hEJfMgaO2XX4KY9ZAiDIvw0MIysbfm0vIIJnOMGrLplmtZG%2Bx64fEyF%2BkSSQ8g5xk5ESv11LupacdpqGsD4HSBibrSG7vxhkzr0YhkCqqULLQCUWONSMgahR%2FcptgxuDWvwqQ4eiYpz3qG6Kc6Q0gpRWJ6Qpj8u4YONJHF8c2zbXcAVERz87re%2ByousIKdWxxeFM8gxRBIZJn30G9C4vEmjihHGYWDGZJslRHoFnTDQR8bgdJZDriS%2FjDHlr%2Fdk4SoUqxqIXh%2BpJI5k0CxeLbNByPads65BlEpCB%2Fj%2Bzjc2EEJaNN1ybw8GOxsp6O%2BAweZV8DQxjbiogPDbIcRwb1mnaSkfdaBvrkbtUfnX%2BFqOu40twwLAxX0Du8qMbXhIkGe6aHljH9o6CVgCyVHL%2FZG%2BEk%2B7P98YsBC1ES1m58cMUkVrnyEOlMwwa1Ev3tdCQCaePNJlI%2Bakm5wNoPOspCc%2BGHJP%2BW3xe9vaE0lS%2Fpirf%2BMKekksAGOqUBmVv9Fg0AeomCXsA5cH8sbPR9Ms6mVfharQu55TiKBrtZFVaVIOUn6Fgzn2IMaG5hWIEF472dSglZ7aSn1J5lb9fyO1CWXNdJrDu5JHBTDT%2BaqH1bq1fTkOyeb7bYc91wlCDj%2B1ffrukgE8PfSEUiTZ8%2BqoAG%2BxL1w%2FMRUGXUl3isXLHMCKNqp7eZrrueIS4O8oNULlibsrMY1OVtAJxdHsiefH0V&X-Amz-Signature=58765ce45d3a046c2324cc047098d856b1ed8131cd9c3851d621a0bfa0e8629e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
