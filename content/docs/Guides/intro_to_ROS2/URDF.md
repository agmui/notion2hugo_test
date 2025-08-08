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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDWQ2CVE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIBcALJbIPPP2PNYW12nvASsottB%2F6XnTmClY8ntQKVMIAiAKLAQEA1yyTQpz3BLUulbqoVZwymfD%2BmTqo55G9w%2BzoiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXAcuszjaiH4p0dYzKtwDj4Rj%2B%2B1uXq%2FfFQudx5VxOKuk3aZmBmIv2Hln%2FXLEuZy9L2BnunYZlHVcxXTxLAOezgSYOAFK%2BJYJfCiQlmuuc0KkKAVVNOrY0q%2B5Q9RBIoMRSE%2BbyeZKMW0pZQA%2FhMR8v7D50j5qRs1mXz8hRe%2Fhr%2FdpnpI2LhzPO0pv7i8FtTVe%2BZ8oV4N%2BCzjyHeIYSsBxUtC7xYkt0vm%2FcRpvFHHezQcIdmTwnab3pFP8lPkh8wNXLFp2M7TMDgsgr%2F6NgpwVEVRpQ77qrRZqbZWs3y%2FV3%2FbL%2Fn1Fz7HmbFMzO%2Fj0WURMgw8DaOV1taQezvlRNZwKkZHxMCu1B%2F4RZmHswUZl4quNPYLnXSKR07SCxlRxLbbEwy6fhpNTF6sj6CdLLaRBao6J16Js6BDenTWPJxZDq3%2BQncJfazXburFYJmYFiJlB8h1QZBaQyxmB4tFgRJbtjkVb7qVkUaMhHgO2Kj9XfanRPBKIvigUzsok3u%2FQK89QoK0seiO%2FjyIrrMsVAnhxRv202ID6DybyJW0DYDzWh9hdkLHJHlaEgGonAXxLDdVRCJZ0I6HvJjov%2BtLgD7JGobpDCWD3AixwgMkOpbOaZ%2FpCmQz%2BcYz8FwnTGm%2B6cbn8%2B3MRADwzbvq2Ffkwje7WxAY6pgEDMI21My058eAJROMuSCFbjUwOVpdv415rMKLAz2CcJxQoZA6Kk0k0PvZ1OMQqSwM%2FuxmtJLviU2F3eaMa%2FOtqJnftXu2MufRhoi4UvX%2BeLDQwL6bM%2FOCX4qH9a%2BQPL3K0tclAolyckZmzcXb%2Fq0R4fqpDlhpqhdLJc%2Bk0SxuYTkLI0nvJ%2FsYEzvoISx0HalFALxfwQjx8ax28xym3TMawhUYeqlTM&X-Amz-Signature=15c00622fa6a3ff9bb5a8d2a93b89b1b4ddcc6c6ee1dfb1ac743ab8130232c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDWQ2CVE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIBcALJbIPPP2PNYW12nvASsottB%2F6XnTmClY8ntQKVMIAiAKLAQEA1yyTQpz3BLUulbqoVZwymfD%2BmTqo55G9w%2BzoiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXAcuszjaiH4p0dYzKtwDj4Rj%2B%2B1uXq%2FfFQudx5VxOKuk3aZmBmIv2Hln%2FXLEuZy9L2BnunYZlHVcxXTxLAOezgSYOAFK%2BJYJfCiQlmuuc0KkKAVVNOrY0q%2B5Q9RBIoMRSE%2BbyeZKMW0pZQA%2FhMR8v7D50j5qRs1mXz8hRe%2Fhr%2FdpnpI2LhzPO0pv7i8FtTVe%2BZ8oV4N%2BCzjyHeIYSsBxUtC7xYkt0vm%2FcRpvFHHezQcIdmTwnab3pFP8lPkh8wNXLFp2M7TMDgsgr%2F6NgpwVEVRpQ77qrRZqbZWs3y%2FV3%2FbL%2Fn1Fz7HmbFMzO%2Fj0WURMgw8DaOV1taQezvlRNZwKkZHxMCu1B%2F4RZmHswUZl4quNPYLnXSKR07SCxlRxLbbEwy6fhpNTF6sj6CdLLaRBao6J16Js6BDenTWPJxZDq3%2BQncJfazXburFYJmYFiJlB8h1QZBaQyxmB4tFgRJbtjkVb7qVkUaMhHgO2Kj9XfanRPBKIvigUzsok3u%2FQK89QoK0seiO%2FjyIrrMsVAnhxRv202ID6DybyJW0DYDzWh9hdkLHJHlaEgGonAXxLDdVRCJZ0I6HvJjov%2BtLgD7JGobpDCWD3AixwgMkOpbOaZ%2FpCmQz%2BcYz8FwnTGm%2B6cbn8%2B3MRADwzbvq2Ffkwje7WxAY6pgEDMI21My058eAJROMuSCFbjUwOVpdv415rMKLAz2CcJxQoZA6Kk0k0PvZ1OMQqSwM%2FuxmtJLviU2F3eaMa%2FOtqJnftXu2MufRhoi4UvX%2BeLDQwL6bM%2FOCX4qH9a%2BQPL3K0tclAolyckZmzcXb%2Fq0R4fqpDlhpqhdLJc%2Bk0SxuYTkLI0nvJ%2FsYEzvoISx0HalFALxfwQjx8ax28xym3TMawhUYeqlTM&X-Amz-Signature=df8851099ab07a6a1f22bdac6b4749db17a20e7259b5b1a42e8e53a9b15bb699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
