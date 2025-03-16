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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWFHLJVJ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSDLFykuPchaUpWo2yJz%2FX7Xvv5wIBaWzC41mQBjKwMgIhAKgES82TUaOUVZYrsS2Szlx1sfuzW2MRt4%2FEMi7gcfP%2FKv8DCCAQABoMNjM3NDIzMTgzODA1IgxpFueBauL3P%2BEsHm4q3AM1qo38UpuwO5PbBhB%2FE%2BZ%2F3UE503UG%2FO9WJ2R5jmj02XT3EAgvMQC%2F7LHGS5FXj3wz9jXxqZnefigf2R2WiFoB2kuGhIeF5y2yeArrNb2U0fnMmGZbQruYeJqZZ0sj9bPa33A%2BsYagi0HdaIeJXU%2FWEgyDQvd9fTToJbq%2FtH%2BdGlaqSCrMBZWacdCZYGOLNF7TVnJ0CPO%2Bz%2BgLQU6Rc5WEXuycn%2Fb8ZhZTZmNoyNlvKei6Z1ssLcMfAEn281%2BCR7gJ1zaxih%2FKP9PP3ZUPMEI9s24R97bcYi5HsdcSUrCPyLKr%2Ftaipc86b8CzhnAxd8ZBeKfFidtJneFSqkOROsGcc%2B%2F8frN1BOHLaIa%2BYcXBvVwxcWb%2BPGN1BpyWI94yCe6LegMEs6abr07KHJ%2Fbb3HQez37fsKsnm6%2Bmd0lnegP4OReNExLX6ragjd%2BuwySCfyGNqK71T5YpjVQHUPY5%2F8EN%2B6BoNhWDKUgmHIv6vScPALT8beJ4ji6eSJhixytTKpQxI2%2BJYuk2mex%2B3lgipxgg8iTMgPbfd03c4xXwu0ZTWGzyrZ8Hg7NMsT5%2BurMu0z3CdBNmNJoLIm53z5MRSWkQ62pbrm9jRgNEVth8M7D%2BCk7tjqtE4scbS%2BfdTDTgti%2BBjqkAREz2%2FUH%2BVtE7F5svW%2F2ZlZcPRiPicaf77OJ%2FcyOLjXYeaTffsHNyt8X9uVGXgq5k7JEPHbGPbvj%2Fq8F75tBV7ZM%2FdTrQnRFtwohDySTUxO2AwBtYCevuuW9B7GJmmHrRxjZJSqcYddFCpLICxKu7nA95%2BdsAjiJgxqFe9BPu9HwUZPTmtiinsr49wZByDZpY9ucEm07%2FUwbe1swk8RwoJoSjcGq&X-Amz-Signature=1ceec029f652b2c56fa602eb8703e7492fd9c0cdf9ec92be9e3248a5099c074a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWFHLJVJ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSDLFykuPchaUpWo2yJz%2FX7Xvv5wIBaWzC41mQBjKwMgIhAKgES82TUaOUVZYrsS2Szlx1sfuzW2MRt4%2FEMi7gcfP%2FKv8DCCAQABoMNjM3NDIzMTgzODA1IgxpFueBauL3P%2BEsHm4q3AM1qo38UpuwO5PbBhB%2FE%2BZ%2F3UE503UG%2FO9WJ2R5jmj02XT3EAgvMQC%2F7LHGS5FXj3wz9jXxqZnefigf2R2WiFoB2kuGhIeF5y2yeArrNb2U0fnMmGZbQruYeJqZZ0sj9bPa33A%2BsYagi0HdaIeJXU%2FWEgyDQvd9fTToJbq%2FtH%2BdGlaqSCrMBZWacdCZYGOLNF7TVnJ0CPO%2Bz%2BgLQU6Rc5WEXuycn%2Fb8ZhZTZmNoyNlvKei6Z1ssLcMfAEn281%2BCR7gJ1zaxih%2FKP9PP3ZUPMEI9s24R97bcYi5HsdcSUrCPyLKr%2Ftaipc86b8CzhnAxd8ZBeKfFidtJneFSqkOROsGcc%2B%2F8frN1BOHLaIa%2BYcXBvVwxcWb%2BPGN1BpyWI94yCe6LegMEs6abr07KHJ%2Fbb3HQez37fsKsnm6%2Bmd0lnegP4OReNExLX6ragjd%2BuwySCfyGNqK71T5YpjVQHUPY5%2F8EN%2B6BoNhWDKUgmHIv6vScPALT8beJ4ji6eSJhixytTKpQxI2%2BJYuk2mex%2B3lgipxgg8iTMgPbfd03c4xXwu0ZTWGzyrZ8Hg7NMsT5%2BurMu0z3CdBNmNJoLIm53z5MRSWkQ62pbrm9jRgNEVth8M7D%2BCk7tjqtE4scbS%2BfdTDTgti%2BBjqkAREz2%2FUH%2BVtE7F5svW%2F2ZlZcPRiPicaf77OJ%2FcyOLjXYeaTffsHNyt8X9uVGXgq5k7JEPHbGPbvj%2Fq8F75tBV7ZM%2FdTrQnRFtwohDySTUxO2AwBtYCevuuW9B7GJmmHrRxjZJSqcYddFCpLICxKu7nA95%2BdsAjiJgxqFe9BPu9HwUZPTmtiinsr49wZByDZpY9ucEm07%2FUwbe1swk8RwoJoSjcGq&X-Amz-Signature=365883ed0bc884c193d644153f86160caebd5f8ac794f6354bf57c774b633442&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
