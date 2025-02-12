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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3COU4P%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlD0g1WC1NaUh9xV2i7GB5YCLd7Pcod5xVjVP8MEMvbAiEA8Li35zc1dpjm8npAsfirpcJ9YmmbwIIWKTiTvBzLHcsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFK%2BrIfVD6PvKdHrSrcA3ZWElRScBjHH8XTNGc6IFRnqIdjOd9hcTc6azmE1COFvwL2H6BoRNNpN%2BKUAsDnDIjJv38bfCYzAU2xsJPbsMmGy5M78Q8hBt3GAaZhlh1%2FcINg%2Fg%2BVBe9LRqtKMkmWC3akL0v%2B76tEiIbfZNuePNInQ55T4BSBlFN5JoxDEkuRE6Hlr6cjG646RZl61DkWkoTTr68T9OLP9u7ZeXOaQvnk%2FgplBZlH4YxvyLubEoE8edt1rKjNUjXG4hHL8bK5QzR8cSbTzbZ4gVB%2B%2FRKTHJV7mpU13bNoW21pYirTXOwfRd0hsYNG0qp6BlfvOBP5hSTjhBpx1%2BUloomel14eNdPpXu9jPWzG4EYKWomxGXbzwyg9bkoGwy9FiDw%2F09LsZ9IAVZM03RxH5RvCmnEZYz06wLhI8JkvZXLHUlbymtfHlX0r6XKBKjxzJJhgp%2F7Qx0c3Jn8PaNrn%2FH6ON5bSOT4m3v0EKhe3znlTGya8yy3NHa%2Fmkdc8YJ3kx1vPHVeG1XHbZSGw49Rob%2BQh06W1I%2BiZBZCcwuEDGXzM1b2JUIVp6XoFLr81AML%2Bm%2B6h9k0IdRitrUYULueNmz0ZNS9gR%2F0m2OXyiu7ngxTkyarR397wTIZko5iqXwVGzxmKMPmPsb0GOqUBZAVpBdDz5OuNpcMviJ%2B60tPAJkBOPifc%2BOUzMG1d0kmbWtQEWNoZzLXk3DNkqpagcGf%2BbQubhks3qT0MSbyQBZMpu6JVCrsSyJol8SyjsINQodFKJVm2taUCvVorfNJi0RBk2BpyNakQQUm4PNofMlnfKXTBfSUv55dl9M1fShazYGqSZzB7eHxM9DgKMuZ5jAjviE7n5%2F9rfVWN7%2BrSY%2Fe5IN9t&X-Amz-Signature=280846f698c467f8c806d0aea2ada9c25452185d73ded82f0040b6d520e533f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y3COU4P%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlD0g1WC1NaUh9xV2i7GB5YCLd7Pcod5xVjVP8MEMvbAiEA8Li35zc1dpjm8npAsfirpcJ9YmmbwIIWKTiTvBzLHcsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFK%2BrIfVD6PvKdHrSrcA3ZWElRScBjHH8XTNGc6IFRnqIdjOd9hcTc6azmE1COFvwL2H6BoRNNpN%2BKUAsDnDIjJv38bfCYzAU2xsJPbsMmGy5M78Q8hBt3GAaZhlh1%2FcINg%2Fg%2BVBe9LRqtKMkmWC3akL0v%2B76tEiIbfZNuePNInQ55T4BSBlFN5JoxDEkuRE6Hlr6cjG646RZl61DkWkoTTr68T9OLP9u7ZeXOaQvnk%2FgplBZlH4YxvyLubEoE8edt1rKjNUjXG4hHL8bK5QzR8cSbTzbZ4gVB%2B%2FRKTHJV7mpU13bNoW21pYirTXOwfRd0hsYNG0qp6BlfvOBP5hSTjhBpx1%2BUloomel14eNdPpXu9jPWzG4EYKWomxGXbzwyg9bkoGwy9FiDw%2F09LsZ9IAVZM03RxH5RvCmnEZYz06wLhI8JkvZXLHUlbymtfHlX0r6XKBKjxzJJhgp%2F7Qx0c3Jn8PaNrn%2FH6ON5bSOT4m3v0EKhe3znlTGya8yy3NHa%2Fmkdc8YJ3kx1vPHVeG1XHbZSGw49Rob%2BQh06W1I%2BiZBZCcwuEDGXzM1b2JUIVp6XoFLr81AML%2Bm%2B6h9k0IdRitrUYULueNmz0ZNS9gR%2F0m2OXyiu7ngxTkyarR397wTIZko5iqXwVGzxmKMPmPsb0GOqUBZAVpBdDz5OuNpcMviJ%2B60tPAJkBOPifc%2BOUzMG1d0kmbWtQEWNoZzLXk3DNkqpagcGf%2BbQubhks3qT0MSbyQBZMpu6JVCrsSyJol8SyjsINQodFKJVm2taUCvVorfNJi0RBk2BpyNakQQUm4PNofMlnfKXTBfSUv55dl9M1fShazYGqSZzB7eHxM9DgKMuZ5jAjviE7n5%2F9rfVWN7%2BrSY%2Fe5IN9t&X-Amz-Signature=8f1b21c51ecda9c5c2e902ef422ee70ca14af2baaaec2c997eb42f4cfd7271c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
