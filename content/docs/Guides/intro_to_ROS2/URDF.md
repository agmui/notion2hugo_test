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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D5PFLXX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgF4aOmka75PDQrTZUDDQK%2Ba4o%2BZz9Gcyf5dqzCdgeIAiEA2PhuPaC3pqA9fvb3Iq9tp78%2F%2BV6SeC4o%2F%2FLhFsSIwGcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN5Y%2F%2BS9KMWlFyz6SircA72C5JMBOeU7yyrDrCre1XB%2Fz6%2FiUe5Kss4iTtEaFqeEugw2shjXA2VDTmIPDYPBTE8ciUNsXUCf37uVm9ZENC9URgiSHN78WguBQJg4tXJT1QDtOxNIuAWgBUd0tLfnF5oBRNi4CrXwj2au334Or8FDdgVXmBwOsBmHS%2BtGgdKIkoBBI0wCOtmFuOLkcf0Eewi4ujlMlx88Ryf65OEp3tueCCCWdPFOivQbvZNP0ZWxvV5FfuThqEZM5Ka3uJoOfNiNsQLzljIo4XzCOSWUQaOhaU66XFJGwYhjuv7tEOQYdsEBqsEUk06rAd9XC1NJwpz1GIoxhxES1qIIPaKpmgSF5WXDpCMDg8PjoS86Dlm3u5GIj3OmJPxpPEW5Fp2NEseDdGEjwbYc%2BK5C1iD8ynsX0LJG7E16YwLoy%2BMjhWkDtIcPQH9neEF421bdGFlrc1A3089WI8C8WIDgzq8ABGQMqNyVZ73i2ng1Ru1W7%2BXUM0lmAJQkSWk0uhOZ6FsRsxHUYgTXPef3KrYcgOXKOq5RSwT0sUBIteJEJyr%2FbjKSbc2igc%2FTlVMP1UpR8BEOzf4v%2FoncdmOTJM6VerhrJzpslh%2Bp84gkfZMWZF4Sjjuu5%2FxC8y%2FehQZdgN3EMOuDssAGOqUBiRSc4PYFUUsVKmP%2B7P%2BLfkFv2yShoDDDyuif4jsfDhgo8KI1fS3OoAFslyU%2BXyad257DJpHtKQh6WP3LJpoZxEAsePpQz8sSJaEGaEHmzSpw%2FrQSoJiPkTC%2BNXMBU19J3IvCRXqCWz%2F5ABqH8RXvfEjrDsg9508QydRsBCSPMvo2ZHC2ea8yMRlsrTNbYMFz9yTC0e3gFFEtbVKpnMbB7Lnr87yi&X-Amz-Signature=796ba7d880abb6695ab70aa60c41940218b67bb3c482403a6b321bb1e041c0a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D5PFLXX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgF4aOmka75PDQrTZUDDQK%2Ba4o%2BZz9Gcyf5dqzCdgeIAiEA2PhuPaC3pqA9fvb3Iq9tp78%2F%2BV6SeC4o%2F%2FLhFsSIwGcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN5Y%2F%2BS9KMWlFyz6SircA72C5JMBOeU7yyrDrCre1XB%2Fz6%2FiUe5Kss4iTtEaFqeEugw2shjXA2VDTmIPDYPBTE8ciUNsXUCf37uVm9ZENC9URgiSHN78WguBQJg4tXJT1QDtOxNIuAWgBUd0tLfnF5oBRNi4CrXwj2au334Or8FDdgVXmBwOsBmHS%2BtGgdKIkoBBI0wCOtmFuOLkcf0Eewi4ujlMlx88Ryf65OEp3tueCCCWdPFOivQbvZNP0ZWxvV5FfuThqEZM5Ka3uJoOfNiNsQLzljIo4XzCOSWUQaOhaU66XFJGwYhjuv7tEOQYdsEBqsEUk06rAd9XC1NJwpz1GIoxhxES1qIIPaKpmgSF5WXDpCMDg8PjoS86Dlm3u5GIj3OmJPxpPEW5Fp2NEseDdGEjwbYc%2BK5C1iD8ynsX0LJG7E16YwLoy%2BMjhWkDtIcPQH9neEF421bdGFlrc1A3089WI8C8WIDgzq8ABGQMqNyVZ73i2ng1Ru1W7%2BXUM0lmAJQkSWk0uhOZ6FsRsxHUYgTXPef3KrYcgOXKOq5RSwT0sUBIteJEJyr%2FbjKSbc2igc%2FTlVMP1UpR8BEOzf4v%2FoncdmOTJM6VerhrJzpslh%2Bp84gkfZMWZF4Sjjuu5%2FxC8y%2FehQZdgN3EMOuDssAGOqUBiRSc4PYFUUsVKmP%2B7P%2BLfkFv2yShoDDDyuif4jsfDhgo8KI1fS3OoAFslyU%2BXyad257DJpHtKQh6WP3LJpoZxEAsePpQz8sSJaEGaEHmzSpw%2FrQSoJiPkTC%2BNXMBU19J3IvCRXqCWz%2F5ABqH8RXvfEjrDsg9508QydRsBCSPMvo2ZHC2ea8yMRlsrTNbYMFz9yTC0e3gFFEtbVKpnMbB7Lnr87yi&X-Amz-Signature=66189e9f07e33a3f9c7a49ab53cb6696a08a7f6874e5bce2a4155a151cb950f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
