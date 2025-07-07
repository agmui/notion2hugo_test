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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZERSVB6V%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDneARouXsfASb%2F2IYb1yHazgCHXaF5wl6aAKUML6SfPQIgX5xDM3%2BZD0qMG0FjSkksNXMYg1cMOprJ7NN9Myngt3Qq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDChYMjq7I4RBcMpNPircA8jYr6J686nKGYzB7GwlIgolzYgwlWbdOWntem5Vg%2F%2FsgMnJx8rMqkrawyKRoqor2%2FFid7FsBi6ZV%2F2cK%2Bw0KhOpdiuXbIuLqHFAWWxUmcjxyOW7BosknzpYGziyAwWdyrREA9%2Fd6W9aQBCcKUdtVFpN%2F%2Fq7oqDrVr4APKsqnORhDaeIN1e2GTuNBxW40PC5Mg4N2DCc%2F8HBkaHRM2qEAhLFz4%2BOOIzEpXv7UzrHFyiTSoYW%2FA8UoIYp1oISbhEm0Np1ausPlC2zWpukX%2Bg%2BQZALLBpbSGB2yRH4MH8Ml6ERf%2FsTMyd5D0t3WorPcBKe3%2Bf6YAQPdvH34hc8VXBqQqPHLRwfNOef2YTPuh5LgSsGMd1nFCPPgFR%2Fn40ajX60oVTD43tFNb2iTxgPXxCBMmhw88xqMfnEeqH2Y6wfqQdCoG4aBCsLxADUacdRNk%2FntRGIGKUw7r2BB4rDg8PbzLicMjIyS3FTS4yOQstnVFX2MMeSi4nFWhQm48nIaMuj8ihfHJ3Wpu236dIiKEESzfOQXFuuzN9r41pZib2uLtJeXD%2BKWXnCyaZ0ti7IvNwVKQKlbuomDgeBFf0mR5CHUICNRF7cSQ7WkxXfWzzueuwkvbaXowLOJwgj5usuMKm%2BsMMGOqUBmIIc2E3SUe25nu0DWUFSKcSA0ZyDesYjO4QuoLnfihF5KkfY%2FqJ242r32MmCwZQTwcwsO1H7cySyCP0uUSvWpegib662q36lHKTAl%2FYVhoR%2FEHXCKTmdS42qaUx2TGfEoTx4FLbV8wtJ67%2BTCG%2BxJ2eyySRaQhhSpgLPjl0LcXM8IyHtL18M46BsfMU8mQm3CsxhXxgUsJsKYk6A1VJ3%2FCj3CGTI&X-Amz-Signature=ab4ebefb3810e3110d4b80353d6a53d034e4f4046aca7d6d5a4aef3c713726b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZERSVB6V%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDneARouXsfASb%2F2IYb1yHazgCHXaF5wl6aAKUML6SfPQIgX5xDM3%2BZD0qMG0FjSkksNXMYg1cMOprJ7NN9Myngt3Qq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDChYMjq7I4RBcMpNPircA8jYr6J686nKGYzB7GwlIgolzYgwlWbdOWntem5Vg%2F%2FsgMnJx8rMqkrawyKRoqor2%2FFid7FsBi6ZV%2F2cK%2Bw0KhOpdiuXbIuLqHFAWWxUmcjxyOW7BosknzpYGziyAwWdyrREA9%2Fd6W9aQBCcKUdtVFpN%2F%2Fq7oqDrVr4APKsqnORhDaeIN1e2GTuNBxW40PC5Mg4N2DCc%2F8HBkaHRM2qEAhLFz4%2BOOIzEpXv7UzrHFyiTSoYW%2FA8UoIYp1oISbhEm0Np1ausPlC2zWpukX%2Bg%2BQZALLBpbSGB2yRH4MH8Ml6ERf%2FsTMyd5D0t3WorPcBKe3%2Bf6YAQPdvH34hc8VXBqQqPHLRwfNOef2YTPuh5LgSsGMd1nFCPPgFR%2Fn40ajX60oVTD43tFNb2iTxgPXxCBMmhw88xqMfnEeqH2Y6wfqQdCoG4aBCsLxADUacdRNk%2FntRGIGKUw7r2BB4rDg8PbzLicMjIyS3FTS4yOQstnVFX2MMeSi4nFWhQm48nIaMuj8ihfHJ3Wpu236dIiKEESzfOQXFuuzN9r41pZib2uLtJeXD%2BKWXnCyaZ0ti7IvNwVKQKlbuomDgeBFf0mR5CHUICNRF7cSQ7WkxXfWzzueuwkvbaXowLOJwgj5usuMKm%2BsMMGOqUBmIIc2E3SUe25nu0DWUFSKcSA0ZyDesYjO4QuoLnfihF5KkfY%2FqJ242r32MmCwZQTwcwsO1H7cySyCP0uUSvWpegib662q36lHKTAl%2FYVhoR%2FEHXCKTmdS42qaUx2TGfEoTx4FLbV8wtJ67%2BTCG%2BxJ2eyySRaQhhSpgLPjl0LcXM8IyHtL18M46BsfMU8mQm3CsxhXxgUsJsKYk6A1VJ3%2FCj3CGTI&X-Amz-Signature=3e3a8d58359bc8a8883cc77132fcae9088a4b9d48336ef06f1c5f13ba946e539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
