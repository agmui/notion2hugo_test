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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNFNXPCM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE02QEJh%2BSBUso%2F73H%2FlkGQeWfnyZcds2N1vn1yleNGYAiEAnqWKFid94Tp3FwAQk5IPhtDgSRLkk3A7Gn0ObRQaBkgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzsWvfUreFdgaXqOCrcA8T0zJGLXCWhVyfvHbQSUh38S1BhuCMUTlLbwFCNwil6Frx8VIW4jdb2uMZ71agMTraf0goWVbDmgFHbvhHFN6UfSlbm%2F5e2K2eHO2npi7QmMa9aHqew6Z8okIFlkMyYuQzOFFwi%2FNf%2Fhn8KY3l7kIGN1P8pKVDyit7t7N1WHWFgGO2PZU%2FeRmOeRy6ie8WAGoRpX0Wz0I1rxBxQAT5V3iIuqm04dYf7p4pFlqqS5aQ1X32od%2BYGQUHAzTmMkqvj6FqkiBO4cGEf3hZJWJu4%2FHIUwcFvJompTYwMmG0D%2BBYJlPcMkb9RImvNGy54DvvocPMkrWAp%2BsNA4%2BQwT4pKgR640pACAS0vzkGRXmDbOZIGYdwLqv0wHqyZfJh633kpErjIMrYp4UoNXdPYEU30Gb7vaXYTKn6oUxdf6JLJ6d0gtTaYvkiEhy476upKkLbcdVZ%2FsqqmApCXT%2FGIhMfsrsyC1pg2Jh%2BKenCGq7Hj8M%2BwjXLheCMvdg%2BLDCGEv386M1nZdUkvo0kvDcanFV0Hqg3l8kIN15aXU%2B78W0DP8VNAhiI8BtxjKt6nVvpYeibuEahc%2BbUyKslHJnwjsviBp7jML9OxJD2KMoVFdEttbE6WLH1OQMA9yn4T9Eg1MNSiicMGOqUBZJ4FMPXeJMingqZm2TKhWvINZjvONPBuER9QpCQHpuc1LAMiET9apqs0gIkzNBpzk%2F56YhX10JSOvzc9AGzc0rPtj5geRkySwNloHxPhyTNQWtzRR1ixy8d%2BljDUGn%2FF1NCLsewIac2WekIal13GXvStiVlVXh6bJKfZe311QVn%2BQw505tmqW0oGSjGS9SCUpsQWGVP%2B5aTip9B3xFD2Yt3H0dYf&X-Amz-Signature=4c89dbff89e4960ffbd8eea0bbb264b084d15d0420ad7aaf76c060dd29a2b816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNFNXPCM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE02QEJh%2BSBUso%2F73H%2FlkGQeWfnyZcds2N1vn1yleNGYAiEAnqWKFid94Tp3FwAQk5IPhtDgSRLkk3A7Gn0ObRQaBkgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzsWvfUreFdgaXqOCrcA8T0zJGLXCWhVyfvHbQSUh38S1BhuCMUTlLbwFCNwil6Frx8VIW4jdb2uMZ71agMTraf0goWVbDmgFHbvhHFN6UfSlbm%2F5e2K2eHO2npi7QmMa9aHqew6Z8okIFlkMyYuQzOFFwi%2FNf%2Fhn8KY3l7kIGN1P8pKVDyit7t7N1WHWFgGO2PZU%2FeRmOeRy6ie8WAGoRpX0Wz0I1rxBxQAT5V3iIuqm04dYf7p4pFlqqS5aQ1X32od%2BYGQUHAzTmMkqvj6FqkiBO4cGEf3hZJWJu4%2FHIUwcFvJompTYwMmG0D%2BBYJlPcMkb9RImvNGy54DvvocPMkrWAp%2BsNA4%2BQwT4pKgR640pACAS0vzkGRXmDbOZIGYdwLqv0wHqyZfJh633kpErjIMrYp4UoNXdPYEU30Gb7vaXYTKn6oUxdf6JLJ6d0gtTaYvkiEhy476upKkLbcdVZ%2FsqqmApCXT%2FGIhMfsrsyC1pg2Jh%2BKenCGq7Hj8M%2BwjXLheCMvdg%2BLDCGEv386M1nZdUkvo0kvDcanFV0Hqg3l8kIN15aXU%2B78W0DP8VNAhiI8BtxjKt6nVvpYeibuEahc%2BbUyKslHJnwjsviBp7jML9OxJD2KMoVFdEttbE6WLH1OQMA9yn4T9Eg1MNSiicMGOqUBZJ4FMPXeJMingqZm2TKhWvINZjvONPBuER9QpCQHpuc1LAMiET9apqs0gIkzNBpzk%2F56YhX10JSOvzc9AGzc0rPtj5geRkySwNloHxPhyTNQWtzRR1ixy8d%2BljDUGn%2FF1NCLsewIac2WekIal13GXvStiVlVXh6bJKfZe311QVn%2BQw505tmqW0oGSjGS9SCUpsQWGVP%2B5aTip9B3xFD2Yt3H0dYf&X-Amz-Signature=e448ef8d785384cc24f705b357435bb9d7556612cb3dd60685e420782f33485a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
