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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFQJPDAD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCICMmpa5wqffTcKPILHOjaQkFxDnGiiwjnhesWq2fOpfQAiBKcZx9obnTEKEfwRkHRxa6BNZahcmgdfxQIdd0rUyBziqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlY60%2FS8GYc9KuM1LKtwDK7pjmNc8X1q02wiZKJyv011a1YtOutQMR%2F8Mv0v2usWRIOSNdXJdzR8EBbu%2B%2F1amFlhjHYojtCZA1S2VJGDe1dFrqtPNafBcXAbtzb4ZkJvuN8Y3nE%2FRpeKceBJueGr7ANBvMGH8GCbNgtZyxf8bmuT8mmYaCEkeL7b9QHHdECA8YcY96Hz31ZEzH%2FsY5qwp6Y%2BvjRDW0H6%2BoNLvVN9ODR6uj91ZNzOFJxC3VpjhdUabW1bGFB%2FmqAZX19KiJO4PapHOFltPcE8xyqU3XN8C%2FCv%2FO2H8kg9whCthmGGT5ULYlaD2445HVLohAKF29Oe3HxQypMftJzwCbqbvVIkaI4RbL08brsu8vqOBB%2FHGON9Ibukwl9YEiHW7Ux4vzXsDoenyiN%2BqkTqhCseSg44vp6OIKQ%2B2fT%2F1Jry3r7GIMwe5bi8oDYLqfqWGf9OsKZgzzxKn8YZhGCCKo0POK1gqOtgxRGfBQrrHEtPylaXFEP4N5mq%2Bkra4TPYVQWFndPyx%2Fe7COKXCoGtQyZ%2Br%2Bd80A47e%2BTx6j7L4u%2Bt0Q9qxY4DQ9x5B0ghFP7MYHErNMQ46nO2y29Stu6b39QwgKpxYWZLZMCWsbwAxLbN0tP%2F7%2FeMUwYwOCvl3LS54tOkw7ZmnwAY6pgH1PA2K7GvOTLvzovKKrz0L%2F8mPYG2zIUsV5%2FbVDEOhYZ2RDbndl55ENZx%2FiSc0oNcCK9iUrNWhTW3B4JQ4ppVYdEtAV1V6TwDfSqtyRcpXFTETD4ppCnLgcr%2F7DY1K6AXDoY%2FWV3S%2FpfVl0MtTlqkL2V6YnGkTxLuLjVH8BBDQGyg1HBK6NworK9sE0cWfLBTuRhTW33XPXxawMGkidQxHmBRD2qJq&X-Amz-Signature=978f8e3eba123dbc4fb8dc076dcd8fd6a5ebd2c765e94b90a18f2b10432a9ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFQJPDAD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCICMmpa5wqffTcKPILHOjaQkFxDnGiiwjnhesWq2fOpfQAiBKcZx9obnTEKEfwRkHRxa6BNZahcmgdfxQIdd0rUyBziqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlY60%2FS8GYc9KuM1LKtwDK7pjmNc8X1q02wiZKJyv011a1YtOutQMR%2F8Mv0v2usWRIOSNdXJdzR8EBbu%2B%2F1amFlhjHYojtCZA1S2VJGDe1dFrqtPNafBcXAbtzb4ZkJvuN8Y3nE%2FRpeKceBJueGr7ANBvMGH8GCbNgtZyxf8bmuT8mmYaCEkeL7b9QHHdECA8YcY96Hz31ZEzH%2FsY5qwp6Y%2BvjRDW0H6%2BoNLvVN9ODR6uj91ZNzOFJxC3VpjhdUabW1bGFB%2FmqAZX19KiJO4PapHOFltPcE8xyqU3XN8C%2FCv%2FO2H8kg9whCthmGGT5ULYlaD2445HVLohAKF29Oe3HxQypMftJzwCbqbvVIkaI4RbL08brsu8vqOBB%2FHGON9Ibukwl9YEiHW7Ux4vzXsDoenyiN%2BqkTqhCseSg44vp6OIKQ%2B2fT%2F1Jry3r7GIMwe5bi8oDYLqfqWGf9OsKZgzzxKn8YZhGCCKo0POK1gqOtgxRGfBQrrHEtPylaXFEP4N5mq%2Bkra4TPYVQWFndPyx%2Fe7COKXCoGtQyZ%2Br%2Bd80A47e%2BTx6j7L4u%2Bt0Q9qxY4DQ9x5B0ghFP7MYHErNMQ46nO2y29Stu6b39QwgKpxYWZLZMCWsbwAxLbN0tP%2F7%2FeMUwYwOCvl3LS54tOkw7ZmnwAY6pgH1PA2K7GvOTLvzovKKrz0L%2F8mPYG2zIUsV5%2FbVDEOhYZ2RDbndl55ENZx%2FiSc0oNcCK9iUrNWhTW3B4JQ4ppVYdEtAV1V6TwDfSqtyRcpXFTETD4ppCnLgcr%2F7DY1K6AXDoY%2FWV3S%2FpfVl0MtTlqkL2V6YnGkTxLuLjVH8BBDQGyg1HBK6NworK9sE0cWfLBTuRhTW33XPXxawMGkidQxHmBRD2qJq&X-Amz-Signature=a15ea20d0d94f0e353b12d9a82fb9edb2a1b551bfb17dd521f29b02734bb2a10&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
