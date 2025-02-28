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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2WRY4UV%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDL9FzFTaF7cp1%2FG5d7h22j%2BCVLe5HyLvbJ7neEjRYwCgIgbOYRWnLTBA7ysI7itqE3GiO%2BpCByJ%2B4cZJs8jtO%2FRVMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxYKjBnGj7h5dL9rCrcA4cA5JLWWCYww5Hrt0IMmPOKL48nzWir%2BDxwCvoruywc4noidxOuL1zfrZQiaN4aR095iyEKaUnTf2GFCYXg3esNztN3wqGaX4Gf51nAsAvUmIbkCS8YkgF4mpSzzY9lseZIXPa8wCP8ZpHoRc3OjUt8Br8KdU1ADogfv1AOEnTJdiPXPuoEex721vC1zEV4pSyppoUGaPP8Kmx7UPSQ0Dacyv%2BMjSu5Bqm7Tv5FlRihfl4DjxDVlFo%2F6XlGvm0e2IeUR8%2BfoHHBxwJzHVuSox3q0b7i28ngHV%2FwDIZwqr6FJHf%2B3PuSbuY7Qh2FcujVQjTbpRFZxYKbFzAl8wuJqvKCjbi8tYmJ7oBqBMSJKGxLgtkklAPi20%2BHyUKgfcCtD7qYuxONI%2Bo%2B8Q2iMC4bc6Jyq%2BsurEUOPaCEYtNV5nxctYorGaW1Shy3XmS9JrN8EGN4OoP4%2Bv1OiflQHBTlTK58px%2FDzzKdX708Kzlo7mN7Vf8i0TBiH9hkMxyKWxp0pJcswWLDE38FM%2FacPLBU7rhMLHlJNDkDmN8OWtPG5FIOGOFCgysiKPWlSgoEJmveo%2FNMxloK4%2FayKoDpaRtjizCBE9%2BZeRBmZQsvv%2FegLHY0Th09dTfpXRnuMrScMOOShr4GOqUBQwwX3lVfSXUW7VhF7%2BNPEeo7XVmNLiEjZMOhukmgjeolmJySaGUjfFfpg734atv2jIlDHnRxRAIPCyUsju%2Ful2MfDZLuzhhzrnRMG%2FxXcNJ51S8wEga52Fe5xXXzsiz8BnjM%2Bes5SM1sZS%2BtuA9i9Wd3oaZEr2pnVM%2FigHwcd9RIt2ajGnleh5jiwCCnJ4WRcfU%2FW3yg7eHcVlpAipn7ZOqx6cQc&X-Amz-Signature=c3bab353c3df99c3cb1952408c74f7fb7b70bb4eaa5cd9fe490986dbfe538149&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2WRY4UV%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDL9FzFTaF7cp1%2FG5d7h22j%2BCVLe5HyLvbJ7neEjRYwCgIgbOYRWnLTBA7ysI7itqE3GiO%2BpCByJ%2B4cZJs8jtO%2FRVMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxYKjBnGj7h5dL9rCrcA4cA5JLWWCYww5Hrt0IMmPOKL48nzWir%2BDxwCvoruywc4noidxOuL1zfrZQiaN4aR095iyEKaUnTf2GFCYXg3esNztN3wqGaX4Gf51nAsAvUmIbkCS8YkgF4mpSzzY9lseZIXPa8wCP8ZpHoRc3OjUt8Br8KdU1ADogfv1AOEnTJdiPXPuoEex721vC1zEV4pSyppoUGaPP8Kmx7UPSQ0Dacyv%2BMjSu5Bqm7Tv5FlRihfl4DjxDVlFo%2F6XlGvm0e2IeUR8%2BfoHHBxwJzHVuSox3q0b7i28ngHV%2FwDIZwqr6FJHf%2B3PuSbuY7Qh2FcujVQjTbpRFZxYKbFzAl8wuJqvKCjbi8tYmJ7oBqBMSJKGxLgtkklAPi20%2BHyUKgfcCtD7qYuxONI%2Bo%2B8Q2iMC4bc6Jyq%2BsurEUOPaCEYtNV5nxctYorGaW1Shy3XmS9JrN8EGN4OoP4%2Bv1OiflQHBTlTK58px%2FDzzKdX708Kzlo7mN7Vf8i0TBiH9hkMxyKWxp0pJcswWLDE38FM%2FacPLBU7rhMLHlJNDkDmN8OWtPG5FIOGOFCgysiKPWlSgoEJmveo%2FNMxloK4%2FayKoDpaRtjizCBE9%2BZeRBmZQsvv%2FegLHY0Th09dTfpXRnuMrScMOOShr4GOqUBQwwX3lVfSXUW7VhF7%2BNPEeo7XVmNLiEjZMOhukmgjeolmJySaGUjfFfpg734atv2jIlDHnRxRAIPCyUsju%2Ful2MfDZLuzhhzrnRMG%2FxXcNJ51S8wEga52Fe5xXXzsiz8BnjM%2Bes5SM1sZS%2BtuA9i9Wd3oaZEr2pnVM%2FigHwcd9RIt2ajGnleh5jiwCCnJ4WRcfU%2FW3yg7eHcVlpAipn7ZOqx6cQc&X-Amz-Signature=e376d129e286fbdeb2dd9790b24d59902c18cbe13ed0d7a6fbb8255227977024&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
