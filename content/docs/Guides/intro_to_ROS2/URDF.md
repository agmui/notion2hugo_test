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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KS52ODG%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIDIxdjbv0f19tH8fS2zlgviaZVDf1aWNmTuVVPp3u5ttAiEAm3Zc88ypp50SKVGQ36tHTavinGrsqHFOeRJlbdO5K5Eq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDy%2F4v86N9e7Xh1iTCrcA7A3tMjlThLvrJ1tiqY73xmpcRmYJCrt%2BrhGTh3EgYgzCZnk9Pvqe8FMifJjuafEa8POJdOM4mK5ozVAy7pIkW64X8ZNhJhzRZEqHCdQBVhpkMe5GVolX9CxBZ8kryIWrVp2zmGwTt8n75rVL465eysJpGcTxMVgFihPhoTfmgttjkErlhT4tehEb5wUiAkYQiddQ7qcY2KzHxmpulMwz1z%2Fjgvh6b0NvyT0yXlVQBOfdKQSPKGtgxKcuoqjOaFVsQ81qqOF7jK12X5AqcrnvxaavNMjE28r%2B%2BNUtJUfsli3iS1cA8SLih3AZWlxVkk9hyYiEVur6JzcnO1iOQFz6n4ocdASpCZTjhFuEV80JslT%2FAqDU5NX65%2Fi1bXdzquuu%2F1x6B5MvmyTyoAYJJYYQiLlDPQTDVrMt3gCFiL%2BUO6%2BJiZGxthHVDInF9zFrvCDr9VJK7ggROYnTeAp2pArGocSdVFvJLUcL%2BIYt48yqecg0fqrYEkRaD9EDZqTThDGuKir6gFRMPSqqmEYqUKVQQLwM6WItrGP28Itns6L08Bn%2FsZ%2FPnD%2F1kWXkGYxNWQITUqnHv%2BPjEIN2BpKNZbUdfHaZB%2BTzYxoA9M4aINcxcMxxtnEp4yOflFksx7JMJPrvL0GOqUBZHwZiMaEwmh5WvKI6gJ6cgEVUGqXUNvG0Q3ZjvUd1potOsMKxXkvaBuk6G3VDkmh8e1J3IQQf%2FxFYG73WwAfrOKtQTuwJvGE35Gxdbsj%2FiqhKRVtShYRK5OFClC2UOY%2BfxFB0v7PlCm%2B0coZ8MXrok5gYEj%2B5RcH3qbPR8VkQJ0l44xYeIGUfXvVe5jICKTJ4v3LJxgP%2Fa7mbmsvqi62S%2FcCbGrS&X-Amz-Signature=c39ce81317165561e33669af7a04f4e82296dcb3a532b3fc928f7005ab468c0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KS52ODG%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIDIxdjbv0f19tH8fS2zlgviaZVDf1aWNmTuVVPp3u5ttAiEAm3Zc88ypp50SKVGQ36tHTavinGrsqHFOeRJlbdO5K5Eq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDy%2F4v86N9e7Xh1iTCrcA7A3tMjlThLvrJ1tiqY73xmpcRmYJCrt%2BrhGTh3EgYgzCZnk9Pvqe8FMifJjuafEa8POJdOM4mK5ozVAy7pIkW64X8ZNhJhzRZEqHCdQBVhpkMe5GVolX9CxBZ8kryIWrVp2zmGwTt8n75rVL465eysJpGcTxMVgFihPhoTfmgttjkErlhT4tehEb5wUiAkYQiddQ7qcY2KzHxmpulMwz1z%2Fjgvh6b0NvyT0yXlVQBOfdKQSPKGtgxKcuoqjOaFVsQ81qqOF7jK12X5AqcrnvxaavNMjE28r%2B%2BNUtJUfsli3iS1cA8SLih3AZWlxVkk9hyYiEVur6JzcnO1iOQFz6n4ocdASpCZTjhFuEV80JslT%2FAqDU5NX65%2Fi1bXdzquuu%2F1x6B5MvmyTyoAYJJYYQiLlDPQTDVrMt3gCFiL%2BUO6%2BJiZGxthHVDInF9zFrvCDr9VJK7ggROYnTeAp2pArGocSdVFvJLUcL%2BIYt48yqecg0fqrYEkRaD9EDZqTThDGuKir6gFRMPSqqmEYqUKVQQLwM6WItrGP28Itns6L08Bn%2FsZ%2FPnD%2F1kWXkGYxNWQITUqnHv%2BPjEIN2BpKNZbUdfHaZB%2BTzYxoA9M4aINcxcMxxtnEp4yOflFksx7JMJPrvL0GOqUBZHwZiMaEwmh5WvKI6gJ6cgEVUGqXUNvG0Q3ZjvUd1potOsMKxXkvaBuk6G3VDkmh8e1J3IQQf%2FxFYG73WwAfrOKtQTuwJvGE35Gxdbsj%2FiqhKRVtShYRK5OFClC2UOY%2BfxFB0v7PlCm%2B0coZ8MXrok5gYEj%2B5RcH3qbPR8VkQJ0l44xYeIGUfXvVe5jICKTJ4v3LJxgP%2Fa7mbmsvqi62S%2FcCbGrS&X-Amz-Signature=5bc9b6ccd0fdeee964cef381d2033825dcd27eaa614313b8c5100104499efcd3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
