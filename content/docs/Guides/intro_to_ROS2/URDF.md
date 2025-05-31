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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUPU3PDJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiaChLI9JlSyQ1UQx1Ehc22H8AhiyPLdpxptOHjpfUigIgdm1ARcd9K77hyeRgbTv1sabOSYFaQrFT%2B3wD4%2Fs5kIoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRX4gWaIZ%2FSHLTa9yrcA8nY28aIgYJRf9aq7hTq9HfwKMU2bi1w8FT4Vnp%2BBkzY6DYqAXBJ3I%2FvHOrLaN2865SzL8Dr3n5TTIe3cn1r4wRlREUiLf7XR7JYt9CySDTNXD%2Fy3DiH1kbw1SnjrdAAMgGnxoTtKi6aFW%2BKG%2FhihWxC2Tl1xuwzkLvbHtp4%2FpmJdLYJa28EMyP453%2B0Ie%2Bu2W7PjHed%2F%2B8BuzK0GH5SYhd2cKYVz4YlC43Ak0fAjJ59T%2FKa7HyKNzFCOdvX5zOeoNga9wAQO3uK8MRptxyOkRdwf6YyJhPUdp%2FNg88XR1YiAINmR3p1ZhtETW6MJp6xuaoTctqw%2B%2BaykBn0Mx3PDiJq1yuE6NgEO6Wf2xU6O5602IFak26kF8VK7nyUJIFV8OCnqBSJePWFrqa1QgHb7D6iv9eALHXTA9X8DB0KH%2FrDmXGiVMRvbnLUo%2Ff1%2FYWmlufs9LtQ0%2FhSNvE7Qip4jJJm3HvuG6NlQm6gW%2BpLpLaa9sKWimCvTolCbKStsRHPSIFrOpdK5HIJVutCVhhj2RoKx4FNLq9Cae4X3EQmLEOpGDXMrPH0fCrPvGsjKlklNApFwV8J%2Bh%2BmOA%2FioTiadwM8u1FD8nlLN2F1hjHvAIQrnoTO%2B8%2BbwqPK4RuxMIHJ7cEGOqUBHKdZ1x0RM4uNYEJApakHfz2M1IuKwdXqMdwPRbOtrIiXmcOQfY4q44v7R3s%2FzVlf3qzZIDDbDrGNHVLNk23%2BZenLVa2BSa1uBYVJDT77L3cKVWTw6w1qML9PpaGyU5XlOIpKpPQN161I8N5FFz%2Bhncd6UNS19z1JwlznwO%2FI2xYmQ%2FAIqO2agr7Rj8EKEu26BOJSPq8dDQqtKOd5MNSvBrOv0vh6&X-Amz-Signature=9b47763615556f90e5b9efb8eacf16b329b5e355cad4a76bc6544f31ce9a2803&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUPU3PDJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiaChLI9JlSyQ1UQx1Ehc22H8AhiyPLdpxptOHjpfUigIgdm1ARcd9K77hyeRgbTv1sabOSYFaQrFT%2B3wD4%2Fs5kIoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRX4gWaIZ%2FSHLTa9yrcA8nY28aIgYJRf9aq7hTq9HfwKMU2bi1w8FT4Vnp%2BBkzY6DYqAXBJ3I%2FvHOrLaN2865SzL8Dr3n5TTIe3cn1r4wRlREUiLf7XR7JYt9CySDTNXD%2Fy3DiH1kbw1SnjrdAAMgGnxoTtKi6aFW%2BKG%2FhihWxC2Tl1xuwzkLvbHtp4%2FpmJdLYJa28EMyP453%2B0Ie%2Bu2W7PjHed%2F%2B8BuzK0GH5SYhd2cKYVz4YlC43Ak0fAjJ59T%2FKa7HyKNzFCOdvX5zOeoNga9wAQO3uK8MRptxyOkRdwf6YyJhPUdp%2FNg88XR1YiAINmR3p1ZhtETW6MJp6xuaoTctqw%2B%2BaykBn0Mx3PDiJq1yuE6NgEO6Wf2xU6O5602IFak26kF8VK7nyUJIFV8OCnqBSJePWFrqa1QgHb7D6iv9eALHXTA9X8DB0KH%2FrDmXGiVMRvbnLUo%2Ff1%2FYWmlufs9LtQ0%2FhSNvE7Qip4jJJm3HvuG6NlQm6gW%2BpLpLaa9sKWimCvTolCbKStsRHPSIFrOpdK5HIJVutCVhhj2RoKx4FNLq9Cae4X3EQmLEOpGDXMrPH0fCrPvGsjKlklNApFwV8J%2Bh%2BmOA%2FioTiadwM8u1FD8nlLN2F1hjHvAIQrnoTO%2B8%2BbwqPK4RuxMIHJ7cEGOqUBHKdZ1x0RM4uNYEJApakHfz2M1IuKwdXqMdwPRbOtrIiXmcOQfY4q44v7R3s%2FzVlf3qzZIDDbDrGNHVLNk23%2BZenLVa2BSa1uBYVJDT77L3cKVWTw6w1qML9PpaGyU5XlOIpKpPQN161I8N5FFz%2Bhncd6UNS19z1JwlznwO%2FI2xYmQ%2FAIqO2agr7Rj8EKEu26BOJSPq8dDQqtKOd5MNSvBrOv0vh6&X-Amz-Signature=bd56ac24f17e7253fd1428a17a98526c6f424d15a2c5188d0dfef325d0fb2733&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
