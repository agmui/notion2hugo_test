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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYSE7VF4%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIHHMEPdEQFOgmWhM7Q%2FMEnh1NPWQJRASTQxiksiS4JaQAiA7wlncbaBMO1V4vU%2FopeaIR6LLjPqxVsxtlFUJMbf%2FwiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq%2BL10Eiv9a97DU67KtwDDoLw%2Bh9UG%2FvCKToRtl42o8jQAhSBaSJ8AuHduNp6gyiWpI%2BxUNehBzP%2BV3hg2zdjr8K4SK6SKkzsWPbb2KqMTwo%2BCnLq01pKYp7C3IQqsPxRUjWkymJOb8tYaxKWnFbgyn0xSMIUQrfUaZerTI1cBu90DnQBVGLMuDv7DeKKcAVIRR%2BGIoEq83E3QogzXxbLVNpaOqK7AaoaBf6TUi7sLR%2F70lie0sMQWF75jjsUJiPFUqY7zFSr6nW%2F32duswN0eStofEdq1gjZg%2FnfQxgA86zcW4By2FPfx4pLW33ZuzN4lOI41UDGelLz%2FBL6vzA85vNFV3v2RzDfLQW4Rr89QANC0XC%2B4EfpDSStDAstfelHvvvI8R8rowOrB1%2BubmfTdf4Ri9qlNpR5qWnsenQjDA9q0MrpYhoEkSE3Kyexk3GNbSb2q7Zxy3Pwu4areT0brBnEtN1n8EjcaSg%2Bn%2BJdBrhVg0Zk%2FaRoKKaZzHE5gHzxY6NZfW4SHV2%2BUvoBmCeA5iJ8AsUnYHxK%2BxmvOID5J9jGGacqzeFinkzUR3yOuQyzAUILp4pbGy0IwqPCgXsh7%2BaafSUGppshiz7Xm5bGNSTzX4u64O8tG8BUFXzI0IiuOmqjBwW86czQNKQwjrycwAY6pgEO%2FCHWi5ks7eW%2F90MHuNPJEyPt8%2BfnobHM%2Fnu0YOQzHwRQfLis5BHsJShBT8dR6LZ5TLU7MDM3somg2G2I%2FeX6kKpIpo2Xe%2F%2ByfTUo5jHHkRtUOkvZoaZOVTPIG3O%2BT5LhWNK8xRWlhu8VuRstURW2fZvtIYTn1L1yUiLhgXtwBOG5VnA4O2Kh2%2BxA2nbMdpB6qemc%2BW6AaWIzBVS5qZhgnYQ1a0uc&X-Amz-Signature=752192fa40f195b7f090d5a01e5e34b2770dc15c7c2bf53b6a062dfbc0ca8f44&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYSE7VF4%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIHHMEPdEQFOgmWhM7Q%2FMEnh1NPWQJRASTQxiksiS4JaQAiA7wlncbaBMO1V4vU%2FopeaIR6LLjPqxVsxtlFUJMbf%2FwiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq%2BL10Eiv9a97DU67KtwDDoLw%2Bh9UG%2FvCKToRtl42o8jQAhSBaSJ8AuHduNp6gyiWpI%2BxUNehBzP%2BV3hg2zdjr8K4SK6SKkzsWPbb2KqMTwo%2BCnLq01pKYp7C3IQqsPxRUjWkymJOb8tYaxKWnFbgyn0xSMIUQrfUaZerTI1cBu90DnQBVGLMuDv7DeKKcAVIRR%2BGIoEq83E3QogzXxbLVNpaOqK7AaoaBf6TUi7sLR%2F70lie0sMQWF75jjsUJiPFUqY7zFSr6nW%2F32duswN0eStofEdq1gjZg%2FnfQxgA86zcW4By2FPfx4pLW33ZuzN4lOI41UDGelLz%2FBL6vzA85vNFV3v2RzDfLQW4Rr89QANC0XC%2B4EfpDSStDAstfelHvvvI8R8rowOrB1%2BubmfTdf4Ri9qlNpR5qWnsenQjDA9q0MrpYhoEkSE3Kyexk3GNbSb2q7Zxy3Pwu4areT0brBnEtN1n8EjcaSg%2Bn%2BJdBrhVg0Zk%2FaRoKKaZzHE5gHzxY6NZfW4SHV2%2BUvoBmCeA5iJ8AsUnYHxK%2BxmvOID5J9jGGacqzeFinkzUR3yOuQyzAUILp4pbGy0IwqPCgXsh7%2BaafSUGppshiz7Xm5bGNSTzX4u64O8tG8BUFXzI0IiuOmqjBwW86czQNKQwjrycwAY6pgEO%2FCHWi5ks7eW%2F90MHuNPJEyPt8%2BfnobHM%2Fnu0YOQzHwRQfLis5BHsJShBT8dR6LZ5TLU7MDM3somg2G2I%2FeX6kKpIpo2Xe%2F%2ByfTUo5jHHkRtUOkvZoaZOVTPIG3O%2BT5LhWNK8xRWlhu8VuRstURW2fZvtIYTn1L1yUiLhgXtwBOG5VnA4O2Kh2%2BxA2nbMdpB6qemc%2BW6AaWIzBVS5qZhgnYQ1a0uc&X-Amz-Signature=12e42fd1fa034df3c2c31ce2c235bb0b8ecd9de1d0663eebe99c68e7a46e35a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
