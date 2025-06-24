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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAESXWYQ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIF7w4UjcA8mdecUz8DkLNn4liSybS1nsnUTlArCQ43M4AiAN%2B%2B1d6bFb2ry9MYSoRL%2F2iLkg8YfO25U4x6hIcD5rYCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMoRH%2BnJe%2FavZ1IZA4KtwDze4%2FAWT5GsX7ZTOBVHW81Z1BPcXP2jnvF3uPyw3mfIghEy7ZVlpceHZVcjP7e6%2FLubX8rnmiFkhKkGquQNQ3d%2FgzlcFGnUm0csiIG3hkSJhbbBEV8jUmw4qBa7HVdN%2FWXsRK%2BWS%2BhiZMbi%2FMSaWeibCYEdAXA1zvLMyEf%2F7PzQKnniSd803v2awO%2BgV8awPk4d1F5wH9fWD0BuR19s8HcKJPhGMrBo63r%2BpVXzzOiQ87WybRc%2FNMFe5pcg7BBBfF5RMUwQtuh4sUS8IQWnx820jb3CYI6cjRODJ3nB7HYMZE44gpb8ncf8aW%2BQ1l8jJlbPMaeo4sHxn8NeNPcekwuMklqJ9LigdOlcRvKEBvwCj6tzEXjyxTYD7gbCjJPPFZmv49VAhCSKH%2B4Nb9pZ66aVravJR%2BezxsuqcgmNQvZkJoyik125r%2B9RShpf0iDaP0YOmBsJeAYtzpcXzDh3NiCdI4eidrbeFile17bhZDBwZIljdF%2BAaatGutat8bIBZ5Frn3hLA6FBYULxCLXK7Hwg2X6gZf5NYFEPOlcTZZOZ2ZlTKfX7ZUQKLXayqohV39MqPIxBS9Kqd3WZ%2B%2BrEIqX3cmtaeMI1s%2BmPmIHjm%2F6qWAs5ZlTUXRFE%2B04dEw%2Bo%2FrwgY6pgHJ5xW72Wibtnc2xDUMCH3WSicUGGzDFUs2DIdgHIFlcVGG5lFQOsA6d2OCG8ZkLTfpJ07BMjSOeLjG2%2FwGvdq6NfZNZ7aqDTamErI2jpgUY7XIZPUGdSf0wFiyiLffKr7CvqJzIg5D2XPdCV1EjqdmFaT2BvNqiD3C1NRzagiYNbVt7GPzPpPdItyCQTL1oJ%2FREvjtgbgBzyI7UTJMduM1ubA6sGHQ&X-Amz-Signature=5bb3c1c7776e991f4d0a8e91f3416196d013c820dffd8b62a472e1f7eceed5f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAESXWYQ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIF7w4UjcA8mdecUz8DkLNn4liSybS1nsnUTlArCQ43M4AiAN%2B%2B1d6bFb2ry9MYSoRL%2F2iLkg8YfO25U4x6hIcD5rYCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMoRH%2BnJe%2FavZ1IZA4KtwDze4%2FAWT5GsX7ZTOBVHW81Z1BPcXP2jnvF3uPyw3mfIghEy7ZVlpceHZVcjP7e6%2FLubX8rnmiFkhKkGquQNQ3d%2FgzlcFGnUm0csiIG3hkSJhbbBEV8jUmw4qBa7HVdN%2FWXsRK%2BWS%2BhiZMbi%2FMSaWeibCYEdAXA1zvLMyEf%2F7PzQKnniSd803v2awO%2BgV8awPk4d1F5wH9fWD0BuR19s8HcKJPhGMrBo63r%2BpVXzzOiQ87WybRc%2FNMFe5pcg7BBBfF5RMUwQtuh4sUS8IQWnx820jb3CYI6cjRODJ3nB7HYMZE44gpb8ncf8aW%2BQ1l8jJlbPMaeo4sHxn8NeNPcekwuMklqJ9LigdOlcRvKEBvwCj6tzEXjyxTYD7gbCjJPPFZmv49VAhCSKH%2B4Nb9pZ66aVravJR%2BezxsuqcgmNQvZkJoyik125r%2B9RShpf0iDaP0YOmBsJeAYtzpcXzDh3NiCdI4eidrbeFile17bhZDBwZIljdF%2BAaatGutat8bIBZ5Frn3hLA6FBYULxCLXK7Hwg2X6gZf5NYFEPOlcTZZOZ2ZlTKfX7ZUQKLXayqohV39MqPIxBS9Kqd3WZ%2B%2BrEIqX3cmtaeMI1s%2BmPmIHjm%2F6qWAs5ZlTUXRFE%2B04dEw%2Bo%2FrwgY6pgHJ5xW72Wibtnc2xDUMCH3WSicUGGzDFUs2DIdgHIFlcVGG5lFQOsA6d2OCG8ZkLTfpJ07BMjSOeLjG2%2FwGvdq6NfZNZ7aqDTamErI2jpgUY7XIZPUGdSf0wFiyiLffKr7CvqJzIg5D2XPdCV1EjqdmFaT2BvNqiD3C1NRzagiYNbVt7GPzPpPdItyCQTL1oJ%2FREvjtgbgBzyI7UTJMduM1ubA6sGHQ&X-Amz-Signature=9d9fba6a3ed7d712440ab1758ea5d15d37ee7eb58c4c0a3e70c07075ccf2a1a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
