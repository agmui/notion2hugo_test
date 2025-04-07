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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU6DTCHX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3klRt6UlvnwsZ7tk4cuBpLnEbkfz7EZkMyJeEZKz3DAiEAxtnmk3wn69XjHSiT%2F6v6ezWWAk217xCx3DVO8Oc4EUIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLibFvB4bkFilhQSRyrcA%2FTPd%2B3I%2B%2FdCo3nv9kN9WF7nx0PHL9Pm6AEuNbXxkPAJarEDUzrI9WIApll37hIeg3OWtUBHMXXMONmfAycLU4IOc1N0kEpAXOWsCNV6fsHLR5bIASIwfp6JviCYYlufoOPx1Ar0zRjajl7HwJAyiILfxp4lrLxdEcgwXAf9UtgjNx4emhKmWch9llbyQ9Ve3ap75oR5nEks2TPlcCOtuUwt3NAWnrDPsMewcpXpXuZMbiYGrZwNV5G722gDZW6e9kOZGbHRhbsFCs3nCts4bVliW%2BwKGe1SXue3n08469KHDcVaU8FuKIQL1qkiei4I7w0lrLuohOfvKKzEoZG1JQK9ufECN1wiTMItVjkt4%2FgbS0BAixgzezz3jZ01IOOTCHf9IKkYBp2J52bj5C0OWJ78s2%2BBHPlM6f4xfA4yGH8pE4m5AwzittmqJvtqWhNdZOJwD493o%2BMTFqyFPyxbdPToNumdpV6SaPAQ4d1NzXBQlc1JbILWzkl829RXcfHBATzlzHfq0Ora%2Fcl8U0d2sedInEAIma7pxibKrVk7nh0Zevo%2Be7c35e23uYSL%2Fo%2BpCKIkTwrt9H8bVPlyWq2HdCuiloinxw2Edy3EuXoewZSz15WgYnObVdqv06dHMMbSzb8GOqUBmleIoLUneCAAdYzP7jZR35brsoX1NxQ4WEUz6tjWZY5HiurOrF3Dl9PB6KUQvh2OJttUq2qoiWzoIj%2Fd4lnOJUoRhipmquOGtWyb3LXIJhvus9ksmxJr610UVeeIHeTCJqJe4ZeDFUufrjjyz4u7%2BwxlkBPUBg0IbNIPIeHh1tdhJ0HnLSgF8niEl79frxmrhBlzd8o74GcHOACcDBO%2F9CibFdI6&X-Amz-Signature=7f4c4791e310111c988ad74b39e5e05b003ccd9bdfa209e9c41ae2ac13de3b8d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU6DTCHX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3klRt6UlvnwsZ7tk4cuBpLnEbkfz7EZkMyJeEZKz3DAiEAxtnmk3wn69XjHSiT%2F6v6ezWWAk217xCx3DVO8Oc4EUIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLibFvB4bkFilhQSRyrcA%2FTPd%2B3I%2B%2FdCo3nv9kN9WF7nx0PHL9Pm6AEuNbXxkPAJarEDUzrI9WIApll37hIeg3OWtUBHMXXMONmfAycLU4IOc1N0kEpAXOWsCNV6fsHLR5bIASIwfp6JviCYYlufoOPx1Ar0zRjajl7HwJAyiILfxp4lrLxdEcgwXAf9UtgjNx4emhKmWch9llbyQ9Ve3ap75oR5nEks2TPlcCOtuUwt3NAWnrDPsMewcpXpXuZMbiYGrZwNV5G722gDZW6e9kOZGbHRhbsFCs3nCts4bVliW%2BwKGe1SXue3n08469KHDcVaU8FuKIQL1qkiei4I7w0lrLuohOfvKKzEoZG1JQK9ufECN1wiTMItVjkt4%2FgbS0BAixgzezz3jZ01IOOTCHf9IKkYBp2J52bj5C0OWJ78s2%2BBHPlM6f4xfA4yGH8pE4m5AwzittmqJvtqWhNdZOJwD493o%2BMTFqyFPyxbdPToNumdpV6SaPAQ4d1NzXBQlc1JbILWzkl829RXcfHBATzlzHfq0Ora%2Fcl8U0d2sedInEAIma7pxibKrVk7nh0Zevo%2Be7c35e23uYSL%2Fo%2BpCKIkTwrt9H8bVPlyWq2HdCuiloinxw2Edy3EuXoewZSz15WgYnObVdqv06dHMMbSzb8GOqUBmleIoLUneCAAdYzP7jZR35brsoX1NxQ4WEUz6tjWZY5HiurOrF3Dl9PB6KUQvh2OJttUq2qoiWzoIj%2Fd4lnOJUoRhipmquOGtWyb3LXIJhvus9ksmxJr610UVeeIHeTCJqJe4ZeDFUufrjjyz4u7%2BwxlkBPUBg0IbNIPIeHh1tdhJ0HnLSgF8niEl79frxmrhBlzd8o74GcHOACcDBO%2F9CibFdI6&X-Amz-Signature=c2e898faa9ed9b42bf99f65d22c230ace839855f763ff2e821a9e89087436d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
