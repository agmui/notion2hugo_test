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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QONECFIB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIA0bokgEB8qOjygqwwa%2BwrmLgoBavi0hhvPSD8Gx74mBAiEA6nRRS2K9al4kXPMrgF8vodH5EKltE%2BeeUrf7eGQPjIIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDCDHTu6wt6LVhseP8yrcA6OrPFW0JIjms%2F1Z39xvbDm1V2ZzJj79%2Biywo0f213Y5ar0BhDDHTriahvraKZVetgNoPTl73toPaGbbVZ7mbYYn7i7fj8h9JPFyPWUeZRA0h5lejLwdPR5hYsr0%2FAOJiPgl3wQHh66zf3O%2BotkbXXgs2F0xA8aSk0%2F1evMw6T9bVQtfB9OAF5NgnXSMobALphLCHK3JgoeV31T%2BH3fg8J5dUvRUl0eX9oBflLCLoYZ%2BY3cSi%2BCs3vD69VXa5RF6hOEsOICRyEcoZUztjdQiaVgrHNds4MH4sa%2FvkkP93fndN%2F2p4e494mZmgU6JERZN2tuVg8s00hd59JQPzH7zL4CWYaRORqnaI%2FtmOdxqUdHiZiVMn6dcGXARl1EL%2BO6NXabzqSx08Tb1xzHLf00V7cDxZn%2BNr1JZRB5m1VkOqm4KZYmh9WGzR3TLExLYMffZiyFba08zdL0UotYkbtdiDzGIAtlCtXSBYm2jc5kN3DuWvD9f1lmdlTL9t%2BIm1HgkCt5Hn7PCZMbVHb9UExKWFCcVzMyGVqCveDJCfUpUIUySscq8rQi8eXJh3Y0MBsqH774VOyC5CIyBL20SjdSpLZkCeLQiWIysTtcjzKh5dDhhPlFh1R3LkXyqy2yyMOqfx8EGOqUBKmYpgZ%2BJ4y3Cjp%2F2Smfuchg1SvL04ccIIbMeOoG97sWfkzhkfFW5R8KtoWNd1cKglJ9rMP0xV4mfjvNvtmBNWpWfmDsda4htLyifE1W9wbbSnFf6vBGJ2QZbnMxQ9HFcU3t18LwTKKT8RM0tgmL7P2ijxBCNx6A82b%2F9rfoWwNadNHTyh1KjPOlJJgWNYI7tHSbHADxQRbGTP24vdFknCMSaPWcJ&X-Amz-Signature=c8a398ef7353ff5bd82bcd437b828e4991632267c7c2a91485d131a3d057d3b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QONECFIB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIA0bokgEB8qOjygqwwa%2BwrmLgoBavi0hhvPSD8Gx74mBAiEA6nRRS2K9al4kXPMrgF8vodH5EKltE%2BeeUrf7eGQPjIIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDCDHTu6wt6LVhseP8yrcA6OrPFW0JIjms%2F1Z39xvbDm1V2ZzJj79%2Biywo0f213Y5ar0BhDDHTriahvraKZVetgNoPTl73toPaGbbVZ7mbYYn7i7fj8h9JPFyPWUeZRA0h5lejLwdPR5hYsr0%2FAOJiPgl3wQHh66zf3O%2BotkbXXgs2F0xA8aSk0%2F1evMw6T9bVQtfB9OAF5NgnXSMobALphLCHK3JgoeV31T%2BH3fg8J5dUvRUl0eX9oBflLCLoYZ%2BY3cSi%2BCs3vD69VXa5RF6hOEsOICRyEcoZUztjdQiaVgrHNds4MH4sa%2FvkkP93fndN%2F2p4e494mZmgU6JERZN2tuVg8s00hd59JQPzH7zL4CWYaRORqnaI%2FtmOdxqUdHiZiVMn6dcGXARl1EL%2BO6NXabzqSx08Tb1xzHLf00V7cDxZn%2BNr1JZRB5m1VkOqm4KZYmh9WGzR3TLExLYMffZiyFba08zdL0UotYkbtdiDzGIAtlCtXSBYm2jc5kN3DuWvD9f1lmdlTL9t%2BIm1HgkCt5Hn7PCZMbVHb9UExKWFCcVzMyGVqCveDJCfUpUIUySscq8rQi8eXJh3Y0MBsqH774VOyC5CIyBL20SjdSpLZkCeLQiWIysTtcjzKh5dDhhPlFh1R3LkXyqy2yyMOqfx8EGOqUBKmYpgZ%2BJ4y3Cjp%2F2Smfuchg1SvL04ccIIbMeOoG97sWfkzhkfFW5R8KtoWNd1cKglJ9rMP0xV4mfjvNvtmBNWpWfmDsda4htLyifE1W9wbbSnFf6vBGJ2QZbnMxQ9HFcU3t18LwTKKT8RM0tgmL7P2ijxBCNx6A82b%2F9rfoWwNadNHTyh1KjPOlJJgWNYI7tHSbHADxQRbGTP24vdFknCMSaPWcJ&X-Amz-Signature=cfd10b7110ae18d46e724fef1b72ffb36625fecc848f6e8ba59534f103892f67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
