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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YWQZNN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAu5I9lq%2FbWudZ6nYZxj1244%2BLb2A57f5hakTDRCzRnwIhAKkuzG85rCqT70c2aN9eF6JeHzkYkggIIpafEXSTjJa7KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZdQa9cguFtNGRaPIq3ANXGOhzUFcbp2Y1RNAjPdtNTf4ArIJmbLZ1swkE3htR0dEccRpz2SLjNx3JkJ%2B90QzE%2FSu3hV8a4wEX4rzyEvFPFSj3Nv4eicfeJASWTIsA9n0dliWw5eVM6BhKz5StJ%2BRiGHuWGfchQdSpP%2BX5ReguoNP59wFLfm%2FcMKqGaSAcZpGrWeITjOR5VLfyoIn%2FDsDyWas9T1aJHwmXaTAc7mxk0GD9zrdwRidBiQc3qI3WrCUZPdP7i%2BLsx2770He%2BUn0qp3E0nUP4S%2BuUwSF%2B97Y4lkaptqhrGAGAcZirWMio9QHON7GVWsY5CAPlXCTC51lWZGA%2F9XuOcwo8q29CWiEXDsDrwuOABZBNaI71JDNykfn%2FMH%2BfWOJNdRbebO03d2S9zVbesMCLzHLH9V8CrCOwhX%2Bk7Yaf9GwAZ6iLt1gK9JItrusWRYsU5Gibp5ioC%2FaBo5g62jNnGJ9b3CPZtFyYH3Inl6xHIm1StFulzK%2Bu58lwyt1lV%2Fs2TgpKb31nN7t8SkB%2BTYwZ4Qf7wRkImS3yeZuZqsj1R4LKqS0X7DVcADYC147Y03KqjW%2F5GhvMZEhIWKsORS%2FAk5Rw6OuMokR%2FxzkQlMX4l42ux6GminPzfz7n5IIy9rql103kVjD6%2BaW9BjqkAQn2Dm%2BW0pQq51g3Wji2QmuJr9sjLJc4sF7TmOqGqLcNuMi80C9NQHrSRDfe%2FvvEzd2eVROn%2FXQXoehWGyXlTbdt5bG0Xm3GCnpl162fsE3AY8CuzY33%2BwKB8xNgc77Dr3XSjQ4SHsH0nB7pcnfbKrN2GMtbvJVlu%2FHSkywLsBOxG0GrOeBdJfN1sd1gQYig9WioNtzi%2FlBIARS8FnyM4RHkkNzR&X-Amz-Signature=3fcb59fd34254c58b1c634654b35a5693c8e788c1021fe71575c6b2bea76e367&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YWQZNN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAu5I9lq%2FbWudZ6nYZxj1244%2BLb2A57f5hakTDRCzRnwIhAKkuzG85rCqT70c2aN9eF6JeHzkYkggIIpafEXSTjJa7KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZdQa9cguFtNGRaPIq3ANXGOhzUFcbp2Y1RNAjPdtNTf4ArIJmbLZ1swkE3htR0dEccRpz2SLjNx3JkJ%2B90QzE%2FSu3hV8a4wEX4rzyEvFPFSj3Nv4eicfeJASWTIsA9n0dliWw5eVM6BhKz5StJ%2BRiGHuWGfchQdSpP%2BX5ReguoNP59wFLfm%2FcMKqGaSAcZpGrWeITjOR5VLfyoIn%2FDsDyWas9T1aJHwmXaTAc7mxk0GD9zrdwRidBiQc3qI3WrCUZPdP7i%2BLsx2770He%2BUn0qp3E0nUP4S%2BuUwSF%2B97Y4lkaptqhrGAGAcZirWMio9QHON7GVWsY5CAPlXCTC51lWZGA%2F9XuOcwo8q29CWiEXDsDrwuOABZBNaI71JDNykfn%2FMH%2BfWOJNdRbebO03d2S9zVbesMCLzHLH9V8CrCOwhX%2Bk7Yaf9GwAZ6iLt1gK9JItrusWRYsU5Gibp5ioC%2FaBo5g62jNnGJ9b3CPZtFyYH3Inl6xHIm1StFulzK%2Bu58lwyt1lV%2Fs2TgpKb31nN7t8SkB%2BTYwZ4Qf7wRkImS3yeZuZqsj1R4LKqS0X7DVcADYC147Y03KqjW%2F5GhvMZEhIWKsORS%2FAk5Rw6OuMokR%2FxzkQlMX4l42ux6GminPzfz7n5IIy9rql103kVjD6%2BaW9BjqkAQn2Dm%2BW0pQq51g3Wji2QmuJr9sjLJc4sF7TmOqGqLcNuMi80C9NQHrSRDfe%2FvvEzd2eVROn%2FXQXoehWGyXlTbdt5bG0Xm3GCnpl162fsE3AY8CuzY33%2BwKB8xNgc77Dr3XSjQ4SHsH0nB7pcnfbKrN2GMtbvJVlu%2FHSkywLsBOxG0GrOeBdJfN1sd1gQYig9WioNtzi%2FlBIARS8FnyM4RHkkNzR&X-Amz-Signature=9001d0aef1fc38e72d2a0e67bc1fd4a2c19f02d22f84a60b82d55dd7541db675&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
