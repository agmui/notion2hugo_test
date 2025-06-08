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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGLN47AK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg9OwWhvlS2e71qfO8eFYw2VR5nrUcBwcboH5UUpEJ5gIhAJH1Ph%2FIBiR92HXrRNdQ%2Fnx2z9eCO0YjYPoXHXBz8Y5NKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyErH%2B7ZGkKOmYp9Zoq3APCI81on0PeL6LVOUk9r65iZA0ItsYVePh5i7DGt6gt63nRAAP10OcIhykLXi3CAgDQ0EHfW%2FlLPvtrYIrtaOn2zyq5q5G9qEspQ5tuw73%2BqalcEY2XP5ZblDz5GHudYVycsxYiLJkMGKciPrCjKaDsik0EG81IHOOkGhkhsKfEjRzHA3HLnBTIk6VY8FpOxqsjOjqQqh%2Bj8aDYZMGbwClI2Yl3ecOf9uUtnPafVuA8IoYAEQ1e0E4e%2BwFYF9rRkRvoZz6Bf0Tv%2B4UgEUZXCS1T4I4BZXn8RWuF4AszDnBQ3Sf5sgOy6P2AVUKCVcLsz933jMDXo%2F3%2FjTSV12TDl1K3KGTBfRTHpy8YWP75bqxVYv7NpBXHQgPKSP10ehaFtP86JkbDCZnj1jRB7wUKb0hgXfarruRvy4290I937U0PtFh3iKooL%2B17%2FUg9%2BcRzqgDCaxOJVnM1jEGNfE6i6QdcPZEU3j4oXNFMGRnKhacfsgwWgMw7OGNREzHkewXhW5FTEp7%2B0vY8k2RKt7YvjlZDEg4pTnnoBICzU4zB2BNGDZtMtI%2B4VO9zO42mYLaurKNSapXjKekRW79aXk5lpdLhJCa7PeR5k00tnzVRY2ydNkmJfQJLDahPdg94XjCYopjCBjqkAbFySJWo%2Btn%2BoJBVxKj4pXtJahKr3VICsDapddVzI%2FRTG%2F6%2FMcZ7IB%2BRQb7Te3WueQFEr7VwpCGKbcxx%2BIdAYCiiQR5HN3qc%2Bfx%2FoN5TaW%2FHqECoRHKVl%2BcExChxVeoEUU6MBBQ0JJkkRuNvlT%2Bu8sN6qJDwsK3abbiKU1DD2YXkSbGEhagjrUetz6PXMN4kPMZlppez%2BgVed%2FyiE%2BN8jmp1ZcJu&X-Amz-Signature=1cad88347de53c7511728d6ee54734aa14008f0e4cb09b3a366f4ce9167b9814&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGLN47AK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg9OwWhvlS2e71qfO8eFYw2VR5nrUcBwcboH5UUpEJ5gIhAJH1Ph%2FIBiR92HXrRNdQ%2Fnx2z9eCO0YjYPoXHXBz8Y5NKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyErH%2B7ZGkKOmYp9Zoq3APCI81on0PeL6LVOUk9r65iZA0ItsYVePh5i7DGt6gt63nRAAP10OcIhykLXi3CAgDQ0EHfW%2FlLPvtrYIrtaOn2zyq5q5G9qEspQ5tuw73%2BqalcEY2XP5ZblDz5GHudYVycsxYiLJkMGKciPrCjKaDsik0EG81IHOOkGhkhsKfEjRzHA3HLnBTIk6VY8FpOxqsjOjqQqh%2Bj8aDYZMGbwClI2Yl3ecOf9uUtnPafVuA8IoYAEQ1e0E4e%2BwFYF9rRkRvoZz6Bf0Tv%2B4UgEUZXCS1T4I4BZXn8RWuF4AszDnBQ3Sf5sgOy6P2AVUKCVcLsz933jMDXo%2F3%2FjTSV12TDl1K3KGTBfRTHpy8YWP75bqxVYv7NpBXHQgPKSP10ehaFtP86JkbDCZnj1jRB7wUKb0hgXfarruRvy4290I937U0PtFh3iKooL%2B17%2FUg9%2BcRzqgDCaxOJVnM1jEGNfE6i6QdcPZEU3j4oXNFMGRnKhacfsgwWgMw7OGNREzHkewXhW5FTEp7%2B0vY8k2RKt7YvjlZDEg4pTnnoBICzU4zB2BNGDZtMtI%2B4VO9zO42mYLaurKNSapXjKekRW79aXk5lpdLhJCa7PeR5k00tnzVRY2ydNkmJfQJLDahPdg94XjCYopjCBjqkAbFySJWo%2Btn%2BoJBVxKj4pXtJahKr3VICsDapddVzI%2FRTG%2F6%2FMcZ7IB%2BRQb7Te3WueQFEr7VwpCGKbcxx%2BIdAYCiiQR5HN3qc%2Bfx%2FoN5TaW%2FHqECoRHKVl%2BcExChxVeoEUU6MBBQ0JJkkRuNvlT%2Bu8sN6qJDwsK3abbiKU1DD2YXkSbGEhagjrUetz6PXMN4kPMZlppez%2BgVed%2FyiE%2BN8jmp1ZcJu&X-Amz-Signature=def3708c64f56c011dc79443702b253cb4e22bf439428be8f30eb68f055343ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
