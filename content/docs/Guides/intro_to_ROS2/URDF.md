---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGSHV7GQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1OEEmLbXi0bPvnozcwP6Cbdvp5H89TDIuB116dc9z6AiBlwMKpBxt2GPkIQJkCotpYhrP5QZJDpT64MkVYiMF4YSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2HMa6mZQEZvEW5xTKtwDKko0mVpqZHqJ6%2BljOFMrCqO6lwuV0eINosCNJ%2B7WdGlYCpD%2FmXA5xGQWEbQNtZiKMEH5iZQWtYd%2FHKkAZYs%2B9%2FQJn4yMp6egGwWmRM6A03%2FWqy%2FCkXuK566TDTnk7r%2Ft0G5bGGbLIKsm5v%2F6RR5XbCaxoJipiQMk%2BgQePu4wE9ZGjICaUVvG%2Foooi33NmfbGrGwEQgFlgzOAny1QymrH%2BZglgYk5gGS3XXAjsGq4PMGkxifuk9tR3VBNUlpHmL%2B%2FcmdXZFT%2Bp3fHJEbepNGE5VQxVC4jwDRoOQbNRKYNAZ6tIsaULBUzE35c%2BlTSIpKjMueq12gTNNl6W2VmgamDHHWaYFxV0MsjusVdopNPDaeZmvp3pE1uwN74OxFP%2FKG7PSEHfS0tJnzL9H9wOe0Y7wjBRAKmTRiaq45L9T4OZ7YRMu2lShztm%2FawWQ%2BSI6OjxDFkOg2NVIwAlY%2FezNBX9wP122DcXS4uY%2Fbd6bEChXRzd83PGcoyeozZkDM33RD%2F7agIF9iXiG%2FFWWV03y7fc08gBYJqOdtqnZSYl8hAE1GE0HHpKZhIoW4d%2FntfgXq3ypliiLgMX8vem00Hq1%2BmjjNbXFTGlN%2BdzubineRL8Ajjm3np9r4zkRyOYtYwmZ3lxAY6pgEuhSXmawG7ePGcOge%2FuWdTH34w57ahiEh4B0NrBMPfX5eWBWIrWylwluCHBjr9vAIDBT33hfLO4bHZWDR69rPteboh%2FbUI4%2FiR2dGhLJ54osylYX3f%2F%2BQKX87wc5YGaqXp3m88OEjcqgfFm%2BmT6lApH7PsZSAXYviYgkY5s7r%2Fm9AsQdHKi89dTIT%2FK8HFvJ29ytk%2FaIwGK6qeA%2FCY%2BET3YL8agYGP&X-Amz-Signature=f0673f4391e189b411c1e45b46e79ccaa1d1afbe7e611e8bb89d8f093a9cadb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGSHV7GQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1OEEmLbXi0bPvnozcwP6Cbdvp5H89TDIuB116dc9z6AiBlwMKpBxt2GPkIQJkCotpYhrP5QZJDpT64MkVYiMF4YSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2HMa6mZQEZvEW5xTKtwDKko0mVpqZHqJ6%2BljOFMrCqO6lwuV0eINosCNJ%2B7WdGlYCpD%2FmXA5xGQWEbQNtZiKMEH5iZQWtYd%2FHKkAZYs%2B9%2FQJn4yMp6egGwWmRM6A03%2FWqy%2FCkXuK566TDTnk7r%2Ft0G5bGGbLIKsm5v%2F6RR5XbCaxoJipiQMk%2BgQePu4wE9ZGjICaUVvG%2Foooi33NmfbGrGwEQgFlgzOAny1QymrH%2BZglgYk5gGS3XXAjsGq4PMGkxifuk9tR3VBNUlpHmL%2B%2FcmdXZFT%2Bp3fHJEbepNGE5VQxVC4jwDRoOQbNRKYNAZ6tIsaULBUzE35c%2BlTSIpKjMueq12gTNNl6W2VmgamDHHWaYFxV0MsjusVdopNPDaeZmvp3pE1uwN74OxFP%2FKG7PSEHfS0tJnzL9H9wOe0Y7wjBRAKmTRiaq45L9T4OZ7YRMu2lShztm%2FawWQ%2BSI6OjxDFkOg2NVIwAlY%2FezNBX9wP122DcXS4uY%2Fbd6bEChXRzd83PGcoyeozZkDM33RD%2F7agIF9iXiG%2FFWWV03y7fc08gBYJqOdtqnZSYl8hAE1GE0HHpKZhIoW4d%2FntfgXq3ypliiLgMX8vem00Hq1%2BmjjNbXFTGlN%2BdzubineRL8Ajjm3np9r4zkRyOYtYwmZ3lxAY6pgEuhSXmawG7ePGcOge%2FuWdTH34w57ahiEh4B0NrBMPfX5eWBWIrWylwluCHBjr9vAIDBT33hfLO4bHZWDR69rPteboh%2FbUI4%2FiR2dGhLJ54osylYX3f%2F%2BQKX87wc5YGaqXp3m88OEjcqgfFm%2BmT6lApH7PsZSAXYviYgkY5s7r%2Fm9AsQdHKi89dTIT%2FK8HFvJ29ytk%2FaIwGK6qeA%2FCY%2BET3YL8agYGP&X-Amz-Signature=f0ba121bf5d56a2fd2f44b75f09dd803c40667ecb006a4f6b72c163643cb5714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
