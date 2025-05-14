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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V57P5LPG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCRPz6Vh4usMKAj1oXTt3yMIxzOGBsMZPiqf3XcWTPVvwIgU0JXlHl%2BXgOhk3oczzRwCmYNDKbPKBBNnvdMxZlc95sqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3GI3iekRMdlRsvnCrcA%2FUzXopnyhUZRw%2F1luBtNh%2FWKczzEP6wFC3Oqn5qYLragu%2FcWRFM5l2CybVtTOhfhhbDksvyWtwpzGHWNWVUu7IlpjTPk7vr1mCQQHEFPWpZYB%2B4e6%2FuRUlbULrwPRngGJRvJrzVnmx%2F7nGx0lWo65l08Mq13%2Bdqy2FX0wUXtAZAMiuGPDgJOLAoiJbcIionPoFz3E6jTzV8wTcYKgAJDHdCfOh4Wm6R3Cs7sD84uPOY18BOlhEh8I%2FAneeaN%2BwfMib5eSYEeDTjOk6dv%2FsyhALacbkAQZQC%2F9MwYmKlGwj53AjPN5xGa0M6gfd%2BbmVwFnMYF7hz6RbFVXNz7prmzhRGxd0AjPwaY5%2BF5dtyXsQd37dRyU%2BVfUR%2BgNgxJ81C%2B4irDptxVmSrLOyTb%2FCWoHaL6WgDomrVQO9H0808Cz%2FS0YiCgxsYzLnhL58Ppz3MYJ3j4Lh9WbPpdbyrQ7HF%2B35eliFlKwe3t45w4nz%2BiJzj6sLq9CkmejZc4JKULyPylhaUjZZDI9V5UsgROOxy0HmWqQcKlE8wsrpTxgohHPiYWMxGPhKrox0v%2FH873zqQtfGml4WIYz6Zli7AQLm6kE0Xr9rVsNK1qef5V1EoBh2WKdzGG6rl6MAAPr2fMJnskMEGOqUB6CKWC5leNa3XNLS7DEwmjayrw0y%2B2ncYp3plzYjoi3b0jjv%2FOzEDSjHIys8xcw0NCELOp6y5926tsOBqQ%2Fzd%2ByXOjux5n3EnkJWVU%2FbVNSm71bmAj%2B%2B9OHosJkK0bJD%2Be1fI1TcF54jMy1LRslp%2Ba0F2ZL4G8g7sT9plcxJNsL%2BCrWl1uv44kydBQSbFNKaH%2BwgRLtu7XaalyE71I51lbYQLKl5z&X-Amz-Signature=848e38a8d72ffbd594ddfdd6dee5f9c068df61d4ded77eba0e4af617dfeb21b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V57P5LPG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCRPz6Vh4usMKAj1oXTt3yMIxzOGBsMZPiqf3XcWTPVvwIgU0JXlHl%2BXgOhk3oczzRwCmYNDKbPKBBNnvdMxZlc95sqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3GI3iekRMdlRsvnCrcA%2FUzXopnyhUZRw%2F1luBtNh%2FWKczzEP6wFC3Oqn5qYLragu%2FcWRFM5l2CybVtTOhfhhbDksvyWtwpzGHWNWVUu7IlpjTPk7vr1mCQQHEFPWpZYB%2B4e6%2FuRUlbULrwPRngGJRvJrzVnmx%2F7nGx0lWo65l08Mq13%2Bdqy2FX0wUXtAZAMiuGPDgJOLAoiJbcIionPoFz3E6jTzV8wTcYKgAJDHdCfOh4Wm6R3Cs7sD84uPOY18BOlhEh8I%2FAneeaN%2BwfMib5eSYEeDTjOk6dv%2FsyhALacbkAQZQC%2F9MwYmKlGwj53AjPN5xGa0M6gfd%2BbmVwFnMYF7hz6RbFVXNz7prmzhRGxd0AjPwaY5%2BF5dtyXsQd37dRyU%2BVfUR%2BgNgxJ81C%2B4irDptxVmSrLOyTb%2FCWoHaL6WgDomrVQO9H0808Cz%2FS0YiCgxsYzLnhL58Ppz3MYJ3j4Lh9WbPpdbyrQ7HF%2B35eliFlKwe3t45w4nz%2BiJzj6sLq9CkmejZc4JKULyPylhaUjZZDI9V5UsgROOxy0HmWqQcKlE8wsrpTxgohHPiYWMxGPhKrox0v%2FH873zqQtfGml4WIYz6Zli7AQLm6kE0Xr9rVsNK1qef5V1EoBh2WKdzGG6rl6MAAPr2fMJnskMEGOqUB6CKWC5leNa3XNLS7DEwmjayrw0y%2B2ncYp3plzYjoi3b0jjv%2FOzEDSjHIys8xcw0NCELOp6y5926tsOBqQ%2Fzd%2ByXOjux5n3EnkJWVU%2FbVNSm71bmAj%2B%2B9OHosJkK0bJD%2Be1fI1TcF54jMy1LRslp%2Ba0F2ZL4G8g7sT9plcxJNsL%2BCrWl1uv44kydBQSbFNKaH%2BwgRLtu7XaalyE71I51lbYQLKl5z&X-Amz-Signature=d75a44920b2b4ec20cfd6d496842e5a87584553738a3aa20acb787bab3ba1d20&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
