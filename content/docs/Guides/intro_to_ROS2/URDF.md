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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4U3JPN%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoDh%2FlQwhnnuF%2FRDXUbD4cRgGew%2Bw89Hs9ZPwbkTK8YQIgG4sKzQfrpEvMuq0lkPpNfC1PyEA8VbDpc21oErQ9f4MqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfZEba5i5p%2BopsdRircA%2B1YWQzdqITWh9SvLQsie6V%2F1XeQ0SroX8CBIfzXq61N992epetBEbY9I%2FS0vhxVbKo48%2B4CcrjNJgI%2Fy4%2FQmj7yc2pKF0KTMDMLjehkbfWLD%2FyV192Z5On2iRKMbQcf7Wpeddp9xnLdVOQO%2BycYRrtXWgkaHhiMEmahnN%2BoiZc%2BCTiWD0kVOtQ6Jx52%2FpHj1SpeY6LWjUSD9KWpybMRmKIWiet57nJguxFzKqnW5zGHgTsts8hBr4qRc51pOI9KiIoO0YKAl6L08qKlKQzavctwpuZwSzmt2yknETgEIqN14ZejmsoyNW5zYJ5n%2FAEgk%2BPVMa6w17Lk6tmlkIzf%2FWcNt1afZq5uzaxdbh9wBmcoYbIummyvtdZtFw4Cpc5CEKKGJ5LAppo73IIA6sFmKhb6E4DsGGlv%2FNHvhsYrWyiv1s5chXtKOjatKKcerGdKzriXTmwRbNiUfkFoTIjfKxRfwjeGHCNTAhCgWB%2FY1o%2F301uOsgQ4mWkcG%2B6yCZfwp3LmMd%2BuVqX%2B4qFHOUPX%2FeRZS66VSmGtEszvGgibl%2F4SHt%2BfVO0a3ZbL%2BLGxat5VVBPt0JjYAU1mEFeWuOR8JBugAk9bnOud9ydQh%2B4STNgmqUTJmwhdEJ%2BxpqQPMIz5i8MGOqUB%2BvYUmVH2TVLlNlIH1GuinFRFoch1%2FvEXkXXIcWq%2FA4B1ulTmsYmGbR9h%2F3m%2BcNr2tKVtsgFPbloo8rPkdKcrXfRujlaM9dx6eioRip3EBGVvJX0YmoVpjiNsZ84tagbrxSXHOiwnMMj3yFsowTB3vqzc5HkN%2BNw1Hs4Vv%2FUof%2BCN%2F0zq72gfFlp2dU1FNvybnzgpXXMWWAm0U%2FwLZB8Nkiof5xI9&X-Amz-Signature=93b6c1e2a481e7fb85bee1365106a908407ad4b7b989593a044803b0624d2256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4U3JPN%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoDh%2FlQwhnnuF%2FRDXUbD4cRgGew%2Bw89Hs9ZPwbkTK8YQIgG4sKzQfrpEvMuq0lkPpNfC1PyEA8VbDpc21oErQ9f4MqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfZEba5i5p%2BopsdRircA%2B1YWQzdqITWh9SvLQsie6V%2F1XeQ0SroX8CBIfzXq61N992epetBEbY9I%2FS0vhxVbKo48%2B4CcrjNJgI%2Fy4%2FQmj7yc2pKF0KTMDMLjehkbfWLD%2FyV192Z5On2iRKMbQcf7Wpeddp9xnLdVOQO%2BycYRrtXWgkaHhiMEmahnN%2BoiZc%2BCTiWD0kVOtQ6Jx52%2FpHj1SpeY6LWjUSD9KWpybMRmKIWiet57nJguxFzKqnW5zGHgTsts8hBr4qRc51pOI9KiIoO0YKAl6L08qKlKQzavctwpuZwSzmt2yknETgEIqN14ZejmsoyNW5zYJ5n%2FAEgk%2BPVMa6w17Lk6tmlkIzf%2FWcNt1afZq5uzaxdbh9wBmcoYbIummyvtdZtFw4Cpc5CEKKGJ5LAppo73IIA6sFmKhb6E4DsGGlv%2FNHvhsYrWyiv1s5chXtKOjatKKcerGdKzriXTmwRbNiUfkFoTIjfKxRfwjeGHCNTAhCgWB%2FY1o%2F301uOsgQ4mWkcG%2B6yCZfwp3LmMd%2BuVqX%2B4qFHOUPX%2FeRZS66VSmGtEszvGgibl%2F4SHt%2BfVO0a3ZbL%2BLGxat5VVBPt0JjYAU1mEFeWuOR8JBugAk9bnOud9ydQh%2B4STNgmqUTJmwhdEJ%2BxpqQPMIz5i8MGOqUB%2BvYUmVH2TVLlNlIH1GuinFRFoch1%2FvEXkXXIcWq%2FA4B1ulTmsYmGbR9h%2F3m%2BcNr2tKVtsgFPbloo8rPkdKcrXfRujlaM9dx6eioRip3EBGVvJX0YmoVpjiNsZ84tagbrxSXHOiwnMMj3yFsowTB3vqzc5HkN%2BNw1Hs4Vv%2FUof%2BCN%2F0zq72gfFlp2dU1FNvybnzgpXXMWWAm0U%2FwLZB8Nkiof5xI9&X-Amz-Signature=c2a49c5218fa02f6d489ba5ced674cb41ce38fe9285c98efc19892317ff92d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
