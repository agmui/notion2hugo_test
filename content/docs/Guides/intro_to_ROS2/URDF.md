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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDVPMY4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFodqMxZds3taOtPJ1s1%2FsJmcFg4E0Mn%2BsjQ4sd04IYqAiB8rPkKQeFrqNqil8vBdlh%2FHyo42opF9tvdj1%2FlhQXIpyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMekMdU0L698Cln%2BKtwD8rzpTcX6cZO1fd5w2u1hc8Tnhs485snP2w3zgJIBiPiLqt7aPa7tDhpjyujI1y2saEC0M9k5DSquSbMYyY6xnpWJogDXtBC6cvqLWqM1jhDx%2BjIeilYCIlA3HmQ4ncPtF5glcboO2%2FXE6a3GfWI2AqspipZZz34IaOW57QCgOnlxNGw64QU3rOoS8qUZ7INnXSz4mIyvjNZOhWjfsuU3iSF88FbsBeMY4bhzX9fmTIPjzCMqCTvwdoBlMbzHni0lXozqcdMCjJW37krNK6V%2F3ZlSQnFsRr9xFfKPQPL2eITyyFIhoM64QQyrgbDk%2Bmm1JCuad%2FYM22XsJiCU3ovbh%2FjQ8W6%2BHsgVK82ZMaqTpw9%2BMAWTqiH%2BiETYZdZCJ49HFHpRLBCrQSUTAwTkIkxq2dfIZCwr1KD5hUOO5Jc5VPOKRtZsJvrcWTC2edZpaiKCAeGBVSAZHvbbz5ga3NxUyUAP%2BnKkF763RVdizyOmJcOUiCsNAlX7ZELx%2BN2ZGo4QEe9Z8%2FlqVzjp3oYUeeCtpSTTV%2FjIxc1DNJcQMwJaT9KH4XWvf8Sqr%2FBth3MrLZG7xR3lJ%2BBN5dHexH1Ez5ZSWJvUOssEDO%2Bw89uuuLTx82YEPaBE4GRji7r34acw1tePvgY6pgH%2Bk8MNIzfTczMEd%2FEjUZbZiKhuMgw6qzUD79d6QFDgDACwXzrpeFIEYE26TlTA%2BGyd6i9svfWRnXXoSQPxXTZ7j%2FV3sq5jOaQOqpYk6sb9wXixeFTB4I66qajDIB6onrM%2BVz1%2FekH4zIkPRIu6EA4%2BkGdBcDUZScaNLWBdkrASSly%2FmrDw0ULlOiSr2EeixRLmPp4K%2BT2UJgyHzN4J6VaA22AB4k7K&X-Amz-Signature=fa843523c89056a160eaf95c263e636cc9d99846ba810fd7f62500b8b5979bb8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDVPMY4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFodqMxZds3taOtPJ1s1%2FsJmcFg4E0Mn%2BsjQ4sd04IYqAiB8rPkKQeFrqNqil8vBdlh%2FHyo42opF9tvdj1%2FlhQXIpyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMekMdU0L698Cln%2BKtwD8rzpTcX6cZO1fd5w2u1hc8Tnhs485snP2w3zgJIBiPiLqt7aPa7tDhpjyujI1y2saEC0M9k5DSquSbMYyY6xnpWJogDXtBC6cvqLWqM1jhDx%2BjIeilYCIlA3HmQ4ncPtF5glcboO2%2FXE6a3GfWI2AqspipZZz34IaOW57QCgOnlxNGw64QU3rOoS8qUZ7INnXSz4mIyvjNZOhWjfsuU3iSF88FbsBeMY4bhzX9fmTIPjzCMqCTvwdoBlMbzHni0lXozqcdMCjJW37krNK6V%2F3ZlSQnFsRr9xFfKPQPL2eITyyFIhoM64QQyrgbDk%2Bmm1JCuad%2FYM22XsJiCU3ovbh%2FjQ8W6%2BHsgVK82ZMaqTpw9%2BMAWTqiH%2BiETYZdZCJ49HFHpRLBCrQSUTAwTkIkxq2dfIZCwr1KD5hUOO5Jc5VPOKRtZsJvrcWTC2edZpaiKCAeGBVSAZHvbbz5ga3NxUyUAP%2BnKkF763RVdizyOmJcOUiCsNAlX7ZELx%2BN2ZGo4QEe9Z8%2FlqVzjp3oYUeeCtpSTTV%2FjIxc1DNJcQMwJaT9KH4XWvf8Sqr%2FBth3MrLZG7xR3lJ%2BBN5dHexH1Ez5ZSWJvUOssEDO%2Bw89uuuLTx82YEPaBE4GRji7r34acw1tePvgY6pgH%2Bk8MNIzfTczMEd%2FEjUZbZiKhuMgw6qzUD79d6QFDgDACwXzrpeFIEYE26TlTA%2BGyd6i9svfWRnXXoSQPxXTZ7j%2FV3sq5jOaQOqpYk6sb9wXixeFTB4I66qajDIB6onrM%2BVz1%2FekH4zIkPRIu6EA4%2BkGdBcDUZScaNLWBdkrASSly%2FmrDw0ULlOiSr2EeixRLmPp4K%2BT2UJgyHzN4J6VaA22AB4k7K&X-Amz-Signature=c5a0ef7aa2553cb35e58789f1c5c78f40c1e574daf5377ed49f17109e2fe0618&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
