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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6TMLGPO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8CGMFbg9UfC8CzDbZ3KjBPA53DXlscUSVmr1M%2BqKgFAiEA7%2Bj3Lbya9nzHLeeZYgqW9wzwIaOs4h4ieVjO8D%2B7Wk8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzYZa8sHHYaJHv1iCrcAzJafyfNaaPRCAeMrcxEHLtVExaLogeUu%2Bn1O3VQF95HIq3BXeobCEQUNjan4rTfkiBrt1J1u9HPcZ4lo8fMrFk0z5OvGAnIpglghDu2logL%2FWKNiDbYBtgkhzihRuR62icrLO2BEJO49WhD1LMbqaepB2MEtn8v46xpSU8yWR74tyFukKpIgzYOjpfu9RD1NVaMNZOlsF1QnnjzsuZJjBGq8dNBgLtXZo11xDcMiqrrZTosGRZ6%2Fab2fDkqjYaJyGRBLDz69NI%2F3oV6dGYbPOpCwTpn6s8XZcD1Ezk%2BiOcwsEZ5Tz4DpGz3psf4HA4USmOJRIGHLO%2FWPGsUb0TDr0CNm3FHAry1O%2ByyH%2Bbeg9nV%2BCYxxocdweDjE9XICPoXVO0Dib8T5QIVWy8OZIisiq8V3vOZ%2BhT1a4AP3kF%2B66jHk23Tp62rUfTGgrFqercxxKuH0XTpxnWA%2FxqJsscAeEmdCy3ngsHJ4CpoaF5FjmDG670GIWRVfA%2FxbsJZ%2BZhse0%2Blde3g7lUiFWLtctbCzdbgdqDh1wJybyfYr5vvQAwJZGesAEy2qQMEsFUXeNUrPLRbov%2FWlKokP2SYqcOZHooYWrsESLyuZzDsax2KHBWuaQyIUcfsjsZqx%2FU9MJX958EGOqUBraQsz91VKJkWQp%2FsnDpTa3wIGaZiNWagjs15jZamnDXc5GMG5xXG2GA9EaPjL8n2G7GJbr%2BAN4tDK4FvOrFnB83An56Nec43hwSWjpL%2FVXmO7jw3BXUe15odNkclsH7HM9ehNGyWdnKw1ippk4W46CHS7D6JTxsvPsktm%2B%2BxAJ2mEIUK1bQ7O2x0Idrx7Hix%2F1Yu4cQvrSQeL2VmLj5r8Macx4SF&X-Amz-Signature=6a882bd00a535b1a323e6531147b9d5f3cdb025e9dfbcadb0fbc017cfd518dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6TMLGPO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8CGMFbg9UfC8CzDbZ3KjBPA53DXlscUSVmr1M%2BqKgFAiEA7%2Bj3Lbya9nzHLeeZYgqW9wzwIaOs4h4ieVjO8D%2B7Wk8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzYZa8sHHYaJHv1iCrcAzJafyfNaaPRCAeMrcxEHLtVExaLogeUu%2Bn1O3VQF95HIq3BXeobCEQUNjan4rTfkiBrt1J1u9HPcZ4lo8fMrFk0z5OvGAnIpglghDu2logL%2FWKNiDbYBtgkhzihRuR62icrLO2BEJO49WhD1LMbqaepB2MEtn8v46xpSU8yWR74tyFukKpIgzYOjpfu9RD1NVaMNZOlsF1QnnjzsuZJjBGq8dNBgLtXZo11xDcMiqrrZTosGRZ6%2Fab2fDkqjYaJyGRBLDz69NI%2F3oV6dGYbPOpCwTpn6s8XZcD1Ezk%2BiOcwsEZ5Tz4DpGz3psf4HA4USmOJRIGHLO%2FWPGsUb0TDr0CNm3FHAry1O%2ByyH%2Bbeg9nV%2BCYxxocdweDjE9XICPoXVO0Dib8T5QIVWy8OZIisiq8V3vOZ%2BhT1a4AP3kF%2B66jHk23Tp62rUfTGgrFqercxxKuH0XTpxnWA%2FxqJsscAeEmdCy3ngsHJ4CpoaF5FjmDG670GIWRVfA%2FxbsJZ%2BZhse0%2Blde3g7lUiFWLtctbCzdbgdqDh1wJybyfYr5vvQAwJZGesAEy2qQMEsFUXeNUrPLRbov%2FWlKokP2SYqcOZHooYWrsESLyuZzDsax2KHBWuaQyIUcfsjsZqx%2FU9MJX958EGOqUBraQsz91VKJkWQp%2FsnDpTa3wIGaZiNWagjs15jZamnDXc5GMG5xXG2GA9EaPjL8n2G7GJbr%2BAN4tDK4FvOrFnB83An56Nec43hwSWjpL%2FVXmO7jw3BXUe15odNkclsH7HM9ehNGyWdnKw1ippk4W46CHS7D6JTxsvPsktm%2B%2BxAJ2mEIUK1bQ7O2x0Idrx7Hix%2F1Yu4cQvrSQeL2VmLj5r8Macx4SF&X-Amz-Signature=90749f8a30d58ee8f4409cba34c5deb0cf98b61069dc53f5389dba5df7dc376f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
