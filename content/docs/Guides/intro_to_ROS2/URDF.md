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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SEB3RYC%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCllQx70KYh82yfhc3C5zui36aryT3bHGQXTpp1IY2WqwIhANmkfMTj%2BXcHqRHPLV%2FDGxERr9bB7VbzzQFo4ABypH77Kv8DCHsQABoMNjM3NDIzMTgzODA1IgxzMkmK4d1GsQFqZ0Qq3AOcfPiRLgEeZVaHwdW4rAx6euTLHn%2F%2FmrvWE5KtRnmd6RDTYb4%2Fkw6VEx3YoJsI%2BqPjGUtFxpt4ZBIMM8vVkSZvP%2FZijdDwsbWfKmWAVtsWu1uX0POFfU1hpGCC4SboIGRRLxCXwV0Lp%2FHPnoLomjgXq5G0yO10D6DbpbEHIpKnzsHLKZMBV3vePaE9UHDMBz%2BLj6e6rmmRwmXz13gmGs5k3h8wk3VkSvNOy0zgAvT2gAJJrH7qyfyDtXocxEkfh1ulNj9S8b1wDTCZ%2BW1A7udMEmr7OpfoaMhyJ0LrnyNvqq4mXy0YmXF7AKwk54W6ePy7dEPcTpxPwoge2ddkYYwA5ZfRd0Ipzu8hdy2o2HXJ%2FvUuOVAkH7nClOWkmc4B%2FCEi5WBKJDlXovNizBS5BMbaBiyAxHTNPEo9euDtmyrvjmhKASjqYGhbNNW4UtdJ1GpyEy7gPZWlQ4rrr6hZWmxH500a1BG3bSHPCwrfxeku4IB2VsTQhPr5OQqZcB2uXSBcMOHZOp8ayjsb%2FrHb203y2Ia%2FeZ0UE6OAAFat%2BnVMbtBmBWyQ%2BA4CD%2FOWB3KD44xaHO08C9LBFbYDwcwpEf%2Fn9Nst2LXuxQIAM0938Ku2%2BZl42hRtSPuylj4QTzChu9W%2FBjqkAWV1xNKHbovvYK73x%2F1xUZ3O0sdxZ%2BUciFwBW%2FnDV2AduqTfxuF4So1t1ui8U%2F0uoz0jz5uUqaWafygxA0kTwOFEmn3XD3%2F2Dx2VsVSPHAuT%2BhAPwbcnLATzQS07TzuMlpmqk9z3TsCKJ8vv6PqMkntiZ6YYUpB4zYHFEbIGLvRlj76H3Tx3ULmiSTCwNoFpGjdxii9nVzjUBJCnHlTZ%2F6Tib6fu&X-Amz-Signature=4e10a9d7bbc87a928898eb23e90032cf9e636f8b4fa7988c82367baec1cb425e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SEB3RYC%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCllQx70KYh82yfhc3C5zui36aryT3bHGQXTpp1IY2WqwIhANmkfMTj%2BXcHqRHPLV%2FDGxERr9bB7VbzzQFo4ABypH77Kv8DCHsQABoMNjM3NDIzMTgzODA1IgxzMkmK4d1GsQFqZ0Qq3AOcfPiRLgEeZVaHwdW4rAx6euTLHn%2F%2FmrvWE5KtRnmd6RDTYb4%2Fkw6VEx3YoJsI%2BqPjGUtFxpt4ZBIMM8vVkSZvP%2FZijdDwsbWfKmWAVtsWu1uX0POFfU1hpGCC4SboIGRRLxCXwV0Lp%2FHPnoLomjgXq5G0yO10D6DbpbEHIpKnzsHLKZMBV3vePaE9UHDMBz%2BLj6e6rmmRwmXz13gmGs5k3h8wk3VkSvNOy0zgAvT2gAJJrH7qyfyDtXocxEkfh1ulNj9S8b1wDTCZ%2BW1A7udMEmr7OpfoaMhyJ0LrnyNvqq4mXy0YmXF7AKwk54W6ePy7dEPcTpxPwoge2ddkYYwA5ZfRd0Ipzu8hdy2o2HXJ%2FvUuOVAkH7nClOWkmc4B%2FCEi5WBKJDlXovNizBS5BMbaBiyAxHTNPEo9euDtmyrvjmhKASjqYGhbNNW4UtdJ1GpyEy7gPZWlQ4rrr6hZWmxH500a1BG3bSHPCwrfxeku4IB2VsTQhPr5OQqZcB2uXSBcMOHZOp8ayjsb%2FrHb203y2Ia%2FeZ0UE6OAAFat%2BnVMbtBmBWyQ%2BA4CD%2FOWB3KD44xaHO08C9LBFbYDwcwpEf%2Fn9Nst2LXuxQIAM0938Ku2%2BZl42hRtSPuylj4QTzChu9W%2FBjqkAWV1xNKHbovvYK73x%2F1xUZ3O0sdxZ%2BUciFwBW%2FnDV2AduqTfxuF4So1t1ui8U%2F0uoz0jz5uUqaWafygxA0kTwOFEmn3XD3%2F2Dx2VsVSPHAuT%2BhAPwbcnLATzQS07TzuMlpmqk9z3TsCKJ8vv6PqMkntiZ6YYUpB4zYHFEbIGLvRlj76H3Tx3ULmiSTCwNoFpGjdxii9nVzjUBJCnHlTZ%2F6Tib6fu&X-Amz-Signature=0181787bb7ef038faac30794edec29cc7018829978b5dd36f94fe011be74941a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
