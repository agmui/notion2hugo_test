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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BV4MYMB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQC%2F9JM%2BSIbpU6%2FOu%2FUgYYtlZK2b3cZt21CkzM6loH0TlgIgFpZWDliZWfEvlEsw%2FjGvvuc%2FoL0%2B9Uik8gYwXbQ%2Fg1Aq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGy2N9FtoCGfbcDhjyrcAy%2Foe2%2FOugcSzGS8zPJEVk7LF6oYDISASc763NwEKXauSQgZG%2FhcLtfKS84%2B26FdH53kNuYPZEhyE9kOppPA7uAPZDuIuMF5axKkgv3lAIukMFiFSlU2tSLzon6wpPg16Gxe9g16BI83XnZxJywb1SDvKBdE5ppe8P2o4zAYrFJNE6z7K9%2FifYfYud27S59NATK6NnU354c%2FqV%2FbqMrWONSXblDDuYoZCMP9ziKh5RV%2F%2Fm5AyZqGS8yQHYkH8g090JOj4dHF8G3rWlxSY660Ai8NSlHu33JA3CX%2Fzuz44hETH96%2FfkzsqRlJspCtZhUtAw3OcuEaMmEFicS4KhTZi1gcAMkySu5RCyw08SYqG3UJ57CfWRaWZaqxlFVbybhru0IqNXtZgrLwhhBLI2ZdZi4tOZVZ4zrXzp7AjzCtrzZ9%2B9ezn51sqJNVu0FcpisNgsowqFLkdhiX6StnHFx3hrxWLpo6efjx8nfwC8LcVlgbjuhpYZNBhq%2F9GTD7XY9GQ1uSYqztDmbScrbo1kZXgMpTB8grlRBR3W5cj8NddXVEzCaMm6ggQamPattoHrE%2B8J4j3BUAu5LRa5Xw0o2jDDF4GSqzT28aZNLodjO17pau39EaRJ7eKMtmGXBJMK%2B9s8IGOqUBA6vKS0C8pdOwRfg0TZiEVRZ6hjLIf4pES2GhoY7htFZCIYQ9henBLlcUWjn8BsPwOD2Ca%2BrLbBdBU%2BV7r8VzZ1AtT3fDE8QUC5m1J1Wc0dgtLRGe3%2F3d4V3jXOVmGaCaLZ3ynQcs7Knly7QiwZRCaujGv9VB0eXcIuyX5ylnyt%2FKJGqFAmebdMFckQV0uONVv6VrRKvr61Fx5JSedwylBAdngf6%2F&X-Amz-Signature=b7eb976ed2fe227682aadf146313ee9a5dc63d218788fa81483442d976492d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BV4MYMB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQC%2F9JM%2BSIbpU6%2FOu%2FUgYYtlZK2b3cZt21CkzM6loH0TlgIgFpZWDliZWfEvlEsw%2FjGvvuc%2FoL0%2B9Uik8gYwXbQ%2Fg1Aq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGy2N9FtoCGfbcDhjyrcAy%2Foe2%2FOugcSzGS8zPJEVk7LF6oYDISASc763NwEKXauSQgZG%2FhcLtfKS84%2B26FdH53kNuYPZEhyE9kOppPA7uAPZDuIuMF5axKkgv3lAIukMFiFSlU2tSLzon6wpPg16Gxe9g16BI83XnZxJywb1SDvKBdE5ppe8P2o4zAYrFJNE6z7K9%2FifYfYud27S59NATK6NnU354c%2FqV%2FbqMrWONSXblDDuYoZCMP9ziKh5RV%2F%2Fm5AyZqGS8yQHYkH8g090JOj4dHF8G3rWlxSY660Ai8NSlHu33JA3CX%2Fzuz44hETH96%2FfkzsqRlJspCtZhUtAw3OcuEaMmEFicS4KhTZi1gcAMkySu5RCyw08SYqG3UJ57CfWRaWZaqxlFVbybhru0IqNXtZgrLwhhBLI2ZdZi4tOZVZ4zrXzp7AjzCtrzZ9%2B9ezn51sqJNVu0FcpisNgsowqFLkdhiX6StnHFx3hrxWLpo6efjx8nfwC8LcVlgbjuhpYZNBhq%2F9GTD7XY9GQ1uSYqztDmbScrbo1kZXgMpTB8grlRBR3W5cj8NddXVEzCaMm6ggQamPattoHrE%2B8J4j3BUAu5LRa5Xw0o2jDDF4GSqzT28aZNLodjO17pau39EaRJ7eKMtmGXBJMK%2B9s8IGOqUBA6vKS0C8pdOwRfg0TZiEVRZ6hjLIf4pES2GhoY7htFZCIYQ9henBLlcUWjn8BsPwOD2Ca%2BrLbBdBU%2BV7r8VzZ1AtT3fDE8QUC5m1J1Wc0dgtLRGe3%2F3d4V3jXOVmGaCaLZ3ynQcs7Knly7QiwZRCaujGv9VB0eXcIuyX5ylnyt%2FKJGqFAmebdMFckQV0uONVv6VrRKvr61Fx5JSedwylBAdngf6%2F&X-Amz-Signature=42424592cec05e2974d34a8733ea6a33eac01f14735528b27a047f4659d99123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
