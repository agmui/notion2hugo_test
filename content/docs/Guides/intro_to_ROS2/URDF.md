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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LS7XDKO%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIBGMOIB6bEozGnXSF3D4b4Fj8CChHeWjvWWSn1nuMy7WAiEAu3ohbsgNNnOsnyDce8XdEmYH%2FeZsSQBXEhauiIegpVQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFtYUoyAYkaV60D6CyrcAx48a3PrrVLYSZO1a4qpe4mJNi0sHwHzUlBmwIeXSClXpEim2J29yr9gMQ4lwpjtr6FfwXxtW%2BHkqZcrkbP9MmivpG9mTQ%2Ba620FUAyf9gXj0rPPGZwFBmpNkAiMfA3FPU%2BmkZxvOSyfFu%2BuhWE3z6yEevUkaEes03G9%2BZzjlny%2B%2BPy%2BFb93d%2By6KdQCFAejhkshVKJptsblY45sY1RfEnWN%2B1S7CvsgdMzkerjSUhHgxahQPT463tp7SGtLrE2jcETXWsU%2BtLWoAFmKTtClmQGse0YmhhuOeRCyEG3PKhBlt8%2BvNqxqDhxDh5xmTkvjPSBUWpQyg4Bfi5q5wZuQkV3mqik3hel4Iy7BQol7zNcgNdFyZJky3XTRYXX2u%2BPXMhOII99oCjIjB%2Fnds8DFDkmUxL2wqYxI3nFnNfDEck%2BUXj0AEsQeLl7%2FY6IZeRnRbvQiiYgzQ%2FQOWGjCLJSfJZ%2BMV4e%2BfyDOOTR4CR%2F0XLb3%2FYckhOy%2FyOJUsa5ohbEpITu%2FNpNDdXpAruar44lQDEbresGCO%2F%2BPFUxSPW5qC5IG7%2B%2BRfS9s%2BZZPa8W%2BzepxetDHFFuTpgfqQwXXYT5aB14J1sO1Vfe5uvaldVWzvNO5UHvJ62ltCB2r3z%2BjMIjVl8EGOqUBhIXGVygg2gPaHGYSeg7p9VN9qTcEMoWUHCxA%2BLqfS4nO2ztDTycoG18iLqzUaDOWrHfkuTv%2FPeyCF15fNe13UBTn1WhkMk3X1chDZ7W21GOoZ4su77uTPd1u2326%2FVykPzOeT8rMvfx2FXs5kRqxwlq1pe4%2BAKBJAoreIv98bH1dksuID5Z0BxOchg%2Btf0KLH71vob8IQ1dd1akfMSM7ETuFze9b&X-Amz-Signature=dd9707ab190d21d870c3bc8cd8e325ffced2866a1e3ff646bf5a5380f2256bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LS7XDKO%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIBGMOIB6bEozGnXSF3D4b4Fj8CChHeWjvWWSn1nuMy7WAiEAu3ohbsgNNnOsnyDce8XdEmYH%2FeZsSQBXEhauiIegpVQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFtYUoyAYkaV60D6CyrcAx48a3PrrVLYSZO1a4qpe4mJNi0sHwHzUlBmwIeXSClXpEim2J29yr9gMQ4lwpjtr6FfwXxtW%2BHkqZcrkbP9MmivpG9mTQ%2Ba620FUAyf9gXj0rPPGZwFBmpNkAiMfA3FPU%2BmkZxvOSyfFu%2BuhWE3z6yEevUkaEes03G9%2BZzjlny%2B%2BPy%2BFb93d%2By6KdQCFAejhkshVKJptsblY45sY1RfEnWN%2B1S7CvsgdMzkerjSUhHgxahQPT463tp7SGtLrE2jcETXWsU%2BtLWoAFmKTtClmQGse0YmhhuOeRCyEG3PKhBlt8%2BvNqxqDhxDh5xmTkvjPSBUWpQyg4Bfi5q5wZuQkV3mqik3hel4Iy7BQol7zNcgNdFyZJky3XTRYXX2u%2BPXMhOII99oCjIjB%2Fnds8DFDkmUxL2wqYxI3nFnNfDEck%2BUXj0AEsQeLl7%2FY6IZeRnRbvQiiYgzQ%2FQOWGjCLJSfJZ%2BMV4e%2BfyDOOTR4CR%2F0XLb3%2FYckhOy%2FyOJUsa5ohbEpITu%2FNpNDdXpAruar44lQDEbresGCO%2F%2BPFUxSPW5qC5IG7%2B%2BRfS9s%2BZZPa8W%2BzepxetDHFFuTpgfqQwXXYT5aB14J1sO1Vfe5uvaldVWzvNO5UHvJ62ltCB2r3z%2BjMIjVl8EGOqUBhIXGVygg2gPaHGYSeg7p9VN9qTcEMoWUHCxA%2BLqfS4nO2ztDTycoG18iLqzUaDOWrHfkuTv%2FPeyCF15fNe13UBTn1WhkMk3X1chDZ7W21GOoZ4su77uTPd1u2326%2FVykPzOeT8rMvfx2FXs5kRqxwlq1pe4%2BAKBJAoreIv98bH1dksuID5Z0BxOchg%2Btf0KLH71vob8IQ1dd1akfMSM7ETuFze9b&X-Amz-Signature=293029552657d5e211ff4a7d6c55bca6141034c3e7a79878ea04d3c7b1aa0c2f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
