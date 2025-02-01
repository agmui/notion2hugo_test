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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH65MPCE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANFMzpWEJwSG6NJoWdlLl5Jn1d7U0uRIfSyKCAPrMUqAiEAmOA6LAh88doPMWnQx8AXHccCJrwzt%2FQ%2BOgFkYcZAEpsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOeWkv8f426ZTk%2BmOSrcAxomjUn2Hagi%2F46EDbYT09RaXstbsNySWm8QvVnLTVqS684lBPaigaz4Z4jTqHLSqPvQ9q8w%2FLCixLNdkf%2FewIIxsl2675wiiuS2p1tyOvEKppfKWhVIHty6e8ZSCP1lQbDK3693mAEUc2BrMLqGojJgezlqrcQgn12HlbEf6an02ME7%2BvmpF6nJVUekJ%2BvxSA44EYmOKmeyCBYkOUJpuUaniujeknjjATuoZFF%2B9ojf5pqJp7%2FP1pZTChgWvQyiWK4W1oYqpnH5SZBR6IKQjNK1u8WdDW%2FMtmuktwGYAk6%2Be4pvMFDHc9rnkssaBCZqfkMQY8fp2UwoyWR4Fj8LzAwliOqcZ5tyBjlvAGSikupChdM693EITmFU8JCpkrnN2wAPuhzPYlmk1HVq7akbzYdTLtuNPCz%2Ff73A0iLirlzf5wAuKSJEfcB7U3i%2FKJIkdoaDoGcSFT4luSZJ9rvigEOnlNydp1LoHoXtiHPqODYcIQBA3tGqlv3D%2FHxTWnZ%2Fndx4i9xPOQ0FKvylw%2Br9%2FR5fVQ5s32DmG9H2jbUYEMI8f3YJ7%2Bpc%2Fer%2F8zrIKhYAOyPCqJGMze2eT0%2BUlQ3dK%2FKb1eReVt6CrqiXOtdJQ%2B1XgwXQ9gXJiQJ3ZUlcMNul97wGOqUBSTiH8xEd3WFh3ESXVbWhdbey7%2Fbde6WJutYnFT%2FwEOb7RDgGQBJMEgB4r7L9r5fm6Ag1W498LhjBatDWxoLgE%2FqSHbqcOmpNRw2NP6f5zvG6tkDOv6HUc%2Fe%2BzdDdHEDIXgIr6lZo%2BdA5%2F9KllV8B5FJBtQKv8DKYSuEruIPDX8%2FriVY0fvRfn2XB%2FMR3LIavc3bQyLx3Nt3YM3KAdJnru5guwkhI&X-Amz-Signature=0092718d69f790f61200ee1c8c65583e88ba8238edd343d42fa3f194704fffb4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH65MPCE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANFMzpWEJwSG6NJoWdlLl5Jn1d7U0uRIfSyKCAPrMUqAiEAmOA6LAh88doPMWnQx8AXHccCJrwzt%2FQ%2BOgFkYcZAEpsqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOeWkv8f426ZTk%2BmOSrcAxomjUn2Hagi%2F46EDbYT09RaXstbsNySWm8QvVnLTVqS684lBPaigaz4Z4jTqHLSqPvQ9q8w%2FLCixLNdkf%2FewIIxsl2675wiiuS2p1tyOvEKppfKWhVIHty6e8ZSCP1lQbDK3693mAEUc2BrMLqGojJgezlqrcQgn12HlbEf6an02ME7%2BvmpF6nJVUekJ%2BvxSA44EYmOKmeyCBYkOUJpuUaniujeknjjATuoZFF%2B9ojf5pqJp7%2FP1pZTChgWvQyiWK4W1oYqpnH5SZBR6IKQjNK1u8WdDW%2FMtmuktwGYAk6%2Be4pvMFDHc9rnkssaBCZqfkMQY8fp2UwoyWR4Fj8LzAwliOqcZ5tyBjlvAGSikupChdM693EITmFU8JCpkrnN2wAPuhzPYlmk1HVq7akbzYdTLtuNPCz%2Ff73A0iLirlzf5wAuKSJEfcB7U3i%2FKJIkdoaDoGcSFT4luSZJ9rvigEOnlNydp1LoHoXtiHPqODYcIQBA3tGqlv3D%2FHxTWnZ%2Fndx4i9xPOQ0FKvylw%2Br9%2FR5fVQ5s32DmG9H2jbUYEMI8f3YJ7%2Bpc%2Fer%2F8zrIKhYAOyPCqJGMze2eT0%2BUlQ3dK%2FKb1eReVt6CrqiXOtdJQ%2B1XgwXQ9gXJiQJ3ZUlcMNul97wGOqUBSTiH8xEd3WFh3ESXVbWhdbey7%2Fbde6WJutYnFT%2FwEOb7RDgGQBJMEgB4r7L9r5fm6Ag1W498LhjBatDWxoLgE%2FqSHbqcOmpNRw2NP6f5zvG6tkDOv6HUc%2Fe%2BzdDdHEDIXgIr6lZo%2BdA5%2F9KllV8B5FJBtQKv8DKYSuEruIPDX8%2FriVY0fvRfn2XB%2FMR3LIavc3bQyLx3Nt3YM3KAdJnru5guwkhI&X-Amz-Signature=4b35033fd2ef3ade658731e1b81196ff3b3f3dbdfc83954de18b4c2013a849dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
