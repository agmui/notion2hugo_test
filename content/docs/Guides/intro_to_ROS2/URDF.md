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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WB2GCRO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpN%2Bi6tVRDsOJcaL%2BhLCd7qPlimwUFKMs70V8ULoXThAiEA3pC18Gx136SXDg4SxDpHiMb%2Bmj4aU6T3RhDzsKrXvxgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLJ7GtZ9%2BejuektK%2BCrcAyguXeCwyUi6RynossRM%2Bl4jGtcBnjb%2Fkz95%2FgbDAdI8bw8IAvJqpKjK%2BC2tS4yoo1xqAT5el1UScaAMFi8rgO6OWcWjoUPKfqf%2FVzvQ%2B%2F8zPWEIQNac7qb%2B%2F1VuAV8qvTnRJhNqKg0itp7bc62GdkrCTrXA5wilZ7cwCzDywfVF%2BPg9M1XeEAkEuiaduCBWCg%2F2k5pmkfa849CuIDK9iYpHDDBZFF%2FEhNNsn79EIxMfxjSKXo1jc1kncn9GA6Ui20fY1IaouCUux8RgPNq0akp3Yyb1LJLTeKuotQSTX7RJ42QDxsTlDDiPw6klsrUZYojTn0ee22%2FUH%2FZ6dqLVMWDqiYed10DLka5ObfIWHcmK94j%2B5ay2pmub2zlZUF%2Be9Sv0Hm0CDxnM3jAK%2BOWirW%2BWWZ%2BwkRpVEPboH9pCtN9ig9vtZ6G%2BJjJ30C5N0OxFlLZaEP0EYYOJqjHtc9RZIu9WACMvV9RzmPJ4lPP4qbnoXqaUGQma3zovVjTGrOHL0MFTBqFh3NyGR4SOGqOOf%2BMpnZE5JfQFspLcRzbFPgHNEfa80zm9%2BjgnzRD0itlZ96TO1N3Qxcqh2CBeXUUXBL4F6aWvMB9i81t2cyPOOeGR1dsud7Iw5QEPjFPKMKDfuL0GOqUBoBeYnVzEkJY97C5EoY66T%2FAqopVJYmfo9VZevneXBSRcyJCL1ak%2FyEzpxNi3hejaa17N7FXVk7wyAlxHM6%2Ff9JFX0%2B4X%2BKpH6rctx6eD63g7CLbT45smfSdhilxUdavK5VeGnFhvATw4kme3hrRjKA6Drr%2FddZ5uXK9BDRs9upAl0wGJMKZ2Iphqzw%2Bx0TquMl%2B15ySF1wZ2044HoydkcVid69mM&X-Amz-Signature=1350de164ad20437d14b4be11023ce3fbfeb682a2b9d864c9eb170ed40a19290&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WB2GCRO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpN%2Bi6tVRDsOJcaL%2BhLCd7qPlimwUFKMs70V8ULoXThAiEA3pC18Gx136SXDg4SxDpHiMb%2Bmj4aU6T3RhDzsKrXvxgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLJ7GtZ9%2BejuektK%2BCrcAyguXeCwyUi6RynossRM%2Bl4jGtcBnjb%2Fkz95%2FgbDAdI8bw8IAvJqpKjK%2BC2tS4yoo1xqAT5el1UScaAMFi8rgO6OWcWjoUPKfqf%2FVzvQ%2B%2F8zPWEIQNac7qb%2B%2F1VuAV8qvTnRJhNqKg0itp7bc62GdkrCTrXA5wilZ7cwCzDywfVF%2BPg9M1XeEAkEuiaduCBWCg%2F2k5pmkfa849CuIDK9iYpHDDBZFF%2FEhNNsn79EIxMfxjSKXo1jc1kncn9GA6Ui20fY1IaouCUux8RgPNq0akp3Yyb1LJLTeKuotQSTX7RJ42QDxsTlDDiPw6klsrUZYojTn0ee22%2FUH%2FZ6dqLVMWDqiYed10DLka5ObfIWHcmK94j%2B5ay2pmub2zlZUF%2Be9Sv0Hm0CDxnM3jAK%2BOWirW%2BWWZ%2BwkRpVEPboH9pCtN9ig9vtZ6G%2BJjJ30C5N0OxFlLZaEP0EYYOJqjHtc9RZIu9WACMvV9RzmPJ4lPP4qbnoXqaUGQma3zovVjTGrOHL0MFTBqFh3NyGR4SOGqOOf%2BMpnZE5JfQFspLcRzbFPgHNEfa80zm9%2BjgnzRD0itlZ96TO1N3Qxcqh2CBeXUUXBL4F6aWvMB9i81t2cyPOOeGR1dsud7Iw5QEPjFPKMKDfuL0GOqUBoBeYnVzEkJY97C5EoY66T%2FAqopVJYmfo9VZevneXBSRcyJCL1ak%2FyEzpxNi3hejaa17N7FXVk7wyAlxHM6%2Ff9JFX0%2B4X%2BKpH6rctx6eD63g7CLbT45smfSdhilxUdavK5VeGnFhvATw4kme3hrRjKA6Drr%2FddZ5uXK9BDRs9upAl0wGJMKZ2Iphqzw%2Bx0TquMl%2B15ySF1wZ2044HoydkcVid69mM&X-Amz-Signature=a6a7b1920d60d34000e86f5e9c8084ee2cd0c9e7679c7ed909dd6651fa7c95b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
