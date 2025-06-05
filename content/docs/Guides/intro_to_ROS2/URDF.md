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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWMPHIHS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCriGqsMNLIKejBTpq9ybAnMiI%2B6nZy4r1gqkinY6z40AIgbNns0De3fYhdPjYrNRIf%2FUapN5QM0TLgMMvaYc3iunYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHQSaf11yrqrK248FCrcA%2FPDAf%2BaqJPad%2B3LeV2QpdXHWXHg2YkYXFTTo%2Fy5m73cVTnbD%2BmeeXoBuDkw%2BX%2FEWn1xc4wElvuZr%2Fwqg4bVhD6e3UNpdPi9faZzrPQdlmwvFI%2Fq3ANCpck4XLOuo6L%2FjkeW7YSRoCcUl%2BCdNgVEks5pgfFv8vcXxgGrX7VogiAf0KSmSObXxL5y4e0aUbRLieg2xH6MChfT6I56fPl5gca64WrRdkBnzCu%2BfLd9THwsOXhTD0wC4JtFKSMDB7DQQoGnJV0%2FPiGo569%2FqfuWPrWB%2FSbVY1hGHfiRpGbBiXecyhPeeceZfZuBz%2B2u0Wn4%2Bfo23LDMGvd0rqiQuQpyaeTAHJzwgugHZal3j6pYrOk673vt5twOjLrCHOpBoJfhbcKUyF5H6FNiudgUPLUL%2BZnfETsQTx7PLscD3O3UBU%2BwKqHdQwTPTA6ENwwCLGBUK6CHwzYH21NKE9EzZUkEHZN4RBsq1lxbjZ0tFIxji87ajDuHFz%2F2jCS%2BPGTRwrpr%2FeUyW5XdVpsu%2F2r935RVRvOUYYKY%2B%2FKtT5cvF%2FZE%2BPWjRmUOd7Fx6Trn3RmN%2BqPbzbU9qWq%2BEsqsxzGGVAyPqeQodb8IE1%2BYVMehzD5wYI4sutCPe7qO28Q9OjNLMMHDhMIGOqUBUtm45I2U4lbswoAujRhaXsz4QegFsRVR1%2FUOq74o3fonKose3cEf3qY%2FeRlRsYNntSSvZDddSmJ6Adyg9DnfW01m3bKvLMAyopXpqZOokLHhZw2zoA%2FDWxLTHsHRIMxdaOpyVV4cEwiQ0EKhZcytDJUybr%2FjzBrcsL6dtQD7HT%2F9vsHu677TU6eoNydGH5q4c5Q5Lft0dcTFJP9GteWiFDmcxk3O&X-Amz-Signature=1d26f2a012047d520ebb54a5d3fd0ccbd34c07a302132642078969c5ee05e486&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWMPHIHS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCriGqsMNLIKejBTpq9ybAnMiI%2B6nZy4r1gqkinY6z40AIgbNns0De3fYhdPjYrNRIf%2FUapN5QM0TLgMMvaYc3iunYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHQSaf11yrqrK248FCrcA%2FPDAf%2BaqJPad%2B3LeV2QpdXHWXHg2YkYXFTTo%2Fy5m73cVTnbD%2BmeeXoBuDkw%2BX%2FEWn1xc4wElvuZr%2Fwqg4bVhD6e3UNpdPi9faZzrPQdlmwvFI%2Fq3ANCpck4XLOuo6L%2FjkeW7YSRoCcUl%2BCdNgVEks5pgfFv8vcXxgGrX7VogiAf0KSmSObXxL5y4e0aUbRLieg2xH6MChfT6I56fPl5gca64WrRdkBnzCu%2BfLd9THwsOXhTD0wC4JtFKSMDB7DQQoGnJV0%2FPiGo569%2FqfuWPrWB%2FSbVY1hGHfiRpGbBiXecyhPeeceZfZuBz%2B2u0Wn4%2Bfo23LDMGvd0rqiQuQpyaeTAHJzwgugHZal3j6pYrOk673vt5twOjLrCHOpBoJfhbcKUyF5H6FNiudgUPLUL%2BZnfETsQTx7PLscD3O3UBU%2BwKqHdQwTPTA6ENwwCLGBUK6CHwzYH21NKE9EzZUkEHZN4RBsq1lxbjZ0tFIxji87ajDuHFz%2F2jCS%2BPGTRwrpr%2FeUyW5XdVpsu%2F2r935RVRvOUYYKY%2B%2FKtT5cvF%2FZE%2BPWjRmUOd7Fx6Trn3RmN%2BqPbzbU9qWq%2BEsqsxzGGVAyPqeQodb8IE1%2BYVMehzD5wYI4sutCPe7qO28Q9OjNLMMHDhMIGOqUBUtm45I2U4lbswoAujRhaXsz4QegFsRVR1%2FUOq74o3fonKose3cEf3qY%2FeRlRsYNntSSvZDddSmJ6Adyg9DnfW01m3bKvLMAyopXpqZOokLHhZw2zoA%2FDWxLTHsHRIMxdaOpyVV4cEwiQ0EKhZcytDJUybr%2FjzBrcsL6dtQD7HT%2F9vsHu677TU6eoNydGH5q4c5Q5Lft0dcTFJP9GteWiFDmcxk3O&X-Amz-Signature=41aa442ac000f4e7a771f3c550b643f6e2ed5ff69ffd68834f0d00d2e6c807c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
