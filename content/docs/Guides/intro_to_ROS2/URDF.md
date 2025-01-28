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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667624NVCC%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIAahcGNtxtSr00ju4rp6n1DI1%2Fx1dqXM5DCPswQxeGMcAiA3Oe0jtRQ5c%2FDj%2F%2BSHzVivTlmVD9qMOf1MaaTLT2QiKir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMH%2BLYrMDLmKlFXHRgKtwDMGunBngsuF%2Fi9bbOE6wquCcT2i79LZR2Sm1dIDa8mXIbSvYgQu0Lj5Yw2MP3aPPj%2BlxfEVtNXJmuSpLJ62W2bTFH7Ur1XPJNg5jnvp%2FU%2BcSxowZe7cf7XvAQtbH0HctwZxbDtccrWyoZDB2XEbufLzeu%2BXlgullRrSqPdkcwkzKSpAAuQFPuFbAyEJk%2BIWifQHfFP7qfoHAGIzsfx93mZBU4jjpBBZdw7xm5a8E9SffW7LxOy9SohdbZtWXa%2FDAQEXIXY7gKXHAdIL%2Fgc%2B9%2BJ%2BEO5llLvup4zxJ8fJcUo5vGtSTOq2i3m7sFb4G4mdeNj5Hk7rEHg5H9VD7vw94WsztbuBGMN2F8Lf%2FLgYVcMFxlJDhAnSSbwCw%2FdFNszR%2Bdzselq89YLOKR5mvxWmsTVJq4cy77VPy%2FqAhnUXHmxLVbDDoP9Lat1jSwIsu4O1CmIAB6%2FdO1iFAUwJzMmySTVaddmY3vmnWT5Sv31DGAq%2BKfMBCKMlPPGPCiy%2BT7WvxOYbSPrCeYjmvtkKQuXkyoNJ09krO8DbIyIYI5RrdRjjzMm%2BuAa1i7nMt%2BAhe5eN7SpiYPjjNKXXpo1kcuMyjl5CUTMiKEW4jAHJHchkdJBUl215VOl1GAuxHVQG4w1rHlvAY6pgHG06EU1jjfZUi6dZu5W81wg%2BuLSw6b4p0oLwMjCLf4w3KY52OjzeXt%2BhhjixWzyHSWg3uUH9A69krFChOw1UgXREDrOQ5HhxsEb4I5bbUzC4o%2BNxnZDKvtilF2nr5hVLOVwVGcr7jOP1nBqgITXbM9%2BQaI7tcs0zTnpcsrrD6Qc1ITi%2FdlwRr95zgFPYKWfZupcKp98ytQSccmMWFfAZnTfNnjjSw8&X-Amz-Signature=87edebc4ec3f819ce24fdf5e989693a88e45f3f0edd34fbab4a7f73bcc3beea0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667624NVCC%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIAahcGNtxtSr00ju4rp6n1DI1%2Fx1dqXM5DCPswQxeGMcAiA3Oe0jtRQ5c%2FDj%2F%2BSHzVivTlmVD9qMOf1MaaTLT2QiKir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMH%2BLYrMDLmKlFXHRgKtwDMGunBngsuF%2Fi9bbOE6wquCcT2i79LZR2Sm1dIDa8mXIbSvYgQu0Lj5Yw2MP3aPPj%2BlxfEVtNXJmuSpLJ62W2bTFH7Ur1XPJNg5jnvp%2FU%2BcSxowZe7cf7XvAQtbH0HctwZxbDtccrWyoZDB2XEbufLzeu%2BXlgullRrSqPdkcwkzKSpAAuQFPuFbAyEJk%2BIWifQHfFP7qfoHAGIzsfx93mZBU4jjpBBZdw7xm5a8E9SffW7LxOy9SohdbZtWXa%2FDAQEXIXY7gKXHAdIL%2Fgc%2B9%2BJ%2BEO5llLvup4zxJ8fJcUo5vGtSTOq2i3m7sFb4G4mdeNj5Hk7rEHg5H9VD7vw94WsztbuBGMN2F8Lf%2FLgYVcMFxlJDhAnSSbwCw%2FdFNszR%2Bdzselq89YLOKR5mvxWmsTVJq4cy77VPy%2FqAhnUXHmxLVbDDoP9Lat1jSwIsu4O1CmIAB6%2FdO1iFAUwJzMmySTVaddmY3vmnWT5Sv31DGAq%2BKfMBCKMlPPGPCiy%2BT7WvxOYbSPrCeYjmvtkKQuXkyoNJ09krO8DbIyIYI5RrdRjjzMm%2BuAa1i7nMt%2BAhe5eN7SpiYPjjNKXXpo1kcuMyjl5CUTMiKEW4jAHJHchkdJBUl215VOl1GAuxHVQG4w1rHlvAY6pgHG06EU1jjfZUi6dZu5W81wg%2BuLSw6b4p0oLwMjCLf4w3KY52OjzeXt%2BhhjixWzyHSWg3uUH9A69krFChOw1UgXREDrOQ5HhxsEb4I5bbUzC4o%2BNxnZDKvtilF2nr5hVLOVwVGcr7jOP1nBqgITXbM9%2BQaI7tcs0zTnpcsrrD6Qc1ITi%2FdlwRr95zgFPYKWfZupcKp98ytQSccmMWFfAZnTfNnjjSw8&X-Amz-Signature=111bec8bde0382625c4e255a8ebff01724a278d768878c3febda03a731612f48&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
