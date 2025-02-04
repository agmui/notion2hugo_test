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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D3ZUJLV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQD6QwHL%2BpfBpHsL%2F7VxE%2BTUCQxKKTRf78NmHRcwrvNx8wIhAMDMPJUb%2FwQv9tz%2Bmm%2FjYRm%2FSn4qM37ktlTjqARxzaWwKv8DCCsQABoMNjM3NDIzMTgzODA1IgztoiwQJ0nUx%2FZXxVcq3AMMCgWlVTG4U5ihUHgjvn4XkPTmZ%2BQZzODamSlFwAKgb2bBhaOdXnrmBBH9kfowkcUtQlvlTXQcn01RIuctnakLAE6YEJemyTs9baVASn%2FkJ2eXw6JTpouHdNgZc1VgPCETduQcvu%2Fdjb6eCG%2FBGla8T9EC4e%2FSyy7BUAfXyD%2FVl4CHtQFgAx17FII8%2Fc55cJAWnF%2F3DfDWYlVC4zmpbsmFTaDn%2F0HsHFrfDmqEjPLbSvB54YZYrCpXmPMCNOid4apUYY7EOIZnQDO53qmZ0%2FhIAXpS3cwSiIinD%2BYsvqInRTBgMUkuCzUSqMT5NPmZUiAgb%2B5ktYK8z8BuYmjfbT0mjy2QgImmd%2Bw6318oKZupiv31iLA21Is9OZRJLZcNdTWkh%2F0GD9ucML%2BZVENA0lrdMyWfXKBfI0d2zacJhFxqniMqeLJL8bVGZX2I4YYPVEsaFpH8oOB27%2B4nLnG03VQ%2BNYcDBmLnCqcs74WW0XQAY9COGSxebJ5LnY5yeT6FnmCeHMvdtdvJJ4Dnw5jw0WljdFFrceKIJW3mfB6HyTcq1Ek6hD1%2FPt2i1lbGazH2JfAnQoQEr8zamBtJ5UBGL8XYtX3BuPG2ZiALFbs0vX8csFj8ys%2BsaUwGZHjS2jDEzIe9BjqkAVJSUAkb9Uwcbi7C4vyGe8FFHnsHzIjLvmR6A528iZNvOj5aPjxFeSoFpCL4IokqV74vvTeadwo1lT51qU%2FyKvdMazxjl7nQUarDdsElFDgTrUB33zQJ0bkcWDUpry8a1%2FwV7kaP2S5tohoLz2tJILDtb3jrQCGzvpHUM932ZIrvJSCsftUhrbUw9pek0aZvta6l9LFZ0F4eF1bxH8n8sBY3k2j3&X-Amz-Signature=66a427d3747f4473a6e4aa6126c0533be5591c50aaccd3aea6731498b6752ffa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D3ZUJLV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQD6QwHL%2BpfBpHsL%2F7VxE%2BTUCQxKKTRf78NmHRcwrvNx8wIhAMDMPJUb%2FwQv9tz%2Bmm%2FjYRm%2FSn4qM37ktlTjqARxzaWwKv8DCCsQABoMNjM3NDIzMTgzODA1IgztoiwQJ0nUx%2FZXxVcq3AMMCgWlVTG4U5ihUHgjvn4XkPTmZ%2BQZzODamSlFwAKgb2bBhaOdXnrmBBH9kfowkcUtQlvlTXQcn01RIuctnakLAE6YEJemyTs9baVASn%2FkJ2eXw6JTpouHdNgZc1VgPCETduQcvu%2Fdjb6eCG%2FBGla8T9EC4e%2FSyy7BUAfXyD%2FVl4CHtQFgAx17FII8%2Fc55cJAWnF%2F3DfDWYlVC4zmpbsmFTaDn%2F0HsHFrfDmqEjPLbSvB54YZYrCpXmPMCNOid4apUYY7EOIZnQDO53qmZ0%2FhIAXpS3cwSiIinD%2BYsvqInRTBgMUkuCzUSqMT5NPmZUiAgb%2B5ktYK8z8BuYmjfbT0mjy2QgImmd%2Bw6318oKZupiv31iLA21Is9OZRJLZcNdTWkh%2F0GD9ucML%2BZVENA0lrdMyWfXKBfI0d2zacJhFxqniMqeLJL8bVGZX2I4YYPVEsaFpH8oOB27%2B4nLnG03VQ%2BNYcDBmLnCqcs74WW0XQAY9COGSxebJ5LnY5yeT6FnmCeHMvdtdvJJ4Dnw5jw0WljdFFrceKIJW3mfB6HyTcq1Ek6hD1%2FPt2i1lbGazH2JfAnQoQEr8zamBtJ5UBGL8XYtX3BuPG2ZiALFbs0vX8csFj8ys%2BsaUwGZHjS2jDEzIe9BjqkAVJSUAkb9Uwcbi7C4vyGe8FFHnsHzIjLvmR6A528iZNvOj5aPjxFeSoFpCL4IokqV74vvTeadwo1lT51qU%2FyKvdMazxjl7nQUarDdsElFDgTrUB33zQJ0bkcWDUpry8a1%2FwV7kaP2S5tohoLz2tJILDtb3jrQCGzvpHUM932ZIrvJSCsftUhrbUw9pek0aZvta6l9LFZ0F4eF1bxH8n8sBY3k2j3&X-Amz-Signature=efafab0c73898b08865a1ace3bf675792f715b3a7009b6716452534323a4cd67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
