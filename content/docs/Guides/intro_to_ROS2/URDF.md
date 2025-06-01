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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S64ZYZEP%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5%2BjSgkZfWLBopSbMAk%2FkpVAmL3L%2ByW2Mwv64FO7mDnwIhAMq5AC%2F%2F10oB1FCwiS7kvz%2F1cOrsaQm6GivQH8Nq2J9qKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiKSQox%2F4F7DcQW7Iq3AM8i3ap9oWvYeujRPYbqKqMjBUwuTe%2FFvGr8YkCaagvjjt3rY9%2BZlOMKEQGBXNjyx99J3tvKSyTa21cu0HTiPQ%2FCNhDfrU%2FaWrqloBI2BYe7Ig9EFLw5UiDT0Lo4M8tXPdeqC4VxQRni5rAXFFl64p6HMHK%2B0CiwxKhA8L37ZJR7%2FiOHmkrVDCcGoYgxteNy69aCz5HRWucRTOfUjTTOvB9NiBhMVw6lbQvEX2usoI%2BNkQFRytYx1ErNKAK2LrUDiNiFYJT6RlZaSTtsx%2BqxeGhN%2F28vO0Wc2mXeAmKWQsORurM4nl%2FScnmgOq1xbG6XATMIepXZQxOmHADa5OLs2y4A3ORb4j11paLsc8CytTr6scLq6NflQwAblxovBq%2BbjdPEqOxyOZ2SrhO8P3Ux89Tu9qOfF5cOlIgqv9RAUxVsco67IaE14zeVKlkqFUNhaeLWTbJyDsj6AfvkwafTIfclfLceWNqOGQqqtFxCHFedGKTJTFWO9mZbfD0rfBewyUk2ff5k4pwL2MgGyG7xqgFLGdVHzjMpwu76q%2FqjSirjbU6Yyv%2F0KSB4SbCql%2FhgbaVCwkGLtQxSfOjznEdWUiSF4z9cpsHJhn00RDE%2FtAutjYI9t8HSOlRi%2F9JOzDT5u3BBjqkARZVC0hhE2WHhjS0WcrXUZkKeDyqyZOpXjfWMrenVOoYCdddyzcgZMLmtUwELsR8XyuWqnVfD1whgdw5KwbeqfLSu%2BKTmMJTB9DXLVT34dmOYQ9ru5pEnE%2BnDJ8cGuY2ab%2BuNIUsrDdtsGgVpOAK6YMuK0DxojwOcMzTN2OwSJDJzz1zZi3o6uQiJ%2F0qC%2F%2BLc5K229JhcFWhReY52mwfjEDpU44Q&X-Amz-Signature=2182f52081e1d83b3a9f06980e797b15a6ec519c0c450b146fc707dfd9608807&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S64ZYZEP%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5%2BjSgkZfWLBopSbMAk%2FkpVAmL3L%2ByW2Mwv64FO7mDnwIhAMq5AC%2F%2F10oB1FCwiS7kvz%2F1cOrsaQm6GivQH8Nq2J9qKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiKSQox%2F4F7DcQW7Iq3AM8i3ap9oWvYeujRPYbqKqMjBUwuTe%2FFvGr8YkCaagvjjt3rY9%2BZlOMKEQGBXNjyx99J3tvKSyTa21cu0HTiPQ%2FCNhDfrU%2FaWrqloBI2BYe7Ig9EFLw5UiDT0Lo4M8tXPdeqC4VxQRni5rAXFFl64p6HMHK%2B0CiwxKhA8L37ZJR7%2FiOHmkrVDCcGoYgxteNy69aCz5HRWucRTOfUjTTOvB9NiBhMVw6lbQvEX2usoI%2BNkQFRytYx1ErNKAK2LrUDiNiFYJT6RlZaSTtsx%2BqxeGhN%2F28vO0Wc2mXeAmKWQsORurM4nl%2FScnmgOq1xbG6XATMIepXZQxOmHADa5OLs2y4A3ORb4j11paLsc8CytTr6scLq6NflQwAblxovBq%2BbjdPEqOxyOZ2SrhO8P3Ux89Tu9qOfF5cOlIgqv9RAUxVsco67IaE14zeVKlkqFUNhaeLWTbJyDsj6AfvkwafTIfclfLceWNqOGQqqtFxCHFedGKTJTFWO9mZbfD0rfBewyUk2ff5k4pwL2MgGyG7xqgFLGdVHzjMpwu76q%2FqjSirjbU6Yyv%2F0KSB4SbCql%2FhgbaVCwkGLtQxSfOjznEdWUiSF4z9cpsHJhn00RDE%2FtAutjYI9t8HSOlRi%2F9JOzDT5u3BBjqkARZVC0hhE2WHhjS0WcrXUZkKeDyqyZOpXjfWMrenVOoYCdddyzcgZMLmtUwELsR8XyuWqnVfD1whgdw5KwbeqfLSu%2BKTmMJTB9DXLVT34dmOYQ9ru5pEnE%2BnDJ8cGuY2ab%2BuNIUsrDdtsGgVpOAK6YMuK0DxojwOcMzTN2OwSJDJzz1zZi3o6uQiJ%2F0qC%2F%2BLc5K229JhcFWhReY52mwfjEDpU44Q&X-Amz-Signature=5dcdae7ee24eb13c886aa2d5a905d7ad0fec962842c856a52fe02c126519372b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
