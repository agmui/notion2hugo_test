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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELR6QXM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJFMEMCH3izHpaBy%2F523LWy4TJAVT2OqEEb%2BXn3gO4TnoHYSUICIG%2BOmQ3fFWQEYFV4TDXPzO6LxnV4v66DuTanUBnya4Q9Kv8DCHgQABoMNjM3NDIzMTgzODA1IgzRwtDxvZxxeRvcDWAq3ANVYbGqW9%2BnzANplU1YOIAPh1xZtyMMNSwVWjYtKAQGfSHhV5NXR1dAM4IXgcmAewZ0OqfbZcFW0YuHnn999%2BNF9dqdK%2F1CFdTKSECEXxHdqznG3EZdjv5BFVvNXhYgTsFPBhZJIJ9nJbfdlkSC2nZhteKF7hbX0c0Q9WnLz%2FMlpFefHK3KIQViC8mAPeHpifzn3GRydFh8f%2Fur69%2F%2B1cOoeX9jjh6XzMhGTGuKDZ1r1djnvWiI8OGQwpm6B63NhAvNB6oA1r36IrYSCdU%2FTUlgJEB8YJTaeRJp9qJRSs2cI%2B7FgLl%2BC9Rr0aOmm3NBA0hg7uwHbZn8S%2BqFD8M2TKzP72kcs%2ByT0UziYt4%2F9qFlyetcaDnewT2riCs6vVEtR4SGUMNvgWitxeB9ELI7lzhjxaNgk%2B4JeufN%2BMw%2BQ908izcfbNSLRBaYFcpMjm74JmrdHba%2FcYoQsKDmDGeQztcRg%2F%2FD0agkmynviizTWTEWw5A8KbsCbeq5X6YUhpMsqyOSZ7tcLpcIGMMkHs9ecZwLJVwNLcM6ho%2FepmGXNcWAQt5IL6xU3vVO%2BkGV%2B5AAKaQLWpQVGJA%2BZg6QZ7iB2w72OXpncHBODWuTWMUV%2FVxp%2FxxoNMNQqTBDclHZEjD1n6C%2FBjqnAYQNUxx9pWKBe9x8tkyF5PktLYF%2BNXQIEwRhN3ZNI2YSMPs4mPjQD107CNbclKUGY1W6W2ACvwyh9OnBEInxNzy0Zf9kWDSoAp3Xjij8txAR0BEz%2FeQafxUTHLpRzsmCFbmFBKg3U%2F8qYvGiQ%2BxPn%2BK4dt0qwQQAjMVSDQiF6KItzbvXFQgXqCOZJBdrp1pxznx31iffxjHLUnQU3JNZTp1WB%2BGv4Hec&X-Amz-Signature=dc4bd8c18ad9046f30e745fdcf6c542d60ccf55bcacc89526ce2525bd410a6f3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELR6QXM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJFMEMCH3izHpaBy%2F523LWy4TJAVT2OqEEb%2BXn3gO4TnoHYSUICIG%2BOmQ3fFWQEYFV4TDXPzO6LxnV4v66DuTanUBnya4Q9Kv8DCHgQABoMNjM3NDIzMTgzODA1IgzRwtDxvZxxeRvcDWAq3ANVYbGqW9%2BnzANplU1YOIAPh1xZtyMMNSwVWjYtKAQGfSHhV5NXR1dAM4IXgcmAewZ0OqfbZcFW0YuHnn999%2BNF9dqdK%2F1CFdTKSECEXxHdqznG3EZdjv5BFVvNXhYgTsFPBhZJIJ9nJbfdlkSC2nZhteKF7hbX0c0Q9WnLz%2FMlpFefHK3KIQViC8mAPeHpifzn3GRydFh8f%2Fur69%2F%2B1cOoeX9jjh6XzMhGTGuKDZ1r1djnvWiI8OGQwpm6B63NhAvNB6oA1r36IrYSCdU%2FTUlgJEB8YJTaeRJp9qJRSs2cI%2B7FgLl%2BC9Rr0aOmm3NBA0hg7uwHbZn8S%2BqFD8M2TKzP72kcs%2ByT0UziYt4%2F9qFlyetcaDnewT2riCs6vVEtR4SGUMNvgWitxeB9ELI7lzhjxaNgk%2B4JeufN%2BMw%2BQ908izcfbNSLRBaYFcpMjm74JmrdHba%2FcYoQsKDmDGeQztcRg%2F%2FD0agkmynviizTWTEWw5A8KbsCbeq5X6YUhpMsqyOSZ7tcLpcIGMMkHs9ecZwLJVwNLcM6ho%2FepmGXNcWAQt5IL6xU3vVO%2BkGV%2B5AAKaQLWpQVGJA%2BZg6QZ7iB2w72OXpncHBODWuTWMUV%2FVxp%2FxxoNMNQqTBDclHZEjD1n6C%2FBjqnAYQNUxx9pWKBe9x8tkyF5PktLYF%2BNXQIEwRhN3ZNI2YSMPs4mPjQD107CNbclKUGY1W6W2ACvwyh9OnBEInxNzy0Zf9kWDSoAp3Xjij8txAR0BEz%2FeQafxUTHLpRzsmCFbmFBKg3U%2F8qYvGiQ%2BxPn%2BK4dt0qwQQAjMVSDQiF6KItzbvXFQgXqCOZJBdrp1pxznx31iffxjHLUnQU3JNZTp1WB%2BGv4Hec&X-Amz-Signature=869941bba2e1a10bc79f5f0ec1772ac331d6eca44e113c25c48f5f61036087b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
