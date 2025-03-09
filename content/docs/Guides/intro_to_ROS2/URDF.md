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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666THGT3VD%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCuht74fv7qb6aMXzb8uBW48UMD96e8uZeMWw8YnyGsrQIhAMPFZuQ%2FoMp25PCb06EpVmwYEXe47AFnsQqUUQePA5LWKv8DCGsQABoMNjM3NDIzMTgzODA1Igy9hjwF3032erqjyNkq3AOG4%2F%2Fqp2lOpsygSbWQFQ0HpE%2FUBS3r44YzJTQ0SBwsm2iUevvxCwsML9JNQq3nAuE1Xl1QRJDMuHVYzibsnoPxAN%2Bq8xdcnEChmF%2FzuPkQ0USqOL4EEoOnpt04KS6uBSmVa0ec8l3nN3H3QjaoC8BzsHCF9WvRWbWVcnsCkzVLHB7Vg%2FTNfO7x%2FB6nsNkroMmWVGCEqpIUTmtodvgciCG64fKeOn330LXH%2FYrhpfEBbZ1%2FwtujIRdxJbsHN%2F2Vm%2F0XZtynrefxV8uOZLMNeClY55e7lSBI5Euh4TkJORwsrUXbAx6B4Fuk0%2BZfP6GaGXkDqrsn7pawpT1xkOH3blh7dqlXT8D3oq73qFyoiyU5SuKdzR42z5WEfpqwmt6wgZeC8FBCrmzX7iqqGF9MG%2Bv5lYARlWetzbhLAKoq%2B4IX%2BFlAgSe4LQKjXjf9TmI%2BUdn0DaHdp6MKw0W8nZMEeDuacc1ONlSUbdYZmG42ycNwUAOu9PB848w7RNxRHaT05Owr49VtZky66u9EtjnQ12XyhZo61VgQNIiNHDpZk%2F74QF0OaYnglOgYTdoNAGxSY5xCbkYVMjEKwPi1BlOvkt5F53denhHOsEszG3LAwRnJSCyExR5SkLW7LSa47zCZ6bO%2BBjqkAWxVyjfRCA5%2B1WD6E1A2D4NUwHpFMvqF88efCosHtyNKyZGETXB9Ilfc5Q143zLjZxj8IVQdIjSBFpu%2FBlflzbnImMTk5%2BgLgYSultU7seoXWVT7lWFNnHXOevRnqKWQyOv72Voa4fQ%2F%2BCUXb1Ocvu00vrkrxhIgcZucivvtCuYtc9KQelZW9%2FAsad69S5iM3X%2Bp9z9ipcDxz6dmhrBbZIdfCzSM&X-Amz-Signature=956156bdb5ba0e0dbaf15be9a25f7ad940f0821f96690ee8a25fecbcf01db2f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666THGT3VD%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCuht74fv7qb6aMXzb8uBW48UMD96e8uZeMWw8YnyGsrQIhAMPFZuQ%2FoMp25PCb06EpVmwYEXe47AFnsQqUUQePA5LWKv8DCGsQABoMNjM3NDIzMTgzODA1Igy9hjwF3032erqjyNkq3AOG4%2F%2Fqp2lOpsygSbWQFQ0HpE%2FUBS3r44YzJTQ0SBwsm2iUevvxCwsML9JNQq3nAuE1Xl1QRJDMuHVYzibsnoPxAN%2Bq8xdcnEChmF%2FzuPkQ0USqOL4EEoOnpt04KS6uBSmVa0ec8l3nN3H3QjaoC8BzsHCF9WvRWbWVcnsCkzVLHB7Vg%2FTNfO7x%2FB6nsNkroMmWVGCEqpIUTmtodvgciCG64fKeOn330LXH%2FYrhpfEBbZ1%2FwtujIRdxJbsHN%2F2Vm%2F0XZtynrefxV8uOZLMNeClY55e7lSBI5Euh4TkJORwsrUXbAx6B4Fuk0%2BZfP6GaGXkDqrsn7pawpT1xkOH3blh7dqlXT8D3oq73qFyoiyU5SuKdzR42z5WEfpqwmt6wgZeC8FBCrmzX7iqqGF9MG%2Bv5lYARlWetzbhLAKoq%2B4IX%2BFlAgSe4LQKjXjf9TmI%2BUdn0DaHdp6MKw0W8nZMEeDuacc1ONlSUbdYZmG42ycNwUAOu9PB848w7RNxRHaT05Owr49VtZky66u9EtjnQ12XyhZo61VgQNIiNHDpZk%2F74QF0OaYnglOgYTdoNAGxSY5xCbkYVMjEKwPi1BlOvkt5F53denhHOsEszG3LAwRnJSCyExR5SkLW7LSa47zCZ6bO%2BBjqkAWxVyjfRCA5%2B1WD6E1A2D4NUwHpFMvqF88efCosHtyNKyZGETXB9Ilfc5Q143zLjZxj8IVQdIjSBFpu%2FBlflzbnImMTk5%2BgLgYSultU7seoXWVT7lWFNnHXOevRnqKWQyOv72Voa4fQ%2F%2BCUXb1Ocvu00vrkrxhIgcZucivvtCuYtc9KQelZW9%2FAsad69S5iM3X%2Bp9z9ipcDxz6dmhrBbZIdfCzSM&X-Amz-Signature=b7559ad72083424578c27724d1d3fac76718673c3e299f9ce5f56e80e44836d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
