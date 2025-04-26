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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LYUIFXN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3Fd0o0pOTlwS91imq40aoeiKbeVYkqvhN5EDqHpBg3AIgYRCH5Ik3rtsEXnffodtzkXH%2BT0kHmEw77xDnvLZylpgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHi2meUVZWGg4MCxFyrcAyhEaRpELGxJl1U209npcaAD1%2B0QsDdHjymTvdexu6XX7Lzw%2FPyVxp592NqPUXRcP9IujSZZdMCn2ENN0L95hzhfXtJrMFHdkfZbGx6q1BB2hOwZx0WGIRvUhs7ng2rv5CjIwonxXQ4Q1PU%2Fiyw45SBxjDUURwtVjluWwTB8QIi4XyuOYDeHz3cRlw6jZk2ig%2FFZMm3mRcvWuSnyaODWgRvxj6PXKIwLw%2BKQd%2B%2BxPTakG3GEF%2BdJ43FZnRpzMHL6NTRzcyW0CgLQOyh%2BbYxFeNwF5Rys%2Fm5NFrWWzJOqXmmmxmt6nPnsEG7VZ6DyMZ8SmGQ%2F6w4Gjz7pkRkBOnQewHlKuwHL6ke5v%2B3fMYZ%2FCM5vFIvvbf%2Beu81WNnEWIP8sgzTYqMi33RODObWvR43JfqCnzUZ2M3YUUpdKWRr%2BOeIKpvaV5TE7VWG7wh5VMcjDIqPqKbycp7azhIIaWEDoYeBkGMRSR0m2hGQVn1xDjFGk9QtNxhhz%2BL1XhArrihMosn9EWW5Plr6MkGP7tt9g%2BUAdogAaGObIVuvNvuZKr0Qwf18g1LkghJS1JtuImOTNd8H0pj2AMnvvhsC7gCzdSTiReuFDOBlYUGQJo10Wy4wS%2FTJNrDMNlU%2FO5RpKMPaDssAGOqUBtkzAVr9hwN8fGOVS2d0MRgJsXYqWR58UE9eUnQepUF4TjmAOVxqRyHkjgRMI3CZfzu4yNL4oF74ONN%2F52cEGTtlsutZ18RAjZnObdJkhcAu0Estz5aXnd1974VzSGRTj9hPQ6oUECUTzAlrzoTpQa4%2Bo3m0xCfeGJwQ8HFG5qY9mzVLauD5me2dcj6ieQJPUk2r0WM8n4aCm1%2BiBOCDV52rH5Os9&X-Amz-Signature=78e71a1591ac0d420fa25fd100e0e912ac4640bd09c57336ece94642224af363&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LYUIFXN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3Fd0o0pOTlwS91imq40aoeiKbeVYkqvhN5EDqHpBg3AIgYRCH5Ik3rtsEXnffodtzkXH%2BT0kHmEw77xDnvLZylpgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHi2meUVZWGg4MCxFyrcAyhEaRpELGxJl1U209npcaAD1%2B0QsDdHjymTvdexu6XX7Lzw%2FPyVxp592NqPUXRcP9IujSZZdMCn2ENN0L95hzhfXtJrMFHdkfZbGx6q1BB2hOwZx0WGIRvUhs7ng2rv5CjIwonxXQ4Q1PU%2Fiyw45SBxjDUURwtVjluWwTB8QIi4XyuOYDeHz3cRlw6jZk2ig%2FFZMm3mRcvWuSnyaODWgRvxj6PXKIwLw%2BKQd%2B%2BxPTakG3GEF%2BdJ43FZnRpzMHL6NTRzcyW0CgLQOyh%2BbYxFeNwF5Rys%2Fm5NFrWWzJOqXmmmxmt6nPnsEG7VZ6DyMZ8SmGQ%2F6w4Gjz7pkRkBOnQewHlKuwHL6ke5v%2B3fMYZ%2FCM5vFIvvbf%2Beu81WNnEWIP8sgzTYqMi33RODObWvR43JfqCnzUZ2M3YUUpdKWRr%2BOeIKpvaV5TE7VWG7wh5VMcjDIqPqKbycp7azhIIaWEDoYeBkGMRSR0m2hGQVn1xDjFGk9QtNxhhz%2BL1XhArrihMosn9EWW5Plr6MkGP7tt9g%2BUAdogAaGObIVuvNvuZKr0Qwf18g1LkghJS1JtuImOTNd8H0pj2AMnvvhsC7gCzdSTiReuFDOBlYUGQJo10Wy4wS%2FTJNrDMNlU%2FO5RpKMPaDssAGOqUBtkzAVr9hwN8fGOVS2d0MRgJsXYqWR58UE9eUnQepUF4TjmAOVxqRyHkjgRMI3CZfzu4yNL4oF74ONN%2F52cEGTtlsutZ18RAjZnObdJkhcAu0Estz5aXnd1974VzSGRTj9hPQ6oUECUTzAlrzoTpQa4%2Bo3m0xCfeGJwQ8HFG5qY9mzVLauD5me2dcj6ieQJPUk2r0WM8n4aCm1%2BiBOCDV52rH5Os9&X-Amz-Signature=18a860f5e1337bb6154764c74ab2f607fbffd4951db4db632f60a09db437b3f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
