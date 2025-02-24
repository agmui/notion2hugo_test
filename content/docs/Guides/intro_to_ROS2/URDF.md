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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP45YVB7%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKsRCYlTMMk%2FNA7QV8BD4SqNcu5hTw8H6oHfsnsr51qAiEAmYlgTzG88nOfHSvWrQTkXKDsY8BVot8yHKzZbTgXXy0q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDO6BQniVLsnn79rXuSrcA2008vICENPmQN6sbN%2BHoSRm2loRbKssN3I1CtMRlsT%2Fj7L%2FlRCl040Lw3mRmizW2OkHzWdrkkpHd5YVYfhYeC4BB2RiJPhg5NzauM%2FtNo0LF%2BYcoNeBWb0KnLeEI%2BjpjQEpCtEWN%2B%2Bln3JZRhhe9oFnLOF0w%2FQsCqBNc4vIrAIvaXzwpYjQtfbKSmrHlRKKFvvk%2FKgdje2%2FD1WQFj02U7ekjOuvBcgkn3SU8F2udXe5sk09DhueJ7UCIwGdYVAbINTqO8zyLbngcb0CKFJBcsPV3SSEFPc7nZXBUqAiwoZwhjleetTowzbmGMlojiPJ5LelryuNyWDzigvIP3HrptjoVWZT%2BMJDLLxgkpkgYCwR3Rgio1am1O1g9XzWSHlqT8b%2FDkEovs%2Bw59YsUhnNjLXUq3zXbs7kfm4dxAMPEVRHwfqxOvNr0gJK1RLUOmrdMjlNYwpHdgrINpZ2mydTfQbmG4NIrAp%2FBczlyFIZxiBD42JnjwKVIcvuBKdqu0KO8cYmgtuktzW7rBTJqkF2OnBlxbBFfNUCW5wCQas4u4ujelZ6FECjQpHpbZmqEXCYubNMfTw8IqJzqznisH9az7of1j6CDyxYC0oaF0ii4caRh8OCpL1OGZyTjeReMNPh770GOqUBFQoqhA6pBqLfM355UB82ZoScf1qXF4%2BrZAKDejQz%2B1b5FN0MO44WPDXwynszgtV5PZxlJ2Ybko%2FIlTkYITTHE4RImotpLcSqCOdcWBSHezeYb11%2BCUrtklFU7Y0aZrsun%2F0ApS708SLrPvRRpxITTAPvaQGgyzkFl1ZWX4%2BIbSQm1XMBcb18R%2FeqJgdnNgdgPeMFwa8T5e7q4PEM8R9yqNLDsPt%2B&X-Amz-Signature=383d61565296fb4b46d85486f8f0f2fb6a032b5a44a53cd1f24207e4705fc4a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP45YVB7%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKsRCYlTMMk%2FNA7QV8BD4SqNcu5hTw8H6oHfsnsr51qAiEAmYlgTzG88nOfHSvWrQTkXKDsY8BVot8yHKzZbTgXXy0q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDO6BQniVLsnn79rXuSrcA2008vICENPmQN6sbN%2BHoSRm2loRbKssN3I1CtMRlsT%2Fj7L%2FlRCl040Lw3mRmizW2OkHzWdrkkpHd5YVYfhYeC4BB2RiJPhg5NzauM%2FtNo0LF%2BYcoNeBWb0KnLeEI%2BjpjQEpCtEWN%2B%2Bln3JZRhhe9oFnLOF0w%2FQsCqBNc4vIrAIvaXzwpYjQtfbKSmrHlRKKFvvk%2FKgdje2%2FD1WQFj02U7ekjOuvBcgkn3SU8F2udXe5sk09DhueJ7UCIwGdYVAbINTqO8zyLbngcb0CKFJBcsPV3SSEFPc7nZXBUqAiwoZwhjleetTowzbmGMlojiPJ5LelryuNyWDzigvIP3HrptjoVWZT%2BMJDLLxgkpkgYCwR3Rgio1am1O1g9XzWSHlqT8b%2FDkEovs%2Bw59YsUhnNjLXUq3zXbs7kfm4dxAMPEVRHwfqxOvNr0gJK1RLUOmrdMjlNYwpHdgrINpZ2mydTfQbmG4NIrAp%2FBczlyFIZxiBD42JnjwKVIcvuBKdqu0KO8cYmgtuktzW7rBTJqkF2OnBlxbBFfNUCW5wCQas4u4ujelZ6FECjQpHpbZmqEXCYubNMfTw8IqJzqznisH9az7of1j6CDyxYC0oaF0ii4caRh8OCpL1OGZyTjeReMNPh770GOqUBFQoqhA6pBqLfM355UB82ZoScf1qXF4%2BrZAKDejQz%2B1b5FN0MO44WPDXwynszgtV5PZxlJ2Ybko%2FIlTkYITTHE4RImotpLcSqCOdcWBSHezeYb11%2BCUrtklFU7Y0aZrsun%2F0ApS708SLrPvRRpxITTAPvaQGgyzkFl1ZWX4%2BIbSQm1XMBcb18R%2FeqJgdnNgdgPeMFwa8T5e7q4PEM8R9yqNLDsPt%2B&X-Amz-Signature=4f17da1585d6e0db91bb630df230957d2a69a13b334fbb8cba4afddd4c9a8061&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
