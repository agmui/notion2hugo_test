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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU6LZX6T%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDVeJqLRcwLSJIruzUGJpaDRa01RJ25yCaNC0DkmNxkNwIhAK%2FZm5HZ%2B3fRFHEl1gsIJkK50IkbBTOo5ymD0QPNWHXoKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmIMx1arelbWfc0%2FYq3ANIFqcDVIv78FzJ3zPM%2Fq7sOaQBnkGXtPVtdIveogClEjWaCst01qdwfdDLXlT4HFOtsL23qw0OrKMGos6pYcMTw1le%2F6xQ5A4VXUevMdXs20Rbl559F7j5jO26EhNj%2Fxw6ks%2BmZvhnbQ8i4umoYCescX%2F%2FrRNDisl5KCmCHcolC077hgwSEaJ%2BeUE1zpuAQc5Q01QCM%2BuVKnHMr2MbgZ%2BZmbBMGNcIAWYQoDOk0A3BNAt467LBw2yTFsksq5tOR3MfV1uzL8drXzUNVgLstOgvkyVpk9BxAxUvFpkZ6IB8hCiqL0yY63hAJ6N9nzttVeHxR%2FG1mVjT%2FD0C5MBVyTGwMXDOkiJjzqxIiMHqlRm7meLtHIaO9YaxznxDafimNNxPdEbV0O6VLEDj5Iu0HAzzjvhSHHKOjpZNSvvkP9rBeXmJF%2FTpqppdpORY97sZxsx6GLA16SG8UeMpdA8HiUYabVgtnGbqR%2B8xvqGTogNyKSygWR3N3UxqLibpZW4VLf2rYTBcvxDYRXUzFSxR%2BIccP%2FLyOP9GrwL%2FYuH20dLYM4VCvCOLkV8GqB8hShg0xmTOR%2BnK7yHHNLxJTMGvBGz59C3lzo%2BiUpZp0OoxszXAh2mxY3TQtxcjK5I4ezDX8L6%2BBjqkAWNEWUSVJc0R9nbVMttIMPkzBBdwTLI%2FTRqYgE02rOQvvyYGGbEANnMK1LPW1RdjSgcMdTmL%2FjT2bn5bXL97ZOnTEVmkOOnoE7kQXMvhn%2BqrA%2FgUxUimArf4wH1sgcAN6eOzY77DrQ0%2FAb8PyCrh2XAL8zmG354w%2BTUrXnyXR77kXWx44SUFjLtbigzrFbKLZX4jqj4pGXYYyXP%2FN71rvy7OCqE3&X-Amz-Signature=73b78bcc4b2ae63e1f9a81eed9b0b7eb18449ee7624202b5f10f3eae8ea1f401&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU6LZX6T%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDVeJqLRcwLSJIruzUGJpaDRa01RJ25yCaNC0DkmNxkNwIhAK%2FZm5HZ%2B3fRFHEl1gsIJkK50IkbBTOo5ymD0QPNWHXoKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmIMx1arelbWfc0%2FYq3ANIFqcDVIv78FzJ3zPM%2Fq7sOaQBnkGXtPVtdIveogClEjWaCst01qdwfdDLXlT4HFOtsL23qw0OrKMGos6pYcMTw1le%2F6xQ5A4VXUevMdXs20Rbl559F7j5jO26EhNj%2Fxw6ks%2BmZvhnbQ8i4umoYCescX%2F%2FrRNDisl5KCmCHcolC077hgwSEaJ%2BeUE1zpuAQc5Q01QCM%2BuVKnHMr2MbgZ%2BZmbBMGNcIAWYQoDOk0A3BNAt467LBw2yTFsksq5tOR3MfV1uzL8drXzUNVgLstOgvkyVpk9BxAxUvFpkZ6IB8hCiqL0yY63hAJ6N9nzttVeHxR%2FG1mVjT%2FD0C5MBVyTGwMXDOkiJjzqxIiMHqlRm7meLtHIaO9YaxznxDafimNNxPdEbV0O6VLEDj5Iu0HAzzjvhSHHKOjpZNSvvkP9rBeXmJF%2FTpqppdpORY97sZxsx6GLA16SG8UeMpdA8HiUYabVgtnGbqR%2B8xvqGTogNyKSygWR3N3UxqLibpZW4VLf2rYTBcvxDYRXUzFSxR%2BIccP%2FLyOP9GrwL%2FYuH20dLYM4VCvCOLkV8GqB8hShg0xmTOR%2BnK7yHHNLxJTMGvBGz59C3lzo%2BiUpZp0OoxszXAh2mxY3TQtxcjK5I4ezDX8L6%2BBjqkAWNEWUSVJc0R9nbVMttIMPkzBBdwTLI%2FTRqYgE02rOQvvyYGGbEANnMK1LPW1RdjSgcMdTmL%2FjT2bn5bXL97ZOnTEVmkOOnoE7kQXMvhn%2BqrA%2FgUxUimArf4wH1sgcAN6eOzY77DrQ0%2FAb8PyCrh2XAL8zmG354w%2BTUrXnyXR77kXWx44SUFjLtbigzrFbKLZX4jqj4pGXYYyXP%2FN71rvy7OCqE3&X-Amz-Signature=d03a25dad1350ab6e24b9bc9ea5d932bee0fc8f5b1763ad9dbd3ea47408ff9fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
