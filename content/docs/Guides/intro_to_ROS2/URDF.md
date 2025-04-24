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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRAKOH6Q%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGjJ%2FwIAYxwQmhV6OXm5Hx%2BpzIL4WStnFGnbubo8zat%2BAiAh6rklnzTxN6C62GsFGOMFXXT0Q6%2BR6TI6nrIugvaDpCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMs%2BoI5T6E%2Fq0oLo8SKtwDHvGirbIuP62IASXlZ1c0M%2FHoujCfG3nauaWvfwqcCK%2BVN4ife5kTjsPPELOkrYaAQo7UpP0XiPB1NarBjTvNXPSJgd3%2FCbHyuCvWeJ%2BgDWK%2BaOHiXj4ChTwJ0zx7eD2eTTH%2BHbGizFb0o5DCvF6GmB4betCuRmgX3alFbfzm7uZJ5NAltSWwKvX9tEPSRYiQp0yd%2F7oKd%2Bb3rRo5vZgJTeED36Fz1iIYjA9dlv8tw6HCpRnhlibvwL1Hvocdz%2B7Di9u4tZOoOQLPLrF6rGMREw2HFBwR0gwRUGwD9YW9tBHGp1zuC%2Bz%2FrKj9jxDOuZlRyh0KJjDmlqIwVd0Zouk2NuY9NQr74l7BVSopoPqaUn995WmsTuKpOl0Bplaw%2FxnD%2FczIcbDkreivSb%2Fl84F7fPjf%2FPmzLIwswjObA7bZoirM3OEYMimSryftOodeJB38XmWcuWz5dQK57U0WqEPp0qAygOMLc1i9ez%2F%2FPME7d3hZdaHL5LqfUIkZU4AHDIWZgonPUUYfdTquuZ5tz3%2B9nOPddh7%2BnoZif%2B5dBfaU6DwiqnNtL63o%2FMIiwVzkF6vK45qHLS%2F1t%2BfgRJ0mIXGpJujKN4zQVugHiHSwNohnf9kQ75duy5Vtaxrk9Agw6s%2BnwAY6pgHdJUs6AiE%2BKoki27R1O3kzZuCCMJY2Eg7dxVGLX0eEprvgKKVK%2FZgKBPo%2Fdi06ZpBsx4tpOtgA2VH3FkS2S9ZJ0IuckLfq%2Bfgwpu45npzH17lOhFwUU7R%2F7s4FMRWZ4vREXbQ5T8SGnMYBW9fHtMymobvqBHygjh6%2FlEY7uzITxTNJnVAJvV9m2yvwxPi3MmNVsO9NoDLJlehUq%2BEyEL5uyKnC1Xim&X-Amz-Signature=400dd86e96207778d3eb95c1bc9d32291bc6d96ff50050ad60d49c92d3466710&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRAKOH6Q%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGjJ%2FwIAYxwQmhV6OXm5Hx%2BpzIL4WStnFGnbubo8zat%2BAiAh6rklnzTxN6C62GsFGOMFXXT0Q6%2BR6TI6nrIugvaDpCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMs%2BoI5T6E%2Fq0oLo8SKtwDHvGirbIuP62IASXlZ1c0M%2FHoujCfG3nauaWvfwqcCK%2BVN4ife5kTjsPPELOkrYaAQo7UpP0XiPB1NarBjTvNXPSJgd3%2FCbHyuCvWeJ%2BgDWK%2BaOHiXj4ChTwJ0zx7eD2eTTH%2BHbGizFb0o5DCvF6GmB4betCuRmgX3alFbfzm7uZJ5NAltSWwKvX9tEPSRYiQp0yd%2F7oKd%2Bb3rRo5vZgJTeED36Fz1iIYjA9dlv8tw6HCpRnhlibvwL1Hvocdz%2B7Di9u4tZOoOQLPLrF6rGMREw2HFBwR0gwRUGwD9YW9tBHGp1zuC%2Bz%2FrKj9jxDOuZlRyh0KJjDmlqIwVd0Zouk2NuY9NQr74l7BVSopoPqaUn995WmsTuKpOl0Bplaw%2FxnD%2FczIcbDkreivSb%2Fl84F7fPjf%2FPmzLIwswjObA7bZoirM3OEYMimSryftOodeJB38XmWcuWz5dQK57U0WqEPp0qAygOMLc1i9ez%2F%2FPME7d3hZdaHL5LqfUIkZU4AHDIWZgonPUUYfdTquuZ5tz3%2B9nOPddh7%2BnoZif%2B5dBfaU6DwiqnNtL63o%2FMIiwVzkF6vK45qHLS%2F1t%2BfgRJ0mIXGpJujKN4zQVugHiHSwNohnf9kQ75duy5Vtaxrk9Agw6s%2BnwAY6pgHdJUs6AiE%2BKoki27R1O3kzZuCCMJY2Eg7dxVGLX0eEprvgKKVK%2FZgKBPo%2Fdi06ZpBsx4tpOtgA2VH3FkS2S9ZJ0IuckLfq%2Bfgwpu45npzH17lOhFwUU7R%2F7s4FMRWZ4vREXbQ5T8SGnMYBW9fHtMymobvqBHygjh6%2FlEY7uzITxTNJnVAJvV9m2yvwxPi3MmNVsO9NoDLJlehUq%2BEyEL5uyKnC1Xim&X-Amz-Signature=c10d392e768d57541f4b6d164bea6601a23990fca31eb598b7cbd0faa04456b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
