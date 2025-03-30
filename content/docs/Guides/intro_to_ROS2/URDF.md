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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGBHKDZX%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDFF1CME1vZOgt4u10%2B6V9Dovjn8F4ELUfzYQ48J%2F%2FJbAiEAmIK3iQ%2F9%2BM%2BCXh7%2BZSweGCQ1YnOkP93ebOK%2BE3Uab%2B8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLjPhbynru1rxKL1CrcA1lPtzv3WTH2%2FudAO0UqX8TMykTkiXqc8BjdAiRFsjBXl0SyXgBL7KF8EMfS8vZJRh9PoG4P3BS5vYfz0g5k3a7YtvY6gEwsFekuWyQmYFaAF4BkD91jFvJjZiw2IUCWA9gR7onDOk49QqnbJ0DP2oa%2B0L%2FtJD0NXuHjTv2rgZCB61%2FoxglxYqgoRBJTRzlEAItEmZCuG2OziyNAZBqu94CwZNjxn7x6Jf0FrlFWghI%2FKZM%2FTtXVgJTqnzuNr3N22s42lmjhwHc0EryRBT5LNZtWmgLtPn11OPm0Ve1MMGuBvDmOOM7qXiCorlWEa8WbPeUAUtvTI7Wi52G2751NjA5d%2FB%2BBmEoMLA9%2FMIJmy7C4QBp3dla4VlgfU%2BFLxfps5EPPMLKwsWp17Dr7u8aQ55mBtXCKxuAiLB4kV7m5OjMWhUGWgvSKeY3sBWHFIDwWKI9Y%2FJfNFgQQHDWjam99vZ08P6O6Gqt%2Fbet9TUsks9DtOh8Z7am0sxB0LdpxHd5k2Ierpa8kyJ%2Bkbj7RpnlUrjvHN1jjPuCPCmPdh%2BuOQyhnwnYN95u2j%2BGTlFcUF1hgzcPeAOvHez%2BzD4qtJfjD10ga8a3xlv0qatXvIs8VL1WnOuQq0Z89z8OXVyfuMN%2F%2Bob8GOqUBUh1YwygqTzBlDzC5LB64NOE2TooyQwF94U3onFCH9rs8SH40PM6%2BIyW9lX2MPOxnUxIJD4NUGbYjcSrnyZVJd8YKXyAyMDFBuJjHBM9fU7VbXg%2BD%2FyCErlAKjZkZPt5pCrCPdxNFqKhKhpyhRtaXAf0aSkaWXWitaNzye%2FJYwSC7XDFoyiG8%2BVBCEytI3%2F5ye6E5vOzqmMlSUP7b%2BYm1eUWVa9lK&X-Amz-Signature=4e880026e02afe5ec84c077a34a78c632043fea628b884501eede66131bc6caa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGBHKDZX%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDFF1CME1vZOgt4u10%2B6V9Dovjn8F4ELUfzYQ48J%2F%2FJbAiEAmIK3iQ%2F9%2BM%2BCXh7%2BZSweGCQ1YnOkP93ebOK%2BE3Uab%2B8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLjPhbynru1rxKL1CrcA1lPtzv3WTH2%2FudAO0UqX8TMykTkiXqc8BjdAiRFsjBXl0SyXgBL7KF8EMfS8vZJRh9PoG4P3BS5vYfz0g5k3a7YtvY6gEwsFekuWyQmYFaAF4BkD91jFvJjZiw2IUCWA9gR7onDOk49QqnbJ0DP2oa%2B0L%2FtJD0NXuHjTv2rgZCB61%2FoxglxYqgoRBJTRzlEAItEmZCuG2OziyNAZBqu94CwZNjxn7x6Jf0FrlFWghI%2FKZM%2FTtXVgJTqnzuNr3N22s42lmjhwHc0EryRBT5LNZtWmgLtPn11OPm0Ve1MMGuBvDmOOM7qXiCorlWEa8WbPeUAUtvTI7Wi52G2751NjA5d%2FB%2BBmEoMLA9%2FMIJmy7C4QBp3dla4VlgfU%2BFLxfps5EPPMLKwsWp17Dr7u8aQ55mBtXCKxuAiLB4kV7m5OjMWhUGWgvSKeY3sBWHFIDwWKI9Y%2FJfNFgQQHDWjam99vZ08P6O6Gqt%2Fbet9TUsks9DtOh8Z7am0sxB0LdpxHd5k2Ierpa8kyJ%2Bkbj7RpnlUrjvHN1jjPuCPCmPdh%2BuOQyhnwnYN95u2j%2BGTlFcUF1hgzcPeAOvHez%2BzD4qtJfjD10ga8a3xlv0qatXvIs8VL1WnOuQq0Z89z8OXVyfuMN%2F%2Bob8GOqUBUh1YwygqTzBlDzC5LB64NOE2TooyQwF94U3onFCH9rs8SH40PM6%2BIyW9lX2MPOxnUxIJD4NUGbYjcSrnyZVJd8YKXyAyMDFBuJjHBM9fU7VbXg%2BD%2FyCErlAKjZkZPt5pCrCPdxNFqKhKhpyhRtaXAf0aSkaWXWitaNzye%2FJYwSC7XDFoyiG8%2BVBCEytI3%2F5ye6E5vOzqmMlSUP7b%2BYm1eUWVa9lK&X-Amz-Signature=ba1044fc591865a18cac6f0a0e9fc2ced53d146710db8243e768c1ed947598f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
