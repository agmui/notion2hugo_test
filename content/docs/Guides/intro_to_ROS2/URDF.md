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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHP4TZ3O%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLYjUBAnrpG7C5a9%2BxVDAYI5kzt%2B2XvAdUiH66GwdtbAIgCYk5jPhZhdX%2BD%2F4dn3S4V7nRkyG1nAAnOy8PqfOpVusqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxcgIz3pM06LxH0dircAwBOzWfyF4TWzXsHrY1XXywBafhsoCvcCmWxB%2FMXK%2Bmh2GsGDYG1b6qpoNWBMq6e4JxRWJRrVl6qoy26hbxrTeKD%2FB1J5YT2jGLgdTqOLyGCAPH2TwQu7Bs0J%2Fc1GKKVbd3XtwUPj4xJ%2BhEiET71xHJK5uu7JobN7Fcx3Y52A0AmL1RN4FVIIhJedr85he5oen%2F0UNv43lTgAX7UAeQJ5JU4NnFVigaV2JhZmbiriNLKkR7zTVDL6rk0lUpC215clwQOtZt3aUeZMXArEyocX4GeonOmWccKQ7XglXa9lirtgpdQIetXlsw8Ez2ck5E5za0pMagA61897U6H9%2Bc6ALV3gEv0k13oMMjZtRnjbx8t2xlVRuS3llxEn3zHcitdp%2FqJluH9OxMO%2B0sfklzzclAN4Y5bxiEpNT9CJskedE92RDztcVDGGlPKXARxR%2BpQzP5yILvE371pN8cHN%2BBF4s3VFR7DblWxWhXzCTMy%2BXBbgUg%2FgTMQREjJgEZac7vXpCrw%2F%2B2z%2BwTiWjK81v7PRzxUaNBv%2BAW6dNewauweRt8SLpGf5k7djQBKHzR8x%2FXk0y20IFCrZo9EmfIJAX92W9l2VRDuNc2Zn9EmSmtrYwCaY%2FtOipW6TeLHZiPiMKfJpMIGOqUBH2UuSSuMcxd3tCnI3e%2FoK8qtaNwvsy%2F%2FfRQEDHFUMohEGpz56e5sQesin%2FxyKmPcdkZdD%2Fao6fUYEGxbiQCl%2FXHW0t%2BibYi5XQPX7ilvefk%2FxiAAzffXy5jnNncWkGS7LqSh%2BastPxL8p6so%2BdO86SfZGuKaXLQDI0PrdXiMGlCs5OVMCdhKiw0arrR4uK2tvL0FijwaLsOE18h1v8prvJF6tOcv&X-Amz-Signature=f906d574141d7291829618db458f265ec6182807c577e91ae87828dbdbd9cc85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHP4TZ3O%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLYjUBAnrpG7C5a9%2BxVDAYI5kzt%2B2XvAdUiH66GwdtbAIgCYk5jPhZhdX%2BD%2F4dn3S4V7nRkyG1nAAnOy8PqfOpVusqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxcgIz3pM06LxH0dircAwBOzWfyF4TWzXsHrY1XXywBafhsoCvcCmWxB%2FMXK%2Bmh2GsGDYG1b6qpoNWBMq6e4JxRWJRrVl6qoy26hbxrTeKD%2FB1J5YT2jGLgdTqOLyGCAPH2TwQu7Bs0J%2Fc1GKKVbd3XtwUPj4xJ%2BhEiET71xHJK5uu7JobN7Fcx3Y52A0AmL1RN4FVIIhJedr85he5oen%2F0UNv43lTgAX7UAeQJ5JU4NnFVigaV2JhZmbiriNLKkR7zTVDL6rk0lUpC215clwQOtZt3aUeZMXArEyocX4GeonOmWccKQ7XglXa9lirtgpdQIetXlsw8Ez2ck5E5za0pMagA61897U6H9%2Bc6ALV3gEv0k13oMMjZtRnjbx8t2xlVRuS3llxEn3zHcitdp%2FqJluH9OxMO%2B0sfklzzclAN4Y5bxiEpNT9CJskedE92RDztcVDGGlPKXARxR%2BpQzP5yILvE371pN8cHN%2BBF4s3VFR7DblWxWhXzCTMy%2BXBbgUg%2FgTMQREjJgEZac7vXpCrw%2F%2B2z%2BwTiWjK81v7PRzxUaNBv%2BAW6dNewauweRt8SLpGf5k7djQBKHzR8x%2FXk0y20IFCrZo9EmfIJAX92W9l2VRDuNc2Zn9EmSmtrYwCaY%2FtOipW6TeLHZiPiMKfJpMIGOqUBH2UuSSuMcxd3tCnI3e%2FoK8qtaNwvsy%2F%2FfRQEDHFUMohEGpz56e5sQesin%2FxyKmPcdkZdD%2Fao6fUYEGxbiQCl%2FXHW0t%2BibYi5XQPX7ilvefk%2FxiAAzffXy5jnNncWkGS7LqSh%2BastPxL8p6so%2BdO86SfZGuKaXLQDI0PrdXiMGlCs5OVMCdhKiw0arrR4uK2tvL0FijwaLsOE18h1v8prvJF6tOcv&X-Amz-Signature=277fe011306258f4a12edcaecb1265d206715d5d76dcce1a0bd11849ee6817b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
