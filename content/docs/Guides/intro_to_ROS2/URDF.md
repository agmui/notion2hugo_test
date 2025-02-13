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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHJWY53Z%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgcrJtA%2FXkNay71XLiFEv2qg%2B7a%2FMuIkOqjFcaiLpmvAiATV2naYgF5dZeUmyZTlXo6aWRKnwthEgfkTcdZlmtvcCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMrxEcxS0pJan6%2Bl6EKtwDBBYhTcN2gTAtTajgQrc8BccOzwVwXWjBLlyUvMGzKKDhvsNySMGFC7e6Yxpzx%2FnuA%2Bu1rzCvGddVPRFTuMtvtbzNoThcxbqTRGHHJvu1K2OPeweYhtynLS54PnRkg%2F4hfEmxDgRBT%2FfJpBTL67nAAm6gRDQQEi2wDq9luTKhOe%2BCsVpTAJ1oRDaHZNYz5fWyov2%2Bvn3%2B%2Bq6FeAPuB7rKxqOfl6N%2BE9hoiawdpefMXKvOAJAlaeYlXT975lEbnxDEXejiCscMmbyr7kPJG%2F1pyS%2F5fi9O9USWVGlHD1cUQm7ekhlROJzSjlpLiIW2zkidEDyp7Sb8mFJEjb%2FlYXV0SFQ1BCzc49C81%2FX9lJ04%2Fodx7Dx%2FBFJykgi%2FBvkxPpgQuRf5g1pmuZTOJFJNa8xf4L22fsuCi%2FOGzlxDP5TkB9CxhA%2F7NBR5ugC%2FNrsg%2FJRTgyf%2BJnZW0vWJWsbneBTUse19zVTw9a6KRHWFy8Pk2YLt5cLYtcKNg%2B5oypNRERnYqb7eN5GoFGMPUyGv03WsPritsqtWsxiT8uZQ9vp3l4tJUCvWS1fb%2FlQcQJ0VRu8dhLkFee7l3cKm9ihRLajgb0KIS5YOFGFPqrlbyfgcP2kgJJhhQvr7K8X3T68wtoa3vQY6pgEWGPNSZJU7qs%2Bqm2TuF7lWnkZ4MeQO%2ByGMivgowNo%2FKUsgz%2F7AXw1y0BC8z41hsUlYEhXZ5hYEZry7%2F5Aw2DxarDHfgvTvfCisqYOhGl0spbF1m2jklGKvW9vItzK1Is3zftdtdGvF2wDlfT6%2FzBI05h1rQPXx8pzbsI3LxVl2TdHBPMAIbj7LKp%2ByR%2FmlcQZRwU1EegYsppTjKU2XAVozRsXeqsC%2F&X-Amz-Signature=db2924dee3396e9ecb3bf41390a112335461fd695a0cbc66ebe84bf5ee144205&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHJWY53Z%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgcrJtA%2FXkNay71XLiFEv2qg%2B7a%2FMuIkOqjFcaiLpmvAiATV2naYgF5dZeUmyZTlXo6aWRKnwthEgfkTcdZlmtvcCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMrxEcxS0pJan6%2Bl6EKtwDBBYhTcN2gTAtTajgQrc8BccOzwVwXWjBLlyUvMGzKKDhvsNySMGFC7e6Yxpzx%2FnuA%2Bu1rzCvGddVPRFTuMtvtbzNoThcxbqTRGHHJvu1K2OPeweYhtynLS54PnRkg%2F4hfEmxDgRBT%2FfJpBTL67nAAm6gRDQQEi2wDq9luTKhOe%2BCsVpTAJ1oRDaHZNYz5fWyov2%2Bvn3%2B%2Bq6FeAPuB7rKxqOfl6N%2BE9hoiawdpefMXKvOAJAlaeYlXT975lEbnxDEXejiCscMmbyr7kPJG%2F1pyS%2F5fi9O9USWVGlHD1cUQm7ekhlROJzSjlpLiIW2zkidEDyp7Sb8mFJEjb%2FlYXV0SFQ1BCzc49C81%2FX9lJ04%2Fodx7Dx%2FBFJykgi%2FBvkxPpgQuRf5g1pmuZTOJFJNa8xf4L22fsuCi%2FOGzlxDP5TkB9CxhA%2F7NBR5ugC%2FNrsg%2FJRTgyf%2BJnZW0vWJWsbneBTUse19zVTw9a6KRHWFy8Pk2YLt5cLYtcKNg%2B5oypNRERnYqb7eN5GoFGMPUyGv03WsPritsqtWsxiT8uZQ9vp3l4tJUCvWS1fb%2FlQcQJ0VRu8dhLkFee7l3cKm9ihRLajgb0KIS5YOFGFPqrlbyfgcP2kgJJhhQvr7K8X3T68wtoa3vQY6pgEWGPNSZJU7qs%2Bqm2TuF7lWnkZ4MeQO%2ByGMivgowNo%2FKUsgz%2F7AXw1y0BC8z41hsUlYEhXZ5hYEZry7%2F5Aw2DxarDHfgvTvfCisqYOhGl0spbF1m2jklGKvW9vItzK1Is3zftdtdGvF2wDlfT6%2FzBI05h1rQPXx8pzbsI3LxVl2TdHBPMAIbj7LKp%2ByR%2FmlcQZRwU1EegYsppTjKU2XAVozRsXeqsC%2F&X-Amz-Signature=014aef215d29157cce7c070f98bbcbef3db440b7bfe4a4d7d0fc780ddd594cca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
