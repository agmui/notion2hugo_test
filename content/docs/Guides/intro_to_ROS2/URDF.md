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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J53CQIG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBVErTHd3w0opeMaBU03bX6ak8UHxl4GGRICwKOoYwowIhALWNNewrTa%2Fwnp6fYbiTfOVveUQi6Qj%2BWmNv12zZlnazKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzBxm%2BUHOtx1iNIggq3ANd7cItsPDJMbTXZu9ZMjIxKLQjx0dJ5wFuZS0KbtAhwdjE%2BwncB3V0Oe7aSvsVqwuZoCCECDh5mmBqOFHpC9h9y2KvRfbpdsTocpqJ1ZklSnHIPoCmG1vqqFisyaiVd8MOVo%2BRelWa3Zo3ESYY7B%2FYyDHlRv%2BPRY%2Bbhlq3z%2B5VL0Poub3PX5Hfn5eWx9DEHVg%2FUm5E6NOAGpOlC37NihsWzC4JfDgZeYn2%2BAxC3FfV67PasaKtfgVJ6qejWZS1bk0wf8p%2BcavYwTwPL5ATozrGOX8VL2vo2CYhSw6cqT8zFbDYNVZC2Jv%2BON%2Fgdnji8IxCZYibFxilfKLKjYKzTjjBJH6%2Fx4mdbdeIfFaeFm8MiAXLjhII75YjszJQT31Xaf5i3f8Mp%2BInnAXIW%2BPlwTSZPiDrVLBTqPNfeEOJaUC9HtT6O1YowwADYM0wd9wY4kO%2BtCP9keKEOr4141DUm%2FpeJTXrySAZfo%2B0Zi2eSy8xJl32UeCidChIK7VgwY2VZW%2BZZeC3ZNxJN%2Bq2ml0nM52xbvr21zaPPsVcqVv2pLebMCY6p85K56JJ0LkoPIM9VT1K8oaMCm4xR3mbzdWbACKorNJQsnetYSd6RKbkI2SSFr2oex9O3gs8ZoLLjDCjxJ3CBjqkAQJMQZHWLIH31iSTwp%2F6ZFUd8ks%2FvbbUsda5CzlH%2FJQ5tMkQyTTf6hkKW4sFu2MWz2xkBdql2Ee22S%2BGobuuMnlIjggZzGIL6nrz11%2BELYvJSH8NZbQlIgtTkuDBZioBI3PEO1Yj%2Fgqio75VB5Dqq%2BZ%2FF6Oe0LtXwB6gFSGuuN7lhdvfpTrnq9IYGeiAUagL03HxS%2BlYm1JWOWgmZlHNXVmVl3%2FG&X-Amz-Signature=1a30652fa749d707c4d7e47e4d7aef53df2d7fda1c3c916e5cf10e85c326c350&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J53CQIG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBVErTHd3w0opeMaBU03bX6ak8UHxl4GGRICwKOoYwowIhALWNNewrTa%2Fwnp6fYbiTfOVveUQi6Qj%2BWmNv12zZlnazKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzBxm%2BUHOtx1iNIggq3ANd7cItsPDJMbTXZu9ZMjIxKLQjx0dJ5wFuZS0KbtAhwdjE%2BwncB3V0Oe7aSvsVqwuZoCCECDh5mmBqOFHpC9h9y2KvRfbpdsTocpqJ1ZklSnHIPoCmG1vqqFisyaiVd8MOVo%2BRelWa3Zo3ESYY7B%2FYyDHlRv%2BPRY%2Bbhlq3z%2B5VL0Poub3PX5Hfn5eWx9DEHVg%2FUm5E6NOAGpOlC37NihsWzC4JfDgZeYn2%2BAxC3FfV67PasaKtfgVJ6qejWZS1bk0wf8p%2BcavYwTwPL5ATozrGOX8VL2vo2CYhSw6cqT8zFbDYNVZC2Jv%2BON%2Fgdnji8IxCZYibFxilfKLKjYKzTjjBJH6%2Fx4mdbdeIfFaeFm8MiAXLjhII75YjszJQT31Xaf5i3f8Mp%2BInnAXIW%2BPlwTSZPiDrVLBTqPNfeEOJaUC9HtT6O1YowwADYM0wd9wY4kO%2BtCP9keKEOr4141DUm%2FpeJTXrySAZfo%2B0Zi2eSy8xJl32UeCidChIK7VgwY2VZW%2BZZeC3ZNxJN%2Bq2ml0nM52xbvr21zaPPsVcqVv2pLebMCY6p85K56JJ0LkoPIM9VT1K8oaMCm4xR3mbzdWbACKorNJQsnetYSd6RKbkI2SSFr2oex9O3gs8ZoLLjDCjxJ3CBjqkAQJMQZHWLIH31iSTwp%2F6ZFUd8ks%2FvbbUsda5CzlH%2FJQ5tMkQyTTf6hkKW4sFu2MWz2xkBdql2Ee22S%2BGobuuMnlIjggZzGIL6nrz11%2BELYvJSH8NZbQlIgtTkuDBZioBI3PEO1Yj%2Fgqio75VB5Dqq%2BZ%2FF6Oe0LtXwB6gFSGuuN7lhdvfpTrnq9IYGeiAUagL03HxS%2BlYm1JWOWgmZlHNXVmVl3%2FG&X-Amz-Signature=2bd652af0b3b9be5a86bdaa10d1d6f2ae0d0f7c2bd8ec139aedc7c0c88a67eb0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
