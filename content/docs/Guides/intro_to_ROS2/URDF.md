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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MX7EAPE%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7HQxbCvnz7BHdhpawwiNp0i%2BNpgMs1JF1LcPG7xbV4AiAEXS%2BPI6hZWdfDVApYAcn9Z04PmWD5iRTBDGxcdaUJSSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM2QNlpO5UEoBJ1m7vKtwDHSCeEf1TST0BQ5IRSFw%2BjhipO1Q%2BMkzVfT01cftssJXS1chL8KXb%2FwC1UhYhWhUDo%2B3sS3i87wnWWshHVk8M1%2B3Hzz8idMhMkg2%2F0HCRmzY11nuDN7zMtbx79YqKLKr87SoJV%2FVGxXDlM87Vwzu8NmdK3DQWZY2bKR4CnMEgNgdgOc9FB0GIbYcrlWP%2F5RRSiTAuOznx3bNxRk7%2BC9NZWq%2BSy2fqvvsNZqhfPA33VBWvO3b9k0O0tohsU0lJOdcxExFcYIds%2F8eWQsFrX8TEeYayBTM%2F9sJEdhAHy8oXY%2BPVQj34bbcLo%2BxmjeSBVZaopPl5b%2BKx0QcJ1pJq4tbiZJcavkm3%2Bg271ILxSbV15mRN4civ7Hv8dMacrFAcW1v0TdnhBA6OnaYZHxn6Z56ef6fEI0QfGfkepbpYN3s9J%2BDIMCzYoq6NE%2BCrKxNEyVQdLiltPDSvg6nyTM6H1zXhxh69on92MYG7uda%2B4oq%2Bg26JZ0OpLlYDmSaho2QYDztGbOhdCZyEo9b6te7HhWCIb3cY11S%2BL7lei5bq3tDoutfLvERy%2FoghncRuhZc5NNuyB28EjyTHi41E194x%2BzRzYLrVdZ46NOB2jPJkdKHGWCWb7nZzlSmwp43DIfYwju22wAY6pgHzi1A9Dj4SWS9gGiuBnUq3YVf50EqiCJZTzIk7nctfnaMaL4WbnpgAC7MZ0d6PLrsRzGhj8lL2s9aibG%2FLIf072V9a8tjwfIMOHdqxRVkX0P1mvwBlgXxyjBNWxn9zV0ZZBjSJaeZhXMm28tZKFeviu8uXxh2gBwpspw3mstqL3LR9Idyotxphoq2O0sDEA8r5EzN6ON4XdoERA%2Bfk3%2FZ7FT8SRuX6&X-Amz-Signature=8dc2c446fc6d42877a88d67ef981485c7c200cd1569a06b662974fde95b1eb29&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MX7EAPE%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7HQxbCvnz7BHdhpawwiNp0i%2BNpgMs1JF1LcPG7xbV4AiAEXS%2BPI6hZWdfDVApYAcn9Z04PmWD5iRTBDGxcdaUJSSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM2QNlpO5UEoBJ1m7vKtwDHSCeEf1TST0BQ5IRSFw%2BjhipO1Q%2BMkzVfT01cftssJXS1chL8KXb%2FwC1UhYhWhUDo%2B3sS3i87wnWWshHVk8M1%2B3Hzz8idMhMkg2%2F0HCRmzY11nuDN7zMtbx79YqKLKr87SoJV%2FVGxXDlM87Vwzu8NmdK3DQWZY2bKR4CnMEgNgdgOc9FB0GIbYcrlWP%2F5RRSiTAuOznx3bNxRk7%2BC9NZWq%2BSy2fqvvsNZqhfPA33VBWvO3b9k0O0tohsU0lJOdcxExFcYIds%2F8eWQsFrX8TEeYayBTM%2F9sJEdhAHy8oXY%2BPVQj34bbcLo%2BxmjeSBVZaopPl5b%2BKx0QcJ1pJq4tbiZJcavkm3%2Bg271ILxSbV15mRN4civ7Hv8dMacrFAcW1v0TdnhBA6OnaYZHxn6Z56ef6fEI0QfGfkepbpYN3s9J%2BDIMCzYoq6NE%2BCrKxNEyVQdLiltPDSvg6nyTM6H1zXhxh69on92MYG7uda%2B4oq%2Bg26JZ0OpLlYDmSaho2QYDztGbOhdCZyEo9b6te7HhWCIb3cY11S%2BL7lei5bq3tDoutfLvERy%2FoghncRuhZc5NNuyB28EjyTHi41E194x%2BzRzYLrVdZ46NOB2jPJkdKHGWCWb7nZzlSmwp43DIfYwju22wAY6pgHzi1A9Dj4SWS9gGiuBnUq3YVf50EqiCJZTzIk7nctfnaMaL4WbnpgAC7MZ0d6PLrsRzGhj8lL2s9aibG%2FLIf072V9a8tjwfIMOHdqxRVkX0P1mvwBlgXxyjBNWxn9zV0ZZBjSJaeZhXMm28tZKFeviu8uXxh2gBwpspw3mstqL3LR9Idyotxphoq2O0sDEA8r5EzN6ON4XdoERA%2Bfk3%2FZ7FT8SRuX6&X-Amz-Signature=afa0672ea4c7593b06a1e99eaa7056d77e3eec68ad8241bd2714dd7ed1280936&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
