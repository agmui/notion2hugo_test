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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUJSNSOU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAGXrlYXtRw2My5IbwLP6oxNQVq1OMwX4XUdW37ke3J4AiAciGxYE5I%2B5D5PGVF0vjq2EDBIyIPH3v00rw2UAOS3HiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUv3rqAyB3ncMp9VJKtwDy5q604wWAarr0YvJducMyLvcB3XgnZirvGLEWJn8KuRXFyWqB%2FiWvjKC0ishsptTaoqV69%2F4KWEoNTR%2Fp7MJAwPoyMp%2BCjLfcehcnoUGtq9Gey7Dk5q1V5RLXOA%2FQtchGofdheJ%2FOikzVepKhbCvo8uFRmnUUPvHYx6h6i4Zw7W6a7lX5ZuphD5k5ZGTPky1l2HvAf6Qlv3Da7MbQtQlCcPGHtPcDPSW6hahNYkOPkD3gkekluIqc7KqYfZ7OTJ2Ndgxn2aYwvS1%2FGcc%2Ft0r%2FKHhf5Ip%2FFwdo%2F9U5xoSYRER6gOvYwCVndTRF%2BEvU7KlyyhWhKvivlub96QQOCJf0C5IVcuu%2B%2B%2BIJaASD2lyyxgsq%2BMCKsiNmGE1l6dAFaaf1mRWHQfKBFoMxwkgAOpsJ1nk7EtI9hKcNEJ4vkISsdgpw6YWVMNqCu7ekLmylsX9oxVn%2FiZdWWibkQm4lXsij5qS2gfRPYg9n5rcMh4GGrWqhECNquWYyo7PO0P8H54%2BhjBFapNqjy2ELQxxcwkcCpubxHQX4fgMBasQISB6F1K3QbIkpcLC%2FMUh7giC1aR0SUMcqqAeYYCyrYiH9bUli4XQo44qQ%2FE%2Fr%2FaERHTpBzJniXG9agdXOreTJRUw5ZejxAY6pgFr38sOqTbz6C6jVzGw%2Bq%2FUTew3v6c85WktzcRlLxIpfyTwWuAridufdnHs0gjceENSB5J8cVrCS4LRwbpsyMoTBS3kQI1Em9gQzD%2FzQNZreFTXsnfa3b8Nu3izDNV2w4qRNvGtawsmZJfH2VXaEhTpyZttk4Ghv3ogw7xGaG51x3gPC%2FyZh63wVnBiMdQoLOqSCQlVa0kyZgKaBEfP0ya5IYXaMehz&X-Amz-Signature=f5e02680701593cc090d961bfd0a6f29cdaf349c811a4a68ffbe585c0091a65b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUJSNSOU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAGXrlYXtRw2My5IbwLP6oxNQVq1OMwX4XUdW37ke3J4AiAciGxYE5I%2B5D5PGVF0vjq2EDBIyIPH3v00rw2UAOS3HiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUv3rqAyB3ncMp9VJKtwDy5q604wWAarr0YvJducMyLvcB3XgnZirvGLEWJn8KuRXFyWqB%2FiWvjKC0ishsptTaoqV69%2F4KWEoNTR%2Fp7MJAwPoyMp%2BCjLfcehcnoUGtq9Gey7Dk5q1V5RLXOA%2FQtchGofdheJ%2FOikzVepKhbCvo8uFRmnUUPvHYx6h6i4Zw7W6a7lX5ZuphD5k5ZGTPky1l2HvAf6Qlv3Da7MbQtQlCcPGHtPcDPSW6hahNYkOPkD3gkekluIqc7KqYfZ7OTJ2Ndgxn2aYwvS1%2FGcc%2Ft0r%2FKHhf5Ip%2FFwdo%2F9U5xoSYRER6gOvYwCVndTRF%2BEvU7KlyyhWhKvivlub96QQOCJf0C5IVcuu%2B%2B%2BIJaASD2lyyxgsq%2BMCKsiNmGE1l6dAFaaf1mRWHQfKBFoMxwkgAOpsJ1nk7EtI9hKcNEJ4vkISsdgpw6YWVMNqCu7ekLmylsX9oxVn%2FiZdWWibkQm4lXsij5qS2gfRPYg9n5rcMh4GGrWqhECNquWYyo7PO0P8H54%2BhjBFapNqjy2ELQxxcwkcCpubxHQX4fgMBasQISB6F1K3QbIkpcLC%2FMUh7giC1aR0SUMcqqAeYYCyrYiH9bUli4XQo44qQ%2FE%2Fr%2FaERHTpBzJniXG9agdXOreTJRUw5ZejxAY6pgFr38sOqTbz6C6jVzGw%2Bq%2FUTew3v6c85WktzcRlLxIpfyTwWuAridufdnHs0gjceENSB5J8cVrCS4LRwbpsyMoTBS3kQI1Em9gQzD%2FzQNZreFTXsnfa3b8Nu3izDNV2w4qRNvGtawsmZJfH2VXaEhTpyZttk4Ghv3ogw7xGaG51x3gPC%2FyZh63wVnBiMdQoLOqSCQlVa0kyZgKaBEfP0ya5IYXaMehz&X-Amz-Signature=be7c320508fe5927ab78b91ca23bfff2a7dd690639e1ebac3c30acfefc1bffa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
