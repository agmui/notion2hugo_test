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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M7DVENF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDKEMKh9GovxawqGAiAVaBYVWjBSkfc5d8dY6X7XUrUUwIhAJJPTXZELeYQWQLjxFkKTpe87y0l%2FWc9a8OPuCN9GsXMKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5TE%2FPkO3Np7rqzU0q3AONGcPbujH5RBCEz5Alp5Ymni057voghdPO%2BFN8NXME%2BLL8TM8NDPbfc6mV5mTinG8%2B0gNEhAbmzmX4XLGFNY13vZ1SxZ7j9MgYKdGF23y0Iu3HIm2n5pqYAv3mSzSLIu8HPSnIE4gfARI%2BmTqjk%2BNRWddUQ91vIJktkJa84H3z5FxjdyiKE%2BzxS%2FyPjxSTxgeqxlpXvhTldtX%2FodEXDQthCorykmQJYr4KEY1HF5iLeVPlo2h0txcOsuynQ%2F7rgir2pKMfqEg4gTmau5A6kCGRaHesPDna%2B80n2Qyc3Htynq8irmyI8%2FX0jwJA8d9mcHEKid4fDInA3o2GNNO7zfE66cxD9yecLAFJNpsbcmWJq1OrguvleAMluapxlPUYRlc0XoNfeLunVSb8l%2Bi1Z9S5JyZOl6aruKUDSlHhxzz1OokExnlligGTVnokaf%2B1Ehg8VkOox%2BnGzlmfRC%2FsCigwzBZe26A7qUrMYSd5%2BPQVvOqwtbxwYae2vJcXIF3Dk0iotGqt6k37yCYat1h7cPoIOdyvjUeC0YwnNG6jHJtE%2BP2fpJtguDx5c%2FqixCl18%2FX6IEsS6DULGrX06g4f3DWMQ%2FW8niE7a4q89Noc1VivHS%2FoqVchrALd6hPULDCNgpHABjqkAZrnQWTonG2eUFtfG9OuKCp%2FD2mKerYwWRF%2FKBbGJcXxN%2BmiD1nf9kyesRU6DFzCFIch2pg8eSp89ysT4vQTyghkxBP8YELUx4YjDVh4LR5rddbyf%2BaYTdXIApeZmtvuI%2FBua4zidlnEe4tq6Y3Rq%2F3YT7sZenrTYOlKwwCkvu12%2B1nKz2WQpVnU50XCItMPrjhvBFusdYpvKIWB9E2N9XQ8HEbd&X-Amz-Signature=a5d34ffdc5554ffde9daf3d8cc9593ef4353acae943901a4d85c6f335cec0fe0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M7DVENF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDKEMKh9GovxawqGAiAVaBYVWjBSkfc5d8dY6X7XUrUUwIhAJJPTXZELeYQWQLjxFkKTpe87y0l%2FWc9a8OPuCN9GsXMKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5TE%2FPkO3Np7rqzU0q3AONGcPbujH5RBCEz5Alp5Ymni057voghdPO%2BFN8NXME%2BLL8TM8NDPbfc6mV5mTinG8%2B0gNEhAbmzmX4XLGFNY13vZ1SxZ7j9MgYKdGF23y0Iu3HIm2n5pqYAv3mSzSLIu8HPSnIE4gfARI%2BmTqjk%2BNRWddUQ91vIJktkJa84H3z5FxjdyiKE%2BzxS%2FyPjxSTxgeqxlpXvhTldtX%2FodEXDQthCorykmQJYr4KEY1HF5iLeVPlo2h0txcOsuynQ%2F7rgir2pKMfqEg4gTmau5A6kCGRaHesPDna%2B80n2Qyc3Htynq8irmyI8%2FX0jwJA8d9mcHEKid4fDInA3o2GNNO7zfE66cxD9yecLAFJNpsbcmWJq1OrguvleAMluapxlPUYRlc0XoNfeLunVSb8l%2Bi1Z9S5JyZOl6aruKUDSlHhxzz1OokExnlligGTVnokaf%2B1Ehg8VkOox%2BnGzlmfRC%2FsCigwzBZe26A7qUrMYSd5%2BPQVvOqwtbxwYae2vJcXIF3Dk0iotGqt6k37yCYat1h7cPoIOdyvjUeC0YwnNG6jHJtE%2BP2fpJtguDx5c%2FqixCl18%2FX6IEsS6DULGrX06g4f3DWMQ%2FW8niE7a4q89Noc1VivHS%2FoqVchrALd6hPULDCNgpHABjqkAZrnQWTonG2eUFtfG9OuKCp%2FD2mKerYwWRF%2FKBbGJcXxN%2BmiD1nf9kyesRU6DFzCFIch2pg8eSp89ysT4vQTyghkxBP8YELUx4YjDVh4LR5rddbyf%2BaYTdXIApeZmtvuI%2FBua4zidlnEe4tq6Y3Rq%2F3YT7sZenrTYOlKwwCkvu12%2B1nKz2WQpVnU50XCItMPrjhvBFusdYpvKIWB9E2N9XQ8HEbd&X-Amz-Signature=ba393381e7e2d6d0bf24e3828a6489c8b67878013bbdad965eac52fd9c343957&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
