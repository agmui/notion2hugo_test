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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AFYG6QA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDijOvAdEFBI1h7qgNddsg36C72SxP%2BdoimWXCwPRpbrAIhALI%2FFiAm5VNWWwBmkgy8VKOEeGcTK9aOPOdtUgLNxQRCKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoGp4jGBeBIEH3Fh0q3AO6AUJWVhRy3uDSgHuNKZyQpRrvhWfpwCl867APIIFqvIhAbKlxS4%2FnY%2BgXSF%2FObP8107k1UM1kegcyxWXs1T2GdxAYNlalpFTcuJmV1mltuW7GSM%2FHlUbeMdbteZx0POvreXNty6RVRBWpLpfPWinfntGT0XOTRRWYAkSMyINtCwZtSP0cadH0JnWOPCDmzfhrwciuN%2BA4Dk8AlhGVd01g3MMAEPoYUMSiALhHXdpz7RuHg2Zr7PaNGOwCHV1rIf8nS%2FoXtx4eyas8y2r8wjm8SLOge326pEvQQ2ShAI%2FpL7T7ngR79Q6s9Oikai5SUFOQ6gLUOniHeVm4XGxRPBUU5BNcxDhtrw6MVGS2XGKslt20Omu7ldqlKfxxWZVM5OV%2BAlndiB8K7SfJhOk1Mk55cuLyXY8BineAk8cj4rVhdS3OpzTAVX6hHCTARLZh5Mwwi69YVAaoPS8PU5WP0ZX3xW4lGlFIMBWbLs67UfpKKgW7FRshHPtOgyw6a%2Bgdp%2FVDGSPBuzqDKNOPllo3SGANvNaodfrp08%2FAqNg6Top0bbsgDc1%2F1FpD0j%2B%2FJuk46Tlioa8fAsg1iN3h%2FwjNoVE0QPVa57%2FHn9kW4YtINg4a23r1UXQvr597mNShyzCHsaLEBjqkASPESSQic0On7MSXLizscjurAyaIWtve1y7MhypaVRSj%2BTuywEY3c%2B7Ahuzm7B9POSL%2BA4Ey7OtFhzquvKtEVMv7l6IRd%2F0ML9cGk5vfOn1J%2FdFzoZiFcadzqW79doCWs3UrClWs4MIGkqgiTscFNmrLAokzsJ8Vv9huNWGBKNW1zl4oMwIlqtwnxHeheIo8QDh0CxeMKOP38MoC98I%2FC12WTLl3&X-Amz-Signature=7a4d80d74d6ce2168576ae423c61559973fd58a84ed9c93376a41d93cf6f5c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AFYG6QA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDijOvAdEFBI1h7qgNddsg36C72SxP%2BdoimWXCwPRpbrAIhALI%2FFiAm5VNWWwBmkgy8VKOEeGcTK9aOPOdtUgLNxQRCKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoGp4jGBeBIEH3Fh0q3AO6AUJWVhRy3uDSgHuNKZyQpRrvhWfpwCl867APIIFqvIhAbKlxS4%2FnY%2BgXSF%2FObP8107k1UM1kegcyxWXs1T2GdxAYNlalpFTcuJmV1mltuW7GSM%2FHlUbeMdbteZx0POvreXNty6RVRBWpLpfPWinfntGT0XOTRRWYAkSMyINtCwZtSP0cadH0JnWOPCDmzfhrwciuN%2BA4Dk8AlhGVd01g3MMAEPoYUMSiALhHXdpz7RuHg2Zr7PaNGOwCHV1rIf8nS%2FoXtx4eyas8y2r8wjm8SLOge326pEvQQ2ShAI%2FpL7T7ngR79Q6s9Oikai5SUFOQ6gLUOniHeVm4XGxRPBUU5BNcxDhtrw6MVGS2XGKslt20Omu7ldqlKfxxWZVM5OV%2BAlndiB8K7SfJhOk1Mk55cuLyXY8BineAk8cj4rVhdS3OpzTAVX6hHCTARLZh5Mwwi69YVAaoPS8PU5WP0ZX3xW4lGlFIMBWbLs67UfpKKgW7FRshHPtOgyw6a%2Bgdp%2FVDGSPBuzqDKNOPllo3SGANvNaodfrp08%2FAqNg6Top0bbsgDc1%2F1FpD0j%2B%2FJuk46Tlioa8fAsg1iN3h%2FwjNoVE0QPVa57%2FHn9kW4YtINg4a23r1UXQvr597mNShyzCHsaLEBjqkASPESSQic0On7MSXLizscjurAyaIWtve1y7MhypaVRSj%2BTuywEY3c%2B7Ahuzm7B9POSL%2BA4Ey7OtFhzquvKtEVMv7l6IRd%2F0ML9cGk5vfOn1J%2FdFzoZiFcadzqW79doCWs3UrClWs4MIGkqgiTscFNmrLAokzsJ8Vv9huNWGBKNW1zl4oMwIlqtwnxHeheIo8QDh0CxeMKOP38MoC98I%2FC12WTLl3&X-Amz-Signature=d90f594bf91debb5612c58fc276e4597081f4239b3d90bb5203d5d36214eddd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
