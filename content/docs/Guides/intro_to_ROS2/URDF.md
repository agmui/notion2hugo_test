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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SSLY5G7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETW4mkhiBCScOxw4ptjmW4iQSkShcT3eFpF2nY%2FrO2NAiEArgTozL8rPtkVaSme6hKjoTZKWZWUplVsDJ7LlXCO8XIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL64iizbo8vB06Zi%2BCrcAz%2FZs%2BcEZtX7huVrSjw7ClIKprm3RWHcvAJG3BXbNBsNtf%2BP4TGTgKuI2AarvUA7nLBtzASUbtyiSLLQDrDXaSuKriFd6Qab%2FF3wixfhosQl5FXAVYfFXHj%2BmFwjCv9zO2T%2Fzl0BbPr7CmPaBGB%2Brb7kpksDV4N8368CWhHRaDwv%2BRjM0mQPbv2bs2LAohqVQkd1q7iVMSy6oeyUEHXr%2FLFgpySQ4LZwAlsm%2FhACLZWDfAVOyIqvM3BgR1iVpGP%2B7%2BUgQtsnU8Tq%2BHTefJYLdemHFFLgNaFy5YCKdx%2F9pFeHYaAxLHM0b1zanNlyGRlsz3BrUGs6qK8hqpezUWSpChZqm%2BqRiNql%2BFAXk%2BngwilT7vSFoCzvcCx%2BiXy4uJv5QJFIPG4asRQNaU692lpjLrLjL4fC%2Fy8AFxqQZb6vP8ipr%2B3V7D0gyEqH5TQZvNcWjMEz%2FRDWIce1F15oy8nEdfs%2B%2BBawstKCXGcgUnaOb%2FT8cs7PoL2sypiJ%2FJP4srzivs4DJHlQPIbDLX9mBLGM6BVxezi%2BWTaz8lIDpNJ7BBj2XAFFps3YgLTVeSS7UYOtAwzqUJhSJVBBa%2FqdXchaDJ8X03m4vHxC9%2F%2BpZSCXuzajN45pfTZUeRP8PjujMKbA1MIGOqUB8jhsjBWNMAezVYS9QheRE30U5iEWbLeASadpAJwmpGB%2BOChm21wdI4d6Lo38vDCg8TB1fV6sfkZMBK%2FjMK3%2FsL1EI%2BqUl5%2Bjc6znBkByBJ97PtQORWcJXVHXQSRcKA9zyAreJltBAxSQ9cfs2xxSAdaXTLPzX3QYUpZtLSUJPDZDT6q8PESUxA0hRJplAvAFU0Fqp10exym9uctj0TlczABghBU8&X-Amz-Signature=a783bb5589b658c3fa69e6f3af13cb74584df002ffcafaf5920cc156230b19fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SSLY5G7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETW4mkhiBCScOxw4ptjmW4iQSkShcT3eFpF2nY%2FrO2NAiEArgTozL8rPtkVaSme6hKjoTZKWZWUplVsDJ7LlXCO8XIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL64iizbo8vB06Zi%2BCrcAz%2FZs%2BcEZtX7huVrSjw7ClIKprm3RWHcvAJG3BXbNBsNtf%2BP4TGTgKuI2AarvUA7nLBtzASUbtyiSLLQDrDXaSuKriFd6Qab%2FF3wixfhosQl5FXAVYfFXHj%2BmFwjCv9zO2T%2Fzl0BbPr7CmPaBGB%2Brb7kpksDV4N8368CWhHRaDwv%2BRjM0mQPbv2bs2LAohqVQkd1q7iVMSy6oeyUEHXr%2FLFgpySQ4LZwAlsm%2FhACLZWDfAVOyIqvM3BgR1iVpGP%2B7%2BUgQtsnU8Tq%2BHTefJYLdemHFFLgNaFy5YCKdx%2F9pFeHYaAxLHM0b1zanNlyGRlsz3BrUGs6qK8hqpezUWSpChZqm%2BqRiNql%2BFAXk%2BngwilT7vSFoCzvcCx%2BiXy4uJv5QJFIPG4asRQNaU692lpjLrLjL4fC%2Fy8AFxqQZb6vP8ipr%2B3V7D0gyEqH5TQZvNcWjMEz%2FRDWIce1F15oy8nEdfs%2B%2BBawstKCXGcgUnaOb%2FT8cs7PoL2sypiJ%2FJP4srzivs4DJHlQPIbDLX9mBLGM6BVxezi%2BWTaz8lIDpNJ7BBj2XAFFps3YgLTVeSS7UYOtAwzqUJhSJVBBa%2FqdXchaDJ8X03m4vHxC9%2F%2BpZSCXuzajN45pfTZUeRP8PjujMKbA1MIGOqUB8jhsjBWNMAezVYS9QheRE30U5iEWbLeASadpAJwmpGB%2BOChm21wdI4d6Lo38vDCg8TB1fV6sfkZMBK%2FjMK3%2FsL1EI%2BqUl5%2Bjc6znBkByBJ97PtQORWcJXVHXQSRcKA9zyAreJltBAxSQ9cfs2xxSAdaXTLPzX3QYUpZtLSUJPDZDT6q8PESUxA0hRJplAvAFU0Fqp10exym9uctj0TlczABghBU8&X-Amz-Signature=74e9142fbacc6579a50d923b17dbcb9ad129d1c8893929bb158fd5511d7f5d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
