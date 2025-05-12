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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQERRSH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIFE295EC6nXIFEGENwQOEo93zVyV8iidmRx9O3KjwfHtAiACwXI0NixNXy39BfgRCVVaKwePnBOMB1tYdIo5m85qDCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt1NvC%2FTMtuUgQVrgKtwD0nZufpaJVhhAvyF1355OIHzK37J21QMqKe7gY7tYYRSYt7Hjg11RcKrjMUl0xGb3CSd8Nt3G9%2BTgsebu3%2Bhjmu1Indo0jBIIpW8JpU7BG9PCjAKL7eD3USeLFEQMKYHXtvkgRW%2FhqSjWe1wjQWCZsYB5LbHGToBqZwSN9LpjCsotyhKmH1IwRQqzcC36QGe%2FCazvrlxM%2BBlDeoeQ2bru9IFHcK2zP2gLhIJEOYiIQBviR%2BDOaA05sqpzfEOEIQrcmv6bHwnj6DSMS%2B%2FNH7piPlXhf%2FZ5Ru9s%2Ff4Wo6wN4JBZt9SNtEFcBPYCe3NHGU56it3ZYuKTOi8JI3Wrcb4gGIp%2B8b6IJ796%2FhSSGZdAvrWGnLEjD66xjLuhxJjuRyQDDuBRbitS7sLJce0zu73idPhvzyJaM2c9db08mCt9RFJe4fe8DHcDDpmVkFpSBYVAhooHibkJMj%2B6h67fHYYurfteVMRr4%2BJz%2FTlV%2BKuqC45Ua9CYS00U2Rm2HFZ%2FbL8h2WtIOCl3J8ediugfT42vhVNk7SAJnTBNhUIzPba39OctY7PaP3huzT9TXuHpYbSl%2BnM937VAidEDcY8RdawUqbkxzcY8jMF3HQaMCM8KTWFoaFh5sEyYSLE8Wkgw3u6GwQY6pgGcb6v1TzzPHCVhmvGHSZla4aVV3AkttezRNI%2BjvC5EhUmXG64Vp8n0Hx6n3QWrFJFHhS5NjQ9sYwv2vz01%2B4JG2PYW7l3H3woF%2F%2BCQoznGAt3omJ%2FtYh68t1QhJy2AfXH%2B46uaw%2FM%2BzVaizaEkVtyrkm72McuGZXm6SE%2BCCNO1ugj3CejTkDKPHt2QKpr9HvLlBdJWfP9LIbwzl%2FfqOHMEyLebB7Lh&X-Amz-Signature=577760a3c052f0a225da2ff15483f1e48ab86bcb8548ccb906eca6894266a039&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQERRSH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIFE295EC6nXIFEGENwQOEo93zVyV8iidmRx9O3KjwfHtAiACwXI0NixNXy39BfgRCVVaKwePnBOMB1tYdIo5m85qDCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt1NvC%2FTMtuUgQVrgKtwD0nZufpaJVhhAvyF1355OIHzK37J21QMqKe7gY7tYYRSYt7Hjg11RcKrjMUl0xGb3CSd8Nt3G9%2BTgsebu3%2Bhjmu1Indo0jBIIpW8JpU7BG9PCjAKL7eD3USeLFEQMKYHXtvkgRW%2FhqSjWe1wjQWCZsYB5LbHGToBqZwSN9LpjCsotyhKmH1IwRQqzcC36QGe%2FCazvrlxM%2BBlDeoeQ2bru9IFHcK2zP2gLhIJEOYiIQBviR%2BDOaA05sqpzfEOEIQrcmv6bHwnj6DSMS%2B%2FNH7piPlXhf%2FZ5Ru9s%2Ff4Wo6wN4JBZt9SNtEFcBPYCe3NHGU56it3ZYuKTOi8JI3Wrcb4gGIp%2B8b6IJ796%2FhSSGZdAvrWGnLEjD66xjLuhxJjuRyQDDuBRbitS7sLJce0zu73idPhvzyJaM2c9db08mCt9RFJe4fe8DHcDDpmVkFpSBYVAhooHibkJMj%2B6h67fHYYurfteVMRr4%2BJz%2FTlV%2BKuqC45Ua9CYS00U2Rm2HFZ%2FbL8h2WtIOCl3J8ediugfT42vhVNk7SAJnTBNhUIzPba39OctY7PaP3huzT9TXuHpYbSl%2BnM937VAidEDcY8RdawUqbkxzcY8jMF3HQaMCM8KTWFoaFh5sEyYSLE8Wkgw3u6GwQY6pgGcb6v1TzzPHCVhmvGHSZla4aVV3AkttezRNI%2BjvC5EhUmXG64Vp8n0Hx6n3QWrFJFHhS5NjQ9sYwv2vz01%2B4JG2PYW7l3H3woF%2F%2BCQoznGAt3omJ%2FtYh68t1QhJy2AfXH%2B46uaw%2FM%2BzVaizaEkVtyrkm72McuGZXm6SE%2BCCNO1ugj3CejTkDKPHt2QKpr9HvLlBdJWfP9LIbwzl%2FfqOHMEyLebB7Lh&X-Amz-Signature=7cff7b07dd808c4635da701b0485dc15cda969c0d42b2b770fa09ca1f98e8703&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
