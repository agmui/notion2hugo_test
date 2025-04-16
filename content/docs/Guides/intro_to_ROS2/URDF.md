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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVOLYTUE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAag8i8oCsUO6olRGOuu5Khp4O5q1FVqgffjIPV0cAo9AiEApHJDJ1G%2BU6Edf0U8NwhDiGr6UwfiUaWWsttG2cSjsUsq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDPtxu8jVn2r4WKgCoSrcA0cK0dTGzdBQhmhXgDI2GzpYhblU%2BV0qk864DNNDUU1jDIWO1Xby7k0j9JB6CED8D5ciT4a78x9WthhV0W7ij020HiDyRXeYGksKjsusdjYr6XZ5HJ1HRWBpyC3GYgi1gKn6hAatScb49UVOqRfMQNb5Sq0lYaiOqw1YhSt3iFAMFt6JZeV3v6j3lMVR1VJuF13y2vy0NfXupwvEXx3Bi%2FlNJ4utzqNNqeAfuscSYnNgikB2NfeFMhVUDURuQmT%2FXhElsGIFYDtoS9YH1cuWTgOTzgqaOrldrkEZ8Wr7s2oNUrNb8riHoj%2BdIWBj5oWULcs7XgvEOgx%2B%2BY86yOYHTk516OIX2bpGZCPDdtzq%2FnsFlrWCPaIJnycUBmjQuN733k%2FsNJ760Ce9PrUXWL41y5Z6BU6MEaQwe4FrWh6SZ8GhEvsXITLgZ36ik9tmU%2Bh3jhPv%2BQx4SW%2Fvc42aY6JKjeqOyBe7UY7Ct1Gy1IWBxOb5r%2B3ANeWwRHAfB3B7FS9jz0wzaXXKqKTx8mMxROS1h1IsuN2teTVhDIYYAgYMwKHZjWZzR4Rslc%2FvGV7%2FcrzLltOllcMvLtjQ7O7S6g6irRZh4Cf1CiZM9AVytq6wVZ49OdOA1vqadf9%2BGm6GMKTw%2B78GOqUBCyGeHeXrCzfooYB175HwRbxHNGglBmH0VlE8f1CobTPus5QKEd9jFcURwt5AeSqjpeXutdRLvuQf1XCvZ2ArBdGvkqjAOZzw1TtCveL0CCHHmS%2FBXLs%2Fynx1A24kYXNEazx3bnattaT2ZC6TdaObHjsVFOorY7OMcWQKj2iBw7AjmBiX2oRSrjQ9R8PnRihxrEoE6hBLu%2BGxtGtHQmPBBArUVge0&X-Amz-Signature=6d65060f63900856f8c3bed62dd5b58a26e18c73951cbd175bddfaf9b81c15fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVOLYTUE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAag8i8oCsUO6olRGOuu5Khp4O5q1FVqgffjIPV0cAo9AiEApHJDJ1G%2BU6Edf0U8NwhDiGr6UwfiUaWWsttG2cSjsUsq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDPtxu8jVn2r4WKgCoSrcA0cK0dTGzdBQhmhXgDI2GzpYhblU%2BV0qk864DNNDUU1jDIWO1Xby7k0j9JB6CED8D5ciT4a78x9WthhV0W7ij020HiDyRXeYGksKjsusdjYr6XZ5HJ1HRWBpyC3GYgi1gKn6hAatScb49UVOqRfMQNb5Sq0lYaiOqw1YhSt3iFAMFt6JZeV3v6j3lMVR1VJuF13y2vy0NfXupwvEXx3Bi%2FlNJ4utzqNNqeAfuscSYnNgikB2NfeFMhVUDURuQmT%2FXhElsGIFYDtoS9YH1cuWTgOTzgqaOrldrkEZ8Wr7s2oNUrNb8riHoj%2BdIWBj5oWULcs7XgvEOgx%2B%2BY86yOYHTk516OIX2bpGZCPDdtzq%2FnsFlrWCPaIJnycUBmjQuN733k%2FsNJ760Ce9PrUXWL41y5Z6BU6MEaQwe4FrWh6SZ8GhEvsXITLgZ36ik9tmU%2Bh3jhPv%2BQx4SW%2Fvc42aY6JKjeqOyBe7UY7Ct1Gy1IWBxOb5r%2B3ANeWwRHAfB3B7FS9jz0wzaXXKqKTx8mMxROS1h1IsuN2teTVhDIYYAgYMwKHZjWZzR4Rslc%2FvGV7%2FcrzLltOllcMvLtjQ7O7S6g6irRZh4Cf1CiZM9AVytq6wVZ49OdOA1vqadf9%2BGm6GMKTw%2B78GOqUBCyGeHeXrCzfooYB175HwRbxHNGglBmH0VlE8f1CobTPus5QKEd9jFcURwt5AeSqjpeXutdRLvuQf1XCvZ2ArBdGvkqjAOZzw1TtCveL0CCHHmS%2FBXLs%2Fynx1A24kYXNEazx3bnattaT2ZC6TdaObHjsVFOorY7OMcWQKj2iBw7AjmBiX2oRSrjQ9R8PnRihxrEoE6hBLu%2BGxtGtHQmPBBArUVge0&X-Amz-Signature=2b969ecea712cce4f12a80b67205e5782382e991fac3d4704f2ad03ee8257465&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
