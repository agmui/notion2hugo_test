---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IYQLL66%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkcMIKfW0%2FCKdNv7KHPabAFc0HAGRVesKeZrXf3VborgIhAKCvwt4dArbdfiUo2tJKvaKi2%2FSZvkGfZ9ApCyJ7bJD0Kv8DCDsQABoMNjM3NDIzMTgzODA1Igzq%2Fl84uhjEU4Do3k4q3APPnMK8dai5gOg9ZYLjsVrZOXBSwY584OWk5Rmt2bGB51vfG3b4JsmZjuICF6V0BA6OhVj%2FT17sC%2BjiFInaNFub0o05h5QD4w4ML4JxECDI5rc9KOcZeaX8Zeq8TkB55CCzjQyg8qoOmHsIy3%2FOrCbQvGzYikpKBBZRV96y0gziQpeR%2BTYaXTu4npTrF7Uv8ZaY0kovdEuxn7x9UdCD2derpymrqY64okNd7wUHedb%2FIP7l8U%2B8o4fuK0dRoVDM7bSvDEYYje3J0LD1R9ojgxl4OG51K95XUdBWj3nRRH44E6PhNHfFRhdEMr4i2VEx2NHT82W1loF9C%2BTCo8I23toml2o%2FOohR25Hm2VOPKIsT83SMp7CDdPNgJ0suyo7svdDsanEMIRigUraNkOrv2ZRfieD%2F%2BSeJ1nrqrqGHULEMLwym05P3bQVBV5NQUo%2FzmTnYAvZ8Xya1jHWYAJgwm2JgXJ7NM4Ptt2QB8Utbjr2ctKIKuBsaPMFFfct7xX3C0PCWQbSUt4ojhe8EOQHuvoWpJN8MzoIgpJnTh511puVW0xulp9pyx1Bc2FHFwdayI6EEJlTExU%2FyT3RIMydof7mH92uMSpcN6tkp1s5nca66IHLL9lHu3gpGP1ZpUDCxi%2FXEBjqkAXifHHDsDSi9FVXY%2BmxJo4atznbtTGPt2v0XbdWB8mNt3P3F1NJ%2FZ%2B13uUDHfJMjHTYoM%2B6onJM2OYEOy0lgBdBztqVl9wguwbm1USBBbCi%2BlCEs2DzH2a9DvRKmIZOMre0dZEnK70dRnVsOD8PNKVOyuVfPxXVXk5O9hlArln%2Fd2OjDo5ifoKK28yK0xYK0OeYFsqqMPI1PFrNlnNucsz8qEdtJ&X-Amz-Signature=283a6583c04cd746911588ad55f6ea6f18a23d4acdd6778921cbc4876de272b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IYQLL66%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkcMIKfW0%2FCKdNv7KHPabAFc0HAGRVesKeZrXf3VborgIhAKCvwt4dArbdfiUo2tJKvaKi2%2FSZvkGfZ9ApCyJ7bJD0Kv8DCDsQABoMNjM3NDIzMTgzODA1Igzq%2Fl84uhjEU4Do3k4q3APPnMK8dai5gOg9ZYLjsVrZOXBSwY584OWk5Rmt2bGB51vfG3b4JsmZjuICF6V0BA6OhVj%2FT17sC%2BjiFInaNFub0o05h5QD4w4ML4JxECDI5rc9KOcZeaX8Zeq8TkB55CCzjQyg8qoOmHsIy3%2FOrCbQvGzYikpKBBZRV96y0gziQpeR%2BTYaXTu4npTrF7Uv8ZaY0kovdEuxn7x9UdCD2derpymrqY64okNd7wUHedb%2FIP7l8U%2B8o4fuK0dRoVDM7bSvDEYYje3J0LD1R9ojgxl4OG51K95XUdBWj3nRRH44E6PhNHfFRhdEMr4i2VEx2NHT82W1loF9C%2BTCo8I23toml2o%2FOohR25Hm2VOPKIsT83SMp7CDdPNgJ0suyo7svdDsanEMIRigUraNkOrv2ZRfieD%2F%2BSeJ1nrqrqGHULEMLwym05P3bQVBV5NQUo%2FzmTnYAvZ8Xya1jHWYAJgwm2JgXJ7NM4Ptt2QB8Utbjr2ctKIKuBsaPMFFfct7xX3C0PCWQbSUt4ojhe8EOQHuvoWpJN8MzoIgpJnTh511puVW0xulp9pyx1Bc2FHFwdayI6EEJlTExU%2FyT3RIMydof7mH92uMSpcN6tkp1s5nca66IHLL9lHu3gpGP1ZpUDCxi%2FXEBjqkAXifHHDsDSi9FVXY%2BmxJo4atznbtTGPt2v0XbdWB8mNt3P3F1NJ%2FZ%2B13uUDHfJMjHTYoM%2B6onJM2OYEOy0lgBdBztqVl9wguwbm1USBBbCi%2BlCEs2DzH2a9DvRKmIZOMre0dZEnK70dRnVsOD8PNKVOyuVfPxXVXk5O9hlArln%2Fd2OjDo5ifoKK28yK0xYK0OeYFsqqMPI1PFrNlnNucsz8qEdtJ&X-Amz-Signature=9145080a1edf023b7b9d7e779e856b4c8e4e7554e5de8130f9cf1e2a271371c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
