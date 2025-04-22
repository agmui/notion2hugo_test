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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTL4OXCK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCWeKfmN4aCdNSqTruu8mFCS08LE6xs7aALnik4OwM8ogIgfc1ayOJSFGBxvyvTggbnqk72BTLV9fpE4PRaDCc7A2IqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGP9ag3d8EvviO9uNyrcA2whh9Nvv6NLVKoMsx70OqLuActKJEcvY6qAjmkvSIMmLMn6X%2BhOPwX73c2hvN95SgFdd7mjpgRTgkSDCGthDpS%2FujI3mgKUB5fPRnRhg8M3UvgsNhSL3fYG%2BaohLO1A%2FBTIj2wY%2BV1Z85EHCmVW%2F7lW%2Fi9Q4RsB%2BEgQqk6NuiJBumIuoIcxKqE4j5AdEm9KBHuyhFuaJH%2BrB2z5kVM%2BWVRIFOcI3lBA5o%2FYAgbFf6SNQZlx%2BTCnQIJ2qXJmg3JSU9YfzQ6Suv1fuhVOTxeGMLwuiJETv6V5oxvNPUIEP%2F3mz8ejtPQ7qN6MF6vjFRv6qtHdlLdfqnswEJ1G09ktrDEcvV14oqDM%2BNk7FAhpsu6agzdgJRSiu7%2FkCSYBRx0vTUXf3sVijG4tHwlzEGaQw1MXaHv13maHZbfRidR94GvS%2BQIztJukTvGiZfP4re%2FW1DRucx7Td%2FAtHTDf7HQr4015VOp3yGGbO9gIUiqde8hLwe4O2SEhv9h%2FZgyQiqOp9jkt5MdP%2FuuksN4PSZQW6c7tVYuRyMND%2BpdAQ7myo4XQA2pprDxkDH8pWEPzedd5ZQs3DRIe0X8%2BTnU8J9cq47NrLL0fMGzinIYmb%2B%2Bbctz3Hfyt%2F878R3aBwDepMMnfnsAGOqUBpWJUhkbBvuZeuQewbOwajjeXU5BFomH7p7Ct8KZb0GA53Ds%2Bt30FICaGxZhOerwVwpaQUA4z1q6lzA04%2BLUUyv1ifpRJkxlUTvd60z4XNd25pyYVCUW3kZnjuVEfa9E4CKjM%2FYdarOJZhgK5%2FNrM5VRTQ8E97kyg0QtP%2FX2NEkZiuPFXSc58t%2Fo%2B5hW0KnJOGoaVqP0krq7C%2BKpCpO%2F%2FqvyqoGv3&X-Amz-Signature=c696331a49a21f7fda0099383bd364187a2b4985824e769b9e955735aa5cbcab&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTL4OXCK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCWeKfmN4aCdNSqTruu8mFCS08LE6xs7aALnik4OwM8ogIgfc1ayOJSFGBxvyvTggbnqk72BTLV9fpE4PRaDCc7A2IqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGP9ag3d8EvviO9uNyrcA2whh9Nvv6NLVKoMsx70OqLuActKJEcvY6qAjmkvSIMmLMn6X%2BhOPwX73c2hvN95SgFdd7mjpgRTgkSDCGthDpS%2FujI3mgKUB5fPRnRhg8M3UvgsNhSL3fYG%2BaohLO1A%2FBTIj2wY%2BV1Z85EHCmVW%2F7lW%2Fi9Q4RsB%2BEgQqk6NuiJBumIuoIcxKqE4j5AdEm9KBHuyhFuaJH%2BrB2z5kVM%2BWVRIFOcI3lBA5o%2FYAgbFf6SNQZlx%2BTCnQIJ2qXJmg3JSU9YfzQ6Suv1fuhVOTxeGMLwuiJETv6V5oxvNPUIEP%2F3mz8ejtPQ7qN6MF6vjFRv6qtHdlLdfqnswEJ1G09ktrDEcvV14oqDM%2BNk7FAhpsu6agzdgJRSiu7%2FkCSYBRx0vTUXf3sVijG4tHwlzEGaQw1MXaHv13maHZbfRidR94GvS%2BQIztJukTvGiZfP4re%2FW1DRucx7Td%2FAtHTDf7HQr4015VOp3yGGbO9gIUiqde8hLwe4O2SEhv9h%2FZgyQiqOp9jkt5MdP%2FuuksN4PSZQW6c7tVYuRyMND%2BpdAQ7myo4XQA2pprDxkDH8pWEPzedd5ZQs3DRIe0X8%2BTnU8J9cq47NrLL0fMGzinIYmb%2B%2Bbctz3Hfyt%2F878R3aBwDepMMnfnsAGOqUBpWJUhkbBvuZeuQewbOwajjeXU5BFomH7p7Ct8KZb0GA53Ds%2Bt30FICaGxZhOerwVwpaQUA4z1q6lzA04%2BLUUyv1ifpRJkxlUTvd60z4XNd25pyYVCUW3kZnjuVEfa9E4CKjM%2FYdarOJZhgK5%2FNrM5VRTQ8E97kyg0QtP%2FX2NEkZiuPFXSc58t%2Fo%2B5hW0KnJOGoaVqP0krq7C%2BKpCpO%2F%2FqvyqoGv3&X-Amz-Signature=cde0af7476040e0f9ef711d3282599bc0e6375b2a7ca3f4cd5defdd88a0a6aea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
