---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2SDGBBB%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCcLQ%2FQBBJRACDnqwPIRJoim%2BQuX%2BUc8E0F50rc%2FJ93FwIhAIchQlDgJLuOdNodLRjHOwuBRSzyEs7p0hccTSkyyw%2BkKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuQGNEakRBrN7vADkq3AOJ6jCn4cp1ZPyUSDmc7hxGk3Qt2JemBM423FiU97iwLwA5iskO5j%2B7bYXVJsKY5hn7ho%2FRu5BUzOpdWK7OYPVOqmt70c1Rf%2BcnzfNUqn%2FbWVC0DqpWb4%2FlxZ%2BB%2F2immYt0gMeMAUzMr5og%2BUBx%2BP2a8O1N9SdxjYKJcfgPLt%2BVRGo1AUT5bqb9ocL%2BW3x1VpCV6oTtxgt6dgezUIpld1RiV3pH3Y%2BzwJ4qOzewAccMn0Rj52ojuwlhyq7wtgQL1toxDpGjrKMTR1XkBIH9kM%2BriY6skcFNGEo6mQl00zoXYuxYKowU5Y6VMDJRRcB4bbO136tB2m1%2BcYot3%2Fwp2hVIVcCMOCPa3fujpKuY5Af5HM06%2FpRsvslg%2BnGyYeXZQHRcPWbl8ZAar84KetHdOgacDcMJ4JEblcsXes0cMA5bWp3iRQX4yrCv%2FY2ecryADBNm2jv65kOqCvJbKDn1%2B2N5q08eJiXRvSpipJ88YmHOK7vi10o7G4iCfNiSogkycnzsZxt2ikBFvcF1ptRs6MsAxhVl234Na5LRM40ZcEI06OwmaAqh74uMYMg9lJY61gmQOpQDWHsGBwv1ppU84PS4G%2FtFqOSNumnIifs7JQMf2GJiBukT%2FS%2BBOd5U2DD68v3FBjqkAQc6%2FwG%2FdFcKMZ1Xtr5kTKh2NegzP8jt2Au3KIUM3LMmZBehQfOENhKLsJoxTyimlcFmuSezDQCxl6CvvxBwp9KIOShd%2F%2B%2Bw9fg%2FaJNKbJeTIwgfm40X%2FqUAklmC7sQGLbCiRBPFc0uo3RcmaxzfFAtGKBoh%2FuETPh8t%2BYRz5Plt7H6veNSoYdg8A4vrJ4br3RGQPlw3qdkzny7ZDYlutcz9gCwY&X-Amz-Signature=16fad37e255c5c9af78f7236b1a1f48c0e52a6279bf546636fc202e194390f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2SDGBBB%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCcLQ%2FQBBJRACDnqwPIRJoim%2BQuX%2BUc8E0F50rc%2FJ93FwIhAIchQlDgJLuOdNodLRjHOwuBRSzyEs7p0hccTSkyyw%2BkKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuQGNEakRBrN7vADkq3AOJ6jCn4cp1ZPyUSDmc7hxGk3Qt2JemBM423FiU97iwLwA5iskO5j%2B7bYXVJsKY5hn7ho%2FRu5BUzOpdWK7OYPVOqmt70c1Rf%2BcnzfNUqn%2FbWVC0DqpWb4%2FlxZ%2BB%2F2immYt0gMeMAUzMr5og%2BUBx%2BP2a8O1N9SdxjYKJcfgPLt%2BVRGo1AUT5bqb9ocL%2BW3x1VpCV6oTtxgt6dgezUIpld1RiV3pH3Y%2BzwJ4qOzewAccMn0Rj52ojuwlhyq7wtgQL1toxDpGjrKMTR1XkBIH9kM%2BriY6skcFNGEo6mQl00zoXYuxYKowU5Y6VMDJRRcB4bbO136tB2m1%2BcYot3%2Fwp2hVIVcCMOCPa3fujpKuY5Af5HM06%2FpRsvslg%2BnGyYeXZQHRcPWbl8ZAar84KetHdOgacDcMJ4JEblcsXes0cMA5bWp3iRQX4yrCv%2FY2ecryADBNm2jv65kOqCvJbKDn1%2B2N5q08eJiXRvSpipJ88YmHOK7vi10o7G4iCfNiSogkycnzsZxt2ikBFvcF1ptRs6MsAxhVl234Na5LRM40ZcEI06OwmaAqh74uMYMg9lJY61gmQOpQDWHsGBwv1ppU84PS4G%2FtFqOSNumnIifs7JQMf2GJiBukT%2FS%2BBOd5U2DD68v3FBjqkAQc6%2FwG%2FdFcKMZ1Xtr5kTKh2NegzP8jt2Au3KIUM3LMmZBehQfOENhKLsJoxTyimlcFmuSezDQCxl6CvvxBwp9KIOShd%2F%2B%2Bw9fg%2FaJNKbJeTIwgfm40X%2FqUAklmC7sQGLbCiRBPFc0uo3RcmaxzfFAtGKBoh%2FuETPh8t%2BYRz5Plt7H6veNSoYdg8A4vrJ4br3RGQPlw3qdkzny7ZDYlutcz9gCwY&X-Amz-Signature=1f7c06ab5d73001d8c27a1ed599079a3375feb3f88eadeb77681e170437365e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
