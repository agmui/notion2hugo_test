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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T32XZQ53%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcKGu3VJE3gR%2BOBWBS2hfet2hC13RHfcDxC0e8aTs1EAiAg0tJFa5elRQLP1vXvURCDnmj7QNSWecp7nYAvmQpQ%2Bir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMOWFleU245FAZwPguKtwDN4NT%2Fznb3jPj%2BnsKjrfJe2%2BpEIk9Viaj2fF%2FwG42E6IJ2coidHDNgCtKyZ5xSATGR6f16nU2KqsfkcAxPu8u4iNIDEji8aF03WIOhtpSkKYwbKIJSAGLVwwDHSpxZc4hxVBla56yu51lr46vLzI6zz76fjwxMsR95Q86sO7nPtCJUzTOF5bpRHV5gfJATPI9Vf1AsMnERlcun1CXD06koaEH9fMrkfcHP0HKTPQxO2nqNFSAKkKdrDG8SYG6TI9SmuGjiuFtFhyqkn1Ffutx6f06v8SA5t8Mg5qJwV%2FvinHPDse%2FaEQf9uGU345lQLfhvx57zqZ0xDrM59zBGYt8CSccUiEYyeKwC1o4urdAu%2FODSsRva%2FPjR0XMHkYibj5kkQIm3vwYTyWLpUx1mmN3tQl5GetxuwZOFVq5wqnF5TsECKOBv4z4nL%2B%2F5GaD8JTMAzbBGAk80cUy03aXZRAnguVCpTyc6OYQ%2BBR8BK4Wb7oaxPypkfL%2BRqMfkb1JNNsswPtf6UnEBcY4YLzTYG%2FqhYkknwDaTcYr0ztVgFuJt7zSvObSXFz08n7uhHkQzYq7JX64OVBUEj9ZgQi07JVfdAlItgCKpmK1X2xK%2BwNoe68t5H52nUV%2F%2FdVQXzsw0o%2BgwQY6pgG9EtkY60evUSYQbIaV1nLu1YvexzsUkU%2Fa0X77%2FJgcvOSw2Ty2VldZrmjD2DNIv%2BtLTtBfKxSOG6uBmzU%2BLMOxY1c3sKlQrzeYxNiOsxFncDljjlDycy4vvz20iDwfnXreOjMwujyc8TyLv9rNfEFL4HXRdrM5i7lRSrURvc3PZzouyg3nP0O7yEAu3rq46W%2FPrZpBQmR4aWBl8twD0X6RY9QlXsE6&X-Amz-Signature=3be4427520bad4c7e084bf0d4f56a8b4c609c0ff6cbab23bb63c7867fc1dab9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T32XZQ53%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcKGu3VJE3gR%2BOBWBS2hfet2hC13RHfcDxC0e8aTs1EAiAg0tJFa5elRQLP1vXvURCDnmj7QNSWecp7nYAvmQpQ%2Bir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMOWFleU245FAZwPguKtwDN4NT%2Fznb3jPj%2BnsKjrfJe2%2BpEIk9Viaj2fF%2FwG42E6IJ2coidHDNgCtKyZ5xSATGR6f16nU2KqsfkcAxPu8u4iNIDEji8aF03WIOhtpSkKYwbKIJSAGLVwwDHSpxZc4hxVBla56yu51lr46vLzI6zz76fjwxMsR95Q86sO7nPtCJUzTOF5bpRHV5gfJATPI9Vf1AsMnERlcun1CXD06koaEH9fMrkfcHP0HKTPQxO2nqNFSAKkKdrDG8SYG6TI9SmuGjiuFtFhyqkn1Ffutx6f06v8SA5t8Mg5qJwV%2FvinHPDse%2FaEQf9uGU345lQLfhvx57zqZ0xDrM59zBGYt8CSccUiEYyeKwC1o4urdAu%2FODSsRva%2FPjR0XMHkYibj5kkQIm3vwYTyWLpUx1mmN3tQl5GetxuwZOFVq5wqnF5TsECKOBv4z4nL%2B%2F5GaD8JTMAzbBGAk80cUy03aXZRAnguVCpTyc6OYQ%2BBR8BK4Wb7oaxPypkfL%2BRqMfkb1JNNsswPtf6UnEBcY4YLzTYG%2FqhYkknwDaTcYr0ztVgFuJt7zSvObSXFz08n7uhHkQzYq7JX64OVBUEj9ZgQi07JVfdAlItgCKpmK1X2xK%2BwNoe68t5H52nUV%2F%2FdVQXzsw0o%2BgwQY6pgG9EtkY60evUSYQbIaV1nLu1YvexzsUkU%2Fa0X77%2FJgcvOSw2Ty2VldZrmjD2DNIv%2BtLTtBfKxSOG6uBmzU%2BLMOxY1c3sKlQrzeYxNiOsxFncDljjlDycy4vvz20iDwfnXreOjMwujyc8TyLv9rNfEFL4HXRdrM5i7lRSrURvc3PZzouyg3nP0O7yEAu3rq46W%2FPrZpBQmR4aWBl8twD0X6RY9QlXsE6&X-Amz-Signature=0ee07d05a642270236f3a19f9202eafce86b1078190ffd86c7d6c7ba7b845bf7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
