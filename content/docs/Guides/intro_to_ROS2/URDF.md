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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBKITK7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBB5%2BGBaPld1C9QNv9etM7MYJYcvhhzxNrjcSCUbv4VAiEAiyQUx8cnlcIfiXsZTXDvXvc4%2FKTdtXg1H%2B5ChzghUekqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnVJY1QaRa%2BcG%2F7MircA5aHyg5A7rAQs0kVGeExoj5GjjZcqM0J8s8vMJYV0WRmPAHifOqDtkGLtStda12OUvCg1ZLMRQn9kR3wUBxAym%2ByG5Hdw0x7C8DuXXmEZmRnaE37QaMDuGIKwnx1%2BwEYy%2Bzezi9ExAMUm6Ifv8HR7lV8YsqSxhRxDdo59TDq5vKt%2BYUbMOhNlln0o1lJ%2F7xXs1fW8SkkT1b88Lf5DSVQusLEAr1jRCYXatAl5OcbHowgSfqqmQVXxltHXdGW4DvxvfOp40I%2FOWHngXSCPiU1XMGPjAK2qxPz0sffApr9rJrrH62k4KUfoOMu5BTwNHU5elBZZNO1tKhZ95q9Qv3ugs0DCwNm5bDlEEL%2Bge%2BTLVcs%2Bm3JDo1uwPF0la0xWt8JRDqLAqw%2FicND6OCGIeclUSTjxaVfrHgivV88RcCke3fXzISl%2BPe86%2FRRkYN%2F%2F6xJTGnJKS6vcDEUXHFJxn06qdNq8Ct88gq61BnjD7EVKj79zCt%2FWWWi5D314DGLdZlUeRc%2BgFPL%2F4hU1JlqTgPauaBkQMGqMfK2DYgJHZuIPVExbVvneIKQUmVXs%2BBdMwoMHfq40ol2hDPETCHEg9I0W2kCdMiZdYiek30jae%2BspKxTwHOYMHHneDifN49BMPbpr70GOqUB7aZDNuVpnw8dpY71jw6nItmFNIA9%2FUoftPixyYUeJJCirBwAAd68ZQxKkwp9nitf%2FTL1SUeA90DsIrsi%2FQsGH18GXwLJXDBtxcR%2FCIyIhZyfzT2xQWGUpMrr7IxoxmXJFCVEeFlIwq5%2BXlud5G9k8G9BMkNr%2BVfx5oDRGirVGX3aaaw2AS61Ths987pRjzAfwKWTbYpNxlFZoSXfSdnYlyT5jSrS&X-Amz-Signature=350f242a3f0dcb63c71fb7477cf1120936a769e45197040975fea6cf34d7effa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBKITK7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBB5%2BGBaPld1C9QNv9etM7MYJYcvhhzxNrjcSCUbv4VAiEAiyQUx8cnlcIfiXsZTXDvXvc4%2FKTdtXg1H%2B5ChzghUekqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnVJY1QaRa%2BcG%2F7MircA5aHyg5A7rAQs0kVGeExoj5GjjZcqM0J8s8vMJYV0WRmPAHifOqDtkGLtStda12OUvCg1ZLMRQn9kR3wUBxAym%2ByG5Hdw0x7C8DuXXmEZmRnaE37QaMDuGIKwnx1%2BwEYy%2Bzezi9ExAMUm6Ifv8HR7lV8YsqSxhRxDdo59TDq5vKt%2BYUbMOhNlln0o1lJ%2F7xXs1fW8SkkT1b88Lf5DSVQusLEAr1jRCYXatAl5OcbHowgSfqqmQVXxltHXdGW4DvxvfOp40I%2FOWHngXSCPiU1XMGPjAK2qxPz0sffApr9rJrrH62k4KUfoOMu5BTwNHU5elBZZNO1tKhZ95q9Qv3ugs0DCwNm5bDlEEL%2Bge%2BTLVcs%2Bm3JDo1uwPF0la0xWt8JRDqLAqw%2FicND6OCGIeclUSTjxaVfrHgivV88RcCke3fXzISl%2BPe86%2FRRkYN%2F%2F6xJTGnJKS6vcDEUXHFJxn06qdNq8Ct88gq61BnjD7EVKj79zCt%2FWWWi5D314DGLdZlUeRc%2BgFPL%2F4hU1JlqTgPauaBkQMGqMfK2DYgJHZuIPVExbVvneIKQUmVXs%2BBdMwoMHfq40ol2hDPETCHEg9I0W2kCdMiZdYiek30jae%2BspKxTwHOYMHHneDifN49BMPbpr70GOqUB7aZDNuVpnw8dpY71jw6nItmFNIA9%2FUoftPixyYUeJJCirBwAAd68ZQxKkwp9nitf%2FTL1SUeA90DsIrsi%2FQsGH18GXwLJXDBtxcR%2FCIyIhZyfzT2xQWGUpMrr7IxoxmXJFCVEeFlIwq5%2BXlud5G9k8G9BMkNr%2BVfx5oDRGirVGX3aaaw2AS61Ths987pRjzAfwKWTbYpNxlFZoSXfSdnYlyT5jSrS&X-Amz-Signature=bfa16dc3413c110bdca614c1d8b7f91a4f4b5f3a45db57b7c2491bb669f529bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
