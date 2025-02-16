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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNWZSPXN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIA78EbrtQMG20fBwNS%2BPezLoqilJgGwBnjp4n9wgk6RgAiBB4VwVMYlZ1kw9IExF0ldjUSY2%2BfffDbVQg8CfFzhEoSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMdNJhkCAJRM2TkK%2B7KtwD9fOiPRjhlIJ7JAT6YRuUP2T6fUo%2FmfBhd4%2Bb1S%2BIGRsWH9mOdDK7%2Fyb4nKdU3ZkIn6yrudIVqcZSd1fBIHDJkmBfJA29fLnJNyVV%2FpRCOfmywgqeLUXaAX4u4WtNC%2FSG9ndj%2FX8ayWtIgQRAIkslMOIFYefvk44sxiXx6DHkDy9ZC3q0dNNQqoiBTc2V6vDcwB8hj4aOSQn6ZfVXi%2BzuDVOyboq34oywKRDsrFFe6eB5Qvda02SYvuPwwBZ%2BrhjTYPM8tHyO2DVbA%2Fd3bcd4jSt1JuM6DpQHOv3q9GqcbfUuZS%2F9yv2rvukH%2FJ0fpzbPN3E3Oi5K5ltvOsj8wYvC%2FWcsWpYdcZLuivfq5gBq3XbU2B%2BCE%2BPLwZIU2Zcdi2XvsWAl3Q9sTQ08Pk9OVyV26zK8onrLWZylQY5VP8avO5ggEv1yrz48ipHTiTU%2BkJo8eL8tWh2hIitI1rUc7GAfK7tQ6nz%2FbkhRb%2B%2BoxqwMW%2FyJmkJAvDG8TuhiwSeKCFwoXg6q1S%2B%2Bg3M8tnc0vPcObrRvizQBNL5j%2BKKNSpraJtPXO0klzXTZUq4LnHuyOwWfwe4c0M41887gbua7CfshhwBMjRmkJ8X7N5Q89ergW%2FE6yt44ROTUkeHYmRsw3ofJvQY6pgH7FaKzLfiEAzvfy3Ysq0J9z9U4A6k7E3kD0iWOzasPgMvTPiQ%2FuEeTTDR7SlyjCXSDLS8gUFcOpaZ%2FWD3KdwUwlCJSViki1nrFjpSjpgal3zShZ5dLJEeepGX83JNJXVCF%2FBsphBoZvX3TYmfx4dZMbW5KHBAgr%2B3cXMIUrT5rzPCDWTp81SX9a28%2BqbKY%2B1sGF0Qgc3tZW23BGXgoXMdF3sxGRVAn&X-Amz-Signature=046cd8d8fc1a5bccf7da1f2daaa5b5753f25c605ebf21e626a13e30b8e843821&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNWZSPXN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIA78EbrtQMG20fBwNS%2BPezLoqilJgGwBnjp4n9wgk6RgAiBB4VwVMYlZ1kw9IExF0ldjUSY2%2BfffDbVQg8CfFzhEoSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMdNJhkCAJRM2TkK%2B7KtwD9fOiPRjhlIJ7JAT6YRuUP2T6fUo%2FmfBhd4%2Bb1S%2BIGRsWH9mOdDK7%2Fyb4nKdU3ZkIn6yrudIVqcZSd1fBIHDJkmBfJA29fLnJNyVV%2FpRCOfmywgqeLUXaAX4u4WtNC%2FSG9ndj%2FX8ayWtIgQRAIkslMOIFYefvk44sxiXx6DHkDy9ZC3q0dNNQqoiBTc2V6vDcwB8hj4aOSQn6ZfVXi%2BzuDVOyboq34oywKRDsrFFe6eB5Qvda02SYvuPwwBZ%2BrhjTYPM8tHyO2DVbA%2Fd3bcd4jSt1JuM6DpQHOv3q9GqcbfUuZS%2F9yv2rvukH%2FJ0fpzbPN3E3Oi5K5ltvOsj8wYvC%2FWcsWpYdcZLuivfq5gBq3XbU2B%2BCE%2BPLwZIU2Zcdi2XvsWAl3Q9sTQ08Pk9OVyV26zK8onrLWZylQY5VP8avO5ggEv1yrz48ipHTiTU%2BkJo8eL8tWh2hIitI1rUc7GAfK7tQ6nz%2FbkhRb%2B%2BoxqwMW%2FyJmkJAvDG8TuhiwSeKCFwoXg6q1S%2B%2Bg3M8tnc0vPcObrRvizQBNL5j%2BKKNSpraJtPXO0klzXTZUq4LnHuyOwWfwe4c0M41887gbua7CfshhwBMjRmkJ8X7N5Q89ergW%2FE6yt44ROTUkeHYmRsw3ofJvQY6pgH7FaKzLfiEAzvfy3Ysq0J9z9U4A6k7E3kD0iWOzasPgMvTPiQ%2FuEeTTDR7SlyjCXSDLS8gUFcOpaZ%2FWD3KdwUwlCJSViki1nrFjpSjpgal3zShZ5dLJEeepGX83JNJXVCF%2FBsphBoZvX3TYmfx4dZMbW5KHBAgr%2B3cXMIUrT5rzPCDWTp81SX9a28%2BqbKY%2B1sGF0Qgc3tZW23BGXgoXMdF3sxGRVAn&X-Amz-Signature=da65d787e3dad32d6ebe56e4e03279cf75558118d983e3750e8b2a650098ccb4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
