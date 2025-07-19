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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2DBHPQR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEMYPNRZvtg0E80Qc67gzI9khZWenVz0mKZtmQEDxsGAIhAP6aeF1P48tC2hCVOeFO%2FFRTRi7U8%2FN3wc%2FEJ%2B1gnMfKKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxxy8jlDe6jqsMRFUoq3ANwfM66WhuZkzcDdtYvg%2Bb%2Bi3T7HOcD%2Fs%2F%2BJc5Kx%2BrJVVW%2Fq4vsnFjqa%2BjIpKN7G4Q70bnklSpGamSUqaOuUwfl1XeKVXk%2FBwbIJFu6Kj1eI2K9OhyMdgQ2gJETQTy7JYZXWDg7OMl%2FXx%2B10oGRX3ZVulVRbI2pthxQ5FLGAJ2mq%2F3wy%2FMvHgAdYKQhAQk95d6ydwoeKImgOINSYfxP94MCIYdlscv%2FLMEJjaBMhgJ8POL1GDSyL20LQrqi8I3LeFEsiGDk2WtQrCKdbds4Dh2Bqb1VaqLiusHrDIxBGtXaTMMUTS9EZpKJC%2BJsGT%2Fi4SYH5HLQ%2BSUmsV166crXi9Tyx4HZ6LU8msI%2BLHyawjxE8Md2OYUrPRNTrV54mLycL36WruWca%2BAu43%2F0Q06k0TrUwvEmkxa9Jmaczf85D3d8Xm%2FBcQN45ozBB0MAG%2FT%2B2VHuw0BtRrkijrE5EM%2Fv1%2F%2FEidWcFqAq6msMGqISmfjtXVS3X34BvzeQIJkaQktIQ3StGkoJnP%2BDTxhK5GYLXFy8cHUaUDD3BTUXda9Zz5UulhV%2BuCO44IG%2Bk75bOr4RKWpobZVr59pYVeKTjNBW5s78IsY42%2F3oalor8ANyOka%2FaNeijMMxisIsiYy44zCHuO7DBjqkAcFU%2BaNYKvPeyqdZeoh7Aqau1MMzsrmepPFhjJJ9d4%2FKUSlkCXV5hIN4S8eD7BZOLw4nSMe8MTCBI6%2F%2FVq%2Fh%2Bc2irPlM3nGnqfZXBFatzvKVakSLpvasdbQV5KnxcNlho%2FXWvjRPxgNPY8u7ZGXdJhlWxU7q%2BMtaZ8YybZNj6UD69kdCVhQiji%2FJdUDm%2FMGIU6DbJxEC8BtLpy76L7NFKYtk3GZE&X-Amz-Signature=08b15a18c8765540c964959f0f22c85cf2a168075cd8ee6404748778e6f73184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2DBHPQR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEMYPNRZvtg0E80Qc67gzI9khZWenVz0mKZtmQEDxsGAIhAP6aeF1P48tC2hCVOeFO%2FFRTRi7U8%2FN3wc%2FEJ%2B1gnMfKKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxxy8jlDe6jqsMRFUoq3ANwfM66WhuZkzcDdtYvg%2Bb%2Bi3T7HOcD%2Fs%2F%2BJc5Kx%2BrJVVW%2Fq4vsnFjqa%2BjIpKN7G4Q70bnklSpGamSUqaOuUwfl1XeKVXk%2FBwbIJFu6Kj1eI2K9OhyMdgQ2gJETQTy7JYZXWDg7OMl%2FXx%2B10oGRX3ZVulVRbI2pthxQ5FLGAJ2mq%2F3wy%2FMvHgAdYKQhAQk95d6ydwoeKImgOINSYfxP94MCIYdlscv%2FLMEJjaBMhgJ8POL1GDSyL20LQrqi8I3LeFEsiGDk2WtQrCKdbds4Dh2Bqb1VaqLiusHrDIxBGtXaTMMUTS9EZpKJC%2BJsGT%2Fi4SYH5HLQ%2BSUmsV166crXi9Tyx4HZ6LU8msI%2BLHyawjxE8Md2OYUrPRNTrV54mLycL36WruWca%2BAu43%2F0Q06k0TrUwvEmkxa9Jmaczf85D3d8Xm%2FBcQN45ozBB0MAG%2FT%2B2VHuw0BtRrkijrE5EM%2Fv1%2F%2FEidWcFqAq6msMGqISmfjtXVS3X34BvzeQIJkaQktIQ3StGkoJnP%2BDTxhK5GYLXFy8cHUaUDD3BTUXda9Zz5UulhV%2BuCO44IG%2Bk75bOr4RKWpobZVr59pYVeKTjNBW5s78IsY42%2F3oalor8ANyOka%2FaNeijMMxisIsiYy44zCHuO7DBjqkAcFU%2BaNYKvPeyqdZeoh7Aqau1MMzsrmepPFhjJJ9d4%2FKUSlkCXV5hIN4S8eD7BZOLw4nSMe8MTCBI6%2F%2FVq%2Fh%2Bc2irPlM3nGnqfZXBFatzvKVakSLpvasdbQV5KnxcNlho%2FXWvjRPxgNPY8u7ZGXdJhlWxU7q%2BMtaZ8YybZNj6UD69kdCVhQiji%2FJdUDm%2FMGIU6DbJxEC8BtLpy76L7NFKYtk3GZE&X-Amz-Signature=ce52da2b136b81c6c3eb0d32f0808faa6d2d726c69464b99fe67c7104e8698b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
