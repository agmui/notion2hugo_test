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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RIAIDL%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdKwqF5j0v8cXiIoE%2BZfmnQiHSSoFkN0w6s6YdSmGLTAIgfTocb5K55hJGe%2Bq4Txqn7utJqCd%2BrK829NNgw9Liw5YqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7YprEUOFIWr%2FLauSrcA6HsnwxNItoe1N3Dmi2QaLq9%2BOsQPPtUmWaj5XvPyeZ%2BUpeSaFb0Ivkb52slX%2B6LhEiVMwztqbMpazq9Nqp7IBZEjL7SMiyX5VpMoXo0Y11WP59WGfHzNnxxpG8DCP2q0fZdecveKpTRlavHEbQGlm8gfcHc9aKo55xEV96BPWRBJO55nNIDLsTaxRfkBeUJnLbDUJvekPqIk35YZ9aQMnr0K9X71yNnj7PmN%2FsyGyGqDb2Fjl0IG8jKMgrOnuHVVHB8iichHcm5swA38Ipx2lRrjg2Biz%2BBU1H33%2B6pRwj1PNSlOGNCYNuzk8BSlo1J2e06jMitNqzZ6MQmtlMRYXHhiANqnFQEx9Jx06j6q9fkbuW3uNXWuYMGB%2F0e10ktjiVrdkDEvwJG7S5sjnGbcLx3%2FtVvMhU%2Beo4yTnYAdNzDzV%2BGBa9tukmOaz%2BHGSARkDzoJSY%2Bb015PmsLfhYWv7Q%2BE6muIefWYsuKOKgy8w%2Bk%2BNXMEg1IKeTXx3r%2BfAs0tNLiXoMRwHxCNLypBe0HXNdxmZy2GLcIe%2BHoQH4sU647elAK9VFr58vWmp3POggqrjJVjPhi1JZ%2BVL7NYKtnbRohL8N3qvfjQaU4dbiVc%2BayhITBpl4YNb8LzuVSMMrP67wGOqUBwUqmLQEDsJZ5s6hdH0kr11J4fXy7FwOmBR9Q5f66vIK0BNBvbyWhkDgZkBy%2BqmbkrcZ984VYGA1dM2F%2BgqPcpV6MfF3zcf5Me5oO7oSGHy3V0IUSz4IyfcFLiGgLju5ZmdRlDzRKvu5DkREbN%2FElm2oZ5WNTnN6Fpd1gZeTgjpXIDq6vNnv%2BVEEe2LX1O%2FmFoXMF559LZ2YiysLS%2BoiGeO%2BdlfiB&X-Amz-Signature=5552fc05de3ce34bf76895b70570ed5ce71a03d9b07611f4e2ec66aff56be62b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RIAIDL%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdKwqF5j0v8cXiIoE%2BZfmnQiHSSoFkN0w6s6YdSmGLTAIgfTocb5K55hJGe%2Bq4Txqn7utJqCd%2BrK829NNgw9Liw5YqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7YprEUOFIWr%2FLauSrcA6HsnwxNItoe1N3Dmi2QaLq9%2BOsQPPtUmWaj5XvPyeZ%2BUpeSaFb0Ivkb52slX%2B6LhEiVMwztqbMpazq9Nqp7IBZEjL7SMiyX5VpMoXo0Y11WP59WGfHzNnxxpG8DCP2q0fZdecveKpTRlavHEbQGlm8gfcHc9aKo55xEV96BPWRBJO55nNIDLsTaxRfkBeUJnLbDUJvekPqIk35YZ9aQMnr0K9X71yNnj7PmN%2FsyGyGqDb2Fjl0IG8jKMgrOnuHVVHB8iichHcm5swA38Ipx2lRrjg2Biz%2BBU1H33%2B6pRwj1PNSlOGNCYNuzk8BSlo1J2e06jMitNqzZ6MQmtlMRYXHhiANqnFQEx9Jx06j6q9fkbuW3uNXWuYMGB%2F0e10ktjiVrdkDEvwJG7S5sjnGbcLx3%2FtVvMhU%2Beo4yTnYAdNzDzV%2BGBa9tukmOaz%2BHGSARkDzoJSY%2Bb015PmsLfhYWv7Q%2BE6muIefWYsuKOKgy8w%2Bk%2BNXMEg1IKeTXx3r%2BfAs0tNLiXoMRwHxCNLypBe0HXNdxmZy2GLcIe%2BHoQH4sU647elAK9VFr58vWmp3POggqrjJVjPhi1JZ%2BVL7NYKtnbRohL8N3qvfjQaU4dbiVc%2BayhITBpl4YNb8LzuVSMMrP67wGOqUBwUqmLQEDsJZ5s6hdH0kr11J4fXy7FwOmBR9Q5f66vIK0BNBvbyWhkDgZkBy%2BqmbkrcZ984VYGA1dM2F%2BgqPcpV6MfF3zcf5Me5oO7oSGHy3V0IUSz4IyfcFLiGgLju5ZmdRlDzRKvu5DkREbN%2FElm2oZ5WNTnN6Fpd1gZeTgjpXIDq6vNnv%2BVEEe2LX1O%2FmFoXMF559LZ2YiysLS%2BoiGeO%2BdlfiB&X-Amz-Signature=5f92b793a5ea131002e9003371addaea4b22765882851369df9eb542623a9e96&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
