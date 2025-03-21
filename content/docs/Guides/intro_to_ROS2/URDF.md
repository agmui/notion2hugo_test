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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBRRXAK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQClbZifSqgbiyTxFW7YLZoCK9gMaNWvZnKhGhCuoywSqgIgaTfkH4vvpYeDPxgb0UbQPHsozhtpkUku1rGUCcEpjk8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FTLd3Oy6nkB11AiCrcA6RxFxSvqFNSBmAVM%2F%2Fo5FT9iOo86yu58r3gTDa771FJYWXtVD%2BZq7zJygKNFHLBEZtH1sYQGy6KMeTMhY7YET6uEnduMvLtgqH9rNLs3Zrn42XRDoX%2FUG7X8g%2BAs%2FcgNqZ4Id9nwhAyUDlecbqVXWJnaVAcpUln%2BVAkn2xI8AsJXxePq5GLr6OEASxLqyLN6f2guElxelkfly7j86Q%2FZdqssD4r5uGMALKLLe1G5fI2eoY11%2FH70xc4%2BJHKAv4y5MYi3hQX4KDPsCiLRvWjtCj9ZpYqWGkxzZiUFmQxFhSV7a%2F7Z4k14DoK6nDxHDwpsLHmrIWOTdMLS4fqDUD8iMHOr8%2Be5gdq85Z6eODGSRY6JVR2MX9V%2FPOrcFFbSJWDHgYM2MGnKy3xMi050wvIH4%2BpP7T2dQdk7Zyd2o8otf8%2B10nMLGJtJzoKTDlkzFYCrhGoshXRaOpCvkxorhLgb6htnPjEFmkJWWmuA5nxmKgzrUUdnzgwKSg1diThhIlSKGqM7mYESC6d%2B%2BhTsel7KndArCca68d%2FyMGlh1GDgwa8rNigTEdH4FON3i5ADjvhOW2OKOFHkSnUXE9AZCywDeR3gRm27rlr3MegToxkvq72nt7vGDqRhvCRDBp8MML79b4GOqUBmKyJWDwNRIAuK1bP26EZjJVhV4ytrNQ2Due6AecpOcEjYaT6vqg5MSQjKuBYKBzZCW1OPB%2BU17vB49D%2Bdh4CbNfqrFT9LzwgrZaZX4QJjhzbMxfO%2BK7QEFCcIWeQavJKfCYlNY8O0LYgaDAKsXfe4U%2FLh4e5G6C4RsB0Hkyima5V5qJwUT2nmF%2BDSZZz%2FZ0vEaR6F0k78f4XQGfc5QX1cMQ9gc3a&X-Amz-Signature=912be0db5c7b9b28c3aba2c367813e9a23fdaa44eeed7bd688fea4a42b3c4cb8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBRRXAK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQClbZifSqgbiyTxFW7YLZoCK9gMaNWvZnKhGhCuoywSqgIgaTfkH4vvpYeDPxgb0UbQPHsozhtpkUku1rGUCcEpjk8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FTLd3Oy6nkB11AiCrcA6RxFxSvqFNSBmAVM%2F%2Fo5FT9iOo86yu58r3gTDa771FJYWXtVD%2BZq7zJygKNFHLBEZtH1sYQGy6KMeTMhY7YET6uEnduMvLtgqH9rNLs3Zrn42XRDoX%2FUG7X8g%2BAs%2FcgNqZ4Id9nwhAyUDlecbqVXWJnaVAcpUln%2BVAkn2xI8AsJXxePq5GLr6OEASxLqyLN6f2guElxelkfly7j86Q%2FZdqssD4r5uGMALKLLe1G5fI2eoY11%2FH70xc4%2BJHKAv4y5MYi3hQX4KDPsCiLRvWjtCj9ZpYqWGkxzZiUFmQxFhSV7a%2F7Z4k14DoK6nDxHDwpsLHmrIWOTdMLS4fqDUD8iMHOr8%2Be5gdq85Z6eODGSRY6JVR2MX9V%2FPOrcFFbSJWDHgYM2MGnKy3xMi050wvIH4%2BpP7T2dQdk7Zyd2o8otf8%2B10nMLGJtJzoKTDlkzFYCrhGoshXRaOpCvkxorhLgb6htnPjEFmkJWWmuA5nxmKgzrUUdnzgwKSg1diThhIlSKGqM7mYESC6d%2B%2BhTsel7KndArCca68d%2FyMGlh1GDgwa8rNigTEdH4FON3i5ADjvhOW2OKOFHkSnUXE9AZCywDeR3gRm27rlr3MegToxkvq72nt7vGDqRhvCRDBp8MML79b4GOqUBmKyJWDwNRIAuK1bP26EZjJVhV4ytrNQ2Due6AecpOcEjYaT6vqg5MSQjKuBYKBzZCW1OPB%2BU17vB49D%2Bdh4CbNfqrFT9LzwgrZaZX4QJjhzbMxfO%2BK7QEFCcIWeQavJKfCYlNY8O0LYgaDAKsXfe4U%2FLh4e5G6C4RsB0Hkyima5V5qJwUT2nmF%2BDSZZz%2FZ0vEaR6F0k78f4XQGfc5QX1cMQ9gc3a&X-Amz-Signature=1a699041bab79de4a2a7fda6d16654c43c51a57d35892b531704f4a9dd1c7ed2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
