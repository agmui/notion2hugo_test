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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUY5E7YA%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEHpZbj%2Bu1M%2BoMhWeekPKpb90C%2BjfKJdlsGbAL%2Ftrw%2FmAiEA1X2mEsEGbk249Gex%2FrHf6MDBmyWZlt2oGRpsJuK8L2EqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtfy5V1Yu743wZltSrcA%2FFhNwOGPiZg%2F2MPJ4cNAfngRycV7WXhjiJnFV9FpqVCH9%2BEtvWxHxaJFw%2FVqKBhm0LxuEYQ9zO80o%2F2XmRTmOcX3%2B55hALAy3C2vc0OnONkg8tg97AyXr8OxNSIBUTtKZf%2F3cLxAHwpgiF2ybDCPNIiOLwdJrG9L61pY9iCBbKVV8ZIjyioWgpGlhoRhjkAiiWCLX0rCkySCwW6Fasy3hx65bIqI3nPZ8f83vOlNmxK7DMIC4SCQmvFC6VzdJ4gxULRIAyg16fPEP2mQPF3gR3Ec6zmogOvZhxrDEskfiGxqOvIcV575fsQ3jsp90B82TD5mF%2Fxs%2FV%2FZayoyKJfZHa4FZWIq2NDiVrgkvwO5KcaUTIcXJw4h1yRHsh5JMOz0nMO9KbCzSUPddwqNfqPZddnQguvstfLB3XNJ1ngF6Tb1eOLoAEv74ZRRdFn4D7%2BDafYI0GzLS4p1K0eJLPUhqhM%2BIqfbKc3l1JAAljKbJcMQAsPulWmkdMPUidHTca6C4FcYgJLZaoxQABiEX83JlUOF38bGswizWteFMRo7i4VW8JWHCd%2FOCMDfw3ubbKe9kmeWn2d4cLPbCEstgtWJU9L%2BPcUsi4Fj4uMY79V8g2SDN%2BK3u1SIcei40ERMO2G1sAGOqUBh3fWprwcPdOn94ruK0Nn%2BZTCi6uZ%2BEiVXCztFG%2B4A1kwQKofaaiz4ws8mTWqfMo1MVk5sokwk9iqKIlseJ25A74SZ1lSDLg6umbdhTt81IuTymds0b%2FxiTLzGtxxplPICz%2BVpD4mEegI2rXkPemCpBogcUzzoh%2FKYXN1gwYW7ec6TIZVS4Ple%2BXTNg%2BYFbh7vnpie4YGzOGhLCBYVRuBycVvKDDZ&X-Amz-Signature=9148dec2368ac7fffd3439ec2ce3aa4c2d58b0c3e095bc25db3c54bed20fbaa5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUY5E7YA%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEHpZbj%2Bu1M%2BoMhWeekPKpb90C%2BjfKJdlsGbAL%2Ftrw%2FmAiEA1X2mEsEGbk249Gex%2FrHf6MDBmyWZlt2oGRpsJuK8L2EqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtfy5V1Yu743wZltSrcA%2FFhNwOGPiZg%2F2MPJ4cNAfngRycV7WXhjiJnFV9FpqVCH9%2BEtvWxHxaJFw%2FVqKBhm0LxuEYQ9zO80o%2F2XmRTmOcX3%2B55hALAy3C2vc0OnONkg8tg97AyXr8OxNSIBUTtKZf%2F3cLxAHwpgiF2ybDCPNIiOLwdJrG9L61pY9iCBbKVV8ZIjyioWgpGlhoRhjkAiiWCLX0rCkySCwW6Fasy3hx65bIqI3nPZ8f83vOlNmxK7DMIC4SCQmvFC6VzdJ4gxULRIAyg16fPEP2mQPF3gR3Ec6zmogOvZhxrDEskfiGxqOvIcV575fsQ3jsp90B82TD5mF%2Fxs%2FV%2FZayoyKJfZHa4FZWIq2NDiVrgkvwO5KcaUTIcXJw4h1yRHsh5JMOz0nMO9KbCzSUPddwqNfqPZddnQguvstfLB3XNJ1ngF6Tb1eOLoAEv74ZRRdFn4D7%2BDafYI0GzLS4p1K0eJLPUhqhM%2BIqfbKc3l1JAAljKbJcMQAsPulWmkdMPUidHTca6C4FcYgJLZaoxQABiEX83JlUOF38bGswizWteFMRo7i4VW8JWHCd%2FOCMDfw3ubbKe9kmeWn2d4cLPbCEstgtWJU9L%2BPcUsi4Fj4uMY79V8g2SDN%2BK3u1SIcei40ERMO2G1sAGOqUBh3fWprwcPdOn94ruK0Nn%2BZTCi6uZ%2BEiVXCztFG%2B4A1kwQKofaaiz4ws8mTWqfMo1MVk5sokwk9iqKIlseJ25A74SZ1lSDLg6umbdhTt81IuTymds0b%2FxiTLzGtxxplPICz%2BVpD4mEegI2rXkPemCpBogcUzzoh%2FKYXN1gwYW7ec6TIZVS4Ple%2BXTNg%2BYFbh7vnpie4YGzOGhLCBYVRuBycVvKDDZ&X-Amz-Signature=09685e5b56cf14769dfa08b8336d1141cc370eedb6a1f978860545fd89f1cfb6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
