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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VUOKWAZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt98jcDZ5kr3B%2FJY%2F74lDTcU1UtjBWC7EUzTCgUosjRQIhAInzaDZ%2BJwI5gLcN7wwRhPlOEp9QSMb%2Bre8tedCofAmZKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR4Ah%2BcKELhyXHF2Mq3APpasIw9W%2FZJK6mUBz%2Bc3TPp5Ao7Pf9IAOaWa4TiN%2Bc65r4T1Sdk%2B5CffVe%2BEW4cvsZqWgPpsYHUwE%2FlxJ3XM%2Bu3%2BahW4Usob4ohCR4woBU7ceouIP61%2B%2B%2B%2FFDNpcWJ81S9XPBgDd3T6ooukguNDfpwpJod8TAK2aN%2B%2FgR1XBVD6oZYqc05TgJHCsLN1o5E9Gkwr3H8jety54sFzPbyq99xo6U%2BTGaFLfUXCsrtFgu3X%2BU%2FFpfcMng888qD9eDisir%2BB1ERkwwAwz7LxQT1y6wKk6aQKk%2FjBQ3E%2BsOE9I7p2KGpIMHVFGBLyYMAtll9Xc6CojYA09pdL1GhUeFOIkn4tzJYGd4j0jXaU16ytHSw0yr05KM%2F%2B2nL%2FXKemnMJ4qKUnz9YkSlyzx3UzmT%2FZVC0GBwZfgVC1XIdSAcjCcdYW%2FtAJtZAorQGRwuAdjifXtVP6TlsPXWwuho4i%2FJKqhKuPhZAEGW2EN5swUUeOFvfln6RvMq3Sz7r4U0ADC6l%2B892rDWvH854vQ7t4QmKYxyZwknIkGalUpbx%2BnfoacDExLw%2BNrA55mYtqmoXktkBhBNrZCuKROn0Fhbtu%2Bqw4mc96wTcR8cHDpLYd8fJWTjXjIaIfUstNK4tIBQslDCwn5vCBjqkAaAaQ4wv%2B9LpyWBc%2FZHQ%2FqJjEy6Gmws%2FcV1H5Yskr88YMkeFCEToMqF9ohusskKzq6q%2Fh3Ut4Hi9kQum%2BusrPqctOpQPh%2FjYMt96OVopiDnusS3FawV8EYg4h235AoXq6FmoQ0KAXEutsb6QS0QvgYv1mzlZDHMuO4fuhIA9NEu6bima1cZS0ywIQRd23BUZGhiPqZIIj3jCg%2Fbf6gOFg2ZavyTT&X-Amz-Signature=6dafbdde0cab09104f8736938bf3c53e03f8164a933c797a1fdf74864527ecb2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VUOKWAZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt98jcDZ5kr3B%2FJY%2F74lDTcU1UtjBWC7EUzTCgUosjRQIhAInzaDZ%2BJwI5gLcN7wwRhPlOEp9QSMb%2Bre8tedCofAmZKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR4Ah%2BcKELhyXHF2Mq3APpasIw9W%2FZJK6mUBz%2Bc3TPp5Ao7Pf9IAOaWa4TiN%2Bc65r4T1Sdk%2B5CffVe%2BEW4cvsZqWgPpsYHUwE%2FlxJ3XM%2Bu3%2BahW4Usob4ohCR4woBU7ceouIP61%2B%2B%2B%2FFDNpcWJ81S9XPBgDd3T6ooukguNDfpwpJod8TAK2aN%2B%2FgR1XBVD6oZYqc05TgJHCsLN1o5E9Gkwr3H8jety54sFzPbyq99xo6U%2BTGaFLfUXCsrtFgu3X%2BU%2FFpfcMng888qD9eDisir%2BB1ERkwwAwz7LxQT1y6wKk6aQKk%2FjBQ3E%2BsOE9I7p2KGpIMHVFGBLyYMAtll9Xc6CojYA09pdL1GhUeFOIkn4tzJYGd4j0jXaU16ytHSw0yr05KM%2F%2B2nL%2FXKemnMJ4qKUnz9YkSlyzx3UzmT%2FZVC0GBwZfgVC1XIdSAcjCcdYW%2FtAJtZAorQGRwuAdjifXtVP6TlsPXWwuho4i%2FJKqhKuPhZAEGW2EN5swUUeOFvfln6RvMq3Sz7r4U0ADC6l%2B892rDWvH854vQ7t4QmKYxyZwknIkGalUpbx%2BnfoacDExLw%2BNrA55mYtqmoXktkBhBNrZCuKROn0Fhbtu%2Bqw4mc96wTcR8cHDpLYd8fJWTjXjIaIfUstNK4tIBQslDCwn5vCBjqkAaAaQ4wv%2B9LpyWBc%2FZHQ%2FqJjEy6Gmws%2FcV1H5Yskr88YMkeFCEToMqF9ohusskKzq6q%2Fh3Ut4Hi9kQum%2BusrPqctOpQPh%2FjYMt96OVopiDnusS3FawV8EYg4h235AoXq6FmoQ0KAXEutsb6QS0QvgYv1mzlZDHMuO4fuhIA9NEu6bima1cZS0ywIQRd23BUZGhiPqZIIj3jCg%2Fbf6gOFg2ZavyTT&X-Amz-Signature=e9c6855ace994d973287b6aef16874b0a9cc8a6d05867c7dcbe03bca17ccefc2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
