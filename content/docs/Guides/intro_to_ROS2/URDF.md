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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7XKA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaW%2Fn1dwdR9o7czGD%2F0tUfgeiyByP%2BaS0dZkOoEKFPLwIhAIUdxBcpm0q8lelOyNF7bz0fqY3cHDjWHBbxaBtIx3t0KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOhOwo3iunszSWy4q3APzToovKim%2F3g%2FbfzFYdeO5zjIr%2FIE50usbOl0nzwpQVP%2BCaShLXP%2FwfPufr%2B652SgB9NeYtiOhMqPngM7ZYvFqIMxHLJFv2z1pZ%2BmwGgC7l9q0EBKtwb9W7qbNQBvjqDAtZd8OnpcfyHziSJPOa6HWl6wlcZNaQdN0L%2BScvJaI4U%2BQZJcla2YIMPR4wn%2BQbDwlV2wOh9MWz6RyzMPmU2IEU9EC12vvoZLuyoVoY8Q6FQxXpAU%2FsRJB36vDE8Hdl%2FV27jiSHO3c3L7DJntuC2RsmFVPETT6nUolxnyHCp9T7e54jb%2BAfSfU5%2BnD7CRNSS93P2bRqsVIcFAYsdhv5sRb0pbq24WKKGVhCrP5sw7bpZMVfkpDshjGBCqLH7YvLOWTCeUitlEWTdFa0bZgL2WGZNHW17Ma%2FmRhuX37vQiiBadHUm5FwP9VZ%2FkAUUYrxiFEtpUgCfqFVFgDyBftGngshP4Or4Y79djs%2Bvl%2B8ayG62w4pi8dUTabCSEu5XA5%2FuwqTBKx3otJUbFU93gZ8tN39L9Z5VN5FI6aj%2FjV3sbfYqA6WEXJM2XNsmf4FEXVCqlKs0Wy7J1XZW%2B5CsFvJuoS%2FSEkSFQMjWkNe8qXIVmV27YTuuQHq6ZU9cBYxjDTt9fEBjqkARCOBq13uukAThxLa5dxx7v32u3Ehc9A5Y5DUXVtvOGIuQOJ3ZCrsDj6gTVdTecG4Rhn%2BFLDfAtus6aPjxtVI4Y1eyIABNatvsigwLOMnX2FxSIclt5WsIze0TkVakrH%2BefKCPJaRMN6k9hBAAcO0H64osYQAxio3lBBsM5tds9CvEpS%2B2cJUagaZY5dNb1aAnrhoCZjtEcOSxIX2m9g9b2%2FIbrP&X-Amz-Signature=a0fb432e696a81345e34e5837ad40a89def36e69e1a9620c75ec92678d334c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7XKA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaW%2Fn1dwdR9o7czGD%2F0tUfgeiyByP%2BaS0dZkOoEKFPLwIhAIUdxBcpm0q8lelOyNF7bz0fqY3cHDjWHBbxaBtIx3t0KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOhOwo3iunszSWy4q3APzToovKim%2F3g%2FbfzFYdeO5zjIr%2FIE50usbOl0nzwpQVP%2BCaShLXP%2FwfPufr%2B652SgB9NeYtiOhMqPngM7ZYvFqIMxHLJFv2z1pZ%2BmwGgC7l9q0EBKtwb9W7qbNQBvjqDAtZd8OnpcfyHziSJPOa6HWl6wlcZNaQdN0L%2BScvJaI4U%2BQZJcla2YIMPR4wn%2BQbDwlV2wOh9MWz6RyzMPmU2IEU9EC12vvoZLuyoVoY8Q6FQxXpAU%2FsRJB36vDE8Hdl%2FV27jiSHO3c3L7DJntuC2RsmFVPETT6nUolxnyHCp9T7e54jb%2BAfSfU5%2BnD7CRNSS93P2bRqsVIcFAYsdhv5sRb0pbq24WKKGVhCrP5sw7bpZMVfkpDshjGBCqLH7YvLOWTCeUitlEWTdFa0bZgL2WGZNHW17Ma%2FmRhuX37vQiiBadHUm5FwP9VZ%2FkAUUYrxiFEtpUgCfqFVFgDyBftGngshP4Or4Y79djs%2Bvl%2B8ayG62w4pi8dUTabCSEu5XA5%2FuwqTBKx3otJUbFU93gZ8tN39L9Z5VN5FI6aj%2FjV3sbfYqA6WEXJM2XNsmf4FEXVCqlKs0Wy7J1XZW%2B5CsFvJuoS%2FSEkSFQMjWkNe8qXIVmV27YTuuQHq6ZU9cBYxjDTt9fEBjqkARCOBq13uukAThxLa5dxx7v32u3Ehc9A5Y5DUXVtvOGIuQOJ3ZCrsDj6gTVdTecG4Rhn%2BFLDfAtus6aPjxtVI4Y1eyIABNatvsigwLOMnX2FxSIclt5WsIze0TkVakrH%2BefKCPJaRMN6k9hBAAcO0H64osYQAxio3lBBsM5tds9CvEpS%2B2cJUagaZY5dNb1aAnrhoCZjtEcOSxIX2m9g9b2%2FIbrP&X-Amz-Signature=82105314783fbdc85190bba351bfe467962d012df31e36fcb61937b96b69f68c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
