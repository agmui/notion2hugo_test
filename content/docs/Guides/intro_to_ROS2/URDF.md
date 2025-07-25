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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX3SJET6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICM0vXrpz72KxwHXzfVHu8QH%2BPB3ICDqgkaS5%2FRYIdh0AiEA3x2oZS1TkDLkGVaLhMbt0QqbFZyBvF5qwiNqng6IVDMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFfL7431k9j%2FziFCwCrcA4h6HjQH%2BCFuHzoasOzOqpMZPKhBi36a1NKeI5PkR4a81qTKajOK3AVG8onV6o%2B2Zj5%2FLR%2Bk1ppBBvCZWIrY0Vfx8E5e6D9hDsOePw%2F0F1DvOIvFYD%2BkBOXpAtIT1edp2%2F6O6NPum%2Bns3pA2d5potRFnb2c%2F6hS0Dxv0diDSJMiVzS%2BP0Y16LXTTXUgERIDGw0cFmUV5i3UrRKwKG5AnNoZVawKXoveexD1ihdSOrmBD4BG9KEpX7cXIvTP%2Bd460bnSxl1SKkA9L%2BWitnwdsLXNjTQPqTqQIBpIjEN4Me9fo0Eu7KgVv3A%2BSEPXYEd9fqIXq61AYuz20NrXb%2F6OYGGqvQwbNkENPIyAT1XE%2BzYD9dhVjzvP9gVazi8ifTnhnkHxLB0Mb7LRnAM6WkIXNf%2Fv5LS6eqhdEf11Y5KJ0oucoNkWwxN5cKsl4jhNT501JhHZ22d7BZ2%2FvNcvPjI6M3m3ahrxP%2BItQdeym0eMzVlJCpO19QdIWBPpqXSAR43ZdIf4hqCUmebJT3DrOTsf%2BhnDgnAS2FBuiialMyNB2buEF%2Fl1VPExbO665eZ%2B61rtrirG%2BuqAfRbCpFDJOq2xaNaNAFstKA0NiBqGbYH3ZSOpCgQeflxYqrRHOlvq%2FMLj4i8QGOqUBq9m2EZhOg3lj%2FByru2D4l9%2Bq5p3MNGGRnzY%2BqRjc%2FBPnxmTun0kOoWs2fX88jYB22QDHFfYKSKonFTIHJw2vF1supGtcJYlHQuUCSAJXJmK4ZYCKkMxZKKXtPuALaH%2FH83mAhNHNFIq2%2BKUbT0gqe5n1Qg0GZWgI2yGA57iMCeKKBDYjMDPuYBDZMAyQHzC9sIJgIIrMLMIPFp%2B4fO7DXfCtuZSN&X-Amz-Signature=204d12b7c95732af3af4d043b3bcc640826b0445a7ce2cc6c444a75e3b262f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX3SJET6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICM0vXrpz72KxwHXzfVHu8QH%2BPB3ICDqgkaS5%2FRYIdh0AiEA3x2oZS1TkDLkGVaLhMbt0QqbFZyBvF5qwiNqng6IVDMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFfL7431k9j%2FziFCwCrcA4h6HjQH%2BCFuHzoasOzOqpMZPKhBi36a1NKeI5PkR4a81qTKajOK3AVG8onV6o%2B2Zj5%2FLR%2Bk1ppBBvCZWIrY0Vfx8E5e6D9hDsOePw%2F0F1DvOIvFYD%2BkBOXpAtIT1edp2%2F6O6NPum%2Bns3pA2d5potRFnb2c%2F6hS0Dxv0diDSJMiVzS%2BP0Y16LXTTXUgERIDGw0cFmUV5i3UrRKwKG5AnNoZVawKXoveexD1ihdSOrmBD4BG9KEpX7cXIvTP%2Bd460bnSxl1SKkA9L%2BWitnwdsLXNjTQPqTqQIBpIjEN4Me9fo0Eu7KgVv3A%2BSEPXYEd9fqIXq61AYuz20NrXb%2F6OYGGqvQwbNkENPIyAT1XE%2BzYD9dhVjzvP9gVazi8ifTnhnkHxLB0Mb7LRnAM6WkIXNf%2Fv5LS6eqhdEf11Y5KJ0oucoNkWwxN5cKsl4jhNT501JhHZ22d7BZ2%2FvNcvPjI6M3m3ahrxP%2BItQdeym0eMzVlJCpO19QdIWBPpqXSAR43ZdIf4hqCUmebJT3DrOTsf%2BhnDgnAS2FBuiialMyNB2buEF%2Fl1VPExbO665eZ%2B61rtrirG%2BuqAfRbCpFDJOq2xaNaNAFstKA0NiBqGbYH3ZSOpCgQeflxYqrRHOlvq%2FMLj4i8QGOqUBq9m2EZhOg3lj%2FByru2D4l9%2Bq5p3MNGGRnzY%2BqRjc%2FBPnxmTun0kOoWs2fX88jYB22QDHFfYKSKonFTIHJw2vF1supGtcJYlHQuUCSAJXJmK4ZYCKkMxZKKXtPuALaH%2FH83mAhNHNFIq2%2BKUbT0gqe5n1Qg0GZWgI2yGA57iMCeKKBDYjMDPuYBDZMAyQHzC9sIJgIIrMLMIPFp%2B4fO7DXfCtuZSN&X-Amz-Signature=c159f7f1e6d1a096fb58450137b41e20d9cf7142567113d9881b1b3a4d6bc96b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
