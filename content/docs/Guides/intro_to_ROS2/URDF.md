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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBAZGJ25%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHtqyjOGVeIPJ9g3a3KQoeIRGHp1RRcYiMwsJFUL9%2BUAiBGjvMUeyq10u0Dm25aciWVcldGflb4AeW%2BPEiVL7d4rCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9L9rvkm0Jq3KcAC0KtwDH2zqYv2r5kb2vxNU13CSzMgPsOzSFTVwumwEK%2BTiD0HM7EPNJEym5K%2BahhGQzKQSJvEUJDndhIHBPib2akmPXrQ%2BOLla78PWz6NtxBtFgIcROMEHMItJNZeB00jtAN40UzHkzDDQWyKNSM6ZQlY2L8gxeOpoXTgarHQLVH2VagMqkQdqb6pBPgxVv8px7Nypr6U0hz7X9eL2dBszu4KOp9XHMj%2FZDNfSOIy6Jky4Cn11OufE9o%2FC1XOuTKhTYIjYNLrBH3pR3P0jj%2Fyk2OPyBIsQK8uP8ho3WBo3IHIeV5EYM%2Flvlz43bTho7BnAiKpbyfkKxtUTH12n%2FGiiNpWtF%2FfcchmDFvOZiVcyoU1Gkw%2Bdan3bIzwJOO8uXMq64U58EUjedOQLvaMm0l7PyWeOPq1sWsjfQv7zdTdVJqC90eziASzmy2MsTEe%2BHqgZnXAkMdeWthoCiYXVQuq59L9dL5k7cyZ%2BgVm%2FsnXuPyStSfz33TNtXo%2FGJ8GRi%2BrwD7ubu%2FEMTBQ7M8pvigEjo0LOqqX5%2BmT8ez6TVoRKjUV92gYvP96DszYv3BKs4l01bW7oQLs8jKMvLdebFmAT14QTWUDSFQMsfvUK3Vb%2F%2BSajPNIczrUz72cR47YybBww8sTswwY6pgE9n6vitNDjSYeXussq85EkUOr9sFKcJq6j9qBkavZ5ZvdEeh1Tv2Us39lEve27%2B7fBjOqVUAZ7bPtJOrmWjm7Iw4aFNvTgo8kFvyqwrcTjF0au4H5LNfq8aKx2wVdksnVgt%2Bib%2BvoeTcPXGsuwppWSEvzr0Skf3u%2FIf3oPX%2FE%2Bm%2BCT%2BpNfz8w8FXVsyiwwgmvHv%2FxR3PO4UIN0hh0KkSvQQFjgJFM3&X-Amz-Signature=28e40362d6d9cf9fcc6f8a05a05c61dc19cc3a876c157cbcc2273c5fa6a22be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBAZGJ25%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHtqyjOGVeIPJ9g3a3KQoeIRGHp1RRcYiMwsJFUL9%2BUAiBGjvMUeyq10u0Dm25aciWVcldGflb4AeW%2BPEiVL7d4rCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9L9rvkm0Jq3KcAC0KtwDH2zqYv2r5kb2vxNU13CSzMgPsOzSFTVwumwEK%2BTiD0HM7EPNJEym5K%2BahhGQzKQSJvEUJDndhIHBPib2akmPXrQ%2BOLla78PWz6NtxBtFgIcROMEHMItJNZeB00jtAN40UzHkzDDQWyKNSM6ZQlY2L8gxeOpoXTgarHQLVH2VagMqkQdqb6pBPgxVv8px7Nypr6U0hz7X9eL2dBszu4KOp9XHMj%2FZDNfSOIy6Jky4Cn11OufE9o%2FC1XOuTKhTYIjYNLrBH3pR3P0jj%2Fyk2OPyBIsQK8uP8ho3WBo3IHIeV5EYM%2Flvlz43bTho7BnAiKpbyfkKxtUTH12n%2FGiiNpWtF%2FfcchmDFvOZiVcyoU1Gkw%2Bdan3bIzwJOO8uXMq64U58EUjedOQLvaMm0l7PyWeOPq1sWsjfQv7zdTdVJqC90eziASzmy2MsTEe%2BHqgZnXAkMdeWthoCiYXVQuq59L9dL5k7cyZ%2BgVm%2FsnXuPyStSfz33TNtXo%2FGJ8GRi%2BrwD7ubu%2FEMTBQ7M8pvigEjo0LOqqX5%2BmT8ez6TVoRKjUV92gYvP96DszYv3BKs4l01bW7oQLs8jKMvLdebFmAT14QTWUDSFQMsfvUK3Vb%2F%2BSajPNIczrUz72cR47YybBww8sTswwY6pgE9n6vitNDjSYeXussq85EkUOr9sFKcJq6j9qBkavZ5ZvdEeh1Tv2Us39lEve27%2B7fBjOqVUAZ7bPtJOrmWjm7Iw4aFNvTgo8kFvyqwrcTjF0au4H5LNfq8aKx2wVdksnVgt%2Bib%2BvoeTcPXGsuwppWSEvzr0Skf3u%2FIf3oPX%2FE%2Bm%2BCT%2BpNfz8w8FXVsyiwwgmvHv%2FxR3PO4UIN0hh0KkSvQQFjgJFM3&X-Amz-Signature=bfaf36753103e08e0093865cf0d1fb000550a8bd36d36aa8e66a61443a3909e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
