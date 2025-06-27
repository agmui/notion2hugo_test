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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHEL2YV4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIH7YYFvguE5HsecUGClptNpZ8VgFcTtrbSh8floPiQksAiBvj%2F7WC8c5AtAc95f2wmPFc8%2Bj%2BWyr9pEkdB0J9%2BpS0Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMbqZQBmOGC2F8%2FeuxKtwDGZxPTO5fUkBDFw63LL%2BfXDeOTM5P3DkxYDECb2FCLmfYJOU7XFywvfRl2zwGn9YY7wlWCU7mCDScbYBYxLBZ2mp%2FKRGBGCIy7MXD1CTbKlplzOmmtHxLFKcmgcMMGzUxCCotljAnljFAN0%2BkuEFEBPQHkGgeN9wAr5TviG08htX63reWoCPM3YB7XdsbqDAPgJ26EZaZAHsMRTOf%2Bp2JPjPJ6Sv9xFcyE3lyKEOkezmmLECQSTFgNvzosZUhH6af0qwyzc7FmsICUbyJW9TSFp9Yk8MCNmEBlafIR%2BQm%2BmqyRqBMABPF2gT2hep0f9R65%2BV28vTnuLflLqw62Cv5gphBAm9gZBD72ypExZmnT47OyBTy4Bg9iu6vRLgUwV8lKUjmTW9gmIH2FKaHblJP9oeQB3TMVzbhlkJiYA7ICbsVvGTmHctdiJJLU5N9%2Bu6wGMH6k%2BhKzrMBIAQu3ow3i057Yw2BO8dxRS%2BJslkub6h00RtyH63Tm8lO7guNEXLfZi9lWh9FIzmVsUOdRQFDhSDGg%2FxD%2Bn%2Fc0rabuMKe%2F0321X7y153gpnuQtqeaw5b7b0xSVOtvb8F9FI9Do5EdRA065LvizfQUKs2XOfMSN3rJcRjUPECgkQSeYCYw1Mn4wgY6pgHaJOLmWKg4ytlKFHSGzZdDzGb7CUG95Ii7MP8Z4Lf6c8dYckKPNdSMIF%2BtK3QIufWohZkpUmc9xMRCxLF%2FDgmp4gxrnjovwto1xVLQaUxYBk6T2CKoAhfu6OID9M5%2BLCKkvAS2j58glcnVMQfr2QeWd5JNw1vEb3RU242HkuPc5WU7%2BFu60A7Nmt1EtJ806JDFbc3welE7zFJEIY%2FtX6WETKuyKk2e&X-Amz-Signature=e596024c93b69ebe8cdeff00c9ed872bd8bef1259049857d1043b1b3c5bcc675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHEL2YV4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIH7YYFvguE5HsecUGClptNpZ8VgFcTtrbSh8floPiQksAiBvj%2F7WC8c5AtAc95f2wmPFc8%2Bj%2BWyr9pEkdB0J9%2BpS0Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMbqZQBmOGC2F8%2FeuxKtwDGZxPTO5fUkBDFw63LL%2BfXDeOTM5P3DkxYDECb2FCLmfYJOU7XFywvfRl2zwGn9YY7wlWCU7mCDScbYBYxLBZ2mp%2FKRGBGCIy7MXD1CTbKlplzOmmtHxLFKcmgcMMGzUxCCotljAnljFAN0%2BkuEFEBPQHkGgeN9wAr5TviG08htX63reWoCPM3YB7XdsbqDAPgJ26EZaZAHsMRTOf%2Bp2JPjPJ6Sv9xFcyE3lyKEOkezmmLECQSTFgNvzosZUhH6af0qwyzc7FmsICUbyJW9TSFp9Yk8MCNmEBlafIR%2BQm%2BmqyRqBMABPF2gT2hep0f9R65%2BV28vTnuLflLqw62Cv5gphBAm9gZBD72ypExZmnT47OyBTy4Bg9iu6vRLgUwV8lKUjmTW9gmIH2FKaHblJP9oeQB3TMVzbhlkJiYA7ICbsVvGTmHctdiJJLU5N9%2Bu6wGMH6k%2BhKzrMBIAQu3ow3i057Yw2BO8dxRS%2BJslkub6h00RtyH63Tm8lO7guNEXLfZi9lWh9FIzmVsUOdRQFDhSDGg%2FxD%2Bn%2Fc0rabuMKe%2F0321X7y153gpnuQtqeaw5b7b0xSVOtvb8F9FI9Do5EdRA065LvizfQUKs2XOfMSN3rJcRjUPECgkQSeYCYw1Mn4wgY6pgHaJOLmWKg4ytlKFHSGzZdDzGb7CUG95Ii7MP8Z4Lf6c8dYckKPNdSMIF%2BtK3QIufWohZkpUmc9xMRCxLF%2FDgmp4gxrnjovwto1xVLQaUxYBk6T2CKoAhfu6OID9M5%2BLCKkvAS2j58glcnVMQfr2QeWd5JNw1vEb3RU242HkuPc5WU7%2BFu60A7Nmt1EtJ806JDFbc3welE7zFJEIY%2FtX6WETKuyKk2e&X-Amz-Signature=15e7de73679a79133e8044fdc8ef0b2323febb0886ac50fe869a59805cdcc786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
