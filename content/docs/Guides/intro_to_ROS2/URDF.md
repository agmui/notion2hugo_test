---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVY36LX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCICRIzwsaQ1TmpWeplwtyPW%2Fe3f5LrnsiRt34kV3%2Bg5niAiAGi%2F11ac3D2Ubi1%2BI2oM3DmqyV6ZuzkHUxKC0m11aenSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMZ7YTH8Db0KeaNgWuKtwDIKyZTCiDzWE3nVd590L3rq8kkZnQeiGNp2Gil2Ff2gTj7m8FrCOj%2F3M90wiPNtcFpWGcnUIH20pXj988NmeRuI72OKcLN8EDz91EfzHYEdunm72usPobEed2Kelow2JytuVQXDfKCPNO2aNjL%2FfgsO%2B9o2DB%2B5vFUgiKtOFveyi3l4TbrD4CDx0dTvPfQNDG1TDb5BBxJicQAg3Cc35ub1sw33UNXS%2F4WRxlJHL8ZfTmZOreAIU9yuvoh2UIu49qXI%2BwOSF0K3PDAv3EPtDRdcCds%2FZpEY3mRCB%2BFwDRSp8c7TQajJ7Y2JodMpj7IOfcWLP497pmuwWl8H%2BJ5Gc2151m56PMb8AUGyWol%2F7R4v%2F1X7fpMFVgjriT219Ywj8QIQQdZcgZcenfjqeQR6aS0JxvadnaGnqW8fCL4%2FbDs25NOUQYSjNGIpiRVxWkdpsv22S77C6wnUmjnrDvWeg4qb0LxmpycQ1TGjzMsnqL0ViwUyC42mEl95dg%2FJwumq5276I8G4jwH4Tc6RCZv90PVXF3eD4pVG8VZXz14eTZXxUwMoT%2FujbOyOJ1kRsBr5sQjJxAfDPX%2BzA34sEoyGnbn3fSwcsUsToc9s0XEXYJQKmPpo601EBZOr1Qn1gwvrfBxAY6pgFMgbX6QJPqwFL6eopJ835Vm52kpWaYvBcPIJ%2FSGy0WYnhGAfRj0Qj9chPB8S%2BNBmO61ZLr2GR92WHHioOMdZM8ifehd0OOkEY37d4Vrx682OY9fVjYWqN%2Bj8Cu1tXk%2F5NZ47sbnA0HkGsXHQCamd0HrIbr8UexOJpsaSXW7kreO81TYaPGrqOI8LRUr7Wa%2FgaIkt1YuAPK3Duc%2F6na1ROSOafoRsFM&X-Amz-Signature=b9a666ced671dbed04672ed95f3654fea9d3aa94bbb76b97a3a4f2482e6b4f18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVY36LX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCICRIzwsaQ1TmpWeplwtyPW%2Fe3f5LrnsiRt34kV3%2Bg5niAiAGi%2F11ac3D2Ubi1%2BI2oM3DmqyV6ZuzkHUxKC0m11aenSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMZ7YTH8Db0KeaNgWuKtwDIKyZTCiDzWE3nVd590L3rq8kkZnQeiGNp2Gil2Ff2gTj7m8FrCOj%2F3M90wiPNtcFpWGcnUIH20pXj988NmeRuI72OKcLN8EDz91EfzHYEdunm72usPobEed2Kelow2JytuVQXDfKCPNO2aNjL%2FfgsO%2B9o2DB%2B5vFUgiKtOFveyi3l4TbrD4CDx0dTvPfQNDG1TDb5BBxJicQAg3Cc35ub1sw33UNXS%2F4WRxlJHL8ZfTmZOreAIU9yuvoh2UIu49qXI%2BwOSF0K3PDAv3EPtDRdcCds%2FZpEY3mRCB%2BFwDRSp8c7TQajJ7Y2JodMpj7IOfcWLP497pmuwWl8H%2BJ5Gc2151m56PMb8AUGyWol%2F7R4v%2F1X7fpMFVgjriT219Ywj8QIQQdZcgZcenfjqeQR6aS0JxvadnaGnqW8fCL4%2FbDs25NOUQYSjNGIpiRVxWkdpsv22S77C6wnUmjnrDvWeg4qb0LxmpycQ1TGjzMsnqL0ViwUyC42mEl95dg%2FJwumq5276I8G4jwH4Tc6RCZv90PVXF3eD4pVG8VZXz14eTZXxUwMoT%2FujbOyOJ1kRsBr5sQjJxAfDPX%2BzA34sEoyGnbn3fSwcsUsToc9s0XEXYJQKmPpo601EBZOr1Qn1gwvrfBxAY6pgFMgbX6QJPqwFL6eopJ835Vm52kpWaYvBcPIJ%2FSGy0WYnhGAfRj0Qj9chPB8S%2BNBmO61ZLr2GR92WHHioOMdZM8ifehd0OOkEY37d4Vrx682OY9fVjYWqN%2Bj8Cu1tXk%2F5NZ47sbnA0HkGsXHQCamd0HrIbr8UexOJpsaSXW7kreO81TYaPGrqOI8LRUr7Wa%2FgaIkt1YuAPK3Duc%2F6na1ROSOafoRsFM&X-Amz-Signature=b3f41ce33a4f9161b47ddb8b5b9540f0152d63be2082dcfb560323d49dd65288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
