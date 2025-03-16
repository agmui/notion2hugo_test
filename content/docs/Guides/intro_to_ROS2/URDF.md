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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D5L5E75%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpub3cSHi2SwMHlc%2FJFHcooj8Ayefem5CFJQBjTYWEQAiAIhzgdTZFM%2Fx0PCS2tAfBW9BroP7RpTSUN2lKqdRxo%2Fir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIML5A2Nj7MMbYTGpQvKtwDXsHlg5ZuUA0fY30xkXY93T0XotCU7q57RAzuCfmViKttKDD9dh1oBmCqDmbzwz7sZ3r5UZy3b%2BOSqGA74XSj6Osds6as%2BXVgIYIC9Ay5yh%2FErWh7IEQccUlMRM3R3I64Erx176gQPmG5EM6vkJI9ryWvUVFBRJxFXjQi8Ws5cjQgnoJOJK4rN%2BqmZe0hhzahThhkH2%2FPWRz1EMXuzeEsCVB7iYWQRhXXjXN119ZjzS8xxQgGODssBYfRiEGZ0zH7j4vHRHDTl77boNvMLbze7Pem6GfzUgRYmXpqE4Kj0zFZLHgr2Tc08sc9pCKLvGgSE37nYLR88MyCdRoFhrhkJwVBPtxbgGA726KwGZaXANTOL8skJtUdu4sLJ5kSTc1DRXV0g8YQVjUJVm8MecWhqbSU2vF%2FdJKEj32DkoYLLWwj1myK92CZIi2ZAdjyka6HJqLEsveL4hjErYg%2FvWJ5YA3R8VtFWYQ%2B5lefEtsw8Rs%2FOYWssb7YhjQBkkiDjildIz91OJ6Pc72LxMppXIOXdM4RCXYjLM51dlq%2B1sb3PbFNg8F9hJgvQoczxrxZzaQ1A%2BQ25Hr88bypRJ5ki%2FPAIMnPBvAJ9C6bWLzMNE1QjWXQB8qw8hQRXpa6DmQwtqLZvgY6pgFT7FmHcHDsSEdnSjf7A0aT2yyTq3MXhIV5qJDomgJZR3LT8XHpdL%2FOvt0devF7vUBl58RXXhanjvtu9Q8WF3f3VPIPpE4mrVSMwPVghj38cvHGCEx0AgL8JyG8OsTXOq72mQXt8T8A813cF12xVgdOGYxbgM%2BmB0yvA5eDWOHRfSELcIHimqqn6NgjtebFw0htSgsnCRW%2BIpsvY59uuPH0Pnff5jTO&X-Amz-Signature=edab1582d12739dfb70dd00b04dc2e6312fc2f4a0ae168527a93b0c45ea89b91&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D5L5E75%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpub3cSHi2SwMHlc%2FJFHcooj8Ayefem5CFJQBjTYWEQAiAIhzgdTZFM%2Fx0PCS2tAfBW9BroP7RpTSUN2lKqdRxo%2Fir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIML5A2Nj7MMbYTGpQvKtwDXsHlg5ZuUA0fY30xkXY93T0XotCU7q57RAzuCfmViKttKDD9dh1oBmCqDmbzwz7sZ3r5UZy3b%2BOSqGA74XSj6Osds6as%2BXVgIYIC9Ay5yh%2FErWh7IEQccUlMRM3R3I64Erx176gQPmG5EM6vkJI9ryWvUVFBRJxFXjQi8Ws5cjQgnoJOJK4rN%2BqmZe0hhzahThhkH2%2FPWRz1EMXuzeEsCVB7iYWQRhXXjXN119ZjzS8xxQgGODssBYfRiEGZ0zH7j4vHRHDTl77boNvMLbze7Pem6GfzUgRYmXpqE4Kj0zFZLHgr2Tc08sc9pCKLvGgSE37nYLR88MyCdRoFhrhkJwVBPtxbgGA726KwGZaXANTOL8skJtUdu4sLJ5kSTc1DRXV0g8YQVjUJVm8MecWhqbSU2vF%2FdJKEj32DkoYLLWwj1myK92CZIi2ZAdjyka6HJqLEsveL4hjErYg%2FvWJ5YA3R8VtFWYQ%2B5lefEtsw8Rs%2FOYWssb7YhjQBkkiDjildIz91OJ6Pc72LxMppXIOXdM4RCXYjLM51dlq%2B1sb3PbFNg8F9hJgvQoczxrxZzaQ1A%2BQ25Hr88bypRJ5ki%2FPAIMnPBvAJ9C6bWLzMNE1QjWXQB8qw8hQRXpa6DmQwtqLZvgY6pgFT7FmHcHDsSEdnSjf7A0aT2yyTq3MXhIV5qJDomgJZR3LT8XHpdL%2FOvt0devF7vUBl58RXXhanjvtu9Q8WF3f3VPIPpE4mrVSMwPVghj38cvHGCEx0AgL8JyG8OsTXOq72mQXt8T8A813cF12xVgdOGYxbgM%2BmB0yvA5eDWOHRfSELcIHimqqn6NgjtebFw0htSgsnCRW%2BIpsvY59uuPH0Pnff5jTO&X-Amz-Signature=b12f4099546944adcc4cf1ce5554182895f0dac5a301297965e5b28c4ea09ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
