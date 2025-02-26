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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQM5QV3Z%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD6eJP6LZnR%2By18Tss3V%2F7%2BtQhtvg3o3Kzv68lMNS33QgIhAKYUnTJptyOIB9d6vpYZkLlnEC70fpd8q4PZTCkSls%2BdKv8DCF0QABoMNjM3NDIzMTgzODA1IgwKz5b5YJxWW3j6Kpgq3AODgnEWn4KGvRYt6XNZlGyYf%2F6vL7hGZ9%2FgJe0totxcFL56k5w2DE57213Hrs10kjK%2FWoCiwWqDB%2FgTqnEE0popr%2BVSFTf9576grZXxxGLzyGWO0qhHyOJ6f2v9mAy9Cor0TQ%2B91Kk5mRcQ0ylg66RllA8NhXFqRAI%2Bj2CroA7rJW9ZL%2Bth0Bsml1z7xNIdNYX%2B3oSfdDcneWO73ouNMK%2FNdQl1QeyLY6A3CCl4vBTEP%2BuLnJL75znbluFvPsgHpNaltm3HTm92PBasZaBIdjFaN%2F9wImPnx3jwh2v%2FSkfelE8QtTBacq6odTjCE%2FbPQPB90wZNaI3BcLckcG396wVXWHdeJp9j5q%2Bz2j0AEUbo0XE1nfzg8yo8BBKWxru6SnJkUzo71M4mE%2BXVFB6pGMmXinCq3%2BCjGhnEiHoC14Ua14svCA6nSQ03rnHrSVkyGSAbCKSq%2FyUHheoTBDXvnwDysS6clCsTau8Yw1P%2FZ74RcPdw8Y0REbT3W8OXE3kLVagqw%2BckPhNOUA4SLCNckSezY%2FcplMzBdQXoHKAR0LfdqSTXCIhlBy1%2FaST%2BEMaTyX7gC%2Bkra2A%2BzefsfLqZex6UuGoUWubtpl5IakN%2BgXZIr95MGydYhbXC4scAzTCPify9BjqkAcszgNRs3%2B1IuTqYRppHn7dCXNFp2rWLb91BjOiwQumUPjXXWPQ3t7MQ6X%2FzqzgYUskUWVh9bvnigQq%2BacHjGaq8rnLezKGBYnPkHfI%2BcKf5RVHiknB7IqjK5SrOxsxPeXAFyKro%2FUNMbt9QAU6dMHz0l90P5LF8TJBUdw7NFaijx9gjTdLEcbA9FRVxPNN2ymtBDKFD5utkXjsdnQx6%2Fye5RRQb&X-Amz-Signature=932d5bad0f911612df03560cc1e71afba41ea5682a33fb5d1ae97f6e33ee96ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQM5QV3Z%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD6eJP6LZnR%2By18Tss3V%2F7%2BtQhtvg3o3Kzv68lMNS33QgIhAKYUnTJptyOIB9d6vpYZkLlnEC70fpd8q4PZTCkSls%2BdKv8DCF0QABoMNjM3NDIzMTgzODA1IgwKz5b5YJxWW3j6Kpgq3AODgnEWn4KGvRYt6XNZlGyYf%2F6vL7hGZ9%2FgJe0totxcFL56k5w2DE57213Hrs10kjK%2FWoCiwWqDB%2FgTqnEE0popr%2BVSFTf9576grZXxxGLzyGWO0qhHyOJ6f2v9mAy9Cor0TQ%2B91Kk5mRcQ0ylg66RllA8NhXFqRAI%2Bj2CroA7rJW9ZL%2Bth0Bsml1z7xNIdNYX%2B3oSfdDcneWO73ouNMK%2FNdQl1QeyLY6A3CCl4vBTEP%2BuLnJL75znbluFvPsgHpNaltm3HTm92PBasZaBIdjFaN%2F9wImPnx3jwh2v%2FSkfelE8QtTBacq6odTjCE%2FbPQPB90wZNaI3BcLckcG396wVXWHdeJp9j5q%2Bz2j0AEUbo0XE1nfzg8yo8BBKWxru6SnJkUzo71M4mE%2BXVFB6pGMmXinCq3%2BCjGhnEiHoC14Ua14svCA6nSQ03rnHrSVkyGSAbCKSq%2FyUHheoTBDXvnwDysS6clCsTau8Yw1P%2FZ74RcPdw8Y0REbT3W8OXE3kLVagqw%2BckPhNOUA4SLCNckSezY%2FcplMzBdQXoHKAR0LfdqSTXCIhlBy1%2FaST%2BEMaTyX7gC%2Bkra2A%2BzefsfLqZex6UuGoUWubtpl5IakN%2BgXZIr95MGydYhbXC4scAzTCPify9BjqkAcszgNRs3%2B1IuTqYRppHn7dCXNFp2rWLb91BjOiwQumUPjXXWPQ3t7MQ6X%2FzqzgYUskUWVh9bvnigQq%2BacHjGaq8rnLezKGBYnPkHfI%2BcKf5RVHiknB7IqjK5SrOxsxPeXAFyKro%2FUNMbt9QAU6dMHz0l90P5LF8TJBUdw7NFaijx9gjTdLEcbA9FRVxPNN2ymtBDKFD5utkXjsdnQx6%2Fye5RRQb&X-Amz-Signature=a12affa21cc2cb428ecd9a6c264d9d74b9b7cff3ccaf0ff6e43c0a81fd0ea459&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
