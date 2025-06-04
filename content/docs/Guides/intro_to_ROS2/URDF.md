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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTWU7SR4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGEaKPQixM%2BBD3gkT2qTV6k8aSmdvVAFt%2BynmM%2FKeHnFAiAFHcHj2j0z06B9Di7EdaU0mNfLGZ9gGLOCXnO0DClHVCr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMElgnWcOlaxhE9r7PKtwD8xzJXMA9zmpjQMUvfG5afRb27dJlbY1zL8NUlWQS3pgYjSUSVdzkJJhoaGJisrviatiP8v5eJw0apM9THKvZxswRluzddekP6f5m%2FDCcRhvAV1VKW%2B2Nz9ci0JiJf8Cx63Q76c048psWdEu4Omuzb%2BuLc2R0Vi2SW0o1%2ByeYZoqdM8jHid44o6O%2FlIBaaOBvmHmBRRMk1SHBtleCDIK49t0RzCXcYjepMcwCRzx2iYt91OovDtsz4rZzlmJ5dwvV2PvHnKxW2T0oLQ6Pyql7%2B3Y7W73RHlxZYr6x6%2FhbcFteHcO6Y1t7mPsl6kw8knemyrsPlzARAw7BFUymXNen%2BMl2ImW06kpEXxUrbTKMK8AeZQKVJF%2BrwdvcGJLJnja9P2AeuJUkXHxbZ%2BCGYXRIoXojm%2FpmhsQ39ZBDpzaXeggRslYiepv93HAr7LjFVIVTjvAH80HBCXzUSIe7EwPX1lfkSPTlKGKOSjqz2f3tflnYLKklMvH6goCqAeNBvsxzikB44K9QmVca2%2F5yAtx080xARpTlc1NpkKi6DoM%2FWalqV3uV5x5wBBLce7oVF8eW4N68LR%2F0RK9AcrmIcoAY3jPEiEL2n%2BHgoL8niLkP6PcQLGXlljDplR38npAwiuf%2FwQY6pgGbjpkaBTy0hamFm5UBmIuyXXzOi3sJmdl98xM9%2FjegfWWrdND6L3Ih9upH9cyxpH0w9HI7rEBCktcT8%2F4Brt001T%2FgzmUgq0Kfdm5jU%2FjnsVDfLHmKHyvpI%2Bj68msVp7Eu2pdUiJojQ0PCfcLjsvjSM4n24RNNQ%2F8n2lqBNlL0PTnMMjfuYAh0iIfd3A1DuMHDboNNu5Y0oVbiQv7SiKZ7xHhBiquP&X-Amz-Signature=bb7efc90056fe9c7bd238b99a3b51038d461ca9c5096ee6098b93b52ddc29924&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTWU7SR4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGEaKPQixM%2BBD3gkT2qTV6k8aSmdvVAFt%2BynmM%2FKeHnFAiAFHcHj2j0z06B9Di7EdaU0mNfLGZ9gGLOCXnO0DClHVCr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMElgnWcOlaxhE9r7PKtwD8xzJXMA9zmpjQMUvfG5afRb27dJlbY1zL8NUlWQS3pgYjSUSVdzkJJhoaGJisrviatiP8v5eJw0apM9THKvZxswRluzddekP6f5m%2FDCcRhvAV1VKW%2B2Nz9ci0JiJf8Cx63Q76c048psWdEu4Omuzb%2BuLc2R0Vi2SW0o1%2ByeYZoqdM8jHid44o6O%2FlIBaaOBvmHmBRRMk1SHBtleCDIK49t0RzCXcYjepMcwCRzx2iYt91OovDtsz4rZzlmJ5dwvV2PvHnKxW2T0oLQ6Pyql7%2B3Y7W73RHlxZYr6x6%2FhbcFteHcO6Y1t7mPsl6kw8knemyrsPlzARAw7BFUymXNen%2BMl2ImW06kpEXxUrbTKMK8AeZQKVJF%2BrwdvcGJLJnja9P2AeuJUkXHxbZ%2BCGYXRIoXojm%2FpmhsQ39ZBDpzaXeggRslYiepv93HAr7LjFVIVTjvAH80HBCXzUSIe7EwPX1lfkSPTlKGKOSjqz2f3tflnYLKklMvH6goCqAeNBvsxzikB44K9QmVca2%2F5yAtx080xARpTlc1NpkKi6DoM%2FWalqV3uV5x5wBBLce7oVF8eW4N68LR%2F0RK9AcrmIcoAY3jPEiEL2n%2BHgoL8niLkP6PcQLGXlljDplR38npAwiuf%2FwQY6pgGbjpkaBTy0hamFm5UBmIuyXXzOi3sJmdl98xM9%2FjegfWWrdND6L3Ih9upH9cyxpH0w9HI7rEBCktcT8%2F4Brt001T%2FgzmUgq0Kfdm5jU%2FjnsVDfLHmKHyvpI%2Bj68msVp7Eu2pdUiJojQ0PCfcLjsvjSM4n24RNNQ%2F8n2lqBNlL0PTnMMjfuYAh0iIfd3A1DuMHDboNNu5Y0oVbiQv7SiKZ7xHhBiquP&X-Amz-Signature=a4c43fc480465bdc59ca804ce0c255b359cb5023fb2b43ab3bbd478f5caa89c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
