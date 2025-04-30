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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVNZ4TBB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIBJpJ0E1SmANa4M8PyAqLZdAiOZLVMdcqEsHwuCRuZ2HAiABeyWHn4xEZUjve8IxiRel5ZNfHqG7FRlV0%2Br8VTmoViqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA3wmEFpfkEfOjQ50KtwDjq27sJw1An%2Bey5Mf6ywlEQ%2BY36yEX94a7Q6dPcVCFjExINHtwFgOgY4YmRZO6PR0HWPZXtpf5lQh%2BuuUF8KQnfjvgZk%2FN0r8Xor1uICvF55yyvcCCcxwWrELsgY8kzh96nida0%2Bj6MWEGXuLLwojHY4zihSSmcGkuY9TWOzriIUXW%2FaZttyDLcqQ1G6%2B%2FO623pdyszR25xWI1rxKmfD2F%2BV5UNhzPYW4fDkYVyFa0Y4snbkOv0H8f2uXwK9y63TWv8NjlH9vT7tMTB3ha5qKTKxxiSTmA%2BlGBPoIpOcQaT08Od%2FoBqs0S979t29bCOW88tcamDlACvhaz1nVZDWvRspqYNrpbjMlFiQK62rq8sqqXDVHXtzTJ7bEPzqZUwJfSssCeycfES3tBsXqsHpzoa4Ku7olvEl%2FHWCR%2F09sstWIoQOo2tyN88k3oL0alS9D3Y%2FHWbE8V9XjnsxMkDQlDWez8OESa1Ayzi8cCaeTa7lYc0JsOtyCdsltfItBL6ueI9sPdDIMUlQrQ9HGuBlrgn5s%2Fw%2F5p2I1TUku8dVD%2B7cpK%2F5BgEbtwB6Rvc4voJmwFN2Iv0Ws85db0NqevUTCU%2BOkfTRW0qaXbMOI5EAAc33BTM01ZRVIeTzzB%2BgwlsXIwAY6pgHWVhjXA1UwyED19dqaQkHS0VDbdWLkXg%2BTJpPYl3QTf0VAgjcfCP%2FOfJmPLvZ0aiNw4d%2FMkKANBJFV5x5x%2BWqyuOe4VNnkZBef65D2MTnwn5mh1KudQIiYHpBBdfjj7vKhtJP2WtvwGvdm6inC2yaRXo9Av2rWNb5Ct%2FSJ%2B%2BdWsDWdqbxB8ro26PRUSLoT28TPYJGkK1RpFGkc%2BnmHdo4zX%2Ffd4hUl&X-Amz-Signature=e3a5b04628615a46c414dbcb5a81a2faa571a78faf196de899a83f4a21b86f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVNZ4TBB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIBJpJ0E1SmANa4M8PyAqLZdAiOZLVMdcqEsHwuCRuZ2HAiABeyWHn4xEZUjve8IxiRel5ZNfHqG7FRlV0%2Br8VTmoViqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA3wmEFpfkEfOjQ50KtwDjq27sJw1An%2Bey5Mf6ywlEQ%2BY36yEX94a7Q6dPcVCFjExINHtwFgOgY4YmRZO6PR0HWPZXtpf5lQh%2BuuUF8KQnfjvgZk%2FN0r8Xor1uICvF55yyvcCCcxwWrELsgY8kzh96nida0%2Bj6MWEGXuLLwojHY4zihSSmcGkuY9TWOzriIUXW%2FaZttyDLcqQ1G6%2B%2FO623pdyszR25xWI1rxKmfD2F%2BV5UNhzPYW4fDkYVyFa0Y4snbkOv0H8f2uXwK9y63TWv8NjlH9vT7tMTB3ha5qKTKxxiSTmA%2BlGBPoIpOcQaT08Od%2FoBqs0S979t29bCOW88tcamDlACvhaz1nVZDWvRspqYNrpbjMlFiQK62rq8sqqXDVHXtzTJ7bEPzqZUwJfSssCeycfES3tBsXqsHpzoa4Ku7olvEl%2FHWCR%2F09sstWIoQOo2tyN88k3oL0alS9D3Y%2FHWbE8V9XjnsxMkDQlDWez8OESa1Ayzi8cCaeTa7lYc0JsOtyCdsltfItBL6ueI9sPdDIMUlQrQ9HGuBlrgn5s%2Fw%2F5p2I1TUku8dVD%2B7cpK%2F5BgEbtwB6Rvc4voJmwFN2Iv0Ws85db0NqevUTCU%2BOkfTRW0qaXbMOI5EAAc33BTM01ZRVIeTzzB%2BgwlsXIwAY6pgHWVhjXA1UwyED19dqaQkHS0VDbdWLkXg%2BTJpPYl3QTf0VAgjcfCP%2FOfJmPLvZ0aiNw4d%2FMkKANBJFV5x5x%2BWqyuOe4VNnkZBef65D2MTnwn5mh1KudQIiYHpBBdfjj7vKhtJP2WtvwGvdm6inC2yaRXo9Av2rWNb5Ct%2FSJ%2B%2BdWsDWdqbxB8ro26PRUSLoT28TPYJGkK1RpFGkc%2BnmHdo4zX%2Ffd4hUl&X-Amz-Signature=67c0f873360db720d2d296f35c6cae97115dfbfc0f5f4d3c73ec060548b55b21&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
