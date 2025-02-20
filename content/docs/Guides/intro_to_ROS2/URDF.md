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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664AQLRUK%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICse8xdmXWpZ2obdEhsf3%2FdiJlxlNfnNTM3JYEY1NOypAiBNNbMhBrb9uVMXh7VhNuowNHAryT%2Buf%2BAgvIpSmDxj8yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb8kS7bZ0tfF6O4brKtwDX254UAKBke1cfMTqZFRUprHIfdOcZTyJnuOfr7bCxvwuB7FduT4nDKO3HRpV0z2oZmmb9bc3ZwdUdcezsztdRZxjKJbX78Pf6PYeKuShNxKbc5EbsW%2Fducfa1sYBxeGQspYauu%2B8t8zCcBG9F7o8hxUz4jpvVVDYiKR1%2B4kLNt2tDeYM6Kdm6z8jdqdr8DHEuL9AJDPF94noGc9T69fXKUnS4Kn6OlOGHtR5IW69nfvSSUTTAbjbqXxZlYBhfGyXmdXm0PiEe9usjCC9TN9r%2Fur8QAkmcusLqqQhYudHarbMuhHsy9RparVkfGta1XeajlBOWBNm1Ec6h8JuRnSCF7bAJJbL8B7mBBm3bXjfMZfbHqURlgmK06CxnbYR%2FLy21jjFqaXXiot2N%2FeAYq5VwW1djNL0dkP51QHPsbbEFscNKtN5F4Y9gOqUL6e5Lud4zD7Kshslkl0tXeXe34Bthx4Cqh4yb2OZgbewkWyNc80ET22Yb849AObUXFjYdYoQM%2BdCqvUNeDQ46mHrBIWG4vGrzRhseVOljNb1P1Wc42kQFVA0pi27ImIHbgVD8j23UQIwI9wC4kWTxYqiUeYMpsSbv48WDzSYuVqAwRIH0v4LhKe19jes%2Fp8IlC8wycvcvQY6pgExD4lzmJ1a91ceNNn7gCIRLde1i1seauhyutnkVcWZkbK0VR8vS9A3BFYa5dDNDZ6S4U0ieFX9jg8k8aleSPNsUMrCPqT8F2%2BPvdWKMQL9Howyk%2BnEQ5nSHaVnz2fIA1k%2BOOcQpVI4L8MLqko89Nf9ufQQ1bl%2F3N5FDgs8UgWubfyBxi%2B3%2F2epi0ZHymuyKovXUiqxIkRdeR8QoTBVtAqCx9cdTipZ&X-Amz-Signature=4f7fd3e92d3a27ae7cb3b7601df0189cffbd2eedb12e56ba1d752f8787208607&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664AQLRUK%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICse8xdmXWpZ2obdEhsf3%2FdiJlxlNfnNTM3JYEY1NOypAiBNNbMhBrb9uVMXh7VhNuowNHAryT%2Buf%2BAgvIpSmDxj8yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb8kS7bZ0tfF6O4brKtwDX254UAKBke1cfMTqZFRUprHIfdOcZTyJnuOfr7bCxvwuB7FduT4nDKO3HRpV0z2oZmmb9bc3ZwdUdcezsztdRZxjKJbX78Pf6PYeKuShNxKbc5EbsW%2Fducfa1sYBxeGQspYauu%2B8t8zCcBG9F7o8hxUz4jpvVVDYiKR1%2B4kLNt2tDeYM6Kdm6z8jdqdr8DHEuL9AJDPF94noGc9T69fXKUnS4Kn6OlOGHtR5IW69nfvSSUTTAbjbqXxZlYBhfGyXmdXm0PiEe9usjCC9TN9r%2Fur8QAkmcusLqqQhYudHarbMuhHsy9RparVkfGta1XeajlBOWBNm1Ec6h8JuRnSCF7bAJJbL8B7mBBm3bXjfMZfbHqURlgmK06CxnbYR%2FLy21jjFqaXXiot2N%2FeAYq5VwW1djNL0dkP51QHPsbbEFscNKtN5F4Y9gOqUL6e5Lud4zD7Kshslkl0tXeXe34Bthx4Cqh4yb2OZgbewkWyNc80ET22Yb849AObUXFjYdYoQM%2BdCqvUNeDQ46mHrBIWG4vGrzRhseVOljNb1P1Wc42kQFVA0pi27ImIHbgVD8j23UQIwI9wC4kWTxYqiUeYMpsSbv48WDzSYuVqAwRIH0v4LhKe19jes%2Fp8IlC8wycvcvQY6pgExD4lzmJ1a91ceNNn7gCIRLde1i1seauhyutnkVcWZkbK0VR8vS9A3BFYa5dDNDZ6S4U0ieFX9jg8k8aleSPNsUMrCPqT8F2%2BPvdWKMQL9Howyk%2BnEQ5nSHaVnz2fIA1k%2BOOcQpVI4L8MLqko89Nf9ufQQ1bl%2F3N5FDgs8UgWubfyBxi%2B3%2F2epi0ZHymuyKovXUiqxIkRdeR8QoTBVtAqCx9cdTipZ&X-Amz-Signature=830bf99687e51c028dcceb648178a4328a2e61c2ba205f6285373c12fe3fc16c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
