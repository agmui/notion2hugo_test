---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KCFH6I%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICSyilMT%2FKXiu3c0upUpWAVKnYwl9LH%2FBtbJEofs9QNjAiAmyupbfb%2B7rTairzP6MuaoR08RLBfY0Z%2BfewOCR%2BJR1Cr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM72lc3ipBBwJzX1WSKtwD6WvxR95afh%2FJITjh4A7ev8nzt4wGTYCert6oIX7Mtbj9Dkl0t%2BwCN4broOpb5lLADcnuvcHUw%2BpTtPkPrDD%2FaWmZWFyLyiTGToWRtI8H4xyF4ZeGEEyKAfObVnItw%2BBv69QdVyv8Y%2BquSgzMiVEtsZoeq9meLGlOJjcPP1ik0Yk8B09WXYLyn3L2aauD%2BWOOdeW5CsysYb7iwsZULs%2BZMY9AP9ZDZvFkFuxty46KqydtUJGWHo4A2QxX6nys7Bu6UraQZoSmXhslmBwCE7JOrQCgUMYgOzpTHvRidvYH8Y2YgMCfIOI2DAiPQncnDT7kyrhyTy8f819iTeMh71efB1pMM4X15YaHoyVH1zVLaWXBx9y3Z0PLyi%2FI4PSUiyHmiwG9a6bRH8Az2gDJxUD6GRIBKiX3pi22O2zKMZXc1KJ6jTnR4P7S1E1Ho2JfgMPqqjXuJANxm4NdiZBdR%2FDIAmhF8NOru%2FAO7594GZBlMs7VSYJxbV%2F8CXXrt8q6NqDXcS3nXR%2FvJs9p8gTjLgCkTFyQZw5AkcwOlNQRUJXGyGdW1%2FHZyUZ6I23V0dMDRF%2Fn0gC%2BOpIBS0BNyqNnjWb71RzNbSznNQS5X3dFHRBXPcxhTOHfgAG%2BSvdzvxswmNj%2BxAY6pgFYZf0zlm5ekEtNpHLJC7Y7hBD10MkFxu6pEsy%2BUr1%2FibQPPqy9VaEtbn%2FXcLYV75MB00pDAlK9KvjDPjYKnlh7Z8RqT%2BM09KLc1vKIEuUWpMf%2BpeybCFgpr6H%2Fkgo%2FkBDv2nJGL0IVZclAG3DHI4mrSly3wHwB%2BjsHrEp%2Fkkd8x2oig1b5S7bYFTfmQDInB3pV%2BRqoUwoNpWFaNorTkwwvBIOeQd0F&X-Amz-Signature=d0c15e9a2fd90c5682a0b7dc1c0e3fc3e7a2de95527edea7243ac2be5cf41fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KCFH6I%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICSyilMT%2FKXiu3c0upUpWAVKnYwl9LH%2FBtbJEofs9QNjAiAmyupbfb%2B7rTairzP6MuaoR08RLBfY0Z%2BfewOCR%2BJR1Cr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM72lc3ipBBwJzX1WSKtwD6WvxR95afh%2FJITjh4A7ev8nzt4wGTYCert6oIX7Mtbj9Dkl0t%2BwCN4broOpb5lLADcnuvcHUw%2BpTtPkPrDD%2FaWmZWFyLyiTGToWRtI8H4xyF4ZeGEEyKAfObVnItw%2BBv69QdVyv8Y%2BquSgzMiVEtsZoeq9meLGlOJjcPP1ik0Yk8B09WXYLyn3L2aauD%2BWOOdeW5CsysYb7iwsZULs%2BZMY9AP9ZDZvFkFuxty46KqydtUJGWHo4A2QxX6nys7Bu6UraQZoSmXhslmBwCE7JOrQCgUMYgOzpTHvRidvYH8Y2YgMCfIOI2DAiPQncnDT7kyrhyTy8f819iTeMh71efB1pMM4X15YaHoyVH1zVLaWXBx9y3Z0PLyi%2FI4PSUiyHmiwG9a6bRH8Az2gDJxUD6GRIBKiX3pi22O2zKMZXc1KJ6jTnR4P7S1E1Ho2JfgMPqqjXuJANxm4NdiZBdR%2FDIAmhF8NOru%2FAO7594GZBlMs7VSYJxbV%2F8CXXrt8q6NqDXcS3nXR%2FvJs9p8gTjLgCkTFyQZw5AkcwOlNQRUJXGyGdW1%2FHZyUZ6I23V0dMDRF%2Fn0gC%2BOpIBS0BNyqNnjWb71RzNbSznNQS5X3dFHRBXPcxhTOHfgAG%2BSvdzvxswmNj%2BxAY6pgFYZf0zlm5ekEtNpHLJC7Y7hBD10MkFxu6pEsy%2BUr1%2FibQPPqy9VaEtbn%2FXcLYV75MB00pDAlK9KvjDPjYKnlh7Z8RqT%2BM09KLc1vKIEuUWpMf%2BpeybCFgpr6H%2Fkgo%2FkBDv2nJGL0IVZclAG3DHI4mrSly3wHwB%2BjsHrEp%2Fkkd8x2oig1b5S7bYFTfmQDInB3pV%2BRqoUwoNpWFaNorTkwwvBIOeQd0F&X-Amz-Signature=9a8413b63406daa1002aeb2fefe0ea1ff131d959b8d25541fb80b2d78b1c0998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
