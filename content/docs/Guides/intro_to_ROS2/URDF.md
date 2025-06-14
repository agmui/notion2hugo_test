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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUAX35GY%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD1c%2F%2Bdzr7W5qCUTGQNdszK0UgaLTIkpR2mq8%2FiyD6CugIgG8UnbpRqNzMdK5FPmToCSN6GSQv%2FKRdK4sVPPTgSc9Uq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDIS6J1ovc2pof0R%2BASrcA32A0WIVYt56VdK9fF1UILXCpqEMuL3QSZgsG%2FLt8InSiBVsDBYbKrcvGU0v56Jgb5hpHstdFhHS3vQQTEgMYoc%2F7tvjM0BmOwCCgQAQnnmxTwSKiIv5YmJ6rBCIlHQK2TKcgRhlFKJimEhR2kclBU9jdOjwBS1ZkI1ScdkqC4mXqrMBzyx3yV6Et9zElY05RQZelNjljgYaq2yJ9vus25zc4dJcmDN%2BqaYR%2Fx%2F%2B81xf3UGP0w03sMbXoDVq63pLeKXkrcZr6%2F0brli83Zkd2FPu8C5C8ZpPI8Sx%2B3gjaAoGxYHRWHPa0OR%2BlfWmUFYZByUgVRAD%2FfKV0lSDdMcLbyNZ0ZHiYACKFBkYqkbu%2Fm0vrfavLHuGWTZ68s2MMXuVoo2Y%2FIVS9EZc4kq17g8CCVpQFhaohllXOI1mmM5YIOd8w8A%2FQwMAbJU8ZNHpO3BKdGvbZ%2FNVOOjAbqzTnJw6THCqyPDPAvS5bTUUEKJtzNvwcEVMOMt8EeK%2BM5coEAHhFvAx0b9MR%2Fj0cOcbljnno9F5yKAFRDliVE31xMp5fqKVNbbOnlL%2F1ffHEFdGNBIDEm85zoLnVvbSKgqfJBWfjfk6amZi4wZCavyN1qJY6cg2BAXHym8uHeUGwFKUMPf6tsIGOqUBho0eCJhzm%2B4KIefy0NpSJJL9gUzSjeeVWdGKCrVWtmzoCV4ZSvVccGQFmT%2BEgt38SpEABoxoLEwWfBA3JxRkNCYS096dVo0d7QZXiKsduNsTBH8jFgOZyrPpkd3G%2F1Pvnrcje4f2MctKqEnrAE6Se5P9ive9yQxze3xJ79X5eqWuICTq7lo6GAJk03sK1rVna7geTsedRmvG9imtz7eBT9OkS6pR&X-Amz-Signature=6885d40a7d23ca05754d5e65003358b08e8796e9ab494f3cf30b7631296a3cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUAX35GY%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD1c%2F%2Bdzr7W5qCUTGQNdszK0UgaLTIkpR2mq8%2FiyD6CugIgG8UnbpRqNzMdK5FPmToCSN6GSQv%2FKRdK4sVPPTgSc9Uq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDIS6J1ovc2pof0R%2BASrcA32A0WIVYt56VdK9fF1UILXCpqEMuL3QSZgsG%2FLt8InSiBVsDBYbKrcvGU0v56Jgb5hpHstdFhHS3vQQTEgMYoc%2F7tvjM0BmOwCCgQAQnnmxTwSKiIv5YmJ6rBCIlHQK2TKcgRhlFKJimEhR2kclBU9jdOjwBS1ZkI1ScdkqC4mXqrMBzyx3yV6Et9zElY05RQZelNjljgYaq2yJ9vus25zc4dJcmDN%2BqaYR%2Fx%2F%2B81xf3UGP0w03sMbXoDVq63pLeKXkrcZr6%2F0brli83Zkd2FPu8C5C8ZpPI8Sx%2B3gjaAoGxYHRWHPa0OR%2BlfWmUFYZByUgVRAD%2FfKV0lSDdMcLbyNZ0ZHiYACKFBkYqkbu%2Fm0vrfavLHuGWTZ68s2MMXuVoo2Y%2FIVS9EZc4kq17g8CCVpQFhaohllXOI1mmM5YIOd8w8A%2FQwMAbJU8ZNHpO3BKdGvbZ%2FNVOOjAbqzTnJw6THCqyPDPAvS5bTUUEKJtzNvwcEVMOMt8EeK%2BM5coEAHhFvAx0b9MR%2Fj0cOcbljnno9F5yKAFRDliVE31xMp5fqKVNbbOnlL%2F1ffHEFdGNBIDEm85zoLnVvbSKgqfJBWfjfk6amZi4wZCavyN1qJY6cg2BAXHym8uHeUGwFKUMPf6tsIGOqUBho0eCJhzm%2B4KIefy0NpSJJL9gUzSjeeVWdGKCrVWtmzoCV4ZSvVccGQFmT%2BEgt38SpEABoxoLEwWfBA3JxRkNCYS096dVo0d7QZXiKsduNsTBH8jFgOZyrPpkd3G%2F1Pvnrcje4f2MctKqEnrAE6Se5P9ive9yQxze3xJ79X5eqWuICTq7lo6GAJk03sK1rVna7geTsedRmvG9imtz7eBT9OkS6pR&X-Amz-Signature=8aa4745ef9ecf1910d8cd5b4edf2ccefc0323c6482875eb5e7a2fbedb559e3fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
