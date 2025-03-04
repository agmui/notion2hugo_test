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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z52NYYHX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp51EWAzymFpkmOARDookzW8lBu02dMNvUMYJk5TAypAIgBJv8rKaEQKLiUWc7H6ycP0FWAnVsG3iY13CX7ZPAdGIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbUnRC6VkpD9ZNhnCrcA%2BKd1cw2JBOHeaW8rCqVTaKNlbUzM3qXqyXKvN8ceI984k2zbZ96LeKY1K5KCptivWrDp4qcnK%2FM58Txq2mpodS6R2lh5dEjP%2BCTNPcm%2FRk7hNth9S6sk%2BcOs9D1o7DO9injGG85uBP%2BMxWGowkFmiCXoqWkWD7zGvx9cHf5axbiBPqLP%2FnWJac2CrsElW9YST%2B7QOgEYqVR8iJAfbcLmRFl5ivZfEWZnw1QwbkvAF4Cbbv9Ks8upcCJQ32vJcfixMmaysMivDHGdFbuHGR2WkBSw95f2UEdVq9d1mi5OQBZoRpB%2FvoaisNjwgAVvtrQhWXocIpq8VkYLxJrFjCt6xSx%2B0QSbYG4lyF2wrBJ7NFaxcMKEEmCSWlAejW5A1k7DWlU%2Fjx5uePcuAzzluVgt%2BpgiQVwTm5JgKcihdLQjp84hPT0SKORa9PKpPyUKxPiwt%2B41ndoRtPg34cIBq2fVAkuB8saJCYVRXZcce1ANogDvq5trLxPAYYHhPtDnz1cKiM5HUMFCtKqKm%2B%2B%2B%2Bnwn2x9cut679IXxF7P%2BCoDGamq2dhKqZ2Co%2BgXSKhgIeoLd6hBynTMHeDTpXrkQagfDWgsqX%2BQkl6K2Xc7QP8RWD7sLCz6VIsEEf44cOhWMODhmr4GOqUBojmh%2Ba%2BtgnHUHLpR%2FtokUnigbkhhBFJScb8ODh4eko1Pe6kBHVslzv0wjnNfYdq6u23Uu%2BBOeY9UyWLOcZCQcZwX2HwkGgobE8pyANr7CV3p97GOjD87tAp4RTVG45VjDw2ZOZ8vKhs8Y7u%2FUFQsisVzU8beHWgYnMbpTaKun1VUYo1WM3SJorp14hcOYtm%2Fp206Mw3%2FtiYdxyoTNsKNhgHTXcXB&X-Amz-Signature=666ac4f318cc42b1b0cbcc6955cd4108e92e3b45136b45582f2ca72e96d9541c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z52NYYHX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp51EWAzymFpkmOARDookzW8lBu02dMNvUMYJk5TAypAIgBJv8rKaEQKLiUWc7H6ycP0FWAnVsG3iY13CX7ZPAdGIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbUnRC6VkpD9ZNhnCrcA%2BKd1cw2JBOHeaW8rCqVTaKNlbUzM3qXqyXKvN8ceI984k2zbZ96LeKY1K5KCptivWrDp4qcnK%2FM58Txq2mpodS6R2lh5dEjP%2BCTNPcm%2FRk7hNth9S6sk%2BcOs9D1o7DO9injGG85uBP%2BMxWGowkFmiCXoqWkWD7zGvx9cHf5axbiBPqLP%2FnWJac2CrsElW9YST%2B7QOgEYqVR8iJAfbcLmRFl5ivZfEWZnw1QwbkvAF4Cbbv9Ks8upcCJQ32vJcfixMmaysMivDHGdFbuHGR2WkBSw95f2UEdVq9d1mi5OQBZoRpB%2FvoaisNjwgAVvtrQhWXocIpq8VkYLxJrFjCt6xSx%2B0QSbYG4lyF2wrBJ7NFaxcMKEEmCSWlAejW5A1k7DWlU%2Fjx5uePcuAzzluVgt%2BpgiQVwTm5JgKcihdLQjp84hPT0SKORa9PKpPyUKxPiwt%2B41ndoRtPg34cIBq2fVAkuB8saJCYVRXZcce1ANogDvq5trLxPAYYHhPtDnz1cKiM5HUMFCtKqKm%2B%2B%2B%2Bnwn2x9cut679IXxF7P%2BCoDGamq2dhKqZ2Co%2BgXSKhgIeoLd6hBynTMHeDTpXrkQagfDWgsqX%2BQkl6K2Xc7QP8RWD7sLCz6VIsEEf44cOhWMODhmr4GOqUBojmh%2Ba%2BtgnHUHLpR%2FtokUnigbkhhBFJScb8ODh4eko1Pe6kBHVslzv0wjnNfYdq6u23Uu%2BBOeY9UyWLOcZCQcZwX2HwkGgobE8pyANr7CV3p97GOjD87tAp4RTVG45VjDw2ZOZ8vKhs8Y7u%2FUFQsisVzU8beHWgYnMbpTaKun1VUYo1WM3SJorp14hcOYtm%2Fp206Mw3%2FtiYdxyoTNsKNhgHTXcXB&X-Amz-Signature=8ad979fe341befba520bd72555e33115e5cb105ddb90bbf28b151512ba54d1d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
