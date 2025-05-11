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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YC4ITVZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCwqt0n1sANV4k1eZTM1xrgsMBB7CFb4PRNyptuHm6XugIgK5nIm7wurhdPiJ99SSsovw9rVO5BeH3xF2HHRzryq8sqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4VTSqhu81fE9w8VCrcA0yZPErk%2BVnQuJcvah1UHuK8tc00dnY0z97%2BSig5hq%2B6VQobBXTdXIQy1u6EH9fpB%2FvFdfrGXNn6dyp4Rf7tksFk9sMX%2BD9SdPvmf%2FC245MvIyYpzF417omcjEQNnQ3pqwmCCVZTyJSxK7%2Bxh3NozHO4oSFodII%2BIq%2F5VrzjtbVHtJXuE4luAsdNISSXhNYqN99y24bhA5i8M1oFl9InNBToHD9PKKcp7UdPl0phREoQ36IKVSZSyc994M0SJsFN%2F2t18r78jSLNG3DLF01F%2FtNpbfj0qFwckiD9jTXRgw1Cztglj6EF%2BPj%2BuXUMo52OCmmVbVDLekoHWdLglbtTS%2BQcpq5qMn8YLoyYpEpy%2Bjh3lGfLv%2B4QsZWR1V9PMl30YuzvQR338UsruD9JzjDnSl%2BBrgEIwScqUyWINPvy7JwMHIsD1DOE90EymAR9sw827GvbkVJ350owCUnXo%2Bo59KgPtzryBXmOrne0kR7vAMp2qxdjCV3ORe9zYEeHv3Wf7hVCpyQ8heagR9%2BYpeS4jfN1skuOxNOcXodAErVhf038P9hoASoyLx0gIWJJ62cB6YOJJb4fW%2FuZbWDm5AHTnG%2BvMI9cOk7b2B56LgXD9VTTc2sGGsjlNn45%2FqeWMLSdgsEGOqUBDUiXwE0c0LNRz95VbHJDPRZ%2Fg2YFk5bK3S0Yx4pGasCVGm0xUijSMQIdHF9EWzEKMJ4sdMuphf0YIANGS0Pss8cun04iRUfZ5VYB6xMyUbJL6gud03y4Q8lR7A3Kw%2FjTR7jA%2BAaE1wlfQlNGhsiovFB8iHiXngrMIuEiE4fFxusPhbeGZlmKjtDP7wlAaHDU3Nwr3pkKuazZlqYaKRsMXiT%2FN2QX&X-Amz-Signature=53a8235f4329b95af99a15eb2f0338104f2548f55cda282051371d89da084f79&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YC4ITVZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCwqt0n1sANV4k1eZTM1xrgsMBB7CFb4PRNyptuHm6XugIgK5nIm7wurhdPiJ99SSsovw9rVO5BeH3xF2HHRzryq8sqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4VTSqhu81fE9w8VCrcA0yZPErk%2BVnQuJcvah1UHuK8tc00dnY0z97%2BSig5hq%2B6VQobBXTdXIQy1u6EH9fpB%2FvFdfrGXNn6dyp4Rf7tksFk9sMX%2BD9SdPvmf%2FC245MvIyYpzF417omcjEQNnQ3pqwmCCVZTyJSxK7%2Bxh3NozHO4oSFodII%2BIq%2F5VrzjtbVHtJXuE4luAsdNISSXhNYqN99y24bhA5i8M1oFl9InNBToHD9PKKcp7UdPl0phREoQ36IKVSZSyc994M0SJsFN%2F2t18r78jSLNG3DLF01F%2FtNpbfj0qFwckiD9jTXRgw1Cztglj6EF%2BPj%2BuXUMo52OCmmVbVDLekoHWdLglbtTS%2BQcpq5qMn8YLoyYpEpy%2Bjh3lGfLv%2B4QsZWR1V9PMl30YuzvQR338UsruD9JzjDnSl%2BBrgEIwScqUyWINPvy7JwMHIsD1DOE90EymAR9sw827GvbkVJ350owCUnXo%2Bo59KgPtzryBXmOrne0kR7vAMp2qxdjCV3ORe9zYEeHv3Wf7hVCpyQ8heagR9%2BYpeS4jfN1skuOxNOcXodAErVhf038P9hoASoyLx0gIWJJ62cB6YOJJb4fW%2FuZbWDm5AHTnG%2BvMI9cOk7b2B56LgXD9VTTc2sGGsjlNn45%2FqeWMLSdgsEGOqUBDUiXwE0c0LNRz95VbHJDPRZ%2Fg2YFk5bK3S0Yx4pGasCVGm0xUijSMQIdHF9EWzEKMJ4sdMuphf0YIANGS0Pss8cun04iRUfZ5VYB6xMyUbJL6gud03y4Q8lR7A3Kw%2FjTR7jA%2BAaE1wlfQlNGhsiovFB8iHiXngrMIuEiE4fFxusPhbeGZlmKjtDP7wlAaHDU3Nwr3pkKuazZlqYaKRsMXiT%2FN2QX&X-Amz-Signature=74f9e820c89a499ab5f03bea594474a7fdaa8e6eb21b737b30cbd5c20d5df8fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
