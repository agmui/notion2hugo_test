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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TUWEDBO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYx7akX99O5dN3jx09EjOxWTb%2FMe1kC%2Bwf9%2BNIHuStfAiEArp2xKXGUIv9QE1ZVOGwW27kdqYXwCTVWy5rCjtx2vfgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJntz6TH1YelMNBv5CrcA8BWQOxLVYlzkaw7zXpTtsdOrVALlxbymGwF8oa6HiLeTr00Gg7wWWSjX8lU7QHHTPk4K6aOpYQ%2B33OR2EHuYRZ%2FgH0PwWYu5vx7yG44A75TrVKQLWGVzzhhW17VAGl%2FL7mMH%2FwtDwhZFbsntFi8lo1Ycjiq4UJJHFhe5YM9pxne7ilHblH%2BKLg4ajYziaX3rqS7FAzbEGBYdR2hCNt7fHE%2F6cxqmHiOUOaoFK4KyvinnZQPGy7wsH4WNHMpiCGlB10uGmvvWHaSCzA%2BbOIFtZlCZ5PrW5vHa%2BUCA3%2FcXXOtXmmtLek3MKm6fpC%2BEBJZPA%2B3iz%2FQP8Oatgg%2B3DmOfnXQIFj7nTQxd4xD1Kuhr2lboNhQy80UonChZwcAIdqt5QtJpHf99QBIE6tl3Gs2QwgN%2BGTpftzAGg5kHvyUSeprDvHS0JZ5UmJ1NcOAimhUe6fLDeftDp9wtQUKLWPEGO77dgjMszupoT2kugPcR3%2BnJITp3yGa6B%2FuYX3sCxRKyjupNThjJZGRsidMASJfrDNspRXnQvqCyVPDyOflNsfCkXWaICiAefKMcaHDxZJtB%2Fh2hA%2FSrZVQ8g7oEQjOERFD4Vtc6H8BF%2FIDNELT3z%2BheRGx%2Fy2aUiScOifHMPfZj8MGOqUBma8kyhXci1qKNAtqcBtKYAczeLvrbtwh%2BhbhxOlyKB%2BUlPieqTbJvD%2BbJ7g%2FXBbmcY%2BC6otYP85HkxFKad73u26pEFhIdAkr7YbFUZ8pqLX90DHYLpUZl2h4scXXBNA67Ij2Xe9YrNup%2BeIScfwmLdtwWbjfrPbmX0A1345Lg9%2FhFcEhkQ7uaBDy24t6ig%2BNRk3q5Jx70vMEZL7554MBha%2FIHuaB&X-Amz-Signature=f5ce32438b8e1e0258ce2cb7c3696f6f0d8f9c949bb0a0bba85a3682203ee28f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TUWEDBO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYx7akX99O5dN3jx09EjOxWTb%2FMe1kC%2Bwf9%2BNIHuStfAiEArp2xKXGUIv9QE1ZVOGwW27kdqYXwCTVWy5rCjtx2vfgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJntz6TH1YelMNBv5CrcA8BWQOxLVYlzkaw7zXpTtsdOrVALlxbymGwF8oa6HiLeTr00Gg7wWWSjX8lU7QHHTPk4K6aOpYQ%2B33OR2EHuYRZ%2FgH0PwWYu5vx7yG44A75TrVKQLWGVzzhhW17VAGl%2FL7mMH%2FwtDwhZFbsntFi8lo1Ycjiq4UJJHFhe5YM9pxne7ilHblH%2BKLg4ajYziaX3rqS7FAzbEGBYdR2hCNt7fHE%2F6cxqmHiOUOaoFK4KyvinnZQPGy7wsH4WNHMpiCGlB10uGmvvWHaSCzA%2BbOIFtZlCZ5PrW5vHa%2BUCA3%2FcXXOtXmmtLek3MKm6fpC%2BEBJZPA%2B3iz%2FQP8Oatgg%2B3DmOfnXQIFj7nTQxd4xD1Kuhr2lboNhQy80UonChZwcAIdqt5QtJpHf99QBIE6tl3Gs2QwgN%2BGTpftzAGg5kHvyUSeprDvHS0JZ5UmJ1NcOAimhUe6fLDeftDp9wtQUKLWPEGO77dgjMszupoT2kugPcR3%2BnJITp3yGa6B%2FuYX3sCxRKyjupNThjJZGRsidMASJfrDNspRXnQvqCyVPDyOflNsfCkXWaICiAefKMcaHDxZJtB%2Fh2hA%2FSrZVQ8g7oEQjOERFD4Vtc6H8BF%2FIDNELT3z%2BheRGx%2Fy2aUiScOifHMPfZj8MGOqUBma8kyhXci1qKNAtqcBtKYAczeLvrbtwh%2BhbhxOlyKB%2BUlPieqTbJvD%2BbJ7g%2FXBbmcY%2BC6otYP85HkxFKad73u26pEFhIdAkr7YbFUZ8pqLX90DHYLpUZl2h4scXXBNA67Ij2Xe9YrNup%2BeIScfwmLdtwWbjfrPbmX0A1345Lg9%2FhFcEhkQ7uaBDy24t6ig%2BNRk3q5Jx70vMEZL7554MBha%2FIHuaB&X-Amz-Signature=938384cd9255b46ac50415b1196abc366e4ef5cbabe4da693afaf7923660924c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
