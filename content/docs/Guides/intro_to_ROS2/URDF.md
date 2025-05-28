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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCWXRXO%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG35Nx936Ri%2Bkmh9rHOVkyLB5810JOSFhnyCMk0uWw2SAiAXIwzrpd8SJ8GokonxqjvIdNrXOS%2BCykWipfOfCBqOZyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMpJFJvpjf2g1bsP1eKtwDakE5IQWsG8eGB%2FNqEQtErcv64s871%2F%2BM3%2BrCbTSwe8C%2FCd3VH0xjUxnDGL5NOoIhmeTzj5gaVvRN3Sh2iqYZWuDL%2BrnKpYJSZq025AOFiB9rJQCVvTOw2Vw8oCdnl6YH5FvXuoo9tV3QHTEGHnmwUMarenlLtsTpVPc4boxksNoKH9OETTIuTq42J%2BG9rrHYE%2FhvX68J3FHpq3Sm5GM0%2FSqiMamDPwyxAt1KAv5IbZiA8RjGYGs%2BH5n1g9S64l19aFUlTyQ76unHoESHXDmyiebbu9ugdlOJieL1N85y7QkrtDSCugTqt0HCAKOy%2B4OlNo7zm2XQti77dgX3CvFf1B7C28P%2BY6kRMS09ZfBay1gMiis3dxWDXKF2SWnE5dhb5oytkB7J3E9L7N%2BdHHKiDZnmj28xglCahHt%2BVeoz4CraxcMCyULqgGRE9DOzzUSy8QnGP4b%2FlWm%2FkBbZM7OKbrGSfvKISJYseCbGHmJIYFnFY%2FBVDw79QLfYI1k%2BTIlRFOmVACJtZ%2F7f5QvgqAK0iG0Bhqyg9m3MGjsLObqU8APNOBIWwHN%2Bp6uxeMoKwLKO4gykcP2EaKkC3ThktetFLoJ64TgwbrLQ%2FgYGLpgVZppFGbnOramTIIgxoCowtfXawQY6pgHmPEyU08ggyLcBJbQy5QLLY%2FQLgH0qCXmQCS6UWBr6nDR8fy4Moc508vqvTPOP%2BnYGgZmtMi%2FQADSVd6ESedo1ICFc6ihIwZv5VVo%2BPOmQYGNGZaCLm0908wp7Qj8SJRZW6EG8oAKI3iNDZq4PNpCmbBv4FAfhbfCqGgduesyYDW0AJ8idhpRlekBtJgIWzVwCkskaz8prK%2FAUlnqcLojg3nUm89f2&X-Amz-Signature=44ff52b02d33f89ef5ab9fa8063ccce8d8618998adc8baebc989f4066779e1cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJCWXRXO%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG35Nx936Ri%2Bkmh9rHOVkyLB5810JOSFhnyCMk0uWw2SAiAXIwzrpd8SJ8GokonxqjvIdNrXOS%2BCykWipfOfCBqOZyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMpJFJvpjf2g1bsP1eKtwDakE5IQWsG8eGB%2FNqEQtErcv64s871%2F%2BM3%2BrCbTSwe8C%2FCd3VH0xjUxnDGL5NOoIhmeTzj5gaVvRN3Sh2iqYZWuDL%2BrnKpYJSZq025AOFiB9rJQCVvTOw2Vw8oCdnl6YH5FvXuoo9tV3QHTEGHnmwUMarenlLtsTpVPc4boxksNoKH9OETTIuTq42J%2BG9rrHYE%2FhvX68J3FHpq3Sm5GM0%2FSqiMamDPwyxAt1KAv5IbZiA8RjGYGs%2BH5n1g9S64l19aFUlTyQ76unHoESHXDmyiebbu9ugdlOJieL1N85y7QkrtDSCugTqt0HCAKOy%2B4OlNo7zm2XQti77dgX3CvFf1B7C28P%2BY6kRMS09ZfBay1gMiis3dxWDXKF2SWnE5dhb5oytkB7J3E9L7N%2BdHHKiDZnmj28xglCahHt%2BVeoz4CraxcMCyULqgGRE9DOzzUSy8QnGP4b%2FlWm%2FkBbZM7OKbrGSfvKISJYseCbGHmJIYFnFY%2FBVDw79QLfYI1k%2BTIlRFOmVACJtZ%2F7f5QvgqAK0iG0Bhqyg9m3MGjsLObqU8APNOBIWwHN%2Bp6uxeMoKwLKO4gykcP2EaKkC3ThktetFLoJ64TgwbrLQ%2FgYGLpgVZppFGbnOramTIIgxoCowtfXawQY6pgHmPEyU08ggyLcBJbQy5QLLY%2FQLgH0qCXmQCS6UWBr6nDR8fy4Moc508vqvTPOP%2BnYGgZmtMi%2FQADSVd6ESedo1ICFc6ihIwZv5VVo%2BPOmQYGNGZaCLm0908wp7Qj8SJRZW6EG8oAKI3iNDZq4PNpCmbBv4FAfhbfCqGgduesyYDW0AJ8idhpRlekBtJgIWzVwCkskaz8prK%2FAUlnqcLojg3nUm89f2&X-Amz-Signature=6f9b033f8fa5380fcd0da58316033e99745a3cc45ac60b2c6734fcc2d46aa362&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
