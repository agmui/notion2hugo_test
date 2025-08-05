---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GTTBWBI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICKh0GnA8xHcE3U3QxL7Hu9cHIrivwN9idHTXRUF898pAiEAk%2B7Xt4TmbAW1aZ6BtGpL8spnWneeThsQhlz95NxxnFEq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDNWqzc3v%2BRZimZsCACrcA9Fe%2FlDKsRQr5of0ImfdOPfLUq0nNbo%2B1zFwucQS%2BpW%2BOxbXKAhVphCrezshPpVmIKEIR3j%2BMAHifJoeD%2BCXvDANcnO20ihFH56G%2Bbhr51Z99hE4FH3rzBHb75XeBUPC90PkjYImWCcUiTmiOvBedMU51%2FJXaJQfQdxlO0ppts%2FgbsLzhhBAAgxERmPEvg57wELA9cNYNC79cGjdcTuohJtxxrE%2BJVvY5SZYTrLCJ3DI%2BEXqn0pWrGooIMJt3K8gyJk3J2Qpg0vPhqz%2B7%2BoePOI6gdsL3dGQYkBl%2BlKyIL66BGJY211YLtB7mh7vqJCMr3ADWj%2FFYR5BbaHDysRIKMayPsZTJ0BE1oUUeb5JFzhvoWtk4JxIg%2BT1AxUUQhYpdR5hE5VJkmSRCGjNI3Md8zwZrLJ4cZzEfC9vHDmDO%2FQgvNoW9vsTXGoGvW7K7zyTxKxR0vMZWAWJY%2BEJdoWbMOwNGnde0gaamCr8ZoKK%2F5ZAaJ1MNGBJSJQTwprXpNsCwPvzwaqk5uh%2Fqf7Wd%2F73kvkIPmUTm3v894jKRxd3bje7pz%2FzWz4nKMSFcB33B8%2BwDtk8CrjX7BZ0twLq6y3i60v1VdCt259lDX2pZFeigt9UPdEeL1dBMhdz8esNMPSDyMQGOqUBVy4264fo0cq%2FvTr0cFA%2BePKVKBqwaks72aQJEd0ssFkAy3noWzy2KgCQRXE74FjJiE%2BYmsVoWHEKdgOCudYHhVyO7PwrCTqkDl2dfGHFIPCq5XR%2B5O8b%2B3cn%2BgT2B4iS7fN1270EUGUblHJvCe2Jojfgx5toNLb9SBP0JEbo%2F0gqxbsDgrlQFgbZQEvHvaJB3RDRG6L0t7bYX6JICNBXLkm7DoeQ&X-Amz-Signature=6f58301ebebf8be5cb515a4601a8faa2e39913080f1bf6e8608b85c23d7bb803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GTTBWBI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICKh0GnA8xHcE3U3QxL7Hu9cHIrivwN9idHTXRUF898pAiEAk%2B7Xt4TmbAW1aZ6BtGpL8spnWneeThsQhlz95NxxnFEq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDNWqzc3v%2BRZimZsCACrcA9Fe%2FlDKsRQr5of0ImfdOPfLUq0nNbo%2B1zFwucQS%2BpW%2BOxbXKAhVphCrezshPpVmIKEIR3j%2BMAHifJoeD%2BCXvDANcnO20ihFH56G%2Bbhr51Z99hE4FH3rzBHb75XeBUPC90PkjYImWCcUiTmiOvBedMU51%2FJXaJQfQdxlO0ppts%2FgbsLzhhBAAgxERmPEvg57wELA9cNYNC79cGjdcTuohJtxxrE%2BJVvY5SZYTrLCJ3DI%2BEXqn0pWrGooIMJt3K8gyJk3J2Qpg0vPhqz%2B7%2BoePOI6gdsL3dGQYkBl%2BlKyIL66BGJY211YLtB7mh7vqJCMr3ADWj%2FFYR5BbaHDysRIKMayPsZTJ0BE1oUUeb5JFzhvoWtk4JxIg%2BT1AxUUQhYpdR5hE5VJkmSRCGjNI3Md8zwZrLJ4cZzEfC9vHDmDO%2FQgvNoW9vsTXGoGvW7K7zyTxKxR0vMZWAWJY%2BEJdoWbMOwNGnde0gaamCr8ZoKK%2F5ZAaJ1MNGBJSJQTwprXpNsCwPvzwaqk5uh%2Fqf7Wd%2F73kvkIPmUTm3v894jKRxd3bje7pz%2FzWz4nKMSFcB33B8%2BwDtk8CrjX7BZ0twLq6y3i60v1VdCt259lDX2pZFeigt9UPdEeL1dBMhdz8esNMPSDyMQGOqUBVy4264fo0cq%2FvTr0cFA%2BePKVKBqwaks72aQJEd0ssFkAy3noWzy2KgCQRXE74FjJiE%2BYmsVoWHEKdgOCudYHhVyO7PwrCTqkDl2dfGHFIPCq5XR%2B5O8b%2B3cn%2BgT2B4iS7fN1270EUGUblHJvCe2Jojfgx5toNLb9SBP0JEbo%2F0gqxbsDgrlQFgbZQEvHvaJB3RDRG6L0t7bYX6JICNBXLkm7DoeQ&X-Amz-Signature=e5243a0ea9339eee319b2480fdce5e07feed60ed73d0765f400482ca35b0ce79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
