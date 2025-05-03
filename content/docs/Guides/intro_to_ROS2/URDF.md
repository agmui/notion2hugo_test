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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLHVZ5ZI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIGV5F5prJfumW%2FWuvO2yOAvjyUy35Vo9fhTojowM9U4CAiB6ltuwOFEuo2kWmMm8mRRQVb1n%2B4GAVSpjdLEWoiCozSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw0NLCEz0zAuL8pcFKtwDP0klnOHX1zUYvdReT72Njm%2B04pVOfOkf0RXmIjqvCVDCkaLuNjMc6pzWNzFHwRb33ZBqLA0vwypav13OqngJS9lsWKa3b8bS%2FKmkFhmuochiXSf8ptthHuJOan12i%2F0l5%2FvHZp%2B3bxVhp7I1wXKXZtOrfm9NlsGzwrK9wL0dRY%2By35XDQ0RmP85WnKpHW1MSQ9dvoHibHs1mSRHyRte0fNtOHwRacgiKXc%2BMtJLNTiGyvXgwxWSFqjxm7lo9sPj5XI%2FfFy9qeClLB5N4vc5mY0DGIKQkljLlmya3vdOBe9%2BiPqMWritmuoraBonrLqcI0cSILbi9bqROTjGmEVBzYjUOMaQL0l8tFpEIsgJoY7Drthly6fegZTbQ3OxkQx%2FTmAVOcl%2BpQ36tYCu%2FCBFprysKHct%2BDUL0kqXY4OChACzRbsb0cweppy64hnE3oAr%2BhTSuOlUW82QKHUFuucY7V9wrS04D5xSnRgbFLOIIlN%2BrtXgv94MFgqB6YQ%2FuijWdhpWpR9QUJG8XuHKFx4%2BQ2DGhdL553qoVx9fnLz3kECKV42fsW0vcjjckerhM8q%2BgU%2FYVHP9cF345BSCvxrAvm%2Bmq5ddAtBtdpWbyV1XgVjhmwiSNTbuqa7KZ1hEw6YbWwAY6pgG9yDjcPjIBGzVY0LrNnEhcgEcnv0tOEeo5kT4K%2B4WkmKMPGEto0bVDi5hSE1vbSiZR3Nl%2B7T3aRj6HtBZo1%2BWo%2FEMc3MO8e4%2F50QHfj3VR2tnUYPNbrA8Cl%2FsZWt2slRbuYpwZtiIh3ltJmDFIOxOD9vmakyTZ%2FMHhONHQbiNJM8Q6KM8Y7qyKEuKIV0HiH4qlKs7uSu3e2smxaJ%2B2OLcIhaGF%2BqGb&X-Amz-Signature=faf90561c4b73003afda9dca464c81286e246ec899fac8377fc2a6eb807f2507&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLHVZ5ZI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIGV5F5prJfumW%2FWuvO2yOAvjyUy35Vo9fhTojowM9U4CAiB6ltuwOFEuo2kWmMm8mRRQVb1n%2B4GAVSpjdLEWoiCozSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw0NLCEz0zAuL8pcFKtwDP0klnOHX1zUYvdReT72Njm%2B04pVOfOkf0RXmIjqvCVDCkaLuNjMc6pzWNzFHwRb33ZBqLA0vwypav13OqngJS9lsWKa3b8bS%2FKmkFhmuochiXSf8ptthHuJOan12i%2F0l5%2FvHZp%2B3bxVhp7I1wXKXZtOrfm9NlsGzwrK9wL0dRY%2By35XDQ0RmP85WnKpHW1MSQ9dvoHibHs1mSRHyRte0fNtOHwRacgiKXc%2BMtJLNTiGyvXgwxWSFqjxm7lo9sPj5XI%2FfFy9qeClLB5N4vc5mY0DGIKQkljLlmya3vdOBe9%2BiPqMWritmuoraBonrLqcI0cSILbi9bqROTjGmEVBzYjUOMaQL0l8tFpEIsgJoY7Drthly6fegZTbQ3OxkQx%2FTmAVOcl%2BpQ36tYCu%2FCBFprysKHct%2BDUL0kqXY4OChACzRbsb0cweppy64hnE3oAr%2BhTSuOlUW82QKHUFuucY7V9wrS04D5xSnRgbFLOIIlN%2BrtXgv94MFgqB6YQ%2FuijWdhpWpR9QUJG8XuHKFx4%2BQ2DGhdL553qoVx9fnLz3kECKV42fsW0vcjjckerhM8q%2BgU%2FYVHP9cF345BSCvxrAvm%2Bmq5ddAtBtdpWbyV1XgVjhmwiSNTbuqa7KZ1hEw6YbWwAY6pgG9yDjcPjIBGzVY0LrNnEhcgEcnv0tOEeo5kT4K%2B4WkmKMPGEto0bVDi5hSE1vbSiZR3Nl%2B7T3aRj6HtBZo1%2BWo%2FEMc3MO8e4%2F50QHfj3VR2tnUYPNbrA8Cl%2FsZWt2slRbuYpwZtiIh3ltJmDFIOxOD9vmakyTZ%2FMHhONHQbiNJM8Q6KM8Y7qyKEuKIV0HiH4qlKs7uSu3e2smxaJ%2B2OLcIhaGF%2BqGb&X-Amz-Signature=0cb3dab2c7ca5d559b89b26c45472061a8a25e0c690fda64fca4c44907761f4e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
