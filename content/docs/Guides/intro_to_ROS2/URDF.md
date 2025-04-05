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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OCEDVZ5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1%2BN9kb6Gx6Dr1MH8OvbYqLubfkmSIVRax1M7cw34ZnAiBPDWh1wfFSioeOtiTFdGcCS78%2BasEGcntUOpJBvsCXEyr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMpOWEnFhGvx8tAA0cKtwDXRCsA5y6W%2BpSnG4u7KQLAOqnguT2lTAR7oUFMetAAzBpaZhv5YLnlDw33qDE%2FyC2FNpP4gvXT4yBvqytGIsbB%2FZs4mB%2FoKTURfsrZoj4Zl3aVBlPT9sWiUDqaWOvMtnJq2fce81AXzRVywQXYab8JJQ2MqF5xteQe31kO6wze60NqUEP6Eyhn4Gfc%2F0S1LvVzM5WOdAcUGqjgwoFvo%2FT2xvAXOdE7PKXGwu15%2BhktbVsjba8UsviukoyhijFuiU0ggS79ApdY5dxealqKfP4H75kyfW9Rr9f0INvcPYwWqKUm%2FlC34lJOhM8h5%2FvhtMHk6dM4HI0If8F0C2gBtea35S5CrVwLvQD8DOddogVzOLWVbOK5Sy9C37teua84A5y6khnyHVAcbikOJL1cvvMp%2FSxp%2FoY4qEuFxpe4mGHwH2bazrOIwunleFMNrGuGg9%2BHHts5R54YLAePSc5tJC2nx4sax9Ds7Y9Ut29PdPWcwYS1ROBk9qB9RPQPriMvYrCep779vkWiZjHtcd6qF10j1%2F5Jwlf46299kjNkvo5Iq5gQVq1uwCjZ4vY%2BtQXRyI0G9nPCEmd0o%2F%2Fg%2BDNlk2JJFsMTCKsmzUcHLWZqz30VBOQ%2BfFnB%2BH0jt%2BTrx0wwNfCvwY6pgGb5Kgj%2Bd5GdW0NVdpN3qfei%2BZT4XLpimqxDEVdZf386sjFmTt9Y771yY9wGdunl%2BUEfZuU8WWVOncg3Liy5m%2BKigzqGxbrOS51b8AeWMjt3zNfvuKWjdiumXClH5y1D75E386IE8hbcYNCfan9Yc6MLuVc75z9key%2Br1x0IAY4YHc7ZyURM65U%2BlIp4uRnwHlN85MKtj91%2BsU6BHVox5TTfjAgA5xc&X-Amz-Signature=ba426070980876abbb6bdcfbe347cfdd62b1aec745aa3c99434637d784f1d7be&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OCEDVZ5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1%2BN9kb6Gx6Dr1MH8OvbYqLubfkmSIVRax1M7cw34ZnAiBPDWh1wfFSioeOtiTFdGcCS78%2BasEGcntUOpJBvsCXEyr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMpOWEnFhGvx8tAA0cKtwDXRCsA5y6W%2BpSnG4u7KQLAOqnguT2lTAR7oUFMetAAzBpaZhv5YLnlDw33qDE%2FyC2FNpP4gvXT4yBvqytGIsbB%2FZs4mB%2FoKTURfsrZoj4Zl3aVBlPT9sWiUDqaWOvMtnJq2fce81AXzRVywQXYab8JJQ2MqF5xteQe31kO6wze60NqUEP6Eyhn4Gfc%2F0S1LvVzM5WOdAcUGqjgwoFvo%2FT2xvAXOdE7PKXGwu15%2BhktbVsjba8UsviukoyhijFuiU0ggS79ApdY5dxealqKfP4H75kyfW9Rr9f0INvcPYwWqKUm%2FlC34lJOhM8h5%2FvhtMHk6dM4HI0If8F0C2gBtea35S5CrVwLvQD8DOddogVzOLWVbOK5Sy9C37teua84A5y6khnyHVAcbikOJL1cvvMp%2FSxp%2FoY4qEuFxpe4mGHwH2bazrOIwunleFMNrGuGg9%2BHHts5R54YLAePSc5tJC2nx4sax9Ds7Y9Ut29PdPWcwYS1ROBk9qB9RPQPriMvYrCep779vkWiZjHtcd6qF10j1%2F5Jwlf46299kjNkvo5Iq5gQVq1uwCjZ4vY%2BtQXRyI0G9nPCEmd0o%2F%2Fg%2BDNlk2JJFsMTCKsmzUcHLWZqz30VBOQ%2BfFnB%2BH0jt%2BTrx0wwNfCvwY6pgGb5Kgj%2Bd5GdW0NVdpN3qfei%2BZT4XLpimqxDEVdZf386sjFmTt9Y771yY9wGdunl%2BUEfZuU8WWVOncg3Liy5m%2BKigzqGxbrOS51b8AeWMjt3zNfvuKWjdiumXClH5y1D75E386IE8hbcYNCfan9Yc6MLuVc75z9key%2Br1x0IAY4YHc7ZyURM65U%2BlIp4uRnwHlN85MKtj91%2BsU6BHVox5TTfjAgA5xc&X-Amz-Signature=84d5452ccbae6070b7a54d6f9cd1c4b95c6d464eb6f1a3965559b81202716e13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
