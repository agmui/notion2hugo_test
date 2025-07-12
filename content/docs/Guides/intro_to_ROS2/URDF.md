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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V76HZQV4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuPuN5AYnrY415qQlxuHGgrNuxgUb0WRRZ5BHGC42nigIgLbJemqwPIs27czx5tKnCFwLqtklBK472CGlk4LbjM04qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx0D7Ob8cs5ZhtPfircA76G81Wew0s6j6E6hbCg7G7fPI1MwtzzRT9OaMjHkYCrociiIWvAg05%2B1LynumfmhaKAhir%2BIbFc6ooQSY2XM9YRkNr69i2o2%2Bbw4xrL1l4PtmaqWCy0LI3p0iYYXAnX3O%2BljtM2xlgfU%2Fyp9Ov9Mdl40WZB84itk2nzy2kFGufu%2BgcihD3e7KBwz2u7PRBe5b42vCHhdRZdAVFK2WoUge5CiP7zBmpPoRilhKXprgKyemey2i81DY3j0l894Kmw4RWxSAUD7dEdZ108dgT4DJRc3jIo5Zq9u9PBwu5x7Sd%2B6hSjiUKaSI6QvFnlEO9zn9jM2fEJDB5w3%2FI48MWIlyomtduV20wlshXbO4Kb0Gri1Yd%2FqxOsSlpSrtV7%2BPxdXAVFBZmNCoXGU7MzaYOsX5nG%2BJ6KSI5HJQqP4sY%2FZa6fvz0f9IgK1ydakEdKJSMwn%2FnHkkHC9CU93O5lMHBWEdi4qKnhXKsT4yF%2Fprh9hu5ehTgs2%2BvdgECiltYjjw7l9pEhODhBRkWKWP5Dcd8Gh%2BoGCu0bLgmEBVsXPl9qNGKI7aGbJYbA2CT9YgcUHvFWjKRPcLZEMeWAX7uSECGbr5c9jPkL4oOIIZGjW6RtKvFJaElhhvrwqCu90qtvMKSiyMMGOqUB1LT1lKAI98qK9%2FzMGCbvZ6oeQoh56dMONbMXhdNJTVUVFrXuIlDTz7mSuQf2WPglnFEwM5O6xcru1is8HmR7hSWDsfGB6QQLo7Iw8EQ7OJCVdPcMXLpB%2Fy0w%2BgPKHsYkdY7Q%2FCojYGHb8CYFkVb0U4YE59FOHLrSUv7x0Szwrx6LOYW1TrEh2ZkjOf8P1DRMKWCuZ8zG4Hr7H48%2BgMk7KUNTohi7&X-Amz-Signature=782a8ea5c91c0b979eebfb051b9cbe64fe37965fc50fd3c0025c9a7b0205b26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V76HZQV4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuPuN5AYnrY415qQlxuHGgrNuxgUb0WRRZ5BHGC42nigIgLbJemqwPIs27czx5tKnCFwLqtklBK472CGlk4LbjM04qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx0D7Ob8cs5ZhtPfircA76G81Wew0s6j6E6hbCg7G7fPI1MwtzzRT9OaMjHkYCrociiIWvAg05%2B1LynumfmhaKAhir%2BIbFc6ooQSY2XM9YRkNr69i2o2%2Bbw4xrL1l4PtmaqWCy0LI3p0iYYXAnX3O%2BljtM2xlgfU%2Fyp9Ov9Mdl40WZB84itk2nzy2kFGufu%2BgcihD3e7KBwz2u7PRBe5b42vCHhdRZdAVFK2WoUge5CiP7zBmpPoRilhKXprgKyemey2i81DY3j0l894Kmw4RWxSAUD7dEdZ108dgT4DJRc3jIo5Zq9u9PBwu5x7Sd%2B6hSjiUKaSI6QvFnlEO9zn9jM2fEJDB5w3%2FI48MWIlyomtduV20wlshXbO4Kb0Gri1Yd%2FqxOsSlpSrtV7%2BPxdXAVFBZmNCoXGU7MzaYOsX5nG%2BJ6KSI5HJQqP4sY%2FZa6fvz0f9IgK1ydakEdKJSMwn%2FnHkkHC9CU93O5lMHBWEdi4qKnhXKsT4yF%2Fprh9hu5ehTgs2%2BvdgECiltYjjw7l9pEhODhBRkWKWP5Dcd8Gh%2BoGCu0bLgmEBVsXPl9qNGKI7aGbJYbA2CT9YgcUHvFWjKRPcLZEMeWAX7uSECGbr5c9jPkL4oOIIZGjW6RtKvFJaElhhvrwqCu90qtvMKSiyMMGOqUB1LT1lKAI98qK9%2FzMGCbvZ6oeQoh56dMONbMXhdNJTVUVFrXuIlDTz7mSuQf2WPglnFEwM5O6xcru1is8HmR7hSWDsfGB6QQLo7Iw8EQ7OJCVdPcMXLpB%2Fy0w%2BgPKHsYkdY7Q%2FCojYGHb8CYFkVb0U4YE59FOHLrSUv7x0Szwrx6LOYW1TrEh2ZkjOf8P1DRMKWCuZ8zG4Hr7H48%2BgMk7KUNTohi7&X-Amz-Signature=67603b3271448721e0c125cb9566bec4937803406573104dccfc510e2da6efc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
