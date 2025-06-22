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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6EQMMOF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQCaWslbyBro9vrRjlr9tX0c4cLzIVu4I%2BdtxAs5dQlgIgIUhA73M7Mw2BVCws5g8lghoD9g%2Fz%2F44%2BwYPKNzj9VEoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2F5GD8miAPJ%2BEuZircA6%2FBlr5G%2BUCcS%2BW5R3hgO9rz3UXyimUHQJR1lRnK6HMoW1Aemidn5NUKhaOnGj%2FBoQoLweHvYIDLM2Qqp4sSFIBIMvusygdAUKUIa%2F5p0NxR%2FVgDdsZ2nQ28Rksf64dsdpSFboh3DEK3lQq3%2BF6ZV%2FAyAmA2%2BnarwEI%2B2l0fStWx%2BvELnUUW845MamSf1nDMErTqKNGTCZvtm1ZiOJwzS5STowe69xGS%2B1s89GE2XaImGqpnXztist%2BwaqpXlwYrIa9NOLdlgjgEanFSLqLiSMzyrjHQYYKkLXpfIcERMzouuUbz9zzDeFAbsLdSUOvzBZZckUv8tzuNhQY4F43JmAUz%2FvzugGx7Jo8kihk0rV4k74dLj6FWWMAn1dDwU7JrddqwEPHwiz1Xn118Dy0DKB9S1y28djDO9FI3GJwQZHYZB5FRdK7kIAG92oxlJx7LPqfCtqI2qjycWFRo2q9lcXIp0t6DnT%2Bhzx8SNvV6C7w728b4si69biUIxdDsZ5gDk8KQf6Gz6o0ctZyQkBt4JbZeQsmnJ3w0pcBSp%2B8AS83QWDAYBqJYdssn2y1gc1qY%2BQWJAUzQ%2FDdARmOIFQuAB3n0fpmPhrPtHrmFf%2Fa3%2Bq14c2us6QGLFqIkamuEMO2H3cIGOqUB0F8qcLjSyIG8%2F%2FN%2FciXFg%2Fz%2BWg8l0pgNOmKoz0Fa8c%2F4B%2BpsyO0Jv0HHGpjxY0%2Fi010QvgEnVBcV6glU%2FI6QAoPLZ%2FHGHUXz07WJ9mbeOd0AK5pyOulRNUfJXDoczUVogkbtBsh1p0bdVeruUIdBGwJ7lT0Wk6Mwsl1x3ivjj7uuq%2FsLSoC17WpD5LnCRpB9XbKYq1ugkGmCeRhg5bY9AfLo3%2Fya&X-Amz-Signature=03a5a2a155294d2486547304d6b064f2c6e33f3f4e05c09816d35265e940add5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6EQMMOF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQCaWslbyBro9vrRjlr9tX0c4cLzIVu4I%2BdtxAs5dQlgIgIUhA73M7Mw2BVCws5g8lghoD9g%2Fz%2F44%2BwYPKNzj9VEoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2F5GD8miAPJ%2BEuZircA6%2FBlr5G%2BUCcS%2BW5R3hgO9rz3UXyimUHQJR1lRnK6HMoW1Aemidn5NUKhaOnGj%2FBoQoLweHvYIDLM2Qqp4sSFIBIMvusygdAUKUIa%2F5p0NxR%2FVgDdsZ2nQ28Rksf64dsdpSFboh3DEK3lQq3%2BF6ZV%2FAyAmA2%2BnarwEI%2B2l0fStWx%2BvELnUUW845MamSf1nDMErTqKNGTCZvtm1ZiOJwzS5STowe69xGS%2B1s89GE2XaImGqpnXztist%2BwaqpXlwYrIa9NOLdlgjgEanFSLqLiSMzyrjHQYYKkLXpfIcERMzouuUbz9zzDeFAbsLdSUOvzBZZckUv8tzuNhQY4F43JmAUz%2FvzugGx7Jo8kihk0rV4k74dLj6FWWMAn1dDwU7JrddqwEPHwiz1Xn118Dy0DKB9S1y28djDO9FI3GJwQZHYZB5FRdK7kIAG92oxlJx7LPqfCtqI2qjycWFRo2q9lcXIp0t6DnT%2Bhzx8SNvV6C7w728b4si69biUIxdDsZ5gDk8KQf6Gz6o0ctZyQkBt4JbZeQsmnJ3w0pcBSp%2B8AS83QWDAYBqJYdssn2y1gc1qY%2BQWJAUzQ%2FDdARmOIFQuAB3n0fpmPhrPtHrmFf%2Fa3%2Bq14c2us6QGLFqIkamuEMO2H3cIGOqUB0F8qcLjSyIG8%2F%2FN%2FciXFg%2Fz%2BWg8l0pgNOmKoz0Fa8c%2F4B%2BpsyO0Jv0HHGpjxY0%2Fi010QvgEnVBcV6glU%2FI6QAoPLZ%2FHGHUXz07WJ9mbeOd0AK5pyOulRNUfJXDoczUVogkbtBsh1p0bdVeruUIdBGwJ7lT0Wk6Mwsl1x3ivjj7uuq%2FsLSoC17WpD5LnCRpB9XbKYq1ugkGmCeRhg5bY9AfLo3%2Fya&X-Amz-Signature=b58d2b8b037a257ee05298953d497a48657af9c0d1a360f0b9c9d83441b919e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
