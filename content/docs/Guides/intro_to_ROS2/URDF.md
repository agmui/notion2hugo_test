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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZNCFEES%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCIpuzci843cRkmO7SaqVM552UgAcYdKiv495kAPsc9MgIgJa5fY3Gz632o99BFa8f%2BAKy5Xt1Fo38NR2obYpvWhy0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNqNr%2B9wS2EaZ%2BH%2BmSrcA2%2FBYl55D4zP1Y2p2Tlh9iNsf%2BHOyY9Q3JqwoJyEaktlYHvKWsGiLWK51ReVz9I0X4%2Bp%2BY%2F2Iy9uuaLpOAgFd%2BIsSFECxx0fToTf8xG6t51ygiOkvoMbz17bueu35hzDtpkhwW1lqi8Df7uyrZ6zUoJ2mv5XO9oAfh0bM8hMvC%2BwcjioYeBSRwi7u56LzGbv14GIsbB43uAUcp46LjjKHRs2pN5TKhvv2PDDjV3Jh5xL%2FrMz%2FHWTIlRHZTcEC7FsBsJqGjjAIkeeY%2BPM1GjwjsnSn6LCfkX9x4Xmj6FY931ke3vCAfS9SwUteS1ou1PNbJOjfgL8HOCF9NcTv8DUH09u8Aw1s0moTlLfc4ZSRLQP%2Bd9KEUd3myPzYKsLX2GTvLCV68p5Nmfmv2VP2%2Fit9SyPUoxenGq6U%2BxJ82%2FeXKKQA1cTDyYnVtsggp16Vdphq0smWP47xV5R1nunjy6hDSH%2BUs0Vu8DLjP4Hp1Okf0FVI11ES8zgMcvZRviaaGxs9Zgd1TNXa7CaIDJgwcMFY6H33mKpjevPSpmPRISU1zP94le3%2Fop%2BH%2FP4AxBnEU6%2Fa%2BD%2Bfc430R4Z6oAIZmqpEW2arfldFk3sQBLc3cGg1hI3IfH96vir2O7WLGm7MLSLn78GOqUBxHYZIIiDZU0RMJQsea7B3KGySx5E5yf5NMuWEi%2BDlcu7YKFuSJgI%2Beswdx8VxxyPkeSzgx4sQkomnBC6WS6xyFP4kLI%2F%2Fm3zxdUQrNR%2B29VJRjICm7lOoSYZmFHnk%2B3hRuU7CQG5BY%2B%2FXcqwM7dfnaOqBrmnR5U8X3SDL3Y%2FrmL1nv048AFbep9kiNPY9GDi%2BonO3ohv4WH7cqeiYVSh47Xm1kLC&X-Amz-Signature=36dcc6c870b1f866a636bcf3a81871ac1f1a23d9c8716ab4d01f8edeb28d95ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZNCFEES%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCIpuzci843cRkmO7SaqVM552UgAcYdKiv495kAPsc9MgIgJa5fY3Gz632o99BFa8f%2BAKy5Xt1Fo38NR2obYpvWhy0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNqNr%2B9wS2EaZ%2BH%2BmSrcA2%2FBYl55D4zP1Y2p2Tlh9iNsf%2BHOyY9Q3JqwoJyEaktlYHvKWsGiLWK51ReVz9I0X4%2Bp%2BY%2F2Iy9uuaLpOAgFd%2BIsSFECxx0fToTf8xG6t51ygiOkvoMbz17bueu35hzDtpkhwW1lqi8Df7uyrZ6zUoJ2mv5XO9oAfh0bM8hMvC%2BwcjioYeBSRwi7u56LzGbv14GIsbB43uAUcp46LjjKHRs2pN5TKhvv2PDDjV3Jh5xL%2FrMz%2FHWTIlRHZTcEC7FsBsJqGjjAIkeeY%2BPM1GjwjsnSn6LCfkX9x4Xmj6FY931ke3vCAfS9SwUteS1ou1PNbJOjfgL8HOCF9NcTv8DUH09u8Aw1s0moTlLfc4ZSRLQP%2Bd9KEUd3myPzYKsLX2GTvLCV68p5Nmfmv2VP2%2Fit9SyPUoxenGq6U%2BxJ82%2FeXKKQA1cTDyYnVtsggp16Vdphq0smWP47xV5R1nunjy6hDSH%2BUs0Vu8DLjP4Hp1Okf0FVI11ES8zgMcvZRviaaGxs9Zgd1TNXa7CaIDJgwcMFY6H33mKpjevPSpmPRISU1zP94le3%2Fop%2BH%2FP4AxBnEU6%2Fa%2BD%2Bfc430R4Z6oAIZmqpEW2arfldFk3sQBLc3cGg1hI3IfH96vir2O7WLGm7MLSLn78GOqUBxHYZIIiDZU0RMJQsea7B3KGySx5E5yf5NMuWEi%2BDlcu7YKFuSJgI%2Beswdx8VxxyPkeSzgx4sQkomnBC6WS6xyFP4kLI%2F%2Fm3zxdUQrNR%2B29VJRjICm7lOoSYZmFHnk%2B3hRuU7CQG5BY%2B%2FXcqwM7dfnaOqBrmnR5U8X3SDL3Y%2FrmL1nv048AFbep9kiNPY9GDi%2BonO3ohv4WH7cqeiYVSh47Xm1kLC&X-Amz-Signature=578e85ff778e5868de89f03993d20287c97642eedfd47059f1351e46951803b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
