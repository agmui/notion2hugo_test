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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CTEOJXZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbuVIVp5m03t9CXeN6H6VtokYdTyRFOI09Dwelno%2BN9AiBahdNYdJRr0hdk0gw62zpWbw031cDyrLKbDeLIM7vTkiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkLtSoKWQeGbOVmpYKtwDK3exuWW08vWS8Pvr7cNPsyKSmUfcVqvlbF%2BWwLZjVSYjtg4Ml%2FLMkezz14YqXQm9IVR%2BZCVD%2FPGmYJh4VS%2Foc%2B75za4fbPH0zrcLqDL7vYBEIRPlHEx02x4JhtIb11STWG0yGqHZmbh4fC1AM3lkLvgzDw3UGJT7WfxYj%2FUZ3yj6RxAxPAOy9dBlqY0i0UFzwu88Dd%2BU8DxsfflW1S05I82MOmq2Vl%2FAEqUkCkgXg9c1nqa9Kert%2FT8rMSsE%2BYTJdC4%2BmU35WIPt1mCnuuJUxTO2%2FwiccTg5OZmXGqEkCa1QbHPNAwSkOsB7f%2BB7EmUWQNVMMcL%2F3BcCyEvIXecJicWg95KooRR%2F%2BNzJ%2Bvcz86NKbzkd%2BJTNXFu4BjyPVQfFoNO27MVRpXBtMeQZyEy9asd8DmdAsLVijg%2FMjHaTK4yezwkZ3XR6emrT40ro2zAHmFdy8w1QkeDnRUVJ%2BjZK1qoOHilJIWFh5l8NSHnw4seZWLuglALu3CFedAOQzhWgh0XoUeCWjHptXUpAT0jqWvDhGCq9zqfO%2F9FZpXayUWp4j5xe0%2BDaxMgvx25R5yutPSpUFG09THMucUQUm%2BpSRyDt%2FRBMnlsm6xLZizVSlBlTcb7lf4QvnPCXxpsw0ZnuvAY6pgEvH%2BwefkD062WUNhP0%2F8Vh5vTMcNMEJJA2ialHOICMWOfvBJMXYmIMppYeFyQ0eINKJnGmBT4KTY6YDhbVATS9WzowETrLrUGgPn47E6fNz2jxtalxAs3QgNDcyFa4VqsXnmkHfN0zE68xuqUX9lxIevLXMepZrYWD%2Fy2w3X2wtFYbrqFwA9YeeNm1UFd88iGFFdUlnunpdUFD9RMn8Vqj3HXLqSqZ&X-Amz-Signature=0c56c98f43d96d0b821d77b99a368cf89aea117a2cec17a20f87cd840ce4199d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CTEOJXZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbuVIVp5m03t9CXeN6H6VtokYdTyRFOI09Dwelno%2BN9AiBahdNYdJRr0hdk0gw62zpWbw031cDyrLKbDeLIM7vTkiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkLtSoKWQeGbOVmpYKtwDK3exuWW08vWS8Pvr7cNPsyKSmUfcVqvlbF%2BWwLZjVSYjtg4Ml%2FLMkezz14YqXQm9IVR%2BZCVD%2FPGmYJh4VS%2Foc%2B75za4fbPH0zrcLqDL7vYBEIRPlHEx02x4JhtIb11STWG0yGqHZmbh4fC1AM3lkLvgzDw3UGJT7WfxYj%2FUZ3yj6RxAxPAOy9dBlqY0i0UFzwu88Dd%2BU8DxsfflW1S05I82MOmq2Vl%2FAEqUkCkgXg9c1nqa9Kert%2FT8rMSsE%2BYTJdC4%2BmU35WIPt1mCnuuJUxTO2%2FwiccTg5OZmXGqEkCa1QbHPNAwSkOsB7f%2BB7EmUWQNVMMcL%2F3BcCyEvIXecJicWg95KooRR%2F%2BNzJ%2Bvcz86NKbzkd%2BJTNXFu4BjyPVQfFoNO27MVRpXBtMeQZyEy9asd8DmdAsLVijg%2FMjHaTK4yezwkZ3XR6emrT40ro2zAHmFdy8w1QkeDnRUVJ%2BjZK1qoOHilJIWFh5l8NSHnw4seZWLuglALu3CFedAOQzhWgh0XoUeCWjHptXUpAT0jqWvDhGCq9zqfO%2F9FZpXayUWp4j5xe0%2BDaxMgvx25R5yutPSpUFG09THMucUQUm%2BpSRyDt%2FRBMnlsm6xLZizVSlBlTcb7lf4QvnPCXxpsw0ZnuvAY6pgEvH%2BwefkD062WUNhP0%2F8Vh5vTMcNMEJJA2ialHOICMWOfvBJMXYmIMppYeFyQ0eINKJnGmBT4KTY6YDhbVATS9WzowETrLrUGgPn47E6fNz2jxtalxAs3QgNDcyFa4VqsXnmkHfN0zE68xuqUX9lxIevLXMepZrYWD%2Fy2w3X2wtFYbrqFwA9YeeNm1UFd88iGFFdUlnunpdUFD9RMn8Vqj3HXLqSqZ&X-Amz-Signature=54e516f4325ca2675c8ee65614ccd989772cc07ca6fc14ea794d5183f2fb8110&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
