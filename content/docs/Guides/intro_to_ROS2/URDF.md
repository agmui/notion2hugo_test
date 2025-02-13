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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCXZ3PTX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuC5ZcEWPrIvsqPZ6hGF7uycGCCIlslQNVSAl%2F0TZe1AiArpXHdTmvPsEamEEWtD7RtT2anOs6hFFlx4HDLUgC1SCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLsuKYMdUPe4vxsNgKtwDS9cs%2Fr4lnEjP1nnDm4mD9Kq2dFUMhAjS2LaG2CUHsDP%2B8fq4AXFU8yh4%2BtIMQtZzqg4ypr%2BW38olUFTftarYQKPzwGaAvVTkiuHlLXaP8X9heIe3XjB9odPXXXx4FR2f0QD4XJnwIduxjGSBas0Ku2GKWKDCqllcxrziXxQx76uzIeiH%2F30clxgdO5%2FzTupvbkiNYBJj5Vfv3k5OtAr%2FGyNwXZ3%2B%2FCSRB89hyQR6ro0IjXkKUEveJPDk0fcNmNsglHSZ5wsAkS7lNxBAxeamcL8%2BUO3a9NhrwWgE0qxMIL2K7ckIX1ICSlgdHg0FIbsKKtumDKxEKNRpj8CAUyqTKe%2BSeQPzzhct%2BRs3SJ7Ab4tvsipzdzJ5asAtb%2FIyZUkPCeQCZiBKQwG2Sgo1bk%2BYlRPeflwTRnE%2BMwY6BwcTuUCRccvJZ2ftN%2F6lkF96kzqDYi%2FpGl7j1dCmUfw1yyPVnlsitTq8wgd6n07Lhq7kUVY7Vts90sNg9lvcZoVfylqbuE9UumbWg%2Fz6ST9vBTIQwLaIgJre9f0zbC0J%2FNl%2F0ceYidYIzLIdl7dWVd6ELdNDMn2a%2FWTVYkrAlzUrSW0alG%2BefOKRonjSJ2htwZ9xIpGFRWeDkrsOhldhJHIwko%2B2vQY6pgG4MJh7HOvmWfrTZS5ZE93gaDKK%2B8VxzDW0nn4WPUcCkGwcpr7ipP2PERUjlDyYpBigt3U8EDE9kZ%2FQkeqhbkdGQ43iju%2FGNRYqZd0d79uPfuebDQ9nJkZXKjBr8olL39tvWJkpjlRDYQcBVFDGBf6t3rYHjFV0oJZxzNq2C2uxQ0M8q8hxDw5RTPC1QolAe1lomE6mMqrBTVBo9fAhtewlzC6X1O8z&X-Amz-Signature=8a4310080f0bbe06a8c8941275ff754379e7f7469270325fd68ed204a2574e71&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCXZ3PTX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuC5ZcEWPrIvsqPZ6hGF7uycGCCIlslQNVSAl%2F0TZe1AiArpXHdTmvPsEamEEWtD7RtT2anOs6hFFlx4HDLUgC1SCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLsuKYMdUPe4vxsNgKtwDS9cs%2Fr4lnEjP1nnDm4mD9Kq2dFUMhAjS2LaG2CUHsDP%2B8fq4AXFU8yh4%2BtIMQtZzqg4ypr%2BW38olUFTftarYQKPzwGaAvVTkiuHlLXaP8X9heIe3XjB9odPXXXx4FR2f0QD4XJnwIduxjGSBas0Ku2GKWKDCqllcxrziXxQx76uzIeiH%2F30clxgdO5%2FzTupvbkiNYBJj5Vfv3k5OtAr%2FGyNwXZ3%2B%2FCSRB89hyQR6ro0IjXkKUEveJPDk0fcNmNsglHSZ5wsAkS7lNxBAxeamcL8%2BUO3a9NhrwWgE0qxMIL2K7ckIX1ICSlgdHg0FIbsKKtumDKxEKNRpj8CAUyqTKe%2BSeQPzzhct%2BRs3SJ7Ab4tvsipzdzJ5asAtb%2FIyZUkPCeQCZiBKQwG2Sgo1bk%2BYlRPeflwTRnE%2BMwY6BwcTuUCRccvJZ2ftN%2F6lkF96kzqDYi%2FpGl7j1dCmUfw1yyPVnlsitTq8wgd6n07Lhq7kUVY7Vts90sNg9lvcZoVfylqbuE9UumbWg%2Fz6ST9vBTIQwLaIgJre9f0zbC0J%2FNl%2F0ceYidYIzLIdl7dWVd6ELdNDMn2a%2FWTVYkrAlzUrSW0alG%2BefOKRonjSJ2htwZ9xIpGFRWeDkrsOhldhJHIwko%2B2vQY6pgG4MJh7HOvmWfrTZS5ZE93gaDKK%2B8VxzDW0nn4WPUcCkGwcpr7ipP2PERUjlDyYpBigt3U8EDE9kZ%2FQkeqhbkdGQ43iju%2FGNRYqZd0d79uPfuebDQ9nJkZXKjBr8olL39tvWJkpjlRDYQcBVFDGBf6t3rYHjFV0oJZxzNq2C2uxQ0M8q8hxDw5RTPC1QolAe1lomE6mMqrBTVBo9fAhtewlzC6X1O8z&X-Amz-Signature=a6af32f34aafd6ff80670c88afa3e6b6d5f175778e1f736253fa2fe0a65ca35f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
