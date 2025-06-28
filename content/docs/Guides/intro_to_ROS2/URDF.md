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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QITD4GLJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtHLavue9E80vqc7gR%2FFVRs26kOz5%2BXB16Lq28sJTbWwIhAJ7VNEQuIrJ76fZrJL8lTz1bqDiiboRw4bnWGAE61qLbKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdUzOgGpZikWJV2Tgq3APhG0TEqacLtj%2FUD14VYxhVOe4ekJJU2RRpTzCActkPyScoLniT0M%2FcM%2B0qK%2B7S%2B1%2FSbB8zYj6BnvgzMwCeLP0ZROCzf5hh%2F89pf0YOX7EBoRUpywSykNx5L%2BuLgljGB72xOOzxGbFBbWsdV7lO5QL%2BCNQIsxJjvLspHAqu9sozn8VZfMZIfA2hDi9W0V23AqKrSkjL50pOea709uJ2ilKMHBZrDWvxt%2FufvvF17KliE%2FJNWVW74B6RbJzhc7kP6i1HmQuGYygYI9XRm4O7FWU8vJSR05KNOi5Q36WDKOf3rv1UCgn5Avy2w0MgAH91yvrBhPb%2BE7y3XtgLyREQhkgBy1PMyvbdrS9CqZgZujx77oLU22k0TwtxXOzII%2BDnzkyrpelu6M%2Fa%2FpYYGnHRK%2FCbZBqFkHlBd9%2FnMuE2l7I91EdXusEq00N8NyJuQYIAQ%2FT3GjDtiAqDaaQCgKgbhvwF%2Fp9OJ3TWGhrYbxbOInzjRD2h%2Fk4o0%2BLfkzCEqJyKx1bqtzTkPmZcclivW19sUsHFSGPcAsLitunCB2JBmh0zOcYTCIEapuSiszFWXrkZuk737bWOxemScDqIR4GFWhA%2FPM4Hn499BbhM5AksIEElGVAKJfv8YelwZsencjCC9YDDBjqkASr%2BvzhLxy%2Bx0XGgoYUUc40q6ExAaclg%2B7999kn60fTYiBi60WAHMeWT%2FuPgIr%2FUo5wFJ4z6THtoq8An4r6oaySgKGD78fmcACa5WbuSALimHgFkNh86M6Rs2z63jzfE2FTE9ETuedyEZqlQYjNEN3yg1%2F4z0rmAKpwR6fHyI4mWn5ax4drMnfaBUfkxFpZhlbiQ%2FD35mYMun3e%2FBCqMTnL6w9An&X-Amz-Signature=cbd9c117f541ee94971fbd2e18efc15fb8da52a2d428effaf09b4a0b5f3a0444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QITD4GLJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtHLavue9E80vqc7gR%2FFVRs26kOz5%2BXB16Lq28sJTbWwIhAJ7VNEQuIrJ76fZrJL8lTz1bqDiiboRw4bnWGAE61qLbKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdUzOgGpZikWJV2Tgq3APhG0TEqacLtj%2FUD14VYxhVOe4ekJJU2RRpTzCActkPyScoLniT0M%2FcM%2B0qK%2B7S%2B1%2FSbB8zYj6BnvgzMwCeLP0ZROCzf5hh%2F89pf0YOX7EBoRUpywSykNx5L%2BuLgljGB72xOOzxGbFBbWsdV7lO5QL%2BCNQIsxJjvLspHAqu9sozn8VZfMZIfA2hDi9W0V23AqKrSkjL50pOea709uJ2ilKMHBZrDWvxt%2FufvvF17KliE%2FJNWVW74B6RbJzhc7kP6i1HmQuGYygYI9XRm4O7FWU8vJSR05KNOi5Q36WDKOf3rv1UCgn5Avy2w0MgAH91yvrBhPb%2BE7y3XtgLyREQhkgBy1PMyvbdrS9CqZgZujx77oLU22k0TwtxXOzII%2BDnzkyrpelu6M%2Fa%2FpYYGnHRK%2FCbZBqFkHlBd9%2FnMuE2l7I91EdXusEq00N8NyJuQYIAQ%2FT3GjDtiAqDaaQCgKgbhvwF%2Fp9OJ3TWGhrYbxbOInzjRD2h%2Fk4o0%2BLfkzCEqJyKx1bqtzTkPmZcclivW19sUsHFSGPcAsLitunCB2JBmh0zOcYTCIEapuSiszFWXrkZuk737bWOxemScDqIR4GFWhA%2FPM4Hn499BbhM5AksIEElGVAKJfv8YelwZsencjCC9YDDBjqkASr%2BvzhLxy%2Bx0XGgoYUUc40q6ExAaclg%2B7999kn60fTYiBi60WAHMeWT%2FuPgIr%2FUo5wFJ4z6THtoq8An4r6oaySgKGD78fmcACa5WbuSALimHgFkNh86M6Rs2z63jzfE2FTE9ETuedyEZqlQYjNEN3yg1%2F4z0rmAKpwR6fHyI4mWn5ax4drMnfaBUfkxFpZhlbiQ%2FD35mYMun3e%2FBCqMTnL6w9An&X-Amz-Signature=567f1f9c0c9a72e961561d5dc0e9fc5d8c174a7ca7b6afa7a32a47b6b8a5644f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
