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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWVI6PK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD1IQf6vZuvOCtV336Wo52B6c%2Fz6v3PszrSvpBKXn7KwQIhAN%2BmJ27TwBRcjUoEpVzfutMLvNMZr78VC7NDRTDIKRijKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycHJahNEPeKL2yugcq3AMHKjNZF8CgQfIwlym9zHA%2FNVwL96ZeOkEqYCcA9XGHXk1LWht0CdokmCufW9xW6MhkUfbsR91N%2BVDMCAq%2Bjiyvly0uyv2XUoHB6MAnsgP8H%2FJBMr%2B12evyENhdLo5GjxKUmG4Ai912aDvB7KVPoz26LLHIrrrEuw4ZSEWMuTD6%2BLpk%2F%2B%2F8HGXlhC6LNnQtD1gt3Ec5wyU9%2BjgDufsS1TKXlsMohV0qUcDWGZpH9D6M6Fly2YsE4Vm5h3dWSRLvbNv%2FDU%2BmwbOpxNaSYoY%2F2SC3QnDzWd2t9iF6j%2BQenqBg55fvFzJZR7gtD3g0birDFybXUIZ%2BSuIvMWJ0a5jpD%2Bvs6VtKJalaU3o8xUejAvCMJmuwyzzt7%2BChBs2RcElFSV5V7m%2F59hJ0OvjEthC14bQm0gOooVyvqohuXQyspLAPIV0%2FV6W%2FhNfkZtucCeSWbPlgM6ISyeafSXectifFGNeHHD2nkBPVTjn9O4d5SGip3cNfMYG8Djn4QmbJfgBVWcsrKZzC9%2FsmvVXZ98%2BEVfNvtohc6ORI6WtJ%2Fb8avvWo6pwhPLeOFxphj%2BF%2F9B19ehAbfNJZ1QueNG1N1PNoAAZfMTN9UbiMz%2B9UkZ43gGPOu%2FNNipTWQzoVzScJGzDeuZ%2FEBjqkAaezWKw6q%2BjIaGl%2Fu%2BaZLuoJmv3gPKkITFQIQP%2FwEEfQb6hljhoZ7bpr%2Fio9s7rD33ngNr56%2FNckoUutVKVbJq1HV6HmDk21oLp85hZ3ah6pQUogTbROc5PGN6KC2byDHnJdParoCpStpbqZnKlVpVjaZoRH3M5Y3%2FiDuZAZO4sBE2sU4vl68qrIthgN1CbkLjyaYj%2Blg8VCacgGxjoab9guPDSq&X-Amz-Signature=3dda8f9ebbc3666579cdc80d93ec36d7cd658fe5a2afac2098a1bacddc2d227f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWVI6PK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD1IQf6vZuvOCtV336Wo52B6c%2Fz6v3PszrSvpBKXn7KwQIhAN%2BmJ27TwBRcjUoEpVzfutMLvNMZr78VC7NDRTDIKRijKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycHJahNEPeKL2yugcq3AMHKjNZF8CgQfIwlym9zHA%2FNVwL96ZeOkEqYCcA9XGHXk1LWht0CdokmCufW9xW6MhkUfbsR91N%2BVDMCAq%2Bjiyvly0uyv2XUoHB6MAnsgP8H%2FJBMr%2B12evyENhdLo5GjxKUmG4Ai912aDvB7KVPoz26LLHIrrrEuw4ZSEWMuTD6%2BLpk%2F%2B%2F8HGXlhC6LNnQtD1gt3Ec5wyU9%2BjgDufsS1TKXlsMohV0qUcDWGZpH9D6M6Fly2YsE4Vm5h3dWSRLvbNv%2FDU%2BmwbOpxNaSYoY%2F2SC3QnDzWd2t9iF6j%2BQenqBg55fvFzJZR7gtD3g0birDFybXUIZ%2BSuIvMWJ0a5jpD%2Bvs6VtKJalaU3o8xUejAvCMJmuwyzzt7%2BChBs2RcElFSV5V7m%2F59hJ0OvjEthC14bQm0gOooVyvqohuXQyspLAPIV0%2FV6W%2FhNfkZtucCeSWbPlgM6ISyeafSXectifFGNeHHD2nkBPVTjn9O4d5SGip3cNfMYG8Djn4QmbJfgBVWcsrKZzC9%2FsmvVXZ98%2BEVfNvtohc6ORI6WtJ%2Fb8avvWo6pwhPLeOFxphj%2BF%2F9B19ehAbfNJZ1QueNG1N1PNoAAZfMTN9UbiMz%2B9UkZ43gGPOu%2FNNipTWQzoVzScJGzDeuZ%2FEBjqkAaezWKw6q%2BjIaGl%2Fu%2BaZLuoJmv3gPKkITFQIQP%2FwEEfQb6hljhoZ7bpr%2Fio9s7rD33ngNr56%2FNckoUutVKVbJq1HV6HmDk21oLp85hZ3ah6pQUogTbROc5PGN6KC2byDHnJdParoCpStpbqZnKlVpVjaZoRH3M5Y3%2FiDuZAZO4sBE2sU4vl68qrIthgN1CbkLjyaYj%2Blg8VCacgGxjoab9guPDSq&X-Amz-Signature=267002b621c6937f14faf58adeb569799e5fae63e0c62d316b57725f32b32bb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
