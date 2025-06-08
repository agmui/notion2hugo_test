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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTEGDLYA%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQlmRgmp5WcCdbM9Y47xIoFlAyB%2FUrB8ooDLhsfYrlQAiEAwp7bXKj6rKUOWbtdeQHv7QUnFZ%2FWRnIxkSDeUx4fbagqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbU6jmIDk2XigqqIyrcAxE3XNX8Bp1HmvS%2B7LhmjXBf1CBR2S3NEy6SGQgxc62FNLZdZLoVHUZAhXsDiKEk1t4xZiQ3WQT0UrVEG3Hd9D%2F%2F15IGwck%2BF9IqF1Vy1v%2B1PQJF52J4miNR04rVjzxISS9eKnHiPVKfjvuVmU%2B6ZrPbo90bnL7SCWW2FaCZePBmtxC3KPGXZyBvDFckQaJse6NhWPsi35TjzHJOBCFjEkWquinmkieKgMcXJXWU75T8I5BXzuuro0b8hw%2BFzD1jTibx8%2BCPCRuJl0GqGQkVMHE894QCSYPhszfOl0kmhRxJnHz%2FgNoyW3%2BuhYfiSzdlZ3FaxdG95cxdZzMoxC1sBGgPiCnJLovjv6vI10f9LoR93WJEr3ZHfD9vrAjoEdy4%2BeUqSyIq%2B6dp%2BVfZJ16OY4qd6VqD6mWqaRFXtqQM33BOTAAzYtEhqNt42Pak0Fnb%2BJrnnc2rV%2F%2BkhvalhWIkYkFcIi2buTzJSfcA2al%2F27ZcUuhWj%2BCa59QuldIkxWPW7%2Fwbi%2BrbuVPm7WRnMVgAiXHIrVblm0oe5c92yDYTu2nLoDszkc2MncfqkYu0cnRjZl4sqmdAFXRHLxKRw0dyVppyuF1pPUo3pgjH2Z2jEoPIe%2FsYkNFJALhyb8YaMI7zlMIGOqUBVe0pDpTolka0nB5ik16FO5v4kqiFe8M1stPnHvxVS%2BheEmr6UGMM5nbNK0O%2BRxTDnqs7jC3co0eUEOuIp41riWHaiDOS%2FBq%2Fx%2FNlmJKjGkHlqi9W5lAWjKdhLHgMzGmBnSwW6eTXlFq80PfCG12PcnDST5RIvwrm%2BuXMtW7TS8gXA7oBpAttcqH96AV0jCYX39DHpMgQ3AcUav2ZzYiVBucMUmZ4&X-Amz-Signature=9e26fdb2492ea502622a6500ac5e94fb82f4e1eb054cb24e19c377207145b824&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTEGDLYA%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQlmRgmp5WcCdbM9Y47xIoFlAyB%2FUrB8ooDLhsfYrlQAiEAwp7bXKj6rKUOWbtdeQHv7QUnFZ%2FWRnIxkSDeUx4fbagqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbU6jmIDk2XigqqIyrcAxE3XNX8Bp1HmvS%2B7LhmjXBf1CBR2S3NEy6SGQgxc62FNLZdZLoVHUZAhXsDiKEk1t4xZiQ3WQT0UrVEG3Hd9D%2F%2F15IGwck%2BF9IqF1Vy1v%2B1PQJF52J4miNR04rVjzxISS9eKnHiPVKfjvuVmU%2B6ZrPbo90bnL7SCWW2FaCZePBmtxC3KPGXZyBvDFckQaJse6NhWPsi35TjzHJOBCFjEkWquinmkieKgMcXJXWU75T8I5BXzuuro0b8hw%2BFzD1jTibx8%2BCPCRuJl0GqGQkVMHE894QCSYPhszfOl0kmhRxJnHz%2FgNoyW3%2BuhYfiSzdlZ3FaxdG95cxdZzMoxC1sBGgPiCnJLovjv6vI10f9LoR93WJEr3ZHfD9vrAjoEdy4%2BeUqSyIq%2B6dp%2BVfZJ16OY4qd6VqD6mWqaRFXtqQM33BOTAAzYtEhqNt42Pak0Fnb%2BJrnnc2rV%2F%2BkhvalhWIkYkFcIi2buTzJSfcA2al%2F27ZcUuhWj%2BCa59QuldIkxWPW7%2Fwbi%2BrbuVPm7WRnMVgAiXHIrVblm0oe5c92yDYTu2nLoDszkc2MncfqkYu0cnRjZl4sqmdAFXRHLxKRw0dyVppyuF1pPUo3pgjH2Z2jEoPIe%2FsYkNFJALhyb8YaMI7zlMIGOqUBVe0pDpTolka0nB5ik16FO5v4kqiFe8M1stPnHvxVS%2BheEmr6UGMM5nbNK0O%2BRxTDnqs7jC3co0eUEOuIp41riWHaiDOS%2FBq%2Fx%2FNlmJKjGkHlqi9W5lAWjKdhLHgMzGmBnSwW6eTXlFq80PfCG12PcnDST5RIvwrm%2BuXMtW7TS8gXA7oBpAttcqH96AV0jCYX39DHpMgQ3AcUav2ZzYiVBucMUmZ4&X-Amz-Signature=fc762e5fb247e96a2cce0d2b224b120ebd4d4289f4cffc799b531a9683d35cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
