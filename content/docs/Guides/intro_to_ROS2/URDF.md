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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2WXVKHI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdwNqzZjEIwlArYImd82WT5SDpveVfrmWz3imsKHpI5AIhAOshBdWqCK3GPNKb5mBNvYQ4wsk%2FlbvlJFMRYCeZcImiKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0s4QD3LZCQl%2BoJDgq3AOf1PgeOR3saG%2FSIrWMhasDg2DiqWsGmqyhS9Kze%2F%2FNYdkfNeyc4vQHlSpu1RmlqrS%2BqbUwEjrzO9VhV1kRxoLLMPlYfeU4MawZTUimHISZz37sA1LPTOV4zAdqst%2FgJ8maS4y6Czj8yrbPLfOZAiyf95Ug%2BiMioEBvjXQ%2FQPOQUO3ldRBFD6Hr1CLgpFVUAMSyDFbs156pyd4pojjE6kZYLZl2gnGzE1fo12gaF7m%2FyDjUhR2fZFJBMC1319at1rHT03RG638ph7edUC56DFi2OKJGMY9XLVPQ6QvlLHA96LM2BcjAcerBK%2Fl2B68VdD%2BTxIcZ8yMQxUOGUVlDK4XgtIm40k5Sk%2FS7K3nRS6OZuEpAvYU2EEPIhnP7ZUw7HWLljJX27hq6limsbmFVutAaSSxFsJvJJxC5SUvXe5uUleKv1nJi%2BkLxRV1lSSPzk6zEkKH26eiXLq7NnRH1L7S3hG3PHMGrUO306RvVYSqldPI8L6GdmOVfoWhf8n%2BupKyHQ%2FjT0RZamHP8do0g2EI6vwBmWapWkuDGfeGlmU87cqKYGjnLr%2FzYU1YuCENJqMmLwHm1y600kmSsukeJPbPNzu%2BzfTXa7V3ZOmEvG4TbKv4eqTW6qOYsUZJuCDDB19u9BjqkAcuP5%2BdKPdMAf%2BuRGzwLCW5%2F0Of1nj4TYT6dig3yWYYrHGw2%2FWBsHNwzgYVQL4O1UoBQ53kbyPX0wEeuyVg2OJOOg2LakKxpJTHziCpStRqlm5rGUqYh1mpxLSDV%2BjAAxxJ6he%2BoA00P1PWgXBUzc20LVE%2FGYL1sipWKu%2BglXMgDKLNHdRCdc5KtHXN0e3Y7O9OorC%2FwIRbH8fvVWmG8Jw%2FiM8Wg&X-Amz-Signature=0cfdd81b2fa19286d1265c4fd8bb96aea79e652690a96ead930648a9f2c3ca2d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2WXVKHI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdwNqzZjEIwlArYImd82WT5SDpveVfrmWz3imsKHpI5AIhAOshBdWqCK3GPNKb5mBNvYQ4wsk%2FlbvlJFMRYCeZcImiKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0s4QD3LZCQl%2BoJDgq3AOf1PgeOR3saG%2FSIrWMhasDg2DiqWsGmqyhS9Kze%2F%2FNYdkfNeyc4vQHlSpu1RmlqrS%2BqbUwEjrzO9VhV1kRxoLLMPlYfeU4MawZTUimHISZz37sA1LPTOV4zAdqst%2FgJ8maS4y6Czj8yrbPLfOZAiyf95Ug%2BiMioEBvjXQ%2FQPOQUO3ldRBFD6Hr1CLgpFVUAMSyDFbs156pyd4pojjE6kZYLZl2gnGzE1fo12gaF7m%2FyDjUhR2fZFJBMC1319at1rHT03RG638ph7edUC56DFi2OKJGMY9XLVPQ6QvlLHA96LM2BcjAcerBK%2Fl2B68VdD%2BTxIcZ8yMQxUOGUVlDK4XgtIm40k5Sk%2FS7K3nRS6OZuEpAvYU2EEPIhnP7ZUw7HWLljJX27hq6limsbmFVutAaSSxFsJvJJxC5SUvXe5uUleKv1nJi%2BkLxRV1lSSPzk6zEkKH26eiXLq7NnRH1L7S3hG3PHMGrUO306RvVYSqldPI8L6GdmOVfoWhf8n%2BupKyHQ%2FjT0RZamHP8do0g2EI6vwBmWapWkuDGfeGlmU87cqKYGjnLr%2FzYU1YuCENJqMmLwHm1y600kmSsukeJPbPNzu%2BzfTXa7V3ZOmEvG4TbKv4eqTW6qOYsUZJuCDDB19u9BjqkAcuP5%2BdKPdMAf%2BuRGzwLCW5%2F0Of1nj4TYT6dig3yWYYrHGw2%2FWBsHNwzgYVQL4O1UoBQ53kbyPX0wEeuyVg2OJOOg2LakKxpJTHziCpStRqlm5rGUqYh1mpxLSDV%2BjAAxxJ6he%2BoA00P1PWgXBUzc20LVE%2FGYL1sipWKu%2BglXMgDKLNHdRCdc5KtHXN0e3Y7O9OorC%2FwIRbH8fvVWmG8Jw%2FiM8Wg&X-Amz-Signature=19405d3d73dcc2c622fe18041f0beddfb34184bd8bf2a0ac025cf83614947279&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
