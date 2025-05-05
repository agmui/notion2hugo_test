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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MISV4OP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4acfKlC9WYuQMwZ%2B%2BAnm1aXRQ1aRA2ePuFPME19hDOAIhAPYRsmIMzkkf5Ljv08pvXQ7kcnuexy2iJMjAl3McJjhGKv8DCDEQABoMNjM3NDIzMTgzODA1Igzlw5UgkXAO7oBu0ukq3ANUFYzGluR8BqV7iKXoy8%2BvcuTGYntdqbRrV2NOKmRF8RmW99b6YXVe8OtTNz4kEfGkxJrMC5jpREOSNyz%2B8ja9qJWLbtKIa4BGeY7svVIZsZNpsF6TCZshph7uQdFh7IYwB7TSw62R7OLb3s2O0iImr1UYhv4wA2rQDNB%2FK7OcP%2By5zh7KF9e%2F6QzXBOBy3MTjev3fKB5%2BZJlfgP3obHUy6HoFbquKfRC4%2Fid2r3gySKcCWHKBzj3Y%2B1tFV2fsDAhQK%2BNFY1OYdsaEpaiG3ZCTRrx6ZzXQooKrxkVF4f69kmemZNYR5FItYrXW%2BmmIWUSahjoYXRbG%2BpNoeD7d0ms6QS4d2svlzmCTE%2FLvjlyCiWVCRfzogOQfSJZO7e27%2BRnhGuUlKoHOT537Zw1zzVTCJ09%2FVMotsxhNHg7yjfiio0vAkSPhZ2nnf3N7KCANOwAok73yo9%2F7Bvzq9W26wLCbAjgsi%2BqiQDh6PpXHPkrVopXIJcKNVRn39r1zeWLPaW4A57yVlwtpMWq22tIO7WXnyW1Y31WYLj82zWgs5OPQZGQj9AtsfbkkePx%2Fwc9meCIhLUEBzRUY13gsG3vJDvpvwKZdwmEE0g7dhGRqVOzdOvZ%2FkutPCmNCPldb4TD3sOPABjqkAW9VNuA3Rz6FEQiwB13tS9wX4R%2BbeB8crLsGBcxd2eMFLq%2FECTSnmUmIs1vtWBeNNPw6ob1FaSmD2JsPGb9SPtwBtsBbGUVK1fOc4ExHNKoL5dNaUOWPZ66WAOXExHbIhMQZodznDINIj8hECHwWtbOAEh3uGcha06iRxcXwvr2JAGtXtoigaVSy6lXzrR4sW%2BU95t9Cb16k0RvavwmE%2FE6WfAUI&X-Amz-Signature=f2e8dd4971e7daa7cc0a6ace24a9db554a26e26a5348c0fe4eae996050e1c360&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MISV4OP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4acfKlC9WYuQMwZ%2B%2BAnm1aXRQ1aRA2ePuFPME19hDOAIhAPYRsmIMzkkf5Ljv08pvXQ7kcnuexy2iJMjAl3McJjhGKv8DCDEQABoMNjM3NDIzMTgzODA1Igzlw5UgkXAO7oBu0ukq3ANUFYzGluR8BqV7iKXoy8%2BvcuTGYntdqbRrV2NOKmRF8RmW99b6YXVe8OtTNz4kEfGkxJrMC5jpREOSNyz%2B8ja9qJWLbtKIa4BGeY7svVIZsZNpsF6TCZshph7uQdFh7IYwB7TSw62R7OLb3s2O0iImr1UYhv4wA2rQDNB%2FK7OcP%2By5zh7KF9e%2F6QzXBOBy3MTjev3fKB5%2BZJlfgP3obHUy6HoFbquKfRC4%2Fid2r3gySKcCWHKBzj3Y%2B1tFV2fsDAhQK%2BNFY1OYdsaEpaiG3ZCTRrx6ZzXQooKrxkVF4f69kmemZNYR5FItYrXW%2BmmIWUSahjoYXRbG%2BpNoeD7d0ms6QS4d2svlzmCTE%2FLvjlyCiWVCRfzogOQfSJZO7e27%2BRnhGuUlKoHOT537Zw1zzVTCJ09%2FVMotsxhNHg7yjfiio0vAkSPhZ2nnf3N7KCANOwAok73yo9%2F7Bvzq9W26wLCbAjgsi%2BqiQDh6PpXHPkrVopXIJcKNVRn39r1zeWLPaW4A57yVlwtpMWq22tIO7WXnyW1Y31WYLj82zWgs5OPQZGQj9AtsfbkkePx%2Fwc9meCIhLUEBzRUY13gsG3vJDvpvwKZdwmEE0g7dhGRqVOzdOvZ%2FkutPCmNCPldb4TD3sOPABjqkAW9VNuA3Rz6FEQiwB13tS9wX4R%2BbeB8crLsGBcxd2eMFLq%2FECTSnmUmIs1vtWBeNNPw6ob1FaSmD2JsPGb9SPtwBtsBbGUVK1fOc4ExHNKoL5dNaUOWPZ66WAOXExHbIhMQZodznDINIj8hECHwWtbOAEh3uGcha06iRxcXwvr2JAGtXtoigaVSy6lXzrR4sW%2BU95t9Cb16k0RvavwmE%2FE6WfAUI&X-Amz-Signature=ff5ecce90e2b02f4e572a3e656c23b4e5e0a2d229678e6f3c877ede87aa03c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
