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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ROLQKY%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjNAazcuePpr4ULCV83qwpJ%2FOuMYxNHLYwdRT9yt5rBAIhAMa%2FEo9%2B7DouXXVrLYefBLx%2FWOaAiPBCJcbkbd8QRDYjKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz34oy6VY6lqEV4AXoq3AO4TKS377mfhleAg%2Bdl%2FfcGI3byBFt8kbMpG47U0mCD9rtYEXxlitqZjggSLyFwli1yzbmWhtqIzNtLF9PrRkpN8NewRIDLH5JjkZHBha3bs2Js%2F4oE0amHQl5vgoqzBpcFjA3bSfUYW7RRM%2BSgkxK5PXG%2BrNQnaiWutzrlwUzae%2FbvajApU5Ycf2MvuikaiWMYVC3YGLPQKj1qGKc6xxI1SXvOUO9Ry4c1kH%2BcFNW29j3unh1dsVityYm2eZYePRBSqfUTPYppB4L4nhgbzvZKevJifxrcby%2FdREfbx3VAHcNARrkCGQwB9kISjIp7FtUmyBV71GnLvO2T%2BOO2YJdg9TvSts0p%2Fj0VZcz6TjXP5MT1xOfJ5HeVojRSTJdwNTtokbXUCLj4nNAIA1zsv6FBvNuFNdCrdZL3EhFMSKG2n7%2F3NBilABLgoPxN3zKv8KXZAYuzG5CvyUJ6GGPIKpso73AQmg3sfcE3UZzcm8AMIsfVZr5DHruyNgOlaR9B3cI6%2BUtFCat5Xsgg%2FbS1v%2BELEsOVY26z7SxR%2BT3ig7IigxyznDRQlWu%2BQX1un1lEA4c4J5QZM2EOwY%2FGaTUPZle4CFVvVb2xuIqUFNgSe9BuSqmE9%2B3dXFPs6Y%2B81TCAld29BjqkAapgFjVEKRJZxmfPSj9Tp%2B96YNaNaPp1dgMNE4eJ%2BuzU0vjrFd9y6Bk47oCSf%2B8dISM6x1wjMcmfZCQAcqERLlHndCn%2BPhdiMpDG0p1c%2FoJkkvxLFlCh%2FrifWuAuxS5SkCIIaWMVTqpb4dPVzaczT7kqY28YfMj5BQ4JAPUmz9R8kCdKEgNy7dSmVtUVhd5BXLouz31jIh2OlSVsUdSBr1ew45go&X-Amz-Signature=593ec3e8348471cc23c7578132768e853638a111ca61a7f4706569620082a982&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ROLQKY%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjNAazcuePpr4ULCV83qwpJ%2FOuMYxNHLYwdRT9yt5rBAIhAMa%2FEo9%2B7DouXXVrLYefBLx%2FWOaAiPBCJcbkbd8QRDYjKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz34oy6VY6lqEV4AXoq3AO4TKS377mfhleAg%2Bdl%2FfcGI3byBFt8kbMpG47U0mCD9rtYEXxlitqZjggSLyFwli1yzbmWhtqIzNtLF9PrRkpN8NewRIDLH5JjkZHBha3bs2Js%2F4oE0amHQl5vgoqzBpcFjA3bSfUYW7RRM%2BSgkxK5PXG%2BrNQnaiWutzrlwUzae%2FbvajApU5Ycf2MvuikaiWMYVC3YGLPQKj1qGKc6xxI1SXvOUO9Ry4c1kH%2BcFNW29j3unh1dsVityYm2eZYePRBSqfUTPYppB4L4nhgbzvZKevJifxrcby%2FdREfbx3VAHcNARrkCGQwB9kISjIp7FtUmyBV71GnLvO2T%2BOO2YJdg9TvSts0p%2Fj0VZcz6TjXP5MT1xOfJ5HeVojRSTJdwNTtokbXUCLj4nNAIA1zsv6FBvNuFNdCrdZL3EhFMSKG2n7%2F3NBilABLgoPxN3zKv8KXZAYuzG5CvyUJ6GGPIKpso73AQmg3sfcE3UZzcm8AMIsfVZr5DHruyNgOlaR9B3cI6%2BUtFCat5Xsgg%2FbS1v%2BELEsOVY26z7SxR%2BT3ig7IigxyznDRQlWu%2BQX1un1lEA4c4J5QZM2EOwY%2FGaTUPZle4CFVvVb2xuIqUFNgSe9BuSqmE9%2B3dXFPs6Y%2B81TCAld29BjqkAapgFjVEKRJZxmfPSj9Tp%2B96YNaNaPp1dgMNE4eJ%2BuzU0vjrFd9y6Bk47oCSf%2B8dISM6x1wjMcmfZCQAcqERLlHndCn%2BPhdiMpDG0p1c%2FoJkkvxLFlCh%2FrifWuAuxS5SkCIIaWMVTqpb4dPVzaczT7kqY28YfMj5BQ4JAPUmz9R8kCdKEgNy7dSmVtUVhd5BXLouz31jIh2OlSVsUdSBr1ew45go&X-Amz-Signature=9554a4164de35ef1ce0fc49ec5cb4c79668bcbeca4cd2bf2d325544d958954c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
