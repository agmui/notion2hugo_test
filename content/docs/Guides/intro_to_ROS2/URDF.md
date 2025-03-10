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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCKVOBRJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQD4wathUcSHymLkKLFB6958OniSiiSPZe3FPeWkHuIldwIhANLCnik46f3hFtQ4PfN%2Bloeo%2Bhv%2FYCPCwKSlmeR0Q9TLKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa5kAob5qy3mA66Doq3AMkyc5CT%2B9oiY5jEnP%2FB9LdkK9%2FIli6Vwq6y53TsETnihBtOjfbUq3SgL3aqLXv4528sT888nmVGmnldLAsQxUnRCFLyZT0pZXGp4Q98BoTz1acGKeZq6ZMnJx5lActX5JGRQRitc527RoOxvldfoAFRY9fhLykw7%2BtCNZW0K19uYL4hzCJXvSWnULBqrmwaGQK9La5i6dB4qxnB6xXofKVanU9AF%2FGC5gC3GdG278zOJX8NfH2ucdp5wGvcTsbjHlHtZByigDcKMjOj0XL2PJGBEXyKl9B0%2FoEhKtZZkkDg7yLIybAkc8Uo9%2FMMNUE0%2BaKD4XoPt4NBV8ABrEpZ2mGToN3Uwiy9Emot61lEs9NX7yeR4JIlvsQBH2u1yPPFzGuexNQ%2F0%2FilxLMpm9y29OEiChZIo1LSA%2FZ7teaJMP04r%2FvLgwfSA%2B1UP%2BkBHwuVYYOh7nvpjxkHq3nNXLroDfM%2BxDe1phtvfaQZz1Mz1SJaO4GjhLZgpqero%2F9xjF7qgKVopNmt1C1pyg2yUDR4PtJObU55Oq7bwoRPIn%2FEoyc11dgxM5swSNx3BSq2vfX%2Fe4umQ3jIhOcSFYcAC0ukbc2pKgVdC2CytlZKBthCm2eGE1sPFUj4o0wreL%2F%2FTCS7Lu%2BBjqkASesv8MQqPoFaFSijwQLzjTV3essDnnB48Pe6l19qJSpza6k1BF9pZmu3zqfAj62eO7f5XVlBRg8Jc9%2FDMZTIhUvny8nPNqKJeSp4J%2BKpNHqWvWtOuoqcRfAs2rqf1zns%2BfvtEGVw0wqyepf%2FJ0h%2FTqiKpBif3VAX4jncwLCRn%2F%2BgYzMb7Fm19XQK7EUDdaVLt2vVqs%2Blne2852qBW8%2FjtiB08xc&X-Amz-Signature=6d56e0a7133ae526b7870abd037d053c1416057c1b72f80cce6263e2007964c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCKVOBRJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQD4wathUcSHymLkKLFB6958OniSiiSPZe3FPeWkHuIldwIhANLCnik46f3hFtQ4PfN%2Bloeo%2Bhv%2FYCPCwKSlmeR0Q9TLKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa5kAob5qy3mA66Doq3AMkyc5CT%2B9oiY5jEnP%2FB9LdkK9%2FIli6Vwq6y53TsETnihBtOjfbUq3SgL3aqLXv4528sT888nmVGmnldLAsQxUnRCFLyZT0pZXGp4Q98BoTz1acGKeZq6ZMnJx5lActX5JGRQRitc527RoOxvldfoAFRY9fhLykw7%2BtCNZW0K19uYL4hzCJXvSWnULBqrmwaGQK9La5i6dB4qxnB6xXofKVanU9AF%2FGC5gC3GdG278zOJX8NfH2ucdp5wGvcTsbjHlHtZByigDcKMjOj0XL2PJGBEXyKl9B0%2FoEhKtZZkkDg7yLIybAkc8Uo9%2FMMNUE0%2BaKD4XoPt4NBV8ABrEpZ2mGToN3Uwiy9Emot61lEs9NX7yeR4JIlvsQBH2u1yPPFzGuexNQ%2F0%2FilxLMpm9y29OEiChZIo1LSA%2FZ7teaJMP04r%2FvLgwfSA%2B1UP%2BkBHwuVYYOh7nvpjxkHq3nNXLroDfM%2BxDe1phtvfaQZz1Mz1SJaO4GjhLZgpqero%2F9xjF7qgKVopNmt1C1pyg2yUDR4PtJObU55Oq7bwoRPIn%2FEoyc11dgxM5swSNx3BSq2vfX%2Fe4umQ3jIhOcSFYcAC0ukbc2pKgVdC2CytlZKBthCm2eGE1sPFUj4o0wreL%2F%2FTCS7Lu%2BBjqkASesv8MQqPoFaFSijwQLzjTV3essDnnB48Pe6l19qJSpza6k1BF9pZmu3zqfAj62eO7f5XVlBRg8Jc9%2FDMZTIhUvny8nPNqKJeSp4J%2BKpNHqWvWtOuoqcRfAs2rqf1zns%2BfvtEGVw0wqyepf%2FJ0h%2FTqiKpBif3VAX4jncwLCRn%2F%2BgYzMb7Fm19XQK7EUDdaVLt2vVqs%2Blne2852qBW8%2FjtiB08xc&X-Amz-Signature=e0943751c8b5e79bdbd929dfe81568de25f52fe3fd52f64a7b8e5892a77f69df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
