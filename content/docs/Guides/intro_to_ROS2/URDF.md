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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466443FFQ3M%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzhzy4VjUbtuxhRRC2y4Snm2nefzQJug9ctzu6M9Q6kQIhAPzBhgqMfKbVKY036j8B8naYtdTh2FhmxUrNPaYwpNgTKv8DCEoQABoMNjM3NDIzMTgzODA1IgxC%2BeV6J8EjnHhCCH8q3AOJqX3gQM4D8IzxdMPUYVoDhmWNRwkrQEKuOVnDth3veSmv6Ss%2BdDfz88RxiStxDAn5h4X%2B3qQocJiEiM3wX%2BuAUqeio6n6BeR4U68lt%2FjKRvGST5TPIKPFISGAC5unM9zifgw%2B30WbzTsj8Tz2bpjjCotsHbib2pW4tYdR3rFSdDqK2ldCgj1c0JsrgaEnNu4e%2Fah5qDGf2DHPpkGbb%2FU5AEx1P6L0rF0qabq4UoPhQSC6NdVgj4ggKeG2tW7mML3RD2pNyFYr%2F3uW5DMPTVb5eSvzzyTcJUzmb5Ognp2eCIMlbA3%2FNRbkhOX7wLCRRzE4rnsxi6kP4%2FWp3vYFo0av7wj1xTYU7U1bwVEUxcYGRypD5cpFG%2F%2Bt5OIqAashXtpCG9sniHqKBKBrMrlnpgPzfM6Wz47fm8MAGUsq4Gmsrod5Oi7vZcX6rpemHUl0qJkTVCL8%2FLBBRlpj067bUKa88QkYHzK8TI%2FH61hS3zjOOT9zEjFdgD79tTzyzVIw6JaYf3wtDQ8K0%2BgGbszNb8gpooDe1i1Zghn6ja2%2FNW4jBp2ea4IdFZ3FcmZ7ILJ%2BDvWQjlvNJvMKxt9fR2rDEiotRdp1oe6ETpKOKKmoPlB%2FXit0PH555vx1hFedJzCdz53BBjqkAam111xZZre%2BzdQsqJo2XLSfDUMBU%2BLksGJmX09QemlIWcssmXQKORt6RHyHqY1dvLPaSLNjUllICficECzAfwlt59WENfy%2F%2FyTjedFOUHSgQ3AfztNQRzgqXJhTzm%2ByR2GTuwnssZKisEzL8vdix2FXybmeN9IuAE0XAkL%2FQxN2pj0KztWuvs4IIR3sPDqLCHW525MedPQBlhEw5SOfWhFiy0gV&X-Amz-Signature=bc34e6bdf71e0fef0fb220db0c18882216669d0241bc982390172dc8feb0e0ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466443FFQ3M%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzhzy4VjUbtuxhRRC2y4Snm2nefzQJug9ctzu6M9Q6kQIhAPzBhgqMfKbVKY036j8B8naYtdTh2FhmxUrNPaYwpNgTKv8DCEoQABoMNjM3NDIzMTgzODA1IgxC%2BeV6J8EjnHhCCH8q3AOJqX3gQM4D8IzxdMPUYVoDhmWNRwkrQEKuOVnDth3veSmv6Ss%2BdDfz88RxiStxDAn5h4X%2B3qQocJiEiM3wX%2BuAUqeio6n6BeR4U68lt%2FjKRvGST5TPIKPFISGAC5unM9zifgw%2B30WbzTsj8Tz2bpjjCotsHbib2pW4tYdR3rFSdDqK2ldCgj1c0JsrgaEnNu4e%2Fah5qDGf2DHPpkGbb%2FU5AEx1P6L0rF0qabq4UoPhQSC6NdVgj4ggKeG2tW7mML3RD2pNyFYr%2F3uW5DMPTVb5eSvzzyTcJUzmb5Ognp2eCIMlbA3%2FNRbkhOX7wLCRRzE4rnsxi6kP4%2FWp3vYFo0av7wj1xTYU7U1bwVEUxcYGRypD5cpFG%2F%2Bt5OIqAashXtpCG9sniHqKBKBrMrlnpgPzfM6Wz47fm8MAGUsq4Gmsrod5Oi7vZcX6rpemHUl0qJkTVCL8%2FLBBRlpj067bUKa88QkYHzK8TI%2FH61hS3zjOOT9zEjFdgD79tTzyzVIw6JaYf3wtDQ8K0%2BgGbszNb8gpooDe1i1Zghn6ja2%2FNW4jBp2ea4IdFZ3FcmZ7ILJ%2BDvWQjlvNJvMKxt9fR2rDEiotRdp1oe6ETpKOKKmoPlB%2FXit0PH555vx1hFedJzCdz53BBjqkAam111xZZre%2BzdQsqJo2XLSfDUMBU%2BLksGJmX09QemlIWcssmXQKORt6RHyHqY1dvLPaSLNjUllICficECzAfwlt59WENfy%2F%2FyTjedFOUHSgQ3AfztNQRzgqXJhTzm%2ByR2GTuwnssZKisEzL8vdix2FXybmeN9IuAE0XAkL%2FQxN2pj0KztWuvs4IIR3sPDqLCHW525MedPQBlhEw5SOfWhFiy0gV&X-Amz-Signature=835e35e3a9377d2dd3442c2dcbced859986d8a6acbe28ddc29318d8843bcabe9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
