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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVRV3P77%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDWdDeI5zFishxpQ3ldYQDucGqo%2FLE0KxxULc3gqV6nAiEAn0NTwlfgLYcNTJLKboyuL2JtVJ27zB%2BAkkrwJWses8cq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBwoyXImaLUNIdYnISrcA2wggsG%2FxmEstCN4O97hvyYxlG%2FJbx80VbZFurTrXFG91eer513NYVGhrTP9NKoRCcOHb3OToebxiXddXl6Y46Box1%2Bvn%2Bl0y%2BiP5XW3O%2BmlZ8an8VPHC%2BUxntuDci9en1TwBVF3vxvJgXoOd04AgPg08%2FWUfr0%2FkRH%2FELzBVQhenQ1evdtfKp10jv3dgOS948k%2FwAOw4G9pdkxVh08D3cjgTHEBIt%2BxAgv2P4AX9igdEIuzwrfLz%2Fqchn0SU6y4VnLRHlJ67fgx4T6Ym7trJrLKmfmME37gjFc4byZWrchsKiFwyQjKchr2qDyr8nh1XTO0OajC0RK9J3jb1BnPl43eSeGNX5yt0LEzM0341d9VGA67R99MGPBCCa%2Fq4gAMVsD%2BJiPnqrA0HqcU7%2FuQyORMM1VqxGs0oaDk7WX7b%2FEbJdgSmXAsFDnFmmBej8qAxdWOa2DjGDPCp9DHU1outqsLYCY8H5RbqzxpA7sq02YGYKkGUMk75BJghZdgvi1F7%2BwS0XdHKIQizoDNs00cc4CKEdhqwDK14mrk5rfmfKQqc%2BxXJGAEe1LUhteXbX5TN3jir2jtq1x6mM09bNKy9dYZNKvAFZ%2B4alcwZbA6XIYUFb2o%2F%2BekD%2B7EKsrGMIDZpL4GOqUBPG1peXE70wuNBLBDqDPRh7dI4t4G6flZ2%2BhsqnaVs2qT%2BjNZt2ckV2gdHH2dpLpgK8Xd3r6d%2BKpuKSqF6jIellyoQ4YjDvYAiLpTf5Qiahrz3WQgADVOmRLuei1Uh%2BKO%2B%2FiyluL3whLSOk3kHm2fi0hwC7pWdJMkbIj%2FUr1xMAe7NY0WJC%2F%2FRNhHGf%2FB19sdmYVTL4wTQv8m3Vlw4MNtjwo2058h&X-Amz-Signature=f526d18583cd8f4e7bc6ce715f81fb8b25baa75f5c0001f5731af81a9fd4170d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVRV3P77%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDWdDeI5zFishxpQ3ldYQDucGqo%2FLE0KxxULc3gqV6nAiEAn0NTwlfgLYcNTJLKboyuL2JtVJ27zB%2BAkkrwJWses8cq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBwoyXImaLUNIdYnISrcA2wggsG%2FxmEstCN4O97hvyYxlG%2FJbx80VbZFurTrXFG91eer513NYVGhrTP9NKoRCcOHb3OToebxiXddXl6Y46Box1%2Bvn%2Bl0y%2BiP5XW3O%2BmlZ8an8VPHC%2BUxntuDci9en1TwBVF3vxvJgXoOd04AgPg08%2FWUfr0%2FkRH%2FELzBVQhenQ1evdtfKp10jv3dgOS948k%2FwAOw4G9pdkxVh08D3cjgTHEBIt%2BxAgv2P4AX9igdEIuzwrfLz%2Fqchn0SU6y4VnLRHlJ67fgx4T6Ym7trJrLKmfmME37gjFc4byZWrchsKiFwyQjKchr2qDyr8nh1XTO0OajC0RK9J3jb1BnPl43eSeGNX5yt0LEzM0341d9VGA67R99MGPBCCa%2Fq4gAMVsD%2BJiPnqrA0HqcU7%2FuQyORMM1VqxGs0oaDk7WX7b%2FEbJdgSmXAsFDnFmmBej8qAxdWOa2DjGDPCp9DHU1outqsLYCY8H5RbqzxpA7sq02YGYKkGUMk75BJghZdgvi1F7%2BwS0XdHKIQizoDNs00cc4CKEdhqwDK14mrk5rfmfKQqc%2BxXJGAEe1LUhteXbX5TN3jir2jtq1x6mM09bNKy9dYZNKvAFZ%2B4alcwZbA6XIYUFb2o%2F%2BekD%2B7EKsrGMIDZpL4GOqUBPG1peXE70wuNBLBDqDPRh7dI4t4G6flZ2%2BhsqnaVs2qT%2BjNZt2ckV2gdHH2dpLpgK8Xd3r6d%2BKpuKSqF6jIellyoQ4YjDvYAiLpTf5Qiahrz3WQgADVOmRLuei1Uh%2BKO%2B%2FiyluL3whLSOk3kHm2fi0hwC7pWdJMkbIj%2FUr1xMAe7NY0WJC%2F%2FRNhHGf%2FB19sdmYVTL4wTQv8m3Vlw4MNtjwo2058h&X-Amz-Signature=dc02d31abf2d0005f34988507b0a4f297cc6a5c87c203dd8f9a0485a666e2261&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
