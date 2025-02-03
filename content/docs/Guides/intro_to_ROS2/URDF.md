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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627TF3H65%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzm%2BjP03mUyRm6UClPWp%2BvXLgQzuL8SydrIjpFnSytywIgGc095HoxQz%2FQcZZaO6Jdif2vmQAybjMNXjvngTuXRNAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHXHf%2BZkOUUVZ4VM9SrcA07Cnnv231KETIkstg%2FTJcaDUMlHyWWcqOmE%2B1dR9MLjWH9Roin8c%2BduIjbKl7W9hJVxW17R73SgapgyV%2Fs4BwU5PaO01jKOf8fj0VrBWocyUvm5ojUCLr5w%2BUmUnnCtPWrIbwARbVzkyZ%2FB4DS4JV%2BEx7Zkey9YDC7PDHK2seb7hqpXTSC6hP27M1iv0xUKHLP%2BUUR3b5FluYEIR3bZYHpWb0DiieTafpdzymEIkj0YvPXmsDV3tVkuFbkIAXCJJ6mTHZMZ3zQfVcUWEPzcUGYjl%2B1ClOD5QYq91TGotFU33NW%2BPXte6nc3DszNfSdWlQsbb57SwVTu%2Fj06CYdHxsB0aBBpxYReHVtbziutVusZwbi90aE1wNykZsn02c%2Fnsds2rPXuP4y%2Ba5mMPvmbqqEM3ZG0urkGKUGucI3ndVwDVtyMjxP439YE7pPfYjiRdkx5GeumKfbWPFkG75bVX45c87%2Bayv2HayPXmQxgMdZpYr34MAwBpsR0q0iWfNRKUAQFwpDySpO79CWUTjbvCW0wT6iw5vSPi1Go05Ir%2F0NjeBVtgHucGA7rux4jKiHcI07N%2FBdnz7fExVAcNIl35zBvlK4Js87ERT3Y6p%2FC7B1eu6KZUH3O9l1bvxzPMI%2Fygr0GOqUBx1fYhUrCe1IQgngqsvNzx5JFBzSKbEML0p5vNc%2B91Ou5CJU1q3UJkA5ATSl4ob9Pv9ON7HqlWyK0My9WxtxnO5a6xxgS8Vbr6vOA5v%2BNpFJwK89zmZvMoeGFmIGfVOBlUidFQ4Dw%2F0i9dlmH9cOfzs6G0Lr3o14v9B7gily8JWNN8f9%2FE2JKg8q8qR0V8aCeXsX2%2F6nGBtzY42Llu%2B1XDZXssblR&X-Amz-Signature=1a245813ad4e20f9f181d407e1bd703964452b6636758c237c35924894d23e11&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627TF3H65%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzm%2BjP03mUyRm6UClPWp%2BvXLgQzuL8SydrIjpFnSytywIgGc095HoxQz%2FQcZZaO6Jdif2vmQAybjMNXjvngTuXRNAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHXHf%2BZkOUUVZ4VM9SrcA07Cnnv231KETIkstg%2FTJcaDUMlHyWWcqOmE%2B1dR9MLjWH9Roin8c%2BduIjbKl7W9hJVxW17R73SgapgyV%2Fs4BwU5PaO01jKOf8fj0VrBWocyUvm5ojUCLr5w%2BUmUnnCtPWrIbwARbVzkyZ%2FB4DS4JV%2BEx7Zkey9YDC7PDHK2seb7hqpXTSC6hP27M1iv0xUKHLP%2BUUR3b5FluYEIR3bZYHpWb0DiieTafpdzymEIkj0YvPXmsDV3tVkuFbkIAXCJJ6mTHZMZ3zQfVcUWEPzcUGYjl%2B1ClOD5QYq91TGotFU33NW%2BPXte6nc3DszNfSdWlQsbb57SwVTu%2Fj06CYdHxsB0aBBpxYReHVtbziutVusZwbi90aE1wNykZsn02c%2Fnsds2rPXuP4y%2Ba5mMPvmbqqEM3ZG0urkGKUGucI3ndVwDVtyMjxP439YE7pPfYjiRdkx5GeumKfbWPFkG75bVX45c87%2Bayv2HayPXmQxgMdZpYr34MAwBpsR0q0iWfNRKUAQFwpDySpO79CWUTjbvCW0wT6iw5vSPi1Go05Ir%2F0NjeBVtgHucGA7rux4jKiHcI07N%2FBdnz7fExVAcNIl35zBvlK4Js87ERT3Y6p%2FC7B1eu6KZUH3O9l1bvxzPMI%2Fygr0GOqUBx1fYhUrCe1IQgngqsvNzx5JFBzSKbEML0p5vNc%2B91Ou5CJU1q3UJkA5ATSl4ob9Pv9ON7HqlWyK0My9WxtxnO5a6xxgS8Vbr6vOA5v%2BNpFJwK89zmZvMoeGFmIGfVOBlUidFQ4Dw%2F0i9dlmH9cOfzs6G0Lr3o14v9B7gily8JWNN8f9%2FE2JKg8q8qR0V8aCeXsX2%2F6nGBtzY42Llu%2B1XDZXssblR&X-Amz-Signature=0979b494d4221846108676a68e2d4a1152b64cab21d8a1b62a07429b2aa1d1b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
