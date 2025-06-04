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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMGWPYF%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD6aAonIX6PzpDBbvbouQsuTWuPXZIu9oE56%2BFAUEeCUAIgcQx0hi%2FElMjM3plR8GfhuKTfOqZp2TdtUAI1GCVQjZQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCukk%2BphC31BCz4vDSrcA3tHf0yxSCezuR4auJYxHgV3QllpAI6i0oQRtBDu7bpw77lOYxCgPDa%2Fqx8ADJzzRM5UYSs1ATIvW4Y72a267wUI48KU1p%2Bn9oQm7qkChiDckOrDf07n1tJSh96BVq0qyQdNJYWl9GN2ZqA3sRq3gMfr%2F%2BJqIHV%2Bftv0nY6yCorv9mcJYYk5hQfO4ng%2BGgiC%2BsPN5%2Fi3NLVfV%2F4kZhnV6nrfwrNVirwkkqkEjVQGZrEhAvBVZvv6ePfEIQ48fiN2YHrNulVLrvL4dXjx2zCKS3sBXFlztwzIxc0MunGVxrOOGRV3f8jmeOfmbEEISGISe85XfFnszjMA1ZgqeVG6i0BSxSGICWC1E7fjiVK95CjZ4Yg%2FQWeWXt4Z4YR%2BeL6n6sEQvH60P3AoVgpL8EafLT%2FebzYGcrh7jzrsCa3gYXQq7to%2FwbL6bwSXz9v4KuUXEYiGXTA3Mvq1WAtVcgDtaAQFykX6Sn9bEhthcWCyZJwTyIZbhsuBPplOvEwxau68EFMmJJuUuEhltWXybc4zrqFGvdbSrmH%2B%2BSae8XpYraFZRBUoAlhajWUpcWF1azQLg9JBQSJDkHpOEi3rnIXUUM0UUU7WbA%2FvVEUqwwqVMt%2BDVbIR7rtFPHJniLibMN%2BGgsIGOqUB%2FMWLjR9e%2B9XQrhsSEc9c8FbNfylvnJ8VUTYfNWCIGB61BSz3QyGxeRhmLAHp8i0r3PF8Rdvqod%2B4lcucQDT0BYc9vMusx4kVvlql5b%2FCF3enCGF9U602pgb1%2FMnweQmkuTNcmYUDsfXhL0uemTkaLOqtSvJBmVnq%2B77aVyi%2FHyt5BlL1ruiMbN34hkURXATj2RocSUJN7tfywLalAZmOM7xnga90&X-Amz-Signature=3425de49ec1ef97ebd637003b121096109346e27fc5ed6843b6f69b424a156eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMGWPYF%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD6aAonIX6PzpDBbvbouQsuTWuPXZIu9oE56%2BFAUEeCUAIgcQx0hi%2FElMjM3plR8GfhuKTfOqZp2TdtUAI1GCVQjZQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCukk%2BphC31BCz4vDSrcA3tHf0yxSCezuR4auJYxHgV3QllpAI6i0oQRtBDu7bpw77lOYxCgPDa%2Fqx8ADJzzRM5UYSs1ATIvW4Y72a267wUI48KU1p%2Bn9oQm7qkChiDckOrDf07n1tJSh96BVq0qyQdNJYWl9GN2ZqA3sRq3gMfr%2F%2BJqIHV%2Bftv0nY6yCorv9mcJYYk5hQfO4ng%2BGgiC%2BsPN5%2Fi3NLVfV%2F4kZhnV6nrfwrNVirwkkqkEjVQGZrEhAvBVZvv6ePfEIQ48fiN2YHrNulVLrvL4dXjx2zCKS3sBXFlztwzIxc0MunGVxrOOGRV3f8jmeOfmbEEISGISe85XfFnszjMA1ZgqeVG6i0BSxSGICWC1E7fjiVK95CjZ4Yg%2FQWeWXt4Z4YR%2BeL6n6sEQvH60P3AoVgpL8EafLT%2FebzYGcrh7jzrsCa3gYXQq7to%2FwbL6bwSXz9v4KuUXEYiGXTA3Mvq1WAtVcgDtaAQFykX6Sn9bEhthcWCyZJwTyIZbhsuBPplOvEwxau68EFMmJJuUuEhltWXybc4zrqFGvdbSrmH%2B%2BSae8XpYraFZRBUoAlhajWUpcWF1azQLg9JBQSJDkHpOEi3rnIXUUM0UUU7WbA%2FvVEUqwwqVMt%2BDVbIR7rtFPHJniLibMN%2BGgsIGOqUB%2FMWLjR9e%2B9XQrhsSEc9c8FbNfylvnJ8VUTYfNWCIGB61BSz3QyGxeRhmLAHp8i0r3PF8Rdvqod%2B4lcucQDT0BYc9vMusx4kVvlql5b%2FCF3enCGF9U602pgb1%2FMnweQmkuTNcmYUDsfXhL0uemTkaLOqtSvJBmVnq%2B77aVyi%2FHyt5BlL1ruiMbN34hkURXATj2RocSUJN7tfywLalAZmOM7xnga90&X-Amz-Signature=5ce38505fa37546ac9a05dff8c61aca6ca46dc8af95118eeecdb5535bec538ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
