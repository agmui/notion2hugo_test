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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XSPSL7R%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEClYfhvtB6UwEDigjKCn7y%2F3mo9siQpGIgPuMJZICjmAiEAgRvV%2FPXeqfw7MiXzq3DR7hS3pKIFI4uFIdC7tglH2rgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2%2FC59sOMnfSIOXPyrcA2jvBdNxFTBxqLmw2BfTOcxMsI4MUDDxgBEaLjgX09okaMPQuz19LZRr5lZD0aUE1PxxnP%2FJrBiE4itjvY7bj1E3r75GlSbZUqEFNdSfZUzNFdT0yq88VUHq2gtmJEGCnSQYPzO3iFNo4Zf%2B3FrJzx3acxT7AABvypkzE6DdzpmYzUDdRb9XI74nARKeDHmezqiKKVy2zcXG83fS1JuYOMISU%2FLHCq6KbJUvm3j%2BTWjwxD5Q37nAiI7kQRzYrEr9DwycsjIQ4277emMfpzoHXZUeKQJKCF1Y2EsjtWP1sv503zsIdDWEt8lb3a3%2F49QVI4JiTKTsB73I4yZuDH7SZ5LZUX%2BL6xKxPgkZhuomcxe8wi1eoEBknIvFf%2FSdapsPMvS4gEHyd79nQKYrdcpyFLekacuyzvr1jejO4QvaDn%2Bt%2Bll07KW7K4JOiN9GHshFCPyxoVXFerzbOmxXTUmKB8E0ZXUpUWJlUEb71ctTrPjirc0E%2FLrLMI88sHHCC7LvOeU6B4lWfhymUtB9wDj3TXKUwv09IEZn3qk3uNFqw1ioA%2BHnYPHQgTvWB1d0MVws9WecpaZlLQt1VLxVZhE0n4fo5QpAH1dC9dwP9Smi0YU8%2BcVkf%2FriTFoQ1kMOMOXo5bwGOqUB%2BfrIQ2mQnxRGnCvBOuYrwRnRfBxdRZr2UByEkno%2B9JgQM2TCsgyQNuecily4x6MX3t4SkXSzUfiG5oWC4%2Fieom5kcdLOomergtyc8xzYSu1yjHtDyWZkyHHaI%2FzxBGsIE5%2BDI74LORcgAAl7CkaPxfLiEBwQuSKwyich0USzsFcFwyfBkh78KdcPq9n164MyDp1JX0tM8AqXcadp8iqfD0OlieBk&X-Amz-Signature=564248bccc6d68201db05e443de17f70147e479ef3b00b54ca1ff79a3edbb0e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XSPSL7R%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEClYfhvtB6UwEDigjKCn7y%2F3mo9siQpGIgPuMJZICjmAiEAgRvV%2FPXeqfw7MiXzq3DR7hS3pKIFI4uFIdC7tglH2rgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2%2FC59sOMnfSIOXPyrcA2jvBdNxFTBxqLmw2BfTOcxMsI4MUDDxgBEaLjgX09okaMPQuz19LZRr5lZD0aUE1PxxnP%2FJrBiE4itjvY7bj1E3r75GlSbZUqEFNdSfZUzNFdT0yq88VUHq2gtmJEGCnSQYPzO3iFNo4Zf%2B3FrJzx3acxT7AABvypkzE6DdzpmYzUDdRb9XI74nARKeDHmezqiKKVy2zcXG83fS1JuYOMISU%2FLHCq6KbJUvm3j%2BTWjwxD5Q37nAiI7kQRzYrEr9DwycsjIQ4277emMfpzoHXZUeKQJKCF1Y2EsjtWP1sv503zsIdDWEt8lb3a3%2F49QVI4JiTKTsB73I4yZuDH7SZ5LZUX%2BL6xKxPgkZhuomcxe8wi1eoEBknIvFf%2FSdapsPMvS4gEHyd79nQKYrdcpyFLekacuyzvr1jejO4QvaDn%2Bt%2Bll07KW7K4JOiN9GHshFCPyxoVXFerzbOmxXTUmKB8E0ZXUpUWJlUEb71ctTrPjirc0E%2FLrLMI88sHHCC7LvOeU6B4lWfhymUtB9wDj3TXKUwv09IEZn3qk3uNFqw1ioA%2BHnYPHQgTvWB1d0MVws9WecpaZlLQt1VLxVZhE0n4fo5QpAH1dC9dwP9Smi0YU8%2BcVkf%2FriTFoQ1kMOMOXo5bwGOqUB%2BfrIQ2mQnxRGnCvBOuYrwRnRfBxdRZr2UByEkno%2B9JgQM2TCsgyQNuecily4x6MX3t4SkXSzUfiG5oWC4%2Fieom5kcdLOomergtyc8xzYSu1yjHtDyWZkyHHaI%2FzxBGsIE5%2BDI74LORcgAAl7CkaPxfLiEBwQuSKwyich0USzsFcFwyfBkh78KdcPq9n164MyDp1JX0tM8AqXcadp8iqfD0OlieBk&X-Amz-Signature=273c4b8d44d1e2edcbfdb5fffd713dd6ee498f6f6712f3884169cd334a6916d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
