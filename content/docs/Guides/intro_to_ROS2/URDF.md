---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L2BGEGU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDD41utX4UHpvClGiravGRnnT5mzJSxsvDkz0SiOM%2Fc1AiAKWHicqIxVoqLebTq349QMlsuOxJMoEPjETIKGOsjoHSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIB%2Be8qY4s5ju8FOfKtwDtH4XFMeS9ZxYk80iGGzVC%2Bm9t3PHleTVfGa%2FYh0RfspbBqugnHfKGrngqLVx6uH%2Frgtk6Nu1HnbCXt5RaM8WbuJlpLsCKREDUcMy%2B76E0bJ52lZIM73EVqAIIHOoi62JUPDiKBq83pcJuPhicQExNysW8SUqBhuRD3r8l0SmLvofsIkU4d5QM%2BioZkXH1U6v4jSygfBiFT%2BEpFlVWgBNfDNqrv6NxRGfCe3lUBInHPRUm61OqDp6WEoLQMQDWQKZiYBfdLdAjdmIE0Wr49OOvTkhR16Tyo5VVWt7xwzfTyQIoxNOjBPf%2F6KnH3Oup4rzoBg8rEzb8oG9d639AbDHEGCFEfqCu9BlS4LykTpnAB8%2FaMnjcpDYCI7vDUFCLlE7zrLQR94AXyhy6I2jieTYRaaEdZwmVGH4b6cXFFsVhOy8vJzm9x5RFsffyp0I0A9b2FpElKCL3FpdQcShaVbPFo7FNefWs1%2BKv7hpBhwwU6Og855YnZt9LZSVDHhIlF5OMooG2MKZXNt2ksMhFLYJrMC0fE26kBvCcT9L9QhgWFDw8L3OYKV3MECfHr03Qfg6XUVST8LbSMmZpPRpMe9RKueEjt%2FO%2F2xiRZL8xf%2BlkPVvvSR7n%2Bw%2BUVk%2FGEEwjtm%2BxAY6pgGhw1RMv9QOmjy5J2v1sgQ%2B6ss8fVJYsedexVVUTl1k8EXOmOrwlXkfg3sD6wLGJ4iwL%2F9PtT3ozKdKCLLFHFBpQrpgdORQ5ezKP0oyR4ksQCLxvS3kqrhgf%2BQiElY1%2BpehJHcD0DJ%2FUJCTxhobA7uc%2Fh3pFL1XYSswHwLvESs8bAcJVFB%2F2ZXW4%2BqIyRdimWSR8HUhaxBgitik7zGY3hCCyO%2FDC84h&X-Amz-Signature=50bf500d7d7335f978e3125c51a45421695c7b19ff955d3c100c8c4d69b88114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L2BGEGU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDD41utX4UHpvClGiravGRnnT5mzJSxsvDkz0SiOM%2Fc1AiAKWHicqIxVoqLebTq349QMlsuOxJMoEPjETIKGOsjoHSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIB%2Be8qY4s5ju8FOfKtwDtH4XFMeS9ZxYk80iGGzVC%2Bm9t3PHleTVfGa%2FYh0RfspbBqugnHfKGrngqLVx6uH%2Frgtk6Nu1HnbCXt5RaM8WbuJlpLsCKREDUcMy%2B76E0bJ52lZIM73EVqAIIHOoi62JUPDiKBq83pcJuPhicQExNysW8SUqBhuRD3r8l0SmLvofsIkU4d5QM%2BioZkXH1U6v4jSygfBiFT%2BEpFlVWgBNfDNqrv6NxRGfCe3lUBInHPRUm61OqDp6WEoLQMQDWQKZiYBfdLdAjdmIE0Wr49OOvTkhR16Tyo5VVWt7xwzfTyQIoxNOjBPf%2F6KnH3Oup4rzoBg8rEzb8oG9d639AbDHEGCFEfqCu9BlS4LykTpnAB8%2FaMnjcpDYCI7vDUFCLlE7zrLQR94AXyhy6I2jieTYRaaEdZwmVGH4b6cXFFsVhOy8vJzm9x5RFsffyp0I0A9b2FpElKCL3FpdQcShaVbPFo7FNefWs1%2BKv7hpBhwwU6Og855YnZt9LZSVDHhIlF5OMooG2MKZXNt2ksMhFLYJrMC0fE26kBvCcT9L9QhgWFDw8L3OYKV3MECfHr03Qfg6XUVST8LbSMmZpPRpMe9RKueEjt%2FO%2F2xiRZL8xf%2BlkPVvvSR7n%2Bw%2BUVk%2FGEEwjtm%2BxAY6pgGhw1RMv9QOmjy5J2v1sgQ%2B6ss8fVJYsedexVVUTl1k8EXOmOrwlXkfg3sD6wLGJ4iwL%2F9PtT3ozKdKCLLFHFBpQrpgdORQ5ezKP0oyR4ksQCLxvS3kqrhgf%2BQiElY1%2BpehJHcD0DJ%2FUJCTxhobA7uc%2Fh3pFL1XYSswHwLvESs8bAcJVFB%2F2ZXW4%2BqIyRdimWSR8HUhaxBgitik7zGY3hCCyO%2FDC84h&X-Amz-Signature=c6516c0d925f4286f5333731562a2bfd8d9a2e265587c9d8ce2cc50e8817ac44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
