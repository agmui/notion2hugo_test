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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD7PNP5B%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCID%2BwvRlEHhqRJGi8%2Ba9aLUedv4bO17dX8ZsgsNOHVBdZAiB6ZwTxHGB%2FnPTTCfso3%2FGQ%2FYE%2BVR%2F73xMRRiihj9uDgCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXxXFdQNARhfBt0FLKtwDuwBVUdiBUU6bKm1EfAAKgiyuicQMCFuk7jw2WpikhSSNFX04ayL8ck8IJvsWm0EKxxiVl6M91AN2xPqaWWv8DamGUHNMOF%2F5gY3jIN9Au%2B5ZEol%2BBhBt%2Bem7quEByHBccvYde%2FScioj6FOpOP%2FUHRoXUsb%2BPkNk5AaJS17e69X4PkM%2Fn2CGVXIs03KxU0VaWI6R57pP9zT8SHthTUaa2qDekKVwdq1icHx6f6mLEflHShB0e7nkieTtoliT1sWyMUGCg8DjMukaOZLhu7zDSQFdYEadSDE0FtIe5rhW8iadS6Fi%2Fla312ePSRKAB5434zkZ58ZTEg5Q5lg%2BzrR2IgS4yebJxdQXpturiKEE0JGmJVPDr2Mc6dIUmL%2Btw5NUtsakSRPZuqXuf87PrTvTgDDSR%2FxVIhVtswIcoIXP0outN%2B%2BK5eZZKndYKDFZdDqiX35lnUCchP%2FzLz0x%2BpqHwbIOwolxCwCy3tkvrk%2BwkC9NWqY%2Fj4bBzGQUyVl8wxzsts7QR0u4lA4ImH5nmI6s34K86MYvqfZ0%2FmbpFlMaZBFYhmtwd0XYJnQVUC5U%2B8YGJp20HnixBsyEWQeoB1LnIMCI5%2BNV6BBysRuh2%2FhhaupKWftiqHJWSXrVEy9gw1MutwgY6pgHtnBmp95L9LGnZzxHbkzCe1EZOkgkHi0kdeCo21AhgI1m4%2Fb5OoKOF2Ehs3p02tv8iMmLxAwahODCjen6ugJ7bbsQTzWOLZD3JNsUwsBpyfnOM6Djboo%2Bk4D1HXzirA0XIxOB8OjQdmGODq9KbEP%2F3kC1vOb8i10bXTD2s%2BzsoOXCcEZekZyP%2F7sxgowo8fy6ezInQ2AP8Um8XSb9FMxKa%2FSk3iGGh&X-Amz-Signature=8133806bc3d5c50e747814c548796a06a829d4d5e044beca48c27dde8e5bc35b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD7PNP5B%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCID%2BwvRlEHhqRJGi8%2Ba9aLUedv4bO17dX8ZsgsNOHVBdZAiB6ZwTxHGB%2FnPTTCfso3%2FGQ%2FYE%2BVR%2F73xMRRiihj9uDgCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXxXFdQNARhfBt0FLKtwDuwBVUdiBUU6bKm1EfAAKgiyuicQMCFuk7jw2WpikhSSNFX04ayL8ck8IJvsWm0EKxxiVl6M91AN2xPqaWWv8DamGUHNMOF%2F5gY3jIN9Au%2B5ZEol%2BBhBt%2Bem7quEByHBccvYde%2FScioj6FOpOP%2FUHRoXUsb%2BPkNk5AaJS17e69X4PkM%2Fn2CGVXIs03KxU0VaWI6R57pP9zT8SHthTUaa2qDekKVwdq1icHx6f6mLEflHShB0e7nkieTtoliT1sWyMUGCg8DjMukaOZLhu7zDSQFdYEadSDE0FtIe5rhW8iadS6Fi%2Fla312ePSRKAB5434zkZ58ZTEg5Q5lg%2BzrR2IgS4yebJxdQXpturiKEE0JGmJVPDr2Mc6dIUmL%2Btw5NUtsakSRPZuqXuf87PrTvTgDDSR%2FxVIhVtswIcoIXP0outN%2B%2BK5eZZKndYKDFZdDqiX35lnUCchP%2FzLz0x%2BpqHwbIOwolxCwCy3tkvrk%2BwkC9NWqY%2Fj4bBzGQUyVl8wxzsts7QR0u4lA4ImH5nmI6s34K86MYvqfZ0%2FmbpFlMaZBFYhmtwd0XYJnQVUC5U%2B8YGJp20HnixBsyEWQeoB1LnIMCI5%2BNV6BBysRuh2%2FhhaupKWftiqHJWSXrVEy9gw1MutwgY6pgHtnBmp95L9LGnZzxHbkzCe1EZOkgkHi0kdeCo21AhgI1m4%2Fb5OoKOF2Ehs3p02tv8iMmLxAwahODCjen6ugJ7bbsQTzWOLZD3JNsUwsBpyfnOM6Djboo%2Bk4D1HXzirA0XIxOB8OjQdmGODq9KbEP%2F3kC1vOb8i10bXTD2s%2BzsoOXCcEZekZyP%2F7sxgowo8fy6ezInQ2AP8Um8XSb9FMxKa%2FSk3iGGh&X-Amz-Signature=babd1b25774589d95a72a6f661c7cf5da1a7872b08d5264be6b51af313e635a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
