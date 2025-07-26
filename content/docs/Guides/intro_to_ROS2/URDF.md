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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJKDADC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCc9dwafUKdCrzZtSjsAmACAxp9HTbb9kgOarXxeKZ7WAIgKh5C8xkQTGrjGee1XmTFcGyrlZvpCfQkhsSQePZLkAcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJbci3fUFolJTs6TsSrcAx3FQOi8F23Fj8zXs%2B43b2s6Bzk0RDz3t4UCAFFJusCw6k0ZkYDWpmUgw9dfGzgUIkUHiT4Lhof8gzR2dY%2BPjOZBV3eXrhpR0Y9tIA4JOBcpJTYmuUZ7xrSUV1ZHt3pg%2FYV97dkoyEYFOhjbx02Bglv%2BstRKcH9slCFrQSCNJ2ozsfiGycLnVHqR3AFxAp7uD25QBLUd1ciscJeoEj3ONVkzPwGIORVHlKW9yY8HcDZvmuenXBP2BHgJxAu2TfoVBtP1EDV7xcNcOLHT%2ByrUkgzMsFCHJ79qbd6dzJbg51ZbNokB40WiRNiRf4gH21rtiit0o1MhCvILErqL7X1SoyyRrBP%2BufOoiv%2FjFAs4Y4iyH5oZeS5mOi3UAaqPfPq8uK%2Fcfp6Be%2BWjMQLj5girUOw53Aj78ME1bTMzUeUvq1PB3wqQZi56IFOMYL2LBkcgvpC6oeHv%2BdZt%2BlxvrCM0HFc5TDKprY%2Fl6goo%2FI1xlvkNtjsnf7l3T0kO4LLRGQp96633lTfdr7fpRwFLs7zBygIPEwgPYQA%2FeeBqJJYxzlwYE2%2F%2FoLjGL2yy7ycWoLn9htBQtRIGVbrcFV572QCtmYINcxPjK1YM81O%2F6me14gEK3LEUAFXLHa2jMcXqMNzBk8QGOqUBWAlkeotsAcddC2kYUlFOpqE0frdR8M9qjItVbjYAEbVd2VsqjB4RfchUW%2Fq1jGNUCIW47rICRFdouGELZUZiE3NB8J%2F7gSQ6jz0S7EM%2FO6nOeP2YCbRjVAqP6Dvc8nYmaGdFVI34TUD9%2BEO5SKP9AgTxt6n%2BSK1bAyXcT04iyXg08E9RQmtbZKeRZm%2B3lbxED7xZJUyD7ClwUjEL6tAulK3LiBJG&X-Amz-Signature=90c6661e2bf1fd9a525bfac8e7950436dd659b9ca2b502b9f9e166e36380ce84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJKDADC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCc9dwafUKdCrzZtSjsAmACAxp9HTbb9kgOarXxeKZ7WAIgKh5C8xkQTGrjGee1XmTFcGyrlZvpCfQkhsSQePZLkAcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJbci3fUFolJTs6TsSrcAx3FQOi8F23Fj8zXs%2B43b2s6Bzk0RDz3t4UCAFFJusCw6k0ZkYDWpmUgw9dfGzgUIkUHiT4Lhof8gzR2dY%2BPjOZBV3eXrhpR0Y9tIA4JOBcpJTYmuUZ7xrSUV1ZHt3pg%2FYV97dkoyEYFOhjbx02Bglv%2BstRKcH9slCFrQSCNJ2ozsfiGycLnVHqR3AFxAp7uD25QBLUd1ciscJeoEj3ONVkzPwGIORVHlKW9yY8HcDZvmuenXBP2BHgJxAu2TfoVBtP1EDV7xcNcOLHT%2ByrUkgzMsFCHJ79qbd6dzJbg51ZbNokB40WiRNiRf4gH21rtiit0o1MhCvILErqL7X1SoyyRrBP%2BufOoiv%2FjFAs4Y4iyH5oZeS5mOi3UAaqPfPq8uK%2Fcfp6Be%2BWjMQLj5girUOw53Aj78ME1bTMzUeUvq1PB3wqQZi56IFOMYL2LBkcgvpC6oeHv%2BdZt%2BlxvrCM0HFc5TDKprY%2Fl6goo%2FI1xlvkNtjsnf7l3T0kO4LLRGQp96633lTfdr7fpRwFLs7zBygIPEwgPYQA%2FeeBqJJYxzlwYE2%2F%2FoLjGL2yy7ycWoLn9htBQtRIGVbrcFV572QCtmYINcxPjK1YM81O%2F6me14gEK3LEUAFXLHa2jMcXqMNzBk8QGOqUBWAlkeotsAcddC2kYUlFOpqE0frdR8M9qjItVbjYAEbVd2VsqjB4RfchUW%2Fq1jGNUCIW47rICRFdouGELZUZiE3NB8J%2F7gSQ6jz0S7EM%2FO6nOeP2YCbRjVAqP6Dvc8nYmaGdFVI34TUD9%2BEO5SKP9AgTxt6n%2BSK1bAyXcT04iyXg08E9RQmtbZKeRZm%2B3lbxED7xZJUyD7ClwUjEL6tAulK3LiBJG&X-Amz-Signature=95393a8ca27d73292973301a0cb50b2b810c5fa5562a62eb08c46bbc8222b9bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
