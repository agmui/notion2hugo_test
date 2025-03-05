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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y2SPZEZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtuZATWSrIHmj%2BETdx5c%2F23c3zXDRGvVnbk0MT4ZngiQIgHEmKdJe9gJz2Zxr9jbFfhpNdTA6vkyQjismgy%2Bx4EEcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDPp6THTWzMkdprlXCircA%2BtQR%2FwaFuHBrkP6wgaEubqYLYzsxhVcMEaPQwv8NhXOQIRuD6bNEuasjl3wtpuDE%2BD9fknceJsKwcZnFTHD5uhTfckFgAW7mrUXX9JJFR%2BAZE9FiQRLqQfI42b%2FO9ufmJZd4CNwz05fmbnFiG0nZmsQZ5blnvHRGFEpRQOxM857k3qGFLfCCnU%2BvSvDB7Ylw%2BIkw%2Fd1w2IxplmauI8%2F2R8rlOnghcwRygv1YP9JvSOAf2C00JlYrsqF4jF2oL3QZp7p8JcEwGch2WeX%2BRN8V%2Bbg6x9SXdEamo0TSurMtNUfJ7rtRumxzTO1DlWvdUOVUmZLqgKh1YyjEh2kbAKo0%2BBDhanveVq4nKDocGejeFoYOPXA%2Fn3Ofw33UOxgZ07aEJpUGqV5Lktuff7FqeYMkPQZnq0QnGam%2BPzgTTF64EXwcNEMkMpH%2Bo3XY3KTsn%2F6oRSW6fOBPQBjA%2FLftWEBLtyGonMUfTF0bJuyhVgRBAmQaASu2pOBZ%2BYUr%2BmjR1l%2FLCa2hdOgwFMN80bZMzK6ZboLL4QN8IwIbTzc6glzHZY84lECs0h2N38xfAJgjYTVUiQ8d%2FoTqqq2WdY5wr%2BepGP5PCSb%2FG4sKXuvNwUom6vkdK%2FffrcVVg16Y5bWMO7RoL4GOqUBgTinKjxqkHobYP8L%2BIxhzy2xBPg5cDLH%2Fb4CaXq6l1SmHXrNQDoJBC3XnGYo9LG%2FG2isvRL0E6Ot5P8K6AKq2jUH%2BQtLf048RK4C87uoDsk9aHAWCZkWEcZ004d%2BNsAeMuWmp5CcfjUyH9osg3JFafd8WBfmS1ZaqpCfc1loPUcwEpUoG%2FbI7I%2FRPMJBgyriY4o3Zpyh%2FaCI4c9gHEdUsEYhus%2Bf&X-Amz-Signature=b4feda75c677bf6111da067bada2305819d64a30843b9ef3b1668dbf5a3cf661&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y2SPZEZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtuZATWSrIHmj%2BETdx5c%2F23c3zXDRGvVnbk0MT4ZngiQIgHEmKdJe9gJz2Zxr9jbFfhpNdTA6vkyQjismgy%2Bx4EEcq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDPp6THTWzMkdprlXCircA%2BtQR%2FwaFuHBrkP6wgaEubqYLYzsxhVcMEaPQwv8NhXOQIRuD6bNEuasjl3wtpuDE%2BD9fknceJsKwcZnFTHD5uhTfckFgAW7mrUXX9JJFR%2BAZE9FiQRLqQfI42b%2FO9ufmJZd4CNwz05fmbnFiG0nZmsQZ5blnvHRGFEpRQOxM857k3qGFLfCCnU%2BvSvDB7Ylw%2BIkw%2Fd1w2IxplmauI8%2F2R8rlOnghcwRygv1YP9JvSOAf2C00JlYrsqF4jF2oL3QZp7p8JcEwGch2WeX%2BRN8V%2Bbg6x9SXdEamo0TSurMtNUfJ7rtRumxzTO1DlWvdUOVUmZLqgKh1YyjEh2kbAKo0%2BBDhanveVq4nKDocGejeFoYOPXA%2Fn3Ofw33UOxgZ07aEJpUGqV5Lktuff7FqeYMkPQZnq0QnGam%2BPzgTTF64EXwcNEMkMpH%2Bo3XY3KTsn%2F6oRSW6fOBPQBjA%2FLftWEBLtyGonMUfTF0bJuyhVgRBAmQaASu2pOBZ%2BYUr%2BmjR1l%2FLCa2hdOgwFMN80bZMzK6ZboLL4QN8IwIbTzc6glzHZY84lECs0h2N38xfAJgjYTVUiQ8d%2FoTqqq2WdY5wr%2BepGP5PCSb%2FG4sKXuvNwUom6vkdK%2FffrcVVg16Y5bWMO7RoL4GOqUBgTinKjxqkHobYP8L%2BIxhzy2xBPg5cDLH%2Fb4CaXq6l1SmHXrNQDoJBC3XnGYo9LG%2FG2isvRL0E6Ot5P8K6AKq2jUH%2BQtLf048RK4C87uoDsk9aHAWCZkWEcZ004d%2BNsAeMuWmp5CcfjUyH9osg3JFafd8WBfmS1ZaqpCfc1loPUcwEpUoG%2FbI7I%2FRPMJBgyriY4o3Zpyh%2FaCI4c9gHEdUsEYhus%2Bf&X-Amz-Signature=bdfeaaae0efc39f2c6d7c38b811e3c76f82485c5550668afcbd875f0594d52ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
