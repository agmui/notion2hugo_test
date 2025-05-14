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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFTQDPIQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQD9qufQb6a1JJnKZd31ukg35gvFo7WKYVGnrsL0IKqhLQIhALlX0FrJng6XH7nENfcvn%2BCpmwP%2FDWrqVIPClYS69VX9Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyP9y1t0XYiKZQLGdkq3AN6m6oYCt%2FvczPkwnty%2F4uYZQqMRVhD3f5D%2BpjKXMkCWU4vg9b33Ij84csYNtZnV%2FKh4H2gmmWbpCvndyiCTT5FH2eAWrePY2cYZUPCannJtXPep4fUbTej3Pws40fUz29R%2F2jjsQevmFOein5FTLRInlXT4LYVxpiJWcIAdhjIyYCewKJLHo4qZqr1LEijEyzK%2FcBknHgY%2BVs0r4u5u4XrfBBLVsU2QF0z2w1hBSwJxlU0gGY9gQ07cTCXxA2se%2Bqad5YrwaOfliaZiCbkQ4ZKz06YTdxuJ%2FIi6SvUwzkfaFYeqKqLMeBD0B85Mt3UCHjj8tztsMwT6INpSWRFnzkWa7%2Bz2Dq02121XB60zS3NQDrpmG%2BhvLjL4XU5PF1xSOt7pT%2FZotYqe%2BrzCbukxyOAbdoUCvoO%2BksMWkN3uZgnEWvrYAC6G%2B0VzA2rouHd3905O7R02y%2BVWj6UoFLuKL9UmRDMpOmBBsqXlLOEaMwVt71hv6b6JfKCr5F1s5aK2hUm%2BCxlCm86yP51o6wzv9JZO8HiUBgTBNDjQ1g%2FFTlO1iEo21SZo71KWiUovLq5p3ty3Kop79on19c1%2FjzLyrNFbrXQhMgnWBUHFiaIAn1LaTpFypltmYrS7QCUEzDBopLBBjqkATa4gr0bsvb1k%2F9eW12CzG9L9ZrYR7efW8xkJjyCGydaw44%2Bzhc0OQYi%2BUFb7eObG3dIPWz5BVXlZeQVwWn9xADpPjiOqOGmmRAh%2Fx%2FX76wx%2Fyf40R443P65J2tnxieJGq6BS%2BuUDRJfQiuHwsq3sscLNtfVdGaxn4p50pIyYG4dQYsa1pUjizRN8BJMtN0WBlNkgWAtL%2B1HDUJr6Y4jnUOTLrZf&X-Amz-Signature=e1bf214ec76b75370c97b9a1cd22868a0cb5da5425fc20b6988865ecac1cbc1b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFTQDPIQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQD9qufQb6a1JJnKZd31ukg35gvFo7WKYVGnrsL0IKqhLQIhALlX0FrJng6XH7nENfcvn%2BCpmwP%2FDWrqVIPClYS69VX9Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyP9y1t0XYiKZQLGdkq3AN6m6oYCt%2FvczPkwnty%2F4uYZQqMRVhD3f5D%2BpjKXMkCWU4vg9b33Ij84csYNtZnV%2FKh4H2gmmWbpCvndyiCTT5FH2eAWrePY2cYZUPCannJtXPep4fUbTej3Pws40fUz29R%2F2jjsQevmFOein5FTLRInlXT4LYVxpiJWcIAdhjIyYCewKJLHo4qZqr1LEijEyzK%2FcBknHgY%2BVs0r4u5u4XrfBBLVsU2QF0z2w1hBSwJxlU0gGY9gQ07cTCXxA2se%2Bqad5YrwaOfliaZiCbkQ4ZKz06YTdxuJ%2FIi6SvUwzkfaFYeqKqLMeBD0B85Mt3UCHjj8tztsMwT6INpSWRFnzkWa7%2Bz2Dq02121XB60zS3NQDrpmG%2BhvLjL4XU5PF1xSOt7pT%2FZotYqe%2BrzCbukxyOAbdoUCvoO%2BksMWkN3uZgnEWvrYAC6G%2B0VzA2rouHd3905O7R02y%2BVWj6UoFLuKL9UmRDMpOmBBsqXlLOEaMwVt71hv6b6JfKCr5F1s5aK2hUm%2BCxlCm86yP51o6wzv9JZO8HiUBgTBNDjQ1g%2FFTlO1iEo21SZo71KWiUovLq5p3ty3Kop79on19c1%2FjzLyrNFbrXQhMgnWBUHFiaIAn1LaTpFypltmYrS7QCUEzDBopLBBjqkATa4gr0bsvb1k%2F9eW12CzG9L9ZrYR7efW8xkJjyCGydaw44%2Bzhc0OQYi%2BUFb7eObG3dIPWz5BVXlZeQVwWn9xADpPjiOqOGmmRAh%2Fx%2FX76wx%2Fyf40R443P65J2tnxieJGq6BS%2BuUDRJfQiuHwsq3sscLNtfVdGaxn4p50pIyYG4dQYsa1pUjizRN8BJMtN0WBlNkgWAtL%2B1HDUJr6Y4jnUOTLrZf&X-Amz-Signature=9b165d1b548db1b82e000619717ea9bc74fe7042ddf983e9335148845713dff2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
