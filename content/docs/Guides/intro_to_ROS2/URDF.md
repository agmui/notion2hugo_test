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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AO3KUI4%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBewRaF0Xa4HG2p9AB31xvsR%2FYxbZuKrrsOrqniqOSN8AiEAoUI%2BmcNYzIwM64kc9RRCqslGPWmEJViPlVJefnvyixAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDp54kq91DKIHJFj%2BCrcA1R4vnnE1O0VnsY9AAlV3fVZH6XFzOvnTvuYuIlBCsFXMrNqncOFUhEArH8LFf3M7TP1j3Dl1N3dTv1oRPGMtT3qvn822cV8t8GHk29ZreMDUPMZVahWEo81UCUheIwl%2Fj3ln5YS5d9i96WEUyUdJulaH4Mnj2J1eybJUkSq1nq8kqQlMTM1%2FlWND5eFjGCupCvt%2BIqKG8PQa3hvotL5R59cMYggWwDPs06LBZgwNyIIdeqx74CDKKAFFejsaepSY6hU1yI5XBHeDt9tgK%2F4tRwVqmt9fKa2pGArRU1jTX%2BB8vAdIdWngc%2BhqAmyr1vDNK%2FXtAzwk8bI2lQab%2BoUnA0KJ6IWdpzboTEDNsNz2oC%2Fzjqaz5MwNYaKsPiJKiLUd2g5vrEIxXcDDANssXAaMngE1rDESNKyEw6fT9LdyXKf1mLXpPpMysYJ4AXQ8Gh931QTUZRtei0eciP%2F8ad%2F4MhxJfrD6nCLfko%2FA8mw%2B1LPW4hh7G0FeUfoUqWkiZFSFLEy1E7D4MXiX0hssGU3XhANEsfAlm%2FRCl3XuCS%2F6gM%2BGNinNcymQr%2BP23UhvdJjNp%2BWmh34CK6HSyXcTXVHb%2Fbp%2FK5t14BRnuSPNn%2BmtbqXR9ouPEdl99XgXf9vMO75stEGOqUBGU%2FsmjfmdT6MkTYQmoXhuaFg0mfvv6frcPXQr1Eny%2BQd5AwC6%2B9hJeLX%2FZ5IxRDnRn4eTRjB5fpFiMwCvThiqV8h%2FaTVf2Pvu7s4nVF27G05qxQlW4bZ2dTE9C70sFhKb%2BfqG8xvhWmAtXUsLZhfbsuXz78nLfMIzD5lx0PyT%2BEgPu1AENPIl3m5dym1SYG58V4XntUA6m0DOBzmJsOnugAxHkRz&X-Amz-Signature=637621adfb57dbb273d33bc87457fb409fe0983e97ffaf6efa7924addfc7cf3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AO3KUI4%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBewRaF0Xa4HG2p9AB31xvsR%2FYxbZuKrrsOrqniqOSN8AiEAoUI%2BmcNYzIwM64kc9RRCqslGPWmEJViPlVJefnvyixAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDp54kq91DKIHJFj%2BCrcA1R4vnnE1O0VnsY9AAlV3fVZH6XFzOvnTvuYuIlBCsFXMrNqncOFUhEArH8LFf3M7TP1j3Dl1N3dTv1oRPGMtT3qvn822cV8t8GHk29ZreMDUPMZVahWEo81UCUheIwl%2Fj3ln5YS5d9i96WEUyUdJulaH4Mnj2J1eybJUkSq1nq8kqQlMTM1%2FlWND5eFjGCupCvt%2BIqKG8PQa3hvotL5R59cMYggWwDPs06LBZgwNyIIdeqx74CDKKAFFejsaepSY6hU1yI5XBHeDt9tgK%2F4tRwVqmt9fKa2pGArRU1jTX%2BB8vAdIdWngc%2BhqAmyr1vDNK%2FXtAzwk8bI2lQab%2BoUnA0KJ6IWdpzboTEDNsNz2oC%2Fzjqaz5MwNYaKsPiJKiLUd2g5vrEIxXcDDANssXAaMngE1rDESNKyEw6fT9LdyXKf1mLXpPpMysYJ4AXQ8Gh931QTUZRtei0eciP%2F8ad%2F4MhxJfrD6nCLfko%2FA8mw%2B1LPW4hh7G0FeUfoUqWkiZFSFLEy1E7D4MXiX0hssGU3XhANEsfAlm%2FRCl3XuCS%2F6gM%2BGNinNcymQr%2BP23UhvdJjNp%2BWmh34CK6HSyXcTXVHb%2Fbp%2FK5t14BRnuSPNn%2BmtbqXR9ouPEdl99XgXf9vMO75stEGOqUBGU%2FsmjfmdT6MkTYQmoXhuaFg0mfvv6frcPXQr1Eny%2BQd5AwC6%2B9hJeLX%2FZ5IxRDnRn4eTRjB5fpFiMwCvThiqV8h%2FaTVf2Pvu7s4nVF27G05qxQlW4bZ2dTE9C70sFhKb%2BfqG8xvhWmAtXUsLZhfbsuXz78nLfMIzD5lx0PyT%2BEgPu1AENPIl3m5dym1SYG58V4XntUA6m0DOBzmJsOnugAxHkRz&X-Amz-Signature=dd9c5afffce33996bb76286ea4ebe5e0714ddd835d899f5bcb658d7c4e25b4e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
