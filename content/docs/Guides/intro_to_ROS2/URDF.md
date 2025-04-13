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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6ILK3E%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCSPwzz16A%2FM%2B47Fr6OzXzlwwVKB%2FIicyrBE0EHHBZrNgIgW5rOMsSRCSpHQkojrPESAAeUV48UUdREceS%2Fr7YItMQqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6c5midK9uq%2FBUX4SrcA9crbuDZAlDVIzs51HyLE3FDEZJiufzG%2FTdssJDlgigLJkW5wfuJMB3tHgv0Jar1R8AccmAiH%2Bm6svoiRre7m4ezSpKfiiaqfUuh%2BPMuOscS%2Fo6k1keKCMFBuTP7zNX3BWZkwgDaMHpAijW%2BOiP6KTc8FOGj1fMqPva7kFaZMhEv7LFYgXJE5liTUhoCma3uSooT8Zm8YgyJveYis4jtvAKQQ83P%2BVeaH%2BSsYvUXkjHMoTBIB%2BHKhS0T1nBNQKHOyBQ2ec%2BZ%2BiatjZJ6ZDnofOj35r%2FXJsPG587Lc62rWv2qmbjzI0MLtliowvhsTTvzE1hg3aAaDOeJ7Wk3%2FhNgrgn%2FuzpkRQlMROvk3acEM0pBVzlpxvgy2%2BGi901mL%2Fhp%2B1xNbtY1Mkxi8ykUnqHzrxeL41EEpcVLOwgKdVKw8eROZEKB2fZwaDoqdON92p2YVj9wu1pD8UJlWObtjw48bdJ7fpvsIdQ%2By8Zso49D4%2BYqTyCKczELOEtSVRNuN00qSHgnMa8HcNPMmEb3ZbKXln77V7YkP61qecUhOT4qSflo29s0q%2B%2B3B332wjDfpumV1UvYbEslH3bQWZlhYMw6x5lGXHjMiNGr8mCwz7KByvWZjaO0x27sLmKQPvu1MOSp778GOqUBF4Ev87NBee10fjIP7OoGURICbe1RcQWqcGhn8PEqIMZyfDjwB1GOSnt%2BajwS9%2FPciVeYlPnocgr6x0sz066%2FhOUUYkZ%2BPaqpR42YmK49xfYDClnF274zYLRdrPYnRpmqg5aW4ko%2F8rfQYJ9hPmtRcD8%2BtDC2aBRjO%2Bcpw2tpBglGI%2BeSh6DcscTcPd3ig66Nx7lav%2BjePIYkezaMfCtnI%2FyeiXH5&X-Amz-Signature=b1a53c2701c527dc0247f02f626d89cefcf2f89ada3d0fb409e1225099e40c18&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6ILK3E%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCSPwzz16A%2FM%2B47Fr6OzXzlwwVKB%2FIicyrBE0EHHBZrNgIgW5rOMsSRCSpHQkojrPESAAeUV48UUdREceS%2Fr7YItMQqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6c5midK9uq%2FBUX4SrcA9crbuDZAlDVIzs51HyLE3FDEZJiufzG%2FTdssJDlgigLJkW5wfuJMB3tHgv0Jar1R8AccmAiH%2Bm6svoiRre7m4ezSpKfiiaqfUuh%2BPMuOscS%2Fo6k1keKCMFBuTP7zNX3BWZkwgDaMHpAijW%2BOiP6KTc8FOGj1fMqPva7kFaZMhEv7LFYgXJE5liTUhoCma3uSooT8Zm8YgyJveYis4jtvAKQQ83P%2BVeaH%2BSsYvUXkjHMoTBIB%2BHKhS0T1nBNQKHOyBQ2ec%2BZ%2BiatjZJ6ZDnofOj35r%2FXJsPG587Lc62rWv2qmbjzI0MLtliowvhsTTvzE1hg3aAaDOeJ7Wk3%2FhNgrgn%2FuzpkRQlMROvk3acEM0pBVzlpxvgy2%2BGi901mL%2Fhp%2B1xNbtY1Mkxi8ykUnqHzrxeL41EEpcVLOwgKdVKw8eROZEKB2fZwaDoqdON92p2YVj9wu1pD8UJlWObtjw48bdJ7fpvsIdQ%2By8Zso49D4%2BYqTyCKczELOEtSVRNuN00qSHgnMa8HcNPMmEb3ZbKXln77V7YkP61qecUhOT4qSflo29s0q%2B%2B3B332wjDfpumV1UvYbEslH3bQWZlhYMw6x5lGXHjMiNGr8mCwz7KByvWZjaO0x27sLmKQPvu1MOSp778GOqUBF4Ev87NBee10fjIP7OoGURICbe1RcQWqcGhn8PEqIMZyfDjwB1GOSnt%2BajwS9%2FPciVeYlPnocgr6x0sz066%2FhOUUYkZ%2BPaqpR42YmK49xfYDClnF274zYLRdrPYnRpmqg5aW4ko%2F8rfQYJ9hPmtRcD8%2BtDC2aBRjO%2Bcpw2tpBglGI%2BeSh6DcscTcPd3ig66Nx7lav%2BjePIYkezaMfCtnI%2FyeiXH5&X-Amz-Signature=8c58f2228fc7e9cad69ce31a39e81239269c59d6ddf072587fc558a03157d27c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
