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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677K2E4VH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIEw%2FUXTOXldxUTFeEimxwp5hMlzusYFOl3avZg9rgPWFAiAW%2BeHMwvrVctuEN33IE%2FU9%2F%2F6fgV%2FOiM2DbID7yxUsDir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM1aTBNyon7kyyiBxAKtwDBJOa5BWd03bOO%2BMyGgd8TDT59FXoj8fpQ0uQLm4NX%2FCK4ayZlse%2FDxDPzD79yUdnhf%2BLBm5NFItYrgmD3R3YPId0o5e754PbRUEYad3mZCYs0zP9wNLmoU4kuiFglGj75wRYb0RgJcKb0BynsqRBtjMeVtcR5rVEXQ5spaL7RSpWwYLNWdHAX7VauUUtTq3o2mDxNYdP4MLaM8Gtn%2FYYKepn9es76RGvRfubcmSaHbW4B99glHVS1u2vb%2F7pcA3f3Y%2F8WlAolb2ye%2BnQ9w%2FGj3pq9JiMCCw3R8arBFK8Kbo29y4mUKc8F7VJTOGjrQ3y8YNJgyhJv6nf4XFO7URGrGPSqqYw5b8r52Pa9cm3g4W0mfNMkJITQh2JH15d6cNkZfQWSKvn2cBIDUblyZXBHKh5LAbdr1fCKiXg5kOCG1nuxC6j42SI140xpEvn77YQqRYItqZiZi0RsRo3Ufs0Xf1qJyn%2BF%2Bm2AIAdWkD9VBJAH4iyqzhBoUzL3pglyNSuUQ7XnKam4luUqfd6JiCtWpLY%2ByAjIg6eAS6HJnwXuEQq03Pyn8yypDNuTI3lhSDg%2FZgCTpxSJUkWzUKTcThXtsI%2FKqqYHH7sqBYWGV6No3uGQeWSufMsci8e0EQw076twwY6pgE7skBlYK2TosuIdQWKBxubnctN76hdhZt%2FE91qBrUHrOhHqgxlVDwduQUHkns8pvhfBgBgiOFav4ueKBftBwRoRY0w6ERXk2Lbdh6W6QHB6Rh4SoOx6%2FFhsyJsfpHHFihZAmddFV4YRR5OEnQywyffIAxigDxJ6Kt87Oi4G5WYcUUxLpbNYUx0IzKE2vSraLJEluGsQx7XoHceHJb4aigz3r6HIrUQ&X-Amz-Signature=5fe9ccd4a6475ab40b487817924440c11df3a94ea8e73d4bcab3a0524821558b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677K2E4VH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIEw%2FUXTOXldxUTFeEimxwp5hMlzusYFOl3avZg9rgPWFAiAW%2BeHMwvrVctuEN33IE%2FU9%2F%2F6fgV%2FOiM2DbID7yxUsDir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM1aTBNyon7kyyiBxAKtwDBJOa5BWd03bOO%2BMyGgd8TDT59FXoj8fpQ0uQLm4NX%2FCK4ayZlse%2FDxDPzD79yUdnhf%2BLBm5NFItYrgmD3R3YPId0o5e754PbRUEYad3mZCYs0zP9wNLmoU4kuiFglGj75wRYb0RgJcKb0BynsqRBtjMeVtcR5rVEXQ5spaL7RSpWwYLNWdHAX7VauUUtTq3o2mDxNYdP4MLaM8Gtn%2FYYKepn9es76RGvRfubcmSaHbW4B99glHVS1u2vb%2F7pcA3f3Y%2F8WlAolb2ye%2BnQ9w%2FGj3pq9JiMCCw3R8arBFK8Kbo29y4mUKc8F7VJTOGjrQ3y8YNJgyhJv6nf4XFO7URGrGPSqqYw5b8r52Pa9cm3g4W0mfNMkJITQh2JH15d6cNkZfQWSKvn2cBIDUblyZXBHKh5LAbdr1fCKiXg5kOCG1nuxC6j42SI140xpEvn77YQqRYItqZiZi0RsRo3Ufs0Xf1qJyn%2BF%2Bm2AIAdWkD9VBJAH4iyqzhBoUzL3pglyNSuUQ7XnKam4luUqfd6JiCtWpLY%2ByAjIg6eAS6HJnwXuEQq03Pyn8yypDNuTI3lhSDg%2FZgCTpxSJUkWzUKTcThXtsI%2FKqqYHH7sqBYWGV6No3uGQeWSufMsci8e0EQw076twwY6pgE7skBlYK2TosuIdQWKBxubnctN76hdhZt%2FE91qBrUHrOhHqgxlVDwduQUHkns8pvhfBgBgiOFav4ueKBftBwRoRY0w6ERXk2Lbdh6W6QHB6Rh4SoOx6%2FFhsyJsfpHHFihZAmddFV4YRR5OEnQywyffIAxigDxJ6Kt87Oi4G5WYcUUxLpbNYUx0IzKE2vSraLJEluGsQx7XoHceHJb4aigz3r6HIrUQ&X-Amz-Signature=44e42ad67ed983a11173de39167bb2eb18d302f7e067c52fd26d173a97e1371c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
