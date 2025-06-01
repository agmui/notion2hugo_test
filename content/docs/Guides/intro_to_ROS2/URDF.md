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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SGDWRPK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDKziAQ13lKsg%2F2EzvZzzijvdgqZxZ3fL4Oz3cbAbJg1AIhAM5n4Qzfvgs5xY7GZOXxLX0uKBZ0Z0FrsUfCkXlrk1a2KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHoRLm%2BL0xnXGPqzMq3AOx5llTj7SfIi8W2LeWVkQdJSrBSGVMH60XXf3Ynv17IVLQdreMr83yWEnUDKYmOZU3YthDDLYCmAJyi9kUZGA4mtw9Uwf9WQlSjwvQvQcWhv%2BpGzcUf%2FILiPDMnHYbjOJkXf0Fy8b3FA508dXKvHjlPIVoRc0fcKQkiTMWdf1y%2FUi0CXp0gq1%2FSfapMII30u7Yzlk3rPpS70l4FCPiNnbtr5wsCClJNbMqCaKU4sCMv21ZFRZoDK6j6qNKCbJJ0zKwO7q0WbstS0lzwkaFkQKW4KzugOfCQsogP%2BsU0HPI6jhs8MrUKL16PwG3L1BlfPfdpBohEuKbLQH84auZkr00kE6WPVYHGDIahrSFvnQ8iQpdm1UDDkqeTV2tF6%2B%2BVLdiSuCHQu3BQ4hql5c%2BtULzfO4MFGQp21dlOh4zSmuXNJn2LikYgfzq%2FlYcu%2F%2BCFWKBrDJ9XYfgpqAR50jBdiRv5UbsLE8LQ8JQFzeget2N2WcfFmxNJ%2B6BljxeCQ8EvYM6veCdhct3b%2BIxW9Ysg0EA084JSY9W%2BYZY2R0Bx7WzoW6t75nE1rEMS4UblgjeGtBST2I%2FZnyt%2BFn31C2POpwDcRN%2BIAIe5C4jN8DkCN8TD3IbeIOa188cCsGi%2BzCVv%2B7BBjqkAV9I3tQTJ1azlcfbIfidl21%2BDmMoBePDdPKYJJMF1oH40AboIPPHUE8uMkYhrfxwpoGmpS3KjCgVk7AWzw3B5mJv%2FOZfcxDMetlnY%2B59Abcd2nbo6kyTcIIiJPkeyqlVff%2Brvz2P7eGetfQtyH7JVCapnslru5SQpjcn910ce84VqS1KJfVgvHRk7i9G3Yc3LUNUvQ8qAnWhNKQZvP4spp3RflDS&X-Amz-Signature=8ae82aea7bb709ea0a3456b1b93391644e7f37586fbdf5fd511dd1916df1c40f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SGDWRPK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDKziAQ13lKsg%2F2EzvZzzijvdgqZxZ3fL4Oz3cbAbJg1AIhAM5n4Qzfvgs5xY7GZOXxLX0uKBZ0Z0FrsUfCkXlrk1a2KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHoRLm%2BL0xnXGPqzMq3AOx5llTj7SfIi8W2LeWVkQdJSrBSGVMH60XXf3Ynv17IVLQdreMr83yWEnUDKYmOZU3YthDDLYCmAJyi9kUZGA4mtw9Uwf9WQlSjwvQvQcWhv%2BpGzcUf%2FILiPDMnHYbjOJkXf0Fy8b3FA508dXKvHjlPIVoRc0fcKQkiTMWdf1y%2FUi0CXp0gq1%2FSfapMII30u7Yzlk3rPpS70l4FCPiNnbtr5wsCClJNbMqCaKU4sCMv21ZFRZoDK6j6qNKCbJJ0zKwO7q0WbstS0lzwkaFkQKW4KzugOfCQsogP%2BsU0HPI6jhs8MrUKL16PwG3L1BlfPfdpBohEuKbLQH84auZkr00kE6WPVYHGDIahrSFvnQ8iQpdm1UDDkqeTV2tF6%2B%2BVLdiSuCHQu3BQ4hql5c%2BtULzfO4MFGQp21dlOh4zSmuXNJn2LikYgfzq%2FlYcu%2F%2BCFWKBrDJ9XYfgpqAR50jBdiRv5UbsLE8LQ8JQFzeget2N2WcfFmxNJ%2B6BljxeCQ8EvYM6veCdhct3b%2BIxW9Ysg0EA084JSY9W%2BYZY2R0Bx7WzoW6t75nE1rEMS4UblgjeGtBST2I%2FZnyt%2BFn31C2POpwDcRN%2BIAIe5C4jN8DkCN8TD3IbeIOa188cCsGi%2BzCVv%2B7BBjqkAV9I3tQTJ1azlcfbIfidl21%2BDmMoBePDdPKYJJMF1oH40AboIPPHUE8uMkYhrfxwpoGmpS3KjCgVk7AWzw3B5mJv%2FOZfcxDMetlnY%2B59Abcd2nbo6kyTcIIiJPkeyqlVff%2Brvz2P7eGetfQtyH7JVCapnslru5SQpjcn910ce84VqS1KJfVgvHRk7i9G3Yc3LUNUvQ8qAnWhNKQZvP4spp3RflDS&X-Amz-Signature=5861fb93db42e84566777e7a7dd5d8b29810a7c53998cbf6a99cdecdc6d89fe7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
