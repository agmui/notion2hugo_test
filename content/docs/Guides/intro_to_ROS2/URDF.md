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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466372ZLJO6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbB53zeLzdUUZfTQTyeGNLs3PoK%2B%2Berf4GN%2FmtR3TCUwIhANROGLeG38XCXsErzDHMreea4mkKAInKYoco7FRzGOLNKv8DCCsQABoMNjM3NDIzMTgzODA1Igz4Lfj90uX%2FOQpkrWgq3AO1Z1F4H638qdOPVOcNkY9H8zuPCoOU3kQ1bWokNfpCq%2FksHp%2Blg9RWhDaDLO1QzCbZXr3Jked2Sh9n%2F5Rzb2R4XO%2F3fAOHsseRqDEowM08mZTMlRcvLlzYN4ieVMimfdyO%2B4QiF51mbjf2WGkpuMJ0SFZDJvPGMGAzY0rqbyNQUQI9%2FxoizDLIH1GTjaVAoAIrvYCdxvFjGou7CdHrflIJ1ggKwGHcIOnOuHJikPBjvTJY90IStolclYi%2Fwf0J1p9zmB9Ovry77rzps3PgMri5gyV%2BrpmEw1aqVa8gQS2dpXy1JbXnCpSA%2FlP6yfjYvTdqa3OkmFz8zYCHuI%2BjPRUIPvYQTicAV8p77wCDwL8AF%2FvJ3n5LmMCuYUP7Ufivlh6xKH5rsPMoujXbOTHB6mK4sSNINAWhwQN8zKb2IQOAzmB2KS%2FuVIL8uDDjb4MzNugpTQshJe%2BlI4cS8MkzIY8cdrkSjTNaIk4bDn8TvY2%2BC8YOpNjCxN8WHq3kA%2B7xW0fRzyqZ5OsGegDA3ZnZWlHDQS6IAp9vNXo2SaS8Ty6cCd7S86sjn8LihMffXCYKHTED1GKn7pbA1ew9pFn%2B3LE0DvkX4EWniqp3JA6%2Bt74LT7ZCj7qL4g4buv4XyTDaxvHEBjqkAdqOEg0tch0y6M41oz3M%2BbXOF68uYAgSBsgMRmOPg0Wz%2F4YSU99yugFpO3fc1yr4rr7O0rTcbRWyU%2Fv4%2FJ4sxwBd0foUfUy830BI1DWay3HjNA1FvU4%2FStYvAdZ0Zsli8qPNVWTyWogiVFIoqZUpYq8kdUD0Zv65gFuazOKRRVEOvDI8Te3XN%2B7MLqeT4Pxevl706VkK7nBPmA8Y3tWt7YMqJm4l&X-Amz-Signature=69176474e1b8103319692cea30893eafe3154e0498bbba46ec59bb75b0df8f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466372ZLJO6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbB53zeLzdUUZfTQTyeGNLs3PoK%2B%2Berf4GN%2FmtR3TCUwIhANROGLeG38XCXsErzDHMreea4mkKAInKYoco7FRzGOLNKv8DCCsQABoMNjM3NDIzMTgzODA1Igz4Lfj90uX%2FOQpkrWgq3AO1Z1F4H638qdOPVOcNkY9H8zuPCoOU3kQ1bWokNfpCq%2FksHp%2Blg9RWhDaDLO1QzCbZXr3Jked2Sh9n%2F5Rzb2R4XO%2F3fAOHsseRqDEowM08mZTMlRcvLlzYN4ieVMimfdyO%2B4QiF51mbjf2WGkpuMJ0SFZDJvPGMGAzY0rqbyNQUQI9%2FxoizDLIH1GTjaVAoAIrvYCdxvFjGou7CdHrflIJ1ggKwGHcIOnOuHJikPBjvTJY90IStolclYi%2Fwf0J1p9zmB9Ovry77rzps3PgMri5gyV%2BrpmEw1aqVa8gQS2dpXy1JbXnCpSA%2FlP6yfjYvTdqa3OkmFz8zYCHuI%2BjPRUIPvYQTicAV8p77wCDwL8AF%2FvJ3n5LmMCuYUP7Ufivlh6xKH5rsPMoujXbOTHB6mK4sSNINAWhwQN8zKb2IQOAzmB2KS%2FuVIL8uDDjb4MzNugpTQshJe%2BlI4cS8MkzIY8cdrkSjTNaIk4bDn8TvY2%2BC8YOpNjCxN8WHq3kA%2B7xW0fRzyqZ5OsGegDA3ZnZWlHDQS6IAp9vNXo2SaS8Ty6cCd7S86sjn8LihMffXCYKHTED1GKn7pbA1ew9pFn%2B3LE0DvkX4EWniqp3JA6%2Bt74LT7ZCj7qL4g4buv4XyTDaxvHEBjqkAdqOEg0tch0y6M41oz3M%2BbXOF68uYAgSBsgMRmOPg0Wz%2F4YSU99yugFpO3fc1yr4rr7O0rTcbRWyU%2Fv4%2FJ4sxwBd0foUfUy830BI1DWay3HjNA1FvU4%2FStYvAdZ0Zsli8qPNVWTyWogiVFIoqZUpYq8kdUD0Zv65gFuazOKRRVEOvDI8Te3XN%2B7MLqeT4Pxevl706VkK7nBPmA8Y3tWt7YMqJm4l&X-Amz-Signature=2a42b53ba805c0abce277823e4d358a1172edf26e445f1d87fc4ad83a8f4f754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
