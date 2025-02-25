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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSLKFVOX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICRpi6QRwKvflcW39BA9TcNST0%2FoDwJE8R1W0vt3PXN5AiBpYyZz4U7XwXpu%2FreaYlnY%2FBvZgmnkzk2%2BCZl1O14vGyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMMEhq5m45QkDtVNgyKtwD4cc2yVzxPExL8dHN8ErjyqaZWmduQ9S2gnoCRt%2ByGB4gzzRNiwWxnfCpDcVvRPjx4JUeWXpY1%2F7jf%2Bk3m2Bx%2B4ZRMvu6S2xD5NUn9mNZG0DzRh1Fn04BRtck2ZBA7NHDTc36WN4d%2BDwMXB92VNeJITKArS4%2BDqIsGvs8OlbpRqoE2P4ZLDbEzrdEoadk3ph6hxvsdAqFmKkF9u%2FGNXBBwiyYE6ZZpHB661NKfbBHpntnbE9VNX6caw1d9Ti%2Bq63%2BzhhIi%2BuOfKYYacQpISfyT7dWxbTKaSrn1SVj6lqSBBB9yj6gqc%2BIfUaH45EujQUHLPa%2FTZO3BGkQcaDmNScw17sVUMyk1d0nkqnZ%2FKszFbIq%2BXilXFD%2BAlAnI%2F0qIyo4wsF7RRfgsprT9ZrWnhP4efXIT3S1wkTP5fL%2F%2BqAVwZrOYu7vH4q8emsd7IT8hu9fNbJbFL7WZdLrU%2BzFlkmS1C6duTTY1iQFZrdnqcA3l5lQY3K9uHkej0mMilm%2FGq1oip616VNPRR4tiSqhN1qG%2FeGRBVp5TRgvYR50wrGy0HQe5uzvD%2BTpzN1kmQebiidsycslc1mBQKf8cj26y9%2BVOwCjL6FU6q7gV7MrhGQCEdbjuyfmupd5iN1U1DowqNz2vQY6pgGF0cwiyy4txQ4lWupA%2B7Olul8rhChQQGlnr9MdntukHJZgqtOQJSOY8f%2B7bl5P%2B7pCGuTynLVpQ8uLNGDqPH%2BzzpDSjp2JCT6w3EQrkwA2Eyp7T8QS79OTLCgGoDOqEx4XkWuO%2Fcx05zeWqFE7pHILTHt5dH%2F7aFK%2BzFfaN1fuLivAMQCJ0OrC4YEM9Cmq%2BvybUpijKsOR5p9iEZK9MEfvxcVSfqga&X-Amz-Signature=a4e13fb5973f519c732772fe64e8a882e84a920f1a1ca83960d028f34b813b0f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSLKFVOX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICRpi6QRwKvflcW39BA9TcNST0%2FoDwJE8R1W0vt3PXN5AiBpYyZz4U7XwXpu%2FreaYlnY%2FBvZgmnkzk2%2BCZl1O14vGyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMMEhq5m45QkDtVNgyKtwD4cc2yVzxPExL8dHN8ErjyqaZWmduQ9S2gnoCRt%2ByGB4gzzRNiwWxnfCpDcVvRPjx4JUeWXpY1%2F7jf%2Bk3m2Bx%2B4ZRMvu6S2xD5NUn9mNZG0DzRh1Fn04BRtck2ZBA7NHDTc36WN4d%2BDwMXB92VNeJITKArS4%2BDqIsGvs8OlbpRqoE2P4ZLDbEzrdEoadk3ph6hxvsdAqFmKkF9u%2FGNXBBwiyYE6ZZpHB661NKfbBHpntnbE9VNX6caw1d9Ti%2Bq63%2BzhhIi%2BuOfKYYacQpISfyT7dWxbTKaSrn1SVj6lqSBBB9yj6gqc%2BIfUaH45EujQUHLPa%2FTZO3BGkQcaDmNScw17sVUMyk1d0nkqnZ%2FKszFbIq%2BXilXFD%2BAlAnI%2F0qIyo4wsF7RRfgsprT9ZrWnhP4efXIT3S1wkTP5fL%2F%2BqAVwZrOYu7vH4q8emsd7IT8hu9fNbJbFL7WZdLrU%2BzFlkmS1C6duTTY1iQFZrdnqcA3l5lQY3K9uHkej0mMilm%2FGq1oip616VNPRR4tiSqhN1qG%2FeGRBVp5TRgvYR50wrGy0HQe5uzvD%2BTpzN1kmQebiidsycslc1mBQKf8cj26y9%2BVOwCjL6FU6q7gV7MrhGQCEdbjuyfmupd5iN1U1DowqNz2vQY6pgGF0cwiyy4txQ4lWupA%2B7Olul8rhChQQGlnr9MdntukHJZgqtOQJSOY8f%2B7bl5P%2B7pCGuTynLVpQ8uLNGDqPH%2BzzpDSjp2JCT6w3EQrkwA2Eyp7T8QS79OTLCgGoDOqEx4XkWuO%2Fcx05zeWqFE7pHILTHt5dH%2F7aFK%2BzFfaN1fuLivAMQCJ0OrC4YEM9Cmq%2BvybUpijKsOR5p9iEZK9MEfvxcVSfqga&X-Amz-Signature=bf53cf48bacb3df36696306501ba8a0b1136dcb4c21e042e0918472c592e0772&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
