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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJWCDW2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCICcMG6%2F%2FXM2NSfgjJlQQn39Hy%2BYam%2BjKWEbOtz4KPK%2FvAiAh%2FgjYUTUkkMzsTdLX5WHokwVaVb1qNfZnaLQTUdqR6Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM9qRKijGoaE%2FwL0feKtwDrvgsdF81tRVmMRnSDEANMGMSyYqLPGWBxXCFLT08QAVOFBnbJr2oCrXRVleLDiXCS1fiDe0GQOY8PkYDHDSuAkuv2kI5pAnlrDfN6vh%2BbAus0ZMxYylHX2f4xPRidKVZZoxPxM2iXiYlG4r7WBNQybL0%2F3DdBsO%2Bfc6YUG3527MYP35sNXTKzart9n2XCGr4480%2BNx%2FPKNJT7i6WjRxfRUegrHE6U6xn%2ByoeJblS3agD6ISjyqLct2MuTd0N2sdYnmko4nofF1VijxFWiZ0iq4aumaarYrnKpvQpIAFsVFo6Ty7MzksKEonefNdK9uDlM1GeVkpjEB8vs5PISfmLNH7010NsA1kdbtN3Q1q1Fal32TEGDDiJsr0djXVHoBTUnkIFfhPBMf3omclaaFxwBqOkICqyw%2B8dq6s4lUhMqTVjs6gs3es4aR6XTtKq1reVuyyU2yFuUvXbdLAx2qJD7eXMtP%2Bp6JH9aOlgIwsvZxuvUHe4vUd9yNS71hzJi%2BPxoRaEirLPwca8ZABlTSqF%2BdcVr9he4TOLES4iRhIttjinhCRgFtPn3aF%2BtGx8NC5PAbr0sG7cruxiCMu0GnZxoEtrfBmLiMlGwd2CdDNBbJZZsUBBUtgYwQD9zagwguKuwwY6pgE10CiI%2FkfNaGrobYRuWuTDZEupZyMqw5jfAjlIC2c7ZYLxEhA%2FPY9GQceyJDLZHjVzg0HsTUV5wE%2FWQOITPYwjwignY5NaJOlJ%2F4mvewGuAvDOu%2B6kKCLhWPVV3NZ%2FNq1SAo8Jg0b7Qykz03vOM%2Bi%2B9NuFxEZXvELnPnjIcw17IPJfe56LDcDVd2TNGrhOoxH4KHgUyXIbZdK0JVYPenho0Hk4Q31r&X-Amz-Signature=072cbddc3e34eff9b2390bc63c30d8c179366a76b80fe98e4ec7dbd4cbf002a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJWCDW2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCICcMG6%2F%2FXM2NSfgjJlQQn39Hy%2BYam%2BjKWEbOtz4KPK%2FvAiAh%2FgjYUTUkkMzsTdLX5WHokwVaVb1qNfZnaLQTUdqR6Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM9qRKijGoaE%2FwL0feKtwDrvgsdF81tRVmMRnSDEANMGMSyYqLPGWBxXCFLT08QAVOFBnbJr2oCrXRVleLDiXCS1fiDe0GQOY8PkYDHDSuAkuv2kI5pAnlrDfN6vh%2BbAus0ZMxYylHX2f4xPRidKVZZoxPxM2iXiYlG4r7WBNQybL0%2F3DdBsO%2Bfc6YUG3527MYP35sNXTKzart9n2XCGr4480%2BNx%2FPKNJT7i6WjRxfRUegrHE6U6xn%2ByoeJblS3agD6ISjyqLct2MuTd0N2sdYnmko4nofF1VijxFWiZ0iq4aumaarYrnKpvQpIAFsVFo6Ty7MzksKEonefNdK9uDlM1GeVkpjEB8vs5PISfmLNH7010NsA1kdbtN3Q1q1Fal32TEGDDiJsr0djXVHoBTUnkIFfhPBMf3omclaaFxwBqOkICqyw%2B8dq6s4lUhMqTVjs6gs3es4aR6XTtKq1reVuyyU2yFuUvXbdLAx2qJD7eXMtP%2Bp6JH9aOlgIwsvZxuvUHe4vUd9yNS71hzJi%2BPxoRaEirLPwca8ZABlTSqF%2BdcVr9he4TOLES4iRhIttjinhCRgFtPn3aF%2BtGx8NC5PAbr0sG7cruxiCMu0GnZxoEtrfBmLiMlGwd2CdDNBbJZZsUBBUtgYwQD9zagwguKuwwY6pgE10CiI%2FkfNaGrobYRuWuTDZEupZyMqw5jfAjlIC2c7ZYLxEhA%2FPY9GQceyJDLZHjVzg0HsTUV5wE%2FWQOITPYwjwignY5NaJOlJ%2F4mvewGuAvDOu%2B6kKCLhWPVV3NZ%2FNq1SAo8Jg0b7Qykz03vOM%2Bi%2B9NuFxEZXvELnPnjIcw17IPJfe56LDcDVd2TNGrhOoxH4KHgUyXIbZdK0JVYPenho0Hk4Q31r&X-Amz-Signature=5c3d1b473cd48420fee192e766292fb75a2931f8b13ed1878584ec011e9f4a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
