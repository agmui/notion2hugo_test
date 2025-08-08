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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWES756%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEPOKyrA1hVSLVZftnH%2B3BjMWV9WBcJU%2Fx4DOPX6EIYtAiAKbLdhaJNjzj2ZUm8MJSE%2BHQLt5B8Q0au3wjwRBZ3PNyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvCFTOiS1nV8%2Fhr2tKtwD7cYpNp3xpmScEE362uionX3Bg4GT2qO07h%2FrrF9qUnBN4v5gtg9gfXAfiTxCWcrR74Eiq4wwqAJHb1t0YX4fkheITY%2FNhjDyhkG9ih3zDnJaytKUrhshED66JHRR7%2B0IRQG52cREHFVlqdIvcUbinQIo0W1UPDzuRYonZiFxPP4ouPOtrjHOnjwKrskn%2BxReP8F37xHwn0nxCvXLJfLKLJ1vMHxPWpWR92ZOspwHMU4m24HVX3o393jnW95fsNHhyUGhH3M7aImINfCxo8Vcy30aOhd7AYaf%2B1ZS5kiUESPqHwVXTs8CqedDVcLntoYiDKnIeN07j1isCsY%2BlgyLiGBvg9u0p8sG7YrbEBhofoigcJhH9s5oP87ywVGrfyrdbaUNv4eSra92X96onRwfnAmVTvNuGiCIh6Hr0pgcqGwC7q5ZRCCzdtRAWCW%2FKdrkJPMe8myOXda9v6BFhaRmbi%2BYibpgI8Fxa0N9WJovf75aPYP9kVarBdGlE4Z79mYRVRh7St9%2FPnoOlp%2Bmcp%2BvqNIt13FxsyFVxUwlos92wVmzi9SQLHprNCe%2BTOcKWhebXA8e1fGQ9SIGRKiBwz5Bz0K0b1rLiVdFEwa%2FkYAzZK2pN5K2ljU%2BQD9grgww8oHYxAY6pgFCpoVvcHF%2FbvkPKfJApvcFmzPrmSHb0uZA325tWvg5slj%2Fly%2B8LtBmXuHarZW%2Bsa5%2Bnq%2FM5q9E4Z%2BBmSHnEWXijxuEftmISjMRH8nKeKiHVwdO87OKVrhR8OEdFNm2wE8Kt%2Bd%2FpTpmhM4cZ0OQTLK1p6r%2FD%2BLP5OCt7EzQXvJSkGRSk0sdphf1Y5CELPi9NlA98ik1Or4IDBUn7ZKM%2BWc1x%2BpNiRx%2F&X-Amz-Signature=a94781488298766b0b9641a74ea145b8ca36456ec76cba7714c4228e7d404b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWES756%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEPOKyrA1hVSLVZftnH%2B3BjMWV9WBcJU%2Fx4DOPX6EIYtAiAKbLdhaJNjzj2ZUm8MJSE%2BHQLt5B8Q0au3wjwRBZ3PNyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvCFTOiS1nV8%2Fhr2tKtwD7cYpNp3xpmScEE362uionX3Bg4GT2qO07h%2FrrF9qUnBN4v5gtg9gfXAfiTxCWcrR74Eiq4wwqAJHb1t0YX4fkheITY%2FNhjDyhkG9ih3zDnJaytKUrhshED66JHRR7%2B0IRQG52cREHFVlqdIvcUbinQIo0W1UPDzuRYonZiFxPP4ouPOtrjHOnjwKrskn%2BxReP8F37xHwn0nxCvXLJfLKLJ1vMHxPWpWR92ZOspwHMU4m24HVX3o393jnW95fsNHhyUGhH3M7aImINfCxo8Vcy30aOhd7AYaf%2B1ZS5kiUESPqHwVXTs8CqedDVcLntoYiDKnIeN07j1isCsY%2BlgyLiGBvg9u0p8sG7YrbEBhofoigcJhH9s5oP87ywVGrfyrdbaUNv4eSra92X96onRwfnAmVTvNuGiCIh6Hr0pgcqGwC7q5ZRCCzdtRAWCW%2FKdrkJPMe8myOXda9v6BFhaRmbi%2BYibpgI8Fxa0N9WJovf75aPYP9kVarBdGlE4Z79mYRVRh7St9%2FPnoOlp%2Bmcp%2BvqNIt13FxsyFVxUwlos92wVmzi9SQLHprNCe%2BTOcKWhebXA8e1fGQ9SIGRKiBwz5Bz0K0b1rLiVdFEwa%2FkYAzZK2pN5K2ljU%2BQD9grgww8oHYxAY6pgFCpoVvcHF%2FbvkPKfJApvcFmzPrmSHb0uZA325tWvg5slj%2Fly%2B8LtBmXuHarZW%2Bsa5%2Bnq%2FM5q9E4Z%2BBmSHnEWXijxuEftmISjMRH8nKeKiHVwdO87OKVrhR8OEdFNm2wE8Kt%2Bd%2FpTpmhM4cZ0OQTLK1p6r%2FD%2BLP5OCt7EzQXvJSkGRSk0sdphf1Y5CELPi9NlA98ik1Or4IDBUn7ZKM%2BWc1x%2BpNiRx%2F&X-Amz-Signature=ba6e5008a5f3f2bb6d0d91da0d4c0eaed7c4b4d467bdce95730e19b265bfad50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
