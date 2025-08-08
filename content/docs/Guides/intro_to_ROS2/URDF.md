---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSJGAN3L%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCU5CAhER8W69K0woetSoe1UgMgvt%2B48SLK4AjemNw9mQIgPybaj%2BRJxduQ0aB8dr54%2Fa3frjdtdfHO3WjNAkLam1oqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0GKLLwCxXjm79cpCrcA%2Ft3xcxkAfJrSTVyQG1fsmU8XdxLNDmljCApo27VTLt6Rei3ZkBKAVuVxz9H4dis%2FBbJlrKyXK%2BoZc%2BkTPkwn5%2BMv4KE5b1W3lv42XBzf2MRw9nQZVM7D3orZhWDEUbrZRuBvNyyrw19MP0nlAlf8eNDc%2Fcb5mYloxamBGt4Wg9%2BZjXkdugGlXLzbpstfdOdPfgliPJLQvdMilyUYebsjzJugSXxwiOhUx4lYEl1LYDwPPjGlGqID1gIUBjyznM9NAiqIBhekXmJV7wl%2BwcP0skntABBypTG3GLyoyLAbpvT%2B%2BRPQ3wRSWYA%2FFCqzg5vRxPZXcf1DVcpVhebFtuM3YTUygyBQw41A9%2BKYL57qHkSy98aDLZ2hN6wRGeZuFnH6hK1Sv7xnS1C8aAfhIY6SwtCwbQqd3Q%2B79TlhGD4uHUDPYuEgiASv7jUOwVC58lzicobLs7yV6vqNIlC9kpNPb%2F0ln073svJt3q4ylK9ns4l%2BV3B0BPcrko3o3r0Yy4QDo%2FbazvGgZDrY1oFY%2FHp2ND%2FgK%2B4Ob%2BJYsKdBoyE2Y1ppNbrYFjlb3%2BC6Ea1V2lBxuC9c30JgW5MXvaKal%2FJPaiWeguRLJc6UfabG2btfRP3DGe1Oxt5LhzU30rKMLSf1sQGOqUBYI02DqcC4iKsIdf35%2BiS6lw86zg14RNNc6hIOgOG5duoircumw6NFlMBZf3ra5XP6exa8Esj5Q8vCWDQQfDAROTznj87FRjceHE6BUXmQz3wC%2F9nI07h5mkCDOSraEQLEnhhJNBFVLJMbu1%2Fm3TVcIrlscWmlw01MYNTX11de1JS4oN0fChyGr3Yh5wu8r2xk%2BO95VpM1NIwlGRRPWAlzRXNJyI%2B&X-Amz-Signature=aa0c852d5d494f011987a03a32f66181436b8a914b0e17f36852347bd6ffb6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSJGAN3L%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCU5CAhER8W69K0woetSoe1UgMgvt%2B48SLK4AjemNw9mQIgPybaj%2BRJxduQ0aB8dr54%2Fa3frjdtdfHO3WjNAkLam1oqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0GKLLwCxXjm79cpCrcA%2Ft3xcxkAfJrSTVyQG1fsmU8XdxLNDmljCApo27VTLt6Rei3ZkBKAVuVxz9H4dis%2FBbJlrKyXK%2BoZc%2BkTPkwn5%2BMv4KE5b1W3lv42XBzf2MRw9nQZVM7D3orZhWDEUbrZRuBvNyyrw19MP0nlAlf8eNDc%2Fcb5mYloxamBGt4Wg9%2BZjXkdugGlXLzbpstfdOdPfgliPJLQvdMilyUYebsjzJugSXxwiOhUx4lYEl1LYDwPPjGlGqID1gIUBjyznM9NAiqIBhekXmJV7wl%2BwcP0skntABBypTG3GLyoyLAbpvT%2B%2BRPQ3wRSWYA%2FFCqzg5vRxPZXcf1DVcpVhebFtuM3YTUygyBQw41A9%2BKYL57qHkSy98aDLZ2hN6wRGeZuFnH6hK1Sv7xnS1C8aAfhIY6SwtCwbQqd3Q%2B79TlhGD4uHUDPYuEgiASv7jUOwVC58lzicobLs7yV6vqNIlC9kpNPb%2F0ln073svJt3q4ylK9ns4l%2BV3B0BPcrko3o3r0Yy4QDo%2FbazvGgZDrY1oFY%2FHp2ND%2FgK%2B4Ob%2BJYsKdBoyE2Y1ppNbrYFjlb3%2BC6Ea1V2lBxuC9c30JgW5MXvaKal%2FJPaiWeguRLJc6UfabG2btfRP3DGe1Oxt5LhzU30rKMLSf1sQGOqUBYI02DqcC4iKsIdf35%2BiS6lw86zg14RNNc6hIOgOG5duoircumw6NFlMBZf3ra5XP6exa8Esj5Q8vCWDQQfDAROTznj87FRjceHE6BUXmQz3wC%2F9nI07h5mkCDOSraEQLEnhhJNBFVLJMbu1%2Fm3TVcIrlscWmlw01MYNTX11de1JS4oN0fChyGr3Yh5wu8r2xk%2BO95VpM1NIwlGRRPWAlzRXNJyI%2B&X-Amz-Signature=9c1350fff089a5d31c7164f6850f6360b8821d524903790a6758d62a89201fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
