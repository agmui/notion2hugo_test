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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7YXHHK%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAVpy7GtAoswNobnPByhXAbnCE8wChe7N%2F9VzYo8IjVQAiEAoHQsAD5VIeN7%2FpggkV51tPSAWeCKBLG4BExhBEO4vy0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHw4ZLVWYEtUpVFd7ircA%2BeZmxkNWnWYkdtg703OP97fP0ms6WXONmwY%2B%2Fh7pbW2Sqn7UTQSD6Sj%2F%2BNaZOE2ULR3%2BpIxE5EEVEbjye93Nlge9eak0FyVZgS2MnfrvO1dnOCqKmrHTj0M7kb%2FZmAiP3YlHvKgQvSN9hCRZOFRW%2FB4BEIDYuETxIyW7ujG8o0o%2FpYoWlOgpgHwzkCN3aFHy9h9OW9J9WYjTngWtgPWgvAaxAGikdBw%2BJ5K9gG2HbbbZ3CWjQk3sEtOKsIcTImFDvIZMruKKPhkciowR%2FUigdJykoHD7TxWuANO3MYwYUbvREt8qiXKbpP3CroLqvvjDfr1%2BlbjVC1Ow9R4NHn2PV8P6yUv6%2Fts4q5mL4HLVr3WkhKQTZEOSx%2FNZ1oFV7xp1L9mCtYnplSrAM4raMXUZiZSJGDp68DQOfE8bBUrzRV5ZyplXdXyp97PHbgqR1PISZAE%2FjaiKDuh8NgPE87IMJlh6gsEStLzO9eADxyRcmrSAHEHlkjILbeOHXuX9yogOpU2e7IeyN4iJ%2BE2t%2B6fg4dDNGWRUjRw3xQSKhw07aHADDQdEKvefoCoEjtLn6Vo7hFp0WtRPIS9GdXSxwgTLkLgqUTLGBVVUTT5dXKVgXxIhwUE2k9khkeTtY9hMIbGnr8GOqUBVRhQseXPeEy5%2FaquLhZvrvxB24hl4TQ6iM10wq%2ByhYTCCWxTZgG6NeR8FlXQhEor%2B1s%2F4Z4dlcCP9mc5ievWCjrb5gwuJ4WV7MqfTQqeQyS32KqfhkGU2a1XaqVO9NYTCnz%2FIanaa6xiZZCfT7c58eGck8emXll8Ge2ykx2Bl2C69Yp4o%2BWZaiMzO7W%2BiLbLpToNQQrOGznjI5ri7c7lhD2NzPc4&X-Amz-Signature=eb3ac2a3814dd16afd51e3f0664ed86c0ccd699f7f421395c02bdf9854fc3b35&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7YXHHK%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAVpy7GtAoswNobnPByhXAbnCE8wChe7N%2F9VzYo8IjVQAiEAoHQsAD5VIeN7%2FpggkV51tPSAWeCKBLG4BExhBEO4vy0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHw4ZLVWYEtUpVFd7ircA%2BeZmxkNWnWYkdtg703OP97fP0ms6WXONmwY%2B%2Fh7pbW2Sqn7UTQSD6Sj%2F%2BNaZOE2ULR3%2BpIxE5EEVEbjye93Nlge9eak0FyVZgS2MnfrvO1dnOCqKmrHTj0M7kb%2FZmAiP3YlHvKgQvSN9hCRZOFRW%2FB4BEIDYuETxIyW7ujG8o0o%2FpYoWlOgpgHwzkCN3aFHy9h9OW9J9WYjTngWtgPWgvAaxAGikdBw%2BJ5K9gG2HbbbZ3CWjQk3sEtOKsIcTImFDvIZMruKKPhkciowR%2FUigdJykoHD7TxWuANO3MYwYUbvREt8qiXKbpP3CroLqvvjDfr1%2BlbjVC1Ow9R4NHn2PV8P6yUv6%2Fts4q5mL4HLVr3WkhKQTZEOSx%2FNZ1oFV7xp1L9mCtYnplSrAM4raMXUZiZSJGDp68DQOfE8bBUrzRV5ZyplXdXyp97PHbgqR1PISZAE%2FjaiKDuh8NgPE87IMJlh6gsEStLzO9eADxyRcmrSAHEHlkjILbeOHXuX9yogOpU2e7IeyN4iJ%2BE2t%2B6fg4dDNGWRUjRw3xQSKhw07aHADDQdEKvefoCoEjtLn6Vo7hFp0WtRPIS9GdXSxwgTLkLgqUTLGBVVUTT5dXKVgXxIhwUE2k9khkeTtY9hMIbGnr8GOqUBVRhQseXPeEy5%2FaquLhZvrvxB24hl4TQ6iM10wq%2ByhYTCCWxTZgG6NeR8FlXQhEor%2B1s%2F4Z4dlcCP9mc5ievWCjrb5gwuJ4WV7MqfTQqeQyS32KqfhkGU2a1XaqVO9NYTCnz%2FIanaa6xiZZCfT7c58eGck8emXll8Ge2ykx2Bl2C69Yp4o%2BWZaiMzO7W%2BiLbLpToNQQrOGznjI5ri7c7lhD2NzPc4&X-Amz-Signature=688387512b578a4c1536d4ef095bdaeb5356d9bfda179ca3ba120e21de5d3b2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
