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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V27PEYP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCam1aQGMmiCIki5TSNINsXTnIHKAR9Qi39jisB4HVHKgIgFy%2BT7BBX7VvYi5xwNwoNGyOj6mGDTRJNDLnP%2F26nPsgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDO0xAmQp7GU%2FiuL0NircAxFalqgyvyf0LKaeCWbPr0wqDtkG%2FpJ3T0A86cvKUxz4WEXaIgedH%2BTquLddJVT%2FRZZPRyhk2xkrfelvCv5h0Z%2BFlMqO58R4F2cJ%2BmH2wMuEdcuxFc0Tn%2F1UE67R1FW1prbbclKkmsPWJcVBvVg5MDovbXxHPudB%2FLFC1QEJP9psDxHncIccaBo6O9RiWsSUg023vi3MncQfa6CZxXBMl6t%2BSFlWqGb5KzS%2Bi6VqOx%2BH7kY89oBSMbCVlew3lW4SzS9ZN6CqvriKZZSHAfzVCyAi4aWpJJSE5jWdGpeR60g%2B0LyJhPPo55kvLYFfhT9HpROsUiO%2Bw91w%2F8OxCbzusph7H3nxQppF%2BtBtX1vpmBiY%2BQCgyZN2laarIkCq2cSoOCtYqFd%2Bw5xMMtVuVYccdDuI3cM3XsMmP7UD5hAEj%2Ft03hnAW3wA8FUYw8j8BEreFMe5HRShWg3%2FuKnufY%2B%2FBCKt1hkt%2FXs8lY3L8OqB7QU11VAflmmk2%2BCLLNtRZ8%2FVZbXiglyuwfm5V5RMu%2BbLpWDPSx1wuKtEKn2jdMIyj8Kfo1AWhZ88nhttqMEsjpdiWTSA5eXlxL%2BHR3VmfIUSQ6xPsfkudq7h%2FTWTtfAWK1Z5p0ak0H9Pnc%2BpYXEbMKnBw8IGOqUBOZzk%2F4JtnmioPAVRAFD7vy90UfG7TLSC1%2FVA4C6JS5s4qCU1tEbzDMMD45ew8RKYgS9Eolc03f9fnOoOGsfJE3fiOKq6ZtIqrwVFm%2Fdou8oLnKLtpXb%2BcMvzEP1vbsEG%2FXyvXcLEt3nDn1ItzJMkghUoBPXPr0ILtfBVm0AF50MiUCeMqg7xjEvXj90HLv5TZnN01Avz%2B7%2B73lH0vwllYbvNlGwi&X-Amz-Signature=4888c269ad64f0513ff6a10b6679428f03d7f9e2c34b186dea3bf34fece32f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V27PEYP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCam1aQGMmiCIki5TSNINsXTnIHKAR9Qi39jisB4HVHKgIgFy%2BT7BBX7VvYi5xwNwoNGyOj6mGDTRJNDLnP%2F26nPsgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDO0xAmQp7GU%2FiuL0NircAxFalqgyvyf0LKaeCWbPr0wqDtkG%2FpJ3T0A86cvKUxz4WEXaIgedH%2BTquLddJVT%2FRZZPRyhk2xkrfelvCv5h0Z%2BFlMqO58R4F2cJ%2BmH2wMuEdcuxFc0Tn%2F1UE67R1FW1prbbclKkmsPWJcVBvVg5MDovbXxHPudB%2FLFC1QEJP9psDxHncIccaBo6O9RiWsSUg023vi3MncQfa6CZxXBMl6t%2BSFlWqGb5KzS%2Bi6VqOx%2BH7kY89oBSMbCVlew3lW4SzS9ZN6CqvriKZZSHAfzVCyAi4aWpJJSE5jWdGpeR60g%2B0LyJhPPo55kvLYFfhT9HpROsUiO%2Bw91w%2F8OxCbzusph7H3nxQppF%2BtBtX1vpmBiY%2BQCgyZN2laarIkCq2cSoOCtYqFd%2Bw5xMMtVuVYccdDuI3cM3XsMmP7UD5hAEj%2Ft03hnAW3wA8FUYw8j8BEreFMe5HRShWg3%2FuKnufY%2B%2FBCKt1hkt%2FXs8lY3L8OqB7QU11VAflmmk2%2BCLLNtRZ8%2FVZbXiglyuwfm5V5RMu%2BbLpWDPSx1wuKtEKn2jdMIyj8Kfo1AWhZ88nhttqMEsjpdiWTSA5eXlxL%2BHR3VmfIUSQ6xPsfkudq7h%2FTWTtfAWK1Z5p0ak0H9Pnc%2BpYXEbMKnBw8IGOqUBOZzk%2F4JtnmioPAVRAFD7vy90UfG7TLSC1%2FVA4C6JS5s4qCU1tEbzDMMD45ew8RKYgS9Eolc03f9fnOoOGsfJE3fiOKq6ZtIqrwVFm%2Fdou8oLnKLtpXb%2BcMvzEP1vbsEG%2FXyvXcLEt3nDn1ItzJMkghUoBPXPr0ILtfBVm0AF50MiUCeMqg7xjEvXj90HLv5TZnN01Avz%2B7%2B73lH0vwllYbvNlGwi&X-Amz-Signature=dcd5b87f58cb760c2d5466ee24146e4e3a8a006b625b56d0197654c3f00a1e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
