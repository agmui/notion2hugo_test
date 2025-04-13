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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SI4WU5C%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCPnNDc0X6zO1B70q1gRwYVWB8OXh2l0hCf5JOfVaWuLgIgaHlK%2F50XZnuOMb9DUn9CQOJ9eUD%2BV%2B6owDZNQS3NcGMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhcvinzKRN%2FmDgu%2BCrcA0EMo0%2F1OrQKib2m2XQqDrnaiDyhHJxVtd3A%2FMWz6guJWNo3IeTTgDbe6cyP9kHIYlx1bf%2Bg%2FCzRVKK5YJ3gn0rBQXiW4Try%2FMOiP13dGeZ7CYrnuxmw4ZACNRaKWGqajL4UGc5aOEtigvCgAIselqLSpWDpETe7EyXr2ID7H0O%2Fdpek9K%2BJxubYOZkkN57jZ6iwEAicReUEa4IumC0buYw6VulHE2Abvb9Ai6J5PJ8mCDtAQArDBbEedoA47bzgcWOfS5NgXDJnn9YlfD5OyLWqxno46zCOFGapZpwj5x5M3LdI0K%2FTjBGshrPS7VCF3CU8bSOiLdtGFggyIj8yWuhKl8oRIdAey5JdReWvhVK%2BEC0zmEO7LT4rxSMUOJ2bBxolgJ6m4SX%2FMkcJ3SSfG%2B79uNaJa7XAyksP%2B00DHQ5fGzFdOk3vMleZWBBCLNzhgE4XLbm5Dajoo2jSb65t7rcL66bofaVQG89EvL4QdqXoq%2FYUfgMMmcuzP2zh2F8Ewb7FgbhUrnpUVggHQp5uG6sUFjoUvR8k%2B0mrNeBWHTBVvgFlFRdkvFzF6fu3aLdgA1GMP27AlHXQb2fw%2F0L0kcEfqaQyBNVJslMXaHA4OjYGkBWNGbTEHFFO4yz4MKKC8b8GOqUBgKUeJCUNslkD6ks5eVvM%2F1arnX%2Fc0lZ77b724q9LDz2hiXjyAIQJax78OFcosv7g%2BwkVT0Dyi1CdkyP7sVvPofFFjV%2FcldfiiLuJiNyIbs96srtXXFtH%2FYEHQ%2F0rjYPAz7MlnI4Z8c3sb1u1Z67M%2BgJo9t%2BBaCG%2Bp72NCDVogBaZSSLKbouh%2F%2FZNT8lLjM3jHSINIDAPTYs4KGjYW8G7UiDUKPX5&X-Amz-Signature=dd2b077443fc3bffc6302584f34ad36d4378d7b7cd6b119aead0b08952f919c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SI4WU5C%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCPnNDc0X6zO1B70q1gRwYVWB8OXh2l0hCf5JOfVaWuLgIgaHlK%2F50XZnuOMb9DUn9CQOJ9eUD%2BV%2B6owDZNQS3NcGMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhcvinzKRN%2FmDgu%2BCrcA0EMo0%2F1OrQKib2m2XQqDrnaiDyhHJxVtd3A%2FMWz6guJWNo3IeTTgDbe6cyP9kHIYlx1bf%2Bg%2FCzRVKK5YJ3gn0rBQXiW4Try%2FMOiP13dGeZ7CYrnuxmw4ZACNRaKWGqajL4UGc5aOEtigvCgAIselqLSpWDpETe7EyXr2ID7H0O%2Fdpek9K%2BJxubYOZkkN57jZ6iwEAicReUEa4IumC0buYw6VulHE2Abvb9Ai6J5PJ8mCDtAQArDBbEedoA47bzgcWOfS5NgXDJnn9YlfD5OyLWqxno46zCOFGapZpwj5x5M3LdI0K%2FTjBGshrPS7VCF3CU8bSOiLdtGFggyIj8yWuhKl8oRIdAey5JdReWvhVK%2BEC0zmEO7LT4rxSMUOJ2bBxolgJ6m4SX%2FMkcJ3SSfG%2B79uNaJa7XAyksP%2B00DHQ5fGzFdOk3vMleZWBBCLNzhgE4XLbm5Dajoo2jSb65t7rcL66bofaVQG89EvL4QdqXoq%2FYUfgMMmcuzP2zh2F8Ewb7FgbhUrnpUVggHQp5uG6sUFjoUvR8k%2B0mrNeBWHTBVvgFlFRdkvFzF6fu3aLdgA1GMP27AlHXQb2fw%2F0L0kcEfqaQyBNVJslMXaHA4OjYGkBWNGbTEHFFO4yz4MKKC8b8GOqUBgKUeJCUNslkD6ks5eVvM%2F1arnX%2Fc0lZ77b724q9LDz2hiXjyAIQJax78OFcosv7g%2BwkVT0Dyi1CdkyP7sVvPofFFjV%2FcldfiiLuJiNyIbs96srtXXFtH%2FYEHQ%2F0rjYPAz7MlnI4Z8c3sb1u1Z67M%2BgJo9t%2BBaCG%2Bp72NCDVogBaZSSLKbouh%2F%2FZNT8lLjM3jHSINIDAPTYs4KGjYW8G7UiDUKPX5&X-Amz-Signature=2e58016278f85a7ea3f7fd591c6ef1a87e5e0a6910110a21b63eab6c1182d879&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
