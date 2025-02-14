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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SSPYLDN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFqMpQ7xfjXVlhAHZJ67edrCpRPq44gRU9XzZXiPwp02AiEAoY12vyvDjfuMTgqxmTs879JcQGAProrhsUrLcEMmibIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDFlbw8t8CSog0c%2FUNCrcA01iWfyUBVRHgkhCTXmC%2BBjk0iSykZIP9VZz0xMPJQ0e681DlHAq7ofMy2Rbdrnagsnx%2FTstUJcLueF1t3QLK8MIJxoAYMb1TkhhPjMpj3IQuBO3w%2BtzNa083FdbcjSAMVqtxq%2B%2B28SBYRTQSrZOgUwz%2BP5pdQ7rV8E9s0PkLfUCZeSGtaTm1rpyTSI4tNvM1JlCPD8PyejCV8iLW0m4aiQwJ6XokWQ6anhKoldESzSbWSRjvePm3tJwPN5pKXsGOs%2FQsztgL41Ei8RD4By0DQWWgFlSCSzK3yRmW6iJ6IfxWC9vpUPQ1MAr17B2VzbpiEMDWnUWva66KuftoCQhpKg%2FjNM6bdeSPvjJGe58QekPHup3%2B2ub5AT6Ap4miRzD9Q9cxcdYKenyyos1WLcBj%2BNJJDeLFMus36k7qqJqP752KBzCE%2Buw1Z%2FpGkZw8TVcUmiDvsxgemBTnYe3AjzY59we6IVtMoAI%2FxQu74cDzELOQd5Ucaj4gXa2UOM3cpJ0eJtRA04J6%2BMs%2BEKkItmcf%2F1pdoYTqWEa7L4frsGWJu8pTr1F9xllKY91WMhy8IhiK13axyAIBIWxYiaKF1Pc2NfAx%2FgHAcBhS5hCmByxgpHqgQpriSLgtaG12aQeMOjRvr0GOqUBIpiVjjUuy9dn9HgMCVBsJ0kqkRfu7saJuQVu1vY4b5iSii4CYuyyfSHQtkmvWt0OGkSzp6QNXdtiO0MNZf4lCRiiJxlVVyUq%2BkFn6kEYE9kayGfaL0ftWNZzDY8RzJ7o5M34fYrWL0uikfEM9hqWxOTEr9GnFWFybfrWLK4Lqo%2BjHVOiwgliAMcgEkq5S7IQZo1UL0%2B%2F3dX0IMyqp3PeY86qaAb2&X-Amz-Signature=4bb67fef57fbce7ad6002806c3cb2288744d7060f9f834acdadffe32d86abad8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SSPYLDN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T220210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFqMpQ7xfjXVlhAHZJ67edrCpRPq44gRU9XzZXiPwp02AiEAoY12vyvDjfuMTgqxmTs879JcQGAProrhsUrLcEMmibIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDFlbw8t8CSog0c%2FUNCrcA01iWfyUBVRHgkhCTXmC%2BBjk0iSykZIP9VZz0xMPJQ0e681DlHAq7ofMy2Rbdrnagsnx%2FTstUJcLueF1t3QLK8MIJxoAYMb1TkhhPjMpj3IQuBO3w%2BtzNa083FdbcjSAMVqtxq%2B%2B28SBYRTQSrZOgUwz%2BP5pdQ7rV8E9s0PkLfUCZeSGtaTm1rpyTSI4tNvM1JlCPD8PyejCV8iLW0m4aiQwJ6XokWQ6anhKoldESzSbWSRjvePm3tJwPN5pKXsGOs%2FQsztgL41Ei8RD4By0DQWWgFlSCSzK3yRmW6iJ6IfxWC9vpUPQ1MAr17B2VzbpiEMDWnUWva66KuftoCQhpKg%2FjNM6bdeSPvjJGe58QekPHup3%2B2ub5AT6Ap4miRzD9Q9cxcdYKenyyos1WLcBj%2BNJJDeLFMus36k7qqJqP752KBzCE%2Buw1Z%2FpGkZw8TVcUmiDvsxgemBTnYe3AjzY59we6IVtMoAI%2FxQu74cDzELOQd5Ucaj4gXa2UOM3cpJ0eJtRA04J6%2BMs%2BEKkItmcf%2F1pdoYTqWEa7L4frsGWJu8pTr1F9xllKY91WMhy8IhiK13axyAIBIWxYiaKF1Pc2NfAx%2FgHAcBhS5hCmByxgpHqgQpriSLgtaG12aQeMOjRvr0GOqUBIpiVjjUuy9dn9HgMCVBsJ0kqkRfu7saJuQVu1vY4b5iSii4CYuyyfSHQtkmvWt0OGkSzp6QNXdtiO0MNZf4lCRiiJxlVVyUq%2BkFn6kEYE9kayGfaL0ftWNZzDY8RzJ7o5M34fYrWL0uikfEM9hqWxOTEr9GnFWFybfrWLK4Lqo%2BjHVOiwgliAMcgEkq5S7IQZo1UL0%2B%2F3dX0IMyqp3PeY86qaAb2&X-Amz-Signature=dab91687e95386f38a82417dc6112a460626ac8c0a7a01fda3ee12679154cc7b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
