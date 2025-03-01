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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A5LH4ZX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGtNof9b5a5M18ZFjNUHhf4bnNwGsfF%2B%2FtEF4J9MZQUhAiB48Q9K2qs%2FqLlS2R1s5Ooui8hkwJGJnWqNlKVgvS%2F5JyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdx2DNEZmHPW%2Fu1vnKtwDthtAKDhTJOQBW2tpUK6sRPaNIEZOJuRe19WCM9ukLq75MAEDpiEIOIOocEMkMsWYLqOpevvfnXl1BWA8jW3a5IlBrWLfDb1g%2BXYTaqnT2beAPOI6ivXCN1wm4zCMCLwljkeFH4vp6qdybYwSjkcGsIkpjtq04Rce%2F4%2B2kngbHwUgJ9GaTxWRg66d4X%2Bnfg70VyYhAx%2FsoNXaK5bp4CzjvVRgxXh8UljViWDCKFYyuT2qfKmYrABVMOJV2p4Es%2BJfVeIZL9Fn1yidD5DqRy4DWDAKaLA7361EBtxb2IWcme0e3MzIKlzEEtA83HFWKJdKCr5V9bo0NpaTf0H8P642wCaL3nvAf9ccJxNOkeogJ11XaSCnMgHlQAWGL6hq20bc%2Fm%2BDF6ywvfOKw5zJNOsk4vJlmjiUwoCCmitDUPiI41k5t3YcGrtQdbG%2B1dhCnfCp4xg5zmb6kS5mITX6ml7jGXCon%2F24lpT7t9OC01WQYhUQIsfI29UWHIvHMLlF3KG3KOXxEfEiB%2BANxsKBbvOiexz7SccPUsb1%2FWPijH8k7ID9ED5scelukMh9qnK1fB%2F9VjUPmmusyl62F%2BUxGQ%2F%2FO9yPG7FQp15w0X8PCBdEa3hpjOJtFW5LvSwNl5Ywn5CKvgY6pgFx6EZUT3VlGXoycraYAeL%2BFnHWfu1onMUqNG%2FTGFXzarTF1ZBwQ5MMoqgNQGd9DuzOqHPoIRIyQhUJMGIJ0KL89RRe9XrZYCVkSczdU%2Be%2FAnCLYQyDLqVQ2w%2BP0jwJ3sO2Si%2Fa5dtYD0fBXijxoCKCLuZE6LwxHIwn4ZGuoVSJfk7XYhrOxlpakqWG8H1BcxMV7jAV2woGBeTqtluKeVTNwmUbQII2&X-Amz-Signature=f51abc00343773da91a98845ac5c1879cb2958a1e73bd50b985c6c710ccf8c86&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A5LH4ZX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGtNof9b5a5M18ZFjNUHhf4bnNwGsfF%2B%2FtEF4J9MZQUhAiB48Q9K2qs%2FqLlS2R1s5Ooui8hkwJGJnWqNlKVgvS%2F5JyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdx2DNEZmHPW%2Fu1vnKtwDthtAKDhTJOQBW2tpUK6sRPaNIEZOJuRe19WCM9ukLq75MAEDpiEIOIOocEMkMsWYLqOpevvfnXl1BWA8jW3a5IlBrWLfDb1g%2BXYTaqnT2beAPOI6ivXCN1wm4zCMCLwljkeFH4vp6qdybYwSjkcGsIkpjtq04Rce%2F4%2B2kngbHwUgJ9GaTxWRg66d4X%2Bnfg70VyYhAx%2FsoNXaK5bp4CzjvVRgxXh8UljViWDCKFYyuT2qfKmYrABVMOJV2p4Es%2BJfVeIZL9Fn1yidD5DqRy4DWDAKaLA7361EBtxb2IWcme0e3MzIKlzEEtA83HFWKJdKCr5V9bo0NpaTf0H8P642wCaL3nvAf9ccJxNOkeogJ11XaSCnMgHlQAWGL6hq20bc%2Fm%2BDF6ywvfOKw5zJNOsk4vJlmjiUwoCCmitDUPiI41k5t3YcGrtQdbG%2B1dhCnfCp4xg5zmb6kS5mITX6ml7jGXCon%2F24lpT7t9OC01WQYhUQIsfI29UWHIvHMLlF3KG3KOXxEfEiB%2BANxsKBbvOiexz7SccPUsb1%2FWPijH8k7ID9ED5scelukMh9qnK1fB%2F9VjUPmmusyl62F%2BUxGQ%2F%2FO9yPG7FQp15w0X8PCBdEa3hpjOJtFW5LvSwNl5Ywn5CKvgY6pgFx6EZUT3VlGXoycraYAeL%2BFnHWfu1onMUqNG%2FTGFXzarTF1ZBwQ5MMoqgNQGd9DuzOqHPoIRIyQhUJMGIJ0KL89RRe9XrZYCVkSczdU%2Be%2FAnCLYQyDLqVQ2w%2BP0jwJ3sO2Si%2Fa5dtYD0fBXijxoCKCLuZE6LwxHIwn4ZGuoVSJfk7XYhrOxlpakqWG8H1BcxMV7jAV2woGBeTqtluKeVTNwmUbQII2&X-Amz-Signature=ce2127abcdbea92f8f0d6105dd344358841906b1504035081d931e6879d8e63a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
