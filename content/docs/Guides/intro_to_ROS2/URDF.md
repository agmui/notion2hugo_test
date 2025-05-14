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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O5KSF7J%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDOjjrlwxJQmEP%2B2PUjgeJrxONGDDmqxXp16R7%2FR17o%2BAIhAM7LWxAQTBHgbLlofoS08koJBwOheutZtJPR%2FTT50YaBKv8DCCAQABoMNjM3NDIzMTgzODA1IgxNxTU6QFDFTygJ4SQq3ANi3YMAG4QMWt%2Fj0UH%2Fw2iZvGV4syYQc29KQwkVoSCPhZ2w5MHltXv9zs7yinPNsJ00dn%2BSzZuN0zPrAxIov1oeYg0HHjrd%2BQexXdVLCpp%2FDOxheU%2F9t9%2BzbG5aJWtzWkC9qUdHAaSD2oGcB2HShvdzM8NzzvY%2B6gsr8MbvhHKCKfn1Iw4g49OVg1gQm8lMZgk0FyKmELfbiM8LFc8nuvjx3R3YLCptqwIZXaDzgnAI2qGUxq%2FIfbENZWJsPs7osbB3XkrrwyXHmhD8pLJwUVid%2Bb9NzYeJkKpXSd%2FxqlZ8bDpoZYewWgLmHPhD7NMHIHEKu5rnRljRltsbf5cdnuCWQRLq6cI%2FLexUQegVvNWO5spbqohF4Ikyi4RV73WbNzN9HlNldVNW9o6Orn5gZ7fglbTSEH6BoQU0%2B0zb0G4oqMrwqXPhe2EZPgBJBWlidp8xYcs%2B%2FgMkqj1BRJvUAQh8snIHLuubpQ3%2FaDYRjMo6wd%2Fb3dCYyvUNzFcyEC4p0lS3KY4OpYkO%2BWbfZJPLB7n7qU6WVNu%2B1mZS4%2Ft7pTL0NN5SOiVLuG%2F4%2F7Cjz%2B3lJzCAgevx7MycZ%2BhxRdHVNbrqnxdHHt6pBVHcxM8Y27I5RW4eLAjkOlHCQkZskjCJupTBBjqkARQv2E%2FZIxHf3TaGX5zjnNYOy2nXZjtKxKazPWXHBbSaEpaePBPNyi1lVnIWfCm8AHWbtPu%2BGNBXOAMvUbui%2B1J0HNeoc9Z1uVn48pYQiPG2Hx250CZP1SdJhCElvWpHBp8sCHhszOi28VFjTvhxG97%2BVI%2FKtI4%2BNg9oRzFfcogXxHir9phneXFxFDOnLdbZ8QwvuVqd%2FeAwOGXrWlOaMcViGDHR&X-Amz-Signature=32dc0ccc8f0ad1c571daa37953141928c179611b43b0b3bb14bc49ea7b853e34&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O5KSF7J%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDOjjrlwxJQmEP%2B2PUjgeJrxONGDDmqxXp16R7%2FR17o%2BAIhAM7LWxAQTBHgbLlofoS08koJBwOheutZtJPR%2FTT50YaBKv8DCCAQABoMNjM3NDIzMTgzODA1IgxNxTU6QFDFTygJ4SQq3ANi3YMAG4QMWt%2Fj0UH%2Fw2iZvGV4syYQc29KQwkVoSCPhZ2w5MHltXv9zs7yinPNsJ00dn%2BSzZuN0zPrAxIov1oeYg0HHjrd%2BQexXdVLCpp%2FDOxheU%2F9t9%2BzbG5aJWtzWkC9qUdHAaSD2oGcB2HShvdzM8NzzvY%2B6gsr8MbvhHKCKfn1Iw4g49OVg1gQm8lMZgk0FyKmELfbiM8LFc8nuvjx3R3YLCptqwIZXaDzgnAI2qGUxq%2FIfbENZWJsPs7osbB3XkrrwyXHmhD8pLJwUVid%2Bb9NzYeJkKpXSd%2FxqlZ8bDpoZYewWgLmHPhD7NMHIHEKu5rnRljRltsbf5cdnuCWQRLq6cI%2FLexUQegVvNWO5spbqohF4Ikyi4RV73WbNzN9HlNldVNW9o6Orn5gZ7fglbTSEH6BoQU0%2B0zb0G4oqMrwqXPhe2EZPgBJBWlidp8xYcs%2B%2FgMkqj1BRJvUAQh8snIHLuubpQ3%2FaDYRjMo6wd%2Fb3dCYyvUNzFcyEC4p0lS3KY4OpYkO%2BWbfZJPLB7n7qU6WVNu%2B1mZS4%2Ft7pTL0NN5SOiVLuG%2F4%2F7Cjz%2B3lJzCAgevx7MycZ%2BhxRdHVNbrqnxdHHt6pBVHcxM8Y27I5RW4eLAjkOlHCQkZskjCJupTBBjqkARQv2E%2FZIxHf3TaGX5zjnNYOy2nXZjtKxKazPWXHBbSaEpaePBPNyi1lVnIWfCm8AHWbtPu%2BGNBXOAMvUbui%2B1J0HNeoc9Z1uVn48pYQiPG2Hx250CZP1SdJhCElvWpHBp8sCHhszOi28VFjTvhxG97%2BVI%2FKtI4%2BNg9oRzFfcogXxHir9phneXFxFDOnLdbZ8QwvuVqd%2FeAwOGXrWlOaMcViGDHR&X-Amz-Signature=653511b29e3c7bd65e2a53da0c0136183a603ebfe538a3b30e9576fe8f564871&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
