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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QWYXIIK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhv2NrvPqfdLc1kDeDsrHzMPlyXrWkyitrCdMFd4pzVAiEAlASYnvtMRZrxA62ci%2FeU5kp%2B7wesQmx4CvJVpzKbYsoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeQeZxtpo2irNneAircA97Abu3Cja%2BXr5W%2BhnmbQjzP3du0SH4dEkBmT0WUfE%2BBKdMPKKA1OcbQf4t775L%2Fop0aFpJspwLhGMv9vymrtNSgs%2BZzmW9RNlXBLQ2wiDEfG34MQCdg5c%2F1X94RLxNXlxylx5C%2Fjc9M61DdB20%2Behu4AaryMs%2FUT5bsmwEjf2kCnnkFtn%2BIPjclO0Y%2BnK5e1ToZlw%2F1%2BtE%2BPxe0NMY17%2F8bk9yLa1eTiwA%2FO7Xk7hZxLEc7qnLrWc0zDB1ORpp3AnAqoqdrzCRf4esOyOPaAZo5YPtu4tJS%2BrhVvdgkNNq0bc0CscFBQe8EHXEjtdVNwlrbfCOAAx2e%2BUHXkFz46mDrSOwdkBDORIKAT4D%2Bhe3Osi%2BusdEzOY4d7S0x7ejKJW9I%2Bzd36cwE5cVyXOq6Qo076I8ugy1rRKqtqyd6lwif53jWjqRSQoQN6xDIHQeBign1sk9%2FkJ7bOhJNRjsxhxv8Ur3FwCeHyf4ZBntuTOPA54pi6D8EEWdXmaXU9zBdx5oX7bc%2Bug5jDpVi4tu4msaCA86nwWNhZDm6Q2zmSQuoM8tvQTlmHvC2Aqt9CMogzni%2BrMBj2pBqETEZMQ9sS1eQW4XwDWOqoJvQkTnb0Eb6VU%2BZKCOmJafjI2hjMNPAgL0GOqUB8qSj1iX%2FTtEP2fhIUNWZHf6oEU5nAFmBXUq8TQebDsl3Qu4mH1TY2eoRIYXQVFMhb5PLN3DWqrwh66%2BBOzLTcJTtQ8UROpnuhV8gzBXz%2BpsM%2F4BRQ3FBLNc3WfV0lJ5nvLPRtaa9brgHlmhJQk5Be4hFHGkr6d3%2BTZzFsaA%2FSuoyx5mFdf419YBVTrkh%2Fh1oCDy0Z9R1GOSx5KjqhH4%2Bnp03Wi72&X-Amz-Signature=96870adb446c972aa8e48cdef69b874613bf4e1724b4e4510648878fd2df07fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QWYXIIK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhv2NrvPqfdLc1kDeDsrHzMPlyXrWkyitrCdMFd4pzVAiEAlASYnvtMRZrxA62ci%2FeU5kp%2B7wesQmx4CvJVpzKbYsoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeQeZxtpo2irNneAircA97Abu3Cja%2BXr5W%2BhnmbQjzP3du0SH4dEkBmT0WUfE%2BBKdMPKKA1OcbQf4t775L%2Fop0aFpJspwLhGMv9vymrtNSgs%2BZzmW9RNlXBLQ2wiDEfG34MQCdg5c%2F1X94RLxNXlxylx5C%2Fjc9M61DdB20%2Behu4AaryMs%2FUT5bsmwEjf2kCnnkFtn%2BIPjclO0Y%2BnK5e1ToZlw%2F1%2BtE%2BPxe0NMY17%2F8bk9yLa1eTiwA%2FO7Xk7hZxLEc7qnLrWc0zDB1ORpp3AnAqoqdrzCRf4esOyOPaAZo5YPtu4tJS%2BrhVvdgkNNq0bc0CscFBQe8EHXEjtdVNwlrbfCOAAx2e%2BUHXkFz46mDrSOwdkBDORIKAT4D%2Bhe3Osi%2BusdEzOY4d7S0x7ejKJW9I%2Bzd36cwE5cVyXOq6Qo076I8ugy1rRKqtqyd6lwif53jWjqRSQoQN6xDIHQeBign1sk9%2FkJ7bOhJNRjsxhxv8Ur3FwCeHyf4ZBntuTOPA54pi6D8EEWdXmaXU9zBdx5oX7bc%2Bug5jDpVi4tu4msaCA86nwWNhZDm6Q2zmSQuoM8tvQTlmHvC2Aqt9CMogzni%2BrMBj2pBqETEZMQ9sS1eQW4XwDWOqoJvQkTnb0Eb6VU%2BZKCOmJafjI2hjMNPAgL0GOqUB8qSj1iX%2FTtEP2fhIUNWZHf6oEU5nAFmBXUq8TQebDsl3Qu4mH1TY2eoRIYXQVFMhb5PLN3DWqrwh66%2BBOzLTcJTtQ8UROpnuhV8gzBXz%2BpsM%2F4BRQ3FBLNc3WfV0lJ5nvLPRtaa9brgHlmhJQk5Be4hFHGkr6d3%2BTZzFsaA%2FSuoyx5mFdf419YBVTrkh%2Fh1oCDy0Z9R1GOSx5KjqhH4%2Bnp03Wi72&X-Amz-Signature=ffcfc2d217ca927ef57b8ea5ab9acbc1251469b753a651e7776628f33fc0e2cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
