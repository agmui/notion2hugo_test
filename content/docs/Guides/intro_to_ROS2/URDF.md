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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FVU5ZZ3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB89J7t7o799MWqSSz888X9aoXYRzoOg4IouiIvhjFyaAiBDslN7h%2BuLizFDfwZpy1qgakR99dJTj3HjrWkUcRpD9ir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMLXtfpW2c4fpXe1%2BpKtwDKQ%2FMBZp%2BUnf%2B1wR2IlLK7PIWZgeKive4M0iPGyAcTRqNv5EeDmse2K0CFcqNtS2OPdGL0Cc3pHDZRcFmV6t0QZeXPrQ0hoFdcdGpWbP9pJ37JggrRmK3HlZg1Oewnkx5eJGgkWwML6ydbDr2DPTYb76AUom4pRH47%2BNLMVqGqAHfgdnwhKNmDudvv4uT4AqeoKIc5w%2BvkPpfz7HQkR%2BQejG29vpcRTO56Qm84VUa8mazjfOXC%2FMKRt%2BVk9eOG7%2Bv5ccO2eDT5MUbOPUo2jotUwEyv6Ahp52O3wBNswdR2Zu2CyAQhfy3QrGZ43Er7WbqAq%2Fp2YOSuui%2BRLX4%2F3usb%2Bvri8bFnkZN58BqU311b%2FPaFDpabEfY8QaEQvxqx9QX%2FGuQbCaPjL62usuh8ECY6Lmt44IjdOut45eQiFv9whhHGZWjxNLSa93QRCKdn3e4rX9baCtRsXdzblN7bn5Iv%2FHkYykWtx32qM5rJtBzYNvrJGQOoMQfdbgD%2FOIMIUQKzRsKFwj%2FNH7hVzSL%2F8BzaLQFpPpthMlMaqvzy4Avo4Ag79SHn9ZXG9Kui9IL0iQYR4l7s%2FNUPx40FCEdKmjKW3zDvekatTHcKrA0IEjqv8vp2yKjLoQdWATDGacw8OqhwQY6pgFV66ODkBg5121dfTPaVW%2Fz06GVT1fyaGQZ4160vphb4ymRoBnM1CK5xX0afFl32BWOBkYUARou63WLzbSsAxiiQMJ1Ira8G3m3IFniXPaPIhkl3cF0uKZs7E52LkcL22dsHOBj9N5mtmavnnzie49PXEum7Qm6TQtcrmdZmATnyONb%2BZDiGTSU4eq5oh4i0NvHJIwAWp3fzItdqlQlVf59rddk%2F0xh&X-Amz-Signature=a5c00e76c23489a2a382615a1588894fd9816975d104ff3db5f19f609693960b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FVU5ZZ3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB89J7t7o799MWqSSz888X9aoXYRzoOg4IouiIvhjFyaAiBDslN7h%2BuLizFDfwZpy1qgakR99dJTj3HjrWkUcRpD9ir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMLXtfpW2c4fpXe1%2BpKtwDKQ%2FMBZp%2BUnf%2B1wR2IlLK7PIWZgeKive4M0iPGyAcTRqNv5EeDmse2K0CFcqNtS2OPdGL0Cc3pHDZRcFmV6t0QZeXPrQ0hoFdcdGpWbP9pJ37JggrRmK3HlZg1Oewnkx5eJGgkWwML6ydbDr2DPTYb76AUom4pRH47%2BNLMVqGqAHfgdnwhKNmDudvv4uT4AqeoKIc5w%2BvkPpfz7HQkR%2BQejG29vpcRTO56Qm84VUa8mazjfOXC%2FMKRt%2BVk9eOG7%2Bv5ccO2eDT5MUbOPUo2jotUwEyv6Ahp52O3wBNswdR2Zu2CyAQhfy3QrGZ43Er7WbqAq%2Fp2YOSuui%2BRLX4%2F3usb%2Bvri8bFnkZN58BqU311b%2FPaFDpabEfY8QaEQvxqx9QX%2FGuQbCaPjL62usuh8ECY6Lmt44IjdOut45eQiFv9whhHGZWjxNLSa93QRCKdn3e4rX9baCtRsXdzblN7bn5Iv%2FHkYykWtx32qM5rJtBzYNvrJGQOoMQfdbgD%2FOIMIUQKzRsKFwj%2FNH7hVzSL%2F8BzaLQFpPpthMlMaqvzy4Avo4Ag79SHn9ZXG9Kui9IL0iQYR4l7s%2FNUPx40FCEdKmjKW3zDvekatTHcKrA0IEjqv8vp2yKjLoQdWATDGacw8OqhwQY6pgFV66ODkBg5121dfTPaVW%2Fz06GVT1fyaGQZ4160vphb4ymRoBnM1CK5xX0afFl32BWOBkYUARou63WLzbSsAxiiQMJ1Ira8G3m3IFniXPaPIhkl3cF0uKZs7E52LkcL22dsHOBj9N5mtmavnnzie49PXEum7Qm6TQtcrmdZmATnyONb%2BZDiGTSU4eq5oh4i0NvHJIwAWp3fzItdqlQlVf59rddk%2F0xh&X-Amz-Signature=e2087cfd0c6b140d4e5cdc81698619498c261d379c07321169d5f396c71b0be5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
