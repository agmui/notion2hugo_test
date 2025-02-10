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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGMX5H7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTh4WS2Zals0jh3fI5gNR6PCxQ51dz6J5gnLHrPY2WFwIhAL0%2FMYBCvDpPCcgzPy2Lh5a3ZnIaV1M6Nu2CFLtbEgG2KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxSPzFrz0TD1UfYhwq3AMclpRehbqenOl%2FANwSWhhNymooZO3AxS0jumHYKig%2Fl3jN%2B%2BzwegOJmYTX%2Bqn0GrEANg%2FEBt6GsVj9Cs4nUiImF9RUnvPTZuIT5W%2FKpQPMli%2BPnxzxJ8hPpC%2B1FGtoZiaumnhhWJDcCzEjXk%2BZ4BVjYXmVaGi7SY7obwV%2FnU1UKWexByQc2afYsejEQoYBSQ4e4ZcmnxEqmIkdacCOdhAJ1rUqCrRl2vgk6jByyWUFTfF7Xde5%2F7L0KNXuslVC9X3%2BTV02%2BOfk%2Fmcw8vJnA91F6kGNQ2ThLuk5V%2Ff3NZ68AINODetu72IWl8ElnRZ%2FKJzTcJuhvfaLRJkG%2Bq812aCi5c4YWMXTAXQZZqeMsMBxeCceYLxwUwzX6QDOJ%2BIHgypSKMDh%2BZvVKcrln6MaX%2F6xhhjc0gdGdQ%2F28ghXYMFksqZxr6E1B1OGT%2FH1taWDUgQVNxPhIP0uhRSQad%2FUgCADFnCnsZhKKBRq2avqZOQQcS1GoR%2BhL5nY8Pd8VTAViVfgLKRcraodmOBuKS930%2BA0Yn8j47%2BxeTR4MTXGOwtJO1cJFak0H%2FhNXZlDVLtFVUwu9QvzNrtaCX63eeoYrp1vhhRAYu5nQ7d6acQlyakoGH5hGx0vk1XpH5OstTCVrqe9BjqkAerrORnf48262r4OUcpHLjCnko8UuKVvwxtXh3BpfaDDZUQ9aazHNpyMl9%2F6762rVM5oPyktxNw2DO8yRbXbeQzmaiNkhnRba3mSmeEnmYjxtVrRZLs2Ms1yUvXjrBFvh96nXVrZhJdiTZRnYX7XSU8Qmj3t1FYfz6X1umqiEwzIa7wPkU4aNOqx6LJRWMXoY%2BG0ylk3dxIajRLwBSBPcVHDE95H&X-Amz-Signature=100f09a50f637cb30aaee1c91a4306a96351bd051353804cf737d4edb912136c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGMX5H7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTh4WS2Zals0jh3fI5gNR6PCxQ51dz6J5gnLHrPY2WFwIhAL0%2FMYBCvDpPCcgzPy2Lh5a3ZnIaV1M6Nu2CFLtbEgG2KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxSPzFrz0TD1UfYhwq3AMclpRehbqenOl%2FANwSWhhNymooZO3AxS0jumHYKig%2Fl3jN%2B%2BzwegOJmYTX%2Bqn0GrEANg%2FEBt6GsVj9Cs4nUiImF9RUnvPTZuIT5W%2FKpQPMli%2BPnxzxJ8hPpC%2B1FGtoZiaumnhhWJDcCzEjXk%2BZ4BVjYXmVaGi7SY7obwV%2FnU1UKWexByQc2afYsejEQoYBSQ4e4ZcmnxEqmIkdacCOdhAJ1rUqCrRl2vgk6jByyWUFTfF7Xde5%2F7L0KNXuslVC9X3%2BTV02%2BOfk%2Fmcw8vJnA91F6kGNQ2ThLuk5V%2Ff3NZ68AINODetu72IWl8ElnRZ%2FKJzTcJuhvfaLRJkG%2Bq812aCi5c4YWMXTAXQZZqeMsMBxeCceYLxwUwzX6QDOJ%2BIHgypSKMDh%2BZvVKcrln6MaX%2F6xhhjc0gdGdQ%2F28ghXYMFksqZxr6E1B1OGT%2FH1taWDUgQVNxPhIP0uhRSQad%2FUgCADFnCnsZhKKBRq2avqZOQQcS1GoR%2BhL5nY8Pd8VTAViVfgLKRcraodmOBuKS930%2BA0Yn8j47%2BxeTR4MTXGOwtJO1cJFak0H%2FhNXZlDVLtFVUwu9QvzNrtaCX63eeoYrp1vhhRAYu5nQ7d6acQlyakoGH5hGx0vk1XpH5OstTCVrqe9BjqkAerrORnf48262r4OUcpHLjCnko8UuKVvwxtXh3BpfaDDZUQ9aazHNpyMl9%2F6762rVM5oPyktxNw2DO8yRbXbeQzmaiNkhnRba3mSmeEnmYjxtVrRZLs2Ms1yUvXjrBFvh96nXVrZhJdiTZRnYX7XSU8Qmj3t1FYfz6X1umqiEwzIa7wPkU4aNOqx6LJRWMXoY%2BG0ylk3dxIajRLwBSBPcVHDE95H&X-Amz-Signature=5d64bf5d3cb3163cd6b46ccaa0fd7287496f581f97b4633abed03b9a4eb309ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
