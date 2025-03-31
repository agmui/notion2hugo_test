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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AHUCA7H%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIELeN15CcuoqTnBPKT%2FfNXVtb1R3DiDoiv73IjTv4QidAiBSxzQfzFP4goJSNh56TmvPk1wj%2FGuNDKupE1LbEzc1tiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn0HRHkppicsSfCDRKtwDaruy51R%2F%2F%2BduSXYRV%2BuXhZdLcxtzT2U9YCvl4nN%2BwpE3O0KVVXU7myQzsC56CI2DgJuLNpeRDOXSH%2Fh21dSpqndcSdrbBY4Kg3ViLr53F%2FEg%2Ft38UPA2ox4vfXWFvYcIeo35%2BZ7WpH8R9U4Jj%2FKLVlo6F%2FpWfuxIsfSXdJ8RvPlVHRXnpBBgYdbnqniGPZKqsttqAb5DMoa7wh%2BYO8cOyrsGtYmkulTqz4IacsRv8eChbhcDgKQHYmlKLC9UkwMKTGyijTgQK6ahMCRToIFDKEqYaheVTM9xOYCmmuchNxSvFGINSbqkFVtCO5XJevM1p8fXPbsIC7bKLRfUQLANOfQNBHDCtN43uOVwgoSYGt7lVFk93KwfJ%2FmZ6%2B2gqv%2BejoJ61aFoSSr4IOcBYelQDY8%2Bf5cRzPqMvhQf2ml%2B6vbBRoJ%2Fgm9gMOLljyGHSIS1pJvQoNQJgrplUi8DePTbCM8ovPMDLsfdZhLpLcfd5N6O%2FuqM3GBlHLE8NAKws6zPvIjoTcokvAOj2fp2ujIyaw2xko26lh3q39ESTgiZKQuUC612p2c%2BUrpdvgm9LIkyQeW520BVq4iiK0NvZ%2FBvZKqevqm3WTFy5b9YUlF7aLvdLSoOQ47Qx3qPmvowsLirvwY6pgElw%2Be4rDVLTuEG%2Fp4V%2Bjp3Lx0O5vrRIZ%2BguXy3lbgtW9HLeeIjOuzxVtYvhSQjtcnsKW%2FVxCqjQMNftvv4a%2FDuqyRXqSmYlvVZYuAtgl%2Bcp3c%2BMmT4AiSZDZ2YQ4Urt1wjVdcFue6JpVEodswNtDidmURbXhcnXZGNwq3keyiHEhniSDGDIOfb9MATTpHqVDTafPgywGXv5UksdSQW8AIDQPTA73GS&X-Amz-Signature=7073f7d15045a065b3384c8ef83ebf0a9f2205e089a7e63e78437882bbb37b84&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AHUCA7H%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIELeN15CcuoqTnBPKT%2FfNXVtb1R3DiDoiv73IjTv4QidAiBSxzQfzFP4goJSNh56TmvPk1wj%2FGuNDKupE1LbEzc1tiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn0HRHkppicsSfCDRKtwDaruy51R%2F%2F%2BduSXYRV%2BuXhZdLcxtzT2U9YCvl4nN%2BwpE3O0KVVXU7myQzsC56CI2DgJuLNpeRDOXSH%2Fh21dSpqndcSdrbBY4Kg3ViLr53F%2FEg%2Ft38UPA2ox4vfXWFvYcIeo35%2BZ7WpH8R9U4Jj%2FKLVlo6F%2FpWfuxIsfSXdJ8RvPlVHRXnpBBgYdbnqniGPZKqsttqAb5DMoa7wh%2BYO8cOyrsGtYmkulTqz4IacsRv8eChbhcDgKQHYmlKLC9UkwMKTGyijTgQK6ahMCRToIFDKEqYaheVTM9xOYCmmuchNxSvFGINSbqkFVtCO5XJevM1p8fXPbsIC7bKLRfUQLANOfQNBHDCtN43uOVwgoSYGt7lVFk93KwfJ%2FmZ6%2B2gqv%2BejoJ61aFoSSr4IOcBYelQDY8%2Bf5cRzPqMvhQf2ml%2B6vbBRoJ%2Fgm9gMOLljyGHSIS1pJvQoNQJgrplUi8DePTbCM8ovPMDLsfdZhLpLcfd5N6O%2FuqM3GBlHLE8NAKws6zPvIjoTcokvAOj2fp2ujIyaw2xko26lh3q39ESTgiZKQuUC612p2c%2BUrpdvgm9LIkyQeW520BVq4iiK0NvZ%2FBvZKqevqm3WTFy5b9YUlF7aLvdLSoOQ47Qx3qPmvowsLirvwY6pgElw%2Be4rDVLTuEG%2Fp4V%2Bjp3Lx0O5vrRIZ%2BguXy3lbgtW9HLeeIjOuzxVtYvhSQjtcnsKW%2FVxCqjQMNftvv4a%2FDuqyRXqSmYlvVZYuAtgl%2Bcp3c%2BMmT4AiSZDZ2YQ4Urt1wjVdcFue6JpVEodswNtDidmURbXhcnXZGNwq3keyiHEhniSDGDIOfb9MATTpHqVDTafPgywGXv5UksdSQW8AIDQPTA73GS&X-Amz-Signature=e6aff5cbe29e83479c372f51ca7e7379e26ff09cd4cf5738c0f80a82cab0e6c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
