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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246GD3Z4%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFfYHnS631rxXMBPt0Zqysgl2%2FBP4ajo9eO0s1c1GaN1AiEA238QBemnmhZfZ9ebcl4nK%2BvHzRMhZpuKXGqfI0FowigqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BD2rEUUdsSzcvf1ircA396Rddx5HI2QaSodyk7jcYqz5cpA5r5YxU3R8RAGLvIS9bHqUcsPDg8yWoj2%2FqzpZBdPxfkla2ER%2FoKFg63aHGv0H%2BL0rX%2FhgMP2vVkWo1hWP%2F1cL5NYhPin7wWdZwhp65DAqePkDPORhKcfX6HsikittKU9aKOJh%2FgIo%2B2HB5H%2BqLuW%2BpkTQPWN1zQkKI1WhbZ1IKqKx3QLMu%2BRzG4emoAkWKVLWWwrtggQVzaKxocClKRDgqWgC6DNPN0xeJlHpFw5NDhtcYiOclzoFR%2BgW4mQ7HhWfZidgAMNiNhZnh8EPf9xjOpI0hl3V1tV3k189sRkT7DOEOGJISf7aBKGDE8%2FVIY4dCcQBftgaOSazRsA5%2BLw%2FldmNnUyJc78gBd7S%2FFIOzSHBzDhXbNhGzsFPkkdG9KSPiPZwd7x2SQaLMzYN7YB4zWyIEFkkQvDu0U%2BBxnbFaV8uQDcr9Kw7jfNmGJ4fjd6V%2BJYLVjJv9JQM2wDrzzI0xLDoK%2FM9l5hp68hp8WZsTUSfWH4BOns%2BUqnha0UqGSQPVAaGG7WoJPiKplRzrEaVItS3fAwc5ZciGvAYOeGY2VjM5uwSJY1JeWmiYC8IT%2Bvfw2fQYBgoPvjptdmpI7xR96YMqCfsMzMO%2Fcxb4GOqUBv1x92rrOjEPDi3kiSnBJdp5k8tgAwD3UWywFSQsdgk8WTfD1Tt9DxBaA7TWdYASYgn6MoxBXkZVniTP%2B95kUEFHNIPXKBzVtBcrDJGSAj9KIJaz1Ro4MNpl%2FaHyMHzRaFWHYlnKiaqgDNNP2jvLiBPrVuvMATF%2Bj64V%2F12Js1BUajcBcV1kL0AKVZB184uEMh9x0X%2Fi8iaEXw%2F9UEIbd64nTKAny&X-Amz-Signature=5ea9832ae1a65bba0510926f551b4dcf3327a9168e403e41cbaf770370566b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246GD3Z4%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFfYHnS631rxXMBPt0Zqysgl2%2FBP4ajo9eO0s1c1GaN1AiEA238QBemnmhZfZ9ebcl4nK%2BvHzRMhZpuKXGqfI0FowigqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BD2rEUUdsSzcvf1ircA396Rddx5HI2QaSodyk7jcYqz5cpA5r5YxU3R8RAGLvIS9bHqUcsPDg8yWoj2%2FqzpZBdPxfkla2ER%2FoKFg63aHGv0H%2BL0rX%2FhgMP2vVkWo1hWP%2F1cL5NYhPin7wWdZwhp65DAqePkDPORhKcfX6HsikittKU9aKOJh%2FgIo%2B2HB5H%2BqLuW%2BpkTQPWN1zQkKI1WhbZ1IKqKx3QLMu%2BRzG4emoAkWKVLWWwrtggQVzaKxocClKRDgqWgC6DNPN0xeJlHpFw5NDhtcYiOclzoFR%2BgW4mQ7HhWfZidgAMNiNhZnh8EPf9xjOpI0hl3V1tV3k189sRkT7DOEOGJISf7aBKGDE8%2FVIY4dCcQBftgaOSazRsA5%2BLw%2FldmNnUyJc78gBd7S%2FFIOzSHBzDhXbNhGzsFPkkdG9KSPiPZwd7x2SQaLMzYN7YB4zWyIEFkkQvDu0U%2BBxnbFaV8uQDcr9Kw7jfNmGJ4fjd6V%2BJYLVjJv9JQM2wDrzzI0xLDoK%2FM9l5hp68hp8WZsTUSfWH4BOns%2BUqnha0UqGSQPVAaGG7WoJPiKplRzrEaVItS3fAwc5ZciGvAYOeGY2VjM5uwSJY1JeWmiYC8IT%2Bvfw2fQYBgoPvjptdmpI7xR96YMqCfsMzMO%2Fcxb4GOqUBv1x92rrOjEPDi3kiSnBJdp5k8tgAwD3UWywFSQsdgk8WTfD1Tt9DxBaA7TWdYASYgn6MoxBXkZVniTP%2B95kUEFHNIPXKBzVtBcrDJGSAj9KIJaz1Ro4MNpl%2FaHyMHzRaFWHYlnKiaqgDNNP2jvLiBPrVuvMATF%2Bj64V%2F12Js1BUajcBcV1kL0AKVZB184uEMh9x0X%2Fi8iaEXw%2F9UEIbd64nTKAny&X-Amz-Signature=2da21061bc4d32cf1120767b9f7982d2ce1e84b87b4daeba8a3919f506187e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
