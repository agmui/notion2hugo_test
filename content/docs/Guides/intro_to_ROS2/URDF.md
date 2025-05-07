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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEIJHK4C%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQYh7WuVOnv0IviZ24RFobeqwiXxgLxkkiMqh5EBJugAiAdwQbkktCUT5h8I%2FLoz2xcUjAaLggOybIYZ5eGF92x5Cr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIM%2Bk5TPChoX1GvLQAkKtwDhnJOmwtjWjk6NHxm0jyloHv9QiS9HmkNCU7kckxVYhxM33FiqSRvltf18z9izBHvlCVZ51a%2BHyx11lgdpfrCUVzFUe3rHOt5KZcfb1bTcICuHTEn4tWVGvs39z8rJ1vyJgBFtBRBe8%2BUDVF2Wphrn4X0ZKo%2BRX%2FOsrDjyNLvCOo88F2opwjTk%2B5eauYTj%2FeyaC4tU3NjuYJYWC2lEaPvLyCZHCidZu37a9iH%2B0dkStY%2BfjayLFGeCpvJl8Y4tDcSdp6OKcog2DakcXQvea7zkg3YKcrNBlTr1jQ6WHFWldkkvyr9zHddoWDVcj592BKLENWWdprFTb%2F%2BPUxh2cqlWPvhhrqnYdrava%2F5B8Koh9zgaI58mXmzq9pAb9p6zCZUCURdNfgl%2FsTxJZswXssIHjP6%2FxJUx1ndmTZ7tN6916%2Fj3bckkXDxemXnXws3HfpScUCahrDIWqwkRKaRvZgZsbp0P3EsoRV%2Bge5HJRDLdwdb4lqdNVrNF0Tf5FgOU%2FdoSD7ei0Mbp99apYDHTQJDxTXqAbJBdbxIHpHpXXaVrH7fgCwdvIgyti5o7iYlIPjfh5Ai2ySgVbf%2BvPtw%2FzdAm%2FfIQ2mt6H%2FvBwY2R0Ec35tflBLm6B8v6kL5d%2FAwnZLrwAY6pgHzsm%2FfNWZJP2NhJrRM7yepjlibqX39fNbYsvk%2BNZJRmAjwdznxWOIP80OzNGUj6aQZAQFvX9AZvtiMpOEBbhojNubN%2FqsE%2BV7TL8El8oVWcDvnbcjPKp%2F0fOT3hava5mk5ZebVtgZVUS14qQHJ00TmYQK%2BPvSGRuWRF0a0qBBzmnoUYd7Ra2CSv2rcPcrdcSckmM%2Fy7NEthZSpWlPoFDKxN2kQfIwu&X-Amz-Signature=1ffdadfc7916050ca02e9c10033cc5141d4bd13a6c06a7c08746ba468c14b78c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEIJHK4C%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQYh7WuVOnv0IviZ24RFobeqwiXxgLxkkiMqh5EBJugAiAdwQbkktCUT5h8I%2FLoz2xcUjAaLggOybIYZ5eGF92x5Cr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIM%2Bk5TPChoX1GvLQAkKtwDhnJOmwtjWjk6NHxm0jyloHv9QiS9HmkNCU7kckxVYhxM33FiqSRvltf18z9izBHvlCVZ51a%2BHyx11lgdpfrCUVzFUe3rHOt5KZcfb1bTcICuHTEn4tWVGvs39z8rJ1vyJgBFtBRBe8%2BUDVF2Wphrn4X0ZKo%2BRX%2FOsrDjyNLvCOo88F2opwjTk%2B5eauYTj%2FeyaC4tU3NjuYJYWC2lEaPvLyCZHCidZu37a9iH%2B0dkStY%2BfjayLFGeCpvJl8Y4tDcSdp6OKcog2DakcXQvea7zkg3YKcrNBlTr1jQ6WHFWldkkvyr9zHddoWDVcj592BKLENWWdprFTb%2F%2BPUxh2cqlWPvhhrqnYdrava%2F5B8Koh9zgaI58mXmzq9pAb9p6zCZUCURdNfgl%2FsTxJZswXssIHjP6%2FxJUx1ndmTZ7tN6916%2Fj3bckkXDxemXnXws3HfpScUCahrDIWqwkRKaRvZgZsbp0P3EsoRV%2Bge5HJRDLdwdb4lqdNVrNF0Tf5FgOU%2FdoSD7ei0Mbp99apYDHTQJDxTXqAbJBdbxIHpHpXXaVrH7fgCwdvIgyti5o7iYlIPjfh5Ai2ySgVbf%2BvPtw%2FzdAm%2FfIQ2mt6H%2FvBwY2R0Ec35tflBLm6B8v6kL5d%2FAwnZLrwAY6pgHzsm%2FfNWZJP2NhJrRM7yepjlibqX39fNbYsvk%2BNZJRmAjwdznxWOIP80OzNGUj6aQZAQFvX9AZvtiMpOEBbhojNubN%2FqsE%2BV7TL8El8oVWcDvnbcjPKp%2F0fOT3hava5mk5ZebVtgZVUS14qQHJ00TmYQK%2BPvSGRuWRF0a0qBBzmnoUYd7Ra2CSv2rcPcrdcSckmM%2Fy7NEthZSpWlPoFDKxN2kQfIwu&X-Amz-Signature=add72a89b1e96f1df04e8e125544c738f5a6f8c60105ddc2e086328ec4bb62be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
