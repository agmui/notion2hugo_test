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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYMFF3ZE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDF%2B1JkjMjH5LlA%2FfkA9WtC6L1OwbdqBtcwOrTX2MbVawIgXKNRrF6E7okB2%2Fl%2B%2FTfcH%2F8YgfPgeFowLygJfA6Znucq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDL5VoRYBQy92rdAmKircA7BKh7z3OkGSZmBavtz4mfFdzGoEzSmtsojX3L3HseRIFFGkDqwXVx1%2BwvfdIv9X7QaFeP4ZQ5fcsii4dPxL%2F5xFFsW3uVHoziX4cjsiOjGLF8SR6K3DyjiJflrDpR0EsrncGU7wEVtYfPb9fgckfnF6HxE9Fgz5ZqcDF%2BFvCANUtUQYDIPnaPLCaTuuNoGNBaUehv1EEqG3R72pjzbZ5%2BQGMv06Rrh%2BsQbimpD4lhxk8FchCpARg2YyPQ7l5VYKpiWrlRAo%2Fq9114J0YVoLS30HaK8FvYGDLRV7JlwFpIVSS1771oghoRX60UOKxMpj2rH%2FAFW4l8UjpJLwOD3aJBXnPBmEV2202v39Huj2QX7SAjEq6BTy5HQkfKZ3547SQhJBxVuAYX3MjzHbqsf5NAw1IhenSBUkZHhMp7jf17Ouj21UMn%2FvSVyi92OaHxGCRPJHyUD2tKNo68X%2F69tR5Oa7CJh52%2Fhac5ybLeyoiye8GhfwS1NGpU9XoQv6879idIjfOEyqp7UncLwMo6C0pf%2FaVrCWKkSepwXKRb26gLZCTChgII8Z0YLsRe5xuY9sc7SxwdhoZCe0Ncw2BPoStnuGZ9xep5HUspiCno9OXvMERq0XPTc3N1yZnXafMK%2FSqcMGOqUBJsDM%2F%2FgPpNkaL5NfZLJUm3%2BABhpV3ZJgc2BHQb9iCAh%2FH7xKDUshVyP13PvB8lL38WoKmJ0PJhTIzvKZwjTIjtyPrbVDmDA0jC87O1Ki3lRVWaGsymnaADRgPrI4Qcq%2BzXXAUHxpdksZQLQpQI1dSqD88B4OtRTcPZdfGFL3cKGTa2CNvY7kcQ49IDlanaSRBUf4LW6aMQIsoMDKqMNuFNom3sC%2F&X-Amz-Signature=017f945d1db2513426fac260577754fd2087b6737bb15c064b07b3a8d2bd6446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYMFF3ZE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDF%2B1JkjMjH5LlA%2FfkA9WtC6L1OwbdqBtcwOrTX2MbVawIgXKNRrF6E7okB2%2Fl%2B%2FTfcH%2F8YgfPgeFowLygJfA6Znucq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDL5VoRYBQy92rdAmKircA7BKh7z3OkGSZmBavtz4mfFdzGoEzSmtsojX3L3HseRIFFGkDqwXVx1%2BwvfdIv9X7QaFeP4ZQ5fcsii4dPxL%2F5xFFsW3uVHoziX4cjsiOjGLF8SR6K3DyjiJflrDpR0EsrncGU7wEVtYfPb9fgckfnF6HxE9Fgz5ZqcDF%2BFvCANUtUQYDIPnaPLCaTuuNoGNBaUehv1EEqG3R72pjzbZ5%2BQGMv06Rrh%2BsQbimpD4lhxk8FchCpARg2YyPQ7l5VYKpiWrlRAo%2Fq9114J0YVoLS30HaK8FvYGDLRV7JlwFpIVSS1771oghoRX60UOKxMpj2rH%2FAFW4l8UjpJLwOD3aJBXnPBmEV2202v39Huj2QX7SAjEq6BTy5HQkfKZ3547SQhJBxVuAYX3MjzHbqsf5NAw1IhenSBUkZHhMp7jf17Ouj21UMn%2FvSVyi92OaHxGCRPJHyUD2tKNo68X%2F69tR5Oa7CJh52%2Fhac5ybLeyoiye8GhfwS1NGpU9XoQv6879idIjfOEyqp7UncLwMo6C0pf%2FaVrCWKkSepwXKRb26gLZCTChgII8Z0YLsRe5xuY9sc7SxwdhoZCe0Ncw2BPoStnuGZ9xep5HUspiCno9OXvMERq0XPTc3N1yZnXafMK%2FSqcMGOqUBJsDM%2F%2FgPpNkaL5NfZLJUm3%2BABhpV3ZJgc2BHQb9iCAh%2FH7xKDUshVyP13PvB8lL38WoKmJ0PJhTIzvKZwjTIjtyPrbVDmDA0jC87O1Ki3lRVWaGsymnaADRgPrI4Qcq%2BzXXAUHxpdksZQLQpQI1dSqD88B4OtRTcPZdfGFL3cKGTa2CNvY7kcQ49IDlanaSRBUf4LW6aMQIsoMDKqMNuFNom3sC%2F&X-Amz-Signature=8ca692576598c8849f09e926eb5276e265b77a269d849d9d1d3c915e5d3800fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
