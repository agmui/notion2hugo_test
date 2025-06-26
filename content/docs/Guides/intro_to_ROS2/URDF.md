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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPQ3R6DR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBE7U5qqnU9ohf9Kiz0XfSW%2FrrFqhsi0vQWoPApVfk%2BNAiAutLVaXntagdOue2bMRMn%2BBEuQTrHqL5W5IdhbuKAzKir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMXAcwtmzSLSgJbnEUKtwDiN3Zi77JakE6A%2Buo2NdQe4hPxE8You4RF5VUMNLgKh%2B9WJOeqccxiMJrjsVDXIIyAb5a2jL28QhkrXyrrr8m0Nuy3t25yGKZDGHzSrUngBLzdvcXdlLNihXNugSgOaH71b8D3SLuaBrlW65cLv1yNauyqQZEqJCZqXSmv9x%2B8KlREGX7HNRcMwVIIINdHUuJGJUMBAzSTpMlGj3AUh1kd38MQn4wmwTnFkpt6LkCpiH%2B79l4fOLzcA2U1NX7dtD8OjraIHjCXxv5Au8QvbQeJcPTqA0VtMBUmP9nbar483pFW5Ox5FYmDYK8EYDyA5bHyfd36u%2BPmD9IL0sM7o1hPekwW28RLfSD8JxdGR11rEtGVp3QgUoIfWqFxMMQ7NeLkxYMeaf9sIRYhooaHHwAWZqDgtLpqMIs%2Fu66092BBVtTghAS92fmR%2B92N3BjvEuj5u3jNCmtYAse9zSGA28wDp1G8a0NvvzkP8U%2F09hlCY5O6tirbKAQ3ebV9mFENJsSkjG8k7G0eMm35lQpFBXlYmr8A0DfcFGz8c4oGONKKXbQa1Fv2ZN6pBMlWUk%2FVFpsG%2BImQ1P5XpBI3H0bRlme3xE9cn4dsSltvJGuOZgQStl2QlPmh9BknN%2BUsjUwk5b0wgY6pgFam10BCkr3t1bKs7dGVzRHzZ1P6wWwbOiMe2PYUwNHgIMWH4L2Oi4vXUWRIeU6478vaQsbkocapsro3Rrup1P0fodr14t2eSMqu9CmvXq5zuSBwVNun3kA0zMC0%2BuOFasK9AiS3VZWCngXmFa5OFYuSGmucSEhUCogUX6MuBNsucttY%2F0RLr6KrQrli%2Fh%2Fw7fJCvzQk8IemvnW3AfCB8HB46HXHzkL&X-Amz-Signature=322b1b000e6b3c52e7804673501582f585e8005daa4248d042fbf533cfe4548b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPQ3R6DR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBE7U5qqnU9ohf9Kiz0XfSW%2FrrFqhsi0vQWoPApVfk%2BNAiAutLVaXntagdOue2bMRMn%2BBEuQTrHqL5W5IdhbuKAzKir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMXAcwtmzSLSgJbnEUKtwDiN3Zi77JakE6A%2Buo2NdQe4hPxE8You4RF5VUMNLgKh%2B9WJOeqccxiMJrjsVDXIIyAb5a2jL28QhkrXyrrr8m0Nuy3t25yGKZDGHzSrUngBLzdvcXdlLNihXNugSgOaH71b8D3SLuaBrlW65cLv1yNauyqQZEqJCZqXSmv9x%2B8KlREGX7HNRcMwVIIINdHUuJGJUMBAzSTpMlGj3AUh1kd38MQn4wmwTnFkpt6LkCpiH%2B79l4fOLzcA2U1NX7dtD8OjraIHjCXxv5Au8QvbQeJcPTqA0VtMBUmP9nbar483pFW5Ox5FYmDYK8EYDyA5bHyfd36u%2BPmD9IL0sM7o1hPekwW28RLfSD8JxdGR11rEtGVp3QgUoIfWqFxMMQ7NeLkxYMeaf9sIRYhooaHHwAWZqDgtLpqMIs%2Fu66092BBVtTghAS92fmR%2B92N3BjvEuj5u3jNCmtYAse9zSGA28wDp1G8a0NvvzkP8U%2F09hlCY5O6tirbKAQ3ebV9mFENJsSkjG8k7G0eMm35lQpFBXlYmr8A0DfcFGz8c4oGONKKXbQa1Fv2ZN6pBMlWUk%2FVFpsG%2BImQ1P5XpBI3H0bRlme3xE9cn4dsSltvJGuOZgQStl2QlPmh9BknN%2BUsjUwk5b0wgY6pgFam10BCkr3t1bKs7dGVzRHzZ1P6wWwbOiMe2PYUwNHgIMWH4L2Oi4vXUWRIeU6478vaQsbkocapsro3Rrup1P0fodr14t2eSMqu9CmvXq5zuSBwVNun3kA0zMC0%2BuOFasK9AiS3VZWCngXmFa5OFYuSGmucSEhUCogUX6MuBNsucttY%2F0RLr6KrQrli%2Fh%2Fw7fJCvzQk8IemvnW3AfCB8HB46HXHzkL&X-Amz-Signature=1c69681910dae6244e392545f33b1e29733a05e60889839276032660fbce3a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
