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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QK2FTI3%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICMi8vGpElH6mrqIKQK1pOCcSEIkb3NdAWm1dpHbj2fxAiAOnMFqIzsG1p2RNGHPuihlXNDtgmyCQfiTuOPJJh7QkyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX9j4WUtvC6UeBab%2FKtwDUjEAm50LTrbPr1HQ8vmX9FwIancyIxJ8D8hWAOlQlx%2FkhlRDW61KLX0kPuEOBRFZbieRsBIC2%2B7zgDcIp5DEFqaMaLN8NBr1fXZi8BzvIeun5siOy%2Fl0KNMYKK%2By9YrQ9gTpnaf8Ic4mH%2Brhz8To6w3UGBjUe0Ki3yRNyOHiDP3g9jRcNUQqEB3pp1AcAh%2FKzzSHD2Xc%2BdyyvHSCpTgRjqYkMSoCVg4S2e9K4gZ8UoUmIhdTVZa2Ddp8UUWX%2BlXsvD76PNBqLGpGTOY99OysmVU8ane%2B%2Fykc4S5Yguyp15lfEp2eTg9qOPtvQ6hndfiR%2F6DOOSfeRzifzusWqLvGjetQst5pvqYYQQ5FMbdFFagCKXFzoG41fLZbalqUFVZ7qJNi1WNZ4nU77tIoGK8GEs22qlTZXbbiB2FOsYhnoRxH8qsp70wxIZIRCUnrkNFEJle59IIRcd3lrEdYfbKGkEiuXGAHypsO79Y0QctZxqInlmBsFpG%2BTjChoScRjQfZz5PREW8VBfKHu%2Bxp3WaxhmUTtiUSH7YMDreSl0fjxLQJ1BQjlPA43Ex%2BgvU7BrKMb81HStp6VN792LgHnigyplm%2FvUFp7NytuBHYTb0jEP7NYOGbGnBeAeNouFIwlIfVvQY6pgH5BWKkIsWDui1o9IK%2BXQTXXOQVXGrML5tNG6CojtAU3rq3fXO0oeWjIcDhwh%2BshZZoMvpuQ%2Fdb0vz3glN7rXSIf1PgR2vKjPUUs8vSMi04I6jIi0iFqf3DvTM1KrXifo78TT1Fy8XQ3hp%2Bf2Z8KIDzfQ%2BjlPjSTP61NvFBw%2FQNJb7qT8PzjBpFS%2BL8zQBlEXpWylVEVLdWQuPlxatcuRDhICHhcBZj&X-Amz-Signature=25ebe34910ecfda713eb6673e61d71812b7199a5b0b593be5e4021f7124a6ebf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QK2FTI3%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICMi8vGpElH6mrqIKQK1pOCcSEIkb3NdAWm1dpHbj2fxAiAOnMFqIzsG1p2RNGHPuihlXNDtgmyCQfiTuOPJJh7QkyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX9j4WUtvC6UeBab%2FKtwDUjEAm50LTrbPr1HQ8vmX9FwIancyIxJ8D8hWAOlQlx%2FkhlRDW61KLX0kPuEOBRFZbieRsBIC2%2B7zgDcIp5DEFqaMaLN8NBr1fXZi8BzvIeun5siOy%2Fl0KNMYKK%2By9YrQ9gTpnaf8Ic4mH%2Brhz8To6w3UGBjUe0Ki3yRNyOHiDP3g9jRcNUQqEB3pp1AcAh%2FKzzSHD2Xc%2BdyyvHSCpTgRjqYkMSoCVg4S2e9K4gZ8UoUmIhdTVZa2Ddp8UUWX%2BlXsvD76PNBqLGpGTOY99OysmVU8ane%2B%2Fykc4S5Yguyp15lfEp2eTg9qOPtvQ6hndfiR%2F6DOOSfeRzifzusWqLvGjetQst5pvqYYQQ5FMbdFFagCKXFzoG41fLZbalqUFVZ7qJNi1WNZ4nU77tIoGK8GEs22qlTZXbbiB2FOsYhnoRxH8qsp70wxIZIRCUnrkNFEJle59IIRcd3lrEdYfbKGkEiuXGAHypsO79Y0QctZxqInlmBsFpG%2BTjChoScRjQfZz5PREW8VBfKHu%2Bxp3WaxhmUTtiUSH7YMDreSl0fjxLQJ1BQjlPA43Ex%2BgvU7BrKMb81HStp6VN792LgHnigyplm%2FvUFp7NytuBHYTb0jEP7NYOGbGnBeAeNouFIwlIfVvQY6pgH5BWKkIsWDui1o9IK%2BXQTXXOQVXGrML5tNG6CojtAU3rq3fXO0oeWjIcDhwh%2BshZZoMvpuQ%2Fdb0vz3glN7rXSIf1PgR2vKjPUUs8vSMi04I6jIi0iFqf3DvTM1KrXifo78TT1Fy8XQ3hp%2Bf2Z8KIDzfQ%2BjlPjSTP61NvFBw%2FQNJb7qT8PzjBpFS%2BL8zQBlEXpWylVEVLdWQuPlxatcuRDhICHhcBZj&X-Amz-Signature=7d98551af5a04b8bfab6fce8df86c489d0a16be05e2d52b50609748b29a8e387&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
