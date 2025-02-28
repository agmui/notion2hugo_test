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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624FOUMDW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIC87Rcui6PWNeaPRbzzHpPVOnKjiOdl9GQkeGpzv40reAiEA%2B%2BjQfrMFveFc1YRif8kwSgNrYAn%2BrGcBdtPewxVsaEgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2LzsY1xy4UAVLgcircA1h%2B62q1zc28eXAHN%2BtPtANVZwgYBl8EDHT5wlu3nGlTSiC2HfTviZzlZb5loE8lb%2F3CNJxebIhY7vbj2I4ON7liBwhFuAjz6rYfAYUodWR3X94rBnJPgWl7pj9lChxpYmG3NGIKVQkw1SKZzcYw1jxMtbYTyb3Dk6hJtbcDYBaXbknXhyxTT3ICygwOUUqgrIBxtFThBOdlJbzBwSUqSth2RkAKo9ECxpgm7r5PB65PLtKhVJbiNLz%2BOLi9melQsA3s1I17o1FDW32E27w8vnaN1G2%2FEN036yfXjOea5H4nlyy%2F5ifMy%2B4Y3r4XCJD%2FYMzJZAnyaQe%2FDIOu%2BqGODzFA%2B8RDigMhcoif%2FGLBUM4bKUEgANNLSyg7TXe%2B3VnYDcb%2FNarZ7vubIuajB8whN95bg8aNadazKgOYIejiShQ2iZSISh7VZr5AVbA7ibQcBvZsv%2FpvqG6J4cq10AQk6951JZ%2B9kZDajM94J%2BaDei4Uae88KEdEg0yO%2BpVx7sWrAIkI9SHV3CDlAFGBANS771j4Cx6yqoFdPzsh6u3yCX13I77yaledVvdsePFifh15I%2FT8k9XZVCQC3uSe9OXpb7%2BUC9PLn9nltxhbFdMdOs0tPFPf14Gp2vb7nnCMMI2MiL4GOqUBXRs26DYtZ4JTrd4HvDklY5482dxrLypIF%2FM57okgt6oJb6rhOxtP0kLHlp45RVd0B50hJxIoDxV8MGRLXyPNtAZyVi1xB3a28GY2rb9C2mJHMNFuHR0n%2FJqoZ52Iw4K79Kq2SgcJ80dgr2VylKtordboQRzT1fBGLPymOba555dM7G%2FW%2F%2B2sUsSMdI5gG45dLyGCiFrKdSXZ9ckwA5kvGSeDZ7rH&X-Amz-Signature=a687acd9938e0125888a277264bdf6a435be85f653cab4396c197dcc3f19ff06&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624FOUMDW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIC87Rcui6PWNeaPRbzzHpPVOnKjiOdl9GQkeGpzv40reAiEA%2B%2BjQfrMFveFc1YRif8kwSgNrYAn%2BrGcBdtPewxVsaEgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2LzsY1xy4UAVLgcircA1h%2B62q1zc28eXAHN%2BtPtANVZwgYBl8EDHT5wlu3nGlTSiC2HfTviZzlZb5loE8lb%2F3CNJxebIhY7vbj2I4ON7liBwhFuAjz6rYfAYUodWR3X94rBnJPgWl7pj9lChxpYmG3NGIKVQkw1SKZzcYw1jxMtbYTyb3Dk6hJtbcDYBaXbknXhyxTT3ICygwOUUqgrIBxtFThBOdlJbzBwSUqSth2RkAKo9ECxpgm7r5PB65PLtKhVJbiNLz%2BOLi9melQsA3s1I17o1FDW32E27w8vnaN1G2%2FEN036yfXjOea5H4nlyy%2F5ifMy%2B4Y3r4XCJD%2FYMzJZAnyaQe%2FDIOu%2BqGODzFA%2B8RDigMhcoif%2FGLBUM4bKUEgANNLSyg7TXe%2B3VnYDcb%2FNarZ7vubIuajB8whN95bg8aNadazKgOYIejiShQ2iZSISh7VZr5AVbA7ibQcBvZsv%2FpvqG6J4cq10AQk6951JZ%2B9kZDajM94J%2BaDei4Uae88KEdEg0yO%2BpVx7sWrAIkI9SHV3CDlAFGBANS771j4Cx6yqoFdPzsh6u3yCX13I77yaledVvdsePFifh15I%2FT8k9XZVCQC3uSe9OXpb7%2BUC9PLn9nltxhbFdMdOs0tPFPf14Gp2vb7nnCMMI2MiL4GOqUBXRs26DYtZ4JTrd4HvDklY5482dxrLypIF%2FM57okgt6oJb6rhOxtP0kLHlp45RVd0B50hJxIoDxV8MGRLXyPNtAZyVi1xB3a28GY2rb9C2mJHMNFuHR0n%2FJqoZ52Iw4K79Kq2SgcJ80dgr2VylKtordboQRzT1fBGLPymOba555dM7G%2FW%2F%2B2sUsSMdI5gG45dLyGCiFrKdSXZ9ckwA5kvGSeDZ7rH&X-Amz-Signature=4b635cde6e29ae22b3629059b6826ee86fef286570a4a231d7c5e73122b77399&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
