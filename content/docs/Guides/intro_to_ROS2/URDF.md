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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJYIHI2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCzndijriKnvaMrtvzQBlN%2BIXzA8xGvGuupQSy2teZ7SAIhAPj7oTMXd%2Fgv3rSje9aqIFHlPh2vsUkg9rgcKavEo0ANKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyveA2W6XXVKJO6N8wq3ANuYuI744ehuQT8cirxoTticvWu3DRuhCGmHaQDOQgJ5We6OZgfPwWnNbqz%2BvlACvJ0ZQttusb%2B6qWzEub%2Bih4wP0lui1k2pp11B1QDQrFKB7GA8DQX5pftfxPwdDuJ14wsMY2gLodFxpNi%2BMzYFEw58m2H5nujBK0CwIzGBIRXhRTr6Oj4QzTRh1K%2F3n69RTZeZSsHBJflZRqSmQ56KOkqVJvzWi6qYe20EvTaXDRkJbpsNy23jQLfwOgD975oTvHPjin2cRVE%2FUYQ%2FGbBw4DzXs9TxCsJd0Xas5OYWdjFutT3%2FdMWFyZRgg1C5KEvJIM8Gm5IjEIqCvCQ%2B3mj4aa7nmMg6Y8eXWUE6ymIGsvVl9wFsktTC%2BnlUFFEeWKRJmLLnaTz9G%2BlryefLovr74zgAJCv5x9OGAVqHtpBP3zVzPWviguwQGPQLmirpN%2FNGG0Wx9Uz5ahMuYHdTTvGA1Ok61hDb8sscJekDOi9E5f%2BAYIM%2BC%2BDwF8yMC0Lar%2F0ywDgmZikgiyFxMEtfmFn1en2qdctOY9Hz8D2mqvpiIAQ8bDO8HZ4t94jP7LEBi%2BrE7kWyzJlTtz9P1RiJthYqBCZ54af6FlSvVOnq0DtLhEmvEYAn4QRF9AiTnQkYzCt%2FtK9BjqkAQG2DGWIXAvD9Tt3Qiyj6jQG4lhMCFDNbE1%2FH2k9%2BxfKorYaOi%2FACMB%2B30q%2BJhzbmvezI%2BhzFk7%2FUlFlxmADvn7U50PCMfFwuDLpUPTIRHiGoiHYPj87ymy2kTTjkEiMTy1jFAFlcKw4ROrAMf923mjKfTxkbBECbo4SFlcs8EuDNHh4%2B6dLw87vA37%2B%2Bgk1Uy1UPut1Vb07qH0%2FKCQYeqNWNluj&X-Amz-Signature=00b95a140828cb8eeba9e4b978ce2e62c7f8523d52c3c45c99b7d382c74ddda3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJYIHI2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCzndijriKnvaMrtvzQBlN%2BIXzA8xGvGuupQSy2teZ7SAIhAPj7oTMXd%2Fgv3rSje9aqIFHlPh2vsUkg9rgcKavEo0ANKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyveA2W6XXVKJO6N8wq3ANuYuI744ehuQT8cirxoTticvWu3DRuhCGmHaQDOQgJ5We6OZgfPwWnNbqz%2BvlACvJ0ZQttusb%2B6qWzEub%2Bih4wP0lui1k2pp11B1QDQrFKB7GA8DQX5pftfxPwdDuJ14wsMY2gLodFxpNi%2BMzYFEw58m2H5nujBK0CwIzGBIRXhRTr6Oj4QzTRh1K%2F3n69RTZeZSsHBJflZRqSmQ56KOkqVJvzWi6qYe20EvTaXDRkJbpsNy23jQLfwOgD975oTvHPjin2cRVE%2FUYQ%2FGbBw4DzXs9TxCsJd0Xas5OYWdjFutT3%2FdMWFyZRgg1C5KEvJIM8Gm5IjEIqCvCQ%2B3mj4aa7nmMg6Y8eXWUE6ymIGsvVl9wFsktTC%2BnlUFFEeWKRJmLLnaTz9G%2BlryefLovr74zgAJCv5x9OGAVqHtpBP3zVzPWviguwQGPQLmirpN%2FNGG0Wx9Uz5ahMuYHdTTvGA1Ok61hDb8sscJekDOi9E5f%2BAYIM%2BC%2BDwF8yMC0Lar%2F0ywDgmZikgiyFxMEtfmFn1en2qdctOY9Hz8D2mqvpiIAQ8bDO8HZ4t94jP7LEBi%2BrE7kWyzJlTtz9P1RiJthYqBCZ54af6FlSvVOnq0DtLhEmvEYAn4QRF9AiTnQkYzCt%2FtK9BjqkAQG2DGWIXAvD9Tt3Qiyj6jQG4lhMCFDNbE1%2FH2k9%2BxfKorYaOi%2FACMB%2B30q%2BJhzbmvezI%2BhzFk7%2FUlFlxmADvn7U50PCMfFwuDLpUPTIRHiGoiHYPj87ymy2kTTjkEiMTy1jFAFlcKw4ROrAMf923mjKfTxkbBECbo4SFlcs8EuDNHh4%2B6dLw87vA37%2B%2Bgk1Uy1UPut1Vb07qH0%2FKCQYeqNWNluj&X-Amz-Signature=f727b79073cf9e2f1909394ccb421ce563f67e37d9dc3fa525f1c0994c34a3f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
