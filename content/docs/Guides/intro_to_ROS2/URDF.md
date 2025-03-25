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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBGFX5AN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjPmeUg6s6cTaPX727kxhaHxUjJMmtH30WT1CAZGbIpAIhANpXSO1kyt8bHp%2Fa2S8KMD7DYBNkikPxGNR6KodBo5cyKv8DCBoQABoMNjM3NDIzMTgzODA1Igxdx7OUiVo%2BO06QrIAq3ANEI5O32%2Bazt1idknNnWp9us5NcrOWTIE66kpeDqEY9JIOdYznkm4g1l0iXV1tpoexUK9JkrNUEzPjV2uWpFOMHEvEebZdrkISB4790AnoOlPGGqPBe6HkPZO4KtPskmA1AS6mKC9mtkuXIxcp0iomUtuW7gCSHPfY4ZQgC15zfLPRghiZx1qjJb7aB31w8AdgRY6JjAALEfspiFBb7wfhZ%2BrTzJcbn5L7fklIP0ZDlVaPJT5ev5e07J8cw%2FwKuGib3Z8ReZCIsUPMSjT6zk%2BwlKDg%2Bm95w%2FBnLP%2BxVHz3%2Fpeeq8xmbhRTyz19w7TAYENzV3TlVLBl8Yx%2BBUELAs9a4jWqOA2qp4r%2Bl6AQGWJXieqRH8zXAksbx%2FYgXHdRv3OVdrI0fMmY%2B2X7jGM65nJ93OYsW4bUQoxPQoo2iMUR2I%2Bh823GtcNhSQV0WYCzXvlPpBcQH14Hz%2FYaoS5DnfTtF8zWnN6fDeA9qhRCXq7cHk5kPk1u1UmWtXPmBovlIx63zGtSr%2FE7ScnsuX9mdKLVE4eW0VX%2FuVdrELFLO2WgBDm195006PVxHpSAZ0QRksWwLylwrx5QSHyrxE4VKwlA80NWDhUSGfedPZjGfWHul%2F9m1s3NmlFt2BlTyRTCCxYu%2FBjqkAcKskAZx4YaVhjLZepsX57ld27QETok2Zu8eDVQLf9fL7BQolyRYOs5TOQbkEsIgP1rOLcBtQK1%2Fw6GvlEc7StulBl%2FglD%2FWaLA74NHIob%2BmGjdapv2k5%2B4ZsnUb3w6ljKrllln1WrRyigmXvy7uQnAu7lyLuz2WEIyB0Ixeh2SNvlpPz2Dxl6%2FjFps65Uvb86XYOkHlkER5cfZlHAKRS5cb6RVd&X-Amz-Signature=b90259717a0762623e2d6210e0d2b6fb77746d62c1cab92630db5b19f905a02d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBGFX5AN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjPmeUg6s6cTaPX727kxhaHxUjJMmtH30WT1CAZGbIpAIhANpXSO1kyt8bHp%2Fa2S8KMD7DYBNkikPxGNR6KodBo5cyKv8DCBoQABoMNjM3NDIzMTgzODA1Igxdx7OUiVo%2BO06QrIAq3ANEI5O32%2Bazt1idknNnWp9us5NcrOWTIE66kpeDqEY9JIOdYznkm4g1l0iXV1tpoexUK9JkrNUEzPjV2uWpFOMHEvEebZdrkISB4790AnoOlPGGqPBe6HkPZO4KtPskmA1AS6mKC9mtkuXIxcp0iomUtuW7gCSHPfY4ZQgC15zfLPRghiZx1qjJb7aB31w8AdgRY6JjAALEfspiFBb7wfhZ%2BrTzJcbn5L7fklIP0ZDlVaPJT5ev5e07J8cw%2FwKuGib3Z8ReZCIsUPMSjT6zk%2BwlKDg%2Bm95w%2FBnLP%2BxVHz3%2Fpeeq8xmbhRTyz19w7TAYENzV3TlVLBl8Yx%2BBUELAs9a4jWqOA2qp4r%2Bl6AQGWJXieqRH8zXAksbx%2FYgXHdRv3OVdrI0fMmY%2B2X7jGM65nJ93OYsW4bUQoxPQoo2iMUR2I%2Bh823GtcNhSQV0WYCzXvlPpBcQH14Hz%2FYaoS5DnfTtF8zWnN6fDeA9qhRCXq7cHk5kPk1u1UmWtXPmBovlIx63zGtSr%2FE7ScnsuX9mdKLVE4eW0VX%2FuVdrELFLO2WgBDm195006PVxHpSAZ0QRksWwLylwrx5QSHyrxE4VKwlA80NWDhUSGfedPZjGfWHul%2F9m1s3NmlFt2BlTyRTCCxYu%2FBjqkAcKskAZx4YaVhjLZepsX57ld27QETok2Zu8eDVQLf9fL7BQolyRYOs5TOQbkEsIgP1rOLcBtQK1%2Fw6GvlEc7StulBl%2FglD%2FWaLA74NHIob%2BmGjdapv2k5%2B4ZsnUb3w6ljKrllln1WrRyigmXvy7uQnAu7lyLuz2WEIyB0Ixeh2SNvlpPz2Dxl6%2FjFps65Uvb86XYOkHlkER5cfZlHAKRS5cb6RVd&X-Amz-Signature=e195e71726aa0e9fcdac005c707d0d975ca4a0eb8decdb4b428ab93860a06a76&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
