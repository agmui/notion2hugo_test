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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYJWQPDT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOPEFCykrex4Kfm%2BoymdN1VoyHEcGEPVWA2Rl26fpKvAIhAK4QzSd6MyLTLdHTamzpGfcuEMEu95T1V53ub1LPQRn9Kv8DCE8QABoMNjM3NDIzMTgzODA1Igy4CN3Gwm8iOCPt3PIq3AO9AuD7QjjGVYncNDS2onoUWtBoXsXGIXpQv%2FHm8KspRVfTf8bIYVXYa6bWU82NrMJPrQDm2tVM0Wh34LQkBSAshOmUV1m%2FBwGoen%2FMFvLpIJyO6kZN3RyF%2BSDUkyQxKOcdGdqUWhGQSlKZ8GhPyrL4RFNlJCTzPiqs9hZ2L5%2Bpxz4gvs7jJjJDAa52d5qPcEacNngM3yh7qnwfphJHGD5BIY3r8gvCJe1I6tq9zlZPItVI1QxNJpGC%2BP79P3cx%2BbiWxrcDgPv5eRj8mYeiYbwlcTlLw3zypoGS%2BSY6bGMa%2BwG2q3ZtzV%2BISLoRcnGxUCALKMF6VZkHoToLYTJ7nPFc75JIlnQipdrWINwkqNCXMecYXVaLLBXcJX8ndFLIem9w4V4AWzL82Pl7MWPC4BIjzySTKH65diQJaKlMZcUDvV8soNKH0xrYu5tzdOgottIhG%2Bf0hWSL3cOW4KIMLuQwul4btCyb%2BnRuB2pesAKLApOTWAIqOa%2FcH1kR1y8xPJs4Quay9YqLV5Y%2BsNh6lkVl9XpEjKRYrU7bS7NODeBPta27m4NPDL%2F79mHn5FFa3GgIiixrNr1Xm11prHvkHoE%2BOuAsqVIsAR6mJ6wP%2FZHZQ0M6XPFMfEElL7Pg9DD%2B9Mu%2FBjqkAc0TJH71hQ7irQOZRptHFwAEXQwt4NBOunU%2FtSaI6CFicp48gb%2FZuAxEtqt1hnqzbY1L1ZRKK0M47SIsNqn36GeTTNZ82aJNwPgkM5J2jf%2FCFAjvMXdmm536gVVbgc5uRVGw8n8ibt4qWy2H1gzqsNMZ1zQIfIJHBQu2yVCUMLpOYbeYcEU97WocMd%2BkTU26W0B2jszggBp0JJtXDLwr72Azx5d0&X-Amz-Signature=16a7a92c4778e562f3d04c1da36c3ef09abca62b8d945b01e666a8fc9a231f99&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYJWQPDT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOPEFCykrex4Kfm%2BoymdN1VoyHEcGEPVWA2Rl26fpKvAIhAK4QzSd6MyLTLdHTamzpGfcuEMEu95T1V53ub1LPQRn9Kv8DCE8QABoMNjM3NDIzMTgzODA1Igy4CN3Gwm8iOCPt3PIq3AO9AuD7QjjGVYncNDS2onoUWtBoXsXGIXpQv%2FHm8KspRVfTf8bIYVXYa6bWU82NrMJPrQDm2tVM0Wh34LQkBSAshOmUV1m%2FBwGoen%2FMFvLpIJyO6kZN3RyF%2BSDUkyQxKOcdGdqUWhGQSlKZ8GhPyrL4RFNlJCTzPiqs9hZ2L5%2Bpxz4gvs7jJjJDAa52d5qPcEacNngM3yh7qnwfphJHGD5BIY3r8gvCJe1I6tq9zlZPItVI1QxNJpGC%2BP79P3cx%2BbiWxrcDgPv5eRj8mYeiYbwlcTlLw3zypoGS%2BSY6bGMa%2BwG2q3ZtzV%2BISLoRcnGxUCALKMF6VZkHoToLYTJ7nPFc75JIlnQipdrWINwkqNCXMecYXVaLLBXcJX8ndFLIem9w4V4AWzL82Pl7MWPC4BIjzySTKH65diQJaKlMZcUDvV8soNKH0xrYu5tzdOgottIhG%2Bf0hWSL3cOW4KIMLuQwul4btCyb%2BnRuB2pesAKLApOTWAIqOa%2FcH1kR1y8xPJs4Quay9YqLV5Y%2BsNh6lkVl9XpEjKRYrU7bS7NODeBPta27m4NPDL%2F79mHn5FFa3GgIiixrNr1Xm11prHvkHoE%2BOuAsqVIsAR6mJ6wP%2FZHZQ0M6XPFMfEElL7Pg9DD%2B9Mu%2FBjqkAc0TJH71hQ7irQOZRptHFwAEXQwt4NBOunU%2FtSaI6CFicp48gb%2FZuAxEtqt1hnqzbY1L1ZRKK0M47SIsNqn36GeTTNZ82aJNwPgkM5J2jf%2FCFAjvMXdmm536gVVbgc5uRVGw8n8ibt4qWy2H1gzqsNMZ1zQIfIJHBQu2yVCUMLpOYbeYcEU97WocMd%2BkTU26W0B2jszggBp0JJtXDLwr72Azx5d0&X-Amz-Signature=63f6bbbe0df51dd1cd2212dcb2801b37a99a25502cfe1336aa91755b00b063c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
