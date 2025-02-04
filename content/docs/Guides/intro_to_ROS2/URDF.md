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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BYXLH2F%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGIK9MUeiIyFvNeLxi65glDBm0hK1ofvLSyrmTBXfK2eAiB4TzPvSwQuc0kAgwMf1ctj0NqDVnP%2FayFCydkp6I%2F1USr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMusJpH696RKI0EEW4KtwDTFMEi3XIzus9DdnvDbYlXP4SDfgPPKTcJNa%2FFUb%2Bx21wuC9vqcrsY83sZUyeBpdhL5WKVL2wh8ZuOitj%2BHlKZh3JIDkJPe%2BWWYgSCNX4Xs6BYO8MyfZP1DKyOvRWNqjV2NAHKK%2FrzOVU7pMFC5o%2Btmj9zpPoehuv7MO6jl9PHntpWK9KJDClMrPlv%2B%2FV%2FCX7biSkdMn8lPpUxLMg9RMlqNXfjv9J1ygDAdYH5JtYMNDgd5IClFapMpS%2FCgmJsxzDPNKDaDNMhcQnBGtBBoTpMnn847UrK3PCuciHoXO%2FPEp8jTgxOraj33jaicNClB3%2FLK8obr3c17PTDOLolxluzAzC0zKi06Aou3%2BJ%2F3%2B2dTeKyWKW%2BI02JQsB%2FLcvbEWikDsE77By7HHxd6AItgeQ7Q56AA0dameqacTDMBWFbT1eutn7KA2PcCDNB2bjLeXjoY6%2BK0KqRzu1N7YThc1bJUmvgb9saKqVSmsjGjTMBLZMteBHV8GorY4squ%2B89M7dzZPQhmOfAiLwRUYjfHG%2BTZimxVWPHw%2FTcQL%2Fk%2FNp5ehG5Rw%2F3fK8IM%2Fmkf%2BWmD9dBawIc8UUDXcuYvTIXnLuDynnIxzQXYSOhClJau0j7a2X14gWZtIquOQ3LmQw0Z%2BIvQY6pgFo9Bllq54wNC%2FTI4M2BCYS%2BYD3i1WWklFQQybUvyIR1fUqgwpyW%2B1nodHxBWP%2FvjG4uU6S0I2uUk5gyKqQvinCK88RgQ2kQsDaHEDzL%2FUs78vlIALh6g3Lsdj5odhsG1uVwmE7zKIyAnUFhPk1U6f9zPTiBy5mph70kzH%2FBxgK044xcqcRh1gvzTCqKQZX5WtMuli59D4kk4o3561Be2PjY8k6nr%2Bj&X-Amz-Signature=2894fddc4483fc042659eba82771bb9017c54457d1dea7901671b149526a10ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BYXLH2F%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGIK9MUeiIyFvNeLxi65glDBm0hK1ofvLSyrmTBXfK2eAiB4TzPvSwQuc0kAgwMf1ctj0NqDVnP%2FayFCydkp6I%2F1USr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMusJpH696RKI0EEW4KtwDTFMEi3XIzus9DdnvDbYlXP4SDfgPPKTcJNa%2FFUb%2Bx21wuC9vqcrsY83sZUyeBpdhL5WKVL2wh8ZuOitj%2BHlKZh3JIDkJPe%2BWWYgSCNX4Xs6BYO8MyfZP1DKyOvRWNqjV2NAHKK%2FrzOVU7pMFC5o%2Btmj9zpPoehuv7MO6jl9PHntpWK9KJDClMrPlv%2B%2FV%2FCX7biSkdMn8lPpUxLMg9RMlqNXfjv9J1ygDAdYH5JtYMNDgd5IClFapMpS%2FCgmJsxzDPNKDaDNMhcQnBGtBBoTpMnn847UrK3PCuciHoXO%2FPEp8jTgxOraj33jaicNClB3%2FLK8obr3c17PTDOLolxluzAzC0zKi06Aou3%2BJ%2F3%2B2dTeKyWKW%2BI02JQsB%2FLcvbEWikDsE77By7HHxd6AItgeQ7Q56AA0dameqacTDMBWFbT1eutn7KA2PcCDNB2bjLeXjoY6%2BK0KqRzu1N7YThc1bJUmvgb9saKqVSmsjGjTMBLZMteBHV8GorY4squ%2B89M7dzZPQhmOfAiLwRUYjfHG%2BTZimxVWPHw%2FTcQL%2Fk%2FNp5ehG5Rw%2F3fK8IM%2Fmkf%2BWmD9dBawIc8UUDXcuYvTIXnLuDynnIxzQXYSOhClJau0j7a2X14gWZtIquOQ3LmQw0Z%2BIvQY6pgFo9Bllq54wNC%2FTI4M2BCYS%2BYD3i1WWklFQQybUvyIR1fUqgwpyW%2B1nodHxBWP%2FvjG4uU6S0I2uUk5gyKqQvinCK88RgQ2kQsDaHEDzL%2FUs78vlIALh6g3Lsdj5odhsG1uVwmE7zKIyAnUFhPk1U6f9zPTiBy5mph70kzH%2FBxgK044xcqcRh1gvzTCqKQZX5WtMuli59D4kk4o3561Be2PjY8k6nr%2Bj&X-Amz-Signature=5264faee90ba75932213cf4cf6e63d408aad4b1129ad30c3dd7397af1076c610&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
