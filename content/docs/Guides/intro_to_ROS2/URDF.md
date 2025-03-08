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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C7L3GPJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHsJigp%2BGZfajCM2Q3bwmgRMsv%2B8ExYYBpBGytLuvMRVAiEAwlBYZ5WPNcWPYfoHEKkwVsyxruMDD5pPV%2Fk2kVgYkCMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDC%2BOW3RBl9JXxiAYMCrcAy2qMpLiBq9KhM0VX3tSTSr1K5yH16ZWkvUTu7g44SrqjRRRq2ZG4F%2B7MbV4qX%2FYevnlYLaKpXW08ApnMQ1m2td2mleHiGZWjXmH96N8OpVqNCrqvbRBE5G5AiWhrLQznhlnTgMW7P4PXv3ronkjfPmIXGQw8TpN8h0TBHAJv2WsaYGR6ugZgE%2BX6O1m5726SFmMsyVCoyDZ94gWN0zdYVwcNLumnlttmyx%2BIAJoCA3mnuzdkdHp0jIWHetGHxlsWCR8JLDrOjdc5RrKRFQLuwwcOeOp3CQMKqTci4GyqlrAVgUDS98sl9tJngacfNRymm1GtzzkUP7vVmXfrPrNEQEfnj2WV24nrQj8FPLfGz0pfAbcsGb%2FQUwk8ESMPVolS%2F%2FFTL4hiANnmb3mXhAsTdBe26f4U9tCj1MQGXy54X3l2%2FIHZeJSHFJjb5bmbpqfjfisQkiReJbJKgwN9PRiJMnCsqZpvLy5XSaE3OSFamNtWFaHc3%2Bg0S%2BgilpvczbyzJ5i9s2BdCrIHiglaNHtHThJHyvL1lkKpc%2BFqKweKziSzDKmVtAjfjNBkD%2FrGV4FZMg42n9jvQc%2FnT957V9050q3%2BYphH9HNfQxqjz%2B3eiKSr5nw3AWSqyoA4LVLMMSEsL4GOqUBFTKjzv6sScKnKQIPqBtPEc0tler5aPktHm6%2FnYU65Vbi0eCjQ0jbdwYVzCW1H0Dq3k5RtM7ElQhHtszsGwhvnoeS7z%2BLFmApOk2fVBHDMMKNCmiQnubt8TpmjdPRULYeysboORXwQWyH3G7XvND4%2B%2FoC2lfXUgqr01QZN2ctr%2FU9gaX6ZS3Jzccfa32S0BiXNCaLkfvOAQAMxEvFGYypQAqFdDr2&X-Amz-Signature=5e77274e154d0c16d4909a87f6bf933022785396c2eb935c90f146741e2fdae3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C7L3GPJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHsJigp%2BGZfajCM2Q3bwmgRMsv%2B8ExYYBpBGytLuvMRVAiEAwlBYZ5WPNcWPYfoHEKkwVsyxruMDD5pPV%2Fk2kVgYkCMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDC%2BOW3RBl9JXxiAYMCrcAy2qMpLiBq9KhM0VX3tSTSr1K5yH16ZWkvUTu7g44SrqjRRRq2ZG4F%2B7MbV4qX%2FYevnlYLaKpXW08ApnMQ1m2td2mleHiGZWjXmH96N8OpVqNCrqvbRBE5G5AiWhrLQznhlnTgMW7P4PXv3ronkjfPmIXGQw8TpN8h0TBHAJv2WsaYGR6ugZgE%2BX6O1m5726SFmMsyVCoyDZ94gWN0zdYVwcNLumnlttmyx%2BIAJoCA3mnuzdkdHp0jIWHetGHxlsWCR8JLDrOjdc5RrKRFQLuwwcOeOp3CQMKqTci4GyqlrAVgUDS98sl9tJngacfNRymm1GtzzkUP7vVmXfrPrNEQEfnj2WV24nrQj8FPLfGz0pfAbcsGb%2FQUwk8ESMPVolS%2F%2FFTL4hiANnmb3mXhAsTdBe26f4U9tCj1MQGXy54X3l2%2FIHZeJSHFJjb5bmbpqfjfisQkiReJbJKgwN9PRiJMnCsqZpvLy5XSaE3OSFamNtWFaHc3%2Bg0S%2BgilpvczbyzJ5i9s2BdCrIHiglaNHtHThJHyvL1lkKpc%2BFqKweKziSzDKmVtAjfjNBkD%2FrGV4FZMg42n9jvQc%2FnT957V9050q3%2BYphH9HNfQxqjz%2B3eiKSr5nw3AWSqyoA4LVLMMSEsL4GOqUBFTKjzv6sScKnKQIPqBtPEc0tler5aPktHm6%2FnYU65Vbi0eCjQ0jbdwYVzCW1H0Dq3k5RtM7ElQhHtszsGwhvnoeS7z%2BLFmApOk2fVBHDMMKNCmiQnubt8TpmjdPRULYeysboORXwQWyH3G7XvND4%2B%2FoC2lfXUgqr01QZN2ctr%2FU9gaX6ZS3Jzccfa32S0BiXNCaLkfvOAQAMxEvFGYypQAqFdDr2&X-Amz-Signature=adc97cb55896f58aef001be86d6442760287ddb3fd706d2555457abdc9d5aeb0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
