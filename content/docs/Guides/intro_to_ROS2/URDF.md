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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466234Y3QGJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BK5eIRPBVMq6hHr2ARl%2BRiAZkv79ws2ZqzIf0dzJleAIhAPJWxvHtUX6VcWDSRdA6%2F6%2B14%2F5%2F2j%2B5L0aqe7OZgNdcKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrcc4wXSMgU3GTRgkq3APjSEluBAPZFM9h%2B5vAs1in3tgIyNzwspTbcgkqANAWwF3IQPprCCym9wsf6U8fWZAvSXRMHkRjgBfkjUCvOGpltPWW3p6Nq3d55m2PxEZIH6yzj0bLbLaSJUBO%2B8x4XEMa7D8fw1SZ1BCkEm6Wc0%2BWAuE46GaO8jnKNyh0QzcskmPpT13Z0ZN9VEq6pHFhWQb%2B2u8VN6yPfS8k4xKa1q3COoyB7lqqeDsTnSXwxEJyLpm2RD3wS%2B%2BbBBjx1cMGAXlvPOEk%2B6YOmrjss8JyWY1Bb2qvfsposqSBcjkn3nzebGLiRVaR269OvjSESGPCP8PfLApIzrUPH1u2NqjLrZKCTs%2Fo%2BDHEXeiUVKCA3cbmIcm1b4SM4amHqeXWyxrpXmNXblTqRDdipuSexrco1pWmb8laEbnApLNu180L8uodpCYuWyqHCNda0MAEdO7Mq7N0XGsF4eZmT33YXuk5yEOAE9P7whV%2BJMlWGdrjbCLof%2BCf5r%2Bv%2BGmCM%2FGuD5r0yn7rhc99PQg4aGtyFXiptc9E1bxhXf1GD2sP5i7j0uNt78N7um35JxOZ6XsubCWELbXHs3DHyMBlPzHTnCHtGLTUs8DQTuOZx%2F7HSKN0mmBG87wk5UfFM0qnsKdwPDCykP%2FCBjqkAVlTP5D1xgD7512Qjo8IWtW%2BAJanDUBMQdV0WX4Ky2FTwjDhzJ7D0jAy9IcRUjJCSrGgSk16s8hVvAS0hsGrRcaoLhgkVp4J5XBIalP3RK1KINe3bQBsRMvtRjSdZ8qgH3Tw2yfxQ0tQquQoSPxJRLRJhLSDscKJTCeNTFa1xRAWhiKTmNJWdz3xN%2BiqmLQsaxzZFhE3B5k7tSt5byTbe8oPbfgf&X-Amz-Signature=20264227e94f9e4755d6ddbf35bf35454ad7c7c44a1aa3136ed8b94a92b49710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466234Y3QGJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BK5eIRPBVMq6hHr2ARl%2BRiAZkv79ws2ZqzIf0dzJleAIhAPJWxvHtUX6VcWDSRdA6%2F6%2B14%2F5%2F2j%2B5L0aqe7OZgNdcKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrcc4wXSMgU3GTRgkq3APjSEluBAPZFM9h%2B5vAs1in3tgIyNzwspTbcgkqANAWwF3IQPprCCym9wsf6U8fWZAvSXRMHkRjgBfkjUCvOGpltPWW3p6Nq3d55m2PxEZIH6yzj0bLbLaSJUBO%2B8x4XEMa7D8fw1SZ1BCkEm6Wc0%2BWAuE46GaO8jnKNyh0QzcskmPpT13Z0ZN9VEq6pHFhWQb%2B2u8VN6yPfS8k4xKa1q3COoyB7lqqeDsTnSXwxEJyLpm2RD3wS%2B%2BbBBjx1cMGAXlvPOEk%2B6YOmrjss8JyWY1Bb2qvfsposqSBcjkn3nzebGLiRVaR269OvjSESGPCP8PfLApIzrUPH1u2NqjLrZKCTs%2Fo%2BDHEXeiUVKCA3cbmIcm1b4SM4amHqeXWyxrpXmNXblTqRDdipuSexrco1pWmb8laEbnApLNu180L8uodpCYuWyqHCNda0MAEdO7Mq7N0XGsF4eZmT33YXuk5yEOAE9P7whV%2BJMlWGdrjbCLof%2BCf5r%2Bv%2BGmCM%2FGuD5r0yn7rhc99PQg4aGtyFXiptc9E1bxhXf1GD2sP5i7j0uNt78N7um35JxOZ6XsubCWELbXHs3DHyMBlPzHTnCHtGLTUs8DQTuOZx%2F7HSKN0mmBG87wk5UfFM0qnsKdwPDCykP%2FCBjqkAVlTP5D1xgD7512Qjo8IWtW%2BAJanDUBMQdV0WX4Ky2FTwjDhzJ7D0jAy9IcRUjJCSrGgSk16s8hVvAS0hsGrRcaoLhgkVp4J5XBIalP3RK1KINe3bQBsRMvtRjSdZ8qgH3Tw2yfxQ0tQquQoSPxJRLRJhLSDscKJTCeNTFa1xRAWhiKTmNJWdz3xN%2BiqmLQsaxzZFhE3B5k7tSt5byTbe8oPbfgf&X-Amz-Signature=21003e26df7da95dcf4e76a4401ad4b9b34837e6411c33f394b6ead3f8725fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
