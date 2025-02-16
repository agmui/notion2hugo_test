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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EXBS4HI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCOj32w3cIQT0JMgNjeIOzmky978V8EWeJkKSX03U3fywIhAPwr1Gq7dgGPNaEUBabB2M8tlql4n6y9m%2Bx%2BtkwuJM%2FpKv8DCFUQABoMNjM3NDIzMTgzODA1IgwoUcNNQw1jvUzVpgoq3AOoOMjiyW2egqPna6viSCgtE0M6nske%2BBRXqxsOR0yKMn6ZLp1lelVSNJ%2Fsn%2Fyo708oyMSU3FQ2fO%2FE8zgl5l%2FfTk7IcImn9eownZSqRN7qTZSUjfkE3b8Uq3DKmo8%2FyZ3LrPUhbNEx4od1wTvtXJzlqXq3gQJVdYm8XF%2BRULttOxlT7iBXhSH3fZXPvuEt%2BiWtAPHy83dwIA6Fy9LZDygQ0YEYjR05Ph3tH3S6jdxCumRH18AidYeSgetPeukXKToCK%2FTz3nGvigCQRN%2BR%2Fc0WrYzzkjnOiqFNwFp81UXt4nR%2FFzGJa3j6oJ%2BAHkbT0L1m%2FvslshGnpFb7Q1FddXrO6B%2BNZ9VoIO0%2BVK9Fpuy3GkZ2AFhL4QBz06yD%2B4%2BnzIYpa6bE4Ox%2FWRkZ6XimbLuzy2MV4YD8mKHzXvin1vrVJrVgByenrKlVoCkA0hdZLr64z2mOOoVtfSjO8KvUzjnLgsB5F9rOX5Wml%2B08OItjpHtqajM8ozR%2FfAgT8uqOV2%2FXvuVuDGfaFpi1AofgvjKdzi0wx9gLoABTnhcBgDbRMFWwVYPYDZ9S14SiCkxPf0NrVx9bRg4tsN4UPweIuyqRZJymsCcyZkKA8LUspKX1qNOTareE8%2FoWW5emYzC8w8W9BjqkAWN5mg3d8rCViBby0%2FfxHxZCZ57%2FMbNum7rT0JStfBdQ9zdNGgzYyB9V2cn9ogCcq55hI9trUDZkXnADwteyCwAuBkRqNDTgrvtmqDUxfnLmP9laT60Z70lLvlPyVu%2BXQ%2FcKfZfWWYFdrcpn69heWBTOiPsYu5Nc8Wgx%2FkvUOZtnOCa2298LJyhjA6m3oKe9BXZFtGn9YWuWlyaTgztrw0Unl6jH&X-Amz-Signature=e494ebce9bd1a65ef3783368c15d6abb7f80f68c46911f88f1e608675821e0c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EXBS4HI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCOj32w3cIQT0JMgNjeIOzmky978V8EWeJkKSX03U3fywIhAPwr1Gq7dgGPNaEUBabB2M8tlql4n6y9m%2Bx%2BtkwuJM%2FpKv8DCFUQABoMNjM3NDIzMTgzODA1IgwoUcNNQw1jvUzVpgoq3AOoOMjiyW2egqPna6viSCgtE0M6nske%2BBRXqxsOR0yKMn6ZLp1lelVSNJ%2Fsn%2Fyo708oyMSU3FQ2fO%2FE8zgl5l%2FfTk7IcImn9eownZSqRN7qTZSUjfkE3b8Uq3DKmo8%2FyZ3LrPUhbNEx4od1wTvtXJzlqXq3gQJVdYm8XF%2BRULttOxlT7iBXhSH3fZXPvuEt%2BiWtAPHy83dwIA6Fy9LZDygQ0YEYjR05Ph3tH3S6jdxCumRH18AidYeSgetPeukXKToCK%2FTz3nGvigCQRN%2BR%2Fc0WrYzzkjnOiqFNwFp81UXt4nR%2FFzGJa3j6oJ%2BAHkbT0L1m%2FvslshGnpFb7Q1FddXrO6B%2BNZ9VoIO0%2BVK9Fpuy3GkZ2AFhL4QBz06yD%2B4%2BnzIYpa6bE4Ox%2FWRkZ6XimbLuzy2MV4YD8mKHzXvin1vrVJrVgByenrKlVoCkA0hdZLr64z2mOOoVtfSjO8KvUzjnLgsB5F9rOX5Wml%2B08OItjpHtqajM8ozR%2FfAgT8uqOV2%2FXvuVuDGfaFpi1AofgvjKdzi0wx9gLoABTnhcBgDbRMFWwVYPYDZ9S14SiCkxPf0NrVx9bRg4tsN4UPweIuyqRZJymsCcyZkKA8LUspKX1qNOTareE8%2FoWW5emYzC8w8W9BjqkAWN5mg3d8rCViBby0%2FfxHxZCZ57%2FMbNum7rT0JStfBdQ9zdNGgzYyB9V2cn9ogCcq55hI9trUDZkXnADwteyCwAuBkRqNDTgrvtmqDUxfnLmP9laT60Z70lLvlPyVu%2BXQ%2FcKfZfWWYFdrcpn69heWBTOiPsYu5Nc8Wgx%2FkvUOZtnOCa2298LJyhjA6m3oKe9BXZFtGn9YWuWlyaTgztrw0Unl6jH&X-Amz-Signature=2bb7b97887f6ab96a00ed1288101bb5b5779f87780053702ba85c4f68c0ed855&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
