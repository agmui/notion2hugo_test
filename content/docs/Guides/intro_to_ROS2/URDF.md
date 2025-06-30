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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVEFN2G%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzIKO9uuD9ljWDklfcl04BKDyliT6n6ZSxVJR%2F%2B5mbwAiEA8UBkPmeaN3qzIjNDSICOs9ZpRlv4zmJrGzbPV9fX28kqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpJhLDDnJHVsWwB0SrcA4XxlmBxymvAEfYLPiaB%2BoikxcjBflizPTpdHq7nmGeUroqoZdXJbmWa%2F5N1nFd3atv4vxnXWqaA8%2BhfqNM6fYCyWmjXfLkD3RYX%2Bv6A8N0ivaIamDT9vZYKziQKWgnV1J42tNBLFMoNlX%2BBLhgemcO3k%2BOyqmQTEg4kqQlrdr409bK%2F7POhX5y71qmyXXwpYNXOkFApl3j%2FeQIgUTGNRpTbf3Px8BJitVEz%2Fxk5QG2XzZl7GjfLOIIb91ARlMJXLD50i4FK807cO6aPtqGz8VrFSfH1nancOjtwdVuYIa7%2FNcSJeA90rJpeq53fWwR8I0%2B9VruROpojdJmh9OV3A8jNpNmhKxjHOFEnIJEeLxJXlQhLW1FwpUqBKg02mwjZXdeqlc%2BhUDtA1UEuMQT0Dr96bRL7efIs2vixZluh%2FH%2FKdZ%2Fkq34I7qnZGwzDMTU7L4tOYJEUTukIwLht8GgBm8k8vkMqvWYH%2Fl%2BwFYAQmt3Ej%2F5b8IAkNw%2Fl3QawXDLhEJ3p7lB6wsu4q8D%2FxPkqPSU%2FGPvkC29JcaAsHrMJC26ifXfr7IuztmmOj3l9jILkjttopdGqjTC%2Fm%2BPn52Md8xr9YLcKTjeD8brT5KXukQ8d7UsI%2FI1w1ufn%2FVSZMO3Ni8MGOqUBg2qrnujmaJsNhW8gIKscJ4JB33NMFIwQTVu2rWzr4P2Si5plLC4nCfjcJdlQXKl9Zb%2BfNhi0G0M1polhzem6D0M0o%2FionSqSgQIzcA7dRHYBxQ22TQlVSWnyrGwQ00q%2FuL%2FBFghGB6fUwgpCZwlXoZbVJus6%2BGPdLmYnnbKYjfLU9XzR97RmzValNj1XO6HzVs8nVrVNZ9ftwNDG22W%2Fk75ui9w9&X-Amz-Signature=cdd5c64b70f1611b9f46e6a68c3cd205834a6aea72aa34726e624f1b2532ef8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVEFN2G%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzIKO9uuD9ljWDklfcl04BKDyliT6n6ZSxVJR%2F%2B5mbwAiEA8UBkPmeaN3qzIjNDSICOs9ZpRlv4zmJrGzbPV9fX28kqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpJhLDDnJHVsWwB0SrcA4XxlmBxymvAEfYLPiaB%2BoikxcjBflizPTpdHq7nmGeUroqoZdXJbmWa%2F5N1nFd3atv4vxnXWqaA8%2BhfqNM6fYCyWmjXfLkD3RYX%2Bv6A8N0ivaIamDT9vZYKziQKWgnV1J42tNBLFMoNlX%2BBLhgemcO3k%2BOyqmQTEg4kqQlrdr409bK%2F7POhX5y71qmyXXwpYNXOkFApl3j%2FeQIgUTGNRpTbf3Px8BJitVEz%2Fxk5QG2XzZl7GjfLOIIb91ARlMJXLD50i4FK807cO6aPtqGz8VrFSfH1nancOjtwdVuYIa7%2FNcSJeA90rJpeq53fWwR8I0%2B9VruROpojdJmh9OV3A8jNpNmhKxjHOFEnIJEeLxJXlQhLW1FwpUqBKg02mwjZXdeqlc%2BhUDtA1UEuMQT0Dr96bRL7efIs2vixZluh%2FH%2FKdZ%2Fkq34I7qnZGwzDMTU7L4tOYJEUTukIwLht8GgBm8k8vkMqvWYH%2Fl%2BwFYAQmt3Ej%2F5b8IAkNw%2Fl3QawXDLhEJ3p7lB6wsu4q8D%2FxPkqPSU%2FGPvkC29JcaAsHrMJC26ifXfr7IuztmmOj3l9jILkjttopdGqjTC%2Fm%2BPn52Md8xr9YLcKTjeD8brT5KXukQ8d7UsI%2FI1w1ufn%2FVSZMO3Ni8MGOqUBg2qrnujmaJsNhW8gIKscJ4JB33NMFIwQTVu2rWzr4P2Si5plLC4nCfjcJdlQXKl9Zb%2BfNhi0G0M1polhzem6D0M0o%2FionSqSgQIzcA7dRHYBxQ22TQlVSWnyrGwQ00q%2FuL%2FBFghGB6fUwgpCZwlXoZbVJus6%2BGPdLmYnnbKYjfLU9XzR97RmzValNj1XO6HzVs8nVrVNZ9ftwNDG22W%2Fk75ui9w9&X-Amz-Signature=770a1088a402ea88cb825e8513dbbca498a1226d82ceaca88e452ffb55f2240f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
