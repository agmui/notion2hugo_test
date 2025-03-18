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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V55JDNHJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCV9i%2Bgnrpk2nugB9dVfxgaHfDcppyAI3qqTlxvODFx9QIhAI1kG5Opr9n8J8vRm6T%2FWgEAP2W%2B5MAKayH9%2BhBNNu%2BTKv8DCGUQABoMNjM3NDIzMTgzODA1Igy9qDrkeEXSb3bXO7wq3AM%2Bkkc8A7Z638%2BgpEmOwX5U51KZDXgd719XEhGaa9By%2Fyr3nRRnijOzM%2Fdd6QEOEXkb7l3fytEh7SurvJ2A1NSRTThJ1J0csCKNFpIqP4c91AQXCyfXjebZTY%2BeSReY7Z450ZdBbTah5FHBBM3q%2FFq1vpDCiFF8GkIFTPdh3KMH4ubtvB%2BVfub8Ixr2JQOf4gjJ5Mmbw5Vum%2FTmQJgChsQKyuGeCh5wTD4wmpONok1rUY9Ym8SNCZdznmZGdZJ7MthdZOw0yd6R63W0DL%2B0U6GY3w%2BdSdcRUnDp4I85169yWgmO5uZhTRBNtOnUxdrwlXhAVxwYdgzsU7OQnNQtUKzv3XWyMEJlT7hOJ1MjODdpMHVsiitgHAFzhW%2BoaHpWDNZuuCSrgcrzhdUylyMlT6ZIim0aWhmogwqET9KuT%2FQ76vz4C95%2Bbj%2F%2F4ZCDvOESKSX%2FKOrt%2BlILREnkIJqym5cYpEvXdGEgdR52yldCzH%2FZIUaQVT%2Ft2um7ZEmsFk7%2FQoPkcnXBqXE%2BJWu9OiLefDsFH93mOpDNE2yfBkt5WpGlssvwB%2Bry6Nx8SPiHwtFsYtsvksg%2FHJrPqLM5tHvWSIboC0hnT8wkwc6uoVzDdTTvNpRmG62aEW2f278Q2jCHkee%2BBjqkASexPVRLcULeGcdIOSbarzWvH4FkDbuXo%2BI8kHobZrMdsauDSD21yZDBJhLBIyIzSnkQjopALq%2FW76JuPBBAOkH%2BT60eaCw93v8ejmoIOjK3S%2B3KdvISP2OUT9xEFzyFEA%2FVIZuhd577SMJtR16y2S2ZApHAsLfqXVuB9a7AZlXXN0ZtO9yin8kWXUEbhaNA9P2WGywfmXKKdV21ec5A2cMJnNIl&X-Amz-Signature=15327f0b450ee09bee4861c071575fe9f6979950607284b871a68f930a7edd23&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V55JDNHJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCV9i%2Bgnrpk2nugB9dVfxgaHfDcppyAI3qqTlxvODFx9QIhAI1kG5Opr9n8J8vRm6T%2FWgEAP2W%2B5MAKayH9%2BhBNNu%2BTKv8DCGUQABoMNjM3NDIzMTgzODA1Igy9qDrkeEXSb3bXO7wq3AM%2Bkkc8A7Z638%2BgpEmOwX5U51KZDXgd719XEhGaa9By%2Fyr3nRRnijOzM%2Fdd6QEOEXkb7l3fytEh7SurvJ2A1NSRTThJ1J0csCKNFpIqP4c91AQXCyfXjebZTY%2BeSReY7Z450ZdBbTah5FHBBM3q%2FFq1vpDCiFF8GkIFTPdh3KMH4ubtvB%2BVfub8Ixr2JQOf4gjJ5Mmbw5Vum%2FTmQJgChsQKyuGeCh5wTD4wmpONok1rUY9Ym8SNCZdznmZGdZJ7MthdZOw0yd6R63W0DL%2B0U6GY3w%2BdSdcRUnDp4I85169yWgmO5uZhTRBNtOnUxdrwlXhAVxwYdgzsU7OQnNQtUKzv3XWyMEJlT7hOJ1MjODdpMHVsiitgHAFzhW%2BoaHpWDNZuuCSrgcrzhdUylyMlT6ZIim0aWhmogwqET9KuT%2FQ76vz4C95%2Bbj%2F%2F4ZCDvOESKSX%2FKOrt%2BlILREnkIJqym5cYpEvXdGEgdR52yldCzH%2FZIUaQVT%2Ft2um7ZEmsFk7%2FQoPkcnXBqXE%2BJWu9OiLefDsFH93mOpDNE2yfBkt5WpGlssvwB%2Bry6Nx8SPiHwtFsYtsvksg%2FHJrPqLM5tHvWSIboC0hnT8wkwc6uoVzDdTTvNpRmG62aEW2f278Q2jCHkee%2BBjqkASexPVRLcULeGcdIOSbarzWvH4FkDbuXo%2BI8kHobZrMdsauDSD21yZDBJhLBIyIzSnkQjopALq%2FW76JuPBBAOkH%2BT60eaCw93v8ejmoIOjK3S%2B3KdvISP2OUT9xEFzyFEA%2FVIZuhd577SMJtR16y2S2ZApHAsLfqXVuB9a7AZlXXN0ZtO9yin8kWXUEbhaNA9P2WGywfmXKKdV21ec5A2cMJnNIl&X-Amz-Signature=fb4fc860d3e78e0fc132af01082a5764ec1e736e313315b4ae4310541c652a6a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
