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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DRVHC2I%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqu7%2F36EeMpUc25MceRSBzjc7Ds4ZLjnD0rHL9jAH8DAIgTw92%2Fu%2BpuThE0rojRYCodsd8KXJ0mKPrTgBTX8n0aJEq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJ01S%2FS9AfaBW2p4OSrcA%2BMub6Im4kEsYLIV4EDM%2BDM2rGkEuvB%2B8fDLcmrW2Lls%2FE94Q0VDaH6Afe3abbgmXWb5zQKak6st8QXqdDIGIm%2BoOBRlaId%2BqZ%2FHPP7B4HPlI2nGj6h%2BlzTZVkrOO%2FU3TVFTRzyDnJ6QU8zxdI13%2BJohUvlw71NPBM1CSjZOw7JWc2tVxH4uQaC%2F2e5uD0NyB8Na%2FadZI9vMF%2BHUJfWOcyXDMCi0lqNsoBTmEoilozx62uXh9JCnVF3r%2FqsG2M6Ij3fWo3BUCokWmuFdv6x1zc9SV7Y1DnOKK6I0VcrwMjxHXZWUFuEFLAfiajtsScHAXhp2TeQRT%2BzuYU25bZEwiz%2BiOqRxVqm0oQ%2B2ClPbBK7YASE1AL0T0bM3lfHJ38oxn3HcwOu7UsSbi8XQsnUUiXRpQ7ftGzJydSkDh6jyzAXZOKelcrlYShcVXN%2BtOd90zm4ghqWS%2FrmI3629jHbyZlyiLQrS1RM3hIIyKgaXwsswI9UdEUglXg5UnZOJv%2Bo866zY5H%2FBficNg7ksL0RdDKC7egIRunuxwZuCQFguyBEuVmU4Y0G5qDfKOxf3O181mWGdJCoL1ALsxnuI85ZSwR%2FT0PA5T8%2FKH%2FsX%2FgPvR8ktgt40l%2BNGzLbJeuEEMI%2B9y78GOqUBx4pSEpbz2yOIDZJ8VZHyFvj4P%2BKadIoUbt2fP7fmUk3uHEwAsmEJy8mVHAj9jEj99Fq%2B9P4f6XKvANFFldRxf809QWMHUmKkRiYOtiH0%2F2uNzC7ATpfYJNUB%2BCfEEbYmsF3rZA2JjXwEY6dULsLkklQzanVgq1NVPsfCEwDc32VUE4hsZci%2FKc%2Fipn61ea0S8gcTVPob6%2B8%2BNnwfWjW%2FOXy5K9%2BS&X-Amz-Signature=7bded9ef7bb948a71ea247be6e8ef532bcd85802acf41cbbb0b1a406757994c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DRVHC2I%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqu7%2F36EeMpUc25MceRSBzjc7Ds4ZLjnD0rHL9jAH8DAIgTw92%2Fu%2BpuThE0rojRYCodsd8KXJ0mKPrTgBTX8n0aJEq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJ01S%2FS9AfaBW2p4OSrcA%2BMub6Im4kEsYLIV4EDM%2BDM2rGkEuvB%2B8fDLcmrW2Lls%2FE94Q0VDaH6Afe3abbgmXWb5zQKak6st8QXqdDIGIm%2BoOBRlaId%2BqZ%2FHPP7B4HPlI2nGj6h%2BlzTZVkrOO%2FU3TVFTRzyDnJ6QU8zxdI13%2BJohUvlw71NPBM1CSjZOw7JWc2tVxH4uQaC%2F2e5uD0NyB8Na%2FadZI9vMF%2BHUJfWOcyXDMCi0lqNsoBTmEoilozx62uXh9JCnVF3r%2FqsG2M6Ij3fWo3BUCokWmuFdv6x1zc9SV7Y1DnOKK6I0VcrwMjxHXZWUFuEFLAfiajtsScHAXhp2TeQRT%2BzuYU25bZEwiz%2BiOqRxVqm0oQ%2B2ClPbBK7YASE1AL0T0bM3lfHJ38oxn3HcwOu7UsSbi8XQsnUUiXRpQ7ftGzJydSkDh6jyzAXZOKelcrlYShcVXN%2BtOd90zm4ghqWS%2FrmI3629jHbyZlyiLQrS1RM3hIIyKgaXwsswI9UdEUglXg5UnZOJv%2Bo866zY5H%2FBficNg7ksL0RdDKC7egIRunuxwZuCQFguyBEuVmU4Y0G5qDfKOxf3O181mWGdJCoL1ALsxnuI85ZSwR%2FT0PA5T8%2FKH%2FsX%2FgPvR8ktgt40l%2BNGzLbJeuEEMI%2B9y78GOqUBx4pSEpbz2yOIDZJ8VZHyFvj4P%2BKadIoUbt2fP7fmUk3uHEwAsmEJy8mVHAj9jEj99Fq%2B9P4f6XKvANFFldRxf809QWMHUmKkRiYOtiH0%2F2uNzC7ATpfYJNUB%2BCfEEbYmsF3rZA2JjXwEY6dULsLkklQzanVgq1NVPsfCEwDc32VUE4hsZci%2FKc%2Fipn61ea0S8gcTVPob6%2B8%2BNnwfWjW%2FOXy5K9%2BS&X-Amz-Signature=6159bdb680adc09e47b86d3a9fc5a6141e9de7b4e545ecb60f816bd7488ae0e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
