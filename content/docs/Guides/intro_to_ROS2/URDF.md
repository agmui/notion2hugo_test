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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YHJ2CIE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIC0w6pVuLqZpqjU7epSpv4Qz0i0Yrwz%2Bq6VXi%2FMls2nvAiEAl%2FqpUht9qi5ZOfd6jbuXVo4dtSRNRJ3AuLE%2FUFNrWvsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe7cM3UPvZgVFTfmSrcA1G%2FwLmeVbYz9teNdufU1JiMZ0g3P%2FaQPMpIXdc%2FOSkcxYux0lr19pDYaM0M%2FasJYhzBHb5V3FPnlyPRB9CLdzr1gGOBVEaLIjG9oC87s3QlEJIU6e%2BskzeC%2FC9QzHNdI4Txzh1Gb63oSCXYlURIqLQErqKUlRjHEaWt3UX4wSKlYrd5jmUAbvw1SdiWK0bfK%2Fir5br4TSdZ%2BmuTGLQmw3ELF7Y7KUVB6X9csvnBVTKiXLZnqIiBfkDV4IvANj3oF%2BsVWl7Kto1AKW09JD%2B%2BugBXHQbjiC11Qx40Ttz%2BeLsm78Poh8WrzyHGRn2Ix9r7xI2FsOq7HzQ9Xve56kEsCHBTD2Qm6UoFW%2FplLqlGxvG2LzJ6BL6ZwTNII466sT7LgY0IfDKveXKzh%2F2podX4H%2FNxuax6qC6yXo5AhCQvmLuNUViEf9%2FDgCnvj%2Bri62D5%2FCXf148U32xFSDaEAz0oud4yHk1cVfMa5xHM5oClQSJmIG2ze%2F2%2FfVe%2FCGXFatP3%2Bh7S06KUjluaT4xxofEbWz10c7XKfvJ4Zjb2xOZnScOcosRFiFmXfXg39AvKBnj3UyFORx8qoig9tKVS3CvWtONVNfXNEcihKx3UWFtcEWinvE3JdpJ5qUvVRev7MOPSwr4GOqUB5SKe8x99tyO0mb1Ws42iF6RuJSXHUdwjPv9Xn8R9CUNMM8V0FtqtbF%2BkLZZnQRO6BVP5t7zXDY61%2BMAUpvRibjc7K0fZBAWm2b3FfnGXKyRY8gpAqEctVdaLB%2BOjmqOptYc0%2FN6Qj53M1uRpKwF2MLjxYrhC0dNg%2Fj%2F3FWmtRIomr5Q3Uy9OGL0iGcUheQtFAIP%2FVTfzA2PwfvytI8%2FVpIjC3306&X-Amz-Signature=10c04f5462bf4af46a1aa35873fabb1d41a1dc944df57df6c69b598b74304590&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YHJ2CIE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIC0w6pVuLqZpqjU7epSpv4Qz0i0Yrwz%2Bq6VXi%2FMls2nvAiEAl%2FqpUht9qi5ZOfd6jbuXVo4dtSRNRJ3AuLE%2FUFNrWvsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe7cM3UPvZgVFTfmSrcA1G%2FwLmeVbYz9teNdufU1JiMZ0g3P%2FaQPMpIXdc%2FOSkcxYux0lr19pDYaM0M%2FasJYhzBHb5V3FPnlyPRB9CLdzr1gGOBVEaLIjG9oC87s3QlEJIU6e%2BskzeC%2FC9QzHNdI4Txzh1Gb63oSCXYlURIqLQErqKUlRjHEaWt3UX4wSKlYrd5jmUAbvw1SdiWK0bfK%2Fir5br4TSdZ%2BmuTGLQmw3ELF7Y7KUVB6X9csvnBVTKiXLZnqIiBfkDV4IvANj3oF%2BsVWl7Kto1AKW09JD%2B%2BugBXHQbjiC11Qx40Ttz%2BeLsm78Poh8WrzyHGRn2Ix9r7xI2FsOq7HzQ9Xve56kEsCHBTD2Qm6UoFW%2FplLqlGxvG2LzJ6BL6ZwTNII466sT7LgY0IfDKveXKzh%2F2podX4H%2FNxuax6qC6yXo5AhCQvmLuNUViEf9%2FDgCnvj%2Bri62D5%2FCXf148U32xFSDaEAz0oud4yHk1cVfMa5xHM5oClQSJmIG2ze%2F2%2FfVe%2FCGXFatP3%2Bh7S06KUjluaT4xxofEbWz10c7XKfvJ4Zjb2xOZnScOcosRFiFmXfXg39AvKBnj3UyFORx8qoig9tKVS3CvWtONVNfXNEcihKx3UWFtcEWinvE3JdpJ5qUvVRev7MOPSwr4GOqUB5SKe8x99tyO0mb1Ws42iF6RuJSXHUdwjPv9Xn8R9CUNMM8V0FtqtbF%2BkLZZnQRO6BVP5t7zXDY61%2BMAUpvRibjc7K0fZBAWm2b3FfnGXKyRY8gpAqEctVdaLB%2BOjmqOptYc0%2FN6Qj53M1uRpKwF2MLjxYrhC0dNg%2Fj%2F3FWmtRIomr5Q3Uy9OGL0iGcUheQtFAIP%2FVTfzA2PwfvytI8%2FVpIjC3306&X-Amz-Signature=b46c90f440289e4dd967b7c629e237132936dc6ab32ff460f8deedd0127d22ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
