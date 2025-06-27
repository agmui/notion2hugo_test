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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KMTIIF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1bMiQlYZDCpg4RaJeo2Dt7GJODYC%2F3BqwXnW2H9tHDAiEArDO7ufyf3ah1CzVpq2u1oOW7V3BWseuDx2UPIZDTrGMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLms5bzsMYyXf5%2FwSCrcA679tRLRu3XeRgk4IgyMHtLusHaxKQQrtK2qeqjOmloqVukIwRbzFcl%2FCdDGmfuyRcuurVzw9favjP%2FTKTR9rMfHKOvfPu%2FL9norkR%2FdBCUjaaS3T29VTQNPQMQyWDqKaW7HLNI771UnESdKiOrijAo1JsBponRtTMQ%2FFxSMLC%2BPWTK5Wdmjn2Bq%2FfvX22LL95ToZkwXRnNP6EiQ%2BQFLDeZbQEIL9lEYvZD%2Blc3dI29diF1txNyt9RCmziVJJOu2OyPxlCoOjeLgSP6qorCA6MuXm0HFQq1THzwq%2FqYfrLblaoI3tYksQSs0zBOI983FVwEvWPvf1dwmCtnaAq9wCGAF%2FBiO9GGKOVnrmBetJmYyZpyamHOpS8nNr5QGuw9EUtMxrroUS02qCsFWi1A1dI0pASU%2BlSfgDRzyNySoQd7EkSyL7iog19qNZPdpc1g6Y6vf4j5LpDNERXI6qBx4TfXvxyP7unwRRqpMQA9abbd2XXdtF3yAH3vl1xUmbQa3MQ4wVJG9uNqorr2Z2zjxOmoMZlhtIzjazaRZg2UyPPcxx7oWFfGx%2Bbz0HfTnEgeoklMmZLcbFNVoO9TD7YvdzRHGCXxEaMRh2nvib46IBqLtTb%2F48KNIxC56EQc4MPvK%2B8IGOqUB1S3DktiIBIE2p60YE24a4%2FAW4BxGS8jpABZxSDYN%2BWYN%2BWla3cLJkb94lBARK4UVMQO18UyRggnI4LkhXQaxRZzGvhqEYsOviMm%2FUzZ0MqsNiw%2B9PugQzg9oB19MoNfA0ewEwMtqFk9frg8glmXj5gOkiX8ins%2Fq6%2BGTXF5oIHKRnfn6%2BV2ft4%2BRjMtnXkhyS8pMvHTf3UicW4tRMuHwWlgiGlFK&X-Amz-Signature=6e7d18fe08676db103f572faf56273a5a796b4b4264c1cffc88baa3de0aec54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KMTIIF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1bMiQlYZDCpg4RaJeo2Dt7GJODYC%2F3BqwXnW2H9tHDAiEArDO7ufyf3ah1CzVpq2u1oOW7V3BWseuDx2UPIZDTrGMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLms5bzsMYyXf5%2FwSCrcA679tRLRu3XeRgk4IgyMHtLusHaxKQQrtK2qeqjOmloqVukIwRbzFcl%2FCdDGmfuyRcuurVzw9favjP%2FTKTR9rMfHKOvfPu%2FL9norkR%2FdBCUjaaS3T29VTQNPQMQyWDqKaW7HLNI771UnESdKiOrijAo1JsBponRtTMQ%2FFxSMLC%2BPWTK5Wdmjn2Bq%2FfvX22LL95ToZkwXRnNP6EiQ%2BQFLDeZbQEIL9lEYvZD%2Blc3dI29diF1txNyt9RCmziVJJOu2OyPxlCoOjeLgSP6qorCA6MuXm0HFQq1THzwq%2FqYfrLblaoI3tYksQSs0zBOI983FVwEvWPvf1dwmCtnaAq9wCGAF%2FBiO9GGKOVnrmBetJmYyZpyamHOpS8nNr5QGuw9EUtMxrroUS02qCsFWi1A1dI0pASU%2BlSfgDRzyNySoQd7EkSyL7iog19qNZPdpc1g6Y6vf4j5LpDNERXI6qBx4TfXvxyP7unwRRqpMQA9abbd2XXdtF3yAH3vl1xUmbQa3MQ4wVJG9uNqorr2Z2zjxOmoMZlhtIzjazaRZg2UyPPcxx7oWFfGx%2Bbz0HfTnEgeoklMmZLcbFNVoO9TD7YvdzRHGCXxEaMRh2nvib46IBqLtTb%2F48KNIxC56EQc4MPvK%2B8IGOqUB1S3DktiIBIE2p60YE24a4%2FAW4BxGS8jpABZxSDYN%2BWYN%2BWla3cLJkb94lBARK4UVMQO18UyRggnI4LkhXQaxRZzGvhqEYsOviMm%2FUzZ0MqsNiw%2B9PugQzg9oB19MoNfA0ewEwMtqFk9frg8glmXj5gOkiX8ins%2Fq6%2BGTXF5oIHKRnfn6%2BV2ft4%2BRjMtnXkhyS8pMvHTf3UicW4tRMuHwWlgiGlFK&X-Amz-Signature=6cd521474c657d7d82db7a39cdedfbee344029e3f64465ca1fddf4af75f439e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
