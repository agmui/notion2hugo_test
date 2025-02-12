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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663RFGUMS%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQhHQivMzVoCp1kATUEMe0RkaL8TBUJ6zNdZIBcqV2%2FwIgVH1pKr0%2BLMxlw%2FGAduGPE44%2FJjpHvolNFvfOSUMtEncqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhwZERelm%2F7NnRUiCrcAxbYtlg%2Bl%2F%2FsyuvH1vyf9GzXgKYsRglcGjK4Kv2XO3pLazD%2B43y4lsaPNcWKISjPrn0zHEGOHVf3QBB%2Fisd8tRp0Va1XEbgdGbA4aKulc6xuj8McIJtjdWnzpnC3WjxyrrWeV7RGorUxddJZ3U7XI9dt5CXzLMGRAn7h%2B2ox89fubRL98vHBbiaw9AfX9UT1HBQVgwxRFUH8Wo97NmJJYtAxbhnToKq3ToB79S%2BrjMe0Hb8sD%2B3gLqX9fBzJUaZF2KS6yjmRcNhJxnJDVmUUhepJJoPzmcuIrAw%2FeE01c2M3SJSQlaAFx%2BgXu%2BZZ1jGTPNpN%2BTzVHa2PtHYfzvZi5QWAKy2ljcAs25ADDsBnIJ1F8on%2FtRMAOa6tR3e3iKIx%2FgOpRspTTqUFPJo8IJt%2BSvqC204jrp1FehDB3I%2F7Q2DsVuMhYbR%2FGritK92UpuUFgO4%2FKOxCcuYFO6MLTZx7ADSnLhyfkZz4OqOzeSXm8qYUHOngnGzHQ2W0rQ%2FRTLM9fGq6sIFXbrf1ijBoi9DzR71fo3JAHKKgk%2FUqv07%2F9xXfabrE%2FTEABbpHRilW1i1ks%2Fs4AtdFaoeu7Zo9rWzkNMPb%2F2dHGM1FMrK8wh%2BgOts7zLjVowZr6v6ZWDq3MKCNtL0GOqUBh%2B6pSW2gI8ZbPGCfH95Vq5DClSXpX2eMF%2BtffGuN2HI1bOh8qsQ%2FfViXVevwhvOsui89M8K1h03AkgxyRyDECKZiEm9b2OMD0tElBbIQOb3j2nZADuzZz%2BoiiPfE3cwoL61sElGL5GV5vgcHWTuBsI4b%2BP5zAeYlHLVEg7Lsx8bMsVODdge67VsYhuPsdPomP3QVJOXy5iq9SH1aqGPfIZILWaGB&X-Amz-Signature=fdd0cc299da3fd2c4a32ee1e282b2a312636411654c00d5facae8e0304b7e053&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663RFGUMS%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQhHQivMzVoCp1kATUEMe0RkaL8TBUJ6zNdZIBcqV2%2FwIgVH1pKr0%2BLMxlw%2FGAduGPE44%2FJjpHvolNFvfOSUMtEncqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhwZERelm%2F7NnRUiCrcAxbYtlg%2Bl%2F%2FsyuvH1vyf9GzXgKYsRglcGjK4Kv2XO3pLazD%2B43y4lsaPNcWKISjPrn0zHEGOHVf3QBB%2Fisd8tRp0Va1XEbgdGbA4aKulc6xuj8McIJtjdWnzpnC3WjxyrrWeV7RGorUxddJZ3U7XI9dt5CXzLMGRAn7h%2B2ox89fubRL98vHBbiaw9AfX9UT1HBQVgwxRFUH8Wo97NmJJYtAxbhnToKq3ToB79S%2BrjMe0Hb8sD%2B3gLqX9fBzJUaZF2KS6yjmRcNhJxnJDVmUUhepJJoPzmcuIrAw%2FeE01c2M3SJSQlaAFx%2BgXu%2BZZ1jGTPNpN%2BTzVHa2PtHYfzvZi5QWAKy2ljcAs25ADDsBnIJ1F8on%2FtRMAOa6tR3e3iKIx%2FgOpRspTTqUFPJo8IJt%2BSvqC204jrp1FehDB3I%2F7Q2DsVuMhYbR%2FGritK92UpuUFgO4%2FKOxCcuYFO6MLTZx7ADSnLhyfkZz4OqOzeSXm8qYUHOngnGzHQ2W0rQ%2FRTLM9fGq6sIFXbrf1ijBoi9DzR71fo3JAHKKgk%2FUqv07%2F9xXfabrE%2FTEABbpHRilW1i1ks%2Fs4AtdFaoeu7Zo9rWzkNMPb%2F2dHGM1FMrK8wh%2BgOts7zLjVowZr6v6ZWDq3MKCNtL0GOqUBh%2B6pSW2gI8ZbPGCfH95Vq5DClSXpX2eMF%2BtffGuN2HI1bOh8qsQ%2FfViXVevwhvOsui89M8K1h03AkgxyRyDECKZiEm9b2OMD0tElBbIQOb3j2nZADuzZz%2BoiiPfE3cwoL61sElGL5GV5vgcHWTuBsI4b%2BP5zAeYlHLVEg7Lsx8bMsVODdge67VsYhuPsdPomP3QVJOXy5iq9SH1aqGPfIZILWaGB&X-Amz-Signature=4e2eb972d5b5fe2665fb561ae890dd385bdba36137718847629500ebffe488db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
