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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TB75FYU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnTx3nEy1Y6FPjBHaoYDaGborHi9d2srVs9dfjVZBP%2BAiEAuFckZotL4iAmXtOnvZXiWO1rLwjoUK6t1nOvvKr1498qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBoFjGhFpxhOO2orsircA6KfD9UtH4uNejFrtx71HDRJe4PkHDo2m0tihZWFUPG2SUb2CWXXlZcDPndEVST4qwi8I7CS8%2FL29uFfrufyqjb884JJSZupQ6nfhMCf%2FF7rDcl2ZX6gQH%2FrBE%2BXZGpAFpav%2FSqWLC1i1uk6TjIsHnwzCc0mDI0vR4sJrdz%2BoOkic697GYQTbgDY9BIazQQ%2FTUphy6p9ySKAimySFT62Xy%2B8Ry3NUOvkr77QjVrKmzVHpEWGRK16qq7Jdn6JKxhV04s0KHLLBwC8B%2FFw0J1cQ4iQIdVZjsEA5KQl2FtBLUh0qdc77RUs56mFkWDNMJiv4du6MR%2Fkcz1bdvhIkTB%2F8CzqesP10TcH0U%2BeDRCGJ7sgTlUQCEmX4p0Lt1WwjwaX7U7%2Fq6Ovm70%2FuHIS%2FxBFmH6GaD6sfrYLiyVNgDTn46aOIZ7Xvleyxo07Dni31tS3PqJy796CBfdSNl0oIv78849cpl8U71ayjphxxA1295rixzXF9jqD%2FgBtenvhviDdhzXJuMg4djBBJZDjSPO%2FFoNIeduOluYfmwpegdQc%2Bvnn5MeNezf1t15XpmiWJ3QPrL9R35GGpZnPrRpfTc3w2z00C8ruuvODPS4MppABAwOH1ZvyTxsL8qKu3JRXMKq908IGOqUBVeKEvU%2B2d7S1pLFUz3y6RMZ4mV8uVP1WfqmuvkXfuJ3C%2BeHF0c%2B2qMZekPiV9ryEMiuBukBXVXhpCgCzy9ljL%2FEp19z%2FP%2Fq6xxdVq7t%2BRDHhHt2QEQiLF3XO1eyfVvZ85pz0lxNsnPErKz29PzLuD7hHLcwOdYSEEvucq3YDumOUScCvnDmP%2FyxiviRO2XbFr3KAGYzE%2BJL7e5aS%2BWbUIHDKIcNI&X-Amz-Signature=90589ad46adb5d904e4732f9cc7f0ec5d7b038b8b7d8196c83d2565ea1dc9fe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TB75FYU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnTx3nEy1Y6FPjBHaoYDaGborHi9d2srVs9dfjVZBP%2BAiEAuFckZotL4iAmXtOnvZXiWO1rLwjoUK6t1nOvvKr1498qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBoFjGhFpxhOO2orsircA6KfD9UtH4uNejFrtx71HDRJe4PkHDo2m0tihZWFUPG2SUb2CWXXlZcDPndEVST4qwi8I7CS8%2FL29uFfrufyqjb884JJSZupQ6nfhMCf%2FF7rDcl2ZX6gQH%2FrBE%2BXZGpAFpav%2FSqWLC1i1uk6TjIsHnwzCc0mDI0vR4sJrdz%2BoOkic697GYQTbgDY9BIazQQ%2FTUphy6p9ySKAimySFT62Xy%2B8Ry3NUOvkr77QjVrKmzVHpEWGRK16qq7Jdn6JKxhV04s0KHLLBwC8B%2FFw0J1cQ4iQIdVZjsEA5KQl2FtBLUh0qdc77RUs56mFkWDNMJiv4du6MR%2Fkcz1bdvhIkTB%2F8CzqesP10TcH0U%2BeDRCGJ7sgTlUQCEmX4p0Lt1WwjwaX7U7%2Fq6Ovm70%2FuHIS%2FxBFmH6GaD6sfrYLiyVNgDTn46aOIZ7Xvleyxo07Dni31tS3PqJy796CBfdSNl0oIv78849cpl8U71ayjphxxA1295rixzXF9jqD%2FgBtenvhviDdhzXJuMg4djBBJZDjSPO%2FFoNIeduOluYfmwpegdQc%2Bvnn5MeNezf1t15XpmiWJ3QPrL9R35GGpZnPrRpfTc3w2z00C8ruuvODPS4MppABAwOH1ZvyTxsL8qKu3JRXMKq908IGOqUBVeKEvU%2B2d7S1pLFUz3y6RMZ4mV8uVP1WfqmuvkXfuJ3C%2BeHF0c%2B2qMZekPiV9ryEMiuBukBXVXhpCgCzy9ljL%2FEp19z%2FP%2Fq6xxdVq7t%2BRDHhHt2QEQiLF3XO1eyfVvZ85pz0lxNsnPErKz29PzLuD7hHLcwOdYSEEvucq3YDumOUScCvnDmP%2FyxiviRO2XbFr3KAGYzE%2BJL7e5aS%2BWbUIHDKIcNI&X-Amz-Signature=e1473f0a2271313ff4e5f7ae6bedd816cd06937711bf9c60be0cca4437ef4abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
