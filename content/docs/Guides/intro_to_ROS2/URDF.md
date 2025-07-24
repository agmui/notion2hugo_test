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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VMAUYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDIE%2BLVqTZedh4kLjb0PNcPnj9yhwgHF%2FZx2nWxh93wSAiEA4owzi2IoWtpn5wxeCm%2FHUh8E8Qz0BSZyzpOe42M0woYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIqcNRqInH%2B8b3mTKCrcA0%2BBwEGVAXwRfdkpCAq6bBnrc69Oy0r3ECaPBiY8Fc%2FVyWWmJGUITeGRvu8xhhTiOes2r%2BPMi4TfZkeY2Y3fyo6bykQUrrtU1yAAsZW3ed2Hz7SQ%2BEkvzyUZ15ZAVxeU%2BjpxeRsNpn3q6Z1YEYaW6RX4y5XxNQCDUmQL8m6zSPlbOYfFgx4jTlk85Tz%2BRpakRhUm3%2FbbvT%2BR3IdxpSD%2FyNkJda4pFyAli1FuV9vRJhHGEDvb5SDE5BAWKFvtN3TWBiqWGI9JyU9YOmSzqdqKmmwCM3q5Kjme4q3RDGsvf%2B0tgq%2FKm9i2vZqNgDepOOKGDkiBJtKPTGK7b5qU1KN4OGdaMfiDN4RljxDMXTYS8RWlZMziqEMlv4oSNkYOY%2BbBoNGhsXycShZ3ZcdfMY6GvV0ENg3g7jAdRgoW5ilJZ%2FNky%2FY%2FbrwoA6azs5DYk0juXg%2FNjI2Dk%2FE66O9k716CWtK%2B05XvDdOL07TTPGr2ic%2B%2BdQjdhlZphAyq9c6eZQgJmoqgXV6VFpOjFaJb%2BRoACIo3M9gWjJgc9r%2F7cUhgdiQlmUu6gEG9QFhS6BltPV5mPTvkSirxpHoJ8gI3OWvdjNErnvk2dCH8niFV4g6YTVoNCit8H7Q7Ogcz9f%2BdMISyicQGOqUBEHScF24OSy%2B05aOmPNXai0EPqf4f8Z1FDnVWX%2FlNdEvDbtElR2FHTFHCMTGIm7Pb0D9Ey2uRChXPT1QoTMBCtl2i2df1BpPzvkwn%2B8LJRPXXoEmfkvAAK6%2FrlTmA1PLQCq55XP2hvcDQz29GCSIq1FKPDAjR0JnGQSVgxgwe%2FFt4NiLf28zt1oghyssXotL%2B0SU3o6M2eGMa76vzd8sBrmL52kXp&X-Amz-Signature=7b36b2e067166b37a30ec7352ec678b53b9677fbf97f13ecab44b3ddaced311c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672VMAUYY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDIE%2BLVqTZedh4kLjb0PNcPnj9yhwgHF%2FZx2nWxh93wSAiEA4owzi2IoWtpn5wxeCm%2FHUh8E8Qz0BSZyzpOe42M0woYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIqcNRqInH%2B8b3mTKCrcA0%2BBwEGVAXwRfdkpCAq6bBnrc69Oy0r3ECaPBiY8Fc%2FVyWWmJGUITeGRvu8xhhTiOes2r%2BPMi4TfZkeY2Y3fyo6bykQUrrtU1yAAsZW3ed2Hz7SQ%2BEkvzyUZ15ZAVxeU%2BjpxeRsNpn3q6Z1YEYaW6RX4y5XxNQCDUmQL8m6zSPlbOYfFgx4jTlk85Tz%2BRpakRhUm3%2FbbvT%2BR3IdxpSD%2FyNkJda4pFyAli1FuV9vRJhHGEDvb5SDE5BAWKFvtN3TWBiqWGI9JyU9YOmSzqdqKmmwCM3q5Kjme4q3RDGsvf%2B0tgq%2FKm9i2vZqNgDepOOKGDkiBJtKPTGK7b5qU1KN4OGdaMfiDN4RljxDMXTYS8RWlZMziqEMlv4oSNkYOY%2BbBoNGhsXycShZ3ZcdfMY6GvV0ENg3g7jAdRgoW5ilJZ%2FNky%2FY%2FbrwoA6azs5DYk0juXg%2FNjI2Dk%2FE66O9k716CWtK%2B05XvDdOL07TTPGr2ic%2B%2BdQjdhlZphAyq9c6eZQgJmoqgXV6VFpOjFaJb%2BRoACIo3M9gWjJgc9r%2F7cUhgdiQlmUu6gEG9QFhS6BltPV5mPTvkSirxpHoJ8gI3OWvdjNErnvk2dCH8niFV4g6YTVoNCit8H7Q7Ogcz9f%2BdMISyicQGOqUBEHScF24OSy%2B05aOmPNXai0EPqf4f8Z1FDnVWX%2FlNdEvDbtElR2FHTFHCMTGIm7Pb0D9Ey2uRChXPT1QoTMBCtl2i2df1BpPzvkwn%2B8LJRPXXoEmfkvAAK6%2FrlTmA1PLQCq55XP2hvcDQz29GCSIq1FKPDAjR0JnGQSVgxgwe%2FFt4NiLf28zt1oghyssXotL%2B0SU3o6M2eGMa76vzd8sBrmL52kXp&X-Amz-Signature=653188a81b9b3a6d08ba5a3b1129cb9673b6b59fdb7f6f5f34227c7f667d0770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
