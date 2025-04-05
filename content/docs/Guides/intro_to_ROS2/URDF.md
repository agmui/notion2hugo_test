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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPF3RMZ7%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlO2axc6tDkP4po3Stz7WcZnNf0Iw3%2FLmo6RQlOjh81gIgMbb8eJVzO%2BJIcTs7VUG3Mjvizu2MBYA9mePVnYPCA%2BYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDA2HgNTL%2Bby0omAXdCrcA83rezYr8c%2BfyXwB02uTYxCGsOE2r9D9a8ryS0wj%2BZGtMhtU4RButCgegc7CO3wHm4BPgZ2dGwL36qJc1%2F5Oo6rHCREH5U2bZa23q6qZSL4KPxuXwdpcmvSjwqh4sEhle%2B9fVCllMQnnqYHFswujoEBWZu6BTcvHZNVx6UTU%2FL3lhSUx8uean7gVTaE3TpQGrzKSIKONzoDoa6aK7kfGX47amzxuThev0KvGwMCQ72FctOs41%2BdI79Y8VE9QTbfqrVZct7ghivKPi11AevVPl2x12%2B8prdoa%2BMczshQb2RKbyFBlzXDoiZYvjARXom7TjjXAOESc8BneQDgZVIa1APNfKyF5jnUVbM7Y6XvzCLut2i72U5%2FF8mG42t7zcGqOfGIcJg9mWCsZRkHubBQoomnng7Y77S0nosU2xyfSC%2FQqzF2Amf1H5CuZ5Ll6lWxCU0ufVvDcn4qHQF9P%2Bz78Ce3gcDmodZs0iQLrShy%2B9vYuNm1y7YZcOFEeO7B4IzIazp%2Bf5KlP0bZ%2FWGs6DqNk5hyrsU%2BwNEaQahC8pr5X5v2JGheFQXU51SOTdNmWHS7mIsGgMghn2W%2FKcP%2FjoaPmNJnFc9YXYYBzxTKTPrkbeWaagPyS2rlnXds0gvXyMPfkw78GOqUBep07lHLsLAQCWbG6IznVflhBeyU5hGXvIJDez40QqWFfpbg2ppwPugukY%2Bql105ZiZ9m8XpdaBPJcEmKZO97HjNlCAV5y7PIC9u4tiF5ZgSrzxMtwjlJI3Cc9Gz79s%2B236NPnGxKEAhC4ycy4mfGdzDmaHcES3fRA%2F7a2N2SzrJNDRmmbGWoqK821BsfQnPmcnjik6GTYhJx8Ul2A%2BbPKbz2BAyK&X-Amz-Signature=e78cb45d6adefa16d1171a0f895026e4d18e797a8602e6005272af491028f0d5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPF3RMZ7%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlO2axc6tDkP4po3Stz7WcZnNf0Iw3%2FLmo6RQlOjh81gIgMbb8eJVzO%2BJIcTs7VUG3Mjvizu2MBYA9mePVnYPCA%2BYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDA2HgNTL%2Bby0omAXdCrcA83rezYr8c%2BfyXwB02uTYxCGsOE2r9D9a8ryS0wj%2BZGtMhtU4RButCgegc7CO3wHm4BPgZ2dGwL36qJc1%2F5Oo6rHCREH5U2bZa23q6qZSL4KPxuXwdpcmvSjwqh4sEhle%2B9fVCllMQnnqYHFswujoEBWZu6BTcvHZNVx6UTU%2FL3lhSUx8uean7gVTaE3TpQGrzKSIKONzoDoa6aK7kfGX47amzxuThev0KvGwMCQ72FctOs41%2BdI79Y8VE9QTbfqrVZct7ghivKPi11AevVPl2x12%2B8prdoa%2BMczshQb2RKbyFBlzXDoiZYvjARXom7TjjXAOESc8BneQDgZVIa1APNfKyF5jnUVbM7Y6XvzCLut2i72U5%2FF8mG42t7zcGqOfGIcJg9mWCsZRkHubBQoomnng7Y77S0nosU2xyfSC%2FQqzF2Amf1H5CuZ5Ll6lWxCU0ufVvDcn4qHQF9P%2Bz78Ce3gcDmodZs0iQLrShy%2B9vYuNm1y7YZcOFEeO7B4IzIazp%2Bf5KlP0bZ%2FWGs6DqNk5hyrsU%2BwNEaQahC8pr5X5v2JGheFQXU51SOTdNmWHS7mIsGgMghn2W%2FKcP%2FjoaPmNJnFc9YXYYBzxTKTPrkbeWaagPyS2rlnXds0gvXyMPfkw78GOqUBep07lHLsLAQCWbG6IznVflhBeyU5hGXvIJDez40QqWFfpbg2ppwPugukY%2Bql105ZiZ9m8XpdaBPJcEmKZO97HjNlCAV5y7PIC9u4tiF5ZgSrzxMtwjlJI3Cc9Gz79s%2B236NPnGxKEAhC4ycy4mfGdzDmaHcES3fRA%2F7a2N2SzrJNDRmmbGWoqK821BsfQnPmcnjik6GTYhJx8Ul2A%2BbPKbz2BAyK&X-Amz-Signature=8eae3c5263b16d261be5843b1995802a4ea29698113a484a25bb6694e32a9d6e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
