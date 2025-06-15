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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZCLBGKP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCSt7f9niTCaL9vQilKgekyEmzcMgCSJ9zVGObV96SM3wIhAPPtMJ03jhiZSgwDhC5DWkRoxdVs1uQ9kfJBU688CTuSKv8DCDkQABoMNjM3NDIzMTgzODA1IgyOwO28jKx%2B6pOS23Iq3APHsZZOx7KU9yfKtWgWqu9ZQ8%2FAjASMD%2B%2BOUbgxNgL44qXKQR25mQlSRA5qKBqdRsBdUOs%2B8ppUSloG2wmxb7f8TPbgCD8QVnsBTlBXfVbaKYAy1DvaFUM6dhrPN0RqO3MiGsKNlXA0Y%2BqR09VaB4mcyR6pVue%2FiDZRkZ%2BdF7kAdKNm%2FIKuVn9kdbu1gbXDwatKH8oh9iG%2Fgb7BgnUB1DPPecrngUkN5M0Je2kusGXH2WrvFFNg9JPdLXAjSwK5z36jw%2F9fJ0z7jhnpqK4IbVz1elwG%2FWJ4XwjXuo%2FqGi45J42CuxhtrYSQABBxAhMJgc1axFRGsMAmdf9VlPmS1MPbEPToRXUokFfFsjs%2BrMP%2FH1R%2F6VnldnS4%2FWmd5G6UBx%2FWoOc0EtfqYrOhc86843Lm%2FZURt8UC%2BCFnVrBjTiHO9zyqOPJ6ok4yCQkH9pLcxvEdvwY1XHiYNGmvfLUS9ETFcO1RuTxPFktwVnt8i8eu1bA%2BTHx%2Bb2CBRJS%2BAJhYPUEYGEPnnO%2F3AYKM3rOsljwVRc3r3qBIdTTUu65QVU%2BVvHzZMeuwofBxB81l0%2BVW671rfWgVdtYH36ivW7wIHf1cz8TTZKNKQ67Yn%2BFguDiDwMdRhNNwuUf36A6CeDDCorjCBjqkAfYb%2BRz4tIWikHu1VTAyfJYntoUWuTet67rwu%2BPiukKgDbT9sIoZKm%2F5m831iXjQsvtIjDx4GlSZMmad2Y2Ls7vE%2BSfjyFBslGo8EQ5xCAl9mB1uxGGqxDek2T%2BY%2FTs8%2BxZt7aHzrOK2%2BpLaJm1QqC3i1NzxSIa%2Fo%2F4bxkS%2FT4S%2Fa%2F8eXd52d%2F2r%2Byl1XD%2Br4PtBDSy0P3mPfDC0bLS6ClKuuT48&X-Amz-Signature=a2ace6803e76e25eebdb97d72f953643f1e4fc515a457c5aacd76f5807c219bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZCLBGKP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCSt7f9niTCaL9vQilKgekyEmzcMgCSJ9zVGObV96SM3wIhAPPtMJ03jhiZSgwDhC5DWkRoxdVs1uQ9kfJBU688CTuSKv8DCDkQABoMNjM3NDIzMTgzODA1IgyOwO28jKx%2B6pOS23Iq3APHsZZOx7KU9yfKtWgWqu9ZQ8%2FAjASMD%2B%2BOUbgxNgL44qXKQR25mQlSRA5qKBqdRsBdUOs%2B8ppUSloG2wmxb7f8TPbgCD8QVnsBTlBXfVbaKYAy1DvaFUM6dhrPN0RqO3MiGsKNlXA0Y%2BqR09VaB4mcyR6pVue%2FiDZRkZ%2BdF7kAdKNm%2FIKuVn9kdbu1gbXDwatKH8oh9iG%2Fgb7BgnUB1DPPecrngUkN5M0Je2kusGXH2WrvFFNg9JPdLXAjSwK5z36jw%2F9fJ0z7jhnpqK4IbVz1elwG%2FWJ4XwjXuo%2FqGi45J42CuxhtrYSQABBxAhMJgc1axFRGsMAmdf9VlPmS1MPbEPToRXUokFfFsjs%2BrMP%2FH1R%2F6VnldnS4%2FWmd5G6UBx%2FWoOc0EtfqYrOhc86843Lm%2FZURt8UC%2BCFnVrBjTiHO9zyqOPJ6ok4yCQkH9pLcxvEdvwY1XHiYNGmvfLUS9ETFcO1RuTxPFktwVnt8i8eu1bA%2BTHx%2Bb2CBRJS%2BAJhYPUEYGEPnnO%2F3AYKM3rOsljwVRc3r3qBIdTTUu65QVU%2BVvHzZMeuwofBxB81l0%2BVW671rfWgVdtYH36ivW7wIHf1cz8TTZKNKQ67Yn%2BFguDiDwMdRhNNwuUf36A6CeDDCorjCBjqkAfYb%2BRz4tIWikHu1VTAyfJYntoUWuTet67rwu%2BPiukKgDbT9sIoZKm%2F5m831iXjQsvtIjDx4GlSZMmad2Y2Ls7vE%2BSfjyFBslGo8EQ5xCAl9mB1uxGGqxDek2T%2BY%2FTs8%2BxZt7aHzrOK2%2BpLaJm1QqC3i1NzxSIa%2Fo%2F4bxkS%2FT4S%2Fa%2F8eXd52d%2F2r%2Byl1XD%2Br4PtBDSy0P3mPfDC0bLS6ClKuuT48&X-Amz-Signature=0a7db8884b242b17beb0682f2d5119abb4a53df00d496404832fa35a95118ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
