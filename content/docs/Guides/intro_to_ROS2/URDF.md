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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLB3TJE6%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTWexLUelFcUWSUOThqNw%2BzeqzokuGID%2FYUjhODcEBwQIgUnJhZ5Urg5Z4cp1iZKLb60zYKnnnZUnEcQr1ipUKY4oqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnMervIi7M4VBbTLyrcAyN1DFf1RzWeU%2FXekFNVF%2BeHIO7C2weNipREV6CqSNXDfh%2FFPf6rhCylwASO12cahkA5jyuQ0jmXwB6TZYMh%2BScdkTm9Jk%2F3NVOwuL2xBy4HIXXwm6BqhBfpZAZiwAI65mSLEnymJZKhoFkhjy9XCqKcoRX2yAJDLNIwmT%2FD%2FGeZn33pKO8WWo6D4%2BLEYdMKTvByeZWuuI1vqmluEKwFD6TIUQQPcCelY%2BH9eiWrsjoYTBcPsT9CQW68C%2FLafmK2xTUb6BwBgMOafuTc2uhDto%2B2psVrfFZQRuGlDwOo9mJQicu%2BckU5MHyrfRBECaooMPptH0AQyUOjsFFkup60cAn7aoBK0QcEm1VK4ZCsKXuKDmennYEvJWGeBbR6K%2F4Cq1HJ9NDwlLkskPGrqHI%2FtKXjnS2gipLGpYlhcoD932qg19lPCQg0Md9biDh4d9Jv8eFbx4YRzXTVthElmfLdF47ThDkxr7uTCyD%2BS79xyw8ivA%2BByOh3AqLalTfmLwAmi7vgm9K6p0uWiph1JPY5aDuzHanbA9hPnkTFms0Kd32GrVnXHFs0e9iaFFUbDBlZ%2FHH0K4NgJsd8006dIshgt%2BGsmiCS3HELN706kPxKZKadkcuDHvXqWBWJTkjYMPy9%2FbwGOqUB7vsYyVxQFJlPboK1ggJqfY0df0r1P1hVxzbaj%2FnPjKiYgK5dO%2B7L5Oc3swYwqDp1rzABom8T4HQcqquxmmUNLW%2FUOAti4UzVgbev7Rf1L6vtWKvewHMJXQiYMDdoK6mEYnAjuarZMM1CgzCT2xUPRtj4JhvgK%2BOBLNzUdH07CIVyRaRV1KV%2BkLFSksDATIZFdcw9X9J2Ylzspj%2FOlPgnNR06f2vh&X-Amz-Signature=ec4844048defc6d35c68dafa1961b19181c676535b51a3517e73f7916b88027c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLB3TJE6%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTWexLUelFcUWSUOThqNw%2BzeqzokuGID%2FYUjhODcEBwQIgUnJhZ5Urg5Z4cp1iZKLb60zYKnnnZUnEcQr1ipUKY4oqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnMervIi7M4VBbTLyrcAyN1DFf1RzWeU%2FXekFNVF%2BeHIO7C2weNipREV6CqSNXDfh%2FFPf6rhCylwASO12cahkA5jyuQ0jmXwB6TZYMh%2BScdkTm9Jk%2F3NVOwuL2xBy4HIXXwm6BqhBfpZAZiwAI65mSLEnymJZKhoFkhjy9XCqKcoRX2yAJDLNIwmT%2FD%2FGeZn33pKO8WWo6D4%2BLEYdMKTvByeZWuuI1vqmluEKwFD6TIUQQPcCelY%2BH9eiWrsjoYTBcPsT9CQW68C%2FLafmK2xTUb6BwBgMOafuTc2uhDto%2B2psVrfFZQRuGlDwOo9mJQicu%2BckU5MHyrfRBECaooMPptH0AQyUOjsFFkup60cAn7aoBK0QcEm1VK4ZCsKXuKDmennYEvJWGeBbR6K%2F4Cq1HJ9NDwlLkskPGrqHI%2FtKXjnS2gipLGpYlhcoD932qg19lPCQg0Md9biDh4d9Jv8eFbx4YRzXTVthElmfLdF47ThDkxr7uTCyD%2BS79xyw8ivA%2BByOh3AqLalTfmLwAmi7vgm9K6p0uWiph1JPY5aDuzHanbA9hPnkTFms0Kd32GrVnXHFs0e9iaFFUbDBlZ%2FHH0K4NgJsd8006dIshgt%2BGsmiCS3HELN706kPxKZKadkcuDHvXqWBWJTkjYMPy9%2FbwGOqUB7vsYyVxQFJlPboK1ggJqfY0df0r1P1hVxzbaj%2FnPjKiYgK5dO%2B7L5Oc3swYwqDp1rzABom8T4HQcqquxmmUNLW%2FUOAti4UzVgbev7Rf1L6vtWKvewHMJXQiYMDdoK6mEYnAjuarZMM1CgzCT2xUPRtj4JhvgK%2BOBLNzUdH07CIVyRaRV1KV%2BkLFSksDATIZFdcw9X9J2Ylzspj%2FOlPgnNR06f2vh&X-Amz-Signature=5917e6be72ff9b39c8ef6216623f58d4bb43a6d3db609d4c9977a0eb6ca68288&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
