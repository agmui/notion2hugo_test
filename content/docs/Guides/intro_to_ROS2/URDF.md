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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEAUHZIA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgA0ggmocuB00tQ%2BFAGvwJWdpruR3jNdQo5pD3r5IoCAiAFJk%2Fe1aUOLjij3n9nDw1IHGK%2BgSTQlFJTy4sEvAldNir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM3JuyH%2BPRn9XZEeAIKtwDjgN4PhkmUMWIpLFt6fZBEkea8aoqIrnBYvWzJJeHa3Ma03sWx5SbbrNph0LkAnQOCMboq9HODoOVG0hxtl%2Btkv5%2FZz%2BFnzctLdssyIjljSUBWcBSG43hIED9Uyu5Ase4viGkHOjCC2Ch9i7pQJEY2FKn6TYkeihwUS9KCpLIHdd6dBb%2Frj9iaxwEwShvV9PnCJcEsDMzQ%2BJhBE8p9d%2BdbQb1w7ZRd8v8uhOeraCZTmmJ90avwI3NS6In3eUZO3qTe9oBafoUJ5BzYJDgZ%2FkFhqWGr2wGmmXc8jWY%2BMs0u0LKh0POZpdNtBbsdWt83MATK28vgVlrtHdIbvY4tGrOHW3nV2JwabCH2dJtQuHuRRdD1m7VJeNUcBZZPHSKrNA30ZcgN4rsYgiT5xbvj7ULyMkczyglv2hr369ibg5sIWZbxtN5IRm4omBQk2bkjlq6kjGY%2FRPwUSm8p%2BoQA%2FluRlGOE2VWpQc%2BIy2guBYexceHcmyrsUf%2BlDOKzsdPV0RyfoVMkspdcMSqufZFZKCjNUVMZmUj%2FIoC%2Bp6fYZLH15yC%2F%2Fn3PRy4uGJ8PPLXZ8HTGKQLKYDOsuClwNX5Ox9w5OjH7lFnp1nJJppgIjDVK86NeuaKsu5woHiWQY0wmrSdwQY6pgG7%2FrFi3BzcePWdl2OmsycMivZCz%2BdhTMzt8KA59mUYIaURwnFHi2m7x%2Byip7dFIqxAdnmKVoHyzvP6Qdba3LxovEFHv5nabHyTaUG25BjnLNIDH86dlSONtJttEpJvNkWrYQMe46KPY4K4gp4JQxoEjIs0N2yvKQTF0mZ5DTKFFU5DqytRTyaY5%2BIZqwN1gXVxhmr6SIkHhzbkvgI1edQkfWIhNxfl&X-Amz-Signature=12bfda57fc261c64f0b3fdb2794a2ee5dbc96fd9c4cd497d066a569641ef193a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEAUHZIA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgA0ggmocuB00tQ%2BFAGvwJWdpruR3jNdQo5pD3r5IoCAiAFJk%2Fe1aUOLjij3n9nDw1IHGK%2BgSTQlFJTy4sEvAldNir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM3JuyH%2BPRn9XZEeAIKtwDjgN4PhkmUMWIpLFt6fZBEkea8aoqIrnBYvWzJJeHa3Ma03sWx5SbbrNph0LkAnQOCMboq9HODoOVG0hxtl%2Btkv5%2FZz%2BFnzctLdssyIjljSUBWcBSG43hIED9Uyu5Ase4viGkHOjCC2Ch9i7pQJEY2FKn6TYkeihwUS9KCpLIHdd6dBb%2Frj9iaxwEwShvV9PnCJcEsDMzQ%2BJhBE8p9d%2BdbQb1w7ZRd8v8uhOeraCZTmmJ90avwI3NS6In3eUZO3qTe9oBafoUJ5BzYJDgZ%2FkFhqWGr2wGmmXc8jWY%2BMs0u0LKh0POZpdNtBbsdWt83MATK28vgVlrtHdIbvY4tGrOHW3nV2JwabCH2dJtQuHuRRdD1m7VJeNUcBZZPHSKrNA30ZcgN4rsYgiT5xbvj7ULyMkczyglv2hr369ibg5sIWZbxtN5IRm4omBQk2bkjlq6kjGY%2FRPwUSm8p%2BoQA%2FluRlGOE2VWpQc%2BIy2guBYexceHcmyrsUf%2BlDOKzsdPV0RyfoVMkspdcMSqufZFZKCjNUVMZmUj%2FIoC%2Bp6fYZLH15yC%2F%2Fn3PRy4uGJ8PPLXZ8HTGKQLKYDOsuClwNX5Ox9w5OjH7lFnp1nJJppgIjDVK86NeuaKsu5woHiWQY0wmrSdwQY6pgG7%2FrFi3BzcePWdl2OmsycMivZCz%2BdhTMzt8KA59mUYIaURwnFHi2m7x%2Byip7dFIqxAdnmKVoHyzvP6Qdba3LxovEFHv5nabHyTaUG25BjnLNIDH86dlSONtJttEpJvNkWrYQMe46KPY4K4gp4JQxoEjIs0N2yvKQTF0mZ5DTKFFU5DqytRTyaY5%2BIZqwN1gXVxhmr6SIkHhzbkvgI1edQkfWIhNxfl&X-Amz-Signature=6e5751f4cd5475aff766727b8d58aa83812adaafdd868f3023f09c8f47d6e5c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
