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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDDZLZIK%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCkA8Asxy23SzafFNkouLiREIb3h0Nz3Ebkhc%2FwZIsQZQIhAJI2YF4wQBggiAr5jYiHCHG8LUlQoMMa7YY7SLsB6ci5Kv8DCBYQABoMNjM3NDIzMTgzODA1Igwzi3F6rMtihGHSW7wq3APbfVJQ3fMMJ5kJpSD4%2FTsrjBihTF2vJUkn%2Bhg2XSk1VWyBc%2FXgzMuh4UXJGv6eXQYscTwlpp0uFQGCTxLwnZJlW74WsXm32PkeJsCv5%2FmI%2FNlzMdkmY%2BuUkuGEgVb6ZAXwl%2BZOAOwqINzACDTqRx3XWLFIaaEdImnrFhTwIevYjUbbLvGGt5ZW1PWusZFJwPvias71ArEbYGCatJZuSW72r6DluvhdSlqXX4%2BmZxOEJ9KFK4C1cxz9PeXW2rtDRwMZEQiLUPB%2BZL9n4m0XelKq2Drfe8WK2Rm7VTfO1yJ%2FM47um6%2F3WpEHmqcdw%2BlnM%2FEHujYf2HZgD3yoJICYlQg%2Fzy7h7kA1JKayI6yYFdL62yD6%2B8kSZQVfaSfR9wa91iYaUHdDqFTj4tVoa%2BwoNPfPPA9Qx1%2FH0Cld0XdaZ4mSY5bD4jM9WfFdm3zaq7AIUsMetI5%2B%2B4M%2BS16SLnetmbckmS%2Ff540YEdA0H8llbNb4MNBMmMPcDpOBkUA1QHojycCaju9evHzMSQzMNLqdwYQ48%2BH8HiL8zmg1MVAQipsYpGIer38lp95xXXf7QU8N2Oe3f83zOWYr1cUCrUofX4Bd47lTp3PQR5Kjz5KZZFcMCj3eiwz4SYfv78Kj6TC16ajABjqkAZ520jXZP97G8xXiYOff2A6OxOzTkx4nyELwb4jImDGF20vysxRl8xVaU7w3WaPEv9gXNAKxMUROv16w18SnwwuyLMFcK1SBHXQDXv5%2BqjOuXnzWWsm2Zl4oTjyCKJ%2FedaE8YGYTz7G1GqZy2698sRCapByRqzuBd9VXkfV336w4h4urT84DziS4TqZdopCIKyXX0qvUZVxQsZSNmkJ9B4CLqXdh&X-Amz-Signature=207ec750adc28e477ff63d0f7e806ec423c15262d25eeb5205beff88b307d4fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDDZLZIK%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCkA8Asxy23SzafFNkouLiREIb3h0Nz3Ebkhc%2FwZIsQZQIhAJI2YF4wQBggiAr5jYiHCHG8LUlQoMMa7YY7SLsB6ci5Kv8DCBYQABoMNjM3NDIzMTgzODA1Igwzi3F6rMtihGHSW7wq3APbfVJQ3fMMJ5kJpSD4%2FTsrjBihTF2vJUkn%2Bhg2XSk1VWyBc%2FXgzMuh4UXJGv6eXQYscTwlpp0uFQGCTxLwnZJlW74WsXm32PkeJsCv5%2FmI%2FNlzMdkmY%2BuUkuGEgVb6ZAXwl%2BZOAOwqINzACDTqRx3XWLFIaaEdImnrFhTwIevYjUbbLvGGt5ZW1PWusZFJwPvias71ArEbYGCatJZuSW72r6DluvhdSlqXX4%2BmZxOEJ9KFK4C1cxz9PeXW2rtDRwMZEQiLUPB%2BZL9n4m0XelKq2Drfe8WK2Rm7VTfO1yJ%2FM47um6%2F3WpEHmqcdw%2BlnM%2FEHujYf2HZgD3yoJICYlQg%2Fzy7h7kA1JKayI6yYFdL62yD6%2B8kSZQVfaSfR9wa91iYaUHdDqFTj4tVoa%2BwoNPfPPA9Qx1%2FH0Cld0XdaZ4mSY5bD4jM9WfFdm3zaq7AIUsMetI5%2B%2B4M%2BS16SLnetmbckmS%2Ff540YEdA0H8llbNb4MNBMmMPcDpOBkUA1QHojycCaju9evHzMSQzMNLqdwYQ48%2BH8HiL8zmg1MVAQipsYpGIer38lp95xXXf7QU8N2Oe3f83zOWYr1cUCrUofX4Bd47lTp3PQR5Kjz5KZZFcMCj3eiwz4SYfv78Kj6TC16ajABjqkAZ520jXZP97G8xXiYOff2A6OxOzTkx4nyELwb4jImDGF20vysxRl8xVaU7w3WaPEv9gXNAKxMUROv16w18SnwwuyLMFcK1SBHXQDXv5%2BqjOuXnzWWsm2Zl4oTjyCKJ%2FedaE8YGYTz7G1GqZy2698sRCapByRqzuBd9VXkfV336w4h4urT84DziS4TqZdopCIKyXX0qvUZVxQsZSNmkJ9B4CLqXdh&X-Amz-Signature=d0a832abfca9210c534a3a4802ed18dc8503c3d7b41227232cb1fe2bc87d356f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
