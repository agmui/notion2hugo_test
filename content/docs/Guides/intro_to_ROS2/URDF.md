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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USHJNGBB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3P5QLbzY0yjDzOxlNUzy2cw3Ofph9AcnldSNLetHhQAIgMQP9XYWoIvk7RqS9zlydos9y0TEeDINYkRanNVtdu7YqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISYd64UTN5Q78%2B7vSrcA2qRdfmzQLqEtJ1W%2B%2FRLVS0A23G5HhekSYh%2Bihv4y1r1mW7NS%2BcjBgRhU8pMCpGyrlVzjZcuQxj5x8e1%2BWl0QssrZ6bR7t0Z7VyGhahUNyuTG6rmpoQJcTww8Kp5eUzvTsbt0oPH%2Bb4ckhq7cTxBxFpYj2cNpQZYS1AVI0ccbjgJW0V5%2BdK0%2Fer3tmBow2GPqP4g%2BigvRKQOVRSiQIA4K8%2FTAeFSH8AgQ26oWonCDrBp5FqLiQS6Xfax4VUg%2B%2FIjnx1QGKYAQ9KykeH63MjAReHXH2D5U%2BoW%2Fi4Xq%2B91XBDozjz6wRIFAd7%2BcHVfUMg681og%2BThL09PTm%2B1gyAMvBmzVNHD7psIgl%2FE4f%2Bw0g36NOKmraHnKdxI5jwnex4UKRBzrS01Hn%2BypqBIUMfGzyCoUx0a6NR5eSIpfWNSIq44VV2q8aGB5NQULJbXilueKAdXGBRvDihzbEWEDgqwOq5CLVpjICCljOlfSCdJrWQvCcQAgpq5ygBPazBJE6pSFTv047Iw1oV08tI6nMt8blHxE28VJr2vGx14uR1E%2B6qXa7eJvm39NBnmR7CN2jqY6LrgJFgx8NrX3ZW0f%2FUuB9IQarkpLTIaYxI9NbXrgS3bMTl9h6R8R0RDZ40aiMJflosIGOqUBYqx%2BlCVISxJ7Zw59I%2FX3ZX7AeV0ytjK8lV43R8nXYsNWAkbcyyBPzJL8bRCVPfxsuOp2AXeb3DxZtTqdRDvBB2tH84MGuXiFl6GW%2Fw1D2CIuVsdTsOtuuNj3ZwXKkjY0wCeIWO0D4fzp498XZ2vmtL12nDjzSUHqJzGaoOmsaYTrs%2FFrHb7l2J5cNUgIXwNy%2BWdqPhBGVdbUU5hXF5GOZA9AZPb3&X-Amz-Signature=8af2448c92fbc299259daf33f523f4b6ee72bf6111754e12f29383596f7da94a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USHJNGBB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3P5QLbzY0yjDzOxlNUzy2cw3Ofph9AcnldSNLetHhQAIgMQP9XYWoIvk7RqS9zlydos9y0TEeDINYkRanNVtdu7YqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISYd64UTN5Q78%2B7vSrcA2qRdfmzQLqEtJ1W%2B%2FRLVS0A23G5HhekSYh%2Bihv4y1r1mW7NS%2BcjBgRhU8pMCpGyrlVzjZcuQxj5x8e1%2BWl0QssrZ6bR7t0Z7VyGhahUNyuTG6rmpoQJcTww8Kp5eUzvTsbt0oPH%2Bb4ckhq7cTxBxFpYj2cNpQZYS1AVI0ccbjgJW0V5%2BdK0%2Fer3tmBow2GPqP4g%2BigvRKQOVRSiQIA4K8%2FTAeFSH8AgQ26oWonCDrBp5FqLiQS6Xfax4VUg%2B%2FIjnx1QGKYAQ9KykeH63MjAReHXH2D5U%2BoW%2Fi4Xq%2B91XBDozjz6wRIFAd7%2BcHVfUMg681og%2BThL09PTm%2B1gyAMvBmzVNHD7psIgl%2FE4f%2Bw0g36NOKmraHnKdxI5jwnex4UKRBzrS01Hn%2BypqBIUMfGzyCoUx0a6NR5eSIpfWNSIq44VV2q8aGB5NQULJbXilueKAdXGBRvDihzbEWEDgqwOq5CLVpjICCljOlfSCdJrWQvCcQAgpq5ygBPazBJE6pSFTv047Iw1oV08tI6nMt8blHxE28VJr2vGx14uR1E%2B6qXa7eJvm39NBnmR7CN2jqY6LrgJFgx8NrX3ZW0f%2FUuB9IQarkpLTIaYxI9NbXrgS3bMTl9h6R8R0RDZ40aiMJflosIGOqUBYqx%2BlCVISxJ7Zw59I%2FX3ZX7AeV0ytjK8lV43R8nXYsNWAkbcyyBPzJL8bRCVPfxsuOp2AXeb3DxZtTqdRDvBB2tH84MGuXiFl6GW%2Fw1D2CIuVsdTsOtuuNj3ZwXKkjY0wCeIWO0D4fzp498XZ2vmtL12nDjzSUHqJzGaoOmsaYTrs%2FFrHb7l2J5cNUgIXwNy%2BWdqPhBGVdbUU5hXF5GOZA9AZPb3&X-Amz-Signature=b882a6657fa653cac05a7d9cf863101d43e7604fc762c8572f72252a87e2893d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
