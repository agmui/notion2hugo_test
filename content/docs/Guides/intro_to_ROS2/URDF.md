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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665G3CYUQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDOjxLDQ%2FQmsPE0Bc2QJEyh2ZmNoE3jGJWdQxuXNp97GAIhAOt9cA3lkZf7%2Fmv9U6nPYOH7J8SXrUtNjQmUQ%2B1DVz9MKv8DCEMQABoMNjM3NDIzMTgzODA1Igx15ziikufN3woAxi0q3AMbDGqCjkAJCCAPWx4avh%2BFtvqElO%2B07gt%2FZoKYGiiYNakhqe1P%2FS1CqGYlSRWJq4tEk5dV37zUqSDnaoqZuapyrXALZtH4NK5pJt71dO03jv%2FbewL1oYW9pmRXvTSh32ULjnvPxuDob7dWz3v8aKgb91IMUxLDtAmwYEY1rMnwjRJs2LI%2FRa7uIUAco1xHxKMAzpisrFTveu9HM7MLGepEdGp3l37Cbu6NtZSkI6FgALzECOFEv7Pm8m914zYpook7VWtq3ARiww1hLj3SrhJL7opOfnekGH76BzkxjTYLc4Pza%2FAZeaagUmQ3pc5I6SJ%2B9bk37fjiiNHC5csZ4Pa5VYaQgGDInXmhVGjTBisVs2gbNyKvRTjl0WsYqHUapDxfoYpnynegeN2mLfFPk%2FZFIpmtL0H6CRBtAsCwoWZlyWKcRbYM%2BIVQkIuNtYboWahip16kLQH%2BXOQMgQkULpRBk7uOrJ%2FvtCi1d1dTlAZBkQoj%2BvYPsjAEudS7jhozpWD5a3z0KBMJx2glOr4lnLixOkS%2FB4mHA%2F2JS7PX%2FJW8J2BizlN4c9B146MOQx3m%2F%2FuTRVkNy5gdRCnLEUOWbGUx8JCH9G8kDsUj8nkPPBa0%2Bu7oH7g0mgoAXwX5ejCXkO%2FCBjqkAWSXsO7k%2F0hzgq0ma78IGP%2BpCY8%2FTUReYhswKrCeOO8Jwn5kRPNP97ZEoiYQPp2WZkVs%2BRd7ix3%2BMvakqdDFAG3bSMPECZmFg2zxfjNcMP3FakO8Uk1E43WjU8i8Nh%2Fq9Cm9YVRfGhtL9gD7L7yi9Jvi%2B54EKJxGoQvovq4JTWI9aOoa2YsN4KyEo8lMAamoJqvOPv9L7CTIBHt5gBHi%2Fr6tW4gl&X-Amz-Signature=61dfd45dea86b2842c96fb3aee960798bd85d51d05c4e481e120ea9da023903c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665G3CYUQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDOjxLDQ%2FQmsPE0Bc2QJEyh2ZmNoE3jGJWdQxuXNp97GAIhAOt9cA3lkZf7%2Fmv9U6nPYOH7J8SXrUtNjQmUQ%2B1DVz9MKv8DCEMQABoMNjM3NDIzMTgzODA1Igx15ziikufN3woAxi0q3AMbDGqCjkAJCCAPWx4avh%2BFtvqElO%2B07gt%2FZoKYGiiYNakhqe1P%2FS1CqGYlSRWJq4tEk5dV37zUqSDnaoqZuapyrXALZtH4NK5pJt71dO03jv%2FbewL1oYW9pmRXvTSh32ULjnvPxuDob7dWz3v8aKgb91IMUxLDtAmwYEY1rMnwjRJs2LI%2FRa7uIUAco1xHxKMAzpisrFTveu9HM7MLGepEdGp3l37Cbu6NtZSkI6FgALzECOFEv7Pm8m914zYpook7VWtq3ARiww1hLj3SrhJL7opOfnekGH76BzkxjTYLc4Pza%2FAZeaagUmQ3pc5I6SJ%2B9bk37fjiiNHC5csZ4Pa5VYaQgGDInXmhVGjTBisVs2gbNyKvRTjl0WsYqHUapDxfoYpnynegeN2mLfFPk%2FZFIpmtL0H6CRBtAsCwoWZlyWKcRbYM%2BIVQkIuNtYboWahip16kLQH%2BXOQMgQkULpRBk7uOrJ%2FvtCi1d1dTlAZBkQoj%2BvYPsjAEudS7jhozpWD5a3z0KBMJx2glOr4lnLixOkS%2FB4mHA%2F2JS7PX%2FJW8J2BizlN4c9B146MOQx3m%2F%2FuTRVkNy5gdRCnLEUOWbGUx8JCH9G8kDsUj8nkPPBa0%2Bu7oH7g0mgoAXwX5ejCXkO%2FCBjqkAWSXsO7k%2F0hzgq0ma78IGP%2BpCY8%2FTUReYhswKrCeOO8Jwn5kRPNP97ZEoiYQPp2WZkVs%2BRd7ix3%2BMvakqdDFAG3bSMPECZmFg2zxfjNcMP3FakO8Uk1E43WjU8i8Nh%2Fq9Cm9YVRfGhtL9gD7L7yi9Jvi%2B54EKJxGoQvovq4JTWI9aOoa2YsN4KyEo8lMAamoJqvOPv9L7CTIBHt5gBHi%2Fr6tW4gl&X-Amz-Signature=c0eeac5c88f4ff103a501abc2f612b5948a394e659466aa227fb5d8c1ff97999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
