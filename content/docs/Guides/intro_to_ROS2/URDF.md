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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3FTWMSZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIACt4IcjDUPlClNsVG%2FBPb48uJiHAF5wnSabOY8B8KBKAiBXewadrJvEjZ4sNiSNJRz1iW9XIL8%2F8VnrxTaCCZ%2FiKiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMylu7yROde%2BUoA9NJKtwDzxbquVmofP4%2F1jMMYd6IFE0vQ%2FhgDsA8aFmLrPvo3Y9Kyv3Hzu2hAfA6GL%2FUpTkVBUMddzT0A%2BWIDLXySsgome%2F%2F265zOqDb%2F%2Bi%2FaYW2BzEOhxSkpfRqINgoSfYLrR7FQSRgLHURr0N%2BG5CzWKEKgYgeussta7DamLSmSj1u3kcu6eicZ%2Fc4CAgaQeDo6ZAMlp0eKmB%2Fll1jngaV%2FW9LJHSZkTkgeyFUOUpI0DxedUb7aUMeZy6TqyLjgIrTytlmf6NRYWdQny7E3Vxw81AXGDurg1GObhL3%2F2FdgTrveB5ULISxjspwvUtIhmp42UnOGQcRvDnf0Zai%2BPS%2FVdbbbM5o9Utu%2B%2ByHFaH%2BGVvkwbcgvq5mZ7aU8jhQpd0u7C%2Ba7gWbp2uazJthv%2BVz7CnKAU4HusI9kpWVz52iaNGPQeWXqAFFiKS9bk4kAJ%2BwADg34Sl%2FnxpjbCU%2FCbcoG22B2FtmQt3%2FTn1jXqBUprHGUH0YR4ptkibQMC56UqXYVsYtjkD9urBjlJ38XO%2FQ9URYzbonK5yKpPEHYK1nC925nXBBB9wfedfiFq12RD5M0CttKHIjuju631sLEAiQVaO5dejTO26VOFtEmHQxq8%2BjttoW1cQklWJXagnjkdEwk42NwQY6pgGyPgOm92yv6NPaT2cB9TJ%2B6ObgfLeQFVe4%2Fvas9xOT7C1ie%2Ft1eSiboy%2B9erVDb1hxhtyMtMgbxvJ3EQbho%2F9qTux4zhZW%2FnomRu3UwXZ3JY3qxQvGixtk%2BLbGCvCE07SJz2%2BkH97iSdK%2FT7etDSwraWXZ27BV0ZRbDxKA9n3YWW2uPozUOzcfghemvhqEYAN%2FL6aG0DqFbGvdfgyrYPXGCzfZH97a&X-Amz-Signature=978afdff2033501a31e1bdacde813c25fcb5135fcd9869e438670456b55d0b4c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3FTWMSZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIACt4IcjDUPlClNsVG%2FBPb48uJiHAF5wnSabOY8B8KBKAiBXewadrJvEjZ4sNiSNJRz1iW9XIL8%2F8VnrxTaCCZ%2FiKiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMylu7yROde%2BUoA9NJKtwDzxbquVmofP4%2F1jMMYd6IFE0vQ%2FhgDsA8aFmLrPvo3Y9Kyv3Hzu2hAfA6GL%2FUpTkVBUMddzT0A%2BWIDLXySsgome%2F%2F265zOqDb%2F%2Bi%2FaYW2BzEOhxSkpfRqINgoSfYLrR7FQSRgLHURr0N%2BG5CzWKEKgYgeussta7DamLSmSj1u3kcu6eicZ%2Fc4CAgaQeDo6ZAMlp0eKmB%2Fll1jngaV%2FW9LJHSZkTkgeyFUOUpI0DxedUb7aUMeZy6TqyLjgIrTytlmf6NRYWdQny7E3Vxw81AXGDurg1GObhL3%2F2FdgTrveB5ULISxjspwvUtIhmp42UnOGQcRvDnf0Zai%2BPS%2FVdbbbM5o9Utu%2B%2ByHFaH%2BGVvkwbcgvq5mZ7aU8jhQpd0u7C%2Ba7gWbp2uazJthv%2BVz7CnKAU4HusI9kpWVz52iaNGPQeWXqAFFiKS9bk4kAJ%2BwADg34Sl%2FnxpjbCU%2FCbcoG22B2FtmQt3%2FTn1jXqBUprHGUH0YR4ptkibQMC56UqXYVsYtjkD9urBjlJ38XO%2FQ9URYzbonK5yKpPEHYK1nC925nXBBB9wfedfiFq12RD5M0CttKHIjuju631sLEAiQVaO5dejTO26VOFtEmHQxq8%2BjttoW1cQklWJXagnjkdEwk42NwQY6pgGyPgOm92yv6NPaT2cB9TJ%2B6ObgfLeQFVe4%2Fvas9xOT7C1ie%2Ft1eSiboy%2B9erVDb1hxhtyMtMgbxvJ3EQbho%2F9qTux4zhZW%2FnomRu3UwXZ3JY3qxQvGixtk%2BLbGCvCE07SJz2%2BkH97iSdK%2FT7etDSwraWXZ27BV0ZRbDxKA9n3YWW2uPozUOzcfghemvhqEYAN%2FL6aG0DqFbGvdfgyrYPXGCzfZH97a&X-Amz-Signature=080903d4d17f67760a538be53db37ff6a179848d92109eed9f1dba1c017fe0e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
