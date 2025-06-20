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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E6CQABU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8nwjEVKHJ8Ah6t75uwNBoUzLtSReuY3SQDJ%2Fza1WsQQIhAP771WT2PJNwx7mwcFhcYZdFDvQlMMbYa5IbElXvGaCxKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxk9C2SnNp8zG2Wgegq3AOBkpWw7Olh06o2GWNHiRTbo3b%2FM%2By6CHsaCsb%2FJ2Dao0slXvBFNHqqDuIsuY5UwT6yukUwaX1tXi1rxzOXuwWacBSMECDjED9eFbiNG7lci3i2VNVHJN1%2Bn0Gk%2B7ARByWM5AZktCfUUDa2a3L7coLP%2BTbVy1BG9pjaK%2F8cVCAzGHhix1GLvXR1BAQWx4gQOZGxka5QUYT4AYOEssQfdqdOjrnOttSjDxzbnBZ1OhYQpUDtxcofGUzfJKAWkxaQlL5yvvfmuxX9iD9%2Fh2asHTAN5QWfUmNYVUCAn0HBYWo8i8C9Sa5ycRZd5NSpoaN9YRNsGF4O2CGIFmO3E6DNDqAQ5ikuKB7RRKyzi8TswEanIBUGF9s3to%2Bzrq%2BwPSXjKnIfY8mLbMMSb745sYkdtyHUYa4WCmnn%2FF00ba8d37GuqZg205bBuIRssm1eNqJbzW4g3DropJ9Q0SglaQVrqDff4xNSQ4MItB6pF5xSgrnID7BhrE2tXIzlYe5jCPfAREHw2Mwry%2FfDRu5eTzVd4LXAEvkJ9cnXI7pihMQvh3IgpjXlr4jPyS5kzsslxfIaitSJfhASMtm3LkPEn0MgoSyD9%2B7DfGnxbc9DQlxD3WEREkaQxbnoBE7uw7b4GDCD%2F9XCBjqkAUC3a%2BdVunzeTk9Mb2WL6EB3VZ08xaKmk9QupoUdU6nR6cJIA%2BIBMYPgSburDMZ5ixpTdTwtFMzB4LEuSLea4nRKplrpZko6uPSZ1qCHawjNZ1h9m%2FIZsW8fH2vWpjgtgFuBPj652uV8AEwOL57%2FAwXAUpSSgWHvFdvMVQbHcFCeVcrNeWMN1W%2Bey6CgB%2FGXDl4%2F7Meqsq6SX2BF6fjrsRqp%2FPv%2F&X-Amz-Signature=48ce27bf29eab3594866ba91188252c35ec2962aeeddca01d90fc6e2f4c91883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E6CQABU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8nwjEVKHJ8Ah6t75uwNBoUzLtSReuY3SQDJ%2Fza1WsQQIhAP771WT2PJNwx7mwcFhcYZdFDvQlMMbYa5IbElXvGaCxKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxk9C2SnNp8zG2Wgegq3AOBkpWw7Olh06o2GWNHiRTbo3b%2FM%2By6CHsaCsb%2FJ2Dao0slXvBFNHqqDuIsuY5UwT6yukUwaX1tXi1rxzOXuwWacBSMECDjED9eFbiNG7lci3i2VNVHJN1%2Bn0Gk%2B7ARByWM5AZktCfUUDa2a3L7coLP%2BTbVy1BG9pjaK%2F8cVCAzGHhix1GLvXR1BAQWx4gQOZGxka5QUYT4AYOEssQfdqdOjrnOttSjDxzbnBZ1OhYQpUDtxcofGUzfJKAWkxaQlL5yvvfmuxX9iD9%2Fh2asHTAN5QWfUmNYVUCAn0HBYWo8i8C9Sa5ycRZd5NSpoaN9YRNsGF4O2CGIFmO3E6DNDqAQ5ikuKB7RRKyzi8TswEanIBUGF9s3to%2Bzrq%2BwPSXjKnIfY8mLbMMSb745sYkdtyHUYa4WCmnn%2FF00ba8d37GuqZg205bBuIRssm1eNqJbzW4g3DropJ9Q0SglaQVrqDff4xNSQ4MItB6pF5xSgrnID7BhrE2tXIzlYe5jCPfAREHw2Mwry%2FfDRu5eTzVd4LXAEvkJ9cnXI7pihMQvh3IgpjXlr4jPyS5kzsslxfIaitSJfhASMtm3LkPEn0MgoSyD9%2B7DfGnxbc9DQlxD3WEREkaQxbnoBE7uw7b4GDCD%2F9XCBjqkAUC3a%2BdVunzeTk9Mb2WL6EB3VZ08xaKmk9QupoUdU6nR6cJIA%2BIBMYPgSburDMZ5ixpTdTwtFMzB4LEuSLea4nRKplrpZko6uPSZ1qCHawjNZ1h9m%2FIZsW8fH2vWpjgtgFuBPj652uV8AEwOL57%2FAwXAUpSSgWHvFdvMVQbHcFCeVcrNeWMN1W%2Bey6CgB%2FGXDl4%2F7Meqsq6SX2BF6fjrsRqp%2FPv%2F&X-Amz-Signature=f64e0d3c02dd7501d68cc730213481fe58ac6790dae35fbb7ffa538d10330465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
