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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXPR7BA%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbcr9RCAmOedmeNF1qYef6pcOUMnwAIKw0YXKqfB%2F5gAiB0B8CU8ClIHvwDF05tEvT%2BambxMB6dLD7FlyLUuZGF9yr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMAYi1Cg3bFn0F%2B9X1KtwDJDZTa6COHLeGqCI9d1zUM7kWHVoOoCos53pV5m12TtrgWweRMVkZ6Ci7CfQpbGsBSssEHeev7SeU%2BM7BFDMyGQKHiTrc6uQNmMgEfGjDmE%2BTOZsT0RXI58zia3MN8S%2Bb2%2BEj3y229MZnjZ79AtTg1KDZuGfkK5vfhgvIw5v86gMyXwTRkG9gdI0FLt%2FNAc9keG7p8Os%2BlFwliACmwp0KzzqvHeQJR92ZU0c9j1Ewn59bYXarVvyAgCFPMDmklQ0WnkAKbZb7HcP9K2fm%2B5X3pGG0RebmaHiYX%2BmG750ure7IJw82zluvY4iavVCY8x%2BQ4fcI%2FBl0jB0ihcQU92mbejJYZpz6AFu1WBY7w3EJHO1LMGcRJbyDP5O4031ymqtBokihqdcEWt7VVnZyMCmZqpmV9cnFqfjzJHajE2y0kl3H6XFD8sqtOzPFAYWljadhnbfePT0feKyoyUmobnHRaKLClvD4daVv9FlJo2nEhLiDWt2FRsdRZFv%2FdIE%2BDKZxd4yRsuF74rQPa7PEOBYaWvDcQ7xeoc6FI0Vtwca1TY61qdB72DL9UXFBm0Rzmc1pThZLR1zLWuCEzVnLeQ6n8io1EY8ZAJHu6i3fTBPxPRHejaOppZpdXyoyhsQw5IiOwgY6pgHFHBBC%2BsqvYbMjT2Xmvq9JLHg%2Fqjj%2BYkr%2BG%2B0eAgjuy4A%2BCuyi7nKUBLTAsLymssyVyEbnbBbV51yT5Y6W6zN6eNbXGLhyBdUbgc%2BbPsEY2xx%2B0aSdo7ieWH0Wyn1wZYRqR%2BB539V7PNd29SrlY%2BuFJYTbWIcx53IufXeZ3JOWo6AJ2qSvHOz0fLSRG9F9DGOyD7%2BjyPdHWmep7cM9Iw3JC96gtogs&X-Amz-Signature=fe2bbab10894cd133b9724d0a8ede365b7953b390a46dab4b4fafe3b566c49d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXPR7BA%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbcr9RCAmOedmeNF1qYef6pcOUMnwAIKw0YXKqfB%2F5gAiB0B8CU8ClIHvwDF05tEvT%2BambxMB6dLD7FlyLUuZGF9yr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMAYi1Cg3bFn0F%2B9X1KtwDJDZTa6COHLeGqCI9d1zUM7kWHVoOoCos53pV5m12TtrgWweRMVkZ6Ci7CfQpbGsBSssEHeev7SeU%2BM7BFDMyGQKHiTrc6uQNmMgEfGjDmE%2BTOZsT0RXI58zia3MN8S%2Bb2%2BEj3y229MZnjZ79AtTg1KDZuGfkK5vfhgvIw5v86gMyXwTRkG9gdI0FLt%2FNAc9keG7p8Os%2BlFwliACmwp0KzzqvHeQJR92ZU0c9j1Ewn59bYXarVvyAgCFPMDmklQ0WnkAKbZb7HcP9K2fm%2B5X3pGG0RebmaHiYX%2BmG750ure7IJw82zluvY4iavVCY8x%2BQ4fcI%2FBl0jB0ihcQU92mbejJYZpz6AFu1WBY7w3EJHO1LMGcRJbyDP5O4031ymqtBokihqdcEWt7VVnZyMCmZqpmV9cnFqfjzJHajE2y0kl3H6XFD8sqtOzPFAYWljadhnbfePT0feKyoyUmobnHRaKLClvD4daVv9FlJo2nEhLiDWt2FRsdRZFv%2FdIE%2BDKZxd4yRsuF74rQPa7PEOBYaWvDcQ7xeoc6FI0Vtwca1TY61qdB72DL9UXFBm0Rzmc1pThZLR1zLWuCEzVnLeQ6n8io1EY8ZAJHu6i3fTBPxPRHejaOppZpdXyoyhsQw5IiOwgY6pgHFHBBC%2BsqvYbMjT2Xmvq9JLHg%2Fqjj%2BYkr%2BG%2B0eAgjuy4A%2BCuyi7nKUBLTAsLymssyVyEbnbBbV51yT5Y6W6zN6eNbXGLhyBdUbgc%2BbPsEY2xx%2B0aSdo7ieWH0Wyn1wZYRqR%2BB539V7PNd29SrlY%2BuFJYTbWIcx53IufXeZ3JOWo6AJ2qSvHOz0fLSRG9F9DGOyD7%2BjyPdHWmep7cM9Iw3JC96gtogs&X-Amz-Signature=cb23609281a8d28437c5e8f40643082b3dc4a9d13eb6d21016c817c9d5378360&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
