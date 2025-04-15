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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDACCBZR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbG9GDczD2N8LVyv%2Bn8w5h%2BsPxO1aBJsBHT1wqtsS97AiEA4lpHQmeVGB4DvwrLtapbW0XoteWZd%2Fi0O0MTiV4MaFgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDokKexn2wuCR%2FNzayrcA83peKA6%2BV49vmWAXtWpuepenKdodGINFwcy8dO%2B2ImR9KmFc0H1qEMga2fXRmwQEmkeLjazrjNKVPB7VoigcnHpM9QA1sxePqHYyJZhabiYILCxow%2Fs9gIfjK1gLF%2FiOYNjw6Pbpj43bHhov2j88t0SNzlJ0l1Rsp6IItNY8Gv3KgavzElf7to4AAoS7v8SSVpCI8Vbpa4UWTHfie%2Fgx2y7LOXox4GyGaNS%2B34bODxMwsBjfPrqd4UFWK5wzic34Qy49ZIq%2Fb3YA9Eu35nhHhJvE0YWt1y86Apzr5fVatHBRRlSbfFeCNhBMZx6yyvEKeFYrj28TVk57GJ%2FaYBD5c9mCLIXggz7I3sJmEpPtHgdL2h5ANXBhg7L3MJX375OvG8etKMBcPWCNlh1Mjr4j%2FaR9j9KVN2CggMNb1Mk6auurgrYZjd%2F8oOqmslZE3K8kCaHNvGdCgFGt5sA5hvuXa4oYDjwrkfMikPvJn4ogmrlhdlXPtXfLs%2B7BX%2BsJRbBCPJpfjiilh6QK74BetE33%2B5d8Lrn6lxLNEpG5IeK3%2F3%2FgTgMFSyZkrVDz%2FyVUr9kZe0CpItCWxCK0KHbh5amFcaxyvuRi7vdg9M2FBF2idsroQFxUWvlIKf9740DMOXO%2BL8GOqUBlnbvzpqIhlBo%2F8GCqfw9qXJytvZvsJQ%2BpYRr6smUxksmllFgh%2Bjys9I3VcrfCGpmeqUFnHeBfcwQT0Fj%2BeR%2BKP4lShkIigX0JxKlVJb%2FMORPkDLLtCcTslrMvWmHHN9hWCrCsVakZucw72YFhb4f5ilyAdhzGp91qxf9FC9MnMZdEFBAxhv%2BiFNEIUpzOjPrIxP8Lhrg5Kjy8KvL9Gr8sh%2Fny8Bm&X-Amz-Signature=f14732486f865b497e17fda59b321ed76e3e53e3ec451eea167ab6237059609d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDACCBZR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbG9GDczD2N8LVyv%2Bn8w5h%2BsPxO1aBJsBHT1wqtsS97AiEA4lpHQmeVGB4DvwrLtapbW0XoteWZd%2Fi0O0MTiV4MaFgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDokKexn2wuCR%2FNzayrcA83peKA6%2BV49vmWAXtWpuepenKdodGINFwcy8dO%2B2ImR9KmFc0H1qEMga2fXRmwQEmkeLjazrjNKVPB7VoigcnHpM9QA1sxePqHYyJZhabiYILCxow%2Fs9gIfjK1gLF%2FiOYNjw6Pbpj43bHhov2j88t0SNzlJ0l1Rsp6IItNY8Gv3KgavzElf7to4AAoS7v8SSVpCI8Vbpa4UWTHfie%2Fgx2y7LOXox4GyGaNS%2B34bODxMwsBjfPrqd4UFWK5wzic34Qy49ZIq%2Fb3YA9Eu35nhHhJvE0YWt1y86Apzr5fVatHBRRlSbfFeCNhBMZx6yyvEKeFYrj28TVk57GJ%2FaYBD5c9mCLIXggz7I3sJmEpPtHgdL2h5ANXBhg7L3MJX375OvG8etKMBcPWCNlh1Mjr4j%2FaR9j9KVN2CggMNb1Mk6auurgrYZjd%2F8oOqmslZE3K8kCaHNvGdCgFGt5sA5hvuXa4oYDjwrkfMikPvJn4ogmrlhdlXPtXfLs%2B7BX%2BsJRbBCPJpfjiilh6QK74BetE33%2B5d8Lrn6lxLNEpG5IeK3%2F3%2FgTgMFSyZkrVDz%2FyVUr9kZe0CpItCWxCK0KHbh5amFcaxyvuRi7vdg9M2FBF2idsroQFxUWvlIKf9740DMOXO%2BL8GOqUBlnbvzpqIhlBo%2F8GCqfw9qXJytvZvsJQ%2BpYRr6smUxksmllFgh%2Bjys9I3VcrfCGpmeqUFnHeBfcwQT0Fj%2BeR%2BKP4lShkIigX0JxKlVJb%2FMORPkDLLtCcTslrMvWmHHN9hWCrCsVakZucw72YFhb4f5ilyAdhzGp91qxf9FC9MnMZdEFBAxhv%2BiFNEIUpzOjPrIxP8Lhrg5Kjy8KvL9Gr8sh%2Fny8Bm&X-Amz-Signature=d4ec90b14852d8887569ad1695e929519206388cd08317691d45e21bfe23126c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
