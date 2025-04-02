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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTGSTFUC%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD2oXZLXG7vlYUpQlEHBeFXd%2Bo84gFQskaNElIk%2Fi5h5AIhAOQO%2Fk0PZR5tc%2FR4cwJCYCCiL%2BFt5J9kKArYhXfvndGrKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmHaCvxeQwkTRFYncq3APjSRUV9iE6WeLtJ5GdDPPzsEG0i08vujdqKj5i9LDZaHu6l3MthD%2FVILwTMQYszvKeSRDnwtiOtZTkevpYBbPzqhb9d3eOO4BO%2BELKZ7g3htYyd1qAViIA1g%2BRENyLk4wToKqYb4fV1TyZVebNtvRvnQrf4Of2%2BZk6z%2BkpoVkExWowz3o64IW8PXUhpIGyowLyoE67RYDUUnq2hiVkZsWF3iNAXjftyOcHa7YoafN1mwaMJ2ISAUYesQ2LePEmjkgcKrUG%2BbsY04SQqUb3bhs01nkVdLAf2%2F1LHAy1m4o4TLWT3ftIIZ2aCAJmGxpSD4TT1V4baUOW4o2x6VPkacVcMm%2Fe%2FMxaSXNWIDnDxohkvl3eDEYVmgwR10v7e3D6cuxn4nKAJovE9%2BvyKK9TB0VPnOmRItn1S2EcSXx3Hjo97midqrcUbALXezvnPgdy45jkVS2WH7XBEKUFUpDQsq4ES5BN%2FuruqoNlMS4vjmt3ov4Avt2CaVvHrKSpG8lmf86idvUatk8cPQnPIJ%2BMwLHzYiOh60%2B44vkstSjUO3WpkQAePI6vW1ZvMo4eOGPKO6x1N%2FA%2FDoY%2F5rBKpi6VVTgAcjv7wuftohf3M8Y2iRbvNuSAC7rB4w4eR9udLDDC6bW%2FBjqkAQXLTJmLXNC0Or4rzJvdS4o2dgHtSFbGOOyHgQmvKhpIRqidSRYc5zdMfD%2BPlPQn8Xn5w4INtF%2Bz4eM0aHPRHTQwPmV23%2Ftzy9Z6I%2BCJ44rDjN5RrAKPXFG93y1t9lm3usyx1TA5E65t4vAK3kSpqwUB%2FWX1SyU75koNg23JLE1CNr3keclRnNIZ4ix6VTNQLeBwQY0SoGx11W1IIRWSxpI%2BpVqn&X-Amz-Signature=3276cb4c9532056b8b238de1bc16d073126dc471dac460219b20a1c6225627ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTGSTFUC%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD2oXZLXG7vlYUpQlEHBeFXd%2Bo84gFQskaNElIk%2Fi5h5AIhAOQO%2Fk0PZR5tc%2FR4cwJCYCCiL%2BFt5J9kKArYhXfvndGrKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmHaCvxeQwkTRFYncq3APjSRUV9iE6WeLtJ5GdDPPzsEG0i08vujdqKj5i9LDZaHu6l3MthD%2FVILwTMQYszvKeSRDnwtiOtZTkevpYBbPzqhb9d3eOO4BO%2BELKZ7g3htYyd1qAViIA1g%2BRENyLk4wToKqYb4fV1TyZVebNtvRvnQrf4Of2%2BZk6z%2BkpoVkExWowz3o64IW8PXUhpIGyowLyoE67RYDUUnq2hiVkZsWF3iNAXjftyOcHa7YoafN1mwaMJ2ISAUYesQ2LePEmjkgcKrUG%2BbsY04SQqUb3bhs01nkVdLAf2%2F1LHAy1m4o4TLWT3ftIIZ2aCAJmGxpSD4TT1V4baUOW4o2x6VPkacVcMm%2Fe%2FMxaSXNWIDnDxohkvl3eDEYVmgwR10v7e3D6cuxn4nKAJovE9%2BvyKK9TB0VPnOmRItn1S2EcSXx3Hjo97midqrcUbALXezvnPgdy45jkVS2WH7XBEKUFUpDQsq4ES5BN%2FuruqoNlMS4vjmt3ov4Avt2CaVvHrKSpG8lmf86idvUatk8cPQnPIJ%2BMwLHzYiOh60%2B44vkstSjUO3WpkQAePI6vW1ZvMo4eOGPKO6x1N%2FA%2FDoY%2F5rBKpi6VVTgAcjv7wuftohf3M8Y2iRbvNuSAC7rB4w4eR9udLDDC6bW%2FBjqkAQXLTJmLXNC0Or4rzJvdS4o2dgHtSFbGOOyHgQmvKhpIRqidSRYc5zdMfD%2BPlPQn8Xn5w4INtF%2Bz4eM0aHPRHTQwPmV23%2Ftzy9Z6I%2BCJ44rDjN5RrAKPXFG93y1t9lm3usyx1TA5E65t4vAK3kSpqwUB%2FWX1SyU75koNg23JLE1CNr3keclRnNIZ4ix6VTNQLeBwQY0SoGx11W1IIRWSxpI%2BpVqn&X-Amz-Signature=989add34dbf204e7f24959baa6d0076e2a1c7711dae4429f2a3d72dc433af9e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
