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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIMATXCL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDps4wgwQ%2Fv8O0DZCyC9axEmS%2B7WcQGs3yjBbmt2O04mAiACejdJMW3HDaoQ8zfvC8redi%2BSAPWqu0BH8tposnDV2SqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BduFTt9j8GYkIVFmKtwDFFJSlY2XoL7W9c76QGijvq31gNM9IDVvZogtjcjpXz1PFJQX2dsAX3YkuTQfka5ed9075feJuDar30d3KoRYhAqX79b9hNOamc1fh5%2BrZtvyba9UM8moJWJIpBM%2BHeDsJC4wZKqAXPrgmS4vBink4EUyFtuBu6OtCSqx9T4WHkIcvFq%2F5bcQCzIdamnklV%2Fk6qA8I1zmQ1WBEInYi1%2B4Kqx5pOI8MiJ7mQNk0vcQmPH%2FD0I7d8tvA3pPNvx3lCyUPjCZK5K0FvEiML%2BoJdNeCaFRMzdRqGnYMrCbiXhG%2B38km1Xitdg%2BrcONtO7jGwd%2F9jhsMz7lqIM1REDCca5hWRiHpnQMp51%2FH4xXOTruPBEEEuhv2nccxEnr02BPiHukVtW%2By8tXxWhRrVvxg6AUxymH3zYavCLOfKBRcdqc5rjl0IhsGIhWX7Vlo0Bt78cGY3sXjdXQ5uTyX925og17r1NDVM0BlFVdqBDN1ZbUh%2F7zFdbuJ479V9aGRJ2UONmWvKx4TWEv0BhxyNc%2BOExl6VL%2B9nb92S25ih1RXHPLHXlNNybg6yflkq8OQWvCr40pLWPDkb6AJZrTu%2BzbdkkLWtWj0qptw871Sl1QKLTJdTk8LkhyOjsv50jdokgwgfuzxAY6pgFU%2BpmQimKhz%2FSmzqZ4L4ZSLgoWk7%2F6lBQ4Ein9qYGcs01qfR%2Fp33eCzoH9ezN8UHeHmpBfn7Lvx8Rp5dHua7o5JjPAWsa0KBPfJw7hp8UdopEc9VHNUpl6v2mOfiwJ2tbNOE%2Fadkv17tGCGniDBCLv6ytCZgq2yjDNuqekR1p6ESfNPm5OWhTrHKmpm%2B8PvKZZEVXukMYlVyI7ZN5jgOpm15TG3UUa&X-Amz-Signature=cf2d0c487d24b2914e86caec19886bbb63c8380a3b9978f682bf763ec36be474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIMATXCL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDps4wgwQ%2Fv8O0DZCyC9axEmS%2B7WcQGs3yjBbmt2O04mAiACejdJMW3HDaoQ8zfvC8redi%2BSAPWqu0BH8tposnDV2SqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BduFTt9j8GYkIVFmKtwDFFJSlY2XoL7W9c76QGijvq31gNM9IDVvZogtjcjpXz1PFJQX2dsAX3YkuTQfka5ed9075feJuDar30d3KoRYhAqX79b9hNOamc1fh5%2BrZtvyba9UM8moJWJIpBM%2BHeDsJC4wZKqAXPrgmS4vBink4EUyFtuBu6OtCSqx9T4WHkIcvFq%2F5bcQCzIdamnklV%2Fk6qA8I1zmQ1WBEInYi1%2B4Kqx5pOI8MiJ7mQNk0vcQmPH%2FD0I7d8tvA3pPNvx3lCyUPjCZK5K0FvEiML%2BoJdNeCaFRMzdRqGnYMrCbiXhG%2B38km1Xitdg%2BrcONtO7jGwd%2F9jhsMz7lqIM1REDCca5hWRiHpnQMp51%2FH4xXOTruPBEEEuhv2nccxEnr02BPiHukVtW%2By8tXxWhRrVvxg6AUxymH3zYavCLOfKBRcdqc5rjl0IhsGIhWX7Vlo0Bt78cGY3sXjdXQ5uTyX925og17r1NDVM0BlFVdqBDN1ZbUh%2F7zFdbuJ479V9aGRJ2UONmWvKx4TWEv0BhxyNc%2BOExl6VL%2B9nb92S25ih1RXHPLHXlNNybg6yflkq8OQWvCr40pLWPDkb6AJZrTu%2BzbdkkLWtWj0qptw871Sl1QKLTJdTk8LkhyOjsv50jdokgwgfuzxAY6pgFU%2BpmQimKhz%2FSmzqZ4L4ZSLgoWk7%2F6lBQ4Ein9qYGcs01qfR%2Fp33eCzoH9ezN8UHeHmpBfn7Lvx8Rp5dHua7o5JjPAWsa0KBPfJw7hp8UdopEc9VHNUpl6v2mOfiwJ2tbNOE%2Fadkv17tGCGniDBCLv6ytCZgq2yjDNuqekR1p6ESfNPm5OWhTrHKmpm%2B8PvKZZEVXukMYlVyI7ZN5jgOpm15TG3UUa&X-Amz-Signature=3be222f2452babb439126cc13d173381ce34d52dbee28bda6decde85f87c5a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
