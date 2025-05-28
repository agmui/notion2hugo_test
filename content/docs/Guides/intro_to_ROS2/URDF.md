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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643T4METS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BCScQi2dLk6UJ0y0rEXs1y5XMSnBLiNkftvz4XUvdEQIhAJkMRmKaNESSsYlWQ3JxXfHIg%2FsFHY51mCs0BzC8RIpjKv8DCG0QABoMNjM3NDIzMTgzODA1Igy%2Fq5MSRQqGNA6w5FIq3APQ2CFLLiBRaUYV5ewZjhIA2GOmkVZ0QcYnfS%2BHA2Bvz5GLzkQssscd6Fzj1Hdcd%2B9J3TktR6vLIH1TSGmwyMgIPiSvnaMOkHTdrlAxJUrFfZnVxjFUn7pFOD7KxDIRfhBQwt%2FJEeXQPzhqKsbLkODOHuCRoPhVRz6hbHRXAf7uemYwtKMoG1HaOrhKCcDikIJN3SYF9I0araTk6ZDxK4Qn7NvdKfpbC69lnQmWiSGScgM%2BFV213IByJDKNR%2FFo%2Be26e8CbxM2Ot0U2dgmJS2WOsogz1OBKKUCqrg3t2gC2w1%2BRmyp7hAHR%2FwFJ%2Btl8fyfrVqt9W16NBYJciKEzrIvBXZVFQK5bIzC5Env4jWKtY52VJqZfrX92o8USn9%2Ba52Mi%2F7rEC6ICHXejH0gTVkTSKOCzwTSnfynD4gK5xjX3zWYRjFGavdToSyMzgzc4yv8OoMc98Qi3Y2J26Yba8hmqEpTFUf%2FbUvvAXViTk5fz21hAxiQBot5jkqGfQnMJEm9M97WeIBgrSi7SEBIBTZ3ioXXwHXzFr5Fine207u2Cxa17iP4daDGZRy0JG9w1RWsJktxkoAkRJbTUJxKvd7APWCNpqSK%2Bo1WfwKBPKMN1VOfLmFfgXL9qU8gcyjDXl9rBBjqkAUj%2FD%2FeNnjkraPsSklurvHxDOGlid8I1Dg7Ef6%2FKfQhBfv5Izm%2BvrcNamkBc7RgnbqLs2LVhiPVMiSmOXnrxvbg5K7vLhkp3j7CG2wPBVWxa%2Fv7MRv4h%2BLYNuL2NSzG%2FmsSWB0hFo2mgU1jOdJsL7bVeBTgkVSYCZOBkk18J4Mw8fHykKnHqqL%2Bwfr%2BnkHRUMwIiGtnOi4tELcsm52xJ4ZZXxTz9&X-Amz-Signature=9804d72badc797acb95e6692299761611e5f02b7549329e81c98af8b90b4152d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643T4METS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BCScQi2dLk6UJ0y0rEXs1y5XMSnBLiNkftvz4XUvdEQIhAJkMRmKaNESSsYlWQ3JxXfHIg%2FsFHY51mCs0BzC8RIpjKv8DCG0QABoMNjM3NDIzMTgzODA1Igy%2Fq5MSRQqGNA6w5FIq3APQ2CFLLiBRaUYV5ewZjhIA2GOmkVZ0QcYnfS%2BHA2Bvz5GLzkQssscd6Fzj1Hdcd%2B9J3TktR6vLIH1TSGmwyMgIPiSvnaMOkHTdrlAxJUrFfZnVxjFUn7pFOD7KxDIRfhBQwt%2FJEeXQPzhqKsbLkODOHuCRoPhVRz6hbHRXAf7uemYwtKMoG1HaOrhKCcDikIJN3SYF9I0araTk6ZDxK4Qn7NvdKfpbC69lnQmWiSGScgM%2BFV213IByJDKNR%2FFo%2Be26e8CbxM2Ot0U2dgmJS2WOsogz1OBKKUCqrg3t2gC2w1%2BRmyp7hAHR%2FwFJ%2Btl8fyfrVqt9W16NBYJciKEzrIvBXZVFQK5bIzC5Env4jWKtY52VJqZfrX92o8USn9%2Ba52Mi%2F7rEC6ICHXejH0gTVkTSKOCzwTSnfynD4gK5xjX3zWYRjFGavdToSyMzgzc4yv8OoMc98Qi3Y2J26Yba8hmqEpTFUf%2FbUvvAXViTk5fz21hAxiQBot5jkqGfQnMJEm9M97WeIBgrSi7SEBIBTZ3ioXXwHXzFr5Fine207u2Cxa17iP4daDGZRy0JG9w1RWsJktxkoAkRJbTUJxKvd7APWCNpqSK%2Bo1WfwKBPKMN1VOfLmFfgXL9qU8gcyjDXl9rBBjqkAUj%2FD%2FeNnjkraPsSklurvHxDOGlid8I1Dg7Ef6%2FKfQhBfv5Izm%2BvrcNamkBc7RgnbqLs2LVhiPVMiSmOXnrxvbg5K7vLhkp3j7CG2wPBVWxa%2Fv7MRv4h%2BLYNuL2NSzG%2FmsSWB0hFo2mgU1jOdJsL7bVeBTgkVSYCZOBkk18J4Mw8fHykKnHqqL%2Bwfr%2BnkHRUMwIiGtnOi4tELcsm52xJ4ZZXxTz9&X-Amz-Signature=004b49ba680df5cb22aa966a741ea035230922824e8fbbf451941ca98a475523&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
