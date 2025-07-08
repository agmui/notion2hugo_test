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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XHYPXII%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC2d06HAFQJBxfEV4UxHIUmgOr2s%2FGT96Siv8OXcoKCnwIhAKsWmx9XNjWzPSmXdU2dTFGj3r56X2U4%2F8Cx7XTgnIyMKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2hS3AXSlibFKBSskq3AOcY%2BC%2FceU4SquVNGZvMF%2FTji2ZUcAESG3OSwePgS4xWVvIebR9v6OYTHKPLSq9mjxv7HLgOzdKDMS9%2Bj4FGqZEUWpvnJmFT6XYeCMiQCrSo0OiN5%2Fsf2mpc8yeiocD8W%2BnEP5Ob9mCjIWK6Vuvw%2B3ip48r%2B9wScXRC9O9c0ARRGxY04wApzQkeDrNrfKIKOOz3s6Cc6jE0t9I2Ck2%2F31GPRdDXhke5CJuONyrGXQbTFQudUJXOZlQ6tWG5ZK1%2BAPrkI22pW%2FsZBT%2Bme1XE9Fd2fjxwNezQuBW%2FPe38BMkN%2B5vjbbPSUNDb02BHoy0dUcOJR23gQ8pwO26O73ylN%2FnveG0ykEInlVDnOb2KpNrpqpjnTtjo1I%2Bw%2BntNosVDjKZkEvMPI1Mx9N3q4lIF5EF8NehwMn1sqZpzkzorKK4cTYBSZFRBttLITEzx59WVOEnQ6%2Fr8XDhTW7J4Lp97X8F7f9MuqIm5MlUgJXteuHTqB25TF7UJ5DeKFotRIJwB3Lwn44pHxf9RSJ7eR50XyJx8HSTsRCWmfXV4DvYZTDzK8tH9YItUwXrWD3hdmG4AZsoUEAz9qinLZwSCtL7dSHlPb7v4oVwIXa0MglmXOAGRs%2BKO4NvEH0CPWKYw0jCXyrHDBjqkAfzbmdiw8qmmjBBwJhLkyuNbU8DNu2glIytVgw6K%2FV1hytNKFu%2FXCnlpKpgCGxZZfELM8wYnPaohO0kO4L30Q6%2FU2xnMo%2B9C%2FaNjoPbzdZSFjVi4dv%2FEJ2ARJn898XEO4R%2F0T%2Fiw2Hwfh869j0s3N%2FszVjKhBrYaNmC%2BIluttzy%2FwVWHkzYzaRaUr5Mb4AOBscDMFkOYSrQWl0pfSCHjph4uWUuf&X-Amz-Signature=ff6c97e92f60ee5817645f1cad28922bd27e1523ec1b2fa64d17aec288ffaf44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XHYPXII%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC2d06HAFQJBxfEV4UxHIUmgOr2s%2FGT96Siv8OXcoKCnwIhAKsWmx9XNjWzPSmXdU2dTFGj3r56X2U4%2F8Cx7XTgnIyMKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2hS3AXSlibFKBSskq3AOcY%2BC%2FceU4SquVNGZvMF%2FTji2ZUcAESG3OSwePgS4xWVvIebR9v6OYTHKPLSq9mjxv7HLgOzdKDMS9%2Bj4FGqZEUWpvnJmFT6XYeCMiQCrSo0OiN5%2Fsf2mpc8yeiocD8W%2BnEP5Ob9mCjIWK6Vuvw%2B3ip48r%2B9wScXRC9O9c0ARRGxY04wApzQkeDrNrfKIKOOz3s6Cc6jE0t9I2Ck2%2F31GPRdDXhke5CJuONyrGXQbTFQudUJXOZlQ6tWG5ZK1%2BAPrkI22pW%2FsZBT%2Bme1XE9Fd2fjxwNezQuBW%2FPe38BMkN%2B5vjbbPSUNDb02BHoy0dUcOJR23gQ8pwO26O73ylN%2FnveG0ykEInlVDnOb2KpNrpqpjnTtjo1I%2Bw%2BntNosVDjKZkEvMPI1Mx9N3q4lIF5EF8NehwMn1sqZpzkzorKK4cTYBSZFRBttLITEzx59WVOEnQ6%2Fr8XDhTW7J4Lp97X8F7f9MuqIm5MlUgJXteuHTqB25TF7UJ5DeKFotRIJwB3Lwn44pHxf9RSJ7eR50XyJx8HSTsRCWmfXV4DvYZTDzK8tH9YItUwXrWD3hdmG4AZsoUEAz9qinLZwSCtL7dSHlPb7v4oVwIXa0MglmXOAGRs%2BKO4NvEH0CPWKYw0jCXyrHDBjqkAfzbmdiw8qmmjBBwJhLkyuNbU8DNu2glIytVgw6K%2FV1hytNKFu%2FXCnlpKpgCGxZZfELM8wYnPaohO0kO4L30Q6%2FU2xnMo%2B9C%2FaNjoPbzdZSFjVi4dv%2FEJ2ARJn898XEO4R%2F0T%2Fiw2Hwfh869j0s3N%2FszVjKhBrYaNmC%2BIluttzy%2FwVWHkzYzaRaUr5Mb4AOBscDMFkOYSrQWl0pfSCHjph4uWUuf&X-Amz-Signature=8b0431c98ab6a4bb8b49ae2014702a125eaa19135a7567f586aa0a66c5a72fb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
