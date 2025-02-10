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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUYXDEKV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6p9fnbk26YdVuTHj%2BF4n46KgbxU6ub4SKSNNpqoZufgIgaQCcT7S1HwsSHtu7kHd%2Bvdqm4eEhpT01%2BdalYKdVebwqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDNxHc62jZoUF07ySrcA2TxxXMkpDrCBWYu1Dk3Snrhcrw2oav6XPZIzO%2F71kWrL0DwtaJO1B7w6oN4BedC4%2Fex5KYkHPAtY4uvlmXOPdw9V5hahQI%2FZzZ6s1FG02rLW6Iyl%2BCPQO%2BZ2osaODKGJSwOalnJ74hHY2cf5I%2FUr4oQinV%2FylAo6ZA7kkfSQWv7ZqQ63C4gIKhcPSD64qsqRUQ6CMBYl2cbGJCppR7UIiSpn20gcQUUwJEJtb0f5YMvEWWW%2BcXCzEmWTpDcK%2B0UrQXohTtSGnmn6OIVaAVDmR5eU3sm2868cgMMgbUz0dNKdIMKrHy%2BxXrVQN5KG4gvLVmQ2wGSMvZM64rjoLCLom4gW%2B%2BteAs1%2BwI4k%2BJYLSdn9qH7BMeE15gFumr9DgWTaCNOSLpo2%2BWGwGzhGH7EBAJgZ4XcxfhJ9%2FSUFA7fsDSlQ4CjyPBpYwXJtD3zmeVEk%2FK74QHjzyrMguWwitAaSD9CfHN%2FSpP2P1dtitawOgUNrY3gNtHfrImZEz%2FNaTjvUlzeYlpmyif64Pt%2FRgAt9hVNWhEyV1QF3AC95LFt%2BWdPsF8YwLmNOF3sCQqAEwqD0WeC32%2BGIwRNtvUFf%2Bv8g9SR7Dq6OBY5MskxwZX3XpC%2BhgJsGtPHRuYqJZalMO%2B8qL0GOqUBP6HHCrA96O7Fahnz0qqm9OeHOGpFp6Nznb7VQUhHddAGvI1jbeGthnou6hdv7sDkrewGbpMg%2FbcvZm4lThJkrxkJLl7syTG4hbzIpQykKMqhiZFu%2BTCUMMfw6ztRdBsUSm7%2BWCFncDutNbBKNXZWHZDBNmP4e2pMCv4af5Xl5LX0Twfh65gc9iG0BMw3t6CUT1v9Kxe3kzGB1MSLOwO6Er1xwqJr&X-Amz-Signature=c2524f1ac387cb8a85e64e137f79eb386d46a748635c0d7ec0e1e4362eacd435&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUYXDEKV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6p9fnbk26YdVuTHj%2BF4n46KgbxU6ub4SKSNNpqoZufgIgaQCcT7S1HwsSHtu7kHd%2Bvdqm4eEhpT01%2BdalYKdVebwqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDNxHc62jZoUF07ySrcA2TxxXMkpDrCBWYu1Dk3Snrhcrw2oav6XPZIzO%2F71kWrL0DwtaJO1B7w6oN4BedC4%2Fex5KYkHPAtY4uvlmXOPdw9V5hahQI%2FZzZ6s1FG02rLW6Iyl%2BCPQO%2BZ2osaODKGJSwOalnJ74hHY2cf5I%2FUr4oQinV%2FylAo6ZA7kkfSQWv7ZqQ63C4gIKhcPSD64qsqRUQ6CMBYl2cbGJCppR7UIiSpn20gcQUUwJEJtb0f5YMvEWWW%2BcXCzEmWTpDcK%2B0UrQXohTtSGnmn6OIVaAVDmR5eU3sm2868cgMMgbUz0dNKdIMKrHy%2BxXrVQN5KG4gvLVmQ2wGSMvZM64rjoLCLom4gW%2B%2BteAs1%2BwI4k%2BJYLSdn9qH7BMeE15gFumr9DgWTaCNOSLpo2%2BWGwGzhGH7EBAJgZ4XcxfhJ9%2FSUFA7fsDSlQ4CjyPBpYwXJtD3zmeVEk%2FK74QHjzyrMguWwitAaSD9CfHN%2FSpP2P1dtitawOgUNrY3gNtHfrImZEz%2FNaTjvUlzeYlpmyif64Pt%2FRgAt9hVNWhEyV1QF3AC95LFt%2BWdPsF8YwLmNOF3sCQqAEwqD0WeC32%2BGIwRNtvUFf%2Bv8g9SR7Dq6OBY5MskxwZX3XpC%2BhgJsGtPHRuYqJZalMO%2B8qL0GOqUBP6HHCrA96O7Fahnz0qqm9OeHOGpFp6Nznb7VQUhHddAGvI1jbeGthnou6hdv7sDkrewGbpMg%2FbcvZm4lThJkrxkJLl7syTG4hbzIpQykKMqhiZFu%2BTCUMMfw6ztRdBsUSm7%2BWCFncDutNbBKNXZWHZDBNmP4e2pMCv4af5Xl5LX0Twfh65gc9iG0BMw3t6CUT1v9Kxe3kzGB1MSLOwO6Er1xwqJr&X-Amz-Signature=6d0348ff63d15818dd56ab498c29def4a9a7d376f38ab4e1b70a6ec444bdf844&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
