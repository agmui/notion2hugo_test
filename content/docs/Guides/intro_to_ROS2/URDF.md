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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3XSWBLL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9iuOVcV1t14tmpqoU1cuViDvg%2FCv4b%2FbuQ9yHtUQtQIgOLl5zenjOXD9bCOJ3i4oGjIp3s4s4mR6HwZ4myaKQtYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMubK%2BBxU1XD%2F99%2BRircAz2z1fHfp71oTQRM2y07Wau%2FDJkJVAVaDAoM%2BMqW5nH%2FqQrgqQxYzmj9ZScFHg8h2TxO3OfbVim5UMirzbCHgkxb%2Fdpwk7Y1LCXtdN6s52tPQ%2Fz9rPu%2Bql1Oa6gh1ujAos9pkAaTqEIi5fHvMMs31u9xLx0K22uOvkuFROhMkJQmGsucupm%2B9L1oV%2BJGCX%2FiD5CZoBDGJaJ32B6aMzOlzVfyb7OcSwZaw0%2FUzo6Ny%2BSq3mXd%2BVgjgfwVyMinnsFAMOCHMxSwdVrI3hj1zE9BvJEAzGXyJ1Uc6dzYO0FlTrVwmykF4xbiOdwcBmEzhjY4qRSaOOrdKe%2BrlJwfNO307%2FCmMYJ5Zq7yoX1vhpaPxE2YZbqW08AuLzegVHZjgNINaWPlk4eHP9Bs0RvyDZY3bnFWqzSA40lcg0LYE3Vjdy3tj38ZKx4hT%2B%2BWloeoDtmKTIYbFkYwEI%2Fqvp2u33uCmsW9AcQeYkPaecNt0K4L%2BHGbpY6sqk4gY1DJta%2B7aVccGX9QJno6ph7FHXwjU7pxFou5%2FJ2B2GXdHfferMTMQ2Dy371BEdl84LdY431g%2FU1V7KCbRupfMziOiHOZtcu41sFTQ4fgUHs5F87IihD%2FBOLZpk6i7vMBvL0%2BDTNbMLyiqsQGOqUBLmcD1wwcFTXlr%2FEHPS4HjZhDTW4WHf8hMy0DDUtNaKSu2vzEt%2BfU2ntnFz4jrK2RpaAJXBKSpTTQjeJBMWAIBHcf%2FHLosoIxNbFcW%2BggvtAQhPWfsJqLsWIphWVzxWCZWepDdVK5CIMumtNDr3l8ZuOEL%2BcM7g3QSpgLAa9rmuWL6%2B8Xu47WLEFS0z5akugczh7Dy7%2FuIU6%2Fr%2BXf4nypO3gNPKBf&X-Amz-Signature=405efa6e5059a49e05b1f267d7a156f7ae4405142c481de23adb2738bcfe0616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3XSWBLL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9iuOVcV1t14tmpqoU1cuViDvg%2FCv4b%2FbuQ9yHtUQtQIgOLl5zenjOXD9bCOJ3i4oGjIp3s4s4mR6HwZ4myaKQtYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMubK%2BBxU1XD%2F99%2BRircAz2z1fHfp71oTQRM2y07Wau%2FDJkJVAVaDAoM%2BMqW5nH%2FqQrgqQxYzmj9ZScFHg8h2TxO3OfbVim5UMirzbCHgkxb%2Fdpwk7Y1LCXtdN6s52tPQ%2Fz9rPu%2Bql1Oa6gh1ujAos9pkAaTqEIi5fHvMMs31u9xLx0K22uOvkuFROhMkJQmGsucupm%2B9L1oV%2BJGCX%2FiD5CZoBDGJaJ32B6aMzOlzVfyb7OcSwZaw0%2FUzo6Ny%2BSq3mXd%2BVgjgfwVyMinnsFAMOCHMxSwdVrI3hj1zE9BvJEAzGXyJ1Uc6dzYO0FlTrVwmykF4xbiOdwcBmEzhjY4qRSaOOrdKe%2BrlJwfNO307%2FCmMYJ5Zq7yoX1vhpaPxE2YZbqW08AuLzegVHZjgNINaWPlk4eHP9Bs0RvyDZY3bnFWqzSA40lcg0LYE3Vjdy3tj38ZKx4hT%2B%2BWloeoDtmKTIYbFkYwEI%2Fqvp2u33uCmsW9AcQeYkPaecNt0K4L%2BHGbpY6sqk4gY1DJta%2B7aVccGX9QJno6ph7FHXwjU7pxFou5%2FJ2B2GXdHfferMTMQ2Dy371BEdl84LdY431g%2FU1V7KCbRupfMziOiHOZtcu41sFTQ4fgUHs5F87IihD%2FBOLZpk6i7vMBvL0%2BDTNbMLyiqsQGOqUBLmcD1wwcFTXlr%2FEHPS4HjZhDTW4WHf8hMy0DDUtNaKSu2vzEt%2BfU2ntnFz4jrK2RpaAJXBKSpTTQjeJBMWAIBHcf%2FHLosoIxNbFcW%2BggvtAQhPWfsJqLsWIphWVzxWCZWepDdVK5CIMumtNDr3l8ZuOEL%2BcM7g3QSpgLAa9rmuWL6%2B8Xu47WLEFS0z5akugczh7Dy7%2FuIU6%2Fr%2BXf4nypO3gNPKBf&X-Amz-Signature=df32ac218fd290b0d197f33ddb0d5e414bf0640cfee932f59440b1f5408e23b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
