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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPRIMNTU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDO%2F3Xcg0lO4PwdA666oJhBN6pLWhxKYeUsm1bhyuDFGAiEAkgUwzXaAFeBlpx5rfDer5LpoJ3as0diHtK6UQ9MZgQcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDC6zGYp8%2FqaYSdaV4CrcA%2BylHNYprpo59DCeyo4YYXZH6DJ%2F40hiokz6oixE5BmPN%2FvSNDjdvK%2F%2Bh8ioVFGVPVgoBWSYT%2Bf7lEtHmGBbBX3IbHx6XlVdgzeuNQaCVidQ9sYJP6xNLnT6kbfe0jljJ4nMHSoUtmtln4ntJjveBzZBZV8%2BaMAfoSxDcw2f%2FhwexpsbW9RCKjc3MhUfowKqD%2F6PAHbpybg9Af%2BL5sjf50JwoWeNgyvD3yqhLdSkaKqhLj0vFDENP9jURmB9d9HbWZCO2UkPrNrv0Qij0lmvhtrm5XHOSmatH6V6Ba%2F871Er%2FY5MQU%2FyJGouTKn8sHD3TUVVTZpZf2bjNxF5ii2Sp28eZWAfNjSRsYrlhYtgqmGA%2FcjsqhCNb8%2BLD3MeualOK%2BjO4pL%2FhG8PGTzyKCCTYR%2F6Fcx5COdIgu7UbGqslDOt%2Bv8TZXpvxMoJuDo8PZf7o5bltLJ%2B1iHltzpEqsXz7%2Belbj%2FG21rnbiz26fUSc6vjiOOD6cqquQezwpkxxLjegB7U%2FlY6clZSHylZlq88M%2Bz7vrHU4rOzPhwHvAtc9KhkZfy42D1ccSyS54RND2D0T20lWW7Ta9qNdlAM8oHEo7fgrgTonrm%2FBw4NT%2FCqUlLylGE9nlZgzmvjxlzoMJWtgMAGOqUB7qkM5LD2aYiNLUDNZUos1wK2tJNEuLjP3SCjFnbLSC4GvP2Y7OEyDB%2Fh8XJcQf0Vk1WKmMUllZstJ7QF1HAA%2FCZS13pz1ZNGHP67eseD3Vwl0B6n9HN0wpB6tVG8pi0622choRWuuTHf3T37NgjyHlwNMKP37KsarVfHgqpsy3K0OeWyaD3kufKymLHBHUkvMUNl8M1NyP0yhu2hwdEygtLGfU%2Bc&X-Amz-Signature=a6201915676e5af6e4d9163343dfba13f708f166b340c0a589b24a2cee75d393&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPRIMNTU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDO%2F3Xcg0lO4PwdA666oJhBN6pLWhxKYeUsm1bhyuDFGAiEAkgUwzXaAFeBlpx5rfDer5LpoJ3as0diHtK6UQ9MZgQcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDC6zGYp8%2FqaYSdaV4CrcA%2BylHNYprpo59DCeyo4YYXZH6DJ%2F40hiokz6oixE5BmPN%2FvSNDjdvK%2F%2Bh8ioVFGVPVgoBWSYT%2Bf7lEtHmGBbBX3IbHx6XlVdgzeuNQaCVidQ9sYJP6xNLnT6kbfe0jljJ4nMHSoUtmtln4ntJjveBzZBZV8%2BaMAfoSxDcw2f%2FhwexpsbW9RCKjc3MhUfowKqD%2F6PAHbpybg9Af%2BL5sjf50JwoWeNgyvD3yqhLdSkaKqhLj0vFDENP9jURmB9d9HbWZCO2UkPrNrv0Qij0lmvhtrm5XHOSmatH6V6Ba%2F871Er%2FY5MQU%2FyJGouTKn8sHD3TUVVTZpZf2bjNxF5ii2Sp28eZWAfNjSRsYrlhYtgqmGA%2FcjsqhCNb8%2BLD3MeualOK%2BjO4pL%2FhG8PGTzyKCCTYR%2F6Fcx5COdIgu7UbGqslDOt%2Bv8TZXpvxMoJuDo8PZf7o5bltLJ%2B1iHltzpEqsXz7%2Belbj%2FG21rnbiz26fUSc6vjiOOD6cqquQezwpkxxLjegB7U%2FlY6clZSHylZlq88M%2Bz7vrHU4rOzPhwHvAtc9KhkZfy42D1ccSyS54RND2D0T20lWW7Ta9qNdlAM8oHEo7fgrgTonrm%2FBw4NT%2FCqUlLylGE9nlZgzmvjxlzoMJWtgMAGOqUB7qkM5LD2aYiNLUDNZUos1wK2tJNEuLjP3SCjFnbLSC4GvP2Y7OEyDB%2Fh8XJcQf0Vk1WKmMUllZstJ7QF1HAA%2FCZS13pz1ZNGHP67eseD3Vwl0B6n9HN0wpB6tVG8pi0622choRWuuTHf3T37NgjyHlwNMKP37KsarVfHgqpsy3K0OeWyaD3kufKymLHBHUkvMUNl8M1NyP0yhu2hwdEygtLGfU%2Bc&X-Amz-Signature=48c2cb5b7f98b49ffba3daef3a6b12e74912519410a918aef35ca0543aec1231&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
