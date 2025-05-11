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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y73NY5NI%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFp1%2BNRtY3iibJvSXX8H2MZ1cHJxMcd7ciD2XPtAsWOzAiAkXo4hkDMm5vyFEYo6mlpdMCK4wKGJC5zTcHxSrZRHAyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpBnqz7l5mVpfHHuQKtwDDjcMs2EDRBm8TpIn9w4tmIVZpWBIFbV43%2BAi%2FnZW%2BkiBWexjNdzkSUsh%2B04gq8brytACEq5sopmYl%2FeecbetO1nyVEY%2BBJzyjjn7c%2BaP4cUSmc2Md0K1st%2Ftd7e7xjQe4NCHI%2BtSkqfaNGsr2Ek5aY2SqYuE%2BZuvZh1vk1lk1x1MOrCaBKOAD95mSNpJggqo29DVwWXD%2FLSIMMZI7zJExvi3JynVhhLbOXEFFlG4Y4BsWGx3%2BXipF6Q817bb%2B6OE%2FO7nqIkMW%2ByNDt8k8n6e8mSqay87XzvcG2X%2FI1PUHuSRJdTfzW6jcnL5c%2BTGLWHv9KWUdH2t9J5WLBdB%2FgWA7WF9UZjmSNLtwiQWW2lenLj0pqmZsnwNW3W1udYuJdPxctUaUevGIBDUBRDV4pgZx7WNQrLECviHMzsQrOY6RprPjnSJb8GF30%2FYwcHTI1m7wXVGr2i1FMyMcpD8p0vWWVQqnC%2Bgcg6gBS%2FjpnmBK81sFJUL%2F7lxSgget%2FgJ3722hHLjYbZY59lOZ%2BK%2FI7kFidNyB%2FvlaKo0tYOcBTK7Avi7i0Zs2DCZjUhkvecFBXwT1ZRBCKvFWDnjB5CcAVxyF4cP1MsiR1vcHA2LWvZi6Nw3Q%2B9GHYIIfxe8yDUwkNP%2FwAY6pgHpjpkdbfoNSZ%2By3zljrZior18PJPw6S96JOgxXIg8VEvrMn0En2PKNaTHIPtgNpybXNac%2Fd8mjiuoy3XVkD%2FkAPVKd8Tgg1KGt4f5gBPMtGj0R%2FA6J0emTsRSyZSdvEzAjBBn13OgOrPX%2BefQZOahAj49zmZ%2BcYdNUkn4Z2p3CrscTbjw%2FmOCzjsa47lGxtlgrusgCE7nSKeYgqwhpUTHu%2BwouwRTm&X-Amz-Signature=ae8c98cd31f9ab36a856ff0ae9b8b4b7c8ca2163d50e0ab72bf606d491773f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y73NY5NI%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFp1%2BNRtY3iibJvSXX8H2MZ1cHJxMcd7ciD2XPtAsWOzAiAkXo4hkDMm5vyFEYo6mlpdMCK4wKGJC5zTcHxSrZRHAyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpBnqz7l5mVpfHHuQKtwDDjcMs2EDRBm8TpIn9w4tmIVZpWBIFbV43%2BAi%2FnZW%2BkiBWexjNdzkSUsh%2B04gq8brytACEq5sopmYl%2FeecbetO1nyVEY%2BBJzyjjn7c%2BaP4cUSmc2Md0K1st%2Ftd7e7xjQe4NCHI%2BtSkqfaNGsr2Ek5aY2SqYuE%2BZuvZh1vk1lk1x1MOrCaBKOAD95mSNpJggqo29DVwWXD%2FLSIMMZI7zJExvi3JynVhhLbOXEFFlG4Y4BsWGx3%2BXipF6Q817bb%2B6OE%2FO7nqIkMW%2ByNDt8k8n6e8mSqay87XzvcG2X%2FI1PUHuSRJdTfzW6jcnL5c%2BTGLWHv9KWUdH2t9J5WLBdB%2FgWA7WF9UZjmSNLtwiQWW2lenLj0pqmZsnwNW3W1udYuJdPxctUaUevGIBDUBRDV4pgZx7WNQrLECviHMzsQrOY6RprPjnSJb8GF30%2FYwcHTI1m7wXVGr2i1FMyMcpD8p0vWWVQqnC%2Bgcg6gBS%2FjpnmBK81sFJUL%2F7lxSgget%2FgJ3722hHLjYbZY59lOZ%2BK%2FI7kFidNyB%2FvlaKo0tYOcBTK7Avi7i0Zs2DCZjUhkvecFBXwT1ZRBCKvFWDnjB5CcAVxyF4cP1MsiR1vcHA2LWvZi6Nw3Q%2B9GHYIIfxe8yDUwkNP%2FwAY6pgHpjpkdbfoNSZ%2By3zljrZior18PJPw6S96JOgxXIg8VEvrMn0En2PKNaTHIPtgNpybXNac%2Fd8mjiuoy3XVkD%2FkAPVKd8Tgg1KGt4f5gBPMtGj0R%2FA6J0emTsRSyZSdvEzAjBBn13OgOrPX%2BefQZOahAj49zmZ%2BcYdNUkn4Z2p3CrscTbjw%2FmOCzjsa47lGxtlgrusgCE7nSKeYgqwhpUTHu%2BwouwRTm&X-Amz-Signature=1fc6069338e75f71538a1a1b368eb143738b572c307e30025ba40cb2a1e1e272&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
