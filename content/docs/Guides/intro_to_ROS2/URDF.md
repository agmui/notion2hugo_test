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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC2CS7F3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICllTEBcft%2BUYtjUfp4rj0Us%2F7loK9FocC1%2F%2BrGN7hZjAiBfxVUV40SteKnYfoJK5lLB5x2zjLuqE8UmORY%2F8OdrAyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMmmti9poV%2FYZi1YnnKtwDtcD6Mz4A5TI%2BaDkAPUoPSK6U1QnDuYaPqDI4kiK96w%2BUv6a70tDC7t9FN0Yk71KsOEw4ajmZ0kgriDqQ%2Fz8dJ4tXu1zFUga1wKmTXGrJecrUbdNpLnHrkLrJo2ujs4ySN1EIAEcppOivZ8NpVMHwWKljJ10DxgIkt1%2Fj0bXwIwJ7RAjpbKc4PiAdd01EBr2gOsT3RoeTcMsWsqf9hbzMBkG%2FDVyAHprKf2D3ZR%2F9LLhYetWv2e4ZGdyzAWpLQB1lNVwi1J7DRMms%2FAl6qhyabmPJBm%2BF7gNRu5C%2Fu9f7aTTN4vlZkOgo3atIW5tP2HLEW8dy8n7QXXbKkHKXqsW05UW2n7aeWdBpUgMkGKv%2BbQ7B5drCeD4oVlnxjPs4jZlbbD59jxuPBgKagn0JuloRzJqTPJfde48Ma5hYFJBYZkzUPxYE1mcmMsvxBW9ll0PuwAgSE%2FtmOrUaCZIXhokskHAA467EfyGOlKtdw1hsBigVHcefGrMA1sFPYytMMf8ulZsDUn8f8bmxlwgm%2FY0VNeXAwYnxZTZyWChYHg84nF9O8crbT9n%2F6h%2BdWjMsiRPpvHaBKrC7dva0W9zXiM%2BHPKOCppk%2F%2FKgyJvVtpCU5LNMuOCOYaziASjQBnnowpJWgwwY6pgF7ZTie7MXXDtzA2dk%2BfHENMuwSR%2FE0fC3KVa77vrK3rLX11VpU7Jhy6m0HOQFj9z1YSssbbS0OggaX204WsQuAtcHCbtpoWDMs1j6HT08hdA%2FeFjbQ5AQg1bFqqqqhweubA8zm4ZsvE1MUE0zrlHkLYmB4weR%2FvFi9zjwIVdFbNY9t4h7X8GBOf%2Ftjm0doKWTE927mbQMXEpyl7aaDnRqt92U7%2FWV0&X-Amz-Signature=7b176da39c4cbd1cee7b63f94bfe24fdf9277d2ca193ad0de53258df605cbe24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC2CS7F3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICllTEBcft%2BUYtjUfp4rj0Us%2F7loK9FocC1%2F%2BrGN7hZjAiBfxVUV40SteKnYfoJK5lLB5x2zjLuqE8UmORY%2F8OdrAyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMmmti9poV%2FYZi1YnnKtwDtcD6Mz4A5TI%2BaDkAPUoPSK6U1QnDuYaPqDI4kiK96w%2BUv6a70tDC7t9FN0Yk71KsOEw4ajmZ0kgriDqQ%2Fz8dJ4tXu1zFUga1wKmTXGrJecrUbdNpLnHrkLrJo2ujs4ySN1EIAEcppOivZ8NpVMHwWKljJ10DxgIkt1%2Fj0bXwIwJ7RAjpbKc4PiAdd01EBr2gOsT3RoeTcMsWsqf9hbzMBkG%2FDVyAHprKf2D3ZR%2F9LLhYetWv2e4ZGdyzAWpLQB1lNVwi1J7DRMms%2FAl6qhyabmPJBm%2BF7gNRu5C%2Fu9f7aTTN4vlZkOgo3atIW5tP2HLEW8dy8n7QXXbKkHKXqsW05UW2n7aeWdBpUgMkGKv%2BbQ7B5drCeD4oVlnxjPs4jZlbbD59jxuPBgKagn0JuloRzJqTPJfde48Ma5hYFJBYZkzUPxYE1mcmMsvxBW9ll0PuwAgSE%2FtmOrUaCZIXhokskHAA467EfyGOlKtdw1hsBigVHcefGrMA1sFPYytMMf8ulZsDUn8f8bmxlwgm%2FY0VNeXAwYnxZTZyWChYHg84nF9O8crbT9n%2F6h%2BdWjMsiRPpvHaBKrC7dva0W9zXiM%2BHPKOCppk%2F%2FKgyJvVtpCU5LNMuOCOYaziASjQBnnowpJWgwwY6pgF7ZTie7MXXDtzA2dk%2BfHENMuwSR%2FE0fC3KVa77vrK3rLX11VpU7Jhy6m0HOQFj9z1YSssbbS0OggaX204WsQuAtcHCbtpoWDMs1j6HT08hdA%2FeFjbQ5AQg1bFqqqqhweubA8zm4ZsvE1MUE0zrlHkLYmB4weR%2FvFi9zjwIVdFbNY9t4h7X8GBOf%2Ftjm0doKWTE927mbQMXEpyl7aaDnRqt92U7%2FWV0&X-Amz-Signature=eb0097973ee5efabeae6d2dd4f1bb096992da3657507abe6f801ae769da8367a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
