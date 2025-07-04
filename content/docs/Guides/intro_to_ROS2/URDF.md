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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6SVWGN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQC3mOQ9E0E6JTcsvhEA440QorfHKJu3fPbV9dncm%2BICRQIhAL1BG2%2BKlzuzZ%2Fwg9GGaeir%2Bpbu06VY7eIC3JyICAzfhKv8DCCQQABoMNjM3NDIzMTgzODA1IgzVe7VZR647O%2FTfJqkq3AM6SX6qgkL2Z%2F38NgfCVE0D6N487flHQ%2FwV8Weda9IFbcV7gUcCBorYUfAwu%2BLubXNPe1dpqJT6doLGwg0LnurQVvx2I%2BgRkAvXCFXc4aLGUv%2BvGr2GoJiBkPs9GCjuwQPSdPur1Cx%2F4Z1nC7wUQBocFUI8tEN0y0tDuxlvLsOkFYVr0rVbj%2Ffn6%2BIWKTfMWIRnhHIxikYo4xjKKC%2Bk%2Blx2RYMrDJ0a%2BXYrQVlgFX%2F6pKISyryclQnsiVx%2FmimHRTi%2BS8y1hPUuBmNt4luervRr3AbTQdeOYqPBlWEtYrDXnuaG8D7pc08JP04qwHp4RVtmQN7LYqJ0pbdjEuAWORePL%2Be4RPMua%2BnR1mhF2eIKU3hV4xgN1Ax5mAvYgNJjO8JFJxneg8CFJecfZ9vFnlklsIRJ%2BOm5yYvLr3O%2BEn4ITzwYq5Els0IPZS7UN5eaoJ8olvhYWKBe2YIBNOb5QP8mCuj9oZdQ898as6NMir8lc%2FWnU57A2FegA23VCBKrIXrvglOBWDI0nap5yqiBsbtJHZuj3o3QaqU3d3hgQkykBBVtuNp69HJ7SprkXg%2FwBdChR602UfGgZd2Y%2BKyHYbzUXjhrIM9W5BKUfz0vSulKDShpocdskASYBeAjTTDzjZ3DBjqkAUDdllswYt8cGIu659M06%2FoQlrW2xOkTIf0qiKLsCI1bph4f5AHy7cKYGnf%2BoFkezZcCkT6CCcvYGNYwjrD1yPM2pB0eeYWoz%2BqWQMec3BWeBmILe%2BSpDmOkGIX%2FEF6iD62AsAPlYmyrH%2FFQfVZAgypFJ4jT5IU467gFybZMFYt9kswxWn%2F8%2FEBHeXYOViFiay5HgF3Mc2asVp5be83lFNUkWtK%2F&X-Amz-Signature=df121b5dff34055507e6311693c29add7dafbc78682447bab3c7346ff547d6c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6SVWGN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQC3mOQ9E0E6JTcsvhEA440QorfHKJu3fPbV9dncm%2BICRQIhAL1BG2%2BKlzuzZ%2Fwg9GGaeir%2Bpbu06VY7eIC3JyICAzfhKv8DCCQQABoMNjM3NDIzMTgzODA1IgzVe7VZR647O%2FTfJqkq3AM6SX6qgkL2Z%2F38NgfCVE0D6N487flHQ%2FwV8Weda9IFbcV7gUcCBorYUfAwu%2BLubXNPe1dpqJT6doLGwg0LnurQVvx2I%2BgRkAvXCFXc4aLGUv%2BvGr2GoJiBkPs9GCjuwQPSdPur1Cx%2F4Z1nC7wUQBocFUI8tEN0y0tDuxlvLsOkFYVr0rVbj%2Ffn6%2BIWKTfMWIRnhHIxikYo4xjKKC%2Bk%2Blx2RYMrDJ0a%2BXYrQVlgFX%2F6pKISyryclQnsiVx%2FmimHRTi%2BS8y1hPUuBmNt4luervRr3AbTQdeOYqPBlWEtYrDXnuaG8D7pc08JP04qwHp4RVtmQN7LYqJ0pbdjEuAWORePL%2Be4RPMua%2BnR1mhF2eIKU3hV4xgN1Ax5mAvYgNJjO8JFJxneg8CFJecfZ9vFnlklsIRJ%2BOm5yYvLr3O%2BEn4ITzwYq5Els0IPZS7UN5eaoJ8olvhYWKBe2YIBNOb5QP8mCuj9oZdQ898as6NMir8lc%2FWnU57A2FegA23VCBKrIXrvglOBWDI0nap5yqiBsbtJHZuj3o3QaqU3d3hgQkykBBVtuNp69HJ7SprkXg%2FwBdChR602UfGgZd2Y%2BKyHYbzUXjhrIM9W5BKUfz0vSulKDShpocdskASYBeAjTTDzjZ3DBjqkAUDdllswYt8cGIu659M06%2FoQlrW2xOkTIf0qiKLsCI1bph4f5AHy7cKYGnf%2BoFkezZcCkT6CCcvYGNYwjrD1yPM2pB0eeYWoz%2BqWQMec3BWeBmILe%2BSpDmOkGIX%2FEF6iD62AsAPlYmyrH%2FFQfVZAgypFJ4jT5IU467gFybZMFYt9kswxWn%2F8%2FEBHeXYOViFiay5HgF3Mc2asVp5be83lFNUkWtK%2F&X-Amz-Signature=63ea151503078713cea81d64e7a9fc17a45c069e0a13c5e55ac17d3ce9f400e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
