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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJFIB4KZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIH3qNAaUJTs32QHpKJO6b1GwbT2h%2Fn0nTXeFCu6D8nZDAiA3PcRuLEWSfsWgwAgphrN9W4ZVpy0VuVskRfaeAmtmgyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhtpRNgOwGTlLKY0KtwD411XxZw2ulevyjsQavAXjfs3ZoeJRUX7Gt8r2rX0lIoGlKTFKEj%2FzusLn%2FkD0VKXmVf0UpEYe4N0rHqIdpiUR8kt8EFnECTd4REEXKXFReOzsvURiXOd3GBHBYWn3HVPKqHRU1NGrxXML%2F8pU3KJQFxu68DFqaSHiA0v8mwrXSa6Z6a%2BAVMbCOtO%2Bzes3Pe6j8y1iGdfMRsMYGWorO6VTPnEbRrIezFtLVsdIZery12uCFSWBz%2FuePKQrKLsyrz%2BySBql50KCys3avZNJ3kqDRK%2B4DMfZycWiFmMb8zzyZuw8qnrG7xx9538yxEKdZI5lQmSTaVU4xBVifkTaxDADr7xLgvFuTtWF1rHBnZ52HDJe%2B%2Fl4OcDc22HhGxBR9MtOJYqMbLi2mNMERQXBY6FqRdka8Typk%2B67ZuhUCX9lAO99V%2FxSOa7jRwc4ACnsRspRXRsKJIYqc6Fd0UOnSTVHxf6ie%2BM%2BVneWP%2Fn72D4ml6bFoQVGQgN5g0e2VG29P9ZaFiGZQ1BD7%2BhUeu5j%2B4x7oZov2nOBtEyB5QDFSiPyqVQPU1Dupkz83iKE0U3AKDGJBxrbSUuJj4nFEyQQtALGRS8jl0DXLT9zcsJlBtCoOPxHiyW1r7SrdiXMFgw1arZwAY6pgHoZKdd9XW713%2F%2FUSBibP7Oq%2BcKcOw6aF9nisyRQ5y3GY6PHrU6htYGz7tz0b94UYBve9FkuX9MBIRNFYWFPs%2FkVD4ImnERtne3T1J3rZREIOLefXhvapc%2FdhlF1RtMAzcDPOX%2BhHvAqYLECaV56j%2F65zJ9kC3Lq%2B0jXfzHt4aLeM0WVyycYzO9PozW7z2ypC%2FsGMyaxDNCulqWw1mLeV39a7swQpi6&X-Amz-Signature=6e3620f79407b97eb8cbe0fadd71f28f2ddaa339f6d4e56d76f7821109624178&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJFIB4KZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIH3qNAaUJTs32QHpKJO6b1GwbT2h%2Fn0nTXeFCu6D8nZDAiA3PcRuLEWSfsWgwAgphrN9W4ZVpy0VuVskRfaeAmtmgyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhtpRNgOwGTlLKY0KtwD411XxZw2ulevyjsQavAXjfs3ZoeJRUX7Gt8r2rX0lIoGlKTFKEj%2FzusLn%2FkD0VKXmVf0UpEYe4N0rHqIdpiUR8kt8EFnECTd4REEXKXFReOzsvURiXOd3GBHBYWn3HVPKqHRU1NGrxXML%2F8pU3KJQFxu68DFqaSHiA0v8mwrXSa6Z6a%2BAVMbCOtO%2Bzes3Pe6j8y1iGdfMRsMYGWorO6VTPnEbRrIezFtLVsdIZery12uCFSWBz%2FuePKQrKLsyrz%2BySBql50KCys3avZNJ3kqDRK%2B4DMfZycWiFmMb8zzyZuw8qnrG7xx9538yxEKdZI5lQmSTaVU4xBVifkTaxDADr7xLgvFuTtWF1rHBnZ52HDJe%2B%2Fl4OcDc22HhGxBR9MtOJYqMbLi2mNMERQXBY6FqRdka8Typk%2B67ZuhUCX9lAO99V%2FxSOa7jRwc4ACnsRspRXRsKJIYqc6Fd0UOnSTVHxf6ie%2BM%2BVneWP%2Fn72D4ml6bFoQVGQgN5g0e2VG29P9ZaFiGZQ1BD7%2BhUeu5j%2B4x7oZov2nOBtEyB5QDFSiPyqVQPU1Dupkz83iKE0U3AKDGJBxrbSUuJj4nFEyQQtALGRS8jl0DXLT9zcsJlBtCoOPxHiyW1r7SrdiXMFgw1arZwAY6pgHoZKdd9XW713%2F%2FUSBibP7Oq%2BcKcOw6aF9nisyRQ5y3GY6PHrU6htYGz7tz0b94UYBve9FkuX9MBIRNFYWFPs%2FkVD4ImnERtne3T1J3rZREIOLefXhvapc%2FdhlF1RtMAzcDPOX%2BhHvAqYLECaV56j%2F65zJ9kC3Lq%2B0jXfzHt4aLeM0WVyycYzO9PozW7z2ypC%2FsGMyaxDNCulqWw1mLeV39a7swQpi6&X-Amz-Signature=6d6f7730987767393f5dbc0769ec848b3aabbb7132485a0ea513f26da7d5f42f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
