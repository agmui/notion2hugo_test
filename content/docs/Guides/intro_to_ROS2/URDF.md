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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOLSMLA2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICje9D41%2FimQ%2Bcux1u52gRfigU8zyWqsyT2s3YUjkRbBAiEA2fe170m1zjTOj8n0f0w%2FQMNJaNJQ1KJTRoXgjKAOwuYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKVOCcsF%2B0xd9yPJNyrcA5H8iWLNdagF9U2r4%2FG7s6Xf77RyMKf4J3WBTSZnhGnkReKPJwxGjqp%2BoI6GCbfGFDjvsAd1XUzx3BQ7j4VBTsYsgXQ3coxptZS8Obhg7tJgRHuYjL1DOQdTyxJ8IyLtQOwis0loqRpKUHVvliLOeveBYurApALnAS%2Fny%2B1xEU0MevTB3CZK1d%2F5bDZl5znhhWS3UgwCEwwr3OAqnx2Dna%2F8kE0DqBCsLSHU90KHqtyuc2AVTaL7wQOiLk1pkUJKoReYQv4i%2FmGRZvySZsOArX63gZEqLlRGOTQoOBDKRYpNVXvaay6tam7zMQ5%2FJmh7WVBZ96BVV8BX0VTexh3h769Vx36TPuGKB6qGDA5eBDT1AsESZdbWhcVh2V9R43PS0R%2FXAMRTmFY2sxDAlOn%2FgvGffK61VfiTVf4NbGtPat8R3tXgOOUOBJ1VQymnIoWMpo%2F%2B0wnKlQW7EGNrOB8T18WMJDJ5vrZMi%2B3PNF4UIJuulYqa3C7nyIEebrilj2szrf0hOsaiLfuXlH7T207tOD9rSkzHyoE2uw3%2F0KVrTenBLRs8%2B3tQRiwduayt5qWdR53YRIanEXFVUliv3qH%2F4Ro4X5VV4ZKkobOLa0WS9JHbmTIJ0YB2bPbx5ePMMPzY7L4GOqUB2WeZvxOmOdlIbEJw9FOKN1arTnQc6abY5myjaos4jLcppOiqZ4MVO5Fq5H2NemiIEijo0gte%2BFVQ4KVszzufegYDWRCscG%2F%2BwejkKqIorSnS4ImXNRt%2BL3G8TRRvxRlnmA85cvBh8Xj06aHDEsKrCriB1X5IqtCx1BdaE7wMVLlSYwhpZmiZGXgEh%2BNnWcosMuJS85XSNYLvqk5blFdTV33YzlTm&X-Amz-Signature=3d19dcc119b8e209ed686b8d9c5dcea49e0a10c219f4692dde5ab7056ff6c0b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOLSMLA2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICje9D41%2FimQ%2Bcux1u52gRfigU8zyWqsyT2s3YUjkRbBAiEA2fe170m1zjTOj8n0f0w%2FQMNJaNJQ1KJTRoXgjKAOwuYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKVOCcsF%2B0xd9yPJNyrcA5H8iWLNdagF9U2r4%2FG7s6Xf77RyMKf4J3WBTSZnhGnkReKPJwxGjqp%2BoI6GCbfGFDjvsAd1XUzx3BQ7j4VBTsYsgXQ3coxptZS8Obhg7tJgRHuYjL1DOQdTyxJ8IyLtQOwis0loqRpKUHVvliLOeveBYurApALnAS%2Fny%2B1xEU0MevTB3CZK1d%2F5bDZl5znhhWS3UgwCEwwr3OAqnx2Dna%2F8kE0DqBCsLSHU90KHqtyuc2AVTaL7wQOiLk1pkUJKoReYQv4i%2FmGRZvySZsOArX63gZEqLlRGOTQoOBDKRYpNVXvaay6tam7zMQ5%2FJmh7WVBZ96BVV8BX0VTexh3h769Vx36TPuGKB6qGDA5eBDT1AsESZdbWhcVh2V9R43PS0R%2FXAMRTmFY2sxDAlOn%2FgvGffK61VfiTVf4NbGtPat8R3tXgOOUOBJ1VQymnIoWMpo%2F%2B0wnKlQW7EGNrOB8T18WMJDJ5vrZMi%2B3PNF4UIJuulYqa3C7nyIEebrilj2szrf0hOsaiLfuXlH7T207tOD9rSkzHyoE2uw3%2F0KVrTenBLRs8%2B3tQRiwduayt5qWdR53YRIanEXFVUliv3qH%2F4Ro4X5VV4ZKkobOLa0WS9JHbmTIJ0YB2bPbx5ePMMPzY7L4GOqUB2WeZvxOmOdlIbEJw9FOKN1arTnQc6abY5myjaos4jLcppOiqZ4MVO5Fq5H2NemiIEijo0gte%2BFVQ4KVszzufegYDWRCscG%2F%2BwejkKqIorSnS4ImXNRt%2BL3G8TRRvxRlnmA85cvBh8Xj06aHDEsKrCriB1X5IqtCx1BdaE7wMVLlSYwhpZmiZGXgEh%2BNnWcosMuJS85XSNYLvqk5blFdTV33YzlTm&X-Amz-Signature=5f4fac9ee6cb18edfeb8cf25645d93c50bf490512955181754227598e8c2b36e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
