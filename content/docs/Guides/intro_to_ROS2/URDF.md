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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWTR5WMG%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICZym5igSOT2be6LietgxbYYnSil3x0BmdjDu%2BPnyF7cAiAginhwy7z4BXK3Vbzd%2BMYdPMNp6CjzPbD6CGqf%2FbZeXyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEVvfjOM1a1%2Fp%2F2ofKtwDYwY1XyHVUZEJ3%2BvPcJYm4kxqoga5lEFTEyaCYq7VXOi%2F7zblDr91BSYl%2Bvmg3KkXT84nqUrflIJALM4SCk4UtztxBcsOuho%2BbuZPjyDGiOjstYZzFYadWHnT%2BmYUKAAgu%2FkA%2FPT9Bfk%2Fb3weWkKsI1JFpZci%2FuoE%2FqPqkgPzLHaE9UNt2Et2lbYAyRKdwaojbEKNFHEW0Yb1O5TWssI8WaUd0GWfqoeHdkG917YfrXsd6flNUEwpqFd2vwECrbP4xBYdveWFYMGKnxxLF9QSfkIn7kblXM0V17s8yFqHBAGErgmVR%2F9YpcJ2KPXDMSG4eZsmvNKPnPyihI5xnsHF9sWam9qVe6TP38aA%2Btjo84G9lzIpfrFE3ZkJDXcLQcH5f32mTTbyK9MvgMMo3LvfcMZifUvcf8NlFRXJidqhrh9i3bvlLAc4pmZjnfCpOfvsArXSWnPdJhucmo1KjLYd9%2FAfMkG8NAwXXlcGW6GsIcd%2BoR8WFZ%2BMwvenJzIGhc6mFGokhsB0thpMM%2Fo0bwnL14okO1fkHvFQ%2BolvUdpISsRhAHr9h%2BeJBBVnsjAGrif8zmz0qZ%2BKnHyngGiiEQGj6BL7eh7jqY6Byj7cjVFlWippZb5WdagPTp5iiZkwwbamvwY6pgHCMYVgE952UKNMk7Nq0uXVfLw4K2TttJqhlPDIzkV73uOLRqBsTOivjl1sl4m5c0bxBeZpBP2k5n%2B9Wl%2BtePf20SsoJHIPZ5DiZpiIF7c5uujwHtCLd%2FZwBtaDPQ99A6YMMFVjmaPXrFZXn0%2B8CaQSBHefkK1RUipUUXfOq80DCP9YfRImkb4SqUJkPjV37T7KMj%2F6tL9lg%2FBgSboT5FgX8qCyedSb&X-Amz-Signature=4b0eb894802a4adb5e44dc74f235f058848471b03e2a6c82aeda305cb818e296&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWTR5WMG%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICZym5igSOT2be6LietgxbYYnSil3x0BmdjDu%2BPnyF7cAiAginhwy7z4BXK3Vbzd%2BMYdPMNp6CjzPbD6CGqf%2FbZeXyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEVvfjOM1a1%2Fp%2F2ofKtwDYwY1XyHVUZEJ3%2BvPcJYm4kxqoga5lEFTEyaCYq7VXOi%2F7zblDr91BSYl%2Bvmg3KkXT84nqUrflIJALM4SCk4UtztxBcsOuho%2BbuZPjyDGiOjstYZzFYadWHnT%2BmYUKAAgu%2FkA%2FPT9Bfk%2Fb3weWkKsI1JFpZci%2FuoE%2FqPqkgPzLHaE9UNt2Et2lbYAyRKdwaojbEKNFHEW0Yb1O5TWssI8WaUd0GWfqoeHdkG917YfrXsd6flNUEwpqFd2vwECrbP4xBYdveWFYMGKnxxLF9QSfkIn7kblXM0V17s8yFqHBAGErgmVR%2F9YpcJ2KPXDMSG4eZsmvNKPnPyihI5xnsHF9sWam9qVe6TP38aA%2Btjo84G9lzIpfrFE3ZkJDXcLQcH5f32mTTbyK9MvgMMo3LvfcMZifUvcf8NlFRXJidqhrh9i3bvlLAc4pmZjnfCpOfvsArXSWnPdJhucmo1KjLYd9%2FAfMkG8NAwXXlcGW6GsIcd%2BoR8WFZ%2BMwvenJzIGhc6mFGokhsB0thpMM%2Fo0bwnL14okO1fkHvFQ%2BolvUdpISsRhAHr9h%2BeJBBVnsjAGrif8zmz0qZ%2BKnHyngGiiEQGj6BL7eh7jqY6Byj7cjVFlWippZb5WdagPTp5iiZkwwbamvwY6pgHCMYVgE952UKNMk7Nq0uXVfLw4K2TttJqhlPDIzkV73uOLRqBsTOivjl1sl4m5c0bxBeZpBP2k5n%2B9Wl%2BtePf20SsoJHIPZ5DiZpiIF7c5uujwHtCLd%2FZwBtaDPQ99A6YMMFVjmaPXrFZXn0%2B8CaQSBHefkK1RUipUUXfOq80DCP9YfRImkb4SqUJkPjV37T7KMj%2F6tL9lg%2FBgSboT5FgX8qCyedSb&X-Amz-Signature=481267c644a2cbc8c499e26048fe7a2b832ac8fff35d460e052a7ba8399f6bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
