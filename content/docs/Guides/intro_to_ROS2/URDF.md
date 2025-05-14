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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WU3YET7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIAaDq7bwvTKkWYSiHvFJqyWEt01a1jqnEn8o7jRGIyy9AiEAiDAD4YadJwKTfkWRRDMagWGGtvPX9QkLNC%2B9bjQM4Doq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDCDeLpBc%2BNd70gpw%2ByrcAyjryMCGR8ys2oGfhl6KVNqbhQSTNLNi35hWMrmZFxpqSUmBy9d61kSAm3nxNOWjOWyMYjA%2FdfnmsgBMpzf4IwcuNgfxw3lgLtDXhvWaU8gNWwkIDcd%2FNF0Zwm9jN%2FnnU9vXsP54OSIBYhSSFZGrQ%2B%2FYGrpzNQJgYyJ9fkklVqmW8QeoLmHoqrHpTH8ifWL8w%2BaQo%2FE%2F1TLn3qStz1SDALVnIOSTGWqIvoG4D5oSZ039MRrz17ul8XKX%2FmXMxvCPFCZw3PlVXAeuxOgheF2SK6tV7nO7PSsbIGyWACExNB4%2BMIgVUxnJ5wPKGB9OF0wpEP8PtmeUcPMd%2FqokUeaLd8kHX%2BnvzyshPFzMsJOOvEGxjRqzwrVqhrw2aMF6o%2BNpK2FiNp4OXQk3xSZ%2BB5UVFD6KmODPRDjGMEko6B%2Bzyhwzk7mV1iVw%2BzYJ8DqR3uTifHhl4zGSnm0Q5z2FUSeXp%2FClMRh5iHE1bohxBoliahrNC1Xlow5cxfknFZhnDoK241esPEET%2FKhzUhIo2D4Q2MHy5MikHwOMphm%2F88lquFEepcDZ5ZwUviJ095DObkmbG2ZVImdjPhjWWSMn63QTjBQKVhd41iF%2BKbh%2Bf3UC5jNr%2Fysyff%2BJnPPt0ik8MP6Hk8EGOqUBYkvpoxyJ6jPsM1yIfYnTAh4DdtoGDop%2Ba7KyHlqqPr9r2BPLbGfMom5hYXRmaRUB91xsno5LvIKVjMBwpYmqsQs6i%2BnaEotrpQMCslbUrX9%2F0TnVSIsvJCHwazCgmkNNxt%2BKhmlQcbYXg%2B%2BWJw1mm30N9hG%2FXzubzgPDY9aIKlDwxBMsA5IWdJh8yOhB8iysO8atTnv79Te9%2FRhsW7GI07mr0Srw&X-Amz-Signature=b705277c91705df6234432e6d9840536ceb7c3aa4270aa9bb492d63bfff2a299&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WU3YET7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIAaDq7bwvTKkWYSiHvFJqyWEt01a1jqnEn8o7jRGIyy9AiEAiDAD4YadJwKTfkWRRDMagWGGtvPX9QkLNC%2B9bjQM4Doq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDCDeLpBc%2BNd70gpw%2ByrcAyjryMCGR8ys2oGfhl6KVNqbhQSTNLNi35hWMrmZFxpqSUmBy9d61kSAm3nxNOWjOWyMYjA%2FdfnmsgBMpzf4IwcuNgfxw3lgLtDXhvWaU8gNWwkIDcd%2FNF0Zwm9jN%2FnnU9vXsP54OSIBYhSSFZGrQ%2B%2FYGrpzNQJgYyJ9fkklVqmW8QeoLmHoqrHpTH8ifWL8w%2BaQo%2FE%2F1TLn3qStz1SDALVnIOSTGWqIvoG4D5oSZ039MRrz17ul8XKX%2FmXMxvCPFCZw3PlVXAeuxOgheF2SK6tV7nO7PSsbIGyWACExNB4%2BMIgVUxnJ5wPKGB9OF0wpEP8PtmeUcPMd%2FqokUeaLd8kHX%2BnvzyshPFzMsJOOvEGxjRqzwrVqhrw2aMF6o%2BNpK2FiNp4OXQk3xSZ%2BB5UVFD6KmODPRDjGMEko6B%2Bzyhwzk7mV1iVw%2BzYJ8DqR3uTifHhl4zGSnm0Q5z2FUSeXp%2FClMRh5iHE1bohxBoliahrNC1Xlow5cxfknFZhnDoK241esPEET%2FKhzUhIo2D4Q2MHy5MikHwOMphm%2F88lquFEepcDZ5ZwUviJ095DObkmbG2ZVImdjPhjWWSMn63QTjBQKVhd41iF%2BKbh%2Bf3UC5jNr%2Fysyff%2BJnPPt0ik8MP6Hk8EGOqUBYkvpoxyJ6jPsM1yIfYnTAh4DdtoGDop%2Ba7KyHlqqPr9r2BPLbGfMom5hYXRmaRUB91xsno5LvIKVjMBwpYmqsQs6i%2BnaEotrpQMCslbUrX9%2F0TnVSIsvJCHwazCgmkNNxt%2BKhmlQcbYXg%2B%2BWJw1mm30N9hG%2FXzubzgPDY9aIKlDwxBMsA5IWdJh8yOhB8iysO8atTnv79Te9%2FRhsW7GI07mr0Srw&X-Amz-Signature=f8c9d306716e92d2090597fde6921004f67a5c614ed55cbfba7b043dc56e9928&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
