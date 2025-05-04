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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFM7ZKND%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDNVIUAD5wvBnffR2gg3oEZjNrwRljmw51z%2BA1mOJj%2BlwIgYKVmmhGPTyPFyLs65AxMeVr9zz6NNk2mhaNVHNLQcYEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG71rCNxEwoY5nDRByrcA5qq7lm5tNYFyneld6o55mrkULvvIl9%2BiF89DeTwoACYp5OE435v2ldZXlnOvlNLkH%2BkEG5YGkoKFX4M5G0Jn1NpEGVfYbE5aoDPX%2BBkKo66IUHc1Z5PLd2rwwngQ%2BuePDi4vhwtZ0OWlqxJ1RW5Wer9eOkdKHebguSd9oy4KqnU4UKaYBMF%2B4tBYW2Bs%2FAAZjMmIwa1NkKXifHcCvzv%2BqKkxxdLtKEvfsbzNZ7QrvGFzy5qdkc1TsWvj4tKyf6vp6n5c17U%2BJtVeN9TPTwwUGQ9nh51Sn4HYaO59DJwv0dEn7dwRYl11JCqL0U14NGmwKVQWRHy5LafYoE9DOB0UkH%2BHdcYlgTzFEVCH%2BN0K7K7xlQQ8jbUw4eggsZM3hwp%2F7mJhTLOX49Usee3Sc7%2BlrJRoEBtcqQGbX8s%2BNCD2d%2BEneTAQSCpeKPF9lBqcaB9G2lgu%2FVXbzoIKp4hrE%2Fi%2FhTUJziC9gUH3S0wY8M4A39chDl5uRMB6%2FC08qn02Yl32pTIoEfJaLfpILGdJ8WEXZf0tQlgFX0NxXCL8O90qYihD6SkH1HQSEDnKWfWC5qHZfIQGDRpWMGrXMzOrCVmahmjqwBHFKj7SFg0gWlAV%2FhTH6cf7GsrSckVy0ikMMLr28AGOqUBvJHosSJDbswAZG01Qc%2FwlMhoekQct9pARvBhv525y9akPVhLYniC39i1SaaNe8UD0eTpbXn%2FBm1SVdptnjY610DGjCptNQ9xPqs%2BcgUPqun5jOykCeVaXgCPeVgEYTmvPVID7SUykYHnyyMsXAVLpRRpwFqcak98L9LoCY5lXT9e7aLO4cGO8yF0oLK%2FpP3EHuGHD0FMynB3NE%2B5GYcN%2BtgRbO4G&X-Amz-Signature=5ab6463fc69b5fbba8fb4e1f7f1f013f5bf5a41172cdecd2eb42d786658ae594&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFM7ZKND%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDNVIUAD5wvBnffR2gg3oEZjNrwRljmw51z%2BA1mOJj%2BlwIgYKVmmhGPTyPFyLs65AxMeVr9zz6NNk2mhaNVHNLQcYEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG71rCNxEwoY5nDRByrcA5qq7lm5tNYFyneld6o55mrkULvvIl9%2BiF89DeTwoACYp5OE435v2ldZXlnOvlNLkH%2BkEG5YGkoKFX4M5G0Jn1NpEGVfYbE5aoDPX%2BBkKo66IUHc1Z5PLd2rwwngQ%2BuePDi4vhwtZ0OWlqxJ1RW5Wer9eOkdKHebguSd9oy4KqnU4UKaYBMF%2B4tBYW2Bs%2FAAZjMmIwa1NkKXifHcCvzv%2BqKkxxdLtKEvfsbzNZ7QrvGFzy5qdkc1TsWvj4tKyf6vp6n5c17U%2BJtVeN9TPTwwUGQ9nh51Sn4HYaO59DJwv0dEn7dwRYl11JCqL0U14NGmwKVQWRHy5LafYoE9DOB0UkH%2BHdcYlgTzFEVCH%2BN0K7K7xlQQ8jbUw4eggsZM3hwp%2F7mJhTLOX49Usee3Sc7%2BlrJRoEBtcqQGbX8s%2BNCD2d%2BEneTAQSCpeKPF9lBqcaB9G2lgu%2FVXbzoIKp4hrE%2Fi%2FhTUJziC9gUH3S0wY8M4A39chDl5uRMB6%2FC08qn02Yl32pTIoEfJaLfpILGdJ8WEXZf0tQlgFX0NxXCL8O90qYihD6SkH1HQSEDnKWfWC5qHZfIQGDRpWMGrXMzOrCVmahmjqwBHFKj7SFg0gWlAV%2FhTH6cf7GsrSckVy0ikMMLr28AGOqUBvJHosSJDbswAZG01Qc%2FwlMhoekQct9pARvBhv525y9akPVhLYniC39i1SaaNe8UD0eTpbXn%2FBm1SVdptnjY610DGjCptNQ9xPqs%2BcgUPqun5jOykCeVaXgCPeVgEYTmvPVID7SUykYHnyyMsXAVLpRRpwFqcak98L9LoCY5lXT9e7aLO4cGO8yF0oLK%2FpP3EHuGHD0FMynB3NE%2B5GYcN%2BtgRbO4G&X-Amz-Signature=30935507f55bae71c1f88e693133a3af9620d71b727dfbdebec185ca3927ce6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
