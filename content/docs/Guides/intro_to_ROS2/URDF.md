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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE5H4SW6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCsP0tiqMa679AUmhlvxVRi62ymUOhnxqJCV7KJ%2BPkSLwIgDDvrB9FREd3HFoCZX%2FCMfcSe2BCsWcGRVY502%2Fnbx98q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMLAh03ZjxOb%2BzhyESrcAxG3S8lBJeXZHzLCSkgV1SJJjq9wVZY2m0APRzjhnDAU48xLvuec%2BTZhlI8QzB3SPwWXPDbgT8BCVwA6B48uL1cPlPiNiklcpqsfCLTrj0TZu7CggyGY05n1yAnWTaV8mKqAmXle2PYeLFOJC2qBPMvz2gzsJhesELgjZh4Uas617N8qhkoy2nRMgYStKJDG7HJYU3lbVWaHEqWXVmD0VUi8QOl578SLP5IX78UjQ%2FZrk4STYP242WoQKeKYdG9yaURcnkbhVqTGwAYxk2xeUywXmYUFqHio8odNCrO5S0QQmQTn%2FHFsXITbAnMtNP7PzshWzHP6BwcvRLfOuzAz8yb%2FcZiLJJraE%2FjrNO7uAwOj88RBneek6tNu18iWh%2BEgBlNHR48i6eApeiIYh5NGxyhAFnQcuUyovPSDkaSmcQT9d2G07XTJJ%2B9ZcR33Dol3RFpMZDORUhSe4OnWteMefwMuskSTzcEQ0OxQ96Z3I4J5dBNn5CePJj6%2B3WvFQ3Szo5rySTf8dXhr7PQTXlg8%2FKmLWVCvqcVcOG0I5UjFyGPHEHKAk1C9HS8ZBUt79BOkAA6qbfR8jysSHhHEpfnQgBga8BXVoWiSKRWLlz9JRj%2F6A6dFHrSpwJo5RUumMOnA4sMGOqUBD1bA%2FKJ9AdQRpS5eazN2C93SQ%2FJVgp8wcgmD7SdN05rifePgALvep9JTVemuBBvXwjyjJB32fYSWT%2BYrfEvmo24i7zI72s%2BOZxG9UgjNV3FSE2l3s2bHrD67aMpXhNJfY65dVAgmuI%2BxJwFZd%2B57ONW0EET%2B8fm8Cz6TNOTM6aJ2TD5OgeApdnjx%2F%2Bu6OHmlFZ%2FDR8owjDG6W3pS2X6JaM%2FL3SN8&X-Amz-Signature=2a453413aee53d140da87b0b8d935e9ffcd23c8a989060a10408aab853cdf7a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE5H4SW6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCsP0tiqMa679AUmhlvxVRi62ymUOhnxqJCV7KJ%2BPkSLwIgDDvrB9FREd3HFoCZX%2FCMfcSe2BCsWcGRVY502%2Fnbx98q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMLAh03ZjxOb%2BzhyESrcAxG3S8lBJeXZHzLCSkgV1SJJjq9wVZY2m0APRzjhnDAU48xLvuec%2BTZhlI8QzB3SPwWXPDbgT8BCVwA6B48uL1cPlPiNiklcpqsfCLTrj0TZu7CggyGY05n1yAnWTaV8mKqAmXle2PYeLFOJC2qBPMvz2gzsJhesELgjZh4Uas617N8qhkoy2nRMgYStKJDG7HJYU3lbVWaHEqWXVmD0VUi8QOl578SLP5IX78UjQ%2FZrk4STYP242WoQKeKYdG9yaURcnkbhVqTGwAYxk2xeUywXmYUFqHio8odNCrO5S0QQmQTn%2FHFsXITbAnMtNP7PzshWzHP6BwcvRLfOuzAz8yb%2FcZiLJJraE%2FjrNO7uAwOj88RBneek6tNu18iWh%2BEgBlNHR48i6eApeiIYh5NGxyhAFnQcuUyovPSDkaSmcQT9d2G07XTJJ%2B9ZcR33Dol3RFpMZDORUhSe4OnWteMefwMuskSTzcEQ0OxQ96Z3I4J5dBNn5CePJj6%2B3WvFQ3Szo5rySTf8dXhr7PQTXlg8%2FKmLWVCvqcVcOG0I5UjFyGPHEHKAk1C9HS8ZBUt79BOkAA6qbfR8jysSHhHEpfnQgBga8BXVoWiSKRWLlz9JRj%2F6A6dFHrSpwJo5RUumMOnA4sMGOqUBD1bA%2FKJ9AdQRpS5eazN2C93SQ%2FJVgp8wcgmD7SdN05rifePgALvep9JTVemuBBvXwjyjJB32fYSWT%2BYrfEvmo24i7zI72s%2BOZxG9UgjNV3FSE2l3s2bHrD67aMpXhNJfY65dVAgmuI%2BxJwFZd%2B57ONW0EET%2B8fm8Cz6TNOTM6aJ2TD5OgeApdnjx%2F%2Bu6OHmlFZ%2FDR8owjDG6W3pS2X6JaM%2FL3SN8&X-Amz-Signature=98ef7f6b45215b4c45b65edf61d3952ab2173a6154786168837f5f3e1b312b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
