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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BQRSIK4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIDMcV3VBOLqFU0o9cq8g7i1eDNmuGN%2FSkGoDbuJssevgAiAm134I7yZhyFfC0N%2B%2BjyIEehNs3ibv7uTyng5qsLc7tCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM2DqMi1BwMq%2Bv90GIKtwD52q%2F2OWTHezAM6HE53Cbp1GsvOVBhwo159el7SytiJ22bKrQiLkPlBW%2FDT3OcwacyrhEA7wsXYXKC7f6lUXvoQTbbuIpRhG9bYkzbKC%2Byen1RKhUk1sg8R9FPj0zhK7AbwuJwMol%2B74zKiJEsBdXVQ1rD%2FDi0SJ4z%2FsyNo%2B54keCdSCyfXaQyoP3f7Fyk9dJuQzajJre16nfmVPAuVeFBhzogFyQ%2FtP7CITNBVGx%2FwW5CWQWogeo7Y%2BHwbmy5xO0QXMEwGY%2BZCkhGCdDUX6y5P3HfjRE0Stf4hnh1RecYtlleDWicsXLC1CQDbIKAIaB06Nvw2wShVaUni5DukSMfZ9K1vwUhOhjOWBrnPijq8ekjAZ8nyzjn2kRtcRf%2B9yO%2ByGJUnC69ouTxvGp4%2BUUrQflhdBqGR6XEw5YhhRAvjiC7U1Ji0QcoBia8jl%2FxnFsZft4RS1ceXJ9hgmTR5HFoAbVopB5mFmxsNCtJENBzsG4%2BJplgvf4WqYUBoU7%2BryYhQRgFk4%2BcX49M6nJ8DofeEgcAeIY7E5SLbEA9KLWnusgO0zgpEBMndjG5N8MDgJGJva%2FuMUuTphm8banap3khbMt91G%2F36%2FSGz2dfxKdEp9Gohy6tjY6MwLxItgwzZGFwgY6pgGp2xhK5lD83HspC%2F2Ty9uoj1VePwMlbkVjg8P2rOmChIdc4db7IiWVoZF%2FKY1aSjsm6tmrgx8Un3XR32pQ6ei2NsT%2BRgjTitGJQTcz2xU2OxNS%2FDaubh%2BywytEJq0cKrpxc7JVkzpVpLzU2%2Bph6WsAB84vUEidaANpkFlIr9l6C1WpFo3kmIQEtjkO1piTt4bqFkVnA3TzySZyiy1BU9GpZ8%2FLfJqT&X-Amz-Signature=af45fed66ad28357f96f2e151af9a196845069e4d0b1d79248218d4920eaf886&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BQRSIK4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIDMcV3VBOLqFU0o9cq8g7i1eDNmuGN%2FSkGoDbuJssevgAiAm134I7yZhyFfC0N%2B%2BjyIEehNs3ibv7uTyng5qsLc7tCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM2DqMi1BwMq%2Bv90GIKtwD52q%2F2OWTHezAM6HE53Cbp1GsvOVBhwo159el7SytiJ22bKrQiLkPlBW%2FDT3OcwacyrhEA7wsXYXKC7f6lUXvoQTbbuIpRhG9bYkzbKC%2Byen1RKhUk1sg8R9FPj0zhK7AbwuJwMol%2B74zKiJEsBdXVQ1rD%2FDi0SJ4z%2FsyNo%2B54keCdSCyfXaQyoP3f7Fyk9dJuQzajJre16nfmVPAuVeFBhzogFyQ%2FtP7CITNBVGx%2FwW5CWQWogeo7Y%2BHwbmy5xO0QXMEwGY%2BZCkhGCdDUX6y5P3HfjRE0Stf4hnh1RecYtlleDWicsXLC1CQDbIKAIaB06Nvw2wShVaUni5DukSMfZ9K1vwUhOhjOWBrnPijq8ekjAZ8nyzjn2kRtcRf%2B9yO%2ByGJUnC69ouTxvGp4%2BUUrQflhdBqGR6XEw5YhhRAvjiC7U1Ji0QcoBia8jl%2FxnFsZft4RS1ceXJ9hgmTR5HFoAbVopB5mFmxsNCtJENBzsG4%2BJplgvf4WqYUBoU7%2BryYhQRgFk4%2BcX49M6nJ8DofeEgcAeIY7E5SLbEA9KLWnusgO0zgpEBMndjG5N8MDgJGJva%2FuMUuTphm8banap3khbMt91G%2F36%2FSGz2dfxKdEp9Gohy6tjY6MwLxItgwzZGFwgY6pgGp2xhK5lD83HspC%2F2Ty9uoj1VePwMlbkVjg8P2rOmChIdc4db7IiWVoZF%2FKY1aSjsm6tmrgx8Un3XR32pQ6ei2NsT%2BRgjTitGJQTcz2xU2OxNS%2FDaubh%2BywytEJq0cKrpxc7JVkzpVpLzU2%2Bph6WsAB84vUEidaANpkFlIr9l6C1WpFo3kmIQEtjkO1piTt4bqFkVnA3TzySZyiy1BU9GpZ8%2FLfJqT&X-Amz-Signature=4f18cff4cb470cf07a22ebd539251dbd6c467858c884c5fc9a2ed22a9e8be1ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
