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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y72XTJRZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHVkqN5AXg2%2FQmbb9eYZ7lH0%2FINu8lzJ7mltA1%2Bkh9QAiA0JMXB2B6ya%2FTRttjlLwutep3vOkJL0MzHm4SFlrm6JSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRixvfollQMfBGf9CKtwD8NLYtzmwvncWea%2FQ%2FL643lfDge4TehJIowlUav5otGi0f0bbuVJ3Zlll9d1RM4ypVPp72F5sshvPaSG6XFxUNYBl%2FMDWcIvNbRwhOtFftEdkgr7avkLgH4whTPeLmr9nZxZrKXLUIsPSUehJir06Vu9uB9I%2Ba8YZhoHJHe6CftgdBpU09c0475vvH0bbIBNHMtYsYfR2MEJhVnY%2BCLjf2eMV2z32DW%2BUnYTySm10vU%2BmM5K1wNhFBnotLSAvdv9GDUQwy3cgFwtzo4uG%2FDHqgUtlc%2F98quChJUUNg2Uox2kemu%2B7%2F5vtaAT3pnkNox9cz6lCuVM%2BK060xJl4jrwv%2BrcjUpIt1ZxOZ13Ul94fPos%2FJf9CdoCSftfe6adLGLRYeVAL%2BsGiPBFglom8%2BU6H%2FxdVtg8qJMv7DD%2FiL2BwDt9xwGpHsc%2B9hZGaB71yWC3odyZ5xlC8ge7G9x5A2%2FwwSdCYZpTbpu9JJwzdt2tcYlkUyacwjui8UJNHcd%2FUXPJSJONT69s%2BrcoTZdopv4u0ql%2F%2BOIj9TOldm3bmyw9uvlt637gS5sl7Co2Nwlvcz2x2ZBQYuzMAaZaTleaYmA00Bd9n4CEcD6%2F%2FkeKnsKS6YGfey0PE2GBH28Y8Ljow6aGMwgY6pgHIz27C%2BFBhR%2BL5pHIrJIEQn2XM%2F4qk07L2BjHAKmIkdm0UTEgd%2BNi3k5oU64xgyB83eTCzFmgMhlFvhQ%2BAIamCdwBesl4FKsOSnbEFDpsbA8IF0146xOqTG6AkaO2JUBNCRh74tCBzPiTRolg8f%2FJ0ai6Zg7YZ2Y5BgwgmCFO9CVnOgwzul64vDzUFcoQV46LMw1BnLyk3JLdKXuvZLtwdvjjL49px&X-Amz-Signature=6357fee84eca619120081add6e8d90d7f5891ccc84883a15f46b5d7880687587&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y72XTJRZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHVkqN5AXg2%2FQmbb9eYZ7lH0%2FINu8lzJ7mltA1%2Bkh9QAiA0JMXB2B6ya%2FTRttjlLwutep3vOkJL0MzHm4SFlrm6JSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMRixvfollQMfBGf9CKtwD8NLYtzmwvncWea%2FQ%2FL643lfDge4TehJIowlUav5otGi0f0bbuVJ3Zlll9d1RM4ypVPp72F5sshvPaSG6XFxUNYBl%2FMDWcIvNbRwhOtFftEdkgr7avkLgH4whTPeLmr9nZxZrKXLUIsPSUehJir06Vu9uB9I%2Ba8YZhoHJHe6CftgdBpU09c0475vvH0bbIBNHMtYsYfR2MEJhVnY%2BCLjf2eMV2z32DW%2BUnYTySm10vU%2BmM5K1wNhFBnotLSAvdv9GDUQwy3cgFwtzo4uG%2FDHqgUtlc%2F98quChJUUNg2Uox2kemu%2B7%2F5vtaAT3pnkNox9cz6lCuVM%2BK060xJl4jrwv%2BrcjUpIt1ZxOZ13Ul94fPos%2FJf9CdoCSftfe6adLGLRYeVAL%2BsGiPBFglom8%2BU6H%2FxdVtg8qJMv7DD%2FiL2BwDt9xwGpHsc%2B9hZGaB71yWC3odyZ5xlC8ge7G9x5A2%2FwwSdCYZpTbpu9JJwzdt2tcYlkUyacwjui8UJNHcd%2FUXPJSJONT69s%2BrcoTZdopv4u0ql%2F%2BOIj9TOldm3bmyw9uvlt637gS5sl7Co2Nwlvcz2x2ZBQYuzMAaZaTleaYmA00Bd9n4CEcD6%2F%2FkeKnsKS6YGfey0PE2GBH28Y8Ljow6aGMwgY6pgHIz27C%2BFBhR%2BL5pHIrJIEQn2XM%2F4qk07L2BjHAKmIkdm0UTEgd%2BNi3k5oU64xgyB83eTCzFmgMhlFvhQ%2BAIamCdwBesl4FKsOSnbEFDpsbA8IF0146xOqTG6AkaO2JUBNCRh74tCBzPiTRolg8f%2FJ0ai6Zg7YZ2Y5BgwgmCFO9CVnOgwzul64vDzUFcoQV46LMw1BnLyk3JLdKXuvZLtwdvjjL49px&X-Amz-Signature=87e981f75f7c51f347acaa7bb8d4f8bdc3c8293d5fbb7be3b817a53c9f20f0e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
