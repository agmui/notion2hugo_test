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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7JLV6N%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCID8TlAMcrBigcgJL1MJSNprM56B8y%2BrnyH8J5hsH3xUPAiEArAn7JfFj4uMz9zbit0WedlROCFNi2NlP3EcnwL0pEwQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIeuvDR5xrM0vHZkNyrcA3DIpE%2BbFfPBkYlKsIjyldOHka3L%2BY%2Bs5YCBoL%2F8HgYG8HBKPq3WBjzBf5VTYERR2SlO%2B9pS%2BfuyZ2uqkxt3bPfe0URScJTKDAyPjEwE6S2f8bmZ%2B0YEmjHYHarpJ6zuB4%2FkAn9E3Zf7YKAxWhWaJP1Hey5aGlhEnqB1WmiBqgdN4Fz56cwXTE5jx1EtTCD8Z9PTQIlYemDFHfjsuhxQqkfCqfRwmOiRZCVfRbuTjMuM4LUu9IBJvDvszJXGJIGk6Sbq%2B3nLSJhH9FZ6rQHRcxwmyT9lkTQmOUaQwykc9RHfDYDG86TPM5tPP2B7RAReFvCpDV0qCgglbVyKCZhG9YyyU6ojeAOIZfeKP3LNeGxcqLUOI9zgkGIK3fhDAg4B00FUAk4lU5hPAtM7ugdfiZlltLp60bLTxd8zxnphUIz2gRMoNW6UvlIYlf82ZE86Pet%2F%2BH%2F0c%2Fk4ekaUVnfJMAFbVxHOwRnQYhr5eaTr0js4A8IGSxEb6%2FiDo%2BrqiilYg01387Jml2gkUh4RmMocLTM0HZUml6cbawTBUz9VD4KMal63d6AUhPNwCYc5LvlTG2wBaRhfkrX1lpaluMjDwTDzNOzTBiI42KIW56QvgN2NX4%2FceGkZM1%2FQ0%2B1nMKej6sIGOqUBI0Jmx82AFfV3wKDXRLrVRu6NNHnwnizPV0PXjO86noa35ZgzoFXs0RaPHA8tDJYBvhhQOJ6kNE0lP1INlpHwHW%2B0Dz7xbr4TxlBAUdW5RzTNza7EX7h6pDgMtuMjuZ8%2Ft3DT7LuD8YCO1A5Y9v3WpFvdk2lbrDcNorzfcZskTqdfPhAehJrZOe3MZD%2F23fByok4u501PkE4%2FILEB0%2Fcs5oGWZbN9&X-Amz-Signature=b303326851dfd87137de6ef05012969892df15b72da4be11c18b614d346bbbef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7JLV6N%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCID8TlAMcrBigcgJL1MJSNprM56B8y%2BrnyH8J5hsH3xUPAiEArAn7JfFj4uMz9zbit0WedlROCFNi2NlP3EcnwL0pEwQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIeuvDR5xrM0vHZkNyrcA3DIpE%2BbFfPBkYlKsIjyldOHka3L%2BY%2Bs5YCBoL%2F8HgYG8HBKPq3WBjzBf5VTYERR2SlO%2B9pS%2BfuyZ2uqkxt3bPfe0URScJTKDAyPjEwE6S2f8bmZ%2B0YEmjHYHarpJ6zuB4%2FkAn9E3Zf7YKAxWhWaJP1Hey5aGlhEnqB1WmiBqgdN4Fz56cwXTE5jx1EtTCD8Z9PTQIlYemDFHfjsuhxQqkfCqfRwmOiRZCVfRbuTjMuM4LUu9IBJvDvszJXGJIGk6Sbq%2B3nLSJhH9FZ6rQHRcxwmyT9lkTQmOUaQwykc9RHfDYDG86TPM5tPP2B7RAReFvCpDV0qCgglbVyKCZhG9YyyU6ojeAOIZfeKP3LNeGxcqLUOI9zgkGIK3fhDAg4B00FUAk4lU5hPAtM7ugdfiZlltLp60bLTxd8zxnphUIz2gRMoNW6UvlIYlf82ZE86Pet%2F%2BH%2F0c%2Fk4ekaUVnfJMAFbVxHOwRnQYhr5eaTr0js4A8IGSxEb6%2FiDo%2BrqiilYg01387Jml2gkUh4RmMocLTM0HZUml6cbawTBUz9VD4KMal63d6AUhPNwCYc5LvlTG2wBaRhfkrX1lpaluMjDwTDzNOzTBiI42KIW56QvgN2NX4%2FceGkZM1%2FQ0%2B1nMKej6sIGOqUBI0Jmx82AFfV3wKDXRLrVRu6NNHnwnizPV0PXjO86noa35ZgzoFXs0RaPHA8tDJYBvhhQOJ6kNE0lP1INlpHwHW%2B0Dz7xbr4TxlBAUdW5RzTNza7EX7h6pDgMtuMjuZ8%2Ft3DT7LuD8YCO1A5Y9v3WpFvdk2lbrDcNorzfcZskTqdfPhAehJrZOe3MZD%2F23fByok4u501PkE4%2FILEB0%2Fcs5oGWZbN9&X-Amz-Signature=c51d0e38d596d07098b3cd8fcb0777d23f8a3267144ecbc90780f474f8fe9154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
