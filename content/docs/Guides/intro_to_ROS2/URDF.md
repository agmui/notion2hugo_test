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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJN2Y3KL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7%2BigH8FycHE9%2BQi9ahUY9NsORGtyyXuP6Adxi%2BRReOAiEA1Z96cFUx7Jx%2Bm2lh9FrM2TKYcQrTxVDaudZEDDCBsogqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqmT4btLNO4yLDCcSrcA1T4OxYBx9w8FUv25QVSIxyqybEezAjTmbejWH24CUwCxI7EXRRXDYpiRf30hhEQUUtN3m6w%2FILtf3sznb7Gf8xiEC%2BKfXSabdTY1NBhcvmgAPxi3c5hbDcdxHFETTcyG2RwyF7FAxe2n7YjgcuZcyT504EbW3NLVGgQNcIYK8JZLt%2FYzltw%2B1q3L9i31d9PEQKgT2Jny7KQsYaEsGqag3SYDrn8Y6xmhy4KqvNOVmlpYwbFFdHvQWlJ1%2BYSole3MmH8MkkKO9x4Nxo2wrQWIIa9JmZOa49DGPRWjYFol%2FQjE8U2EMINyiLXMBvD7w%2B8IJvVWHxNY7BUEC7TgLBJtzIDeq8za3sqPSvT3Suy5HE0h8NVvA7vyfhfNDEkV%2FgTQ00sacWnHJwvghWOBxEzEYNXqSF7Jm1SJ8xF5SJyjwq%2BsXZJ7%2BLUZsSxLJo26HaPBU3hzAo4vgjaXPzIykZxRk7w1GxVO7F%2B2DUqlS5vw8oHBDfwrUAACpSdTrBLy1TTHp5PJMJMmzCB4x6Erl9r2KDiq284DPiIepWjj9aHY5QB8lbZz7CJFvPSDiDqRXwZjqCSWlV5VvCXINsiyLPWqfepWLi3FOofASprLXkYjFsN1u%2Fj784Fgo0BgJVUMOmurcEGOqUBT6kWBqhaLtcKVN2a0TMcxHgmA4rZ1NShPESECclGp%2BtKT67kJRAwBsW45%2BVBh1OqYNZWAiGQL8UAA7oIV2ZQmZkASn3qqhZX93cQ1ycVKnWU19ve1mTPicXVtJiGMKQx5i72EOk5HdJPiv3iP1HWQpMFt78zlTHgNJqNo%2FKRF7u0ObEDc2QoCkpbjd4IDaLxBQt2n9VvQBligyI8Rq5x%2BxRazsFC&X-Amz-Signature=6a2512902bcfda33861d5579afa920be5e07dfc4d9538bd21cf2ea1e0af7f86b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJN2Y3KL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7%2BigH8FycHE9%2BQi9ahUY9NsORGtyyXuP6Adxi%2BRReOAiEA1Z96cFUx7Jx%2Bm2lh9FrM2TKYcQrTxVDaudZEDDCBsogqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqmT4btLNO4yLDCcSrcA1T4OxYBx9w8FUv25QVSIxyqybEezAjTmbejWH24CUwCxI7EXRRXDYpiRf30hhEQUUtN3m6w%2FILtf3sznb7Gf8xiEC%2BKfXSabdTY1NBhcvmgAPxi3c5hbDcdxHFETTcyG2RwyF7FAxe2n7YjgcuZcyT504EbW3NLVGgQNcIYK8JZLt%2FYzltw%2B1q3L9i31d9PEQKgT2Jny7KQsYaEsGqag3SYDrn8Y6xmhy4KqvNOVmlpYwbFFdHvQWlJ1%2BYSole3MmH8MkkKO9x4Nxo2wrQWIIa9JmZOa49DGPRWjYFol%2FQjE8U2EMINyiLXMBvD7w%2B8IJvVWHxNY7BUEC7TgLBJtzIDeq8za3sqPSvT3Suy5HE0h8NVvA7vyfhfNDEkV%2FgTQ00sacWnHJwvghWOBxEzEYNXqSF7Jm1SJ8xF5SJyjwq%2BsXZJ7%2BLUZsSxLJo26HaPBU3hzAo4vgjaXPzIykZxRk7w1GxVO7F%2B2DUqlS5vw8oHBDfwrUAACpSdTrBLy1TTHp5PJMJMmzCB4x6Erl9r2KDiq284DPiIepWjj9aHY5QB8lbZz7CJFvPSDiDqRXwZjqCSWlV5VvCXINsiyLPWqfepWLi3FOofASprLXkYjFsN1u%2Fj784Fgo0BgJVUMOmurcEGOqUBT6kWBqhaLtcKVN2a0TMcxHgmA4rZ1NShPESECclGp%2BtKT67kJRAwBsW45%2BVBh1OqYNZWAiGQL8UAA7oIV2ZQmZkASn3qqhZX93cQ1ycVKnWU19ve1mTPicXVtJiGMKQx5i72EOk5HdJPiv3iP1HWQpMFt78zlTHgNJqNo%2FKRF7u0ObEDc2QoCkpbjd4IDaLxBQt2n9VvQBligyI8Rq5x%2BxRazsFC&X-Amz-Signature=c2fc7bda3a3c0159ba4da3a959b623be48a667c4640716a351c2db4b7f4f9504&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
