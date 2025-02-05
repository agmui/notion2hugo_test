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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNTJ6SY5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDGX0cdyYRfNZltEubkXJ3iKqYPl2GbhvRL8RUbYx0ytgIhAIeLpiMz10fUw1oTC3AeODghWAfzk2cg6fSEtxwDRdqAKv8DCEoQABoMNjM3NDIzMTgzODA1Igwblz8QiTY8C3dVOh4q3AOp1M5fl0tRWm%2F1VuhSYiScHF3Jtv4pRLWcOhUtM5d1NywAmvCpFGXQd5MEHA0pcJyKowP2LZygb15mSFZ7XYoKDOaAdKHfMM115pMwESWDrrN1xKolNJIYRfZC5b%2FNgsBiCLSuIvj%2BzaQLubVTCPW2KwIw8RQBjPzuZofQ9%2Fr6GtOnACN%2FuU6mDDF6idkngyaaXFGyqPDkF6rbAl3%2F%2BmlOjVCoWBnQ4RIXTAyV2BnBoaE1AMai88zyuGzN4K7UoUnsk4gK%2BOOiGlz8AVa540DYxbSKxcwzyusbHUhsm1olDrbsE5jvDCPDbyN4B879JoWpIY7Nl7g%2BBBGDNSbx9%2FZ%2F0GWQ9Ttupn1E0CtgDj3OHThVAYbyqaPWaxfFwGEUAEK9Eb2rQFtQ2wceasWnw%2F%2FwbCVK0veAnM%2F0AqXzP%2FLyoaGQD8jVFYrGMES%2BOotjQlApnrxjcp6XJuAE2Mu%2FDKhhZA1iU9spUAMkbROV6VOdqq164fOrK25slgVQDOTg2xLfrHykuqqjYWzNxNMcNwvFjybCYDL9jtYvAcLn%2FoJXN4HsvIGzM%2FZSOA5UapO0c90af08Uqp25bl7xZmPHnRicViGnFLz%2Fx0FsvcMRtkM3Wq1cFY0xAX8wJjbBIDD1u469BjqkAa6o57tiBSh8lC2uyNmIXty%2BVtgJa8ieSC4FPKKI0lc9J7pfW%2BqUaHPZWv4PaZf88huSfLZ6pf9B%2Fvgif%2BwISbhy%2BtDdCdzmMnPZEx7N3kVahviOtNsL44Q9xZkt4E%2Fc%2F%2BXWjzsh3%2FbzpkHeQN0cr%2FxspvmRacdxBUcGujWyyBElzLs3YQnHb%2BQOH%2FlYwEpZupwKtd8k0YHQPHU%2F1eckJzCN9q9X&X-Amz-Signature=c0344b89c5d41a84fbad3e56d3786146021fc3a8cc1181bec16dc48809a5e97f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNTJ6SY5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDGX0cdyYRfNZltEubkXJ3iKqYPl2GbhvRL8RUbYx0ytgIhAIeLpiMz10fUw1oTC3AeODghWAfzk2cg6fSEtxwDRdqAKv8DCEoQABoMNjM3NDIzMTgzODA1Igwblz8QiTY8C3dVOh4q3AOp1M5fl0tRWm%2F1VuhSYiScHF3Jtv4pRLWcOhUtM5d1NywAmvCpFGXQd5MEHA0pcJyKowP2LZygb15mSFZ7XYoKDOaAdKHfMM115pMwESWDrrN1xKolNJIYRfZC5b%2FNgsBiCLSuIvj%2BzaQLubVTCPW2KwIw8RQBjPzuZofQ9%2Fr6GtOnACN%2FuU6mDDF6idkngyaaXFGyqPDkF6rbAl3%2F%2BmlOjVCoWBnQ4RIXTAyV2BnBoaE1AMai88zyuGzN4K7UoUnsk4gK%2BOOiGlz8AVa540DYxbSKxcwzyusbHUhsm1olDrbsE5jvDCPDbyN4B879JoWpIY7Nl7g%2BBBGDNSbx9%2FZ%2F0GWQ9Ttupn1E0CtgDj3OHThVAYbyqaPWaxfFwGEUAEK9Eb2rQFtQ2wceasWnw%2F%2FwbCVK0veAnM%2F0AqXzP%2FLyoaGQD8jVFYrGMES%2BOotjQlApnrxjcp6XJuAE2Mu%2FDKhhZA1iU9spUAMkbROV6VOdqq164fOrK25slgVQDOTg2xLfrHykuqqjYWzNxNMcNwvFjybCYDL9jtYvAcLn%2FoJXN4HsvIGzM%2FZSOA5UapO0c90af08Uqp25bl7xZmPHnRicViGnFLz%2Fx0FsvcMRtkM3Wq1cFY0xAX8wJjbBIDD1u469BjqkAa6o57tiBSh8lC2uyNmIXty%2BVtgJa8ieSC4FPKKI0lc9J7pfW%2BqUaHPZWv4PaZf88huSfLZ6pf9B%2Fvgif%2BwISbhy%2BtDdCdzmMnPZEx7N3kVahviOtNsL44Q9xZkt4E%2Fc%2F%2BXWjzsh3%2FbzpkHeQN0cr%2FxspvmRacdxBUcGujWyyBElzLs3YQnHb%2BQOH%2FlYwEpZupwKtd8k0YHQPHU%2F1eckJzCN9q9X&X-Amz-Signature=5b5525197c3033eea0ce7d774e4821888b232f71151fed118eedabb5a1ffaf74&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
