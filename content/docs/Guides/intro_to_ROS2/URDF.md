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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NTKQSVW%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwZuXGKcmpnbaGkIexS2pRIGDk5GrgdPBXoosJp5cvFAiAqRwYv5wcNGIQcHUVSB4pd9T8YqgVcO5gbeP2uEhhwciqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnrR5TYDaoy2o13WkKtwDfY49tr1HQw08jZT1lVRvchV37i7CqH%2BO8vZCrzGro62wHsZYHrN7CIhJWQxd1wbIlA17AwfPYY7e9w0%2FxD7Pu9rIWAczmjcnMiMLRjLOoOubzNUpzz%2BQS%2FnBEsKH0kNQd1FALjQ3jQK9m%2FxyFHd4LmkK0IarfobKB12d%2FxLOS4kHUAINLbQpXbjWkJm9yZ0DF1De%2FX%2ByAJrjImauCu4Xj%2FNdaY4JgOEtpr%2B5hUyHvtbkk%2BpRRwG1h6Oe%2FjG%2FQLt%2Bbpcy1swndga4NoT8mX4tPU9qs3PFHwGF%2FYZ0yW5lxqReXLQfitH%2FTfZl2MCQBowQuWfeZ5n39o3oX5CBnh9qdHI9jbZgCVgPinL7m2vpLbqza0sSX6voZkTh3IK3eL0qQdzbbLoJnJB0np0apkNN%2BeL%2Flr3%2Fs5oGU5LkAi8JoT4SqYJcEs6%2F0UvdJxwfx9TH4wPu3Xo35mz6e4S5w%2Bd6HSg8p%2F8izWKc3NvxE%2FSZVeQPilgVQqkCbSybAYFtIilAKURN%2F47xF02dA0Zi0xFBUIue38Q5CPRRix5O1EEZH5PLWG4Mxt734B9aK8rqSDyuu4CnPDyy4DIcYuZtmNCK73vHx9s5sev6DGd3wZjOUW2L%2ByHqc72fnyAObT4wkMqcwgY6pgGHanzQM9O6BOUkQVfEs1pFOkf9%2BtZzBmihtsk6V6xjbXz6uXMkeFtvQX6zRw5nzExhrWan4UydZoLACeLC7zLRPzW7NdcZVYDxIFKeJJiBya%2Fm%2FQRuFvJBL3cEA0R1i6pdUI8KZ%2BGzJWyvqp2yOjKXyOZ%2Bd2M4ldWxge%2BibF9hOeRm7NLQoqytC0aSm9uxzlCXYJFa6H22%2BG2v8rjyVmcGszSuwPpN&X-Amz-Signature=1b4eba839ec11313eaeaead75d54a117c1ba74d66c137997f3e47dd17af7ae26&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NTKQSVW%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwZuXGKcmpnbaGkIexS2pRIGDk5GrgdPBXoosJp5cvFAiAqRwYv5wcNGIQcHUVSB4pd9T8YqgVcO5gbeP2uEhhwciqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnrR5TYDaoy2o13WkKtwDfY49tr1HQw08jZT1lVRvchV37i7CqH%2BO8vZCrzGro62wHsZYHrN7CIhJWQxd1wbIlA17AwfPYY7e9w0%2FxD7Pu9rIWAczmjcnMiMLRjLOoOubzNUpzz%2BQS%2FnBEsKH0kNQd1FALjQ3jQK9m%2FxyFHd4LmkK0IarfobKB12d%2FxLOS4kHUAINLbQpXbjWkJm9yZ0DF1De%2FX%2ByAJrjImauCu4Xj%2FNdaY4JgOEtpr%2B5hUyHvtbkk%2BpRRwG1h6Oe%2FjG%2FQLt%2Bbpcy1swndga4NoT8mX4tPU9qs3PFHwGF%2FYZ0yW5lxqReXLQfitH%2FTfZl2MCQBowQuWfeZ5n39o3oX5CBnh9qdHI9jbZgCVgPinL7m2vpLbqza0sSX6voZkTh3IK3eL0qQdzbbLoJnJB0np0apkNN%2BeL%2Flr3%2Fs5oGU5LkAi8JoT4SqYJcEs6%2F0UvdJxwfx9TH4wPu3Xo35mz6e4S5w%2Bd6HSg8p%2F8izWKc3NvxE%2FSZVeQPilgVQqkCbSybAYFtIilAKURN%2F47xF02dA0Zi0xFBUIue38Q5CPRRix5O1EEZH5PLWG4Mxt734B9aK8rqSDyuu4CnPDyy4DIcYuZtmNCK73vHx9s5sev6DGd3wZjOUW2L%2ByHqc72fnyAObT4wkMqcwgY6pgGHanzQM9O6BOUkQVfEs1pFOkf9%2BtZzBmihtsk6V6xjbXz6uXMkeFtvQX6zRw5nzExhrWan4UydZoLACeLC7zLRPzW7NdcZVYDxIFKeJJiBya%2Fm%2FQRuFvJBL3cEA0R1i6pdUI8KZ%2BGzJWyvqp2yOjKXyOZ%2Bd2M4ldWxge%2BibF9hOeRm7NLQoqytC0aSm9uxzlCXYJFa6H22%2BG2v8rjyVmcGszSuwPpN&X-Amz-Signature=e2e0d582e49a1b22172a8a8ff2324180b627233c3392a53fb9189c66e55bdad3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
