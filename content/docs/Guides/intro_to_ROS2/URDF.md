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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYCDCAPW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlKD0OYsm2uwHANk5gp6wty7iWO8FYxEZaPl5pAaKZRAiBcb71yk%2BEhmjI7sX8R1r9Rwqf5R3SIWe9Oy7IpRNSdrSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4H53HmKCALJEK6PwKtwDFVjmYLiFjWJ%2BdZqE3LdldtANaLLBjoEcoCMc%2Fog2g7ObKCwtOPQII7LXE9ecfUStKZq3B41H8wUpXBaFxn4sxAdQIEh%2FEOwmSCLtBbaAQaUpXRfp3x1hb9ckahw8GvgERq7He2jao53ySzw40WNwLn8ZFegD73cF79JdTX3KlYubUYOQNcEKEy4MvQU7SoF%2BDXgrj2FWxQmBFDtGrVGJFeg4xvbJue9tou0ewWbx%2BzGHstJnMWb1ABHq%2BDhrc%2BEOtWfYPiKXQ5iGcbnKqDcBBxbe3qIBNylg6Y3YRwvY1zIfAaYnC%2BchnJTfZ40Xy578k749u4XWaQ6xq2cx5p3ryuf8he%2BWczUITGJ3xZuBM456Svb2BVwpggHL9eRn319H5VoxS2pgV%2BxIYg9dEolZ5cVLrC2lh%2FjKRJuIaoj51Fzqmkg9J67x7GSeI%2FIwFUv5dzI%2BOxnS4XIxiAIRclLKZWWF67B581IG4jQYgKmNMY51OeLwzoIm7zN1z69S28XkQIJ7NivJufP7gSTkDcVYtl9biqSsPY1S9q5jTd%2FdAJRl6O2kzb%2Fi16N1SkWnz1WOhqaAD49588N0APiwsPiGmi4dYzfwfJgvN2fBwn9e3P81EuI%2F74fEPsEqCYMw09zzwwY6pgGhlo8iy1ZRFWtVpXY3Atd6fyYMPkF0ITGfIQCYmJ6A%2ByBY0bgna3Qze6YiPRPYajumiRSOQE%2B1IMVdZTuHlYSKF6KQeTyippn%2B5BlSs6aE3Fgi7v6PdnDTjRKaoseD7vlUXS8M0h3D1yVqnaD0cgXWWlv0BUXeAKCRAgF5aKfaJvf2jn1p%2FxThcNSxp4CN6sfviic0t%2Ft%2BeA8bCWzbfx8YwcRxZ%2BdX&X-Amz-Signature=af9b613741aa59571162d44abdcc5a3d47792fc33bbae9952554986bd45c9d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYCDCAPW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlKD0OYsm2uwHANk5gp6wty7iWO8FYxEZaPl5pAaKZRAiBcb71yk%2BEhmjI7sX8R1r9Rwqf5R3SIWe9Oy7IpRNSdrSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4H53HmKCALJEK6PwKtwDFVjmYLiFjWJ%2BdZqE3LdldtANaLLBjoEcoCMc%2Fog2g7ObKCwtOPQII7LXE9ecfUStKZq3B41H8wUpXBaFxn4sxAdQIEh%2FEOwmSCLtBbaAQaUpXRfp3x1hb9ckahw8GvgERq7He2jao53ySzw40WNwLn8ZFegD73cF79JdTX3KlYubUYOQNcEKEy4MvQU7SoF%2BDXgrj2FWxQmBFDtGrVGJFeg4xvbJue9tou0ewWbx%2BzGHstJnMWb1ABHq%2BDhrc%2BEOtWfYPiKXQ5iGcbnKqDcBBxbe3qIBNylg6Y3YRwvY1zIfAaYnC%2BchnJTfZ40Xy578k749u4XWaQ6xq2cx5p3ryuf8he%2BWczUITGJ3xZuBM456Svb2BVwpggHL9eRn319H5VoxS2pgV%2BxIYg9dEolZ5cVLrC2lh%2FjKRJuIaoj51Fzqmkg9J67x7GSeI%2FIwFUv5dzI%2BOxnS4XIxiAIRclLKZWWF67B581IG4jQYgKmNMY51OeLwzoIm7zN1z69S28XkQIJ7NivJufP7gSTkDcVYtl9biqSsPY1S9q5jTd%2FdAJRl6O2kzb%2Fi16N1SkWnz1WOhqaAD49588N0APiwsPiGmi4dYzfwfJgvN2fBwn9e3P81EuI%2F74fEPsEqCYMw09zzwwY6pgGhlo8iy1ZRFWtVpXY3Atd6fyYMPkF0ITGfIQCYmJ6A%2ByBY0bgna3Qze6YiPRPYajumiRSOQE%2B1IMVdZTuHlYSKF6KQeTyippn%2B5BlSs6aE3Fgi7v6PdnDTjRKaoseD7vlUXS8M0h3D1yVqnaD0cgXWWlv0BUXeAKCRAgF5aKfaJvf2jn1p%2FxThcNSxp4CN6sfviic0t%2Ft%2BeA8bCWzbfx8YwcRxZ%2BdX&X-Amz-Signature=f7d07dc49ec52225bf5ecc2c8edebbaf0663fb3c2e72fe206328908185df7a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
