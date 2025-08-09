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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OW43M7F%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDH9lTJ5OOjCuXqa2GeeB3RJPaFKC65G3hovjqzbRIBfQIhANvhOjwzeKeIhQdRaZ7CkE7RppTU00aXgKI9Yby%2FIQ9HKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFNZmeEr5ck3hFHxYq3AOm5j4ZufSRxIIo8jVECGG1uTFXZBonsQbF8R9TqNvmfC7cGeV%2BXo2DWnSZZHE47Z%2BDwFGX3KQZcB5Kw%2F9CoJKN0Ttkehlox8Q0oVVGfd9usI2ZKnsHncnjl7SzOXsvN3q3BcBzOAQiBzjnCe0ktr9LLxJ0YoYW1YFDk1Vt%2BscXlIfacVqDn%2FIVtzEe%2FZE5gTnbaap4qavgUBxcMCZKw7ySvuhnmS9mc13boP3sNnrkXVSxCO61UK1Qjqk1b9cCcLhEJg1LSWs6iEoZAdbgHgzqOoCp0HOax0Tprv0%2B2gbncIfdngt%2B6Wo50XFVvIbEc7KZPNrpvVvZNF2lue6coS0RzGI0PuDFVhrlw7fC0f7%2Bhqczr84HPMF%2Bv4D07iFeO2go6w4OeeMvbjuo6Na13%2B82iML19VQYvCv2CSlijxIjY%2FKCVExIAWtdlTswa903Q7XQMS3%2F%2FRrQA1yohNZJvZUsfobPS1Dz2BhNd7oG3Hp09W9Xq%2FC4fRisbpyh5GCwpnrZEQu1ZSn5T86Gb%2BZgQbyBtkBUJHrfGGj%2BIBtq%2BjXrA2r0jg6Uu%2BfYg7bORUbhHC1wP3wBd7Yx0GycYJUAoQOwNZwGYOqddFejJCd99byvOhYRhZARwLrpFZ%2BemjC2xNvEBjqkAQx5j%2FZ3DPBoJjkqgFcmoZ31WKQB7XKji9%2Bk0M%2B1yGHZeO9vGE08%2BBgBNyP8HIgCLW9WoxIZW5Pj0uauIk8gZsedWnSesEHB%2Fg5OiT4salqa%2BUdcnaEmBvsT%2FLiBGzO%2B1I97K2VBB1lIvIuVMymyj3I6Bd80F9jGsK%2F8jhBsPcgRquW1Jk59PmPdljWy94VOgEv3dKUQIe3BDxwGEZ3ao4OFwujS&X-Amz-Signature=6d882f175ca17eeb4e93d232ec7c7ee89ca646c16006b6e89f2f485e8f93701e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OW43M7F%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDH9lTJ5OOjCuXqa2GeeB3RJPaFKC65G3hovjqzbRIBfQIhANvhOjwzeKeIhQdRaZ7CkE7RppTU00aXgKI9Yby%2FIQ9HKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFNZmeEr5ck3hFHxYq3AOm5j4ZufSRxIIo8jVECGG1uTFXZBonsQbF8R9TqNvmfC7cGeV%2BXo2DWnSZZHE47Z%2BDwFGX3KQZcB5Kw%2F9CoJKN0Ttkehlox8Q0oVVGfd9usI2ZKnsHncnjl7SzOXsvN3q3BcBzOAQiBzjnCe0ktr9LLxJ0YoYW1YFDk1Vt%2BscXlIfacVqDn%2FIVtzEe%2FZE5gTnbaap4qavgUBxcMCZKw7ySvuhnmS9mc13boP3sNnrkXVSxCO61UK1Qjqk1b9cCcLhEJg1LSWs6iEoZAdbgHgzqOoCp0HOax0Tprv0%2B2gbncIfdngt%2B6Wo50XFVvIbEc7KZPNrpvVvZNF2lue6coS0RzGI0PuDFVhrlw7fC0f7%2Bhqczr84HPMF%2Bv4D07iFeO2go6w4OeeMvbjuo6Na13%2B82iML19VQYvCv2CSlijxIjY%2FKCVExIAWtdlTswa903Q7XQMS3%2F%2FRrQA1yohNZJvZUsfobPS1Dz2BhNd7oG3Hp09W9Xq%2FC4fRisbpyh5GCwpnrZEQu1ZSn5T86Gb%2BZgQbyBtkBUJHrfGGj%2BIBtq%2BjXrA2r0jg6Uu%2BfYg7bORUbhHC1wP3wBd7Yx0GycYJUAoQOwNZwGYOqddFejJCd99byvOhYRhZARwLrpFZ%2BemjC2xNvEBjqkAQx5j%2FZ3DPBoJjkqgFcmoZ31WKQB7XKji9%2Bk0M%2B1yGHZeO9vGE08%2BBgBNyP8HIgCLW9WoxIZW5Pj0uauIk8gZsedWnSesEHB%2Fg5OiT4salqa%2BUdcnaEmBvsT%2FLiBGzO%2B1I97K2VBB1lIvIuVMymyj3I6Bd80F9jGsK%2F8jhBsPcgRquW1Jk59PmPdljWy94VOgEv3dKUQIe3BDxwGEZ3ao4OFwujS&X-Amz-Signature=562a54ca0bd2f706b300789b95071336018f5496c5bfe08764b08149fba4e272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
