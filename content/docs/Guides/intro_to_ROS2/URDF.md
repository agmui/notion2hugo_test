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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWS57SN%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhlBUX91wIjKpvdhf0KL6%2F5Cwjj9KysR1d40O6%2BzyE8AIhAPd%2FgakM33jZWF4t6H21P5OYZFb6drs1308%2BmLppPDyhKv8DCE8QABoMNjM3NDIzMTgzODA1IgzP3A70ifTOOmEhop8q3AMcSPcpFtIfOW2SPRqK75eqvamBfPvU%2BD8qHK1FrYCaIilYFLOJSUpqEwimLS1ObczZJeVgQw7QW%2B1tHUyTUIlzNsvB%2BzgpMaEsgt1YOJVZdD%2BFyxoBQ85Mg1TmsuVFwGOLwxQe%2F%2B%2FgtQRWG2zw30xZjhMl8yQdSQImxOpKxVeB%2FGfoQFPrO54kovTY5H22%2BYH9625NcSVc6OQdQDlsSBXbhO1qdvgDZ3WfMOjDBCEiR64orL5t4sNqVxbMcnhyeD310uJOR6OMeXUXur%2FQMjD5FJ4ZFr6lFj%2FZmoG06hDAjBHlQck%2FtlHBumF90EtztAQJaGigpeDSe%2Fb%2F3Cn%2FzvICwN%2F6XLRjpHbCtWRGR6zg7rBlI570dsT%2B5W5Mg1agIDbrwpGRtmcu%2FOVCfFeBvA%2BJ62e6%2BrpzHm09B11%2FiF05GhS0t81Ebr4BrU5alW0DGVmP2gFfx5dExReWgDS%2F64f9tMGHuFwwUqQpIwN8dlV9DdoeFaW4%2BIZQUYksV1OoGSJ3mIdKsYuiFbqYLfPPeFn7uC4j%2FyKOMUVl7B3bWNwRhI%2FvMBRbqf6vtglnXevMocMLDf6MkRKoZt5gQ7DQTUnZO6U3EX3QFvtunAzdY6iHiffK74GN3RLDtibO%2BjCzwOK%2BBjqkATFslTxyru6zX66cnso0nTLjdTHyutCSGWF5lJrWQGKTn8h8J8zMfWIxRSLrH%2Bb6Sey5IAoMvPWCSBvTpUmnKGJFLsGNqWzZ2VJTud9wZzPUe2bXGAU73RG%2FzgLmSEbXqsXzo2IJCwc8D7dUgXyq5NfmK9nHTTJ%2FuaLSD9dmhn%2Bnme%2FSmGzugLnnzdYoS2vAnw9YCmhAvKf1u2qA2oe5oUYXtIwR&X-Amz-Signature=1fd0a45249dddf984c9666149f56785642a2ab6a57b9c57742b7fdd4dbf63539&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWS57SN%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhlBUX91wIjKpvdhf0KL6%2F5Cwjj9KysR1d40O6%2BzyE8AIhAPd%2FgakM33jZWF4t6H21P5OYZFb6drs1308%2BmLppPDyhKv8DCE8QABoMNjM3NDIzMTgzODA1IgzP3A70ifTOOmEhop8q3AMcSPcpFtIfOW2SPRqK75eqvamBfPvU%2BD8qHK1FrYCaIilYFLOJSUpqEwimLS1ObczZJeVgQw7QW%2B1tHUyTUIlzNsvB%2BzgpMaEsgt1YOJVZdD%2BFyxoBQ85Mg1TmsuVFwGOLwxQe%2F%2B%2FgtQRWG2zw30xZjhMl8yQdSQImxOpKxVeB%2FGfoQFPrO54kovTY5H22%2BYH9625NcSVc6OQdQDlsSBXbhO1qdvgDZ3WfMOjDBCEiR64orL5t4sNqVxbMcnhyeD310uJOR6OMeXUXur%2FQMjD5FJ4ZFr6lFj%2FZmoG06hDAjBHlQck%2FtlHBumF90EtztAQJaGigpeDSe%2Fb%2F3Cn%2FzvICwN%2F6XLRjpHbCtWRGR6zg7rBlI570dsT%2B5W5Mg1agIDbrwpGRtmcu%2FOVCfFeBvA%2BJ62e6%2BrpzHm09B11%2FiF05GhS0t81Ebr4BrU5alW0DGVmP2gFfx5dExReWgDS%2F64f9tMGHuFwwUqQpIwN8dlV9DdoeFaW4%2BIZQUYksV1OoGSJ3mIdKsYuiFbqYLfPPeFn7uC4j%2FyKOMUVl7B3bWNwRhI%2FvMBRbqf6vtglnXevMocMLDf6MkRKoZt5gQ7DQTUnZO6U3EX3QFvtunAzdY6iHiffK74GN3RLDtibO%2BjCzwOK%2BBjqkATFslTxyru6zX66cnso0nTLjdTHyutCSGWF5lJrWQGKTn8h8J8zMfWIxRSLrH%2Bb6Sey5IAoMvPWCSBvTpUmnKGJFLsGNqWzZ2VJTud9wZzPUe2bXGAU73RG%2FzgLmSEbXqsXzo2IJCwc8D7dUgXyq5NfmK9nHTTJ%2FuaLSD9dmhn%2Bnme%2FSmGzugLnnzdYoS2vAnw9YCmhAvKf1u2qA2oe5oUYXtIwR&X-Amz-Signature=378e73956f0485aee8fe4ff75a5bfd4533ae5b2cafa6e5f88e6ad7b7fdc444ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
