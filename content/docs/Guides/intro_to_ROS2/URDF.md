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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBBYKWMF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIObCruHvHscXuFOY%2B6vbYWRA%2B73JDrI3LkMziVZoJHAiEAq1EvqN8CgbpN8YSPZFlAjD0piyCdMLiq%2FkauC69hnSAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEb7jY2tgOHVsXtSyrcA020ob1SJUv9ZiwD78rs%2BoRZmNKBPG7v8lo3oUUwXkMrZg1fJfmxeZQV7bYc8moE2uQy7UcI5bZjk0h5eCRg5lZre7iInePIziszH9SMEB5lZcXamOLOSPP1dNU4moy2FA6QLMSLSSh8iEh3TzHfJoawMKiqf17jyzyKRZakSEcj9NMZ2FbuhnTQATt2WIOc6rUxqLmrCeyV0qwUhDHj6BrJftAhtIl1QaxbREP2Dzxn%2FRu7q5ZHOHrqT5kk%2BpO62uUDoU8hvrANUH1vNxNbjdd5hKcknh%2BSSyHAhZmBGEgkwlc146oAurMZ7Tt35xKExN0F8j%2BowM9fu8PTHe3LdmLJe%2B43K%2FmhHTEg7Vp1j8WXG%2F11DumjBwCIQccT%2FVxRboLWowOW56hgOBVRkQAji72YXn7oVxipuSPkA3K%2F7ms2qMkDgCHjQS%2B7ty2HBApF0WXcysFXWosIMC33v17czc2q2KXx1gzDuLEp9kq3ReITL09UHdgxISeyDrsUnBi2sXjoRj8yrZaivqg%2FtEqKV7G5eSd3MF1XAlblkC%2BD3N7dWL%2F%2BI0QewbNEWiB1kOL2f84LjGxAZcTnj%2BIkEafID4SLKY1vbFnGmL8aA%2BnGRdqzKpd%2BLVlm%2BERrardEMKqvtcEGOqUBH5v7J1WcwR9PEh7oj8Jud%2ByG0%2FZ6nPYYM7HRSbMDGC1wdF55DVw%2BgrXsZ7sYraWdhh4bK48ORP62pv51d%2BaYm74HzKauyiYXd6Usjs%2BsSxp65w%2FdyltdhPUBdQJHtigBmlVYs2V4ZnmP0gLwGucsyBTs7gZLNXRYIMH%2BAhRwxNO%2BCpMGHZtyxYRX5EtwA4ujgfDRgPwpgyyjK95q6K2BkAV7Fk36&X-Amz-Signature=8115e1eecb450e1821b8afbad2a1249f692dea9c7f21fe3bf149073f2b122a3c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBBYKWMF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIObCruHvHscXuFOY%2B6vbYWRA%2B73JDrI3LkMziVZoJHAiEAq1EvqN8CgbpN8YSPZFlAjD0piyCdMLiq%2FkauC69hnSAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEb7jY2tgOHVsXtSyrcA020ob1SJUv9ZiwD78rs%2BoRZmNKBPG7v8lo3oUUwXkMrZg1fJfmxeZQV7bYc8moE2uQy7UcI5bZjk0h5eCRg5lZre7iInePIziszH9SMEB5lZcXamOLOSPP1dNU4moy2FA6QLMSLSSh8iEh3TzHfJoawMKiqf17jyzyKRZakSEcj9NMZ2FbuhnTQATt2WIOc6rUxqLmrCeyV0qwUhDHj6BrJftAhtIl1QaxbREP2Dzxn%2FRu7q5ZHOHrqT5kk%2BpO62uUDoU8hvrANUH1vNxNbjdd5hKcknh%2BSSyHAhZmBGEgkwlc146oAurMZ7Tt35xKExN0F8j%2BowM9fu8PTHe3LdmLJe%2B43K%2FmhHTEg7Vp1j8WXG%2F11DumjBwCIQccT%2FVxRboLWowOW56hgOBVRkQAji72YXn7oVxipuSPkA3K%2F7ms2qMkDgCHjQS%2B7ty2HBApF0WXcysFXWosIMC33v17czc2q2KXx1gzDuLEp9kq3ReITL09UHdgxISeyDrsUnBi2sXjoRj8yrZaivqg%2FtEqKV7G5eSd3MF1XAlblkC%2BD3N7dWL%2F%2BI0QewbNEWiB1kOL2f84LjGxAZcTnj%2BIkEafID4SLKY1vbFnGmL8aA%2BnGRdqzKpd%2BLVlm%2BERrardEMKqvtcEGOqUBH5v7J1WcwR9PEh7oj8Jud%2ByG0%2FZ6nPYYM7HRSbMDGC1wdF55DVw%2BgrXsZ7sYraWdhh4bK48ORP62pv51d%2BaYm74HzKauyiYXd6Usjs%2BsSxp65w%2FdyltdhPUBdQJHtigBmlVYs2V4ZnmP0gLwGucsyBTs7gZLNXRYIMH%2BAhRwxNO%2BCpMGHZtyxYRX5EtwA4ujgfDRgPwpgyyjK95q6K2BkAV7Fk36&X-Amz-Signature=205d984aa81678c0d39071e3e40ec1c9dbdfeb92e96bec8e7e87f0c01b325e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
