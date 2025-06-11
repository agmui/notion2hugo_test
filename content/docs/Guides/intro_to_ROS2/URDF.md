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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7ZLLP65%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDH8V1eZ43kw3GfypvAmsZiYM8zeAa87Jnz26LZ8p8GWgIgTwy2OVwu2Qar%2FWbA1xwWUJV3ns0RSHKjlWAxg96QQj8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPo%2FPowfdGDylVgqqSrcA0k%2FVasr9BdqSuXeFSFnFjWv14L%2B1JabEnRLcyLGG390NhWJ3K%2BSprS9oLFn4FIEEJLoxTLAj4xwuNQ%2Feo1sD%2BayogKiiATSZaK9ILbZpXVaCF1e2p1W5BKFuNVm9uj%2BUkcRQNtsriSD6T6v%2Bud10JuKaRWROCLJdAJjaNpUf73KbcMx0i1stDZmSY7wUg9aSSmA73JECYsKAI8sbeyMg5aKXPVjKMj%2B4%2Fzy41wLXOOI9dKxGAV0%2FvjFMkwyMfX8B9g%2Bea2QXGMEYsBHYNE5BLip%2BZHR8b76Sd9vtacloNtc7zNSGsH1CG47JdMNKvPSw3bQfcexOVptJHkDZt6SsgXsByzsS77rALN8SX2P5PZ6hFQWlwEx%2BtoG4%2F3FqY34xRglHlILUumVVbWU8rR%2Bnaj85yeLF6gJoRSB5tcVYK9Wf6zQKWisSBHQfKksQ%2FM9cdrIl2wd5SIF%2FlcsktefE6x%2BEtNLL09AtcakJH%2FKboVqzMYKnagRxNJALlTwZxjxqR6RM5sqN51ZM6eO%2B6Ls42KNJYMPWzflEycp7%2FiDHdb%2FKuVtpFEfEVTx3MNxfR1wB04YeAub2dLo8W9OCmU5WBgBYepSgzccq5nAH0VbeHIf%2BwYvcryN0M9xERq6MO7npsIGOqUBd06XwTfyt5ptUN5Gwohw2%2FKB%2FM4CDSVRFgC99UGpwP9aALw2CRY0b6%2Bz0lptsfRQVOTESzvx2oIJamFxUBELRvgLHMS3SHsjJlg5riellHam1AWieLEMLAL%2BxTI51u7uNZq1JuYcHTwHySkP4r5rYWpNfX4AQ5MFviP4T0aICvnyHEXMo9c83K054ShZCAidXH235JNEtg%2BHrJNb6bUHtF3R1vCp&X-Amz-Signature=ef53d87721bdb63d48e2bb014fd1e6bf1c43e1dc110a088649261023a51ba2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7ZLLP65%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDH8V1eZ43kw3GfypvAmsZiYM8zeAa87Jnz26LZ8p8GWgIgTwy2OVwu2Qar%2FWbA1xwWUJV3ns0RSHKjlWAxg96QQj8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPo%2FPowfdGDylVgqqSrcA0k%2FVasr9BdqSuXeFSFnFjWv14L%2B1JabEnRLcyLGG390NhWJ3K%2BSprS9oLFn4FIEEJLoxTLAj4xwuNQ%2Feo1sD%2BayogKiiATSZaK9ILbZpXVaCF1e2p1W5BKFuNVm9uj%2BUkcRQNtsriSD6T6v%2Bud10JuKaRWROCLJdAJjaNpUf73KbcMx0i1stDZmSY7wUg9aSSmA73JECYsKAI8sbeyMg5aKXPVjKMj%2B4%2Fzy41wLXOOI9dKxGAV0%2FvjFMkwyMfX8B9g%2Bea2QXGMEYsBHYNE5BLip%2BZHR8b76Sd9vtacloNtc7zNSGsH1CG47JdMNKvPSw3bQfcexOVptJHkDZt6SsgXsByzsS77rALN8SX2P5PZ6hFQWlwEx%2BtoG4%2F3FqY34xRglHlILUumVVbWU8rR%2Bnaj85yeLF6gJoRSB5tcVYK9Wf6zQKWisSBHQfKksQ%2FM9cdrIl2wd5SIF%2FlcsktefE6x%2BEtNLL09AtcakJH%2FKboVqzMYKnagRxNJALlTwZxjxqR6RM5sqN51ZM6eO%2B6Ls42KNJYMPWzflEycp7%2FiDHdb%2FKuVtpFEfEVTx3MNxfR1wB04YeAub2dLo8W9OCmU5WBgBYepSgzccq5nAH0VbeHIf%2BwYvcryN0M9xERq6MO7npsIGOqUBd06XwTfyt5ptUN5Gwohw2%2FKB%2FM4CDSVRFgC99UGpwP9aALw2CRY0b6%2Bz0lptsfRQVOTESzvx2oIJamFxUBELRvgLHMS3SHsjJlg5riellHam1AWieLEMLAL%2BxTI51u7uNZq1JuYcHTwHySkP4r5rYWpNfX4AQ5MFviP4T0aICvnyHEXMo9c83K054ShZCAidXH235JNEtg%2BHrJNb6bUHtF3R1vCp&X-Amz-Signature=69d8d60973ef12c6972d216e70d3288aedc662802b299d2ab15fe7f4dc9a5230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
