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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAVAZ6YL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZXAPd4jAWq3UPptJb6jfsm0E2RaVNlxEIMSMBGwdApgIgZ2hoOzsTWUGZj0wRr6Ob9codJctg9RKdKIMT3CxlDwoq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDBFVD2pRf%2Bt6RP1u8SrcA3alxQnW5Mm9r1fUVkNX6EUCtQVkejxhmV3sw7eOvFSyjAZ8GAXs%2FKnGw17Wdn36CAzzRulGN5zmaRCcqNSKYDvPFHcHZjBqnxRhmt1uApur%2FkOZcWyCnleQMYcLv1vFQzpge%2BzdPFq7jVcozYd8mVevbeLOCO03DSbQzsUP%2FxTabjwKlO765a4jRqmm9UyMuN1y9SQxI1uNnyD3mZDTdwzJs%2FYqG44MD7GwCNmXErGnGcgOah5OgZaSb2DT8TGttm8T8K8Te%2FudLapbJ7Te4gzi1DuomBJhgw8CbgzvI1KoVw7rr%2BlfHKsUi5xOCdYZiLRsJPyt5WlOPxx1QSPm3WeBj7jHb7mFl1t8TLWSVn1y0RM628Hy0mURmlfjGxKzACvKb%2BowfRxmAFDuoof2HAPGeVB%2FKcioI6sPpXoSJS%2BSC4lBOr6fRrvZZz%2BWse8nvtKG2bIWqGvll78LHu14lQ66refnqQA0m6gxoar8vVHpNAh4USr4LUbzhKzHt%2FJONTTE%2BdExotzOo0uIBTVcYQn5wyQcWMra%2Ftq5Le3oXrkW%2Bx6tsWl1AitV50qidoL6QtG24bN1B7rlcIun0Ycv0ix62ZCrdVeyiBRanm5xcqDvKo7Ue%2B3YPwIwW1cPMPi%2F878GOqUBDgNJGaU1FBVQ2dJSr6KS76i2fhWSkMUfgCf8GiAjeyZoUwnXsDhntp0vRzWkcu7zfj3TXP6o2V61p7yKBMSXKv1s1AvGbUbM4I1l%2FZf5QTREvmOsQhi0jP3L76ZwPhBVaYDVx66ZeSo6hBci85rPXHL3nNcfjBFT8DwcVTuhBbcTe3RDmhAlur1zvEhS7SE0PoPhPf%2BEdTJZpYsggHV5H%2FoEBfO%2B&X-Amz-Signature=96380ce47502b9457dfb6316bb2fc0a868dac922dfbab10d8132a1a913965c5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAVAZ6YL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZXAPd4jAWq3UPptJb6jfsm0E2RaVNlxEIMSMBGwdApgIgZ2hoOzsTWUGZj0wRr6Ob9codJctg9RKdKIMT3CxlDwoq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDBFVD2pRf%2Bt6RP1u8SrcA3alxQnW5Mm9r1fUVkNX6EUCtQVkejxhmV3sw7eOvFSyjAZ8GAXs%2FKnGw17Wdn36CAzzRulGN5zmaRCcqNSKYDvPFHcHZjBqnxRhmt1uApur%2FkOZcWyCnleQMYcLv1vFQzpge%2BzdPFq7jVcozYd8mVevbeLOCO03DSbQzsUP%2FxTabjwKlO765a4jRqmm9UyMuN1y9SQxI1uNnyD3mZDTdwzJs%2FYqG44MD7GwCNmXErGnGcgOah5OgZaSb2DT8TGttm8T8K8Te%2FudLapbJ7Te4gzi1DuomBJhgw8CbgzvI1KoVw7rr%2BlfHKsUi5xOCdYZiLRsJPyt5WlOPxx1QSPm3WeBj7jHb7mFl1t8TLWSVn1y0RM628Hy0mURmlfjGxKzACvKb%2BowfRxmAFDuoof2HAPGeVB%2FKcioI6sPpXoSJS%2BSC4lBOr6fRrvZZz%2BWse8nvtKG2bIWqGvll78LHu14lQ66refnqQA0m6gxoar8vVHpNAh4USr4LUbzhKzHt%2FJONTTE%2BdExotzOo0uIBTVcYQn5wyQcWMra%2Ftq5Le3oXrkW%2Bx6tsWl1AitV50qidoL6QtG24bN1B7rlcIun0Ycv0ix62ZCrdVeyiBRanm5xcqDvKo7Ue%2B3YPwIwW1cPMPi%2F878GOqUBDgNJGaU1FBVQ2dJSr6KS76i2fhWSkMUfgCf8GiAjeyZoUwnXsDhntp0vRzWkcu7zfj3TXP6o2V61p7yKBMSXKv1s1AvGbUbM4I1l%2FZf5QTREvmOsQhi0jP3L76ZwPhBVaYDVx66ZeSo6hBci85rPXHL3nNcfjBFT8DwcVTuhBbcTe3RDmhAlur1zvEhS7SE0PoPhPf%2BEdTJZpYsggHV5H%2FoEBfO%2B&X-Amz-Signature=b5a6ce95317b7aa6136cc18942ec8da0625f246f0fb98fc2e7b5254f06a3b39c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
