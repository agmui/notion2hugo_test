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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZABUMT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDvvRGPZA%2FKCwrRQc6pKVa8bUo2BiMojPMRSDNKtQK3HAIgZyTo4JOzRnQJ%2BO11Wr%2B8xK8LKDf706yKa7cMOBu4Dkkq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDDNAIYxHps%2B5%2FMlXCrcA0MmCRVueUOvpXB1aKS4Nmr9eW2k1Ai3t2t%2BwuMcFVOlg1JkV3WO%2Bt8OMMMHcy5l9hDEMDBAkG1aNe2B1jkcyQgQwfvP7K2sOz2MO6wv%2FmcvmswnoU8BjPfXjgu7dKamKYt6J%2B9vNaZFx3seLBgBJRYJ1U9xQ9Fs%2FOX61O7UTxsE5Xncp2qhpi7p2TSc3%2Frj4X3EK7ckQkbWZHukeV2HvWsjA25MkCGBsB1QUMKLYtthfrciutc1gQtIObzXU1OHazuyfh40UOevRHbrTEcUZnrBReM5FhTpueZPEBjGXbGkamXXPKDVWXd4mFGTn5GCX%2FtEN15ofEMpnooSMm22plKlCLJehPIhVbzd0DdkRDcahc7j5i9X4hi4Fd2tpo3CczQZXNIsQ6Te6%2BRav%2BqVQhRc10wLB3TiRoxXiqY1CNpShBzgQ2vqLhkk16J%2FGoyuB7BmoG2f0VKJbFQokbxNf2TS%2FJf7VTXlWbwGHlcIo4k%2FnG7DHzREoV8qJzm3UwzisE0ZNwoyRaj8ZuwtvBivJI4gBljfYfNwRJL8J8AbaWFTksQ06GhqwKXOvBk%2Bmbe8CgJtx5WmWjkane8f00n8pU2RtvJLVmmNpUaGlSEPjRFACcepZ5NcVCOLxnhKMOb63cAGOqUBKyytRhbzNsaVS%2BWeWMuCsXgBxTrC%2BQZB%2FTOHAcED4fQf6hGaM7touDNr4JDOcKY%2BfJZhzOFjiZyoHiL693iDyT6eQWjqP9PBqJ%2BcwpFDhWokZupHNLl1EO26jRwWO8JIK%2BxJAOgFdgNpq%2BxvDKEghMBEEOvI7C2FwG%2BnW7LCewxAyBd7SY0KfIkn%2Fm6HFLSJDVAG9iJmSKWjsd6UagdexgdVuTK2&X-Amz-Signature=30499d8457b01e595ae081f39f1eb3c63708771915db5ca5e64956e11e3e25d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZABUMT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDvvRGPZA%2FKCwrRQc6pKVa8bUo2BiMojPMRSDNKtQK3HAIgZyTo4JOzRnQJ%2BO11Wr%2B8xK8LKDf706yKa7cMOBu4Dkkq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDDNAIYxHps%2B5%2FMlXCrcA0MmCRVueUOvpXB1aKS4Nmr9eW2k1Ai3t2t%2BwuMcFVOlg1JkV3WO%2Bt8OMMMHcy5l9hDEMDBAkG1aNe2B1jkcyQgQwfvP7K2sOz2MO6wv%2FmcvmswnoU8BjPfXjgu7dKamKYt6J%2B9vNaZFx3seLBgBJRYJ1U9xQ9Fs%2FOX61O7UTxsE5Xncp2qhpi7p2TSc3%2Frj4X3EK7ckQkbWZHukeV2HvWsjA25MkCGBsB1QUMKLYtthfrciutc1gQtIObzXU1OHazuyfh40UOevRHbrTEcUZnrBReM5FhTpueZPEBjGXbGkamXXPKDVWXd4mFGTn5GCX%2FtEN15ofEMpnooSMm22plKlCLJehPIhVbzd0DdkRDcahc7j5i9X4hi4Fd2tpo3CczQZXNIsQ6Te6%2BRav%2BqVQhRc10wLB3TiRoxXiqY1CNpShBzgQ2vqLhkk16J%2FGoyuB7BmoG2f0VKJbFQokbxNf2TS%2FJf7VTXlWbwGHlcIo4k%2FnG7DHzREoV8qJzm3UwzisE0ZNwoyRaj8ZuwtvBivJI4gBljfYfNwRJL8J8AbaWFTksQ06GhqwKXOvBk%2Bmbe8CgJtx5WmWjkane8f00n8pU2RtvJLVmmNpUaGlSEPjRFACcepZ5NcVCOLxnhKMOb63cAGOqUBKyytRhbzNsaVS%2BWeWMuCsXgBxTrC%2BQZB%2FTOHAcED4fQf6hGaM7touDNr4JDOcKY%2BfJZhzOFjiZyoHiL693iDyT6eQWjqP9PBqJ%2BcwpFDhWokZupHNLl1EO26jRwWO8JIK%2BxJAOgFdgNpq%2BxvDKEghMBEEOvI7C2FwG%2BnW7LCewxAyBd7SY0KfIkn%2Fm6HFLSJDVAG9iJmSKWjsd6UagdexgdVuTK2&X-Amz-Signature=28cec3b2ca06b9723b1348b2e43f1a49c75b0524d79da524f51bf7af284b54dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
