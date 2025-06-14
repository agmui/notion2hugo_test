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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XPSRYEE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBuLFNVve%2BtTA3oZ2Cucs6Wjy4L0uMV9tjb6O21BErm6AiA5mvFqVZEFJDcnfmeVAm9YOrUOPEw6P9X5cQ4i2BT23Sr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMBPLj5qPuwgfcrxieKtwDi%2FEf%2FV%2BVlrsd7b%2F1KeazA%2Bzj6fw2dIPoJTiQsUfre%2BDFLZFDACOZKlHO89fmFzTudsm8ZGDAkgLTRhQdZMwSvzQ4nOAx%2FVtqrVLBOWMWuWL1A2TrqfcZMrHhWr6mIIbHdGBb7Rot0OSi2wwn3K36oJeyxrJTP%2B94iLNnBpCwx2%2FhLwv3XyYcExGuzUm58sjF%2BBdZme6C99GV5mTJMH651p4Y5yObjYT4P6oIhl0pZ779f6Kx3w9EcAK90YegNlvoAwbAqzFscRmXPtX0zQLYZ0yketKr0WwcB6BFllvx7YzqwBUQB%2BvneYZJdFhzgfhTyNJ%2FuWUpjz7paO6Ck3AqJZ2jFzu5EbRpqubn2vqWAPpTMyUoOVXoTZtOubZeF4MnGbjaFAh1hm35QrV2m7oTnGNfnT4WWKbqus64F%2Baun7R0MPyxn3ZTjEBvGtvvnacakWV5t5ykcQQhp578q%2FTXx43qQwfUPdAuPLmeMx8alahXeOl5eLZkHsQnI196j4TwqgFpwcgNlWLGJ3Zp4ciqBIryAByk4CK2IirizRkWt8eeKRg69Kj%2BF1xXjA4htJrj8VCJCarpIxx5jUSYp1faMP3re0ByQWbgMT6kAnqWD2Jg5JontyLnfsZPKm8woby0wgY6pgH%2Fk0XinZK9M0r5tZPOLopC1VC8tkg2MfPuTZGehlnqakFTxAiXbeRH%2Bsq%2BCAFaemQfheA6MA7duMb6bGEukZdQkytYQxIe%2B7vlynOrDbDthKw12vLc2xihwb%2F7SioEfMtHMN1YMvjQ7jQBnlIltompM67Z4YzGpsRrQvSh2q%2FWxX9XFjVe92tdxeKswbO1b3ng%2BxOeo%2BlgQssH8%2BgVbWXJZT8sJwT3&X-Amz-Signature=4876c97c69fdfc8387e35c9c6036571175dc52822576b0d46bf110148d559950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XPSRYEE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIBuLFNVve%2BtTA3oZ2Cucs6Wjy4L0uMV9tjb6O21BErm6AiA5mvFqVZEFJDcnfmeVAm9YOrUOPEw6P9X5cQ4i2BT23Sr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMBPLj5qPuwgfcrxieKtwDi%2FEf%2FV%2BVlrsd7b%2F1KeazA%2Bzj6fw2dIPoJTiQsUfre%2BDFLZFDACOZKlHO89fmFzTudsm8ZGDAkgLTRhQdZMwSvzQ4nOAx%2FVtqrVLBOWMWuWL1A2TrqfcZMrHhWr6mIIbHdGBb7Rot0OSi2wwn3K36oJeyxrJTP%2B94iLNnBpCwx2%2FhLwv3XyYcExGuzUm58sjF%2BBdZme6C99GV5mTJMH651p4Y5yObjYT4P6oIhl0pZ779f6Kx3w9EcAK90YegNlvoAwbAqzFscRmXPtX0zQLYZ0yketKr0WwcB6BFllvx7YzqwBUQB%2BvneYZJdFhzgfhTyNJ%2FuWUpjz7paO6Ck3AqJZ2jFzu5EbRpqubn2vqWAPpTMyUoOVXoTZtOubZeF4MnGbjaFAh1hm35QrV2m7oTnGNfnT4WWKbqus64F%2Baun7R0MPyxn3ZTjEBvGtvvnacakWV5t5ykcQQhp578q%2FTXx43qQwfUPdAuPLmeMx8alahXeOl5eLZkHsQnI196j4TwqgFpwcgNlWLGJ3Zp4ciqBIryAByk4CK2IirizRkWt8eeKRg69Kj%2BF1xXjA4htJrj8VCJCarpIxx5jUSYp1faMP3re0ByQWbgMT6kAnqWD2Jg5JontyLnfsZPKm8woby0wgY6pgH%2Fk0XinZK9M0r5tZPOLopC1VC8tkg2MfPuTZGehlnqakFTxAiXbeRH%2Bsq%2BCAFaemQfheA6MA7duMb6bGEukZdQkytYQxIe%2B7vlynOrDbDthKw12vLc2xihwb%2F7SioEfMtHMN1YMvjQ7jQBnlIltompM67Z4YzGpsRrQvSh2q%2FWxX9XFjVe92tdxeKswbO1b3ng%2BxOeo%2BlgQssH8%2BgVbWXJZT8sJwT3&X-Amz-Signature=27f1b81697dc47ab8613c3f3e2b2e6569612b53e950c8c4250e3ca39686fd990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
