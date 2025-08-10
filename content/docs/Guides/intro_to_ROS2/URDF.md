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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2TOADH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWYylPSFiHK9Hw4QE4j3MwC%2Fhi0JWFNcByg7WR2Kj5TAiEAyPDAVeJC59YZ7dHTBGkQutifqqD80lgrAKKLgP6wlVgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFINNBMa2EXbu1CpcCrcA4Yorimt5nN%2FZ7vfIKCsM2nq65U%2BUSWFD8Wu5gECTx3l%2F7Ax78kVD33U2LSbUNWJ8jQlmhKxTXxpv3zz81JuWamuKNRM12kc8C5PIF3DHDWCKdqviDRuu6e70XnpbbXxP80yQ5mR%2BXxT0GWNf6FJFJf0tzADidBPCOcXnJAoA35v9ftDf01sffzJbqlZQy3r8EbM6t0dGHvFr1HYjjtGPJYbnKrGHD%2BX7TYH2w4vOPN7RqRsh3WIOAmEbC7%2FN%2FI0qt76YJdCnVGMtNuGTrI1BMEzWywXJcKVbG8w9TXYNgHahBiwEa4yXvbNk4Sravp8OPWBjK5%2BvogcVKNKUJN5iZufimNT1GdO2vjbLRNFyccwnTUpUcomarbpBEjoUlUCGhguTWBnlkOKUybgl0VtqN7Q%2Bc3Wh4rs%2FjEos47PXfgEFotTUhjqjXXmgZL1WsaFVySDLqDdJI2UJu8m2RLzQHEZW480ffbLsc8sCpFzsomUCVYyuD4MdqbPi1%2B3IKujc9tvt4rb1i8cbh%2B0l6KOKNANuB9HzunVzvfF9CDN8QgCZUi9lYkkFDzTJHj8AOg%2B7fTDcDc8jjhghPAv1f%2Bx0f3bKs%2Fey2jlQu2ClaTsUXyKhuRSHj2YSIFe4itEMJO648QGOqUBKBZXlR6V2ekUr1VGjrKCP3geX33VNKx%2BcLHJGYJqXs2u9Q6tJpcFJXj4bRp2J1UyE3ppiHpAEvTNm1GSBCxr49v3IDYHgK0kEJFGTHTBx%2FHUDygsrB%2FalfFvbRtwKyYzvogspEucm2YTShpYllFKTojEjg5Y8a1me7AORmKpX9fI4967TfTIjz0vW3pmKUlpx0wulw%2FgK74e2R9YxeZYXdFGKHV4&X-Amz-Signature=a47595765bfc9b210084fe0104c5a3984b9a045a9581a9fdd6fdbc992ca42781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2TOADH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWYylPSFiHK9Hw4QE4j3MwC%2Fhi0JWFNcByg7WR2Kj5TAiEAyPDAVeJC59YZ7dHTBGkQutifqqD80lgrAKKLgP6wlVgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFINNBMa2EXbu1CpcCrcA4Yorimt5nN%2FZ7vfIKCsM2nq65U%2BUSWFD8Wu5gECTx3l%2F7Ax78kVD33U2LSbUNWJ8jQlmhKxTXxpv3zz81JuWamuKNRM12kc8C5PIF3DHDWCKdqviDRuu6e70XnpbbXxP80yQ5mR%2BXxT0GWNf6FJFJf0tzADidBPCOcXnJAoA35v9ftDf01sffzJbqlZQy3r8EbM6t0dGHvFr1HYjjtGPJYbnKrGHD%2BX7TYH2w4vOPN7RqRsh3WIOAmEbC7%2FN%2FI0qt76YJdCnVGMtNuGTrI1BMEzWywXJcKVbG8w9TXYNgHahBiwEa4yXvbNk4Sravp8OPWBjK5%2BvogcVKNKUJN5iZufimNT1GdO2vjbLRNFyccwnTUpUcomarbpBEjoUlUCGhguTWBnlkOKUybgl0VtqN7Q%2Bc3Wh4rs%2FjEos47PXfgEFotTUhjqjXXmgZL1WsaFVySDLqDdJI2UJu8m2RLzQHEZW480ffbLsc8sCpFzsomUCVYyuD4MdqbPi1%2B3IKujc9tvt4rb1i8cbh%2B0l6KOKNANuB9HzunVzvfF9CDN8QgCZUi9lYkkFDzTJHj8AOg%2B7fTDcDc8jjhghPAv1f%2Bx0f3bKs%2Fey2jlQu2ClaTsUXyKhuRSHj2YSIFe4itEMJO648QGOqUBKBZXlR6V2ekUr1VGjrKCP3geX33VNKx%2BcLHJGYJqXs2u9Q6tJpcFJXj4bRp2J1UyE3ppiHpAEvTNm1GSBCxr49v3IDYHgK0kEJFGTHTBx%2FHUDygsrB%2FalfFvbRtwKyYzvogspEucm2YTShpYllFKTojEjg5Y8a1me7AORmKpX9fI4967TfTIjz0vW3pmKUlpx0wulw%2FgK74e2R9YxeZYXdFGKHV4&X-Amz-Signature=8f7b019fa86bd8dad9a74d9c57a3307d819e459c3a202f228451860709ce786b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
