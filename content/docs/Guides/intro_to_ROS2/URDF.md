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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOS5JB4E%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIA0mx6RgE16Qe4otzNAGwoF9fqhYZ6%2FUXDu7rLyJO%2BjBAiAm6vBTjddL3k8od1MuiLAtfgVLVU5OR%2FaI54Ya3rmGWyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BP4Mlv7SU29YHO%2F1KtwDrxFjQpM5KpY3jpT4CHsJRa0ZXvbObZ7uoFD9lcu%2BV4AqbSbEOEVgB4MGVFqKisLxe5WBNJDKJGjaxz%2BghXXO3mGjUjsAkLnNQi9AmOb39fEtAwnxRIUoo1Pir8T64ouTQFhMgDD21L8nvp5DNHbRn3LBSuO0XwycHP83mePOk93xJ99jRYeCYlPw3lMmbJsUITKwbyviW5a7NovVUZkvMFyuwlrR8nt%2Fv77ON0ymtDGjE87mOlr9sjKiTEFkaf30ZfjpNJi3BaMGiD5Y4pCuN2h3Gz6qC0cAw4Uyqaq4Ghfgqjgw0%2FlonyfNT4lyC7IDLNxjjLmBgglKv2U9zjHBfq7S3BUJiS2hhX8pSMA%2B060I2U%2BO1NRb0KZ6qwP4fZEq%2F8G%2FJyfy2vJPrFTYxZyZyeb0KI7sN5njxL27jPay8mKNN6TWUvFSql0ajtzXzlzcV4dyhW9bxO4ZAE9Nh0gU1g1PSqPG0YDdJskV2Kz0tQFD6g2yEifLs5HWp%2BaehjZWcjbZiJp90PiZEZAaDE%2BaBG1t2MexeYzk%2BeEOednmBnH9EdoStkkTrnzIn2pNsM31UI5AU%2Bnb7Z6eWmEStG1X7ldJK1tXv2vw5fdpAASWFRiH2ZVGrU6VH2gDx5Ywus%2FowwY6pgElGzM0zTSHomXQGQunm8LJLrS32gij%2FYM8pC7FSkqv2mBXoHNTVoTfqYnkUxGIvDquI87AupwtHvuNNYLD2DFidR5AGiG1lAlD827l5WDNvFxI%2BpSltBqOiz9DDOaG5gkHR0SLl1A4GEeRZY2WJJ9CNpXssTCLA5C%2Fx2%2BEtp4Q76pfikG6pxWHaN1KzEP5ewaTIy1gVd8OnYpK9wl4wAwj8MgxPCBG&X-Amz-Signature=cdea52b9440289223b6bb9d650c81bd9788f715444a2c37a34f6da12bf55a0ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOS5JB4E%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIA0mx6RgE16Qe4otzNAGwoF9fqhYZ6%2FUXDu7rLyJO%2BjBAiAm6vBTjddL3k8od1MuiLAtfgVLVU5OR%2FaI54Ya3rmGWyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BP4Mlv7SU29YHO%2F1KtwDrxFjQpM5KpY3jpT4CHsJRa0ZXvbObZ7uoFD9lcu%2BV4AqbSbEOEVgB4MGVFqKisLxe5WBNJDKJGjaxz%2BghXXO3mGjUjsAkLnNQi9AmOb39fEtAwnxRIUoo1Pir8T64ouTQFhMgDD21L8nvp5DNHbRn3LBSuO0XwycHP83mePOk93xJ99jRYeCYlPw3lMmbJsUITKwbyviW5a7NovVUZkvMFyuwlrR8nt%2Fv77ON0ymtDGjE87mOlr9sjKiTEFkaf30ZfjpNJi3BaMGiD5Y4pCuN2h3Gz6qC0cAw4Uyqaq4Ghfgqjgw0%2FlonyfNT4lyC7IDLNxjjLmBgglKv2U9zjHBfq7S3BUJiS2hhX8pSMA%2B060I2U%2BO1NRb0KZ6qwP4fZEq%2F8G%2FJyfy2vJPrFTYxZyZyeb0KI7sN5njxL27jPay8mKNN6TWUvFSql0ajtzXzlzcV4dyhW9bxO4ZAE9Nh0gU1g1PSqPG0YDdJskV2Kz0tQFD6g2yEifLs5HWp%2BaehjZWcjbZiJp90PiZEZAaDE%2BaBG1t2MexeYzk%2BeEOednmBnH9EdoStkkTrnzIn2pNsM31UI5AU%2Bnb7Z6eWmEStG1X7ldJK1tXv2vw5fdpAASWFRiH2ZVGrU6VH2gDx5Ywus%2FowwY6pgElGzM0zTSHomXQGQunm8LJLrS32gij%2FYM8pC7FSkqv2mBXoHNTVoTfqYnkUxGIvDquI87AupwtHvuNNYLD2DFidR5AGiG1lAlD827l5WDNvFxI%2BpSltBqOiz9DDOaG5gkHR0SLl1A4GEeRZY2WJJ9CNpXssTCLA5C%2Fx2%2BEtp4Q76pfikG6pxWHaN1KzEP5ewaTIy1gVd8OnYpK9wl4wAwj8MgxPCBG&X-Amz-Signature=3afda80ef9a8bbe0e178a7409b004263312c03baec5baa9c3cb5b4ea9e39c5fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
