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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T32ZGBX5%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCdlE2izS80bsrnX4NY5CPc8Ia0ltitp9w2nMm%2Bb3NnKwIgDA1%2BZyrH%2BMjODwwvk0l6Vtk2JHUBBU0NRcnxCY3uGqoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjT60lEqDOTefckBSrcA4q9n79ChjMYvo3sJuByMELTONu7LWjbJrgxsIOI6xoOGR9y31FV2F3FpEHgrO%2FwIGesFSg2SIS%2F9VfJ0TqEgJtGJKBsR3da8jxpHqoSlSykMLmww0qtM1Ut6j4KlZJHDa7zJ2R4lbunPMYwf%2Fb4uZ%2BWNj1H9BxRojDEQtLQlxSONxoqIcT33ufyuExq25HK60x0vkYvm9x7OqFR5nbEYMqi%2F68ARHiGRAzfsNVzGmzP%2FIJaPfVlBNL5TamBaWiJ76ynmtaGK%2FHwEvK%2FAdVj2gDtlwr4ME2o9VqHoHQPdSpGsCtBNFhDYerqavxavZLNI3EevWDEsCkXh2VFNSEz1NXnvJPTqS%2Fo4VIc7RQKvqhq%2FPNwHUoYhGy%2F1FavpQyY7VvYfxZ35D6etIw%2BqmzDH%2BCyl5guqKcMqlvy04CZahkhbsgQEwiiCVXotZzfO7m%2BEFhSjgUB%2BRLnkolRxULyUBxYD1KX31QLcIMOsfvdhGgJwYCD9%2BpO6c5KCtvk35GMxC%2FYkeePKbEGSvmdG3h7%2FASHBdwxalM%2BwSpNcWfemnyd7gtx6w5w95KaKB086qpIJbgRbFd4miA2m6fFNc7TrPlKAOXDMyzEA50VGbV2M4fKOg68ROFirF%2FpqSOFMOug18AGOqUBSK2Z8D%2BwQ%2BBpxCu7nIV4WhHAS1OogVglwLZcwKRMxiISo6rb14i3PLGpwp%2BmlR4bWUgvRxiljU%2BEKo21M3atXRQd0Uh8uTZ0ohzhoMRhl4jDFPTEqFOahV%2FSSkUzCMGB1%2F9QX27OVQx%2FT%2BF0ZyaAQStglILoYa6CIdCR%2FR99s8GxGyiuejFH%2ByVTDun9VoFn7OPEKYyTSX8hInoKmYt6lOeC%2FLLI&X-Amz-Signature=81da373145f5f711d66fb5d91e7235ca039eb02b6542f9347e1d03d251513b4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T32ZGBX5%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCdlE2izS80bsrnX4NY5CPc8Ia0ltitp9w2nMm%2Bb3NnKwIgDA1%2BZyrH%2BMjODwwvk0l6Vtk2JHUBBU0NRcnxCY3uGqoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjT60lEqDOTefckBSrcA4q9n79ChjMYvo3sJuByMELTONu7LWjbJrgxsIOI6xoOGR9y31FV2F3FpEHgrO%2FwIGesFSg2SIS%2F9VfJ0TqEgJtGJKBsR3da8jxpHqoSlSykMLmww0qtM1Ut6j4KlZJHDa7zJ2R4lbunPMYwf%2Fb4uZ%2BWNj1H9BxRojDEQtLQlxSONxoqIcT33ufyuExq25HK60x0vkYvm9x7OqFR5nbEYMqi%2F68ARHiGRAzfsNVzGmzP%2FIJaPfVlBNL5TamBaWiJ76ynmtaGK%2FHwEvK%2FAdVj2gDtlwr4ME2o9VqHoHQPdSpGsCtBNFhDYerqavxavZLNI3EevWDEsCkXh2VFNSEz1NXnvJPTqS%2Fo4VIc7RQKvqhq%2FPNwHUoYhGy%2F1FavpQyY7VvYfxZ35D6etIw%2BqmzDH%2BCyl5guqKcMqlvy04CZahkhbsgQEwiiCVXotZzfO7m%2BEFhSjgUB%2BRLnkolRxULyUBxYD1KX31QLcIMOsfvdhGgJwYCD9%2BpO6c5KCtvk35GMxC%2FYkeePKbEGSvmdG3h7%2FASHBdwxalM%2BwSpNcWfemnyd7gtx6w5w95KaKB086qpIJbgRbFd4miA2m6fFNc7TrPlKAOXDMyzEA50VGbV2M4fKOg68ROFirF%2FpqSOFMOug18AGOqUBSK2Z8D%2BwQ%2BBpxCu7nIV4WhHAS1OogVglwLZcwKRMxiISo6rb14i3PLGpwp%2BmlR4bWUgvRxiljU%2BEKo21M3atXRQd0Uh8uTZ0ohzhoMRhl4jDFPTEqFOahV%2FSSkUzCMGB1%2F9QX27OVQx%2FT%2BF0ZyaAQStglILoYa6CIdCR%2FR99s8GxGyiuejFH%2ByVTDun9VoFn7OPEKYyTSX8hInoKmYt6lOeC%2FLLI&X-Amz-Signature=26b8bbc80ef142e993abfb1aa819db59893a99deec9d40ce0addee1feec31fdb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
