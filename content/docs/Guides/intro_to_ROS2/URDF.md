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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QBFP4HQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDoLiVm8Oaw%2FTDcHPd9ovCoZ%2BqQ2tKFG4rSUlw%2Bla9JsAiAofWe%2BLxGSwSAP4isq3Ocr%2FqsUxUKVMU9%2FOhn5o24QeCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM0PEV9SuvNkx6Ns8wKtwDkGg%2BwMGqr4z9WmwaBYgxqQzY1nQ26TEugMfNqj8HVjlgA0nmjDRmGJ8hajdmDbl4or6sx1oBQsH2WZLLsZ0QALEbF4zCrjuC5OWNVCikFp6ubS3ipfQuBQNnVvJFsCXqaOmE07HBlbWf1X5gi1ahjoCtFVoybxfbF7luaEy5J5brEimzjer8FJiyz6iwFrXm%2BJ7lFEKzD%2B6w3VYN%2FADTb9mAjXp0ZaUui9J4t8sSxRFEFKp1o%2BqQ%2FjTyGnOx1oGBNOHmoAGtXtfzlRQxCPMsJp%2B114aEddzYO8XxR5FWvrTFrHmYkGT5N2B%2FvZcbUoJAvWECupHgciZCT7e4UEjVUN3S2a1uWzPQ3YUEUKB%2FGSKNT1Ud0mbrEmLkEonxG9LscDJO5dVuXSOb2QSL7wg7OYz7zkYTxkaXzlBhJOBZLn8rUAGOxFjWKf73b1dAlAT%2B5UX9eP7qHbmQRSZPn6OGmFl01Uokr035ovVjzUq%2FdyEgx9P2gVwhSG75v4Z3kPTXfubydZWb65dmwTcGWXr1j08KS31TN9BpMLmz3wlXY9N72CpofZSILOgp6d66ZYVs%2BOkYoHFUcPZEPVAbKrlzvKrLVpIHlO%2Fk3%2BkuAdWUPHVfzXxknYTM9IOMnfgwr8KMxAY6pgEArwH%2FnDYPEZDOQ7hrNMn17wk7flkjGLwqzBExwNCOy5B5I54IZaY4u1d8DoglyjB0qujkDjezrcx7N3W9y2cPmLnbz29MqPODs2IEEu1Q2f8MUAiComstX3jOPnKzhH%2BxHDmgezOn4cMQmKgUm3DT0xYGjJB4oFXfyMRS7LeW8U8YTjGkRvBwpX5izblUOhTDdn7O0W32hnuuqJQqruMlmNpSPA6O&X-Amz-Signature=608208149f76f1d45e266b94279ef22beca243caab7e5b0c491d9c2ecc96871a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QBFP4HQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDoLiVm8Oaw%2FTDcHPd9ovCoZ%2BqQ2tKFG4rSUlw%2Bla9JsAiAofWe%2BLxGSwSAP4isq3Ocr%2FqsUxUKVMU9%2FOhn5o24QeCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM0PEV9SuvNkx6Ns8wKtwDkGg%2BwMGqr4z9WmwaBYgxqQzY1nQ26TEugMfNqj8HVjlgA0nmjDRmGJ8hajdmDbl4or6sx1oBQsH2WZLLsZ0QALEbF4zCrjuC5OWNVCikFp6ubS3ipfQuBQNnVvJFsCXqaOmE07HBlbWf1X5gi1ahjoCtFVoybxfbF7luaEy5J5brEimzjer8FJiyz6iwFrXm%2BJ7lFEKzD%2B6w3VYN%2FADTb9mAjXp0ZaUui9J4t8sSxRFEFKp1o%2BqQ%2FjTyGnOx1oGBNOHmoAGtXtfzlRQxCPMsJp%2B114aEddzYO8XxR5FWvrTFrHmYkGT5N2B%2FvZcbUoJAvWECupHgciZCT7e4UEjVUN3S2a1uWzPQ3YUEUKB%2FGSKNT1Ud0mbrEmLkEonxG9LscDJO5dVuXSOb2QSL7wg7OYz7zkYTxkaXzlBhJOBZLn8rUAGOxFjWKf73b1dAlAT%2B5UX9eP7qHbmQRSZPn6OGmFl01Uokr035ovVjzUq%2FdyEgx9P2gVwhSG75v4Z3kPTXfubydZWb65dmwTcGWXr1j08KS31TN9BpMLmz3wlXY9N72CpofZSILOgp6d66ZYVs%2BOkYoHFUcPZEPVAbKrlzvKrLVpIHlO%2Fk3%2BkuAdWUPHVfzXxknYTM9IOMnfgwr8KMxAY6pgEArwH%2FnDYPEZDOQ7hrNMn17wk7flkjGLwqzBExwNCOy5B5I54IZaY4u1d8DoglyjB0qujkDjezrcx7N3W9y2cPmLnbz29MqPODs2IEEu1Q2f8MUAiComstX3jOPnKzhH%2BxHDmgezOn4cMQmKgUm3DT0xYGjJB4oFXfyMRS7LeW8U8YTjGkRvBwpX5izblUOhTDdn7O0W32hnuuqJQqruMlmNpSPA6O&X-Amz-Signature=912738f93867f85cb5e508df33cf5558099559908345c3de36fdce98d9ef6554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
