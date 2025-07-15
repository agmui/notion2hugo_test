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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7KAIQKD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCtD7hAKONRcSVzVgkhfO5T2zSt5v%2FYeogVBurcb2R6FQIhAME%2BM4DPfZFR6jSSzwVSup14cPF2dDns85tjMvSsEP2zKv8DCDkQABoMNjM3NDIzMTgzODA1IgzvqOqB1HLEKZUnzbUq3APdCI0%2FqbVV2YiqhDoi2AI7W6ERXVx6KzVloeWB%2FbxExInh1aAhoXCd5XH6JRbIwQ%2FQm5t%2FxQZ2W1iqSvg2IvbY%2FfzvBin0a68nOCC00RHsqql9pTrZk6YrTxx7iELJHFE2Z%2FIg%2F6y9%2FmfeMPH0SQR08Zq%2BgQLmrDx43OYs6T9GPTzTM6QcBUF15ZiwmRP34t%2Bix0HQTLFtgNyB69X%2FJGfevkxsbIPrOAjI%2FBVJVolSMYMBHnZ8nywrjdMVVdAadPVBsvsERP4sAKLM0dXCr3tyWMTKZ2NYwhSJx61IfCnYym6IpgPYLdT7lSiLG46JzA8jwt7K6CHIydA0%2BPFapQlhK6iEuKaHvRtdSnxkqFzTvJK1NHOT8kveJ%2BrgwUXK3D01fg0nChnEMplg4w1Dn6A7mQvXM1tq4B31xR%2Fo7yUKISfeoElqw1%2FERP1yX1QwETzHs7rDZzmp7PpGkDNeuArlPW9fkUrGPGLgL9%2FboUEoUKc2YLvcq63LtdP51eUEMZlImOTJ%2FPCjIG7L8ZvbCNo7oa3Yk9LnhdelL9vHEGysVQimR6v%2FiNiAFuocyeYtlRgBFeIAuQcE0aFYalYyw1zwRv0OTEZoIaqWA9EZMXISnIyK7uTCtBNFIJV0hTDApNbDBjqkAbidcq2fHsJ31EeOiVdM1sRsCucBE%2Bfyl%2Ft%2FOtDqW78Rnw5E4TH0ALxU5pkDXdZE69lbs%2FpXZy22od%2Bqh2MHI4luZWXxtdYGuW%2FhZIBgMBjQv7ORiGn2DSC8FSnvOIBJ7AuMg7sV2LKd%2F1paAK0EuraSUiiDo8nPh4mjb1Yo1Jxoy%2F33ty0t8SSnKFSNpICP3v%2Fye8jhOU9%2BuhMO4ea6d9qzRl23&X-Amz-Signature=9ab49b2794fd2a570897369d3c27ab2cb80a48faa9291b705134e62c0cbdd256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7KAIQKD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCtD7hAKONRcSVzVgkhfO5T2zSt5v%2FYeogVBurcb2R6FQIhAME%2BM4DPfZFR6jSSzwVSup14cPF2dDns85tjMvSsEP2zKv8DCDkQABoMNjM3NDIzMTgzODA1IgzvqOqB1HLEKZUnzbUq3APdCI0%2FqbVV2YiqhDoi2AI7W6ERXVx6KzVloeWB%2FbxExInh1aAhoXCd5XH6JRbIwQ%2FQm5t%2FxQZ2W1iqSvg2IvbY%2FfzvBin0a68nOCC00RHsqql9pTrZk6YrTxx7iELJHFE2Z%2FIg%2F6y9%2FmfeMPH0SQR08Zq%2BgQLmrDx43OYs6T9GPTzTM6QcBUF15ZiwmRP34t%2Bix0HQTLFtgNyB69X%2FJGfevkxsbIPrOAjI%2FBVJVolSMYMBHnZ8nywrjdMVVdAadPVBsvsERP4sAKLM0dXCr3tyWMTKZ2NYwhSJx61IfCnYym6IpgPYLdT7lSiLG46JzA8jwt7K6CHIydA0%2BPFapQlhK6iEuKaHvRtdSnxkqFzTvJK1NHOT8kveJ%2BrgwUXK3D01fg0nChnEMplg4w1Dn6A7mQvXM1tq4B31xR%2Fo7yUKISfeoElqw1%2FERP1yX1QwETzHs7rDZzmp7PpGkDNeuArlPW9fkUrGPGLgL9%2FboUEoUKc2YLvcq63LtdP51eUEMZlImOTJ%2FPCjIG7L8ZvbCNo7oa3Yk9LnhdelL9vHEGysVQimR6v%2FiNiAFuocyeYtlRgBFeIAuQcE0aFYalYyw1zwRv0OTEZoIaqWA9EZMXISnIyK7uTCtBNFIJV0hTDApNbDBjqkAbidcq2fHsJ31EeOiVdM1sRsCucBE%2Bfyl%2Ft%2FOtDqW78Rnw5E4TH0ALxU5pkDXdZE69lbs%2FpXZy22od%2Bqh2MHI4luZWXxtdYGuW%2FhZIBgMBjQv7ORiGn2DSC8FSnvOIBJ7AuMg7sV2LKd%2F1paAK0EuraSUiiDo8nPh4mjb1Yo1Jxoy%2F33ty0t8SSnKFSNpICP3v%2Fye8jhOU9%2BuhMO4ea6d9qzRl23&X-Amz-Signature=70c908d746dd536fb2556ca87d8a327eee2a9e2e2457581cac19f6129c1c0fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
