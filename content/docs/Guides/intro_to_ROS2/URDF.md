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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVE33UEF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDm8m802LzLWmX8XbeioeoCaGejHC9Qcb9oQXvsJjJppwIhALp0pHmGE%2FRLZwMnGO3THmV%2F9OUd2YRV1uETheUkx7KkKv8DCDcQABoMNjM3NDIzMTgzODA1IgxvRyue3SRoz55C5DUq3AMFZxcpSRp18Eb%2FqhUCcAZ1QW%2FvfAsAK3rsZcQLiwJkVM1fvaeaUmK5Tahn9T5qFKgNc89%2FyCNLQSaXy6G95GOI%2FcQOAMfqtSMvvRHhFc%2BCc5GSQ69dcrsFBX0tm9Vm9gtFqetCLO9qZS9i5sGTvFPLaD3DAuxDyGI441YzGMZjE5QoD9iydmCmOemKJAA9OGTlvnOvW1smwcpq36DEYsfGYj%2BPxlhauhklS1BHO0NtvA%2Bg9m3sH7rIPc%2B2tRb6NkGbtH2LxVA%2BbhUB1YbAE1CKLcewNl%2FcgmCNm89EQpnQqGwNURB2Nb61WvATKyD%2F23QNFPf1GwEhFx7wqoQLeNGLWku%2BzPxnwIeEf5MgcH03rtB4L8sW7W4OmZUOJwkl08lfsxmDBGvbRNnCFDMRkRk6b9C03YPSgLLWTLXMJFgjLuoZtTuE1P1ThxLCNDx4L0z78yzcY6sw%2FOaZk1ZSocVJWcp2xr1xJnRpU4%2BhssgHyFvdz9JPedJ639KDKetiqWsgtfwud0zup1N2%2F%2FvJoqwxPO6RyNWSbcS%2FkocvJWA7PC3n4lQQSk7vAqIzJ2NXiiY0su8Nvmrp0AI4SZErCqFyT%2BQg56Uxx5sB%2BeAOSYVCq7nfyDE4nbI%2F5EukbTCz99XDBjqkASvXBgZYSXyPNL67kvYV3D2gYQsj97wHwKnelkHRCb5HAF9yyFAxllbcJcFZDzKSfVSzmjsJEmrkZq1c21Rcpzc6C5AI%2BpcvkTejXNIBkPIe5STKkoVWFgabz%2Fsmv%2FQnnoguwQXe6UJ3%2FATQSoWLtSDd60V%2FnmioK6BFpBCTqjs6CTnrx6UxLgCryedPdHP8bip%2Bfsg%2BnedifAhicuaQ8dA5ejcV&X-Amz-Signature=c3684c6fad673efa738bc6c4b6d35db52b7589bc62a7b04f4ac210cf28b2308c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVE33UEF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDm8m802LzLWmX8XbeioeoCaGejHC9Qcb9oQXvsJjJppwIhALp0pHmGE%2FRLZwMnGO3THmV%2F9OUd2YRV1uETheUkx7KkKv8DCDcQABoMNjM3NDIzMTgzODA1IgxvRyue3SRoz55C5DUq3AMFZxcpSRp18Eb%2FqhUCcAZ1QW%2FvfAsAK3rsZcQLiwJkVM1fvaeaUmK5Tahn9T5qFKgNc89%2FyCNLQSaXy6G95GOI%2FcQOAMfqtSMvvRHhFc%2BCc5GSQ69dcrsFBX0tm9Vm9gtFqetCLO9qZS9i5sGTvFPLaD3DAuxDyGI441YzGMZjE5QoD9iydmCmOemKJAA9OGTlvnOvW1smwcpq36DEYsfGYj%2BPxlhauhklS1BHO0NtvA%2Bg9m3sH7rIPc%2B2tRb6NkGbtH2LxVA%2BbhUB1YbAE1CKLcewNl%2FcgmCNm89EQpnQqGwNURB2Nb61WvATKyD%2F23QNFPf1GwEhFx7wqoQLeNGLWku%2BzPxnwIeEf5MgcH03rtB4L8sW7W4OmZUOJwkl08lfsxmDBGvbRNnCFDMRkRk6b9C03YPSgLLWTLXMJFgjLuoZtTuE1P1ThxLCNDx4L0z78yzcY6sw%2FOaZk1ZSocVJWcp2xr1xJnRpU4%2BhssgHyFvdz9JPedJ639KDKetiqWsgtfwud0zup1N2%2F%2FvJoqwxPO6RyNWSbcS%2FkocvJWA7PC3n4lQQSk7vAqIzJ2NXiiY0su8Nvmrp0AI4SZErCqFyT%2BQg56Uxx5sB%2BeAOSYVCq7nfyDE4nbI%2F5EukbTCz99XDBjqkASvXBgZYSXyPNL67kvYV3D2gYQsj97wHwKnelkHRCb5HAF9yyFAxllbcJcFZDzKSfVSzmjsJEmrkZq1c21Rcpzc6C5AI%2BpcvkTejXNIBkPIe5STKkoVWFgabz%2Fsmv%2FQnnoguwQXe6UJ3%2FATQSoWLtSDd60V%2FnmioK6BFpBCTqjs6CTnrx6UxLgCryedPdHP8bip%2Bfsg%2BnedifAhicuaQ8dA5ejcV&X-Amz-Signature=fca945d90cd7d0734f1375b86a1caa53e83070b6979e38efb0785baaa38eeb47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
