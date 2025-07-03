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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47IZG6M%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIAwe7jdOxAjroAU7hDlEZAJNvKJ0CRTUq8LT4S6yUovuAiEA69fIhdXInJyBO4UNhWI3owqQPRC1cEx6sV5RGoHipnMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDNs6JY9s381p4W3iSrcA4CHB%2F8000dT%2BhGbj%2FvojB9TN5KGu8PtfuPlklipHptztEqhpa0HP0TlyMIXPXA9HvyDugIWcE9Ee23y520x4djWcu6Vy5jvR4t5QhGKzq8PQD1tBqftMTobPpcReVBNhp%2FNh1uZC40SR2Lp%2FNyq1G9ulA8jz8c1Un0jPn2tQcxy%2Fx%2BIRjPOxYCh%2FWJIB%2BUkRiiyXX8dnWzZd5PSiwdHPwyG9%2FX0cb1a9nvA5x5joemzpEz5tZxc4DyvzBnkBuoO7vW2E%2FdbEg2a628hotlWPieSN4UfcFGNPbdV23frN982lnq4WEEnn6q0C2p%2B7xPHOLEeJDonSNgDYM39aObcIPJeMAz5UePvhiybQ1sWIYKDw1PQBTFw6BVrfJBQC2E9gS2jnunQtnq2TkY5%2Fkrfb9S7NDeMvrcQt4eUMZOxC1n7%2BaOJ%2F87zEiH1QYj1u3K8yeXcDdV8IOFHAedOYklFvPHzW9EdxjMzBwyGj11qe%2FDWMgw80XuUyRfPQljqpvCiJ8reB7trbA7tGS5K93AjWXr7oXPCmHvJH5Talt8wQD6KSLU2I%2FLaxEqxSFGbVAuYHO5PG20oEPIZizTqCp6I8Wo%2F44y2AM5Xp7ULrRI0uAyNDOdEjCB1yBard3m5MPu7m8MGOqUBr%2Fks2vdrMT9JKFQiCh6d%2BM87fadaiKVD2Wqh4ruK6hdVpRG7KePnarbZ09EqgLpnGrTtzQVoSYK59%2BQAKQhdb7ARn0hjzELkIL0srwcVGk1kN29n453v4NoI6angiO5bPT4TzsasFfenWJTYndYQne%2FSUaZdPPPN6dp98bsv%2FJa58IQjfFg15AXVInYAVdyvALI3ipXu%2BlgrkI7dRo49dUb4VGSv&X-Amz-Signature=7199712d0e830f89f754efcaa723d6c52067b5195535df4334b78e95734b150b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47IZG6M%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIAwe7jdOxAjroAU7hDlEZAJNvKJ0CRTUq8LT4S6yUovuAiEA69fIhdXInJyBO4UNhWI3owqQPRC1cEx6sV5RGoHipnMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDNs6JY9s381p4W3iSrcA4CHB%2F8000dT%2BhGbj%2FvojB9TN5KGu8PtfuPlklipHptztEqhpa0HP0TlyMIXPXA9HvyDugIWcE9Ee23y520x4djWcu6Vy5jvR4t5QhGKzq8PQD1tBqftMTobPpcReVBNhp%2FNh1uZC40SR2Lp%2FNyq1G9ulA8jz8c1Un0jPn2tQcxy%2Fx%2BIRjPOxYCh%2FWJIB%2BUkRiiyXX8dnWzZd5PSiwdHPwyG9%2FX0cb1a9nvA5x5joemzpEz5tZxc4DyvzBnkBuoO7vW2E%2FdbEg2a628hotlWPieSN4UfcFGNPbdV23frN982lnq4WEEnn6q0C2p%2B7xPHOLEeJDonSNgDYM39aObcIPJeMAz5UePvhiybQ1sWIYKDw1PQBTFw6BVrfJBQC2E9gS2jnunQtnq2TkY5%2Fkrfb9S7NDeMvrcQt4eUMZOxC1n7%2BaOJ%2F87zEiH1QYj1u3K8yeXcDdV8IOFHAedOYklFvPHzW9EdxjMzBwyGj11qe%2FDWMgw80XuUyRfPQljqpvCiJ8reB7trbA7tGS5K93AjWXr7oXPCmHvJH5Talt8wQD6KSLU2I%2FLaxEqxSFGbVAuYHO5PG20oEPIZizTqCp6I8Wo%2F44y2AM5Xp7ULrRI0uAyNDOdEjCB1yBard3m5MPu7m8MGOqUBr%2Fks2vdrMT9JKFQiCh6d%2BM87fadaiKVD2Wqh4ruK6hdVpRG7KePnarbZ09EqgLpnGrTtzQVoSYK59%2BQAKQhdb7ARn0hjzELkIL0srwcVGk1kN29n453v4NoI6angiO5bPT4TzsasFfenWJTYndYQne%2FSUaZdPPPN6dp98bsv%2FJa58IQjfFg15AXVInYAVdyvALI3ipXu%2BlgrkI7dRo49dUb4VGSv&X-Amz-Signature=3bc67aaf7f21a12210b1816e4c6d0af310fdcb9b3453296ea62a40db83fe0d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
