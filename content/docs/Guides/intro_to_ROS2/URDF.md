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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AFCLZMV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICtOsFkRJTSdTOZHfCihNAuy8l5KqpHyjDm1rjggc0TgAiEAuYTN1fjTvGZKXBB5r%2BVfnq7cmk5q3m6mOdgNFy90XAsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEY0yHQQZ3ZorexejSrcA%2FVYjGcoZX%2B3e1HXEPncox78xI6QQiXhJTNQHvDOGKnrWFZHQUqEhFLv3GC91SyLSTnNqpAU43dgQk5fGLj3Uf%2FxaU38Lj8ZmpErzzJCt05exOfQwoTc35CUTc5tPNgjbjqiqFljH1rtZBeGN6MZEkt6VnREUzvIq1a1Mjte2Vuo7o%2FETmiAOFItuGwlZctfxEDvFNF1v0xo%2FU%2B2LXuEdSDXVWwXw75F9E5ez0YaJ2SlFlTJ5dwSp2%2BN%2BiG4R%2FyWJiUFRXufA%2B%2FY2UIsqSa%2F8ZNhGTnxYYdebfOkSDoFToyTKyynrDrtSVhnTf%2FwqJnwez4WYa3%2FzHE3%2F2kioQ%2BweB6uHznFOuP0R5ol9QIa%2BQF6AeelVo5j7Dgh1z00Xs%2BM4qS7%2FaXQqcS%2F7zyOufx%2BVVtdikunFoYcgG3x2YD5ti1k%2BaUi%2BPBUJukw8qDST4fxfJ19HT%2Fnmua621jOCKOBgKaHCDlPIfJnW7ULeE9YdACsAH0a6XHCL4hgWluA1h%2Bl2BJ7vHfqPPVahilFf0nGY7885cx8G00oM8m5YNpweg3arsUCOW6wri8pwbxihyksEyLqukKYqYLa9ya0QYeAhzlpyLu9n8Yq49ACKDynddf4Y1MTd8mjdf2UItCLMO%2FFu8EGOqUBK6SA8p%2Be1KVrrTMDrGVv%2BLPQKPwUjSx1IloX12fpe2ykPI1hBKu%2Fxq0fHu0r6lQqyEMhcBy3jpkvC8VX0422T17fTY8G6uJRTaxasUxt1vx4Yv5V1Zhd4tYbnljxlNDrPfpvnJTOK%2BAuG3nmDE2Xc8yRR8xMRX9%2B%2BHIXkS3C9mzwb6Ru%2BlYQD3Lldk1jgODNRShwOCCvbi1OyUucqXV4XTD1kYhn&X-Amz-Signature=8b4b5dfdb81d06f9710b9977235e3607550f02e3524ae7ff4020223da53d3057&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AFCLZMV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICtOsFkRJTSdTOZHfCihNAuy8l5KqpHyjDm1rjggc0TgAiEAuYTN1fjTvGZKXBB5r%2BVfnq7cmk5q3m6mOdgNFy90XAsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEY0yHQQZ3ZorexejSrcA%2FVYjGcoZX%2B3e1HXEPncox78xI6QQiXhJTNQHvDOGKnrWFZHQUqEhFLv3GC91SyLSTnNqpAU43dgQk5fGLj3Uf%2FxaU38Lj8ZmpErzzJCt05exOfQwoTc35CUTc5tPNgjbjqiqFljH1rtZBeGN6MZEkt6VnREUzvIq1a1Mjte2Vuo7o%2FETmiAOFItuGwlZctfxEDvFNF1v0xo%2FU%2B2LXuEdSDXVWwXw75F9E5ez0YaJ2SlFlTJ5dwSp2%2BN%2BiG4R%2FyWJiUFRXufA%2B%2FY2UIsqSa%2F8ZNhGTnxYYdebfOkSDoFToyTKyynrDrtSVhnTf%2FwqJnwez4WYa3%2FzHE3%2F2kioQ%2BweB6uHznFOuP0R5ol9QIa%2BQF6AeelVo5j7Dgh1z00Xs%2BM4qS7%2FaXQqcS%2F7zyOufx%2BVVtdikunFoYcgG3x2YD5ti1k%2BaUi%2BPBUJukw8qDST4fxfJ19HT%2Fnmua621jOCKOBgKaHCDlPIfJnW7ULeE9YdACsAH0a6XHCL4hgWluA1h%2Bl2BJ7vHfqPPVahilFf0nGY7885cx8G00oM8m5YNpweg3arsUCOW6wri8pwbxihyksEyLqukKYqYLa9ya0QYeAhzlpyLu9n8Yq49ACKDynddf4Y1MTd8mjdf2UItCLMO%2FFu8EGOqUBK6SA8p%2Be1KVrrTMDrGVv%2BLPQKPwUjSx1IloX12fpe2ykPI1hBKu%2Fxq0fHu0r6lQqyEMhcBy3jpkvC8VX0422T17fTY8G6uJRTaxasUxt1vx4Yv5V1Zhd4tYbnljxlNDrPfpvnJTOK%2BAuG3nmDE2Xc8yRR8xMRX9%2B%2BHIXkS3C9mzwb6Ru%2BlYQD3Lldk1jgODNRShwOCCvbi1OyUucqXV4XTD1kYhn&X-Amz-Signature=5e29e0febde0c0262daa05c3f241a5eeec0adc264f784b12938ca05d15704052&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
