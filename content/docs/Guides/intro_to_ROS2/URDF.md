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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ24YSEK%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5FXDmhHEN%2BVkx06AjupOX5yCezNHqSp8idhdp3rz8SAIhAJKwxAwiQc8xJwHnIGenUhm7hF3lng0RNZCQiQDILfSBKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwfsuerfal%2BRmrXIGEq3AMBk1W1lsl6J4xdF8mZwky7%2F5q0C5pClxHEt19Pe1SeU8logDq2cWI9GirPqozMVI2jkSYggAt%2Bgh6g5RvA8wAsMWnnfPpN1PoPEtNWdjbtz6BWd5e9X6XnFmzJwdnAf4OyszXonq4TPe7BR6TizGq5Ve4XRbfwDrbLqS3NOfvXPxeFdirSvOyfHtWQAvQFYbRBq81xcPYA202gNqqOcoUwIubQaF7M5AuyYEKNaQ5k8Fj7PV1SX4H0J%2BTfxRByTmJ3Z6zRYRB5j0mib0wpdlebuqYGasqppiST%2FBFBloOGv0f%2FtcrGIXzuM7Rc9WLEaTwQqX4dcVKLlm29uUk1En%2FhyMJoJDSIefNRlgrRKtFhxQeeG6rKqJAJwymMcAOnFX7LaEqF6I6rWg2xqbZlfL94zd22PHy140h%2BxUvksO7IfRX9%2BVJMOm%2F%2BYAQ333ze7iMx0yNzaamIoM3xzMZ68ApxHpFQUfhSsjKj7x5%2BQlWzPvvAKymNNMoOQRFiPxmMTvvHAiqLCB2HCiIfY4IS7qNzGWbUNAikaXV28gdrpg5HOAVuucmuiPtHx3enfp1RIOXpAlXT4i8ReOYcGYUnBAL3iJdD0pKY5%2BQAWDdzROrWWQ2I09Q6OcpPln%2FVVDCFzsDDBjqkASH1Pj9pjyTIm6ijqPH9pwDjV6ORPlETgJxw2173Iw1LY9VLIrbtzHG%2Bf6S80Pv11b9CuMAHwFa5WMeuV9Tx2Wlczv3YiNvW7cy%2BLIryuEnl1XLJi7ndEp2KVpSoeSm2f0ttaijfwUy%2FtMo4Fu5S%2F1FzIhvuJDVNOrWp6NTda8dps0vuGhzQ1DUgX9p%2B%2FcO7VN%2Fb7LQavA6dCwQqpECRZi85bnSA&X-Amz-Signature=1dfd9427baf1007fde339912ed02bc1f823a08db35ee8a860813ca780e3b2c3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ24YSEK%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5FXDmhHEN%2BVkx06AjupOX5yCezNHqSp8idhdp3rz8SAIhAJKwxAwiQc8xJwHnIGenUhm7hF3lng0RNZCQiQDILfSBKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwfsuerfal%2BRmrXIGEq3AMBk1W1lsl6J4xdF8mZwky7%2F5q0C5pClxHEt19Pe1SeU8logDq2cWI9GirPqozMVI2jkSYggAt%2Bgh6g5RvA8wAsMWnnfPpN1PoPEtNWdjbtz6BWd5e9X6XnFmzJwdnAf4OyszXonq4TPe7BR6TizGq5Ve4XRbfwDrbLqS3NOfvXPxeFdirSvOyfHtWQAvQFYbRBq81xcPYA202gNqqOcoUwIubQaF7M5AuyYEKNaQ5k8Fj7PV1SX4H0J%2BTfxRByTmJ3Z6zRYRB5j0mib0wpdlebuqYGasqppiST%2FBFBloOGv0f%2FtcrGIXzuM7Rc9WLEaTwQqX4dcVKLlm29uUk1En%2FhyMJoJDSIefNRlgrRKtFhxQeeG6rKqJAJwymMcAOnFX7LaEqF6I6rWg2xqbZlfL94zd22PHy140h%2BxUvksO7IfRX9%2BVJMOm%2F%2BYAQ333ze7iMx0yNzaamIoM3xzMZ68ApxHpFQUfhSsjKj7x5%2BQlWzPvvAKymNNMoOQRFiPxmMTvvHAiqLCB2HCiIfY4IS7qNzGWbUNAikaXV28gdrpg5HOAVuucmuiPtHx3enfp1RIOXpAlXT4i8ReOYcGYUnBAL3iJdD0pKY5%2BQAWDdzROrWWQ2I09Q6OcpPln%2FVVDCFzsDDBjqkASH1Pj9pjyTIm6ijqPH9pwDjV6ORPlETgJxw2173Iw1LY9VLIrbtzHG%2Bf6S80Pv11b9CuMAHwFa5WMeuV9Tx2Wlczv3YiNvW7cy%2BLIryuEnl1XLJi7ndEp2KVpSoeSm2f0ttaijfwUy%2FtMo4Fu5S%2F1FzIhvuJDVNOrWp6NTda8dps0vuGhzQ1DUgX9p%2B%2FcO7VN%2Fb7LQavA6dCwQqpECRZi85bnSA&X-Amz-Signature=431839f1a1bcfaf2e9eb4854ae442c1999d59f15f0d8796d26e505644a0b3ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
