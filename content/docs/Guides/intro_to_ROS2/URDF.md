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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJW46J6O%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtDNqFLElzoXMOqcayazLaYLH1v8HSDpo0L2mNFQHC5AiEArg1HO1pHEAoghKHj0JRt0QuP9T6b7wOKCc%2BFjZA1Wfcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBG3xAsNAVpt%2BsM5wSrcA3LIV9crC1QwRJhieZHJYBdAKt2WlyhxtaNFyhxWcThpLy48BJ4S6veY3bwZGrZa3yGBkZJWJjkmXjBkSNlpsGR5uFcKbKlk7AFrx7GtPdXThHK9vFnocvbP6xdXgeveCRkuJY3ihxBiTqDZV%2FWeu1BiuDY7SzEuwQWdWF4NsC3fI9BWTLySPbnrTZgvpdHilnzEMXK507ohKcrPd8MtFWgXrCRLRyf2P38p1sSOTRDau98h54tmRt16C1zHPi54y7Q98gHI4FAWp1QrJj08Cj9KApXcu%2BYpMgcsLS8rPwQAZ%2FQXVrsYB%2FzgP4%2FQ4AUlx5Q7KaVrbilEpbcuGNT1XNKUPDG2WrvZ7nGinWq1OGidNZCXo%2BmlgJH70tGk2l5nBuZ0NmnupUXDg3wsHj3b8wfgKXR34e53HWizq%2BkhDyaWlyjwzj147t3%2F0IcuAde56eRpK6%2F%2FQ5FE0I7TvwaEweYztw9b2p%2FfmrEOYFBHd%2FE2caefT%2BWXvAGQu%2FW9cSBCqZEYBTlpcLRbM7khXZLdwXBEQww0uMaU1RAHcprG3Py5YKqRhoKMAviETZtV9Rnva75%2Fuvu72uvN8HaRw1oebC0iF6r3l%2FpFmWd1MDBQh%2FIRZAw83ChxacH%2B5WoGMK7609AGOqUBmUmBLmkZ8RaS7aLN69agLKisDYdRfDGkLLEcdZGY9J0C4PtmmBZA%2Bd5%2BqvwItKWZhWh52Ds9SNBPBFk6D6UvKIVP0qoQIxde3gbf5iU%2BvqN72M91TaQNk1Dq75KEL7rM%2BNSOLqQF7eisCzdOLIBidATby7EYhgvhT6vJDC4qQEOtjFOmF940QMSsiwKC93H4G8TSLXd0p9ASoBCe6yl5Vq2NW34R&X-Amz-Signature=3aa344516ec37a692df39fee133457715ce07a782f0b2d5171b2b8c020364c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJW46J6O%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtDNqFLElzoXMOqcayazLaYLH1v8HSDpo0L2mNFQHC5AiEArg1HO1pHEAoghKHj0JRt0QuP9T6b7wOKCc%2BFjZA1Wfcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBG3xAsNAVpt%2BsM5wSrcA3LIV9crC1QwRJhieZHJYBdAKt2WlyhxtaNFyhxWcThpLy48BJ4S6veY3bwZGrZa3yGBkZJWJjkmXjBkSNlpsGR5uFcKbKlk7AFrx7GtPdXThHK9vFnocvbP6xdXgeveCRkuJY3ihxBiTqDZV%2FWeu1BiuDY7SzEuwQWdWF4NsC3fI9BWTLySPbnrTZgvpdHilnzEMXK507ohKcrPd8MtFWgXrCRLRyf2P38p1sSOTRDau98h54tmRt16C1zHPi54y7Q98gHI4FAWp1QrJj08Cj9KApXcu%2BYpMgcsLS8rPwQAZ%2FQXVrsYB%2FzgP4%2FQ4AUlx5Q7KaVrbilEpbcuGNT1XNKUPDG2WrvZ7nGinWq1OGidNZCXo%2BmlgJH70tGk2l5nBuZ0NmnupUXDg3wsHj3b8wfgKXR34e53HWizq%2BkhDyaWlyjwzj147t3%2F0IcuAde56eRpK6%2F%2FQ5FE0I7TvwaEweYztw9b2p%2FfmrEOYFBHd%2FE2caefT%2BWXvAGQu%2FW9cSBCqZEYBTlpcLRbM7khXZLdwXBEQww0uMaU1RAHcprG3Py5YKqRhoKMAviETZtV9Rnva75%2Fuvu72uvN8HaRw1oebC0iF6r3l%2FpFmWd1MDBQh%2FIRZAw83ChxacH%2B5WoGMK7609AGOqUBmUmBLmkZ8RaS7aLN69agLKisDYdRfDGkLLEcdZGY9J0C4PtmmBZA%2Bd5%2BqvwItKWZhWh52Ds9SNBPBFk6D6UvKIVP0qoQIxde3gbf5iU%2BvqN72M91TaQNk1Dq75KEL7rM%2BNSOLqQF7eisCzdOLIBidATby7EYhgvhT6vJDC4qQEOtjFOmF940QMSsiwKC93H4G8TSLXd0p9ASoBCe6yl5Vq2NW34R&X-Amz-Signature=9bedd45f086879dcc5d47ff1a7b64421fdf38469ff7937df4fbeec4e2bd7219f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
