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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKV6MHOX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx2YBvZCS0DFXqfpTWBLcE%2FRx1B4YXDTX9RW%2FB7GJa1QIhALxX3s1YaCSbrQj4mnUJoBeI3bWPWjMamfrFVlZTleFHKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVX0P%2FKOLf2b5D6M8q3APpkQwbwvZaIMsf3kayvRvTHjg0kjhBFiPccvwiseb%2BWWJF4ur5vWkYmUAnjS0x2EXymNpmuvX2DBnDpyGPVEntrK8zf4hfcvj35zTXVBWw8Uwsy73WHYjpW%2F9PK%2FLyY%2BU6SP9mN4utvXXXj3sFWh2FAXBKSRvUWDCArn2Z35JiKc3R3FnLmXFXJ6C7QyI6SXTGIlvyvw5it%2BRHw0eGzR8NjQqJ13QiT6oKYT%2BIOoVwlArhUufUqblkSBBe8Z3AjZNt2Rhy8xW%2F6J1dSrVxtC0SI62GFhxDpnMD7SL5cS9e25%2BtMx1y2bhoHX%2FXMZMQmUTsOTvlLxRwHACh9thrka43FiwTQfOqGbxTd1n2gA0N%2BvzBi6ktbgwkESrLS2xg%2B%2BfUL2LT3lw4bXqZFcEHXiekrADQaQpB0lF%2FkGB0wSIR7wbs5cUiE654vagqGd%2FxHsj1wk6tIHep4TqojBPJPZ0EzqgZWztUXwYt1Z1knuyp4gTZS4cLpN4iP%2FoHFCpuGCtAZyKOMFNqrvUy5cmFshUyd0ZqCLUzsBlnirKP40nejLrpRglQfokLVMchPUDwcDwZnnZytznkihacOF9ALfD5ZhQvIJG5Nc%2BjtfthlBZx%2FOybvO30BgFgJ%2FWvJzCG44O%2FBjqkAZ9vP4UMevf%2B7G5iC0skk1MaehQhh%2ByE6e8tRF9gZtnUdT%2F5%2BPna4kBjb4H8ZcoJHi%2FdmL3ukru8qtGwkpdRbPKliB6FeKDBRI%2BJTKyuCSORevx2BG1E2hkylKdBOMi5g7CNpjcm55NcezB0letiLWdtIuz8NUH4iY6%2BSE2Fw80MawEnkBUY4x8nW%2FR7pndkxP2TUY4LnMbiFLnhp7%2BLgVQenyiT&X-Amz-Signature=60b62f4561b60c29ffd4264503523baaec5fd107a162bf640df0247268089199&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKV6MHOX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx2YBvZCS0DFXqfpTWBLcE%2FRx1B4YXDTX9RW%2FB7GJa1QIhALxX3s1YaCSbrQj4mnUJoBeI3bWPWjMamfrFVlZTleFHKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVX0P%2FKOLf2b5D6M8q3APpkQwbwvZaIMsf3kayvRvTHjg0kjhBFiPccvwiseb%2BWWJF4ur5vWkYmUAnjS0x2EXymNpmuvX2DBnDpyGPVEntrK8zf4hfcvj35zTXVBWw8Uwsy73WHYjpW%2F9PK%2FLyY%2BU6SP9mN4utvXXXj3sFWh2FAXBKSRvUWDCArn2Z35JiKc3R3FnLmXFXJ6C7QyI6SXTGIlvyvw5it%2BRHw0eGzR8NjQqJ13QiT6oKYT%2BIOoVwlArhUufUqblkSBBe8Z3AjZNt2Rhy8xW%2F6J1dSrVxtC0SI62GFhxDpnMD7SL5cS9e25%2BtMx1y2bhoHX%2FXMZMQmUTsOTvlLxRwHACh9thrka43FiwTQfOqGbxTd1n2gA0N%2BvzBi6ktbgwkESrLS2xg%2B%2BfUL2LT3lw4bXqZFcEHXiekrADQaQpB0lF%2FkGB0wSIR7wbs5cUiE654vagqGd%2FxHsj1wk6tIHep4TqojBPJPZ0EzqgZWztUXwYt1Z1knuyp4gTZS4cLpN4iP%2FoHFCpuGCtAZyKOMFNqrvUy5cmFshUyd0ZqCLUzsBlnirKP40nejLrpRglQfokLVMchPUDwcDwZnnZytznkihacOF9ALfD5ZhQvIJG5Nc%2BjtfthlBZx%2FOybvO30BgFgJ%2FWvJzCG44O%2FBjqkAZ9vP4UMevf%2B7G5iC0skk1MaehQhh%2ByE6e8tRF9gZtnUdT%2F5%2BPna4kBjb4H8ZcoJHi%2FdmL3ukru8qtGwkpdRbPKliB6FeKDBRI%2BJTKyuCSORevx2BG1E2hkylKdBOMi5g7CNpjcm55NcezB0letiLWdtIuz8NUH4iY6%2BSE2Fw80MawEnkBUY4x8nW%2FR7pndkxP2TUY4LnMbiFLnhp7%2BLgVQenyiT&X-Amz-Signature=637865da38fdbe348ccaa9e713d47001ec67a4f5b0ab4d9c45cd631dc85c1d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
