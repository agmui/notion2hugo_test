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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM36DDZX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCX7AfKfj0FT3NM6RHz%2BwnU%2FOnLbNvfewRsX3YBLIJVyQIgffRVZ8GFkzN1bwLvfk5%2BJfbUxFmbpDmFnyiPrIbL424qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvTAzB%2F%2F%2BEP1rWk%2BircA2NujeWhDWz1FHZaySMWbQxv43mzaYmxxQ8KHscdbvZvO7LbkDiEwx0cPYR4X%2Fts8OEcCcJNazdVo4VqJ%2BfxzisK%2FndNuFy0ui%2BW8B2V81pUhPg4%2F4zv9Eg3pKExFtOu%2BAhV0O%2FvIoi8J2wjW%2FIcaq94GHeZWlOtU7xmbaNzVvRLMFMaoo3k%2FQ%2BA0sswr9Xd082rLhMuWWi9X78koZPbFFRqGeL3r9QEunMW4j6sVG6uMQi94lGcs1bzD4o8dbkoCbJo29Nx1BE11JwCTO5k5BGPGRJGrA2vK6A8gmtMEJDtRDvQZ%2FeeGcgOXw6TEiIYtt%2BT66aZ7ad%2BFBAHSpo2IkCYooc%2B6lEeP0MpVOWTTUS58gtMw5qhzvZCsMRZs07adV6WRhuJHZ4kuv%2BQRlggIhTdCxMm58DeZLERVzsJ5rgeayYim8MJafCX16mmCdIfhud7502np0q00U%2BWKxjKTde2sRj58ki5EN%2FTIlzMUUJjxIBpC7FIn8LUDD2toi%2FUwGxeTocGMC%2BfpbisgbAKGE%2FAwtc1zV0XNzGzvxijttkKcrEC3SroPAjeFbTljslbEgQQgjZNQ4rswc%2FhMA4UBRcqnUUsk%2Fw43E5aOdbCoofF7DTx7x1u1TQ6jAXnMO3AuMEGOqUBIZ6LWRteSSyv8VCY0aZBBPaybNPAfEXzYu7aFE7mCDYN%2FRpmQknjEN5AzQfPAg8WhbtOJlycrtfa8NKpxSg0hI71jvTMoHeCXFRouSg5UboKfX7ftbXaiVqbSIm0fyjnpj4Cj%2BEVEjvc3fNVJH6xi00D%2B9sVPLE4S44jd7fxkOoeR2PiFX%2Fhf5%2FhrqaMRZZr15JeBW8MAtQ%2F15xxNtt6xeD4r9Y5&X-Amz-Signature=8ea5f5ad7005a75039fbad442e9295567389f905a4581878d696fc9035355e76&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM36DDZX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCX7AfKfj0FT3NM6RHz%2BwnU%2FOnLbNvfewRsX3YBLIJVyQIgffRVZ8GFkzN1bwLvfk5%2BJfbUxFmbpDmFnyiPrIbL424qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvTAzB%2F%2F%2BEP1rWk%2BircA2NujeWhDWz1FHZaySMWbQxv43mzaYmxxQ8KHscdbvZvO7LbkDiEwx0cPYR4X%2Fts8OEcCcJNazdVo4VqJ%2BfxzisK%2FndNuFy0ui%2BW8B2V81pUhPg4%2F4zv9Eg3pKExFtOu%2BAhV0O%2FvIoi8J2wjW%2FIcaq94GHeZWlOtU7xmbaNzVvRLMFMaoo3k%2FQ%2BA0sswr9Xd082rLhMuWWi9X78koZPbFFRqGeL3r9QEunMW4j6sVG6uMQi94lGcs1bzD4o8dbkoCbJo29Nx1BE11JwCTO5k5BGPGRJGrA2vK6A8gmtMEJDtRDvQZ%2FeeGcgOXw6TEiIYtt%2BT66aZ7ad%2BFBAHSpo2IkCYooc%2B6lEeP0MpVOWTTUS58gtMw5qhzvZCsMRZs07adV6WRhuJHZ4kuv%2BQRlggIhTdCxMm58DeZLERVzsJ5rgeayYim8MJafCX16mmCdIfhud7502np0q00U%2BWKxjKTde2sRj58ki5EN%2FTIlzMUUJjxIBpC7FIn8LUDD2toi%2FUwGxeTocGMC%2BfpbisgbAKGE%2FAwtc1zV0XNzGzvxijttkKcrEC3SroPAjeFbTljslbEgQQgjZNQ4rswc%2FhMA4UBRcqnUUsk%2Fw43E5aOdbCoofF7DTx7x1u1TQ6jAXnMO3AuMEGOqUBIZ6LWRteSSyv8VCY0aZBBPaybNPAfEXzYu7aFE7mCDYN%2FRpmQknjEN5AzQfPAg8WhbtOJlycrtfa8NKpxSg0hI71jvTMoHeCXFRouSg5UboKfX7ftbXaiVqbSIm0fyjnpj4Cj%2BEVEjvc3fNVJH6xi00D%2B9sVPLE4S44jd7fxkOoeR2PiFX%2Fhf5%2FhrqaMRZZr15JeBW8MAtQ%2F15xxNtt6xeD4r9Y5&X-Amz-Signature=9d43b3279db54ffa125bdc2829b58e66693be5cb4c2b8ac28443945eb14cae02&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
