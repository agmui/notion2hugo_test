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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA6Q4G7D%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIC8UrtdWCcEF6Ygc6Ea%2F1VqCQdBjk575S6L7O9UC4NVpAiEAzjPwPQUm%2BIkPxus1PnTtZ6rVafjpbTrg9AAZ5xFjtRgqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQ55gMqS5lhM0rVgSrcAyYefbN2AcPOwHcmJMUhFZsuqEpkgsd0LdijqfcQV1JN5Y1xSX4L0QEvHDKnPOTGAHiv6ZNBXdYPyQwrLPAKWfO%2BECsu68vgPRaDLhWvF3F6ybCQbrXRA4dRLgaKY3Y0Msq7rExx9S2i%2FaC2cJX43BnDk%2FzirJYD6LcyTC3aaz9JF8TyrWuuHGcKcLAbSCZHVXZL1JExJ%2FbeAze9hVMAi0uJGQ3Ek5R%2BI4PxjdouQzVwUGKjMqOt6NQUGLO2yvexZjvP36vtHOAemPhmILbDwYEUuN1BhZ4mOyKRIIwIMJuoVTi61hB3VHXfzUDXhRcKslVAOxsR7f4NAiZwcZiaDdcVIj6nMTiehzj6Qt05qdevg8yioqWqqjGrLUU0YX2cC0LtlA%2Fb6jh80Tv1nn9zFHTWEfRJHQLzrK5sBMYxTd9LhC%2FwNlN1fm1vqz3krDmC8OGVqqXbxAlCSr7yESFCdwUdIFvj%2BPlh9VFlP7s0E1OKaoYboNVzhudrFgmAPhVUlfTBXjT3%2FRkD4NuTpfTsRxHIAtNA1PZZaF4rs60YchvT9HObosQqHTpYZBEnfvPDaBPWysuM1PFAPUa%2Fm43MbZujZrozwCqe7T%2F%2FoiROPi44dnEoiKBMeAFlEm9oML6RrMIGOqUB%2BWePLjy1hax%2FuKlq2%2FmfwiadNd5FZ2JPCgXwBlFyfJedvI1V8QxXpOVKvyGUJ3i2ZLsXyxj%2FMWUhsVybnHrRtyN0sM5EYEfHC1Ar%2BVEurFoQIbMw4Yhs1M9vlSFSylHNTElmsi09tF6WPNG5NJSnxpe7c1NkIJuWZTtji6UVvcNtRuYPHQymK0ppxUlKahdWWT9oQBKf9F17yiN8tmzMLM2Fkt0Z&X-Amz-Signature=0fdb20ea3fd9b8b312752af45e035ba354efdb8cd11783a9dffb36cf6cf9da8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA6Q4G7D%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIC8UrtdWCcEF6Ygc6Ea%2F1VqCQdBjk575S6L7O9UC4NVpAiEAzjPwPQUm%2BIkPxus1PnTtZ6rVafjpbTrg9AAZ5xFjtRgqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQ55gMqS5lhM0rVgSrcAyYefbN2AcPOwHcmJMUhFZsuqEpkgsd0LdijqfcQV1JN5Y1xSX4L0QEvHDKnPOTGAHiv6ZNBXdYPyQwrLPAKWfO%2BECsu68vgPRaDLhWvF3F6ybCQbrXRA4dRLgaKY3Y0Msq7rExx9S2i%2FaC2cJX43BnDk%2FzirJYD6LcyTC3aaz9JF8TyrWuuHGcKcLAbSCZHVXZL1JExJ%2FbeAze9hVMAi0uJGQ3Ek5R%2BI4PxjdouQzVwUGKjMqOt6NQUGLO2yvexZjvP36vtHOAemPhmILbDwYEUuN1BhZ4mOyKRIIwIMJuoVTi61hB3VHXfzUDXhRcKslVAOxsR7f4NAiZwcZiaDdcVIj6nMTiehzj6Qt05qdevg8yioqWqqjGrLUU0YX2cC0LtlA%2Fb6jh80Tv1nn9zFHTWEfRJHQLzrK5sBMYxTd9LhC%2FwNlN1fm1vqz3krDmC8OGVqqXbxAlCSr7yESFCdwUdIFvj%2BPlh9VFlP7s0E1OKaoYboNVzhudrFgmAPhVUlfTBXjT3%2FRkD4NuTpfTsRxHIAtNA1PZZaF4rs60YchvT9HObosQqHTpYZBEnfvPDaBPWysuM1PFAPUa%2Fm43MbZujZrozwCqe7T%2F%2FoiROPi44dnEoiKBMeAFlEm9oML6RrMIGOqUB%2BWePLjy1hax%2FuKlq2%2FmfwiadNd5FZ2JPCgXwBlFyfJedvI1V8QxXpOVKvyGUJ3i2ZLsXyxj%2FMWUhsVybnHrRtyN0sM5EYEfHC1Ar%2BVEurFoQIbMw4Yhs1M9vlSFSylHNTElmsi09tF6WPNG5NJSnxpe7c1NkIJuWZTtji6UVvcNtRuYPHQymK0ppxUlKahdWWT9oQBKf9F17yiN8tmzMLM2Fkt0Z&X-Amz-Signature=a71603f10acd88b42b3390414d7ff6c8c170394ebcd2c156064edfe7bc03fad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
