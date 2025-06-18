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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNZEYSCP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3byI67CEZCN2wY7yFVrQwNes5X1U5n5ULWPNT8Bcm1AiB85%2B3BhdC5tvuxABp6kVZhD264MWeHpYuO4GEY5XgdrSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQF43BnoM5cf6Hx3GKtwDofUYw47pmm%2Fmx9uWx0omf3MPEAIpngvNQ9IsT7qNLYQbx8X%2Flc88dTVscxRrpJKCWqQXCYhk%2Bza%2B4pZ3S1s2qJElamPrWWyhxrOvt6SdvbuX9CqROTcgSlTINAhsQ24lbFTz3xTRPRcL9hxz7HigWdLF0rxydii2U76uNL345i2QfHbapef7c3ewmn0DC%2BDSRQDG%2Bfa0%2FzoOVzAK5LS80SRii1kcpCvyTg66OJy1zPN3q03tDymn%2B3Sgn5kERcRGAM7dSVFbrMmAhbW35h84Lr5JEYbJiSi8YdmDlQKsQa2%2FrVRRWfinHJt8XZD2YuLUVwl2eHYxNL8C4ddLQF04mp8FXUObNFVd2csFD6lD4ezV30uu3%2F59Up%2Bsgi1Nw%2F96JXsrDwDWIrZK9k09KckIsKOqXTXDpMVfs94TYDbNSajfgajbNNqo7jVjLcah5PqKHF0SV5mC4PyQXzkRDhOtRLQIYzjr%2BoAFwzYdeJlFPY9rkTZqJNZ0KFHvRMNQNARFHAXlmwsYcfJd1jleYZwcHRt8cXjUE2yaKReHFsCu2th4b6Q7tvmTYE40wKssDXNHjAa0ggtokLolxZRE2VJ4AYtfHuKYRpy6qJ7tYa2B48apweREbe1Z6sAsN8Qw4aHIwgY6pgH2uiOlN5zjjku%2FQ77yUt7HRrQZvM9k%2Bky5SAmqWFbiwdHRP0hOPEz8i3wk3N7ICid3twYaKJvz9GwvLMPVbIPQ7i6xWJRIUS4KdsqM7XP3H4O1xoBBkk7aIxxXzfix1zd7vkINJ8e4JI0D9%2BFgT8glLI0c9KtNdSqQh9nFGxDjfRlnlmCjWweaznDZSIiUDaNJCBe%2Fs6WnBm%2FF2IThb2qkAJP%2F4Ixe&X-Amz-Signature=f0171cd56e62182c3cee2bae2dda40d49106816458849a2f996a256018632d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNZEYSCP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3byI67CEZCN2wY7yFVrQwNes5X1U5n5ULWPNT8Bcm1AiB85%2B3BhdC5tvuxABp6kVZhD264MWeHpYuO4GEY5XgdrSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQF43BnoM5cf6Hx3GKtwDofUYw47pmm%2Fmx9uWx0omf3MPEAIpngvNQ9IsT7qNLYQbx8X%2Flc88dTVscxRrpJKCWqQXCYhk%2Bza%2B4pZ3S1s2qJElamPrWWyhxrOvt6SdvbuX9CqROTcgSlTINAhsQ24lbFTz3xTRPRcL9hxz7HigWdLF0rxydii2U76uNL345i2QfHbapef7c3ewmn0DC%2BDSRQDG%2Bfa0%2FzoOVzAK5LS80SRii1kcpCvyTg66OJy1zPN3q03tDymn%2B3Sgn5kERcRGAM7dSVFbrMmAhbW35h84Lr5JEYbJiSi8YdmDlQKsQa2%2FrVRRWfinHJt8XZD2YuLUVwl2eHYxNL8C4ddLQF04mp8FXUObNFVd2csFD6lD4ezV30uu3%2F59Up%2Bsgi1Nw%2F96JXsrDwDWIrZK9k09KckIsKOqXTXDpMVfs94TYDbNSajfgajbNNqo7jVjLcah5PqKHF0SV5mC4PyQXzkRDhOtRLQIYzjr%2BoAFwzYdeJlFPY9rkTZqJNZ0KFHvRMNQNARFHAXlmwsYcfJd1jleYZwcHRt8cXjUE2yaKReHFsCu2th4b6Q7tvmTYE40wKssDXNHjAa0ggtokLolxZRE2VJ4AYtfHuKYRpy6qJ7tYa2B48apweREbe1Z6sAsN8Qw4aHIwgY6pgH2uiOlN5zjjku%2FQ77yUt7HRrQZvM9k%2Bky5SAmqWFbiwdHRP0hOPEz8i3wk3N7ICid3twYaKJvz9GwvLMPVbIPQ7i6xWJRIUS4KdsqM7XP3H4O1xoBBkk7aIxxXzfix1zd7vkINJ8e4JI0D9%2BFgT8glLI0c9KtNdSqQh9nFGxDjfRlnlmCjWweaznDZSIiUDaNJCBe%2Fs6WnBm%2FF2IThb2qkAJP%2F4Ixe&X-Amz-Signature=5b3cffd625b49871a073b4141ed6831de4bd620c42d12eb04c41d5edfb5a824d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
