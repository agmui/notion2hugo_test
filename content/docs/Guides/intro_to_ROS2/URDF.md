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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ODXLLQL%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3xKtsjgznTAvpw0y%2FUm5F%2FqdRb8iJ9S24ixc%2BUYDxTAiEA60VfBPrjabTQMSXRIVxn8sJxMXWHHOhANgnfcFq0ol8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAqv%2FFKMAO%2Frj7sOcircA8qmOWqptVRO3LB%2FfQrGmWXZwPF2W6QISyU3u2pi9GzHBI4fuMIuZR7yyQiBe43la86UieK2mA6bh4h1qRWdfE%2BG6%2FD5%2FgwaSQq%2B7iAUIuF1YRJCAcbhfiEIwhhl4fETce7sqK%2BeYkMTyxi8PA%2F1S94fYF743iMB%2BXeM%2F%2FMiUYz6voQTQkjhpjYXjG%2Fy0IlK0dnKIV%2F9o3xpCtOO6I%2BzM5C0IGMzJc4cB853ni4RRqBgLfWxOJTFIeGSMIThKZ3ZtXeIine3e8eljIYR2zteV7DbCdfqu8X7XD%2FGaQ%2FWDCWa3GTUZhODVxyhVd5WXMV98iqaRNR8zrWzONByt4893v%2FE7%2FJIiHXTc%2Fr0t5tm9doADJ%2B%2F3sXLoX4R1j%2BlZSF7tPhKMNef5add919dbC%2BE5TWR1va9AWTMlFMxTJLuO%2BHgCpvPI4vjAagMCeMtIXQeDtWH%2F1%2BBNbaKGckYXnr5kviJbXRtWqDnAmNrGm3wcmWKerG8yuQUj%2F8Ag8%2BLAO7W5S7zC6IJyYDDG3bZ0SUwQIuvg3U0hJnh1Pfnoo75ZVhQtBAQB%2BD6OycaYICiG9P4DBXge40uZ7RGraXE8uq711xVhxZiBa58CSifHZ1Yv43mGf8Q1pLgWt%2Ff3JSHMP7F3MEGOqUB7BOo64f0LDukAmCp23iMu5gVqgDE3jAUGvuhtN2hJgMJmZSp2l2TcPkQvT7YbGs0VIRnHFJghrApCAt34%2FgOsS%2Fcp18vtsnOVXvg1KGJcxcWiUyqgNkFBMWdlhwnKcn9ZVdTHAp6EQfLwiHRf8QHSWyCp7Wm0bCgKOSSo0Jw6p9n67nriVz%2FVtyzxQoFk0AGT4%2FelqBRvnyqXCJQg%2BKB93yjNk25&X-Amz-Signature=d4cf73baf5b4963574b2520512957f194a0c794548ab9d975d352f3b31e8bdab&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ODXLLQL%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3xKtsjgznTAvpw0y%2FUm5F%2FqdRb8iJ9S24ixc%2BUYDxTAiEA60VfBPrjabTQMSXRIVxn8sJxMXWHHOhANgnfcFq0ol8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAqv%2FFKMAO%2Frj7sOcircA8qmOWqptVRO3LB%2FfQrGmWXZwPF2W6QISyU3u2pi9GzHBI4fuMIuZR7yyQiBe43la86UieK2mA6bh4h1qRWdfE%2BG6%2FD5%2FgwaSQq%2B7iAUIuF1YRJCAcbhfiEIwhhl4fETce7sqK%2BeYkMTyxi8PA%2F1S94fYF743iMB%2BXeM%2F%2FMiUYz6voQTQkjhpjYXjG%2Fy0IlK0dnKIV%2F9o3xpCtOO6I%2BzM5C0IGMzJc4cB853ni4RRqBgLfWxOJTFIeGSMIThKZ3ZtXeIine3e8eljIYR2zteV7DbCdfqu8X7XD%2FGaQ%2FWDCWa3GTUZhODVxyhVd5WXMV98iqaRNR8zrWzONByt4893v%2FE7%2FJIiHXTc%2Fr0t5tm9doADJ%2B%2F3sXLoX4R1j%2BlZSF7tPhKMNef5add919dbC%2BE5TWR1va9AWTMlFMxTJLuO%2BHgCpvPI4vjAagMCeMtIXQeDtWH%2F1%2BBNbaKGckYXnr5kviJbXRtWqDnAmNrGm3wcmWKerG8yuQUj%2F8Ag8%2BLAO7W5S7zC6IJyYDDG3bZ0SUwQIuvg3U0hJnh1Pfnoo75ZVhQtBAQB%2BD6OycaYICiG9P4DBXge40uZ7RGraXE8uq711xVhxZiBa58CSifHZ1Yv43mGf8Q1pLgWt%2Ff3JSHMP7F3MEGOqUB7BOo64f0LDukAmCp23iMu5gVqgDE3jAUGvuhtN2hJgMJmZSp2l2TcPkQvT7YbGs0VIRnHFJghrApCAt34%2FgOsS%2Fcp18vtsnOVXvg1KGJcxcWiUyqgNkFBMWdlhwnKcn9ZVdTHAp6EQfLwiHRf8QHSWyCp7Wm0bCgKOSSo0Jw6p9n67nriVz%2FVtyzxQoFk0AGT4%2FelqBRvnyqXCJQg%2BKB93yjNk25&X-Amz-Signature=8eae60e29f6b7c92a2a438bc87dd94f8c0da5522879abe87649b4d2349a4a852&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
