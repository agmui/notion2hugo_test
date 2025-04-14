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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBDY66BK%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFFueOozoxh3ZjNB0UWw1l4TG3IcGY5qtxZ11qhPWYOAiEA28hY%2BULDY5qCaOKhaDONv0S6mvcgBcM9x%2FQrdSjmsGAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDEWJ63UwLH8JLNLR6SrcA8mE29GuXrwslOuBgQM0M82JAkoip2FvE8tvoIa4fAXPWJziAsA4%2BWXhXL%2FfpJ%2F7QY3JC%2FwJEHrYwaCOa1A63n%2B8MAfYsc3URLN%2BYimBo1GtUiMTgL%2BmkkB4BaFKVDld0O60MXI%2BN4aOv9a4RhrQySKzGW2DuK5R0ORlWwXP5WaoEfEXPXNTIyLimV7WKG22JNGzbCJhesSo%2ByADuMDIIOi%2FKs27yq8N99FE8pMBSNeejeLCvvf3YsRcy1BftClOXwX0P43II4fdlVuxLmp6rL81fcobWFm4NHbFp5CuDl4Rspciv0VefPhwufm%2BK0jvWhAkxYODMq20ITKKWx0OSXFB6ueyAuRZnNX5Q6z2aTbIuWnj2hoPiB6r3XUlZcJ7Tsx%2BaMwMomYhjQJ8F3zSL6aUgJdWU8Un0%2Fke3XJWnq5iqTrbOQn5ywEUOocLXT0OARSniHyHS%2Bw%2BbRCH7CQVs%2FEPGFmvwS7NHZCFB%2F06lpnUsTV1R8xvN57hy%2Fr3wDbYqXjetrB1YWfje0OrYjSU0Osd7BtL5Y5n6P41cOLOA%2FUUbisbybufpTf6E0%2FblU4DhlKpcTrf9hWoxl7xdxFmk%2F2iXnDnJiPmJq3IYXdH8M5Px23icMJI1lhkkI2lMMKb9r8GOqUBSLMc0r2Ni4fAv8NO6lDzBRknh1EwbDNUZCJ4SuEXSt%2BwmbtRVGQiQMhYRYnbqIT2axTSD2bPEXxamNmvaUEn3kstuS1pMfl8YmBwmYl1d%2Ftp6OmvEUNzI%2BNBln3D2rbBtfTV%2FeX%2BR%2BOyJWd30waM%2Bq4Twt5FtGJa6%2FnACb7HJpg3otknS0phtIBnfwyYrVHQyteTZmClkBttF46dxFdoFRiEzVpf&X-Amz-Signature=aeb1eea8b8acbb9c19831f365f2dfa5efad64eba3025483c60945c644a084276&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBDY66BK%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFFueOozoxh3ZjNB0UWw1l4TG3IcGY5qtxZ11qhPWYOAiEA28hY%2BULDY5qCaOKhaDONv0S6mvcgBcM9x%2FQrdSjmsGAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDEWJ63UwLH8JLNLR6SrcA8mE29GuXrwslOuBgQM0M82JAkoip2FvE8tvoIa4fAXPWJziAsA4%2BWXhXL%2FfpJ%2F7QY3JC%2FwJEHrYwaCOa1A63n%2B8MAfYsc3URLN%2BYimBo1GtUiMTgL%2BmkkB4BaFKVDld0O60MXI%2BN4aOv9a4RhrQySKzGW2DuK5R0ORlWwXP5WaoEfEXPXNTIyLimV7WKG22JNGzbCJhesSo%2ByADuMDIIOi%2FKs27yq8N99FE8pMBSNeejeLCvvf3YsRcy1BftClOXwX0P43II4fdlVuxLmp6rL81fcobWFm4NHbFp5CuDl4Rspciv0VefPhwufm%2BK0jvWhAkxYODMq20ITKKWx0OSXFB6ueyAuRZnNX5Q6z2aTbIuWnj2hoPiB6r3XUlZcJ7Tsx%2BaMwMomYhjQJ8F3zSL6aUgJdWU8Un0%2Fke3XJWnq5iqTrbOQn5ywEUOocLXT0OARSniHyHS%2Bw%2BbRCH7CQVs%2FEPGFmvwS7NHZCFB%2F06lpnUsTV1R8xvN57hy%2Fr3wDbYqXjetrB1YWfje0OrYjSU0Osd7BtL5Y5n6P41cOLOA%2FUUbisbybufpTf6E0%2FblU4DhlKpcTrf9hWoxl7xdxFmk%2F2iXnDnJiPmJq3IYXdH8M5Px23icMJI1lhkkI2lMMKb9r8GOqUBSLMc0r2Ni4fAv8NO6lDzBRknh1EwbDNUZCJ4SuEXSt%2BwmbtRVGQiQMhYRYnbqIT2axTSD2bPEXxamNmvaUEn3kstuS1pMfl8YmBwmYl1d%2Ftp6OmvEUNzI%2BNBln3D2rbBtfTV%2FeX%2BR%2BOyJWd30waM%2Bq4Twt5FtGJa6%2FnACb7HJpg3otknS0phtIBnfwyYrVHQyteTZmClkBttF46dxFdoFRiEzVpf&X-Amz-Signature=2210bd11478bd1d6c650658b3c0c77d37b1462df6e94b93c0326c6fa150d4388&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
