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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXHME7SW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEpFSt3zwXSe3mbHg%2B99jIanAn9wCjU9qzMIVf375E3MAiBbs302zZap0%2FwRGLMmTjaZZS8xc0n%2Bcm9tuF4gaT9lVCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWpGXsEUY1kR3t2JeKtwDGZYFMqxzg9ebYBHAFFhXJZF7kcJc8E%2BeQJzyocVEi9uzsd6qTvN%2Bh73tn2l5tFAM4R56puyw%2FokQGy%2FuD3vpX2wy5016%2FeDvFfpZKB2uHIatQDAVo2%2BheyMj9YRuWTFOpTVUZPRWNnwtnHRzZLmwqezWGvmybbzsccL7Ky5zx7ZIVtDDqOmVoTGUjOCJDEQF%2FVcIfaitM%2F5NZdvCATbtVYFcqpoOhaeleHKMK8YKEVMvZYdYsWuSaEB2gbILjtZSvVYz9s1sQP4ytjVk3rgN7qOjWS7ary4GLGEW72nrPbJZCES1mh3AW%2BSL4GZmLXw3ntpgEt9DqbGeKFvLCTrcuRnl6kh7NE9qQpAlJrM0HTIEQgaHpH7koQ9MaeoNo3kyFXz0xVAB%2FJNyjHGeHNo%2FWTPm30tFhPWOIKaUsRuJ%2FCqzPMGXMYVd7huBb2ziM3jTEFu2Ex1ZANJhuAFci09tlF%2BeuH3ZTvJPRQAzUnFO2K4mRcvivXM4VPW85Q%2F0doZCBtz3hm7zPtNAzfnyO4a7DAS%2F%2Buiqj0hjdsYahg6hpKMzvFOBWuOtlYlBQTa%2BdtxXiXSs2VGrSvHZFPP65wRb%2FcJnGuCHk20YDnybuIlDpdZcIedBiX%2FAwLBFwYEwuoDJwAY6pgG%2FwbIi5ZQT1oE745tKkCoES45pZIkPEgSLazcnu7138KqaJzOtH%2BmLLsESUMGK78O03Nm37NLytmUYRC14eBvRtUQTaVEBykb2E6u%2BHCQBrpDkeIsKPF15zFErgF1qQQP15hTn6fp%2F5ct%2Bgt07SDPofmlIonuZ%2BdS1FmBKvpAdC5bLkmMhxw7pW8VQBLUrkL5HDsk%2Fn24rinUw1Vfy%2F7ybPbB3mofL&X-Amz-Signature=f61653d489e089b9fa09abde962369b46f5940b523f0b35eff6a88919260cc58&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXHME7SW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEpFSt3zwXSe3mbHg%2B99jIanAn9wCjU9qzMIVf375E3MAiBbs302zZap0%2FwRGLMmTjaZZS8xc0n%2Bcm9tuF4gaT9lVCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWpGXsEUY1kR3t2JeKtwDGZYFMqxzg9ebYBHAFFhXJZF7kcJc8E%2BeQJzyocVEi9uzsd6qTvN%2Bh73tn2l5tFAM4R56puyw%2FokQGy%2FuD3vpX2wy5016%2FeDvFfpZKB2uHIatQDAVo2%2BheyMj9YRuWTFOpTVUZPRWNnwtnHRzZLmwqezWGvmybbzsccL7Ky5zx7ZIVtDDqOmVoTGUjOCJDEQF%2FVcIfaitM%2F5NZdvCATbtVYFcqpoOhaeleHKMK8YKEVMvZYdYsWuSaEB2gbILjtZSvVYz9s1sQP4ytjVk3rgN7qOjWS7ary4GLGEW72nrPbJZCES1mh3AW%2BSL4GZmLXw3ntpgEt9DqbGeKFvLCTrcuRnl6kh7NE9qQpAlJrM0HTIEQgaHpH7koQ9MaeoNo3kyFXz0xVAB%2FJNyjHGeHNo%2FWTPm30tFhPWOIKaUsRuJ%2FCqzPMGXMYVd7huBb2ziM3jTEFu2Ex1ZANJhuAFci09tlF%2BeuH3ZTvJPRQAzUnFO2K4mRcvivXM4VPW85Q%2F0doZCBtz3hm7zPtNAzfnyO4a7DAS%2F%2Buiqj0hjdsYahg6hpKMzvFOBWuOtlYlBQTa%2BdtxXiXSs2VGrSvHZFPP65wRb%2FcJnGuCHk20YDnybuIlDpdZcIedBiX%2FAwLBFwYEwuoDJwAY6pgG%2FwbIi5ZQT1oE745tKkCoES45pZIkPEgSLazcnu7138KqaJzOtH%2BmLLsESUMGK78O03Nm37NLytmUYRC14eBvRtUQTaVEBykb2E6u%2BHCQBrpDkeIsKPF15zFErgF1qQQP15hTn6fp%2F5ct%2Bgt07SDPofmlIonuZ%2BdS1FmBKvpAdC5bLkmMhxw7pW8VQBLUrkL5HDsk%2Fn24rinUw1Vfy%2F7ybPbB3mofL&X-Amz-Signature=1b6d5f035a1af0d13e08260a7e5d14326155ca8a293c35d05018ab703f39b87e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
