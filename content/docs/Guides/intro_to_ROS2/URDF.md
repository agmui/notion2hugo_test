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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMPUHG2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCF9TWburQuucha%2BKkxJmrRuZrygcnjlDMr6WwVszT1xwIgYz12ICn1Ir87zho79TDlfRGewHNrr7WKGQohAun6Z0Mq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDzvDydgzgv9cfFawSrcA%2BV%2B1FuHa5meBaaHr3HeWGV9T5FvLDwjdopInOHCGrh9fzOWtTLpr9%2FK%2FHj2yg8VEmSyLLWQRypqEqQdl1CXJPzEy4DC9uXFOTnHFvhxwnnaRuBTFphqmL4xWzo6iCISpbtVOjqfiVhyg2saZL7YC7S05PhqBQtVEnw6SxjNka4sQQPZrcIW4YSSfj2jglbTVK85zPq9WyEF%2FrwqH1pWwDNUO%2FdiELB3uclT3idBjiCRkwzkS%2FvFmN1zx%2FK6bakQPWEWswqRnKvTYUYdhTWBa%2Fo%2BsgFxgWhyaKI7rCYkoarORnHLsz%2BbqYYK%2Feq2dPiHsyxgHIXr%2BL4Y3kP72hpiRpJen8KE2yOxF6O68P0Xwa%2FFFZ0YbP%2FICtXMzmTIwM8kRpwPbuspw5MUy%2FNIpxOqq%2FyalYtuleH6BB4%2F%2FAqjwu3xjMIKToz7%2BToIXu6VfQn2au%2F%2Fy6XmL6EcFZcEHlYqyn427vonGjQ4QhW0h91ayyInXm4W0lu6uuQCVPgKN0pLOYCH8uPH144EuDeNUz8C8mq6StfniA3Nhjz%2BFhH5U9EpsE97AaYSAcJEJJJxlN1iUL7SoSuAbBOk6OCKjA5DHRRgosd1OEU76vOln873eTu6DRCEN5DYDUmgYAJ8MPCe%2Fr0GOqUByu4%2FazQH7j2O9MoEDq1VzQjSktP%2BSs7T%2BYX7aWVJ5c3LFOePaWcwf6F3tqqEx%2B6FIUqNhobHlO8Fs7XL7WCMngNQuCo0mw%2BUxU9xoSnT%2FH0SdGjrlEsHkVY9nfxtgVkp7WCBlK6A6Qo92nmAPsdbNM3sbFEhlBiEjg2rRhf0lzLgAWiSPfXSnSY9JxwIj9MlnelHW3iBK4q06Dqsq%2BcMDLur3TkX&X-Amz-Signature=2436b70f7d9d26aa06dcef71e92ee6b456d360d6b5d6f086bc689be3e1007290&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMPUHG2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCF9TWburQuucha%2BKkxJmrRuZrygcnjlDMr6WwVszT1xwIgYz12ICn1Ir87zho79TDlfRGewHNrr7WKGQohAun6Z0Mq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDzvDydgzgv9cfFawSrcA%2BV%2B1FuHa5meBaaHr3HeWGV9T5FvLDwjdopInOHCGrh9fzOWtTLpr9%2FK%2FHj2yg8VEmSyLLWQRypqEqQdl1CXJPzEy4DC9uXFOTnHFvhxwnnaRuBTFphqmL4xWzo6iCISpbtVOjqfiVhyg2saZL7YC7S05PhqBQtVEnw6SxjNka4sQQPZrcIW4YSSfj2jglbTVK85zPq9WyEF%2FrwqH1pWwDNUO%2FdiELB3uclT3idBjiCRkwzkS%2FvFmN1zx%2FK6bakQPWEWswqRnKvTYUYdhTWBa%2Fo%2BsgFxgWhyaKI7rCYkoarORnHLsz%2BbqYYK%2Feq2dPiHsyxgHIXr%2BL4Y3kP72hpiRpJen8KE2yOxF6O68P0Xwa%2FFFZ0YbP%2FICtXMzmTIwM8kRpwPbuspw5MUy%2FNIpxOqq%2FyalYtuleH6BB4%2F%2FAqjwu3xjMIKToz7%2BToIXu6VfQn2au%2F%2Fy6XmL6EcFZcEHlYqyn427vonGjQ4QhW0h91ayyInXm4W0lu6uuQCVPgKN0pLOYCH8uPH144EuDeNUz8C8mq6StfniA3Nhjz%2BFhH5U9EpsE97AaYSAcJEJJJxlN1iUL7SoSuAbBOk6OCKjA5DHRRgosd1OEU76vOln873eTu6DRCEN5DYDUmgYAJ8MPCe%2Fr0GOqUByu4%2FazQH7j2O9MoEDq1VzQjSktP%2BSs7T%2BYX7aWVJ5c3LFOePaWcwf6F3tqqEx%2B6FIUqNhobHlO8Fs7XL7WCMngNQuCo0mw%2BUxU9xoSnT%2FH0SdGjrlEsHkVY9nfxtgVkp7WCBlK6A6Qo92nmAPsdbNM3sbFEhlBiEjg2rRhf0lzLgAWiSPfXSnSY9JxwIj9MlnelHW3iBK4q06Dqsq%2BcMDLur3TkX&X-Amz-Signature=1c25acfe29e1fbd3c9dda21972b3e0c6f83995825ca3c43c33e1d30e6f01156c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
