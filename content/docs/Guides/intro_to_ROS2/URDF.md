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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CKVTQAB%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIBVqXFDOX7oB%2FgHNlLQ%2FnSkdlYdoDm0zCADgOM4jE%2FixAiEA5%2Fd%2Bh1iADV69fMPbbMoOC%2B1LEjpbkkSEgJxU0uZxgjoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGExrR%2Fw8GcuLXMCqircAxagPHKJBGYMu7g%2FAIDFwPZ7jnQvYV9HaU1aDPDzjbuwCC%2BL1PCxwe0f1w48ymIl0x6q2WKX0bj%2FmNIK4lSbvqa33dBWkPEDYzK1PEdNx1ZrbTqBsdWXpJUZcR%2F0SiglD8Svu2QDGnmraAmEBR%2FyZdadSygX%2FhDlrQHD8p%2FRIUfAd6dXQu0mluQMjhaUU7%2B8disF%2Bef0XhJH7oVOqIJVrC6rruM2nvb5YjX7Du7dGwS43anjaPJuHhea52bzFbIxGmjgVrZD5Xxf5CsWyjguKoUjw7K%2FaaNjcBY5gMPpK3QHxlC5e5E9I%2Fimg5xPeAGpROjWQ2usFfBrzITnRnbXZbj4Zjs0lTXDdHVRxL2oW6sd26aagudXP5B0Su7W4C5CQK8QEaw3whicVQJkYe45pOcYj6QIIJxzJZ86IvtaQQ%2FnJ1HEogTXc6JlSFz7v31Xh7eKocdyBmvXrI%2FWh%2FviB5l2HvzX%2Bl9EYAmtsqwKb7DT1AxQRF9UfMhPz1GMbUl2GTBKqfObQMpKOzy1Ff5ZMLvFAOBdir8Yg4BL0H%2Biua0365awwh1DRF4cyAbmU7vvo0JzxJLkdAuXDuAZuVSMWX96dTglOHE25hZAqoPp7VkGOQxlrAjsG%2B3CgjfRMNzGmL0GOqUBc8A7zk2vee%2BOXKzOypHB8j9st2bksbKenQ2bkPDu6DrvsmWSCeC2YDYBPcfiCeNBgLDCuxtkm6W2%2FtzvxgE6vtW3YlNCO76H%2FWFE6cBf3d2dyeBKQWIXezlrDte5adtqIfIQEaArjE8gCWZKaz%2FPgK1wjv%2FG5xR4Aqnp7p4HOlb6cQp9XqMbhptFpq4Hi%2Bxj8ZtSn2MD0F18C9b1LAGrvxtb7NM4&X-Amz-Signature=cc3e10c44dc9254cf530ff306c61e6d5d78e5090339816a0f73b7e85d26b3806&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CKVTQAB%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIBVqXFDOX7oB%2FgHNlLQ%2FnSkdlYdoDm0zCADgOM4jE%2FixAiEA5%2Fd%2Bh1iADV69fMPbbMoOC%2B1LEjpbkkSEgJxU0uZxgjoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGExrR%2Fw8GcuLXMCqircAxagPHKJBGYMu7g%2FAIDFwPZ7jnQvYV9HaU1aDPDzjbuwCC%2BL1PCxwe0f1w48ymIl0x6q2WKX0bj%2FmNIK4lSbvqa33dBWkPEDYzK1PEdNx1ZrbTqBsdWXpJUZcR%2F0SiglD8Svu2QDGnmraAmEBR%2FyZdadSygX%2FhDlrQHD8p%2FRIUfAd6dXQu0mluQMjhaUU7%2B8disF%2Bef0XhJH7oVOqIJVrC6rruM2nvb5YjX7Du7dGwS43anjaPJuHhea52bzFbIxGmjgVrZD5Xxf5CsWyjguKoUjw7K%2FaaNjcBY5gMPpK3QHxlC5e5E9I%2Fimg5xPeAGpROjWQ2usFfBrzITnRnbXZbj4Zjs0lTXDdHVRxL2oW6sd26aagudXP5B0Su7W4C5CQK8QEaw3whicVQJkYe45pOcYj6QIIJxzJZ86IvtaQQ%2FnJ1HEogTXc6JlSFz7v31Xh7eKocdyBmvXrI%2FWh%2FviB5l2HvzX%2Bl9EYAmtsqwKb7DT1AxQRF9UfMhPz1GMbUl2GTBKqfObQMpKOzy1Ff5ZMLvFAOBdir8Yg4BL0H%2Biua0365awwh1DRF4cyAbmU7vvo0JzxJLkdAuXDuAZuVSMWX96dTglOHE25hZAqoPp7VkGOQxlrAjsG%2B3CgjfRMNzGmL0GOqUBc8A7zk2vee%2BOXKzOypHB8j9st2bksbKenQ2bkPDu6DrvsmWSCeC2YDYBPcfiCeNBgLDCuxtkm6W2%2FtzvxgE6vtW3YlNCO76H%2FWFE6cBf3d2dyeBKQWIXezlrDte5adtqIfIQEaArjE8gCWZKaz%2FPgK1wjv%2FG5xR4Aqnp7p4HOlb6cQp9XqMbhptFpq4Hi%2Bxj8ZtSn2MD0F18C9b1LAGrvxtb7NM4&X-Amz-Signature=8c7a7638eed3de7d92bbbfe72aa9a6eea7765fd3f7ea136369ae31d665bfd241&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
