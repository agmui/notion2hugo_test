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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH5FHNN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICdN9t3SCwgbj2oXlm1h%2B0ClAH10uncznfKI9VS3MLkeAiA4B9xsvefJv923faCZLlU1UwCHOk6SkUmY4Alvv21ZUyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMfX3%2F%2FMpSFRKDY16eKtwDXx%2BC3PcoVEcJZSLdXUy6Y4B362CwZekfYkGPy1vzObuiukDB6d7Lemea2B%2BhPyqFLRv7mXUNgSZKOZBdjtsFgK1VugXYKT4T6jR2L2CS9AlnfUbHnnqVi2w5rkFr5z%2BQ6V8COx7htxw5KN9zD%2FEbJ7JeJnSor2wqLDrFIhvYEHnv0eg0ZoJaDC7GB%2BL%2BSeyo%2BQVvEOfAXWMRlzaFCw9GRAr9%2Bgh6wFRXZj5zbz7J9yogzW4Du3Vuzxlvgas378vXYjGTRddHEJjWjkLMKC0ngbhs0kRjx%2FcERl5qBkicY28tje194mpY8xten3p17AqMiSa3L17tks9N%2FUGExy5%2Bb5%2FyQ9OVMybrQqfdfUERw9PY8g1r3Ra78tyeoWluWOjVUhBXJyRtoSAyQ8ACTrNy%2Fz58U%2BYduKnep1lnsvx76Ht50QGavjJu7hPpQpzD%2BSCyIzgU3T4kelftdNZWEYIbz8IGdjLeUuT3HuYEqkoxh7Ey1JIJK%2FCXhMf0ILMD5pCNdg1yV7LUW5%2FrN3kSkOomcZBhpyCS5U3ps3AF0JvFoGB182%2F04WodYLa4y%2Bc7l7fZg57mkB%2BOlMISAhIVs%2BXElUQJ6bz%2BvzkpUqcQPwQ%2FR910lnk0d2gTnA7YRiAw8teHwgY6pgGaiA6eLfjz0%2Fu9hmgJ%2FNsnwUsPMXzWW%2Fg9mtCV1rt3anUpcqWL1QBHJ6%2FPQecCJ0D2gMxbsalEDu9z3H1RI0ZBB0BkOZ9%2BZAp4LfnjyApIIDinLkdq%2B28vIxmP1HCHHpYs95xwg9prNBd1Vly3tyWgs9seY2c96lQ9O8Peyubs63OaWeHzlpHs3Y0y2ni6MCfAHK352i4SXHzUdKt6xR5epq%2BldNQX&X-Amz-Signature=61bc289e3d88ab57ad0fae770145f5be0fb966e570358747f55b08f31a7ab710&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH5FHNN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICdN9t3SCwgbj2oXlm1h%2B0ClAH10uncznfKI9VS3MLkeAiA4B9xsvefJv923faCZLlU1UwCHOk6SkUmY4Alvv21ZUyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMfX3%2F%2FMpSFRKDY16eKtwDXx%2BC3PcoVEcJZSLdXUy6Y4B362CwZekfYkGPy1vzObuiukDB6d7Lemea2B%2BhPyqFLRv7mXUNgSZKOZBdjtsFgK1VugXYKT4T6jR2L2CS9AlnfUbHnnqVi2w5rkFr5z%2BQ6V8COx7htxw5KN9zD%2FEbJ7JeJnSor2wqLDrFIhvYEHnv0eg0ZoJaDC7GB%2BL%2BSeyo%2BQVvEOfAXWMRlzaFCw9GRAr9%2Bgh6wFRXZj5zbz7J9yogzW4Du3Vuzxlvgas378vXYjGTRddHEJjWjkLMKC0ngbhs0kRjx%2FcERl5qBkicY28tje194mpY8xten3p17AqMiSa3L17tks9N%2FUGExy5%2Bb5%2FyQ9OVMybrQqfdfUERw9PY8g1r3Ra78tyeoWluWOjVUhBXJyRtoSAyQ8ACTrNy%2Fz58U%2BYduKnep1lnsvx76Ht50QGavjJu7hPpQpzD%2BSCyIzgU3T4kelftdNZWEYIbz8IGdjLeUuT3HuYEqkoxh7Ey1JIJK%2FCXhMf0ILMD5pCNdg1yV7LUW5%2FrN3kSkOomcZBhpyCS5U3ps3AF0JvFoGB182%2F04WodYLa4y%2Bc7l7fZg57mkB%2BOlMISAhIVs%2BXElUQJ6bz%2BvzkpUqcQPwQ%2FR910lnk0d2gTnA7YRiAw8teHwgY6pgGaiA6eLfjz0%2Fu9hmgJ%2FNsnwUsPMXzWW%2Fg9mtCV1rt3anUpcqWL1QBHJ6%2FPQecCJ0D2gMxbsalEDu9z3H1RI0ZBB0BkOZ9%2BZAp4LfnjyApIIDinLkdq%2B28vIxmP1HCHHpYs95xwg9prNBd1Vly3tyWgs9seY2c96lQ9O8Peyubs63OaWeHzlpHs3Y0y2ni6MCfAHK352i4SXHzUdKt6xR5epq%2BldNQX&X-Amz-Signature=e7051b4b4ec2864f49a8d86cc18d05e9320a9c01db9ddacfd9a5548e71f5e329&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
