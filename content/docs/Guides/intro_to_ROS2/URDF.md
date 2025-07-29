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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5VLVVDT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFHG%2FqqK9X%2BKIzC8YN0%2Fo1nZbthX%2BHzO1GvInA1EbF6RAiEA2kccI3R9WA9PKYgV54XwVUV9iQ2tUJZd%2BULBhDyBZDsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO07naIR%2FFDcwpvncCrcA66bdKqXGkY1K8gvuPN0xcm244kLP9Tn2LIJMC2zkuiT0nRr%2Fy3aWU3BTBRjKMR0Ix%2Faz8lAg4r%2FBukW72a%2BBEPjB8QzLZVrbx06bzo9RlYlsF5F3UW5FKI8aiYLSIQS1OWinq1O%2FGykmp0Lola%2F7%2BsLXzVm5qFUyeU3ruOygj4UfzsLDoKTyL4JMXLRriWyThB%2FyPkYxKCx6niyUuyxJiA7ji7Ww5BRB7HR3QZ1kHdLmqBWxrSU7LvZIrP%2FrYgL7rAGmYw%2FWuDEQGZIdX%2FMta6rnEMTTbMk3wzK2ripM9C7z1zqNkd%2Bk%2BMujd8Vubv%2Fu6L%2BhuULz2icU1Z%2BLgsGyukmJh9O3uBqifjaF%2FZVLgxi2%2FoyLteaxm1pomndOdieYocd%2Fcsx4mLiuYPVF70AcZw8wiARRE8Sr7p49k3O8zjgh4F4%2FsyctJPW1%2FPRV6h%2BPVjd6lhoeup0TSEQ366FJ%2FC5SdJDgDYFf6eQPVDcjOFip1Iy37NImjnW0i4wDJccz3uhXxEDuCtEFTpmHRbSaUVO8a9DM%2F2w1qBuXIFL7rn5qqyNcG9lwlwCVZY6QNIfUYPxsDGK%2BoBLVHJWz0KKyX9N6e3dYgZjsyACInWTQXhFiqAdwRUDwE12MAP0MMuYo8QGOqUBMpLg3sCtRxdW61JbIeR%2FjevnBGZ%2FPwuvsFitybzL8H8z2OBhrI5P%2Bd%2Bq3JaNvc5lFdJyH3VAEIAxChVF8BSbN%2BkFTjWuXpthu6SsywxAUQTU7ph9lIH%2BrkS24fMnopzCrwo%2FakXHUbjjQVLmaSQhtP7mmTXC%2BY6QGc%2Fp1PnM2jGvgRzPzm8JXAJEBR3fhbUA8urvFiaML59VwSoJu2zAbPBKgznT&X-Amz-Signature=85a3f1d89e7da71a842ec76b5956e740c74610edde7e549c3546649a5da7d22a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5VLVVDT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFHG%2FqqK9X%2BKIzC8YN0%2Fo1nZbthX%2BHzO1GvInA1EbF6RAiEA2kccI3R9WA9PKYgV54XwVUV9iQ2tUJZd%2BULBhDyBZDsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO07naIR%2FFDcwpvncCrcA66bdKqXGkY1K8gvuPN0xcm244kLP9Tn2LIJMC2zkuiT0nRr%2Fy3aWU3BTBRjKMR0Ix%2Faz8lAg4r%2FBukW72a%2BBEPjB8QzLZVrbx06bzo9RlYlsF5F3UW5FKI8aiYLSIQS1OWinq1O%2FGykmp0Lola%2F7%2BsLXzVm5qFUyeU3ruOygj4UfzsLDoKTyL4JMXLRriWyThB%2FyPkYxKCx6niyUuyxJiA7ji7Ww5BRB7HR3QZ1kHdLmqBWxrSU7LvZIrP%2FrYgL7rAGmYw%2FWuDEQGZIdX%2FMta6rnEMTTbMk3wzK2ripM9C7z1zqNkd%2Bk%2BMujd8Vubv%2Fu6L%2BhuULz2icU1Z%2BLgsGyukmJh9O3uBqifjaF%2FZVLgxi2%2FoyLteaxm1pomndOdieYocd%2Fcsx4mLiuYPVF70AcZw8wiARRE8Sr7p49k3O8zjgh4F4%2FsyctJPW1%2FPRV6h%2BPVjd6lhoeup0TSEQ366FJ%2FC5SdJDgDYFf6eQPVDcjOFip1Iy37NImjnW0i4wDJccz3uhXxEDuCtEFTpmHRbSaUVO8a9DM%2F2w1qBuXIFL7rn5qqyNcG9lwlwCVZY6QNIfUYPxsDGK%2BoBLVHJWz0KKyX9N6e3dYgZjsyACInWTQXhFiqAdwRUDwE12MAP0MMuYo8QGOqUBMpLg3sCtRxdW61JbIeR%2FjevnBGZ%2FPwuvsFitybzL8H8z2OBhrI5P%2Bd%2Bq3JaNvc5lFdJyH3VAEIAxChVF8BSbN%2BkFTjWuXpthu6SsywxAUQTU7ph9lIH%2BrkS24fMnopzCrwo%2FakXHUbjjQVLmaSQhtP7mmTXC%2BY6QGc%2Fp1PnM2jGvgRzPzm8JXAJEBR3fhbUA8urvFiaML59VwSoJu2zAbPBKgznT&X-Amz-Signature=437278e8a070493cefe23adb0bc11d2e8cdeaee5523f806e14f5c9d36ddba5e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
