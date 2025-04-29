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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV27OXYV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8VTjJYsV6cbIhhqc%2FRHV75R9z2xEmgEWyIs9mwANgxwIhAPrLKx%2BgL3Srewk1QF0mRVOgwLm2p3FTzmyM4yifd0GgKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwdp9VCtaV%2FhKpt20Aq3APQ%2BRhzD%2FMtcDpsMouGZN1Q7X0tM5EXs2N%2F8r2X%2FU0mtPzN%2FT0kBb8inaXEVq9Ead3rCm6ALpZjgV%2FF9GpLs26FcisvZbjb8bO5c5c2YYhop0%2F3wsftLI9tWdDvFEEwWONiE7YSQCxss%2FLuMVKksiicjR09fvgrVb%2FiiQuUXDJRvz9oGNBKVjo%2BM0tvseZ%2BtPhzdN%2BLreNT0xbzk5DvMNyyptJM0vVvV%2B%2F2NtRA0Qs%2F3Qtu%2BKcm2hIkDPScdi7znV4qh8l%2FJ%2F8HW6i2F0wOOHKmT%2Bfs1LQNnfmwHBV9v4wrZ%2BatKVu1H6DWK3my08D%2FFAY7z01mwVJDM7Z4omOdmyLwYrAyoHCIF93oQm1aUMeADOIbESUWxOfbSHIA7ZpmjHmfgwNHww80UFXDCUXVPuZt7CqA67j2xcaZ8e4bnpNczXHgXOdGHOrws1kav39IvIwjjvuq6JdeO%2BV0JIh7QluxudLlmbM3U9Ij%2BuALh3WfA6ujw0aDBPHsH0JC%2FbClnA5eZKPg0s3nmMUuRhyCLRVkV27dkAVAo0lpZ4njKWJ%2Ff4Kc1keKk85%2BABi90BCKWISBrAjhCL%2FO8lmnMnMCsPFZKxFGmZ1Sa6r%2F7Hu1%2FfAUiEGbd5X6%2BoytQM5fszCi98PABjqkAZOVn8k11B9MVSSribJUAVBC36wRTifXfrEstyqEMka1i6Y9ML8WEeXbXpO2oWPrqTSJG9U7ZK%2BakPxxYFdLBE2jcbYLdQttAh7Ao36D%2BCB7fGU9x4uUBs0N0wOSBxzr2LAj%2BTFnYrmlLw5kgVdyZ91lMRQu6sEfBtd%2FDmfeOCCtFBwepZXdSbvdZHrruaKRCDnxmpzLKl8mEMqGBQu5uNvnmfMA&X-Amz-Signature=541318519dc2de22a43756b60d839a261504e4bee50ea1ca31b8d9d7b4f41215&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV27OXYV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8VTjJYsV6cbIhhqc%2FRHV75R9z2xEmgEWyIs9mwANgxwIhAPrLKx%2BgL3Srewk1QF0mRVOgwLm2p3FTzmyM4yifd0GgKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwdp9VCtaV%2FhKpt20Aq3APQ%2BRhzD%2FMtcDpsMouGZN1Q7X0tM5EXs2N%2F8r2X%2FU0mtPzN%2FT0kBb8inaXEVq9Ead3rCm6ALpZjgV%2FF9GpLs26FcisvZbjb8bO5c5c2YYhop0%2F3wsftLI9tWdDvFEEwWONiE7YSQCxss%2FLuMVKksiicjR09fvgrVb%2FiiQuUXDJRvz9oGNBKVjo%2BM0tvseZ%2BtPhzdN%2BLreNT0xbzk5DvMNyyptJM0vVvV%2B%2F2NtRA0Qs%2F3Qtu%2BKcm2hIkDPScdi7znV4qh8l%2FJ%2F8HW6i2F0wOOHKmT%2Bfs1LQNnfmwHBV9v4wrZ%2BatKVu1H6DWK3my08D%2FFAY7z01mwVJDM7Z4omOdmyLwYrAyoHCIF93oQm1aUMeADOIbESUWxOfbSHIA7ZpmjHmfgwNHww80UFXDCUXVPuZt7CqA67j2xcaZ8e4bnpNczXHgXOdGHOrws1kav39IvIwjjvuq6JdeO%2BV0JIh7QluxudLlmbM3U9Ij%2BuALh3WfA6ujw0aDBPHsH0JC%2FbClnA5eZKPg0s3nmMUuRhyCLRVkV27dkAVAo0lpZ4njKWJ%2Ff4Kc1keKk85%2BABi90BCKWISBrAjhCL%2FO8lmnMnMCsPFZKxFGmZ1Sa6r%2F7Hu1%2FfAUiEGbd5X6%2BoytQM5fszCi98PABjqkAZOVn8k11B9MVSSribJUAVBC36wRTifXfrEstyqEMka1i6Y9ML8WEeXbXpO2oWPrqTSJG9U7ZK%2BakPxxYFdLBE2jcbYLdQttAh7Ao36D%2BCB7fGU9x4uUBs0N0wOSBxzr2LAj%2BTFnYrmlLw5kgVdyZ91lMRQu6sEfBtd%2FDmfeOCCtFBwepZXdSbvdZHrruaKRCDnxmpzLKl8mEMqGBQu5uNvnmfMA&X-Amz-Signature=d513a08164b53c389eefe5e3228da1eaf98439a8b6dd87ea6a9d6d03531163f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
