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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ELJ4NYF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2Bsg4xANYObR2YVzcJPdKq3N03YZZkhnfeZYmaxzkLFAiEA4pJ3m0ATLxcINRoSNK31lMEmwSXP4MBQrBB99StwGuoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FKOhDzTRdR9QhaqSrcA3P4J8ZdOZc0Zag1nqPYC%2F8DUZ3NB6S6XtiZqo7%2FoPFXH2G8qkqFn%2FdniZ94ZL5ZJQ%2FDgjTCVD0%2Fzbgd1Wi6qBzVAFZxzIuAbvqs9KxNJAl7NDP4ehvaYY8eHf30UXqTuu9DnTwuzVP8eWiXMIMgiHVyUfqsczifisvaX1gD9KLMDalwD2IRqu4eXO1Gyz1UFSWYE%2Bb%2ForrbBqE73CWODtmytReW4h8GbbkcrdlwNfqgO4hmSLYtQNi8YUfWXey%2FydEMvDGlzNgo3ejNM8MBGycrouiChSw4xw3Alp6l6IcWrZK5a5UJvyCk7IuXAKDuGO4NFIzSpHJbeCV09av6RPPaj02XRCk6lQ9mRRhjpGs9fV3hb7%2Br9PYSW7kwkwyD129KEsNGsZM4Rv5e6XkyXMd2j6j3eErEGwa2BF6r%2BAUOEhWTJ62T75k30VwRK%2FANKXn0ycSNaOwTDBlWf6JHCysLhsaopL%2FPsn4rf39wu%2FSEuCO1as%2BRHgZNyhm0YvuGQmALOkIlcOzoTljf3LV6txK%2Fgv5RXNSF2o96ET89Djv1y3pVloSoLBzMvtCHQxtOgesQ%2B8hLvT%2BclE7DDozsvH303RoJznQoC8rlGaMgHEtph5gzSsv4qy7X3P0PMOrvp8QGOqUByKEeZoAYsOTZAGvtAlA1ABXGMpFR8e2wRU3jVGfcLYpUBb%2BBAQ8zgIuEyEUeqhw6LAe%2B3CxBzmvTHmQkj8I8snfhh0YoEc5YT7HFRzwM1LCA90cEyq0PRsmYsJ6SfwK2Adcu%2FvCTR7kZliTN1Hd%2B3RDfiCJilTDiXsM9QSDcF9PJWMfTXhR4wzYIqoGYX5W0Kht8oYKAPdYko2nvJp2mQbShQpCy&X-Amz-Signature=e50d84725aa8cc03f9a17a4bf793aa1a54a59b6dfeec1074085f2786e7b63c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ELJ4NYF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2Bsg4xANYObR2YVzcJPdKq3N03YZZkhnfeZYmaxzkLFAiEA4pJ3m0ATLxcINRoSNK31lMEmwSXP4MBQrBB99StwGuoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FKOhDzTRdR9QhaqSrcA3P4J8ZdOZc0Zag1nqPYC%2F8DUZ3NB6S6XtiZqo7%2FoPFXH2G8qkqFn%2FdniZ94ZL5ZJQ%2FDgjTCVD0%2Fzbgd1Wi6qBzVAFZxzIuAbvqs9KxNJAl7NDP4ehvaYY8eHf30UXqTuu9DnTwuzVP8eWiXMIMgiHVyUfqsczifisvaX1gD9KLMDalwD2IRqu4eXO1Gyz1UFSWYE%2Bb%2ForrbBqE73CWODtmytReW4h8GbbkcrdlwNfqgO4hmSLYtQNi8YUfWXey%2FydEMvDGlzNgo3ejNM8MBGycrouiChSw4xw3Alp6l6IcWrZK5a5UJvyCk7IuXAKDuGO4NFIzSpHJbeCV09av6RPPaj02XRCk6lQ9mRRhjpGs9fV3hb7%2Br9PYSW7kwkwyD129KEsNGsZM4Rv5e6XkyXMd2j6j3eErEGwa2BF6r%2BAUOEhWTJ62T75k30VwRK%2FANKXn0ycSNaOwTDBlWf6JHCysLhsaopL%2FPsn4rf39wu%2FSEuCO1as%2BRHgZNyhm0YvuGQmALOkIlcOzoTljf3LV6txK%2Fgv5RXNSF2o96ET89Djv1y3pVloSoLBzMvtCHQxtOgesQ%2B8hLvT%2BclE7DDozsvH303RoJznQoC8rlGaMgHEtph5gzSsv4qy7X3P0PMOrvp8QGOqUByKEeZoAYsOTZAGvtAlA1ABXGMpFR8e2wRU3jVGfcLYpUBb%2BBAQ8zgIuEyEUeqhw6LAe%2B3CxBzmvTHmQkj8I8snfhh0YoEc5YT7HFRzwM1LCA90cEyq0PRsmYsJ6SfwK2Adcu%2FvCTR7kZliTN1Hd%2B3RDfiCJilTDiXsM9QSDcF9PJWMfTXhR4wzYIqoGYX5W0Kht8oYKAPdYko2nvJp2mQbShQpCy&X-Amz-Signature=20e9aa21fd2d5c5259c5223779093157ffa40ee1291063c9c0f1b78d004fde67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
