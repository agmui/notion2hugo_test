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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGUYAOE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDlVgF10LweMiAzjFcyt4KO6QehYGNBi5XjahQk11iWWQIhANNZKWait%2FZgBF2cxo2qxSnCqAgATYuliQUB8g3S7QSXKv8DCFAQABoMNjM3NDIzMTgzODA1IgwJ0Vj%2B4JRc8%2BOvpWIq3AP%2FP3oXDZY0zvxil30AxX3huGx%2FNMlYxRkjJnsi8716d4IFqVSg%2F56n3EGNVnaBEOBlPi9Q4a4%2BkNK%2BjlPB7JD3z87GejSvAS8FW5UspXZAbpitrIFQey96bP0eOZzVm%2BaoNwLgtdx%2Fi9fTjV4E80gBEN2MtI5MUJQcyzam3xm0YEHpE6erUvvrX%2B2dYpE5C1PUnLyn0Bd6mpu4Lx3%2Fk5KOKtynVShAjtKj%2FOUpYdHoTF7opYtZJCNUylcxrvWuhs6YKB1vv0tNjAaBpzz9BK3zvDEjCgMAqkdl%2Fa2gYPiI74zOaffyrjNyQZt0DyNiIUwilHdmx5a7%2FuIuywDhMuJTmIY3K8bF1n%2B5iephmBsY3JDXfit3PPVfn7Bl2wUUIEuWF9fJG6S1uRtKkEGOLggVWJahsT0ht73ONd%2Fep9neymqcRqixwTXxOAPnVN9h4H2jl7AuofiRC2ItlBSuJN3SjuHefugFt6nNb71Zdyypt1tKuEzW2QEdY4n21scFM2Tc31XsKvu5b5dH2Dg70AFUz3lWPVHbPBpcbLFce2B7m043rbAdraBI4jp33On1ijKyApfLEQhIx%2BDSPzIaa725oezAc8Xquy86LMvV%2Bu8zEKsyZ48jh4vOLHqELzDB9MTEBjqkAUb6het1ZDZT2BHltiKA0hMnnmNZnc02JNseaLqbC89V089eMF1jIBVPTfCwwtzk9b2BeGjsLVwS0UEt0p5fqeKQNWbthmH%2BKVog%2FyaTs0RE4gZLrthpZP5khWc0C9QQSFdymyKKd2MMuaMmFEp58ngSftqYGNjKf6ceRJY1SS2ydSxNTlzFYqJ1hFE7ZgCoPnJr8N1%2FymecMOZUS7NtDrch7Y5%2F&X-Amz-Signature=357c9660bc67f7de061e5664b0c81ae6cd6417e59602ff0b02ad8dbb76778243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGUYAOE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDlVgF10LweMiAzjFcyt4KO6QehYGNBi5XjahQk11iWWQIhANNZKWait%2FZgBF2cxo2qxSnCqAgATYuliQUB8g3S7QSXKv8DCFAQABoMNjM3NDIzMTgzODA1IgwJ0Vj%2B4JRc8%2BOvpWIq3AP%2FP3oXDZY0zvxil30AxX3huGx%2FNMlYxRkjJnsi8716d4IFqVSg%2F56n3EGNVnaBEOBlPi9Q4a4%2BkNK%2BjlPB7JD3z87GejSvAS8FW5UspXZAbpitrIFQey96bP0eOZzVm%2BaoNwLgtdx%2Fi9fTjV4E80gBEN2MtI5MUJQcyzam3xm0YEHpE6erUvvrX%2B2dYpE5C1PUnLyn0Bd6mpu4Lx3%2Fk5KOKtynVShAjtKj%2FOUpYdHoTF7opYtZJCNUylcxrvWuhs6YKB1vv0tNjAaBpzz9BK3zvDEjCgMAqkdl%2Fa2gYPiI74zOaffyrjNyQZt0DyNiIUwilHdmx5a7%2FuIuywDhMuJTmIY3K8bF1n%2B5iephmBsY3JDXfit3PPVfn7Bl2wUUIEuWF9fJG6S1uRtKkEGOLggVWJahsT0ht73ONd%2Fep9neymqcRqixwTXxOAPnVN9h4H2jl7AuofiRC2ItlBSuJN3SjuHefugFt6nNb71Zdyypt1tKuEzW2QEdY4n21scFM2Tc31XsKvu5b5dH2Dg70AFUz3lWPVHbPBpcbLFce2B7m043rbAdraBI4jp33On1ijKyApfLEQhIx%2BDSPzIaa725oezAc8Xquy86LMvV%2Bu8zEKsyZ48jh4vOLHqELzDB9MTEBjqkAUb6het1ZDZT2BHltiKA0hMnnmNZnc02JNseaLqbC89V089eMF1jIBVPTfCwwtzk9b2BeGjsLVwS0UEt0p5fqeKQNWbthmH%2BKVog%2FyaTs0RE4gZLrthpZP5khWc0C9QQSFdymyKKd2MMuaMmFEp58ngSftqYGNjKf6ceRJY1SS2ydSxNTlzFYqJ1hFE7ZgCoPnJr8N1%2FymecMOZUS7NtDrch7Y5%2F&X-Amz-Signature=6f516390099c5c82c68c1ab01cfdc401f5c8ce832db985fb51c181470db63b79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
