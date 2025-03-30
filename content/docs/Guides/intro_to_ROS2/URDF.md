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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF3OSJUO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCID7X7jQ325et8pmu26J%2FqM0dCgNR0MJu%2F6DFQy597KFTAiEAg6lqVk8pGP0HiM3mijvFMgIKrJex9jVTWLVDWHhBaykqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDprKhYF10HFwARLlCrcAzAd7JVQB24GKxUzuqjapmjTuBULu4VXAMR%2Fv80Vu6xUHKOJtS%2F0wYRw1UylC5PGfKRhl%2Fc3XSQNuW9GdwuB6C8tlpRiMyUZxIibvhn77Sop5SfYYOEkAC2JMWMxr%2FnWu5xlFO0TZeuM1ip2DVblaONE7tMwxfIFf8GUvZGrilHCNt0fu1AdL6mURMCABbne1%2FztaTbTwVRlmiexYw0z9gE4b4hhIi4LzubMEFBcr6eRGikvM73QJBzLB0obw4LpqUlOlEIfWZ1T7oMS48CuhPcQUEGS2oPnaq1srzm%2FaCYu%2Bbygb8SU9LkWRfbRKy2vM3fqk5GtDKohSO1HcujLjtRyWSIl4Ovl8sn4HjUxcLd%2BkeNikD9SrZYYkZzmaBwNt9S0beRVTilSYc3jeRXXSInykmRGy2BNOcQFOVnNcKTlTBiF%2B0nizS9NxN%2FVybObzSmkJrQHH0jVHK8F7nH99RjvtcGajWFu%2BVi5PQ%2FOQpCOiAIKDY3UGvkQ2Vb0z1PytsMZ5WnmWn8y5X7nXIdW7Jc3tZ%2FLUmrxeDxOKixfoXMsh%2BFiJqEsyZ66CCogpDqgqIu1RqV5jWrujRq6f%2FVczpNBchuiDenpiD1i9w24NoKE%2FWZKw3l3blEjplLpMN%2FTpb8GOqUB9V0AM6WBf1%2BLK6%2FY%2F4Ku0I0SLezzi%2FgkXZFlgOp2P8FCIKx236pb5iyC7Zc%2BMF7LN46NzK35WR7wSq%2FuNw3XuGWgWqIydtBqbgWPKf4WaiujQy9OYXThUf%2FivkLMXWG%2BxVFPbProMw%2BAoHrOPkSDobabaIUSlFPrDtlcvxZokgvHfLWkWeVavS7QAyHZXcIEbYHFrQToJse%2BFNQwKqkpnoix1B9b&X-Amz-Signature=45be8812c7dc7039ea52c0c099a9b43e8cf0ebeb0d622c2182243f0f72297266&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF3OSJUO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCID7X7jQ325et8pmu26J%2FqM0dCgNR0MJu%2F6DFQy597KFTAiEAg6lqVk8pGP0HiM3mijvFMgIKrJex9jVTWLVDWHhBaykqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDprKhYF10HFwARLlCrcAzAd7JVQB24GKxUzuqjapmjTuBULu4VXAMR%2Fv80Vu6xUHKOJtS%2F0wYRw1UylC5PGfKRhl%2Fc3XSQNuW9GdwuB6C8tlpRiMyUZxIibvhn77Sop5SfYYOEkAC2JMWMxr%2FnWu5xlFO0TZeuM1ip2DVblaONE7tMwxfIFf8GUvZGrilHCNt0fu1AdL6mURMCABbne1%2FztaTbTwVRlmiexYw0z9gE4b4hhIi4LzubMEFBcr6eRGikvM73QJBzLB0obw4LpqUlOlEIfWZ1T7oMS48CuhPcQUEGS2oPnaq1srzm%2FaCYu%2Bbygb8SU9LkWRfbRKy2vM3fqk5GtDKohSO1HcujLjtRyWSIl4Ovl8sn4HjUxcLd%2BkeNikD9SrZYYkZzmaBwNt9S0beRVTilSYc3jeRXXSInykmRGy2BNOcQFOVnNcKTlTBiF%2B0nizS9NxN%2FVybObzSmkJrQHH0jVHK8F7nH99RjvtcGajWFu%2BVi5PQ%2FOQpCOiAIKDY3UGvkQ2Vb0z1PytsMZ5WnmWn8y5X7nXIdW7Jc3tZ%2FLUmrxeDxOKixfoXMsh%2BFiJqEsyZ66CCogpDqgqIu1RqV5jWrujRq6f%2FVczpNBchuiDenpiD1i9w24NoKE%2FWZKw3l3blEjplLpMN%2FTpb8GOqUB9V0AM6WBf1%2BLK6%2FY%2F4Ku0I0SLezzi%2FgkXZFlgOp2P8FCIKx236pb5iyC7Zc%2BMF7LN46NzK35WR7wSq%2FuNw3XuGWgWqIydtBqbgWPKf4WaiujQy9OYXThUf%2FivkLMXWG%2BxVFPbProMw%2BAoHrOPkSDobabaIUSlFPrDtlcvxZokgvHfLWkWeVavS7QAyHZXcIEbYHFrQToJse%2BFNQwKqkpnoix1B9b&X-Amz-Signature=8176cfe6698066135baa0951497cc06b7dd54794ec54849fc9e5ce50d2efb8ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
