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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVTHKEAA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmvhICd9UhX43Aq12msf9WwyEuZ1YVBOGXN%2BCcfLQKkQIgf63FTlRvqnVHpvmUEnjISJgAirfkFPR%2Bn%2Fm2VlUniCYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BfCYszGhFvzJJVHCrcA0lGwCFcm40ZNL144Ufb95nFRJ6LEO25Lbd%2Bn1U%2FC1qSeiRZuf5SHvsBlxSooMUMVOAm%2BFGX%2Bwt%2BWzDtMxa%2B2%2BTSgb5QiF5qSfaPzumWnGJH7xJg6%2FJcaaXzN03rdcjKCOZhRpahymGvXrG7cTzvu%2B9D4QXjoP%2FwnOcTJVMAfWQ%2FJDyedeRRIyW7cHrfK4MMFcyiHIb7ztBOhvAeFYqkDABL3bT7LV8GCpw%2FH%2BS2uAulHSAEzSw9H6Rbjkwy9ddcnE0deXyGnF8rvykGSiPm3dEA3Zx8k%2BxMoqF1l5zrT6M3xZ4%2BPl745AhDRWoRXNhyjQfLJ0LY7ct18CHck6FBh0NNbin08oPVWwapKeWmNT9apG8TYjmwlFMLOfU1SE%2F8DXq8mFDuZugPRZDqAZEAK2MTJ%2FOTu14jcMF7X6om%2Flq5iW13L0RfEMdZpa3x%2F3Y2U5OuQ4czyrx8IvIzcCFBsU935w2%2FTdI5i2wAMsTG%2FjelUG%2F4FQftbJyQ%2FLwAVEvXOebM90uL%2FYJN5KKD6ETYD5dYhH2k%2FCWARiXLVO9o%2B1mRbUBcSB8RV0THw3llxVniJqFoT5quqxbmgyCYfIiXCw0bLImBOWpSxcaFP6GGP%2F%2FN%2B1xX3kUHCckh%2F5nzMLP178MGOqUB%2FKVozSR%2FZysC4Zg5OWORqBhdxVaEzanaOC6LiAwCdtBLGmHu6EaoyjLK48hFHschC8Q4bP1kQdkEJeUxWJ%2B%2FQliKztSEp2Dlx7T7O7le5iQow1IFpui%2FUPDg9W0fKNPyWzjRP%2Fc%2B3LT5coAVVgJ2WaYppdghPbai7exOtA0Y8v7lnL1IRDkBYaFsW64RKdLFG4fZEihWl8PHD5Ihz392pUO7x4z%2F&X-Amz-Signature=589dec477e51af896ba96e1297393716bdd69612be7467e5042848877d10db85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVTHKEAA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmvhICd9UhX43Aq12msf9WwyEuZ1YVBOGXN%2BCcfLQKkQIgf63FTlRvqnVHpvmUEnjISJgAirfkFPR%2Bn%2Fm2VlUniCYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BfCYszGhFvzJJVHCrcA0lGwCFcm40ZNL144Ufb95nFRJ6LEO25Lbd%2Bn1U%2FC1qSeiRZuf5SHvsBlxSooMUMVOAm%2BFGX%2Bwt%2BWzDtMxa%2B2%2BTSgb5QiF5qSfaPzumWnGJH7xJg6%2FJcaaXzN03rdcjKCOZhRpahymGvXrG7cTzvu%2B9D4QXjoP%2FwnOcTJVMAfWQ%2FJDyedeRRIyW7cHrfK4MMFcyiHIb7ztBOhvAeFYqkDABL3bT7LV8GCpw%2FH%2BS2uAulHSAEzSw9H6Rbjkwy9ddcnE0deXyGnF8rvykGSiPm3dEA3Zx8k%2BxMoqF1l5zrT6M3xZ4%2BPl745AhDRWoRXNhyjQfLJ0LY7ct18CHck6FBh0NNbin08oPVWwapKeWmNT9apG8TYjmwlFMLOfU1SE%2F8DXq8mFDuZugPRZDqAZEAK2MTJ%2FOTu14jcMF7X6om%2Flq5iW13L0RfEMdZpa3x%2F3Y2U5OuQ4czyrx8IvIzcCFBsU935w2%2FTdI5i2wAMsTG%2FjelUG%2F4FQftbJyQ%2FLwAVEvXOebM90uL%2FYJN5KKD6ETYD5dYhH2k%2FCWARiXLVO9o%2B1mRbUBcSB8RV0THw3llxVniJqFoT5quqxbmgyCYfIiXCw0bLImBOWpSxcaFP6GGP%2F%2FN%2B1xX3kUHCckh%2F5nzMLP178MGOqUB%2FKVozSR%2FZysC4Zg5OWORqBhdxVaEzanaOC6LiAwCdtBLGmHu6EaoyjLK48hFHschC8Q4bP1kQdkEJeUxWJ%2B%2FQliKztSEp2Dlx7T7O7le5iQow1IFpui%2FUPDg9W0fKNPyWzjRP%2Fc%2B3LT5coAVVgJ2WaYppdghPbai7exOtA0Y8v7lnL1IRDkBYaFsW64RKdLFG4fZEihWl8PHD5Ihz392pUO7x4z%2F&X-Amz-Signature=fd3b6e2a15945c257f4176ec27f7196db50b4d5a9ca7193a62720d454062f977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
