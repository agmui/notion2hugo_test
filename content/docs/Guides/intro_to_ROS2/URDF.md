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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGU5S5FE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJCHoiH6psK6QvMuYYrDJu%2BWMH5HHewVf6z9r00lboSgIgNNUZtpQsNVX4y0bukmlFpvWlmaOrF5F4Zd9O9C4DUHsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFrhUPuOuHvqVet11SrcA%2BAgEbrJFerZT%2Bd6GEFLkjqW4gF1p6zrptvK9nwS3FqhIMQpDCnEKP1EPR99te7vKeT2OroT51NPmVT5TzOBIsPk%2FFi1BmCn9sGjlxLvSUYFceVXW18CKFgsuFQtDiDs6uzzNY9dRjoVX%2FdiPTbCNo%2FB9MjO1Z%2BVhysXWLHQwE5Yd2GrIM1D1U2h1NCpD%2FL%2Fdim5zYSbq27EhgFgXOs4%2Fe2yhD1WIkRWUniY2VjT4hWCkVQBHu2WCJD8fqvFUman31hM5b6wmYEBu1p3IZeZ0sM6I1TyAVx1zFqmPs8%2FjfqWTA9QIoPVhdu%2Biq%2B673BKscMz4UdGvEL4s8tiyCUDVdAfbTRb6A6B2adcl1vu22AT2ZbmBVb7Io1PtqSdIA5MQ8OesupjiC2ccMe7uN57C3P3%2F8vadZ%2FK3RNcjKN1BfOHjfAkXyM0I5n%2BS%2ByMK7wPlniQEdtIkV5k6%2BF5w7k45XBXFUwq3QhA%2BuUc3CdSu8SyPtJ8VzCCGMMt4h1jFDq5G%2FxHJXYQGUHrEThEhR0N1FBBDnMEjst%2FYxAsBVTQhcJXAfcqY7pwBQsUMbuQt2RZSn%2BrbA0Z1t5NqjlmbYmMQeql6fU0PkqaI626R5FqfMHrToKZQnkaE4Anq%2BFgMP3w%2BL8GOqUBepj1ue%2Bf0eJA6cuGgSreGNGlkH2gld%2F7pK0clqjMM3dJ%2BU%2Fr%2BnVA2VdnaYDc8PN9DPfH%2BV3hunGhVomUgvYU3xm%2BGHC4aPaQM85r81qthjFMcpYHQ2TIi1IAni9jP1urCwW2NdGor3OM93mYOdrA44OBtHJxms5aBPg6QYbwPh9XtSK5Uv3N6sJwvnK7ZXErTkaZO7HirhnskEvILF%2B67U23LIxd&X-Amz-Signature=3b44376d9b8608f68be7a9ae07cb171a9ed54c1b87bd8230d8627420b284c7af&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGU5S5FE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJCHoiH6psK6QvMuYYrDJu%2BWMH5HHewVf6z9r00lboSgIgNNUZtpQsNVX4y0bukmlFpvWlmaOrF5F4Zd9O9C4DUHsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFrhUPuOuHvqVet11SrcA%2BAgEbrJFerZT%2Bd6GEFLkjqW4gF1p6zrptvK9nwS3FqhIMQpDCnEKP1EPR99te7vKeT2OroT51NPmVT5TzOBIsPk%2FFi1BmCn9sGjlxLvSUYFceVXW18CKFgsuFQtDiDs6uzzNY9dRjoVX%2FdiPTbCNo%2FB9MjO1Z%2BVhysXWLHQwE5Yd2GrIM1D1U2h1NCpD%2FL%2Fdim5zYSbq27EhgFgXOs4%2Fe2yhD1WIkRWUniY2VjT4hWCkVQBHu2WCJD8fqvFUman31hM5b6wmYEBu1p3IZeZ0sM6I1TyAVx1zFqmPs8%2FjfqWTA9QIoPVhdu%2Biq%2B673BKscMz4UdGvEL4s8tiyCUDVdAfbTRb6A6B2adcl1vu22AT2ZbmBVb7Io1PtqSdIA5MQ8OesupjiC2ccMe7uN57C3P3%2F8vadZ%2FK3RNcjKN1BfOHjfAkXyM0I5n%2BS%2ByMK7wPlniQEdtIkV5k6%2BF5w7k45XBXFUwq3QhA%2BuUc3CdSu8SyPtJ8VzCCGMMt4h1jFDq5G%2FxHJXYQGUHrEThEhR0N1FBBDnMEjst%2FYxAsBVTQhcJXAfcqY7pwBQsUMbuQt2RZSn%2BrbA0Z1t5NqjlmbYmMQeql6fU0PkqaI626R5FqfMHrToKZQnkaE4Anq%2BFgMP3w%2BL8GOqUBepj1ue%2Bf0eJA6cuGgSreGNGlkH2gld%2F7pK0clqjMM3dJ%2BU%2Fr%2BnVA2VdnaYDc8PN9DPfH%2BV3hunGhVomUgvYU3xm%2BGHC4aPaQM85r81qthjFMcpYHQ2TIi1IAni9jP1urCwW2NdGor3OM93mYOdrA44OBtHJxms5aBPg6QYbwPh9XtSK5Uv3N6sJwvnK7ZXErTkaZO7HirhnskEvILF%2B67U23LIxd&X-Amz-Signature=83579496a14aab349a7bd3d6e9817a6913671a128647bbd654d3c5acf3742b7f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
