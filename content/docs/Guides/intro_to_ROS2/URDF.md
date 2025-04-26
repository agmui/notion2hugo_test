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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FXSHIOH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSpsJGdX0lp%2FnChVF2wPDvm2CKO5n1977AyZNodHtoMAiAMwd1frAx6oDGKufw3BOZnn9RSm5pT9sOb97n7b8kSbSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMcmobIKebYt3qf0wzKtwDuDKU3AJQ9eGm2JDY1MS4eijm2ryayPgSn7ECeXAkr%2B7D9Fg%2F2j7bzi1Psminx3R5Pg9W6%2B3lWpeRY2WDIhlPv4ukdtsPkAcUvPILN6DTPYtqyiKSuPPI7SJGobhByeQhfLICGtQoUnhsDjGHRJ3KO8G8ftGygyLF9Vxpke58tQWe65zymuYYq8NHviuiBs23Q0f%2BeMhQVke19BYVYgfvA%2FtyqAPAMTEgiJCEZ0RAUQypD%2FpcSMPqBDKnDjqIbCafO2YgIt3JSj2t74crF6hgKW823Oc84jbod60tfg2VJeB%2BgI6ELMZM6OwfV5XEp980wVBn6rTaFy8Fr1GzQI8sv5McntOGCvPXzLaOUk1rOFfgSLyeKZyzW8%2Bh8HxvkEF1XwQt7OuGI8afSGCdA7jpSmgvzha0sYy7fiotP0VPAovL6EkpWvo6WwjOyYOhrLLhDZQGoAUQbo2U07XCboLW0uSol%2FJaKvrrADXvu%2F3aEhtYrY6kcYZuXH7s431UURVje%2Bc7%2FWSfqa3IEBtPCcNaRCWeDRdgtr1KYYGBSlng2jJPXWV9SuCLJfe9byTCWbFrE4gyBVteUpVAnRJ6PtJeGMj26vkENtj4SEYsA4CJzsUe202BxWkUxmv8IiEwgL2wwAY6pgFt1WlrUfava1Pj9k%2Fkhg7GRVBdQ0lFQXuGwJc1UaBeiHyIDgooLg21rKsbaCXRXEZ6MSjIy%2FGlr0U5znihxORTnPFDw2hTXCVmbkqlVbGDbbwXybw8LM6P%2BDZEPb0UqkkiVjg3CQ8cGvtkUoqiSTJavaEirHxoc2taOdQJdsi4U2vhbEYXg0mHp2xJZ6S4lSgkOSDOeXqLPu1bUtujSi8QqvGd0EiT&X-Amz-Signature=82e54e5ebe1940d017e77c484798d4fe558500ff401b904f6031c0e51b029f98&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FXSHIOH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSpsJGdX0lp%2FnChVF2wPDvm2CKO5n1977AyZNodHtoMAiAMwd1frAx6oDGKufw3BOZnn9RSm5pT9sOb97n7b8kSbSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMcmobIKebYt3qf0wzKtwDuDKU3AJQ9eGm2JDY1MS4eijm2ryayPgSn7ECeXAkr%2B7D9Fg%2F2j7bzi1Psminx3R5Pg9W6%2B3lWpeRY2WDIhlPv4ukdtsPkAcUvPILN6DTPYtqyiKSuPPI7SJGobhByeQhfLICGtQoUnhsDjGHRJ3KO8G8ftGygyLF9Vxpke58tQWe65zymuYYq8NHviuiBs23Q0f%2BeMhQVke19BYVYgfvA%2FtyqAPAMTEgiJCEZ0RAUQypD%2FpcSMPqBDKnDjqIbCafO2YgIt3JSj2t74crF6hgKW823Oc84jbod60tfg2VJeB%2BgI6ELMZM6OwfV5XEp980wVBn6rTaFy8Fr1GzQI8sv5McntOGCvPXzLaOUk1rOFfgSLyeKZyzW8%2Bh8HxvkEF1XwQt7OuGI8afSGCdA7jpSmgvzha0sYy7fiotP0VPAovL6EkpWvo6WwjOyYOhrLLhDZQGoAUQbo2U07XCboLW0uSol%2FJaKvrrADXvu%2F3aEhtYrY6kcYZuXH7s431UURVje%2Bc7%2FWSfqa3IEBtPCcNaRCWeDRdgtr1KYYGBSlng2jJPXWV9SuCLJfe9byTCWbFrE4gyBVteUpVAnRJ6PtJeGMj26vkENtj4SEYsA4CJzsUe202BxWkUxmv8IiEwgL2wwAY6pgFt1WlrUfava1Pj9k%2Fkhg7GRVBdQ0lFQXuGwJc1UaBeiHyIDgooLg21rKsbaCXRXEZ6MSjIy%2FGlr0U5znihxORTnPFDw2hTXCVmbkqlVbGDbbwXybw8LM6P%2BDZEPb0UqkkiVjg3CQ8cGvtkUoqiSTJavaEirHxoc2taOdQJdsi4U2vhbEYXg0mHp2xJZ6S4lSgkOSDOeXqLPu1bUtujSi8QqvGd0EiT&X-Amz-Signature=54a89e0f9b80b1a396f74a690a612177e503a6210fd329a1de1957e6d2614968&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
