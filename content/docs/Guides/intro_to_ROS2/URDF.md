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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI24VPHQ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0zABdKJVPvK6smZDe%2By58MXD2Ki6KNcMLbI4nzAd%2FVAiEAhyrqEEbau6vpSUNEGQAnPPAElWnkkuCZajp03bfxmPQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLFITZ0%2FfPwiK8KxYCrcA3fvCl18%2B9B8qchfGLupoQF18NxqYvooOPv3DNp4ln%2FIhe1sXCkBiALCGJTf4V%2B8iNcQoo0xxodOnTRcLDlbj%2FSuY7yzIsFQJvUVSU8atC8SE68fKWBn7lgU1a3xRveo98kisNL8dS%2F1uaQx535wN4UdiSsduFiBuftiv3ckpimPfKE0GYAoBYz1wdFAqDNhA5CrJdceqwwqD5GXKHphXMl%2FuJxjW66HrG8vR4I6Pq9ynRUo4kguB81pnsCOsIW3DZ6MbUcTsrQkATJ45vrAKA5KsoRDJCLdzbK0rkkzpLlcl1NOHQo%2FWAn%2BGIDZeK19xm9eO0Pp%2BiqdhqzWGx5bvNedUPWmI5YtAG%2FoXIvSEBUPLn%2F3FMOifE0p%2FiQhW31%2Fr8w4PiB4reTutEMQzQNQscq8nzrVAsnKCSd5PByJHi3KVIHpNk3gaLgXY3hb5dt1cLLqxo%2Fly3FmRQp1wrZMQvHQ0Gl%2BEM%2FXGRHLRSIhqvWhWPiYHmjV4QaO4f06KEmoPw3tdN27M1TDiKtHRF2RCEUQyaRRhVkzexCs4uUWk6AUv%2F36OljIJ6GIztzPJhgstFID426nSO12MgD0BR%2B82pAfllN5sVVKLV2uwuXz2iJADZbaSu0MmBHl6%2FkKMIvd3L4GOqUBkHh73fmkKatwnNhwDJ8Jv1o3ETBRelv%2BKzqbz7sQAiCmjVs7NEEAkGl5FIjk3PulxypACu5w0VMTr3SYutNSI85jGOclfIgxVT4YLD%2BJ1EVsqqtq2NYlQ9Pvx2jedbcme4icMy6MkFHjWsYgkfTpNKMTWzVefnWl8%2FS5scc64Tn4e%2FQORUOiGy0MsVEBQiPWm2vcVbPU6bmQRKRb5XkQ9IYI9Oed&X-Amz-Signature=0682bb26846ca6eabd701d83bf9ded288c5fe55968364211e0be458cc2ad3b05&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI24VPHQ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0zABdKJVPvK6smZDe%2By58MXD2Ki6KNcMLbI4nzAd%2FVAiEAhyrqEEbau6vpSUNEGQAnPPAElWnkkuCZajp03bfxmPQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLFITZ0%2FfPwiK8KxYCrcA3fvCl18%2B9B8qchfGLupoQF18NxqYvooOPv3DNp4ln%2FIhe1sXCkBiALCGJTf4V%2B8iNcQoo0xxodOnTRcLDlbj%2FSuY7yzIsFQJvUVSU8atC8SE68fKWBn7lgU1a3xRveo98kisNL8dS%2F1uaQx535wN4UdiSsduFiBuftiv3ckpimPfKE0GYAoBYz1wdFAqDNhA5CrJdceqwwqD5GXKHphXMl%2FuJxjW66HrG8vR4I6Pq9ynRUo4kguB81pnsCOsIW3DZ6MbUcTsrQkATJ45vrAKA5KsoRDJCLdzbK0rkkzpLlcl1NOHQo%2FWAn%2BGIDZeK19xm9eO0Pp%2BiqdhqzWGx5bvNedUPWmI5YtAG%2FoXIvSEBUPLn%2F3FMOifE0p%2FiQhW31%2Fr8w4PiB4reTutEMQzQNQscq8nzrVAsnKCSd5PByJHi3KVIHpNk3gaLgXY3hb5dt1cLLqxo%2Fly3FmRQp1wrZMQvHQ0Gl%2BEM%2FXGRHLRSIhqvWhWPiYHmjV4QaO4f06KEmoPw3tdN27M1TDiKtHRF2RCEUQyaRRhVkzexCs4uUWk6AUv%2F36OljIJ6GIztzPJhgstFID426nSO12MgD0BR%2B82pAfllN5sVVKLV2uwuXz2iJADZbaSu0MmBHl6%2FkKMIvd3L4GOqUBkHh73fmkKatwnNhwDJ8Jv1o3ETBRelv%2BKzqbz7sQAiCmjVs7NEEAkGl5FIjk3PulxypACu5w0VMTr3SYutNSI85jGOclfIgxVT4YLD%2BJ1EVsqqtq2NYlQ9Pvx2jedbcme4icMy6MkFHjWsYgkfTpNKMTWzVefnWl8%2FS5scc64Tn4e%2FQORUOiGy0MsVEBQiPWm2vcVbPU6bmQRKRb5XkQ9IYI9Oed&X-Amz-Signature=87aadb8f8e29c29b94f7f89e6ad9c842796d5dff89ae2c909bc8006d649d838f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
