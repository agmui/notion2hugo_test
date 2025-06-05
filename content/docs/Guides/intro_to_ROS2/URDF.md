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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN343RVJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBjDGVoP4CeXclwmCBYoPc6fV9ccQvTgHBObrirXfj8HAiEAqlVBr17wf5%2FjUjaopxuD%2FXBHa4YeWu8uRfG6zy%2FIFHQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDIejyQGvWJXix3jM7yrcA3pCtL1EOw4XwRd37dTELGO6lUqzjFPJOyxM8sxp6AhmRoTfHBfAWqY3Bg7iiomBEQKfnsr686pxCV27ty9UDFHTn5j8DTpadPl0xj%2FypH0OJMPbHiHhctm0bFG9W2cBJDe2rapOxw5I1%2B49Oav6KM2Rq36KE7sRIp7rzTnhakHJ1XE%2B3pi2imkBcGMZhXJwwSEXWSqIiQEroleER9JYMmbQm5Rx7rDQi%2BTz2n3F5jSlWeQhUg2JjcpS9Mlh54gvwzG1sTN5LPqU6G0vpu3w7vLWrWhXrzGbDrz4cYEs8NVYHA20m8J0SehEXlXsPlT%2BF%2Fch8fYadj0Tdy%2FijfE8CCMigc%2Bf%2FOqsUe0pyn8Jr7%2FGGWycIa%2BSEH2CBGsjZQXnHNrpRs3xlznhWqG%2Bhn98v4dNSQ460cv6xnlFI0grtiEm3cQwwsCW5XN1XLRWYR3bjYHKLj7zs4Dj2vXni9yt0TTWdaI6%2FA%2Bhr1WG9fHhDJEIoSNiRZ6XcRT1RJMGtJJn2A3vNojRfr4zFRG9Q2j%2Bat4i2J451F%2FZ49gd8jsbBACLPD2LS9YliTybk4inSEVq%2Fq4Pobg68xkmzFYBaE6JHX1rH3pLRdx%2FYxTfaZnHfQkZaDEg2PI0NmQyv%2FeeMNKFh8IGOqUBHgP85YiaF4Vu3osUVuQg28TG7osAhmRJBHziaKnojx8z%2BV4uQGyNqLtfKUXAISOWqtHqMPXZ51a3ljyvoinPYrFLqEF8uyl3L77A9s1fKxuINI7ciud9O1BXyI1S7isj%2BIjZgJAxkbD0Tx5h%2BWX%2BnwtxKqFRDSAgPBJF8UtNoGx5Bl2k04A71Q0SCS5U5TbXAyNGcglI%2F0eYgibTnYVlrcd9buQH&X-Amz-Signature=48d573682c3a7faa2acef2844e93c728a6a9eff509ac63b588c329f19da051ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN343RVJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBjDGVoP4CeXclwmCBYoPc6fV9ccQvTgHBObrirXfj8HAiEAqlVBr17wf5%2FjUjaopxuD%2FXBHa4YeWu8uRfG6zy%2FIFHQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDIejyQGvWJXix3jM7yrcA3pCtL1EOw4XwRd37dTELGO6lUqzjFPJOyxM8sxp6AhmRoTfHBfAWqY3Bg7iiomBEQKfnsr686pxCV27ty9UDFHTn5j8DTpadPl0xj%2FypH0OJMPbHiHhctm0bFG9W2cBJDe2rapOxw5I1%2B49Oav6KM2Rq36KE7sRIp7rzTnhakHJ1XE%2B3pi2imkBcGMZhXJwwSEXWSqIiQEroleER9JYMmbQm5Rx7rDQi%2BTz2n3F5jSlWeQhUg2JjcpS9Mlh54gvwzG1sTN5LPqU6G0vpu3w7vLWrWhXrzGbDrz4cYEs8NVYHA20m8J0SehEXlXsPlT%2BF%2Fch8fYadj0Tdy%2FijfE8CCMigc%2Bf%2FOqsUe0pyn8Jr7%2FGGWycIa%2BSEH2CBGsjZQXnHNrpRs3xlznhWqG%2Bhn98v4dNSQ460cv6xnlFI0grtiEm3cQwwsCW5XN1XLRWYR3bjYHKLj7zs4Dj2vXni9yt0TTWdaI6%2FA%2Bhr1WG9fHhDJEIoSNiRZ6XcRT1RJMGtJJn2A3vNojRfr4zFRG9Q2j%2Bat4i2J451F%2FZ49gd8jsbBACLPD2LS9YliTybk4inSEVq%2Fq4Pobg68xkmzFYBaE6JHX1rH3pLRdx%2FYxTfaZnHfQkZaDEg2PI0NmQyv%2FeeMNKFh8IGOqUBHgP85YiaF4Vu3osUVuQg28TG7osAhmRJBHziaKnojx8z%2BV4uQGyNqLtfKUXAISOWqtHqMPXZ51a3ljyvoinPYrFLqEF8uyl3L77A9s1fKxuINI7ciud9O1BXyI1S7isj%2BIjZgJAxkbD0Tx5h%2BWX%2BnwtxKqFRDSAgPBJF8UtNoGx5Bl2k04A71Q0SCS5U5TbXAyNGcglI%2F0eYgibTnYVlrcd9buQH&X-Amz-Signature=c16f46680181cbc0a5e0c687c8bdb9b20a9c70fbf897c2a2e9b696c914f57bf7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
