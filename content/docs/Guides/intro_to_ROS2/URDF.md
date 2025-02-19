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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXBXIUC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIE4NLndr3YVCkrXiD9Y6pFmWx6lURPJ9JE3Qb2rEnNM7AiEA76GrNbUnjjlLYMXj30YMyZUyW%2F3Ol8kHkIVGN5Nu4VkqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFstYzNKanXQdH6ZbircA1%2BC0wqB1%2BoHt%2FWMi%2B7AEJ2v6T5fwJUSnBFyWaqnB%2FvL6tN0S%2BAjuQg4ZXpIKz2ZDYlBu7zBTXHky6ngPot%2FGedS5rsoC23TmNgzBIUe7%2FZMuGYfKfDd0HsDA3Yn2cbjby%2F5iuyFseCTn5xaqEnCHANVvE8aLhqzWriculwKktQE9k6yBuA7JsYVmYJ15j%2FtWwvzyfzlI0vfl7N0fxDstyEGohHIZVFtmHMKW39UX4Nu3RuBT%2BoeGzb2%2FC%2F%2FsYCOYSA40Hz%2FCMYCSjQ45YT8CKalFGRkaQUKw%2BcMVkwJPFwQ9YxZ4Hor%2Bm5A6ZZ%2B8kBGn0w%2B3kNIug5b4tCXP48%2FKufbxUjDi%2FEx9pbTanoY%2BUMkJKJoQAJlqmpkJhV754ImRQ%2Buwbj2DgVmXV6V8n3Txjc0Kf164TpGO5oEcwTSxs9In8vNq%2FLNlLN0UPJKVWxuPw2bUvFADlB%2FuW1dZ0HL5mNXGlHyJwzEstW5xprUSvO6Xh3oB5UW7HOBRkX8C0gmwpNGANvIkLinP1rtL2tpXw%2FhkGnTeWLkK4SjW%2FddHw0UUWoEsgNBk%2F8siu%2BhMay9KU57t2qJHZcKt9anhXcgn3kvtdk%2FcTEAmbCdhFgUBb4EcqvAnFQdutZ9ZwbTMK7i1b0GOqUBnouaZyLtl%2BkjQAOAH9HEdZxlz2liLyhYQ28YwIYK5nCAssQqvcdrkTPsC6gPbqu%2B%2FVLy44JmOtWFYX8RAy2bJCSLf9Z2OXnLiJtLieCxdmac0AgbVGI2iW7Vhr7XeUo92UAm1eKq%2BvZ25Lx5RX%2BtOIcWLrD1n69cJPHThZn%2FcuDZdWIuu7PcGIvjTb5A2eVGxgM7%2FIAsriuxUaaPOXpEERsHeNW8&X-Amz-Signature=f95f9ca3d200078d648738d6cc31bfa6d5ff98ad7e875ee9cbbef37994ab6277&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXBXIUC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIE4NLndr3YVCkrXiD9Y6pFmWx6lURPJ9JE3Qb2rEnNM7AiEA76GrNbUnjjlLYMXj30YMyZUyW%2F3Ol8kHkIVGN5Nu4VkqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFstYzNKanXQdH6ZbircA1%2BC0wqB1%2BoHt%2FWMi%2B7AEJ2v6T5fwJUSnBFyWaqnB%2FvL6tN0S%2BAjuQg4ZXpIKz2ZDYlBu7zBTXHky6ngPot%2FGedS5rsoC23TmNgzBIUe7%2FZMuGYfKfDd0HsDA3Yn2cbjby%2F5iuyFseCTn5xaqEnCHANVvE8aLhqzWriculwKktQE9k6yBuA7JsYVmYJ15j%2FtWwvzyfzlI0vfl7N0fxDstyEGohHIZVFtmHMKW39UX4Nu3RuBT%2BoeGzb2%2FC%2F%2FsYCOYSA40Hz%2FCMYCSjQ45YT8CKalFGRkaQUKw%2BcMVkwJPFwQ9YxZ4Hor%2Bm5A6ZZ%2B8kBGn0w%2B3kNIug5b4tCXP48%2FKufbxUjDi%2FEx9pbTanoY%2BUMkJKJoQAJlqmpkJhV754ImRQ%2Buwbj2DgVmXV6V8n3Txjc0Kf164TpGO5oEcwTSxs9In8vNq%2FLNlLN0UPJKVWxuPw2bUvFADlB%2FuW1dZ0HL5mNXGlHyJwzEstW5xprUSvO6Xh3oB5UW7HOBRkX8C0gmwpNGANvIkLinP1rtL2tpXw%2FhkGnTeWLkK4SjW%2FddHw0UUWoEsgNBk%2F8siu%2BhMay9KU57t2qJHZcKt9anhXcgn3kvtdk%2FcTEAmbCdhFgUBb4EcqvAnFQdutZ9ZwbTMK7i1b0GOqUBnouaZyLtl%2BkjQAOAH9HEdZxlz2liLyhYQ28YwIYK5nCAssQqvcdrkTPsC6gPbqu%2B%2FVLy44JmOtWFYX8RAy2bJCSLf9Z2OXnLiJtLieCxdmac0AgbVGI2iW7Vhr7XeUo92UAm1eKq%2BvZ25Lx5RX%2BtOIcWLrD1n69cJPHThZn%2FcuDZdWIuu7PcGIvjTb5A2eVGxgM7%2FIAsriuxUaaPOXpEERsHeNW8&X-Amz-Signature=4e3e6f87772210202f9e1a3ee654527206d19c831acfe407a1d20dbe44866f93&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
