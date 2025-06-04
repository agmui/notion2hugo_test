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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNP2AYN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFeTFhvD0kqPAoeDQ6rj%2BjuPEy%2B0UakOD0oLnv4XBXQVAiB8%2Fvw6LBv1JVPl2gdtDr0SNBYZiAKEOnzDJBdfhOo4Fir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM5KXVO1jX%2FrxYj8LdKtwD3N%2B7F0y%2BjzEq3%2F%2BZEYJUPD27f80%2FTPtNEQLicrXOkOfDVKNlmjE8ovitqnOo5KkqwaYN9HJFJ1AikFHoCgpUdduif3cU6o%2F6WxmE6xnG21H3%2FLkAT7jFWViLBuctTXDU5BCezDble58i5%2BjxXItT3J2R6zZw%2FeLvKVRgeCOeoDyx5zoqrlV06VZLL5NkxTCO%2BoHYQOIbOeulTnxCQ%2Fu9F%2FWFQ6PovjfM5An5T9IJP%2FW86GUmgUeGE4UyZWjrQomADain6rhwu%2B8J57zM35tRqM%2BnDeh5XwjF98z8aU2yId2ThC02ZJ4T7thXEe%2BcdSMgnxiM9RZ4jVgHtV5OswtKlHyNkl0obEI63qT%2BOkIJGlUJf9zjYV%2FLWG25dJbuk0iBZHrWL40pdZqHfpX0g6YC7JXm8c%2Buj5ay7rnJJInsE2%2Bwf4y%2F2ASKPZSsO8c3PEto%2BwpgsJHwaEBFn5pF%2F3NxXSN3ZGjI9NI8XezGimbnQxgSenWE2%2F3ObK5qJX7Ft3Zax6%2F0YN2woZ6oKDUXkxtzNMQVa5eoxdk6k%2BnXbOMzJYor%2F715sOF3WGqVmhBVIj1PLCAwE2xhcUpo1eM2jW9pI4613PVaH5RHstLRg5LLmatjm%2FzL6K1viFXpZyIwz%2Ff9wQY6pgFe5wC1xMOmHEEelU9LZHWQEvlBGRFXraiAzhV4qilU83lIDJ1vIuN4fQ2NhxcujkoBbu2vAMzPdA%2BCk7LZZ6U9XdDTayiaQ50IvNVlVpsWCyNzNXZGtbYqrA11nI95lTYI%2FSUwciCOO6LHv%2FVFDFt2X%2BOffR2YCMomQN8AORW6CkHNAuFF6pvISCD2JlnDwR698PxfkMC3%2F8N7Ut3BhlbGgE6GHwP0&X-Amz-Signature=58ea3768e2bf971adbda3cb036dc2a1edb454a692b941da7bf3631f17fcfca2f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNP2AYN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFeTFhvD0kqPAoeDQ6rj%2BjuPEy%2B0UakOD0oLnv4XBXQVAiB8%2Fvw6LBv1JVPl2gdtDr0SNBYZiAKEOnzDJBdfhOo4Fir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM5KXVO1jX%2FrxYj8LdKtwD3N%2B7F0y%2BjzEq3%2F%2BZEYJUPD27f80%2FTPtNEQLicrXOkOfDVKNlmjE8ovitqnOo5KkqwaYN9HJFJ1AikFHoCgpUdduif3cU6o%2F6WxmE6xnG21H3%2FLkAT7jFWViLBuctTXDU5BCezDble58i5%2BjxXItT3J2R6zZw%2FeLvKVRgeCOeoDyx5zoqrlV06VZLL5NkxTCO%2BoHYQOIbOeulTnxCQ%2Fu9F%2FWFQ6PovjfM5An5T9IJP%2FW86GUmgUeGE4UyZWjrQomADain6rhwu%2B8J57zM35tRqM%2BnDeh5XwjF98z8aU2yId2ThC02ZJ4T7thXEe%2BcdSMgnxiM9RZ4jVgHtV5OswtKlHyNkl0obEI63qT%2BOkIJGlUJf9zjYV%2FLWG25dJbuk0iBZHrWL40pdZqHfpX0g6YC7JXm8c%2Buj5ay7rnJJInsE2%2Bwf4y%2F2ASKPZSsO8c3PEto%2BwpgsJHwaEBFn5pF%2F3NxXSN3ZGjI9NI8XezGimbnQxgSenWE2%2F3ObK5qJX7Ft3Zax6%2F0YN2woZ6oKDUXkxtzNMQVa5eoxdk6k%2BnXbOMzJYor%2F715sOF3WGqVmhBVIj1PLCAwE2xhcUpo1eM2jW9pI4613PVaH5RHstLRg5LLmatjm%2FzL6K1viFXpZyIwz%2Ff9wQY6pgFe5wC1xMOmHEEelU9LZHWQEvlBGRFXraiAzhV4qilU83lIDJ1vIuN4fQ2NhxcujkoBbu2vAMzPdA%2BCk7LZZ6U9XdDTayiaQ50IvNVlVpsWCyNzNXZGtbYqrA11nI95lTYI%2FSUwciCOO6LHv%2FVFDFt2X%2BOffR2YCMomQN8AORW6CkHNAuFF6pvISCD2JlnDwR698PxfkMC3%2F8N7Ut3BhlbGgE6GHwP0&X-Amz-Signature=8b44e83949252fdedff59de300460d86fde7f6d31c574cb8b8ed3c2e59bd7428&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
