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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O4MSXEP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID76RSX%2FFNXoHkl9YA5DnvLK%2FWdUdABX%2BQFBF7Kz5Q%2B0AiEA6n6DLf5aeCedPx25W%2F3SqHzcQ0vXZHML0MD46JLMVRwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeEQzLF3HqMpEbZKyrcA072duFNCPj92d09Y8al9Avun9u8z%2FjiQmYNh5oeOo60NUEFqGcPYdH45OTwuFaowO7TZjsoBcXw5m9vKMLEOXD1e2vSFgVyy3CK%2FyHj8204Sjz8YY5DvcnqIG51QXAtrt%2BhC%2FdT7pZwxr8Hd9P%2FKrbbMOyPj%2FIxtLG5QdL%2FoVR%2BOPeKa0CuCmAl8pywL3isssSulLM%2B8DP4JQncgn7k9w9x%2BneG7T36yBhmi65k%2F40RF6SlMG8LYAN6bHo5BEJpe%2FpYSFpGk1tcybUmHrpheG80xwlOeagtOmJPdFn9irbXQ9qYi1Ded2sB60pD1QHkc2%2BPpSV57amYhlCSw1LBRglJKSraGm4K0Sr0Ko4ifsDeR9uADF1ub3ghsEUqbQs9ZE8KXvHci8jnF74Jy9o4dWHpAtlktHYznSyx%2FPON1pauMsAnWZERN8v5wKFIGI0w3guwpjCMfxgxGIFQDW0J24be9g6yTNcM2%2BgaEUi6hQ2RfNrdnROku1CRXw2S1tNDQ5OS7aW6Gp%2Flrnk%2FCWqvGnlNJwA4VhEdLpuycAZmwlXukoUc7mcM0QtJ2%2BhfmPJH4Zhb66EcsUGctBgIdHB1KUbZ8A4ZI4siiYhofr%2BRK9Ad4KHopSNvgMAcRhnsMLmz4sEGOqUBa%2BaO58C9kDGQdIorRZyb2STHntJWJl72UD3HvbIu4SofrSkRj6XXru6kS%2B2UadnOYEcvzdkCDBPOXyKv6PlrSi2S0qQ3O5o3v1fwGONNkPXhCEhCMsVUqd8bKtZFO%2B9mRfbYZuCFOgGWD2SXjECDLPrBKE8SJStZ3VMnsXWzg8NzTAg7JKj6tEIGmv1l3ijhUzUTVzOEa6g8Urait310TpWEzTDi&X-Amz-Signature=6a6caba4a9b1c62387de2224e284820a68bb79368d09033f1b96a22647dcfd3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O4MSXEP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID76RSX%2FFNXoHkl9YA5DnvLK%2FWdUdABX%2BQFBF7Kz5Q%2B0AiEA6n6DLf5aeCedPx25W%2F3SqHzcQ0vXZHML0MD46JLMVRwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBeEQzLF3HqMpEbZKyrcA072duFNCPj92d09Y8al9Avun9u8z%2FjiQmYNh5oeOo60NUEFqGcPYdH45OTwuFaowO7TZjsoBcXw5m9vKMLEOXD1e2vSFgVyy3CK%2FyHj8204Sjz8YY5DvcnqIG51QXAtrt%2BhC%2FdT7pZwxr8Hd9P%2FKrbbMOyPj%2FIxtLG5QdL%2FoVR%2BOPeKa0CuCmAl8pywL3isssSulLM%2B8DP4JQncgn7k9w9x%2BneG7T36yBhmi65k%2F40RF6SlMG8LYAN6bHo5BEJpe%2FpYSFpGk1tcybUmHrpheG80xwlOeagtOmJPdFn9irbXQ9qYi1Ded2sB60pD1QHkc2%2BPpSV57amYhlCSw1LBRglJKSraGm4K0Sr0Ko4ifsDeR9uADF1ub3ghsEUqbQs9ZE8KXvHci8jnF74Jy9o4dWHpAtlktHYznSyx%2FPON1pauMsAnWZERN8v5wKFIGI0w3guwpjCMfxgxGIFQDW0J24be9g6yTNcM2%2BgaEUi6hQ2RfNrdnROku1CRXw2S1tNDQ5OS7aW6Gp%2Flrnk%2FCWqvGnlNJwA4VhEdLpuycAZmwlXukoUc7mcM0QtJ2%2BhfmPJH4Zhb66EcsUGctBgIdHB1KUbZ8A4ZI4siiYhofr%2BRK9Ad4KHopSNvgMAcRhnsMLmz4sEGOqUBa%2BaO58C9kDGQdIorRZyb2STHntJWJl72UD3HvbIu4SofrSkRj6XXru6kS%2B2UadnOYEcvzdkCDBPOXyKv6PlrSi2S0qQ3O5o3v1fwGONNkPXhCEhCMsVUqd8bKtZFO%2B9mRfbYZuCFOgGWD2SXjECDLPrBKE8SJStZ3VMnsXWzg8NzTAg7JKj6tEIGmv1l3ijhUzUTVzOEa6g8Urait310TpWEzTDi&X-Amz-Signature=25b3db2daf39207d5e9cb2766faa04efb760b0e89d1443fd7239cee514adbf01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
