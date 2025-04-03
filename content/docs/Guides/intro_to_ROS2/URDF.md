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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JNMPN4O%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4dTm0ay8ztsyKvB%2FVcao7GEx548YNhYih13mJrv%2F2SgIhAKxI7SRRuEF6e0eknWs42KvzxSSdZQGncVSkh8kj4WCxKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoHBQ%2FcqCn%2FJQroSsq3AOzPuougonQOQB6HqXQl22f0hFtwM3FcP%2Bs5GuUyFDh5GwE4mFKBS%2BmEm7zyG5QYRZAacpE24nVs8AmDedp3CuKg9zJKACeEoW2e%2F3b3EiAEsCypn7H9Z%2BIY1ygCVhjYyy52HqaXUAiZ2hoiPA4n2dnT8AIffrwbN%2FhTbXdnAwcV91j8ZOpcjN4hdzD38rMgUawv2O8Dw4IbO7l844CxHnq85iBdGu8WWi7IhNrYOQuGwVXe97bw2UpejCrq9euhkTKsCd8jvGNfpWlLZU%2B8%2B2oqs%2BBAKIihW7tWYeOYTFPGqKZGSfPw1EKXx7QqWYPRlqoJZS5cq92NS7Ie8ErJXAy9s4rHB3GilSIEr6k99hb4cKZ%2BLrn8n%2FFQcOGs%2Funs7qvfayckdrY6wO44IIlaDLVCnjBpgaRq22BUwhsXAFbMx4LNyePPVvmUXduujLuh5ZFZzL6XTLE9HMBNPsq5GyKTp7hsrCJUkWKflsbXWTJ9KY%2F6aGOMT8Wm23sMemyhoOK39FZVGD5Xzl4xEkz11QarqqUzBzHOkttpsD5EgPvWM33Dwvqk7AjmP2svOVsFckCZxjVcLkG1HyeI5PUkWhyEzBJi6k0rODFPup8Nix4GJzAUJQnAO6BXsIIUjC547m%2FBjqkASSy5B2OxeV0vVupWp8qs7qVWFaIK%2B4KD0uKwR21cb%2FuFTQsh9kn%2BZRsAc5WIgX9xsIVBoaz0akWeqYoW3WFJKr3CxfeY3lVnavduA2WPf7nAouGkmrLgrY%2FbURLvOQNekF4HjTpv%2ByU7PCsG4B7ARILG%2FmvjKSIMy4AaKvZSM%2Bxln1SUQ131MlKE6Ezv9aOllHnj%2FGLDFsM2ceJVDGJkfNzjI4a&X-Amz-Signature=f185bae6c16f399138abc795eb38cffb7b81508072c795da2455072ee049a707&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JNMPN4O%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4dTm0ay8ztsyKvB%2FVcao7GEx548YNhYih13mJrv%2F2SgIhAKxI7SRRuEF6e0eknWs42KvzxSSdZQGncVSkh8kj4WCxKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoHBQ%2FcqCn%2FJQroSsq3AOzPuougonQOQB6HqXQl22f0hFtwM3FcP%2Bs5GuUyFDh5GwE4mFKBS%2BmEm7zyG5QYRZAacpE24nVs8AmDedp3CuKg9zJKACeEoW2e%2F3b3EiAEsCypn7H9Z%2BIY1ygCVhjYyy52HqaXUAiZ2hoiPA4n2dnT8AIffrwbN%2FhTbXdnAwcV91j8ZOpcjN4hdzD38rMgUawv2O8Dw4IbO7l844CxHnq85iBdGu8WWi7IhNrYOQuGwVXe97bw2UpejCrq9euhkTKsCd8jvGNfpWlLZU%2B8%2B2oqs%2BBAKIihW7tWYeOYTFPGqKZGSfPw1EKXx7QqWYPRlqoJZS5cq92NS7Ie8ErJXAy9s4rHB3GilSIEr6k99hb4cKZ%2BLrn8n%2FFQcOGs%2Funs7qvfayckdrY6wO44IIlaDLVCnjBpgaRq22BUwhsXAFbMx4LNyePPVvmUXduujLuh5ZFZzL6XTLE9HMBNPsq5GyKTp7hsrCJUkWKflsbXWTJ9KY%2F6aGOMT8Wm23sMemyhoOK39FZVGD5Xzl4xEkz11QarqqUzBzHOkttpsD5EgPvWM33Dwvqk7AjmP2svOVsFckCZxjVcLkG1HyeI5PUkWhyEzBJi6k0rODFPup8Nix4GJzAUJQnAO6BXsIIUjC547m%2FBjqkASSy5B2OxeV0vVupWp8qs7qVWFaIK%2B4KD0uKwR21cb%2FuFTQsh9kn%2BZRsAc5WIgX9xsIVBoaz0akWeqYoW3WFJKr3CxfeY3lVnavduA2WPf7nAouGkmrLgrY%2FbURLvOQNekF4HjTpv%2ByU7PCsG4B7ARILG%2FmvjKSIMy4AaKvZSM%2Bxln1SUQ131MlKE6Ezv9aOllHnj%2FGLDFsM2ceJVDGJkfNzjI4a&X-Amz-Signature=3a6ced364f42a50955baf8dc40dd440bfccb742140a4a8b1dc0425bcbd37ebb5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
