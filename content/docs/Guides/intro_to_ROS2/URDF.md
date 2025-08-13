---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I4P5KC2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFboCeH5n5IV93O55M6qjGt3UjVnwLv7Ne8mU9kYkfJSAiAj0K0h5hqNibQH4Iw9XZP3a%2FBsBSzo%2FpQxExuqlLdcASr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMK4uhJBrlTUixRW7LKtwD0xpt%2B6quVlrvfd7BNn%2Bil4MKXCnTNGZ4r7tVDVeNIG2Yc2zKw1Fu41w7EDLX%2Bzwmp1vctwOHzCW1kHcgva0pcP2e%2FUdLHYLp8vUIXbNCl99m35Q7%2BBPELZHk%2FZz%2BoThPHSQ3L4U0vSDT%2FimMNvgqAEw0SkJgaKFRhLmFflWn5Ei2R6MrQehh%2B8tnuNfAn6BR1GeYMgZZ%2FEwH43OCcR9Uzw62IvkdOQCC%2BmOexyMtgS7cOjdK91W36%2BPDekyqtWzfQ2333oRDFLR9tQzrO9qC5KK3rrGOntvx1awGFF4hofWbWIJz91j990%2B2IdBBDSytmvigoRGvNvfxBsfkGlKtX%2FCsKl8irrY7uygXqCo7D%2F2nt%2BEyq5UUd8Lc%2BEVm%2FkJfKo%2F3INHeGt8qKFz7%2BSyQcZgrRmHvQzi7xvlJmkdbe%2Fdd76NHUYrnkgj1qx5Jjo%2BvzCxD9EMuvhw87L4IxJ%2B2aCz68%2FxB55FKXOCQVaa4gniXLs52MHQC%2FHbtF5hKK78Z8ZhnqcExQvYus0LVfv8DRJzyPMM0j6pQ4NG2JZdXRBnQlUOehcT8%2FUPZBx8p3C%2FuqofL47A%2BeFQsaLdIt6y2cXzLwtEiphcwn%2BijL%2Bg30N4%2B9UBQWoy2EH0vE8UwxfzyxAY6pgE8p3hS9yIU08kPT%2FG5bjrugciTspHrnxaka46fm1yagUCMLnw36lf2%2FD31womDJcIcMZzowycq1mLXZ%2FgcyQxJ%2FlSN3CQx5PVIt2wz6cBlaITYXJurf0ovsCTHlXg8LGK8X2IGT4pPYAzumEFkP7V1PFeCFnWCmdX6Fzm%2By%2BMcr4iDENubpAu6Jw8QIDQEkU6Dw3RkWq%2BoMhTwigynzOiODHoEqr8I&X-Amz-Signature=03d0af6ca84d6742f4c463c87956b9d3357d184a38a9e82ced67adb8357d8495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I4P5KC2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFboCeH5n5IV93O55M6qjGt3UjVnwLv7Ne8mU9kYkfJSAiAj0K0h5hqNibQH4Iw9XZP3a%2FBsBSzo%2FpQxExuqlLdcASr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMK4uhJBrlTUixRW7LKtwD0xpt%2B6quVlrvfd7BNn%2Bil4MKXCnTNGZ4r7tVDVeNIG2Yc2zKw1Fu41w7EDLX%2Bzwmp1vctwOHzCW1kHcgva0pcP2e%2FUdLHYLp8vUIXbNCl99m35Q7%2BBPELZHk%2FZz%2BoThPHSQ3L4U0vSDT%2FimMNvgqAEw0SkJgaKFRhLmFflWn5Ei2R6MrQehh%2B8tnuNfAn6BR1GeYMgZZ%2FEwH43OCcR9Uzw62IvkdOQCC%2BmOexyMtgS7cOjdK91W36%2BPDekyqtWzfQ2333oRDFLR9tQzrO9qC5KK3rrGOntvx1awGFF4hofWbWIJz91j990%2B2IdBBDSytmvigoRGvNvfxBsfkGlKtX%2FCsKl8irrY7uygXqCo7D%2F2nt%2BEyq5UUd8Lc%2BEVm%2FkJfKo%2F3INHeGt8qKFz7%2BSyQcZgrRmHvQzi7xvlJmkdbe%2Fdd76NHUYrnkgj1qx5Jjo%2BvzCxD9EMuvhw87L4IxJ%2B2aCz68%2FxB55FKXOCQVaa4gniXLs52MHQC%2FHbtF5hKK78Z8ZhnqcExQvYus0LVfv8DRJzyPMM0j6pQ4NG2JZdXRBnQlUOehcT8%2FUPZBx8p3C%2FuqofL47A%2BeFQsaLdIt6y2cXzLwtEiphcwn%2BijL%2Bg30N4%2B9UBQWoy2EH0vE8UwxfzyxAY6pgE8p3hS9yIU08kPT%2FG5bjrugciTspHrnxaka46fm1yagUCMLnw36lf2%2FD31womDJcIcMZzowycq1mLXZ%2FgcyQxJ%2FlSN3CQx5PVIt2wz6cBlaITYXJurf0ovsCTHlXg8LGK8X2IGT4pPYAzumEFkP7V1PFeCFnWCmdX6Fzm%2By%2BMcr4iDENubpAu6Jw8QIDQEkU6Dw3RkWq%2BoMhTwigynzOiODHoEqr8I&X-Amz-Signature=3382cfcde6acb7270df23e31a542395d8269a711dd9e63390ea0f23dc354c7ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
