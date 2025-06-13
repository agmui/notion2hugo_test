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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DUU54K2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCEnksALdOhM%2BUeRmGVqnPs3jxPvKzvhmLCnpY97Gbj%2BAIgNDf7lNzHwP2nCbnJuunqXNOjCZIjEOUKsQV1jQSVfNQq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOa4LM6J4FSSS9jU3SrcA7w63isK9Xaf2yXdiN82ThZ1azreq1KA6x9vRkrJwyq80CRSVwYu1lyZmvQWOrqOZ9fq0cNkUxmCDJ7N402ylqqND1FpJKLU7jVYWVUhNw2dO%2F8VxLrrhdtVz%2FZCyls1fES%2BxMZJV745Gi6anvt1W2Tuq1bPV8xVX%2BS%2FHpsI6GUnDCraiAMcX4HzzEv1nG750b%2Bl4BKCEr1b4N3rtOEe%2FiKWoV%2Fdw8DBwNQ%2FrooGkssVlxUehlFSR4kvbmMHExMmFtNM%2Bhp8mRy8oSWteoBi6K%2F1gFT8kbP4ghIhKSMJTLzHY%2FTruYuDTvK61NQ%2F964hlB%2FXo8j%2FFj0tpQjktBuiXNDLnQkFifVQqEhKoL8%2BRIZhb1ypGB8Xe%2BrEjIwCdvUPMcghGEyagkGmY7aF6WfpqHsJcxPiudSNQUOkLOYqW%2FZNX2bJjpaK22%2F3uyer3oqc65gJRBH%2BrpLTqJib8uTLab3d22OhjpLSw2O8aegcUcuJBAVkvveZbOfaBYmb9%2B7BZ%2FVpM2O0zPabuG870LJLT8sduKOlw0XbspgwQLL7dVXdnEaU%2BpPUO8xRtDK%2BIqmP9USTX7RYGi%2BdiYrLMWUUInJD0FomVGuE8BOqV8SasSAO%2FpVg6G3giUZbi9CKMMjcssIGOqUBvTpmWpjB9ye7bAP36%2BWRCKSBItvprQtKs7VvvsS6X6sTt1WIkwCFqC7j2vbiUufbus%2BYj2FUexhqB%2Fnx0lm63p5X2UAdUZDuZJ3NTHvWWUIdr0kqzM3uDrXEMXHeKhM93HLVoHbT9X%2Fo%2F%2B9PLbxS6a8eH6ISfqv3QD3mpXLZvg2qMzv8%2Fxs%2BZxzhihgdCjilqIMsaK8WYCQUSznPAQqVrZbt6Ex6&X-Amz-Signature=633185d3fd2a0c3c079121610a02f3930769b2bbfa554ea553e2c6b626b9fce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DUU54K2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCEnksALdOhM%2BUeRmGVqnPs3jxPvKzvhmLCnpY97Gbj%2BAIgNDf7lNzHwP2nCbnJuunqXNOjCZIjEOUKsQV1jQSVfNQq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOa4LM6J4FSSS9jU3SrcA7w63isK9Xaf2yXdiN82ThZ1azreq1KA6x9vRkrJwyq80CRSVwYu1lyZmvQWOrqOZ9fq0cNkUxmCDJ7N402ylqqND1FpJKLU7jVYWVUhNw2dO%2F8VxLrrhdtVz%2FZCyls1fES%2BxMZJV745Gi6anvt1W2Tuq1bPV8xVX%2BS%2FHpsI6GUnDCraiAMcX4HzzEv1nG750b%2Bl4BKCEr1b4N3rtOEe%2FiKWoV%2Fdw8DBwNQ%2FrooGkssVlxUehlFSR4kvbmMHExMmFtNM%2Bhp8mRy8oSWteoBi6K%2F1gFT8kbP4ghIhKSMJTLzHY%2FTruYuDTvK61NQ%2F964hlB%2FXo8j%2FFj0tpQjktBuiXNDLnQkFifVQqEhKoL8%2BRIZhb1ypGB8Xe%2BrEjIwCdvUPMcghGEyagkGmY7aF6WfpqHsJcxPiudSNQUOkLOYqW%2FZNX2bJjpaK22%2F3uyer3oqc65gJRBH%2BrpLTqJib8uTLab3d22OhjpLSw2O8aegcUcuJBAVkvveZbOfaBYmb9%2B7BZ%2FVpM2O0zPabuG870LJLT8sduKOlw0XbspgwQLL7dVXdnEaU%2BpPUO8xRtDK%2BIqmP9USTX7RYGi%2BdiYrLMWUUInJD0FomVGuE8BOqV8SasSAO%2FpVg6G3giUZbi9CKMMjcssIGOqUBvTpmWpjB9ye7bAP36%2BWRCKSBItvprQtKs7VvvsS6X6sTt1WIkwCFqC7j2vbiUufbus%2BYj2FUexhqB%2Fnx0lm63p5X2UAdUZDuZJ3NTHvWWUIdr0kqzM3uDrXEMXHeKhM93HLVoHbT9X%2Fo%2F%2B9PLbxS6a8eH6ISfqv3QD3mpXLZvg2qMzv8%2Fxs%2BZxzhihgdCjilqIMsaK8WYCQUSznPAQqVrZbt6Ex6&X-Amz-Signature=d1e29d8ca608aa4d5770131964f75f28acdb00fdf90bb9be7a427d88edcbe3b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
