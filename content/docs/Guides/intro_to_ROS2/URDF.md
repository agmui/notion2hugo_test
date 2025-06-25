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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZT7OPNA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDU2PWTJh96PvJc%2Fku3agwowLDJvjVKVnC%2BfJB0YOap6AIgWtToCnyCV1hAbnx4QBrT1T2Xw7CDiMhtxhfqqEjTxPYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDIhwc%2BEBbk9a75%2Fz%2BSrcA3G4teihTGNFAu9LtOh0GXG%2FRfgjT2RiD4bjKLSs8QGwmKlxI1NXd4AqnjEr478NV2A2z2c0eofi6NvaCtr8Sxf5cGha9ohDkjD6ucg7bOO84k18wi5xB4nwzqySP1O%2FLCrawmEPY68G4%2FZ3%2F4%2BlJ%2F8NiQF2UCecPh5m90yDoyk3mNY1%2BfAagyTiAlWuHXU0t4ogNU%2BFNSxZiO4rwaYf%2B9hivJS%2F0hCo8tyEbjb0wYagyXKwzVO1SyV6QH5oTaWQHH20UOHPkjo6kDeZaRpUOJwf7ocnISr55Edr0xKFkxDWNgvh8zxQ93AnaBcZNPctmPOF4VPYk2DSK6j3brEsa4TcwlJov%2FmNsIiA5lQhHO%2FNkNsVs0GckGT4Vb78yJWuNsl3nYXlVVeWOt6%2F9%2BCLISRssx%2FPl1TLcrI9qXDGD1%2B1Tzj5V0UP4JHx5QvZMUk0%2BcbIzlb13RG%2BIVQz9qXDlN%2FpRzdEXh3C80OU%2FaYZGo77epIJrlTF91x4R1lB1DfY6sjz9y6C%2FYe8pP1M%2BLMUu8QnOxWgh5oabcfP8eDz94e96LHtS1xarGTGkGombSH%2FQiHIQI4d%2BfcTYFosBPil9MOCUSuuhxK5z5JIhKrW%2FPTSFAdDaNLumMGMGl8UMODu78IGOqUB462ps3yvCehjSeSkJXZblMDzXrDJv19aCy6qBJfqcCazgX9xed%2FEUwrwsQu7xQWmXv%2FEZdVcLJfHZSniPEj%2FgOQtOYBcy1AdcedNjCQYVh4KlT7fT4Kw3Eu4GZRFqLm7YbEBA2JSZbE4s4LJEoMNHuOYcMxdkZa8Ifw1VVvN5rN%2BdjnuqsmqjoWflqdGbwMQw3FmknWECouLHm%2BfhePzbgJO4sbx&X-Amz-Signature=65d7e8a14e33f84c89cc92e9a03ffff18eee50ee9cda24e9cf5489d532f98e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZT7OPNA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDU2PWTJh96PvJc%2Fku3agwowLDJvjVKVnC%2BfJB0YOap6AIgWtToCnyCV1hAbnx4QBrT1T2Xw7CDiMhtxhfqqEjTxPYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDIhwc%2BEBbk9a75%2Fz%2BSrcA3G4teihTGNFAu9LtOh0GXG%2FRfgjT2RiD4bjKLSs8QGwmKlxI1NXd4AqnjEr478NV2A2z2c0eofi6NvaCtr8Sxf5cGha9ohDkjD6ucg7bOO84k18wi5xB4nwzqySP1O%2FLCrawmEPY68G4%2FZ3%2F4%2BlJ%2F8NiQF2UCecPh5m90yDoyk3mNY1%2BfAagyTiAlWuHXU0t4ogNU%2BFNSxZiO4rwaYf%2B9hivJS%2F0hCo8tyEbjb0wYagyXKwzVO1SyV6QH5oTaWQHH20UOHPkjo6kDeZaRpUOJwf7ocnISr55Edr0xKFkxDWNgvh8zxQ93AnaBcZNPctmPOF4VPYk2DSK6j3brEsa4TcwlJov%2FmNsIiA5lQhHO%2FNkNsVs0GckGT4Vb78yJWuNsl3nYXlVVeWOt6%2F9%2BCLISRssx%2FPl1TLcrI9qXDGD1%2B1Tzj5V0UP4JHx5QvZMUk0%2BcbIzlb13RG%2BIVQz9qXDlN%2FpRzdEXh3C80OU%2FaYZGo77epIJrlTF91x4R1lB1DfY6sjz9y6C%2FYe8pP1M%2BLMUu8QnOxWgh5oabcfP8eDz94e96LHtS1xarGTGkGombSH%2FQiHIQI4d%2BfcTYFosBPil9MOCUSuuhxK5z5JIhKrW%2FPTSFAdDaNLumMGMGl8UMODu78IGOqUB462ps3yvCehjSeSkJXZblMDzXrDJv19aCy6qBJfqcCazgX9xed%2FEUwrwsQu7xQWmXv%2FEZdVcLJfHZSniPEj%2FgOQtOYBcy1AdcedNjCQYVh4KlT7fT4Kw3Eu4GZRFqLm7YbEBA2JSZbE4s4LJEoMNHuOYcMxdkZa8Ifw1VVvN5rN%2BdjnuqsmqjoWflqdGbwMQw3FmknWECouLHm%2BfhePzbgJO4sbx&X-Amz-Signature=6eb75e882d9ede60d1ba4d0293cf2752749fdeb0655fa278e7b506027c1f7daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
