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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYIXL6OX%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhxE1jJJH9YIuRaZGzRIp9QOe%2FIStJry5BG7McUrw4GAiARyXR3yMd05XRAFnt5n9kH2PwY9We0dOEU3m8YpqdfOSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvd9TtlAqrhxRarBtKtwDrac28OAU6xGffeJlyQ330ysZ8lIwBUZ8FT4jKcKlgQtZ9%2FQTzgHQaleQC2cTWIhjZ68RD3UZqnRrhmEN%2BzDG74hdVCPlDVHXZdZ6Xp%2B46w0H4UO2KIDDjU19GTpAx6zzj4ZevCZMPskAAtjDJaiW%2BXh9q7jbHw2ixCURieCjY1%2FSHkvuNYK7I1hdSy66iLY%2BT0oIeewX%2F9lWpll1zFG4o02r0wzHIGUGRMRyPehbc5FGMY%2BGQ6HvP4InGLNTqPdKGYNdzC574IJOhf2aRyfRBFOUtCbhbuZ6SnlzRJU%2ByGw%2F%2Bxbjb3TMwAOAoEX885wM4Eu0XDfDBN50Q4DLIqRgp9YL1GjKenaevPJJY12mlNWgaadhptJjNpGLazgNp2ZqOFSAzX7yJQUdVhJsQ88gI5gYSsEaZ6R1yyq8cWRNZyRUBmjkVpmi3Q23ptjFU3pvpI%2FSrPhsIus6qCAN70hw11GiODqDO%2BUt1tPGCFztPlkuqFU3IYByhuXanaOqKAgxy8Z6Hia%2BMM4OMt85liKqdiv%2Fbvd9DP%2BKDEkJJZYdaEAtLK3IfkhncdPlledQ5XW1oXj4lgchcR8kVqTUwM2200XN4DDfcUxUNBSH9yoeZxqKaVZwUFT%2FhGchIpAw6f3fwQY6pgEAmqPhZqfkX%2BN4L2hIg8FTqQ8%2Fvtpsi11bqSgtwNXxb%2FRqBReXU5lJoOzA0AoOx1xJwrtqmCmizAy1vJ6b5P8WrryfnkMU4sjgAh7L5RR4JpMNUcW78TCmdvTEjB6rT5mvua5VNU2m1SgVTWGCEk6AsiHkFavQh3r1AjyLnzV%2BL7fNl97ub8sABDU4dxWhmV2eau9qTD5c9MDPvZWQBWvAxjINNpRL&X-Amz-Signature=89680007c60db10ec00f4e09c6c054a0387834893e54da2ebe061a3813e4c316&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYIXL6OX%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhxE1jJJH9YIuRaZGzRIp9QOe%2FIStJry5BG7McUrw4GAiARyXR3yMd05XRAFnt5n9kH2PwY9We0dOEU3m8YpqdfOSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvd9TtlAqrhxRarBtKtwDrac28OAU6xGffeJlyQ330ysZ8lIwBUZ8FT4jKcKlgQtZ9%2FQTzgHQaleQC2cTWIhjZ68RD3UZqnRrhmEN%2BzDG74hdVCPlDVHXZdZ6Xp%2B46w0H4UO2KIDDjU19GTpAx6zzj4ZevCZMPskAAtjDJaiW%2BXh9q7jbHw2ixCURieCjY1%2FSHkvuNYK7I1hdSy66iLY%2BT0oIeewX%2F9lWpll1zFG4o02r0wzHIGUGRMRyPehbc5FGMY%2BGQ6HvP4InGLNTqPdKGYNdzC574IJOhf2aRyfRBFOUtCbhbuZ6SnlzRJU%2ByGw%2F%2Bxbjb3TMwAOAoEX885wM4Eu0XDfDBN50Q4DLIqRgp9YL1GjKenaevPJJY12mlNWgaadhptJjNpGLazgNp2ZqOFSAzX7yJQUdVhJsQ88gI5gYSsEaZ6R1yyq8cWRNZyRUBmjkVpmi3Q23ptjFU3pvpI%2FSrPhsIus6qCAN70hw11GiODqDO%2BUt1tPGCFztPlkuqFU3IYByhuXanaOqKAgxy8Z6Hia%2BMM4OMt85liKqdiv%2Fbvd9DP%2BKDEkJJZYdaEAtLK3IfkhncdPlledQ5XW1oXj4lgchcR8kVqTUwM2200XN4DDfcUxUNBSH9yoeZxqKaVZwUFT%2FhGchIpAw6f3fwQY6pgEAmqPhZqfkX%2BN4L2hIg8FTqQ8%2Fvtpsi11bqSgtwNXxb%2FRqBReXU5lJoOzA0AoOx1xJwrtqmCmizAy1vJ6b5P8WrryfnkMU4sjgAh7L5RR4JpMNUcW78TCmdvTEjB6rT5mvua5VNU2m1SgVTWGCEk6AsiHkFavQh3r1AjyLnzV%2BL7fNl97ub8sABDU4dxWhmV2eau9qTD5c9MDPvZWQBWvAxjINNpRL&X-Amz-Signature=1944f723849f15156b83ab3f5b2ae8075b49f42999895f0ca9010c20880ecff4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
