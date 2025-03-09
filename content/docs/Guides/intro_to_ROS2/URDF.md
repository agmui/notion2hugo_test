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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RARSMGNR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCS13djKceAG1SGnG6G0%2FZJk2qQWQravIXgQY%2BIEAQacAIgaatj8T1mlgb9t9%2BbRK1C5abZ5pM27nDzvAIRMRCxV3cq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMXULAtkTWevskCozCrcA26p5URy%2BrjoBEBhopzmdBUZbc0bi0xMk5A5FhLBVNrqONtaxUOUbiT6TXqqCPDNA6TEB40ntEY%2BXwsPd7BEYE9SNLJDWosMm4dujt9UoMqqA9KHAhxiHi6ts%2BaYyk5WPvlgWsmbMXxcSpRuipAr5VsyxFcD%2FryOKDXr%2FA%2BXV6y3F0VEhubfePlI%2Bb9ytIfkpFnHI89IboevkC%2FuNSUsR5nk5WFv6rDqhTaxx2tPZck3UcQqLDatSzFt7fQ%2Fvb5kpZs%2Bw1giwIjkttqdKsQCw34e%2BevdBHmHfmSl4aMtH6luMBoRWmCejTMS17x7BNeJpjksfAJQZceGdIqdwRDnHqraGaw1pkeJIrHrRwOklwF6JTrpKm35kUuaHQ%2Bgo2GvCuHAtHHKYiy%2BEJt0GibmqIRMMphUb7P8ZPf97Os%2FBVtivoBHoQCh%2FZMPMijfRLon%2F5UXzu5LrplTypWtD%2BpkTcRiJeWG75T5evGMJmld305CT3Q55DhSFbP5iH2zRD8sFaYwedoruvMnk7b4UM4mJ6PQUhGCtlgKEfpn%2FtJbKFGEm1knea9DnyWTcZ6lfwbEFdgutOfgFNwjgm968ueC9uiY9egGM5Ozi1PlEmS5CgdOhW3MpjY32PUAM6M3MOTgt74GOqUBsrrWsljGDqubEzv1QsIO1iBEyf3n8pwP8y9zF5zKc2Ym%2FC3RojEjIVoG%2FGsh5aFH4crngAecL6fCpFXlii0H4Pja8KIFdT45ySJuGQ2mjl9dQcQeoa0n%2BDd1JBd%2Fm6M9R6QhcpWLFurHSxTmm6OkqWOsvH3k9lo41DDFsEL9jFGpXGbYW0TELbasEjRmJ5ZOEDOOK0S7SewDtzXb86RtK2oePxsh&X-Amz-Signature=c6d7d89a208fae9704edd9d14b7d01dc74c0bf85f36f56834a71af6cba4718d7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RARSMGNR%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCS13djKceAG1SGnG6G0%2FZJk2qQWQravIXgQY%2BIEAQacAIgaatj8T1mlgb9t9%2BbRK1C5abZ5pM27nDzvAIRMRCxV3cq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMXULAtkTWevskCozCrcA26p5URy%2BrjoBEBhopzmdBUZbc0bi0xMk5A5FhLBVNrqONtaxUOUbiT6TXqqCPDNA6TEB40ntEY%2BXwsPd7BEYE9SNLJDWosMm4dujt9UoMqqA9KHAhxiHi6ts%2BaYyk5WPvlgWsmbMXxcSpRuipAr5VsyxFcD%2FryOKDXr%2FA%2BXV6y3F0VEhubfePlI%2Bb9ytIfkpFnHI89IboevkC%2FuNSUsR5nk5WFv6rDqhTaxx2tPZck3UcQqLDatSzFt7fQ%2Fvb5kpZs%2Bw1giwIjkttqdKsQCw34e%2BevdBHmHfmSl4aMtH6luMBoRWmCejTMS17x7BNeJpjksfAJQZceGdIqdwRDnHqraGaw1pkeJIrHrRwOklwF6JTrpKm35kUuaHQ%2Bgo2GvCuHAtHHKYiy%2BEJt0GibmqIRMMphUb7P8ZPf97Os%2FBVtivoBHoQCh%2FZMPMijfRLon%2F5UXzu5LrplTypWtD%2BpkTcRiJeWG75T5evGMJmld305CT3Q55DhSFbP5iH2zRD8sFaYwedoruvMnk7b4UM4mJ6PQUhGCtlgKEfpn%2FtJbKFGEm1knea9DnyWTcZ6lfwbEFdgutOfgFNwjgm968ueC9uiY9egGM5Ozi1PlEmS5CgdOhW3MpjY32PUAM6M3MOTgt74GOqUBsrrWsljGDqubEzv1QsIO1iBEyf3n8pwP8y9zF5zKc2Ym%2FC3RojEjIVoG%2FGsh5aFH4crngAecL6fCpFXlii0H4Pja8KIFdT45ySJuGQ2mjl9dQcQeoa0n%2BDd1JBd%2Fm6M9R6QhcpWLFurHSxTmm6OkqWOsvH3k9lo41DDFsEL9jFGpXGbYW0TELbasEjRmJ5ZOEDOOK0S7SewDtzXb86RtK2oePxsh&X-Amz-Signature=626244112b0b5cf5e2d785747ee7a38ea6607db9d8dc98cc1f9d33dec3e06c20&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
