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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBWDYNWE%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDPHB1paFNoDjgelUo3qPux4F2GYEaANrfMMS0aSA5n3QIgMqBqH549ECY3UBE4wSEuEOfsoWOVKuxbhyp1oEmHHwsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKy4WklVov9yoB%2BNFCrcA7xzOIx%2FljHJT8EalcCXFs3FJwema3qXyhPantdFvajUy6DdiyM9YcC5TK%2F3a2cwcoFfBQ9fZdfaGGaw2iCdLwxFZtTN6VfmdJlbjFt5S9DkZgb4afVKJQOr9Lq5W37pGQtBnDe27f1QOpzdvgZJKrSRIUvEPkiOXLQcjP0V3%2BDhjhOFb3TI9kaGcHxM8xE6VWFf%2Bmdazw%2BGdyxdOKzlIWgxzt0xhlcX8hjTLKYfy5sMsMp3fOpEwmCAJk7W5z5mmOjQNQ258PJ7wj2%2Fr6CUNsvAleTsQRCuCxo2NTM4%2FChjJthXYDOpftQ2nVVbGhgm%2FzD93FdkET5ZmnHF2XQmgtmjcyy2w7StoxlBShtO1Xb%2BHfmiMqH1aSU2V%2BcQo8cdNnS8zgrokGJkBN1jO2mPik9HcTBbZuRjSgUINkXOwiqiteDxSAt1Rz%2FX7BCR03zPwbtazlxPLucDq0AngV4dMz7mdKXMBzTJHhLX%2F8EykWY29DEWNvFwdhWVtlmWr1h02q2ywZfrRz7%2Bg8LePtCOoOCNFg594P07ccO5huMpvNy8y8rqELaea3W25hbadLPVV4bWkYwHLdN2BvcXt9DU5HCo5SwJPB6ev0Rj%2FvoQ4IPwq7ouYPTx%2BNahLPnjMN%2BuqcIGOqUBt%2B4o1j2dRtXqAmzqOFYS3yMD3KyLtsWxe%2FPbCiGY6JWyEWhGQ%2FUblj83kJZEIiqlYLzPlXglcsVbArOPR5JQObKz%2Bz9oOe14RAO4WTXZKhGjH7kTKOqkJ3gRZfR16GMv9GOL5FN2rKR1JGPiNlIvh%2BMEvZ5VfSKVMk9%2BjU%2FpEXgMzmnWNtCcc9IlL4PSD2m5dMnkpVSLbAU%2FJhyAcyEym2E5dcLv&X-Amz-Signature=c1ab2ece63077001efa48610a2f984e1e9a3237f12d2e076c98dccd0080b883f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBWDYNWE%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDPHB1paFNoDjgelUo3qPux4F2GYEaANrfMMS0aSA5n3QIgMqBqH549ECY3UBE4wSEuEOfsoWOVKuxbhyp1oEmHHwsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKy4WklVov9yoB%2BNFCrcA7xzOIx%2FljHJT8EalcCXFs3FJwema3qXyhPantdFvajUy6DdiyM9YcC5TK%2F3a2cwcoFfBQ9fZdfaGGaw2iCdLwxFZtTN6VfmdJlbjFt5S9DkZgb4afVKJQOr9Lq5W37pGQtBnDe27f1QOpzdvgZJKrSRIUvEPkiOXLQcjP0V3%2BDhjhOFb3TI9kaGcHxM8xE6VWFf%2Bmdazw%2BGdyxdOKzlIWgxzt0xhlcX8hjTLKYfy5sMsMp3fOpEwmCAJk7W5z5mmOjQNQ258PJ7wj2%2Fr6CUNsvAleTsQRCuCxo2NTM4%2FChjJthXYDOpftQ2nVVbGhgm%2FzD93FdkET5ZmnHF2XQmgtmjcyy2w7StoxlBShtO1Xb%2BHfmiMqH1aSU2V%2BcQo8cdNnS8zgrokGJkBN1jO2mPik9HcTBbZuRjSgUINkXOwiqiteDxSAt1Rz%2FX7BCR03zPwbtazlxPLucDq0AngV4dMz7mdKXMBzTJHhLX%2F8EykWY29DEWNvFwdhWVtlmWr1h02q2ywZfrRz7%2Bg8LePtCOoOCNFg594P07ccO5huMpvNy8y8rqELaea3W25hbadLPVV4bWkYwHLdN2BvcXt9DU5HCo5SwJPB6ev0Rj%2FvoQ4IPwq7ouYPTx%2BNahLPnjMN%2BuqcIGOqUBt%2B4o1j2dRtXqAmzqOFYS3yMD3KyLtsWxe%2FPbCiGY6JWyEWhGQ%2FUblj83kJZEIiqlYLzPlXglcsVbArOPR5JQObKz%2Bz9oOe14RAO4WTXZKhGjH7kTKOqkJ3gRZfR16GMv9GOL5FN2rKR1JGPiNlIvh%2BMEvZ5VfSKVMk9%2BjU%2FpEXgMzmnWNtCcc9IlL4PSD2m5dMnkpVSLbAU%2FJhyAcyEym2E5dcLv&X-Amz-Signature=19c94f23afac2a935c0a9d89eec19bcd9acaa9d8490f1ea0dc1b9b5c28fb81bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
