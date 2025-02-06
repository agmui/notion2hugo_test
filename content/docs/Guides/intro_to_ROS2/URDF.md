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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP2KTOLW%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDW1NBpB8uvfQAnHJ4hGY229Xs3732KOJ1r6gXVsVaAgQIhAM%2B3Znn8fEiuLGGWulMrWCKTJlGhBh198XNLf6KbWSniKv8DCFEQABoMNjM3NDIzMTgzODA1Igy5cKm%2BHQ1oGfficG8q3ANQpJvhYjBjikTmO%2BnR2V8X19MAqfZg8RigmdHQ8H6ynsuYN3%2B1bI83MR5LQnPQ8EKDD9HfCn4tVYP%2BufyTQ04%2F9PFKdJX4Ahwsm8c3Hfvux4g61oscrRzXgAswX3J4K86Y483CkTO%2BOdzTVBeLCRgIqkyMITAfbvL7TW4mr67d%2FOLjZAbWbqa7u9%2B%2FdLeJ8g6xA8yJ696soXHGtH5ze%2BiL86rnPPo5CHIyzYM1p%2B2PmOe8PmG3ZaIVyx4tb79zOp3OLnuPnxRryjW5AXddv0GEPBxcJSvzJQIxHY9LteQGmfE2s%2F22d5SXmNSt%2BU%2FSMMg6QwlMDnQhBOdHaPMhQ1Zl443CywdH6aJ1oWnGLiw3Q6es2zKoajOIoK3ivCLBgD7qx5hDE21Uy2Ahg5diUUK1xq0HsOUEBK6xJhSJEH7myj%2FyALYXgLPPyeYOndtL8AG9KuWfcpjNgFgtOvMOievUYI4RY9ms6wgGezRtlTrXJfva3vobn7XR0TG4%2BH5JYKMoizxGB%2B6jmqOIadIC9G9WIEyMbZwTuD4rqEoDcK6JFQRIV63sdifAUEFLRw4sZgi5Ds7RleKJxpbhIKlGfVyO5OE0lJkUwRe8F2rNne5Jly0G2ZCJvqGv5%2Fv%2BdTCA7Y%2B9BjqkAdDpBKTFZGrN7BRfCEaD8TqPgr5caokI6UeFieKGzzU8Pw3WRwQMLZE7Bp7X4By6QjVQG1RGLV8bY%2FHt%2BoE2s5Gg0%2FEttiN8t%2BTdvtOTPLUc1D0%2B3xgOHrN1MbSALyRX6fPmUiP13%2Fjv3MCXYbr%2F7Vt7QSxZYkp7SK7oklWGeekGvvp2pHy4lHMixFYnOBS36bysBI1E5nakyAvyEavoaPTx6N3j&X-Amz-Signature=aeda4930c76d702ac327ba2f8b9630730708e4f08e299d0f706e5696290e37ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP2KTOLW%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDW1NBpB8uvfQAnHJ4hGY229Xs3732KOJ1r6gXVsVaAgQIhAM%2B3Znn8fEiuLGGWulMrWCKTJlGhBh198XNLf6KbWSniKv8DCFEQABoMNjM3NDIzMTgzODA1Igy5cKm%2BHQ1oGfficG8q3ANQpJvhYjBjikTmO%2BnR2V8X19MAqfZg8RigmdHQ8H6ynsuYN3%2B1bI83MR5LQnPQ8EKDD9HfCn4tVYP%2BufyTQ04%2F9PFKdJX4Ahwsm8c3Hfvux4g61oscrRzXgAswX3J4K86Y483CkTO%2BOdzTVBeLCRgIqkyMITAfbvL7TW4mr67d%2FOLjZAbWbqa7u9%2B%2FdLeJ8g6xA8yJ696soXHGtH5ze%2BiL86rnPPo5CHIyzYM1p%2B2PmOe8PmG3ZaIVyx4tb79zOp3OLnuPnxRryjW5AXddv0GEPBxcJSvzJQIxHY9LteQGmfE2s%2F22d5SXmNSt%2BU%2FSMMg6QwlMDnQhBOdHaPMhQ1Zl443CywdH6aJ1oWnGLiw3Q6es2zKoajOIoK3ivCLBgD7qx5hDE21Uy2Ahg5diUUK1xq0HsOUEBK6xJhSJEH7myj%2FyALYXgLPPyeYOndtL8AG9KuWfcpjNgFgtOvMOievUYI4RY9ms6wgGezRtlTrXJfva3vobn7XR0TG4%2BH5JYKMoizxGB%2B6jmqOIadIC9G9WIEyMbZwTuD4rqEoDcK6JFQRIV63sdifAUEFLRw4sZgi5Ds7RleKJxpbhIKlGfVyO5OE0lJkUwRe8F2rNne5Jly0G2ZCJvqGv5%2Fv%2BdTCA7Y%2B9BjqkAdDpBKTFZGrN7BRfCEaD8TqPgr5caokI6UeFieKGzzU8Pw3WRwQMLZE7Bp7X4By6QjVQG1RGLV8bY%2FHt%2BoE2s5Gg0%2FEttiN8t%2BTdvtOTPLUc1D0%2B3xgOHrN1MbSALyRX6fPmUiP13%2Fjv3MCXYbr%2F7Vt7QSxZYkp7SK7oklWGeekGvvp2pHy4lHMixFYnOBS36bysBI1E5nakyAvyEavoaPTx6N3j&X-Amz-Signature=4f838b955c5b08f3d41b8433ded77964213cf2afe9e96931ed3915d9c859ff13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
