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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT3A54SU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDBuUpUbbVW%2FGmBuT%2FlbVG886%2F0PHbvtTVbMLhBJkXYdAiAr48uLhGbJkUSmpovMgkE4XcjyMYCma%2BatYFAdhm2AUCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMucQjoWuq%2FmvSODCOKtwD11cZan5LsVbHT7D0H2LxNpGHXYAOj1pjJ9gnKwdy6mNhAoEC%2FFIUc1ktFWj1YqSTq%2FMURGPcAaEFK%2FAm%2FWMJ%2BYDwwflm8mJbeM3PVs8NXrUWnSGMvFRSozv85MlyNRJaQvoqjPvJj9u4jF3PfXwkCG843ShsmxFtt2BtThXqqzMpe5IDaDwQ2UVCU7799DV7hCS4%2FbyBpL%2BIFlucv6JRDP%2BC4zX7wST%2BcnU%2FEaHeuX3%2FioYmdknau8MFEtSs1DMBXN1WIN8dfqzrBEyxItAMFgPsXZhRe5vTkTu14zfsabBtJISy6qXsF80pDcm7v6I8LQtgFKglSrLh0dX4fbWVTOYi0A4o7sV8mF5OoPyWVQI19Lu1XdxL1fDtTvrcPv9voc5Oy4IsEiiz6zrgzl9DFCs9JRY1xP1hO7i9DS9rlIDWSIn8nMTnDMq9P3Zgz7uFfBw1ZMYGouuhEavbUhVlQpBKIv72zQgfvqeG933MyUC%2BwaYcSnVKGO%2FLAgUxsNn%2FtRFdaPwDsmigbRwY6jFpPZAJSKcaOjat9f8OAMfTSxvz5EYxkdpezdIGGl7fTZEwZdqtvDaNPdtKFw6M0VWCpFC9ODKi3iO5aqdbMePpKEz70XFRuRU0BxEKdQww1PKgwAY6pgFOndAGpZOJEWCWJUTLKK6iYaBRJvK0uAmVPQuMfMoAGZLebx%2Fl2sBuMdhJLHeBZ5ex%2BQFAer%2FLyVWmMhYdBSt9PukOJ6JoJzEpmo7ey1Hxyt3r8WlkXpX7kQMAHY9%2FXw3gFo4ZA9DfxGJkJ9bRdqa1bPxuEzxpzqlcdxHOoZojW4tJwG5K2d5WXqG5cYGp7GXmP2fgAcY8XnTQAALeizyXVIvt5YMI&X-Amz-Signature=2ff0d1250f74f8febae26e43d959af78a82e0f9011cd56d36c4fbcc5e6a91629&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT3A54SU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDBuUpUbbVW%2FGmBuT%2FlbVG886%2F0PHbvtTVbMLhBJkXYdAiAr48uLhGbJkUSmpovMgkE4XcjyMYCma%2BatYFAdhm2AUCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMucQjoWuq%2FmvSODCOKtwD11cZan5LsVbHT7D0H2LxNpGHXYAOj1pjJ9gnKwdy6mNhAoEC%2FFIUc1ktFWj1YqSTq%2FMURGPcAaEFK%2FAm%2FWMJ%2BYDwwflm8mJbeM3PVs8NXrUWnSGMvFRSozv85MlyNRJaQvoqjPvJj9u4jF3PfXwkCG843ShsmxFtt2BtThXqqzMpe5IDaDwQ2UVCU7799DV7hCS4%2FbyBpL%2BIFlucv6JRDP%2BC4zX7wST%2BcnU%2FEaHeuX3%2FioYmdknau8MFEtSs1DMBXN1WIN8dfqzrBEyxItAMFgPsXZhRe5vTkTu14zfsabBtJISy6qXsF80pDcm7v6I8LQtgFKglSrLh0dX4fbWVTOYi0A4o7sV8mF5OoPyWVQI19Lu1XdxL1fDtTvrcPv9voc5Oy4IsEiiz6zrgzl9DFCs9JRY1xP1hO7i9DS9rlIDWSIn8nMTnDMq9P3Zgz7uFfBw1ZMYGouuhEavbUhVlQpBKIv72zQgfvqeG933MyUC%2BwaYcSnVKGO%2FLAgUxsNn%2FtRFdaPwDsmigbRwY6jFpPZAJSKcaOjat9f8OAMfTSxvz5EYxkdpezdIGGl7fTZEwZdqtvDaNPdtKFw6M0VWCpFC9ODKi3iO5aqdbMePpKEz70XFRuRU0BxEKdQww1PKgwAY6pgFOndAGpZOJEWCWJUTLKK6iYaBRJvK0uAmVPQuMfMoAGZLebx%2Fl2sBuMdhJLHeBZ5ex%2BQFAer%2FLyVWmMhYdBSt9PukOJ6JoJzEpmo7ey1Hxyt3r8WlkXpX7kQMAHY9%2FXw3gFo4ZA9DfxGJkJ9bRdqa1bPxuEzxpzqlcdxHOoZojW4tJwG5K2d5WXqG5cYGp7GXmP2fgAcY8XnTQAALeizyXVIvt5YMI&X-Amz-Signature=e3d6d844580b131fae1d65f3d627b32e2f64e7906de8dfaefa14d2a1968c81c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
