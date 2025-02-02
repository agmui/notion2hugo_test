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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLXJAIB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEvm%2BChJ9lb8ONaXvLk7U3Sp6RXMmvTTbS8a45VydaSAiEA0v0AKeQnt0BNqMEuBlpWvsVeweElpIeaWi3mcucvcqgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BgbTwRzDTTIFL%2BySrcAwdI5sTUfxd%2BxYIIWgqR5ysjgQhjzLcfbGM8wnfo88xUM5I%2BMVyP0LnBgA9NqPbwJdpaYzf%2BaOLj2ki%2BcGDMMZSNOB76gNweIoG3nb7FAiyvXpl0OfufCNUj3SnsIb5xUxbQqVhWIUc45X%2F2i55gR9zn%2FC8kfTCN5GaSY2ALdxdcaKlPBMuafCc8bmhOA1HBn78WiOXOw%2FKTTUNCkroeugO3uAZw%2BPvYBj5cvgA%2FQpm7LHEoG29Yw%2Bmpl%2FLqqhBdEEbr33mwoY5d4fhlCXH47v1fhat%2Bx2Y6HbvGlTi%2FilzvpNLgfBQD1hbMRCxBk5YL667tt3CLdbunBxfdYK5b8b4qaX0GB9XlUZqrJeScIhJCGEwy6zYivzWOqJVq%2FOvwAaWkMn9kmWtLui%2B4Al4Bk%2F2pPYd%2BKDtRyLwq3WSUYiEqBr%2F6fZ%2Ba5NERVv2say3kRhv0BtG3jFLEx6EKppSAYz5QiZrmaqle6HF0os0%2BHtY%2FH%2BcsC%2BtXZpNggznwDBzNQI0tLvge0y8q%2BCqlX564mGxlEajE%2BoAibHEwxIetIx%2BIrFCYtZFbHhkFE8UDpm7DMtPIlJeoIsyANHdeQ2DwBuIm5VU%2FBM3zRDbRF%2BMMCAudIGJKyVyh4sbDHVbfMIfe%2FrwGOqUBS%2FudJhNJC3lnEwrT9gL3hEKHT8siU%2B8zsYbJGDSIriYRDhYmJscXzwNCgU9bIJH9%2FwysOJ%2Bja%2FCqV1ui4LgDngDTwQPoDS0ZLie0q9nvaBw18lbc8ZqqeULk5cZb862RExCYBNc5nItv%2F4eCN0nk%2BILGfqbsqcVhVun0VEdAY0Wi9SfJ1SNcPfj35rtc4c5AsCe9rnpLC5prrkqCyvTekNTWD%2Fck&X-Amz-Signature=35dc4e6005b2f8db6a83e4b29fc96d4f30a0d840aa11072e3bf0a9dcefdd647f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLXJAIB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEvm%2BChJ9lb8ONaXvLk7U3Sp6RXMmvTTbS8a45VydaSAiEA0v0AKeQnt0BNqMEuBlpWvsVeweElpIeaWi3mcucvcqgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BgbTwRzDTTIFL%2BySrcAwdI5sTUfxd%2BxYIIWgqR5ysjgQhjzLcfbGM8wnfo88xUM5I%2BMVyP0LnBgA9NqPbwJdpaYzf%2BaOLj2ki%2BcGDMMZSNOB76gNweIoG3nb7FAiyvXpl0OfufCNUj3SnsIb5xUxbQqVhWIUc45X%2F2i55gR9zn%2FC8kfTCN5GaSY2ALdxdcaKlPBMuafCc8bmhOA1HBn78WiOXOw%2FKTTUNCkroeugO3uAZw%2BPvYBj5cvgA%2FQpm7LHEoG29Yw%2Bmpl%2FLqqhBdEEbr33mwoY5d4fhlCXH47v1fhat%2Bx2Y6HbvGlTi%2FilzvpNLgfBQD1hbMRCxBk5YL667tt3CLdbunBxfdYK5b8b4qaX0GB9XlUZqrJeScIhJCGEwy6zYivzWOqJVq%2FOvwAaWkMn9kmWtLui%2B4Al4Bk%2F2pPYd%2BKDtRyLwq3WSUYiEqBr%2F6fZ%2Ba5NERVv2say3kRhv0BtG3jFLEx6EKppSAYz5QiZrmaqle6HF0os0%2BHtY%2FH%2BcsC%2BtXZpNggznwDBzNQI0tLvge0y8q%2BCqlX564mGxlEajE%2BoAibHEwxIetIx%2BIrFCYtZFbHhkFE8UDpm7DMtPIlJeoIsyANHdeQ2DwBuIm5VU%2FBM3zRDbRF%2BMMCAudIGJKyVyh4sbDHVbfMIfe%2FrwGOqUBS%2FudJhNJC3lnEwrT9gL3hEKHT8siU%2B8zsYbJGDSIriYRDhYmJscXzwNCgU9bIJH9%2FwysOJ%2Bja%2FCqV1ui4LgDngDTwQPoDS0ZLie0q9nvaBw18lbc8ZqqeULk5cZb862RExCYBNc5nItv%2F4eCN0nk%2BILGfqbsqcVhVun0VEdAY0Wi9SfJ1SNcPfj35rtc4c5AsCe9rnpLC5prrkqCyvTekNTWD%2Fck&X-Amz-Signature=8f62ceb5b1f8f209b5dea4f0948fe944de0fd8ebb3fed36d36f09c7e571ba319&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
