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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLP376OB%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BtBU%2FA35UCaru7vk%2BmWK1zIZdxcSgy7AFuw3R5FtLFAiEA0%2BhXHfKqudE5mpizrDTv484KChviOU5ppzj%2F%2B4VYUugq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLnRSYf5ujxfu%2B4SAircA6ej%2FFaKTrGbRbv%2FYwl8GwKHa6KHATudf3wDD7TacnFlXF0VhZo%2FgWjyfZuC5WBN%2Ba%2FkiEeuZQvkX4VFd8jRHG0i8074t4t5IJwjpYYS6QHPnuleM3km%2B6v6iSDqxSARET67XwCFuDxbIVR%2BNT26Tsk3otu80lrLPEB6uOGY%2Fg0PDl8SryaDKR9cW%2BaXqplyewRbcSc06Rn%2B%2FJOsSEMY7C4gUqd9zCSroHPCU6azotqkLuStgN6jSUhMCXOrJ4W6JbfHMf4NJF1D1XGF7UqVRv7WNR9lXBJXgJV4CeTADbsf364RPyXTk7cYdARPtwrHFzQUCOw02DRnVV99GYrSNajWKSk0VDIfaUKiMXtPTQp23%2BZTUFlp9KLVXRoCUUO2%2BCkGPJXqqI%2B8d91QoXkB87h9khEi11mT2U1YuO2qtgBsWLHCznG3lDywHSUqdXGpxPadsqoclpcPvYJB1C8236ppSXbwrzpENUg2mzoCTVLO7jc5fEVeeOr08QqxMfk0TSQyI1GZUNeFgjgFyDyGSzK5TkimvaN1aDM%2Fh6ZmfDbjZd%2Fg%2FGapZ2JponUh4qXXhhNKMA%2BrCXZxhbA4RIqJPsSnqpiOd9Q5PegEEtV%2BF7hAevFJ%2BsjXXHsc%2FLe7MN2r08EGOqUBzIoHlSYvdYMT8RTCBMSLdDzJGKxCWKZ%2B%2BZd2gDemnM9AJ0tY1VKQDpSu9Lpoi3rhlvDE%2BR4g8pH1SrHWb%2BTIbktooX%2Fdwjt1ACp6rOMW20Ier%2BBqzXVLsxcNTtKrT%2F2gLjrpz0%2FmyxvOt4foszDVtx81Drr8ePPLKMjraSK03G26YwCHJQL3bTlxL51XqLWdqAC9ekEtkVTiuVIHlyUV%2BzugLqgr&X-Amz-Signature=7aac05673e491dd77d61dfbc74a155a46b714e5e8b5c84b9c1793b013e79f775&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLP376OB%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BtBU%2FA35UCaru7vk%2BmWK1zIZdxcSgy7AFuw3R5FtLFAiEA0%2BhXHfKqudE5mpizrDTv484KChviOU5ppzj%2F%2B4VYUugq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLnRSYf5ujxfu%2B4SAircA6ej%2FFaKTrGbRbv%2FYwl8GwKHa6KHATudf3wDD7TacnFlXF0VhZo%2FgWjyfZuC5WBN%2Ba%2FkiEeuZQvkX4VFd8jRHG0i8074t4t5IJwjpYYS6QHPnuleM3km%2B6v6iSDqxSARET67XwCFuDxbIVR%2BNT26Tsk3otu80lrLPEB6uOGY%2Fg0PDl8SryaDKR9cW%2BaXqplyewRbcSc06Rn%2B%2FJOsSEMY7C4gUqd9zCSroHPCU6azotqkLuStgN6jSUhMCXOrJ4W6JbfHMf4NJF1D1XGF7UqVRv7WNR9lXBJXgJV4CeTADbsf364RPyXTk7cYdARPtwrHFzQUCOw02DRnVV99GYrSNajWKSk0VDIfaUKiMXtPTQp23%2BZTUFlp9KLVXRoCUUO2%2BCkGPJXqqI%2B8d91QoXkB87h9khEi11mT2U1YuO2qtgBsWLHCznG3lDywHSUqdXGpxPadsqoclpcPvYJB1C8236ppSXbwrzpENUg2mzoCTVLO7jc5fEVeeOr08QqxMfk0TSQyI1GZUNeFgjgFyDyGSzK5TkimvaN1aDM%2Fh6ZmfDbjZd%2Fg%2FGapZ2JponUh4qXXhhNKMA%2BrCXZxhbA4RIqJPsSnqpiOd9Q5PegEEtV%2BF7hAevFJ%2BsjXXHsc%2FLe7MN2r08EGOqUBzIoHlSYvdYMT8RTCBMSLdDzJGKxCWKZ%2B%2BZd2gDemnM9AJ0tY1VKQDpSu9Lpoi3rhlvDE%2BR4g8pH1SrHWb%2BTIbktooX%2Fdwjt1ACp6rOMW20Ier%2BBqzXVLsxcNTtKrT%2F2gLjrpz0%2FmyxvOt4foszDVtx81Drr8ePPLKMjraSK03G26YwCHJQL3bTlxL51XqLWdqAC9ekEtkVTiuVIHlyUV%2BzugLqgr&X-Amz-Signature=d1e2537962ed2ada9672da02015a0242bd2714c2c5ae09cb27f2b4fa9381127e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
