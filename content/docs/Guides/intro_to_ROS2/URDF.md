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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJQB55Z%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCZo0ZrVSKrk%2FFojlkJZQV%2FpZEQketuPSyWSjlS9ZJM%2FQIhAJVzNgjo9eCPCoAYcN2X%2FVeQXiLtR1cxdikuc9pf3KywKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV48uMHEsw2O3u%2Bskq3AOrHlN5v339sjNe6%2BBoxO9sf8X%2BxJLzMDfBUBQTd9YqSlRzI%2Fr1C6BlhY5c4eJcEnzJ%2F9lzwmznNKwNxIIrteOCoP1TZ7wz7%2F6vToaA2xA1h%2BfWPbTfjHk6cClR7mWY9vIF1QaXx5ELnJWvjgNER3fNpsDoNfaA3ieaDnY4wiMx32JLIX6P0Pgc%2BWvrjvZfycAQmCOnzy47Tgjr9yLhGc6xa67PM8vulsCmADqduefdla6jWTyzAbIei4TCXilFu1CXqC4vKDgqJMFINBvRCaKaWiBq07lq4Zn77S7Vcc2v5y37pRPs9LMY8%2Fz7lqn7O0Xv5vSJIHxjoqa8XOX0SrLpIWDkdYGmPlrFXS1NMp73T9qD6uN55XKdbwp5AkXMUco%2BqYu8JRXOlnufB9Pi%2ByJlhOojKqfC4Y3hgmrlq5jHGOp%2BYJKgEHYOP0N2e4nnvD50XaR4Zu%2BEhgD1bZoVj1eVcIayusj%2BEIJ229Jn%2BVJ%2FLvR6DabF26afuTD1Qr3cp9PH8uB59%2F7rP8AP%2FqtghVttyosU7bf56%2BUt%2BOvu5Z2MNAJluN%2F08zqz2yHQPuxA9KDytUPn9o38hUF4L42FkkoLz81qFsdBD%2BLPE20jKIDSS5b7ppIiJRL6dA7N6TCyz%2BS%2FBjqkAVlPtE94DSXxwyCkWnPWnYZN9nNA6njLMCBWbpB4Q2MsYFOYMxUR2GjeH3ov51rQKzeTmM8YNH0%2BPqKuDUELIVRsvf9R01Hc6bCTiH3ZGZDn6QNFgnjD7cnkM4J43bjYFCEoGKT33HimIHkZttJ5MfooPoE642HOPo79bZGgXR8FCbXNUy%2Bji1zGvrEGAqdWe6s2X2T3vUbls5cKhK%2Bmf6wfGntI&X-Amz-Signature=09cfc8cfeb2361f75c0aefeed653070c34980d145e8ac6b834063cc301d23e80&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJQB55Z%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCZo0ZrVSKrk%2FFojlkJZQV%2FpZEQketuPSyWSjlS9ZJM%2FQIhAJVzNgjo9eCPCoAYcN2X%2FVeQXiLtR1cxdikuc9pf3KywKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV48uMHEsw2O3u%2Bskq3AOrHlN5v339sjNe6%2BBoxO9sf8X%2BxJLzMDfBUBQTd9YqSlRzI%2Fr1C6BlhY5c4eJcEnzJ%2F9lzwmznNKwNxIIrteOCoP1TZ7wz7%2F6vToaA2xA1h%2BfWPbTfjHk6cClR7mWY9vIF1QaXx5ELnJWvjgNER3fNpsDoNfaA3ieaDnY4wiMx32JLIX6P0Pgc%2BWvrjvZfycAQmCOnzy47Tgjr9yLhGc6xa67PM8vulsCmADqduefdla6jWTyzAbIei4TCXilFu1CXqC4vKDgqJMFINBvRCaKaWiBq07lq4Zn77S7Vcc2v5y37pRPs9LMY8%2Fz7lqn7O0Xv5vSJIHxjoqa8XOX0SrLpIWDkdYGmPlrFXS1NMp73T9qD6uN55XKdbwp5AkXMUco%2BqYu8JRXOlnufB9Pi%2ByJlhOojKqfC4Y3hgmrlq5jHGOp%2BYJKgEHYOP0N2e4nnvD50XaR4Zu%2BEhgD1bZoVj1eVcIayusj%2BEIJ229Jn%2BVJ%2FLvR6DabF26afuTD1Qr3cp9PH8uB59%2F7rP8AP%2FqtghVttyosU7bf56%2BUt%2BOvu5Z2MNAJluN%2F08zqz2yHQPuxA9KDytUPn9o38hUF4L42FkkoLz81qFsdBD%2BLPE20jKIDSS5b7ppIiJRL6dA7N6TCyz%2BS%2FBjqkAVlPtE94DSXxwyCkWnPWnYZN9nNA6njLMCBWbpB4Q2MsYFOYMxUR2GjeH3ov51rQKzeTmM8YNH0%2BPqKuDUELIVRsvf9R01Hc6bCTiH3ZGZDn6QNFgnjD7cnkM4J43bjYFCEoGKT33HimIHkZttJ5MfooPoE642HOPo79bZGgXR8FCbXNUy%2Bji1zGvrEGAqdWe6s2X2T3vUbls5cKhK%2Bmf6wfGntI&X-Amz-Signature=66bc6ec50aa4212c557a28e93a092fe77d47a6723893cc01aecae2329f0b9bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
