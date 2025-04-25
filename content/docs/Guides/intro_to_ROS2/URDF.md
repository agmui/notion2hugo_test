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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QUXSPKF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChHPJO%2FbTv1h%2FYHdkRXrNmxdR2bPdP06AMA7pJAXBSbgIgUFy16uL8K1Z3viIqaUwNcjcrQvkyWY3I%2FLNikk%2FDtWMq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDDDoW85t6XzqTPxYwyrcA7F3R%2F1fK32DypFcvxHV%2FCJL2yCBYuBvkmVQ%2BlZ0fPSziUX%2B5TtoZ3C6yKT96lRxc9Gqtnl5n0MyLysl%2B7fWQaGy0uWBfL7%2BtdxXixwkVQj5hcnA074HcI5NTE%2FVjhIunBJw8t2ywcOsJjQNzKdHTayRiSLA6GmtJHCjolb419oAqTmMAWfbLnGJFStznnTo3Zz3gQbAqPa%2FwMrEEdjqPI%2BRPl%2FrtBRmQ7DliipyR%2F2tecEv8kOUSuLo%2B4bxVkqKNauvIlut%2FXnJCVfdzfIRDthqScI0FKd4djL4BkWYKY1PJGRkmuvHEcf62Z3ZOGdLm3NEvP7%2Bhjiy%2F12Y4Dife12OrkuA3RD08W1MJ8YPDa7Qt1kk5eFTYrhx49Ksz6QAtwd1SEIdTlGNdH5L2BO5%2F0EOg4GIk1Kvtc7pcacZxcr%2BGiSNEeQyKG%2FF09qje5rdCvEujMAfYOHhFrVtmlsJWgtOo90JqohyPSsA84pYCaX%2B0f9KfYyQdJQGBnFVIcNK1veLrj3Hf4BZj%2Fv8GskGqoLfRc9PRMUH%2FxleKaH4iASxDfl72JGnw5h%2FSgLSXexAl9u8OnrcDunoG3weNOrgLohg42fdXm90QgVtpZMWMIK55SQaovMJVXOIcUc%2FMIjOrsAGOqUBye9mQLswEA2%2BvA0tGpw0TtDWvcf6Uk2p4tabW%2B3ubE%2BB7CKtE4KDjrmjQr5OB%2Fe7Hx%2BKown%2FHwBvu1huwt1j0QoslEz8P%2BL%2FGcjdWwkPRTTfoGnTeuD44fazjCe59G1xirXEl5cPD%2FmGyQ0qGqZ3q0POxLRP6Xwv1zgNywu2O2INvbut8B5qkFP4WszUMkSAFJLRJ1%2FJwTyjzr5uvDbuaVI%2BE0fP&X-Amz-Signature=1c952015489d89c1c877a64c2338f50e9e100b65411263c01e6528f9f2741de2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QUXSPKF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChHPJO%2FbTv1h%2FYHdkRXrNmxdR2bPdP06AMA7pJAXBSbgIgUFy16uL8K1Z3viIqaUwNcjcrQvkyWY3I%2FLNikk%2FDtWMq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDDDoW85t6XzqTPxYwyrcA7F3R%2F1fK32DypFcvxHV%2FCJL2yCBYuBvkmVQ%2BlZ0fPSziUX%2B5TtoZ3C6yKT96lRxc9Gqtnl5n0MyLysl%2B7fWQaGy0uWBfL7%2BtdxXixwkVQj5hcnA074HcI5NTE%2FVjhIunBJw8t2ywcOsJjQNzKdHTayRiSLA6GmtJHCjolb419oAqTmMAWfbLnGJFStznnTo3Zz3gQbAqPa%2FwMrEEdjqPI%2BRPl%2FrtBRmQ7DliipyR%2F2tecEv8kOUSuLo%2B4bxVkqKNauvIlut%2FXnJCVfdzfIRDthqScI0FKd4djL4BkWYKY1PJGRkmuvHEcf62Z3ZOGdLm3NEvP7%2Bhjiy%2F12Y4Dife12OrkuA3RD08W1MJ8YPDa7Qt1kk5eFTYrhx49Ksz6QAtwd1SEIdTlGNdH5L2BO5%2F0EOg4GIk1Kvtc7pcacZxcr%2BGiSNEeQyKG%2FF09qje5rdCvEujMAfYOHhFrVtmlsJWgtOo90JqohyPSsA84pYCaX%2B0f9KfYyQdJQGBnFVIcNK1veLrj3Hf4BZj%2Fv8GskGqoLfRc9PRMUH%2FxleKaH4iASxDfl72JGnw5h%2FSgLSXexAl9u8OnrcDunoG3weNOrgLohg42fdXm90QgVtpZMWMIK55SQaovMJVXOIcUc%2FMIjOrsAGOqUBye9mQLswEA2%2BvA0tGpw0TtDWvcf6Uk2p4tabW%2B3ubE%2BB7CKtE4KDjrmjQr5OB%2Fe7Hx%2BKown%2FHwBvu1huwt1j0QoslEz8P%2BL%2FGcjdWwkPRTTfoGnTeuD44fazjCe59G1xirXEl5cPD%2FmGyQ0qGqZ3q0POxLRP6Xwv1zgNywu2O2INvbut8B5qkFP4WszUMkSAFJLRJ1%2FJwTyjzr5uvDbuaVI%2BE0fP&X-Amz-Signature=476c3cda31f52ed449699db10dc186af2b51bced8b94f6f664853ebe4f5d8630&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
