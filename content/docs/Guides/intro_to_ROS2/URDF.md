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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYNEHVXU%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIBvNaQlmkj8DiE%2BQQQQ98acI4%2FnC3%2Fb5NQcvF1iVjQNnAiEAgQSRMg8IgkfcKTuEk%2FWgu%2FO2RMfO50ACUIRQA53JHeAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPY7CKaOk9DL4KTYDyrcA%2BDEYAzMcE%2B4JOKD32Yjbx0%2FOu%2Fmn4ZnBQCT6BLe1T9K0gsbsaSnkrJ%2FkjcsFGZgvxpPlyOejzHuij2VDwpjTHO7Y9hmpz9HJHSLFiSNU4sXj9%2F47bvE%2BnEoBNUPBovtlsoTTzPMbJqFuADdVk4Jpm%2Bq2IFnAT%2BJuZYr%2F26o6Ev2Kc5IwhzNfwWyyjLcsPVjSgqt2JWHUwXQwouxVc19pohBMbFaHTVhjnWobCbxDucmERUSEAnILeJWDf6ZmSR8V5E5uHf6c1bELdFX2sIzI2yRtCj7hfrJ%2FQwkdHvetL3wtOzrY0y6qEULRAiVWEw%2B7LRR2%2Bn%2F1CwvVInzQLPkieHcAl7dlorgflbxbk%2Fmw9COs5hL5GgVbiOVAWuFbEfAOSa3AUj7%2BcVR4JqhhSPbSIsIgnSPS8Xl1fWWGPGWxOPFkK0iEmpiNeZu7YMfs7%2FmKHGUz8mvcXUyYQRGsPguhMZZbah1xrGMnuCwODYlVsfdPIBqWMTiiAciy2vWCyBA3fKcKgPWEYBnB%2BF5VDSiTi2phekN6%2FFirVmBh5cBMdolZ7GtmZKbq7DuPDeR8aBWZVtWmCMBDq5eWtjN0fHs612IB7QZl1tzUJz0%2BS08TnGh8B%2Bety0%2BU0PUGd0vMMHzhL4GOqUB5aDpdAExMe%2FfveRKqI17AginBzjzW4hGvsUqwO1kjqi7SLl2UY8eP8kgMej93orCxQnHodAlXuGYXneNvSeQUKEZ76TtgheggIWrlB%2FElG9A7ZdWMwjYZx4PX2FTnGHLu%2BRVAJDGqAFO4gHC3CBaq7q%2BncChB%2Fh%2FxHByA3okKW3Z6n51Y0GEyfkNxZXPVGzvYK7I9OZrNjsn54CRiitW8Zl11ynx&X-Amz-Signature=d10d21c5a3490b21a0d32ebc1ff33b76837b32692224185314507d47672659cf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYNEHVXU%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIBvNaQlmkj8DiE%2BQQQQ98acI4%2FnC3%2Fb5NQcvF1iVjQNnAiEAgQSRMg8IgkfcKTuEk%2FWgu%2FO2RMfO50ACUIRQA53JHeAqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPY7CKaOk9DL4KTYDyrcA%2BDEYAzMcE%2B4JOKD32Yjbx0%2FOu%2Fmn4ZnBQCT6BLe1T9K0gsbsaSnkrJ%2FkjcsFGZgvxpPlyOejzHuij2VDwpjTHO7Y9hmpz9HJHSLFiSNU4sXj9%2F47bvE%2BnEoBNUPBovtlsoTTzPMbJqFuADdVk4Jpm%2Bq2IFnAT%2BJuZYr%2F26o6Ev2Kc5IwhzNfwWyyjLcsPVjSgqt2JWHUwXQwouxVc19pohBMbFaHTVhjnWobCbxDucmERUSEAnILeJWDf6ZmSR8V5E5uHf6c1bELdFX2sIzI2yRtCj7hfrJ%2FQwkdHvetL3wtOzrY0y6qEULRAiVWEw%2B7LRR2%2Bn%2F1CwvVInzQLPkieHcAl7dlorgflbxbk%2Fmw9COs5hL5GgVbiOVAWuFbEfAOSa3AUj7%2BcVR4JqhhSPbSIsIgnSPS8Xl1fWWGPGWxOPFkK0iEmpiNeZu7YMfs7%2FmKHGUz8mvcXUyYQRGsPguhMZZbah1xrGMnuCwODYlVsfdPIBqWMTiiAciy2vWCyBA3fKcKgPWEYBnB%2BF5VDSiTi2phekN6%2FFirVmBh5cBMdolZ7GtmZKbq7DuPDeR8aBWZVtWmCMBDq5eWtjN0fHs612IB7QZl1tzUJz0%2BS08TnGh8B%2Bety0%2BU0PUGd0vMMHzhL4GOqUB5aDpdAExMe%2FfveRKqI17AginBzjzW4hGvsUqwO1kjqi7SLl2UY8eP8kgMej93orCxQnHodAlXuGYXneNvSeQUKEZ76TtgheggIWrlB%2FElG9A7ZdWMwjYZx4PX2FTnGHLu%2BRVAJDGqAFO4gHC3CBaq7q%2BncChB%2Fh%2FxHByA3okKW3Z6n51Y0GEyfkNxZXPVGzvYK7I9OZrNjsn54CRiitW8Zl11ynx&X-Amz-Signature=09f05ef0a31458436fdbcf7f13490afb23327eba9e0e627d488be4b6418bbea3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
