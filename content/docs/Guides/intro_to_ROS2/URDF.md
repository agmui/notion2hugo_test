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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHRE6PQ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHzwHmhHuxMR6NNe6X0AJOmST33oeZcNDN7MFb9VQiPgIgQ9sq78Ot3nyyqpgP%2BXndNRjMGsUCBVKQl3VPYu0vVpcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk2E7xvm3aeOrkjVCrcAwRxSftVwSAwxUApEmLAElew7rMef2%2FiY5WX9Po%2B8%2FjOHJxgZSSFTocAsY83K2k9xqdsMKjAD7YpO1al0E8xdeGrzyJOjXiXWg3IxCX92Ms6n0zvpDLbPaoqytn7A1Eid%2F9Nyb%2B9A%2BPUeoEI9pqLwwDstrCvNdv2dNde3658z9pBhBafYdPQ0yiYeDIcu%2FL%2BgzIzhF5JXwsK7smIDR5p2iGP1q0T2FAXUFDnxqV2tiFLmXx3Al3%2FDnOVjKupvapKwoSOi2PeD3oPwl84gE0hWRYgve%2BditMDP5vBQCk7CaRSV0CqCXsS634%2FDfJPpVB4AyHSJcGEHZtBev71nFuSiNNuyI8UA%2FVHA7c%2BsIi%2F7bPJq8zZKu9IeaHlMXYFMIhhZyvc2ppNGzA9e1YDUGFYNrsY2eRkpWsldIl0P0gBjOQUQwhAh7XnybPyLf9Bgr8mJKkzYORwjrb15dgVNJ9%2BcGnLpByZSWAmPjKlsSL0CaPqiyV2mp2FKBXw8DGaAfZ%2BjXsQqo9nMQnjnUth1ZHV7xzDaENKzoVGiC2N3uWUcFLQIg3DnnxcMikC8D7yBmygTO2IhwO8NHhBxUdqsy1t9cJnimfM5HAnyR%2BeB8QlDqjUS1aFJLKR8yTLB%2FNUMNG6hMMGOqUB2%2Bh983QTRecUD1iP%2FaiGAcD92BLbmADZD2ZyQyO2rjHpjJoOE%2BbxbeyW%2B8xOMe156%2BFzmGtP8xJqY1SbSwxxoSkDnJ21f3NRjGdtMqDMJ4s7EoxE%2BaPsbVUm2BzSlDd2r6HnMrATMBLNUBtPMLekj0iOMWcpsdk%2BAPIOPHTNdW%2FKK9g0JLqIsT2PslRP%2FstSq6YChYHiMkv3dKpx%2FW%2BhYdT76ASf&X-Amz-Signature=a1d68dc410d8869cac6ca9ef63acd0a03d80e1c7c49788267e80d16f39dca2a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHRE6PQ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHzwHmhHuxMR6NNe6X0AJOmST33oeZcNDN7MFb9VQiPgIgQ9sq78Ot3nyyqpgP%2BXndNRjMGsUCBVKQl3VPYu0vVpcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk2E7xvm3aeOrkjVCrcAwRxSftVwSAwxUApEmLAElew7rMef2%2FiY5WX9Po%2B8%2FjOHJxgZSSFTocAsY83K2k9xqdsMKjAD7YpO1al0E8xdeGrzyJOjXiXWg3IxCX92Ms6n0zvpDLbPaoqytn7A1Eid%2F9Nyb%2B9A%2BPUeoEI9pqLwwDstrCvNdv2dNde3658z9pBhBafYdPQ0yiYeDIcu%2FL%2BgzIzhF5JXwsK7smIDR5p2iGP1q0T2FAXUFDnxqV2tiFLmXx3Al3%2FDnOVjKupvapKwoSOi2PeD3oPwl84gE0hWRYgve%2BditMDP5vBQCk7CaRSV0CqCXsS634%2FDfJPpVB4AyHSJcGEHZtBev71nFuSiNNuyI8UA%2FVHA7c%2BsIi%2F7bPJq8zZKu9IeaHlMXYFMIhhZyvc2ppNGzA9e1YDUGFYNrsY2eRkpWsldIl0P0gBjOQUQwhAh7XnybPyLf9Bgr8mJKkzYORwjrb15dgVNJ9%2BcGnLpByZSWAmPjKlsSL0CaPqiyV2mp2FKBXw8DGaAfZ%2BjXsQqo9nMQnjnUth1ZHV7xzDaENKzoVGiC2N3uWUcFLQIg3DnnxcMikC8D7yBmygTO2IhwO8NHhBxUdqsy1t9cJnimfM5HAnyR%2BeB8QlDqjUS1aFJLKR8yTLB%2FNUMNG6hMMGOqUB2%2Bh983QTRecUD1iP%2FaiGAcD92BLbmADZD2ZyQyO2rjHpjJoOE%2BbxbeyW%2B8xOMe156%2BFzmGtP8xJqY1SbSwxxoSkDnJ21f3NRjGdtMqDMJ4s7EoxE%2BaPsbVUm2BzSlDd2r6HnMrATMBLNUBtPMLekj0iOMWcpsdk%2BAPIOPHTNdW%2FKK9g0JLqIsT2PslRP%2FstSq6YChYHiMkv3dKpx%2FW%2BhYdT76ASf&X-Amz-Signature=03c0b2ecae3430f954e90a65fc69279b1c3a61c9b54c0ead1e7ccc2fcf5cee20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
