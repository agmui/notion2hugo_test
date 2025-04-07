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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHI2GUGN%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9XtbtqtLW%2B4elYK8G9Wnq%2BlKTt3wuPzsszy%2FJ5wxu8AIgfu%2Fw3kXbXuxO%2FzHu%2BXSDiYDNjplJ4TNg9m4jqqeREoUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJP0mwzX0OVOQrW%2BnCrcAyTzDeT2b1pGMU%2F4uyFRjp9T%2Bjtp%2B2vuh2IPRcbU2q%2F16mEihOu%2Fdp44Mk0ro16179eHbviHAtGGZbFHy8DknYXOLZ7oX66UJ9pYaPpebMPxpANCvr79P7JCYyn%2B4A2U8wV2Khn%2FoNem9avmxRWpE89P4c4S7CaE9oB6HHfNaPeOz6Lab5mrIPGYPToGEQLCAPHPU0NFW9YUUpnnr7t7H8osB9FJLrpDpAQECEcl61ykwi87dZPykzJ7Dy0NAybIGnbhqhLVjefbmGX7hm4KyHCvrrEwDIs52Xw52%2Fv7BBROFguvZ6jC4sljzL4GJu%2BgRXxu1rux%2F2xClkNymAltoX2te4L8bRSAf8QUpcLVQ9Kqvo84YHis95lzWPHWOejmsot56Dkx8x7ts%2FUkL%2B9k5x7E26wa0j8%2FmEU1won7uDtszndJpPLXb8w4kVKZZyngS0BYb%2BTdPFNocVFWf4YFv%2BbdImEXjNTVE8ubAwa9miJ7proBs6UiCZTvGcBBNw8RnARD4HevIBTbiYFOSCr765t%2BjKM8W%2Bp7nAzhJyh18J66cng4ujJ9TBPHZRXyFHj6phr4ZLJc775Ys2JPe3KHw6S5mzYJwZcyWHWWVzeLf%2B2tz95zyhszXVgFAY3sMP%2Bgzr8GOqUBWOqcuHC%2FGc8MyhgKBu2JYfCgCIB39DX9nQnvyuOQpuodyG2x4x8T6A0TltotYKGAyCNbCWBUJs42Pw5FBzWeuNUufN4fh%2FN3vz50anL3qf2VjllaiFQq7QvIDSNyQ6zxJ0HHDq7k9%2Fk93y1wNhX42BD1ss8syquejlzV07p1xU%2FWGmnSNBSLIlFjkkAyX0QazlFDy58ePi8FGDcFvamfCK1Bqwlg&X-Amz-Signature=0c02337e8d31d5b7f969244a8371ab56ac1220bd4e1d4e44eacd28f3d848cf7d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHI2GUGN%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9XtbtqtLW%2B4elYK8G9Wnq%2BlKTt3wuPzsszy%2FJ5wxu8AIgfu%2Fw3kXbXuxO%2FzHu%2BXSDiYDNjplJ4TNg9m4jqqeREoUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJP0mwzX0OVOQrW%2BnCrcAyTzDeT2b1pGMU%2F4uyFRjp9T%2Bjtp%2B2vuh2IPRcbU2q%2F16mEihOu%2Fdp44Mk0ro16179eHbviHAtGGZbFHy8DknYXOLZ7oX66UJ9pYaPpebMPxpANCvr79P7JCYyn%2B4A2U8wV2Khn%2FoNem9avmxRWpE89P4c4S7CaE9oB6HHfNaPeOz6Lab5mrIPGYPToGEQLCAPHPU0NFW9YUUpnnr7t7H8osB9FJLrpDpAQECEcl61ykwi87dZPykzJ7Dy0NAybIGnbhqhLVjefbmGX7hm4KyHCvrrEwDIs52Xw52%2Fv7BBROFguvZ6jC4sljzL4GJu%2BgRXxu1rux%2F2xClkNymAltoX2te4L8bRSAf8QUpcLVQ9Kqvo84YHis95lzWPHWOejmsot56Dkx8x7ts%2FUkL%2B9k5x7E26wa0j8%2FmEU1won7uDtszndJpPLXb8w4kVKZZyngS0BYb%2BTdPFNocVFWf4YFv%2BbdImEXjNTVE8ubAwa9miJ7proBs6UiCZTvGcBBNw8RnARD4HevIBTbiYFOSCr765t%2BjKM8W%2Bp7nAzhJyh18J66cng4ujJ9TBPHZRXyFHj6phr4ZLJc775Ys2JPe3KHw6S5mzYJwZcyWHWWVzeLf%2B2tz95zyhszXVgFAY3sMP%2Bgzr8GOqUBWOqcuHC%2FGc8MyhgKBu2JYfCgCIB39DX9nQnvyuOQpuodyG2x4x8T6A0TltotYKGAyCNbCWBUJs42Pw5FBzWeuNUufN4fh%2FN3vz50anL3qf2VjllaiFQq7QvIDSNyQ6zxJ0HHDq7k9%2Fk93y1wNhX42BD1ss8syquejlzV07p1xU%2FWGmnSNBSLIlFjkkAyX0QazlFDy58ePi8FGDcFvamfCK1Bqwlg&X-Amz-Signature=67e5568f38e3f0d53cea78a49def1f4fb517c108fc447616ffdfcd37155f8a17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
