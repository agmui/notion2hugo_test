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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YOFD33S%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFF70fUosmCMFilVUCiURoZDyxqdBGVKSBSGC8M9ugYBAiAao5hHRDr7%2BR6jHHUPoYIY45bN4N0BSV7My0iSHbxwoyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM2pNSQJkEZqnBV240KtwDPoCpc2QYbmHNfQ3Mvw2CxIuKbkV7qR4xZlIb1g4LDsKyK5IM%2FHPzchFanac5R7rf6TY8fXokb4be5rrrDZ5RDGvQT9CkXEOt9v1ivFVACpZ04gaKUHsGPsfuIqNiZ%2FvUitbas1hDYfjMHp8Fm8qHSRZ3W3Pjq78ZCdXHSRtx9WHBqLxqoy0b%2F8aQC9VMQ25YPGn%2FW%2FU9pyz7KHi3prkkBC4wSyNHTs%2Br%2FW5zCKzCBqVuYAkCdRPUe7MF5N17lSydwnLz2IHLTab9zNocMwMup3vWkBmn%2BHtijXFhJvDiur0eV%2FZQZ1TPC8f07bshybWDKfsYClnFwPCz3lLj09hYdtODrrt%2BxSGAnMagIaiSxdNeA4LSR8TPWqaO1OGjgZ9ey3tKbEY9WRO9porERxHNbqby%2B9fc%2BxVIgHXxdZrmVHP%2BTmeNBWOmu%2FiTSVaFOilX9JggzBJ7eOUo01HKRB1TGD10g%2BeRgoAzp66qhkxDvO%2Bz%2FZb%2FdlMzDMTanVJ9Ot3RbbtUfF96bf%2F7lf%2Ft%2FyM9XpfYLF7hiloWOyP9oOc6xmDkynxGIr4FSCC%2Bw1wjuikIkrn6XpMWYsgNY79eqw%2FqSvHSphKPlW%2F44lPNZJTH4gkR0LHtQdvr7rCgK90w5a3rvQY6pgF2bse5pEPh8Y3u7B9elvYBs2zr1ouMoYMA%2B1Apwxaulz2rk9z97EJ7PFavo75CLKRk2n9YNHo8yVUHBuypyVNaDX5dFISsMFxr5QSOapFiVM2qH9Z%2B12woyF%2Br0%2FV43ySRDDZ%2F9hIZLIwUavdZsoEEgaSRDqDKH%2BeSz%2Fy2ZO4ERgJDwpfzlmb%2BssuyeDE5sqQaSMLfqKnkxzFd4muM8xYxz%2BZH1%2BzC&X-Amz-Signature=b4e09e3202fd3b939b2251783633b122c26b7fb9a6182d942a9c59833cda5124&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YOFD33S%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFF70fUosmCMFilVUCiURoZDyxqdBGVKSBSGC8M9ugYBAiAao5hHRDr7%2BR6jHHUPoYIY45bN4N0BSV7My0iSHbxwoyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM2pNSQJkEZqnBV240KtwDPoCpc2QYbmHNfQ3Mvw2CxIuKbkV7qR4xZlIb1g4LDsKyK5IM%2FHPzchFanac5R7rf6TY8fXokb4be5rrrDZ5RDGvQT9CkXEOt9v1ivFVACpZ04gaKUHsGPsfuIqNiZ%2FvUitbas1hDYfjMHp8Fm8qHSRZ3W3Pjq78ZCdXHSRtx9WHBqLxqoy0b%2F8aQC9VMQ25YPGn%2FW%2FU9pyz7KHi3prkkBC4wSyNHTs%2Br%2FW5zCKzCBqVuYAkCdRPUe7MF5N17lSydwnLz2IHLTab9zNocMwMup3vWkBmn%2BHtijXFhJvDiur0eV%2FZQZ1TPC8f07bshybWDKfsYClnFwPCz3lLj09hYdtODrrt%2BxSGAnMagIaiSxdNeA4LSR8TPWqaO1OGjgZ9ey3tKbEY9WRO9porERxHNbqby%2B9fc%2BxVIgHXxdZrmVHP%2BTmeNBWOmu%2FiTSVaFOilX9JggzBJ7eOUo01HKRB1TGD10g%2BeRgoAzp66qhkxDvO%2Bz%2FZb%2FdlMzDMTanVJ9Ot3RbbtUfF96bf%2F7lf%2Ft%2FyM9XpfYLF7hiloWOyP9oOc6xmDkynxGIr4FSCC%2Bw1wjuikIkrn6XpMWYsgNY79eqw%2FqSvHSphKPlW%2F44lPNZJTH4gkR0LHtQdvr7rCgK90w5a3rvQY6pgF2bse5pEPh8Y3u7B9elvYBs2zr1ouMoYMA%2B1Apwxaulz2rk9z97EJ7PFavo75CLKRk2n9YNHo8yVUHBuypyVNaDX5dFISsMFxr5QSOapFiVM2qH9Z%2B12woyF%2Br0%2FV43ySRDDZ%2F9hIZLIwUavdZsoEEgaSRDqDKH%2BeSz%2Fy2ZO4ERgJDwpfzlmb%2BssuyeDE5sqQaSMLfqKnkxzFd4muM8xYxz%2BZH1%2BzC&X-Amz-Signature=5915bac7c743593593b8616c0832eb4158187370413f3c49b2c23c61f887cff2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
