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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPRYCDA4%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5ZYyoGvkqO7zfmPbxzdH%2BjCEbv2mH99ZYGZu5PnndfAiBdZU6MgtqREElAVA%2FHEvRcXdAxGbns3IwUNAWkrocKLSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLRS2OAgWEASwBhp8KtwDKKRzBS%2FbUXXunviOGAkXPbP99VKcmn%2BzJ6gf4KVXKzhU0tDfswITJ%2Fc1ZU6ECig3sdB5B26zc1HDsayx51UuARHmARvR%2B%2BFovua65dgp12N5L%2Bl8GqPamidVi3J%2B5W23NFUUJ3t6wpmjPTUWXLVFNIIUmBNQCCyZRr00NMoKvLAgCSPKuTmX7G3ZMUXkuz2UBDVVG0qI91z%2B17I8cqEnQCfPsZcSlx4sVaCmeATatz%2B645vwJUeZ1jR2DiLbLKHFGiM7YP%2BCrNwX%2BpZv2cnprrjnIa9LWbcv0nvamEATQfBEUn3tTvvkHbnmRow6Y0KtwhCBLZbQg95aaZ6UFfhIG6wl%2Fx1gHFW94px2iGTWa%2F3H7mPUiMJjYPFf%2Bb6UnJB9Wj5Bz%2BQJ%2FkUsn0TeyXHbxhEeaF6%2B85hJV%2Foz8octGrdcg0uXuHfjabcXgOEYdUwy%2Bpfd%2B2297jIrkAkkhDVs8X3LxEqnBTqJKaz%2F1icIhUYdLJFJfkO%2B7BwzGgKK3Fc8E5HG03FbeP3iaitokcD3qeRhggHhNyPsgkKMD5C476266h4krCtesdVmrR1UA%2BfCYSzYmuoVdTqt8zYMEHSsgjQB9FgqS0xLE5GHzVJo4Rhk19sOQucu6EVTOe8w5cqBvwY6pgGWUpShNyPZblW8nh3vd2CnIltM8oUNy8tw2N46r0QITu3NPfwO%2FJw69V0VAB42M%2FakmrwO2sPB0%2BwiT3FyV%2F6Uv36owMN5YIMHEbeaoyoXg3P1wmRsju6DH2PKqiObMSe1GFcupF98oolqyvGTg%2BW0bFiMPQF9isPHLWO1vttS8kiFudmpH4ViBTvOT5%2Brd4Fo48EifOm6m6IRojT2OpdLs7sYaga3&X-Amz-Signature=92177d6f40234f8b2b20238778656d8dfd1e681b709a1a9c7d3881b54b6d7d4b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPRYCDA4%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5ZYyoGvkqO7zfmPbxzdH%2BjCEbv2mH99ZYGZu5PnndfAiBdZU6MgtqREElAVA%2FHEvRcXdAxGbns3IwUNAWkrocKLSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLRS2OAgWEASwBhp8KtwDKKRzBS%2FbUXXunviOGAkXPbP99VKcmn%2BzJ6gf4KVXKzhU0tDfswITJ%2Fc1ZU6ECig3sdB5B26zc1HDsayx51UuARHmARvR%2B%2BFovua65dgp12N5L%2Bl8GqPamidVi3J%2B5W23NFUUJ3t6wpmjPTUWXLVFNIIUmBNQCCyZRr00NMoKvLAgCSPKuTmX7G3ZMUXkuz2UBDVVG0qI91z%2B17I8cqEnQCfPsZcSlx4sVaCmeATatz%2B645vwJUeZ1jR2DiLbLKHFGiM7YP%2BCrNwX%2BpZv2cnprrjnIa9LWbcv0nvamEATQfBEUn3tTvvkHbnmRow6Y0KtwhCBLZbQg95aaZ6UFfhIG6wl%2Fx1gHFW94px2iGTWa%2F3H7mPUiMJjYPFf%2Bb6UnJB9Wj5Bz%2BQJ%2FkUsn0TeyXHbxhEeaF6%2B85hJV%2Foz8octGrdcg0uXuHfjabcXgOEYdUwy%2Bpfd%2B2297jIrkAkkhDVs8X3LxEqnBTqJKaz%2F1icIhUYdLJFJfkO%2B7BwzGgKK3Fc8E5HG03FbeP3iaitokcD3qeRhggHhNyPsgkKMD5C476266h4krCtesdVmrR1UA%2BfCYSzYmuoVdTqt8zYMEHSsgjQB9FgqS0xLE5GHzVJo4Rhk19sOQucu6EVTOe8w5cqBvwY6pgGWUpShNyPZblW8nh3vd2CnIltM8oUNy8tw2N46r0QITu3NPfwO%2FJw69V0VAB42M%2FakmrwO2sPB0%2BwiT3FyV%2F6Uv36owMN5YIMHEbeaoyoXg3P1wmRsju6DH2PKqiObMSe1GFcupF98oolqyvGTg%2BW0bFiMPQF9isPHLWO1vttS8kiFudmpH4ViBTvOT5%2Brd4Fo48EifOm6m6IRojT2OpdLs7sYaga3&X-Amz-Signature=0638f3a26e2b9f8dc8ee2c4e5755a14866869af54b1ba8e9307615fffc3ff4eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
