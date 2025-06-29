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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RB7SZTX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAoNVof77SQrWiJkp%2BqgqZlUMmcsf%2BA1V%2Fd9vFqS8c6gIgf21rxUgJx5OYQxu7H%2B%2FcYXoLOFQCudkulvzC46rprZ4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeBkV7ThbdBsCLkEircA2kjlWdrm3B30aGz%2BVb4HvOC2RoQ4aET%2BKzo1CBcjsz83fMHLdkYsNwZELAEvxCriK1JEd3%2BclklheGyDXy3XXONdwF8Z4Z12ueoSYsYiJf5XvDqdNaQQNcVsqokT3NXw90B22u8v%2ByIZHlzAnZu6IHyfTwfnl%2BTNQk2%2FKy7Dvg9vsea9aJWPEK8oO5CRL0PjcsS1KFWTwbFYwiqV63otqW2EgGTsq5kG6JE2mg6BgYOK0YtgSZBRxFBCXXcVvVA1crhLz9KAd1hXVvVEXIgO%2FPjwyoiOLljJ8kt0BI7DyXRadIvtg0AnfyaaHcJ22u2BOrq5reZ5V5LE9fJOlAAug6fFs0Avqup8MGGZWf7Qbm1XuBv3z5%2Fl%2BnN6NufdTioFZnFqDKH4f7Tb2arm%2FZlTPqZGlO7eKCEoziCoMBzR8MqufSoGYO7ZbKYlX7266mVU8bH7vmwz%2FGtD845Mm1P%2FdFIewl0hmfw7l4gjht8GeijlcfzoKEnY0EDs8xZw9wJKjgn7ziLCA2c7bU5Fc8AIdNmeZO%2BTX3oItgmVVwSDzst%2Bf%2FwOV7%2Bv5ZwTFugKQ%2FhQz6x9SQf26Aevmph9Ik5Q4pqa57hFVQqUeynQC%2B5Ee0oaDqlVgl4J%2Fiic2caMIPRhMMGOqUBOC%2FKsQE4DKDFuYVZRw%2BJdieSLrz4Q4oEhsURkGi8PoQ2gQySbx3LJVXkB6siFyHzOn54pn2tRd9bE9HFUsuE6XwO2GzjAHLtuN4AjPoJmDGKRIRtUjblnBhzsmn7O7GIs195v6yozDFdpISIUsPvGteaAqJqhOAYHTpmq81ypDW1bIfd8FUWBln8%2Fx1blPaPz4dW%2BHjVKdoe4DofHFyR0ocbas0g&X-Amz-Signature=53c9b5d9b40664e70fdceffa8e14bc9efdb98726658fcb384de2c6564233af84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RB7SZTX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAoNVof77SQrWiJkp%2BqgqZlUMmcsf%2BA1V%2Fd9vFqS8c6gIgf21rxUgJx5OYQxu7H%2B%2FcYXoLOFQCudkulvzC46rprZ4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeBkV7ThbdBsCLkEircA2kjlWdrm3B30aGz%2BVb4HvOC2RoQ4aET%2BKzo1CBcjsz83fMHLdkYsNwZELAEvxCriK1JEd3%2BclklheGyDXy3XXONdwF8Z4Z12ueoSYsYiJf5XvDqdNaQQNcVsqokT3NXw90B22u8v%2ByIZHlzAnZu6IHyfTwfnl%2BTNQk2%2FKy7Dvg9vsea9aJWPEK8oO5CRL0PjcsS1KFWTwbFYwiqV63otqW2EgGTsq5kG6JE2mg6BgYOK0YtgSZBRxFBCXXcVvVA1crhLz9KAd1hXVvVEXIgO%2FPjwyoiOLljJ8kt0BI7DyXRadIvtg0AnfyaaHcJ22u2BOrq5reZ5V5LE9fJOlAAug6fFs0Avqup8MGGZWf7Qbm1XuBv3z5%2Fl%2BnN6NufdTioFZnFqDKH4f7Tb2arm%2FZlTPqZGlO7eKCEoziCoMBzR8MqufSoGYO7ZbKYlX7266mVU8bH7vmwz%2FGtD845Mm1P%2FdFIewl0hmfw7l4gjht8GeijlcfzoKEnY0EDs8xZw9wJKjgn7ziLCA2c7bU5Fc8AIdNmeZO%2BTX3oItgmVVwSDzst%2Bf%2FwOV7%2Bv5ZwTFugKQ%2FhQz6x9SQf26Aevmph9Ik5Q4pqa57hFVQqUeynQC%2B5Ee0oaDqlVgl4J%2Fiic2caMIPRhMMGOqUBOC%2FKsQE4DKDFuYVZRw%2BJdieSLrz4Q4oEhsURkGi8PoQ2gQySbx3LJVXkB6siFyHzOn54pn2tRd9bE9HFUsuE6XwO2GzjAHLtuN4AjPoJmDGKRIRtUjblnBhzsmn7O7GIs195v6yozDFdpISIUsPvGteaAqJqhOAYHTpmq81ypDW1bIfd8FUWBln8%2Fx1blPaPz4dW%2BHjVKdoe4DofHFyR0ocbas0g&X-Amz-Signature=88938cf8f2ca2e6db84c4cb8c6bfe40d5ffd3117db8746cd930f1d63fa1f18d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
