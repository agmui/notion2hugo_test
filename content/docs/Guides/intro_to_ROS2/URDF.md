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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHCLKT4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg19g397Bcqf7BiZzdLwuzeL47sd6iuVxl6cW%2BKXtahAiAQilPagw0p6hc2Cl5s6ASWTnDw%2FHR0caSWuru0MzmgsyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzvsYM0rFzfNdnn8zKtwDjnrE4AoTdnnzhd%2FBCZnhyM2crVr05En8EbdOkZMd3HEFlj%2BYxVYZJ8GaXsXQQZRRM6uBBZWWckSKNDqA1DFnaI6dMOAvVcQtWjU2RKUldxUj4g5EFp6fF5koljC%2FDHFUnifiFz6wQJ2ghU26vjYBGt5oGcb8VTGR27eTDiQg0SbKxHhbRTyeE%2FE7F5PxARk2zQ%2FOUeLzRj0g5c7IAEiumr8DKJ8k0HzubZ9BA3GHdUjBxIU05gt3wJPCq3EztGKXnu963gjy4W8HZtbHNOpX45p1ynM47oqaQR190MAASnGk6x83HHuCj739G5d%2F%2BoOukmMjbTEyJn1P9cGqTCiYPjcA0E0cdmpZPyt%2B8KF4rOk03110xEa55ErxmN0sPCZhWW7At%2FtCbo3mZdtzOF2apuKEN16ZkYEqb9LQ6k%2BbQGSkc6zd1ARasoUYVpSvawr5enAhazQss49PCbq5iefg0Y%2B%2FgszmGjYc452oA1byJ5om%2FeTNfJ6A29xKqmUCe1i07KfuuzR8LjZDjmiCT4OH0ccn6frThyVUAOf02tFTDzlpyK1zCHI72DmWJLuoc8kuDjwvEg%2BZbS%2BHoBvVsFWERNRGvt%2FYbTo86CSeZpfJX4nkQ%2B6D7yJ8rUKpfRIwoanFwwY6pgHh7E125LdtxPhT3iYukR2B1uRNdK4ed3THbzGlKYugc5WTUAZkC3o1iLF9X3Qk1UnTrcJ%2FEVWGUj6hkCSSwvJK3tGR5CLbLenmQGVB7ICkBgoSc2C662kFpy6Ma98acUf7bGyd5kUaw%2B4xJkwlmj13d3viB9FSrIeKF8sEctu3KKB%2FU7aL32KVN%2BQc2NQcf0zjHTi7Gou80novfFPothKg3wbaDWSg&X-Amz-Signature=486d73446b51ec41f88ba06e5402d871c964ea28eb9dd602151c7093a5e70089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHCLKT4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg19g397Bcqf7BiZzdLwuzeL47sd6iuVxl6cW%2BKXtahAiAQilPagw0p6hc2Cl5s6ASWTnDw%2FHR0caSWuru0MzmgsyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzvsYM0rFzfNdnn8zKtwDjnrE4AoTdnnzhd%2FBCZnhyM2crVr05En8EbdOkZMd3HEFlj%2BYxVYZJ8GaXsXQQZRRM6uBBZWWckSKNDqA1DFnaI6dMOAvVcQtWjU2RKUldxUj4g5EFp6fF5koljC%2FDHFUnifiFz6wQJ2ghU26vjYBGt5oGcb8VTGR27eTDiQg0SbKxHhbRTyeE%2FE7F5PxARk2zQ%2FOUeLzRj0g5c7IAEiumr8DKJ8k0HzubZ9BA3GHdUjBxIU05gt3wJPCq3EztGKXnu963gjy4W8HZtbHNOpX45p1ynM47oqaQR190MAASnGk6x83HHuCj739G5d%2F%2BoOukmMjbTEyJn1P9cGqTCiYPjcA0E0cdmpZPyt%2B8KF4rOk03110xEa55ErxmN0sPCZhWW7At%2FtCbo3mZdtzOF2apuKEN16ZkYEqb9LQ6k%2BbQGSkc6zd1ARasoUYVpSvawr5enAhazQss49PCbq5iefg0Y%2B%2FgszmGjYc452oA1byJ5om%2FeTNfJ6A29xKqmUCe1i07KfuuzR8LjZDjmiCT4OH0ccn6frThyVUAOf02tFTDzlpyK1zCHI72DmWJLuoc8kuDjwvEg%2BZbS%2BHoBvVsFWERNRGvt%2FYbTo86CSeZpfJX4nkQ%2B6D7yJ8rUKpfRIwoanFwwY6pgHh7E125LdtxPhT3iYukR2B1uRNdK4ed3THbzGlKYugc5WTUAZkC3o1iLF9X3Qk1UnTrcJ%2FEVWGUj6hkCSSwvJK3tGR5CLbLenmQGVB7ICkBgoSc2C662kFpy6Ma98acUf7bGyd5kUaw%2B4xJkwlmj13d3viB9FSrIeKF8sEctu3KKB%2FU7aL32KVN%2BQc2NQcf0zjHTi7Gou80novfFPothKg3wbaDWSg&X-Amz-Signature=042db9febca5ccb073073a09095aaf79b10b07243230ed1e17c0f4669c5b6a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
