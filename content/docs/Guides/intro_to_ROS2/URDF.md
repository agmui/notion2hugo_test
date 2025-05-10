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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STC27BZD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWQdO22t7d7jImDmr816cmWvPg8CZ0JigFC7Y%2F1G30qAiBoUfHrpl9x%2B04aSU41DLGzd1ebZEKaMycS99IzZgaRryqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtOBHlx3P5UpuIbuwKtwDW2%2B0iuHrk1tDEVtkmAZEkaVF1X2QyrOWt099w5A1nUUEct4n%2FzUElXtC%2Fq3jzKwu%2BbGo2OoTmFBh9pJLPDS3f77pHI4s329bO2hH8WmhAd0CNKqJEpDC%2F4ToTuCWAqmgNNyNK12rktitz%2FdRGvJhB30ms6yy5zsRuhc3xJTzXFv1IsyAe8Apcz8U9p0dWScXa%2FnoGqqJ5DfCp3P9gT3hUUDStvV%2BAV9gZNDVkiFB8htZfhtaXJBkRN7W%2FGDXCFJ1g3Dg7XWLCFeu8njTj6dQgumo5yplSjhBt5oPcFhOR3Kbl88MHTyayJ%2B8h8Gbyw90KRahzXjInS6orLIPD%2B5qW277C64fB3quWFJHnK3cTKkRtHMmgqRRtUzRzKamPYsFSfKkoGdvok8h5tx2KWjw8o9XwaW%2BFBJMcYeYAUsaI5Lse38eHmIWkOgH2%2BSdxumuFehUuyh2GP1XCezgmgmjDunS4vZ3NtHB6Gf4qeivQeK3fHU2Pp%2F1vLU%2FhEt%2BIaTD0bCXPDQNAqFqw%2BwYKL4SdAhIA7V5MGM8BdrWGCeCNETdJqUMOEZ97AQMqV8UEYHTQU%2F7GDPMMdLZYrqcmYAhUpw0uWRCPm84Hjb9k6IXjzoRng2j3MIN6735pRYwr9b7wAY6pgEmju4dGLVhWRFZcHhYAeFxEAhu3IFxhnpwaqFCh4L6zV%2Ban7putKq%2F2PahWvgr%2BaBCDqpeqwGhYianaSMaezLiBZeto4uwsEgiULsqBUeAiPEwjzhbcqt0HYdkExD4b3XkQmHzP4SQSMzBwc4U1XwT8qpv1YVPRTD4niSBlH0TrN7%2BzV3ZyPZsve4kuzng1izFiPapJlRk%2BhC%2FqlAZnqJuJ7FsKK9H&X-Amz-Signature=0c26417be111e3290673890b0f9479ddafda703f78113d50d138991c03ff973d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STC27BZD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWQdO22t7d7jImDmr816cmWvPg8CZ0JigFC7Y%2F1G30qAiBoUfHrpl9x%2B04aSU41DLGzd1ebZEKaMycS99IzZgaRryqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtOBHlx3P5UpuIbuwKtwDW2%2B0iuHrk1tDEVtkmAZEkaVF1X2QyrOWt099w5A1nUUEct4n%2FzUElXtC%2Fq3jzKwu%2BbGo2OoTmFBh9pJLPDS3f77pHI4s329bO2hH8WmhAd0CNKqJEpDC%2F4ToTuCWAqmgNNyNK12rktitz%2FdRGvJhB30ms6yy5zsRuhc3xJTzXFv1IsyAe8Apcz8U9p0dWScXa%2FnoGqqJ5DfCp3P9gT3hUUDStvV%2BAV9gZNDVkiFB8htZfhtaXJBkRN7W%2FGDXCFJ1g3Dg7XWLCFeu8njTj6dQgumo5yplSjhBt5oPcFhOR3Kbl88MHTyayJ%2B8h8Gbyw90KRahzXjInS6orLIPD%2B5qW277C64fB3quWFJHnK3cTKkRtHMmgqRRtUzRzKamPYsFSfKkoGdvok8h5tx2KWjw8o9XwaW%2BFBJMcYeYAUsaI5Lse38eHmIWkOgH2%2BSdxumuFehUuyh2GP1XCezgmgmjDunS4vZ3NtHB6Gf4qeivQeK3fHU2Pp%2F1vLU%2FhEt%2BIaTD0bCXPDQNAqFqw%2BwYKL4SdAhIA7V5MGM8BdrWGCeCNETdJqUMOEZ97AQMqV8UEYHTQU%2F7GDPMMdLZYrqcmYAhUpw0uWRCPm84Hjb9k6IXjzoRng2j3MIN6735pRYwr9b7wAY6pgEmju4dGLVhWRFZcHhYAeFxEAhu3IFxhnpwaqFCh4L6zV%2Ban7putKq%2F2PahWvgr%2BaBCDqpeqwGhYianaSMaezLiBZeto4uwsEgiULsqBUeAiPEwjzhbcqt0HYdkExD4b3XkQmHzP4SQSMzBwc4U1XwT8qpv1YVPRTD4niSBlH0TrN7%2BzV3ZyPZsve4kuzng1izFiPapJlRk%2BhC%2FqlAZnqJuJ7FsKK9H&X-Amz-Signature=82efb975fac3c008740d55563bb786590ef9b0730b47ea7f460c13b9ee70611d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
