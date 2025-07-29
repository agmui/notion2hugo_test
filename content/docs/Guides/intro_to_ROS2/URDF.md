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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECO25PM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FXZqiLVdlCkS7pRulEJbmVv6oImX99qBITNWYzZc0hAiA2z3y8Ns9IM31Sa%2BJOQjMrzRARgLTSAYDL4zgsKKeWtiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcjdRL4ltPfPAhXHAKtwDlnScmIFTapsdRgo%2BZkLxqU98hK7r7SJRB%2BpYnRzHym4%2B%2B1uEuW4yTwOodwytD7JpjroHUR%2FhWO6glXs1s3RbRIkgTHRc8m5BCepI956a7dL4G%2BUT%2FqMNwdwjNMHJ1zQ%2B2XJikxLIzGcr5HvGpNuRJuOAyuDvhMRRDyzZuK8t0BD%2F2SaIzlPoMVnZfqXcv8yD6LoXLIq%2FHJ29%2BokltVEnWumN1miqZQ%2BDL860rxkwoA9Zbt0oKEm6H6WvvpL3lLrXyIJY%2FNCygmiXe4kDwuv4XkuLo%2BReXxfJB%2BzEpu9puJiAqCu63p%2BE0AvBq7dwUYbaG5hhOyDkzieLstRjnILVNozooPKKl1PmxNpGfgQeAb8OnnStR%2BdZ6o2MrfHgJOISWeRnHZPGWjKJLYYjEccN8GN4k1jdMtv%2F9VupDmMXVXFzXTVM%2BVTIQXn4%2F0ywTxtY5OZl%2Bic5XCO7ElMsSPAJUV68IIiGCXXJzqaRBR65DcBMomw%2B9SblrhrUQXyWBZMKegaBFyhsuY37qaqV6XBaHS4VZLIaMbs7Kj0%2BN%2FEuP%2B6aSsVX4NYEOV4rPWqBdWzpTwyND6yMIGwKHyx269xLb%2F8L9HY0NZL0%2F6o4rf%2B8CjidxYPDXGC%2BaI9rsjYwwa6kxAY6pgEe42pHjJufwhPMEo0GTBhhvoozEb8VxKgZvtmELgHq4OtNJzq2AaAIqOcO6L49xxV45mEK1TvQDX%2FRS%2BjzL4W9A72lcPt7mfi29g6xsyoOMixqCZc8bdOeMpXDnDBL8p6q7X3bCzSpG4e02oTz9VYOp3udU0jzxcn8oa61w9ENZi4R32%2FBS%2FeWMECsBvYJpF7wN64XSyLY2DKQ042xfNw14e111UiB&X-Amz-Signature=45374b2c2179c1615b3dcb9c6dd234a81e10672ed2e11ad8a752d2fef2d54d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECO25PM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FXZqiLVdlCkS7pRulEJbmVv6oImX99qBITNWYzZc0hAiA2z3y8Ns9IM31Sa%2BJOQjMrzRARgLTSAYDL4zgsKKeWtiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcjdRL4ltPfPAhXHAKtwDlnScmIFTapsdRgo%2BZkLxqU98hK7r7SJRB%2BpYnRzHym4%2B%2B1uEuW4yTwOodwytD7JpjroHUR%2FhWO6glXs1s3RbRIkgTHRc8m5BCepI956a7dL4G%2BUT%2FqMNwdwjNMHJ1zQ%2B2XJikxLIzGcr5HvGpNuRJuOAyuDvhMRRDyzZuK8t0BD%2F2SaIzlPoMVnZfqXcv8yD6LoXLIq%2FHJ29%2BokltVEnWumN1miqZQ%2BDL860rxkwoA9Zbt0oKEm6H6WvvpL3lLrXyIJY%2FNCygmiXe4kDwuv4XkuLo%2BReXxfJB%2BzEpu9puJiAqCu63p%2BE0AvBq7dwUYbaG5hhOyDkzieLstRjnILVNozooPKKl1PmxNpGfgQeAb8OnnStR%2BdZ6o2MrfHgJOISWeRnHZPGWjKJLYYjEccN8GN4k1jdMtv%2F9VupDmMXVXFzXTVM%2BVTIQXn4%2F0ywTxtY5OZl%2Bic5XCO7ElMsSPAJUV68IIiGCXXJzqaRBR65DcBMomw%2B9SblrhrUQXyWBZMKegaBFyhsuY37qaqV6XBaHS4VZLIaMbs7Kj0%2BN%2FEuP%2B6aSsVX4NYEOV4rPWqBdWzpTwyND6yMIGwKHyx269xLb%2F8L9HY0NZL0%2F6o4rf%2B8CjidxYPDXGC%2BaI9rsjYwwa6kxAY6pgEe42pHjJufwhPMEo0GTBhhvoozEb8VxKgZvtmELgHq4OtNJzq2AaAIqOcO6L49xxV45mEK1TvQDX%2FRS%2BjzL4W9A72lcPt7mfi29g6xsyoOMixqCZc8bdOeMpXDnDBL8p6q7X3bCzSpG4e02oTz9VYOp3udU0jzxcn8oa61w9ENZi4R32%2FBS%2FeWMECsBvYJpF7wN64XSyLY2DKQ042xfNw14e111UiB&X-Amz-Signature=00989e2a16e9b30bd44f201eea2e6552d1680932a9791ac14165529d2dbf157f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
