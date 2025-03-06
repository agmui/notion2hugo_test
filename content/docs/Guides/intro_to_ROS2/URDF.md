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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXHSMD2%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkFiRAH1riY3zpmqUkkFIrS%2FEFt1BZkZZS%2BDvmkUAMTQIhAJU8wE0Jxx170aaIWzmTcB6fyo91zYxg4WiZwlSsrp5AKv8DCCoQABoMNjM3NDIzMTgzODA1Igy%2BtLMMTp3RCWyOacEq3ANe6rlfaLO%2BoY2%2FzC8kCZpc5yIOFRy5QAtk75Ghb7dRO%2F7%2FLBTPEDeP1m8Ubc5Gpern6Qxf5pGZbqc9Vbvtl53SXZShXvv%2BfWQfPLfrs32lcsgHxsSYtyJ80LzdPFHYROis1woBNl2OAQAe9FfVHtImKUhd1UmTOF6WCYzcY8%2Bc8rouFKks5oQl3aCAdF3pTtBwjcOPPMWoZF%2B9nqzq84%2BUl0e0Wztes8fwuBDtz9RQMpnvJl4hAh2Ta7XrJdEwtoXvlMLN3mJRoRY%2BiHKwtW5ggdbl7VFXj5a0C%2B0iZeoKMUU0rmZ%2Fnv6eMRMfk6ajwbQy7pKoktvdiZqikVIOC3yLqtj1eL7UshkKsRr%2F7I3TB8%2FsSKqh2ZMyGMxu8uyRm7DMAlTvWLowVGl7RZeaSKWNqFxNMEPMq0HIyjwO%2Fd8RDIKqfJnoZj4wwZernTmSkwMgDXFah2b8z0oEN7Hth2ZTvZgRKmE6yyKR4JLc%2FfIxe7TWVGr4x7EqEmpqXcboQ82NdM0lhi6WmYORRmNngO%2F8p7vFBb9skOVxWUFNVV%2B9YhBAS5W6MGkammCfNtgMxj2RvAFnzPFA8A0Z5PXbc72NYNkRsBN5NDvLkykufhkn4%2B%2BKdwxKb%2Fa4ZIg9UjCz0qW%2BBjqkAV5qaLR06Hs2NiDMW7nGZFOF9Z7OYeT41j5w6AdleN8%2BTLM9ePdx%2BJW3Dd9rSW6VzzbiQya8OijjSCgk7mVM3fc7rU4pwgPhHyzXJwTLhMm1pEN%2FTf7ELo5wE%2BlX9URaNlS2HCSre8l7oiIhjNRTSzKVX4z4mRGoURMRsHWtc81TDm5IblkruuVKDK9g1ySEkMaQiom9Th2EbtpTnooGBExhM5e3&X-Amz-Signature=c9638820b2e7ecd63f0244a2d94e4652fcc4489b1b1d7847b75463326255a799&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXHSMD2%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkFiRAH1riY3zpmqUkkFIrS%2FEFt1BZkZZS%2BDvmkUAMTQIhAJU8wE0Jxx170aaIWzmTcB6fyo91zYxg4WiZwlSsrp5AKv8DCCoQABoMNjM3NDIzMTgzODA1Igy%2BtLMMTp3RCWyOacEq3ANe6rlfaLO%2BoY2%2FzC8kCZpc5yIOFRy5QAtk75Ghb7dRO%2F7%2FLBTPEDeP1m8Ubc5Gpern6Qxf5pGZbqc9Vbvtl53SXZShXvv%2BfWQfPLfrs32lcsgHxsSYtyJ80LzdPFHYROis1woBNl2OAQAe9FfVHtImKUhd1UmTOF6WCYzcY8%2Bc8rouFKks5oQl3aCAdF3pTtBwjcOPPMWoZF%2B9nqzq84%2BUl0e0Wztes8fwuBDtz9RQMpnvJl4hAh2Ta7XrJdEwtoXvlMLN3mJRoRY%2BiHKwtW5ggdbl7VFXj5a0C%2B0iZeoKMUU0rmZ%2Fnv6eMRMfk6ajwbQy7pKoktvdiZqikVIOC3yLqtj1eL7UshkKsRr%2F7I3TB8%2FsSKqh2ZMyGMxu8uyRm7DMAlTvWLowVGl7RZeaSKWNqFxNMEPMq0HIyjwO%2Fd8RDIKqfJnoZj4wwZernTmSkwMgDXFah2b8z0oEN7Hth2ZTvZgRKmE6yyKR4JLc%2FfIxe7TWVGr4x7EqEmpqXcboQ82NdM0lhi6WmYORRmNngO%2F8p7vFBb9skOVxWUFNVV%2B9YhBAS5W6MGkammCfNtgMxj2RvAFnzPFA8A0Z5PXbc72NYNkRsBN5NDvLkykufhkn4%2B%2BKdwxKb%2Fa4ZIg9UjCz0qW%2BBjqkAV5qaLR06Hs2NiDMW7nGZFOF9Z7OYeT41j5w6AdleN8%2BTLM9ePdx%2BJW3Dd9rSW6VzzbiQya8OijjSCgk7mVM3fc7rU4pwgPhHyzXJwTLhMm1pEN%2FTf7ELo5wE%2BlX9URaNlS2HCSre8l7oiIhjNRTSzKVX4z4mRGoURMRsHWtc81TDm5IblkruuVKDK9g1ySEkMaQiom9Th2EbtpTnooGBExhM5e3&X-Amz-Signature=093c2703e0f6c213d6d0067ad61fd0519586074e0a243b4855fcb91dc20e5d25&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
