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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WE42KJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIH%2BQWc6d6ZBuSeFYq7n6jpbRQcL%2FfgU%2BqBEwzU0FRTD7AiAtTN3yak695vGISESkviZrGjb6bGPO1o%2FcMAP0tdhgIyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMvSgspguBcgM74wS1KtwD3jfxzTvpBGHlOl3FKKdndy33BCyK8Rd3a7MNDhsS2iwJ0MpAjpr%2BawYRZOy3NY0PNS4s2X9AoEiiFw8ckQ8fMcPVI8hhTqJybL7UUKbmcUemh1x7s2cB%2FYQnHfw%2BzKH0dVJiQq73eRw7evm1yXPTAKUuIOmtoDYjS%2Bl1oD2E2Ly0KV3tjlBStc0LudgXzpjKRSLm5M1mFfGjbQi%2B4wYyWjqhhiJakYiDj0Klj%2BuEVl7jKM7C7i0etp%2FZfUXD9jrMVNt7QM5pWeH4WDbcAWFLWcQcxooJEUNEnGwL9twyILpryRCG8PZ%2BYWxbfnPX%2Fl%2Bg4s%2BF9ctTxpNue8TEXXigHZmxP2cO54txI%2FRX1gj6zXqNo%2F0DFJqfEnDDkkkA0Ni9CYcPCo0NssfzURoPkYQ5mTjS%2BbWqcVEGnUZaCY0961SFOYrSt5WJF8VDz8b4lCOHMi1AGig6J63O9NLOpXVVj3xeQPH6cXP332dtQE5ml7MzMe%2FlKR4oh%2BnfxvID6erz6sNCiLFKtUiWH06nykAfrT18k5D81ZGUCCECTuQ2KDFkcBoLwAyrxb3r3%2B6AomTKbtbwqMMTbguT%2BSkaYYtpdDIywWJIfEm2cGnhmUB6P6SfmIKxFSRjYDZsW%2FAw0oLqvgY6pgFyEScQHsrH1xICngWqw%2FZMebjSsgOpYiWc9SSAjkn%2FZaVgZU54KbwhrLsFYJVnLqs%2FwlH3m9PkS3k0UFxIHk%2Flz8PrYtk4pW3MwCg4e44Tk0JQe%2FL%2FxH3nikkRoZNq39DF%2BF3EeqGF%2B62Fz9Vmg82RRD2lJPuaW%2BM5CuehGlV8POv1WzbBc%2BjXMBX%2F%2FS%2FjYCFFl%2BRazeRofm0AzWH7gTGEYHL7MYk0&X-Amz-Signature=f777dcfd7e64e87b1cf8d75ebcdd45919faffb1edbac84de00849e5a337627ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WE42KJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIH%2BQWc6d6ZBuSeFYq7n6jpbRQcL%2FfgU%2BqBEwzU0FRTD7AiAtTN3yak695vGISESkviZrGjb6bGPO1o%2FcMAP0tdhgIyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMvSgspguBcgM74wS1KtwD3jfxzTvpBGHlOl3FKKdndy33BCyK8Rd3a7MNDhsS2iwJ0MpAjpr%2BawYRZOy3NY0PNS4s2X9AoEiiFw8ckQ8fMcPVI8hhTqJybL7UUKbmcUemh1x7s2cB%2FYQnHfw%2BzKH0dVJiQq73eRw7evm1yXPTAKUuIOmtoDYjS%2Bl1oD2E2Ly0KV3tjlBStc0LudgXzpjKRSLm5M1mFfGjbQi%2B4wYyWjqhhiJakYiDj0Klj%2BuEVl7jKM7C7i0etp%2FZfUXD9jrMVNt7QM5pWeH4WDbcAWFLWcQcxooJEUNEnGwL9twyILpryRCG8PZ%2BYWxbfnPX%2Fl%2Bg4s%2BF9ctTxpNue8TEXXigHZmxP2cO54txI%2FRX1gj6zXqNo%2F0DFJqfEnDDkkkA0Ni9CYcPCo0NssfzURoPkYQ5mTjS%2BbWqcVEGnUZaCY0961SFOYrSt5WJF8VDz8b4lCOHMi1AGig6J63O9NLOpXVVj3xeQPH6cXP332dtQE5ml7MzMe%2FlKR4oh%2BnfxvID6erz6sNCiLFKtUiWH06nykAfrT18k5D81ZGUCCECTuQ2KDFkcBoLwAyrxb3r3%2B6AomTKbtbwqMMTbguT%2BSkaYYtpdDIywWJIfEm2cGnhmUB6P6SfmIKxFSRjYDZsW%2FAw0oLqvgY6pgFyEScQHsrH1xICngWqw%2FZMebjSsgOpYiWc9SSAjkn%2FZaVgZU54KbwhrLsFYJVnLqs%2FwlH3m9PkS3k0UFxIHk%2Flz8PrYtk4pW3MwCg4e44Tk0JQe%2FL%2FxH3nikkRoZNq39DF%2BF3EeqGF%2B62Fz9Vmg82RRD2lJPuaW%2BM5CuehGlV8POv1WzbBc%2BjXMBX%2F%2FS%2FjYCFFl%2BRazeRofm0AzWH7gTGEYHL7MYk0&X-Amz-Signature=8da5dd59172af9f53a2a338ee82fa386284015482ab5888cee2d0c61ce713441&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
