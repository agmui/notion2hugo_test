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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TYGDBOT%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCICF1Kg%2FCcUsOy03tX3TKgXhNH%2B%2FcxivQ3pEnXDUvH6XHAiA3ozeFlPJtvIFhd8dxoPDf4g1MlNntuy7NiFrHZ%2BMGKSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuBQXlSZPRcmjZay3KtwD%2FPTUsEXgCZUyG503XmhyGZhfv%2FhA76qw8QGEovNWmvRTe2bVxhW5PmskP02%2Bh4C%2FppatAl6Cl18AimXIecMN94YuKY42C1voSGGHCh25wrDAx2bHaI8jQgm2a7sqTSFeNcW6Vw8bGPHUefHaWFqY5Nb0yDR4A4gT9QoNKB7godijZjn6MLiY%2FiWUroF6i8UbpYA%2BZIgjMNOx0H8BgpBfcQgH9C35PNy00Qhas%2BVzygxhnQWGG3oo3zsAhmA%2Fa%2Fcnc%2FnkXGVmEY3Y9H96AogEO72Mf3rRKOjjDW6rsaOKOmn9je%2BBLQ%2BxCXsGsjq4S3hfxX0gcs5BvAVeSkntm%2Bhldm6nSMmcJ7e%2B8rb42XHFWwcjk9Q8oBB9yYRvXfK9bYy1n4E%2F1msLPfk0HCxquysgUAOrsUGRchjDHPm84VgAeQk2n3HJQjVWxxOHKDz1jEB2SM%2BGeVdxXK9VgQ7vKj85XtakG9aYdfBM%2F%2BrtB2Em4ogPb%2FCnF%2FJoOyvM40nLLGBX2cKP1D64mafzckTONXuBCoOzu6%2BQL7mRgiEmfzWzRsDXnRhfzWl9o3xKu2jhvhoDcpsVnP3cqTbOF1t4ujGmQXHyWjADOVrNZIYFBdZR2chi2WD1VnVamK%2BHGx0wy6TmvwY6pgFlmRfS3gei8RsDnX9LtVK4qhScRQYdpN7k7%2BnqmWEBOGoBlj2qrCzEj%2FIr3PqcI7kieHC4bKwXbw1DLyISrRg5zmYMP0ZpB9%2FnrW0tl4YJwp6GTcq30TIezOSIT35VRUPO31kCMgXgnH20YvYdUmWlUruKqItpWgr0d2TYo839B2we0GRnjwIAK%2F4xc9b%2BcPrmuLjbOPClrV7aVk39EzacVFw8%2FZ8j&X-Amz-Signature=7df0838e67a80a0ccd7b5aa5cf8e07b2b64366c1baeee3486e50a77310b5e17c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TYGDBOT%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCICF1Kg%2FCcUsOy03tX3TKgXhNH%2B%2FcxivQ3pEnXDUvH6XHAiA3ozeFlPJtvIFhd8dxoPDf4g1MlNntuy7NiFrHZ%2BMGKSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuBQXlSZPRcmjZay3KtwD%2FPTUsEXgCZUyG503XmhyGZhfv%2FhA76qw8QGEovNWmvRTe2bVxhW5PmskP02%2Bh4C%2FppatAl6Cl18AimXIecMN94YuKY42C1voSGGHCh25wrDAx2bHaI8jQgm2a7sqTSFeNcW6Vw8bGPHUefHaWFqY5Nb0yDR4A4gT9QoNKB7godijZjn6MLiY%2FiWUroF6i8UbpYA%2BZIgjMNOx0H8BgpBfcQgH9C35PNy00Qhas%2BVzygxhnQWGG3oo3zsAhmA%2Fa%2Fcnc%2FnkXGVmEY3Y9H96AogEO72Mf3rRKOjjDW6rsaOKOmn9je%2BBLQ%2BxCXsGsjq4S3hfxX0gcs5BvAVeSkntm%2Bhldm6nSMmcJ7e%2B8rb42XHFWwcjk9Q8oBB9yYRvXfK9bYy1n4E%2F1msLPfk0HCxquysgUAOrsUGRchjDHPm84VgAeQk2n3HJQjVWxxOHKDz1jEB2SM%2BGeVdxXK9VgQ7vKj85XtakG9aYdfBM%2F%2BrtB2Em4ogPb%2FCnF%2FJoOyvM40nLLGBX2cKP1D64mafzckTONXuBCoOzu6%2BQL7mRgiEmfzWzRsDXnRhfzWl9o3xKu2jhvhoDcpsVnP3cqTbOF1t4ujGmQXHyWjADOVrNZIYFBdZR2chi2WD1VnVamK%2BHGx0wy6TmvwY6pgFlmRfS3gei8RsDnX9LtVK4qhScRQYdpN7k7%2BnqmWEBOGoBlj2qrCzEj%2FIr3PqcI7kieHC4bKwXbw1DLyISrRg5zmYMP0ZpB9%2FnrW0tl4YJwp6GTcq30TIezOSIT35VRUPO31kCMgXgnH20YvYdUmWlUruKqItpWgr0d2TYo839B2we0GRnjwIAK%2F4xc9b%2BcPrmuLjbOPClrV7aVk39EzacVFw8%2FZ8j&X-Amz-Signature=7c0cfbdda18236728e57281ede101dd2ff10c7a30c0133eadf4804d11481f7dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
