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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642MZU4Z4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDeU4NSBTDrJOR8QQas9O0T5DlZ4m3djbj%2BD%2FniPs5njQIhAOV%2BUW6T8P2zkAglFY624l%2FpCZTeC4fajqh%2FLHhXU%2FiCKv8DCDIQABoMNjM3NDIzMTgzODA1IgwP5rS1gLcAf20E9bUq3AO8%2Fmihs5YrOKTwP7vhHxFV0xQGcEsDMHSv82jSXNPYNkYbflc4c%2BJnSKjQQLcCcjqvHazXxEJTnkVlfJb6NMSHj%2FXIALLuAbxdrs52dXDoB%2BWK3E091%2FO5OehhOIEltsEzD7SZoS65op6%2BO%2Bbu9Mv8WcD98qlyeS2qTINByJL3o2%2FUyumfTA8zuOLUMtbC2TVO4v2SKqZkQsMLs2R9C7WADZtjFVBz7OJESzIGc21aXgmfpwFl%2Bl7M2QJtFiwVDfdtdo9%2B8aPY6WgGU34WXAyaf%2BuoAUp9q5RI6eP45G7rOncgNgwYQWrZmu67rpVonkRQ%2BlT868Y2sPg0k5lc1rEYhInRG34K8hVxV5f2OMClID9kPdB0G3mrUAgvvDh5PKr9jOZ86CRXEylD5A%2FEIFtB4Fi9BNUvrEQYg8%2FyJm50J5SSOIVkExy6dh23b0FXeci2c3dlI91tYPQfeRbcEC%2FZJT7eZp3sMHxlbRy3L%2Bb2J8r%2B%2FMmPN%2B9aOuZuKvhAhw4HTYzp4AdNfLWfUa9afAHsHmd0%2B3Cm%2BL6cTxFXqOFYnzuywXZsOaBD8mZ%2F8%2BIG8m6X0Mt8dtwWt1nahMl%2BZ%2BWQcdiuuR51R99siqI7%2B2a6aSi7NYNgmgJ1pRyc8zD5vevCBjqkAaY0L7%2FzBN%2B8m1XN9TMrjvV3me3XF8eq%2BkX2bEXiHS1dA7qzdU74topeJqT1syVu6FZbH%2FbYVxYxNcbl2TEZq7R0vU8YdxvMQOAOb%2FRcQP05VwwRCDUrknQAVPigeA6rQF7oUa9ailjsiOTCpquclefvRPazYjhce72Pbe7osIvgI09n95YT0jpWmFTzk0yBzeo9aXZHNEmsJIxB5zORenrk0m2E&X-Amz-Signature=606ca8c20f4361e8ab4b0749f85d20a582fb9da7f7df5d4f01637d729d8e7ca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642MZU4Z4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDeU4NSBTDrJOR8QQas9O0T5DlZ4m3djbj%2BD%2FniPs5njQIhAOV%2BUW6T8P2zkAglFY624l%2FpCZTeC4fajqh%2FLHhXU%2FiCKv8DCDIQABoMNjM3NDIzMTgzODA1IgwP5rS1gLcAf20E9bUq3AO8%2Fmihs5YrOKTwP7vhHxFV0xQGcEsDMHSv82jSXNPYNkYbflc4c%2BJnSKjQQLcCcjqvHazXxEJTnkVlfJb6NMSHj%2FXIALLuAbxdrs52dXDoB%2BWK3E091%2FO5OehhOIEltsEzD7SZoS65op6%2BO%2Bbu9Mv8WcD98qlyeS2qTINByJL3o2%2FUyumfTA8zuOLUMtbC2TVO4v2SKqZkQsMLs2R9C7WADZtjFVBz7OJESzIGc21aXgmfpwFl%2Bl7M2QJtFiwVDfdtdo9%2B8aPY6WgGU34WXAyaf%2BuoAUp9q5RI6eP45G7rOncgNgwYQWrZmu67rpVonkRQ%2BlT868Y2sPg0k5lc1rEYhInRG34K8hVxV5f2OMClID9kPdB0G3mrUAgvvDh5PKr9jOZ86CRXEylD5A%2FEIFtB4Fi9BNUvrEQYg8%2FyJm50J5SSOIVkExy6dh23b0FXeci2c3dlI91tYPQfeRbcEC%2FZJT7eZp3sMHxlbRy3L%2Bb2J8r%2B%2FMmPN%2B9aOuZuKvhAhw4HTYzp4AdNfLWfUa9afAHsHmd0%2B3Cm%2BL6cTxFXqOFYnzuywXZsOaBD8mZ%2F8%2BIG8m6X0Mt8dtwWt1nahMl%2BZ%2BWQcdiuuR51R99siqI7%2B2a6aSi7NYNgmgJ1pRyc8zD5vevCBjqkAaY0L7%2FzBN%2B8m1XN9TMrjvV3me3XF8eq%2BkX2bEXiHS1dA7qzdU74topeJqT1syVu6FZbH%2FbYVxYxNcbl2TEZq7R0vU8YdxvMQOAOb%2FRcQP05VwwRCDUrknQAVPigeA6rQF7oUa9ailjsiOTCpquclefvRPazYjhce72Pbe7osIvgI09n95YT0jpWmFTzk0yBzeo9aXZHNEmsJIxB5zORenrk0m2E&X-Amz-Signature=1220d8ba4f6a793169c21eb19b82c492ec062b634243053fac518ec7a9ab64a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
