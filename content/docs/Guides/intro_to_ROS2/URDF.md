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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WNOW2SK%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDQdFdn6MZT%2F%2FFWlbQMLoCUP7nHO8UoknyKCupfcR00CAIgfW2zeTKtEN06JPMsY3LkswLzk6rpvQLmIEFFpccmdy0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIjfzx1hAcpKPgVPDSrcA6FplZnzsc7a6dGj%2FcBZNyS3WH5lWDnOwWegc3NthAdnGi3MrjIgRrRYxdY7who9QR6fjqViFStD%2FiyDfvi3b7oMD3bd4WI3Onimd1IpzyRp%2B99XGGQBWzj%2BIHfEHWZ0%2FUZd3ToeUclunQZA6efQSShqD7ZQMdrw83rv%2Fu8Hhrqr12JGQQwfqAXvZRJeUCzXksu85pfQd41yQX9LpUWrNT0IE0r5PVgeKbdjeqpqyKENe5gzzTh1mh%2FOrxC%2BCxMojJvtXjrCNYEu2j%2BTE5jiDXJWWdEX0bKuH6rPMSvU8Vys1mPzx%2B8%2FHVE9MSlVSQ2VMXmTDZwrZVJDVgDWE5J%2FKCPKqXve5HmOWVLGlAiR2dl%2F45N1%2FjEBxw5v3vLiUu4OKr21as2wq2rubNd3gYbQg54oQna8S9wg%2BvC3GdShP%2F2QPwpSWFgUYpFjLueAFwnH6gCUS7PQFfCeXE1QnYQD%2F1yXaiDqyM5fNaYBFhK4FCkmc7YwuNhjtqvCrwGPcDZXbIHQDVyYbMuZWw6cv%2FEWgyPIJc04jC9aK1QYH5vGS8YklCMjuRkzbh%2FJqOf%2BFfllWTA19CgcMtGGX9iAJ7c5OmH4Q4eLWMYJJDvflLssk9FbtginUD0uS2E%2FcR3zMPqzv70GOqUBgUYCgUg96pO097LIKYoU3g9O5VSprYyWTyjC4jQG7H%2Fti0RRywAv%2FS9CWmO4oCZm6dKjzIgHzdN3eb7uJ69t8PitvTobXCVYQFYStSDnUhY5932I26I%2BAxcNYxBK4i81Zoti00jVn1kY0o4qSK9u6Xa%2FoWAzCM2ucZZYkZ3ypPNdUnbZ695HfaBnhYSw1FCugd5e%2BboQNic%2B2AW5u6aY50sb%2F880&X-Amz-Signature=57324d0253eb8368b782520c0fc324814b8a5b952cb80fbcad7bfe7770f8cbc2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WNOW2SK%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDQdFdn6MZT%2F%2FFWlbQMLoCUP7nHO8UoknyKCupfcR00CAIgfW2zeTKtEN06JPMsY3LkswLzk6rpvQLmIEFFpccmdy0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIjfzx1hAcpKPgVPDSrcA6FplZnzsc7a6dGj%2FcBZNyS3WH5lWDnOwWegc3NthAdnGi3MrjIgRrRYxdY7who9QR6fjqViFStD%2FiyDfvi3b7oMD3bd4WI3Onimd1IpzyRp%2B99XGGQBWzj%2BIHfEHWZ0%2FUZd3ToeUclunQZA6efQSShqD7ZQMdrw83rv%2Fu8Hhrqr12JGQQwfqAXvZRJeUCzXksu85pfQd41yQX9LpUWrNT0IE0r5PVgeKbdjeqpqyKENe5gzzTh1mh%2FOrxC%2BCxMojJvtXjrCNYEu2j%2BTE5jiDXJWWdEX0bKuH6rPMSvU8Vys1mPzx%2B8%2FHVE9MSlVSQ2VMXmTDZwrZVJDVgDWE5J%2FKCPKqXve5HmOWVLGlAiR2dl%2F45N1%2FjEBxw5v3vLiUu4OKr21as2wq2rubNd3gYbQg54oQna8S9wg%2BvC3GdShP%2F2QPwpSWFgUYpFjLueAFwnH6gCUS7PQFfCeXE1QnYQD%2F1yXaiDqyM5fNaYBFhK4FCkmc7YwuNhjtqvCrwGPcDZXbIHQDVyYbMuZWw6cv%2FEWgyPIJc04jC9aK1QYH5vGS8YklCMjuRkzbh%2FJqOf%2BFfllWTA19CgcMtGGX9iAJ7c5OmH4Q4eLWMYJJDvflLssk9FbtginUD0uS2E%2FcR3zMPqzv70GOqUBgUYCgUg96pO097LIKYoU3g9O5VSprYyWTyjC4jQG7H%2Fti0RRywAv%2FS9CWmO4oCZm6dKjzIgHzdN3eb7uJ69t8PitvTobXCVYQFYStSDnUhY5932I26I%2BAxcNYxBK4i81Zoti00jVn1kY0o4qSK9u6Xa%2FoWAzCM2ucZZYkZ3ypPNdUnbZ695HfaBnhYSw1FCugd5e%2BboQNic%2B2AW5u6aY50sb%2F880&X-Amz-Signature=587cb9bd7946ccb842fedf3dfb452d52a9f8d514dee99e2d90c3659cc28b647a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
