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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6NEOAFY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSba66nDdPNErUehgtWGJEQhe43R1YWy4dx9E4FRBeaAIgWUgAjirWLD2vXpZYlZBUe1LRj4SjDoa0ayHvSp9GqvUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOH0lXXtXgoFR8bMSyrcA8QzYUMFEAjwU2OG8YMeP%2FNX5Rp2IIiV%2BmXRH6MKb4m3OeKdY6V%2FenJiKK0xXBWAFjxmnrfVu%2FPdFC58FcF10paf0k63Y7E%2F89LlI%2F%2FjaLJ%2BMQs1oiTUZ12754LiFZaBsEQL69lyrDeRSCoIZdSXXjkgANIiMw5ZYpUUB9jn6FnMcBeFc1l8oMdpkZWr8JXjO8xzOaiDEt651OVgnHQbzWtI1XMxGgDI12NgaLAN4zm0QYUB6X%2B6bAVX4ete7abBQAYIAwjwLi%2FYPol7pX4Lp1utEDDi3vmd88oqN7xVan4uruBD0Hn9AH2wu1ql5Ybp2NSLB2Wyg52t1QpvcHED5aetXRqj%2BehpIebGhOU1oXaM3d8%2BhaxeaPutmoxc0TD4p2vYxqw4y8QYvYTi8R%2FCpX%2BGc3qJ6EwmDeeaLMoBQ6W6CIvhC%2BqDGBYFHX9XAUjZvEdzUiRcXLKrK0VvV3MH4eg7dRkwpclwYQd%2BxiENpnkdKYrn%2BfnxDV9FzEukb%2BEutUUQRWK9z6vi79gzkclWPd7y6flsf6QRDUfiaMz5y3yQdwOjYV6hLV7BOXzAArr0mPmrASGLNleey8jKjrO2xw3BvJwx6UQKKGDCJ%2FGS3WzhbcY6e56f5%2Bcbps4VMMLa570GOqUBsJI%2FPAUk%2BXG9EYAtX8rAQqFIbzNxbK0E9pUvhDAtzgQWmtDlPT1ntulvA%2Fp3RUUH0E0D0UmRIJfqPpw8vo6Lx%2BRaiop%2B%2FdM5DFIaobPYslIH%2BjnYX%2BRSw%2FWRSJ3OkvWlxlXLUOtaBPT6QS0P92cdzLd5DI%2Fwi2HLT0i82ZFo%2FUx3BkDtkbbETa4KBjULlEirG5ubZuvdNJZXd7XU8SzOUW3D1eYv&X-Amz-Signature=747997f1b740c33d78223205666fba15d8e80427d5c2a6869da47f2af94a82a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6NEOAFY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSba66nDdPNErUehgtWGJEQhe43R1YWy4dx9E4FRBeaAIgWUgAjirWLD2vXpZYlZBUe1LRj4SjDoa0ayHvSp9GqvUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOH0lXXtXgoFR8bMSyrcA8QzYUMFEAjwU2OG8YMeP%2FNX5Rp2IIiV%2BmXRH6MKb4m3OeKdY6V%2FenJiKK0xXBWAFjxmnrfVu%2FPdFC58FcF10paf0k63Y7E%2F89LlI%2F%2FjaLJ%2BMQs1oiTUZ12754LiFZaBsEQL69lyrDeRSCoIZdSXXjkgANIiMw5ZYpUUB9jn6FnMcBeFc1l8oMdpkZWr8JXjO8xzOaiDEt651OVgnHQbzWtI1XMxGgDI12NgaLAN4zm0QYUB6X%2B6bAVX4ete7abBQAYIAwjwLi%2FYPol7pX4Lp1utEDDi3vmd88oqN7xVan4uruBD0Hn9AH2wu1ql5Ybp2NSLB2Wyg52t1QpvcHED5aetXRqj%2BehpIebGhOU1oXaM3d8%2BhaxeaPutmoxc0TD4p2vYxqw4y8QYvYTi8R%2FCpX%2BGc3qJ6EwmDeeaLMoBQ6W6CIvhC%2BqDGBYFHX9XAUjZvEdzUiRcXLKrK0VvV3MH4eg7dRkwpclwYQd%2BxiENpnkdKYrn%2BfnxDV9FzEukb%2BEutUUQRWK9z6vi79gzkclWPd7y6flsf6QRDUfiaMz5y3yQdwOjYV6hLV7BOXzAArr0mPmrASGLNleey8jKjrO2xw3BvJwx6UQKKGDCJ%2FGS3WzhbcY6e56f5%2Bcbps4VMMLa570GOqUBsJI%2FPAUk%2BXG9EYAtX8rAQqFIbzNxbK0E9pUvhDAtzgQWmtDlPT1ntulvA%2Fp3RUUH0E0D0UmRIJfqPpw8vo6Lx%2BRaiop%2B%2FdM5DFIaobPYslIH%2BjnYX%2BRSw%2FWRSJ3OkvWlxlXLUOtaBPT6QS0P92cdzLd5DI%2Fwi2HLT0i82ZFo%2FUx3BkDtkbbETa4KBjULlEirG5ubZuvdNJZXd7XU8SzOUW3D1eYv&X-Amz-Signature=bd6ddf85fe12e5a6c96d1ea6e3cedbe4d02a525a8f3becb9779884bddb145b27&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
