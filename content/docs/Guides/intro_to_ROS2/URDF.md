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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XDEAL47%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwhTlPWScZPs9Pw8E1x3C3VZJw2cbSbEr2UC9nFL3aeQIhAIDR3gZeNs0tU%2BkXRoqpIL1WdSi6CQ9muSZ0zrvwGz2qKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq7%2B48htTqyH6nnUUq3AMOypMeotPLv9JZzvVtXkfKBnHuRO35WKx6euQrWgS7c2fyMR4WnL17vm%2FGx94rAZpAecNfxAuXjXsLBRhautFVZQH5ELfBYDU5wOliO0q62yrf%2FLX9BrBsk9H0RgoQmtwtd2TJ35BwZW94kE3Z3ySCbkcaST66EWUIH2fodVlhZ2mgdbYldlgOHvzseVxcFPqIVC9KbmIxRF%2BKOoBWzkis6WVtPx3hrn7wfdMmzE56MtDxqv6bjxL0reoCpLRaFtExwMu%2F8TNsTXNxVbkRaH9OQ62vunSZll0CHNwQutCrfmR8C1bQBR73wOMsESIWWrEgeNate3esFAtRITounLLjSM4RYCNUcwLaOxAYnwyVI%2FB9KtuaAN9I3HtODm%2B4AegQeE13SQILwzkiT6EwLniGs55fDGDhJrwMQpBRmh9p5iYlmRdnb5WVNwDpEBvleAs8atlvdwGVm36vM3AuTEyM0OxYbiidrQ2QNe828ylopWFyf18eAra4g0q2M8Xtu2gLr9UMZviRAKVBjEfJhPXI6SViP50PRLKku%2BQQKzWcHodU0PmMOfb0vtzO7YsTcRVvZwmCVw5t5w7aJDgr9Xq7tpMwVxxFSgFz%2BS0IkAW%2BXJptgmbyytWf1qopeDC2vZbDBjqkAXDXnrIVNQYs68CbdqJfSxsM7jL%2BsXl29JS5Mcozx6F58Hev5OMwwlqK9NyUSMV6ZYvTwB56aPQoxXW4908QFfbtWu3BxEUqU7l%2BRvY4ZrBivIJDbFJicENvqEvVnlBkXZ1%2F7%2F1hXRB2wIUbMtehgRvJmCs3%2F2KctnLlKPh71d%2Bl1BNJfYK97DLDLnzXQ86GMFVsiXN1JbCYU86waL4Q5EAMtdb5&X-Amz-Signature=6b6730aa1ae29516315d7d4fd2870bf0afc666912928de27ef995262c6ebc2b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XDEAL47%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwhTlPWScZPs9Pw8E1x3C3VZJw2cbSbEr2UC9nFL3aeQIhAIDR3gZeNs0tU%2BkXRoqpIL1WdSi6CQ9muSZ0zrvwGz2qKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq7%2B48htTqyH6nnUUq3AMOypMeotPLv9JZzvVtXkfKBnHuRO35WKx6euQrWgS7c2fyMR4WnL17vm%2FGx94rAZpAecNfxAuXjXsLBRhautFVZQH5ELfBYDU5wOliO0q62yrf%2FLX9BrBsk9H0RgoQmtwtd2TJ35BwZW94kE3Z3ySCbkcaST66EWUIH2fodVlhZ2mgdbYldlgOHvzseVxcFPqIVC9KbmIxRF%2BKOoBWzkis6WVtPx3hrn7wfdMmzE56MtDxqv6bjxL0reoCpLRaFtExwMu%2F8TNsTXNxVbkRaH9OQ62vunSZll0CHNwQutCrfmR8C1bQBR73wOMsESIWWrEgeNate3esFAtRITounLLjSM4RYCNUcwLaOxAYnwyVI%2FB9KtuaAN9I3HtODm%2B4AegQeE13SQILwzkiT6EwLniGs55fDGDhJrwMQpBRmh9p5iYlmRdnb5WVNwDpEBvleAs8atlvdwGVm36vM3AuTEyM0OxYbiidrQ2QNe828ylopWFyf18eAra4g0q2M8Xtu2gLr9UMZviRAKVBjEfJhPXI6SViP50PRLKku%2BQQKzWcHodU0PmMOfb0vtzO7YsTcRVvZwmCVw5t5w7aJDgr9Xq7tpMwVxxFSgFz%2BS0IkAW%2BXJptgmbyytWf1qopeDC2vZbDBjqkAXDXnrIVNQYs68CbdqJfSxsM7jL%2BsXl29JS5Mcozx6F58Hev5OMwwlqK9NyUSMV6ZYvTwB56aPQoxXW4908QFfbtWu3BxEUqU7l%2BRvY4ZrBivIJDbFJicENvqEvVnlBkXZ1%2F7%2F1hXRB2wIUbMtehgRvJmCs3%2F2KctnLlKPh71d%2Bl1BNJfYK97DLDLnzXQ86GMFVsiXN1JbCYU86waL4Q5EAMtdb5&X-Amz-Signature=1f61a60e622d0dd8e56f0792f1c39b494a48a13c2753bfae136ec1a63575668b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
