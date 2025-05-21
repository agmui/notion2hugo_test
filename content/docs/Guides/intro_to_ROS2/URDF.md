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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG27POTE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGebThFJWRkV1yf4T%2BHqexYkhCHXr9hwFBYsN21UG0wGAiBQj48et9GHh7eGvcUnEjImRfpSlXXpGTxAnaL%2B9ld8dSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZEw99reWNyFbpmrKtwDLU0Q7XiCHUYaneSdLjppX71adAX80%2FhqHA60Rc6kiE5HXxh%2BSYAHCPIhPm4u0xTo8JNz%2FgDIAlrlF0hwsEkWfXLbQiPm%2FlUFgdSRmC7EShWzKB4PoIpxuqJzdNinrgk2zb26sxEjaYnesh4eX3l2iFddJE9G0IOfo9XtvVK5cvY%2B1Ej7dHFsLOomDkXJTAr6%2B%2Fy7oMbmha4wWhUaqi7D1pRA4gITabYohticmU5Uv6n%2FSs47FqsF1fJepNwWjLRf%2Bb6jL2VmAkNDG%2FZ6jWwOEn6RD%2FK4%2BZudsNTRZSqpyhTAk90awANCwQWCmv5yETyfWei14HHXSE9EqRwdalSHDcKC4NTu4QbTniMRgs3P2iw48JInzv%2BpyTiMG9M2mTI1hlAzzNcmrjNhD9Poq4Ifm77H3TWrzkFMvlJopkNVktxdpacoPDewvzAVwYbSN9SGMNxsEqSmQVd2ncOSq0%2BgifFJ%2BcCMPy7dbN1CzfcfP9iKJ2AgbwID%2B1z2BVLRN2zzg95eCOBk7dCdAjtxSWHdn1hoL1lc7k0Pn2q3EersA82HjOwra3Rdl4%2FlyaHjnufz97UedOd4AZS78vDkXR6PdbQevhHJLcS0eNfOyq44dk4TrYdVweRgrA1liKowo5C1wQY6pgEyrhBFdg8%2FW4IbsNgy3alRBKiEUZddYCmkvAeG%2FoT3k9T7kRNzzuwySRRL8AvjXKaP%2Br3qWOuBlPSO7ageyzcL7O%2F37BEGGNlmhYFmx4QeSviuFxIWJ0EbfWL9%2BA2nTq37kWEu5yIV3yJCDXM4hKD%2BGL1eqX3e4bx8HW4F6AZHE9wQ3CZdAT5WymYi3nkBO%2BKODEfP%2BQC%2FBuYRQwfGN1eZK6YlZCWU&X-Amz-Signature=20a08ce6071b91cf1df8f899c790646db41549636604e40f09654ab46fb25e5c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG27POTE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGebThFJWRkV1yf4T%2BHqexYkhCHXr9hwFBYsN21UG0wGAiBQj48et9GHh7eGvcUnEjImRfpSlXXpGTxAnaL%2B9ld8dSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZEw99reWNyFbpmrKtwDLU0Q7XiCHUYaneSdLjppX71adAX80%2FhqHA60Rc6kiE5HXxh%2BSYAHCPIhPm4u0xTo8JNz%2FgDIAlrlF0hwsEkWfXLbQiPm%2FlUFgdSRmC7EShWzKB4PoIpxuqJzdNinrgk2zb26sxEjaYnesh4eX3l2iFddJE9G0IOfo9XtvVK5cvY%2B1Ej7dHFsLOomDkXJTAr6%2B%2Fy7oMbmha4wWhUaqi7D1pRA4gITabYohticmU5Uv6n%2FSs47FqsF1fJepNwWjLRf%2Bb6jL2VmAkNDG%2FZ6jWwOEn6RD%2FK4%2BZudsNTRZSqpyhTAk90awANCwQWCmv5yETyfWei14HHXSE9EqRwdalSHDcKC4NTu4QbTniMRgs3P2iw48JInzv%2BpyTiMG9M2mTI1hlAzzNcmrjNhD9Poq4Ifm77H3TWrzkFMvlJopkNVktxdpacoPDewvzAVwYbSN9SGMNxsEqSmQVd2ncOSq0%2BgifFJ%2BcCMPy7dbN1CzfcfP9iKJ2AgbwID%2B1z2BVLRN2zzg95eCOBk7dCdAjtxSWHdn1hoL1lc7k0Pn2q3EersA82HjOwra3Rdl4%2FlyaHjnufz97UedOd4AZS78vDkXR6PdbQevhHJLcS0eNfOyq44dk4TrYdVweRgrA1liKowo5C1wQY6pgEyrhBFdg8%2FW4IbsNgy3alRBKiEUZddYCmkvAeG%2FoT3k9T7kRNzzuwySRRL8AvjXKaP%2Br3qWOuBlPSO7ageyzcL7O%2F37BEGGNlmhYFmx4QeSviuFxIWJ0EbfWL9%2BA2nTq37kWEu5yIV3yJCDXM4hKD%2BGL1eqX3e4bx8HW4F6AZHE9wQ3CZdAT5WymYi3nkBO%2BKODEfP%2BQC%2FBuYRQwfGN1eZK6YlZCWU&X-Amz-Signature=1f35021a6064f59e817018892b2bdb6593559518a3e8b0941775bb0e3afffd1d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
