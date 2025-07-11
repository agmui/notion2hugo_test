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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNOLPDSG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjrGz%2ByYfbwTT94X6OdM2jTHMhMqESDs7wcdbI%2Bk9AMAiEA%2BJ2g4fvnFL3n8lE31c6BdH5%2BJK8Vh8AwkXMUtyKjL9YqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPlH%2FdLI4M%2B58cwvyrcA7gIu3LLihv%2Frqi2lLCE%2F0vuQCWU5oHuaTUdQSnSic15ppALHm46%2FDlF83dx3t%2BZd9N725fmZWIleOqgYXshZF98E5n%2FUn7%2F%2FLl%2FGkMuJrL6eeRF%2Frtg0a0ygUlIrn0fbuw1Kr%2FMmtn6UoV2aa4ztkRNnzzhywKjdmNij1ttAOTfs%2FAA3%2FT974bcSQc%2FzJLhTXkc%2BcasjYt7TlLbhfFjjFB3IZNAdwo6ETwJ%2Fw%2FCkDvpLML6nk%2Bc3%2F8dmCdU4pMvqOBpHIIzgHY%2Fde%2BgAber4pGmGzgz89YAd6c%2B1nYQbQ%2FnD%2BV6r5S%2B1J2kthyICTKrlupEWkdXFxt6Hseg71GBMDrxYJ0zSONGv6S3D6aB%2BJfFhKAW6AR2uVY8RNq47uMqpmw%2BOehVTRLj4k8jWFjJilJFyeWu7RcjiFogJRZYO%2B3t7IJ9xFpqxmXlrlTNB6Sn0tpk1GY9ccUz3ENgecY3dN4Z15Dykc%2FWRHBhcS9%2BZn2B16iKtabo7zioTFHrwOeoEx1yjRwVbRegugHZ3zYok%2FV%2BHqkFqXmky3NXwhqrokuw9PeTgrMz7Wb%2BpkolzRl%2BHlKDnffRnIWS5z8zjDL6TamFtq7BBl7Ola5mTvz5p%2B9Tz%2F08MYEJupq6b%2FmYMIf%2Bw8MGOqUBre7j3l3eUvvPVXXKMrHJhAXnGRb8iTJ9a4Pw%2BWwiQaVvlZ34wuFx%2BkUCLMgHJd9PsldXjPQdLKfdmXIQXXU2OYoIEdNSypC73t2DiSfv4mYUW46VxQeFSdQxMLA94jT3py1t4mlXyBnODTHgxPR7Nthc2lpBE728uz4gLOxhLYcBq7cyPLOwRUZieQiuOZltBofbOZtqCauJ%2FuyquUwaUvrU%2Fj7D&X-Amz-Signature=e9ad2fafb98172b81f48719f6217a1da1d6c2800515cac1c4d49cec3dd11e7cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNOLPDSG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjrGz%2ByYfbwTT94X6OdM2jTHMhMqESDs7wcdbI%2Bk9AMAiEA%2BJ2g4fvnFL3n8lE31c6BdH5%2BJK8Vh8AwkXMUtyKjL9YqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPlH%2FdLI4M%2B58cwvyrcA7gIu3LLihv%2Frqi2lLCE%2F0vuQCWU5oHuaTUdQSnSic15ppALHm46%2FDlF83dx3t%2BZd9N725fmZWIleOqgYXshZF98E5n%2FUn7%2F%2FLl%2FGkMuJrL6eeRF%2Frtg0a0ygUlIrn0fbuw1Kr%2FMmtn6UoV2aa4ztkRNnzzhywKjdmNij1ttAOTfs%2FAA3%2FT974bcSQc%2FzJLhTXkc%2BcasjYt7TlLbhfFjjFB3IZNAdwo6ETwJ%2Fw%2FCkDvpLML6nk%2Bc3%2F8dmCdU4pMvqOBpHIIzgHY%2Fde%2BgAber4pGmGzgz89YAd6c%2B1nYQbQ%2FnD%2BV6r5S%2B1J2kthyICTKrlupEWkdXFxt6Hseg71GBMDrxYJ0zSONGv6S3D6aB%2BJfFhKAW6AR2uVY8RNq47uMqpmw%2BOehVTRLj4k8jWFjJilJFyeWu7RcjiFogJRZYO%2B3t7IJ9xFpqxmXlrlTNB6Sn0tpk1GY9ccUz3ENgecY3dN4Z15Dykc%2FWRHBhcS9%2BZn2B16iKtabo7zioTFHrwOeoEx1yjRwVbRegugHZ3zYok%2FV%2BHqkFqXmky3NXwhqrokuw9PeTgrMz7Wb%2BpkolzRl%2BHlKDnffRnIWS5z8zjDL6TamFtq7BBl7Ola5mTvz5p%2B9Tz%2F08MYEJupq6b%2FmYMIf%2Bw8MGOqUBre7j3l3eUvvPVXXKMrHJhAXnGRb8iTJ9a4Pw%2BWwiQaVvlZ34wuFx%2BkUCLMgHJd9PsldXjPQdLKfdmXIQXXU2OYoIEdNSypC73t2DiSfv4mYUW46VxQeFSdQxMLA94jT3py1t4mlXyBnODTHgxPR7Nthc2lpBE728uz4gLOxhLYcBq7cyPLOwRUZieQiuOZltBofbOZtqCauJ%2FuyquUwaUvrU%2Fj7D&X-Amz-Signature=9cf72aca4b3ecdcd94dae5fd167f907fcddde401153077e9b8d0fb44c3b60ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
