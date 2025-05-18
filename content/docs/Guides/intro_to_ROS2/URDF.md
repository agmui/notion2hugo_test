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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S55557FF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIE3g5S6dpAWq5p5vi7PVGIsBql35bQHLbXPZD82zRs20Ah8pQidNP90YeJMFQ%2BDpfHH7O62Sp2832sI4K6p8CEysKv8DCHUQABoMNjM3NDIzMTgzODA1IgxkT8xAx15PK%2BIu3M4q3AMKx4rww6jVbRSyfifqBH4GAcFUVPVteTtSwQ2VQT5lzeFMUzYCDjG5Wzybke%2BsWYy0jRY4wHmvNOcYrcD9qWmJGanuY6E7Pc4v0HaeCcC29B8hhMsmMVJad5UiK0OSSpTwfvGrHYM3CIVx2E81%2Fp1KuekUSf28zxmq3CfUx%2FC4IvqZK0QGcBPwT5CRmyoD%2FprYrq0irhfh7hqf1N3egDGFKFd130l7Cy2SjbUzE3jnlG4naRNWL4Q9A9R7dubh9C5oKihwkUndjHlrQ2A2wgBnoHqBl91YWU6e4DNuBTY%2BeF6K9khkQG2NXhMs6Ug0rli5bb8ekvaqTtCZ5fKSmlfHscH0fL1I%2BRbxD1e7yffrkZACWukm0AR8BzzVC0Cy%2Bz%2FHu1Ylb%2F5gGS%2Bl%2BjkLFTI9IUERFKbDLaHFVPCA5hGwD9lyo3ZcMKrTZgN3kouwkiNH%2FsrUOVAcXb9xal%2Fr8UKLvFcs8QBplJfpGu0D13lQEFTRL1kl0MBA%2FkN3lUfnYmvIdQ5knAMhF0FDEBDBMjdtKbcnWPe646m5AylCpGbCPo6Xeo%2BPKePD4KYvLcQydQ22q9m6HV8sBTJUytt78CigJCbOBWllq1NYI%2BHjWkWt6jN7DFmFc29DkiZM8jDGnqfBBjqnASx6G6q6YQ1120ViXgrq8%2B0lWcfY9eDKvEDQmWR72qpKf5UHAOVKnaFf3PFxchDwcHe2q8TeAOis2TO8RBWA%2FW%2B3nxxFULih5W3cp3aYMP9jzXSjhpABOOGFxpLZtgqCgD8R2OAFtghyJYe%2BtHG1LC3jhUaAqfJo%2BsyjB04y5PF3ZisuUOixja9UaJ4EQplk3OWD9R5oQkjLsJ%2BW9yKEFkACu217m%2BjH&X-Amz-Signature=d0d65c4dcdc0e05fd4c29bf1c8a597f6b0f441fc05f80fce01ba484f919dd852&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S55557FF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIE3g5S6dpAWq5p5vi7PVGIsBql35bQHLbXPZD82zRs20Ah8pQidNP90YeJMFQ%2BDpfHH7O62Sp2832sI4K6p8CEysKv8DCHUQABoMNjM3NDIzMTgzODA1IgxkT8xAx15PK%2BIu3M4q3AMKx4rww6jVbRSyfifqBH4GAcFUVPVteTtSwQ2VQT5lzeFMUzYCDjG5Wzybke%2BsWYy0jRY4wHmvNOcYrcD9qWmJGanuY6E7Pc4v0HaeCcC29B8hhMsmMVJad5UiK0OSSpTwfvGrHYM3CIVx2E81%2Fp1KuekUSf28zxmq3CfUx%2FC4IvqZK0QGcBPwT5CRmyoD%2FprYrq0irhfh7hqf1N3egDGFKFd130l7Cy2SjbUzE3jnlG4naRNWL4Q9A9R7dubh9C5oKihwkUndjHlrQ2A2wgBnoHqBl91YWU6e4DNuBTY%2BeF6K9khkQG2NXhMs6Ug0rli5bb8ekvaqTtCZ5fKSmlfHscH0fL1I%2BRbxD1e7yffrkZACWukm0AR8BzzVC0Cy%2Bz%2FHu1Ylb%2F5gGS%2Bl%2BjkLFTI9IUERFKbDLaHFVPCA5hGwD9lyo3ZcMKrTZgN3kouwkiNH%2FsrUOVAcXb9xal%2Fr8UKLvFcs8QBplJfpGu0D13lQEFTRL1kl0MBA%2FkN3lUfnYmvIdQ5knAMhF0FDEBDBMjdtKbcnWPe646m5AylCpGbCPo6Xeo%2BPKePD4KYvLcQydQ22q9m6HV8sBTJUytt78CigJCbOBWllq1NYI%2BHjWkWt6jN7DFmFc29DkiZM8jDGnqfBBjqnASx6G6q6YQ1120ViXgrq8%2B0lWcfY9eDKvEDQmWR72qpKf5UHAOVKnaFf3PFxchDwcHe2q8TeAOis2TO8RBWA%2FW%2B3nxxFULih5W3cp3aYMP9jzXSjhpABOOGFxpLZtgqCgD8R2OAFtghyJYe%2BtHG1LC3jhUaAqfJo%2BsyjB04y5PF3ZisuUOixja9UaJ4EQplk3OWD9R5oQkjLsJ%2BW9yKEFkACu217m%2BjH&X-Amz-Signature=aa83db688ccfa2fd01bc44aa90080c279d6b59d79a3ed1d7ad60f6092f91c32f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
