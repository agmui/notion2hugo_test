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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNVA2OSQ%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9pYW7BmlK07YkdYU5ihrL0dyB1HDHwUINzYIO2RUX5AiBnFo9cQEEJi8TArgmOWgs18OOKAWfdxWYZ3hg%2BU0ZT8SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM66n0lObQ0rn9ja9kKtwDjQ3CPGZ4b699dw5UuPTT0%2FfPDct0Y6QP47bItwozoBT25JneYCBqNqihFGH4CP0S9SinoVl7bdqHt%2FXRZRK7r2Ct%2F3iwUsNtqvgYlN1%2Fb0sm4eNiWyp9GE7V9uUNic6tKYl4F%2F%2B3IL4wOLEvAtOBkwSQ%2BvLQlkFv2OfezyPbngtF4helDgVX3V0R3R5R9RxtkJo33HIRTwUp%2F6CzUwfRc9T12VsmoSClH81CssQBihncI4D9ZDK58rNbOrChh%2FbkA7S285yrIDx8JEHiVOsV8x78ywYVYIupt19G42O49xc0AqZK2AWkxHIyAXiSRk2QMzhVlggXTq4zIo9sUG1lAlyxU1vIEPUg1QKnb9NmI7GJMsPYqav33SAyFbbxw5dDEp0RnlKp%2FPBkO0uZXP3MbaLfJLZTAXco83nTiU8KVFGpwDvQHCULv5mdOLxggEnmuq1JBnZsZBt5fizIiIutVMAFmqyWu9ekhOkRkeXntsBtMgDvO0SUcSIZaf3nSRuk%2FkuiN6NphwehEKQAmUaCWAnDeYBiqHlnjxc26u9iXIQj3gLSncV5BsZdbOYXaGFcBlv76Fjft5pNxU3Ri4h9kfoQ15BhPObc%2BlUuPrpSNYGj3coV%2FOXuD8%2BU1u4w7fWMzgY6pgFWIYHJq0PufWoUrJdoDXy8ZC4KsEy%2FncEEyyPXad0a1h5fOkspD7X8QRVS8Vkkw71SGpMA6VMZzjQCHQCbwDxIQOTVr0P9HIf74hdCxI%2BJi%2Ffm20d4hLtUKhgOXsD03ki6uRVwhPNVsx6Gd8I3HKIkzu7A70GENVDqL%2FCv78LDQI4nmRM7nuijjaUjCTdZuXjzuf8Yb83iL2sXao5rKWmew34RnF4k&X-Amz-Signature=b567bf8b43d5dea742e76b8ab7ba7a0adcedcf5c8a1ff220cfdb4ae541fd745d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNVA2OSQ%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9pYW7BmlK07YkdYU5ihrL0dyB1HDHwUINzYIO2RUX5AiBnFo9cQEEJi8TArgmOWgs18OOKAWfdxWYZ3hg%2BU0ZT8SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM66n0lObQ0rn9ja9kKtwDjQ3CPGZ4b699dw5UuPTT0%2FfPDct0Y6QP47bItwozoBT25JneYCBqNqihFGH4CP0S9SinoVl7bdqHt%2FXRZRK7r2Ct%2F3iwUsNtqvgYlN1%2Fb0sm4eNiWyp9GE7V9uUNic6tKYl4F%2F%2B3IL4wOLEvAtOBkwSQ%2BvLQlkFv2OfezyPbngtF4helDgVX3V0R3R5R9RxtkJo33HIRTwUp%2F6CzUwfRc9T12VsmoSClH81CssQBihncI4D9ZDK58rNbOrChh%2FbkA7S285yrIDx8JEHiVOsV8x78ywYVYIupt19G42O49xc0AqZK2AWkxHIyAXiSRk2QMzhVlggXTq4zIo9sUG1lAlyxU1vIEPUg1QKnb9NmI7GJMsPYqav33SAyFbbxw5dDEp0RnlKp%2FPBkO0uZXP3MbaLfJLZTAXco83nTiU8KVFGpwDvQHCULv5mdOLxggEnmuq1JBnZsZBt5fizIiIutVMAFmqyWu9ekhOkRkeXntsBtMgDvO0SUcSIZaf3nSRuk%2FkuiN6NphwehEKQAmUaCWAnDeYBiqHlnjxc26u9iXIQj3gLSncV5BsZdbOYXaGFcBlv76Fjft5pNxU3Ri4h9kfoQ15BhPObc%2BlUuPrpSNYGj3coV%2FOXuD8%2BU1u4w7fWMzgY6pgFWIYHJq0PufWoUrJdoDXy8ZC4KsEy%2FncEEyyPXad0a1h5fOkspD7X8QRVS8Vkkw71SGpMA6VMZzjQCHQCbwDxIQOTVr0P9HIf74hdCxI%2BJi%2Ffm20d4hLtUKhgOXsD03ki6uRVwhPNVsx6Gd8I3HKIkzu7A70GENVDqL%2FCv78LDQI4nmRM7nuijjaUjCTdZuXjzuf8Yb83iL2sXao5rKWmew34RnF4k&X-Amz-Signature=c057c554cfee98f68e411a817be0f0a90157e3453aea510ad7a787077dde013a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
