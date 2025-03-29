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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBUPQ5U%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICJPQK9yEMjJOrdK93kkotuPEWsZ0LYVFYWA5EErQy9vAiEA5gn7EWCJE1jaRDgOOqQb97GulPaCMwm0TAAQcXu0Tccq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLfbI25yzla5T8%2BdSSrcA5sAtx3WAqDJtSQSF71MS59Eh5NiG7jkGBor%2Fv%2BHayrurUcmD9FGdRkSKT9oIHUc7WRUJzoZQYgxFLvyCYd0341QxcsJK2kFW%2F%2FARRPkjnSr7dGSi9rmqtdrVdWLiHNvEX2xu4icSMl80GqzOwRuIZGep4FnLp%2B5dxWoqVf30t%2Bo6Db2KLFa6Z2tm0zxsxrmevH5lDSVR7uV1oXdEb1jIxC7s2HRQ5Yd9y4IH4RSVisEI13f%2BPRkY5xy%2F6kl2lQ9UEWrEArAOp16kcX3RQ3%2FZcGixgma2cHy8uyBRsicJuxeUH9C%2BPQfJjpACZJJmsIJmQqVao%2F%2FAxmLCw2mrMMen2M%2FnB8pQz5hpx5aupyZ6mfxA41NFiGdFDgf9yY3A64EG89xMQs2LuI%2F6ltvHusys%2BkjwJtramnvlGPE0WnupU4U%2BXb7kTy%2FedXelXyZNLFC1P69SS5MF5K9TFR5z1C73Zj4g1HyHilGR4Caboq6yK2EYbmejRDa1wpOkHgusxPQJ%2FGwt12KOjyEmh3kCnHaCl1PP8ABE6oMKH8S3LbnJdT84mGZYm6owATJmkhQw2NwiPRawz2NVvThJb9jeDSfOubrXMlOiebkxkn1RfL70j%2BFLDdtG4F7YJFoWajhMPLenL8GOqUBVpUW1FUmoxxoCLzEphIDoLvay1lNzRhF%2B6Ek7vmK0cVhMUNd34eYcnWLS4Mnz9ok%2BEDMYm8AiXXc5QAeSATGU54kbM39OIVEFRtPbkg%2Fr7YVhAssxrkUQxB4%2F8JtnUukegIH8p0wOjx4LterERD%2BrOu1KLwLcW%2B7wkBGDi%2BLhAFQ5l8HsJGHMJVlFUd9Zbjb6rGZnYH8v8%2BtF4ArTbxLNloJT0Bn&X-Amz-Signature=b69e040458915f0b6b2f3bd47acc73ababa31b4ced7a9ac7703bfb941b3ea21b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBUPQ5U%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICJPQK9yEMjJOrdK93kkotuPEWsZ0LYVFYWA5EErQy9vAiEA5gn7EWCJE1jaRDgOOqQb97GulPaCMwm0TAAQcXu0Tccq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLfbI25yzla5T8%2BdSSrcA5sAtx3WAqDJtSQSF71MS59Eh5NiG7jkGBor%2Fv%2BHayrurUcmD9FGdRkSKT9oIHUc7WRUJzoZQYgxFLvyCYd0341QxcsJK2kFW%2F%2FARRPkjnSr7dGSi9rmqtdrVdWLiHNvEX2xu4icSMl80GqzOwRuIZGep4FnLp%2B5dxWoqVf30t%2Bo6Db2KLFa6Z2tm0zxsxrmevH5lDSVR7uV1oXdEb1jIxC7s2HRQ5Yd9y4IH4RSVisEI13f%2BPRkY5xy%2F6kl2lQ9UEWrEArAOp16kcX3RQ3%2FZcGixgma2cHy8uyBRsicJuxeUH9C%2BPQfJjpACZJJmsIJmQqVao%2F%2FAxmLCw2mrMMen2M%2FnB8pQz5hpx5aupyZ6mfxA41NFiGdFDgf9yY3A64EG89xMQs2LuI%2F6ltvHusys%2BkjwJtramnvlGPE0WnupU4U%2BXb7kTy%2FedXelXyZNLFC1P69SS5MF5K9TFR5z1C73Zj4g1HyHilGR4Caboq6yK2EYbmejRDa1wpOkHgusxPQJ%2FGwt12KOjyEmh3kCnHaCl1PP8ABE6oMKH8S3LbnJdT84mGZYm6owATJmkhQw2NwiPRawz2NVvThJb9jeDSfOubrXMlOiebkxkn1RfL70j%2BFLDdtG4F7YJFoWajhMPLenL8GOqUBVpUW1FUmoxxoCLzEphIDoLvay1lNzRhF%2B6Ek7vmK0cVhMUNd34eYcnWLS4Mnz9ok%2BEDMYm8AiXXc5QAeSATGU54kbM39OIVEFRtPbkg%2Fr7YVhAssxrkUQxB4%2F8JtnUukegIH8p0wOjx4LterERD%2BrOu1KLwLcW%2B7wkBGDi%2BLhAFQ5l8HsJGHMJVlFUd9Zbjb6rGZnYH8v8%2BtF4ArTbxLNloJT0Bn&X-Amz-Signature=505e04cb5c1a5d62177f0a3dd303d17892103a7ba681f857fbb3039149f9e7e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
