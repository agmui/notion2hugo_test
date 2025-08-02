---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC47AQ66%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqKAAEkxWnaEvwHlD1EaKDEgFVEq4XIvn%2B2hQkSc36cAiEAz%2F6zId%2Bsr6QSZHbA0wVpJH8t4gEt0Lyts2kEdweOcAwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHKbX15rIUUM4wB4sCrcA5hNpUMxbX%2FiyRdl3p6fvtCBwyuQXLO7HHOvzG9cLI6k8zmOVB7qdrfw9rqUTI934KovWuDgbwC9w0jSJDfk5KKv5St6h9b0rWI7TDPjTIT%2FGk4BZvrwUTGNvxIcltpP3O9F3exfEhG8a4PcMqqBKmrGf7p1Qkcv72lHDGncePAHah18eo36l%2FZlMTdz4Pab%2Fo6LuKmRoJgInqA1wPlmaUzDW2ET%2BnI7Ygzcqw0rO2NWwES%2FOTkm0gI3zGqHFI4%2FHXmzzct4sYB%2FpVDFdbXVXKdn7XPl3BpoCFhTYe2HdcGkD%2BquPTsIyYAKFj3njSVX31b94ktD%2FspavhMWkAZZM4VFmSCdPzqpnUVAJWe7caspn5MX5hr2k14LP2yaRbbmao%2FjwpWuSDBMBP5Y45a4Ea%2FQ27td7E4TqA84GOi%2Fwekr9jUl3jJbTU13rO48vKFAmcAL60XfqqWLW8rPbiNBnO5yb4Ts0Cd9cs1qopHlODvqzVCULvqhv0Yf33FOxMJIfwu2rV%2FrDQ%2F%2FP%2BXocRUQ8Ij4W%2BPiFFg0GyxlEMfI7u5EemoXuZ4CWdIl0YjixtVB5YK7JP9bhXcK%2FS0yyzJJ987Ff%2Fg%2FyWDid9d4%2B3Z4D5aciMwrHweiPoOtcAD1ML%2BeucQGOqUBns7MGh7meZt9AxWOv3uvQScirdFHdSkU1N5OkB7IcCXiARkoTV%2BMGH12JLa5VgwqlixlkW0CoPe0AqVtrpFVfu7%2BR4iyZAXfhWsrVNBJoZ8i4WKiuQ%2FoBRHBmTKU4NAIWXgET5F%2BMlK%2Fk0Jt28Z2%2BFjxOy6faBMEvJMDjGCfpgAnFDL%2F7YAosDygr0MEldoFkTxyKyisN3DstGMpOEUtuaMZbhxd&X-Amz-Signature=b6da226eeb380ee62d476b6200990af64e5de685583be13fedf232049e50f090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC47AQ66%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqKAAEkxWnaEvwHlD1EaKDEgFVEq4XIvn%2B2hQkSc36cAiEAz%2F6zId%2Bsr6QSZHbA0wVpJH8t4gEt0Lyts2kEdweOcAwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHKbX15rIUUM4wB4sCrcA5hNpUMxbX%2FiyRdl3p6fvtCBwyuQXLO7HHOvzG9cLI6k8zmOVB7qdrfw9rqUTI934KovWuDgbwC9w0jSJDfk5KKv5St6h9b0rWI7TDPjTIT%2FGk4BZvrwUTGNvxIcltpP3O9F3exfEhG8a4PcMqqBKmrGf7p1Qkcv72lHDGncePAHah18eo36l%2FZlMTdz4Pab%2Fo6LuKmRoJgInqA1wPlmaUzDW2ET%2BnI7Ygzcqw0rO2NWwES%2FOTkm0gI3zGqHFI4%2FHXmzzct4sYB%2FpVDFdbXVXKdn7XPl3BpoCFhTYe2HdcGkD%2BquPTsIyYAKFj3njSVX31b94ktD%2FspavhMWkAZZM4VFmSCdPzqpnUVAJWe7caspn5MX5hr2k14LP2yaRbbmao%2FjwpWuSDBMBP5Y45a4Ea%2FQ27td7E4TqA84GOi%2Fwekr9jUl3jJbTU13rO48vKFAmcAL60XfqqWLW8rPbiNBnO5yb4Ts0Cd9cs1qopHlODvqzVCULvqhv0Yf33FOxMJIfwu2rV%2FrDQ%2F%2FP%2BXocRUQ8Ij4W%2BPiFFg0GyxlEMfI7u5EemoXuZ4CWdIl0YjixtVB5YK7JP9bhXcK%2FS0yyzJJ987Ff%2Fg%2FyWDid9d4%2B3Z4D5aciMwrHweiPoOtcAD1ML%2BeucQGOqUBns7MGh7meZt9AxWOv3uvQScirdFHdSkU1N5OkB7IcCXiARkoTV%2BMGH12JLa5VgwqlixlkW0CoPe0AqVtrpFVfu7%2BR4iyZAXfhWsrVNBJoZ8i4WKiuQ%2FoBRHBmTKU4NAIWXgET5F%2BMlK%2Fk0Jt28Z2%2BFjxOy6faBMEvJMDjGCfpgAnFDL%2F7YAosDygr0MEldoFkTxyKyisN3DstGMpOEUtuaMZbhxd&X-Amz-Signature=8669290f43ee1c94981c44ad9cf7e17ade20ddfff3e780a6a2ca8bce3e7846e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
