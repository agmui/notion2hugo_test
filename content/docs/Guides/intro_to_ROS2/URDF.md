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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZVQQRXF%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCkqfCwprHQDlhvue%2BsnqlV4gbCmgtTPXSQ0h4XiTfxDAIhAIpCbXCvyYqGv%2BPmmBklfkCaD%2Bv%2BpMoTYsMkZ2l1SvdqKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXpgihbwnXD3LK8CQq3APDO0yr52MnXNX1ajGUV5nG8E%2BtbpcEwhWoz7%2FqKfAI2kenBuo8ghduHlQTwFFtHJnAUB0wgjjgjEbnvsOmuYcHdu%2BUZ8ikhhW7SumOD529OGEcvCIRutA%2FmlWPltKMrdSRGZRovdA2xGl3AwDgLzdrz4J4cPKru5X6HkKo5Nl98O%2BFzvlFAf7NBh5H7aXtMWKoa0SGKpVGSL3l8WTjDFSVh5TzTgcjl8wul8DUPdo%2BUpAgMCdj0Saw4UtiWRF9crbPDCeQ6%2BjUNxdn6agn4Cu%2BkY85VJg3NRm%2F7tIdvXmPgptfL5s9htbBRwEVoWzl3jOdUj2EG4gTJOvLmWbUN4wd18cgsjPDcFMnmDb1SlfKVITQwtjQeBVweVFshMitjtxTajzNI4N0r%2FQtpreReV2fX00FZOffpYRJl1qhWzxIkDzA5vPAB%2BE3ovdsy2dWaHXLiX6TVE%2Fr2QA20z4XOxv7MF3uguFkSkkrC1UMSBuEhkdd85Auolo2jP2AvGPEWVQd2KJCIEBeLs95fLs5nIYAInhXX%2BFYwuseGhxkJe6jp%2Br1ZBcE8kj%2FtMAvP158z0tzV8O%2BNdMbQkI5bexffcbDkw1mqWZ1xGyDmdIGKo9zD3IzfBAo0kx%2FZVI3mzDl3%2BbDBjqkAWjPFP5gR6kr95SbWgsOTHHMa6amuSVoiGUOj6XYCiXdF8PgnFGAKaCOV5Ivn0v4pgOiHiUweoDEALUerJ%2F%2B2zG3TpQ7E5roH78rTUAoTSgUMlgfwCdt9zhJi54NMX0%2BagSGRvXhyh7RFsS858ceDe3qxl5jxJKAPVOwustJ5BtG0B%2BceGQU%2BXXYqpbMfJVAmcbR5U2lxSrwqs%2FgxZje1jgcG%2BZ4&X-Amz-Signature=7b85ced0d3db95b093934274d22eee045aadbde8b2241253299a761324c1b884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZVQQRXF%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCkqfCwprHQDlhvue%2BsnqlV4gbCmgtTPXSQ0h4XiTfxDAIhAIpCbXCvyYqGv%2BPmmBklfkCaD%2Bv%2BpMoTYsMkZ2l1SvdqKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXpgihbwnXD3LK8CQq3APDO0yr52MnXNX1ajGUV5nG8E%2BtbpcEwhWoz7%2FqKfAI2kenBuo8ghduHlQTwFFtHJnAUB0wgjjgjEbnvsOmuYcHdu%2BUZ8ikhhW7SumOD529OGEcvCIRutA%2FmlWPltKMrdSRGZRovdA2xGl3AwDgLzdrz4J4cPKru5X6HkKo5Nl98O%2BFzvlFAf7NBh5H7aXtMWKoa0SGKpVGSL3l8WTjDFSVh5TzTgcjl8wul8DUPdo%2BUpAgMCdj0Saw4UtiWRF9crbPDCeQ6%2BjUNxdn6agn4Cu%2BkY85VJg3NRm%2F7tIdvXmPgptfL5s9htbBRwEVoWzl3jOdUj2EG4gTJOvLmWbUN4wd18cgsjPDcFMnmDb1SlfKVITQwtjQeBVweVFshMitjtxTajzNI4N0r%2FQtpreReV2fX00FZOffpYRJl1qhWzxIkDzA5vPAB%2BE3ovdsy2dWaHXLiX6TVE%2Fr2QA20z4XOxv7MF3uguFkSkkrC1UMSBuEhkdd85Auolo2jP2AvGPEWVQd2KJCIEBeLs95fLs5nIYAInhXX%2BFYwuseGhxkJe6jp%2Br1ZBcE8kj%2FtMAvP158z0tzV8O%2BNdMbQkI5bexffcbDkw1mqWZ1xGyDmdIGKo9zD3IzfBAo0kx%2FZVI3mzDl3%2BbDBjqkAWjPFP5gR6kr95SbWgsOTHHMa6amuSVoiGUOj6XYCiXdF8PgnFGAKaCOV5Ivn0v4pgOiHiUweoDEALUerJ%2F%2B2zG3TpQ7E5roH78rTUAoTSgUMlgfwCdt9zhJi54NMX0%2BagSGRvXhyh7RFsS858ceDe3qxl5jxJKAPVOwustJ5BtG0B%2BceGQU%2BXXYqpbMfJVAmcbR5U2lxSrwqs%2FgxZje1jgcG%2BZ4&X-Amz-Signature=d5f7a7ae8749147c2d9e1caf0b63b156b2aed84707cfc14c6b83139ccb7f44b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
