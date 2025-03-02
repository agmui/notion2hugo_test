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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6LHHTD%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC8jMex%2B5aotFWk62%2FVmnGfnhAUeKoHOnlg1V6rc7dvzgIgLauVfsepdJdhl4wCW730THEamceLzieY5h1pHUDIJVUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbFm7CpbD%2BMppdOYyrcA9rYiZZ7SmdpjLpxMOxw2%2BTP8OJqq5agq5ays%2B2093pykKSX88Jno5gq752e1bBurpri7rWjsxMhp321spRDw0e6w1%2ByzBUswRUVDfbUW%2F41UqJWmByfgRu8z0pNRuvI0AD3Ev2VSMKDE12jDnVSONPY8aYbVPuU8cXfZpb%2FfWFvPcoSusBFNp30rOLiXOmt%2FYNVTgAwGxLA65KVpleAL94W4TpHb3gqHKvGQc5rwALei8C6ujygrcY%2Bk9TYR%2BS2L8evKxkvVy05suMWapM63mA%2FZxofFk2cFidGs5W9W4iiUVFhG8G2vnZEBAyZa0fWDn8idFi79ATHrSqSYE8eiHO3w1oUOmq3w1jMvKbXE6U9sZDLWdjGEsWczlThmCzhB7TFwroFRvAxfMjkaM4kzXc7XLgWm6WvYqe6kJ7T%2Bco8upyUd3mP7SQ22Dm5MimU5jEaovQmjscfdS5BZlgNl3WA7uhXScS2CKMinS%2Bo8a44NigN8ZoNVdDzPnWHo%2FCXDWJ9w2QnkRt0plbBrMqwsBncMZ03oW9EuMZ95b1QbtwaFuiwgoHltCitCURHbP%2F%2Ft%2BxwteLpQ0J0JRWYvH8PuJKd6QWTxHQkJuJZhgj%2Bug%2Br%2BOqNb5J2AlIFtws9MN3Xj74GOqUB8suRzFfYpv9Olm8FaXq7NwsY5oJ%2BELTz9XRa8RxiGr6XWCowgeqCirpY3e4%2FEimZGEqPMSndENvzqVBt0%2B1Q51juvVfONqKudsQF59HzOIMFX%2BNyjuy7ucB8Q1BLzou4vnsRikeYoBW70jzgCnyy39yllCNFormw%2BBsZ4YGdy9EeDdFq5NmSfylQTMsP%2BK3VnZrfIE3Rfj2eQ27G5Afj%2FFaEIRUB&X-Amz-Signature=6363b2abf3fb193105250fd03ed9d313525da48045bb6ad411ca09f6364c16b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6LHHTD%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC8jMex%2B5aotFWk62%2FVmnGfnhAUeKoHOnlg1V6rc7dvzgIgLauVfsepdJdhl4wCW730THEamceLzieY5h1pHUDIJVUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbFm7CpbD%2BMppdOYyrcA9rYiZZ7SmdpjLpxMOxw2%2BTP8OJqq5agq5ays%2B2093pykKSX88Jno5gq752e1bBurpri7rWjsxMhp321spRDw0e6w1%2ByzBUswRUVDfbUW%2F41UqJWmByfgRu8z0pNRuvI0AD3Ev2VSMKDE12jDnVSONPY8aYbVPuU8cXfZpb%2FfWFvPcoSusBFNp30rOLiXOmt%2FYNVTgAwGxLA65KVpleAL94W4TpHb3gqHKvGQc5rwALei8C6ujygrcY%2Bk9TYR%2BS2L8evKxkvVy05suMWapM63mA%2FZxofFk2cFidGs5W9W4iiUVFhG8G2vnZEBAyZa0fWDn8idFi79ATHrSqSYE8eiHO3w1oUOmq3w1jMvKbXE6U9sZDLWdjGEsWczlThmCzhB7TFwroFRvAxfMjkaM4kzXc7XLgWm6WvYqe6kJ7T%2Bco8upyUd3mP7SQ22Dm5MimU5jEaovQmjscfdS5BZlgNl3WA7uhXScS2CKMinS%2Bo8a44NigN8ZoNVdDzPnWHo%2FCXDWJ9w2QnkRt0plbBrMqwsBncMZ03oW9EuMZ95b1QbtwaFuiwgoHltCitCURHbP%2F%2Ft%2BxwteLpQ0J0JRWYvH8PuJKd6QWTxHQkJuJZhgj%2Bug%2Br%2BOqNb5J2AlIFtws9MN3Xj74GOqUB8suRzFfYpv9Olm8FaXq7NwsY5oJ%2BELTz9XRa8RxiGr6XWCowgeqCirpY3e4%2FEimZGEqPMSndENvzqVBt0%2B1Q51juvVfONqKudsQF59HzOIMFX%2BNyjuy7ucB8Q1BLzou4vnsRikeYoBW70jzgCnyy39yllCNFormw%2BBsZ4YGdy9EeDdFq5NmSfylQTMsP%2BK3VnZrfIE3Rfj2eQ27G5Afj%2FFaEIRUB&X-Amz-Signature=393515e0d142a7b7be798c8645e81ede02b70055bfc259291eee50611a3d37ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
