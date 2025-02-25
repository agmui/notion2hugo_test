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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P2UJ6MW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDjZFYPiYUV6Rr5xmy0%2F4fDidjzDyAsUIDVSEV0GVSM7QIhALAsKWLuMELfmrXe14%2FhfekHwVvTjtNGjpI9OKcYoae6Kv8DCE0QABoMNjM3NDIzMTgzODA1Igz%2F4Bj99%2FNnJ6y8Ox0q3AOtq9zIo9imsdUE0Nt281Hih%2BWZDRKC5WOS9%2FQ8ZIIUfdZW3RXU%2F2IJPcXnItf5XMjF%2Bgl9wiCK7CaVqlvEDrnlPIDYJ1wlF7x1oDBdn1a9nwzdTd9yOiJsIYxLTe4eZtS5H5QFw8A9ao1I%2BP1lmDaAu1oMWlTWZtC0uAsxUndxJTpkI4rsbczvMXM9RIBgxyiTSKhvGsYvE8mkuKF24%2Frzer%2FUzjkZD38p77t95mH4K9DAkILxxcfno4fOcz5RUpWNXwUh396IwoCXW9G%2BOGp%2Bq9MwYPAtYGjlbQxkEeHvVemPUj3xOE64cQAzq9HZiFbBhRvg8wPqB5tfXO%2B2t%2FfVyvztn3YIk2baYE%2FkHQruSLUaPlQhQQhGLoOL8tgXP%2FPfpjzli3T03lKAOfKoE%2BBG86nfPBRyY1DCosp2RMIMdCDhwsgLUa44pD%2FWRzbCTdqFykXD1JIO1VXz4rCwWcrxCF%2FYLP%2BaVc3Rdss%2Fx4F%2F2YtCZh%2Ffn4I7Ol%2FQQCf9%2FnndgTA657%2B3dcFk6cUXWTSLphKboApYbNDowNGHdmUzIzolEVql6KZS2YgahHrVpQ046%2FTu7CD1vqNm7qqPoYr%2BFNU0sbICa%2BXPYOeJ2MuvqG9yxmpR5xTEdiqVUzCVx%2Fi9BjqkAYHMClQFInSscZbbdt2vQXHOgVkIj8%2BeR56Mx8ujE%2BZcHfIjTFEUDR582z1SgwO0KmkPTFqQN%2FI8rU%2Bv7pESHfk0d7macenJxssk4iQWn%2FvPbojf9nA3FAN35ZzNyAO2ew69ikZxjOp5h5JzDBn6IKTJsWtbW6LsHr%2F%2BqU%2FHy1mQLQIXYSthINGOTyV0OIfA%2BILuxpQ1C5MR2oBpY4Nlrychdf0E&X-Amz-Signature=d0489ab7a2a73ee575ff166a2dcfb02016d4d5a3a48f853efd2c6916d7d349ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P2UJ6MW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDjZFYPiYUV6Rr5xmy0%2F4fDidjzDyAsUIDVSEV0GVSM7QIhALAsKWLuMELfmrXe14%2FhfekHwVvTjtNGjpI9OKcYoae6Kv8DCE0QABoMNjM3NDIzMTgzODA1Igz%2F4Bj99%2FNnJ6y8Ox0q3AOtq9zIo9imsdUE0Nt281Hih%2BWZDRKC5WOS9%2FQ8ZIIUfdZW3RXU%2F2IJPcXnItf5XMjF%2Bgl9wiCK7CaVqlvEDrnlPIDYJ1wlF7x1oDBdn1a9nwzdTd9yOiJsIYxLTe4eZtS5H5QFw8A9ao1I%2BP1lmDaAu1oMWlTWZtC0uAsxUndxJTpkI4rsbczvMXM9RIBgxyiTSKhvGsYvE8mkuKF24%2Frzer%2FUzjkZD38p77t95mH4K9DAkILxxcfno4fOcz5RUpWNXwUh396IwoCXW9G%2BOGp%2Bq9MwYPAtYGjlbQxkEeHvVemPUj3xOE64cQAzq9HZiFbBhRvg8wPqB5tfXO%2B2t%2FfVyvztn3YIk2baYE%2FkHQruSLUaPlQhQQhGLoOL8tgXP%2FPfpjzli3T03lKAOfKoE%2BBG86nfPBRyY1DCosp2RMIMdCDhwsgLUa44pD%2FWRzbCTdqFykXD1JIO1VXz4rCwWcrxCF%2FYLP%2BaVc3Rdss%2Fx4F%2F2YtCZh%2Ffn4I7Ol%2FQQCf9%2FnndgTA657%2B3dcFk6cUXWTSLphKboApYbNDowNGHdmUzIzolEVql6KZS2YgahHrVpQ046%2FTu7CD1vqNm7qqPoYr%2BFNU0sbICa%2BXPYOeJ2MuvqG9yxmpR5xTEdiqVUzCVx%2Fi9BjqkAYHMClQFInSscZbbdt2vQXHOgVkIj8%2BeR56Mx8ujE%2BZcHfIjTFEUDR582z1SgwO0KmkPTFqQN%2FI8rU%2Bv7pESHfk0d7macenJxssk4iQWn%2FvPbojf9nA3FAN35ZzNyAO2ew69ikZxjOp5h5JzDBn6IKTJsWtbW6LsHr%2F%2BqU%2FHy1mQLQIXYSthINGOTyV0OIfA%2BILuxpQ1C5MR2oBpY4Nlrychdf0E&X-Amz-Signature=6c4510ff79e20459ec246dde891c4cd58d2a5c7271e8b0a45eec563f81edd8fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
