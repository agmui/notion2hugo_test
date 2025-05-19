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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJSUQNC%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBhp7M%2BiTFTyPbISptxzOaHyO9h53aOMuBqNNu41M46AIgernkkARroo2Zpl7W7Z2EIeIfmw5IsSp4YPTNGkI%2FN%2FkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXRrDonNlkblmaRRircAy5EqgAX3myyqSKGrQ7N6tQYDgYNyQ3sEWrtxYY0NI657QyuxiNv7xc0WxhDEs7PRokNvwb25EA7%2Fq3G19Lu7MTLtQVSufDZyiVLTa9FiPzD64bBybw9T9WTiboPj5ZYaCMLNdyBciVcgnzf919WS%2B6gDX%2BN8q7qVoM8ELiI8nM24w73xrH76RPkw8CD%2FmLerIN4M5XzNNJrNgFNo8qOH%2F%2BFx3DkRjP2IFkUV5mZgpMLp2E8BJqGDS5yR%2FhTYXmdyvu5zrwlk94gov9B9Rbd0kmB%2FmJGDZ5ptDA5PT0zXucEjAlke0%2Faj2bBYTEtCf%2BfMHFCsW71rh04fcOaqFTtio%2F8efetGw8DAD7sa0mZa3apg5oYsMuCmkq%2Fjo%2Fkqt0YYfhxu2Bzs7HTiT3ZDkxLD0wGYl2U8UbDuxz9SsdIKLATtsqfevfnLRTULisRJjTx9OmV1zCBzSuuZn3uZElmJ1%2FX7UhxekxrCe4PU3jDlYOLDJ%2FT4YuBreMeWoU6rfEG%2BYPgcJ5SySVcm5xv4PdZ44lKyhY%2BvXV4paAtI5Z57KQ2BKPlaeSzS5rbtywXXsy3u7nOvtns09yciDDp3XyXo76I4kvFd4sUEPcoeYlztMABcUN6JzO4s5JAW9pfMLuBrMEGOqUBe6g0%2BWmNJZHB7fnyNiP%2BpPuQZILHfb8JdGCJ41lsvFM9t%2BEtNz8ehIo1Pd09gpam1eknFTa62gTTHHxeHzgIOcsFGiWKw8N4k9F7Wx%2FXE%2F867GH1QsmtVFNK9oDhjnlQMsCk0UfDqIcUYshn3Mk8lGXqj3d35%2BSk0MWfEXIzJmfaAm7ccYGXJxZ%2BJvJxy0Xz%2B9qMiyeEuJAjhXcTYN3bIPcrQSEo&X-Amz-Signature=421a37f7e9c694f45c3802230a4dde0d6a0998acc1ea900c4fe63f9bd01ab4df&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJSUQNC%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBhp7M%2BiTFTyPbISptxzOaHyO9h53aOMuBqNNu41M46AIgernkkARroo2Zpl7W7Z2EIeIfmw5IsSp4YPTNGkI%2FN%2FkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXRrDonNlkblmaRRircAy5EqgAX3myyqSKGrQ7N6tQYDgYNyQ3sEWrtxYY0NI657QyuxiNv7xc0WxhDEs7PRokNvwb25EA7%2Fq3G19Lu7MTLtQVSufDZyiVLTa9FiPzD64bBybw9T9WTiboPj5ZYaCMLNdyBciVcgnzf919WS%2B6gDX%2BN8q7qVoM8ELiI8nM24w73xrH76RPkw8CD%2FmLerIN4M5XzNNJrNgFNo8qOH%2F%2BFx3DkRjP2IFkUV5mZgpMLp2E8BJqGDS5yR%2FhTYXmdyvu5zrwlk94gov9B9Rbd0kmB%2FmJGDZ5ptDA5PT0zXucEjAlke0%2Faj2bBYTEtCf%2BfMHFCsW71rh04fcOaqFTtio%2F8efetGw8DAD7sa0mZa3apg5oYsMuCmkq%2Fjo%2Fkqt0YYfhxu2Bzs7HTiT3ZDkxLD0wGYl2U8UbDuxz9SsdIKLATtsqfevfnLRTULisRJjTx9OmV1zCBzSuuZn3uZElmJ1%2FX7UhxekxrCe4PU3jDlYOLDJ%2FT4YuBreMeWoU6rfEG%2BYPgcJ5SySVcm5xv4PdZ44lKyhY%2BvXV4paAtI5Z57KQ2BKPlaeSzS5rbtywXXsy3u7nOvtns09yciDDp3XyXo76I4kvFd4sUEPcoeYlztMABcUN6JzO4s5JAW9pfMLuBrMEGOqUBe6g0%2BWmNJZHB7fnyNiP%2BpPuQZILHfb8JdGCJ41lsvFM9t%2BEtNz8ehIo1Pd09gpam1eknFTa62gTTHHxeHzgIOcsFGiWKw8N4k9F7Wx%2FXE%2F867GH1QsmtVFNK9oDhjnlQMsCk0UfDqIcUYshn3Mk8lGXqj3d35%2BSk0MWfEXIzJmfaAm7ccYGXJxZ%2BJvJxy0Xz%2B9qMiyeEuJAjhXcTYN3bIPcrQSEo&X-Amz-Signature=523fa118eac7fe4a252379ff05ae6587d3aacf39d810e4bf39dcd536d58ef46d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
