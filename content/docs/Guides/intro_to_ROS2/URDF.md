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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNY5RFW5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbj50V7xq65aHOlwV2SwxpPKy%2FhUhcxCrVvadQDI5NtgIgeOaN9QBpBA5lAOS3LAHshKjaDddCnpA9%2BRPcHkEfUB0q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDJoI6GTrhdqwAIUQyyrcAwW7NySG5fCxqnIUZWmzhDOWzv%2BjzspI8FSTEh0qN0zf%2FLCbsFhpnuKmOFYvFph7wM2KuefdVlWT58GXNZUcEqgwDrZqYh77C29BoNmKryTJ8Quf5hiVtwII4x9RPTVMJyQH2fjherZTdcovRB8xHdDOodzNLyXeOdfB3%2B6jWgtg9WftGlF4Sl0JD%2FK6VMZrQs8t9oTp9SURuu0TzgR7OPtki8JBgKtexoe%2FEcut5YJkCJvmAd9fkmzMf2VUf6zOwDchwFry75GJ%2FfzUYyofPldBR8XIc4yD3CWVP3tk6yyxLubQpHusMOGyNQoTgEX6CIC5ik%2FO2DKyQrhUljExSi2dou2s8sXIQQuv0f55tg7d5GMDZC9r2SqdEDs7a00PGABz%2F72dEw9UxtvNZsTzRiV6MVtxMQmI%2FsnVgVvWh0Xt7WySAT33f4wCRVSx2sL8aUMIc81bCoFbmnmwOH%2BrQJcPQIIT9pjvYqMyxWtj%2B3Hta%2B%2FyxDK8UfgVKoHMjAjLAXu1EgfqFifWv1SGj9xLGz9p4DJQq3si%2B5yTtkBX9LapDrLf1wFJ4Ord5BLbD2MEsCAP8f7jKcSEbCkKkpwx5NOS3RH4JU81u6nr9uB0m5lUqFwlJIGZe%2FOEQ7I8MPrx7r0GOqUBNk4u1MLDc%2Fn1OfGs%2FazRn60%2B0c9Ji0Wp7D8YQQLl8xKf8aJTLWVVNWOovhCX28aaNiAgE%2F2G9%2B2evsNuvzQRjudZ0LiqsMjgkb%2FfjlrireQsC33B64y5Ofiw0Hd%2Fv6sFnTYZ0Y86jhld%2FqXR011qF71R6ea1MDeudFqzoQCebiIzdGeW2ct8PtLMJlOivpe3NX2hNp3%2B0toZwWL6ITCBDa59KMdd&X-Amz-Signature=dcb7a4ba96ec250cd42993b42ee0027d7a4770dd6d79253cfe3a53f4ea6e724c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNY5RFW5%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbj50V7xq65aHOlwV2SwxpPKy%2FhUhcxCrVvadQDI5NtgIgeOaN9QBpBA5lAOS3LAHshKjaDddCnpA9%2BRPcHkEfUB0q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDJoI6GTrhdqwAIUQyyrcAwW7NySG5fCxqnIUZWmzhDOWzv%2BjzspI8FSTEh0qN0zf%2FLCbsFhpnuKmOFYvFph7wM2KuefdVlWT58GXNZUcEqgwDrZqYh77C29BoNmKryTJ8Quf5hiVtwII4x9RPTVMJyQH2fjherZTdcovRB8xHdDOodzNLyXeOdfB3%2B6jWgtg9WftGlF4Sl0JD%2FK6VMZrQs8t9oTp9SURuu0TzgR7OPtki8JBgKtexoe%2FEcut5YJkCJvmAd9fkmzMf2VUf6zOwDchwFry75GJ%2FfzUYyofPldBR8XIc4yD3CWVP3tk6yyxLubQpHusMOGyNQoTgEX6CIC5ik%2FO2DKyQrhUljExSi2dou2s8sXIQQuv0f55tg7d5GMDZC9r2SqdEDs7a00PGABz%2F72dEw9UxtvNZsTzRiV6MVtxMQmI%2FsnVgVvWh0Xt7WySAT33f4wCRVSx2sL8aUMIc81bCoFbmnmwOH%2BrQJcPQIIT9pjvYqMyxWtj%2B3Hta%2B%2FyxDK8UfgVKoHMjAjLAXu1EgfqFifWv1SGj9xLGz9p4DJQq3si%2B5yTtkBX9LapDrLf1wFJ4Ord5BLbD2MEsCAP8f7jKcSEbCkKkpwx5NOS3RH4JU81u6nr9uB0m5lUqFwlJIGZe%2FOEQ7I8MPrx7r0GOqUBNk4u1MLDc%2Fn1OfGs%2FazRn60%2B0c9Ji0Wp7D8YQQLl8xKf8aJTLWVVNWOovhCX28aaNiAgE%2F2G9%2B2evsNuvzQRjudZ0LiqsMjgkb%2FfjlrireQsC33B64y5Ofiw0Hd%2Fv6sFnTYZ0Y86jhld%2FqXR011qF71R6ea1MDeudFqzoQCebiIzdGeW2ct8PtLMJlOivpe3NX2hNp3%2B0toZwWL6ITCBDa59KMdd&X-Amz-Signature=cca695a89f0bd43bf373dede83adb3c51cdebf03c304919daba57320630ef1ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
