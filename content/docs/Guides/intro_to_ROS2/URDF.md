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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYCNYLA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDZDunCdQ8Lsvv33mtut98AHRNNv7TVAVAWNXK3wpfykwIhAJ5FJSOTkO8vhPOy6p4V2hUqsW4DnHnP1N6H%2BjB6al7mKv8DCDgQABoMNjM3NDIzMTgzODA1Igy8kvVA9hKEIY%2FYNlYq3AMfoqi4BRdXnAVE9lTw8cd58OgPvBOxAm2yzb4A6UrvnecryPZxutRK8ZPUMKjORIxg4YWZhFTpHedVMVdo0V2ztNTuvcpsZNbuCqGXnB84w3EubpAVwdnug%2F260RtYEoj%2BQNq0gUrOuHmfNkRfdU4Gn0N7calW3%2BGJBKYEEwwl09oJFwt%2Fkz2hVfG0608tIgYWCaNtU2oJ%2FVVhpnGrMdEYu1xHZOB2eE9Wsdg2Xe3mxQYXbwGM7vC1a0XIyCkPEGw%2BFe999dMvRS43z05vCj9k4PWYFooS7%2Bunig2H%2BSrr77Leauz%2F6KpzbVI1crW0xQ1k3UxWVl3AByM9LHFuiS0cc8Jy%2FDsgRHHAIIPFybkkKFGeQHfV%2BWXc9hMclBT7IYflbkxr2ZAQL5t3PAVP%2FHkht%2BdSN%2F%2BX4bg%2Fm6Db7SlMFtJZB4oJ3L7%2FBXZD7vjRJgd7uTIea8r0wLwcqXomLIZRbSQu8CCZNrUn%2Fnr7VtKR0DkoBGdG0iipbFJOi5%2FrlWRRogN%2F1P32lWkrWRsIudza3JL5U3c2ihPcWBC2QNUSdxHvqxHWJG4iBLthSR%2BhMbAHxZNvTcHmoiCYYu9W3Z85s2hcImxcNJIC1a25drwDSOh%2BeGXUqcr1LLodGDCz9rfCBjqkAYOyPQhfFrLr2qCsnVT7OUbV0iEgxd30e4yp5sg0JI5TpJTLb1bTdo8%2Be3bvRozbzQN%2FGGmzBvYF5nJRzbTXp%2FU2IdSTtN4G%2BxMZ8eEVx4xRLhID2ilrLlP%2FQwKJfYCmL3xsFVUfKnKFWDi1KPml81Xm1BeecRJ3v%2Fp0JRHsHmSOSpza5zl28k5y5mPQSs8NzOLzgnOW5W25%2BQ%2FmWt0RsmrWTM2z&X-Amz-Signature=1497e73ce9568f3d933475942eb479111e4cfc861def13db9f28cad41fec7d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYCNYLA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDZDunCdQ8Lsvv33mtut98AHRNNv7TVAVAWNXK3wpfykwIhAJ5FJSOTkO8vhPOy6p4V2hUqsW4DnHnP1N6H%2BjB6al7mKv8DCDgQABoMNjM3NDIzMTgzODA1Igy8kvVA9hKEIY%2FYNlYq3AMfoqi4BRdXnAVE9lTw8cd58OgPvBOxAm2yzb4A6UrvnecryPZxutRK8ZPUMKjORIxg4YWZhFTpHedVMVdo0V2ztNTuvcpsZNbuCqGXnB84w3EubpAVwdnug%2F260RtYEoj%2BQNq0gUrOuHmfNkRfdU4Gn0N7calW3%2BGJBKYEEwwl09oJFwt%2Fkz2hVfG0608tIgYWCaNtU2oJ%2FVVhpnGrMdEYu1xHZOB2eE9Wsdg2Xe3mxQYXbwGM7vC1a0XIyCkPEGw%2BFe999dMvRS43z05vCj9k4PWYFooS7%2Bunig2H%2BSrr77Leauz%2F6KpzbVI1crW0xQ1k3UxWVl3AByM9LHFuiS0cc8Jy%2FDsgRHHAIIPFybkkKFGeQHfV%2BWXc9hMclBT7IYflbkxr2ZAQL5t3PAVP%2FHkht%2BdSN%2F%2BX4bg%2Fm6Db7SlMFtJZB4oJ3L7%2FBXZD7vjRJgd7uTIea8r0wLwcqXomLIZRbSQu8CCZNrUn%2Fnr7VtKR0DkoBGdG0iipbFJOi5%2FrlWRRogN%2F1P32lWkrWRsIudza3JL5U3c2ihPcWBC2QNUSdxHvqxHWJG4iBLthSR%2BhMbAHxZNvTcHmoiCYYu9W3Z85s2hcImxcNJIC1a25drwDSOh%2BeGXUqcr1LLodGDCz9rfCBjqkAYOyPQhfFrLr2qCsnVT7OUbV0iEgxd30e4yp5sg0JI5TpJTLb1bTdo8%2Be3bvRozbzQN%2FGGmzBvYF5nJRzbTXp%2FU2IdSTtN4G%2BxMZ8eEVx4xRLhID2ilrLlP%2FQwKJfYCmL3xsFVUfKnKFWDi1KPml81Xm1BeecRJ3v%2Fp0JRHsHmSOSpza5zl28k5y5mPQSs8NzOLzgnOW5W25%2BQ%2FmWt0RsmrWTM2z&X-Amz-Signature=672488b653101987c7368254724897c2459bfcf6c1ca83a9e886e0bae8c46890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
