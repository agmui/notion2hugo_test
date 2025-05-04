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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXORI6UT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCzkrci8jX9t%2FBmh6wtM7yfe%2FVMTHVxd42Rp%2FYgvY9PGwIgTwZZ760qiNgroaZcT1tNNeTj3SbTc%2BKf6xg1ArwZUn4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLZzT2vPRYcVDygE7CrcA%2BP41iar%2BkBx89TJtAZAvKtYCOTGU1PRvn%2Bdy%2FnVhwgAU3WCuycJs9HTvA9cWS2W9LNjVAj%2BpVSziBoPTKP0LiFODdbTg%2BPDDCIKXXvw0ZnU6LPpOCbzkFy15Q%2BwN1qgEfOeGUJEZPaaIIHFLG2Vbd1yr3ptSiC9%2B0zseMmtascjS5Vnnzds3M8WDJG5jxrxtQSWgTdVFkMSnH214im8ITt8KnIZwyCAouzYUvGSss7SCFtHg0FyAzna%2BP%2FI7Ni8BSW1%2FDKdk%2F45EWfnkmRi%2Fi92RZ6PPFWvelHPz8bFhXTczGifsR00VTzqp1r6ZhSydDHEaMDErDn4tcF7K4zJZze2vSsLUSqSunopzEHJOoHW2rWsaz2wlSvpbjehuTZJho52Do6EfVSC0wiUeETJuhDd%2FwBgLJoLk4fha2auP9zSTjQdMtuTd3zLjAoEd%2Fq5bsmDkCFdrcs9DYQdU5vEMm9NAK8cb9AR7Bc26vHyqwm4XcSU9tkJ7XrUjzppJZr4n0IO53xlL3qo5WngKMVj7ZVSkAny3wf590yTZ%2BLwI58e7CYFftNo%2BvvKRojtCppmZdh5U1ZQSfMRI%2FgMZuXDsJp0elT23RgLflveqLdbkmKFpq6Kpt3fj8jVXjceMIjQ3cAGOqUBVU1sKembANsZlEi4AnOYkpsbuj51K2e7nKVxQJj6BCoUeMSRvYzwS0Wexo%2Bk4pCSZg%2BajLMJQsQH0G8gNfqEWGuOCHwiIJybtVAd5x17cQwS7YL6EY%2F%2B4Ab26ALy%2B9c51BdeLU4d%2BylPyeDM0xGm4krITQwJyDjDR5b%2FTnUmlKpOpgjahyXnGQEgYXv659XWmGMN2Jkx5bVAewU1K7QQrv7App24&X-Amz-Signature=5200a63b483f0e81366e28efd585456da674f153e1bb5c31df41960d1c1431a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXORI6UT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCzkrci8jX9t%2FBmh6wtM7yfe%2FVMTHVxd42Rp%2FYgvY9PGwIgTwZZ760qiNgroaZcT1tNNeTj3SbTc%2BKf6xg1ArwZUn4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLZzT2vPRYcVDygE7CrcA%2BP41iar%2BkBx89TJtAZAvKtYCOTGU1PRvn%2Bdy%2FnVhwgAU3WCuycJs9HTvA9cWS2W9LNjVAj%2BpVSziBoPTKP0LiFODdbTg%2BPDDCIKXXvw0ZnU6LPpOCbzkFy15Q%2BwN1qgEfOeGUJEZPaaIIHFLG2Vbd1yr3ptSiC9%2B0zseMmtascjS5Vnnzds3M8WDJG5jxrxtQSWgTdVFkMSnH214im8ITt8KnIZwyCAouzYUvGSss7SCFtHg0FyAzna%2BP%2FI7Ni8BSW1%2FDKdk%2F45EWfnkmRi%2Fi92RZ6PPFWvelHPz8bFhXTczGifsR00VTzqp1r6ZhSydDHEaMDErDn4tcF7K4zJZze2vSsLUSqSunopzEHJOoHW2rWsaz2wlSvpbjehuTZJho52Do6EfVSC0wiUeETJuhDd%2FwBgLJoLk4fha2auP9zSTjQdMtuTd3zLjAoEd%2Fq5bsmDkCFdrcs9DYQdU5vEMm9NAK8cb9AR7Bc26vHyqwm4XcSU9tkJ7XrUjzppJZr4n0IO53xlL3qo5WngKMVj7ZVSkAny3wf590yTZ%2BLwI58e7CYFftNo%2BvvKRojtCppmZdh5U1ZQSfMRI%2FgMZuXDsJp0elT23RgLflveqLdbkmKFpq6Kpt3fj8jVXjceMIjQ3cAGOqUBVU1sKembANsZlEi4AnOYkpsbuj51K2e7nKVxQJj6BCoUeMSRvYzwS0Wexo%2Bk4pCSZg%2BajLMJQsQH0G8gNfqEWGuOCHwiIJybtVAd5x17cQwS7YL6EY%2F%2B4Ab26ALy%2B9c51BdeLU4d%2BylPyeDM0xGm4krITQwJyDjDR5b%2FTnUmlKpOpgjahyXnGQEgYXv659XWmGMN2Jkx5bVAewU1K7QQrv7App24&X-Amz-Signature=7cca6234b6625c416159a22369b3eea07905f78f4de7d677b57f61b88006148d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
