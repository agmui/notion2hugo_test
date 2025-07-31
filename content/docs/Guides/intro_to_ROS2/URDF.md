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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMST4S6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcwHV34KO6q475IggHkiR5pmGEmhCd72iXm4H8LwHrAwIgdS9zV7UNTkNjSkrb3gdNUSZ4tiyhCFXCywl4jEPvYYQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrGfXTNZs3oq6LBiSrcA0iRRQbuENry77KaTEQdNtewBgarL%2BZzQQ1%2BXr06yRFuayKNyxrkYpecP1cFaOepLRmy25aBlQJicuJpwF98sIQ0k3yvTsDqaEfOFJ0qJ%2FrDwISDeUnH7c8Ta%2BQunN9dzPLg%2Bip6EYsTxwY4YAuTqcFhKsEDtYkSky3B7DMHxlPdt1GGne9qEjVsgC88nVcmQ5UVFPbcZXFECqboafwOsxG7l%2FK1Exvv5YNyBvY4uvaJ7S7EqQs9OZWJmsttqKxXjlMFcmTUhFhaIfGSsiUm4QlVnKOAKyu3O%2BeoCoJl%2FJ14CNS9f75b0zvKZUhn30ilwmVwy60WtPObA6%2BQvsXHrjypA1MOLDnmYHBJkUU3oEr9oV5WwPGkpSZDRY4HXtlPC2F1lxuWB8yEJjMsuiyLrOCuTfyQQqc%2BrLs8XM2WEU2NsCiY62Y%2Bim4eXE9i%2BLI3TrntraqYOMVmhI06VhNEWkNbaNw93xns6eCNguz19HXsCeeKOVpgwXNmU6t%2FBpAAFpJrMttLxkh5At9t1ivMO4pBmcDsi873x94%2BZShf7tJk2Md9syZDRgAQZWdbANfsYtpnJSOkcWM%2Be00tRfba2%2F5tRe5clmxdhWHibboQ2UONc9Tg7rDUdx1NFDRGMNXcrsQGOqUBwOXG8gpva%2FzeJZSZ7x8nRNI7hHLBmExefNvI7eaFbbOw%2BZcp3WgGJ9l3ruO9la7Mk6VzeeMPUCxiBGQiaCc3WCyv3R1EatGI8c3Z3UbNDBxuQ1D7ypZIfwiGIuqNH9foNs7UEkQguiqnjQ5tlP7ALIxHGRmEmOZown%2BZQtX1lviw%2BZl6GdNbXPrIBFMwGwvwHtyLGnMWNL5kSkWiwtLypc8PP6GF&X-Amz-Signature=6531f4caef5272b3dee13817b319c70c73a0a45731ec025ceba2ac9090a3b667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMST4S6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcwHV34KO6q475IggHkiR5pmGEmhCd72iXm4H8LwHrAwIgdS9zV7UNTkNjSkrb3gdNUSZ4tiyhCFXCywl4jEPvYYQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrGfXTNZs3oq6LBiSrcA0iRRQbuENry77KaTEQdNtewBgarL%2BZzQQ1%2BXr06yRFuayKNyxrkYpecP1cFaOepLRmy25aBlQJicuJpwF98sIQ0k3yvTsDqaEfOFJ0qJ%2FrDwISDeUnH7c8Ta%2BQunN9dzPLg%2Bip6EYsTxwY4YAuTqcFhKsEDtYkSky3B7DMHxlPdt1GGne9qEjVsgC88nVcmQ5UVFPbcZXFECqboafwOsxG7l%2FK1Exvv5YNyBvY4uvaJ7S7EqQs9OZWJmsttqKxXjlMFcmTUhFhaIfGSsiUm4QlVnKOAKyu3O%2BeoCoJl%2FJ14CNS9f75b0zvKZUhn30ilwmVwy60WtPObA6%2BQvsXHrjypA1MOLDnmYHBJkUU3oEr9oV5WwPGkpSZDRY4HXtlPC2F1lxuWB8yEJjMsuiyLrOCuTfyQQqc%2BrLs8XM2WEU2NsCiY62Y%2Bim4eXE9i%2BLI3TrntraqYOMVmhI06VhNEWkNbaNw93xns6eCNguz19HXsCeeKOVpgwXNmU6t%2FBpAAFpJrMttLxkh5At9t1ivMO4pBmcDsi873x94%2BZShf7tJk2Md9syZDRgAQZWdbANfsYtpnJSOkcWM%2Be00tRfba2%2F5tRe5clmxdhWHibboQ2UONc9Tg7rDUdx1NFDRGMNXcrsQGOqUBwOXG8gpva%2FzeJZSZ7x8nRNI7hHLBmExefNvI7eaFbbOw%2BZcp3WgGJ9l3ruO9la7Mk6VzeeMPUCxiBGQiaCc3WCyv3R1EatGI8c3Z3UbNDBxuQ1D7ypZIfwiGIuqNH9foNs7UEkQguiqnjQ5tlP7ALIxHGRmEmOZown%2BZQtX1lviw%2BZl6GdNbXPrIBFMwGwvwHtyLGnMWNL5kSkWiwtLypc8PP6GF&X-Amz-Signature=d383a7c0578f07fdad26e7b14933209debb460c3d38331da7fe4e26a77659ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
