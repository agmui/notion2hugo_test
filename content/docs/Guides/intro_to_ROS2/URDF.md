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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUK7C76Q%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9Nny3OFuz6Q0osPDbWI3WVXn%2BjAeRk05Ew1N2MUrBwAiBgvIM%2BQMmmgyGyad4CGSTMOXsR2tV5utpvxppvJJs53Sr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMiW74ajLiAq8rXgf%2BKtwDNeFuGz%2F5%2FkxCjdV8FYj2OKMQO8RHpHqwz%2FiroSuaWwbc1zg3YZ%2FLF0MZTA%2F572l3ivLZASFYEsnf0lRfPjSCUs%2BKU56WsJ1Zay9GG44M7%2Fi2HQe4KHJPFL3swTjL%2BwTLYIJHvYhmuLh6dp2wod2pWIJiUcHBWVB%2F1rOJeTAqjlFIBRR9ds4HBjzXMXGtJ3Xv0XSkqT3Tsbns6KwAoUNPKPQRvWsEIYoC%2Boh2iuMWVzxYnWh5A8oAVU4XEh5RUqz7pBKPV46j6donrBsg4e0xLe4mUEJBJHe%2F6ytIHSMIJZ7DfgwbFSy5ty%2BG0jsZC4rtzc%2ByghBh%2FUx24CkAx4e6i0sTmuCTRAx2GdjXeQ2u9Pls%2BvAAK8jxoRmJDiZX2RpU6p7bZvi1U84sq%2FQCTVzvPI1HRIXa9jAXOKCr%2F5Akur6Mi8gn586iAdXiBhslP2YtmuJj8aWmebnh3ntAZ1HEskeay9EhX8keZSY%2Bmmft9fzDPjXK8SRTe5xTx%2FK9gIWVvIAz%2BirtJ%2Fp8hH63U8TrBbPJNwcCPNLBka4z5xVhyBvcHFbFIo1qHt%2FBc4XlZTXqAIA86mPt6WWVZO7IxUgExnXcOUdOrzKvHktjMvefYXLEa4hC5NOwXmID3UcwtrehvgY6pgGQ6L6qW09jHmeXzRNMjhPvT5yk3oZ33sATZzdZytLOlg4B33UWFL1oF8TJgCkutL6PlfnJpP351H0CYAVelt69EgTPerfUmuyzHJJ99WxRoCdHEcwsdveJevpNfmbc2oO7yC7Dg9EKIdnmcB%2Bbq%2FJ5kXgS%2FjCruZorAKm9f2DpfWNHHxaC8XqR0EukrLQsZHHsAE2Vq1Y9EWgY2JPCOdh2t02E7bKo&X-Amz-Signature=96815cdb00f1698413b51baa63a4df93457e61fe5631efe03b5262c1a502f0ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUK7C76Q%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9Nny3OFuz6Q0osPDbWI3WVXn%2BjAeRk05Ew1N2MUrBwAiBgvIM%2BQMmmgyGyad4CGSTMOXsR2tV5utpvxppvJJs53Sr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMiW74ajLiAq8rXgf%2BKtwDNeFuGz%2F5%2FkxCjdV8FYj2OKMQO8RHpHqwz%2FiroSuaWwbc1zg3YZ%2FLF0MZTA%2F572l3ivLZASFYEsnf0lRfPjSCUs%2BKU56WsJ1Zay9GG44M7%2Fi2HQe4KHJPFL3swTjL%2BwTLYIJHvYhmuLh6dp2wod2pWIJiUcHBWVB%2F1rOJeTAqjlFIBRR9ds4HBjzXMXGtJ3Xv0XSkqT3Tsbns6KwAoUNPKPQRvWsEIYoC%2Boh2iuMWVzxYnWh5A8oAVU4XEh5RUqz7pBKPV46j6donrBsg4e0xLe4mUEJBJHe%2F6ytIHSMIJZ7DfgwbFSy5ty%2BG0jsZC4rtzc%2ByghBh%2FUx24CkAx4e6i0sTmuCTRAx2GdjXeQ2u9Pls%2BvAAK8jxoRmJDiZX2RpU6p7bZvi1U84sq%2FQCTVzvPI1HRIXa9jAXOKCr%2F5Akur6Mi8gn586iAdXiBhslP2YtmuJj8aWmebnh3ntAZ1HEskeay9EhX8keZSY%2Bmmft9fzDPjXK8SRTe5xTx%2FK9gIWVvIAz%2BirtJ%2Fp8hH63U8TrBbPJNwcCPNLBka4z5xVhyBvcHFbFIo1qHt%2FBc4XlZTXqAIA86mPt6WWVZO7IxUgExnXcOUdOrzKvHktjMvefYXLEa4hC5NOwXmID3UcwtrehvgY6pgGQ6L6qW09jHmeXzRNMjhPvT5yk3oZ33sATZzdZytLOlg4B33UWFL1oF8TJgCkutL6PlfnJpP351H0CYAVelt69EgTPerfUmuyzHJJ99WxRoCdHEcwsdveJevpNfmbc2oO7yC7Dg9EKIdnmcB%2Bbq%2FJ5kXgS%2FjCruZorAKm9f2DpfWNHHxaC8XqR0EukrLQsZHHsAE2Vq1Y9EWgY2JPCOdh2t02E7bKo&X-Amz-Signature=77e4d31de21462e41793131947bb4199b91f2c302cdd1c60561e9db392bb0f36&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
