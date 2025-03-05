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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR6AC7EN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyP9clVbUGVEU6FnzmpwIb7wXuST9IO46AOZwbFtP9RwIhAP4BuvZ9eozGRWva%2B%2F6c9YFoa3cvq61ZwdEFpoz7KluzKv8DCBcQABoMNjM3NDIzMTgzODA1IgwKjD9tADRgezZ7F%2FUq3AOo6X3ZOtYIlQBmw48yhkca7nGrXfZ%2F%2BHdCh9T7M9EsvyvkpEaF0jlJbNriCp7izqeKj18tETdJXuvD8HeyH1Xsqd1jKfH%2BcUhRQI5c8%2FG0Eot1Jk3UogXb5OF%2F1xTxxG7OnIyvUif1Wk2XOMWGN73%2BdgAgf%2FwkCgozYBpBHrdvrv8nNd98kbOr8lKr91X4w3EfLPjcBkQmDBv9Q2yfMmfRSiuu55BYtOWYc55T7GaJkejOTrC6bjeK1J8Ggit3OIP%2BAHgKP7pKbxoXqAsacputTmCeNsyqkyt3JJ6aR9ePXDAVTvNcBMZVVPq4vYvYQ6JrmzyZIf%2BE472rlRKlG41zPe02Loc0X94xrE8rDbUVpw8XwSTYnv7pQkPK6CDyP7Xg%2B43G285%2FTvif%2F1QnMFEcfO3mHJQyyec5NNRln3gpWIWQxWKEQCax9n4HyGvPcbC%2FQkj2Kk8z%2FMYvpiD7ODtuRmWq6K6Z%2FwhOAV3KVzpDaL4Pbqfdt8qcxtqjoiKPttcGXHQhxBAVDMld0faVrtcc77Fjat8vWIyXCpfV%2BG%2BXYyZtN4SGoafuWiXfD8WZtuwmygxiqKAvZXmRNuSDtILPwj9J17v8DkunMxdwGPPDvL5Kiq4uVqk7P5WOpDDOuKG%2BBjqkAcT63SAteQNuWbusiV9UpgXTKqS%2F7DSvXScuGzlcVymWdTyidYDVjXn2YMdYv2kefANZ7zMVfZkihR2t3vaCAD1PcC1jfHOMZEldo2%2FkzXv%2Ff21W29Wf8oLKbijqu509wkHz1l%2BpRYzxkbDaHfZRehMFD0RxBcFE2wsOsVK2mbnE7js14TfeveZ28qHh3tQh5N9Oj2ZfRYqUmLHmjFzpKKH2kcWN&X-Amz-Signature=e53aa636a03afd48bfea53c064e4e48826abcaa2a49f54b04007fae5941e5fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR6AC7EN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyP9clVbUGVEU6FnzmpwIb7wXuST9IO46AOZwbFtP9RwIhAP4BuvZ9eozGRWva%2B%2F6c9YFoa3cvq61ZwdEFpoz7KluzKv8DCBcQABoMNjM3NDIzMTgzODA1IgwKjD9tADRgezZ7F%2FUq3AOo6X3ZOtYIlQBmw48yhkca7nGrXfZ%2F%2BHdCh9T7M9EsvyvkpEaF0jlJbNriCp7izqeKj18tETdJXuvD8HeyH1Xsqd1jKfH%2BcUhRQI5c8%2FG0Eot1Jk3UogXb5OF%2F1xTxxG7OnIyvUif1Wk2XOMWGN73%2BdgAgf%2FwkCgozYBpBHrdvrv8nNd98kbOr8lKr91X4w3EfLPjcBkQmDBv9Q2yfMmfRSiuu55BYtOWYc55T7GaJkejOTrC6bjeK1J8Ggit3OIP%2BAHgKP7pKbxoXqAsacputTmCeNsyqkyt3JJ6aR9ePXDAVTvNcBMZVVPq4vYvYQ6JrmzyZIf%2BE472rlRKlG41zPe02Loc0X94xrE8rDbUVpw8XwSTYnv7pQkPK6CDyP7Xg%2B43G285%2FTvif%2F1QnMFEcfO3mHJQyyec5NNRln3gpWIWQxWKEQCax9n4HyGvPcbC%2FQkj2Kk8z%2FMYvpiD7ODtuRmWq6K6Z%2FwhOAV3KVzpDaL4Pbqfdt8qcxtqjoiKPttcGXHQhxBAVDMld0faVrtcc77Fjat8vWIyXCpfV%2BG%2BXYyZtN4SGoafuWiXfD8WZtuwmygxiqKAvZXmRNuSDtILPwj9J17v8DkunMxdwGPPDvL5Kiq4uVqk7P5WOpDDOuKG%2BBjqkAcT63SAteQNuWbusiV9UpgXTKqS%2F7DSvXScuGzlcVymWdTyidYDVjXn2YMdYv2kefANZ7zMVfZkihR2t3vaCAD1PcC1jfHOMZEldo2%2FkzXv%2Ff21W29Wf8oLKbijqu509wkHz1l%2BpRYzxkbDaHfZRehMFD0RxBcFE2wsOsVK2mbnE7js14TfeveZ28qHh3tQh5N9Oj2ZfRYqUmLHmjFzpKKH2kcWN&X-Amz-Signature=a5ce0d49c8f543c136ee899b5af2efcc733ac87daad548d9ab5931e1171b0919&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
