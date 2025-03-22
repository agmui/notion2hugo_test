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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYP222J%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCJGKmE49VhGyQDWMYVjCBiIf%2BwUV3fy%2BLXyvFfMNZ%2FeQIgbpunM3%2FWCNvZXdtrX3UL6vTzeoeyfEjpjjohMe%2FP8vsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWGs%2F0jWFmWzeGdQSrcA9Di26CJ3e4Fuwlr58tlTIi7uqSrPrFJag0CYmNKzqIXGeDSegrY5YMdtCvZ74gQSPbE4uPegodj4aurmJJ77n9ZPazNOVKPJMCXETNMRfwfPeeKp15sEi5eouiADxhb0kJjagnYOe2FEeXtKQj2ip8ZZ1D9u9BT6LdTZ%2FudRvXivaPKBFHu2HKqhMCzR47Qjcl2b2j4u9Cuig%2BugLgA1qwgaUO18HT2%2FQ%2BJfvXgDXTFwX5Vcd6V0oiOVDOjZYOwNYJQ4SVHcXJ%2FjBJQenu%2BMxlq8iMAfzffWoj3Gdukl97E18N%2FqJg8k8x%2Bs3qK5O5ZZiVNC8Oqn0Hf0KIcRaQm%2B8QYRFBHhKuhkhvG0ub6t8KMmbEG7eqwA4YUxXwfAZp3blloxhadt5pG0HUXjJey%2BqZgZax1motGtm10oQcPOcfY209XHEnL7yQ0fA%2BDSPDiDFo7SEz6cuigiofMycfskKzkJor4JKiDIiT728cw4K0Z3na9FM%2F7f0ffrCvXCOTiQ04vrB7GsJriXHfOS7Fm5k1ietCPc0SYuJpaQycIWYcU0927QtUxnw7xSQyEoyNtRH4iZbq6%2Bnx8ve25O9JE2HlLCnhkVkl4EFpRgg7QHigZcQnRfQZa5ncBKyvBMMrr%2Bb4GOqUBKBHz9h4TXY%2Bkkql4FVqD%2BWlExzAyjMoNqgRxuJv%2B2tFb2oB4SggHhGDeRP8tdC4MbQOZmrSqLFFSVHgyDunACEKKINvVwswnPKqxYtqVbjywDUx601vbEoiOPd41ViCvyf0K%2FV3LeioYakPF%2B3idzH0r9tlxIw567EmDDE09tSbWLcRKGng6nzXEmk%2BD05YyOr20Z25gaijmvuXrcHPv1jwsSnsk&X-Amz-Signature=20296c6970bd5a8875fd4adf5f47aa60316fd1817cef7bcd47650bbddbecd0dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYP222J%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCJGKmE49VhGyQDWMYVjCBiIf%2BwUV3fy%2BLXyvFfMNZ%2FeQIgbpunM3%2FWCNvZXdtrX3UL6vTzeoeyfEjpjjohMe%2FP8vsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWGs%2F0jWFmWzeGdQSrcA9Di26CJ3e4Fuwlr58tlTIi7uqSrPrFJag0CYmNKzqIXGeDSegrY5YMdtCvZ74gQSPbE4uPegodj4aurmJJ77n9ZPazNOVKPJMCXETNMRfwfPeeKp15sEi5eouiADxhb0kJjagnYOe2FEeXtKQj2ip8ZZ1D9u9BT6LdTZ%2FudRvXivaPKBFHu2HKqhMCzR47Qjcl2b2j4u9Cuig%2BugLgA1qwgaUO18HT2%2FQ%2BJfvXgDXTFwX5Vcd6V0oiOVDOjZYOwNYJQ4SVHcXJ%2FjBJQenu%2BMxlq8iMAfzffWoj3Gdukl97E18N%2FqJg8k8x%2Bs3qK5O5ZZiVNC8Oqn0Hf0KIcRaQm%2B8QYRFBHhKuhkhvG0ub6t8KMmbEG7eqwA4YUxXwfAZp3blloxhadt5pG0HUXjJey%2BqZgZax1motGtm10oQcPOcfY209XHEnL7yQ0fA%2BDSPDiDFo7SEz6cuigiofMycfskKzkJor4JKiDIiT728cw4K0Z3na9FM%2F7f0ffrCvXCOTiQ04vrB7GsJriXHfOS7Fm5k1ietCPc0SYuJpaQycIWYcU0927QtUxnw7xSQyEoyNtRH4iZbq6%2Bnx8ve25O9JE2HlLCnhkVkl4EFpRgg7QHigZcQnRfQZa5ncBKyvBMMrr%2Bb4GOqUBKBHz9h4TXY%2Bkkql4FVqD%2BWlExzAyjMoNqgRxuJv%2B2tFb2oB4SggHhGDeRP8tdC4MbQOZmrSqLFFSVHgyDunACEKKINvVwswnPKqxYtqVbjywDUx601vbEoiOPd41ViCvyf0K%2FV3LeioYakPF%2B3idzH0r9tlxIw567EmDDE09tSbWLcRKGng6nzXEmk%2BD05YyOr20Z25gaijmvuXrcHPv1jwsSnsk&X-Amz-Signature=011491cf391c3074c9d432bd7cb5f88ec6f163f142727e99b7b2b3f93f3997e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
