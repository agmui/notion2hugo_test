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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYDHIAVI%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyhbm4ir4sRxo%2FrTF%2FIcCQv3ZlCSoK1vtmd8dfUSAcPAiEAqsDF6bJflECOLZaoqXY918ny4Vm7Z2GYyas24%2BsYTSgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHnvTpNntTQiEM8SVCrcA3FUSKcDPkRW2ApcMIEijvJU1iCscMXPDw4FCsFr3SfllLcYU3Zx3A7sRvEYTWXr4e3yEODiJ1gtaPI3hTxFzCTBKlBXblwfF8T%2FC7tfES6%2BFJIK1OkqcSD0ZYdDx91FaKF5rCIMz43N4O4OMrwhJdbuTv%2Fk1K7tgdggLBsI8CevwZJl%2BlFhXtGo%2FLFjmZUmcWRthg2rs8a%2FfT7JNOgmtmcuAKzIylGWlykwnq8rBjkqryTMf%2BVBLJv31Xu7QUJyk%2FYWH2xvk2bXNsEbHp7ZPjDG8yf7ov0d7BpwLkDxcSOkchWqRUgqAuEgwPyM2PQOcwMo4Q34bBN7oNy7fr%2BcNhTlbKT2w98WsdIb5WGRV84sOrG6po%2B6VZ41qATVBYypIheHM8e7EowUSTl7PlmkOBa0qiUKOJegcFssAM8be%2B2Y90LElBfGuBmhRiYq%2Fp%2BqZzVgYiI%2B1Q7A55LsdHNqo98oFzIxvP%2B2hLYNTWIK94QLwgmo57OfxK5w%2FNQh6PMfgPaeX6oRQWlRZJy5cFoJnKmwOTU5yPqzML%2B8gJN2Hhyjx6lt9pKdYDP15zf7RUDlHnR0jjz1m4wQ4abdYb6pRfMbw6xkar1g5D9zdnYn1d0fF9YM0nH9voVP4J5XMKu%2FtcAGOqUBdFkKN5iMZ8JX98cwvyv4Ae14%2FY8%2BLZ2INtTo0nFNgEt%2BDfInskriHG1p27%2BwkGaQnbRgFLfQyEf21SJuFGJieribLT2hxoDKu4aGPVZLS5hQHkG%2FjESZsDM42YNoIQ0Riv7N7VZKNJoG2O7SL1JY3Q7qO1BVG0AdIAV%2F8ItGNnhejfb4lAEMhIjlGKGEYQhyFCqfMcMrVxf4vbjBmMaxBbIs4zW0&X-Amz-Signature=a008277c8143ab2cdb95f585eab0551c33fd868427581a8af6ee6deff31a0130&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYDHIAVI%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyhbm4ir4sRxo%2FrTF%2FIcCQv3ZlCSoK1vtmd8dfUSAcPAiEAqsDF6bJflECOLZaoqXY918ny4Vm7Z2GYyas24%2BsYTSgq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHnvTpNntTQiEM8SVCrcA3FUSKcDPkRW2ApcMIEijvJU1iCscMXPDw4FCsFr3SfllLcYU3Zx3A7sRvEYTWXr4e3yEODiJ1gtaPI3hTxFzCTBKlBXblwfF8T%2FC7tfES6%2BFJIK1OkqcSD0ZYdDx91FaKF5rCIMz43N4O4OMrwhJdbuTv%2Fk1K7tgdggLBsI8CevwZJl%2BlFhXtGo%2FLFjmZUmcWRthg2rs8a%2FfT7JNOgmtmcuAKzIylGWlykwnq8rBjkqryTMf%2BVBLJv31Xu7QUJyk%2FYWH2xvk2bXNsEbHp7ZPjDG8yf7ov0d7BpwLkDxcSOkchWqRUgqAuEgwPyM2PQOcwMo4Q34bBN7oNy7fr%2BcNhTlbKT2w98WsdIb5WGRV84sOrG6po%2B6VZ41qATVBYypIheHM8e7EowUSTl7PlmkOBa0qiUKOJegcFssAM8be%2B2Y90LElBfGuBmhRiYq%2Fp%2BqZzVgYiI%2B1Q7A55LsdHNqo98oFzIxvP%2B2hLYNTWIK94QLwgmo57OfxK5w%2FNQh6PMfgPaeX6oRQWlRZJy5cFoJnKmwOTU5yPqzML%2B8gJN2Hhyjx6lt9pKdYDP15zf7RUDlHnR0jjz1m4wQ4abdYb6pRfMbw6xkar1g5D9zdnYn1d0fF9YM0nH9voVP4J5XMKu%2FtcAGOqUBdFkKN5iMZ8JX98cwvyv4Ae14%2FY8%2BLZ2INtTo0nFNgEt%2BDfInskriHG1p27%2BwkGaQnbRgFLfQyEf21SJuFGJieribLT2hxoDKu4aGPVZLS5hQHkG%2FjESZsDM42YNoIQ0Riv7N7VZKNJoG2O7SL1JY3Q7qO1BVG0AdIAV%2F8ItGNnhejfb4lAEMhIjlGKGEYQhyFCqfMcMrVxf4vbjBmMaxBbIs4zW0&X-Amz-Signature=d656abf49bc1e76c026c72101b84966e5712d728216cc0e16d071a728f33647c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
