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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPWXFTKR%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIAYwVOO5znEUey4n4v%2FqypB41OTMaTJZGdTpY8AIGYcaAiEAjsG90LjgEbTpUZ3zdieLMX1zhAelGpIcwrV1xbPQ3%2BoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRSYKTQWj2qOuVPeyrcAw5NPRwaLkOw8DIpBeXUHYIHbZhXut0mgI9I8UsqQ4ztLvNA5IAm2arGs4x73lzEiN6fVXgf57WSDRodCOBtP0j7SOEsr0evWh5ReMro1XKzSIzYpEU8rLr8Xaf2pZO7%2Bbv4yrC0ffEKZ0mig7W8w6yLS1cPldQdZV%2F597lvpqxysnDe8eWe58VId1JmfzXhojMuejt%2Fjn98PY%2FKnc7r4qsDuht6JZXhwiYC6V9DBsR7P06Qfp62ubkg%2BhE7CEHkyEFjsaXdbUZAVswKiOy2%2Fe0aOBoooROzJdOmFfgTxM%2BCkJ0lpOh3xa8FdomvUW3VT4TQw22quvePlivVX4qQawZKrNPTA7VDmwJP2400Y3zf2QfUc%2F1D9VxZTVZbO81a0ZKs6v30IttGP8WrBUpTUnsB2ffG5%2BB1Og3TFgjmGsCdIz%2B6UY85XaXLCeOax3DjPivkuRLunqlObAw0ud1kUvkVK52Lm42rjccr655GUaehgutLyfkxA9fs36GGtz4q%2FNbSUYaPAtpAv51JEinvqWJJwu1rG8WdI1M%2BJbvP3SBUyGeHjQSWujCZWnbBtK%2BW%2Fez7Z65u3G1JeONt1cMl9eBn8rE4vlkAnWgL5nQPMBIEk3CvmQMiApKMl2NKMLem7r4GOqUBTSczQgPKPve%2FJLlnVuFK%2BEA2V0%2FUmuJPOLBqvZanYhFii5sMKeNvJ7lbrMw69MpSXAQ0oF346K9FlGoMqdwdc4xw6Wh06tYulEmKMJa71FilP9c%2BmAEwP6mycjVJX4LMd3o4OYjHm%2BYqDYYpK3n9W1kQQYPiSOgv9ILWEjh9%2F9bYPvW4g74FY%2FZ6tlZp1M2oyWgGgN2P1Zd4hEqinllwne%2FvMMYG&X-Amz-Signature=be07adb707427e7a57567c6892600c42c14ab6e43c6a8c3de3502b797e49b421&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPWXFTKR%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIAYwVOO5znEUey4n4v%2FqypB41OTMaTJZGdTpY8AIGYcaAiEAjsG90LjgEbTpUZ3zdieLMX1zhAelGpIcwrV1xbPQ3%2BoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRSYKTQWj2qOuVPeyrcAw5NPRwaLkOw8DIpBeXUHYIHbZhXut0mgI9I8UsqQ4ztLvNA5IAm2arGs4x73lzEiN6fVXgf57WSDRodCOBtP0j7SOEsr0evWh5ReMro1XKzSIzYpEU8rLr8Xaf2pZO7%2Bbv4yrC0ffEKZ0mig7W8w6yLS1cPldQdZV%2F597lvpqxysnDe8eWe58VId1JmfzXhojMuejt%2Fjn98PY%2FKnc7r4qsDuht6JZXhwiYC6V9DBsR7P06Qfp62ubkg%2BhE7CEHkyEFjsaXdbUZAVswKiOy2%2Fe0aOBoooROzJdOmFfgTxM%2BCkJ0lpOh3xa8FdomvUW3VT4TQw22quvePlivVX4qQawZKrNPTA7VDmwJP2400Y3zf2QfUc%2F1D9VxZTVZbO81a0ZKs6v30IttGP8WrBUpTUnsB2ffG5%2BB1Og3TFgjmGsCdIz%2B6UY85XaXLCeOax3DjPivkuRLunqlObAw0ud1kUvkVK52Lm42rjccr655GUaehgutLyfkxA9fs36GGtz4q%2FNbSUYaPAtpAv51JEinvqWJJwu1rG8WdI1M%2BJbvP3SBUyGeHjQSWujCZWnbBtK%2BW%2Fez7Z65u3G1JeONt1cMl9eBn8rE4vlkAnWgL5nQPMBIEk3CvmQMiApKMl2NKMLem7r4GOqUBTSczQgPKPve%2FJLlnVuFK%2BEA2V0%2FUmuJPOLBqvZanYhFii5sMKeNvJ7lbrMw69MpSXAQ0oF346K9FlGoMqdwdc4xw6Wh06tYulEmKMJa71FilP9c%2BmAEwP6mycjVJX4LMd3o4OYjHm%2BYqDYYpK3n9W1kQQYPiSOgv9ILWEjh9%2F9bYPvW4g74FY%2FZ6tlZp1M2oyWgGgN2P1Zd4hEqinllwne%2FvMMYG&X-Amz-Signature=398e84e023c6de5e81a2ab277b0745cdd7aa8da10674281fce3b045cf8c58e56&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
