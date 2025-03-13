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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSIJ5Q32%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTT06Y%2BhcNyswhRBftpOldLzYZLULGn14LFdjWeKhZeQIgJNYL7k4ah%2FAZ9WygjGgUUIdqPpNOpdM5eTeCZw%2B7a9EqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeyXq7KHUhrIJ87eircA2HCz0rCDUidwAH93ikHDoWuGgBDm8Lik22WszU0mBbAVIqjWxcF0nf1%2FOrNGpjOYnuFPxZfDOYQu9KvVhSp%2B%2FieRSVN6qsOqINnzPUlkA9Lx6%2FA8XagNtlrsGVwMoYy1QxN3uB7Z413TTOXSnv986Dhk8UjJbcQ6dM3jocj%2Bq8O6egSxCmDig1aeKFmlLmzEr0urKi3L7suSpUM4eFcQZ2bbHZaiu2Fyip5nZLwVL84PIo%2FtUYKEukGq2L9kZZagUE4RMycnewvEqPg%2BjmJX0k6xwP%2BtehMgUC3%2F71QiR%2FsKIminH98CcJb8Ys8gsNNGWxZWbhwNcto%2FQe%2F52XAFkclzDY%2FLbbfijQu8DGG%2FmglPljUwnX6nfU95%2Bqf09HlxvU8qhD38GnkEAbsaQoX%2F0qOZbs%2Bwo1MFHlFSmaZeqgDDi0x5d7KJCzcDTm3ohtVARzbn0YZ6eX3jO80ApRBwxavQATbSp%2BI2GTBTwpY31eBn1ouTVs1afIkcbLdvXOibVT%2BKO122qbkI5%2FdEOTgrr5rx65wTkxklXHVeBwTpyJYPMGB7rvpE374%2FefrZWMHRa480UwSXe7nKU44dcffakTHZVEDXo7m4AuNUdCWuQuC3GDbFrR1d2heXM4dMM2cy74GOqUBOiZxTq%2BFE9XScsd25vw%2FPLcFjjYAgQyhTcvn%2Bt2eBfGeiQbIcOazf%2FgFlIrz%2BsEc5v6NGWWkA1KRJYtGmFA%2FNv3OBG2oZ75hKi%2BHofoVroj1969aWYqaeKownmCdpcmU3gAlMwPEw7npIBZXAveF6GCdo78Tok3kuxaIFZE1onv4dB8nTUXY%2B9AEbSBKX9IaaUFiMc64uOA81IHrML9a4tfHgb%2FY&X-Amz-Signature=99595e0d72e4485bd8697b94e6541cca242411a13240b6a30e8f93fad5da13be&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSIJ5Q32%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTT06Y%2BhcNyswhRBftpOldLzYZLULGn14LFdjWeKhZeQIgJNYL7k4ah%2FAZ9WygjGgUUIdqPpNOpdM5eTeCZw%2B7a9EqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeyXq7KHUhrIJ87eircA2HCz0rCDUidwAH93ikHDoWuGgBDm8Lik22WszU0mBbAVIqjWxcF0nf1%2FOrNGpjOYnuFPxZfDOYQu9KvVhSp%2B%2FieRSVN6qsOqINnzPUlkA9Lx6%2FA8XagNtlrsGVwMoYy1QxN3uB7Z413TTOXSnv986Dhk8UjJbcQ6dM3jocj%2Bq8O6egSxCmDig1aeKFmlLmzEr0urKi3L7suSpUM4eFcQZ2bbHZaiu2Fyip5nZLwVL84PIo%2FtUYKEukGq2L9kZZagUE4RMycnewvEqPg%2BjmJX0k6xwP%2BtehMgUC3%2F71QiR%2FsKIminH98CcJb8Ys8gsNNGWxZWbhwNcto%2FQe%2F52XAFkclzDY%2FLbbfijQu8DGG%2FmglPljUwnX6nfU95%2Bqf09HlxvU8qhD38GnkEAbsaQoX%2F0qOZbs%2Bwo1MFHlFSmaZeqgDDi0x5d7KJCzcDTm3ohtVARzbn0YZ6eX3jO80ApRBwxavQATbSp%2BI2GTBTwpY31eBn1ouTVs1afIkcbLdvXOibVT%2BKO122qbkI5%2FdEOTgrr5rx65wTkxklXHVeBwTpyJYPMGB7rvpE374%2FefrZWMHRa480UwSXe7nKU44dcffakTHZVEDXo7m4AuNUdCWuQuC3GDbFrR1d2heXM4dMM2cy74GOqUBOiZxTq%2BFE9XScsd25vw%2FPLcFjjYAgQyhTcvn%2Bt2eBfGeiQbIcOazf%2FgFlIrz%2BsEc5v6NGWWkA1KRJYtGmFA%2FNv3OBG2oZ75hKi%2BHofoVroj1969aWYqaeKownmCdpcmU3gAlMwPEw7npIBZXAveF6GCdo78Tok3kuxaIFZE1onv4dB8nTUXY%2B9AEbSBKX9IaaUFiMc64uOA81IHrML9a4tfHgb%2FY&X-Amz-Signature=26e8ee338f7bacec4cbbe1527a0a0080f3325e4f9dbc61fcebc8a501040e3ae7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
