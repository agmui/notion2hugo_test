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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI4MZYRO%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYg%2B%2FwvigwcyjD7kjvvCEcwjof0e0NQ5pUwcRSGfrWMQIhAPvYg1rPzJEW4%2BAXCcSJJ6gVOJCjCQnZcTsOTgz1hZKVKv8DCDQQABoMNjM3NDIzMTgzODA1IgzVifR3M8NvJWY0t%2F8q3AN1eusrVzoEpPLOodlnAhH%2FngiO%2Bakw3SJ5dnDZzkE%2BekWralt%2FxoHHol0BDtvd6sVCYXDrqcXp2obt0C5L0xXbviY1LDUoAYk8OGIAljSHPP%2BhFZwfdILhc86IWh7Kh0L0zIZces%2FOXEtXhJf8vDQm0DMgI0ksFaW80dd0P%2F02lwP%2Bzx7xIijhJ7yGrNMU%2BRpWs28iYcxtqAGtcVYKPZJFrBV96rM8bC524b5snokjCO8YQa0Sjtd%2ByNhxJHpZeqSdIx6A2GlL8k8HYs%2FXt%2BIx2teY3%2BbkeJn5ACYhrnAgcWjF70MGljvwOwu8EG3pcIpxy8l8G0A539WVGkjaCxkdgYRY%2BbRze3C2jIGiSVYWoWupcxtbf9ZXF2CxraqTkFV8H709qslf8RvpmwotV7HsV2lO6D0dKdoHD9nkpKSI5yz9ZuhS2Uq3bqv6lZ4mGN%2F5Nx6%2BGgbKW1d%2BT%2BdAVaBh8saarJ%2BIiBwam0xLg8jLl3u%2BjZ0F62xVw4CkpzOvjBP2MAJ%2BxdE38XfvOh5%2BYEa%2FwpNXGuXadsGCsoV8X%2BRZ51EyuZ3tOOyDtT0Ix4UQDHaYrLJu6Y7l09cfIqSS%2FU7PLkNTgiaCOPQzmtttZZYjr1L%2FuOw6uAw3xTdIZTD31fq%2FBjqkAUlJeUDNg3Sw603etyonCKt%2FJxPJfOu86nto7GSJbldxPCPx3ExbCOgHAk%2Fz%2FSmgnsY6h%2FsgF8pgqjod8%2FYxYEqlRsGlzLDD2uALYmROfcn2dxw5sAQ07RbjnlmSqblcQbfh7SwkwmhqXNUXqsQC%2BWzJcQp1QIcnrFtEUTidJ6JZlFV4j%2Br%2BoYtB9xUSNrIT83cYR9L3VbWoflxxSQ3wHmpb2gFb&X-Amz-Signature=c06e7c9ed4a58b137a1ae55f73e8cd450c181d3016fb404492c2a3bb0e2b48cb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI4MZYRO%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYg%2B%2FwvigwcyjD7kjvvCEcwjof0e0NQ5pUwcRSGfrWMQIhAPvYg1rPzJEW4%2BAXCcSJJ6gVOJCjCQnZcTsOTgz1hZKVKv8DCDQQABoMNjM3NDIzMTgzODA1IgzVifR3M8NvJWY0t%2F8q3AN1eusrVzoEpPLOodlnAhH%2FngiO%2Bakw3SJ5dnDZzkE%2BekWralt%2FxoHHol0BDtvd6sVCYXDrqcXp2obt0C5L0xXbviY1LDUoAYk8OGIAljSHPP%2BhFZwfdILhc86IWh7Kh0L0zIZces%2FOXEtXhJf8vDQm0DMgI0ksFaW80dd0P%2F02lwP%2Bzx7xIijhJ7yGrNMU%2BRpWs28iYcxtqAGtcVYKPZJFrBV96rM8bC524b5snokjCO8YQa0Sjtd%2ByNhxJHpZeqSdIx6A2GlL8k8HYs%2FXt%2BIx2teY3%2BbkeJn5ACYhrnAgcWjF70MGljvwOwu8EG3pcIpxy8l8G0A539WVGkjaCxkdgYRY%2BbRze3C2jIGiSVYWoWupcxtbf9ZXF2CxraqTkFV8H709qslf8RvpmwotV7HsV2lO6D0dKdoHD9nkpKSI5yz9ZuhS2Uq3bqv6lZ4mGN%2F5Nx6%2BGgbKW1d%2BT%2BdAVaBh8saarJ%2BIiBwam0xLg8jLl3u%2BjZ0F62xVw4CkpzOvjBP2MAJ%2BxdE38XfvOh5%2BYEa%2FwpNXGuXadsGCsoV8X%2BRZ51EyuZ3tOOyDtT0Ix4UQDHaYrLJu6Y7l09cfIqSS%2FU7PLkNTgiaCOPQzmtttZZYjr1L%2FuOw6uAw3xTdIZTD31fq%2FBjqkAUlJeUDNg3Sw603etyonCKt%2FJxPJfOu86nto7GSJbldxPCPx3ExbCOgHAk%2Fz%2FSmgnsY6h%2FsgF8pgqjod8%2FYxYEqlRsGlzLDD2uALYmROfcn2dxw5sAQ07RbjnlmSqblcQbfh7SwkwmhqXNUXqsQC%2BWzJcQp1QIcnrFtEUTidJ6JZlFV4j%2Br%2BoYtB9xUSNrIT83cYR9L3VbWoflxxSQ3wHmpb2gFb&X-Amz-Signature=f5bfbcbe7dced1ec8f96e8c2b62e14087ab84da6d6b4cdbcaf8028e816cdfdd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
