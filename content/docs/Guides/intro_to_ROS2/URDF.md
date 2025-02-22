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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2GVIMNS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyNRnzn7do8rE14vyVs8E34mAp%2F0d7LUP0AEsFg0t%2FMAiBqkk1VqIr8QoUB4O6H8AljDi0wSqyN26gMbpYraY%2B0FiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmX4%2B6lfVfJSYNM8XKtwDpedxG9VM1p9WLwkKwsN0XPyc0GaYpFxWXobDhI8Rg3uMXLh2SYNJcFnrGxU7E8qSnZP1LReOeNkeazoDhBk%2Fly6SE%2BJIax01K5i6ZBE%2Fsifq2gH%2Bfu0jer0MaAUBIyjOCq71gylu%2B06MvX6E1u8pk%2FdrjIGMqnNVHt5WZOep3YdZljZZSvmSoI8c4awhxW6Zghe7mRWJeudS93KJRN9QAHGEFh2OII%2BOSA1CWOCEwJDkNVz4ZDJLvRCGHWEjr8m8smYagc3VUay%2FbXGANTcFS%2Bzrgrkmv1425aDrpEpjFvus7UQ3ElvWiokIwRjj4HDo0OV6LIW%2F%2BhrHQH2c8TKPp8oHz%2FcExE5Jd4kJ95DIfSS7p75UFf2xKS7fmfFiJC8C%2Bb%2FYNFN6wFbu4oqpaHjZi%2FhSGuCmbuCyZIPFteUDUWhmG0GwPwSYxueFyQy51S6u8%2BWKjzP%2BBM9NgXePYU626DAajFnomkiikNt%2BaqavGgw8f0esddzkQ1WaBLWc1pl5FgcIk3xs9IzL9kdnm9vwEgv%2FAJEJVIZW70IkY6Tum%2FKotWL82Ez1eW%2FvPG2K1BB4HwJmjNKIKHqO0NYNxwdw0Gv9rc5dV6ZKFeYWaM6Hohm0RIkn9GkUp0FK20ow4qnlvQY6pgEaaIDMkJoVNcFHv8gNmIoVffRzXUQZcrb5gG%2FlG6K855RWy7B%2Bwp%2FCjM6TH7MnsQZuKbc4VkY7wn4ytTNyrodzTdxHQiupVOYZY%2BJC%2FUqFx7EZwk6YVvidBhhg4INoh5uOo2%2FCgwQOsSifwwpUGqBdQ%2FdNnwNf1OjTiZH%2BHkSAOG8KIS4lG9yQAYl4NqV87gc%2FeoY1NVmXeyFeNAWtgW7xMFZqLyyw&X-Amz-Signature=f1d4d7999bd03e94fd70e78754423a918b7a5bab9f9bbc18168f21370b9762da&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2GVIMNS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyNRnzn7do8rE14vyVs8E34mAp%2F0d7LUP0AEsFg0t%2FMAiBqkk1VqIr8QoUB4O6H8AljDi0wSqyN26gMbpYraY%2B0FiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmX4%2B6lfVfJSYNM8XKtwDpedxG9VM1p9WLwkKwsN0XPyc0GaYpFxWXobDhI8Rg3uMXLh2SYNJcFnrGxU7E8qSnZP1LReOeNkeazoDhBk%2Fly6SE%2BJIax01K5i6ZBE%2Fsifq2gH%2Bfu0jer0MaAUBIyjOCq71gylu%2B06MvX6E1u8pk%2FdrjIGMqnNVHt5WZOep3YdZljZZSvmSoI8c4awhxW6Zghe7mRWJeudS93KJRN9QAHGEFh2OII%2BOSA1CWOCEwJDkNVz4ZDJLvRCGHWEjr8m8smYagc3VUay%2FbXGANTcFS%2Bzrgrkmv1425aDrpEpjFvus7UQ3ElvWiokIwRjj4HDo0OV6LIW%2F%2BhrHQH2c8TKPp8oHz%2FcExE5Jd4kJ95DIfSS7p75UFf2xKS7fmfFiJC8C%2Bb%2FYNFN6wFbu4oqpaHjZi%2FhSGuCmbuCyZIPFteUDUWhmG0GwPwSYxueFyQy51S6u8%2BWKjzP%2BBM9NgXePYU626DAajFnomkiikNt%2BaqavGgw8f0esddzkQ1WaBLWc1pl5FgcIk3xs9IzL9kdnm9vwEgv%2FAJEJVIZW70IkY6Tum%2FKotWL82Ez1eW%2FvPG2K1BB4HwJmjNKIKHqO0NYNxwdw0Gv9rc5dV6ZKFeYWaM6Hohm0RIkn9GkUp0FK20ow4qnlvQY6pgEaaIDMkJoVNcFHv8gNmIoVffRzXUQZcrb5gG%2FlG6K855RWy7B%2Bwp%2FCjM6TH7MnsQZuKbc4VkY7wn4ytTNyrodzTdxHQiupVOYZY%2BJC%2FUqFx7EZwk6YVvidBhhg4INoh5uOo2%2FCgwQOsSifwwpUGqBdQ%2FdNnwNf1OjTiZH%2BHkSAOG8KIS4lG9yQAYl4NqV87gc%2FeoY1NVmXeyFeNAWtgW7xMFZqLyyw&X-Amz-Signature=18acd07decd92a9881a46cca82fa91d61115002aab364379febfb862029c0e0f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
