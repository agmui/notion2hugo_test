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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRXESONN%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2P16sKuRZrPZr60lqGL7udJrPW5FCwnwXjKFl9VXk0AiEAqJA8jlp8cUfn%2Fugkjk3p7D1AK%2FLfP%2FBHQNpw1LYf53Yq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHUhkPPRo6zmqwA4LyrcAyF6XxAlMNC5f%2BiNTzImZVCKNPn9nVgv%2BU5h4%2FjnW6Qa%2FtSOR4VJ6YFf%2FzIYoIRCTjeQzmznDLfNx%2Fyvqc%2F5YgAeJeRQkpaaU3NvMFJXYSxSalQmdAFUTifoyrxssvASVlRJxPStV%2FkZTn7QKbh6XOLR7Ap%2FR24Ux7KOheT%2BMX5eDN4F6zvsrFTkR8fkJdRNL8c0CN2BODye3UnOAo%2FF7mRsJs9ErZT1z12K5qTcWXhof2ODjk3300HC4GtVgDWCiums6vrtJC%2BgES7Z9BPcpG9AywDNZKPqoGyZLONZ7dRclAiFD%2Bor0OhU%2FYhZiNgd15d9H8lmxizgwVdJVDj1tvX5aPwIp%2BbXSvCuUb7QhyZMfpYJMX5Rc%2B2iTQ3z7uHur%2F1P6Cnntsxbp8AZpCFk%2FLx77axeUOJjfCGjQlZiSJm1gE4RQLolpROM%2BH%2BBVX5wYuPK5kTWtkP6IyFIVPak19x9EAD4QrhrcBDTHLPE6PHMX7jQXTIdFAXNEt8k8z0VAaWgdq8IyEsCgtzObSAo3PMpJ2l8t28%2BnJa5LVsoCcEXxdU14QPZYiWzq9CWg1SufysrDUVufWPv9uqIVkIieIFM3898Gj5HqzOQ9gpnMG3UPMiIO1kDbDQP5vytMMW6qcAGOqUBF8Oi9JXQxCilaZGpCRTa%2FqGeL8m7274CXmm8iYuOh01C0xFpz%2FqpsMhODSQVk369ZvlclIZioQfUEReVj0%2F1qtE0AZUcmk3ovexXr%2F5Vn16d1c%2FveuKYd5TNq0ByJfbQpyHevF20DAut9s83%2B9iAT%2BNOLO3%2BeTTgyYU07ESku%2FDfw5tXaWldmkqoNzI9AbkxYQMXyvWhVGToBt%2F5ytJcpw8F7zyq&X-Amz-Signature=b86adfa647bee324680a956ab2bfa5cc309702c9e3fb41c24c4464c4658ba481&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRXESONN%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2P16sKuRZrPZr60lqGL7udJrPW5FCwnwXjKFl9VXk0AiEAqJA8jlp8cUfn%2Fugkjk3p7D1AK%2FLfP%2FBHQNpw1LYf53Yq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHUhkPPRo6zmqwA4LyrcAyF6XxAlMNC5f%2BiNTzImZVCKNPn9nVgv%2BU5h4%2FjnW6Qa%2FtSOR4VJ6YFf%2FzIYoIRCTjeQzmznDLfNx%2Fyvqc%2F5YgAeJeRQkpaaU3NvMFJXYSxSalQmdAFUTifoyrxssvASVlRJxPStV%2FkZTn7QKbh6XOLR7Ap%2FR24Ux7KOheT%2BMX5eDN4F6zvsrFTkR8fkJdRNL8c0CN2BODye3UnOAo%2FF7mRsJs9ErZT1z12K5qTcWXhof2ODjk3300HC4GtVgDWCiums6vrtJC%2BgES7Z9BPcpG9AywDNZKPqoGyZLONZ7dRclAiFD%2Bor0OhU%2FYhZiNgd15d9H8lmxizgwVdJVDj1tvX5aPwIp%2BbXSvCuUb7QhyZMfpYJMX5Rc%2B2iTQ3z7uHur%2F1P6Cnntsxbp8AZpCFk%2FLx77axeUOJjfCGjQlZiSJm1gE4RQLolpROM%2BH%2BBVX5wYuPK5kTWtkP6IyFIVPak19x9EAD4QrhrcBDTHLPE6PHMX7jQXTIdFAXNEt8k8z0VAaWgdq8IyEsCgtzObSAo3PMpJ2l8t28%2BnJa5LVsoCcEXxdU14QPZYiWzq9CWg1SufysrDUVufWPv9uqIVkIieIFM3898Gj5HqzOQ9gpnMG3UPMiIO1kDbDQP5vytMMW6qcAGOqUBF8Oi9JXQxCilaZGpCRTa%2FqGeL8m7274CXmm8iYuOh01C0xFpz%2FqpsMhODSQVk369ZvlclIZioQfUEReVj0%2F1qtE0AZUcmk3ovexXr%2F5Vn16d1c%2FveuKYd5TNq0ByJfbQpyHevF20DAut9s83%2B9iAT%2BNOLO3%2BeTTgyYU07ESku%2FDfw5tXaWldmkqoNzI9AbkxYQMXyvWhVGToBt%2F5ytJcpw8F7zyq&X-Amz-Signature=2f389a51ce0320a0bdbabb4f1cad51d45182a8ac6b8212efc655786d7f87bffb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
