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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZXKKCZD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCw2snFrVkXp9yWZGTqR7mkmmpo1eJYvY8IiejxfD9dDQIgJ%2FYpQkSn08cEASB6kwtMIjoFze23P6eyQicPIdzxZv0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqT3DKRRQroRK5cLyrcA0HgvVkK%2BAL9SHeTZOKk%2F7VJZssHqiZpX9xXDpX2HDsH8OOyXm1Ak8Pm4rUbjDHV3X%2FQGeEFkkAgHQq33wdly9T2k9MPNA9%2BK5dLYJJeqxNouOgo5tS0QTwpjzFx79SDVt9uN%2B65Co7hJaEqDG6ZYtC1He3WWOdPTc%2BAcb8BCXs%2F6X4skKeLoPzo1kqf9Vjg54UsoUYGHeXmCKbICHG%2FUfuKx%2BAQsomuKPpQk4h3zlP%2FQuyAs3AehBUk6PDx1UjXHM%2Bdu%2Fh3R2vUOXf2xFKdz7ftwyXGUQJx62KNWIGMfSeT5wjr5SuwVBic%2BiXtVsB5eOwhVC1v74ETUXohELqNPOGm8tNnsLVmHCj5WoFd6pF5bGTmzlS%2BWwZlRPga%2BuAjtReQ9lC5cCjtwdLnK8TMhpooXB2dLs0yQ7h9LeHAekp%2FmIqbc%2B5Y%2BPwgy9V147sUNeJ66I9RxNLpHCv2r3KHhhBPOuBsSNDhh0L9g7PlWLsMLX7UlZR2%2F4sDg9DLq%2F7M1iJtQ%2FnvfDt5lxcqiFdhCkH3JhMqusD%2BF3Ed5HyZkHeN6NdEddGNJiH%2FWteWBRT3bc4F8FCMaPHKa4oyjn3q4hwRsmF89gZedH79HyJ3BB87Or2JG%2B%2ByGUHzD3bLMLD4k8AGOqUBBJ9JSeCqGcYLovOirGWcDSPhq2Np3FLmetI3uo6LQUwSS31e%2BbqvbfhQVY4XNNYirn6J54RhZeLhyliIZTm9sFsQzHEOTBn6xvY17tKG2%2FufoWgsik9YA3EOS%2B9857IjSnX6vKDE3PGn8Veon1GROTUm%2BHLGqOPk5EFEF0qsViLi1SAUXd0kwvnsOOMeOp0s%2Ff1sYcsfwvTt9fEOfSCOPIr2a1%2BF&X-Amz-Signature=1ba4a449c036a17233e8afd2a6dbb0cba49a881f04643f6a7218d28910b34452&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZXKKCZD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCw2snFrVkXp9yWZGTqR7mkmmpo1eJYvY8IiejxfD9dDQIgJ%2FYpQkSn08cEASB6kwtMIjoFze23P6eyQicPIdzxZv0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqT3DKRRQroRK5cLyrcA0HgvVkK%2BAL9SHeTZOKk%2F7VJZssHqiZpX9xXDpX2HDsH8OOyXm1Ak8Pm4rUbjDHV3X%2FQGeEFkkAgHQq33wdly9T2k9MPNA9%2BK5dLYJJeqxNouOgo5tS0QTwpjzFx79SDVt9uN%2B65Co7hJaEqDG6ZYtC1He3WWOdPTc%2BAcb8BCXs%2F6X4skKeLoPzo1kqf9Vjg54UsoUYGHeXmCKbICHG%2FUfuKx%2BAQsomuKPpQk4h3zlP%2FQuyAs3AehBUk6PDx1UjXHM%2Bdu%2Fh3R2vUOXf2xFKdz7ftwyXGUQJx62KNWIGMfSeT5wjr5SuwVBic%2BiXtVsB5eOwhVC1v74ETUXohELqNPOGm8tNnsLVmHCj5WoFd6pF5bGTmzlS%2BWwZlRPga%2BuAjtReQ9lC5cCjtwdLnK8TMhpooXB2dLs0yQ7h9LeHAekp%2FmIqbc%2B5Y%2BPwgy9V147sUNeJ66I9RxNLpHCv2r3KHhhBPOuBsSNDhh0L9g7PlWLsMLX7UlZR2%2F4sDg9DLq%2F7M1iJtQ%2FnvfDt5lxcqiFdhCkH3JhMqusD%2BF3Ed5HyZkHeN6NdEddGNJiH%2FWteWBRT3bc4F8FCMaPHKa4oyjn3q4hwRsmF89gZedH79HyJ3BB87Or2JG%2B%2ByGUHzD3bLMLD4k8AGOqUBBJ9JSeCqGcYLovOirGWcDSPhq2Np3FLmetI3uo6LQUwSS31e%2BbqvbfhQVY4XNNYirn6J54RhZeLhyliIZTm9sFsQzHEOTBn6xvY17tKG2%2FufoWgsik9YA3EOS%2B9857IjSnX6vKDE3PGn8Veon1GROTUm%2BHLGqOPk5EFEF0qsViLi1SAUXd0kwvnsOOMeOp0s%2Ff1sYcsfwvTt9fEOfSCOPIr2a1%2BF&X-Amz-Signature=69e4f1265811548a1d2157f4202dbc5b289f4159f76ca35ba904a12058dfed61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
