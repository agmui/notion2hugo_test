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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S45ER37K%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCJWgJDDX4qmmxiJtXO8k%2B0JT3ewyyMEMYuLoafGh39%2BQIgIvu1vU84%2FPX6pkKah9sOymtsnxVhGOVZNPNLeGYCb24q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKNG8v%2FL8VwdcnUPfircA0eyZxD%2FK18F1EeffuLjw9CoM8aPDv8kuxvLDYlF9vzsIHBV%2ByLc61PO5zNrJMnCf%2Fs21L13oVHn65KC3TdDdhsHOCFr9ReFSWnVilsr6RCq%2BXsIY69zH%2Bq2m0DcspuBKkCEMNC48mMfH2ROCsXsh1IiG92qxa9jV25RdYMgiBi8gOLgCVXaHUw6ZfEl6dipJe5O84vGkNE27YfiUzH6F74is2TcPloegBdhm4PqGOpNQK5HD3HEsLNBmeKowSUTaCto8VCU%2F3auTDfUMmNYe%2FdO0pOoUENnRSl6w7BgPaQEHtlbyOFPFt2X02IwBw5AYKYptUIjeGXBLm5wCCBX%2BLuMvuFhE0xh5ARUN26JqCe76tsYVohRaTm4V%2FlHtB2qphXP%2F%2BcW%2F6ak3e8EroRD0gdH%2F9GMB7%2F33BqSYDdClUg4rnpfo0HawC42JhrBJKY8FFjrnxx3e0GeYaWpqEOURk1eK6o6MJG6%2Fpg4glA%2BBupTD%2BZD7uCnMwdp789HyfZAyPH8vqjbum1AYIFV9xnvjiTBX53E5x0qhMbTvE5hUrLJ1BUk1oqUXnqAdlxUyvUJgCysyu3Sp2pJwbK3uER71poW9OPzxSh5sN9qyavl0PuGh%2BRjFmWKohIP%2B3KRMOjGqcMGOqUBxj%2BnohCRV612Deg79PJVZfnPZ9ShgNmzSBkVI9b7Qn%2F1c7FUD4%2F4kn33QwT5uoD5RX%2Bh3XJW2Zk%2FTLa%2B%2FY22DRVMKLohpA6ROoSEPq%2F7zxY3eD4GO6bNPSi5KNXadMDynSPz5LccocqlyU0cYOAtUYK4GEga9nBkvd0w3BFL%2BHa0nvDbtVq4ovRMylPXaWWrtDgFJgdiLa3ge5VBfHo%2B%2Foy8vGpC&X-Amz-Signature=4c779d8f196a8794a607acf1294a134c115bf49ca9bfbe047079680db9ccaea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S45ER37K%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCJWgJDDX4qmmxiJtXO8k%2B0JT3ewyyMEMYuLoafGh39%2BQIgIvu1vU84%2FPX6pkKah9sOymtsnxVhGOVZNPNLeGYCb24q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKNG8v%2FL8VwdcnUPfircA0eyZxD%2FK18F1EeffuLjw9CoM8aPDv8kuxvLDYlF9vzsIHBV%2ByLc61PO5zNrJMnCf%2Fs21L13oVHn65KC3TdDdhsHOCFr9ReFSWnVilsr6RCq%2BXsIY69zH%2Bq2m0DcspuBKkCEMNC48mMfH2ROCsXsh1IiG92qxa9jV25RdYMgiBi8gOLgCVXaHUw6ZfEl6dipJe5O84vGkNE27YfiUzH6F74is2TcPloegBdhm4PqGOpNQK5HD3HEsLNBmeKowSUTaCto8VCU%2F3auTDfUMmNYe%2FdO0pOoUENnRSl6w7BgPaQEHtlbyOFPFt2X02IwBw5AYKYptUIjeGXBLm5wCCBX%2BLuMvuFhE0xh5ARUN26JqCe76tsYVohRaTm4V%2FlHtB2qphXP%2F%2BcW%2F6ak3e8EroRD0gdH%2F9GMB7%2F33BqSYDdClUg4rnpfo0HawC42JhrBJKY8FFjrnxx3e0GeYaWpqEOURk1eK6o6MJG6%2Fpg4glA%2BBupTD%2BZD7uCnMwdp789HyfZAyPH8vqjbum1AYIFV9xnvjiTBX53E5x0qhMbTvE5hUrLJ1BUk1oqUXnqAdlxUyvUJgCysyu3Sp2pJwbK3uER71poW9OPzxSh5sN9qyavl0PuGh%2BRjFmWKohIP%2B3KRMOjGqcMGOqUBxj%2BnohCRV612Deg79PJVZfnPZ9ShgNmzSBkVI9b7Qn%2F1c7FUD4%2F4kn33QwT5uoD5RX%2Bh3XJW2Zk%2FTLa%2B%2FY22DRVMKLohpA6ROoSEPq%2F7zxY3eD4GO6bNPSi5KNXadMDynSPz5LccocqlyU0cYOAtUYK4GEga9nBkvd0w3BFL%2BHa0nvDbtVq4ovRMylPXaWWrtDgFJgdiLa3ge5VBfHo%2B%2Foy8vGpC&X-Amz-Signature=5cea1fdbb22cd619190b3b70e5ba9279ea85f2b14f5841a25bdd5833a9ff8f42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
