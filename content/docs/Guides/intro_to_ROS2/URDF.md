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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOAGBHGZ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYvi1RV4uN6uYY9SZkYd0cmioA71xlo4FGphEiUmhKqAiBiL84sioH9YY2uqScMRIx0jZ%2F2WzdyzmJ3O4DXvxD%2FbiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk2b7iOz2z3Vn0uMgKtwDi2uqC7z8wTSMGtO6cG8d7DVaOhWIw9DrQdPyG5%2FW3%2BvAeuWIybj9kwa9loEtvw7OCyctap7vWcRWgAFVil22jeVithGvEAyFJhBDVMuuJ0EUw90LxpnrKJg2JNL%2FSVmI7BxXBZWDqKtFyMEQqRKWb8nPBajJ23y%2FKQ1gu3JI%2BnOKJEn9SlOdmJItz%2BCJ3Haog6YAoIGwZRFNdMcJ6jWki52AG7te91Si5NR80JEDAVw9suB1OnwNxJBW5EIvkhF009LKJcdD7fnaZtqq5UouVMuGsJjK4vOcRc%2BWZ%2Fkh2%2Fvp6Zy9JQJzm1RFEuGhonxfcRjbh2a73jL3dmNpjtCjqpm1iBo6ojP20W3RCk%2FIOL8YsT3MV56ibqrDA4Om87nIxy5XL5aVT6oH22l%2BNXQlahY08DAYVMSXRg6wH18ThQ0iOjRQpVE%2B8soubkjLoACAaFBGI6Hg9TFDKUOPICS%2BHUWDjtOw0ceG52RZlwzuOmSpuNvsdw1rPGM0puWQv4rIQDW%2FyU%2FP2HqI8EM9ji53UFT2t5NoSZv8IuyxPNucvCOGaYqstPSHp7jpwQiBDmVQhZsakcJmu2UQ%2Bx8PQzk3x3ZoEaRq%2F4645JpkuZIYSrvFGB%2FVOLZ62xyRQjYwmOTivQY6pgGF9Sy%2BbOlqdV8VI%2F44F20K4nsml%2F0D4e%2BIb229br5y371roor4ilWvojxJrz8v3uIQfluubVHmxezclg%2BOfl437JPFGKhd7yXn2KAG79aC8W7YwswE0C6Z62CXu1cuKRAjavxrFetup9UMo2ly%2Fv59DIz5QsIrlMcmXgJmYnqESIc1c3ZUWlL99SbUk1furlCjneVhIaOKvYO45BQRRZ2HXd3E8b5q&X-Amz-Signature=2563d38e81531a552b0a646ec7b82efc7e7bb3c98a50fd833cd27a4f3e8efec1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOAGBHGZ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYvi1RV4uN6uYY9SZkYd0cmioA71xlo4FGphEiUmhKqAiBiL84sioH9YY2uqScMRIx0jZ%2F2WzdyzmJ3O4DXvxD%2FbiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk2b7iOz2z3Vn0uMgKtwDi2uqC7z8wTSMGtO6cG8d7DVaOhWIw9DrQdPyG5%2FW3%2BvAeuWIybj9kwa9loEtvw7OCyctap7vWcRWgAFVil22jeVithGvEAyFJhBDVMuuJ0EUw90LxpnrKJg2JNL%2FSVmI7BxXBZWDqKtFyMEQqRKWb8nPBajJ23y%2FKQ1gu3JI%2BnOKJEn9SlOdmJItz%2BCJ3Haog6YAoIGwZRFNdMcJ6jWki52AG7te91Si5NR80JEDAVw9suB1OnwNxJBW5EIvkhF009LKJcdD7fnaZtqq5UouVMuGsJjK4vOcRc%2BWZ%2Fkh2%2Fvp6Zy9JQJzm1RFEuGhonxfcRjbh2a73jL3dmNpjtCjqpm1iBo6ojP20W3RCk%2FIOL8YsT3MV56ibqrDA4Om87nIxy5XL5aVT6oH22l%2BNXQlahY08DAYVMSXRg6wH18ThQ0iOjRQpVE%2B8soubkjLoACAaFBGI6Hg9TFDKUOPICS%2BHUWDjtOw0ceG52RZlwzuOmSpuNvsdw1rPGM0puWQv4rIQDW%2FyU%2FP2HqI8EM9ji53UFT2t5NoSZv8IuyxPNucvCOGaYqstPSHp7jpwQiBDmVQhZsakcJmu2UQ%2Bx8PQzk3x3ZoEaRq%2F4645JpkuZIYSrvFGB%2FVOLZ62xyRQjYwmOTivQY6pgGF9Sy%2BbOlqdV8VI%2F44F20K4nsml%2F0D4e%2BIb229br5y371roor4ilWvojxJrz8v3uIQfluubVHmxezclg%2BOfl437JPFGKhd7yXn2KAG79aC8W7YwswE0C6Z62CXu1cuKRAjavxrFetup9UMo2ly%2Fv59DIz5QsIrlMcmXgJmYnqESIc1c3ZUWlL99SbUk1furlCjneVhIaOKvYO45BQRRZ2HXd3E8b5q&X-Amz-Signature=981483290ecf563bbe79257180958fed8aa822bf9960e6fd77832d027d4462a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
