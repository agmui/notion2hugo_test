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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626I7NBJN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBUQ1txwoYDg4Onl3j9MVQkBaMyOkKdWbsR6rW12ohMAiBc4pcfysS%2FDpcT6%2FPbQWNdD%2BBYePYPVYoKDWi72vO6hiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrs932Bl0sVoHzfyrKtwDnKgLjo8I6BEbZRKtfHcm%2F6DjjMyTsApKH3F%2Fpbff%2Brfo%2BcQJ9nKHvdgHZF4p1cfChU3mT7hU9nOm3tw%2FI0HfLQ6ioOKnC3xHg1AzSieklfcJM5pC3M86otyK21HgoIjSn08KVh2xQXONj7DUKQRa2rpDZ7cY79Lpg%2Fl4rkmNxY%2F3Bu88v8kCgR%2FhJqZPM%2F%2FYWnVcwXj5ZEDOkrf%2B0GDd%2F9VRUCkVhHcff%2FyDKCxJCjLaGOro4VOduPfSWIc8e7QAlalUiQIx5Gnit9yex9fZVrRjNZlytgzecVlBHICr9rVq4qPGeX7LCUa7mhs8sf8wAhfrA5IX5kPsWmWcNbLNMZs5up1pY6EE6d0cqFCPcwG%2BYGksLRb9fzlKCt3YQYXDrEJ4uKldOzlbZQmRCP1lxVa4NsQnpPwKLTyFhys09Fe0G1CxDA%2FfhI0uDJ%2FgRMJUx7Oi8eHqb8XW1O%2Fvw1WSxt9aA4%2B1CplmIvIZh8XG1uUdQTPddx%2F1Gp%2B16R7sBTNkBz%2FFHQrO3D9KttsDr77fQA3rIj6qV41cd93i8%2BV2tRWM0qESORh5%2FiIF%2BHb2q1yg6fhXnct65WsNE2wqiMj8EIsYCoxvVFEDGzTS%2BLTNZiDhmCehPwyWe%2FLHP94w7cS7wwY6pgERfnJ5NAARsPf7RV55Dq8yWJFesCn48IZArixx5t10rLlYlMFw%2BfFN9UvDLjlUmLF4Ier08Rdq1G1RWqOO2WCR0L0HI2AystwND0R%2BMPne05sL48eAH8HnUs0pcblXLkgx66rpQzv%2FbjjzJKUdSkkqrzKjI4QjBf%2BLMjFJ7DM3sXK0mBB%2B0RCyafzJfEsmHypPtcMi2gprGa4nWhhUi8UUqr9CqL%2Fi&X-Amz-Signature=20d55d3fc9f29b79d0f355ffe44b3d3196c5e47183c7990ef94f388d741f989a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626I7NBJN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBUQ1txwoYDg4Onl3j9MVQkBaMyOkKdWbsR6rW12ohMAiBc4pcfysS%2FDpcT6%2FPbQWNdD%2BBYePYPVYoKDWi72vO6hiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrs932Bl0sVoHzfyrKtwDnKgLjo8I6BEbZRKtfHcm%2F6DjjMyTsApKH3F%2Fpbff%2Brfo%2BcQJ9nKHvdgHZF4p1cfChU3mT7hU9nOm3tw%2FI0HfLQ6ioOKnC3xHg1AzSieklfcJM5pC3M86otyK21HgoIjSn08KVh2xQXONj7DUKQRa2rpDZ7cY79Lpg%2Fl4rkmNxY%2F3Bu88v8kCgR%2FhJqZPM%2F%2FYWnVcwXj5ZEDOkrf%2B0GDd%2F9VRUCkVhHcff%2FyDKCxJCjLaGOro4VOduPfSWIc8e7QAlalUiQIx5Gnit9yex9fZVrRjNZlytgzecVlBHICr9rVq4qPGeX7LCUa7mhs8sf8wAhfrA5IX5kPsWmWcNbLNMZs5up1pY6EE6d0cqFCPcwG%2BYGksLRb9fzlKCt3YQYXDrEJ4uKldOzlbZQmRCP1lxVa4NsQnpPwKLTyFhys09Fe0G1CxDA%2FfhI0uDJ%2FgRMJUx7Oi8eHqb8XW1O%2Fvw1WSxt9aA4%2B1CplmIvIZh8XG1uUdQTPddx%2F1Gp%2B16R7sBTNkBz%2FFHQrO3D9KttsDr77fQA3rIj6qV41cd93i8%2BV2tRWM0qESORh5%2FiIF%2BHb2q1yg6fhXnct65WsNE2wqiMj8EIsYCoxvVFEDGzTS%2BLTNZiDhmCehPwyWe%2FLHP94w7cS7wwY6pgERfnJ5NAARsPf7RV55Dq8yWJFesCn48IZArixx5t10rLlYlMFw%2BfFN9UvDLjlUmLF4Ier08Rdq1G1RWqOO2WCR0L0HI2AystwND0R%2BMPne05sL48eAH8HnUs0pcblXLkgx66rpQzv%2FbjjzJKUdSkkqrzKjI4QjBf%2BLMjFJ7DM3sXK0mBB%2B0RCyafzJfEsmHypPtcMi2gprGa4nWhhUi8UUqr9CqL%2Fi&X-Amz-Signature=88d6a2b092fbc86b4baebb95614334f91afb1436270bd2afb8ac6b96bc8deebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
