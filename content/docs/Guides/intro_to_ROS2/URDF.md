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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIWTA6Q2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICiCgDTl6rEFLlsivSs3dNTKsDEipME7k%2FqM4cNq6ZiIAiEA5dStdGBJnO0fpdw5HycMJsjOCXz0G8SC81MAGKGT1W0q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFpBWSR8J0SlXCXB4SrcAzcjATp99bxhZAyRpM5MWSNIuk8BPUM%2FmCsw9II5APwLnu2ECoRXlaFFk0AyVjKYfdO%2FUXLpToc0CdG9Th6SgXjjHGK%2BMTn9%2BtWc46wct2Xz7UF%2F5uADMdnUu%2FnqBC3URsS5NiGXiajOGOEfLCqH7xUz9HnR4HtTglGUInVawk7%2B7V8KDIhTLyaulrxUtsf%2BcEgrHunZ4L11NyCbOYg3MzPnWLicb4SXddE3xdUcn6Fdd%2BfmzuNvhwwhdp%2BskZdJFnaxwBvHoUsu1euIPUVaMgkdAPc0r0JSm2jKL7qIhipXp5und8Kvd%2F6gxExsqh%2BlnQDAYU4qGdLyyhNKmZpbcrZY4dxy5HRW%2FcaWLEB2TOB9NbFoa7eGBeqvkU7t92E6n8NQsXClr300g2wf3Oyu0e04nG7OFF5PdvmFRMuUcLk55CUzKdSYpaW5v%2Bu94ZOGwiUFbr28z68Dlmi7UbWWF8DjKYNb4sP9Zu944%2Ba%2B5mdu5eRApbVJKIteqH6x%2FGYHUgcqzwWgwQdc59dAWUsWivj%2F4yCzcu8d3jSG2zwnmTyXHxRSGPf0ft4OQdvXhEX9BNr0xncx8YrUYJHhZhOsm8h3RfUpIRFS5soDL03CTsiRt15sAoD3gpwgDqDzMNOEqcAGOqUB%2F5%2F9v6sBdVOGumpz4K6JPF4rush3t%2BTA%2BPzYF7V2moI66N47W0Vr8sdlcAOv8Ynqrlsl48a6kqCBRA0A5aXd4JCJjgAZgVvtzo%2BKcof4KeLqIenwnkbTKDm%2BtJ6YX%2Bhrt09k7Gl3T17NJ6S%2BgZUVqjUh%2BgFepaKFNrtFCT61R%2Bv0e6gHiQUpw3DLScqrSzem2j%2Fhu2nZZ73Iy%2Fq0VYBhvnHonh3g&X-Amz-Signature=330893b79d964d6ddc6f1bb96989814f5dc6c32ac5e57d22e146f2bb9612f8d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIWTA6Q2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICiCgDTl6rEFLlsivSs3dNTKsDEipME7k%2FqM4cNq6ZiIAiEA5dStdGBJnO0fpdw5HycMJsjOCXz0G8SC81MAGKGT1W0q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFpBWSR8J0SlXCXB4SrcAzcjATp99bxhZAyRpM5MWSNIuk8BPUM%2FmCsw9II5APwLnu2ECoRXlaFFk0AyVjKYfdO%2FUXLpToc0CdG9Th6SgXjjHGK%2BMTn9%2BtWc46wct2Xz7UF%2F5uADMdnUu%2FnqBC3URsS5NiGXiajOGOEfLCqH7xUz9HnR4HtTglGUInVawk7%2B7V8KDIhTLyaulrxUtsf%2BcEgrHunZ4L11NyCbOYg3MzPnWLicb4SXddE3xdUcn6Fdd%2BfmzuNvhwwhdp%2BskZdJFnaxwBvHoUsu1euIPUVaMgkdAPc0r0JSm2jKL7qIhipXp5und8Kvd%2F6gxExsqh%2BlnQDAYU4qGdLyyhNKmZpbcrZY4dxy5HRW%2FcaWLEB2TOB9NbFoa7eGBeqvkU7t92E6n8NQsXClr300g2wf3Oyu0e04nG7OFF5PdvmFRMuUcLk55CUzKdSYpaW5v%2Bu94ZOGwiUFbr28z68Dlmi7UbWWF8DjKYNb4sP9Zu944%2Ba%2B5mdu5eRApbVJKIteqH6x%2FGYHUgcqzwWgwQdc59dAWUsWivj%2F4yCzcu8d3jSG2zwnmTyXHxRSGPf0ft4OQdvXhEX9BNr0xncx8YrUYJHhZhOsm8h3RfUpIRFS5soDL03CTsiRt15sAoD3gpwgDqDzMNOEqcAGOqUB%2F5%2F9v6sBdVOGumpz4K6JPF4rush3t%2BTA%2BPzYF7V2moI66N47W0Vr8sdlcAOv8Ynqrlsl48a6kqCBRA0A5aXd4JCJjgAZgVvtzo%2BKcof4KeLqIenwnkbTKDm%2BtJ6YX%2Bhrt09k7Gl3T17NJ6S%2BgZUVqjUh%2BgFepaKFNrtFCT61R%2Bv0e6gHiQUpw3DLScqrSzem2j%2Fhu2nZZ73Iy%2Fq0VYBhvnHonh3g&X-Amz-Signature=f530ae42556f519ba13fa538b0d0006efdafddc16b615ecc288c6157503b14e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
