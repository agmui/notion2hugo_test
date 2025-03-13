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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T54QYP7%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG41ORuPqi%2F9PJHtmdgrdEMb0NACHTzqEAy9DgGB66XNAiEAxW4b76uVSWBmq%2By02yMDGe3jtzC4YJlXBD4prvcZrQ0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPi7qmJZFXf%2FOnCdWCrcAxvGU7Qe7AoR2YJC49CtOrTiAlEaCOUDPxDpgBZxhAOKpIMxdy%2FWLzukY63iLVFeOL1JLxBMEjonzaMf0U9Y5GkcLxNtztc%2FpBHEkEvkS4oZ1aFip0NcllBIceCt0jLvtcw3SvdDgNUxCTwFZTkA3Lc371%2B1b2cMP4EMG7FXXcID0SMTlA97czfD%2BXg%2BS%2Blrb6V7re1SFCP0Eb5d8AQyQSX45P30cSMT4OMAjqqVV17s4rnF2A1qTbu15GSmhd8ML85TE07kdAkPgZJIHSfbRHmG0n1b5y%2FpzS8uGSc1sQWGoOF%2BQhtKF7OYcxAhDQH3ccyWZ8b%2BAXTlNpmR%2Flff4xaR6Gq7XiYhCVDvRNNsmFCFq5ajaoeMD9lTVQ%2B10xhENunnGOPmJ1qm70jQKiE%2BGGOsD%2F8jEkbJ9wNXgiaEBC%2F167D%2BcXoqAhEugF4TZZrVtCCcJx0rpGvYaxvFwZpDZvU6ZK6PlHT6tSuR3z4vUnwcbFGRZhdxqXBlnF8fwEipyI3av8E0GzbXN8RSEITIeJxqp8l549xy%2BRT9Mkwv6MnVS67GYLDkEXNgRAKreuI1y8G%2B6bJKLrAjnYgd9rWVOnKVoPaErf9NbPn9eqFN5VHHrfBflFByNEWk%2BMuHMOfLy74GOqUBzOgdcU96HaiE4Q3KPlVZxjS1l1o8vD4Q40sVDKy6%2BQ7sXjUcKY1bfCgCe%2B6552C%2BBzJ0gbP0IYE2TVsQNIdutovqTp4IVmDA8FFkpvSReWj1%2FNcXD4r2hku6C4IOBDFItNrbNI%2FzDFppF1g6dezWW24cEai9TN%2FfBaX%2B1J99WnSdxFZYlsUO2P9G8kmG6RD1hHp0QqPtSI0%2B6gKN2T%2FC%2BXd2mJGe&X-Amz-Signature=3a3782b16fcd48e77f5421ef98b95096b4a31763bb7acd7e0dfbd6c230e22917&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T54QYP7%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG41ORuPqi%2F9PJHtmdgrdEMb0NACHTzqEAy9DgGB66XNAiEAxW4b76uVSWBmq%2By02yMDGe3jtzC4YJlXBD4prvcZrQ0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPi7qmJZFXf%2FOnCdWCrcAxvGU7Qe7AoR2YJC49CtOrTiAlEaCOUDPxDpgBZxhAOKpIMxdy%2FWLzukY63iLVFeOL1JLxBMEjonzaMf0U9Y5GkcLxNtztc%2FpBHEkEvkS4oZ1aFip0NcllBIceCt0jLvtcw3SvdDgNUxCTwFZTkA3Lc371%2B1b2cMP4EMG7FXXcID0SMTlA97czfD%2BXg%2BS%2Blrb6V7re1SFCP0Eb5d8AQyQSX45P30cSMT4OMAjqqVV17s4rnF2A1qTbu15GSmhd8ML85TE07kdAkPgZJIHSfbRHmG0n1b5y%2FpzS8uGSc1sQWGoOF%2BQhtKF7OYcxAhDQH3ccyWZ8b%2BAXTlNpmR%2Flff4xaR6Gq7XiYhCVDvRNNsmFCFq5ajaoeMD9lTVQ%2B10xhENunnGOPmJ1qm70jQKiE%2BGGOsD%2F8jEkbJ9wNXgiaEBC%2F167D%2BcXoqAhEugF4TZZrVtCCcJx0rpGvYaxvFwZpDZvU6ZK6PlHT6tSuR3z4vUnwcbFGRZhdxqXBlnF8fwEipyI3av8E0GzbXN8RSEITIeJxqp8l549xy%2BRT9Mkwv6MnVS67GYLDkEXNgRAKreuI1y8G%2B6bJKLrAjnYgd9rWVOnKVoPaErf9NbPn9eqFN5VHHrfBflFByNEWk%2BMuHMOfLy74GOqUBzOgdcU96HaiE4Q3KPlVZxjS1l1o8vD4Q40sVDKy6%2BQ7sXjUcKY1bfCgCe%2B6552C%2BBzJ0gbP0IYE2TVsQNIdutovqTp4IVmDA8FFkpvSReWj1%2FNcXD4r2hku6C4IOBDFItNrbNI%2FzDFppF1g6dezWW24cEai9TN%2FfBaX%2B1J99WnSdxFZYlsUO2P9G8kmG6RD1hHp0QqPtSI0%2B6gKN2T%2FC%2BXd2mJGe&X-Amz-Signature=24ccc0ed80c02c10b7a7649ce9968ffd826805ce7f1044ad6190bd9a45d9c89a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
