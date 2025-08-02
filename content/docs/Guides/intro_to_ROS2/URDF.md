---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T07:10:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T07:10:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDMM3363%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqJPkk%2BQyk%2Fbxkavx2jfCTrKj2u7CJ46GVx6IVXXKNvAiEAnjNI%2F2OTfCfzjO%2FEXAZsLd96y1viVnE%2F6sWhs8pTmS8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKsk3GCzzITepzlSbCrcA2uqbKptK1z03m2VwPHcVTJupo4PPUhuQukwczDWgE%2FW86msXdZdR0Bl351AFhOs18%2B0qRTkzuye6Rkk66L9KFjNQ3ZEIUuN1Z%2F80bwKTcS%2BCUfx4RT%2FoBHrUH%2FNlETdI69UoGAyx3dD62uO8wMjCJz%2FQ2MUh34QmqTFieLqB%2FfyXY6JH82NcS5Xju51QRCcLRInRkYNWR4NmT3oemoAvc%2B6gnKhoLLqUumolNHw0S2nDCqMfbbZcSpwxO9sqYqny3wUqq6hV9illxwv4Oti1X7q10zWW7HrVaKFSBW4kzGxBCRKjheCC9VtMOTUhxyczmMpU%2BhVd3DT0Jo48%2FI87kVmhe5sh%2B93yl%2FoD02Xplg71PJpv4V0qfzco8%2BzyI8zex3t5JJq7ZoroBRcwAQNVxg9YmAiP61QAYS5eR0RHVSiBmhdxhU%2FHL4zbNqdalH3MNIslR9G8uEzbCJncUD9YpwPwDhdNu7K6KUYEbtgXZ4Ek3vi9g6WwI2dkkz0%2B35PFRsuUMQhXxCq2BL87KYuTpNPlzL1mcRjtTTXNrjjwYvv%2B7I7AAvess6DYnmMSyAFS7TBZbu6rMJHMqhPueyeeX2Pu3q%2BpkaiCLwSYX1nCcjWkMZ%2BPkTOvNDJK%2FxPMJ3wtsQGOqUB8vJHnyot%2BzlsxIZ7L7P0MHNjrkXpkAbUt5ap84Vag0kXb0UKbs%2By4rHEr2eNlAqa7iNd8sOEO3rbQHItPnxp26qKZOQLLp68PWyn4txcH2Q%2FqA3bqv41hU%2FH6EaDUxYA5Djv8rHOP%2Bh9eNNN8pMBEK%2BXN9VtlW%2Fkz6J6LnvxwmW36m8YGqKFqz0GfFSg4cqqkQUNeF5nJzsrAl2Mkcia6oB3M%2FOn&X-Amz-Signature=7f9350e78971d9e099ef0c2d2ead86a2f4b49e8e54e6c61b78533bdb162c8bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDMM3363%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqJPkk%2BQyk%2Fbxkavx2jfCTrKj2u7CJ46GVx6IVXXKNvAiEAnjNI%2F2OTfCfzjO%2FEXAZsLd96y1viVnE%2F6sWhs8pTmS8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKsk3GCzzITepzlSbCrcA2uqbKptK1z03m2VwPHcVTJupo4PPUhuQukwczDWgE%2FW86msXdZdR0Bl351AFhOs18%2B0qRTkzuye6Rkk66L9KFjNQ3ZEIUuN1Z%2F80bwKTcS%2BCUfx4RT%2FoBHrUH%2FNlETdI69UoGAyx3dD62uO8wMjCJz%2FQ2MUh34QmqTFieLqB%2FfyXY6JH82NcS5Xju51QRCcLRInRkYNWR4NmT3oemoAvc%2B6gnKhoLLqUumolNHw0S2nDCqMfbbZcSpwxO9sqYqny3wUqq6hV9illxwv4Oti1X7q10zWW7HrVaKFSBW4kzGxBCRKjheCC9VtMOTUhxyczmMpU%2BhVd3DT0Jo48%2FI87kVmhe5sh%2B93yl%2FoD02Xplg71PJpv4V0qfzco8%2BzyI8zex3t5JJq7ZoroBRcwAQNVxg9YmAiP61QAYS5eR0RHVSiBmhdxhU%2FHL4zbNqdalH3MNIslR9G8uEzbCJncUD9YpwPwDhdNu7K6KUYEbtgXZ4Ek3vi9g6WwI2dkkz0%2B35PFRsuUMQhXxCq2BL87KYuTpNPlzL1mcRjtTTXNrjjwYvv%2B7I7AAvess6DYnmMSyAFS7TBZbu6rMJHMqhPueyeeX2Pu3q%2BpkaiCLwSYX1nCcjWkMZ%2BPkTOvNDJK%2FxPMJ3wtsQGOqUB8vJHnyot%2BzlsxIZ7L7P0MHNjrkXpkAbUt5ap84Vag0kXb0UKbs%2By4rHEr2eNlAqa7iNd8sOEO3rbQHItPnxp26qKZOQLLp68PWyn4txcH2Q%2FqA3bqv41hU%2FH6EaDUxYA5Djv8rHOP%2Bh9eNNN8pMBEK%2BXN9VtlW%2Fkz6J6LnvxwmW36m8YGqKFqz0GfFSg4cqqkQUNeF5nJzsrAl2Mkcia6oB3M%2FOn&X-Amz-Signature=d7059778cd8f1a8687f05cf9ac34d019849459b0250dfd8eadd67ca9c4e021e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
