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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5WEWHV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCXaCM7w%2BlUIEXjvH1oBIBwTiFOpjwUVpX3Rbf8LUHqVQIhAPhyTnbFKewQHEEpaVKHdTIoD4b%2FnfxS8%2BTQ12hsZomGKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPaBP4iuoGJqXBPD8q3AM7jnQ2m%2Fl8aEI%2F6PIIRAhAelftme6GRjSDTYGYRTAaRpv8MCV%2B%2BSE4zKVpbJ3uMsEA%2BcpKR8dm02T56w6T%2BzWofi101SU4Z5ROXcHnbw4bJ2RfpNPj1FyMoBy26Abu9F9igD07dKCOjxwUoMnehuNHGJbqq9R4J7PZGLEYOP27CTndKX8J%2FzUZSY0OyzzoXuqMrGaiCgnU0sBihRMqsPEfYa7ERHBm5umtyDmc2KVFY5jNV%2F4uyN%2FymaZoXTRnllMgCPAiftZnYOR4L48pwCx1gAOYg%2BN9kzsS3Q%2FmAVWZvvz10BcljBevm%2BvdAluLrSx64ofqBogBXCMu5bcEiUnubAEEabXXJAusxkZA%2F1qjFlibYqmdx2aAQKuQ764Y%2BmBCSoUcgBzwSL7TA%2FBZcGw%2FFQUiQQxF0W44FCFxT1MjIV%2BAmbDkO098GgMot4MUa9HQ3aUaExa8MPEpFw51XqwwF0CVHqh3eK8vBE76p87RIvWnSVsGny6nCtVd98j8P4IMwx5yw%2FbwvqSPjVjEInXCGZDdVkFINkt%2FQU%2B35%2FzCJXMH039Za2mFbBCEuCXNYtsWYot%2BARi%2B%2BI7kAkvpth48p9N8FKts5E5vPAak9CURFXCm%2BKRQdyzHFjPYNTChwr%2FBBjqkAb%2Fy0U6qAlPnDkJ4SCCnMqt0KahEZeRUy7sw5JWffjIyH1EqgYSYw8n5HcoYFudUk9WBb%2FqWaHmoB%2FEYee6iXumpr9hZY9bnf1%2FBa4HNDTZB8fIYr2dkpMckCtL56t8i29LvBhKHhH1ZsSAhYnatSYPaOfDZyNXKGC4MBml8L7RC0Kh68myDFckzMzEQ%2B9lloFXGZ0cxj%2BfoVkOUuXRw%2BAPe4THa&X-Amz-Signature=ea67c7d469d3292b29ab736262ae59f4ea318d049d089e62d0e4b17425c4df1b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5WEWHV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCXaCM7w%2BlUIEXjvH1oBIBwTiFOpjwUVpX3Rbf8LUHqVQIhAPhyTnbFKewQHEEpaVKHdTIoD4b%2FnfxS8%2BTQ12hsZomGKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPaBP4iuoGJqXBPD8q3AM7jnQ2m%2Fl8aEI%2F6PIIRAhAelftme6GRjSDTYGYRTAaRpv8MCV%2B%2BSE4zKVpbJ3uMsEA%2BcpKR8dm02T56w6T%2BzWofi101SU4Z5ROXcHnbw4bJ2RfpNPj1FyMoBy26Abu9F9igD07dKCOjxwUoMnehuNHGJbqq9R4J7PZGLEYOP27CTndKX8J%2FzUZSY0OyzzoXuqMrGaiCgnU0sBihRMqsPEfYa7ERHBm5umtyDmc2KVFY5jNV%2F4uyN%2FymaZoXTRnllMgCPAiftZnYOR4L48pwCx1gAOYg%2BN9kzsS3Q%2FmAVWZvvz10BcljBevm%2BvdAluLrSx64ofqBogBXCMu5bcEiUnubAEEabXXJAusxkZA%2F1qjFlibYqmdx2aAQKuQ764Y%2BmBCSoUcgBzwSL7TA%2FBZcGw%2FFQUiQQxF0W44FCFxT1MjIV%2BAmbDkO098GgMot4MUa9HQ3aUaExa8MPEpFw51XqwwF0CVHqh3eK8vBE76p87RIvWnSVsGny6nCtVd98j8P4IMwx5yw%2FbwvqSPjVjEInXCGZDdVkFINkt%2FQU%2B35%2FzCJXMH039Za2mFbBCEuCXNYtsWYot%2BARi%2B%2BI7kAkvpth48p9N8FKts5E5vPAak9CURFXCm%2BKRQdyzHFjPYNTChwr%2FBBjqkAb%2Fy0U6qAlPnDkJ4SCCnMqt0KahEZeRUy7sw5JWffjIyH1EqgYSYw8n5HcoYFudUk9WBb%2FqWaHmoB%2FEYee6iXumpr9hZY9bnf1%2FBa4HNDTZB8fIYr2dkpMckCtL56t8i29LvBhKHhH1ZsSAhYnatSYPaOfDZyNXKGC4MBml8L7RC0Kh68myDFckzMzEQ%2B9lloFXGZ0cxj%2BfoVkOUuXRw%2BAPe4THa&X-Amz-Signature=4f67986daae8a5d2a6b336b875587a647f38276131367a55567d403f3c7f4239&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
