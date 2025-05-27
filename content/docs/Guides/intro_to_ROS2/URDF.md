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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDMDFPXN%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkQP4ppmTXo5Nel5mfqfc3RGgcjKdVE8rjaFRRcvuCRAiEAh089r%2BV6aMZJq21vXesyKbMgIEWpYPQM1oHag5dK5X0q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDB%2F4y2ea%2Fx64gubWbCrcA%2BxhySF4XQZetzzWGNnz0o8Et6bfQn%2FzZbBbhceW5RIci8RJa9oxZhWmjjgs0vGBQ3pjNw04GqDj0JrsgpscMpxnC31tVDHpRtXxgHN0ZUQ6B0ux3jGhXXfMEueY7WroChMIjDa3LrT4BhZgbmf%2FhY8HHx4RsvPU9uVxwMMSpZfNfaW%2BNXiVo%2FgEnnbdVK5igo4HKz6VYxMlDHXGNL3OO%2BP0V%2Bh55JbfVPL95Hby2jAYKrA22yAPw7d2DCgTNoo1kLVlWc1bW5AQEOQSpjie%2BHh6xPVf6DpSuTl4xrzTkHCjO3XuwlXLOjmwYYoiNvQ061Zb0Yy8l9hGtZZ62HjVBVUk77ivwVUYVtBZiE2u%2Br5LPV%2FXXjlgOfNN4aPeuoq%2B1LjFyPi0O9fzy%2BZjLEYC8Uur2ay6Boc4o5CEessE6OoG%2B6iDYPlqOItQ%2FWZ6UgOQdo5CZ36IjimNd6yi2ILGyu6CLbXOck%2FibntJ1a%2FhLfp6yuHg114pnBf6rcVv5kKy1U6eNErO3vqbQLyym5TIduZZGpSkULS1adC%2FWPLC2k7XWs2AAfvL1oR2Y2%2FLZbe%2BhNl4LBf1SX2KA6w5w9sduzFw%2B2T4c9vCTjDLGqicE90lNp%2BncF1cnrE08Xm2MJyr1sEGOqUB4Lzt9k5epFXoPkLQebEfR9Zb1Di9yaSZzwrad2uGFjm4p%2BdgCqspjJo7OBurgTtYG7gY4ulAHq7%2FROYonkEbetFUg3REdsg9cgFP9PjWvrwyGhgYCNQhNJpdhUJz9uhfFzymSPYrp6NUrEiH5o1Rp%2F9EACjUatIGwVVuoFCSAt7b3y5czPD4t1dbQ9%2BMe0G946H8rw8cPVkiN6zldFZgSB4XE1TB&X-Amz-Signature=0705bb5f4b18741bf1854b295995fc7eca4899b3e5d97456f4eca36632747516&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDMDFPXN%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkQP4ppmTXo5Nel5mfqfc3RGgcjKdVE8rjaFRRcvuCRAiEAh089r%2BV6aMZJq21vXesyKbMgIEWpYPQM1oHag5dK5X0q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDB%2F4y2ea%2Fx64gubWbCrcA%2BxhySF4XQZetzzWGNnz0o8Et6bfQn%2FzZbBbhceW5RIci8RJa9oxZhWmjjgs0vGBQ3pjNw04GqDj0JrsgpscMpxnC31tVDHpRtXxgHN0ZUQ6B0ux3jGhXXfMEueY7WroChMIjDa3LrT4BhZgbmf%2FhY8HHx4RsvPU9uVxwMMSpZfNfaW%2BNXiVo%2FgEnnbdVK5igo4HKz6VYxMlDHXGNL3OO%2BP0V%2Bh55JbfVPL95Hby2jAYKrA22yAPw7d2DCgTNoo1kLVlWc1bW5AQEOQSpjie%2BHh6xPVf6DpSuTl4xrzTkHCjO3XuwlXLOjmwYYoiNvQ061Zb0Yy8l9hGtZZ62HjVBVUk77ivwVUYVtBZiE2u%2Br5LPV%2FXXjlgOfNN4aPeuoq%2B1LjFyPi0O9fzy%2BZjLEYC8Uur2ay6Boc4o5CEessE6OoG%2B6iDYPlqOItQ%2FWZ6UgOQdo5CZ36IjimNd6yi2ILGyu6CLbXOck%2FibntJ1a%2FhLfp6yuHg114pnBf6rcVv5kKy1U6eNErO3vqbQLyym5TIduZZGpSkULS1adC%2FWPLC2k7XWs2AAfvL1oR2Y2%2FLZbe%2BhNl4LBf1SX2KA6w5w9sduzFw%2B2T4c9vCTjDLGqicE90lNp%2BncF1cnrE08Xm2MJyr1sEGOqUB4Lzt9k5epFXoPkLQebEfR9Zb1Di9yaSZzwrad2uGFjm4p%2BdgCqspjJo7OBurgTtYG7gY4ulAHq7%2FROYonkEbetFUg3REdsg9cgFP9PjWvrwyGhgYCNQhNJpdhUJz9uhfFzymSPYrp6NUrEiH5o1Rp%2F9EACjUatIGwVVuoFCSAt7b3y5czPD4t1dbQ9%2BMe0G946H8rw8cPVkiN6zldFZgSB4XE1TB&X-Amz-Signature=5d5171983f2643b60787db6977d5aa418ca0f351954d8f26828b3f49a663bd0f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
