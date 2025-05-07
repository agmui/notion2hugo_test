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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2ZWOYRM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgXq9TWdT62gLQ4oab197If5ZqcBCaGbup49RK7Myb9AiBkqpmsP5bdaKeClQu6QcBozDq2lYhJXMpaNr94gHTQMSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMfQEoKn7S4F2Fr9fkKtwDq52ZoMonUODXCvIC7tsVru739AmBfDERtmPAJ3lNuov%2FG4%2FpRJ%2FfOb2FHeQ6Y8Z5KNar%2B07GmSFJnJKLam%2FYagqulAUMCBc%2FOVDq3IaPEm9Y%2FapeYOyByd77g9edUxEhnstrvVk%2FuNCBy9tTsYzvpsqPFmr9cjoRUAw9NLi7Uza1SkXOzXTvRMohhnqzuXNapycMH8jXhNmvWhooCua8LmDmVntS1Trp%2BoRT%2BEbInqLfcv%2Fl1cwa99wt%2Ft%2F%2Bak60WaiIf2ib5EBzUVKOPa92biEGh%2FEqM7bEL523MzxTYKnpVnmpn44wRDkSuNj67IM7FnYifanmDUY155XYI4GJDCXIdmlPejFPpNT4qduROQ%2FLBebKxO6aHngxxyR9uOnlU30imXkVuaDmlzRGf5PY%2Fu31LjGj80qeyh34IOimvRvKA0oUAlRus1KIdhdVeLyxz74WAR%2B9iQ%2BwyVV30zwSUsfmNxEjQtJOrZb0YED9tUe10y7xPUVX91Vwfpof8DhrIS6thGM%2FLL2hOU5tvaJ0x0Oc9CNlQhCEmXXbFKcJE1WtC8C2k6IPo%2Fv6qNR5RwhajzeNm0AaZ5cJITyQbEzwf5jpO8qILgPln5HP6BEt%2F2rikxgwWcwec6VnF7ww%2FsbvwAY6pgG%2BpnT3uBB2IJD6FFZ9Msfa5xXnOUqMOTtIx1MF7KsdxiQKSAusa3lZJSHv4Vy4LD29bRdzHMpOHPmam39KRtM7unLRxbzBfouetQufzlTvMRolghPoRht7elELziV5sbsYssuE6YIMzNuyumTQMD08FpXlcMQU1AGsDQHOdBM4E7AjMk%2Bpn%2F63rS5ZcrfBiuUui47nGYcLVSYC3zd4zjVVHLCd3h%2F7&X-Amz-Signature=5afd4d0fb472c4a36d7d1a56a6241b59e0bedd6c8d46cbb4b31c075f76efba3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2ZWOYRM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgXq9TWdT62gLQ4oab197If5ZqcBCaGbup49RK7Myb9AiBkqpmsP5bdaKeClQu6QcBozDq2lYhJXMpaNr94gHTQMSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMfQEoKn7S4F2Fr9fkKtwDq52ZoMonUODXCvIC7tsVru739AmBfDERtmPAJ3lNuov%2FG4%2FpRJ%2FfOb2FHeQ6Y8Z5KNar%2B07GmSFJnJKLam%2FYagqulAUMCBc%2FOVDq3IaPEm9Y%2FapeYOyByd77g9edUxEhnstrvVk%2FuNCBy9tTsYzvpsqPFmr9cjoRUAw9NLi7Uza1SkXOzXTvRMohhnqzuXNapycMH8jXhNmvWhooCua8LmDmVntS1Trp%2BoRT%2BEbInqLfcv%2Fl1cwa99wt%2Ft%2F%2Bak60WaiIf2ib5EBzUVKOPa92biEGh%2FEqM7bEL523MzxTYKnpVnmpn44wRDkSuNj67IM7FnYifanmDUY155XYI4GJDCXIdmlPejFPpNT4qduROQ%2FLBebKxO6aHngxxyR9uOnlU30imXkVuaDmlzRGf5PY%2Fu31LjGj80qeyh34IOimvRvKA0oUAlRus1KIdhdVeLyxz74WAR%2B9iQ%2BwyVV30zwSUsfmNxEjQtJOrZb0YED9tUe10y7xPUVX91Vwfpof8DhrIS6thGM%2FLL2hOU5tvaJ0x0Oc9CNlQhCEmXXbFKcJE1WtC8C2k6IPo%2Fv6qNR5RwhajzeNm0AaZ5cJITyQbEzwf5jpO8qILgPln5HP6BEt%2F2rikxgwWcwec6VnF7ww%2FsbvwAY6pgG%2BpnT3uBB2IJD6FFZ9Msfa5xXnOUqMOTtIx1MF7KsdxiQKSAusa3lZJSHv4Vy4LD29bRdzHMpOHPmam39KRtM7unLRxbzBfouetQufzlTvMRolghPoRht7elELziV5sbsYssuE6YIMzNuyumTQMD08FpXlcMQU1AGsDQHOdBM4E7AjMk%2Bpn%2F63rS5ZcrfBiuUui47nGYcLVSYC3zd4zjVVHLCd3h%2F7&X-Amz-Signature=782571dc5191da17fa9974aae2925057f551e5add416edaebc950b6d1a7f1fe3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
