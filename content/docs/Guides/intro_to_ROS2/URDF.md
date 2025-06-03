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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRR4BCSQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAt9tYj8CL9rIjlKCHpdRCZPjEWNxBpvfT668IUX8EC3AiBCMiwKqNMmKENsDVDOWRdXxjneGPQRAYteoAcTSE88vir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMLL2nULm%2B284uU9laKtwDs9eIGOVDBUi0mBJR5x2w5Dylu9nL2nqoUaKboMkvgnAiemqqcdGmdL1vj6W5Gp8fe6TP6%2FAjtHuof59Kb9NLT%2B4BwPhsqh84w6g1%2BaD%2FS728mhiijfJdGw%2BKoZADaesJtzsLBf3vPpQZlBoCy1Btsazr5IrxYs97dG39jsFQIeVib0zlJ62opKc865FihmjfH%2BsLsVp3iT6MEw0SRLBtEQzEH6I04buLxYai99oR8zGdJM1gx%2BLCwr62JD4LhG9hYHH7T0KggTHDwapKtVrOMiav4oQ2oY3U2l2X5it363dHSL1%2F1iM1It2%2FDnHqKbDzsh86FmFXsd%2BhPrGOVwqPzyeAXrdoAv9NqltVGaCdJLk6wO9kyMY8RhFzwaJNBmuIPwdCMleXHjaerxO%2F7ZGhFVCioYIQp%2BlNKpQMYPpYrTNY9ahlMD3kuMUq0nw1TXkWmlBzzBqcX6%2Br1JMznouavAkapX2iYBbJwBEcNkkb5svejR1nmhTTbEYnFC5FLtWp4QPwTC0Sdo8cXpHjIPyC632IkFs7hl%2FFOPbHCO4dhukT0jDkcD2tI6V5FsJqXOakK%2FthhH8nhK5oNOcLY1uSBGL0tGOmlp%2Bwk9gV%2BVdv2w7YIi3wIdrId4XnPUQwwoX9wQY6pgFoGrSWxCk2jEm1gqmP8trhsnRH4CsWAoYAy4VnDMlnRYXR%2FaZOLZUi%2BPRfPBPX0AvCNC3Y3S3emTlZhlM8DsTK67FqlK9nJ8Rh%2FHaQTwecbV4uCMXtYQEwbY8c8bW1tdguiuwYdTCUIQZXDZICmDQSNuASufNRKNpPgj6dl9iHLvZYqkY7SZbQK7jDlZLoxQFW1eGgOC5lLxs7FoQ6P3ql4Uh8%2FEKB&X-Amz-Signature=6b04b6236f503d6d9d75605bfe3276a076555edff5465127c715aceb0efb9057&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRR4BCSQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAt9tYj8CL9rIjlKCHpdRCZPjEWNxBpvfT668IUX8EC3AiBCMiwKqNMmKENsDVDOWRdXxjneGPQRAYteoAcTSE88vir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMLL2nULm%2B284uU9laKtwDs9eIGOVDBUi0mBJR5x2w5Dylu9nL2nqoUaKboMkvgnAiemqqcdGmdL1vj6W5Gp8fe6TP6%2FAjtHuof59Kb9NLT%2B4BwPhsqh84w6g1%2BaD%2FS728mhiijfJdGw%2BKoZADaesJtzsLBf3vPpQZlBoCy1Btsazr5IrxYs97dG39jsFQIeVib0zlJ62opKc865FihmjfH%2BsLsVp3iT6MEw0SRLBtEQzEH6I04buLxYai99oR8zGdJM1gx%2BLCwr62JD4LhG9hYHH7T0KggTHDwapKtVrOMiav4oQ2oY3U2l2X5it363dHSL1%2F1iM1It2%2FDnHqKbDzsh86FmFXsd%2BhPrGOVwqPzyeAXrdoAv9NqltVGaCdJLk6wO9kyMY8RhFzwaJNBmuIPwdCMleXHjaerxO%2F7ZGhFVCioYIQp%2BlNKpQMYPpYrTNY9ahlMD3kuMUq0nw1TXkWmlBzzBqcX6%2Br1JMznouavAkapX2iYBbJwBEcNkkb5svejR1nmhTTbEYnFC5FLtWp4QPwTC0Sdo8cXpHjIPyC632IkFs7hl%2FFOPbHCO4dhukT0jDkcD2tI6V5FsJqXOakK%2FthhH8nhK5oNOcLY1uSBGL0tGOmlp%2Bwk9gV%2BVdv2w7YIi3wIdrId4XnPUQwwoX9wQY6pgFoGrSWxCk2jEm1gqmP8trhsnRH4CsWAoYAy4VnDMlnRYXR%2FaZOLZUi%2BPRfPBPX0AvCNC3Y3S3emTlZhlM8DsTK67FqlK9nJ8Rh%2FHaQTwecbV4uCMXtYQEwbY8c8bW1tdguiuwYdTCUIQZXDZICmDQSNuASufNRKNpPgj6dl9iHLvZYqkY7SZbQK7jDlZLoxQFW1eGgOC5lLxs7FoQ6P3ql4Uh8%2FEKB&X-Amz-Signature=700f24cb96d83cdafe8cc44c9bac4f051d9d2fac74d2fa3f9a2b31be1f228b9a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
