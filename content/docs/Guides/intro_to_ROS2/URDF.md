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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VYC626%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPJHMzgANMs8XzPE61U7%2FqBPPfdM7jIF8eJT4FOFsfUQIhAOLDtQyEIz0jlvfHfLZMVUBPJq32InPB1q5J3LGnk6geKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6Cc%2FoTgo%2Fy9PdWWYq3APdfd46QLt4ZxS0abFt3SbNdBom8cq83EmNsuPfK7Ocp%2F%2Bl2ZMKl4h%2FE44WePmdT84CWJSEb%2FpijBVb%2FR3OfTQ3jAB%2BVKjav6w%2FAQjj4RBgsPhupDtrG%2FSi7VjmXG3Hy32JmeKq9IqRdfzFBw5FteJYX%2FB8ZNh0jdSbKjCdHf%2FHQL%2Fgtmsq837rmhQKrjMQgmZonpOF316jx1pS4h8bsPnnaOQ0v7AU76cot%2Fx4ypw6wRMlLIZa1KEPJZ69keMzxF3wBwEp9t7mrm1y7CBX0aav1kiYmzgi4cpw7iCbkgmJuWuujqfHi6uUk07OSbMucwzuLEF80aUhJD5Kv02dJfjGLKq%2BUZoRip8FiACzR1cSwJ8SKgFFuJHv1pmkoe24NyeuUfFbUzp31bSdUH%2BF2XOyZw7wsZEtYUHNsikC3LskmnUpTPOYRbBoNj6HdSZ02%2FKvrc14R8ZBVX58kgkv2cJPC60tBdNKB6lBIJqkuFTISdzGz0eHnDPvZr5OnfwhFU42X33DIOzGRjJpxC1H0VxloOwfeNCz7tD3QHYSDr9HajsYNOmVAsQFKHQWMNLF9Cxtu%2BOnVRnj0J7u0apPQuZaOvXij5LO5HypkubUggZXjbV%2FSsEbzwinNtDEPTC1ycq%2BBjqkAczWk0hhcCq2vJJWHpUTl29%2Fo4gso4WOspBDnmFQKiEOxyrv1x8ZcOMnNfbxJaosqzur3G8mWbZWHHTp12qVpMcqcpVFbf%2BXO1ZHzA1%2BYg7gTtcaoAdCt1QkCNMQleRPt0TUyMme8vkUhK47bkkhkKmfUtxyubYj26%2F7nIIUDCh3j4xkrdoL8e9OvZJg5vanrzxuvCXPe%2BisQQBRbX1NhXHulSXs&X-Amz-Signature=1f9cb8a22f734ed87a030e8d42f7e3a00acfde67dbd35067a2ad432432214ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VYC626%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPJHMzgANMs8XzPE61U7%2FqBPPfdM7jIF8eJT4FOFsfUQIhAOLDtQyEIz0jlvfHfLZMVUBPJq32InPB1q5J3LGnk6geKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6Cc%2FoTgo%2Fy9PdWWYq3APdfd46QLt4ZxS0abFt3SbNdBom8cq83EmNsuPfK7Ocp%2F%2Bl2ZMKl4h%2FE44WePmdT84CWJSEb%2FpijBVb%2FR3OfTQ3jAB%2BVKjav6w%2FAQjj4RBgsPhupDtrG%2FSi7VjmXG3Hy32JmeKq9IqRdfzFBw5FteJYX%2FB8ZNh0jdSbKjCdHf%2FHQL%2Fgtmsq837rmhQKrjMQgmZonpOF316jx1pS4h8bsPnnaOQ0v7AU76cot%2Fx4ypw6wRMlLIZa1KEPJZ69keMzxF3wBwEp9t7mrm1y7CBX0aav1kiYmzgi4cpw7iCbkgmJuWuujqfHi6uUk07OSbMucwzuLEF80aUhJD5Kv02dJfjGLKq%2BUZoRip8FiACzR1cSwJ8SKgFFuJHv1pmkoe24NyeuUfFbUzp31bSdUH%2BF2XOyZw7wsZEtYUHNsikC3LskmnUpTPOYRbBoNj6HdSZ02%2FKvrc14R8ZBVX58kgkv2cJPC60tBdNKB6lBIJqkuFTISdzGz0eHnDPvZr5OnfwhFU42X33DIOzGRjJpxC1H0VxloOwfeNCz7tD3QHYSDr9HajsYNOmVAsQFKHQWMNLF9Cxtu%2BOnVRnj0J7u0apPQuZaOvXij5LO5HypkubUggZXjbV%2FSsEbzwinNtDEPTC1ycq%2BBjqkAczWk0hhcCq2vJJWHpUTl29%2Fo4gso4WOspBDnmFQKiEOxyrv1x8ZcOMnNfbxJaosqzur3G8mWbZWHHTp12qVpMcqcpVFbf%2BXO1ZHzA1%2BYg7gTtcaoAdCt1QkCNMQleRPt0TUyMme8vkUhK47bkkhkKmfUtxyubYj26%2F7nIIUDCh3j4xkrdoL8e9OvZJg5vanrzxuvCXPe%2BisQQBRbX1NhXHulSXs&X-Amz-Signature=a3d7353a9c1de24d2daff54fa2ab18f8493c12c5e7567cea4ac7ebb41200064a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
