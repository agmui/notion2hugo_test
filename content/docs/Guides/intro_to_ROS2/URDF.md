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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALVCOMV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGJs09uUMSFK47pr3j6CAoU%2FYZh5Yu%2FPgFAxw2IHx3%2BwIgBdxWx3BunadcxNxHI3Z8ZzZkZT%2Ba4wpWMM26VjjKWekq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKf1TWWT2CeIY2noiyrcAxIdR7Qf%2F1SibMrW4d1gfK0M3GjDZn%2FL6KKG3l%2B7p6Q%2FuJ5dHeJf77p0fWluYE201Bwegfk826y4Ker6R9sVO5EXD18C6weg4WA1A0hTrC80U54nj9NVXJnC%2B%2B4h5i8elQyLNGd6KtkQn9qS2eo7lhRmwpD6f0fESd8YVzycAAqBiP%2BrpmzJZSPao0xCidpVByso1%2BpHOcC03izNAlvt%2BiqOTWo6jBnQFph4ZcQ1D5PZPaJjzW%2FUVv6gQiDtipW6GCxw30z1w0J2llsC%2Bg0AlFLVZvNvK7H5Qa4PxrC0JwXAMS6j59TjYyhVrwwTc9SwldtKuECrgFQhJn0YRDYD7hgmLR2TtjPh0eI8POWpjXYJVuXGHXgxuklcTpFJTTOCXj9Rt9gKs21wmfk8PJQ4xCmyf1xyA8c3ljvEXuZVo%2Bo%2FR5Ul73KG3nAq7sfDd%2Bx%2Fh0%2BBjz7%2FzYJCvI4FHuogL0bviQsLJxCsAfVSHErahmAXPPSHfJ8hSy2aJEkTUCtxPwoPlGdED3e7Z1qosnoevUw91NwTdkom3z9IpP6L%2BDGUe6Cn2vOJaMxlfLOURCnNuaMK1JQGCWTl2M3aM%2BZSR%2Bu0cZ0F%2BBnhHvX5od7mZKkAiid323t8HjwYpPx3MJzV5sAGOqUBrwxmtlsH1kEoUVtt%2BkrAPENpDlmi8LR5W3xRG%2FFIMRC5v7rOUsMWLzpWIj1h12uWBL3f9H9aQOlEux11Sxi5f4MHMZQtZ4RiUDWxAyLvY6ZBrGUDl%2Bk02OOgJF3XcCSe%2B0vmlM2E2EgwwUJ1YS982%2F7SynTCZjsMK7J%2BO9V0TLaXbV5%2Bybgd9OVZcIKcbkTTG9ANQ6xc9w%2By0SouaieDB61Rz5no&X-Amz-Signature=d73655540d3e1b2cecb2cb161d5237e80d5968537421dfebae9b8f248313fa3c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALVCOMV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGJs09uUMSFK47pr3j6CAoU%2FYZh5Yu%2FPgFAxw2IHx3%2BwIgBdxWx3BunadcxNxHI3Z8ZzZkZT%2Ba4wpWMM26VjjKWekq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKf1TWWT2CeIY2noiyrcAxIdR7Qf%2F1SibMrW4d1gfK0M3GjDZn%2FL6KKG3l%2B7p6Q%2FuJ5dHeJf77p0fWluYE201Bwegfk826y4Ker6R9sVO5EXD18C6weg4WA1A0hTrC80U54nj9NVXJnC%2B%2B4h5i8elQyLNGd6KtkQn9qS2eo7lhRmwpD6f0fESd8YVzycAAqBiP%2BrpmzJZSPao0xCidpVByso1%2BpHOcC03izNAlvt%2BiqOTWo6jBnQFph4ZcQ1D5PZPaJjzW%2FUVv6gQiDtipW6GCxw30z1w0J2llsC%2Bg0AlFLVZvNvK7H5Qa4PxrC0JwXAMS6j59TjYyhVrwwTc9SwldtKuECrgFQhJn0YRDYD7hgmLR2TtjPh0eI8POWpjXYJVuXGHXgxuklcTpFJTTOCXj9Rt9gKs21wmfk8PJQ4xCmyf1xyA8c3ljvEXuZVo%2Bo%2FR5Ul73KG3nAq7sfDd%2Bx%2Fh0%2BBjz7%2FzYJCvI4FHuogL0bviQsLJxCsAfVSHErahmAXPPSHfJ8hSy2aJEkTUCtxPwoPlGdED3e7Z1qosnoevUw91NwTdkom3z9IpP6L%2BDGUe6Cn2vOJaMxlfLOURCnNuaMK1JQGCWTl2M3aM%2BZSR%2Bu0cZ0F%2BBnhHvX5od7mZKkAiid323t8HjwYpPx3MJzV5sAGOqUBrwxmtlsH1kEoUVtt%2BkrAPENpDlmi8LR5W3xRG%2FFIMRC5v7rOUsMWLzpWIj1h12uWBL3f9H9aQOlEux11Sxi5f4MHMZQtZ4RiUDWxAyLvY6ZBrGUDl%2Bk02OOgJF3XcCSe%2B0vmlM2E2EgwwUJ1YS982%2F7SynTCZjsMK7J%2BO9V0TLaXbV5%2Bybgd9OVZcIKcbkTTG9ANQ6xc9w%2By0SouaieDB61Rz5no&X-Amz-Signature=6802957c9ba76ae4f938c4c1c8055b1c51e2922be24793027c37be8ce4cb881f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
