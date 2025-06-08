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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW7IRYSR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSHix4uTLy%2B6PPZC2Feq1k7jM9%2FCmgd6R5M24MIPkdNAIgUAi1qBhibR2pJj9vQ7U8zUqT8H52EDEORJTNsvQB3XoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNaPCFVMCg0pz%2BHNCrcA%2FO%2Bn%2FT%2FqpDNxvOC6N5x8YYo%2BsVPyVjHJdQBsYzgMeX1urJxCryyK%2F30Gv8mSV3hY6FPqx2tJwTW7Ki5A9aphPoH1rIgHTPvY8dU%2BKrHZiS1wHucO4qPvabYsjGGhL0HiyNIyOjCog%2FJdgiG4VxUgrH9EGoYm91GmBkEh2q5qniU%2Bw8sKKmQvhq1a2SjjCySv0DjlIoJDrmgPl6Pf2NTHavn1jpO%2FuWOLtCrsagHgxrT2nxZDzVfQ7OVOpknzUS1g5y50h5wyO4knSEUQOMAsgnKSvDyJlkyQymB5alSkxItXVpObqm9WaGQNORnQpTNKF1nHNNKOBOYaG4cEDiUbnwMoq0SNp9wlSiHn15Zlk5ukVDimxp%2Bbelq1RUsnUjotn7vsHyOemxKgEwgaOxiqljzsC83%2B7vLFM6kC%2B2nP%2FzX3aZWcFi7HdCEGZ3ezfLDzyQQKswvLa6uq9bQ2n3P%2BzhENPF9FH2tJKIeSFsUx6d6gYTYnbpjdvkbv9%2Bj%2FVOkL6PJJmCDGDg6oFyTUnQwcyva%2FkFPDSLc3YUIyd8S8FnWUXFJeEh8xPCy8VqpULT3pCsLfWNNzIht4P1Q4acClvpEchOWS0x6dMz4cBTs%2FL0aHfiVBl4S%2BB9c9bLgMPeck8IGOqUBO4Rb4jW0wPGts5n62TXzlN39zXXZuluEqMiZEJBKxnMtz8kyNnRencjftjcf4jioY24po5XDsDkucBcX90xyUkkitOgGdZq9%2BtLPoidu%2FxQsQOa5CS9EC9FNLQb8UZzRmatI4kDOE45Y7T09ZDeV%2FJyVR%2BoMgpueqYd%2BhlQGEOz3UcTSiTYQaYhsH%2Ff87sOkc7cC1gnQI8cIsb5%2FxrcLACrnnptp&X-Amz-Signature=035cb54343fae8254093d6fd43bbac427a445a741bda6efd2db49f4e6bcd157a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW7IRYSR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSHix4uTLy%2B6PPZC2Feq1k7jM9%2FCmgd6R5M24MIPkdNAIgUAi1qBhibR2pJj9vQ7U8zUqT8H52EDEORJTNsvQB3XoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNaPCFVMCg0pz%2BHNCrcA%2FO%2Bn%2FT%2FqpDNxvOC6N5x8YYo%2BsVPyVjHJdQBsYzgMeX1urJxCryyK%2F30Gv8mSV3hY6FPqx2tJwTW7Ki5A9aphPoH1rIgHTPvY8dU%2BKrHZiS1wHucO4qPvabYsjGGhL0HiyNIyOjCog%2FJdgiG4VxUgrH9EGoYm91GmBkEh2q5qniU%2Bw8sKKmQvhq1a2SjjCySv0DjlIoJDrmgPl6Pf2NTHavn1jpO%2FuWOLtCrsagHgxrT2nxZDzVfQ7OVOpknzUS1g5y50h5wyO4knSEUQOMAsgnKSvDyJlkyQymB5alSkxItXVpObqm9WaGQNORnQpTNKF1nHNNKOBOYaG4cEDiUbnwMoq0SNp9wlSiHn15Zlk5ukVDimxp%2Bbelq1RUsnUjotn7vsHyOemxKgEwgaOxiqljzsC83%2B7vLFM6kC%2B2nP%2FzX3aZWcFi7HdCEGZ3ezfLDzyQQKswvLa6uq9bQ2n3P%2BzhENPF9FH2tJKIeSFsUx6d6gYTYnbpjdvkbv9%2Bj%2FVOkL6PJJmCDGDg6oFyTUnQwcyva%2FkFPDSLc3YUIyd8S8FnWUXFJeEh8xPCy8VqpULT3pCsLfWNNzIht4P1Q4acClvpEchOWS0x6dMz4cBTs%2FL0aHfiVBl4S%2BB9c9bLgMPeck8IGOqUBO4Rb4jW0wPGts5n62TXzlN39zXXZuluEqMiZEJBKxnMtz8kyNnRencjftjcf4jioY24po5XDsDkucBcX90xyUkkitOgGdZq9%2BtLPoidu%2FxQsQOa5CS9EC9FNLQb8UZzRmatI4kDOE45Y7T09ZDeV%2FJyVR%2BoMgpueqYd%2BhlQGEOz3UcTSiTYQaYhsH%2Ff87sOkc7cC1gnQI8cIsb5%2FxrcLACrnnptp&X-Amz-Signature=4452a3fb9d657c7a2136f9dc79df08c13f433436839e71cbe7d61b3adaec5722&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
