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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUPSF5UY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOfGp3lsBaH75Txn8a33IOvPwoFGJI0dVwUT00i8rJOAiEA1L3svzDixP%2FeQjceVOEx9voa2wDnEfX4ZcQHBCKCAgEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBI2p%2FHIO9NudVh1FSrcAw%2Frna4xev33Pds44s4FikCqW2af0Kc7uHs9hgtISYRJ2R27iVJC0r8kkHduvj9DGjT0vFDayOrTLXVvVNvJcl1%2F7qpriRCZ41AiJC9LK0yTIS3tyLGYA4YL0h0kgw8hADtT1HiR0NKBktbTYliX3fbQsqFwLdjNAUmV7pyIkGZ%2FYf%2BYyk2hI3PDzCHvjejpgWRQzw6jeoz6ccUl4FUWpJOMLwNv9k4J%2B8SKLrGkJSBwidDYrAWUpxbyDh7jjsULdye1H1SJbQZqBF6akcg7dsMJV3ksonWmyjs5noJvfEETiC4oRGgx81wKGjC9f%2Fk%2FPKM7sb8MkF6G4mMUB7HymshICtdQVRCWdpHZh0cCGo7bP3CAFRYHvJfKgritAfixwmrZ6fiiWB9kzU%2FYg0cijbCGUmdX8JJdTtdnYLEskf4pzPtlgUZUCTewnPvOd5%2BlzpvSUTM9bq1bvAU85dghvdVqqYVTVqMgX005DwKrwzl2T3q2Kb0Obrk2sHkXErT7gIw6LktqIDjPbpj1wnb2XgL0JmUpcsjafn%2FDCwmyzFBR86pXViKG8fyiWaK9Sj7sQ6u%2BPuFIIJCPd8vq8TyMawLcxjGqbk%2BefW6EhxOJPxwFm64093qnd85UgHDqMNyy1sIGOqUBB2xmavWLNQg5WBYQ4UaBCZnwVUZwoK8l7%2FWALEcNMGPgBT%2FBd7u5MRx9wuvk6k2z6hbEaKDMbRVoj7fq1WEKO4pzd42uWmKLF9zF11UoP4mNtAXDtaYXiTJEuaT0DE9A%2BGBuGyC6%2B1WSpwWhAVsYa3TqEa%2F1UXjRCrXbQGfQLZoDCM6iO3vhVokkfDngn1WsdLsD1CCoMsi1%2B81roFtoB2Ut80UW&X-Amz-Signature=46ce53e301d6de029c4ad00019d8bf54b40be33ffad986314bb625d407c4455c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUPSF5UY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOfGp3lsBaH75Txn8a33IOvPwoFGJI0dVwUT00i8rJOAiEA1L3svzDixP%2FeQjceVOEx9voa2wDnEfX4ZcQHBCKCAgEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBI2p%2FHIO9NudVh1FSrcAw%2Frna4xev33Pds44s4FikCqW2af0Kc7uHs9hgtISYRJ2R27iVJC0r8kkHduvj9DGjT0vFDayOrTLXVvVNvJcl1%2F7qpriRCZ41AiJC9LK0yTIS3tyLGYA4YL0h0kgw8hADtT1HiR0NKBktbTYliX3fbQsqFwLdjNAUmV7pyIkGZ%2FYf%2BYyk2hI3PDzCHvjejpgWRQzw6jeoz6ccUl4FUWpJOMLwNv9k4J%2B8SKLrGkJSBwidDYrAWUpxbyDh7jjsULdye1H1SJbQZqBF6akcg7dsMJV3ksonWmyjs5noJvfEETiC4oRGgx81wKGjC9f%2Fk%2FPKM7sb8MkF6G4mMUB7HymshICtdQVRCWdpHZh0cCGo7bP3CAFRYHvJfKgritAfixwmrZ6fiiWB9kzU%2FYg0cijbCGUmdX8JJdTtdnYLEskf4pzPtlgUZUCTewnPvOd5%2BlzpvSUTM9bq1bvAU85dghvdVqqYVTVqMgX005DwKrwzl2T3q2Kb0Obrk2sHkXErT7gIw6LktqIDjPbpj1wnb2XgL0JmUpcsjafn%2FDCwmyzFBR86pXViKG8fyiWaK9Sj7sQ6u%2BPuFIIJCPd8vq8TyMawLcxjGqbk%2BefW6EhxOJPxwFm64093qnd85UgHDqMNyy1sIGOqUBB2xmavWLNQg5WBYQ4UaBCZnwVUZwoK8l7%2FWALEcNMGPgBT%2FBd7u5MRx9wuvk6k2z6hbEaKDMbRVoj7fq1WEKO4pzd42uWmKLF9zF11UoP4mNtAXDtaYXiTJEuaT0DE9A%2BGBuGyC6%2B1WSpwWhAVsYa3TqEa%2F1UXjRCrXbQGfQLZoDCM6iO3vhVokkfDngn1WsdLsD1CCoMsi1%2B81roFtoB2Ut80UW&X-Amz-Signature=0aa4d42e31fa7415925055d70fb9a14fee5cb6dfea335dbedcc528fe54d55742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
