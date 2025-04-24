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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7GU3YE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDVTXqsNaANbQsj15%2FavtsexURFl0hQ%2B%2B1BS67g2nX3rAIgZZD6Re3R0G1PaR8Xx7yOGRlHT9PcOwRWJMsaBaUpp2wq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDF8ZPc4bi5Tte%2FGbIircA7zZldcRRk0bTNS0qqL7bZRT9RTaNPEPMHY07qunFI7K7h9WXYSfHVPTZGTTVRDuqAnIUj%2FH039CrX9H0aWHAgctS%2BBsFXJ7J5zMsjuF3GYIkheR9VTxA%2Bf8Yy0zWhWCPSUJ21AYzjgBXMrbCJ1Y8scXqP9CIFnYEt5RYjkK1JJ0M6KgJrS2XGZ63QDOG88RdhJ26Qmvh32mfAejTvdm3oUgOFg3p6oVcPgmM5XTEQXGXqg4vAiWmctoioiZ6RYXI4WBvhQobp9ko5hieiW0%2FxrBccEe5U%2FCiIZjcibQBQL3oAoyZmAa7%2F2pRq0c%2FxlxX%2Bjq%2BoJc5fXxbtG3WN31O0hyG%2B8642LKdLmzH2osBa53HExEpVvVHU%2FNC6V%2F5PtEiQeNt%2BjyRUjR%2BbHy14V8t2ObdC1D31FUZuMYrZdp%2FGiB6esMub%2BneoGLLCkjr8JkdU4agqTjX4pkoiPAumSuirXs4nswWKGwrwbf8RvNrZGVNtIMPdiZ3BQdfnYlBy1pdbjsJkJL2STlJJ%2BbVlP7c%2FaVv0PoB%2BCHlYhqsRKpWfDlYZyTcvG1j1UTRQUDzxh%2F0fBRzPbQZMXufzC7gDdqQFUdvvZ8VHg7Qm9ifEj2WKApDti5FLbRbuP2nfXdMLDpp8AGOqUBqHvXsNr4Aj%2BH%2FUG26mwxwW3fEuPJYyDEtvgvEy%2BzHrYJW4P4cjXZ8EMVFkVWw2ETxyAttqmw1YLOvp%2F2GlNt9XJ3%2F882wj89p7rZERtHjZ0uZL6H%2B1klELbhFeIODVR%2B8pW7rS2EM%2Fo03LEGy3jNFqmOTruXBApJ52M19v9HKzQir7%2B2vzxQLF4%2BhESVmBKKrtBdiBq4uMv2aalMQptJeuFXIxDv&X-Amz-Signature=cbeb2b37513ebe5447aebb82f899d327ad78683416783acfceda9b9f316bfd0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7GU3YE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDVTXqsNaANbQsj15%2FavtsexURFl0hQ%2B%2B1BS67g2nX3rAIgZZD6Re3R0G1PaR8Xx7yOGRlHT9PcOwRWJMsaBaUpp2wq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDF8ZPc4bi5Tte%2FGbIircA7zZldcRRk0bTNS0qqL7bZRT9RTaNPEPMHY07qunFI7K7h9WXYSfHVPTZGTTVRDuqAnIUj%2FH039CrX9H0aWHAgctS%2BBsFXJ7J5zMsjuF3GYIkheR9VTxA%2Bf8Yy0zWhWCPSUJ21AYzjgBXMrbCJ1Y8scXqP9CIFnYEt5RYjkK1JJ0M6KgJrS2XGZ63QDOG88RdhJ26Qmvh32mfAejTvdm3oUgOFg3p6oVcPgmM5XTEQXGXqg4vAiWmctoioiZ6RYXI4WBvhQobp9ko5hieiW0%2FxrBccEe5U%2FCiIZjcibQBQL3oAoyZmAa7%2F2pRq0c%2FxlxX%2Bjq%2BoJc5fXxbtG3WN31O0hyG%2B8642LKdLmzH2osBa53HExEpVvVHU%2FNC6V%2F5PtEiQeNt%2BjyRUjR%2BbHy14V8t2ObdC1D31FUZuMYrZdp%2FGiB6esMub%2BneoGLLCkjr8JkdU4agqTjX4pkoiPAumSuirXs4nswWKGwrwbf8RvNrZGVNtIMPdiZ3BQdfnYlBy1pdbjsJkJL2STlJJ%2BbVlP7c%2FaVv0PoB%2BCHlYhqsRKpWfDlYZyTcvG1j1UTRQUDzxh%2F0fBRzPbQZMXufzC7gDdqQFUdvvZ8VHg7Qm9ifEj2WKApDti5FLbRbuP2nfXdMLDpp8AGOqUBqHvXsNr4Aj%2BH%2FUG26mwxwW3fEuPJYyDEtvgvEy%2BzHrYJW4P4cjXZ8EMVFkVWw2ETxyAttqmw1YLOvp%2F2GlNt9XJ3%2F882wj89p7rZERtHjZ0uZL6H%2B1klELbhFeIODVR%2B8pW7rS2EM%2Fo03LEGy3jNFqmOTruXBApJ52M19v9HKzQir7%2B2vzxQLF4%2BhESVmBKKrtBdiBq4uMv2aalMQptJeuFXIxDv&X-Amz-Signature=a04dc301a5cf53aa2d2c7506d39bf13c20c1fe126e4be51f282faddd01fb3261&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
