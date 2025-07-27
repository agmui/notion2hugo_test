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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SO47RG4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQC0n0BXN59rI7qMHKlifCkXvbdpfDJTp%2B6XQpxWYacUVQIhANcv18PeHDedE4ZMF9yUqPHPiQYHuVCArmcPNWVN9SifKv8DCHEQABoMNjM3NDIzMTgzODA1IgytcpqfJNHikDcXiGkq3AMmaOS9d0AjGKRVlPXtBU7J%2FALSIt8QETHd3EuT6VAzgkWaE1JWDHqxBGfw%2FN1DhpXWpkBJrbJt53elmJAB%2F3bq2AMO%2BwMH14gymYDXc0t2mzuana4L%2FDfQvlykXjTIO4iw9DgcMlJCaTXXNRmMb1wNA8sVv16h8aMoM2ILMla3BsjYTnIW%2FfMR4%2FCf8aAdGwflV8gyNZU0OJQrQMWSTYomjLIKVl6MsXIAGpnRxcqYtzUNmMB13CVIH51NuBPiSUUpsXsyEoWYTBVtej0%2FdRbZwUyz3hDBTyqpMYeOP23b71JVRRR2xrg90pQ0SNuf%2FoG0obpgnWh8pptHZOREl2vN%2FnFqg%2FQ4NDbw%2F9Z2YTYrO37QnrveYqUKSYQnDqjRLaRHDR82cWbz7trp9cTvwBXZ1%2Bj%2BANbUHWWqukHIJgPtpmRf%2FDvCFtxS8CPQl%2Ftm739dn0GrDzOwLMfRtsYsDZ3Di4Klicnx6htQQ7xME%2BEg41ZSSVxaN3OZVWDCOPUXXHnYwtmsZZ%2B1PSqXuuEOL1glo%2BBCPAvYljxcQV4nRtHzKAX7VaVyrU%2BFKLgjsT29QAYP7QslYuJuywDn7wxegfZfP5DhY%2BH6Jpu%2BZNnwzBMyecoEYfnww86tOL1c0zDWspfEBjqkATtMA3QD5jSnKUtTon00NAJ%2BlT0uCRfc3E8vn%2F4NHVdNofGOkAsYjxflFKoJiuThninc%2FuiE4ZPFWXndKa0iIzFexwtPuG%2FaC%2Bdm86FilHywY6i8AOCA5K1T4qvRiOEfbC%2BhjtJs5zDdn0bNQrsTA6f3bKPURFERhvYehjvrkSlFIRmGXE%2F7N%2FJd78tSIsS57NZXpxqRsBN6d0Gz%2F6gGmYpgCUet&X-Amz-Signature=6cac8527787c1b8c8d04f37486cf8a37f47d6b1b754a884f3535d332d6b4a1f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SO47RG4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQC0n0BXN59rI7qMHKlifCkXvbdpfDJTp%2B6XQpxWYacUVQIhANcv18PeHDedE4ZMF9yUqPHPiQYHuVCArmcPNWVN9SifKv8DCHEQABoMNjM3NDIzMTgzODA1IgytcpqfJNHikDcXiGkq3AMmaOS9d0AjGKRVlPXtBU7J%2FALSIt8QETHd3EuT6VAzgkWaE1JWDHqxBGfw%2FN1DhpXWpkBJrbJt53elmJAB%2F3bq2AMO%2BwMH14gymYDXc0t2mzuana4L%2FDfQvlykXjTIO4iw9DgcMlJCaTXXNRmMb1wNA8sVv16h8aMoM2ILMla3BsjYTnIW%2FfMR4%2FCf8aAdGwflV8gyNZU0OJQrQMWSTYomjLIKVl6MsXIAGpnRxcqYtzUNmMB13CVIH51NuBPiSUUpsXsyEoWYTBVtej0%2FdRbZwUyz3hDBTyqpMYeOP23b71JVRRR2xrg90pQ0SNuf%2FoG0obpgnWh8pptHZOREl2vN%2FnFqg%2FQ4NDbw%2F9Z2YTYrO37QnrveYqUKSYQnDqjRLaRHDR82cWbz7trp9cTvwBXZ1%2Bj%2BANbUHWWqukHIJgPtpmRf%2FDvCFtxS8CPQl%2Ftm739dn0GrDzOwLMfRtsYsDZ3Di4Klicnx6htQQ7xME%2BEg41ZSSVxaN3OZVWDCOPUXXHnYwtmsZZ%2B1PSqXuuEOL1glo%2BBCPAvYljxcQV4nRtHzKAX7VaVyrU%2BFKLgjsT29QAYP7QslYuJuywDn7wxegfZfP5DhY%2BH6Jpu%2BZNnwzBMyecoEYfnww86tOL1c0zDWspfEBjqkATtMA3QD5jSnKUtTon00NAJ%2BlT0uCRfc3E8vn%2F4NHVdNofGOkAsYjxflFKoJiuThninc%2FuiE4ZPFWXndKa0iIzFexwtPuG%2FaC%2Bdm86FilHywY6i8AOCA5K1T4qvRiOEfbC%2BhjtJs5zDdn0bNQrsTA6f3bKPURFERhvYehjvrkSlFIRmGXE%2F7N%2FJd78tSIsS57NZXpxqRsBN6d0Gz%2F6gGmYpgCUet&X-Amz-Signature=23a4d78b1c0d9e952dab3a990ccd5f06c0e0d3a2a66cb4fd14cf0c74848a73ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
