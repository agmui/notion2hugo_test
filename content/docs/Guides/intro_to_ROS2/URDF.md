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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIOWX457%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJnXkTm7OfE63C7wVypO3mkqQaVLeAKKJHMH3KAdU1KQIgGNJ0ItQplkzyVo6yr%2FXhkREBBLVunBCJA8r2Qc%2FHq8wqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F4HvVUE3VRdUwE%2BCrcA9vWGZHcsGwbEJtpJNhTICmMMoXn9rMEYLa3ytJy7ysdZIi97k87Py9HvBojfGga49AD1bJXnbT%2FxeFrP4bVQqsco3%2Fr2OWu9pCZjQufwPZ0k4IRC6yMcyhC0UNL4QqJkY5WBNeJnadxsGh6Mf%2FQNXWZw08TzcLKxeDcTADsSNuEg1AOgLSvRh5gCRqWMZp6P9CQkPk73Sjarvmu69IxtazUP3OTvjkLPimvZHJ9n%2BGzlZK0IsxssAG%2BHfIAWIDdBUF04TOT5wWzzEbT0yIGII35ZctaodSjVRWFSjcFd29KidxOneA4i9E26hZ5GmXYKqY6BRQ5u2Y77rpkmKooHFdgFYJtQfwqJUcvUi5HHC6vwq1c%2BXi2zePFGNHbjTops%2B3cVmVvNkZC1hh34DTHJHubt2uDM2H976uUzFmpHGpgfjTed8y0EOv1e94qy1RZAnhAtMFY6H%2FXXMOZYX80zU4tJuQaLTo5lZGlh5bItkMBi4%2Fv%2B4Nn4Vn8Trb1qisCYMLu5VbRNISDC3pEHx9otis8BdrH6d5MSf5uyaruRFJQzVR6Qc1DNqgnSrqcvI1jsWHH0oXcDkDgrzOWZN5J9JlKUAqDtblUdl0hWFY4cknL2A1Ij%2BCHM1%2Bffmg5MK6CpcIGOqUBYugm07lGsszm4Y8X2ukl7kAjX4UfdKlCGrLK9LOAxA911WkPvvAeQFGIvF3DcZ7CQcQcHHycGuUGstKHQ53S9Q1LIVv6uulhIi0%2BWDD%2BlIaaJxPRN2tHETY%2BzefeKO12%2Fi55x%2FQBQqBSJXSCq69FMuF2pJmVZFUi5hCJEhyYimmFiIo7Oea%2FYnhrymPhzbw%2BS%2FQr2RH5GB%2B8jqat61%2Bl%2BzdtytVt&X-Amz-Signature=937f1d8104e787eeeb4ee88ab9d58f866d2192745cde1f4efdf542ff6ef532fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIOWX457%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJnXkTm7OfE63C7wVypO3mkqQaVLeAKKJHMH3KAdU1KQIgGNJ0ItQplkzyVo6yr%2FXhkREBBLVunBCJA8r2Qc%2FHq8wqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F4HvVUE3VRdUwE%2BCrcA9vWGZHcsGwbEJtpJNhTICmMMoXn9rMEYLa3ytJy7ysdZIi97k87Py9HvBojfGga49AD1bJXnbT%2FxeFrP4bVQqsco3%2Fr2OWu9pCZjQufwPZ0k4IRC6yMcyhC0UNL4QqJkY5WBNeJnadxsGh6Mf%2FQNXWZw08TzcLKxeDcTADsSNuEg1AOgLSvRh5gCRqWMZp6P9CQkPk73Sjarvmu69IxtazUP3OTvjkLPimvZHJ9n%2BGzlZK0IsxssAG%2BHfIAWIDdBUF04TOT5wWzzEbT0yIGII35ZctaodSjVRWFSjcFd29KidxOneA4i9E26hZ5GmXYKqY6BRQ5u2Y77rpkmKooHFdgFYJtQfwqJUcvUi5HHC6vwq1c%2BXi2zePFGNHbjTops%2B3cVmVvNkZC1hh34DTHJHubt2uDM2H976uUzFmpHGpgfjTed8y0EOv1e94qy1RZAnhAtMFY6H%2FXXMOZYX80zU4tJuQaLTo5lZGlh5bItkMBi4%2Fv%2B4Nn4Vn8Trb1qisCYMLu5VbRNISDC3pEHx9otis8BdrH6d5MSf5uyaruRFJQzVR6Qc1DNqgnSrqcvI1jsWHH0oXcDkDgrzOWZN5J9JlKUAqDtblUdl0hWFY4cknL2A1Ij%2BCHM1%2Bffmg5MK6CpcIGOqUBYugm07lGsszm4Y8X2ukl7kAjX4UfdKlCGrLK9LOAxA911WkPvvAeQFGIvF3DcZ7CQcQcHHycGuUGstKHQ53S9Q1LIVv6uulhIi0%2BWDD%2BlIaaJxPRN2tHETY%2BzefeKO12%2Fi55x%2FQBQqBSJXSCq69FMuF2pJmVZFUi5hCJEhyYimmFiIo7Oea%2FYnhrymPhzbw%2BS%2FQr2RH5GB%2B8jqat61%2Bl%2BzdtytVt&X-Amz-Signature=8a27e4153a19c49522a07d76be8e612b7bfe7ec4ad1b101099e8426b9abf26cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
