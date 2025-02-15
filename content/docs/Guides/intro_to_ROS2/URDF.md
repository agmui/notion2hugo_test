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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVJWTTU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIQDEjwcrwZEHUBRL72fpdZTUVngmyOvjFhXVlS9Y728F%2FgIfcAmTNk7bPe6JsfCAVe821iVQ1mTvsMKiIa%2BcRR%2BJqSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMpxMmJ0T%2FcREChYqyKtwDtvDHMI%2BvbPYKFO%2BVWwFnW7btzKoONUGtALz7jUYhtl2u1phKxu2Fc1NVOgH7YbRYMfustvteVYJMr9bkYozXhH%2BHXl6E036A3FeIN3WqC5xjh7Ui13jgE1wttXnSiPHUAkzyvaKGhxZOHkcWfmf8RxGdVzwGXg7CxVdgqW5%2FpPxgEihk0Fp4PpTMMNMo%2FzDIoJLYf6cG1xae8MGVzczTb45NJTHjjtI6N0fh3Dh3Vx3RnE1doHpqChSjagw9SLXUULi4dk0JT7YeKNH4spfYoYGLDchNLBmBb7hzHLY1EfoL9BnBK%2B%2FNRj44MtBjS6TuNsh%2FnuRYZg2GbRq96PEtiXOQWrciSlWVdCQzlf1kcVOfTREnKlgeWjFhee0NWTyh18UR2HUfgjqFLv7TeSjZgG3r39eDJBQJQDcAKHJ81QUGZAYPq11BMGtE9vZIKIoSS8jt8HfxRvgq2hHRSi8yJ82BNMHJBQmyFfFBiT6RVE653yXHV5vRwL5OcM1gtrRdlXzzUOn58yF1UoH5%2Bv7Q9qzle5qNh9c4fE9%2BQ2ZQbuv0bQzUV7aStMoI8tUbPklg%2F8smI%2BoqaCUJnmNiRY4DpUAfUVI6wr8OxjeKqkb3FhdtV9qWHKen0dFPcTswlenAvQY6pgFie2m%2FZR%2B1qA%2FTVoFligmwQrWqS9Q%2FEJmoGVn8Tik6gpgUXSIvqNy1mWZ51kDSPQ4yb91KV%2BqKAWRQqMM50aBSw3NjC1lA3zDV%2FFCCS5023pvEsiifZmmv8tCHIA%2FDT6XX%2B0v26%2FISndOBULTQH7QMK%2B1Qo1P4df74Y6r68tkOOub3VoDEyAoaEElVOqK%2FB0SRP0ZJEzVaJDL6H9%2BYDE0eRADDCiNb&X-Amz-Signature=77f1722652efbb6c8343ce2aac6b9d1cb0bddf89602c7fca6ee4121d4cfe5ad2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVJWTTU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIQDEjwcrwZEHUBRL72fpdZTUVngmyOvjFhXVlS9Y728F%2FgIfcAmTNk7bPe6JsfCAVe821iVQ1mTvsMKiIa%2BcRR%2BJqSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMpxMmJ0T%2FcREChYqyKtwDtvDHMI%2BvbPYKFO%2BVWwFnW7btzKoONUGtALz7jUYhtl2u1phKxu2Fc1NVOgH7YbRYMfustvteVYJMr9bkYozXhH%2BHXl6E036A3FeIN3WqC5xjh7Ui13jgE1wttXnSiPHUAkzyvaKGhxZOHkcWfmf8RxGdVzwGXg7CxVdgqW5%2FpPxgEihk0Fp4PpTMMNMo%2FzDIoJLYf6cG1xae8MGVzczTb45NJTHjjtI6N0fh3Dh3Vx3RnE1doHpqChSjagw9SLXUULi4dk0JT7YeKNH4spfYoYGLDchNLBmBb7hzHLY1EfoL9BnBK%2B%2FNRj44MtBjS6TuNsh%2FnuRYZg2GbRq96PEtiXOQWrciSlWVdCQzlf1kcVOfTREnKlgeWjFhee0NWTyh18UR2HUfgjqFLv7TeSjZgG3r39eDJBQJQDcAKHJ81QUGZAYPq11BMGtE9vZIKIoSS8jt8HfxRvgq2hHRSi8yJ82BNMHJBQmyFfFBiT6RVE653yXHV5vRwL5OcM1gtrRdlXzzUOn58yF1UoH5%2Bv7Q9qzle5qNh9c4fE9%2BQ2ZQbuv0bQzUV7aStMoI8tUbPklg%2F8smI%2BoqaCUJnmNiRY4DpUAfUVI6wr8OxjeKqkb3FhdtV9qWHKen0dFPcTswlenAvQY6pgFie2m%2FZR%2B1qA%2FTVoFligmwQrWqS9Q%2FEJmoGVn8Tik6gpgUXSIvqNy1mWZ51kDSPQ4yb91KV%2BqKAWRQqMM50aBSw3NjC1lA3zDV%2FFCCS5023pvEsiifZmmv8tCHIA%2FDT6XX%2B0v26%2FISndOBULTQH7QMK%2B1Qo1P4df74Y6r68tkOOub3VoDEyAoaEElVOqK%2FB0SRP0ZJEzVaJDL6H9%2BYDE0eRADDCiNb&X-Amz-Signature=7ad43670bb74d79cf2f9aeb38c00f589f6703fe9c0aad9b82de88927d226dfe3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
