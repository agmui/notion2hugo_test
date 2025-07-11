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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJLEFZGZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCie1I04A5U439sYHQYW2vhotQa5ZfmDds334h0%2FA7PQgIhALHVNabA1V8yCD9FDLqJp6r24gd982U8kAIvJRwy%2BmYeKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyShOMV6B0uqghparMq3AOiMQwUBiVc3Cc0j9UVTy2Vwe1Ka7PWxtINJoJuURUb764x2hOBtqASVXx34P0BvZ1%2FXB5rHj8ukCqJwHWW5OvkRYOgwOdMgHAkN8h7FQpngiTvNp2TgZeMvMVnG%2Bns2ghO%2F4XIeRU5rDJzZHmmsjVlqsy4dtMrG%2BA%2BP2143hBBoARFUV%2BPg7cKg3HfLKmDH0ubECv147L8wOvCuVNQ0NBK5fc8CkOt4FKhwqJqgCgO9RiM93mAdzPyoU9KU3JKsQdlTvNp55dLjsapJiZxK3dsvn39UT2EUKUmURi4TkYYa4bhP%2BmMxv3%2Fd87BaoW3UVZtcpSVBtqglD5ZLBPuRE1gSaTCLFbr7GAMDXGr%2FRlWdGIVOp%2Fg3VwnmT4mO2PzCW4LhnBAJD2mgHayyLj8FQqIL3EYvSoAnaHBjFWUNCcXzY%2FwGqqujlnSMs5R4lzgWJP0Rldh0oWrs%2FIqVbf4I0mUBDUO7MA5msiupX8yUFj8nMIDgp4fEnkjqNYzGTizka3TTY3T0vPEnCe59aGqbJsHWvXcbZ8vowV59ud3WsE%2BtP3KRq7cqyJ5CImbd7y8vq0IXnHquN%2BYB5bUhWVzSpzw%2FgOKkiV6sT9iALIuxjjkZRKFjdq%2Blss7n9Je3zCHhMbDBjqkASBhQVTa4K4YbCoT%2BGpTRHsMLkikXD2xvIrbFdkipV3I7CexhxkjwhB16xFhkWrlzYyexEzJSj%2B9Q82FWsz7UdPAD9J%2BML91d9R3VgX4j8%2FZyw3auzmsR8viVjrTqj%2BD0wzxwhxqtyDVC4IOzBqt%2FWVAyatCweUc1wzJVIWXtk8aw%2Fo7UqQeQ4PCgRWGTm0kBxcUkTPIqNoeNYmJ0%2BVKsU2qd8V3&X-Amz-Signature=af2ef58ee1eb6b518608c72b3fe90ff62f0ac7d1598d9e09d513a2daa20b1af7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJLEFZGZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCie1I04A5U439sYHQYW2vhotQa5ZfmDds334h0%2FA7PQgIhALHVNabA1V8yCD9FDLqJp6r24gd982U8kAIvJRwy%2BmYeKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyShOMV6B0uqghparMq3AOiMQwUBiVc3Cc0j9UVTy2Vwe1Ka7PWxtINJoJuURUb764x2hOBtqASVXx34P0BvZ1%2FXB5rHj8ukCqJwHWW5OvkRYOgwOdMgHAkN8h7FQpngiTvNp2TgZeMvMVnG%2Bns2ghO%2F4XIeRU5rDJzZHmmsjVlqsy4dtMrG%2BA%2BP2143hBBoARFUV%2BPg7cKg3HfLKmDH0ubECv147L8wOvCuVNQ0NBK5fc8CkOt4FKhwqJqgCgO9RiM93mAdzPyoU9KU3JKsQdlTvNp55dLjsapJiZxK3dsvn39UT2EUKUmURi4TkYYa4bhP%2BmMxv3%2Fd87BaoW3UVZtcpSVBtqglD5ZLBPuRE1gSaTCLFbr7GAMDXGr%2FRlWdGIVOp%2Fg3VwnmT4mO2PzCW4LhnBAJD2mgHayyLj8FQqIL3EYvSoAnaHBjFWUNCcXzY%2FwGqqujlnSMs5R4lzgWJP0Rldh0oWrs%2FIqVbf4I0mUBDUO7MA5msiupX8yUFj8nMIDgp4fEnkjqNYzGTizka3TTY3T0vPEnCe59aGqbJsHWvXcbZ8vowV59ud3WsE%2BtP3KRq7cqyJ5CImbd7y8vq0IXnHquN%2BYB5bUhWVzSpzw%2FgOKkiV6sT9iALIuxjjkZRKFjdq%2Blss7n9Je3zCHhMbDBjqkASBhQVTa4K4YbCoT%2BGpTRHsMLkikXD2xvIrbFdkipV3I7CexhxkjwhB16xFhkWrlzYyexEzJSj%2B9Q82FWsz7UdPAD9J%2BML91d9R3VgX4j8%2FZyw3auzmsR8viVjrTqj%2BD0wzxwhxqtyDVC4IOzBqt%2FWVAyatCweUc1wzJVIWXtk8aw%2Fo7UqQeQ4PCgRWGTm0kBxcUkTPIqNoeNYmJ0%2BVKsU2qd8V3&X-Amz-Signature=121e837fb6defc9eb16d200c3c2e9740fa992bde29cb4efb307f828ca9663499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
