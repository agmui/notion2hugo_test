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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOQHI2Z%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2aHjkuh%2FeadMSUondFR7twBmmm32tyXMvcFd9zbcOQAiA05p4HNw1j%2BXF9YMGAH4YzyEyfstURKO%2BUBSXrlgm79yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMhmJsFf94QSylWuXsKtwDWKlBffJcOn4%2FbT6bPHBcBZFlGil4aDAAaU1iD7%2FZrN4RInU8ePJm8DWgTE8Z5k3%2B4%2FmTeaPTAcpq9n0aa6g%2FffUyevnXNbaL1mGRHd7bydw9i6L1aSJVInGTcmeotTHkKChO7OjJMa7r%2FklPFUgxYXFwrHKqcum8TlpHypsNaHT%2BwpJt2tD%2Bo11AEBmW1tGw%2BPbQymi%2FJj1jeotMu3UtKwekxvg45X6xzcgzbNiE2jcua%2FEMqZGYYHi0of98U25Cgka%2Fmf8gD6GLGimxutmYm0ZA5R6tWpNA2e9p%2Fyj3JzinaiNndXLfRA6ftBO%2Bhya6kT8FqBu51n2z45ss82dzLLGo1c48dFnVCxr11T2sIkWXau0kS9lWFlyZ2itmbsLNs5RHNzJSDBI2cRTpYUt4lFFBqh3qGNHfNqdZnawDb6hAZPbb%2BkJuJcHgRCqYwf9QEpRLlzQXY9hUAo9liTGYSPH0E0QafvT5dMEK3QKPomkyNV0hqq1uEdJufY2lsgnWmmWxGcrme%2Fs%2BeUlE6mq9NLwpPSph65kH%2FoyhliyXR%2Fgpc7hu63ztuuI8vQshmqGjH08gKZyX1DVTSFdsiqxmHglKzkEo0oNKU8NWPN%2B1YBdp1%2FVL39cOhHb3NHAwkcviwAY6pgEFZqfC27NRjXIZCVutXwX%2B5f06sj6TNyasvWkebBWBALzaF8XrksST5EyMMENzEny0PQGIIJcHBB6FTj9D2fGJqMIVfs4ThA1DwkdGk%2BkLyG3FhZVv7RL4OB%2BWMkmYBCqBiDoUXfB8jlfK1GTsX5xDBMqAXAfq1Rd3SThm5edxgc0rk6nPCjATpV5gVKpy3XzOSTj2zkLfoqwXcNLE4PXXOqagqEc0&X-Amz-Signature=01b910320b44b240d8d849bbf724864534bb811ab61c9ae1fb45aea1c6909310&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOQHI2Z%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2aHjkuh%2FeadMSUondFR7twBmmm32tyXMvcFd9zbcOQAiA05p4HNw1j%2BXF9YMGAH4YzyEyfstURKO%2BUBSXrlgm79yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMhmJsFf94QSylWuXsKtwDWKlBffJcOn4%2FbT6bPHBcBZFlGil4aDAAaU1iD7%2FZrN4RInU8ePJm8DWgTE8Z5k3%2B4%2FmTeaPTAcpq9n0aa6g%2FffUyevnXNbaL1mGRHd7bydw9i6L1aSJVInGTcmeotTHkKChO7OjJMa7r%2FklPFUgxYXFwrHKqcum8TlpHypsNaHT%2BwpJt2tD%2Bo11AEBmW1tGw%2BPbQymi%2FJj1jeotMu3UtKwekxvg45X6xzcgzbNiE2jcua%2FEMqZGYYHi0of98U25Cgka%2Fmf8gD6GLGimxutmYm0ZA5R6tWpNA2e9p%2Fyj3JzinaiNndXLfRA6ftBO%2Bhya6kT8FqBu51n2z45ss82dzLLGo1c48dFnVCxr11T2sIkWXau0kS9lWFlyZ2itmbsLNs5RHNzJSDBI2cRTpYUt4lFFBqh3qGNHfNqdZnawDb6hAZPbb%2BkJuJcHgRCqYwf9QEpRLlzQXY9hUAo9liTGYSPH0E0QafvT5dMEK3QKPomkyNV0hqq1uEdJufY2lsgnWmmWxGcrme%2Fs%2BeUlE6mq9NLwpPSph65kH%2FoyhliyXR%2Fgpc7hu63ztuuI8vQshmqGjH08gKZyX1DVTSFdsiqxmHglKzkEo0oNKU8NWPN%2B1YBdp1%2FVL39cOhHb3NHAwkcviwAY6pgEFZqfC27NRjXIZCVutXwX%2B5f06sj6TNyasvWkebBWBALzaF8XrksST5EyMMENzEny0PQGIIJcHBB6FTj9D2fGJqMIVfs4ThA1DwkdGk%2BkLyG3FhZVv7RL4OB%2BWMkmYBCqBiDoUXfB8jlfK1GTsX5xDBMqAXAfq1Rd3SThm5edxgc0rk6nPCjATpV5gVKpy3XzOSTj2zkLfoqwXcNLE4PXXOqagqEc0&X-Amz-Signature=9fa4b2716e2e221d61c92ed7d59f82a85914af999bab7d3bc525afd99d6dd68c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
