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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VANHEMI4%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDfxZUNiMdtw2%2F7J0W1MeFTj0iA5%2BN7Xw60OTuVYYHf4AiEA8zkGPPUIClzk6A2U7LNIe9IbiBX6AqgfRLMh5EXb%2FFAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOHQMXdYLbv4m0h2RSrcA35YTF0jej%2FtI%2FMQjl050oKYR63o9UHEDRgb9bPTlidx%2BBULgjJNqEksNo%2Be0YLza2Hu5UlaVvHq1OQzBeNql5ah1uGHn1WwrbTsFB%2FzA1BGv%2BcKawI1mZX2wm3v9o%2FnIIl1tva6mnjx4x5yCX269JFGX0J5nr7AINZfGaEdRHpmuuOTSo%2BMLbKG4aRaXz6%2BUuz3DVp2xhQbkbTtoDC%2Bksw7uASowZ9LMyagdk8c2w6NESxPV%2B45vRZx3IrBAFPOAPAZL6Nq0hQPt0APjjof%2BqFQENc5pDMJtGHz6pL9tXnsVp7T3drmy6sFx3hNiw%2FiAcmYdSO%2BKJy8fCHJ1HcyqjdWK4uKIiMAgtOhnqFArcs5EFiaeZ2KNOuaw1fivtElLKWMUevIGcCD0UqjXCbCZIJ2gh7AWELf5hcClCftBEjLztacWunToDgkuxw2UdKL5%2FzDOKCv%2Bq%2By2J%2BjY8a%2BS3W1lOlXFgkCppTxEi9RHPDylH5iJKWPlHkzUqxp6hAZiEJQaRh42Ze%2F5CcXksapAjaOYoZkP9LaYLnT11bu%2FNRjQ9WBmnAqi80dy3%2BoJA2598t9tNuGjTH34uB9Ai2AheS%2FIuBwZlHCMvQ8iyYIK5nkHt6joJRuWbRO3mYxMIGi5rwGOqUBFlqHd60OL22ZLax5sNYMplgSU8keR%2B3reqVOxp3LLuj8OaTtomLxcsMcCMnkfRyVhWR2yvmhSwDdZbnozQAjUjEMqnM1b1i91drRxExZicYB%2F6xoha0KsMMZ%2FxB7utbEqpP1yM9xWRPUSSQmPPgnfouflXjMW24WVpNOp6eMa2iqpc3dSmgoX5Rk5y48AJ96CRNWCXoOnw5YgeKsRD7G6x5s5eQB&X-Amz-Signature=59519675028fe727671e86c0e93a8320e018ed4cd6fd0dddf41b4af06212edf9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VANHEMI4%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDfxZUNiMdtw2%2F7J0W1MeFTj0iA5%2BN7Xw60OTuVYYHf4AiEA8zkGPPUIClzk6A2U7LNIe9IbiBX6AqgfRLMh5EXb%2FFAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOHQMXdYLbv4m0h2RSrcA35YTF0jej%2FtI%2FMQjl050oKYR63o9UHEDRgb9bPTlidx%2BBULgjJNqEksNo%2Be0YLza2Hu5UlaVvHq1OQzBeNql5ah1uGHn1WwrbTsFB%2FzA1BGv%2BcKawI1mZX2wm3v9o%2FnIIl1tva6mnjx4x5yCX269JFGX0J5nr7AINZfGaEdRHpmuuOTSo%2BMLbKG4aRaXz6%2BUuz3DVp2xhQbkbTtoDC%2Bksw7uASowZ9LMyagdk8c2w6NESxPV%2B45vRZx3IrBAFPOAPAZL6Nq0hQPt0APjjof%2BqFQENc5pDMJtGHz6pL9tXnsVp7T3drmy6sFx3hNiw%2FiAcmYdSO%2BKJy8fCHJ1HcyqjdWK4uKIiMAgtOhnqFArcs5EFiaeZ2KNOuaw1fivtElLKWMUevIGcCD0UqjXCbCZIJ2gh7AWELf5hcClCftBEjLztacWunToDgkuxw2UdKL5%2FzDOKCv%2Bq%2By2J%2BjY8a%2BS3W1lOlXFgkCppTxEi9RHPDylH5iJKWPlHkzUqxp6hAZiEJQaRh42Ze%2F5CcXksapAjaOYoZkP9LaYLnT11bu%2FNRjQ9WBmnAqi80dy3%2BoJA2598t9tNuGjTH34uB9Ai2AheS%2FIuBwZlHCMvQ8iyYIK5nkHt6joJRuWbRO3mYxMIGi5rwGOqUBFlqHd60OL22ZLax5sNYMplgSU8keR%2B3reqVOxp3LLuj8OaTtomLxcsMcCMnkfRyVhWR2yvmhSwDdZbnozQAjUjEMqnM1b1i91drRxExZicYB%2F6xoha0KsMMZ%2FxB7utbEqpP1yM9xWRPUSSQmPPgnfouflXjMW24WVpNOp6eMa2iqpc3dSmgoX5Rk5y48AJ96CRNWCXoOnw5YgeKsRD7G6x5s5eQB&X-Amz-Signature=d88bf7a1690822543aacafcf4bc7e285548c4acfcb668fbcfe83517352cff083&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
