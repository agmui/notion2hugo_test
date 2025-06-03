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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS776G2B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDpyRpGLjMUZupwAPGWLjJMqnEGgmNI9Soj6JCPyYhvRgIgUf6zYC43QpbDSCYugrxLGUMd5kKN%2FT%2FoGal7%2B0uBvdEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2F2%2FZsKYU83hOciqircAzKd%2Fj1ZDliJ%2Fxwnj78zwIuqvUaEht9ezmzjmHxEnj94sx47m1n%2FDUjDw88pJv1OInD8BUvX87OEh1JgVtkVrXN0m8eglZHD4lTetzYWXfe72wJwk4JZpGVPz29qab9CYt6LabYakavEtEdD1UaRWCif8h4fStzj5BujQaIBkdsE8%2FPxBCSLRS2%2BvPQuzgslSjg9lLtMAFYdgUhK6dBLDh5LGVemSkXkkuQ0IwYtlat8yKv1n04vR8xtOWcMkn1JiwieEK0SQ9xxPRNQw5r21KUDRXykJF7nN4KY3JEzfHoGT4BzqZ7BSYhyj4kwa4VCBArpj5Wzmw2lDMxZMStmcgnjYxE12NDyf3g2qy7OUe6KTL4TVf6buL826ue0U8betBpUBdtDMb9NHJvm%2Bt%2BYPipi2FuptgVNTYX7rgNwISnnNqRhTRJSFTIluMv44%2FEGC%2B4k6Pqup3ZVhc1giosAEugZNQynoB04g0S0pIIudozghVjLmbIQ27qflVMvKXbq1TfiD%2FRQuH2i6%2B9cIzz7aoN5InGd0LULoWzR1bUX6amfMIRzbkArupwyROJE11ce2c9X4LF0DIHpTj4wv9BB%2BqX%2FMg0hF1nACbHlZMWrzvApEfPo6DGg6bHnqnA%2FMN6B%2BsEGOqUB59VGCKYE6mOFKeqpnq2OblLpLKVjslmbXnwnaoTxtxkSwT9nMeMrSVjvilYq97MrEKEUYI37Wcjd1jbYy7M41Rr66P3HYS%2BQ%2BEudnMrQRw7d3TSXWwKZW2MPP9sCQ3C9hu6efRVARLMWgQLh67p%2BOkivg3PEjXL6OVMjB%2Bz3BcM4wlexmH%2FUKMjy0fg7G%2F%2FK7RlqGePbp1BWS62u4E4VwKBpvl1C&X-Amz-Signature=a1f14f3ceaf7f2cd8cab5f254d1eb09af581e6c8c69bd0c465b34bc1893475fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS776G2B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDpyRpGLjMUZupwAPGWLjJMqnEGgmNI9Soj6JCPyYhvRgIgUf6zYC43QpbDSCYugrxLGUMd5kKN%2FT%2FoGal7%2B0uBvdEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2F2%2FZsKYU83hOciqircAzKd%2Fj1ZDliJ%2Fxwnj78zwIuqvUaEht9ezmzjmHxEnj94sx47m1n%2FDUjDw88pJv1OInD8BUvX87OEh1JgVtkVrXN0m8eglZHD4lTetzYWXfe72wJwk4JZpGVPz29qab9CYt6LabYakavEtEdD1UaRWCif8h4fStzj5BujQaIBkdsE8%2FPxBCSLRS2%2BvPQuzgslSjg9lLtMAFYdgUhK6dBLDh5LGVemSkXkkuQ0IwYtlat8yKv1n04vR8xtOWcMkn1JiwieEK0SQ9xxPRNQw5r21KUDRXykJF7nN4KY3JEzfHoGT4BzqZ7BSYhyj4kwa4VCBArpj5Wzmw2lDMxZMStmcgnjYxE12NDyf3g2qy7OUe6KTL4TVf6buL826ue0U8betBpUBdtDMb9NHJvm%2Bt%2BYPipi2FuptgVNTYX7rgNwISnnNqRhTRJSFTIluMv44%2FEGC%2B4k6Pqup3ZVhc1giosAEugZNQynoB04g0S0pIIudozghVjLmbIQ27qflVMvKXbq1TfiD%2FRQuH2i6%2B9cIzz7aoN5InGd0LULoWzR1bUX6amfMIRzbkArupwyROJE11ce2c9X4LF0DIHpTj4wv9BB%2BqX%2FMg0hF1nACbHlZMWrzvApEfPo6DGg6bHnqnA%2FMN6B%2BsEGOqUB59VGCKYE6mOFKeqpnq2OblLpLKVjslmbXnwnaoTxtxkSwT9nMeMrSVjvilYq97MrEKEUYI37Wcjd1jbYy7M41Rr66P3HYS%2BQ%2BEudnMrQRw7d3TSXWwKZW2MPP9sCQ3C9hu6efRVARLMWgQLh67p%2BOkivg3PEjXL6OVMjB%2Bz3BcM4wlexmH%2FUKMjy0fg7G%2F%2FK7RlqGePbp1BWS62u4E4VwKBpvl1C&X-Amz-Signature=f981342bd5a6d1f67fe04b9aff9add7a25f62ac1aa738524d9fafe112ac948ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
