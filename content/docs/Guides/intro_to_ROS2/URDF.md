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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AO6NK57%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHuWL2sZDYp6BG%2FL4KUto1g%2BAI%2FcTfHsKk5ds%2Fbx7VOAiAGF56orJ8fDbJTjUvu%2BusyBEnjycYoAAtj4Ijl9Fo0hCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMllpVcW0nhVcWlTaWKtwDDKAEewxARL0e2GLZpBvnwHEwbw9wGBwMKpkK5CajhE%2BeKvQJkfrbS%2BYJYupZMiVJKK5FeuYcNmUg1fnsW7c%2Be4kIrvTGg9y3KfXJzM%2BTUF71iOpzcrOti5kGVDUo%2FkyWyCE%2BOKIvvyU8qJI5n%2BThkvku5W9z3xfK4Hr7ivZfY%2FfebnQRwGbipdLZqV%2BOb0KZYj1Ye%2FINvd8oSoN0PkBcOsMhcgn1bWKY8YbC49bJNxyUH6miAxszhSXuoDja%2B%2B%2FGOs%2B9B4lKZTwmoxZRRu3V9mx%2BwCUuDruTdIenRULVRUFFzlF3KmGCp9jcK7tbfWIAGhT9m2ciTFUzw8FaDWgeqVXJiDynp5IL%2BBwAq%2B5Udp%2FiQe26gjG4gCQqHyX6%2BDghQMvIddLN%2FMWZ05VBB0zasxNov449O4%2B8ifNjSIsD0XymPHVgl8Xgwuf1HwNVaVrpqGpzp7k7xt%2F4FdF5CzYp6Q%2FNjWsuPjB60xI8MuF76AALso%2BCxeA7vfRVlxX6pGU9nlI%2FXtYdZrcHhTnzKif4p%2F%2FBbgDefjqbzZHpi4CkyWFL9JZtEVORIxkRajeoeAmEN%2FzK%2F7wPyer3NNFJI5EGBlBgHDcZqdYIPvY9%2BKh16x%2FNoKHZ5f%2F0A0JlvyMwx4fovQY6pgHUnM6a2K5xatTLbGZFdAshgbDFAF3BbRwnoLIHYyQwepZay0Lhyp429m9tm6auiMnKzpMXBVj822sOu2j6WXlacqV11giB%2BG6Vt6BISZHQWmeXmHvFz0a4Mqdnqa19t5vJDCvXJqHDLxdYiEfsx1IncrZtpceWkde5aOkIga2LQs8FZNhHOuBK9fsWCfPvPgAZC74%2F3NVob2ZFw6YlOlx6xZ6HUs5C&X-Amz-Signature=52978d1d3f6aa711f3cac21c841300c4948d8ee171ab8a554e0ba9f766184ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AO6NK57%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHuWL2sZDYp6BG%2FL4KUto1g%2BAI%2FcTfHsKk5ds%2Fbx7VOAiAGF56orJ8fDbJTjUvu%2BusyBEnjycYoAAtj4Ijl9Fo0hCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMllpVcW0nhVcWlTaWKtwDDKAEewxARL0e2GLZpBvnwHEwbw9wGBwMKpkK5CajhE%2BeKvQJkfrbS%2BYJYupZMiVJKK5FeuYcNmUg1fnsW7c%2Be4kIrvTGg9y3KfXJzM%2BTUF71iOpzcrOti5kGVDUo%2FkyWyCE%2BOKIvvyU8qJI5n%2BThkvku5W9z3xfK4Hr7ivZfY%2FfebnQRwGbipdLZqV%2BOb0KZYj1Ye%2FINvd8oSoN0PkBcOsMhcgn1bWKY8YbC49bJNxyUH6miAxszhSXuoDja%2B%2B%2FGOs%2B9B4lKZTwmoxZRRu3V9mx%2BwCUuDruTdIenRULVRUFFzlF3KmGCp9jcK7tbfWIAGhT9m2ciTFUzw8FaDWgeqVXJiDynp5IL%2BBwAq%2B5Udp%2FiQe26gjG4gCQqHyX6%2BDghQMvIddLN%2FMWZ05VBB0zasxNov449O4%2B8ifNjSIsD0XymPHVgl8Xgwuf1HwNVaVrpqGpzp7k7xt%2F4FdF5CzYp6Q%2FNjWsuPjB60xI8MuF76AALso%2BCxeA7vfRVlxX6pGU9nlI%2FXtYdZrcHhTnzKif4p%2F%2FBbgDefjqbzZHpi4CkyWFL9JZtEVORIxkRajeoeAmEN%2FzK%2F7wPyer3NNFJI5EGBlBgHDcZqdYIPvY9%2BKh16x%2FNoKHZ5f%2F0A0JlvyMwx4fovQY6pgHUnM6a2K5xatTLbGZFdAshgbDFAF3BbRwnoLIHYyQwepZay0Lhyp429m9tm6auiMnKzpMXBVj822sOu2j6WXlacqV11giB%2BG6Vt6BISZHQWmeXmHvFz0a4Mqdnqa19t5vJDCvXJqHDLxdYiEfsx1IncrZtpceWkde5aOkIga2LQs8FZNhHOuBK9fsWCfPvPgAZC74%2F3NVob2ZFw6YlOlx6xZ6HUs5C&X-Amz-Signature=0bab71be53ef333bc97906953a7e09a2edfcd77c9fc246e6907706e9be882772&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
