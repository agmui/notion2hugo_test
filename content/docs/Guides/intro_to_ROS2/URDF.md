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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJI7J3XN%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFslSrXUrkAHmUUsZCnhhaiMXQfJdvR41LfOJI7LAcAOAiBF%2FgTHHgg1rFgMEupbtnlCtAiQ26ZT5sFb4rBhWJhNkyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlnBcDQYM8%2FO9%2BryTKtwDXVcgLVskqOo1xJPffeimxDj%2B9Xk6lpgm%2BrsjRKP%2Bb4WWCRRe6Pr7n1Oce9h10Brd29F5QEdJM4letSAjuPyZpYNxWRdd9ONuvoaBvW6FZeST2Ixlm9CMYWkb06tw7fae6J6St6RFn0GZMvsNzQQFity7jDvczaJ6axPKO9%2FcCUpKCx9ESLts3dJu5ujsZDkvGHDgObe2BAUGFI6EEvjLHwRVLF05M%2FqXxCFmpYnoDAShglHoaiLix%2FOb5KQARxGWyR8xK2lNqOKgtRuVYJDDkDKk8KLrX6CP7r1Kmtv%2FMLl7n4ZCZ39O5GcSGssPc1AIhEVlrEYMY5p1Ap6zRscHlVgbDfNs%2FdckgNqoNS5JjyzlmmEcmbb4FIC3xxKuf%2BPzv7HC38HNG9yIzsOxW5aqq%2FnmpSaK3T3unyXcu0pD1o%2BkA3nO5asHMZj72UyYl0L3eurjs5PT8VzRAE1X0LlIVmktdry9acI6BW%2FU6ykrVwuRG1J32TKc1%2BAOWtTkSmLx%2Fj1i%2BnKCaL8RLur4pn9odQMnOyd22rxc7EvAI79fSMZsYT%2BG%2FlFfANH8mPoE1ddNXjOwVmIZLWUQpk52l1GCeelzT%2B6nf44LmSC9kdpZDNMtFNYWLGq53MD823Aw6LCUwgY6pgGmaL0WtcuY867SfFrD%2FoePmtOokNydmRvOjM2OBwF7HP4DanFiacr7tdT5FFWYDaRQ%2FH6dmIhpgIUQnLGWAUJ4StB6wu4eSZkLFSnidaBiNYkHkizAXZafBw1Cmg2FW5T6jighFTZ%2F0nJ4KDz%2FguI%2Fbcwe3UnAcED4osU5osXK8jd2%2FHPH0QTBuXZC7y7L%2FFSKyQMJdSTDmdtpAOXrPESSNZRSKMVy&X-Amz-Signature=2d03e3abaa7577c70b0a2cadaa1b44bccdd6804636087ccd23968774aeb243d2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJI7J3XN%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFslSrXUrkAHmUUsZCnhhaiMXQfJdvR41LfOJI7LAcAOAiBF%2FgTHHgg1rFgMEupbtnlCtAiQ26ZT5sFb4rBhWJhNkyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlnBcDQYM8%2FO9%2BryTKtwDXVcgLVskqOo1xJPffeimxDj%2B9Xk6lpgm%2BrsjRKP%2Bb4WWCRRe6Pr7n1Oce9h10Brd29F5QEdJM4letSAjuPyZpYNxWRdd9ONuvoaBvW6FZeST2Ixlm9CMYWkb06tw7fae6J6St6RFn0GZMvsNzQQFity7jDvczaJ6axPKO9%2FcCUpKCx9ESLts3dJu5ujsZDkvGHDgObe2BAUGFI6EEvjLHwRVLF05M%2FqXxCFmpYnoDAShglHoaiLix%2FOb5KQARxGWyR8xK2lNqOKgtRuVYJDDkDKk8KLrX6CP7r1Kmtv%2FMLl7n4ZCZ39O5GcSGssPc1AIhEVlrEYMY5p1Ap6zRscHlVgbDfNs%2FdckgNqoNS5JjyzlmmEcmbb4FIC3xxKuf%2BPzv7HC38HNG9yIzsOxW5aqq%2FnmpSaK3T3unyXcu0pD1o%2BkA3nO5asHMZj72UyYl0L3eurjs5PT8VzRAE1X0LlIVmktdry9acI6BW%2FU6ykrVwuRG1J32TKc1%2BAOWtTkSmLx%2Fj1i%2BnKCaL8RLur4pn9odQMnOyd22rxc7EvAI79fSMZsYT%2BG%2FlFfANH8mPoE1ddNXjOwVmIZLWUQpk52l1GCeelzT%2B6nf44LmSC9kdpZDNMtFNYWLGq53MD823Aw6LCUwgY6pgGmaL0WtcuY867SfFrD%2FoePmtOokNydmRvOjM2OBwF7HP4DanFiacr7tdT5FFWYDaRQ%2FH6dmIhpgIUQnLGWAUJ4StB6wu4eSZkLFSnidaBiNYkHkizAXZafBw1Cmg2FW5T6jighFTZ%2F0nJ4KDz%2FguI%2Fbcwe3UnAcED4osU5osXK8jd2%2FHPH0QTBuXZC7y7L%2FFSKyQMJdSTDmdtpAOXrPESSNZRSKMVy&X-Amz-Signature=38cbda20af3121a3348e607cd0b2e8f0ae6f8a705b4427b5eabc6f75339b3503&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
