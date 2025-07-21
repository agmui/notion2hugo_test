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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3XR2YEX%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdNtcZV8MXqi%2BuE10C6mETkoHX7kRVKPnlEUNwYVQ3TgIgI7O0h3hs%2BoYlaRuOANC7eiiq40QJhLku%2FOrKExIwEwsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4D6lplUEJMnQP3CircA3m8kEpdaMbwpPHW6DxSifxc9fxkVXhabpbrPGDpCN2Bu4wbmSuMRxDec6%2FQ5YDsbN48tEU38cDb9KXM4hGixebRxnq0xj9XfoJChOzZ3ihTVhC3Wz1ZZ46NrQgdM%2FcX%2FW8EF15QBCvuNGN1btW4Hn95Gh%2FygbZK5oLzf1wT%2Bqlgv16sdNR2Qp7tHUidYe65t%2FlNU41q%2B3HKXgcFDvR%2Bfa2ZB0jFuwdASw5LXkELcsYOCfRbhsV1YqJ%2BvJv%2Bam9BRRYJT9feCKO4nJ2woGEqBY%2FhJ4PmA3sj7o2KXlGF6Mz4b82fkNv%2B3g2orBWjb92KrfZsQ4%2F9HaENpzRRICfYD2NSfVxN6s4xuOMSHzyhoNXWUarAkh%2Bkoybtkmt%2FC93SLsYr3TL4AKODwOthA2aHSQ3tz4gRpFODZiJ9gfQHKbcyvNBeTV7ROQYB4k48bKH7zbyWM4Akc%2FBBKP7G%2BEyk0JMseHKs7361Mm312PVfcQshnDmr3puzC0uYipgHDoRaGjbo%2BahBfnEmGhsIq0ylA%2Bperc4vg%2B1uOwvtk4gBEwiywhnUHtLDVvKzCeSN0sly1%2FAUd1fEfDJhjmIPjPdK16JREJ3hvYp2RmQC9uzuvi5MexemK23Ws4%2B4aX3sMMqN%2BMMGOqUB5yHooLhfX1YUkPGSKPcPoZWuOPasl5Q%2F4kesoyfl8ZIWqVzN6hovv%2FpOn2u2iVjK6q%2BKoIFXf77lOlmY0P2t3MvSwi2XDu8zR3y0V3XO1odypYXcBFOJGkYurSgKesI1vmoUgN1kqxTNzpYRGl%2Fuow%2F52gh0swbrhTqL3frVxhBrVeC6r0hrVu2Zrh8dCsu1pMfWRAtehycJXz3DFkUajL2Qi3uu&X-Amz-Signature=6040350643bb4f032b3706734695ada139b37b2e8ea1583249aa41099f379b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3XR2YEX%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdNtcZV8MXqi%2BuE10C6mETkoHX7kRVKPnlEUNwYVQ3TgIgI7O0h3hs%2BoYlaRuOANC7eiiq40QJhLku%2FOrKExIwEwsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4D6lplUEJMnQP3CircA3m8kEpdaMbwpPHW6DxSifxc9fxkVXhabpbrPGDpCN2Bu4wbmSuMRxDec6%2FQ5YDsbN48tEU38cDb9KXM4hGixebRxnq0xj9XfoJChOzZ3ihTVhC3Wz1ZZ46NrQgdM%2FcX%2FW8EF15QBCvuNGN1btW4Hn95Gh%2FygbZK5oLzf1wT%2Bqlgv16sdNR2Qp7tHUidYe65t%2FlNU41q%2B3HKXgcFDvR%2Bfa2ZB0jFuwdASw5LXkELcsYOCfRbhsV1YqJ%2BvJv%2Bam9BRRYJT9feCKO4nJ2woGEqBY%2FhJ4PmA3sj7o2KXlGF6Mz4b82fkNv%2B3g2orBWjb92KrfZsQ4%2F9HaENpzRRICfYD2NSfVxN6s4xuOMSHzyhoNXWUarAkh%2Bkoybtkmt%2FC93SLsYr3TL4AKODwOthA2aHSQ3tz4gRpFODZiJ9gfQHKbcyvNBeTV7ROQYB4k48bKH7zbyWM4Akc%2FBBKP7G%2BEyk0JMseHKs7361Mm312PVfcQshnDmr3puzC0uYipgHDoRaGjbo%2BahBfnEmGhsIq0ylA%2Bperc4vg%2B1uOwvtk4gBEwiywhnUHtLDVvKzCeSN0sly1%2FAUd1fEfDJhjmIPjPdK16JREJ3hvYp2RmQC9uzuvi5MexemK23Ws4%2B4aX3sMMqN%2BMMGOqUB5yHooLhfX1YUkPGSKPcPoZWuOPasl5Q%2F4kesoyfl8ZIWqVzN6hovv%2FpOn2u2iVjK6q%2BKoIFXf77lOlmY0P2t3MvSwi2XDu8zR3y0V3XO1odypYXcBFOJGkYurSgKesI1vmoUgN1kqxTNzpYRGl%2Fuow%2F52gh0swbrhTqL3frVxhBrVeC6r0hrVu2Zrh8dCsu1pMfWRAtehycJXz3DFkUajL2Qi3uu&X-Amz-Signature=0f0c78ad45cf364b219b4705ab7f26d23a3d6fd614467e39c14a8277841c731f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
