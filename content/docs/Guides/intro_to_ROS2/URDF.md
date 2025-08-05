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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLLLTLU7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDfkjNA%2BXOOLOp7TkejKEw7HYzmdOfv5uTs9eSZneIBGAIhAPhZ6vS54IvOgGSSgQOp0pWZEW3CfM7JVYPfpXt0ZAZEKv8DCFsQABoMNjM3NDIzMTgzODA1IgyxNDWsYXyCV%2F5SMIEq3AM%2FJr5EU6S2Pion0%2BRwuNEP5J0gFXsUTRXpyUWicWzsGcyIJGl4B9CoVaA%2BQNlp0HWhrjDSSVeFogiQ06BIqLtLF%2F0RI4EYVkRRFt8eSKiSjxYJ8FSI3yRZExpHxOD4qEbHxHTu2dkk3cpK8ocgADyN%2FkQWKW9R660nx3dWWPchEQbivOyAlzOnXTNWUKW5uC%2B%2FvbLt8OfaAjIrCkioVxRiTj3a0N8mOWupHv8Y9a92oFkucGUSvMaHeljmaOhVUpf5%2BcCUJjmE5OSDWJtCrgh77DfzGyT%2BvpvAy3bTzuecTLt%2FnTwoL%2BLj0cSVNug7NSpoi8wp%2FBwU65cJ4VK6WQJZ7G1sIRZjYqGpD4yg1CntcRJJgTkngjT2caQ3Q%2FiZ1UDlsw71ekAIjwcyvlPK8MqE2s0uf%2Ba0rxk9lTjkII%2Bh5u06NUCTdEpXyiEIekDy%2Fpy3epjplF2SO%2FnJwzsuqkq%2BrrHd6a5JGGCAkudP8P4XLsgHX682ZZNzkmqLn8rWdUT%2FUfCmqivlyKeWGTGGwTn1qP0jH53Kb%2B7o2b0EFRJYtBoJZLviGg8CeTBtF27fshRd4Sx0iAuzt4vEwdqfxNEcu0vhWWlgBUORkSaCstXJq47IfFc8Y%2Fc8oAVxMzDzrMfEBjqkAa1tMACnGVI4Ct9qpAdflHcf1HliGGZ2SvJDn6E6mBu6NriYrUS%2Bp0bpIHqpDMzcrcxwiLfJNsjYCvXPe40Ya3OZ0yg41xgUJgeag8hYqH4YzpGs8yshblWCcwHeu28N%2BB9LMYOiq5bIydVaCNmeViQAvWXCQVu1odxO3QfA2sm4dWOt5AbqfXOuW%2Fg7jq9gN1h3lVTwHR%2BBe6ux705J48ol4Yln&X-Amz-Signature=61339f49169f95d13e5ad35303cfbab7f123eed93d4daef92869e4634a3adb99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLLLTLU7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDfkjNA%2BXOOLOp7TkejKEw7HYzmdOfv5uTs9eSZneIBGAIhAPhZ6vS54IvOgGSSgQOp0pWZEW3CfM7JVYPfpXt0ZAZEKv8DCFsQABoMNjM3NDIzMTgzODA1IgyxNDWsYXyCV%2F5SMIEq3AM%2FJr5EU6S2Pion0%2BRwuNEP5J0gFXsUTRXpyUWicWzsGcyIJGl4B9CoVaA%2BQNlp0HWhrjDSSVeFogiQ06BIqLtLF%2F0RI4EYVkRRFt8eSKiSjxYJ8FSI3yRZExpHxOD4qEbHxHTu2dkk3cpK8ocgADyN%2FkQWKW9R660nx3dWWPchEQbivOyAlzOnXTNWUKW5uC%2B%2FvbLt8OfaAjIrCkioVxRiTj3a0N8mOWupHv8Y9a92oFkucGUSvMaHeljmaOhVUpf5%2BcCUJjmE5OSDWJtCrgh77DfzGyT%2BvpvAy3bTzuecTLt%2FnTwoL%2BLj0cSVNug7NSpoi8wp%2FBwU65cJ4VK6WQJZ7G1sIRZjYqGpD4yg1CntcRJJgTkngjT2caQ3Q%2FiZ1UDlsw71ekAIjwcyvlPK8MqE2s0uf%2Ba0rxk9lTjkII%2Bh5u06NUCTdEpXyiEIekDy%2Fpy3epjplF2SO%2FnJwzsuqkq%2BrrHd6a5JGGCAkudP8P4XLsgHX682ZZNzkmqLn8rWdUT%2FUfCmqivlyKeWGTGGwTn1qP0jH53Kb%2B7o2b0EFRJYtBoJZLviGg8CeTBtF27fshRd4Sx0iAuzt4vEwdqfxNEcu0vhWWlgBUORkSaCstXJq47IfFc8Y%2Fc8oAVxMzDzrMfEBjqkAa1tMACnGVI4Ct9qpAdflHcf1HliGGZ2SvJDn6E6mBu6NriYrUS%2Bp0bpIHqpDMzcrcxwiLfJNsjYCvXPe40Ya3OZ0yg41xgUJgeag8hYqH4YzpGs8yshblWCcwHeu28N%2BB9LMYOiq5bIydVaCNmeViQAvWXCQVu1odxO3QfA2sm4dWOt5AbqfXOuW%2Fg7jq9gN1h3lVTwHR%2BBe6ux705J48ol4Yln&X-Amz-Signature=0163348df87691f88db55a6acb8c99b7a91148f394fc0bf4971ac4b67d230c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
