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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HLNFHKA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCgNXvFWyJL0xyClcYzdd7wNqepFGCRz4zsYm9uqx3zbQIhAIwRyhot6xjPVvA842YXzN8VdClzH6vN%2Bj7B8M7Lf%2FD9Kv8DCDUQABoMNjM3NDIzMTgzODA1IgxW47pQ%2FxFcE%2FJ7Stcq3AOEgSOOkew32cB2GlIrPoxYAokQkVWm7G%2BslTFzFwqY25bfuAUJ3qegaYgk1Jfs3PW8cAki%2B%2Fck57uZiCl07I%2FwdAWV7piKpqKoq7PHRg06IITZPbaxt1KOqxjqexLwWJBaKx5Lr51p8exwgdjuhWGPnFUyJbp3skgwgSK0vEiOiXzvp8AzsyBvm6qn0Rzk8EXvogMeJ8wbJmHz2ghodPUXLlBzxfE0TQyrlfdNpABnHV2r%2BXPgTgG6RxmkPyOcIYcQU8Y6SDX7NGcSpdw1J%2B8v7Uj8HMCrg4JcE02YtqTd7bLukUNO9MlxocjxT62XLLnrNCsc%2Bw5Jz52dBUzYuKYxKV0JrOd75tzzT9i9bl9RRQ840DkKrlMFonMRRzXrj0g41fUVAnIt2tVsi21Z6OZOkJ06GVu6yvqF29gEeYfsiYpEqED4hUIpjZZWzN9OlbUuQN7UYwvU%2Frmle2%2FJFKDGN1anx1UIJ8f%2FR3hLLTkaswUABKAZxdl0iqY0jcLzzmJrs7tXwI9yUNBfhFkrFidVeyE8FKAnt4t7fp4cdM3CV95AbXjhYmszECVBGaRuMmvcm1WMwWV5knCOgdHqVxgkNpMx6zZIjfknhGKBlU5KDeoebaFWIk2s0byj5TDYi%2BzCBjqkAZGMHV2QmtNh0dp7sDBDR%2FYZUw6VTdWiUlNKDZcAfi44UKauXmTuhAuXQNq48ZtGZHQ2gYBmaNPNrc4Y7P47kLENFZ4ILvATZfCaJSeJncJl0O8ZGvM1c4x5j03oq8d82VOENlkaz9rxveQ4MWIBGgvUz0260%2FuhSYRYT5vfPa51xDnXa19TVjEYnMd0UN%2BWOtt1k9vCR3fnUUEqaXd9nYv24tgs&X-Amz-Signature=1cc640402acd2d1014f795b1c937ad68176c5a7b7a5eeed9c8352258854c8a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HLNFHKA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCgNXvFWyJL0xyClcYzdd7wNqepFGCRz4zsYm9uqx3zbQIhAIwRyhot6xjPVvA842YXzN8VdClzH6vN%2Bj7B8M7Lf%2FD9Kv8DCDUQABoMNjM3NDIzMTgzODA1IgxW47pQ%2FxFcE%2FJ7Stcq3AOEgSOOkew32cB2GlIrPoxYAokQkVWm7G%2BslTFzFwqY25bfuAUJ3qegaYgk1Jfs3PW8cAki%2B%2Fck57uZiCl07I%2FwdAWV7piKpqKoq7PHRg06IITZPbaxt1KOqxjqexLwWJBaKx5Lr51p8exwgdjuhWGPnFUyJbp3skgwgSK0vEiOiXzvp8AzsyBvm6qn0Rzk8EXvogMeJ8wbJmHz2ghodPUXLlBzxfE0TQyrlfdNpABnHV2r%2BXPgTgG6RxmkPyOcIYcQU8Y6SDX7NGcSpdw1J%2B8v7Uj8HMCrg4JcE02YtqTd7bLukUNO9MlxocjxT62XLLnrNCsc%2Bw5Jz52dBUzYuKYxKV0JrOd75tzzT9i9bl9RRQ840DkKrlMFonMRRzXrj0g41fUVAnIt2tVsi21Z6OZOkJ06GVu6yvqF29gEeYfsiYpEqED4hUIpjZZWzN9OlbUuQN7UYwvU%2Frmle2%2FJFKDGN1anx1UIJ8f%2FR3hLLTkaswUABKAZxdl0iqY0jcLzzmJrs7tXwI9yUNBfhFkrFidVeyE8FKAnt4t7fp4cdM3CV95AbXjhYmszECVBGaRuMmvcm1WMwWV5knCOgdHqVxgkNpMx6zZIjfknhGKBlU5KDeoebaFWIk2s0byj5TDYi%2BzCBjqkAZGMHV2QmtNh0dp7sDBDR%2FYZUw6VTdWiUlNKDZcAfi44UKauXmTuhAuXQNq48ZtGZHQ2gYBmaNPNrc4Y7P47kLENFZ4ILvATZfCaJSeJncJl0O8ZGvM1c4x5j03oq8d82VOENlkaz9rxveQ4MWIBGgvUz0260%2FuhSYRYT5vfPa51xDnXa19TVjEYnMd0UN%2BWOtt1k9vCR3fnUUEqaXd9nYv24tgs&X-Amz-Signature=7dd5ce3523930a2e02dcc4b4712e7874c93e263c2251002dc620dd22b8250562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
