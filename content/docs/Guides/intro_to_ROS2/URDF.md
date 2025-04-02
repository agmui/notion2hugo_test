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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7MS4D75%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T132011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDehD1f9QmllJJS2VNsj0El1Zp3zIK2NMFQb%2BDCoa0LWwIgLmDIMbdjm%2B0SjF4GjKehb1ana4Q5lv46ZQO462alYNsqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWKgVlHn0wHfVzxeircA2iXio2ae7sII3sND5AdMxlRM7C4RCaSW9qSmdQ%2BAzFCU1PnsmRJJqigE14JfolbgW1YnF0YpJkI1SV2N3nrwWV8ilj0mk8qsWx26DzJyGn2PqJsttPy46Q08B24jgRhxPIuKBEEQVY3zbTj2J87FilOQ2x2xqsm7xZzSld%2Fkf8jMoKdYYIk4L4d%2BtMsVmrAw6Tfmej2mbmQDP1OaYcAiGD%2FD%2B1aPqqkMC%2FUXRFfoAv8JXWWpTClErmp1SVGwrdh8qqx4%2BtrFO4iJy%2FWM%2FjOd1WkFL0vrC4R%2BLzYc4eMdBmiVdgEWcu4XTA18t52C6%2BSnXd5T7TlKp1BshN2jB7CqolNyozEqFDpplarM0EWMIqKElTXGDzCVts9zE26AvqM4q96jifJ9M0ucLfR9SrcGtm6OIWi8VyHn7viYchs4ED41mjj7RIH2LeXlxE%2BseNh9Iltd0P8%2F3S8NpKliJ6NcqTDrPjEdWWNteRjWSsUZYDOjp8i0tQgfUOCatEOg66OXneUFd2sbRBV%2FjXPypPL0ajsgOfSV32EmxVA6QGdYbaKaXR6KFrKpshvifdaVvdr0nUvEjCXUEnvu21ug9KJBQ1NwBFNUPaz%2BV1LuxmgeOnCfI0jOa4Cfr8ygxa9MKfgtL8GOqUBYHgt%2BG3zBMnGtdTGqafp%2FuLmuPr1IY1lChtRuwQNQJvIhg6UjFJmRdeoYD4OzHQNkgwg0kVir3J0xXnrNZJdcNxjui0GbBs7ZOCtdjGtllahfln5oOidmyd%2BDuOw4HDq3eFAvPnEo5cGTkK69wmZFjAa5va877y8ZubWIGr8%2FTI4blNLX3W8YVZ8aTupBsy3tJQ18xzgjKWiejiZyNnX2OFgUF1T&X-Amz-Signature=c7a3ad8ba4eb189eac6330bf31f1a4e86284e10c77f62c43703118ee34821775&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7MS4D75%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T132011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDehD1f9QmllJJS2VNsj0El1Zp3zIK2NMFQb%2BDCoa0LWwIgLmDIMbdjm%2B0SjF4GjKehb1ana4Q5lv46ZQO462alYNsqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWKgVlHn0wHfVzxeircA2iXio2ae7sII3sND5AdMxlRM7C4RCaSW9qSmdQ%2BAzFCU1PnsmRJJqigE14JfolbgW1YnF0YpJkI1SV2N3nrwWV8ilj0mk8qsWx26DzJyGn2PqJsttPy46Q08B24jgRhxPIuKBEEQVY3zbTj2J87FilOQ2x2xqsm7xZzSld%2Fkf8jMoKdYYIk4L4d%2BtMsVmrAw6Tfmej2mbmQDP1OaYcAiGD%2FD%2B1aPqqkMC%2FUXRFfoAv8JXWWpTClErmp1SVGwrdh8qqx4%2BtrFO4iJy%2FWM%2FjOd1WkFL0vrC4R%2BLzYc4eMdBmiVdgEWcu4XTA18t52C6%2BSnXd5T7TlKp1BshN2jB7CqolNyozEqFDpplarM0EWMIqKElTXGDzCVts9zE26AvqM4q96jifJ9M0ucLfR9SrcGtm6OIWi8VyHn7viYchs4ED41mjj7RIH2LeXlxE%2BseNh9Iltd0P8%2F3S8NpKliJ6NcqTDrPjEdWWNteRjWSsUZYDOjp8i0tQgfUOCatEOg66OXneUFd2sbRBV%2FjXPypPL0ajsgOfSV32EmxVA6QGdYbaKaXR6KFrKpshvifdaVvdr0nUvEjCXUEnvu21ug9KJBQ1NwBFNUPaz%2BV1LuxmgeOnCfI0jOa4Cfr8ygxa9MKfgtL8GOqUBYHgt%2BG3zBMnGtdTGqafp%2FuLmuPr1IY1lChtRuwQNQJvIhg6UjFJmRdeoYD4OzHQNkgwg0kVir3J0xXnrNZJdcNxjui0GbBs7ZOCtdjGtllahfln5oOidmyd%2BDuOw4HDq3eFAvPnEo5cGTkK69wmZFjAa5va877y8ZubWIGr8%2FTI4blNLX3W8YVZ8aTupBsy3tJQ18xzgjKWiejiZyNnX2OFgUF1T&X-Amz-Signature=2a0e48acc34c3276fdc26b5a18089382799bfd56bafa22612251c204f574f060&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
