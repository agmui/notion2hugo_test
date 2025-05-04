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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656HSVHFW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDrlb8%2FGa0SopispjlhvN4oH%2FLV4DWQ2mFv7cziV5Lp%2BwIgCkXBhbT87yAUUE87tse9uzNxs3ZW92tjbApgzlmOGygq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDCgKwiFHlwH8CbD%2FMSrcAxVNVOKT%2F8%2F0X3OEtTOwT055jJdsL4vONJa6Z0BJVcUepWr4eXm8bZNdWO5lv21MpIXQ7LkRh82fHV3ghhIIMD%2BH3yxDsbhAx1XTnaMeypDAiqNctbmwk5qIQTfvuIlxMgXpRQIKFmj0ejBkgNM%2F88iSV3SaNVwr%2BaVUIL64l71JhY2QRv4nluxztQJdXwsrs51bkN7m21Hs8R4234c6W0ZO2tPSzL7X7%2Bg%2FUtyvz8JvVvLx1OGrMgLviDBOB%2Ffhdaeeq5y8tFSuFRHhGKhuWmG4WOAgsJdY1b7Hybc5AYhxA7pS3QO4Meh5R4f3z%2F9tEybI4Q6qJGHmwRyBSRubwFVyZXZn%2BDb2D%2BzKKNSwwPSKd3h%2FmE5EUzTET%2B8PpKsbyccZ8hDkxEQ5UysVReo6Z3Fnzlnz7ldkCGlZOI62IXL2Ma%2BUKWEaNyCv28T%2BGktRl8zPHJhDWxiD9hV07D8BWLodvXOGrwfN4EU%2BbgfMCoQHtJURLsM6RuUf8H%2FRgaUj%2FHmGz17s9e0AWivOaiHCTZd%2BET8LZazFCTLhzHHzUY3wO1Sxe%2FRFBbSdl163bMY5d82u9%2FyaX%2FDzgxTxcTRrTc40dU%2Bw3hcA3dW8cfyBEACXn%2F2VwlCkVR6ilgyCMMqP3cAGOqUBwIg%2Fv4wW8r1BI9%2FAUSgSBbK2OBEdGqpNlc2A6BrmpXP6KTQyTg8G0YYV6WVxeBUUIqihYbBQxjFgtlEY2k1qLNjDSgfLBIsBYcsWlQ%2FejFu9Obuj7rIqiB28RkzDUUGRn3OwyTChFAFjqkSnRidaFD0zIrtbofrbqoC9S34yUznRvWYdbQezVNMUCaSJROA%2FVGQXMLlgk9mKkzBr1P6j6HxmXhrj&X-Amz-Signature=4f57d60e713661c2e0c2d21a515c01f8c24691708b6e6e7f4b6aec2c99b12e89&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656HSVHFW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDrlb8%2FGa0SopispjlhvN4oH%2FLV4DWQ2mFv7cziV5Lp%2BwIgCkXBhbT87yAUUE87tse9uzNxs3ZW92tjbApgzlmOGygq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDCgKwiFHlwH8CbD%2FMSrcAxVNVOKT%2F8%2F0X3OEtTOwT055jJdsL4vONJa6Z0BJVcUepWr4eXm8bZNdWO5lv21MpIXQ7LkRh82fHV3ghhIIMD%2BH3yxDsbhAx1XTnaMeypDAiqNctbmwk5qIQTfvuIlxMgXpRQIKFmj0ejBkgNM%2F88iSV3SaNVwr%2BaVUIL64l71JhY2QRv4nluxztQJdXwsrs51bkN7m21Hs8R4234c6W0ZO2tPSzL7X7%2Bg%2FUtyvz8JvVvLx1OGrMgLviDBOB%2Ffhdaeeq5y8tFSuFRHhGKhuWmG4WOAgsJdY1b7Hybc5AYhxA7pS3QO4Meh5R4f3z%2F9tEybI4Q6qJGHmwRyBSRubwFVyZXZn%2BDb2D%2BzKKNSwwPSKd3h%2FmE5EUzTET%2B8PpKsbyccZ8hDkxEQ5UysVReo6Z3Fnzlnz7ldkCGlZOI62IXL2Ma%2BUKWEaNyCv28T%2BGktRl8zPHJhDWxiD9hV07D8BWLodvXOGrwfN4EU%2BbgfMCoQHtJURLsM6RuUf8H%2FRgaUj%2FHmGz17s9e0AWivOaiHCTZd%2BET8LZazFCTLhzHHzUY3wO1Sxe%2FRFBbSdl163bMY5d82u9%2FyaX%2FDzgxTxcTRrTc40dU%2Bw3hcA3dW8cfyBEACXn%2F2VwlCkVR6ilgyCMMqP3cAGOqUBwIg%2Fv4wW8r1BI9%2FAUSgSBbK2OBEdGqpNlc2A6BrmpXP6KTQyTg8G0YYV6WVxeBUUIqihYbBQxjFgtlEY2k1qLNjDSgfLBIsBYcsWlQ%2FejFu9Obuj7rIqiB28RkzDUUGRn3OwyTChFAFjqkSnRidaFD0zIrtbofrbqoC9S34yUznRvWYdbQezVNMUCaSJROA%2FVGQXMLlgk9mKkzBr1P6j6HxmXhrj&X-Amz-Signature=48cd9dcd219bae8657b3951e9318d0be287d7793bd6356ded31e42fdc46cbef9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
