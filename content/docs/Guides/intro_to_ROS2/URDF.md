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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674RL5JBL%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4TNf2TAKl4c2k5shCY9kgWi7o2wfR%2FCBiD7V5%2FSvbowIgGjpGgOcrt%2FMAhn1cvPVJZWN8Rxiw63V83%2BJ8HYhgE3sqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMd1qg0DUSu8uQ%2FcnCrcA3LvnKslsc639KonS0Z2uaxPgHyG8vV25cFfgiNyvJCjhoIAh9jq4n8e5hETf%2BcipmH6N1lmwAyNvWPSLs7djUXcOsEqVkQ%2BWfmChB%2BtKgXrmiWxpWZJXYTU%2BpXQ3%2BYpvplJ6zyAYvmlivk1P%2BoLg6LhVqowbV5MQnTPJYVzvoTHg5QO47wPPE17bGanC1ONPb8wQNDdSxOX2dJKC%2FSHvwIaeVG1HiQMa6ayA9LoDb2mX0cF7hoC98UnJILHgXe4gGWwYYvQsKonJKz74DdHRa%2Brl93VFXOQUDbmolmyW5g4i0IuXuMDGwncXouxRpT7W3sgOT9ghy0Hf7ESQS0117LeS5HrRkqogOsb7x%2FKSbQcOAXsIBQhHMcn3qpgskH0p8BA6SCCLNtmbyS6hIIcnkbv3pYk%2FnB4TAP3NSYfAExrYsPwzXSJssVxcKr1DZzzpvQ3fvDp3zgCWQAdrWzWrCDI4cmQH97ToYJE3cfxcP9Dv73%2B0%2BJeV3ttdbY4kHAX1qYY9zHG0CRt%2BsYNuow34tmisFbAfRR5qG4%2F0k8%2BoQZSDKNRCwLpBpGZsqvr36msiXjpf60xBN06E6w8ru%2Fv9pBTtR81UMdUxGqC2SO%2Fl0%2Bg1RrdhlSNTpmOhspGMOyJ9LwGOqUBPBSEeSkR2wa%2BfQXX54xiE7Udhof6umZuRbMruJiYkwUVpbuaR5imWmt%2FwHRvFgXOQluXPFhbPTJ8ITH1ql0rlF2w47oiy4BFstsf5ijAzlubxqK2P9E2TlzFrDaX2QkFWawsKgJJEui%2FnfbREnMJeIxN4SJYeGAnJuNJnBTqiS7SYVYgq9L4ybGA%2B7%2BmkjAUBjxJ5K%2Ba2rgOJdFoN7oX8s53YBS3&X-Amz-Signature=b3c84017d0f6da4bef4f66843c0e86ce46a13f5a4a3deef67d563a4f4f04d975&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674RL5JBL%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4TNf2TAKl4c2k5shCY9kgWi7o2wfR%2FCBiD7V5%2FSvbowIgGjpGgOcrt%2FMAhn1cvPVJZWN8Rxiw63V83%2BJ8HYhgE3sqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMd1qg0DUSu8uQ%2FcnCrcA3LvnKslsc639KonS0Z2uaxPgHyG8vV25cFfgiNyvJCjhoIAh9jq4n8e5hETf%2BcipmH6N1lmwAyNvWPSLs7djUXcOsEqVkQ%2BWfmChB%2BtKgXrmiWxpWZJXYTU%2BpXQ3%2BYpvplJ6zyAYvmlivk1P%2BoLg6LhVqowbV5MQnTPJYVzvoTHg5QO47wPPE17bGanC1ONPb8wQNDdSxOX2dJKC%2FSHvwIaeVG1HiQMa6ayA9LoDb2mX0cF7hoC98UnJILHgXe4gGWwYYvQsKonJKz74DdHRa%2Brl93VFXOQUDbmolmyW5g4i0IuXuMDGwncXouxRpT7W3sgOT9ghy0Hf7ESQS0117LeS5HrRkqogOsb7x%2FKSbQcOAXsIBQhHMcn3qpgskH0p8BA6SCCLNtmbyS6hIIcnkbv3pYk%2FnB4TAP3NSYfAExrYsPwzXSJssVxcKr1DZzzpvQ3fvDp3zgCWQAdrWzWrCDI4cmQH97ToYJE3cfxcP9Dv73%2B0%2BJeV3ttdbY4kHAX1qYY9zHG0CRt%2BsYNuow34tmisFbAfRR5qG4%2F0k8%2BoQZSDKNRCwLpBpGZsqvr36msiXjpf60xBN06E6w8ru%2Fv9pBTtR81UMdUxGqC2SO%2Fl0%2Bg1RrdhlSNTpmOhspGMOyJ9LwGOqUBPBSEeSkR2wa%2BfQXX54xiE7Udhof6umZuRbMruJiYkwUVpbuaR5imWmt%2FwHRvFgXOQluXPFhbPTJ8ITH1ql0rlF2w47oiy4BFstsf5ijAzlubxqK2P9E2TlzFrDaX2QkFWawsKgJJEui%2FnfbREnMJeIxN4SJYeGAnJuNJnBTqiS7SYVYgq9L4ybGA%2B7%2BmkjAUBjxJ5K%2Ba2rgOJdFoN7oX8s53YBS3&X-Amz-Signature=e2645e15ae79acbafb85608d195cf19732457a7cdcb9995a9799816be5749ca3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
