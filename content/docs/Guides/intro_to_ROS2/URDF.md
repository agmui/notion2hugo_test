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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM5KAF7H%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDplC87%2FXLAAyhsFKbzOzODPMM09xBxiCeBsfiAVD5L1AiEA3t7Pc0IrsoGsUGT8IhCT%2Bj1vpYpIQ5%2Bu1RvYxu2ktdsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAClvbuktA9IzRnP2yrcA7V6fMLcmjXXraL2vQIfYyeUzqSt6FGtlRFn1rBRvNafrmppv1cwqfiBl7fZooGnqSXeRbiSD57VhkDIElYMlrlV4XPdHR1H%2FMIyr2L0qYOcn%2Fh5vzld00uxTpRV%2F1V4khYXVgmP6XRxfFJJ5irdYVRT3Cco%2FZDrgrt9Rfi59qaH1ZbC8DeZ78QKNCE9nA4ofFnuOB%2FL7x5M3DO3FCQYBXN7VumRhw1Z0YSezFntG8u9YdOcYmvR76le9KbVHXb1jXaPvCgbbOEAhVJt7fATOtmu75iyUWEbcIgdsGGLPfs0vTE5UIq0dxZkzmVzHbJACTIe08UfE9GSY8Op8n5bX8gFuZgfD%2FiFWoX%2FdFwIp%2BZzYrQ8RZFwd%2F2Dn9jLbxHUTDGbAm1DI%2FdludrzKExq3FIV%2F%2FcO3PpKaRpThoPVHOuSH4e0SyAoy2HtSjPwYxPEu4jTr2k2CX7RXY264sdyqlMuRHvEfo9ckIWoSshyYMvoLuj%2FG5bQRzW1dvLD%2FLDmpS%2FFXe65R3yEy8jg3zH812KL8f7LKAfNDvkcgrnLQock57T0uoJ3gNgKTAsukMVWN0XVHJAfX40RjraVnqOAJ3wrstmJlt8uxGmt7kgPG2fTyep%2BWEDZYj0KfydhMLK5070GOqUBSeWNbX0oTANPv7wBh08sZq0jdS%2FkEfTqjeoMbyOmS%2F3j5sI2tk3SpsytJlNHWvh86m1SyCnjMw4Mbd0WN56v9YFFPZJfnV7KD5ClMxh1anG7edcE%2FYCnPq9fMdX57J%2FC5zZoNVUUAZ1iMhYw%2BXT%2F9TEe38mWwWiWwwnYsm16ejJDMLsw4i08fuxiYrYr3fYD5MXRVuXDyYEF1A2Rsq9CPqMy4G5b&X-Amz-Signature=0de1ad9aa294f0b7e242abdf9995b70852142905ec5caed8a3ed8c7d22223fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM5KAF7H%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDplC87%2FXLAAyhsFKbzOzODPMM09xBxiCeBsfiAVD5L1AiEA3t7Pc0IrsoGsUGT8IhCT%2Bj1vpYpIQ5%2Bu1RvYxu2ktdsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAClvbuktA9IzRnP2yrcA7V6fMLcmjXXraL2vQIfYyeUzqSt6FGtlRFn1rBRvNafrmppv1cwqfiBl7fZooGnqSXeRbiSD57VhkDIElYMlrlV4XPdHR1H%2FMIyr2L0qYOcn%2Fh5vzld00uxTpRV%2F1V4khYXVgmP6XRxfFJJ5irdYVRT3Cco%2FZDrgrt9Rfi59qaH1ZbC8DeZ78QKNCE9nA4ofFnuOB%2FL7x5M3DO3FCQYBXN7VumRhw1Z0YSezFntG8u9YdOcYmvR76le9KbVHXb1jXaPvCgbbOEAhVJt7fATOtmu75iyUWEbcIgdsGGLPfs0vTE5UIq0dxZkzmVzHbJACTIe08UfE9GSY8Op8n5bX8gFuZgfD%2FiFWoX%2FdFwIp%2BZzYrQ8RZFwd%2F2Dn9jLbxHUTDGbAm1DI%2FdludrzKExq3FIV%2F%2FcO3PpKaRpThoPVHOuSH4e0SyAoy2HtSjPwYxPEu4jTr2k2CX7RXY264sdyqlMuRHvEfo9ckIWoSshyYMvoLuj%2FG5bQRzW1dvLD%2FLDmpS%2FFXe65R3yEy8jg3zH812KL8f7LKAfNDvkcgrnLQock57T0uoJ3gNgKTAsukMVWN0XVHJAfX40RjraVnqOAJ3wrstmJlt8uxGmt7kgPG2fTyep%2BWEDZYj0KfydhMLK5070GOqUBSeWNbX0oTANPv7wBh08sZq0jdS%2FkEfTqjeoMbyOmS%2F3j5sI2tk3SpsytJlNHWvh86m1SyCnjMw4Mbd0WN56v9YFFPZJfnV7KD5ClMxh1anG7edcE%2FYCnPq9fMdX57J%2FC5zZoNVUUAZ1iMhYw%2BXT%2F9TEe38mWwWiWwwnYsm16ejJDMLsw4i08fuxiYrYr3fYD5MXRVuXDyYEF1A2Rsq9CPqMy4G5b&X-Amz-Signature=24275adb47dfa75598b3cdc0f851d94c77b8c001ec03040b630c2a24d2010c37&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
