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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RV46CDV%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFL%2Fu8iMTWWD2PFks%2B1a9yZNuDTEUxxHRyzeyO2ppEAwIhAMlXB1kvxQvs4kKCisZpn443wcXCLLH8HL7vpQaY5eqJKv8DCFIQABoMNjM3NDIzMTgzODA1IgzojVPsJa38wvCEmWoq3AMIt1HXmvJNBTbknR3A9zuSpN1ezeteCixgdJsLR2n1a182PbVsu%2BO3Q7sHxHDr2Ihpd4WuUiqO28b4lvb6prywiMFaAJTO7Gvn8IGh3QaiuiR8IBCvF%2Bbu0RTksHMIFvPPp0Jw65xNUGohv5sH%2FDvYG2ETfDZhpxg1ZQddYNKv2loXcYwO1yMmwmWXjn%2Fdpwvszq%2BruWebVWc84u6tkLwYHw%2F%2FdaKkW6thgr9z5O3f13P1KnKSRAh9XKIRc%2F8DtfzFYNQPfVzF3lKcX%2FX5%2FPu5%2Fv2BXC8lYoRyeDgBnkLFO9i6cjadE82f3WYd3yYfJuzCnEN6nU6mLeBEnoHjB2NIfz3P9E9KoGfULdk5MGwpH27NcMNINqj2%2Fpk3HTczxqSAJv18z3naLNfKyCtHZbo5D%2BpLq8Pk%2BmZCjDtkb2UyXdimmnn3GO8zNaiJTBAfT2vs2fFhyUuuU7Gtc9ygY3oqsgwEWcDmoGkcFwzb6K0%2FLBJbWDqXBMRQSTiOpKMPGsiZJGqI2UF6zRPG7hEHj3HKvfK16gBDBWXLlTwzlovq5vC%2FdWtZ4xThtaELjlrQrbyQe88pRdWMWQ8M7SKvH23IHvj8gEK37ghDJTzbkqXRa85HRjbbUEctNN8w1DDQn%2BvHBjqkAePyMriu%2FVOTAAnbp1p9%2B1t8PCsibhjYsVLGyBrenIRwEEhCvm7MRkVFiY4qBgs6HVSHbxr0GFVxKGSj2asu9S69msg8cROKhfbOLkn9%2BmRlaqG6XFLDNTQhlip%2FDPCo3K5%2Buel0A77sRfXa95GHEZhfqnErmNsyDVWP9IispuS6CL9kdUnLCERyRpF4xL%2FBlsieuAnjde%2FdSlhi8eWFexnpd%2BXK&X-Amz-Signature=bbe89af5550d75577aaaafe696356c5d2390a9b3c315104f1ad013481465a5fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RV46CDV%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFL%2Fu8iMTWWD2PFks%2B1a9yZNuDTEUxxHRyzeyO2ppEAwIhAMlXB1kvxQvs4kKCisZpn443wcXCLLH8HL7vpQaY5eqJKv8DCFIQABoMNjM3NDIzMTgzODA1IgzojVPsJa38wvCEmWoq3AMIt1HXmvJNBTbknR3A9zuSpN1ezeteCixgdJsLR2n1a182PbVsu%2BO3Q7sHxHDr2Ihpd4WuUiqO28b4lvb6prywiMFaAJTO7Gvn8IGh3QaiuiR8IBCvF%2Bbu0RTksHMIFvPPp0Jw65xNUGohv5sH%2FDvYG2ETfDZhpxg1ZQddYNKv2loXcYwO1yMmwmWXjn%2Fdpwvszq%2BruWebVWc84u6tkLwYHw%2F%2FdaKkW6thgr9z5O3f13P1KnKSRAh9XKIRc%2F8DtfzFYNQPfVzF3lKcX%2FX5%2FPu5%2Fv2BXC8lYoRyeDgBnkLFO9i6cjadE82f3WYd3yYfJuzCnEN6nU6mLeBEnoHjB2NIfz3P9E9KoGfULdk5MGwpH27NcMNINqj2%2Fpk3HTczxqSAJv18z3naLNfKyCtHZbo5D%2BpLq8Pk%2BmZCjDtkb2UyXdimmnn3GO8zNaiJTBAfT2vs2fFhyUuuU7Gtc9ygY3oqsgwEWcDmoGkcFwzb6K0%2FLBJbWDqXBMRQSTiOpKMPGsiZJGqI2UF6zRPG7hEHj3HKvfK16gBDBWXLlTwzlovq5vC%2FdWtZ4xThtaELjlrQrbyQe88pRdWMWQ8M7SKvH23IHvj8gEK37ghDJTzbkqXRa85HRjbbUEctNN8w1DDQn%2BvHBjqkAePyMriu%2FVOTAAnbp1p9%2B1t8PCsibhjYsVLGyBrenIRwEEhCvm7MRkVFiY4qBgs6HVSHbxr0GFVxKGSj2asu9S69msg8cROKhfbOLkn9%2BmRlaqG6XFLDNTQhlip%2FDPCo3K5%2Buel0A77sRfXa95GHEZhfqnErmNsyDVWP9IispuS6CL9kdUnLCERyRpF4xL%2FBlsieuAnjde%2FdSlhi8eWFexnpd%2BXK&X-Amz-Signature=6a08e84136f3d4c3b14c2ab391d07e730b0369a5e2cb7f7626714119cbded99a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
