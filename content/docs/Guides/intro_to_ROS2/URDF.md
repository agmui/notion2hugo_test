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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZC73B5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHNDCaCKCBM3Y%2BcmTRqLpR6SYeqLyCend68zc5rRkSkAiAqQvmraPN4MsxJ0jOTtk4DEpm0pMOB6z93TrcILJcA%2FiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoqPw5I9tD3so8UJvKtwDAYJdNX1te07C6pp1qkFbAvbnfzM%2BHKYDbJdjPr6IG%2BLTQbbaRox%2FZM2tJmxakM5aFJuFHgLsuIcCYhTF0BeCQMyFpXXaq%2BjF7%2FzK6nRUT009LiFxe8qLCDZ%2F6ujow%2F%2FE8Em0BnW1wYRE4UujIAxydl%2Ba9%2FGNlTNxapevlZEHM4gizTPDA8PxW%2BgJsXEsiqUdLyE9g6T8PGrqWb%2BpjzsF7TCLJ%2F27Pw711Fvc3Cq9pPfrNLo2TQF6X6Bk9SwkHOQ2eXNGXQN2j3E%2BsC95pGmzygbpr0DxhKtM0%2FvZLZsRz5I2jh5I5J4GYMqM1mo5FYKZ9c0s0IBZbPgBcC2kmiZ7H%2BhPexDIyYA8E9BsHjvlv4j1ZOvspMIGhgQF7Zcr%2BojQJ3DEyBxWaYSCrL7fFnhC9armNyXVu0jvGNSXtAM0dYN%2Fvfeb3bAp%2FzjeRIfCVtNDY3vdJc%2FX2qvYsBvWwfjvjM%2B%2BqPeaiKzA8jUnV8tc3FjWlhP79aIQkTOFEQXA9%2FrW1r5cbvf470jynnlY%2F7EdfY1HgoZZVJ2Lbg3JNGa8Bzw5fbpQwRjt%2BWTHvxdXl7UH%2F%2BOndzGnyg8yvze6yKaVNNe1CnZWACgcbcyT01i7nhl9p073qNGSEohnNQAwmvHUwgY6pgGIrYil0pv6%2FubRRKF7dhSMfWA0Y2js5f2FNDgJ9VY3zsEVzvw1kMZHNP0AbL5ZjSCj0sNjarinOoctoqJhpxtp4JudEFJiawP6YDLoihCi9QvrYUsI9cUXvjzpzpOpJHzL4qpfYhehxHecVH2zxG3ofNeX70H5AexoISwDcuXlbn9AJPVR378oxr6%2FIYYZzsh%2BkGjP8o9VAcJ%2BN1uFh7rXFyejMNcS&X-Amz-Signature=5a9c0c852f875b3633c0531fc5560cc98e754729b270239dc62b75b471fbf6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZC73B5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHNDCaCKCBM3Y%2BcmTRqLpR6SYeqLyCend68zc5rRkSkAiAqQvmraPN4MsxJ0jOTtk4DEpm0pMOB6z93TrcILJcA%2FiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoqPw5I9tD3so8UJvKtwDAYJdNX1te07C6pp1qkFbAvbnfzM%2BHKYDbJdjPr6IG%2BLTQbbaRox%2FZM2tJmxakM5aFJuFHgLsuIcCYhTF0BeCQMyFpXXaq%2BjF7%2FzK6nRUT009LiFxe8qLCDZ%2F6ujow%2F%2FE8Em0BnW1wYRE4UujIAxydl%2Ba9%2FGNlTNxapevlZEHM4gizTPDA8PxW%2BgJsXEsiqUdLyE9g6T8PGrqWb%2BpjzsF7TCLJ%2F27Pw711Fvc3Cq9pPfrNLo2TQF6X6Bk9SwkHOQ2eXNGXQN2j3E%2BsC95pGmzygbpr0DxhKtM0%2FvZLZsRz5I2jh5I5J4GYMqM1mo5FYKZ9c0s0IBZbPgBcC2kmiZ7H%2BhPexDIyYA8E9BsHjvlv4j1ZOvspMIGhgQF7Zcr%2BojQJ3DEyBxWaYSCrL7fFnhC9armNyXVu0jvGNSXtAM0dYN%2Fvfeb3bAp%2FzjeRIfCVtNDY3vdJc%2FX2qvYsBvWwfjvjM%2B%2BqPeaiKzA8jUnV8tc3FjWlhP79aIQkTOFEQXA9%2FrW1r5cbvf470jynnlY%2F7EdfY1HgoZZVJ2Lbg3JNGa8Bzw5fbpQwRjt%2BWTHvxdXl7UH%2F%2BOndzGnyg8yvze6yKaVNNe1CnZWACgcbcyT01i7nhl9p073qNGSEohnNQAwmvHUwgY6pgGIrYil0pv6%2FubRRKF7dhSMfWA0Y2js5f2FNDgJ9VY3zsEVzvw1kMZHNP0AbL5ZjSCj0sNjarinOoctoqJhpxtp4JudEFJiawP6YDLoihCi9QvrYUsI9cUXvjzpzpOpJHzL4qpfYhehxHecVH2zxG3ofNeX70H5AexoISwDcuXlbn9AJPVR378oxr6%2FIYYZzsh%2BkGjP8o9VAcJ%2BN1uFh7rXFyejMNcS&X-Amz-Signature=d47358f695dc6f5236d8afe3850ac92139b4a01b4f71a354cf8ed476e6fd3c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
