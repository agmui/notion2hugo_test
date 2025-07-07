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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L2IUUO2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCICMv53Mw2OpONTP%2Br13DjoL57PDJRXADFIAO6OQOh6P5AiA7hZt9eoFmW4gButnImWIWV5%2Boy7ZTBuTfGGklk9N6Kyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMIZed8bdoQSFSp3d9KtwDAWZVeL63fcEza4xOcfIz4SOGnkTb4FuTJWA4hbZwuuioclYlP29cPZ4fDQ3QqLmBNlddAfKF4WDtqx8W8%2BFSUVlQokEz32eXdnQZhCAtB%2Bfz1oEJdgekMfaACMcvKDSbo9uEe6eaQVgm7Mx7P4zdDIbyXDgVvMBKgZ7x4eCQW3vsGxvq2qOuivsaIZttpe6YrcsH11SweXxx%2B%2BQ0QvVPBKwHJnCN0o%2B%2FiaTLDmsAtCj5VJX8ih0sLc9YUVwFTkSN5U6sgO4mV4cutXEO%2FVEIZIE8hC1ws0J64Dt62tNfI3ec4ry7spYr3OT1QVyzeas%2B7BoTPv3h0L2OUkhYimDCgoflFpJKvop2MxATwyHOXZGGTgZphWuKrP%2FfO1qzHicnvXkNssF9%2FFdP5wS0p8M8G6ZyfxM%2BLiEy485TF1QGmErLzztR1AuN8H7KM4hiJ9J%2F%2FVj7f9dj0Kte%2B7PtlYS7ozRd2qjDh2jL5juF%2BQBxsQlxd%2BwGH2EiI%2FPYDt7NVS7P5%2FNESbHK8kfqNLvya5A3qgyICavewni2sF2Z8QKnu6IX%2BBi1TuU4M%2FDpG7iI%2BolOlf%2BajNJ5PMgC%2BKVEE5kbj1ip3RYbrTatkEsuNy6OLYyXLlkN37OW7SJ15YMw4reuwwY6pgE9DrkwsNtv29thyoM8WIIsSrOglNep6E9u1AtcYLQWtXinAhVykEC765U8VdadEOCPwMngbKsfnucvSIe9Pu5edmWKHz5AQQ9pNyHUtg1lF%2F6u5fbMS16M8ZtozE5Pn6T89dB2ecjOb6WLoSnFQDz7rcip87pjIyGy6NZvM6vIbUeh56d%2F4HFwXPTVFasUkUkfoFLeSBcwm1U5XGNuvvRPM47xujKp&X-Amz-Signature=53cd542384221277fc5ad2814d920fd89f9af5d70cf68586f6b745a32c2b5be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L2IUUO2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCICMv53Mw2OpONTP%2Br13DjoL57PDJRXADFIAO6OQOh6P5AiA7hZt9eoFmW4gButnImWIWV5%2Boy7ZTBuTfGGklk9N6Kyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMIZed8bdoQSFSp3d9KtwDAWZVeL63fcEza4xOcfIz4SOGnkTb4FuTJWA4hbZwuuioclYlP29cPZ4fDQ3QqLmBNlddAfKF4WDtqx8W8%2BFSUVlQokEz32eXdnQZhCAtB%2Bfz1oEJdgekMfaACMcvKDSbo9uEe6eaQVgm7Mx7P4zdDIbyXDgVvMBKgZ7x4eCQW3vsGxvq2qOuivsaIZttpe6YrcsH11SweXxx%2B%2BQ0QvVPBKwHJnCN0o%2B%2FiaTLDmsAtCj5VJX8ih0sLc9YUVwFTkSN5U6sgO4mV4cutXEO%2FVEIZIE8hC1ws0J64Dt62tNfI3ec4ry7spYr3OT1QVyzeas%2B7BoTPv3h0L2OUkhYimDCgoflFpJKvop2MxATwyHOXZGGTgZphWuKrP%2FfO1qzHicnvXkNssF9%2FFdP5wS0p8M8G6ZyfxM%2BLiEy485TF1QGmErLzztR1AuN8H7KM4hiJ9J%2F%2FVj7f9dj0Kte%2B7PtlYS7ozRd2qjDh2jL5juF%2BQBxsQlxd%2BwGH2EiI%2FPYDt7NVS7P5%2FNESbHK8kfqNLvya5A3qgyICavewni2sF2Z8QKnu6IX%2BBi1TuU4M%2FDpG7iI%2BolOlf%2BajNJ5PMgC%2BKVEE5kbj1ip3RYbrTatkEsuNy6OLYyXLlkN37OW7SJ15YMw4reuwwY6pgE9DrkwsNtv29thyoM8WIIsSrOglNep6E9u1AtcYLQWtXinAhVykEC765U8VdadEOCPwMngbKsfnucvSIe9Pu5edmWKHz5AQQ9pNyHUtg1lF%2F6u5fbMS16M8ZtozE5Pn6T89dB2ecjOb6WLoSnFQDz7rcip87pjIyGy6NZvM6vIbUeh56d%2F4HFwXPTVFasUkUkfoFLeSBcwm1U5XGNuvvRPM47xujKp&X-Amz-Signature=a7807800a492b188d004e45f9911109d9074ad70a564944f49fb3899df77a324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
