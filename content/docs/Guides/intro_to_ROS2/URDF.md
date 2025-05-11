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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574PQJQ7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDC8VTn%2FJssvDhJx0Wj1UGTR%2BvfNDLP8%2BczDavaUkl1iwIhAMVHmIdZcmiqMuoYd9C4891VfPSrt022GtFQCITXR6z7KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhV2%2Fb4q4Ld01vMtUq3AOnYVp44mvHRtmJcSdk8srLAq1iTII7q5%2FE3yyPm39oGywDF3vJ3mMcPlhFfCWgPAL8v7CASuTvqLMr%2B6qfDCYuwQYzBdFfUf%2BNPaMgAPHxFPV6vQfAJQabhEXxOMImE%2BPHh5D%2Bfsg2NuHBSZ5TPgOyMIyWH0JmDb3bs93xximqJdDJDeiiDLYL8GsBf6LX1H88C%2FWLS3qCFLis1kw0eky%2Br8NOVvkuuxcdPXtfd05vrQ9nbbrfTM%2BguTKW01GtIZ2esLwSpI2BrRQi6NRfzg3qMCvB4bnlx3rb3zEDla4oiGYcuh0xHtUXU%2FSa9Vg4UnQZ%2F1x%2Fll7r9xO%2BcysFpidboWHRsSm%2FVD%2Fdc%2BCGJ7IM1QcI%2FxzKikJdYwM%2BxHUn7GO1tp%2Fc9mtvA3s%2FXlCpfOLzFVx7WnzOmOj9A7%2FsL9IXUTtR7MVMjfPJ%2BYU64TIFSIqhT0IThLHRhzkWeg9xAu9geX2ohK0I4faP1mRJQCMkKgJ7kHFAE6j8Pwa8JLv58edicrcy%2FtwiZtZ2sjPQjwAqngwG9dWdO3V9XE6OxVZM1zfIgX7VP28p%2F6Fz%2BOKLFki7uJmRpvbMQTdxfKf68prZgNhrxcq2mM1A3A2%2BOgkjnC57knShHzlYn8oyIzCiuYHBBjqkAdHfuXFtLpfOEPqv13RbKsXyUAznbugJ8hWxImbSG%2B2cgJ%2BniYzOTsYNaimTfpXpR3%2Fjo2GWurkZUSKAvfx15na7%2B8YcViVLGXEb6isZmMOcX9xgYJPthdHHUWSRknSNiy9V8ubfrxulofZvzGNSTvtte7e2nRJbZXSLxFV%2BM5GmokG5fRWh7pNv%2FZHYjlcqFB1T5nQfj6mImFTrG2sRSXSmnatH&X-Amz-Signature=9d83d2c14348dc80d08dfe9514ae4fabbaa5297693bbda1aae1555023c6c0ee2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574PQJQ7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDC8VTn%2FJssvDhJx0Wj1UGTR%2BvfNDLP8%2BczDavaUkl1iwIhAMVHmIdZcmiqMuoYd9C4891VfPSrt022GtFQCITXR6z7KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhV2%2Fb4q4Ld01vMtUq3AOnYVp44mvHRtmJcSdk8srLAq1iTII7q5%2FE3yyPm39oGywDF3vJ3mMcPlhFfCWgPAL8v7CASuTvqLMr%2B6qfDCYuwQYzBdFfUf%2BNPaMgAPHxFPV6vQfAJQabhEXxOMImE%2BPHh5D%2Bfsg2NuHBSZ5TPgOyMIyWH0JmDb3bs93xximqJdDJDeiiDLYL8GsBf6LX1H88C%2FWLS3qCFLis1kw0eky%2Br8NOVvkuuxcdPXtfd05vrQ9nbbrfTM%2BguTKW01GtIZ2esLwSpI2BrRQi6NRfzg3qMCvB4bnlx3rb3zEDla4oiGYcuh0xHtUXU%2FSa9Vg4UnQZ%2F1x%2Fll7r9xO%2BcysFpidboWHRsSm%2FVD%2Fdc%2BCGJ7IM1QcI%2FxzKikJdYwM%2BxHUn7GO1tp%2Fc9mtvA3s%2FXlCpfOLzFVx7WnzOmOj9A7%2FsL9IXUTtR7MVMjfPJ%2BYU64TIFSIqhT0IThLHRhzkWeg9xAu9geX2ohK0I4faP1mRJQCMkKgJ7kHFAE6j8Pwa8JLv58edicrcy%2FtwiZtZ2sjPQjwAqngwG9dWdO3V9XE6OxVZM1zfIgX7VP28p%2F6Fz%2BOKLFki7uJmRpvbMQTdxfKf68prZgNhrxcq2mM1A3A2%2BOgkjnC57knShHzlYn8oyIzCiuYHBBjqkAdHfuXFtLpfOEPqv13RbKsXyUAznbugJ8hWxImbSG%2B2cgJ%2BniYzOTsYNaimTfpXpR3%2Fjo2GWurkZUSKAvfx15na7%2B8YcViVLGXEb6isZmMOcX9xgYJPthdHHUWSRknSNiy9V8ubfrxulofZvzGNSTvtte7e2nRJbZXSLxFV%2BM5GmokG5fRWh7pNv%2FZHYjlcqFB1T5nQfj6mImFTrG2sRSXSmnatH&X-Amz-Signature=6f9b3f697d9271f74cf7c43da7009f81191aba6d98b02dba81ddb4f7a92e5276&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
