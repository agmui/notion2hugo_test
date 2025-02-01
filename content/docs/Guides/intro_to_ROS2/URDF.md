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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GT4VTA3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICegVrMeQ8%2FKZQo7hvnCuHoI6rCrpU8sE2%2B5Pm92j4xOAiEAiOCxxDR%2BoemY7IB0r9ZK%2FyulM2AdL1MJQCuwt9uREdcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF56Xxbm7tMYIXgVwCrcA6Taf18dx4eiCGldl1%2BOF7eMmSEafZSdsVD95fNbbeqByghMmQUjwtFRpshRBTIkcds1Y3lO3zHAK68tlRlKfBNPd8fsLLZ%2BPtvCQL5ht9G4y82VJlUBY1shtMkQMln2ABRR53N4KNojerDxOanOhGYDOcj6O8vQW1bi0JgMnZk77j5Z0DY7FBLfYjUaau2s3Zlhv7aiXYv71P9Uh2UPYH9fuDwNZXkiWOBFweC9i%2B73LywkiaqqJ20jBQCwbvm7n8dZ%2F3Sf85tZTv%2Fri27eXG6yh5QCYm%2FHZbqgwwMUarPtpm%2Bf1DvaKjd2GevrWLKmAjpMGC12vms6yc9pKlBxT7Fv95XZ8jUh0bHcXhxg3cWT44G%2FkQrMcIpt2%2BIkILLW58mbRhKSF2pHXhbU%2BHiuuIPhzCPaD2J1v8OWAIkrUVk8cHECxsQqteL83bz27yUQ48qPRiwLMl5yvWf7Ze%2FMBnnUZo6ltFW%2Bfn6EWZjWICPFUOKsDxqi9LJpNuDRczjH%2FUFWy1tVdbzaughQzcVHOxZMGhSyZQ0MWUdJ5%2F9o7k1XCepAK0WCTBnT7A8CuR%2F%2B8SNstO7r5PeB8Ii1InXGloCEYRxHSg8VB9Y3%2B6UTVx9q9UXnNGLVNkRLCdnzMOL4%2BbwGOqUB09g9EyddGOm%2ByO5CvzSkmL85pUk15CKRHsqBV15gey8qQDT%2FwVPYaODTcMKE3JV2A6J66VVrtkWtYO2rTtcGVQnKxUUvQlqLLFkI%2Bh%2Feu1ZdeI4v%2FK6sP%2FmGhP%2B2Jnhyez5bepYoRsX294mJdiXmeR%2B%2BVmezklvb1XGABZVEEb5BEb9lxR1zLWYj3Z2AlxXRa5grBwH30uQb%2BW1yRtfnpbxzkByP&X-Amz-Signature=bc89cd2924a2c2c89c3997c2da4b985902e51397d1a3b6d6628662848b35f262&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GT4VTA3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICegVrMeQ8%2FKZQo7hvnCuHoI6rCrpU8sE2%2B5Pm92j4xOAiEAiOCxxDR%2BoemY7IB0r9ZK%2FyulM2AdL1MJQCuwt9uREdcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF56Xxbm7tMYIXgVwCrcA6Taf18dx4eiCGldl1%2BOF7eMmSEafZSdsVD95fNbbeqByghMmQUjwtFRpshRBTIkcds1Y3lO3zHAK68tlRlKfBNPd8fsLLZ%2BPtvCQL5ht9G4y82VJlUBY1shtMkQMln2ABRR53N4KNojerDxOanOhGYDOcj6O8vQW1bi0JgMnZk77j5Z0DY7FBLfYjUaau2s3Zlhv7aiXYv71P9Uh2UPYH9fuDwNZXkiWOBFweC9i%2B73LywkiaqqJ20jBQCwbvm7n8dZ%2F3Sf85tZTv%2Fri27eXG6yh5QCYm%2FHZbqgwwMUarPtpm%2Bf1DvaKjd2GevrWLKmAjpMGC12vms6yc9pKlBxT7Fv95XZ8jUh0bHcXhxg3cWT44G%2FkQrMcIpt2%2BIkILLW58mbRhKSF2pHXhbU%2BHiuuIPhzCPaD2J1v8OWAIkrUVk8cHECxsQqteL83bz27yUQ48qPRiwLMl5yvWf7Ze%2FMBnnUZo6ltFW%2Bfn6EWZjWICPFUOKsDxqi9LJpNuDRczjH%2FUFWy1tVdbzaughQzcVHOxZMGhSyZQ0MWUdJ5%2F9o7k1XCepAK0WCTBnT7A8CuR%2F%2B8SNstO7r5PeB8Ii1InXGloCEYRxHSg8VB9Y3%2B6UTVx9q9UXnNGLVNkRLCdnzMOL4%2BbwGOqUB09g9EyddGOm%2ByO5CvzSkmL85pUk15CKRHsqBV15gey8qQDT%2FwVPYaODTcMKE3JV2A6J66VVrtkWtYO2rTtcGVQnKxUUvQlqLLFkI%2Bh%2Feu1ZdeI4v%2FK6sP%2FmGhP%2B2Jnhyez5bepYoRsX294mJdiXmeR%2B%2BVmezklvb1XGABZVEEb5BEb9lxR1zLWYj3Z2AlxXRa5grBwH30uQb%2BW1yRtfnpbxzkByP&X-Amz-Signature=92257207b40b00324ebe2769336aac0912f1708cd30e43be95252ed8fac04c7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
