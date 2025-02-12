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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNH7ZCA%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsFtvISD1mRJIE8e0wUuFeRGkrNHCXhnlPNkiKMyMCwwIgaJOfG5x%2FPbeiXZBe6pHoG8%2Bm9NYbquCCop7i98x%2BiQkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEv1WNL5KhoiCpZmmircAw7YO2G8Tal050FYnEGvm4bTqasa3oRjj6tk6mgvTy4Vsard0gHt7oWQNHAtMLR1Bx8o7NtZ%2FmBognoqAZFMKz6Pkbn2JZTmW2gstIb3GygRbkuq2b%2Fq%2F2hffVUVvKyEz9Je9wjrBmIW8YKGk%2BZzsqHsCTKl6fdh%2Bt4GIrb1z8p%2BI1OV%2BHzTFLVBWMsRWHeE8LECtqNE4xjSrLOuH06yP3ATWLHL5mSFtimqy3GO%2BXB%2B0J0fXVE1SkKn0XNo3D%2FvEfQ1xg6Yzfs3qIBvq9dusYUu0rTjxXFMgTY2xhlEtJyjWFPbeOeeyPQfDvf5FAhAcKH6fECXs7h5adqxfpTVQ8JU055kGw65OOxUZ9L7ECYmOP4aLUu8QEXxuI%2FL%2Fv2Saunm6qx%2BLqk6auqrhYH%2BkbN%2FnbIE47VUriruGP6FCFb8O6b5Yg871R77BRMADOijiDVH0AP4clQ%2FH26CxmTnOIXACFYoSIQPjrNHusjd7PvHg4NMTVBCGnhA82wVIn7kZIUQkPjcS2D0VU7nHeBZD4kG7HSyP2Kj%2BSr8hRoL41bkwYp81vkhvnmYQJz5NNm0TGnyAnG6lHC5Z41UZasAqGmTHrNmOujDusQU0VY1FAYoru2UCUK27AVTHdKaMJ%2BHsb0GOqUBDEk8tnK2Y4fqMStbJqE5c1fQqG6rjFYiQocXIZDeT0qgr7lNqBYER5qnn%2FFTcbyJBHaNy9ROwbGM0wk8xf6awLwUtYurYUd6tWpNGveKS3ZJCgRU2jazb%2FtKojDoMkHXi00jUC%2BgQmnL%2F%2BGobv8vcvIIi6B2DxaXvtdTJekpofiw5FxvJmxA4EFk11TdDN0l2%2B46s7eLHyF%2Bb9uUOCEAHnyvOnsa&X-Amz-Signature=026bac2d3514dd6cddb952d25ce61fa1e7f0c338e0aa625dc18c8f7fe55760ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNH7ZCA%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsFtvISD1mRJIE8e0wUuFeRGkrNHCXhnlPNkiKMyMCwwIgaJOfG5x%2FPbeiXZBe6pHoG8%2Bm9NYbquCCop7i98x%2BiQkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEv1WNL5KhoiCpZmmircAw7YO2G8Tal050FYnEGvm4bTqasa3oRjj6tk6mgvTy4Vsard0gHt7oWQNHAtMLR1Bx8o7NtZ%2FmBognoqAZFMKz6Pkbn2JZTmW2gstIb3GygRbkuq2b%2Fq%2F2hffVUVvKyEz9Je9wjrBmIW8YKGk%2BZzsqHsCTKl6fdh%2Bt4GIrb1z8p%2BI1OV%2BHzTFLVBWMsRWHeE8LECtqNE4xjSrLOuH06yP3ATWLHL5mSFtimqy3GO%2BXB%2B0J0fXVE1SkKn0XNo3D%2FvEfQ1xg6Yzfs3qIBvq9dusYUu0rTjxXFMgTY2xhlEtJyjWFPbeOeeyPQfDvf5FAhAcKH6fECXs7h5adqxfpTVQ8JU055kGw65OOxUZ9L7ECYmOP4aLUu8QEXxuI%2FL%2Fv2Saunm6qx%2BLqk6auqrhYH%2BkbN%2FnbIE47VUriruGP6FCFb8O6b5Yg871R77BRMADOijiDVH0AP4clQ%2FH26CxmTnOIXACFYoSIQPjrNHusjd7PvHg4NMTVBCGnhA82wVIn7kZIUQkPjcS2D0VU7nHeBZD4kG7HSyP2Kj%2BSr8hRoL41bkwYp81vkhvnmYQJz5NNm0TGnyAnG6lHC5Z41UZasAqGmTHrNmOujDusQU0VY1FAYoru2UCUK27AVTHdKaMJ%2BHsb0GOqUBDEk8tnK2Y4fqMStbJqE5c1fQqG6rjFYiQocXIZDeT0qgr7lNqBYER5qnn%2FFTcbyJBHaNy9ROwbGM0wk8xf6awLwUtYurYUd6tWpNGveKS3ZJCgRU2jazb%2FtKojDoMkHXi00jUC%2BgQmnL%2F%2BGobv8vcvIIi6B2DxaXvtdTJekpofiw5FxvJmxA4EFk11TdDN0l2%2B46s7eLHyF%2Bb9uUOCEAHnyvOnsa&X-Amz-Signature=d1f9632928876981ac8eb49971fe10e86d377e272705f06c0436cbd1b7e16a89&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
