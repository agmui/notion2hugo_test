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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJQ6E26H%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BnruERZPeTQWK9NjqbW0%2FZLlRXQBh7Cp9gPu60TmO4wIhAKR6rMqCFghWB9TpQlScDZcqt5sySa7QlScRqMtgn2T1KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTyPfdZLT%2Fj%2BhwRgEq3AMeyMyfFpjDfy2tZ0Zvn1Jic4UrALvj%2F264mpevhS5%2FMfwkeYArV2GI%2Fw%2FSj6OQinRrgvb3x8WlqcF7DYSTDMbx4626DHWUys7VonAO4NuQOUXvqCuN8XFzhpVkK99jKnZ3ALjqtVhMMDvcaoOhWbs9KxFavUtyemBpDKZMzoRohW0oDu5%2F%2FfA3W5OQRhQTsO6Jv1Nz1MyzH48sYNP1qZc06h%2B6vmNeLhrr68N9CsDm0bXd3vkG2xiZTB4fvvePsaX%2BA5NxuKCBBtmh2%2BpqlBx%2F2FeQ%2BKpTBGGz4Foax9ztqU6DvnGjF0Xv3OQK0SxvEVbDR7rodG6ljyeDWvLO1cDiP4nmbUXAMNcNAFUBotcpxrvkHxCcNELuIIgEE3auoYY5oU73ZeimjluUvFdzL6bp8UWPjRMessu4RvDoVq0r%2Bi7RwWXiimJqCOAoc7SXeO0V2JONIZ9fIrvlqOwAWn7ai1qwCHvC5jPu2%2B6BGcugRKqHHqwvk4qzlcxYhFV9ggguSlrxU8X63BEj16PWRs6xgkOw7GeMydJ6Oim9p1ALaskBtB%2BjHo1EWDdwOjchURUm%2BdScofxjEMVvf%2BO%2Bsc8VrUF39DzLIhJ51ooK7%2BgtA9NS4VsfkdMO3KcAjTCGxMLABjqkAYKO9MhUnOSJzL0tMd0UQSbswjzvR3XcF9fiqpbYokvDVFuzxrLexJeDf1WMqnhA%2Bl56FVBKZIeP%2F%2BHW7VyRCVIcliaJXg9jtem7lmGi7kw7x8GHI6a9DOAvQzY1cqrZgvczjvkuD4nnl%2B%2FSM17OM1vBJozzepzFLdcsvIq7n0Rz4KZVOndzW%2FQvLV9oVKs0uET7vCKrCtv3bWANXsE%2B36BJvJlU&X-Amz-Signature=7007af2c2091cd2afbd98f0589b57df8b2cc3f7889734c4d544409bfc16c0ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJQ6E26H%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BnruERZPeTQWK9NjqbW0%2FZLlRXQBh7Cp9gPu60TmO4wIhAKR6rMqCFghWB9TpQlScDZcqt5sySa7QlScRqMtgn2T1KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTyPfdZLT%2Fj%2BhwRgEq3AMeyMyfFpjDfy2tZ0Zvn1Jic4UrALvj%2F264mpevhS5%2FMfwkeYArV2GI%2Fw%2FSj6OQinRrgvb3x8WlqcF7DYSTDMbx4626DHWUys7VonAO4NuQOUXvqCuN8XFzhpVkK99jKnZ3ALjqtVhMMDvcaoOhWbs9KxFavUtyemBpDKZMzoRohW0oDu5%2F%2FfA3W5OQRhQTsO6Jv1Nz1MyzH48sYNP1qZc06h%2B6vmNeLhrr68N9CsDm0bXd3vkG2xiZTB4fvvePsaX%2BA5NxuKCBBtmh2%2BpqlBx%2F2FeQ%2BKpTBGGz4Foax9ztqU6DvnGjF0Xv3OQK0SxvEVbDR7rodG6ljyeDWvLO1cDiP4nmbUXAMNcNAFUBotcpxrvkHxCcNELuIIgEE3auoYY5oU73ZeimjluUvFdzL6bp8UWPjRMessu4RvDoVq0r%2Bi7RwWXiimJqCOAoc7SXeO0V2JONIZ9fIrvlqOwAWn7ai1qwCHvC5jPu2%2B6BGcugRKqHHqwvk4qzlcxYhFV9ggguSlrxU8X63BEj16PWRs6xgkOw7GeMydJ6Oim9p1ALaskBtB%2BjHo1EWDdwOjchURUm%2BdScofxjEMVvf%2BO%2Bsc8VrUF39DzLIhJ51ooK7%2BgtA9NS4VsfkdMO3KcAjTCGxMLABjqkAYKO9MhUnOSJzL0tMd0UQSbswjzvR3XcF9fiqpbYokvDVFuzxrLexJeDf1WMqnhA%2Bl56FVBKZIeP%2F%2BHW7VyRCVIcliaJXg9jtem7lmGi7kw7x8GHI6a9DOAvQzY1cqrZgvczjvkuD4nnl%2B%2FSM17OM1vBJozzepzFLdcsvIq7n0Rz4KZVOndzW%2FQvLV9oVKs0uET7vCKrCtv3bWANXsE%2B36BJvJlU&X-Amz-Signature=795f29fc0ac417424470755f0c5e3674838d7fc8a5071ea7f965faf18e302b60&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
