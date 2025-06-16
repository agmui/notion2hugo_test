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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BVZBKRL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAIka4b9rRKDB%2Frqsk8SNjoA7DiSz%2B7bX4p2kcEBM0hTAiBewWNmAOv6YFs2GhvOyhQjDUcXDliV8Q4pqhxAUDU9yir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMNUAM2M0haxEmOrgRKtwDPCHdNJrPKVfRvXfMCoJQ5j%2BtGFmIFo9QmGpLyvxg4k7nCTzs6uShd7R5iMn%2BsCxCj7G616TQHmhd2Zq%2BnplpaZqZ8WDCgIpJmUgFP0Q9%2BQBx16JIo8iV604t%2BBYCN8O3xhNLlElL4OPatjNyPRE6JKiyE66%2FkJf%2BlOZQuHb9q20sRhlMKZsuixxCU%2FHBZKqe%2Bq4iBjnegGUk4LUg4SFi19O3indXxTwktkR5xqgJl7DW5QRz7YQf0tW3C4L8CNcu9vg%2B7jhGOgb85UUUCdTgRJ9RisSuU2yeoNfxsUd3Mg3F9mV%2BB3B1CFOoS3v0H4ermjKLQhE0asQEnJxTOFwbm9j8uatLj7XwEabSISiLbzHjSmKKT%2BIhDDR5LQOhCL9bj6Nimt%2F3gYOSWpc9dIa9fLYvSKMJHmJw15Z%2FlYYC5T8IiIqVZfEhn060SuSsoI8hLeWVMOA%2FziYkQKCc8sqbTTtgMYi%2BHFH%2Bl08GOL5zwt3IxO6iS6RFHNtSVJTtsR%2F6W%2BQxoRkHE0k7ny7bV%2F354CoGyrlTQUIxCu%2F88ryMZtkftrzsFbyKs0GKTXZvToRPxKccr7em%2B%2F4PSW8Mx28V0sAQeVzzyXbRvlcwyX4nhcZlx3UE%2BLq0fwG14QIwyMnAwgY6pgFifKlBoaZJUvQwFSqtCKkesdcz8R%2FevWCLuxdDbgAe01jtOdC0QrrF5iH2Y2XVRD%2BWCV1nnR6m3wm4fsyzQmluyPwaHfzBUQcqQW9g0hXXF6Ab%2BpAHcuE%2FEI0rSFi9G3an5THiSqn4GcbtMmB7JwrDxbdjVQeA1wcfcmKTOP5BdEzneoh%2F%2B%2BaIfUQjq8Xz29dPLkITaaHg1me%2Bmb7urehfluiGVPVy&X-Amz-Signature=e75231eaebbf76e582f2bb3d0149e8798d63c6e49bc78446e446e50ad324ff40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BVZBKRL%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIAIka4b9rRKDB%2Frqsk8SNjoA7DiSz%2B7bX4p2kcEBM0hTAiBewWNmAOv6YFs2GhvOyhQjDUcXDliV8Q4pqhxAUDU9yir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMNUAM2M0haxEmOrgRKtwDPCHdNJrPKVfRvXfMCoJQ5j%2BtGFmIFo9QmGpLyvxg4k7nCTzs6uShd7R5iMn%2BsCxCj7G616TQHmhd2Zq%2BnplpaZqZ8WDCgIpJmUgFP0Q9%2BQBx16JIo8iV604t%2BBYCN8O3xhNLlElL4OPatjNyPRE6JKiyE66%2FkJf%2BlOZQuHb9q20sRhlMKZsuixxCU%2FHBZKqe%2Bq4iBjnegGUk4LUg4SFi19O3indXxTwktkR5xqgJl7DW5QRz7YQf0tW3C4L8CNcu9vg%2B7jhGOgb85UUUCdTgRJ9RisSuU2yeoNfxsUd3Mg3F9mV%2BB3B1CFOoS3v0H4ermjKLQhE0asQEnJxTOFwbm9j8uatLj7XwEabSISiLbzHjSmKKT%2BIhDDR5LQOhCL9bj6Nimt%2F3gYOSWpc9dIa9fLYvSKMJHmJw15Z%2FlYYC5T8IiIqVZfEhn060SuSsoI8hLeWVMOA%2FziYkQKCc8sqbTTtgMYi%2BHFH%2Bl08GOL5zwt3IxO6iS6RFHNtSVJTtsR%2F6W%2BQxoRkHE0k7ny7bV%2F354CoGyrlTQUIxCu%2F88ryMZtkftrzsFbyKs0GKTXZvToRPxKccr7em%2B%2F4PSW8Mx28V0sAQeVzzyXbRvlcwyX4nhcZlx3UE%2BLq0fwG14QIwyMnAwgY6pgFifKlBoaZJUvQwFSqtCKkesdcz8R%2FevWCLuxdDbgAe01jtOdC0QrrF5iH2Y2XVRD%2BWCV1nnR6m3wm4fsyzQmluyPwaHfzBUQcqQW9g0hXXF6Ab%2BpAHcuE%2FEI0rSFi9G3an5THiSqn4GcbtMmB7JwrDxbdjVQeA1wcfcmKTOP5BdEzneoh%2F%2B%2BaIfUQjq8Xz29dPLkITaaHg1me%2Bmb7urehfluiGVPVy&X-Amz-Signature=5023ad0c8a3cf82bcd5adfdbe144de9e5af23658a7e44c24777e1220a80c60c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
