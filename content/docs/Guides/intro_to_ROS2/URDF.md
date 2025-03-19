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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCTAIA6M%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDi0EnEbZl%2FOphQjvUMrcYKtYH6mt8riNl8mOMGPojewAiAghUKFEaertGF4p0dFAlYemUbCgYt1d3LGFcmQbxA6air%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMLFyH3HyW5LwkV0r5KtwD%2BZHhnQIJSn%2BeNQXcOkK2MsJzOUUQkXPsScgdfe6x91JOYgI4Ji%2BHE67wUC%2FXaqEZhmPXHz7%2Fm1LVSRKHiAiC%2FnSgAAMWl%2B5QWPa8J9oH%2F%2B79CHJuVbX07o3d8nL1%2Br7loKnhSw%2FAndzEe%2Bc4YgPoIEM63dLPZfU3d%2Fv8Em2f2TJSfaoMVZ%2FwV5dQMtgZBraDEtF2Rfz4rD3ng1VJxWYjP07SD7Udwi0FTGbK91qxJ7cR1b3AHJjZKm7gSKbftr%2BoyFMzuZfcpW29ZNuOvs6mMIpC5PIJtmZpEL09P13OcjBWzN7P32pURADU9NnDu5R%2FwuSdrltbwKHkiXqfSWEWWZ%2B7Mowokyw7en7gj%2FqKom8GgWJZl8dY%2BD3kKpFMX2%2F0%2ByVM1w7OYwrnmxDFuwriV2DDArz9RHMUGC0tr6LEH7Xn2DXI%2B2KZmM4wIbsseEEIpSas6c03aDyIxIACfvQE7gyySjja1hzFUJgS33lQnz1BI%2FFnKi7wvscG98SFShrqhCQbEGEf3y8cOv6OzoXs5TuAVAoYBt0qvmGVHPaDlTFbjSllknu2DXzRKSn%2FgdxprlHe7QfjDujRoNzzfGSTvMVli2S4A6bUqmZEsL%2BiN%2BbMH3As%2Fble7VLikFkw78PpvgY6pgHx4N5JNwigjYcOBcIwKNG4pQvKs69NwY%2FNBN9xrvx1JoQ90q%2FUReKnCb%2BymSSEdzeMTHBGS%2Btl%2B4SlTjyuTPNSEZ3MYr1duxX3OLsUVToS4bqWMwGd2Eau7NK59chhyumFbi0MXTkyTGSSZDRAuS9qDkUmV7ektNxRNSxKBKaz7WQtq8dQEo7smgHTxf9AFqNYvPu0rr8vJZ2X8fEv%2BkL%2B8IBKX4xM&X-Amz-Signature=f8ebf68b3b1f6ee0c365f664298bf1d60f72647e74386ba0648746382fa86a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCTAIA6M%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDi0EnEbZl%2FOphQjvUMrcYKtYH6mt8riNl8mOMGPojewAiAghUKFEaertGF4p0dFAlYemUbCgYt1d3LGFcmQbxA6air%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMLFyH3HyW5LwkV0r5KtwD%2BZHhnQIJSn%2BeNQXcOkK2MsJzOUUQkXPsScgdfe6x91JOYgI4Ji%2BHE67wUC%2FXaqEZhmPXHz7%2Fm1LVSRKHiAiC%2FnSgAAMWl%2B5QWPa8J9oH%2F%2B79CHJuVbX07o3d8nL1%2Br7loKnhSw%2FAndzEe%2Bc4YgPoIEM63dLPZfU3d%2Fv8Em2f2TJSfaoMVZ%2FwV5dQMtgZBraDEtF2Rfz4rD3ng1VJxWYjP07SD7Udwi0FTGbK91qxJ7cR1b3AHJjZKm7gSKbftr%2BoyFMzuZfcpW29ZNuOvs6mMIpC5PIJtmZpEL09P13OcjBWzN7P32pURADU9NnDu5R%2FwuSdrltbwKHkiXqfSWEWWZ%2B7Mowokyw7en7gj%2FqKom8GgWJZl8dY%2BD3kKpFMX2%2F0%2ByVM1w7OYwrnmxDFuwriV2DDArz9RHMUGC0tr6LEH7Xn2DXI%2B2KZmM4wIbsseEEIpSas6c03aDyIxIACfvQE7gyySjja1hzFUJgS33lQnz1BI%2FFnKi7wvscG98SFShrqhCQbEGEf3y8cOv6OzoXs5TuAVAoYBt0qvmGVHPaDlTFbjSllknu2DXzRKSn%2FgdxprlHe7QfjDujRoNzzfGSTvMVli2S4A6bUqmZEsL%2BiN%2BbMH3As%2Fble7VLikFkw78PpvgY6pgHx4N5JNwigjYcOBcIwKNG4pQvKs69NwY%2FNBN9xrvx1JoQ90q%2FUReKnCb%2BymSSEdzeMTHBGS%2Btl%2B4SlTjyuTPNSEZ3MYr1duxX3OLsUVToS4bqWMwGd2Eau7NK59chhyumFbi0MXTkyTGSSZDRAuS9qDkUmV7ektNxRNSxKBKaz7WQtq8dQEo7smgHTxf9AFqNYvPu0rr8vJZ2X8fEv%2BkL%2B8IBKX4xM&X-Amz-Signature=b5ae8968362aac314b6ec7656ad47679c2e78a94d801a210caa5b25764a5cd86&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
