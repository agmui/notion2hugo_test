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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653MDOTST%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKkkTBEfjDYpc50ALndeW1GJ2GoQz7m5d5q0NtYFSk9AiAblt27QK6GThG6eukloW3%2Fci6PAbdRMRhx0wSmu9%2F3Tyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMIJ2OcnM%2FDGZzgcW2KtwDI2WgPtVw5rwYlAwr4phq04Wm8PPOrXLa%2FeGEouz9IKZFzqPxmxfG3xI2KEcMiBJ3HIjF5MFz%2Bzc0M1sap6qL8ERFEDqLH1d6JAHt8yabsjNxGsLYAxauYuFGTIa5ueT%2BalIM3hHlP7Y2lnoLFj%2BaLfrPWh6uY5%2BtjIzg2zaZs6wJuF%2FZW1OHrIjy%2B%2BnTAc5j%2Fj3943g%2FDolSnZpAluz5LMgXl3CqPevD9rjKVxp6eFqXGttjzU8PhJY3IaQtIHn4HGIUO4EjiDLXEX%2FDBbPHVRju6QOnTeRu4cl4QxnB8HijshjTDsd4%2FsYg5sXVzxZrpiO%2FNQAq5KRWRVW5FGQXx3n8%2Fc6onGGtKeDu0S7FI8BacD0yJY7wQriemWblP9sl4fBUqOFAYHTiIoMqM3HrPwfdqNOqS%2BxEqlPDq9sMtmJt7yPFIVOw6JHeObWWOM59k8rLCFaz1GadFB0cQqtM6NV7SRa%2F9NgvweGis9tuNd1gZo%2FSSy4S8FpIGaOtj6JeB6IrIkKAeNYXw9jdcHMVqpv6omyK4HNnRSeRdbbDI18ln41IDwt835N1QwLxwjInXwQMSnAkuxFK1Xt%2BPDeji6XFCPsT4U2f2eu1EFPjjp0lEfuUOPs%2BcRWfneYwoaeKvwY6pgH3TGpLRL1raTDSOIOpJE1tU2gEtBPwVLOIAUgQHgBhqo6nEk%2BQT7pFJlxr8c2Bs%2B267MJCBQO9tMVcYxGZMZLP1G9G8yfE%2FxzZw%2F0ISqiwtxslsuvd9IGS6iB3vOKXOzfs39GGLd1YHqEDjnWE4GvW5cFAtmmFGmveZwF85IwGywXEXPUNZbILhtllxKk0clsP%2Bj1tOV6p7pIq4IET3TpnDLQKBOFu&X-Amz-Signature=60798d471e7c1a3f84ac5aea87d5ba5d421ba7b8618d81e683b55d7efa638674&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653MDOTST%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKkkTBEfjDYpc50ALndeW1GJ2GoQz7m5d5q0NtYFSk9AiAblt27QK6GThG6eukloW3%2Fci6PAbdRMRhx0wSmu9%2F3Tyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMIJ2OcnM%2FDGZzgcW2KtwDI2WgPtVw5rwYlAwr4phq04Wm8PPOrXLa%2FeGEouz9IKZFzqPxmxfG3xI2KEcMiBJ3HIjF5MFz%2Bzc0M1sap6qL8ERFEDqLH1d6JAHt8yabsjNxGsLYAxauYuFGTIa5ueT%2BalIM3hHlP7Y2lnoLFj%2BaLfrPWh6uY5%2BtjIzg2zaZs6wJuF%2FZW1OHrIjy%2B%2BnTAc5j%2Fj3943g%2FDolSnZpAluz5LMgXl3CqPevD9rjKVxp6eFqXGttjzU8PhJY3IaQtIHn4HGIUO4EjiDLXEX%2FDBbPHVRju6QOnTeRu4cl4QxnB8HijshjTDsd4%2FsYg5sXVzxZrpiO%2FNQAq5KRWRVW5FGQXx3n8%2Fc6onGGtKeDu0S7FI8BacD0yJY7wQriemWblP9sl4fBUqOFAYHTiIoMqM3HrPwfdqNOqS%2BxEqlPDq9sMtmJt7yPFIVOw6JHeObWWOM59k8rLCFaz1GadFB0cQqtM6NV7SRa%2F9NgvweGis9tuNd1gZo%2FSSy4S8FpIGaOtj6JeB6IrIkKAeNYXw9jdcHMVqpv6omyK4HNnRSeRdbbDI18ln41IDwt835N1QwLxwjInXwQMSnAkuxFK1Xt%2BPDeji6XFCPsT4U2f2eu1EFPjjp0lEfuUOPs%2BcRWfneYwoaeKvwY6pgH3TGpLRL1raTDSOIOpJE1tU2gEtBPwVLOIAUgQHgBhqo6nEk%2BQT7pFJlxr8c2Bs%2B267MJCBQO9tMVcYxGZMZLP1G9G8yfE%2FxzZw%2F0ISqiwtxslsuvd9IGS6iB3vOKXOzfs39GGLd1YHqEDjnWE4GvW5cFAtmmFGmveZwF85IwGywXEXPUNZbILhtllxKk0clsP%2Bj1tOV6p7pIq4IET3TpnDLQKBOFu&X-Amz-Signature=fcf9c033a12a01b936b368fddfdb0f6c7ce5827aad2785572e891bb763ba5deb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
