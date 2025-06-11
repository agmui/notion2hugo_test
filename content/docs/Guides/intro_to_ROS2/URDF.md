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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKS6TXT2%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFXyp4L5lFpNx7FqkPObbMmhAK65AU%2Fe67H3LIbYssxuAiEAtlGBezXefnQg5gNDXpXh0MOcsbcH3ScLsf0ayf1OousqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICoyuSFNoLTc0yK9SrcAyU1ATnU%2Betcskh%2BURZuAINFIoD%2FyQwo5KpDcviHYbIU7b3fBmEbZYBsgoGqHu15Mdzk2ulGBCIkEYG6XIk8KiLdFw2Y%2BwuzDOLO8HwILkRLOYhsFqvaFBSK9l7BOJqo30AdawH6BNfJgOofR7wP6c6gQVMe2AyyeqT8R3mm70miQkl%2FZhU9Z5Nkm%2BCiEBh2CxquXMxfCqq7UYMN8CpMXRJ8gAuxdsv7bqooArL44g%2Bl561%2B0%2BmC%2B677oI1bXz5P8orsXJx4KxCOV87R9Tx8pmnRsfQj91EppfNLEvRBmcjoXwwLQg5cUw%2B1zpKUv775%2Bj8QXHZ%2Fk2Ihxyt4PfTwV4m1yK7re26JKi8OkJ3pIoYidxbyD2tw3Mff1rj4XU3fLAZdklymVfaPtWR1nJKH51N16lAn0JDv8ObJMS5H7%2BHLi9c8DVtk43CenWoTPF8hOSgfksAyCE6EWWhJBkPyRtv0VSXpf4q2MB7bgB6sN2vAKHy047ZECqkuSO4dJJ7nVP09%2BYh76bKTF7GknzVCcCkuLWdbGjcUXXeeUiRZHs0%2Funl5ViLodsZbvwPtd6iCpGitDZIWvNsznr73LHwiBYuH1HkdytbhzTaNOVRWx5ejHQcLvDkqAaEv0m8FMK6ap8IGOqUBSZQjGK1fazO5QPmm1bcxg%2BsuXeC2ZcDEQ%2Fz8n3Ju4B30tqzhRcYheQ2HuThPk3NqZRXtQZQ31WDGyaTxS6kVHtFahZAFLowRINkwq1ND%2Fb61JxyQx0QyfVgnc%2FLat4rMt3mGUNOzV8j%2Fjbypnf6dxyRmiN5%2FUxgngA%2F4vyoT0bx%2B7w2qrkiLaeSMQeTUg4TM%2BW1uaGvIDEpeOUuh5g%2B%2BTvoasjyI&X-Amz-Signature=aaa53698b9401e434ce2832aed9d7bc9489f8b5e88dc9ce3bf3ec05b12a704d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKS6TXT2%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFXyp4L5lFpNx7FqkPObbMmhAK65AU%2Fe67H3LIbYssxuAiEAtlGBezXefnQg5gNDXpXh0MOcsbcH3ScLsf0ayf1OousqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICoyuSFNoLTc0yK9SrcAyU1ATnU%2Betcskh%2BURZuAINFIoD%2FyQwo5KpDcviHYbIU7b3fBmEbZYBsgoGqHu15Mdzk2ulGBCIkEYG6XIk8KiLdFw2Y%2BwuzDOLO8HwILkRLOYhsFqvaFBSK9l7BOJqo30AdawH6BNfJgOofR7wP6c6gQVMe2AyyeqT8R3mm70miQkl%2FZhU9Z5Nkm%2BCiEBh2CxquXMxfCqq7UYMN8CpMXRJ8gAuxdsv7bqooArL44g%2Bl561%2B0%2BmC%2B677oI1bXz5P8orsXJx4KxCOV87R9Tx8pmnRsfQj91EppfNLEvRBmcjoXwwLQg5cUw%2B1zpKUv775%2Bj8QXHZ%2Fk2Ihxyt4PfTwV4m1yK7re26JKi8OkJ3pIoYidxbyD2tw3Mff1rj4XU3fLAZdklymVfaPtWR1nJKH51N16lAn0JDv8ObJMS5H7%2BHLi9c8DVtk43CenWoTPF8hOSgfksAyCE6EWWhJBkPyRtv0VSXpf4q2MB7bgB6sN2vAKHy047ZECqkuSO4dJJ7nVP09%2BYh76bKTF7GknzVCcCkuLWdbGjcUXXeeUiRZHs0%2Funl5ViLodsZbvwPtd6iCpGitDZIWvNsznr73LHwiBYuH1HkdytbhzTaNOVRWx5ejHQcLvDkqAaEv0m8FMK6ap8IGOqUBSZQjGK1fazO5QPmm1bcxg%2BsuXeC2ZcDEQ%2Fz8n3Ju4B30tqzhRcYheQ2HuThPk3NqZRXtQZQ31WDGyaTxS6kVHtFahZAFLowRINkwq1ND%2Fb61JxyQx0QyfVgnc%2FLat4rMt3mGUNOzV8j%2Fjbypnf6dxyRmiN5%2FUxgngA%2F4vyoT0bx%2B7w2qrkiLaeSMQeTUg4TM%2BW1uaGvIDEpeOUuh5g%2B%2BTvoasjyI&X-Amz-Signature=1984d90c4e5be78ce86a1a3036e08f615f55544fbf89fa8daf8994426d4306c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
