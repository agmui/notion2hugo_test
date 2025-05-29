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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQGY2EQN%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs%2FeCwPIyykvVWDGtQSRXMXWnnjGoLlO5IYY4TdijpMgIgTvPYL7%2F9kG2m8xNboWBrMZykGvy2oItMeV7cj1xMo3MqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHT%2BOkw2R2GDx%2BGteCrcAwXH3YJwDQlH4bruD3jTReWjM1%2BFK06VkxCX1UrsDUvxupIGzRTk6gYbZYMPdlUqapUUzfoMkvZGd8eqkaQ2W0lEe4RbJU2T6sh2hjI9IHWrKHg5I2M2Nwg%2B2qBf2jNge5SuCJBdVa5IN9rLnL%2FdAOadSPcfuoHjrskOFpJf43%2FdHXkgZJL2NVT2oGb9Ny5Lw0gooCpgeRF64BrcQfehJB5Cn3Vxw8s34zcU1NCdFqywiOTk5jtmKbhUluvynt8h2%2FURzjxk0rfgLK2EOP9SmmPEafBFUqrajWVTVsbXfIG%2BM8MdY8WUgpatV8h1MLB237Q476DZv6e1Achbc84ggjIB4N3M%2BNGL%2B7S6C35LS648SE5jlXHvQnKJ2x9vpJo4vdxDmwoosymvDoLiQuM57q5PvbeErYYXHk%2FoELOX3NCitm4wUq3DNLl%2B5p2OiuFmtabtCcKzJuNLENSipM01SJpgepTeXguLdbUJfDH%2BMqDuq22pxOzMDfWmnJwe5CnhJiNFu9pte33fMSEhSAKgR9l%2BpiszPMPluKv8aB0y0fvnrX33mxcRl5fnDYQfqn5VBtXqzMiPj7BWtoOw2nwfJFdKxygPj33SfkQrrbvRs3E%2BE2hqqtPkngwWfUIrMKqv38EGOqUBHxly1Ts%2F1Re0GbqBS2BUpKz4EXZsYUitJ568etE5QHLNqsHb7SRIfLMmqCOYR3QPswCn79%2F3nWG1IuPrgEk9MbIDRWmfmsV6WreDojpabi%2BUNYdvhAhAZd2csdfzdyJd0d6U34Zm7uUTathGoQz%2FLH7%2FVkWhB5Nq%2BYyLNaBCm4bEqRrxCjMwnWOvcM1i3FwxfyYwnzy1EqwVS7yw%2BPSNdlpKhG%2BE&X-Amz-Signature=21cd4009bb04d40bb77ed70932fffc83e9ef64dbbddf9a2e4e0fe7e3c9d28310&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQGY2EQN%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs%2FeCwPIyykvVWDGtQSRXMXWnnjGoLlO5IYY4TdijpMgIgTvPYL7%2F9kG2m8xNboWBrMZykGvy2oItMeV7cj1xMo3MqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHT%2BOkw2R2GDx%2BGteCrcAwXH3YJwDQlH4bruD3jTReWjM1%2BFK06VkxCX1UrsDUvxupIGzRTk6gYbZYMPdlUqapUUzfoMkvZGd8eqkaQ2W0lEe4RbJU2T6sh2hjI9IHWrKHg5I2M2Nwg%2B2qBf2jNge5SuCJBdVa5IN9rLnL%2FdAOadSPcfuoHjrskOFpJf43%2FdHXkgZJL2NVT2oGb9Ny5Lw0gooCpgeRF64BrcQfehJB5Cn3Vxw8s34zcU1NCdFqywiOTk5jtmKbhUluvynt8h2%2FURzjxk0rfgLK2EOP9SmmPEafBFUqrajWVTVsbXfIG%2BM8MdY8WUgpatV8h1MLB237Q476DZv6e1Achbc84ggjIB4N3M%2BNGL%2B7S6C35LS648SE5jlXHvQnKJ2x9vpJo4vdxDmwoosymvDoLiQuM57q5PvbeErYYXHk%2FoELOX3NCitm4wUq3DNLl%2B5p2OiuFmtabtCcKzJuNLENSipM01SJpgepTeXguLdbUJfDH%2BMqDuq22pxOzMDfWmnJwe5CnhJiNFu9pte33fMSEhSAKgR9l%2BpiszPMPluKv8aB0y0fvnrX33mxcRl5fnDYQfqn5VBtXqzMiPj7BWtoOw2nwfJFdKxygPj33SfkQrrbvRs3E%2BE2hqqtPkngwWfUIrMKqv38EGOqUBHxly1Ts%2F1Re0GbqBS2BUpKz4EXZsYUitJ568etE5QHLNqsHb7SRIfLMmqCOYR3QPswCn79%2F3nWG1IuPrgEk9MbIDRWmfmsV6WreDojpabi%2BUNYdvhAhAZd2csdfzdyJd0d6U34Zm7uUTathGoQz%2FLH7%2FVkWhB5Nq%2BYyLNaBCm4bEqRrxCjMwnWOvcM1i3FwxfyYwnzy1EqwVS7yw%2BPSNdlpKhG%2BE&X-Amz-Signature=68e906a9a8f10971fa5756e9168aa3d0e4e996cb488e6f4b7f0c22379b4fdf8e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
