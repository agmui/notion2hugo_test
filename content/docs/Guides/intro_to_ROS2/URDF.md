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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY36M5HM%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsziz0Ql%2F2ypFLC0MDf2botirWVhM9QodrPJ7ZDh8clAiEAhIgfU1W4QmYVPsTipIQy4OpRRPugIgiq87KDGCv7%2BL4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNKU72hLv3wMA2R1HircA%2FlYR8Vp1MuVqk51bAwpD0TmVsuZpoFoMEDH%2FF9SI0DgMiKkzj2izT0ImyXFUGrDTByIieLBYofT31DwQk9kd2T5y9fV%2BBob4gGjHZibo2wBo6TW8zoqpMw6edHKmwndtNc6uTQgOgMgvVT1DfHrKTKCzIniqPMHwHK9NWN2G%2Fvd3I6UnbeuxaFVgOsxFh9VOFpuoxJN4zBo7lZJNkIeUA1gi6dK6KgQPLCTdlyyipSTp%2BC78KPGQo80CAbNyQSE87UbPE1VWsNykaxsskgFU06IMDBtKFF3yaeasetCE7N%2FMZi1roDW33TNEoAiLvwaC7GVpY0SzR%2BS7fHdL%2F%2FPKDJmNyT27XXTXtYNyEgtAwialB77MlJaFJjO83oSihsy1kocfjVn6Nexis8A2j3c9AA7c1xX2dV2UoOkWnM6fPWhk2C9SjWr0jpTJadKuP3uUHIGnNNq1fUBFXoXl3%2FgnLT1mkl%2F0GPKjQbk17UdFf7JVHm3EtkDmbpbj4U%2FZvY%2FK4j0%2BVzahK2R32xPM5l%2FPlPyns1ErhXlHWnW6ajxunQUG4FzDuj69Pt0uEyQMRjrLH4PzVJgWMiM3cA6FuYQ4G2%2FBW5F%2FU%2BCicbJsVYPz7oYu9Lvc6ky1D024JwqMOf9mcEGOqUBFOOAqQyzk2ZInt96vl%2Buf62eMFPxXp8%2B2lhcm%2B3vlaWNkvcj9f70AHGAJUapog4uk4P%2F4DZPRczgN4%2FvQlroTNYDmcFLTaKxGxPGZ6BoA7zBbKBZUkP4oc0epEJU0LDOy0qrWoS%2BUg0WXIWlgI01W56a5LyU%2BRymoIRdW9NeOoPlpyh2d%2FDlF6jmDGOKFw3jw81tOsDdBQQ4jZYbK%2BErFyq08XY7&X-Amz-Signature=04178e54668566932ce6ed4c9e476576993ec8a102f5768655e45ce422c5dc28&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY36M5HM%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsziz0Ql%2F2ypFLC0MDf2botirWVhM9QodrPJ7ZDh8clAiEAhIgfU1W4QmYVPsTipIQy4OpRRPugIgiq87KDGCv7%2BL4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNKU72hLv3wMA2R1HircA%2FlYR8Vp1MuVqk51bAwpD0TmVsuZpoFoMEDH%2FF9SI0DgMiKkzj2izT0ImyXFUGrDTByIieLBYofT31DwQk9kd2T5y9fV%2BBob4gGjHZibo2wBo6TW8zoqpMw6edHKmwndtNc6uTQgOgMgvVT1DfHrKTKCzIniqPMHwHK9NWN2G%2Fvd3I6UnbeuxaFVgOsxFh9VOFpuoxJN4zBo7lZJNkIeUA1gi6dK6KgQPLCTdlyyipSTp%2BC78KPGQo80CAbNyQSE87UbPE1VWsNykaxsskgFU06IMDBtKFF3yaeasetCE7N%2FMZi1roDW33TNEoAiLvwaC7GVpY0SzR%2BS7fHdL%2F%2FPKDJmNyT27XXTXtYNyEgtAwialB77MlJaFJjO83oSihsy1kocfjVn6Nexis8A2j3c9AA7c1xX2dV2UoOkWnM6fPWhk2C9SjWr0jpTJadKuP3uUHIGnNNq1fUBFXoXl3%2FgnLT1mkl%2F0GPKjQbk17UdFf7JVHm3EtkDmbpbj4U%2FZvY%2FK4j0%2BVzahK2R32xPM5l%2FPlPyns1ErhXlHWnW6ajxunQUG4FzDuj69Pt0uEyQMRjrLH4PzVJgWMiM3cA6FuYQ4G2%2FBW5F%2FU%2BCicbJsVYPz7oYu9Lvc6ky1D024JwqMOf9mcEGOqUBFOOAqQyzk2ZInt96vl%2Buf62eMFPxXp8%2B2lhcm%2B3vlaWNkvcj9f70AHGAJUapog4uk4P%2F4DZPRczgN4%2FvQlroTNYDmcFLTaKxGxPGZ6BoA7zBbKBZUkP4oc0epEJU0LDOy0qrWoS%2BUg0WXIWlgI01W56a5LyU%2BRymoIRdW9NeOoPlpyh2d%2FDlF6jmDGOKFw3jw81tOsDdBQQ4jZYbK%2BErFyq08XY7&X-Amz-Signature=7ce737f3813be39d08dba6d87ef80335c80aa88b5b2eab84c29c9e636ae74285&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
