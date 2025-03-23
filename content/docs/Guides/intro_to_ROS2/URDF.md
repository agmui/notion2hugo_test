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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664IOCV2W%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRs0UA2psmRlSuoKTTrHXx3GpETcbbhwKilC9g2dXpoAiBjyMvG%2BBsnkTre93LVi5XrmkGfX%2BLeMjv1CIyJAIWqPCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqiVaDuWOaBR15L%2BHKtwDbjOc4LTjTeLK8WRGQVGIHi7YNp1Ff%2BVXKoaUcsecvcd35XzDAol0cwJ8IdSX%2BQ8gsG2i2pVgF6X56Yxl9ZMK4Hg4RgU2aobsYP%2FyXGHZiVsfNU5LbU%2FSyOTylsAZTHCLyW2Zfz5Y7KJA3Ym1z195Jx9gGUNlfzm2MHYBN6BSdmKBhk5M%2BdUS9ARBBnY3Zp6a9eSvxopAmI9X1Ag4HpKc6RfmB25YQnpNgYOvhAK0vHUjpAzQ9xWKXiV2nyHHVAQh5XgxYGIxAkWmjGGbaTTqOwO69EWA8pGyb2dbEKD4ELkF1VaFMKVKfZmYj4d7%2FYUxVPJLinjKayVT5uQ95ZvzzP8%2FAG7lRM4oDWx8cotDdzo3bJKycETvYjj%2BPtSBKwt9iy7UGADRtrIb2i3SVfjFebPNAK7fd99RbEx3YaLbxmuq%2Bsu9ulFbj5sCNxkraTerX8gBYXz2gkumGe9NNGKJaNHuFzfiXCyf1wZRwMtnUHv7UtK7eTNKVOyNrc89z9%2Fov0UNFKqICU8uwhw2bGhdI6P57rzF9F41yidc4N6K2%2BpAmgR4kN9yAR6Y0yixahxGazl2rjbQIMthWSzX0ZRMD8NU0vGIEwSMi0Ly7qjmaWmGihje4xooj0TZhqow6MqBvwY6pgEGUUAPeg2Tp2sZyCI%2BQKPDndeUgt44stqvIvYRQ5%2BxjG0i7nsP0hCR3ftBq8erJW3bKBfHF3GIoInRWqAgLqCniWDdro6V6GA9XyKwCMOlQq7kiiW6z0T0iMTXukQzgLiEbShIa3MF8n093g2nehVJfR4vxnyoqvmSQK1XkT6vNp%2BngSZRfh%2BAw1uHAxsjPjQI5y28qIhn8XXALnS5HQxXaI9lNu2v&X-Amz-Signature=52bfae6fc6bbe54b1ad44901eb1262db69a286ab0e4cb1ebe444003e9d428a45&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664IOCV2W%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRs0UA2psmRlSuoKTTrHXx3GpETcbbhwKilC9g2dXpoAiBjyMvG%2BBsnkTre93LVi5XrmkGfX%2BLeMjv1CIyJAIWqPCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqiVaDuWOaBR15L%2BHKtwDbjOc4LTjTeLK8WRGQVGIHi7YNp1Ff%2BVXKoaUcsecvcd35XzDAol0cwJ8IdSX%2BQ8gsG2i2pVgF6X56Yxl9ZMK4Hg4RgU2aobsYP%2FyXGHZiVsfNU5LbU%2FSyOTylsAZTHCLyW2Zfz5Y7KJA3Ym1z195Jx9gGUNlfzm2MHYBN6BSdmKBhk5M%2BdUS9ARBBnY3Zp6a9eSvxopAmI9X1Ag4HpKc6RfmB25YQnpNgYOvhAK0vHUjpAzQ9xWKXiV2nyHHVAQh5XgxYGIxAkWmjGGbaTTqOwO69EWA8pGyb2dbEKD4ELkF1VaFMKVKfZmYj4d7%2FYUxVPJLinjKayVT5uQ95ZvzzP8%2FAG7lRM4oDWx8cotDdzo3bJKycETvYjj%2BPtSBKwt9iy7UGADRtrIb2i3SVfjFebPNAK7fd99RbEx3YaLbxmuq%2Bsu9ulFbj5sCNxkraTerX8gBYXz2gkumGe9NNGKJaNHuFzfiXCyf1wZRwMtnUHv7UtK7eTNKVOyNrc89z9%2Fov0UNFKqICU8uwhw2bGhdI6P57rzF9F41yidc4N6K2%2BpAmgR4kN9yAR6Y0yixahxGazl2rjbQIMthWSzX0ZRMD8NU0vGIEwSMi0Ly7qjmaWmGihje4xooj0TZhqow6MqBvwY6pgEGUUAPeg2Tp2sZyCI%2BQKPDndeUgt44stqvIvYRQ5%2BxjG0i7nsP0hCR3ftBq8erJW3bKBfHF3GIoInRWqAgLqCniWDdro6V6GA9XyKwCMOlQq7kiiW6z0T0iMTXukQzgLiEbShIa3MF8n093g2nehVJfR4vxnyoqvmSQK1XkT6vNp%2BngSZRfh%2BAw1uHAxsjPjQI5y28qIhn8XXALnS5HQxXaI9lNu2v&X-Amz-Signature=95b3503cafaf3beef524c441fa289ec78c147cc97ca36556763fa6219651e52d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
