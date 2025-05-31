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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYX4WQV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOt0BPPv%2FzeMFPWi2QFCfRcexeGyyvHBUF5LZ0dqzMcgIgNxlvpoOe8C2kqy%2FZLIRqydzl9MT7Dj3sKFITGI82VKwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2%2FBRfS9bmZEXyLBircA2k100n%2Fb9C8zlEqOyHE79%2Fyxib%2BPAhtOfgs19VtmW4u2dHhTDovmU7rkY%2F9UQhmDjea5n34i2Nj5v7KfdMibZ8PC58ERlCn3kmJs5LZYa6%2F8HOeTH5mkEKEWYo7ZP62%2Bofg6my4fuLX0avmM4hVQJ8DmqX8RoXNXEbOVU0rP7fovvdfHopWD5417AhDDSWkrbc8snp8c%2BF4yp56kaAWcFpQLNLieZUuED0CSJtcAbS%2Fh5LKU08EnUgL8F6Z3uT7HIVOh%2BVKePqjjB%2FEnBsVfq781hMWyTPwYDX4SaDSrdmNKmmVQzI%2BwjP1eF68s7X3JLCk12NVm3KdFuy6%2BSw1VT6lph1QVwcRfMJVpJXnifCtYAqvyqVa6nWSJKwOg816H4lKr7QOykhjKxiMl73vyqmbDhtTCKqCR1N78aDA3a4%2FS5zECZADwYx4TX2wjRseGlz%2Fnoy62E3Sr44pahjZ7QSJFkFhDbXyOknNmQa2ElxlWqs49WVwroxfLpMjr9UCeqmBeE7f8jUZk3AKQybtUEA4ekJvLVd2lfmnEVqQLMk3QkQtKjL7HTk0rLmofHyCqi60XDkuxBoJ1Nhl7%2BA1VcDl%2BfPZ2eG2FoZj3PgFrBjUq9wTjRDEH2oSiHLQMJy96cEGOqUB3wGP7Ff2Iv0dGjinmjtv1TbpgjdJHe%2BW5kzxrWJLcjUXlIITXRNTA1DInPfzpjH7p6s5xzwRMz0Bu57tGCGSUngBoox2wUStOfYiUdWtczSXI%2BNG9byYZFZJa7nZkLukxTYA%2FrDMlL0Cemia5Ya9FubrxrlW0ncKVd7oUFe%2Ffw6NPY%2FhyM07Vb8lbq2hlvW%2F8Pq3kP0YQ%2Fyd070IkZEdCGl6SV%2FA&X-Amz-Signature=be89bfde3c58d04e04d7d37c7b6df0efc4166fb91b4269f1d0c46708ea6be375&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYX4WQV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOt0BPPv%2FzeMFPWi2QFCfRcexeGyyvHBUF5LZ0dqzMcgIgNxlvpoOe8C2kqy%2FZLIRqydzl9MT7Dj3sKFITGI82VKwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2%2FBRfS9bmZEXyLBircA2k100n%2Fb9C8zlEqOyHE79%2Fyxib%2BPAhtOfgs19VtmW4u2dHhTDovmU7rkY%2F9UQhmDjea5n34i2Nj5v7KfdMibZ8PC58ERlCn3kmJs5LZYa6%2F8HOeTH5mkEKEWYo7ZP62%2Bofg6my4fuLX0avmM4hVQJ8DmqX8RoXNXEbOVU0rP7fovvdfHopWD5417AhDDSWkrbc8snp8c%2BF4yp56kaAWcFpQLNLieZUuED0CSJtcAbS%2Fh5LKU08EnUgL8F6Z3uT7HIVOh%2BVKePqjjB%2FEnBsVfq781hMWyTPwYDX4SaDSrdmNKmmVQzI%2BwjP1eF68s7X3JLCk12NVm3KdFuy6%2BSw1VT6lph1QVwcRfMJVpJXnifCtYAqvyqVa6nWSJKwOg816H4lKr7QOykhjKxiMl73vyqmbDhtTCKqCR1N78aDA3a4%2FS5zECZADwYx4TX2wjRseGlz%2Fnoy62E3Sr44pahjZ7QSJFkFhDbXyOknNmQa2ElxlWqs49WVwroxfLpMjr9UCeqmBeE7f8jUZk3AKQybtUEA4ekJvLVd2lfmnEVqQLMk3QkQtKjL7HTk0rLmofHyCqi60XDkuxBoJ1Nhl7%2BA1VcDl%2BfPZ2eG2FoZj3PgFrBjUq9wTjRDEH2oSiHLQMJy96cEGOqUB3wGP7Ff2Iv0dGjinmjtv1TbpgjdJHe%2BW5kzxrWJLcjUXlIITXRNTA1DInPfzpjH7p6s5xzwRMz0Bu57tGCGSUngBoox2wUStOfYiUdWtczSXI%2BNG9byYZFZJa7nZkLukxTYA%2FrDMlL0Cemia5Ya9FubrxrlW0ncKVd7oUFe%2Ffw6NPY%2FhyM07Vb8lbq2hlvW%2F8Pq3kP0YQ%2Fyd070IkZEdCGl6SV%2FA&X-Amz-Signature=1127234c37b94d28f9a355be44ccefba04809f99ec47f24e1cf25998d60aab6e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
