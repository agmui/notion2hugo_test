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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E52GCHS%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtwz9BNVgY%2B1ffIBFQC8NPxjytqzpNpybeFBQnSTSosAIhAP1B%2BeAUoOT7J3nKPzmLYYbai%2Fv%2B8CsK8VdgaS3Ng4llKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzbgv%2B36k41VZ04j6Eq3AMvDqEowx%2Bu0qPLu6ekY6XFb83h4elcOiBl6eQi2ZrE%2FWUXy2KyDYBPy%2B6jfO%2BI0Kys6JvFoycdCa0TQE4aFZm5KAlBjOwAsU%2BxhyHbb66UlgRq8rMuXkFTAGDIGo6Tv9xM3HucDLonPL8t3Cp%2F%2FtL9XpwjPOu2aTChCxhamtsgms0tkf2jG9c4nSD9RyE6Szkd%2F4%2BGoGRHhshDe%2FGd4722Htn%2B3ImoUTCmlAZDId4GGWApPNCMeY8qSVMkArP2LZYNxZIxdkwn55NdTJyNhqZmpJrl%2BMSruEMQYAbVn5ELqDEVmIfDGa3rhRBQA3IX0F5rL6DL0eB7SkgprJi8MImVjlfTg4zu0qUu3%2B%2BKo0TUCQrB3xdBTbT0hnId8BSp8UikCZmOYNGIYbbBOcsfh23AJ%2FVqN2zc5ybg%2FAx2MQsO6cj5LWSTKXXIsdatDmRpTQPIw041zuRytbjMBAT8Bizw9lRiEIgVzGlYt4PFYesrkYLvxjOM7%2FN1eYqwYQaexaDMdGu80bXo3yIc20m%2BxPxAxjUkZV0L7TzwHxD5okegYJAhM2BZ1ZHDPaW2g6P8nLWR%2FPIfo3zfYCwOFZG5fGGhQ0vArexTSyYNcLloT7%2BDyM1anCz0xA2FCa7nEzCBy%2BjBBjqkAVci%2B4pV3N9%2BQf4IgzlyniB3JK4jF5HarTiFDwQCEKFdUPabTyuK3eeYLtb4IAefuN6Vfdd%2F2w%2B6Fw16zvoJw3QKYVX4cx%2BJn%2FHeYRJduh7pF%2FZItlj%2Fsc9Bv1qN7moJ343ZMP9coZ5yMRBHj6FirynOx0viW8yPWQYpiLFPbEQepINuBCZUC9RZ4gilIkuxIBO9F9e6sG%2BK6Ir3YfQQxI2Np6I%2F&X-Amz-Signature=7ce426c8d258c5d5c797fe6dbd354bcc0a332cb9f50d34f60fab64e606c6f430&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E52GCHS%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtwz9BNVgY%2B1ffIBFQC8NPxjytqzpNpybeFBQnSTSosAIhAP1B%2BeAUoOT7J3nKPzmLYYbai%2Fv%2B8CsK8VdgaS3Ng4llKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzbgv%2B36k41VZ04j6Eq3AMvDqEowx%2Bu0qPLu6ekY6XFb83h4elcOiBl6eQi2ZrE%2FWUXy2KyDYBPy%2B6jfO%2BI0Kys6JvFoycdCa0TQE4aFZm5KAlBjOwAsU%2BxhyHbb66UlgRq8rMuXkFTAGDIGo6Tv9xM3HucDLonPL8t3Cp%2F%2FtL9XpwjPOu2aTChCxhamtsgms0tkf2jG9c4nSD9RyE6Szkd%2F4%2BGoGRHhshDe%2FGd4722Htn%2B3ImoUTCmlAZDId4GGWApPNCMeY8qSVMkArP2LZYNxZIxdkwn55NdTJyNhqZmpJrl%2BMSruEMQYAbVn5ELqDEVmIfDGa3rhRBQA3IX0F5rL6DL0eB7SkgprJi8MImVjlfTg4zu0qUu3%2B%2BKo0TUCQrB3xdBTbT0hnId8BSp8UikCZmOYNGIYbbBOcsfh23AJ%2FVqN2zc5ybg%2FAx2MQsO6cj5LWSTKXXIsdatDmRpTQPIw041zuRytbjMBAT8Bizw9lRiEIgVzGlYt4PFYesrkYLvxjOM7%2FN1eYqwYQaexaDMdGu80bXo3yIc20m%2BxPxAxjUkZV0L7TzwHxD5okegYJAhM2BZ1ZHDPaW2g6P8nLWR%2FPIfo3zfYCwOFZG5fGGhQ0vArexTSyYNcLloT7%2BDyM1anCz0xA2FCa7nEzCBy%2BjBBjqkAVci%2B4pV3N9%2BQf4IgzlyniB3JK4jF5HarTiFDwQCEKFdUPabTyuK3eeYLtb4IAefuN6Vfdd%2F2w%2B6Fw16zvoJw3QKYVX4cx%2BJn%2FHeYRJduh7pF%2FZItlj%2Fsc9Bv1qN7moJ343ZMP9coZ5yMRBHj6FirynOx0viW8yPWQYpiLFPbEQepINuBCZUC9RZ4gilIkuxIBO9F9e6sG%2BK6Ir3YfQQxI2Np6I%2F&X-Amz-Signature=c5cb5471effbfc64f4ea41a538b6f6ff03598fe81433b1ed23e444cc74bc922c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
