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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN27V7CB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIAZTD0mZMmdl5CSSFnnUOfgG9b9q5l6ihIy2wRq%2FuivfAiEA1HSqTKi8wALAbrVKq2Ht7Vd7cxw0HlLJyZT55qGUX8cqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9cGrvXFJBOV0wfQCrcA%2BB0kDTBXCt9%2FpZyNzSdL5kmcwepi90cxjFPYQmfuEzcTCoMugNiKiZpCeriWl7zFZCTlBsD6kCxld%2Fg3OIQdIR6NARhrPdaLUxucuwpmCTqfZ8fYtkTnHWWk2%2F7i2AKroZ6nbdQndNbiS0VJEHCKSZS1p5rG2935EmV7bMATMGFWwfAHahHT841vSXaI3o2AVURyaoHIQDsgrkKoXkuu%2BfSzTgSK%2BeKzMdkwYZ4nWDAOcOT05TFFXI5r%2FUN8wFhjKeReUPisjFyfSsh9%2FxulDbN7RCU1mvVlRY0asB4ckuX8agAbocBn08srpOMaAVR4KMxKqbnFrkezKmEdemtuQdHJUY44XHlu0X7Cj8yDd6vmdpmwK1e5r0btqlbdMMEydtRaP3x3%2BjSko0%2B3KLEi0bkMb%2B3j6%2BndCuJNK3AEGvhOT4CLs3d%2F3uuD4dDUSVHJzzV%2FrGEaO0qX1TFeGeTyAH2G8sMv%2B5V%2Fr%2BOMmN6GPm1jdYeoFCVj%2FPTiEbTXHMTQKl6cjUZYb8FGZjir79SQnaaZcQFJA%2BF1ZZSP%2F9c5%2Fs5%2FFm0n2WHullVF%2BkwXdKZF39mbdfV2bKaTsJ3Se9gRuZ%2BcT8fQnnhiW%2BJ1rHw38uPK8Nqg3EjnR%2FmEl1OMNbxm8AGOqUBcWkGz%2FD5Wdo2nHtqVukDrQPh8%2FXXbRxQjby29uFX9FWRK3RAugPRYsb9m63RjvdYgMx%2B0BQXjE8nYrd0IJL6VL7YE74J%2FJBkWZeeKT9GxUEdS0sxdFIMXBNzvO3PYnw3xsb3S7c%2Fm%2B%2BlnpDegO%2B6LVEjO6Py9J3%2BEDXaRfcWH2Exn%2Fev3JbjjKkdOIV%2FclizAyofLH5%2FkJWH0rmY9nELJdU7P6VU&X-Amz-Signature=31fd9ac520f484bb4e89a04cf1d06d65a5b0484d828694b167dd2542fde5a8c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN27V7CB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIAZTD0mZMmdl5CSSFnnUOfgG9b9q5l6ihIy2wRq%2FuivfAiEA1HSqTKi8wALAbrVKq2Ht7Vd7cxw0HlLJyZT55qGUX8cqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9cGrvXFJBOV0wfQCrcA%2BB0kDTBXCt9%2FpZyNzSdL5kmcwepi90cxjFPYQmfuEzcTCoMugNiKiZpCeriWl7zFZCTlBsD6kCxld%2Fg3OIQdIR6NARhrPdaLUxucuwpmCTqfZ8fYtkTnHWWk2%2F7i2AKroZ6nbdQndNbiS0VJEHCKSZS1p5rG2935EmV7bMATMGFWwfAHahHT841vSXaI3o2AVURyaoHIQDsgrkKoXkuu%2BfSzTgSK%2BeKzMdkwYZ4nWDAOcOT05TFFXI5r%2FUN8wFhjKeReUPisjFyfSsh9%2FxulDbN7RCU1mvVlRY0asB4ckuX8agAbocBn08srpOMaAVR4KMxKqbnFrkezKmEdemtuQdHJUY44XHlu0X7Cj8yDd6vmdpmwK1e5r0btqlbdMMEydtRaP3x3%2BjSko0%2B3KLEi0bkMb%2B3j6%2BndCuJNK3AEGvhOT4CLs3d%2F3uuD4dDUSVHJzzV%2FrGEaO0qX1TFeGeTyAH2G8sMv%2B5V%2Fr%2BOMmN6GPm1jdYeoFCVj%2FPTiEbTXHMTQKl6cjUZYb8FGZjir79SQnaaZcQFJA%2BF1ZZSP%2F9c5%2Fs5%2FFm0n2WHullVF%2BkwXdKZF39mbdfV2bKaTsJ3Se9gRuZ%2BcT8fQnnhiW%2BJ1rHw38uPK8Nqg3EjnR%2FmEl1OMNbxm8AGOqUBcWkGz%2FD5Wdo2nHtqVukDrQPh8%2FXXbRxQjby29uFX9FWRK3RAugPRYsb9m63RjvdYgMx%2B0BQXjE8nYrd0IJL6VL7YE74J%2FJBkWZeeKT9GxUEdS0sxdFIMXBNzvO3PYnw3xsb3S7c%2Fm%2B%2BlnpDegO%2B6LVEjO6Py9J3%2BEDXaRfcWH2Exn%2Fev3JbjjKkdOIV%2FclizAyofLH5%2FkJWH0rmY9nELJdU7P6VU&X-Amz-Signature=ca880d446fccbb9294d8bd2276c0c583837eef0eba092ea01c949ddc0da23100&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
