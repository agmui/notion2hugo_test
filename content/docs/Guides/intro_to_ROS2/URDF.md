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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR2OXJYN%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUBLGEzaJ4KvHXQ4ZCZv%2BgrHqQHTAUB%2FhhsumDBey75AiAsMQx9M8tfamhLyfFM3w3w%2F%2FOLcOUtI5iO%2Bh5CbqvpPir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMFJCevbQUGf6Yd8ocKtwD80%2BqxUCSSB70T%2B5ZNZvTcFT%2BQ1r8koOcXZbTWUfzmhIXTyWz1vNCNvl0Y5smPh8p30eDn6SV4unZEfWeuyeXew%2Bt18mYIJxgcT4%2FlsVv1puan0Jz9Apg53i4jgU0VvLOEkBJFAioUumzIonKAvaeFUCFuUrnVZfjQ8jdoEBfp%2FA0pKpyfvB3iwpyGZb0N8%2B1hx2xniS6WpIxl9qmZlBT8gLcVQwPaxAPP2xkn4559EmUGC9X%2F%2BBRi29%2Bg3PpY0TRCgwkZw1y9%2BZiNqV5xLJJTRSVTU4pMnmlwdB92wgpilwneoXSlg5Cp7TcRknKJQ0djjKrikqPf4zPyG%2BXYUD7rOfvSuMQHA%2BR%2F6LoyzL28sCTRHmafrRRj%2Bnc8C8PJTVS4Qi3%2BhrGYg1aJVZHG8%2FIbdjyyZQLGJsLzp1yp4KcpeGyTbSMrWF8OzL2fSqQs7F%2Fa9K3o7tFAceko82DMzB7xkkmChTmKZKDTTnhOlaTixzkE%2BmIP29eQzbHRVLEMtvHHWs1xiF76kEzZGg4w9LQOwKTK2X0Xkpcua5OzELMaJMX8XI3huqM9%2Bf8HzoUKLVEn3JkZWUFUOaPpnjiW5qo0gCqxN%2Fy9MOEEygi4Is0kpG7k9%2FNSOcYO2Mjr6swq%2BWKwAY6pgF5uXsGSDDcryn92e0Iq0VT7pQSy0mgZYjHm771ptjobDk8CjDXKA%2BwrU%2FiT4s0Q6iAKwpusekfZY9Tm7KDB2Ju5daSgGEFaKgqIkcRf8gWDFtCV7GKZvDdnde5YaqF3SYhp0sqjp%2Fe0wd1lDfVxg4tYTx63PBcjwIpwJh1AFLP0xNT%2F4Q1ggDAfgyr16SWm5Imthl2%2FrFdhQAMKVQMA8YNrY538a7d&X-Amz-Signature=79d39b03887f9a3609097d268a87e2d044b915e9eb779ae56ac7f9ba76d1be7b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR2OXJYN%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUBLGEzaJ4KvHXQ4ZCZv%2BgrHqQHTAUB%2FhhsumDBey75AiAsMQx9M8tfamhLyfFM3w3w%2F%2FOLcOUtI5iO%2Bh5CbqvpPir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMFJCevbQUGf6Yd8ocKtwD80%2BqxUCSSB70T%2B5ZNZvTcFT%2BQ1r8koOcXZbTWUfzmhIXTyWz1vNCNvl0Y5smPh8p30eDn6SV4unZEfWeuyeXew%2Bt18mYIJxgcT4%2FlsVv1puan0Jz9Apg53i4jgU0VvLOEkBJFAioUumzIonKAvaeFUCFuUrnVZfjQ8jdoEBfp%2FA0pKpyfvB3iwpyGZb0N8%2B1hx2xniS6WpIxl9qmZlBT8gLcVQwPaxAPP2xkn4559EmUGC9X%2F%2BBRi29%2Bg3PpY0TRCgwkZw1y9%2BZiNqV5xLJJTRSVTU4pMnmlwdB92wgpilwneoXSlg5Cp7TcRknKJQ0djjKrikqPf4zPyG%2BXYUD7rOfvSuMQHA%2BR%2F6LoyzL28sCTRHmafrRRj%2Bnc8C8PJTVS4Qi3%2BhrGYg1aJVZHG8%2FIbdjyyZQLGJsLzp1yp4KcpeGyTbSMrWF8OzL2fSqQs7F%2Fa9K3o7tFAceko82DMzB7xkkmChTmKZKDTTnhOlaTixzkE%2BmIP29eQzbHRVLEMtvHHWs1xiF76kEzZGg4w9LQOwKTK2X0Xkpcua5OzELMaJMX8XI3huqM9%2Bf8HzoUKLVEn3JkZWUFUOaPpnjiW5qo0gCqxN%2Fy9MOEEygi4Is0kpG7k9%2FNSOcYO2Mjr6swq%2BWKwAY6pgF5uXsGSDDcryn92e0Iq0VT7pQSy0mgZYjHm771ptjobDk8CjDXKA%2BwrU%2FiT4s0Q6iAKwpusekfZY9Tm7KDB2Ju5daSgGEFaKgqIkcRf8gWDFtCV7GKZvDdnde5YaqF3SYhp0sqjp%2Fe0wd1lDfVxg4tYTx63PBcjwIpwJh1AFLP0xNT%2F4Q1ggDAfgyr16SWm5Imthl2%2FrFdhQAMKVQMA8YNrY538a7d&X-Amz-Signature=e19b6ee02c14337731c18f24a7ff053b130decbf92a7d8d8ee8287e7e9ea9f76&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
