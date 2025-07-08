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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EX7P2QL%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9K6EU%2B%2BYqyZ917%2Fadaq5bZHYNRi%2FdDS4wbEAqIgBxZAiEA56xOceAQnIRzZSaqE8U4vjYlfGD4fdLtaZQQxscPKt4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlKCA2XM28jDE1Y0CrcA5Eus5kYT242QIFiX5lEMcdy69ikmiZoyUQgumdVEKidgsMOmTgmaD9gOPKkB7FaRSBUp1m0Kl7gEPzQiBc2GTsJRAXmjG4B%2B2YYyyR6l2pTudmMzappHN5AruuhmM82Y%2BChC7HHwIVbQ4nEmdUyHaazzoM0BhD0yM1AbgfcicTQhLmF6A1hW1HLyhg1bIL21s1QLmLiHvWluk6Ub%2FB8Twv4TFChX01yKHOATZMLmQfmehoFiH9mokXdEeP4Fg76sMc4xgGRYRsspDeF3ewp6YcQw8WV78HQdlzGxvpAqeztqojq7%2BdYMQdNO%2FnZPHYQDXohUlX2ZLZlYtDgX0tZih%2FLyXDqCpr4FSA1lTNPJebTwqoH8kai0JCgp%2B%2BnBDyNbvLvkg4jtFs8Mvh%2FB4Ee3jNkeFpTt6FrIFplVWr%2B2tpo8T1FSiDN3XYhjkH9r9U2eo%2B4mcbrDv%2Bxu9D3GUg4vGbPhj%2B2MQNHMvgEFEO0NTNlfgxCJACB4iOMM1u%2F9idN33zrLCFBVLK3vsT4eVPCn0vYey1CNrV52pW%2F5Muc77yeE5HLuuM%2FKnnXnO2pBi3ieOnImwG1GgyuEYMk%2Fs7Zj2TdoqZ0BME4OuYvBeoBWINapX0131tAMEaxPjmSMIaVs8MGOqUBBrQt64nlyTPhPNxIsVvXqjPgvpD1wsJsZIRakLLpmJNp1sO29hONq%2BgLajq1kddqEFQ3i5kGu5rEYIUMs%2FiPAsYq8vAll0yTJ0IalASAiGNAFblsOp23qxMFN%2BJ%2FGXLMOVC7dfVrSC4EzZInzzRNTxrgmDCGvIhaSFTwaa22hFNb3fheN%2Bk37Q4H%2Fpn%2F5yCyozbG7eRyrbclEKpmXaezoBmbyqSb&X-Amz-Signature=e2905a9144834b7aea11adc424d33b2c9457e9a2ce840f7c7f8bc502c9854da5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EX7P2QL%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9K6EU%2B%2BYqyZ917%2Fadaq5bZHYNRi%2FdDS4wbEAqIgBxZAiEA56xOceAQnIRzZSaqE8U4vjYlfGD4fdLtaZQQxscPKt4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlKCA2XM28jDE1Y0CrcA5Eus5kYT242QIFiX5lEMcdy69ikmiZoyUQgumdVEKidgsMOmTgmaD9gOPKkB7FaRSBUp1m0Kl7gEPzQiBc2GTsJRAXmjG4B%2B2YYyyR6l2pTudmMzappHN5AruuhmM82Y%2BChC7HHwIVbQ4nEmdUyHaazzoM0BhD0yM1AbgfcicTQhLmF6A1hW1HLyhg1bIL21s1QLmLiHvWluk6Ub%2FB8Twv4TFChX01yKHOATZMLmQfmehoFiH9mokXdEeP4Fg76sMc4xgGRYRsspDeF3ewp6YcQw8WV78HQdlzGxvpAqeztqojq7%2BdYMQdNO%2FnZPHYQDXohUlX2ZLZlYtDgX0tZih%2FLyXDqCpr4FSA1lTNPJebTwqoH8kai0JCgp%2B%2BnBDyNbvLvkg4jtFs8Mvh%2FB4Ee3jNkeFpTt6FrIFplVWr%2B2tpo8T1FSiDN3XYhjkH9r9U2eo%2B4mcbrDv%2Bxu9D3GUg4vGbPhj%2B2MQNHMvgEFEO0NTNlfgxCJACB4iOMM1u%2F9idN33zrLCFBVLK3vsT4eVPCn0vYey1CNrV52pW%2F5Muc77yeE5HLuuM%2FKnnXnO2pBi3ieOnImwG1GgyuEYMk%2Fs7Zj2TdoqZ0BME4OuYvBeoBWINapX0131tAMEaxPjmSMIaVs8MGOqUBBrQt64nlyTPhPNxIsVvXqjPgvpD1wsJsZIRakLLpmJNp1sO29hONq%2BgLajq1kddqEFQ3i5kGu5rEYIUMs%2FiPAsYq8vAll0yTJ0IalASAiGNAFblsOp23qxMFN%2BJ%2FGXLMOVC7dfVrSC4EzZInzzRNTxrgmDCGvIhaSFTwaa22hFNb3fheN%2Bk37Q4H%2Fpn%2F5yCyozbG7eRyrbclEKpmXaezoBmbyqSb&X-Amz-Signature=bc032842b577754d7ffbea8ca61c6df6dc0b4ffdb8d2eb892026c3832207fb32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
