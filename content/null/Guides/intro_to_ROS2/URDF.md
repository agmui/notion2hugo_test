---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/URDF.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNNE3ATW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDE0ceynDy6Wd23OcY17J4bOQe1ItN1DUkU0cG7Tb9Q2AIhAL1JJtKknG7dPFy2cee%2BoCoBSnpyETluJTjB2S%2FKavtAKv8DCDcQABoMNjM3NDIzMTgzODA1IgwJTit6YkbAray1xy8q3AOkt%2B6ZlIsK5EWNRDwiou%2BfUWJJiOzhyFs7iLKo13zqg35skofICon6Q9Jr1PWdV6WhjL6CtOsD8snHvAHafHK8jabmKTKQlB6chtM93fZWe9BuFatCbyclUS0pz2vJkvh4hGjbM3%2BKt0haE2362nmVlztdnrrqeO2F9GCl%2BI2WruBLCKL48gY9UIVrwqxuuMYIqR2ShpIqztcyqfEIk%2FeI7EGWIGVCU%2FsvjJiRSDtSwB%2B%2FMaW979DqWqHtV0tPi8thQm1KPbqPyNWKtzYiIfNRRzqTAV7KUyhjnqKhNeYMvM7t3pZ3v2DFP%2BoiBophDiuh98lBUrLQRfOKl9uI8483iZIueDWCdWHYZdblHCuUQP69x8ZUECkZwCqKVxNaaz%2FjnAksWgo8OFG3m7adHWAAXH9yHNnktJ%2FJ%2BzzSqd7jceT0Jynqc%2Fobi9IKgKnAL2tGQ89lixzLgkAwUV1JOe2HlzYOpBrHhyCOW%2FmRldbHuPniIbqNJAM3bgYTs1lATb5p8kNPQu%2Fc5hyaFMwLeaUsoMJsX7xbrqgqEnrMyuuXd0nvkiwaxDGnie2YASIabbJg%2B%2BfiPcErIJUB%2B3ricWtWzd6Ea8kQ2UcnXN3bYDlfhowjDsRbk%2BulllwRHzD0lYq9BjqkAS2ylvUxy4oOt%2F60oGfhq%2BIsvF7lcWObui6W%2Fq6KIVUZTeVx2M0kcYC2R2WvYLc8YfKwMf7KMViAYP%2BuEBFyevYwqBU69OFSv8kDhguEzXpf%2BhBpRvjGJ7gb%2Bz%2FaH3wAS7DJ5aTQ%2BZrDRLpVHvcaH5zgqHBDAheO3VJxWJDDfKk2IZsync7SfB%2F6zC046wWhx69iVNM2haVYokx4qMoA8on%2BPqq0&X-Amz-Signature=a41ceee4571806741f1490f4808838d7ef6c8ed7013f8ee55dfd1849d81b6e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNNE3ATW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDE0ceynDy6Wd23OcY17J4bOQe1ItN1DUkU0cG7Tb9Q2AIhAL1JJtKknG7dPFy2cee%2BoCoBSnpyETluJTjB2S%2FKavtAKv8DCDcQABoMNjM3NDIzMTgzODA1IgwJTit6YkbAray1xy8q3AOkt%2B6ZlIsK5EWNRDwiou%2BfUWJJiOzhyFs7iLKo13zqg35skofICon6Q9Jr1PWdV6WhjL6CtOsD8snHvAHafHK8jabmKTKQlB6chtM93fZWe9BuFatCbyclUS0pz2vJkvh4hGjbM3%2BKt0haE2362nmVlztdnrrqeO2F9GCl%2BI2WruBLCKL48gY9UIVrwqxuuMYIqR2ShpIqztcyqfEIk%2FeI7EGWIGVCU%2FsvjJiRSDtSwB%2B%2FMaW979DqWqHtV0tPi8thQm1KPbqPyNWKtzYiIfNRRzqTAV7KUyhjnqKhNeYMvM7t3pZ3v2DFP%2BoiBophDiuh98lBUrLQRfOKl9uI8483iZIueDWCdWHYZdblHCuUQP69x8ZUECkZwCqKVxNaaz%2FjnAksWgo8OFG3m7adHWAAXH9yHNnktJ%2FJ%2BzzSqd7jceT0Jynqc%2Fobi9IKgKnAL2tGQ89lixzLgkAwUV1JOe2HlzYOpBrHhyCOW%2FmRldbHuPniIbqNJAM3bgYTs1lATb5p8kNPQu%2Fc5hyaFMwLeaUsoMJsX7xbrqgqEnrMyuuXd0nvkiwaxDGnie2YASIabbJg%2B%2BfiPcErIJUB%2B3ricWtWzd6Ea8kQ2UcnXN3bYDlfhowjDsRbk%2BulllwRHzD0lYq9BjqkAS2ylvUxy4oOt%2F60oGfhq%2BIsvF7lcWObui6W%2Fq6KIVUZTeVx2M0kcYC2R2WvYLc8YfKwMf7KMViAYP%2BuEBFyevYwqBU69OFSv8kDhguEzXpf%2BhBpRvjGJ7gb%2Bz%2FaH3wAS7DJ5aTQ%2BZrDRLpVHvcaH5zgqHBDAheO3VJxWJDDfKk2IZsync7SfB%2F6zC046wWhx69iVNM2haVYokx4qMoA8on%2BPqq0&X-Amz-Signature=19cfba3b44a29da07379bfa7b57cfc115f29ef0d45825a1aa29985979d5d2f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
