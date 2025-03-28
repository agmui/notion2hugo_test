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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BRSKBSW%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOLVsh%2Bv%2FU%2FUg7xy3%2FVMX1sZZ9x%2F8Xp%2B4jzseSv6GRRAiEAkS8mwHx82JPGqbs4OHEZWGzsL1fP2M2VaU6GtF0pSf0q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDI%2F2oW0W4UGHwcAq1SrcAxGlR9XB9IgYIdTUD45m2MWmJhfR1t2pJK5nQdvd%2FwNHmVQFT25bEb2nXa6KsMrifhF%2BviiVfRmherancfkgujEyhosUM%2BlQSoYmEF9eAZrGd0xnpocSU8O46WgmwtEgHmjdh1KYKievgPDjYj5GpESp1ApJKUF3RqsrxvYJV%2FGAiJFjdRcjZjrd6%2Bn4iISgSEociE3WC%2BaAPPR%2B3DoLdT9oiE5TfCmHP91%2FahdcK3shsYG1weA1woJz0c2xfp%2FhmlmKJh1USg8wnZJwmoichAS03yv%2FtE5hh2okrZP%2BOJnQiQzmbaASQyMAYtYdfC3r17aJR8kxvTU13a0crV60HDbz0XREUjNjPVAzs%2BemUySvGDC%2FiZ3inlREXvxvnaXGShsUfSEz%2BlT3IaEzoMgMPlv6%2BylTrv1ZwjoT6oaDFrS3stiOyi9zi6zYpThnnzSIm01f3U0pJZEXQCJ2uAxHTySpUjVZZC1toNX1RsZZuWTlEQtQWCwz8eXVKODipSaRfIEV2MxQGf0B%2BN6ATY%2FhAEiJDjdg1DsekG3ptWABv2nfhSwfDZHq1tzovG80MCuD5J%2Bz8X03UkgZMCYPZaw2uz9QJuQjXD7Vf53sTAcnzvEBeNQ12RPEnBRg6py8MOz4mb8GOqUBZE8%2BQX%2F0rPzc0ZnZUhpPiLdp7VisIBNdpgF9iGlXCIsJ6c2kW8onlqqXFCEINIIE1P3X%2Fq9RsY7z6ogPVM6lVOB9BTk1Fg1et2RcjULTCln1QyrNyeBdJM2%2F43FJn47BfoEVxeeK510mPZ3C1tKyxPH0Px4HCRWowwN2sHS8OeuHnC%2FdESO1S1O2B1owjTlTkPlE0yV2N6pSEnF6J8VpLyLet%2FQB&X-Amz-Signature=bbbc0b1854dac49e4349ec9af2bea69465f02c46cb5b326bb06d10e7add34c24&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BRSKBSW%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOLVsh%2Bv%2FU%2FUg7xy3%2FVMX1sZZ9x%2F8Xp%2B4jzseSv6GRRAiEAkS8mwHx82JPGqbs4OHEZWGzsL1fP2M2VaU6GtF0pSf0q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDI%2F2oW0W4UGHwcAq1SrcAxGlR9XB9IgYIdTUD45m2MWmJhfR1t2pJK5nQdvd%2FwNHmVQFT25bEb2nXa6KsMrifhF%2BviiVfRmherancfkgujEyhosUM%2BlQSoYmEF9eAZrGd0xnpocSU8O46WgmwtEgHmjdh1KYKievgPDjYj5GpESp1ApJKUF3RqsrxvYJV%2FGAiJFjdRcjZjrd6%2Bn4iISgSEociE3WC%2BaAPPR%2B3DoLdT9oiE5TfCmHP91%2FahdcK3shsYG1weA1woJz0c2xfp%2FhmlmKJh1USg8wnZJwmoichAS03yv%2FtE5hh2okrZP%2BOJnQiQzmbaASQyMAYtYdfC3r17aJR8kxvTU13a0crV60HDbz0XREUjNjPVAzs%2BemUySvGDC%2FiZ3inlREXvxvnaXGShsUfSEz%2BlT3IaEzoMgMPlv6%2BylTrv1ZwjoT6oaDFrS3stiOyi9zi6zYpThnnzSIm01f3U0pJZEXQCJ2uAxHTySpUjVZZC1toNX1RsZZuWTlEQtQWCwz8eXVKODipSaRfIEV2MxQGf0B%2BN6ATY%2FhAEiJDjdg1DsekG3ptWABv2nfhSwfDZHq1tzovG80MCuD5J%2Bz8X03UkgZMCYPZaw2uz9QJuQjXD7Vf53sTAcnzvEBeNQ12RPEnBRg6py8MOz4mb8GOqUBZE8%2BQX%2F0rPzc0ZnZUhpPiLdp7VisIBNdpgF9iGlXCIsJ6c2kW8onlqqXFCEINIIE1P3X%2Fq9RsY7z6ogPVM6lVOB9BTk1Fg1et2RcjULTCln1QyrNyeBdJM2%2F43FJn47BfoEVxeeK510mPZ3C1tKyxPH0Px4HCRWowwN2sHS8OeuHnC%2FdESO1S1O2B1owjTlTkPlE0yV2N6pSEnF6J8VpLyLet%2FQB&X-Amz-Signature=9714686f660235da6023e5eaadceca9c26b8e967638b49af693303c5ded60a01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
