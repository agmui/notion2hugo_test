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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKD5L5HL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIBr3R9FHagWLnSKlniebmCszPMWTPvrs5Az%2F894gLeHXAiB6UJMwBBQGk4WuqHAvlntEBEPsS5TI3RMXJBlwLgLOkSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMza0L%2BlcogBLUsbkIKtwD%2BOIVcFuP2H50DEl4AId12BHY1fSMbFm%2F%2BvRG1EiKAmJdSFijC6dpn055G1ifX0rUVGBBEcN7Oo9QPtoqcxbmZ6am7Ka6uaJdCJw2aX%2F%2FDaOxo35uHit2qwhUOM1UglagcJMJrv24BwTwPlfLkaAjDo%2BB0pmfNjFiXkZZ%2Fj%2BOGajPH0xtraRoKjwamuOoevkvEw6SUJgJavVc142bS9O42y2Ilzdum2KiO6uRt74QwxXFti3gedAW1tXnX5pUUObE5tJiQ5oNvjqp4kJ%2F2tb533B9QGFMXCbZiyrFyn%2BPkHTqZi4gD%2BHmh8gbMQXzOzS1zxAk2WDUlKWWoNTTEqBwHoET9DNWi3TLp6CYZ3VmwyeqRtDlFkN4168rdgcTQvW9zxcqPbMcUuxWWTEbUY%2F0A3pb%2BxrXmxcNKZsw0GzlAi5T6MklbHXrNwOHnIBrrx8gU8cEXuFAnKPuNDJzxvG6YiR8w04e%2FdIVzD%2BYvAMY5EBve7O%2Bhuuy1%2BV8YLetkR8ROCzjbI03rjtcscjF3D7jy3cjMH8j2a4d4ECmkuMsf1AMqhj5EvLRg7DA8ZBZnhX%2Ft2hPKN34aWtXPb74RVeU4zNTLm6I%2BIjntLxVq3bInIg2aOVWEp80hczZ4fkw7%2BqmwgY6pgEmUGMCihgRl4UEQcE1ezRXtfXNPaXS8E5dVz9cKi1SQH3fxp%2BbxLKJCcxB4PuAowBbkRE%2FSrXVY33WLS2Q1xt5gzke%2F9xnoMjD8MkpbfUN9TqjWB%2BaCbSukO8%2BJdXbHXygOGqxKn5rnxwG9a4VNWyiFLkmw%2BrqwxwrF3O4Q8HpFxHYg3dek%2B0qU5ZAySvwXAfc6CiF2oLSdbRrnCC9LkikiPgWgzFb&X-Amz-Signature=909768f89251417b73d0c4c98886bca34dd69eb8ce1e88faf37280c620dd66f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKD5L5HL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIBr3R9FHagWLnSKlniebmCszPMWTPvrs5Az%2F894gLeHXAiB6UJMwBBQGk4WuqHAvlntEBEPsS5TI3RMXJBlwLgLOkSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMza0L%2BlcogBLUsbkIKtwD%2BOIVcFuP2H50DEl4AId12BHY1fSMbFm%2F%2BvRG1EiKAmJdSFijC6dpn055G1ifX0rUVGBBEcN7Oo9QPtoqcxbmZ6am7Ka6uaJdCJw2aX%2F%2FDaOxo35uHit2qwhUOM1UglagcJMJrv24BwTwPlfLkaAjDo%2BB0pmfNjFiXkZZ%2Fj%2BOGajPH0xtraRoKjwamuOoevkvEw6SUJgJavVc142bS9O42y2Ilzdum2KiO6uRt74QwxXFti3gedAW1tXnX5pUUObE5tJiQ5oNvjqp4kJ%2F2tb533B9QGFMXCbZiyrFyn%2BPkHTqZi4gD%2BHmh8gbMQXzOzS1zxAk2WDUlKWWoNTTEqBwHoET9DNWi3TLp6CYZ3VmwyeqRtDlFkN4168rdgcTQvW9zxcqPbMcUuxWWTEbUY%2F0A3pb%2BxrXmxcNKZsw0GzlAi5T6MklbHXrNwOHnIBrrx8gU8cEXuFAnKPuNDJzxvG6YiR8w04e%2FdIVzD%2BYvAMY5EBve7O%2Bhuuy1%2BV8YLetkR8ROCzjbI03rjtcscjF3D7jy3cjMH8j2a4d4ECmkuMsf1AMqhj5EvLRg7DA8ZBZnhX%2Ft2hPKN34aWtXPb74RVeU4zNTLm6I%2BIjntLxVq3bInIg2aOVWEp80hczZ4fkw7%2BqmwgY6pgEmUGMCihgRl4UEQcE1ezRXtfXNPaXS8E5dVz9cKi1SQH3fxp%2BbxLKJCcxB4PuAowBbkRE%2FSrXVY33WLS2Q1xt5gzke%2F9xnoMjD8MkpbfUN9TqjWB%2BaCbSukO8%2BJdXbHXygOGqxKn5rnxwG9a4VNWyiFLkmw%2BrqwxwrF3O4Q8HpFxHYg3dek%2B0qU5ZAySvwXAfc6CiF2oLSdbRrnCC9LkikiPgWgzFb&X-Amz-Signature=2fa7cb823b6203e8ec68a659e6ab95cb063dd36404b04edbbbc7bdac2a9b4d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
