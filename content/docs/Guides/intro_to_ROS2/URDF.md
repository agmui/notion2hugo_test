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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ5TQ65%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHEgE4AZTAlKLyQBCSoRUuKXeLenjO%2FkITW54W0PHurFAiBwvmMwgHfHRyQwJuH%2F79PbeyAJIYdK7xAzuA%2FI4kSO7CqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVrxN54ZNbIpAZmPGKtwDaCYij03r0rZPfzjDf9%2F6MMAApkPnLd%2FRMrFyOXeeL99FY5mLEUHQZ0scIwL1Wdv5YLitwqoiOFhzvFaBOt9EWNpO2vHFTUPgl%2BwEmIpJe6GhVLdLhoI5ySNc4Ft%2B5ns3Um7607XQZ1WJsxpJz0TDjIOfRJ9tJV993DPPfrsFtrc%2Buk%2Br4j0d9tbnf89dZhxgzzccjHAa99paFanmSSPqoDP9qKF6r6Nbyxa7FJKnXEXziQU9PpbYAAgnbrjFDsrIqxsQvCmywe61x3ZxraBSxVELGqTwGcliWypNyBFuFAr9yRyktGVLoP%2B1stEmWC1PX0tnkdBzgzywQj07Lxz0WNHg4Uawtz%2Fk4S5JUIsUZi5QPJ8PRgBaxC3Hq5uGaKmGy4dlMC6iRN88PTsaWZFgHeL5a%2F%2BFXipNGU%2FlXvLxBSCdg7QiLKr0CHejfz4wM1gqkbyNedK8eb%2Bhvsq7l1DynlvtheUkoYm%2FFgBKCoy4geRBLlTEn%2Bjre0VvtLxrW3%2B7NmAccIinH8K9i5mFjh8%2Fk4n6Wzf78BQH%2F%2BG2SGnROV95VOIz059aHmP6DOjxXwCicl9T94LQf%2FP%2BbfmHzBtTlzm6HLCWJ6Nh3fUxeOy0fgCUSiRgCINCXxfC3FswwvKgwAY6pgGWQtI2cGWYAblCbQNGLHFgw%2FciMnyKW3Z%2Bfy75t3NPcIZmxHTgceG9RQc1MIT3ORUVa2zr3rnFwFcW7GvjGdnIhWAkvmfY5Xw3WRBHgGUVTYKQvA4JAYnvcNezbOhEkIU1qiQngdOheDTzy9ISyP1VbGKcj2Z3wNXWQSl5lFNate7OtvbPejypI4NT490QvgSvelavSeaYj%2FlpXXJ4VDWXhldha3Zi&X-Amz-Signature=723ea631881b9f2e53943c1360c434fa507d72ef02664afad6e027c4a5e45cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXJ5TQ65%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHEgE4AZTAlKLyQBCSoRUuKXeLenjO%2FkITW54W0PHurFAiBwvmMwgHfHRyQwJuH%2F79PbeyAJIYdK7xAzuA%2FI4kSO7CqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVrxN54ZNbIpAZmPGKtwDaCYij03r0rZPfzjDf9%2F6MMAApkPnLd%2FRMrFyOXeeL99FY5mLEUHQZ0scIwL1Wdv5YLitwqoiOFhzvFaBOt9EWNpO2vHFTUPgl%2BwEmIpJe6GhVLdLhoI5ySNc4Ft%2B5ns3Um7607XQZ1WJsxpJz0TDjIOfRJ9tJV993DPPfrsFtrc%2Buk%2Br4j0d9tbnf89dZhxgzzccjHAa99paFanmSSPqoDP9qKF6r6Nbyxa7FJKnXEXziQU9PpbYAAgnbrjFDsrIqxsQvCmywe61x3ZxraBSxVELGqTwGcliWypNyBFuFAr9yRyktGVLoP%2B1stEmWC1PX0tnkdBzgzywQj07Lxz0WNHg4Uawtz%2Fk4S5JUIsUZi5QPJ8PRgBaxC3Hq5uGaKmGy4dlMC6iRN88PTsaWZFgHeL5a%2F%2BFXipNGU%2FlXvLxBSCdg7QiLKr0CHejfz4wM1gqkbyNedK8eb%2Bhvsq7l1DynlvtheUkoYm%2FFgBKCoy4geRBLlTEn%2Bjre0VvtLxrW3%2B7NmAccIinH8K9i5mFjh8%2Fk4n6Wzf78BQH%2F%2BG2SGnROV95VOIz059aHmP6DOjxXwCicl9T94LQf%2FP%2BbfmHzBtTlzm6HLCWJ6Nh3fUxeOy0fgCUSiRgCINCXxfC3FswwvKgwAY6pgGWQtI2cGWYAblCbQNGLHFgw%2FciMnyKW3Z%2Bfy75t3NPcIZmxHTgceG9RQc1MIT3ORUVa2zr3rnFwFcW7GvjGdnIhWAkvmfY5Xw3WRBHgGUVTYKQvA4JAYnvcNezbOhEkIU1qiQngdOheDTzy9ISyP1VbGKcj2Z3wNXWQSl5lFNate7OtvbPejypI4NT490QvgSvelavSeaYj%2FlpXXJ4VDWXhldha3Zi&X-Amz-Signature=f9fe984499031588759d69a8a4f7b12cd678e2ac9387d483451585ff8bc0a3d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
