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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2PIRUW6%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC%2BEAFK73QDRlEyDdFhKfMlbpVpokabvIsNbnILVOstagIhAPjJH6imgidq5b%2FQBMWLg7xPKr4BLh6Cgv50DhHDQJpzKv8DCCwQABoMNjM3NDIzMTgzODA1Igx5UZVMRFj%2F9bn6Uigq3AOza6aMIMIaIt2al2476Dnf3ae8YUWSrQmfAFXTS03LU7nlYMCCcU3YEo1iV%2F7wg572aFMEOvu5ZaBM%2BukD1INfYUj0Ancpks1mR%2BTc9Jbic8XE4MBNSm86z5SjJSHisFdm1PURQTkj%2Bu4R1v%2FE7EjkoCe0%2FYtMXQp2oVQfVavmdoZYw1dFeb2LBhSDA9ZO5Ftm%2B29b5aAySkHaA7VrlRkMMr%2Fuyq8yE7NRDnfHqBWyfiI2IC0R3TDqgFE%2B5SoDi9vFNVZtQp7AEzySJQum90k7bA89jLH3HsOP3NbZKuL4h2zf0J9yb4lWgF9Nl0C3rll41EqmALxiylDwk4Z3X%2FMsKrL6bB%2B0P84MaRGCWLKhex%2F5qbJjMiwCrzJlVZVuQUrqJcb%2F8Q4ai1KD5RvcVLFh0oPmSdPDBEf2uJb%2Fg4mhkzMrbZTz3MseWcbaLTIG4BM0XFyJx9uCZZ8sh8kB1HoXZA4Xtd7XDi1wE3FIMpAiKKNcN1Xg8tnnFOcp8GIcT0f3WsWq1tnMzz4QwZV7LxxPPDPZYO9XyFwj0Ji55eC3Z33Oko3o54MlrnPN1chgcv5aADmqf43QcQv3tnz40gqiwLqVk97SjdIfrE0Wyn0y1P66jd0d28%2BYkS22SDDf0IDCBjqkAUWaMdrWyDS%2FvdI6pBY4e1zE6VmxbkZqA46fVs%2BVryeb58HS1wa1o6%2FtZp%2B1ofqLIjKMe7aDdpzrEYpSoIcJyHZBaw0PC8f9V%2BeJ6HW3qPGB5vuM9dJBUHqcMxCWoYhOLsS3LzTSQTFT3gq6cZmurq8KGWOaYZ7blk8AY0WAxZc%2BHQ0xeOlt%2BuXKsxxKJlMsJKAkN1mUobquhxv078I2UdXUTL6C&X-Amz-Signature=abb87c414b72d69e1b604da946c1a0e28dd9acbfbea638abf44789ec91589f48&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2PIRUW6%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC%2BEAFK73QDRlEyDdFhKfMlbpVpokabvIsNbnILVOstagIhAPjJH6imgidq5b%2FQBMWLg7xPKr4BLh6Cgv50DhHDQJpzKv8DCCwQABoMNjM3NDIzMTgzODA1Igx5UZVMRFj%2F9bn6Uigq3AOza6aMIMIaIt2al2476Dnf3ae8YUWSrQmfAFXTS03LU7nlYMCCcU3YEo1iV%2F7wg572aFMEOvu5ZaBM%2BukD1INfYUj0Ancpks1mR%2BTc9Jbic8XE4MBNSm86z5SjJSHisFdm1PURQTkj%2Bu4R1v%2FE7EjkoCe0%2FYtMXQp2oVQfVavmdoZYw1dFeb2LBhSDA9ZO5Ftm%2B29b5aAySkHaA7VrlRkMMr%2Fuyq8yE7NRDnfHqBWyfiI2IC0R3TDqgFE%2B5SoDi9vFNVZtQp7AEzySJQum90k7bA89jLH3HsOP3NbZKuL4h2zf0J9yb4lWgF9Nl0C3rll41EqmALxiylDwk4Z3X%2FMsKrL6bB%2B0P84MaRGCWLKhex%2F5qbJjMiwCrzJlVZVuQUrqJcb%2F8Q4ai1KD5RvcVLFh0oPmSdPDBEf2uJb%2Fg4mhkzMrbZTz3MseWcbaLTIG4BM0XFyJx9uCZZ8sh8kB1HoXZA4Xtd7XDi1wE3FIMpAiKKNcN1Xg8tnnFOcp8GIcT0f3WsWq1tnMzz4QwZV7LxxPPDPZYO9XyFwj0Ji55eC3Z33Oko3o54MlrnPN1chgcv5aADmqf43QcQv3tnz40gqiwLqVk97SjdIfrE0Wyn0y1P66jd0d28%2BYkS22SDDf0IDCBjqkAUWaMdrWyDS%2FvdI6pBY4e1zE6VmxbkZqA46fVs%2BVryeb58HS1wa1o6%2FtZp%2B1ofqLIjKMe7aDdpzrEYpSoIcJyHZBaw0PC8f9V%2BeJ6HW3qPGB5vuM9dJBUHqcMxCWoYhOLsS3LzTSQTFT3gq6cZmurq8KGWOaYZ7blk8AY0WAxZc%2BHQ0xeOlt%2BuXKsxxKJlMsJKAkN1mUobquhxv078I2UdXUTL6C&X-Amz-Signature=e90ec97bea5196499e1a1eaef87657efc9e64781a68b0c67f8ad767925748191&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
