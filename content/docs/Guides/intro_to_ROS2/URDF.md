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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZEC7SG6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIHokTR9zPoKWZZh2hRrvyagADXXvJyGHV1dpzmyd%2FkRjAiEA68minPS7UoCL%2FfuvD%2FWxvliQWryp%2Fdly21OUIzbhqvoq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDC7zzsNpsgSl8u5GYCrcA3hqFB%2F8QmCQIfFyB8XW38E0QHDZGaXbddOpPhkg03S4Qw44LTv8C8EXop4rXSFAVS6K%2F2%2FQaTfWTsaz6NUAEBcmxTyHO7G14YXpJChXGJo%2BBEXGdQ%2FXU2F%2BK0YPpGrhs99bLVNTFEQspaYb5pSMWZKXEhfd4J471Jy%2BlidRmeDc56RwpwzmK1oeP54JrGifIaEW85oyVbvZe722NhjTKukGJJebjEKDh0rHDHyBOjeR%2FUcAPqmm3WmLRAF3cNbPS7N780rgOGsjC4TdjJZiQcUUHwGcpXLMIvs9goWgcClpKKTZJFGXln7yz9EwY%2B8hjfifijnjhVMl%2BMtTabEsX%2F2R7J68Gq38zpRQT89D9SyEj%2FfBQIDbiEHJ3jd75nZo6zWAmFUVbkARKJo2QDo21OijDmkAaDrmqzPTcvBWOMkmka1swqGK7zwA%2BIbAcwP7B%2Ftz8iDPYVBtrC%2BH1udi3LWbkjFSXCaO79w42qbmh6Yhx3aNk%2Bmrg7CpMcL3EPAQjGcPTzqGunY4uowvuveDVjQW2brArVleGMxfCXh7q1jKsQiJlo93zHxiiuQLCZf4BwgupdTV%2BX67Pu5klko31lWb3RSQQuuBfs2JrP3RAucowlwyUZnnR4%2BYvvlUMI3Mt8IGOqUB9P49l722Jk2jZZmVo3t6Ae%2FAVIVzWZcBalAz6WcUl0%2FJBNsAlqPsVG4mMJxKQsq71Amdk3wlUQmDV4KKK63DJqZLuKKlxHTiSNUgTB%2FBCOxJMt5Jx%2FIj4VbiuYvad7D%2BF8r7kbUziD1dk8saxCCQ%2Fl%2B1u5Z8OvGq3qAhIjYGpSH%2BQqER9o7k0CPnU3mBRX1kbvMXjG4Xhwv2OrU6Qwn3phKYXFPJ&X-Amz-Signature=ddf477dbb165c731e19183b06f495e8903fcc740451f5666f297bf1daf2e85f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZEC7SG6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIHokTR9zPoKWZZh2hRrvyagADXXvJyGHV1dpzmyd%2FkRjAiEA68minPS7UoCL%2FfuvD%2FWxvliQWryp%2Fdly21OUIzbhqvoq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDC7zzsNpsgSl8u5GYCrcA3hqFB%2F8QmCQIfFyB8XW38E0QHDZGaXbddOpPhkg03S4Qw44LTv8C8EXop4rXSFAVS6K%2F2%2FQaTfWTsaz6NUAEBcmxTyHO7G14YXpJChXGJo%2BBEXGdQ%2FXU2F%2BK0YPpGrhs99bLVNTFEQspaYb5pSMWZKXEhfd4J471Jy%2BlidRmeDc56RwpwzmK1oeP54JrGifIaEW85oyVbvZe722NhjTKukGJJebjEKDh0rHDHyBOjeR%2FUcAPqmm3WmLRAF3cNbPS7N780rgOGsjC4TdjJZiQcUUHwGcpXLMIvs9goWgcClpKKTZJFGXln7yz9EwY%2B8hjfifijnjhVMl%2BMtTabEsX%2F2R7J68Gq38zpRQT89D9SyEj%2FfBQIDbiEHJ3jd75nZo6zWAmFUVbkARKJo2QDo21OijDmkAaDrmqzPTcvBWOMkmka1swqGK7zwA%2BIbAcwP7B%2Ftz8iDPYVBtrC%2BH1udi3LWbkjFSXCaO79w42qbmh6Yhx3aNk%2Bmrg7CpMcL3EPAQjGcPTzqGunY4uowvuveDVjQW2brArVleGMxfCXh7q1jKsQiJlo93zHxiiuQLCZf4BwgupdTV%2BX67Pu5klko31lWb3RSQQuuBfs2JrP3RAucowlwyUZnnR4%2BYvvlUMI3Mt8IGOqUB9P49l722Jk2jZZmVo3t6Ae%2FAVIVzWZcBalAz6WcUl0%2FJBNsAlqPsVG4mMJxKQsq71Amdk3wlUQmDV4KKK63DJqZLuKKlxHTiSNUgTB%2FBCOxJMt5Jx%2FIj4VbiuYvad7D%2BF8r7kbUziD1dk8saxCCQ%2Fl%2B1u5Z8OvGq3qAhIjYGpSH%2BQqER9o7k0CPnU3mBRX1kbvMXjG4Xhwv2OrU6Qwn3phKYXFPJ&X-Amz-Signature=ed9fa43015416ddbc582f9e0a7d14aa2ae97cae53dd11a3b84952445784b5825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
