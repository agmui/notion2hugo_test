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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVPQC6I%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvuibiNAOBjvipEh3GBAm5OWZX4IcrMIvb%2Fx7zlwQ8EAiEA1KmhSjG%2FkHrCFhJseWmhbaR7ZOlq8x%2B58EyCa3%2BiBFcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHkxoApOmULV2bfxeyrcA6jve3kOLlHHfOGuOqn1hbcgssPE1HvTebcxT0uIu2%2F0WJFSr%2B54hZMS7QXc6LSp3QPSW756icyS%2BXIKJvYvVl6VJOFxdeEg8q0g1ck8Sh%2B%2FxD51Z30TLXDE2D%2FAmMBywT7H2YotIjwfSrgMdWGX%2Fuk4eEvZ2x7D7XFbfRGbVSSOZuvHB%2B1d8rviptT6Mh%2F2%2FakDOvutqxgnYg63t%2FU3MpgYQd%2FRsvhI8kIB%2Br3nNWez4S8fQthfxJguKD4l6dKdd4Isi5Hbc4efpCSkhf0W7RM1HlTnDOrHW2QriOrUaJcEKnonyegq7fnbtt9dWUYufGCHaOZIHdSBwVhXX15irnUl2c%2FKZFm0k%2BNWkXV2qnyCXDG4OrZZn%2FpQv5bZt2%2BOWwbGLsh5w3vM6Tvp7ypnnW4CtH8gkHfEf5JmKZ1FUYvuVVrhRmd%2BfWxOeQSgvePsV%2FcUvJR6Ju3ARNtrjZ4B8i%2FaK3YglwybThxa4YDrIju3UyGxPzFb6CGScSRJvmhAtihWVuruqwCQ9PvASWkCHWE%2FSI95kk%2BvBDFJacJnf5jUS1lsgVebNPSzkrNU%2Be9Tww5FRZ7PAHCT9MAC2zywtTsgFImT8L%2BNIL4PZrZ8GM6ymyaFNLA6WICoWtxSMIebncEGOqUBfCzfXbKHTExI%2FAdbn%2BB%2FXEkQdJSL9mRuNN0XsTHdtzckTaBMQetkclOfMv8ECIRbV090PBuabUDT0HfUfnCsRdRHXFZ8L9AUExM9t0LG7Zp2h20g2vZ0u0HzROlbhXqKc7Onm6WGftKbS3%2ByrMfOxCcVfnt6%2Fwwxx3xlK2jUphB5BG%2BqyEhn5qQrk7uWJTcSKipK47WTLA1TiUsmAE3WJLfKjRJI&X-Amz-Signature=8520e65c5a8a823fb3667acf9772ad09147abd5dcf251b69666a84c3ca74e524&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVPQC6I%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvuibiNAOBjvipEh3GBAm5OWZX4IcrMIvb%2Fx7zlwQ8EAiEA1KmhSjG%2FkHrCFhJseWmhbaR7ZOlq8x%2B58EyCa3%2BiBFcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHkxoApOmULV2bfxeyrcA6jve3kOLlHHfOGuOqn1hbcgssPE1HvTebcxT0uIu2%2F0WJFSr%2B54hZMS7QXc6LSp3QPSW756icyS%2BXIKJvYvVl6VJOFxdeEg8q0g1ck8Sh%2B%2FxD51Z30TLXDE2D%2FAmMBywT7H2YotIjwfSrgMdWGX%2Fuk4eEvZ2x7D7XFbfRGbVSSOZuvHB%2B1d8rviptT6Mh%2F2%2FakDOvutqxgnYg63t%2FU3MpgYQd%2FRsvhI8kIB%2Br3nNWez4S8fQthfxJguKD4l6dKdd4Isi5Hbc4efpCSkhf0W7RM1HlTnDOrHW2QriOrUaJcEKnonyegq7fnbtt9dWUYufGCHaOZIHdSBwVhXX15irnUl2c%2FKZFm0k%2BNWkXV2qnyCXDG4OrZZn%2FpQv5bZt2%2BOWwbGLsh5w3vM6Tvp7ypnnW4CtH8gkHfEf5JmKZ1FUYvuVVrhRmd%2BfWxOeQSgvePsV%2FcUvJR6Ju3ARNtrjZ4B8i%2FaK3YglwybThxa4YDrIju3UyGxPzFb6CGScSRJvmhAtihWVuruqwCQ9PvASWkCHWE%2FSI95kk%2BvBDFJacJnf5jUS1lsgVebNPSzkrNU%2Be9Tww5FRZ7PAHCT9MAC2zywtTsgFImT8L%2BNIL4PZrZ8GM6ymyaFNLA6WICoWtxSMIebncEGOqUBfCzfXbKHTExI%2FAdbn%2BB%2FXEkQdJSL9mRuNN0XsTHdtzckTaBMQetkclOfMv8ECIRbV090PBuabUDT0HfUfnCsRdRHXFZ8L9AUExM9t0LG7Zp2h20g2vZ0u0HzROlbhXqKc7Onm6WGftKbS3%2ByrMfOxCcVfnt6%2Fwwxx3xlK2jUphB5BG%2BqyEhn5qQrk7uWJTcSKipK47WTLA1TiUsmAE3WJLfKjRJI&X-Amz-Signature=cf4cf210228d386520cd6a91c5e721299ec889e2022752666b03ebf0345a9b42&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
