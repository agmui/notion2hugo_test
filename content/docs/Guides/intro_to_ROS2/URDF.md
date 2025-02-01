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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGJZ6SQ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ20gRQ8Uq7EpmvXMBWGdFGIN%2F6zOnRlNoo6bdMoq0IQIhAI1rnJ5uUO51BTi7q5Tz%2BAHL749SPciZOaI5i79gL5tOKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8Vnh%2FQY6DoQLhXE8q3AMJWLrApvuWGYMcZP89gSbOpqkHHAl9G42p38xG0NZwX12SWrt3bQCrvinY5S04WDspLL5nO2z4tGLy9RXwHmg%2Fy09rmVKDzODMmzGFSYPUq4KYXfGOSAV8Gc0jvi7phecSuVUszaIlvHdYpdQTxxCSb7aTCMaja1xnueOeCn0FpnKKt0hLXTXLIMEc2lYQ8%2B03fI38qtYrYz82x1xIpMpppl0HsmZZMYtQaGFRgPg%2BLfDOHEhw2JJHrf2XBtdcmRCwy07J9n5hKiN5yba4Z2aduWtRwbfkN1uz%2FYMqEJCuv8PJIKTz5Vhp7O6jWDR9aq17D19k5G%2BD21AxhHu%2BenEd5al781zO12Levkx0aFFS%2BTW4HOjmDFvrfDeThIQZO2BTypocAth1Ihb11N51n8mU%2F65zRTZMpGx4CzizNfbvnGs5C%2B1oaOKlfHoYc364vhVJdCU26XJl%2ByrO5Nbi3FQL1jemBhj8ZcfVqTM34QKrEGuT2QJzuPkNPHtWH6p%2B4Bq2Ez16TOFJQyXmT32I6dRN%2Bdyp6IeoLl3fEcy8uB8RIGD%2FjWzcVpmXc%2FdDTBocj5EW6hgDouacA%2Ftc6Vb6LWXwhfWWyd%2BOPPSY4UK0zGx6yyq4JXV9TOQihCYEKDDRpfe8BjqkAagQk3ircBJ37PF10CehZ%2BQ8MvD1Y2q8pln3AOj6tjGnMWemgoZ%2F5tbolzRulXMetnvUzMD9kF%2B6EnLBmyfMYb%2Fczyxyz2bVOlweK5gqnsHUU82gGnxqTTIgrcSfYaQM2fbFjc5rK04luVb724dAZqT76OFUZnhIssJ%2FORyRRkx0J6RH2ML0CBJ4w7tFzyRz4PXoHu4S3C%2B0B%2FQDn8sQmPNYtx8d&X-Amz-Signature=051cae9ebe36a80a1887604ec7d8abc70abcb069b7c4b7d9b14a183c2320b282&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGJZ6SQ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ20gRQ8Uq7EpmvXMBWGdFGIN%2F6zOnRlNoo6bdMoq0IQIhAI1rnJ5uUO51BTi7q5Tz%2BAHL749SPciZOaI5i79gL5tOKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8Vnh%2FQY6DoQLhXE8q3AMJWLrApvuWGYMcZP89gSbOpqkHHAl9G42p38xG0NZwX12SWrt3bQCrvinY5S04WDspLL5nO2z4tGLy9RXwHmg%2Fy09rmVKDzODMmzGFSYPUq4KYXfGOSAV8Gc0jvi7phecSuVUszaIlvHdYpdQTxxCSb7aTCMaja1xnueOeCn0FpnKKt0hLXTXLIMEc2lYQ8%2B03fI38qtYrYz82x1xIpMpppl0HsmZZMYtQaGFRgPg%2BLfDOHEhw2JJHrf2XBtdcmRCwy07J9n5hKiN5yba4Z2aduWtRwbfkN1uz%2FYMqEJCuv8PJIKTz5Vhp7O6jWDR9aq17D19k5G%2BD21AxhHu%2BenEd5al781zO12Levkx0aFFS%2BTW4HOjmDFvrfDeThIQZO2BTypocAth1Ihb11N51n8mU%2F65zRTZMpGx4CzizNfbvnGs5C%2B1oaOKlfHoYc364vhVJdCU26XJl%2ByrO5Nbi3FQL1jemBhj8ZcfVqTM34QKrEGuT2QJzuPkNPHtWH6p%2B4Bq2Ez16TOFJQyXmT32I6dRN%2Bdyp6IeoLl3fEcy8uB8RIGD%2FjWzcVpmXc%2FdDTBocj5EW6hgDouacA%2Ftc6Vb6LWXwhfWWyd%2BOPPSY4UK0zGx6yyq4JXV9TOQihCYEKDDRpfe8BjqkAagQk3ircBJ37PF10CehZ%2BQ8MvD1Y2q8pln3AOj6tjGnMWemgoZ%2F5tbolzRulXMetnvUzMD9kF%2B6EnLBmyfMYb%2Fczyxyz2bVOlweK5gqnsHUU82gGnxqTTIgrcSfYaQM2fbFjc5rK04luVb724dAZqT76OFUZnhIssJ%2FORyRRkx0J6RH2ML0CBJ4w7tFzyRz4PXoHu4S3C%2B0B%2FQDn8sQmPNYtx8d&X-Amz-Signature=afd4ab58563cb7f7bf915495df89b3cd5d8f199ae2f9b4fd536b542b57b5c830&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
