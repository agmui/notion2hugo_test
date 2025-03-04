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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWHUU4H%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVPWnbzoGHZfVXYLUJawnnChhsYcjUL4gR1%2BdvFok3pAIhAPdO2OdCBe2k1uy8938kqCCAz1IdNgqXVmYFJv52cA72KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzowjLVSBtIO0k8B9oq3ANhH1GygKTg7e5e7Q6SemHAQJ4Dp6qvDT1qMG6osPG8P6uwx6zmKIGI8dXOTHTeL93czG9KNzp73qhXLoVch%2FnUOuIKQ9P9roZSei89L0a5bnL0omx8MynOmCdXSBRl1PyhAq0HSrlXo0tgr5wvDmkrs%2BUsqbLrNsIQ4D8T7CPSyH7pnnIhGeRe9npBiIYsC9ZKLJHNHBU%2FaFPeYBT32hntuRIPUn1i2h0RGzNbhCGMuRwilQXUZ0bZCld833lyqicw4XKgJF66rzt2JWLVzat%2BS3ThIvCqAs%2BF8CWv4tFbOqzBARprJH4xCZZd6eNS8AjEO7TQaBcSjUX%2BW6Jm5dfS8iYu3qGe2qnjXLkLt%2FW3sOYdbeZdssSqpwd18fgvyzzocQnQHzc1jopNs50ym5cvlvyioUOLhLHzGC3cTOZq5TfaKd3ZRXC2m8Fok17UNssVlRJi9Av2kB6%2FK8xGmHIJZQXVFr97w3UMMkbxiMQeB0Xg3MwY3JO3oF9AxxYicIPf3tjpdVZ2wX4ge7%2BwEiqWzNAHxXrTOmQv1NAnnK2JBgI4gKoUZDr0teM20B7wkXK8RHTtK7DgCkGWpTnwrWIvPwgrk%2FLlXX%2B47XVHlIO2TApVibNhfrqh8zKPmjC2%2BJi%2BBjqkASrZmhIrmmpQlIPphaqf9vosEV%2BfClmhxYP%2F0kYFl31%2B297eb2H1XC6IGoZ6e%2F4fwuQhwzw9xsyoTJt%2F3jMA4dGZW1OtJkx4iXvaqMAc%2FhEe9vNImeK5xNRNqPpJbPX8q%2Ft144ORcGExDFdDHhYtgYTmCIhlUAhykFGPnnGzfy8Eyim9%2FkYDxj5ILzzbToB8JJVqWyvOVzILEh%2FYPeMManDVGEX3&X-Amz-Signature=2d0bb55c507243a76326662af8e25236aebb00a287308b6e9b84714e5b8f151b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWHUU4H%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVPWnbzoGHZfVXYLUJawnnChhsYcjUL4gR1%2BdvFok3pAIhAPdO2OdCBe2k1uy8938kqCCAz1IdNgqXVmYFJv52cA72KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzowjLVSBtIO0k8B9oq3ANhH1GygKTg7e5e7Q6SemHAQJ4Dp6qvDT1qMG6osPG8P6uwx6zmKIGI8dXOTHTeL93czG9KNzp73qhXLoVch%2FnUOuIKQ9P9roZSei89L0a5bnL0omx8MynOmCdXSBRl1PyhAq0HSrlXo0tgr5wvDmkrs%2BUsqbLrNsIQ4D8T7CPSyH7pnnIhGeRe9npBiIYsC9ZKLJHNHBU%2FaFPeYBT32hntuRIPUn1i2h0RGzNbhCGMuRwilQXUZ0bZCld833lyqicw4XKgJF66rzt2JWLVzat%2BS3ThIvCqAs%2BF8CWv4tFbOqzBARprJH4xCZZd6eNS8AjEO7TQaBcSjUX%2BW6Jm5dfS8iYu3qGe2qnjXLkLt%2FW3sOYdbeZdssSqpwd18fgvyzzocQnQHzc1jopNs50ym5cvlvyioUOLhLHzGC3cTOZq5TfaKd3ZRXC2m8Fok17UNssVlRJi9Av2kB6%2FK8xGmHIJZQXVFr97w3UMMkbxiMQeB0Xg3MwY3JO3oF9AxxYicIPf3tjpdVZ2wX4ge7%2BwEiqWzNAHxXrTOmQv1NAnnK2JBgI4gKoUZDr0teM20B7wkXK8RHTtK7DgCkGWpTnwrWIvPwgrk%2FLlXX%2B47XVHlIO2TApVibNhfrqh8zKPmjC2%2BJi%2BBjqkASrZmhIrmmpQlIPphaqf9vosEV%2BfClmhxYP%2F0kYFl31%2B297eb2H1XC6IGoZ6e%2F4fwuQhwzw9xsyoTJt%2F3jMA4dGZW1OtJkx4iXvaqMAc%2FhEe9vNImeK5xNRNqPpJbPX8q%2Ft144ORcGExDFdDHhYtgYTmCIhlUAhykFGPnnGzfy8Eyim9%2FkYDxj5ILzzbToB8JJVqWyvOVzILEh%2FYPeMManDVGEX3&X-Amz-Signature=23ad80017c28f297ab3071664ade2aab1ba16ed11b60e3b5e5d74fe1dd68d00e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
