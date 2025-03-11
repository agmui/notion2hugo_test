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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LF63IGZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDAySLv3VOmBILuRI%2FAhsEENebPQuu%2FFPRzAC7rCCdmYQIhALeB%2FIHxgw%2FkU19jKuEVeD4ZkSN0zUIO9DzqjH6V6v1PKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmcBbjEsD2G9d8mGsq3APWQ5d5fNfZSFpqovWDCEkIYrmsC5ZqZHbSj5DI3HQAyUToTvtoBbCVYMKI%2FyWmB1nCIKfGe7BgWYsEBFmxMZs8auaHR9W4IF%2BxKiMCHpXF%2F44o3aeugDGj2tv68UH2lqKjhsFkoUf73kv9GTlxAbDJyVFDuG3Rsppa0TAtwA9PS719G0l5xJc7EFnufSrfJfa52zgxC%2Fnl%2F2ULi1jxSFyd0GoUIc8hNZG2Eg9hikRRyoIouM5RF8w6BNpsbvYdLfNkmmPxQjEA6kNbudJzu%2B5%2Br%2FlJl2hjHLunhCKdP0wzU8mtPyB4yS%2B2NFHvr47wXXJLrBEJzADqXMOygzc2RkBxD7mtQ1jSR9qqxjK83XaC%2BgOtPSoPxE6jaXnxYEYmtC8vqn8I6Nt%2BnIsuFhSCZYq0P3g7FzvcWsv1ZE3F0ZkiAjNNrrUOCdU2T9D8qGxwmLcFNB9bWy5Q8%2FZYCWdignMzsj9ogv%2BVoRs2rWOvF8nuApnxD6we0wGDouG5R%2BeyRs50GeYddEXi%2FZugNzLswOmCLSdBh61tWsjwNxsI2sRcijRLBnIiZILFgRv91J2dMx7mu34XHhH6UjbAKyxBiHAOojUsrR8HcIX2pmsp%2FxxryYRKQmyprtYd0K52dTCp0L6%2BBjqkAZzEfmH5NbzQ%2Bv36JF7nS%2BwVZtPxuwhQQpq84ac3GDwHsVrXUhWZoZGGUDXCa35WsHPEclEeIOB3w6qOhA8I8s5u9DjhfdoSXiT%2FzNOVafKC5qE22H1yBddkIBO6ICodHlrp0gOeuWizvxNT2wNg6zlISVpHvqf2ToQCGK1Thkzzds7SmMxWEzER5fDpU8C41JBcFXnbtyH84hUhOcCgsUato8fS&X-Amz-Signature=a9fbfe42411cdfce167db725e325a38b1d91512b9c704798b62709e1226a9a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LF63IGZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDAySLv3VOmBILuRI%2FAhsEENebPQuu%2FFPRzAC7rCCdmYQIhALeB%2FIHxgw%2FkU19jKuEVeD4ZkSN0zUIO9DzqjH6V6v1PKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmcBbjEsD2G9d8mGsq3APWQ5d5fNfZSFpqovWDCEkIYrmsC5ZqZHbSj5DI3HQAyUToTvtoBbCVYMKI%2FyWmB1nCIKfGe7BgWYsEBFmxMZs8auaHR9W4IF%2BxKiMCHpXF%2F44o3aeugDGj2tv68UH2lqKjhsFkoUf73kv9GTlxAbDJyVFDuG3Rsppa0TAtwA9PS719G0l5xJc7EFnufSrfJfa52zgxC%2Fnl%2F2ULi1jxSFyd0GoUIc8hNZG2Eg9hikRRyoIouM5RF8w6BNpsbvYdLfNkmmPxQjEA6kNbudJzu%2B5%2Br%2FlJl2hjHLunhCKdP0wzU8mtPyB4yS%2B2NFHvr47wXXJLrBEJzADqXMOygzc2RkBxD7mtQ1jSR9qqxjK83XaC%2BgOtPSoPxE6jaXnxYEYmtC8vqn8I6Nt%2BnIsuFhSCZYq0P3g7FzvcWsv1ZE3F0ZkiAjNNrrUOCdU2T9D8qGxwmLcFNB9bWy5Q8%2FZYCWdignMzsj9ogv%2BVoRs2rWOvF8nuApnxD6we0wGDouG5R%2BeyRs50GeYddEXi%2FZugNzLswOmCLSdBh61tWsjwNxsI2sRcijRLBnIiZILFgRv91J2dMx7mu34XHhH6UjbAKyxBiHAOojUsrR8HcIX2pmsp%2FxxryYRKQmyprtYd0K52dTCp0L6%2BBjqkAZzEfmH5NbzQ%2Bv36JF7nS%2BwVZtPxuwhQQpq84ac3GDwHsVrXUhWZoZGGUDXCa35WsHPEclEeIOB3w6qOhA8I8s5u9DjhfdoSXiT%2FzNOVafKC5qE22H1yBddkIBO6ICodHlrp0gOeuWizvxNT2wNg6zlISVpHvqf2ToQCGK1Thkzzds7SmMxWEzER5fDpU8C41JBcFXnbtyH84hUhOcCgsUato8fS&X-Amz-Signature=334a6c702fcbaf76562021f9204b1f23ae6a6f259fc5b7b8b7cdfb1b8139392f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
