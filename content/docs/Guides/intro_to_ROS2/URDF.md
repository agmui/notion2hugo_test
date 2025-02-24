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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T56DSMED%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk34ZxOi5MsrAZ%2FZFGtZJeMLa6W2Dtr6o9ndxGxfGM9AIhAM%2BLF6LUO%2Bdtx4YNOmatmYdeW7Tm3D%2Bpk01OyF3NRI0ZKv8DCDYQABoMNjM3NDIzMTgzODA1IgwVGq73ivvh4AWgQKkq3AO59a1ht9xRAEIRaxIIE%2BJQWgWSXgcMysyEsur1X0YZE1VMuE3Y9tLfZrDonTQ7w%2FgQvFF7eA9y2MLv8X2kgWR5UO9ysFLmi76uKy2DZpLqKk3%2Bv1gyOiy4UrUyi8NTTpdOUWcZVS%2FlCfbftwlKoU1DRdeV7rpn%2B7vn%2Bl4ge9csOcLvx75hUaDqEOELx2nh4nlih%2B%2FQ8B66G%2B5GFCw32R43TOdKBBj%2Fokp%2BPnyIZz3sqxhHV82NWrCdpFdXJhzqjGf9%2Ft2HZGRxpjgX8dLaA%2FBWg4jjGb0jVQ3HMksE7WPWpJt2UA6YxsoBlOp87KSBV%2F1Wy4%2F6H10mQJbgrdlR3hFkdKNjAT5Hzr7rlIJ7kqgFyAjyMJ9GdEvRxEzpQqxXXIuZVCSBzlQwXiixLAeaY5DAJCit8CN%2BRPxkm9ZneMhLvY62CgEgZWp9xxYz69cYtOmVHUTzeQHw%2F79lFSD1k78QETF84hfbMsaLo9jtNQPv%2BMuGPFV%2FlZtDZ74KSCGsQSRYWnO0Th1F3slOmEL4FXzHxMyc1Y85L1Et1QCERoOd%2BgeB0gES%2FJPWxRYsnPkWUOggIZCnf4stXuK8CuYjvi3MwMaWZ05lPNnGnkQtL1VC1CbUez0xa1RqsjpPTzCgu%2FO9BjqkAWagPIoykvnAxp4MpizD%2FSMMpDv%2FD1sVKhN6FPSgHZ%2BoGzd0kPNlWRCuHWBG3IvXwm5Ej3LduWP2e%2BfhZGuVhazx8tyqiKJ6v4SQTPn9JFgp%2BUjqzxDof7J5BGUTRmgCNjZK6i3hZWA%2Fkn3zDimDuAur5yzn%2Fc6OtkYZx0euhFTDL97IcEiEgiM31YrJ5XAtpsm0dWA6lDY%2BV7muhlfno%2BllDwSc&X-Amz-Signature=b10dee68241dc900d569634212ab03e97210fda6d9eb5baf05c97ac631e5386b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T56DSMED%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk34ZxOi5MsrAZ%2FZFGtZJeMLa6W2Dtr6o9ndxGxfGM9AIhAM%2BLF6LUO%2Bdtx4YNOmatmYdeW7Tm3D%2Bpk01OyF3NRI0ZKv8DCDYQABoMNjM3NDIzMTgzODA1IgwVGq73ivvh4AWgQKkq3AO59a1ht9xRAEIRaxIIE%2BJQWgWSXgcMysyEsur1X0YZE1VMuE3Y9tLfZrDonTQ7w%2FgQvFF7eA9y2MLv8X2kgWR5UO9ysFLmi76uKy2DZpLqKk3%2Bv1gyOiy4UrUyi8NTTpdOUWcZVS%2FlCfbftwlKoU1DRdeV7rpn%2B7vn%2Bl4ge9csOcLvx75hUaDqEOELx2nh4nlih%2B%2FQ8B66G%2B5GFCw32R43TOdKBBj%2Fokp%2BPnyIZz3sqxhHV82NWrCdpFdXJhzqjGf9%2Ft2HZGRxpjgX8dLaA%2FBWg4jjGb0jVQ3HMksE7WPWpJt2UA6YxsoBlOp87KSBV%2F1Wy4%2F6H10mQJbgrdlR3hFkdKNjAT5Hzr7rlIJ7kqgFyAjyMJ9GdEvRxEzpQqxXXIuZVCSBzlQwXiixLAeaY5DAJCit8CN%2BRPxkm9ZneMhLvY62CgEgZWp9xxYz69cYtOmVHUTzeQHw%2F79lFSD1k78QETF84hfbMsaLo9jtNQPv%2BMuGPFV%2FlZtDZ74KSCGsQSRYWnO0Th1F3slOmEL4FXzHxMyc1Y85L1Et1QCERoOd%2BgeB0gES%2FJPWxRYsnPkWUOggIZCnf4stXuK8CuYjvi3MwMaWZ05lPNnGnkQtL1VC1CbUez0xa1RqsjpPTzCgu%2FO9BjqkAWagPIoykvnAxp4MpizD%2FSMMpDv%2FD1sVKhN6FPSgHZ%2BoGzd0kPNlWRCuHWBG3IvXwm5Ej3LduWP2e%2BfhZGuVhazx8tyqiKJ6v4SQTPn9JFgp%2BUjqzxDof7J5BGUTRmgCNjZK6i3hZWA%2Fkn3zDimDuAur5yzn%2Fc6OtkYZx0euhFTDL97IcEiEgiM31YrJ5XAtpsm0dWA6lDY%2BV7muhlfno%2BllDwSc&X-Amz-Signature=95296de400a207562d219910b7ba658dc774c8751ae30d0e2120f3c6e45c0f09&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
