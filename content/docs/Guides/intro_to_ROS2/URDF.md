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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KJWDGA2%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWf155sRLShxU1CnS3bmfbwuKpTAgwjO0QZxC5kHpOQgIgAdsYW6RScR2jVs%2FF9GNWk%2BD0TBEab7GWHwuPoekIRUIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGa3Slzyu8%2BCWhzgLyrcAx8xa0pwpmCxcq%2BE%2FlHBztqSJ0QnAB4V7lEdXoIgrFQdA6DuPKHgzzxT4T6EytnRQRjeE66rJZEp8vBs0%2B8FxHb%2BmO9Y5UlNkkfZkDVLSBBXOMaTTWcTEgHKdKux3%2Bk8qFp%2BrQSUwMGjQzvVCuHQNSOsinrkIxYHQpIw%2B%2BtUQfJDST4a4CyXUrDfUMbCrroXO7UiP8tZLWl0yGU45Ed66EBs0NIxv8zK4epLGJ1RC%2BzDKz%2BrROEVbjlV%2Bb%2FYkQlM5XMKQn0MSh7fcrIQnDtONzok8Ff6Edfdeo4DC7FypJ%2FaDHKE7Z74h9rvu2xYsRlttqoD3gXKBPBx%2FqAfO1HcuP%2BlIdsLC%2F8MjNr0qQ%2Bzi54a8mWQFRRmNFkzsxeq0SSVqWLfLUWju6ACp%2Fo8pQ%2BhKVUZFhlwFZmbbR8ZtamZW%2BE7TlZDFfybYO1fKvWqaR5KMUWCrAFWPdDcG4IVfgge2if5XFRTnjndA4R3WfMY2N14OuXVpEltETQulBYthzSSRiRnTSCIhWceQoIxaT2mxUaJM2mIKm5B%2Br07eXeq%2FA%2FwU8jFXsU4tQqSx27%2F0W3P2UYAcc3Drvo5aLLQ683cqEXYSs5IWVtarN4HWOuYyy%2FzEDCUfQMZ1EVQq7YIMOj83L0GOqUBuOHR8YrFlmYVO7C5ZTRsLfup7ncaPVbjWYl5%2F4%2FZe5xYUZjLv5vqgVifVWKvgxl5QRJC%2F95MPjpi9bHfHVqNUT2ljf1IZl96W6lEuKWOoxZeXKopr04jyJ%2BkPxeurlAMRH6G8M9BXworAqzDAdlJ%2BPBocenhmMUqAujCEa02XLWa%2BjI90R7fL%2BUTQXMrTB8bqYEg%2BunWs%2FI%2FQLGoQp5a9YXePkuK&X-Amz-Signature=e0d565672231e301f9b1b8827e86b1d01980cce692cbf380de3475f09704c2a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KJWDGA2%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWf155sRLShxU1CnS3bmfbwuKpTAgwjO0QZxC5kHpOQgIgAdsYW6RScR2jVs%2FF9GNWk%2BD0TBEab7GWHwuPoekIRUIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGa3Slzyu8%2BCWhzgLyrcAx8xa0pwpmCxcq%2BE%2FlHBztqSJ0QnAB4V7lEdXoIgrFQdA6DuPKHgzzxT4T6EytnRQRjeE66rJZEp8vBs0%2B8FxHb%2BmO9Y5UlNkkfZkDVLSBBXOMaTTWcTEgHKdKux3%2Bk8qFp%2BrQSUwMGjQzvVCuHQNSOsinrkIxYHQpIw%2B%2BtUQfJDST4a4CyXUrDfUMbCrroXO7UiP8tZLWl0yGU45Ed66EBs0NIxv8zK4epLGJ1RC%2BzDKz%2BrROEVbjlV%2Bb%2FYkQlM5XMKQn0MSh7fcrIQnDtONzok8Ff6Edfdeo4DC7FypJ%2FaDHKE7Z74h9rvu2xYsRlttqoD3gXKBPBx%2FqAfO1HcuP%2BlIdsLC%2F8MjNr0qQ%2Bzi54a8mWQFRRmNFkzsxeq0SSVqWLfLUWju6ACp%2Fo8pQ%2BhKVUZFhlwFZmbbR8ZtamZW%2BE7TlZDFfybYO1fKvWqaR5KMUWCrAFWPdDcG4IVfgge2if5XFRTnjndA4R3WfMY2N14OuXVpEltETQulBYthzSSRiRnTSCIhWceQoIxaT2mxUaJM2mIKm5B%2Br07eXeq%2FA%2FwU8jFXsU4tQqSx27%2F0W3P2UYAcc3Drvo5aLLQ683cqEXYSs5IWVtarN4HWOuYyy%2FzEDCUfQMZ1EVQq7YIMOj83L0GOqUBuOHR8YrFlmYVO7C5ZTRsLfup7ncaPVbjWYl5%2F4%2FZe5xYUZjLv5vqgVifVWKvgxl5QRJC%2F95MPjpi9bHfHVqNUT2ljf1IZl96W6lEuKWOoxZeXKopr04jyJ%2BkPxeurlAMRH6G8M9BXworAqzDAdlJ%2BPBocenhmMUqAujCEa02XLWa%2BjI90R7fL%2BUTQXMrTB8bqYEg%2BunWs%2FI%2FQLGoQp5a9YXePkuK&X-Amz-Signature=1522b1185ac7109dc9f4eb20beba68b99a471f9fac7f0d34de2aa1bbed94e3cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
