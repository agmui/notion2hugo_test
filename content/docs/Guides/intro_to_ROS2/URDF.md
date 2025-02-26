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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKHJQFC7%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD5BWL0GVa0wb92gkPybxIo4vNYKXbvqbDNq63m03LVmgIhAO8SEzDbbzoZ7fBTC7Vs09GG5%2FgoromGjiQ%2Fl%2FTK0qf3Kv8DCFEQABoMNjM3NDIzMTgzODA1Igw2KKvdtXDEuXQqruUq3AMOo2xdRABmcLU1MBWGmvrHRMWNvOBdwxsyfP3nRqu%2BChN2mryypNt3Sv2nLh%2BP%2F6qrJPNQQKFR7CyF4uqYJIL5TR9EPr6%2BJu9C7RLugnLh6f7nxj2f5vpWxwJnFIHsqNuyE2DxTXpXnrgARKKy%2Fl1pt7Us762LA%2FtMa20qeCpWgAcCnNTOyq68Drrm5lfWdWZDSMeNAi48Q53k84fN%2FPyfUF6T9JHmiBp7TVei9NK%2FrMqB30Z3j2iCIBqY%2Bq%2Bz%2FL8HGw4E3qER3pHp7kooFrPC15Q9wq0WMs4Odl7TUsTIwrvqb4Msy3OOY2ahSakF5sRLPYL0DCPm2yZP0v0Er15trcekc1UJueKNYuY9JalsFG0qgLY35uvPSSH2VJF0J0tnMjUI42%2FBwGF3wiSLbLgzcVdBHSk6IdAyfeHH5X7nEkIvTe0Ptd58lD%2B1hTcpEshayDuGtv4cOSAIWiK1n2VyeJW3z06FPmSrTBCiGDnPbFTgkLhUKRxs%2FlaEt0%2Bnqjfnfyt7DErAOCTuwVwwbdyOK1nTDzGfQWaruBXLptw%2BaUtV2BmgI2pCmBr8uF48tup1ZRrkG2ImwmQzkanGRSpeOyOW0sPTLoXKScskuK%2FLPmAN3I8H40Ga%2BoW%2BnzD7vPm9BjqkAS1%2BeBGcvvHW7axKOqDlxb2zf7otcOk6e450TSgOmRsL5iIU7MpUU8aoBGiVORWnIMvNdr8dr5l14OtVO9UwYga%2FFsRF4YE3nVUrdw9ttJEWaGcCe4jeyH3PLvXezHh%2BZNgLfpkh9ZRN2NJ%2BoGxrpXYFDg41IaNGFUYriPA1Ivb7ESE%2FS4XUdcUXbUT8ChbPEdLHLS0Ys7cHyVtuFrCV0zEazQxC&X-Amz-Signature=08558c675bf9ca4d80155ab4ae3bdaf5f49e74b60a51e1b151fa83acd9dbaf28&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKHJQFC7%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD5BWL0GVa0wb92gkPybxIo4vNYKXbvqbDNq63m03LVmgIhAO8SEzDbbzoZ7fBTC7Vs09GG5%2FgoromGjiQ%2Fl%2FTK0qf3Kv8DCFEQABoMNjM3NDIzMTgzODA1Igw2KKvdtXDEuXQqruUq3AMOo2xdRABmcLU1MBWGmvrHRMWNvOBdwxsyfP3nRqu%2BChN2mryypNt3Sv2nLh%2BP%2F6qrJPNQQKFR7CyF4uqYJIL5TR9EPr6%2BJu9C7RLugnLh6f7nxj2f5vpWxwJnFIHsqNuyE2DxTXpXnrgARKKy%2Fl1pt7Us762LA%2FtMa20qeCpWgAcCnNTOyq68Drrm5lfWdWZDSMeNAi48Q53k84fN%2FPyfUF6T9JHmiBp7TVei9NK%2FrMqB30Z3j2iCIBqY%2Bq%2Bz%2FL8HGw4E3qER3pHp7kooFrPC15Q9wq0WMs4Odl7TUsTIwrvqb4Msy3OOY2ahSakF5sRLPYL0DCPm2yZP0v0Er15trcekc1UJueKNYuY9JalsFG0qgLY35uvPSSH2VJF0J0tnMjUI42%2FBwGF3wiSLbLgzcVdBHSk6IdAyfeHH5X7nEkIvTe0Ptd58lD%2B1hTcpEshayDuGtv4cOSAIWiK1n2VyeJW3z06FPmSrTBCiGDnPbFTgkLhUKRxs%2FlaEt0%2Bnqjfnfyt7DErAOCTuwVwwbdyOK1nTDzGfQWaruBXLptw%2BaUtV2BmgI2pCmBr8uF48tup1ZRrkG2ImwmQzkanGRSpeOyOW0sPTLoXKScskuK%2FLPmAN3I8H40Ga%2BoW%2BnzD7vPm9BjqkAS1%2BeBGcvvHW7axKOqDlxb2zf7otcOk6e450TSgOmRsL5iIU7MpUU8aoBGiVORWnIMvNdr8dr5l14OtVO9UwYga%2FFsRF4YE3nVUrdw9ttJEWaGcCe4jeyH3PLvXezHh%2BZNgLfpkh9ZRN2NJ%2BoGxrpXYFDg41IaNGFUYriPA1Ivb7ESE%2FS4XUdcUXbUT8ChbPEdLHLS0Ys7cHyVtuFrCV0zEazQxC&X-Amz-Signature=06665433c46bd723c57fbd4ea41ad993f34f4761a3ef8cdf22e3436ca344b2ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
