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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW6SFLGY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYwiJBL3a3FEEurV8LlHvyOc9mv6CUZr5UYIqUsra1BAiBian4yeU0m6KxFxIvtLo6%2F1RQaR4dzOe3GeIUl4CkrjCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMFSrIjVsv6QReqtH4KtwDWR9EWvyG52oGsB%2BfIIHQuWF%2FckfEIhacJOuzCAfI1gJVH234CAxCyV7EvFTeLthodKXAITDvk4%2BzNuMt4Sc1VgCjOlxGVT9NQzOUVuEqhXPzAEdDqNON01gfhH0hebcdSSU%2FQ2XCnMLJseFXqQPX%2BnxhoZSsnlL7OlCCXpCxbXHcnXMsAZoef%2BswOd%2F%2B0sm0DA33Hucx71aPRKaW0Xn0JiXmBmJzsfFTnrW9%2FCoVJnkA8hbNTN7YaUYyafjan7RRRV4sdMBCF9Bqxv3mcD4C%2BdYkXdAagdZAKg%2BIgS80mwK8hV1GZ3DLBV6CDT%2BZkxFwPOOoPLPozmbk6kpffFJWYx%2Fg0JANKzYafPCxc19mOO9Bl2eJ4%2BqKqZuftxqS%2F8ZHVIXBI3NZIE3RTIjEC%2F8gu5EGW%2B2JstBOEaouHhl77CjzhkDdaOlKwBBEufFss893QCzsSrrouD3c%2BEZZ2kKXhz5YP%2FICUh76FLztbu81CGJuA8%2FoMHJEDgzyojFCPk2lhZgpPCLReYxaaCTaJQoMVN7z95nkHQSgbMHR2tdPxs2R5bfIPLOMzqmyuFuNNuISSFWaRzenjWKTaYABQ69ZOFxLBpR140x3ke6SIXlxbvjqg8m8vVgTzoTJTAkwnf%2BbwQY6pgHvKAsBlCSZSJniJOl0n6M2lEhvPEaUpWdMKJ0Sg5mvzkG8kfvdw6zHaXLidXxb7iRN%2BdPzgpBc3lA%2BrooU4ADlpLysuPHjMT2SBB59YrrQUGXM0SsxnJiDfU4mnNnFyHXGo5PyVSlC9uJA0NKcZtg6TPcaOC8hfEAQYC5Vdl5PqIUMQSy4uOvess%2F6Kj2%2BF7u%2BBiO59SdvTgK8ORm1xM2JuaRKpgd3&X-Amz-Signature=48669b3f9c6ff441d68645a83fcd51a893ac65ab43c95f75629bbbb2646d2de6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW6SFLGY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYwiJBL3a3FEEurV8LlHvyOc9mv6CUZr5UYIqUsra1BAiBian4yeU0m6KxFxIvtLo6%2F1RQaR4dzOe3GeIUl4CkrjCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMFSrIjVsv6QReqtH4KtwDWR9EWvyG52oGsB%2BfIIHQuWF%2FckfEIhacJOuzCAfI1gJVH234CAxCyV7EvFTeLthodKXAITDvk4%2BzNuMt4Sc1VgCjOlxGVT9NQzOUVuEqhXPzAEdDqNON01gfhH0hebcdSSU%2FQ2XCnMLJseFXqQPX%2BnxhoZSsnlL7OlCCXpCxbXHcnXMsAZoef%2BswOd%2F%2B0sm0DA33Hucx71aPRKaW0Xn0JiXmBmJzsfFTnrW9%2FCoVJnkA8hbNTN7YaUYyafjan7RRRV4sdMBCF9Bqxv3mcD4C%2BdYkXdAagdZAKg%2BIgS80mwK8hV1GZ3DLBV6CDT%2BZkxFwPOOoPLPozmbk6kpffFJWYx%2Fg0JANKzYafPCxc19mOO9Bl2eJ4%2BqKqZuftxqS%2F8ZHVIXBI3NZIE3RTIjEC%2F8gu5EGW%2B2JstBOEaouHhl77CjzhkDdaOlKwBBEufFss893QCzsSrrouD3c%2BEZZ2kKXhz5YP%2FICUh76FLztbu81CGJuA8%2FoMHJEDgzyojFCPk2lhZgpPCLReYxaaCTaJQoMVN7z95nkHQSgbMHR2tdPxs2R5bfIPLOMzqmyuFuNNuISSFWaRzenjWKTaYABQ69ZOFxLBpR140x3ke6SIXlxbvjqg8m8vVgTzoTJTAkwnf%2BbwQY6pgHvKAsBlCSZSJniJOl0n6M2lEhvPEaUpWdMKJ0Sg5mvzkG8kfvdw6zHaXLidXxb7iRN%2BdPzgpBc3lA%2BrooU4ADlpLysuPHjMT2SBB59YrrQUGXM0SsxnJiDfU4mnNnFyHXGo5PyVSlC9uJA0NKcZtg6TPcaOC8hfEAQYC5Vdl5PqIUMQSy4uOvess%2F6Kj2%2BF7u%2BBiO59SdvTgK8ORm1xM2JuaRKpgd3&X-Amz-Signature=ca2186fd3551662e787e86cf9d1d2bb72da641289016e9e836b208322c138ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
