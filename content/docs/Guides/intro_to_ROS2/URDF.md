---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC2QJM2E%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALS3zLpJvLXsmGdbgin%2BzYfpso%2FIKaz%2BLcdvQyb4ENgAiAWcXHGMnY7Pmj80%2BBG2dveIeGY2hn4QT8uiv6a%2FSQt%2FSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM19mq0DCLksjWxmMlKtwDvLAOHISEJlwNMH44TmvKLq5YXlnrwnP7NSfAD0YfTBvOx3yQoEjp9qoMDRAFrov0Qtt5ae8E5U0Q8MZgqFWLGDc5G6ORp5U1UHlDDpGJFg3mk7ManrpZHwpYGvS6IAi5sdmaq69iSqbnmjh6cAILNeehOeXw2Y2OQ5%2FBEkoDdJe5LfDuUp1R2EFdGgptE7o%2BWyVJiwIZ4CBnhIY5cEtBG3UuuF0yMFP04NT1%2FluUVOnbV6pFRjx7yGwiMseN7p%2FSS4YPdU%2F34L2odmy3%2FtOhGY3pzvJKqV%2B0Qc1afr8Foe38JFXBOVd4wYv1q1eujgF2G%2FM1nBKYM%2FbUa61ATfNMhmlQuJI55PrvOcLjzDHs6nSjCT1D%2FFI4gexM1vYB4z22OOa%2BSbxIx5gnsYXdmbW0ZAQxG%2Bpfa8P2tcTe412XZAeVKZ0PubWXuHxalLZouKdyAl8lGRADgtcNpiSTKlH03y8onr47qMntRpF5wQXVvJu0dhTlI1bupdB8BzrMVn8Y85fMVzSM41VkRa8HIWZYMlK%2Fq4wD0LVAQGjad2U6zI3HZ8u%2BhXlSOP6rec%2BfHgITCIPfYRKkHZch86f5jhNlMgiFRaL36p778E7%2Bsy5W0D0LFuxnvvjPevW1pkwwu92OyQY6pgEpXi8fGg0fvcQ3EWT4d%2BsXwJ490p6ksF9U3yVoJBfKDcw%2Ff0Dt4yWG%2B4VHQzJHW9c8dl4usWlqn0T4WSdZdD1zgzkzVsWe2r3oXAA0XO7NQqanU9oCOrVMjvL1PtFySY7LMzaLVoIz5UyjnImXm8WKot7yJj%2FEhVuVT9VeFCLB8tyGj7zUrUL8KxZ4IknkUWQW6FsYLCkzKjDv0nCraFtr%2Ft%2FaSpA3&X-Amz-Signature=7d456dc2d59fced3b4f639c6e2f073bbc54aebf3a20046793f5722358f1bea95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC2QJM2E%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALS3zLpJvLXsmGdbgin%2BzYfpso%2FIKaz%2BLcdvQyb4ENgAiAWcXHGMnY7Pmj80%2BBG2dveIeGY2hn4QT8uiv6a%2FSQt%2FSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM19mq0DCLksjWxmMlKtwDvLAOHISEJlwNMH44TmvKLq5YXlnrwnP7NSfAD0YfTBvOx3yQoEjp9qoMDRAFrov0Qtt5ae8E5U0Q8MZgqFWLGDc5G6ORp5U1UHlDDpGJFg3mk7ManrpZHwpYGvS6IAi5sdmaq69iSqbnmjh6cAILNeehOeXw2Y2OQ5%2FBEkoDdJe5LfDuUp1R2EFdGgptE7o%2BWyVJiwIZ4CBnhIY5cEtBG3UuuF0yMFP04NT1%2FluUVOnbV6pFRjx7yGwiMseN7p%2FSS4YPdU%2F34L2odmy3%2FtOhGY3pzvJKqV%2B0Qc1afr8Foe38JFXBOVd4wYv1q1eujgF2G%2FM1nBKYM%2FbUa61ATfNMhmlQuJI55PrvOcLjzDHs6nSjCT1D%2FFI4gexM1vYB4z22OOa%2BSbxIx5gnsYXdmbW0ZAQxG%2Bpfa8P2tcTe412XZAeVKZ0PubWXuHxalLZouKdyAl8lGRADgtcNpiSTKlH03y8onr47qMntRpF5wQXVvJu0dhTlI1bupdB8BzrMVn8Y85fMVzSM41VkRa8HIWZYMlK%2Fq4wD0LVAQGjad2U6zI3HZ8u%2BhXlSOP6rec%2BfHgITCIPfYRKkHZch86f5jhNlMgiFRaL36p778E7%2Bsy5W0D0LFuxnvvjPevW1pkwwu92OyQY6pgEpXi8fGg0fvcQ3EWT4d%2BsXwJ490p6ksF9U3yVoJBfKDcw%2Ff0Dt4yWG%2B4VHQzJHW9c8dl4usWlqn0T4WSdZdD1zgzkzVsWe2r3oXAA0XO7NQqanU9oCOrVMjvL1PtFySY7LMzaLVoIz5UyjnImXm8WKot7yJj%2FEhVuVT9VeFCLB8tyGj7zUrUL8KxZ4IknkUWQW6FsYLCkzKjDv0nCraFtr%2Ft%2FaSpA3&X-Amz-Signature=9175536537b95d1e59afdc121b312bdc100f74273426ee0773fbe672dc0dacd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
