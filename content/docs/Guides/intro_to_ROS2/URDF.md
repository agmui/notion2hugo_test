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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5F7CPLT%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF%2Fyt5R6Z3hQvUAy7Rcg1OgIrJ9zNH75CkErN%2F6hj7iQIhAOpHccbjYY2SWDMoDaH5jfwynPdHI8QvFlxCgANFKvUaKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLptUVARKDFPNAkfMq3AM2UwPYX7ErdMvp0%2FzRx%2FMd3RDI%2BJrfOvTGuoPAHgmALTMb4NJ4Z7TqcVY5SDXTvXtkLhw6mkBdzQCM6U04GpJKabZ3VV1iVDcdAwc9G0ZMHdyIlA4erobRaFF5sYYABncg25B8HhIRnqaEA7URA7NmEsZkDOanv6YKvKjRF3EOtoPq%2Fq3awAUdsXZi1yN%2B%2FPn7J0eOIKS5etkFQtZN%2Fhys2wcR9k2nigGMvBZeDH%2Ftmqyud9LXgyLqwE6iFJjv6UgyCo2sI8wAhpcciuYkmpMR9IcXK2yNHLbK4tT5%2FK3XjAyLq%2Byo0LngT44QFjZ4LIegzlRnJFTq1lS0OgEr6dP9%2F7e2B7OYxm6jsKssQiCOOZlvjQ3rHrmKHkBEG6RnxiLCeh26uqt0vWTc3gsdQQA87HCSRGcKi8xlMXjFcc3F06c5eGQEl7sxTbi78205%2F7I8Y4j%2Fy9eneBT72%2BnSWFtmFDBPdYsTAE9%2Bg9eXUp6IuEBfBn1rjsNI%2FNcpL7Ku2Fe63UGTanuxoXsyT2hdHYQhCS9ld9Iw%2BNW989HgrTfPVcb1fcG25MimCToXY5rHlQwiCQS%2FEyUaOf3zgYykp4ohhQVwaYAlfQczwBvwutr4Y35Rw1a9q56jje5XiTCXnKW9BjqkAcjy0RgN0H4aPboMN8gsfrdgnDDF8xKmPJTGp6x6Ns6Ps97%2FCOES6fihr5nsFQAZGdubkqAZF%2BKcSJbvMbk9EA5TVsVaSHIZNQ6DrP48oxfT%2BImz38garWi1xLAQBl%2FqscDtB%2FPXkC10mxhMhgGFwTAhn93AxVqTxoXq%2FLhdsQsaaQ8jWM%2FiEYpKa5E2lPBSKBQQTxPvXwBA6S7r9y2pa3lOAFy7&X-Amz-Signature=85e860361d21e2a0ecc3f5a01c908f41ff994ca0b004dedff311131c97e5976e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5F7CPLT%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF%2Fyt5R6Z3hQvUAy7Rcg1OgIrJ9zNH75CkErN%2F6hj7iQIhAOpHccbjYY2SWDMoDaH5jfwynPdHI8QvFlxCgANFKvUaKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLptUVARKDFPNAkfMq3AM2UwPYX7ErdMvp0%2FzRx%2FMd3RDI%2BJrfOvTGuoPAHgmALTMb4NJ4Z7TqcVY5SDXTvXtkLhw6mkBdzQCM6U04GpJKabZ3VV1iVDcdAwc9G0ZMHdyIlA4erobRaFF5sYYABncg25B8HhIRnqaEA7URA7NmEsZkDOanv6YKvKjRF3EOtoPq%2Fq3awAUdsXZi1yN%2B%2FPn7J0eOIKS5etkFQtZN%2Fhys2wcR9k2nigGMvBZeDH%2Ftmqyud9LXgyLqwE6iFJjv6UgyCo2sI8wAhpcciuYkmpMR9IcXK2yNHLbK4tT5%2FK3XjAyLq%2Byo0LngT44QFjZ4LIegzlRnJFTq1lS0OgEr6dP9%2F7e2B7OYxm6jsKssQiCOOZlvjQ3rHrmKHkBEG6RnxiLCeh26uqt0vWTc3gsdQQA87HCSRGcKi8xlMXjFcc3F06c5eGQEl7sxTbi78205%2F7I8Y4j%2Fy9eneBT72%2BnSWFtmFDBPdYsTAE9%2Bg9eXUp6IuEBfBn1rjsNI%2FNcpL7Ku2Fe63UGTanuxoXsyT2hdHYQhCS9ld9Iw%2BNW989HgrTfPVcb1fcG25MimCToXY5rHlQwiCQS%2FEyUaOf3zgYykp4ohhQVwaYAlfQczwBvwutr4Y35Rw1a9q56jje5XiTCXnKW9BjqkAcjy0RgN0H4aPboMN8gsfrdgnDDF8xKmPJTGp6x6Ns6Ps97%2FCOES6fihr5nsFQAZGdubkqAZF%2BKcSJbvMbk9EA5TVsVaSHIZNQ6DrP48oxfT%2BImz38garWi1xLAQBl%2FqscDtB%2FPXkC10mxhMhgGFwTAhn93AxVqTxoXq%2FLhdsQsaaQ8jWM%2FiEYpKa5E2lPBSKBQQTxPvXwBA6S7r9y2pa3lOAFy7&X-Amz-Signature=5089689db2cb25f9cc7115466094ef6ade75c280c327ede5bf5176e0ea93231d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
