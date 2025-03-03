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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNWYY36A%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMkno3zAtL4w1iA2iqC8q%2FQRih3EcxQl%2ByXzPulgF2iwIgIMhebkigGm9aH95BvajM6KqfcLnJSLTjcya59DwdpPMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQLfSJF1YpIeNKpySrcA59DcrfH%2Bl16mntRGjhB0o5W6%2Fl12k2aiP2%2FS9oLjI9Kr8dblajSYlOyHPvMPVg3FODYkRm2TKQ1g9CvxywPgnxdJHTRiQwRgc3yZtAVPrmVcGMLMxHS4wHnaTxW1mAVdc4UG4Eh9for6pbOQbmWiZcXp27TUFdSGgRLIc8I8mOsW0B4oMac2EExd5YdEwNO0pA6Nt0uhn1KMkIlNkDRkWSbYwIYO5cwGC6B1MFcdgaiuPZ0xqBTX045f2IvHcsk10KHI4z1N9jMIPXieLj9D5DZobngMslaLttl2w2%2BoOZ0IxtZePjIcU84Epn%2F%2BzIYTZp3Idv2oLsqsoWyGgh3PPoU77gZkghbziCBUCt75e3y7S8HVOcBcjhglSJdwWd7PZExAd%2FUIZ5BqFu3mdr9WJTDs%2FLGbQchYfqFe0BVhhMcZ%2FxxPoVFYwExcwWiX0nUDnep9bv0a%2F82hEkFPiYBwMdz4bKHVJya51CYEEbVktYjEsjBx6%2Bm0WaDvxRyaLCLaIGc0hCcb2XnqjPEW92BUpSXDcek7sZMgxTil%2B03jhmZp0DfQnrmMGd24%2Ft9S%2BOI0pMLR%2BoIicH588HU%2FWD%2BdEIYBPpJQjcMciGxaNgO2hS%2F1%2FWzgkkl8UXaquPgMKa8l74GOqUBDPejq3HKUOYrkKM7xE9%2FreegQsSKCg%2FPR5Vzfp34uyxwI8oqVI%2BKWUBlYz2E8pgGgW%2FRv9w80AcwOT6cxd8sZGeHKmDHj%2BC07tNNiVr6iPQxIpdRTv3%2BmmsQJjSNNkalSz7a1xHkjrc9UfjXQ3OFrK2NpoSrtWEulNOllirlxfguhXo7i%2Bl7Cj4OqTxx8FvR0Ifkx1JgcltT6TFiChF%2Ft6GUN8DW&X-Amz-Signature=880d4ebbc14da7c0b3653e4428e912b38bd9bf79cf452787d0f41bc69abaf05a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNWYY36A%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMkno3zAtL4w1iA2iqC8q%2FQRih3EcxQl%2ByXzPulgF2iwIgIMhebkigGm9aH95BvajM6KqfcLnJSLTjcya59DwdpPMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQLfSJF1YpIeNKpySrcA59DcrfH%2Bl16mntRGjhB0o5W6%2Fl12k2aiP2%2FS9oLjI9Kr8dblajSYlOyHPvMPVg3FODYkRm2TKQ1g9CvxywPgnxdJHTRiQwRgc3yZtAVPrmVcGMLMxHS4wHnaTxW1mAVdc4UG4Eh9for6pbOQbmWiZcXp27TUFdSGgRLIc8I8mOsW0B4oMac2EExd5YdEwNO0pA6Nt0uhn1KMkIlNkDRkWSbYwIYO5cwGC6B1MFcdgaiuPZ0xqBTX045f2IvHcsk10KHI4z1N9jMIPXieLj9D5DZobngMslaLttl2w2%2BoOZ0IxtZePjIcU84Epn%2F%2BzIYTZp3Idv2oLsqsoWyGgh3PPoU77gZkghbziCBUCt75e3y7S8HVOcBcjhglSJdwWd7PZExAd%2FUIZ5BqFu3mdr9WJTDs%2FLGbQchYfqFe0BVhhMcZ%2FxxPoVFYwExcwWiX0nUDnep9bv0a%2F82hEkFPiYBwMdz4bKHVJya51CYEEbVktYjEsjBx6%2Bm0WaDvxRyaLCLaIGc0hCcb2XnqjPEW92BUpSXDcek7sZMgxTil%2B03jhmZp0DfQnrmMGd24%2Ft9S%2BOI0pMLR%2BoIicH588HU%2FWD%2BdEIYBPpJQjcMciGxaNgO2hS%2F1%2FWzgkkl8UXaquPgMKa8l74GOqUBDPejq3HKUOYrkKM7xE9%2FreegQsSKCg%2FPR5Vzfp34uyxwI8oqVI%2BKWUBlYz2E8pgGgW%2FRv9w80AcwOT6cxd8sZGeHKmDHj%2BC07tNNiVr6iPQxIpdRTv3%2BmmsQJjSNNkalSz7a1xHkjrc9UfjXQ3OFrK2NpoSrtWEulNOllirlxfguhXo7i%2Bl7Cj4OqTxx8FvR0Ifkx1JgcltT6TFiChF%2Ft6GUN8DW&X-Amz-Signature=f8907143ec2f4ab615c57e44e5ba43ed373ee61268e662edf1b4ee8077721db5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
