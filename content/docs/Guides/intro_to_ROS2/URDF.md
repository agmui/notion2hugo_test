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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IJYYQDU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD45tlHoV%2FZuaft1oQOwrp7cAg3e0lvXEhoMiuEHp51xAIhAIFRW%2Fkt6b4n8Hll3uxhfEz8Xczo%2FSSu%2FNzMXdFkaMatKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1gpgg1BOQW9MAF4kq3AMHxfD%2B4k2d62HJ0l3sRvCVNQnRZyFaiEO0IMwSiSmIi7Ypk02y%2FLiwKoXdUjmjKbFY3yTdVqZ35MWKeIoSlwu%2BN92JDFH9IsycuDFCEbWq%2F8PbDxgk0jtXg9unAqguguLcfSHaB4gLQReqEjaCouhuHfwYVnKSFA2j6jJWMCgCjwReuPvC4jIB%2Fow0%2B3y%2BCvA8EwSCtHXz%2F299hSProOdWHp3V5ZdExRJwEAczAoMfpJlneoGPDE76De5ibWpBxxKtZHOwz3RH3TaBB1%2F%2B1i8bhHH73UswT8Qh7pxrLa2u9gUxkjiBNWFznp%2FYVwjKUBTqeVdwekVQABSUt7%2FSTxRMQ7CndouXGaRXFKQZFWq6YxAsC9A5Rky9Cl9zj85aqJz9eoTplMC6dtKIrbr%2BDoAbEk0rLkqbIldOmzeyVCAh9iVMNwSgrmyd9mRIajNRHXcsZ9nwlLE%2Bdm%2FnO%2BTKnrcbCywRoU%2B%2FTY3wwvAPfJL6rTjnM01Yd2ZjozZPeFkK7rc3tR5rEGDZ6UKtfRHGmhczrEwmYV015vQ%2FHHqOXzZSICkrpjt8fNU2PNlFI1BwfdS593CfdR686WRJpfp1i%2FT%2BapT1Xl4ju62bbj1vcZy0TnTjVVmnEr8KXD2VwTCygITDBjqkAVhkmAyOX9NYszR2vK2q2LFbIQuREppl5yFx8CnXyzkcAWB36BpmmL0ff7xEzqrtRZ6q9Yf2zfjI6y7CJQuHkUpdqZT0T28SsPyUWAnU7DcypfOBy%2BxhcbCQdjdEUKpptVe5qPokgpIZsyq9vnjYeCv1egVHmDgQEQVQgg%2FtRiyProDRkqK76UvWPSTMlwRierTlKdLknGN%2F74xHsEA3KHuv9lXi&X-Amz-Signature=666ab94a0e4a11502fdee562a76c19fbd4211d82264bc2fa11a2cf745484c39c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IJYYQDU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD45tlHoV%2FZuaft1oQOwrp7cAg3e0lvXEhoMiuEHp51xAIhAIFRW%2Fkt6b4n8Hll3uxhfEz8Xczo%2FSSu%2FNzMXdFkaMatKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1gpgg1BOQW9MAF4kq3AMHxfD%2B4k2d62HJ0l3sRvCVNQnRZyFaiEO0IMwSiSmIi7Ypk02y%2FLiwKoXdUjmjKbFY3yTdVqZ35MWKeIoSlwu%2BN92JDFH9IsycuDFCEbWq%2F8PbDxgk0jtXg9unAqguguLcfSHaB4gLQReqEjaCouhuHfwYVnKSFA2j6jJWMCgCjwReuPvC4jIB%2Fow0%2B3y%2BCvA8EwSCtHXz%2F299hSProOdWHp3V5ZdExRJwEAczAoMfpJlneoGPDE76De5ibWpBxxKtZHOwz3RH3TaBB1%2F%2B1i8bhHH73UswT8Qh7pxrLa2u9gUxkjiBNWFznp%2FYVwjKUBTqeVdwekVQABSUt7%2FSTxRMQ7CndouXGaRXFKQZFWq6YxAsC9A5Rky9Cl9zj85aqJz9eoTplMC6dtKIrbr%2BDoAbEk0rLkqbIldOmzeyVCAh9iVMNwSgrmyd9mRIajNRHXcsZ9nwlLE%2Bdm%2FnO%2BTKnrcbCywRoU%2B%2FTY3wwvAPfJL6rTjnM01Yd2ZjozZPeFkK7rc3tR5rEGDZ6UKtfRHGmhczrEwmYV015vQ%2FHHqOXzZSICkrpjt8fNU2PNlFI1BwfdS593CfdR686WRJpfp1i%2FT%2BapT1Xl4ju62bbj1vcZy0TnTjVVmnEr8KXD2VwTCygITDBjqkAVhkmAyOX9NYszR2vK2q2LFbIQuREppl5yFx8CnXyzkcAWB36BpmmL0ff7xEzqrtRZ6q9Yf2zfjI6y7CJQuHkUpdqZT0T28SsPyUWAnU7DcypfOBy%2BxhcbCQdjdEUKpptVe5qPokgpIZsyq9vnjYeCv1egVHmDgQEQVQgg%2FtRiyProDRkqK76UvWPSTMlwRierTlKdLknGN%2F74xHsEA3KHuv9lXi&X-Amz-Signature=a68b48f6997f8f7ed4a7da6532ceab8da3e40e382723f2bbd1d8ad34ff2c4de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
