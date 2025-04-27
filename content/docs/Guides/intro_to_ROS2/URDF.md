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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ESLPWW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZa5isSRbjs84zotqphPvdO6YnRjuK4c%2FkyduKEMQk6AiAdY9QuZDE5lU8CCYxsxxRyOp1RAvBVyAv%2FHsptAKKczSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMsufFxmxlIk%2FXbndsKtwDwjgJ8C%2FnKHxx3OZW6XlFKS7f6ccjdP6ngg0N9N8TKGlmVqfBqEVC8Bh3CaxLMoM%2BzrS0lKmZNmgeLbEnohgnx%2FG4JRULiuxXiGRf2u9PGz2kgcMf0bNanvU26eGd8Ke0FRU%2BQmhqDMTzEdh75V0F2wKmL7pwMKpwP4NmOBTjceaiabcWodSKwuKT9KmY7Ah3IP1mlsYVB0l0WpCm1ucpG96RVk15XDc2bH67fePlhabcGzvz56DKB8aUgQwUwvCY1Ks4DSpaMzJirStwAEDkEK1uoT1DR50upG0LwzJMBRuVAgbSsuvZLNHY6xafbdSOQuSaiy0IwGR%2Fpusb3yBNaIplmmhocompnRwTUtGGqh4hODlE4qpHqVYMcpIc3wGfxc3Aflv4ppnic4FPbUd2Tu%2FmRrkN6DXvI6SEZiJu43pWYb%2BbyFqz95MKvJh97DiAhnPFbycCmuZsphaz2fzUDHjMHn1b%2F3JN2pGsbZcamxJ0OWOTzTWnzKTajaSahLoGkdk1zKhiuA0JvZ01aIttQIDg5cHr7SI4tXfRWHs%2BXnQBWcpj1kAfFjj8TLfOhmRiPnYTWBU5DbLW7sKRXPsNJK77rqZS07LLOiT%2F8lgZNyAIDrcTIJjpZvXmae4wzL%2B1wAY6pgFrncBPL9L2q1Z0HnC%2FSR%2FHW%2FzQlUEsI0JcGmppyWW59kW%2FBuhuYhQsZqewJPNTjcrBXr%2BFR%2F61FH6eonch7AqyM6DW8OkxOsK2p%2BxEO%2B95PjNWbPuc0TbY2XqQ1MjxQsLWofFJ6LbpcHnSaQp1x%2Fwz8N%2FUOY%2FLJ1GsJxcD7XAuWi62jWHoX6zTOOGOYw0cQhgE%2Fjw2pEXPBZnKyysfnIfbkFAF2rc0&X-Amz-Signature=9807861a34fa071bf5c5bc9c38f92573b3b86cadfee3168b0d7ee8573bd324a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ESLPWW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZa5isSRbjs84zotqphPvdO6YnRjuK4c%2FkyduKEMQk6AiAdY9QuZDE5lU8CCYxsxxRyOp1RAvBVyAv%2FHsptAKKczSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMsufFxmxlIk%2FXbndsKtwDwjgJ8C%2FnKHxx3OZW6XlFKS7f6ccjdP6ngg0N9N8TKGlmVqfBqEVC8Bh3CaxLMoM%2BzrS0lKmZNmgeLbEnohgnx%2FG4JRULiuxXiGRf2u9PGz2kgcMf0bNanvU26eGd8Ke0FRU%2BQmhqDMTzEdh75V0F2wKmL7pwMKpwP4NmOBTjceaiabcWodSKwuKT9KmY7Ah3IP1mlsYVB0l0WpCm1ucpG96RVk15XDc2bH67fePlhabcGzvz56DKB8aUgQwUwvCY1Ks4DSpaMzJirStwAEDkEK1uoT1DR50upG0LwzJMBRuVAgbSsuvZLNHY6xafbdSOQuSaiy0IwGR%2Fpusb3yBNaIplmmhocompnRwTUtGGqh4hODlE4qpHqVYMcpIc3wGfxc3Aflv4ppnic4FPbUd2Tu%2FmRrkN6DXvI6SEZiJu43pWYb%2BbyFqz95MKvJh97DiAhnPFbycCmuZsphaz2fzUDHjMHn1b%2F3JN2pGsbZcamxJ0OWOTzTWnzKTajaSahLoGkdk1zKhiuA0JvZ01aIttQIDg5cHr7SI4tXfRWHs%2BXnQBWcpj1kAfFjj8TLfOhmRiPnYTWBU5DbLW7sKRXPsNJK77rqZS07LLOiT%2F8lgZNyAIDrcTIJjpZvXmae4wzL%2B1wAY6pgFrncBPL9L2q1Z0HnC%2FSR%2FHW%2FzQlUEsI0JcGmppyWW59kW%2FBuhuYhQsZqewJPNTjcrBXr%2BFR%2F61FH6eonch7AqyM6DW8OkxOsK2p%2BxEO%2B95PjNWbPuc0TbY2XqQ1MjxQsLWofFJ6LbpcHnSaQp1x%2Fwz8N%2FUOY%2FLJ1GsJxcD7XAuWi62jWHoX6zTOOGOYw0cQhgE%2Fjw2pEXPBZnKyysfnIfbkFAF2rc0&X-Amz-Signature=95629336f2e60d008a6739a734b9fc8ea245d78a17887624e1d1410a23c5bdd9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
