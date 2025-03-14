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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA267G3N%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeGN5yMZY%2BSsnN3u6onosiL2NdT2KooeE2JlZwNyazAgIgCiYzhIRcZE3Fq7LMjZeRmFtsi9nh5ATQUNfsH9YoP%2F4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA395Kh7GGUdL13fTSrcA7epBnspPt%2BdNjw%2F1ncoV452CIuyh4Ai9XrKveI6U%2BIgD1VTZM%2FC7npaEhymqVnHQ4GVPAP3%2BwvQJ%2Bfc%2Bt5EkRDrTpDDVWNqzZ7o6taK%2BCgNRTe%2F0xYsm7uxz1VTzbMieHkPbtoP7TIpBp5Aj%2FP3IUYtApgyt9YhlJE5Zy8erko41GwQ7Y560ZXRM%2BBWecl8tyySBBQXTQ7%2FMooHpjN5J1Wu9IX32WXPhjqCyJroN%2Fk89GOx2oDuK2BZhVTAY2SMTLjDdTVbvclEUhggjtw3NxLEMvgUAQrg%2FJl1Wfzb82imk9kI6f57tX3e5AYCs%2FUebBo4vOoFrmR%2F7tb6zjFqAV%2Bt8x1pWYCPzfryQqzCKWn%2B3Uk8ZdradM0shKsemG2MgE%2Fp6fUsM1mE%2FqYpSx2OHGlBtIXHqog2vw9CnWGr%2BXO8htoJyUumyxtqYVsDxeq79MD1NJ4wZHyoqfMj2o5b0AXjFXlHflj2PX1%2Fwg1a1YPh%2F6w0vTUdAx%2F2CQ2%2F2TPoXoEj4wWetGTVt6qZ1xwy2Nu6R2sLGH2ytu7PyxK%2FqEV5ViNqCdYU5QpYrtUk0AfIsinnb5UbeO2kQiw0ebYdGDUlLXURMlhOr069OALs0xeXyKw4mlaxbYIRtudPMIy50L4GOqUBvhMIoorxd0H2oFwbEFOUzoS1RiRpPIxoLzumaYpIPjcxlgtFD5fUD6jgtbMOi68hlErZU5nfCq47jlbHvMuze6FtvAAau%2BbMK7MWwGgyn6Cw%2BWW7elxeIdH2J66cVtwdbCK%2FW09Mb%2B04SntRGaDscluWy38uc6cbf8PoNtTa63yQgn6Ak3ztw4PJtkMhoaju1%2FEeLZifWJMW2k2YFCOEGFTT3OHc&X-Amz-Signature=3bfc6684cff8243c4a7ef782551bc2c98a5f5200e095b0b638272c39226a5c01&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA267G3N%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeGN5yMZY%2BSsnN3u6onosiL2NdT2KooeE2JlZwNyazAgIgCiYzhIRcZE3Fq7LMjZeRmFtsi9nh5ATQUNfsH9YoP%2F4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA395Kh7GGUdL13fTSrcA7epBnspPt%2BdNjw%2F1ncoV452CIuyh4Ai9XrKveI6U%2BIgD1VTZM%2FC7npaEhymqVnHQ4GVPAP3%2BwvQJ%2Bfc%2Bt5EkRDrTpDDVWNqzZ7o6taK%2BCgNRTe%2F0xYsm7uxz1VTzbMieHkPbtoP7TIpBp5Aj%2FP3IUYtApgyt9YhlJE5Zy8erko41GwQ7Y560ZXRM%2BBWecl8tyySBBQXTQ7%2FMooHpjN5J1Wu9IX32WXPhjqCyJroN%2Fk89GOx2oDuK2BZhVTAY2SMTLjDdTVbvclEUhggjtw3NxLEMvgUAQrg%2FJl1Wfzb82imk9kI6f57tX3e5AYCs%2FUebBo4vOoFrmR%2F7tb6zjFqAV%2Bt8x1pWYCPzfryQqzCKWn%2B3Uk8ZdradM0shKsemG2MgE%2Fp6fUsM1mE%2FqYpSx2OHGlBtIXHqog2vw9CnWGr%2BXO8htoJyUumyxtqYVsDxeq79MD1NJ4wZHyoqfMj2o5b0AXjFXlHflj2PX1%2Fwg1a1YPh%2F6w0vTUdAx%2F2CQ2%2F2TPoXoEj4wWetGTVt6qZ1xwy2Nu6R2sLGH2ytu7PyxK%2FqEV5ViNqCdYU5QpYrtUk0AfIsinnb5UbeO2kQiw0ebYdGDUlLXURMlhOr069OALs0xeXyKw4mlaxbYIRtudPMIy50L4GOqUBvhMIoorxd0H2oFwbEFOUzoS1RiRpPIxoLzumaYpIPjcxlgtFD5fUD6jgtbMOi68hlErZU5nfCq47jlbHvMuze6FtvAAau%2BbMK7MWwGgyn6Cw%2BWW7elxeIdH2J66cVtwdbCK%2FW09Mb%2B04SntRGaDscluWy38uc6cbf8PoNtTa63yQgn6Ak3ztw4PJtkMhoaju1%2FEeLZifWJMW2k2YFCOEGFTT3OHc&X-Amz-Signature=d1c09b19d36da4c67a85091dc4911c07dea674129f60f7b5142dffdfcf0cda00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
