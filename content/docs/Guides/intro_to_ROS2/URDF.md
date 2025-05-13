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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7PPQ34%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDJNddUfCs9nukQmYMp9f%2BjYHm6p138uP%2B8h7SYzIhcKwIhAI0ovYajlttK5fXRYA9qzk%2Bs7E19U7H1Q1YkuP2U%2BtwIKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQ0Dg9s%2BEMwNoPf04q3AN7WqUgUiYPyCfGywU38EpKohFIwG8z162PX5OqLMdWyfljHTUwzPVkic6iB8COOR3bK0lg397FCnm7TkdeSPr%2F3N3U%2BkEBRW8UlqE6WdMWEf0ARRuJTI4GxgQLSxdDR9APu2pfGEGsKGnha0nqHso5g99%2FLccEp6p6VilzM9z%2Bp4tn9lpZymd13AvTbWNx7AIyd3Ua5Ay5d52bCktlAAjrhnry%2F4e0cNTH4MT%2BStUf1HK9ZWX39fZC7u4FAP0p%2FHmYrcnkzNiUSIS7NNNWTG0ofQlOQjwSQMTkMe1eBAaCUdZqr8WQGtKOOHftVETHKd3WAceutHlN0%2BijIRgFfONPQTKZ3Z1r8Qd7I6YZj4f%2BP5YITCLc6XSA1XwX2T1MVesirSR%2B5A9AkIiF%2FahMKZd89Fm9Xc3TYFtYefWjMK14szL%2Fy628v5HzKGXVedUtNSKX8fAMu1VdGQIcWOJyBGlv9DomspLfUcYz4Jif59unFQBmmuXtT9x40NgrqtRUOmdBt7m4Ei8iXZI%2F%2FEmQSx0S9I1aPYQ84%2BP7y5l1LnpC6Mowcp7wBD5eEC6gCWJ9JcCPskRnAO5T1s0DKe3fRsiJD8ohRzd4%2BLiQjJ6wKjWy3CFqRzI6PaCpVU9aozCXjY7BBjqkAd4jUwtVl01ug9zRctX%2Fp%2F1MBj1o9rW0RFiCUSbbQKoTy%2BFLLthQapAzDV5D6Okspobf7DJQBaxOISw10dA4exR6nL37WJ%2Fug9hkLBTJ0IWbG4%2ByEzlF5Q%2FvvA0f7Ro4zYfoRzOa3KZcPSHPjy8ksiSwLGweIliAS99%2BC03jVfDSU6TZTuOCguiDAIDJEl2reBP7eKQaKtAicpe8Fi5sbiFpc5i%2F&X-Amz-Signature=3d446cf73e5a792e3e4a3f865a44620bbfefc8acba60e0acecec536e9bb5cfb8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7PPQ34%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDJNddUfCs9nukQmYMp9f%2BjYHm6p138uP%2B8h7SYzIhcKwIhAI0ovYajlttK5fXRYA9qzk%2Bs7E19U7H1Q1YkuP2U%2BtwIKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQ0Dg9s%2BEMwNoPf04q3AN7WqUgUiYPyCfGywU38EpKohFIwG8z162PX5OqLMdWyfljHTUwzPVkic6iB8COOR3bK0lg397FCnm7TkdeSPr%2F3N3U%2BkEBRW8UlqE6WdMWEf0ARRuJTI4GxgQLSxdDR9APu2pfGEGsKGnha0nqHso5g99%2FLccEp6p6VilzM9z%2Bp4tn9lpZymd13AvTbWNx7AIyd3Ua5Ay5d52bCktlAAjrhnry%2F4e0cNTH4MT%2BStUf1HK9ZWX39fZC7u4FAP0p%2FHmYrcnkzNiUSIS7NNNWTG0ofQlOQjwSQMTkMe1eBAaCUdZqr8WQGtKOOHftVETHKd3WAceutHlN0%2BijIRgFfONPQTKZ3Z1r8Qd7I6YZj4f%2BP5YITCLc6XSA1XwX2T1MVesirSR%2B5A9AkIiF%2FahMKZd89Fm9Xc3TYFtYefWjMK14szL%2Fy628v5HzKGXVedUtNSKX8fAMu1VdGQIcWOJyBGlv9DomspLfUcYz4Jif59unFQBmmuXtT9x40NgrqtRUOmdBt7m4Ei8iXZI%2F%2FEmQSx0S9I1aPYQ84%2BP7y5l1LnpC6Mowcp7wBD5eEC6gCWJ9JcCPskRnAO5T1s0DKe3fRsiJD8ohRzd4%2BLiQjJ6wKjWy3CFqRzI6PaCpVU9aozCXjY7BBjqkAd4jUwtVl01ug9zRctX%2Fp%2F1MBj1o9rW0RFiCUSbbQKoTy%2BFLLthQapAzDV5D6Okspobf7DJQBaxOISw10dA4exR6nL37WJ%2Fug9hkLBTJ0IWbG4%2ByEzlF5Q%2FvvA0f7Ro4zYfoRzOa3KZcPSHPjy8ksiSwLGweIliAS99%2BC03jVfDSU6TZTuOCguiDAIDJEl2reBP7eKQaKtAicpe8Fi5sbiFpc5i%2F&X-Amz-Signature=d0a3d1410cf475ffcd6df4c1dc1577bc1128023c08ce2246349257b5c4f0455c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
