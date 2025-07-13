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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QS5TYY5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDEH41pGJDzTVwKHHMHO163rWUVachRcmPE4X232UVMHQIgKKiEy5gQh%2FFj1oAMuXwYCzTkW%2BUBuU4zYRvs%2Fgk0Q8oq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDLGHFDQ8XpxeFdUYgyrcA%2FMNXN8CMet%2FflbD15rLDaYom9XLaU2o7wogd0RYEOMmz8Nj1fVnmoDQtK0t0wrulqsbSLQItOa1hl8m%2F0g2nhwtfHsqkYGSZxbcWFxJDx7g%2BmtzJwjB%2BOEXNxs6veTdtPmQK%2F4LSB%2FSCnPutJVS7XsWBKyn5L7xDn1vHO5cz%2BL04pW9tgYPM2N1ERDOFVsOI2rUqJZw5oSfzZFHrMz5Lbyz4WS13zmLkvo1v9WA%2Ffi4%2F3btGOk80mnNM6xp24vbYf3Temfa0A27Suw3xghuDpnWzxfzblJ%2FyWutOr5QIVZJ%2B8iYUn7ZI5EIaCTZedagoKQ1gb47427eHcRgZfA1OUrkTlJFt2eJrEZuWILNnTi1vsJ8bPwrJrA9F0Rt9%2FEEfxder%2B1Pw1TLBwuq1ZTmbB4i9xSC1nPU%2FcrdENRWH%2FXIf4oQEHSPBoxK35ntn2WLku5imiMzxtMrdjZI5FFaOqNzDtBVz5LxdqRt0nAIvAiN7TN7hjLkvyBn5t8Sd5zLzSpT8ANw9kar6hAHd%2FB%2FHsncE1AjAqAycZpqvP3GjOxuaDFhbf1JhzuP4eZbEKdKpvyGFhqnG9IMx9zz1tyq25C4riLIENxY7h1xYDt5Id69n5RsbwOuyIvS7ug6MPXH0MMGOqUBtXWpzCbRlpH8ycmNfNrLrCfimHCVAT17HGwekxyQV%2Fcm9ETgDRb%2BQPoBRa5yokScH2xZ%2FQDOXFe8wkUFCspZEAHr8Z4wBPwso35p0S3fUuMVirNOszoC7E4U0bSqrao7GX3AzpyBYhgmw8k%2BH9zBZwjFvSDq%2Bw9MTBNF13pi8UToabDAxkNF%2FQdTbGUDPRLi5D5ZYQy7rEVNPUll%2BLi7kkUMDN5N&X-Amz-Signature=ecb5e6fd17ff259723e134d979e32286c0b307a4c082696c15807ed55cc24160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QS5TYY5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDEH41pGJDzTVwKHHMHO163rWUVachRcmPE4X232UVMHQIgKKiEy5gQh%2FFj1oAMuXwYCzTkW%2BUBuU4zYRvs%2Fgk0Q8oq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDLGHFDQ8XpxeFdUYgyrcA%2FMNXN8CMet%2FflbD15rLDaYom9XLaU2o7wogd0RYEOMmz8Nj1fVnmoDQtK0t0wrulqsbSLQItOa1hl8m%2F0g2nhwtfHsqkYGSZxbcWFxJDx7g%2BmtzJwjB%2BOEXNxs6veTdtPmQK%2F4LSB%2FSCnPutJVS7XsWBKyn5L7xDn1vHO5cz%2BL04pW9tgYPM2N1ERDOFVsOI2rUqJZw5oSfzZFHrMz5Lbyz4WS13zmLkvo1v9WA%2Ffi4%2F3btGOk80mnNM6xp24vbYf3Temfa0A27Suw3xghuDpnWzxfzblJ%2FyWutOr5QIVZJ%2B8iYUn7ZI5EIaCTZedagoKQ1gb47427eHcRgZfA1OUrkTlJFt2eJrEZuWILNnTi1vsJ8bPwrJrA9F0Rt9%2FEEfxder%2B1Pw1TLBwuq1ZTmbB4i9xSC1nPU%2FcrdENRWH%2FXIf4oQEHSPBoxK35ntn2WLku5imiMzxtMrdjZI5FFaOqNzDtBVz5LxdqRt0nAIvAiN7TN7hjLkvyBn5t8Sd5zLzSpT8ANw9kar6hAHd%2FB%2FHsncE1AjAqAycZpqvP3GjOxuaDFhbf1JhzuP4eZbEKdKpvyGFhqnG9IMx9zz1tyq25C4riLIENxY7h1xYDt5Id69n5RsbwOuyIvS7ug6MPXH0MMGOqUBtXWpzCbRlpH8ycmNfNrLrCfimHCVAT17HGwekxyQV%2Fcm9ETgDRb%2BQPoBRa5yokScH2xZ%2FQDOXFe8wkUFCspZEAHr8Z4wBPwso35p0S3fUuMVirNOszoC7E4U0bSqrao7GX3AzpyBYhgmw8k%2BH9zBZwjFvSDq%2Bw9MTBNF13pi8UToabDAxkNF%2FQdTbGUDPRLi5D5ZYQy7rEVNPUll%2BLi7kkUMDN5N&X-Amz-Signature=6b32f428e28ed4bf386e931d9c30a507b067f3ff8c555d0c03c9e3847920fe16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
