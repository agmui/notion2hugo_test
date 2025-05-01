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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJOBZ3K%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAJ3sSTqrtK7u9BX20dZ%2FR7wsmCOGsFZES0hPbYhF7rvAiAz%2FlsVnayEzsq%2FiiKCn5mieSH%2Bb3clxLeJp8Sn%2BHwzbCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlESrmxiQZ1yZPlczKtwDCwYff38%2BcLrc9hn8YyQbpe%2FQv7G6DzuTiMtYMGBB85DUfSdn7Y2X6K%2Fg1S9E0y1cANlD8fQoiq1RJYp9idM5J4Vp1pU1o0xZitrpr9iz9pCwA%2F%2BknVvRSI6zoS2xPDXTguov4t%2FunM4%2BWPp%2FzwkpASuTyn28agPyWx5eTq7%2BDwSkbmII84q4gIOKpv%2B9ssmFHFb1lBKZwDLDB%2FvDxL9bsP8MxbfMmYRktrIJQHG47sjNmwvVebtAQx2eCAwsaGo1f947Xe8SChmTuI9AvwFxS1Iiry4B1Fq2muw98hBoafO3CvataoBGs6Vv%2BiMr8WsmzZRRzNgajWLRn28RzIt7FaoWIG1fqtLMJOZeuSaiT0crSgnvHBopyczIGckPWD7irScJb98zshSFCzNYQbrdtXP7kktMMIMTaV9Y7Mzo4IpIzsIS2wFEEh4Qk79cy89TzYuLqwCPu%2FkdvPbtseKA8pT6HauRVVqgKSMYZm3Ro37ERugm8kjwdwPUB%2F8d67t%2Ft4fg2IEkPAN4PhuErRigpWzD54%2Ff3nn8RTERnqDLQzLRdn3WhG0MDOv41LsIYlKSoEY9PTJpgRzetWuMOzgnd28EX%2BZQbyt0CpYPKmzJ%2BDl03jANtnWHdo2uXDQwxuPPwAY6pgGj9kBhs2OoXbW5reuFnhhs%2F%2FLGEQFIu2wlLKyYrSqk3iau7nFHjUfgK8YrFc5SQSa908JfJpCuBtUcwoP3HnYpx%2FCHJNv37cwQbwRF4is19fTKH8rU2TDHGnHTtNlLadQoC%2BTw16W9UkezMKcqoO9GJK%2BGgvINC%2BEVQl87Bez8PH2624giZr2M7mCV9NF2PZHVtxmbTclyVT4OPB%2BLLriRdx3COsyL&X-Amz-Signature=89d061158e81bf6963dbf938585ec47593c421155d526245b50292cb557dde43&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJOBZ3K%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAJ3sSTqrtK7u9BX20dZ%2FR7wsmCOGsFZES0hPbYhF7rvAiAz%2FlsVnayEzsq%2FiiKCn5mieSH%2Bb3clxLeJp8Sn%2BHwzbCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlESrmxiQZ1yZPlczKtwDCwYff38%2BcLrc9hn8YyQbpe%2FQv7G6DzuTiMtYMGBB85DUfSdn7Y2X6K%2Fg1S9E0y1cANlD8fQoiq1RJYp9idM5J4Vp1pU1o0xZitrpr9iz9pCwA%2F%2BknVvRSI6zoS2xPDXTguov4t%2FunM4%2BWPp%2FzwkpASuTyn28agPyWx5eTq7%2BDwSkbmII84q4gIOKpv%2B9ssmFHFb1lBKZwDLDB%2FvDxL9bsP8MxbfMmYRktrIJQHG47sjNmwvVebtAQx2eCAwsaGo1f947Xe8SChmTuI9AvwFxS1Iiry4B1Fq2muw98hBoafO3CvataoBGs6Vv%2BiMr8WsmzZRRzNgajWLRn28RzIt7FaoWIG1fqtLMJOZeuSaiT0crSgnvHBopyczIGckPWD7irScJb98zshSFCzNYQbrdtXP7kktMMIMTaV9Y7Mzo4IpIzsIS2wFEEh4Qk79cy89TzYuLqwCPu%2FkdvPbtseKA8pT6HauRVVqgKSMYZm3Ro37ERugm8kjwdwPUB%2F8d67t%2Ft4fg2IEkPAN4PhuErRigpWzD54%2Ff3nn8RTERnqDLQzLRdn3WhG0MDOv41LsIYlKSoEY9PTJpgRzetWuMOzgnd28EX%2BZQbyt0CpYPKmzJ%2BDl03jANtnWHdo2uXDQwxuPPwAY6pgGj9kBhs2OoXbW5reuFnhhs%2F%2FLGEQFIu2wlLKyYrSqk3iau7nFHjUfgK8YrFc5SQSa908JfJpCuBtUcwoP3HnYpx%2FCHJNv37cwQbwRF4is19fTKH8rU2TDHGnHTtNlLadQoC%2BTw16W9UkezMKcqoO9GJK%2BGgvINC%2BEVQl87Bez8PH2624giZr2M7mCV9NF2PZHVtxmbTclyVT4OPB%2BLLriRdx3COsyL&X-Amz-Signature=b6f657405778e94493522f5ad5567a497dead1cfe00108a4d9e50c25fceec028&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
