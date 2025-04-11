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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673GBLYTC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIGVs5nMBHSGn2c6ZOZBohAIFO9OaPl5unfcaz1bopwJ1AiEA8MYK0Kh%2F9RLUnDdhmRl0ERTIcnYbUPPdV2moYldiSuIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOexE1b%2FXD1zrEAUSrcA2DzPToOvChblC7%2BKSEzSZtLuiDPO%2Bihd4MfN9aNtMXj1WLq1aUBxh8abX8YQ%2FRLg7STi2nB1jumcaVQUcFjfzFR3xxvLAE4wSAXVosHyyceWB3gBZxbVlQuMogFSuzuhNCW1x0iva4bSZqmwiWssPSOiKFmtNqMJ7U7umxxLn4SV8AevzH5ouKt9lz%2BHSaZ9F6GMq6j2bmFEnjNAOusO16Sg5jcwfj%2BsRKvjLsBbOKTQhOAc7AxeAFcB9UpoTnGFM%2BX%2FESAWKuAQ%2F7nCpk87%2F1Y%2B7RQn8J7AFVj1W2Hz%2FoPplI%2BtwIR2B6nqWOchSTtH3jHBZNu6xyGsfJ4nyQ0HeZz5mZ8sSuU9zbRUGpUyiEmr3nUxiF2S%2FgGRGhAcEL4ofcXFxcrAnz7g4KduMivCCV0NK9VgnthY5FGXn96SphKshv2ZfdQWD0xaMVj8TaWp8WZcBHosYfQFGp9r5auw%2B3lCG8eBgo1VoC3UNSTzeZ0ZZ0Y3FjppO3a540%2BKOenLsssM8Tr0ZpVX1Q%2FRu59EWzr1lTD%2B6mIPtaEgptNhCcen3JO8u%2F0eVgScVAVe3oSEB9etETf7AsKE1mAyzK11olFMhVUbe%2FEBiUB6jFSV0Zn%2FnAtzNnhPeX7zsQuMIKY478GOqUBgYNVsq3Ro2AjGL8EIuUk6Jin69pVOFCH%2Bxr9cfEwnkngEUUh8LMBynyQdNUUkGJjbqqeecItIvOXNHweLnDiVHyMfWdg2q6QCvj9NmHeYXMRLATnRh4QjaC6M%2BhqBLPzxa224ag%2Byfd%2FExjkTb40UbieeOZfoDO0%2BOhajI5%2FEc48UjDUUydQOxReOmHDi4G1AejVTmZvr%2Bn7cG7YT87q9j2cLl5X&X-Amz-Signature=14812d6e420a9cd5fc15c5b977e24aae2730ddd8cc9effa6389fce3cd4bb67e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673GBLYTC%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIGVs5nMBHSGn2c6ZOZBohAIFO9OaPl5unfcaz1bopwJ1AiEA8MYK0Kh%2F9RLUnDdhmRl0ERTIcnYbUPPdV2moYldiSuIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOexE1b%2FXD1zrEAUSrcA2DzPToOvChblC7%2BKSEzSZtLuiDPO%2Bihd4MfN9aNtMXj1WLq1aUBxh8abX8YQ%2FRLg7STi2nB1jumcaVQUcFjfzFR3xxvLAE4wSAXVosHyyceWB3gBZxbVlQuMogFSuzuhNCW1x0iva4bSZqmwiWssPSOiKFmtNqMJ7U7umxxLn4SV8AevzH5ouKt9lz%2BHSaZ9F6GMq6j2bmFEnjNAOusO16Sg5jcwfj%2BsRKvjLsBbOKTQhOAc7AxeAFcB9UpoTnGFM%2BX%2FESAWKuAQ%2F7nCpk87%2F1Y%2B7RQn8J7AFVj1W2Hz%2FoPplI%2BtwIR2B6nqWOchSTtH3jHBZNu6xyGsfJ4nyQ0HeZz5mZ8sSuU9zbRUGpUyiEmr3nUxiF2S%2FgGRGhAcEL4ofcXFxcrAnz7g4KduMivCCV0NK9VgnthY5FGXn96SphKshv2ZfdQWD0xaMVj8TaWp8WZcBHosYfQFGp9r5auw%2B3lCG8eBgo1VoC3UNSTzeZ0ZZ0Y3FjppO3a540%2BKOenLsssM8Tr0ZpVX1Q%2FRu59EWzr1lTD%2B6mIPtaEgptNhCcen3JO8u%2F0eVgScVAVe3oSEB9etETf7AsKE1mAyzK11olFMhVUbe%2FEBiUB6jFSV0Zn%2FnAtzNnhPeX7zsQuMIKY478GOqUBgYNVsq3Ro2AjGL8EIuUk6Jin69pVOFCH%2Bxr9cfEwnkngEUUh8LMBynyQdNUUkGJjbqqeecItIvOXNHweLnDiVHyMfWdg2q6QCvj9NmHeYXMRLATnRh4QjaC6M%2BhqBLPzxa224ag%2Byfd%2FExjkTb40UbieeOZfoDO0%2BOhajI5%2FEc48UjDUUydQOxReOmHDi4G1AejVTmZvr%2Bn7cG7YT87q9j2cLl5X&X-Amz-Signature=3ab44759f2d6f5fb9c867964fe9fd03573f197d50512c564126896cf434a778c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
