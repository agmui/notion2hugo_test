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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STHPBCJ5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP2NdqM0ZxTzwFo8Fz%2BquzHGONmKhuQfEiY%2FUE74zu2gIhAN7pK7VWQQ78RebIDUKk10aiUY2Z7e44mkZ4Jns0hi%2FAKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaV8khZR9PiPmEY%2Fgq3APkuTCBxkDpuxZHMNSeRtej3SDOvgz%2FMEJ%2Bv%2FwZ5ojI8m2gCFH%2BCwvpSmhRAUMxeafxWKHAvd6nxpfaMSdh%2FyhajOIznujFAhZNUupOF%2BMzFHu3EoZ26erMdlBvuEaX2T%2FtTX%2BP27rIODh0sfuAojrg34bBLmwVvdJGVJ7IONa0ovFGLuCk2FoKxyhoPSMGe033GxBBECvO8pJyZPQscYj9iypFtZLwjWiYuOk9SKKvz3ntCLpZCUojyHt6V6oG5vjARtXIMPbuHhGqR7Vv8euLVgkmdBKMqZ7ys64mpH4XjhGhvhYE4VcMFap8SSUEQq6gWEuat9qfBHKt9s1MHHh2tYdBo2qV7fMJ4BD%2FfmDi5OvfB%2F8evtUcP7fTlf8f4dFyyiicM6YgaRch5ybhllpKwyqQeFdCv5mj6XeuYcbxw4SPxVwvw5K9T7wwZjodkRoIRgkCGaSsxOpRb4Cvh6qDuDATIwULhJ4GJ8eN0q3YGenE9X1babsXkFbPjUso%2Bq4eKQiPSJLwwMl0Cua58IxI7YzF3zAgHewphlVrjmQdCo%2F%2B7vicJhWJbQ0%2Bmj0bMocywnNZx0b64tVo0UnpA6WibfMPvpT80D%2FdBC59NKWdOP0QY1gEsz7xadDvDjCTk%2FfDBjqkAYiA%2BMho9cg4mTxFPlRPvtQ%2BAS2%2FuGTe1ufUzJVFzQgYrv44yZMR%2BY131lrmcAFt%2F9qmBvqEP7F7jjBjYyGn4DDUWw3YBlUjcLiSMAvjcukhtdeo%2FR5B%2B%2BLmij%2FaX1MB0%2BARWqAVLAMuZmOGgJR9sJUDto%2BvDsAZw1kT%2FoKq6uHqnBg1GGkKI5%2Bx3mCDYHmhgUdId%2FmuIYg7bOMz149wZWQUTIX%2F&X-Amz-Signature=81a39df0f52dad1b6a51c85cdf30462b07126080c0849faf3bea80eeb4bfaf09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STHPBCJ5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP2NdqM0ZxTzwFo8Fz%2BquzHGONmKhuQfEiY%2FUE74zu2gIhAN7pK7VWQQ78RebIDUKk10aiUY2Z7e44mkZ4Jns0hi%2FAKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaV8khZR9PiPmEY%2Fgq3APkuTCBxkDpuxZHMNSeRtej3SDOvgz%2FMEJ%2Bv%2FwZ5ojI8m2gCFH%2BCwvpSmhRAUMxeafxWKHAvd6nxpfaMSdh%2FyhajOIznujFAhZNUupOF%2BMzFHu3EoZ26erMdlBvuEaX2T%2FtTX%2BP27rIODh0sfuAojrg34bBLmwVvdJGVJ7IONa0ovFGLuCk2FoKxyhoPSMGe033GxBBECvO8pJyZPQscYj9iypFtZLwjWiYuOk9SKKvz3ntCLpZCUojyHt6V6oG5vjARtXIMPbuHhGqR7Vv8euLVgkmdBKMqZ7ys64mpH4XjhGhvhYE4VcMFap8SSUEQq6gWEuat9qfBHKt9s1MHHh2tYdBo2qV7fMJ4BD%2FfmDi5OvfB%2F8evtUcP7fTlf8f4dFyyiicM6YgaRch5ybhllpKwyqQeFdCv5mj6XeuYcbxw4SPxVwvw5K9T7wwZjodkRoIRgkCGaSsxOpRb4Cvh6qDuDATIwULhJ4GJ8eN0q3YGenE9X1babsXkFbPjUso%2Bq4eKQiPSJLwwMl0Cua58IxI7YzF3zAgHewphlVrjmQdCo%2F%2B7vicJhWJbQ0%2Bmj0bMocywnNZx0b64tVo0UnpA6WibfMPvpT80D%2FdBC59NKWdOP0QY1gEsz7xadDvDjCTk%2FfDBjqkAYiA%2BMho9cg4mTxFPlRPvtQ%2BAS2%2FuGTe1ufUzJVFzQgYrv44yZMR%2BY131lrmcAFt%2F9qmBvqEP7F7jjBjYyGn4DDUWw3YBlUjcLiSMAvjcukhtdeo%2FR5B%2B%2BLmij%2FaX1MB0%2BARWqAVLAMuZmOGgJR9sJUDto%2BvDsAZw1kT%2FoKq6uHqnBg1GGkKI5%2Bx3mCDYHmhgUdId%2FmuIYg7bOMz149wZWQUTIX%2F&X-Amz-Signature=6d2cbb6e3c7209abb6905dccadc99d28b2e822166702cb90249d8c131a1ff19c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
