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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC4GGQRS%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIAhPJ6IRdA2WlIlT5LUFyFdfJqlcstAXcZ7CjPFElkJAAiBKQLucf5z%2B0sqC8xJmPZmeUrthAdVQq3jqjg51UuEsQCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMidez5LAOErT5ykPWKtwD7JfXLjn4wvgD5ijmBNW7hFMBQT%2F9MJ8%2FbFIntgydk8sgfJ8RvyfLD8QOcQmx3qeM%2FK1orbxmQ6NPmxh9dNDeAB5DqcKt1rJekMCcEjaOoGwqxOULVTorhxxmy4jwNZlkE8Gpk2PAwzFmXKPv1yh4gdSwgeZPU6Mh3NNRIXluWHPCs6rEAvqw8qnIKsVE3xvzTIcRrmZWGjF5SR8FPGX2nZSV4LYstUsXVdgcP9SZ18ZmqtsSJCRUVwYuISfRP3yfY%2FW3HehmscqNKBkya9LG7q6duFNgqqewFCZ2vvem5HoJSXSMa8sK%2FBvFpSLOB8iZgLPWjRVe0fsFQLfYLmljtxlHnWDshwAoB%2FwWB4YEIZLswbudTNZbIdsnfUwSKdwTsD%2FUry13eC1FAs4dxYVCvAUl6JvC9CJ1yJgG19Vd8WEz6QFZ4bVM4v80gehumsSoM9sMhZR1JNJi%2BhQg8Jx144nVaN9ZHWq8sODM4%2FnNycBnxupdB5XJOHt%2Fxi%2B1TWIIpvYOjtq7ZwIa14jttAOZeoP6c5d%2BzApYDDCLoohYX6Cnyjw%2BqGxIB5EatXAuP16%2BgN%2FtbTXNDCOrHoSRU63ZAupCmOd48sjPgMvupi8JbQuLV0z%2FYIt7jF0DNBEwyvC4wQY6pgFOjHeONiSz3MQOeqvYd7EGmnS5VgDg2FxHGO%2FGhqnJ2Z3sHa7XDzGiJtxDjKD6EQ5mO65YVaiYKjoyfSQXG746JS8IS2Z0IzghWamedrIeS46F4hIiDqplE3L0n6gdh3MgT6XiIasfBM7B8djBb64ma%2BQmDTloN3CxWN8sFuyX1xrbBVA28Zjqk9jHPo%2BLtla8k%2FWNc5AwoZWw4uJtSzpOwjJshMJU&X-Amz-Signature=f157900f4cdf5904b1d8e4505d37e7b3ab017128ff41bfd3d97a129c7cbe1ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC4GGQRS%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIAhPJ6IRdA2WlIlT5LUFyFdfJqlcstAXcZ7CjPFElkJAAiBKQLucf5z%2B0sqC8xJmPZmeUrthAdVQq3jqjg51UuEsQCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMidez5LAOErT5ykPWKtwD7JfXLjn4wvgD5ijmBNW7hFMBQT%2F9MJ8%2FbFIntgydk8sgfJ8RvyfLD8QOcQmx3qeM%2FK1orbxmQ6NPmxh9dNDeAB5DqcKt1rJekMCcEjaOoGwqxOULVTorhxxmy4jwNZlkE8Gpk2PAwzFmXKPv1yh4gdSwgeZPU6Mh3NNRIXluWHPCs6rEAvqw8qnIKsVE3xvzTIcRrmZWGjF5SR8FPGX2nZSV4LYstUsXVdgcP9SZ18ZmqtsSJCRUVwYuISfRP3yfY%2FW3HehmscqNKBkya9LG7q6duFNgqqewFCZ2vvem5HoJSXSMa8sK%2FBvFpSLOB8iZgLPWjRVe0fsFQLfYLmljtxlHnWDshwAoB%2FwWB4YEIZLswbudTNZbIdsnfUwSKdwTsD%2FUry13eC1FAs4dxYVCvAUl6JvC9CJ1yJgG19Vd8WEz6QFZ4bVM4v80gehumsSoM9sMhZR1JNJi%2BhQg8Jx144nVaN9ZHWq8sODM4%2FnNycBnxupdB5XJOHt%2Fxi%2B1TWIIpvYOjtq7ZwIa14jttAOZeoP6c5d%2BzApYDDCLoohYX6Cnyjw%2BqGxIB5EatXAuP16%2BgN%2FtbTXNDCOrHoSRU63ZAupCmOd48sjPgMvupi8JbQuLV0z%2FYIt7jF0DNBEwyvC4wQY6pgFOjHeONiSz3MQOeqvYd7EGmnS5VgDg2FxHGO%2FGhqnJ2Z3sHa7XDzGiJtxDjKD6EQ5mO65YVaiYKjoyfSQXG746JS8IS2Z0IzghWamedrIeS46F4hIiDqplE3L0n6gdh3MgT6XiIasfBM7B8djBb64ma%2BQmDTloN3CxWN8sFuyX1xrbBVA28Zjqk9jHPo%2BLtla8k%2FWNc5AwoZWw4uJtSzpOwjJshMJU&X-Amz-Signature=f3b4b10ccea02ef9641b30127e74cbcb18cd9ad705edde883517ee1f3bf20c81&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
