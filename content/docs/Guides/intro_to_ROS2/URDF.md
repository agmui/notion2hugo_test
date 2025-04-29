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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VUVCSJ2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFU5ctYqYDs4HyWQOib%2BoESSbON6nH%2FwYToYKpP2MVjAAiA%2BLaD%2B%2FASQZ8IHU8CXCqyvqEpciboKiyDj38QXtTrFPiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUdHAdoaSFlZaj5HCKtwDp2GDEo3husuMgYWSKdb3lz8z%2FNWmo8kDU%2Ble%2BbDWntmq5KCqd4yMLu0%2FNRhUJpynbCkpB4vcjt1R1UjZexklXBHsyLZRb7zxbdxY%2Bgf%2FqaEf1HSN2J%2BFtAuEv2TOc%2BVBCujrGbECTr05ZkwagbGl%2B%2BqZv42NuS5%2Ff8YpmJzfF6czPPQ2bp%2B5bG1puUFASMnzvo5Lxfb8Pdi5jAXfw%2FucNwcGGO1yY3rC63bHWBQSaQZAtihrnzFjDbznFr5q8HYNkpEjt52QM3VVppIZVHtZjNdY%2BvtHz%2BjgsqVSS%2BNHbm4IIs7EbT6qrUJ9QtLvJle3u4HCSmmP8xVwDvRY0DI7AziaSrsaKxcg%2F%2Bl%2Bt60EuEWfVV2eJvvAVD5uG%2Bwalgp1uY%2Fm%2B89E2foLTjMcgQEHO4RMqLvWJdRmRHthBOrZ8onggXL3RSNWxZZ%2BlKH%2B9th%2FdBPfA56VbpyNiLy1KeuLLJFKIOqYyKUDgBrFQonfkWFoF1k%2FJmmHqm8isQuP88pNktsXBOPtHNZHR9wfSUZWTupTFqTLYQIvQW96ZA1hvb1cg8jlgk%2BCd%2BXLWwh%2B21Dm%2FHJsum5hmWhOQV7CpkQZGlTSioV%2F4iae9j1CGzYZbZTT21OmA3nf%2FbzhiPswx%2FzCwAY6pgH6qRr%2FmmYnBoq3ZOJickVly6f%2FtLICu4v4Gf5pUnXpee5mpItxvBXvhcrzYqTFbfYbf%2FNCGt0ULXJyeOUYyOsg8Skz5Mi1bym3LGS0%2FLhO9nj9EDcAUtBSFs1hgYHRaFEAdNkkNLsI61WAQGEu3fOZju1PCa5Nx9fee2zLjK48gAEIPI6Piw5t9EReaQ8N1WYNPliGSdL5l5i8OLXClnGN%2FMbl7b16&X-Amz-Signature=f59277e56f12d658d409f19f938167702e9ec5f35699fa67edc9edb8ebfe1cde&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VUVCSJ2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFU5ctYqYDs4HyWQOib%2BoESSbON6nH%2FwYToYKpP2MVjAAiA%2BLaD%2B%2FASQZ8IHU8CXCqyvqEpciboKiyDj38QXtTrFPiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUdHAdoaSFlZaj5HCKtwDp2GDEo3husuMgYWSKdb3lz8z%2FNWmo8kDU%2Ble%2BbDWntmq5KCqd4yMLu0%2FNRhUJpynbCkpB4vcjt1R1UjZexklXBHsyLZRb7zxbdxY%2Bgf%2FqaEf1HSN2J%2BFtAuEv2TOc%2BVBCujrGbECTr05ZkwagbGl%2B%2BqZv42NuS5%2Ff8YpmJzfF6czPPQ2bp%2B5bG1puUFASMnzvo5Lxfb8Pdi5jAXfw%2FucNwcGGO1yY3rC63bHWBQSaQZAtihrnzFjDbznFr5q8HYNkpEjt52QM3VVppIZVHtZjNdY%2BvtHz%2BjgsqVSS%2BNHbm4IIs7EbT6qrUJ9QtLvJle3u4HCSmmP8xVwDvRY0DI7AziaSrsaKxcg%2F%2Bl%2Bt60EuEWfVV2eJvvAVD5uG%2Bwalgp1uY%2Fm%2B89E2foLTjMcgQEHO4RMqLvWJdRmRHthBOrZ8onggXL3RSNWxZZ%2BlKH%2B9th%2FdBPfA56VbpyNiLy1KeuLLJFKIOqYyKUDgBrFQonfkWFoF1k%2FJmmHqm8isQuP88pNktsXBOPtHNZHR9wfSUZWTupTFqTLYQIvQW96ZA1hvb1cg8jlgk%2BCd%2BXLWwh%2B21Dm%2FHJsum5hmWhOQV7CpkQZGlTSioV%2F4iae9j1CGzYZbZTT21OmA3nf%2FbzhiPswx%2FzCwAY6pgH6qRr%2FmmYnBoq3ZOJickVly6f%2FtLICu4v4Gf5pUnXpee5mpItxvBXvhcrzYqTFbfYbf%2FNCGt0ULXJyeOUYyOsg8Skz5Mi1bym3LGS0%2FLhO9nj9EDcAUtBSFs1hgYHRaFEAdNkkNLsI61WAQGEu3fOZju1PCa5Nx9fee2zLjK48gAEIPI6Piw5t9EReaQ8N1WYNPliGSdL5l5i8OLXClnGN%2FMbl7b16&X-Amz-Signature=792d75b1ad9ce096702e6109e2b7c5bbe0e5304ca3305ca42d5955ca6fae8684&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
