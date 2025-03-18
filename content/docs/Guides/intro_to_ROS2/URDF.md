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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQYWK25H%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC29Xzgy0o%2BoX0YTF44652gQ1DZ4hievRvAH%2Bz2XfGGpwIhANZNO7%2BIU9cVUgy8OdxsTIUa8RPJV98TKVP9R097FlDAKv8DCF8QABoMNjM3NDIzMTgzODA1IgzWMkgeRNMWhofffkQq3AP0BBUzxx6ZS3Tb9IRK99Sj01TTmEZvol1bHaBPwBN6Omk0WqAAQWnHbRSFimAGzRFw3qFrczuv2ZeyQV3IZd5U%2B2cF71qO%2BCLlelmOCJKJ9vjL0Whku82cS0tjBfyiyyiqEkoswoAsWdU2d39GEQDcMs27NLqfUX9zkYUMlWXkvK4ZGC8pQJ3p89g5SQ8n2N4rV3aF3JlU2IeMVaRMR2BltVhQIlXTI18qbq5tAn3Zi%2FiE6T8Lmv7oKDCe1l9%2B%2F901AYJJx8PCRd3FxE2KRloruE6wEO8z3Ci1QyCOv8N7jOOHVTBcUR0a31DCaQLJ%2F9XFc67yXOZbvEeeVYTY97tFLkelPh%2BYc45dAR7jwiCPqgPrIJyvGucK344OL3HhVcFKAC0qd%2BvoJxuUAjT%2FhdzMD5YqpNPRuG679wkASkMNIH57T4pCFrnZd2KEyx8vHvwHpYBfEpe3OKrlpskI3iTLrNKdvg7L2XVqvJqE1J837Xx1Dg2syVMT%2BYRrFxWx5FfKfbkQ8IwfJM2UaxE1ZtGoLyaU8j6fhTvzOi%2F81qMRKRVPHW%2Bz05WzU%2Bzjc1lVUY6bKObNvk0d9y13MPLZAouSA79Gl%2Fn%2BWfW1L9ux6e4FDP5Gg9zGNeC13dEh6zDT9OW%2BBjqkAY3ofrxihaXQTj4w3EnuY5FoGQEfaLiu1PX38t2hh%2Bl23pf4z647uHLgLCiVPDEM50EsmpIFZon2fJh873SsIH65USd9H%2Bhrxqq2DybcFW3c6T%2B%2FGUyDGi7SkyUnJqCLctSVVciv%2BUsHvnkX6HbCtnuzwg8MIHFBiYEHu1Q2VIYtmyj09Q4LUdXyFR0TcF5A%2F8r2Wae6VGLhShCN7mR8yb6nDdhD&X-Amz-Signature=9a6b39eb799a0348f73aa28008cf807260797d1e24ce6150d2de8de3d643d887&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQYWK25H%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC29Xzgy0o%2BoX0YTF44652gQ1DZ4hievRvAH%2Bz2XfGGpwIhANZNO7%2BIU9cVUgy8OdxsTIUa8RPJV98TKVP9R097FlDAKv8DCF8QABoMNjM3NDIzMTgzODA1IgzWMkgeRNMWhofffkQq3AP0BBUzxx6ZS3Tb9IRK99Sj01TTmEZvol1bHaBPwBN6Omk0WqAAQWnHbRSFimAGzRFw3qFrczuv2ZeyQV3IZd5U%2B2cF71qO%2BCLlelmOCJKJ9vjL0Whku82cS0tjBfyiyyiqEkoswoAsWdU2d39GEQDcMs27NLqfUX9zkYUMlWXkvK4ZGC8pQJ3p89g5SQ8n2N4rV3aF3JlU2IeMVaRMR2BltVhQIlXTI18qbq5tAn3Zi%2FiE6T8Lmv7oKDCe1l9%2B%2F901AYJJx8PCRd3FxE2KRloruE6wEO8z3Ci1QyCOv8N7jOOHVTBcUR0a31DCaQLJ%2F9XFc67yXOZbvEeeVYTY97tFLkelPh%2BYc45dAR7jwiCPqgPrIJyvGucK344OL3HhVcFKAC0qd%2BvoJxuUAjT%2FhdzMD5YqpNPRuG679wkASkMNIH57T4pCFrnZd2KEyx8vHvwHpYBfEpe3OKrlpskI3iTLrNKdvg7L2XVqvJqE1J837Xx1Dg2syVMT%2BYRrFxWx5FfKfbkQ8IwfJM2UaxE1ZtGoLyaU8j6fhTvzOi%2F81qMRKRVPHW%2Bz05WzU%2Bzjc1lVUY6bKObNvk0d9y13MPLZAouSA79Gl%2Fn%2BWfW1L9ux6e4FDP5Gg9zGNeC13dEh6zDT9OW%2BBjqkAY3ofrxihaXQTj4w3EnuY5FoGQEfaLiu1PX38t2hh%2Bl23pf4z647uHLgLCiVPDEM50EsmpIFZon2fJh873SsIH65USd9H%2Bhrxqq2DybcFW3c6T%2B%2FGUyDGi7SkyUnJqCLctSVVciv%2BUsHvnkX6HbCtnuzwg8MIHFBiYEHu1Q2VIYtmyj09Q4LUdXyFR0TcF5A%2F8r2Wae6VGLhShCN7mR8yb6nDdhD&X-Amz-Signature=c162c30bf7c365ad896f1e87dbb30b28b4e3c4cc7660c10c8115eb93e1954b1f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
