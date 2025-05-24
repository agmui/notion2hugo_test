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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIRMP5VS%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIE%2FKLr%2F0ZYEO%2FTw%2BJnPeBqnG%2FMo7NUM7q%2BEVN2TO7%2FddAiEAyW0uWBj8RNFn9zYurH44EW1IV0H6xOtdVgM1bt80XQ0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDMYkPBied2Q2zjxSZyrcAzTKQzIDYuU7OhCnjZ6Cb2kMzoxSQP42tKUzXybXJOce2aS1Y5Ca%2FNVZThvgtJu2Q7eodcmY6OGg9V%2BF3b%2BA5pXDbTtwPxkSNe6xtOHJ9SRLd3JZsXxHUaSk8rySIKmDzm2ecSzGEMQNBGL64TWAWscUhaM%2F6c2YPOp9pGIc2VRspb58OTOo6EjW2K2l%2FKbSSuxcCCo1VOZ5KiUgalY6Ubb43334Cx1FSVRq3vY0M7udqwULZG%2Fs7F0PvzA0mtfvyjBNSgtSWw3JjZ5LLzvE8zkilxLfwf50Pu99AerLAuX0yoLs1Z%2BdOinzEKk5srH1qU1ZUMhRipJy1Z%2BW6v16LjrIhFrtjgygdanlFQnSztYjRo7lyvF7YhhAUONBt%2FZdSaF7tnJng8VmLzhxY5b5mhFTPcQ189gZLriCD6uJ5jRZaxJWRgLoB%2BkCBhINvv0K9%2FqX%2Fjrws04%2BYrGYC3DASrxFVkN4vUcC2Ezp%2BiqhjOlwxes0ubw6gW1ad4fYIsjVVR2LdlPNaczhTDi036O3WjS1rKKS9fMylk4bxYcsVZ5MTQ%2BlnGFlblP34RSZGQC1ykl7FvWwHEQGDMwHoHiEkERdrz40Mq0GA37PQzaN0sbu1ljYeNjfD%2Ff4nTaKMIWBxsEGOqUBoVlOFslBNUcL0PTIfpOqJMMl3nr5442XzT90V4J0HRYFG7x8A26K7sp3z96DOm411q6ugoccSvmINREDYR5cjMrYkmdQGOwdFwJGxRVTh1SVxAXTEIp0zP8dHcz58xEk0vDkvk5OuyUyPgNY23Jy3JsPXzezJIuTE4jk3zIpjV8N%2FWKy4gkCKSK3gmm9B2zvBF%2Fj0VBUi%2BH8DLF3MZAP4DG7NNxk&X-Amz-Signature=ce1ac60b99db9143b38360a00a153e98b4e8fd05c637af318dca0d86e12191d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIRMP5VS%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIE%2FKLr%2F0ZYEO%2FTw%2BJnPeBqnG%2FMo7NUM7q%2BEVN2TO7%2FddAiEAyW0uWBj8RNFn9zYurH44EW1IV0H6xOtdVgM1bt80XQ0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDMYkPBied2Q2zjxSZyrcAzTKQzIDYuU7OhCnjZ6Cb2kMzoxSQP42tKUzXybXJOce2aS1Y5Ca%2FNVZThvgtJu2Q7eodcmY6OGg9V%2BF3b%2BA5pXDbTtwPxkSNe6xtOHJ9SRLd3JZsXxHUaSk8rySIKmDzm2ecSzGEMQNBGL64TWAWscUhaM%2F6c2YPOp9pGIc2VRspb58OTOo6EjW2K2l%2FKbSSuxcCCo1VOZ5KiUgalY6Ubb43334Cx1FSVRq3vY0M7udqwULZG%2Fs7F0PvzA0mtfvyjBNSgtSWw3JjZ5LLzvE8zkilxLfwf50Pu99AerLAuX0yoLs1Z%2BdOinzEKk5srH1qU1ZUMhRipJy1Z%2BW6v16LjrIhFrtjgygdanlFQnSztYjRo7lyvF7YhhAUONBt%2FZdSaF7tnJng8VmLzhxY5b5mhFTPcQ189gZLriCD6uJ5jRZaxJWRgLoB%2BkCBhINvv0K9%2FqX%2Fjrws04%2BYrGYC3DASrxFVkN4vUcC2Ezp%2BiqhjOlwxes0ubw6gW1ad4fYIsjVVR2LdlPNaczhTDi036O3WjS1rKKS9fMylk4bxYcsVZ5MTQ%2BlnGFlblP34RSZGQC1ykl7FvWwHEQGDMwHoHiEkERdrz40Mq0GA37PQzaN0sbu1ljYeNjfD%2Ff4nTaKMIWBxsEGOqUBoVlOFslBNUcL0PTIfpOqJMMl3nr5442XzT90V4J0HRYFG7x8A26K7sp3z96DOm411q6ugoccSvmINREDYR5cjMrYkmdQGOwdFwJGxRVTh1SVxAXTEIp0zP8dHcz58xEk0vDkvk5OuyUyPgNY23Jy3JsPXzezJIuTE4jk3zIpjV8N%2FWKy4gkCKSK3gmm9B2zvBF%2Fj0VBUi%2BH8DLF3MZAP4DG7NNxk&X-Amz-Signature=29ba7ff9b5728bb4e7c8903bb90747fb176ac800702691f48e500c00549077f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
