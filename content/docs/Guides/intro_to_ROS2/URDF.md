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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4UUM5KL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIEAxReQTXxKizcS6tveFDCIyD4t9PH%2FjFTR8xvtncWKAAiEAmpyrec%2F6t6zSaJ%2BVCbPpEiZlQMoEqODE%2B2DRHhlMzxsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw9KMRIVp812j2dTircA%2FWF1AvaW2vpsSsC%2FDb76o%2FdiMRKbACYpxbOryykjEjLVcplwp3%2BTZgAixRJi9BT9o37zyV5r2HbEoJPJHNSbKTz8M2aLxkMJM954ayN0B9Sq%2BIID646hGDn28i2zqp1eLxcXwWQFNzGuU7zsTT1hn2TBSv9jhSV8wsq5PwuRmYq2RUfTZ2pMFFJfkk2I%2FnT%2F5CwsWzKFSunShPH8mAVTlNUHkJhkJxyq%2FW4yxBPd2pfC3Ek3CUnk4knwjpld5nNvWGxKB%2B2TsloUx5R1Sl0cu8ILmrrXnQAljRZjPpM7RWh9BON2wNXJjhMQsg43wR7706CL7Oq1fjBX91bBmFnnUJ5FQ4o8Uqj5Cf6HoK8p70p4EAgyILhRdCnDXKMrLRjfsfAVgBtXMMIJy7A6MgZv4QwcQilVl6g2ZVXvwTGxDDSlZCXxoqmwFcwgfZ%2BXGJLS9rj%2FPO4SchoxTUTBihR9%2BH3sG4DEGWEurfOpvo9enQWwWxo6vHGFZ%2Bs8LLTm2o8tGXvzdu5zeBL5BXoz%2FFjLdt%2FtMgijNw300gGgO3njqD1AKPKWLLxzp0T3yihA3IwH4i9LIItaEnIhFco%2B%2FCPHOifGfwKRdsMP%2F7tWs9CukIG2DYlNw61Gk6sCp7TMPj66b8GOqUBUSByqnarIRyh6H7xqqyE8q4b%2BXBt6gx3RS9iQr3xFHONzD%2B0IAz7lZPg1zmsdrOgmZHL3uawWZ5b8QcjyqQkPCpOiX45Npk5FyCKGTTURaICZDYY4u7BYkyZxTKltVlWW%2BVBqF%2Bf%2BnZqBL4byZZxUPp2am%2FXorvw9VjosuHRbv7HCJEEP86RIRtXBFU14QjqgLGFsOZ1FdqdzXUgVjz1cY7r2jbO&X-Amz-Signature=0db729d20d431ecdfb964157467e0c3b8c8588459ce7c29b3a868cb107661e40&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4UUM5KL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIEAxReQTXxKizcS6tveFDCIyD4t9PH%2FjFTR8xvtncWKAAiEAmpyrec%2F6t6zSaJ%2BVCbPpEiZlQMoEqODE%2B2DRHhlMzxsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw9KMRIVp812j2dTircA%2FWF1AvaW2vpsSsC%2FDb76o%2FdiMRKbACYpxbOryykjEjLVcplwp3%2BTZgAixRJi9BT9o37zyV5r2HbEoJPJHNSbKTz8M2aLxkMJM954ayN0B9Sq%2BIID646hGDn28i2zqp1eLxcXwWQFNzGuU7zsTT1hn2TBSv9jhSV8wsq5PwuRmYq2RUfTZ2pMFFJfkk2I%2FnT%2F5CwsWzKFSunShPH8mAVTlNUHkJhkJxyq%2FW4yxBPd2pfC3Ek3CUnk4knwjpld5nNvWGxKB%2B2TsloUx5R1Sl0cu8ILmrrXnQAljRZjPpM7RWh9BON2wNXJjhMQsg43wR7706CL7Oq1fjBX91bBmFnnUJ5FQ4o8Uqj5Cf6HoK8p70p4EAgyILhRdCnDXKMrLRjfsfAVgBtXMMIJy7A6MgZv4QwcQilVl6g2ZVXvwTGxDDSlZCXxoqmwFcwgfZ%2BXGJLS9rj%2FPO4SchoxTUTBihR9%2BH3sG4DEGWEurfOpvo9enQWwWxo6vHGFZ%2Bs8LLTm2o8tGXvzdu5zeBL5BXoz%2FFjLdt%2FtMgijNw300gGgO3njqD1AKPKWLLxzp0T3yihA3IwH4i9LIItaEnIhFco%2B%2FCPHOifGfwKRdsMP%2F7tWs9CukIG2DYlNw61Gk6sCp7TMPj66b8GOqUBUSByqnarIRyh6H7xqqyE8q4b%2BXBt6gx3RS9iQr3xFHONzD%2B0IAz7lZPg1zmsdrOgmZHL3uawWZ5b8QcjyqQkPCpOiX45Npk5FyCKGTTURaICZDYY4u7BYkyZxTKltVlWW%2BVBqF%2Bf%2BnZqBL4byZZxUPp2am%2FXorvw9VjosuHRbv7HCJEEP86RIRtXBFU14QjqgLGFsOZ1FdqdzXUgVjz1cY7r2jbO&X-Amz-Signature=ccc39b4f1c385af0e141b829cdf629a23844ee25a5545f99c161998c8048372e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
