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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OUUC5CN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDuGiFY1W3ACXkyWhr7gN7K00eN3saLOKPpn5Rk9gHzAiAiGn68R2sYVh2nSYL9yJPYamPf3MFQfMlQqfbZ9tJvjCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTkitXMMcGl7EDdTYKtwD8CZ6pcGdDCDdniktXElb6gvy1LVQRDPgRC28qa6BlS0uW8vR6qLtF1bRfV%2BFlJdjoXJv1qXDZ60x1nfVZkRHMpfUeJfKquaCTyRCewk6yEzEUXkGdiCeTBm5DQH35nRNUPA4DvPWsLUWq9E8BXPHHJPZJOd%2BKk%2BhbV0JLbulmzH7ZITDW74fBOe6iRLb0DTao5qOvemjn8mYlchsTGbaTwvsE4JC19C1z0UkvivFAvE604nzEpFBVRCp60MD4GRJTXRVXKXsemVawpB5cZ%2BOj7cludd7mxZuPjHJSvIxw%2BIj7mVd5WI4IBZDNakFDfplar1At6omrwXp1yZHe4yZ9BXWKU295RJu%2Btr8XxHyelfmCjB1Ot1%2B%2Bbc5inm6Ifco7ASx9IuRrDxjO5hzxS9rCTtLMW%2Bqtf2mbJVY%2BRWEwWfb5AgaPo9E8frz63mGlYn5FP%2BB8Nk1iqjPanuApZuKEIjhmbVNCyjWxsThyQIKJnXaAmBIHwXPE3O3MRrygKm3jk00Q8w1XvH0vSwluHpxupB9TNx5WYmwTUHs9Gc8jnJVif8ziV4T3IThBuMqOqcPxmWDIRsLWxBQp4bH7S0AjLuiRqS2VFLR1u6LrU%2BcOQlczTc%2B2RZoWLepDrgwj%2FjrwwY6pgEXYKa0bF0QdV3vR%2B0LcqpIkEgY91o6K6R%2FgZp%2BoIQL%2FnGj%2FFsahLK%2B4KlSnUWTcGcFenxzUu6RnS4N%2BonEXIAjR9hMpx1QnbTSbPBtV78eHQHqiICrV5MSJYNJbqQ88m86UvD6u5hJaMEW%2BDtReppzjNe50QA4gN0DUyfdv35WZilVRviaBfaE6bVR%2BQkAnVbVAhzVU2U35Dk%2F0G5e91rncSCJX2ae&X-Amz-Signature=fd301c35162ad7a0e58cac5a529bbb443fb3da5fc9b5cd21b7fc7e214023f337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OUUC5CN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDuGiFY1W3ACXkyWhr7gN7K00eN3saLOKPpn5Rk9gHzAiAiGn68R2sYVh2nSYL9yJPYamPf3MFQfMlQqfbZ9tJvjCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTkitXMMcGl7EDdTYKtwD8CZ6pcGdDCDdniktXElb6gvy1LVQRDPgRC28qa6BlS0uW8vR6qLtF1bRfV%2BFlJdjoXJv1qXDZ60x1nfVZkRHMpfUeJfKquaCTyRCewk6yEzEUXkGdiCeTBm5DQH35nRNUPA4DvPWsLUWq9E8BXPHHJPZJOd%2BKk%2BhbV0JLbulmzH7ZITDW74fBOe6iRLb0DTao5qOvemjn8mYlchsTGbaTwvsE4JC19C1z0UkvivFAvE604nzEpFBVRCp60MD4GRJTXRVXKXsemVawpB5cZ%2BOj7cludd7mxZuPjHJSvIxw%2BIj7mVd5WI4IBZDNakFDfplar1At6omrwXp1yZHe4yZ9BXWKU295RJu%2Btr8XxHyelfmCjB1Ot1%2B%2Bbc5inm6Ifco7ASx9IuRrDxjO5hzxS9rCTtLMW%2Bqtf2mbJVY%2BRWEwWfb5AgaPo9E8frz63mGlYn5FP%2BB8Nk1iqjPanuApZuKEIjhmbVNCyjWxsThyQIKJnXaAmBIHwXPE3O3MRrygKm3jk00Q8w1XvH0vSwluHpxupB9TNx5WYmwTUHs9Gc8jnJVif8ziV4T3IThBuMqOqcPxmWDIRsLWxBQp4bH7S0AjLuiRqS2VFLR1u6LrU%2BcOQlczTc%2B2RZoWLepDrgwj%2FjrwwY6pgEXYKa0bF0QdV3vR%2B0LcqpIkEgY91o6K6R%2FgZp%2BoIQL%2FnGj%2FFsahLK%2B4KlSnUWTcGcFenxzUu6RnS4N%2BonEXIAjR9hMpx1QnbTSbPBtV78eHQHqiICrV5MSJYNJbqQ88m86UvD6u5hJaMEW%2BDtReppzjNe50QA4gN0DUyfdv35WZilVRviaBfaE6bVR%2BQkAnVbVAhzVU2U35Dk%2F0G5e91rncSCJX2ae&X-Amz-Signature=e9492114bc47926c24f0098b96401470e8705a70cafd0aac5f6ac24f338bc0b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
