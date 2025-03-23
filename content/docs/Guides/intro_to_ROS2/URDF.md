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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3B6UE2B%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCpmNisJHswjyM2ntJY0QSlWvVJ19X9VFl6e2YpAj2uegIgT8xHwTgY%2F0kazAWxNFIYRQlx%2BR%2BMSAmF0AcKSIXSAtEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmG6eMQUF7Vay8AuSrcA0aLEgdjdSTGgS%2F%2FnT6udiRUrSQWtHqddoaxDEJuNxJ%2BxOvv7i1gHY6utHrbOilylOyv2XmfCNykxfolkKfwZ9gWfzu92Bp0k%2BC8lulPSnmTZ%2B3gM91Ht4yfow0KjuvfA6ZTL8Qm33hieuV4R7U9dwHcWUBO2j2T3fpQhcprdPeJlZtpdiU5YGM0XHBDPMfPD7zCsOdhlDbU63wiHrZ%2FVBMwWw%2FBbsTh%2F13fYnoiiNcDflEPesDUrbK4uNsEkgamrajFWgV0rPWQhiVTppeOpMoBVYmWDDqWuUXDRuVvqphSrf%2B1OWJhO6hxisgKnt%2FPj84AZYZpMYnHbP%2BB6lCvumoKg%2BKQ%2FgHQva6s2E0l5XrKec6uaU%2F%2FB%2BJdPviAkIjpY9v4cbYXlJhncSHiMrv3zEAMqmLYs2ttG%2BgsHNkndf9rJVQTLUeeweafNzIOQYON8ZzDQVNIhAnoUgm71bPRD7CXW%2FiQ6CKtod5s65IEOFZUf7pnHC7J93Mq9x6VZd%2FL5F0V9yo1IIWcD1uIsCekHUMjH8lFHes0LnFrsd6eu%2BDUVVxkSXshD8NtJSxHKgl9CFlEiLwF0WIpYr5Qe8C4c%2BuIRypNSC5KgR4ywuBuBbeUXphamdHWm8AUlwu7MJ3N%2F74GOqUB3h%2Bx76lGYSHEmJegtC5R%2BJ0279Wtm%2BOu%2BnCkNkkPuURjcH7cMZLozjIbHUPBqyM4rSUcXRGkNiwt652V067wwCnHU0CVYAVAztC5HfPzWgu8qzspcwPyfSMK%2F6mcQNyEYDeJc4otE0SuKrl2a3ELdtWx%2BSYm7eEvuqd9T%2BqdllcHDPluRpeVpVrQCpQxDdIvQcA1on78eFqiaDrl6Uxsda5oCWtI&X-Amz-Signature=5de642d71fd40747f531a73ff56540d023202c30012cea05f28e63c34116af1d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3B6UE2B%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCpmNisJHswjyM2ntJY0QSlWvVJ19X9VFl6e2YpAj2uegIgT8xHwTgY%2F0kazAWxNFIYRQlx%2BR%2BMSAmF0AcKSIXSAtEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmG6eMQUF7Vay8AuSrcA0aLEgdjdSTGgS%2F%2FnT6udiRUrSQWtHqddoaxDEJuNxJ%2BxOvv7i1gHY6utHrbOilylOyv2XmfCNykxfolkKfwZ9gWfzu92Bp0k%2BC8lulPSnmTZ%2B3gM91Ht4yfow0KjuvfA6ZTL8Qm33hieuV4R7U9dwHcWUBO2j2T3fpQhcprdPeJlZtpdiU5YGM0XHBDPMfPD7zCsOdhlDbU63wiHrZ%2FVBMwWw%2FBbsTh%2F13fYnoiiNcDflEPesDUrbK4uNsEkgamrajFWgV0rPWQhiVTppeOpMoBVYmWDDqWuUXDRuVvqphSrf%2B1OWJhO6hxisgKnt%2FPj84AZYZpMYnHbP%2BB6lCvumoKg%2BKQ%2FgHQva6s2E0l5XrKec6uaU%2F%2FB%2BJdPviAkIjpY9v4cbYXlJhncSHiMrv3zEAMqmLYs2ttG%2BgsHNkndf9rJVQTLUeeweafNzIOQYON8ZzDQVNIhAnoUgm71bPRD7CXW%2FiQ6CKtod5s65IEOFZUf7pnHC7J93Mq9x6VZd%2FL5F0V9yo1IIWcD1uIsCekHUMjH8lFHes0LnFrsd6eu%2BDUVVxkSXshD8NtJSxHKgl9CFlEiLwF0WIpYr5Qe8C4c%2BuIRypNSC5KgR4ywuBuBbeUXphamdHWm8AUlwu7MJ3N%2F74GOqUB3h%2Bx76lGYSHEmJegtC5R%2BJ0279Wtm%2BOu%2BnCkNkkPuURjcH7cMZLozjIbHUPBqyM4rSUcXRGkNiwt652V067wwCnHU0CVYAVAztC5HfPzWgu8qzspcwPyfSMK%2F6mcQNyEYDeJc4otE0SuKrl2a3ELdtWx%2BSYm7eEvuqd9T%2BqdllcHDPluRpeVpVrQCpQxDdIvQcA1on78eFqiaDrl6Uxsda5oCWtI&X-Amz-Signature=f3da61629e72a720e0b1ddf01afb913295c291586eabc5877b54dc6d49ff3395&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
