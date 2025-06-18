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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRE5KLZV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5qcbPiJsdTAsynxA1Hqh7h1JLGSoKTNZT%2FKilkqwztwIhAMxOgUDBmVCLE8FPzRnavVfU7xNP0DXRTJncqq6GddT5KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8cdKveU9Zq5HsjMEq3APyvUteS10K8LTVFeEBOsQ0K0RaqpGShoWzEx%2F0sqJC7x%2FMsOh%2Bh1%2Bh1Eiidx0kQMLRqc1NnpM4%2BC7dZe%2F%2BxdLKuEnD%2BMlNHC6YnuWv4ob9mqWSijf6XaLKiDWkh2GkgjWksQ2roAJKY2KGVzq3LbXdpL6jYsR6lqD9VUkmcwaN2V09BZjcBu71poyp68EzZ5J79EdeQMQekJ9yYzwWIaDanc8fKl9lCwNXLI%2B61Pr5Z1yvpSA7MFgtGx0DKjfu79TTPkXVK%2BdB1ecP1ajnRscVwG2Iq4qg8yeqAeZyxOSBriL%2BztM17pAdOeReT7mfAFN4bsgypqbpN%2FgpoqW%2Fzbep7PlbGKWuT%2Fj2CEKMbU%2FPceUvz%2F3oZ1pKHocdRDTqGrLB%2FTmg6UGnSCwWpnt0HfbmnDOhEMblNJ0gMzosGxpIS4fleNH3Kt7kEd6VB4CTzbfVDG8bvjRUcSmDrMwNLZnz0k%2FF%2FvuSdNzCsIbW9G8yT0OmtAUDA9zCDVJrMDdBd4z2y0MdXfKaDNJeuDPn6vT86fYrqPwYW3C6pfYSXTnWor78L6mhuDxbcccWgqxPyHeUozuEvHdr2q5aiXiGVm7x4PjhwWdy%2BO6w1mvs3pJpGhQgijCm2nEBBH3ghjDb9MrCBjqkAbIz%2F7vkmPTfmZyVIMN0cAzPDVTTDgsW0zt6wQKzqyRUME2KdiK6%2FGXt1A0iilZAlMMu9purdIn%2BziVDCS1mFjpS69v1GoO7JdDUzyivQm%2BDPO%2B9ydjNec%2FKGQ6LrPjZcauAqxY2xemc9PDBw78hoFciE%2BcpOiWxbxQ3mxXGmVocpmD3GVF6oMS%2BM869KH6Jr412DaAY9j%2FQJSCQ%2Ftow7E99Nd8x&X-Amz-Signature=0cb07fe54abf824d2673a54a39aef83649de2c6efd40abb1b8f11d9c9e4513ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRE5KLZV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5qcbPiJsdTAsynxA1Hqh7h1JLGSoKTNZT%2FKilkqwztwIhAMxOgUDBmVCLE8FPzRnavVfU7xNP0DXRTJncqq6GddT5KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8cdKveU9Zq5HsjMEq3APyvUteS10K8LTVFeEBOsQ0K0RaqpGShoWzEx%2F0sqJC7x%2FMsOh%2Bh1%2Bh1Eiidx0kQMLRqc1NnpM4%2BC7dZe%2F%2BxdLKuEnD%2BMlNHC6YnuWv4ob9mqWSijf6XaLKiDWkh2GkgjWksQ2roAJKY2KGVzq3LbXdpL6jYsR6lqD9VUkmcwaN2V09BZjcBu71poyp68EzZ5J79EdeQMQekJ9yYzwWIaDanc8fKl9lCwNXLI%2B61Pr5Z1yvpSA7MFgtGx0DKjfu79TTPkXVK%2BdB1ecP1ajnRscVwG2Iq4qg8yeqAeZyxOSBriL%2BztM17pAdOeReT7mfAFN4bsgypqbpN%2FgpoqW%2Fzbep7PlbGKWuT%2Fj2CEKMbU%2FPceUvz%2F3oZ1pKHocdRDTqGrLB%2FTmg6UGnSCwWpnt0HfbmnDOhEMblNJ0gMzosGxpIS4fleNH3Kt7kEd6VB4CTzbfVDG8bvjRUcSmDrMwNLZnz0k%2FF%2FvuSdNzCsIbW9G8yT0OmtAUDA9zCDVJrMDdBd4z2y0MdXfKaDNJeuDPn6vT86fYrqPwYW3C6pfYSXTnWor78L6mhuDxbcccWgqxPyHeUozuEvHdr2q5aiXiGVm7x4PjhwWdy%2BO6w1mvs3pJpGhQgijCm2nEBBH3ghjDb9MrCBjqkAbIz%2F7vkmPTfmZyVIMN0cAzPDVTTDgsW0zt6wQKzqyRUME2KdiK6%2FGXt1A0iilZAlMMu9purdIn%2BziVDCS1mFjpS69v1GoO7JdDUzyivQm%2BDPO%2B9ydjNec%2FKGQ6LrPjZcauAqxY2xemc9PDBw78hoFciE%2BcpOiWxbxQ3mxXGmVocpmD3GVF6oMS%2BM869KH6Jr412DaAY9j%2FQJSCQ%2Ftow7E99Nd8x&X-Amz-Signature=08529f0593fcf7cb3981461f596c94b1e8d20d8ca48afe0eeee200dcf64eddd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
