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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHRL6JY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrqtd7amCgrwPTnjcsspyY0Of%2Byp%2F9fYjkMT3OCbOcowIgFRgoCuZoJ7PgG2dmhA9sjkZAKsww2TBrlXl2XeJrWXMq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDH9JkrOsRaHtNWZ1myrcA4zuxILDxadeX8RXsU8NlXt2KtVS6nQ2WUG9eifgkmPo1hcvr%2Fm3ls6xwxNgs2%2Bu6dh%2BGpI%2F3QuvB0gPKlJYIN%2FPd7sYJ6uNdlkQuDbasODX3OUuaT%2BdJgnEPsvPij4nYorrrLaKn7edUJQmVBIZGtjXvqjIpodtwN%2Fb7DK6rU%2Bu1rzbYRPfGcI71ZuXmwdqsO5jDwL24EHPnxKyth%2FaYAU20bfwexMpEsx7VzqxNv5qe8LY61y3aGwEW8Eejf3b8Ks0pLQEWnPvjBySRMme8juvmQjfHHnWe8F4xKZrD2ON8pQX%2FjykRlwRjJkB0nDH5Zsdj6dkmCCkq9dY5Woqi8rOmU8UBh6BFLYQ%2F3YsC5fBYvmo81yBOB5jNKCbpuISGOj%2FilueR4BtRlb%2Bl2FAosDnj2TLmeBch7QBWPSqc3IylUKnvz5YTBApd9HRU6BU4i%2BS7IkZA916DndHJq%2BEz272tTlC9q%2FPJWa%2BAy1RT6%2BI9Hx3%2BQS%2BN1HDXS1lic5BndXclvY3qYT6HJJ1g2ZSA5Gk9dC8R2sTMEsSjwtpLx6N82qx4mpjznICg1hKf0pbQ3%2Bg%2FAIpORLFrd7mqaXkBwTwTazkYHR3izPaE1Qc06ZPBYOPVo4uhAmrR5KSMObvpr4GOqUB7MkGTqSr1E1wt0l004uS8oX%2Femu9UWxUO94ZOYua2jbYqjvfGpQUcL0Be%2BtEB0E5pAcLIkDlr3FBkQrCcbNjK4Wf5%2F989la0c0rOQ73TlMvz6AuJU4hHtfd%2Bh%2FH1bxm4VFf8tMN8pEaHiNhaPlNwiwFk8rA1ALXCrQCxAgvms%2BQ7zskVQYa%2BimVJgNeAtvk22TgynzAjX5j8WQrMhmVM6cyJyr%2Bl&X-Amz-Signature=656a8957931f1e2c52d9dbec39f7fa80b14820c6de8ae17db1af89d4aa95e4bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OHRL6JY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrqtd7amCgrwPTnjcsspyY0Of%2Byp%2F9fYjkMT3OCbOcowIgFRgoCuZoJ7PgG2dmhA9sjkZAKsww2TBrlXl2XeJrWXMq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDH9JkrOsRaHtNWZ1myrcA4zuxILDxadeX8RXsU8NlXt2KtVS6nQ2WUG9eifgkmPo1hcvr%2Fm3ls6xwxNgs2%2Bu6dh%2BGpI%2F3QuvB0gPKlJYIN%2FPd7sYJ6uNdlkQuDbasODX3OUuaT%2BdJgnEPsvPij4nYorrrLaKn7edUJQmVBIZGtjXvqjIpodtwN%2Fb7DK6rU%2Bu1rzbYRPfGcI71ZuXmwdqsO5jDwL24EHPnxKyth%2FaYAU20bfwexMpEsx7VzqxNv5qe8LY61y3aGwEW8Eejf3b8Ks0pLQEWnPvjBySRMme8juvmQjfHHnWe8F4xKZrD2ON8pQX%2FjykRlwRjJkB0nDH5Zsdj6dkmCCkq9dY5Woqi8rOmU8UBh6BFLYQ%2F3YsC5fBYvmo81yBOB5jNKCbpuISGOj%2FilueR4BtRlb%2Bl2FAosDnj2TLmeBch7QBWPSqc3IylUKnvz5YTBApd9HRU6BU4i%2BS7IkZA916DndHJq%2BEz272tTlC9q%2FPJWa%2BAy1RT6%2BI9Hx3%2BQS%2BN1HDXS1lic5BndXclvY3qYT6HJJ1g2ZSA5Gk9dC8R2sTMEsSjwtpLx6N82qx4mpjznICg1hKf0pbQ3%2Bg%2FAIpORLFrd7mqaXkBwTwTazkYHR3izPaE1Qc06ZPBYOPVo4uhAmrR5KSMObvpr4GOqUB7MkGTqSr1E1wt0l004uS8oX%2Femu9UWxUO94ZOYua2jbYqjvfGpQUcL0Be%2BtEB0E5pAcLIkDlr3FBkQrCcbNjK4Wf5%2F989la0c0rOQ73TlMvz6AuJU4hHtfd%2Bh%2FH1bxm4VFf8tMN8pEaHiNhaPlNwiwFk8rA1ALXCrQCxAgvms%2BQ7zskVQYa%2BimVJgNeAtvk22TgynzAjX5j8WQrMhmVM6cyJyr%2Bl&X-Amz-Signature=a8401f36e929c6b22398e546d0ebbf6b3e5c55419291f2f8794300b1ff3ab70c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
