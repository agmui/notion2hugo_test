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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQPKZ5Z%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC3PYdVHSQbq2548BZIB7LYXrlpEvbuSZNkyOcPnKX1AIgdF0iltKhuyxS7HZzh8SLen1RuC%2Ba%2FJn9h6oWx82O5HUq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMQHpJU45IDYOq6OQSrcA0%2B1QVPJFzm4imJPdF1NcmTNwDWJTldo8NsCxyuxEnDmkruFdhONvXYrRFnZ2l%2B5drHAgIZze7gXWSsjbc0k6E7f5CVIdibZldk4btXNFXHhmS7DfNaMP0b1weGWhXuskH%2B2XgT4%2Bm3rwAytA4Dnxn5rsPlzgZ5CBcsJdZuizL9vVsskWfgyQS1B%2BVpX%2BopNwT1eLcoMsm0%2BygGhFjTv5wE1joFZ72%2BNsG9zfGnDwxFAwUxuN%2BgfsTpaKyUyKBdwLDDHBGDOHCmFoRuv7%2BLhplGZTtPRg3QSuSz7LF6YFzsRv1dF1VypXEVu%2BQPx0ezvahNJdxi5AaDG8MDAOZ%2BEOFkIONLaLVzT7hIsSQqADJfOw5CydzSxT76BQp%2BM2372Ro8h0merfHipfJBBTHRrF5dhTfoANoVzO7hf90dzVdDnndDfV%2F%2FSVSbvsnes280uYC5%2BU6IQqU156blC8nJxVfnMK62nDWkvwfYQ%2BNFmE%2FbU1gSUn9ikja8gZtv4CEzReb%2FYuWO0CEPMT9THc32FdX1tv2cHVA7Zh7K6UZbGFQNhqy%2Fe0i6TwdaBh%2FceSifUfwOFSNANGF9W9qpCaiamxDC2t0z8J5RO3F2rdYzkAxSR9N7TIGbmeGd0NCdOML%2FAjsIGOqUB07iIOY%2FHl0q2vfeh0Iyv58GDTsPqMVlpyFU%2B8uoONdSdNOdAcGJQBNNo2cuj%2Bq629dCGEU3tnRhV%2BkF0IzEedCkJh4N5nC5ElA4Two4kVELgIgXFCF1uRLfPFzUDJFmGQUeT6SkKwXWGpbGiPGhmQ45sfzvhNGcykcDoYXrH9m4Go3pbciM55t9S%2Fc8NEDaqZLEIG78hGERfEbCfiUVFDfHAZ5Xq&X-Amz-Signature=20d3b44688f736c2153b39ae6060051bd51adb0f8ca052c601d5e9223bfc1d19&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQPKZ5Z%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC3PYdVHSQbq2548BZIB7LYXrlpEvbuSZNkyOcPnKX1AIgdF0iltKhuyxS7HZzh8SLen1RuC%2Ba%2FJn9h6oWx82O5HUq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMQHpJU45IDYOq6OQSrcA0%2B1QVPJFzm4imJPdF1NcmTNwDWJTldo8NsCxyuxEnDmkruFdhONvXYrRFnZ2l%2B5drHAgIZze7gXWSsjbc0k6E7f5CVIdibZldk4btXNFXHhmS7DfNaMP0b1weGWhXuskH%2B2XgT4%2Bm3rwAytA4Dnxn5rsPlzgZ5CBcsJdZuizL9vVsskWfgyQS1B%2BVpX%2BopNwT1eLcoMsm0%2BygGhFjTv5wE1joFZ72%2BNsG9zfGnDwxFAwUxuN%2BgfsTpaKyUyKBdwLDDHBGDOHCmFoRuv7%2BLhplGZTtPRg3QSuSz7LF6YFzsRv1dF1VypXEVu%2BQPx0ezvahNJdxi5AaDG8MDAOZ%2BEOFkIONLaLVzT7hIsSQqADJfOw5CydzSxT76BQp%2BM2372Ro8h0merfHipfJBBTHRrF5dhTfoANoVzO7hf90dzVdDnndDfV%2F%2FSVSbvsnes280uYC5%2BU6IQqU156blC8nJxVfnMK62nDWkvwfYQ%2BNFmE%2FbU1gSUn9ikja8gZtv4CEzReb%2FYuWO0CEPMT9THc32FdX1tv2cHVA7Zh7K6UZbGFQNhqy%2Fe0i6TwdaBh%2FceSifUfwOFSNANGF9W9qpCaiamxDC2t0z8J5RO3F2rdYzkAxSR9N7TIGbmeGd0NCdOML%2FAjsIGOqUB07iIOY%2FHl0q2vfeh0Iyv58GDTsPqMVlpyFU%2B8uoONdSdNOdAcGJQBNNo2cuj%2Bq629dCGEU3tnRhV%2BkF0IzEedCkJh4N5nC5ElA4Two4kVELgIgXFCF1uRLfPFzUDJFmGQUeT6SkKwXWGpbGiPGhmQ45sfzvhNGcykcDoYXrH9m4Go3pbciM55t9S%2Fc8NEDaqZLEIG78hGERfEbCfiUVFDfHAZ5Xq&X-Amz-Signature=dd327bfec72f8ff3bad3a88c15f0332f8d8009d960524a05d0010ceb5b971bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
