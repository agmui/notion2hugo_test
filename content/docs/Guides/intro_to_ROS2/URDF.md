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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S6AKP2V%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBz3sPcAjo0YcQ%2FATcY32%2FphSna9e0lLGY8nHr2t%2BydqAiAlwJ5I%2FRL9TFey3ct43NXpljFny%2BYPOXR0VdDbGJ2LUiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM814XEprPnidyMr03KtwDr2bCG1fHWqd%2FZCIu6FxRHTy6SazvThbF6hZjzRZM6A4rMTmLdi92jVcivqGZOel6EW4Cb82Z%2F3CWYkLf3Nmj6WtNiWPW7U6KzzmLwwWFA5rTJrJoHhqbYy8VgRnIColkJZfKmskulBIeR0OVGSS%2BQNztFU%2B8qluJTOeVe16NFaIWCItUP61YQGxieCtaZL0lq06zCmalCJWaU2vZbCkOA%2B6sY8ypvOuI9HgoX0HXAJ%2F7tz1rC0KgN9NnXsGCejDhSYmhj7u0ZtMpxG4HVj10eM7s0FaqTBvQbU6rwiayOZSvlH9I%2BGCdTzEDwt0Hob4snAp%2BA9HaCXk7D5SkH1mACexgelZ40QygY261047wM8KlqDvPgulB8IlYW%2F0cMvgj8njeuVaBwjcZYXdH7%2B6EbBkBw0AUF01BbJZTgSuugJwC1o48eAeo5aG1tWW6M06bw3W51GJZyg7lv5AaGMEZEBlz2tU1dwxqI3QF4iIRsw3aEF6CQIzyZPBmJiNORyQdmARp21lPxzP53Ki7xprmy69V9EXMAX9K7TFAb%2Bl86e4ngPPu4meCo0HcSa2i0mpEATV2wgKilFVrE%2BTGIKUe01xP%2BJHd3AuaLt3NSAS9Nt0nAmWZ8tjB8Ch7cvwwoe%2F7vgY6pgHgRMayLxPNRYvffi6yV5iwTuRGjEPX00AizR4KoUZJF1N6o7GfkZOI%2FB1T4zDmwvlRpsd4xNUbLCXLMCcDo4gnNCqhj47u8BytIil5c%2FmNfd0Hfygl8MInkqiNn4t%2BBjM5Se60TqA4iEoRuB8EmeaG4XT2XS4bxSsRw3jTZ%2BjZKLH%2BW%2BraVGBVLep08b%2FoxJ8HjZOQePPhyLdiJLzQFJH0y3%2F01f58&X-Amz-Signature=4d5d74baed728233127f9e41650b5720872405c10d2264b596486997a84bef69&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S6AKP2V%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBz3sPcAjo0YcQ%2FATcY32%2FphSna9e0lLGY8nHr2t%2BydqAiAlwJ5I%2FRL9TFey3ct43NXpljFny%2BYPOXR0VdDbGJ2LUiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM814XEprPnidyMr03KtwDr2bCG1fHWqd%2FZCIu6FxRHTy6SazvThbF6hZjzRZM6A4rMTmLdi92jVcivqGZOel6EW4Cb82Z%2F3CWYkLf3Nmj6WtNiWPW7U6KzzmLwwWFA5rTJrJoHhqbYy8VgRnIColkJZfKmskulBIeR0OVGSS%2BQNztFU%2B8qluJTOeVe16NFaIWCItUP61YQGxieCtaZL0lq06zCmalCJWaU2vZbCkOA%2B6sY8ypvOuI9HgoX0HXAJ%2F7tz1rC0KgN9NnXsGCejDhSYmhj7u0ZtMpxG4HVj10eM7s0FaqTBvQbU6rwiayOZSvlH9I%2BGCdTzEDwt0Hob4snAp%2BA9HaCXk7D5SkH1mACexgelZ40QygY261047wM8KlqDvPgulB8IlYW%2F0cMvgj8njeuVaBwjcZYXdH7%2B6EbBkBw0AUF01BbJZTgSuugJwC1o48eAeo5aG1tWW6M06bw3W51GJZyg7lv5AaGMEZEBlz2tU1dwxqI3QF4iIRsw3aEF6CQIzyZPBmJiNORyQdmARp21lPxzP53Ki7xprmy69V9EXMAX9K7TFAb%2Bl86e4ngPPu4meCo0HcSa2i0mpEATV2wgKilFVrE%2BTGIKUe01xP%2BJHd3AuaLt3NSAS9Nt0nAmWZ8tjB8Ch7cvwwoe%2F7vgY6pgHgRMayLxPNRYvffi6yV5iwTuRGjEPX00AizR4KoUZJF1N6o7GfkZOI%2FB1T4zDmwvlRpsd4xNUbLCXLMCcDo4gnNCqhj47u8BytIil5c%2FmNfd0Hfygl8MInkqiNn4t%2BBjM5Se60TqA4iEoRuB8EmeaG4XT2XS4bxSsRw3jTZ%2BjZKLH%2BW%2BraVGBVLep08b%2FoxJ8HjZOQePPhyLdiJLzQFJH0y3%2F01f58&X-Amz-Signature=a9ae496072d02b590ca8d5b714a65f7d0343e7ec071393de1d5de3e7f2b8a508&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
