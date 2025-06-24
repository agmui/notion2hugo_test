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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIS7JZFX%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCfwCInZhkzD%2BEC%2BjtWj5Yx18%2FfXTkuWK3syMMyja0qlAIhALw3Aat31%2FNDmSATwBrgm%2FcGYsoSwrdatugJXKMlgGwhKv8DCCMQABoMNjM3NDIzMTgzODA1IgwyfnnV6oEb0i%2BZL0kq3AP%2BSLS1eaoulEXZgwdXVQV677Pp%2FiWPKY%2FDmYsfrR5B%2BmaTMrs6NodA6LWFVLQsEjebZ7x18XaEAbRahBSGS6lk%2B6uO9mVByyTb5tqmPGbbklDp4ul6XRX6LI416oQ%2BOzelbhtnl0%2FUCGgHAgfmnHEa019BKa3uAghcA31svfLfoB3NOK%2Fvfpj1MtnzqOAzvBmNfK49n5%2FjdIXeFOLvLTKQy0DXA5AWWFuJpTDEFUy%2BRE92bq6MIsJwSc2R1rjcnPvjsAxZUaZi4aQ3i9A6uFk4vR10AdDhT4jBQh5A1F1agL6F%2FTDeXYgZlC%2FOjRJ2Tq%2BfLIJO5ckP6EKuxjyKu%2FXSClaG%2FMiBkD3OoQXc6VQZ1IBabWqGNwYllBEdI2k6FW%2F1g1k1FKpa%2FYI23SZroibr8qUw33fQvL9FaEfynfT2tp4NUlm7ppIbNGMqpLSW6Jr0vOFcY4AZKqkV1A6FaLwkwprXQ452kox0fsnclKiCd%2FJSgJS6Vohlgk%2FDwvO%2FrDw6jC%2FAcwK7LmZBkjB49FNmrjp3Pb%2BVUHDDhdQBbIAy%2BQpou8Q%2B1M2dX1SWYunFPX3l%2BlQvrZ0M%2FhHGVEMI%2B8KLbfOGrEUfVyk1%2FiiOxhN6CTSS0hiXFPc6kkzqtjC0lejCBjqkASweI%2FKb7L7MDE4Il3Z9t4ukht9rqjDdXR3l6ho38awrpN68EhDtZwpYIYBEa%2BhJhwYIVoKPwZLnWN5T75XFGollsM7l4btIfLKBEWzgHxT7VVwPygX4tvSKJK8q82EwvUtPmuE4zFODQDZdmiS0z9NrAQQtuFEHq3YHfa1X1TIIjevpUbw3pXNVrRFHfNZZyuSLW7mxUkGi922aC8SIGon7Z9q9&X-Amz-Signature=f939f60e32ab5e7feb0c38d2a51da3c5e2a9a0c87861d5a01a2c7d5535c17840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIS7JZFX%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCfwCInZhkzD%2BEC%2BjtWj5Yx18%2FfXTkuWK3syMMyja0qlAIhALw3Aat31%2FNDmSATwBrgm%2FcGYsoSwrdatugJXKMlgGwhKv8DCCMQABoMNjM3NDIzMTgzODA1IgwyfnnV6oEb0i%2BZL0kq3AP%2BSLS1eaoulEXZgwdXVQV677Pp%2FiWPKY%2FDmYsfrR5B%2BmaTMrs6NodA6LWFVLQsEjebZ7x18XaEAbRahBSGS6lk%2B6uO9mVByyTb5tqmPGbbklDp4ul6XRX6LI416oQ%2BOzelbhtnl0%2FUCGgHAgfmnHEa019BKa3uAghcA31svfLfoB3NOK%2Fvfpj1MtnzqOAzvBmNfK49n5%2FjdIXeFOLvLTKQy0DXA5AWWFuJpTDEFUy%2BRE92bq6MIsJwSc2R1rjcnPvjsAxZUaZi4aQ3i9A6uFk4vR10AdDhT4jBQh5A1F1agL6F%2FTDeXYgZlC%2FOjRJ2Tq%2BfLIJO5ckP6EKuxjyKu%2FXSClaG%2FMiBkD3OoQXc6VQZ1IBabWqGNwYllBEdI2k6FW%2F1g1k1FKpa%2FYI23SZroibr8qUw33fQvL9FaEfynfT2tp4NUlm7ppIbNGMqpLSW6Jr0vOFcY4AZKqkV1A6FaLwkwprXQ452kox0fsnclKiCd%2FJSgJS6Vohlgk%2FDwvO%2FrDw6jC%2FAcwK7LmZBkjB49FNmrjp3Pb%2BVUHDDhdQBbIAy%2BQpou8Q%2B1M2dX1SWYunFPX3l%2BlQvrZ0M%2FhHGVEMI%2B8KLbfOGrEUfVyk1%2FiiOxhN6CTSS0hiXFPc6kkzqtjC0lejCBjqkASweI%2FKb7L7MDE4Il3Z9t4ukht9rqjDdXR3l6ho38awrpN68EhDtZwpYIYBEa%2BhJhwYIVoKPwZLnWN5T75XFGollsM7l4btIfLKBEWzgHxT7VVwPygX4tvSKJK8q82EwvUtPmuE4zFODQDZdmiS0z9NrAQQtuFEHq3YHfa1X1TIIjevpUbw3pXNVrRFHfNZZyuSLW7mxUkGi922aC8SIGon7Z9q9&X-Amz-Signature=a5dc8b0420e2aa92ebaf34f80428e2d449d4c78fd7389c307352dc7ad39ce314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
