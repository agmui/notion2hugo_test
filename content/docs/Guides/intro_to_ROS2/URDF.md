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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR76OOUZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBsxQjbmNhsBmfA3V9cBwTkwO%2B%2FAMI5sv0gfxD0ZLsioAiAkapZOWcJhBETm59Vhjo4os3HQ%2BQ3zoa2tjV2ZKOef9CqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVslj4wyj7Ehoa3a4KtwDbyavEOkG4HwFlHxNhi7b5L2hLWvz%2FgsaawAP0DMfhLISzu6vsPZrrXwG%2BkumHi6h4Uv2BZ4bVi%2BgSl4l3dRWR4Y3yLFor4EZ6hNRNRTpZNFWotg3Pm4S4a%2FlKedThzfZNJ5rLvY0eaeH%2BK%2Bw1VLSF%2BQQzZwnkt38OAHQJKh55pElTDGW66ZD87nOz9IDrCCWKth8d%2BfmM80w87wU%2FALlfcScS%2Frp7blbyzETvAMs9QQOurcwyesDYyxFLEd9aJXvb4AtrsVlAKW1GaHzbJ7iFvR7sgLsCk3ppC7GTbcpRNLEPmdh%2BJmyuRRqWq2HX5VEfcEx6Oj3KBOL0n0t7CW6%2Fv2zkxIF95drn3wQD7iejrS4U7jqK4JKv4bUUZj98NLWU%2BdSUZdnujPOsFd4%2FSxCjIoeDimPniisVUmn9qZNMkEfiMNlyjitc0OiTZ%2BfiAUFTly5KyQ4SSgEi2JfjgSCdStm%2Fi76HrbZAiugxyWTIIFd0hVp10PORj6%2BhbkTh5u%2FRG%2FdEYS4qZ753SsLkluzPyAkyt26n2PuP2XxAi7snboWdrsMm3B08l3sDSd8BsNUr%2Fq70svBXQ6gosh0jE0AQuOmnHp033pIKy%2BltE4wvqCQmW7cg4MPoNfoUqYwvNL%2BwAY6pgH33ltiJpP9ANo3adOYO0io6wGe5W8DoSZg3hDMtYY9%2BbqwKnYYMoo7guLCZoOkyVdrOdTJG%2BEuYQxBiNWC3qYYxA9rJIIl25PMQkCD5O9YUo%2FOx9U%2Bo2B18RuaddyV0%2BsjmtDAZN2J0wRVq0owu06XLO%2FILuGf%2BueCa%2F0tJbSzNGw7zGfc%2BPFMx7SVrZCDPrefieBsRQ7fZqgp7hoxY%2Bywd4gjPYfY&X-Amz-Signature=2e2fbb5b85905ab2fc3ee1ebda91abdbc30258a908186c934b1e82582e2c3927&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR76OOUZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBsxQjbmNhsBmfA3V9cBwTkwO%2B%2FAMI5sv0gfxD0ZLsioAiAkapZOWcJhBETm59Vhjo4os3HQ%2BQ3zoa2tjV2ZKOef9CqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVslj4wyj7Ehoa3a4KtwDbyavEOkG4HwFlHxNhi7b5L2hLWvz%2FgsaawAP0DMfhLISzu6vsPZrrXwG%2BkumHi6h4Uv2BZ4bVi%2BgSl4l3dRWR4Y3yLFor4EZ6hNRNRTpZNFWotg3Pm4S4a%2FlKedThzfZNJ5rLvY0eaeH%2BK%2Bw1VLSF%2BQQzZwnkt38OAHQJKh55pElTDGW66ZD87nOz9IDrCCWKth8d%2BfmM80w87wU%2FALlfcScS%2Frp7blbyzETvAMs9QQOurcwyesDYyxFLEd9aJXvb4AtrsVlAKW1GaHzbJ7iFvR7sgLsCk3ppC7GTbcpRNLEPmdh%2BJmyuRRqWq2HX5VEfcEx6Oj3KBOL0n0t7CW6%2Fv2zkxIF95drn3wQD7iejrS4U7jqK4JKv4bUUZj98NLWU%2BdSUZdnujPOsFd4%2FSxCjIoeDimPniisVUmn9qZNMkEfiMNlyjitc0OiTZ%2BfiAUFTly5KyQ4SSgEi2JfjgSCdStm%2Fi76HrbZAiugxyWTIIFd0hVp10PORj6%2BhbkTh5u%2FRG%2FdEYS4qZ753SsLkluzPyAkyt26n2PuP2XxAi7snboWdrsMm3B08l3sDSd8BsNUr%2Fq70svBXQ6gosh0jE0AQuOmnHp033pIKy%2BltE4wvqCQmW7cg4MPoNfoUqYwvNL%2BwAY6pgH33ltiJpP9ANo3adOYO0io6wGe5W8DoSZg3hDMtYY9%2BbqwKnYYMoo7guLCZoOkyVdrOdTJG%2BEuYQxBiNWC3qYYxA9rJIIl25PMQkCD5O9YUo%2FOx9U%2Bo2B18RuaddyV0%2BsjmtDAZN2J0wRVq0owu06XLO%2FILuGf%2BueCa%2F0tJbSzNGw7zGfc%2BPFMx7SVrZCDPrefieBsRQ7fZqgp7hoxY%2Bywd4gjPYfY&X-Amz-Signature=5eba3ae1a79e03feb558df7aa3d22c3c4cb9347ed1e42fc06cebab565a8ad156&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
