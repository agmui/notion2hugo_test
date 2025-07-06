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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HLHQXO6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD%2BuKSz%2B9TuB3BIozKhOWmHtLqwffAfAHcG4EoO9lAcXAIhAJ43fGqaKYNQ6QqY4g7C5PHXz2HPulde1pB2%2Fq94ZPjsKv8DCGMQABoMNjM3NDIzMTgzODA1IgyWOGJfSAHpeNpoO2Eq3AOG6N2hLt6%2Fw7zILEPvpsL%2BqVhbT%2BA8Z95Sg%2FyhZovC9%2F%2Filj66TwKhOXSalM6oyFJRBg3RTjGiynxxhuO4lh3GY9ftviIaEJ7bWLLBdYFkiY9OGyKcCcXMOYGZ5ZXRz5mIxZXocgJ8ZlOibA31mueyYPw5OZbUdXJkNxT29AgqhMca3cKAfefLP7loyf564V%2BwdhLin7NO40rPyizQJnrXcvXXrgCnV%2B49h1tO7uNLwI%2FGIBIWukDUXOzFn69CuKyp2v09LU227LHACypvA3MeukQlV8e%2FqAAFkfCHA3UNOVOh4%2BAFxK4%2BTwxRdMDKLyUPTrb83WDRnYTB%2BA2BIHt7OqhBdLPHKFf%2BOVGb1tvimVxt8uqASQooLaD%2BL4uERXH5DeQfhvW%2FduayBK1WDsBpkfGmQiZNTOlI0dkqEWxor4q7f%2BtioK1Z%2BscTqhT%2FWzfE6gD0pIH7KABGfJmb0bdOZeCTdGEd5F%2BNB9hoNokvNc2tNTLDoWvLLETNZG2G8uaxpKoNj6CKYrY98gjFFG2Oae6%2FKL%2FFsABbGNMt6qqzR4yflR6TDyo5npSK6HrGyYtZuUrhDJfK%2FEPt1tXo8ogcBPZUBAakuJx7c4A6wBeJS7w3JhJw0P6sE4nxyjCB86rDBjqkASzM1O%2FVKltzJQwuWUvQy%2FfVHGleoJkA6K9Zlmhodj%2FMVNLTgpXUj8DN7f7RiaczPakZvyxbQHnEE53iwe9g9TQCaVAQl7uo250CRPdzVTUWTdSwMOGtgWNf3LLpulmVDJAB9jFQfy%2Bqf67JdjKdRF2aLlw2d9sHEBFd8OI%2FMG3id8RtV91AI2%2BijblYT3SQ43gyJP2UF5uvrElF8FXluBMKmfS5&X-Amz-Signature=418a0ac2b930e8a346cf90e89a05da11c33ff04f53c0f45ca94e3f24e823d53b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HLHQXO6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD%2BuKSz%2B9TuB3BIozKhOWmHtLqwffAfAHcG4EoO9lAcXAIhAJ43fGqaKYNQ6QqY4g7C5PHXz2HPulde1pB2%2Fq94ZPjsKv8DCGMQABoMNjM3NDIzMTgzODA1IgyWOGJfSAHpeNpoO2Eq3AOG6N2hLt6%2Fw7zILEPvpsL%2BqVhbT%2BA8Z95Sg%2FyhZovC9%2F%2Filj66TwKhOXSalM6oyFJRBg3RTjGiynxxhuO4lh3GY9ftviIaEJ7bWLLBdYFkiY9OGyKcCcXMOYGZ5ZXRz5mIxZXocgJ8ZlOibA31mueyYPw5OZbUdXJkNxT29AgqhMca3cKAfefLP7loyf564V%2BwdhLin7NO40rPyizQJnrXcvXXrgCnV%2B49h1tO7uNLwI%2FGIBIWukDUXOzFn69CuKyp2v09LU227LHACypvA3MeukQlV8e%2FqAAFkfCHA3UNOVOh4%2BAFxK4%2BTwxRdMDKLyUPTrb83WDRnYTB%2BA2BIHt7OqhBdLPHKFf%2BOVGb1tvimVxt8uqASQooLaD%2BL4uERXH5DeQfhvW%2FduayBK1WDsBpkfGmQiZNTOlI0dkqEWxor4q7f%2BtioK1Z%2BscTqhT%2FWzfE6gD0pIH7KABGfJmb0bdOZeCTdGEd5F%2BNB9hoNokvNc2tNTLDoWvLLETNZG2G8uaxpKoNj6CKYrY98gjFFG2Oae6%2FKL%2FFsABbGNMt6qqzR4yflR6TDyo5npSK6HrGyYtZuUrhDJfK%2FEPt1tXo8ogcBPZUBAakuJx7c4A6wBeJS7w3JhJw0P6sE4nxyjCB86rDBjqkASzM1O%2FVKltzJQwuWUvQy%2FfVHGleoJkA6K9Zlmhodj%2FMVNLTgpXUj8DN7f7RiaczPakZvyxbQHnEE53iwe9g9TQCaVAQl7uo250CRPdzVTUWTdSwMOGtgWNf3LLpulmVDJAB9jFQfy%2Bqf67JdjKdRF2aLlw2d9sHEBFd8OI%2FMG3id8RtV91AI2%2BijblYT3SQ43gyJP2UF5uvrElF8FXluBMKmfS5&X-Amz-Signature=3010136f97e7f23e5c48c9a4eb9c400a17e93101b409866272f5b99d0c2f254e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
