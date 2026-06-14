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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFRDEMSP%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHx3cyvMT5jAzFIJs8YBtrvrdpwufFFWAWcisB5lj2g%2BAiEA4c%2B4LbqTtaigTy0tJQGonA1yXCV2bn%2Fq4un3%2Bc6cYncq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDP6BUy3WO2MY1Gvx9yrcA80aJltma91gcJFVALJezYZR2RJua0yvekt6tVvz2eFbmGzuurydHDsQFuO5%2BsHEKVKW3Lk8iXymB%2FSGTHM1MMxhsBfCppgJIPt%2FOMprsb45meUgRXlJ49%2FJC4dG8xdUt5nC9ORvhvLR0g2NtyxmdCTK2ulmvfjTpeSC%2F37FRYJc1CTaJkieAkc653fa4ZBLPkYyBQON%2B%2BG0bCiJt%2B7%2BRdBkx%2BbKvNS4XXU8fTbmpFAb%2B0QWG%2FxwqTih%2FBf3CVkuPw5hngE12%2BuQQ7JbsyKnwSq%2F15o754MBvDQPaCkr0010SnMeLqHjoyIFz%2BWD%2FXmGVjz1kTyMwNjviRi7S9ezRK3PKsXooXd5BwFTLygBXNAu6KJO3D5a%2FFCGAUhVXRS20%2BcQdE3CAROmDyNN0SVYuUa2QMuFo2%2F7qNn7Q4b%2FRrpc13AqpVs0giNxi%2B%2B%2B%2FazRDaJUWMbQAk3%2F7mBGE2m6wGbns3EpEGDFCTEVhPOqetOx65oVC2i16b6CZhYawktbxezhjHHq23YZ6uWtYLe3ch9e%2Fv4Fl9jt0AA0Ts8PcHdsjY385Kj8PUjdzfUarQi6j2QCzqDLWDmjHr02oJADXtrbISf%2BarK8neY1tS4Tk05Ldwzt72QqRk4OExIuMMqeuNEGOqUBxK26Lxv7ezm7d4sbp6knoxbYWEgAxhVz1BG5INRPLaAEhKtEQC6bn4fC8XwlSVVqU13mDbVE6l9wI25K%2BRtX0MtR7f5ZQi51TCyHbLThkyMYmQPXeegMF6S2Tu3PClNSe%2FiI0VkC0FlDZb7cA5HjdH%2BxoGNF%2F74Qs%2BKSOeqqese55EdiWghT7jYp965wbOrcK6TalU1tynJiD5qbCyOYLu9cRGi2&X-Amz-Signature=851972881be0d4df9c8f390a8f4503f265a95989a67063c1836bd47d18470a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFRDEMSP%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHx3cyvMT5jAzFIJs8YBtrvrdpwufFFWAWcisB5lj2g%2BAiEA4c%2B4LbqTtaigTy0tJQGonA1yXCV2bn%2Fq4un3%2Bc6cYncq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDP6BUy3WO2MY1Gvx9yrcA80aJltma91gcJFVALJezYZR2RJua0yvekt6tVvz2eFbmGzuurydHDsQFuO5%2BsHEKVKW3Lk8iXymB%2FSGTHM1MMxhsBfCppgJIPt%2FOMprsb45meUgRXlJ49%2FJC4dG8xdUt5nC9ORvhvLR0g2NtyxmdCTK2ulmvfjTpeSC%2F37FRYJc1CTaJkieAkc653fa4ZBLPkYyBQON%2B%2BG0bCiJt%2B7%2BRdBkx%2BbKvNS4XXU8fTbmpFAb%2B0QWG%2FxwqTih%2FBf3CVkuPw5hngE12%2BuQQ7JbsyKnwSq%2F15o754MBvDQPaCkr0010SnMeLqHjoyIFz%2BWD%2FXmGVjz1kTyMwNjviRi7S9ezRK3PKsXooXd5BwFTLygBXNAu6KJO3D5a%2FFCGAUhVXRS20%2BcQdE3CAROmDyNN0SVYuUa2QMuFo2%2F7qNn7Q4b%2FRrpc13AqpVs0giNxi%2B%2B%2B%2FazRDaJUWMbQAk3%2F7mBGE2m6wGbns3EpEGDFCTEVhPOqetOx65oVC2i16b6CZhYawktbxezhjHHq23YZ6uWtYLe3ch9e%2Fv4Fl9jt0AA0Ts8PcHdsjY385Kj8PUjdzfUarQi6j2QCzqDLWDmjHr02oJADXtrbISf%2BarK8neY1tS4Tk05Ldwzt72QqRk4OExIuMMqeuNEGOqUBxK26Lxv7ezm7d4sbp6knoxbYWEgAxhVz1BG5INRPLaAEhKtEQC6bn4fC8XwlSVVqU13mDbVE6l9wI25K%2BRtX0MtR7f5ZQi51TCyHbLThkyMYmQPXeegMF6S2Tu3PClNSe%2FiI0VkC0FlDZb7cA5HjdH%2BxoGNF%2F74Qs%2BKSOeqqese55EdiWghT7jYp965wbOrcK6TalU1tynJiD5qbCyOYLu9cRGi2&X-Amz-Signature=aeb6db94fb8133423586c67662a554ce143f9bd85f42ca7b56bdf2e54e88aa49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
