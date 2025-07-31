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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622QRCPUB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGBdWXFX0WB9MOcM3E4ZlE3T2ndwwUZIUOKNA8Qwrh6AiBgv1tsOAGM80G%2BzG6RYoabJ%2B9RDp62arlLQeGYRtsjIiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMScy3ADJ%2FI1c8AJUuKtwDuWV7jw%2BPfgEKnU72%2BLtE95eCZc30GEPIgC06J5gUvAZ%2F2OVQknkXZGqj6sDJigiUUWTZ97dQtUagLvA3MhcZiMsNqsfnxpE2k0GwEj6xSIQ9ZA7RjvVe%2FFMKravKYITW5%2FtZ8cd85SjGmikVCNBR4Luhc8lsMPIWRZu8SYqrMgDvHc5AN3ha1HTP8iNcn30xAyon30BbCodLHfXDhWx%2F%2F%2BT6BVAFKrsJe1QFmLTGkaP2rLgHa%2Bjm5PALuWOx9OzwpsXC4TplcEgJt8PEPSxo3i1q7F%2F4C1R2wn0%2FFVXnfqfvvgICPWbTwGOXXO1wt9aUKTcz7pckSCbLRYS24AtGSbdIQ5TwiYx%2F6dgLHceT1jw8ZDcSnij3PTC2tf8Q6No8VbQl3txaaOSP66XoChXoiEysYf1WT641jH%2Fqzp2q%2FjsqbnTCTWpEixXV2e9MeIT5HsapCgTzt7xs80TS9X%2FSHnbfNje6iKJ4MIPWbgj%2B4sDomVHoEk1R5PLO8PTFK8eJ83PpMdFq%2FnMK05RtCrljiNmRKCphBuXNo4EvG0rTRlGSnpjODeuE2%2B9lAb6IiPY2zitSdNGeQ2PQxq%2Fl4JbfOrIBGYPMsQuzlAS8IsD5JixVIsbsm4ZwFR1BpLQwosyvxAY6pgEPbfa0bFzQYNgr638WkDl2WVvogyaY472l6wHmNmxy4S%2FHw42x%2BKcItljKG1Yipmp90qb%2B9rLa7Fn0OaxaNLeQJ%2F9NNN3uZOJyxkldcZXSc4BOfyQVDtslJy2lCyq24CQ8INEtZAxmyNMjn5XoPqivECIGPxkG51cdWgY4NI%2FYer2LD5cjKTG3g857HDrzojgWbni90BULsnAcl%2FJ217hmOjuZvu5N&X-Amz-Signature=01da1f2a2951a012590b61a88d1058ed83a33648cef3104d7d0eb08fc176145f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622QRCPUB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGBdWXFX0WB9MOcM3E4ZlE3T2ndwwUZIUOKNA8Qwrh6AiBgv1tsOAGM80G%2BzG6RYoabJ%2B9RDp62arlLQeGYRtsjIiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMScy3ADJ%2FI1c8AJUuKtwDuWV7jw%2BPfgEKnU72%2BLtE95eCZc30GEPIgC06J5gUvAZ%2F2OVQknkXZGqj6sDJigiUUWTZ97dQtUagLvA3MhcZiMsNqsfnxpE2k0GwEj6xSIQ9ZA7RjvVe%2FFMKravKYITW5%2FtZ8cd85SjGmikVCNBR4Luhc8lsMPIWRZu8SYqrMgDvHc5AN3ha1HTP8iNcn30xAyon30BbCodLHfXDhWx%2F%2F%2BT6BVAFKrsJe1QFmLTGkaP2rLgHa%2Bjm5PALuWOx9OzwpsXC4TplcEgJt8PEPSxo3i1q7F%2F4C1R2wn0%2FFVXnfqfvvgICPWbTwGOXXO1wt9aUKTcz7pckSCbLRYS24AtGSbdIQ5TwiYx%2F6dgLHceT1jw8ZDcSnij3PTC2tf8Q6No8VbQl3txaaOSP66XoChXoiEysYf1WT641jH%2Fqzp2q%2FjsqbnTCTWpEixXV2e9MeIT5HsapCgTzt7xs80TS9X%2FSHnbfNje6iKJ4MIPWbgj%2B4sDomVHoEk1R5PLO8PTFK8eJ83PpMdFq%2FnMK05RtCrljiNmRKCphBuXNo4EvG0rTRlGSnpjODeuE2%2B9lAb6IiPY2zitSdNGeQ2PQxq%2Fl4JbfOrIBGYPMsQuzlAS8IsD5JixVIsbsm4ZwFR1BpLQwosyvxAY6pgEPbfa0bFzQYNgr638WkDl2WVvogyaY472l6wHmNmxy4S%2FHw42x%2BKcItljKG1Yipmp90qb%2B9rLa7Fn0OaxaNLeQJ%2F9NNN3uZOJyxkldcZXSc4BOfyQVDtslJy2lCyq24CQ8INEtZAxmyNMjn5XoPqivECIGPxkG51cdWgY4NI%2FYer2LD5cjKTG3g857HDrzojgWbni90BULsnAcl%2FJ217hmOjuZvu5N&X-Amz-Signature=da6aeab71520a379bb34c7f8f66a60692c5559bd5aafcda7d6799a6a27477e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
