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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3KJ6POM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGm2UNVN5n0XXJOpk5gNABqWz0CgYQ5bVvejLGwaISvpAiEAsewNIWoKrEEHmd5K9odfOf18rzwgRJRT26WlPMdX5zcq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNfNFKS6tp2ffihRwircA5Ui6bzbhGMl4p6MHz1Hm%2Bi2tPpM5bKNp9rEEZzVjRZq4eRssP02iU4GKxe2RjYhwN2rhrhLL0VN%2BoQ8qFPng7xJ4YQ7cn1yLjmPnrlZxgTQrMRGpNbp%2FTdhmGM8YvjCS5rmZZU5u6i4BPJDiB3zF1EZkRpVRJHdR25mVvAOcrmXImF4iDtnT8VBJ%2FEWSC4OQ6cW0J4soHo9hCmmIZxSxuy4CF21y%2Fh8Avyz1pUtYn9lIyXG%2BNYUJ1tlljLugRbk%2F%2F7diyTntjN%2FCd4qdolEstEU9E4nK7%2FO%2FSlBrx2Je63sP2cToi8Rcj85QqjaFq8vtx3M2aqYJXgaPNFFUESgjHwnNZNhTplo7H3RfkgMeZzNXppw8r%2BLqshYMEsJarV9p5ViCAAh2dfFkGAXssluY3D4hs5Ab1rxqmzLZisGp9g%2BJpkYQArBElwxjTvah6taRPvfADXVqJaz271q%2FbMy59hUjzvGtgKvsJYpP%2FV27ZoCXH7Dny6BJLOtn8zbIe6u573XdXarwN9DLB4KTOqgg8cOD2ubVARK6ykM0nRDbU7HYEAeXIBzRPl2TuEzh5AfnYdLJOD4I%2Fskv7iZZn%2FkWEjVqo9yWV9jlJRrJxDq1ID%2FtZgs5TgvecrtFGtUMJap8sIGOqUBKDtg6mo3AV2TTVvgiO1OmgpO%2B4qHZFvwXWdZiQ1mXUKYWs5g1fjvJFokYDYBnPdh8dZ0cCmrFmvxsPT4fqgo9zzhssJieRRYN6v4gyXt5ITpUd%2F6hBHo2Nd3ifcICfn1sHweUyshZKl0pTgQEA%2BCXFUiiHxQRgbdd4D1XXBa1Wt%2Bn1MZhWk5qzzVEQPqJUUdaRHzNq3GeP44V12TworMvFUzIefX&X-Amz-Signature=76a655e4237153c53cddd4fa8eafb154ed829742d1840eca8a5cc3036ee81de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3KJ6POM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGm2UNVN5n0XXJOpk5gNABqWz0CgYQ5bVvejLGwaISvpAiEAsewNIWoKrEEHmd5K9odfOf18rzwgRJRT26WlPMdX5zcq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNfNFKS6tp2ffihRwircA5Ui6bzbhGMl4p6MHz1Hm%2Bi2tPpM5bKNp9rEEZzVjRZq4eRssP02iU4GKxe2RjYhwN2rhrhLL0VN%2BoQ8qFPng7xJ4YQ7cn1yLjmPnrlZxgTQrMRGpNbp%2FTdhmGM8YvjCS5rmZZU5u6i4BPJDiB3zF1EZkRpVRJHdR25mVvAOcrmXImF4iDtnT8VBJ%2FEWSC4OQ6cW0J4soHo9hCmmIZxSxuy4CF21y%2Fh8Avyz1pUtYn9lIyXG%2BNYUJ1tlljLugRbk%2F%2F7diyTntjN%2FCd4qdolEstEU9E4nK7%2FO%2FSlBrx2Je63sP2cToi8Rcj85QqjaFq8vtx3M2aqYJXgaPNFFUESgjHwnNZNhTplo7H3RfkgMeZzNXppw8r%2BLqshYMEsJarV9p5ViCAAh2dfFkGAXssluY3D4hs5Ab1rxqmzLZisGp9g%2BJpkYQArBElwxjTvah6taRPvfADXVqJaz271q%2FbMy59hUjzvGtgKvsJYpP%2FV27ZoCXH7Dny6BJLOtn8zbIe6u573XdXarwN9DLB4KTOqgg8cOD2ubVARK6ykM0nRDbU7HYEAeXIBzRPl2TuEzh5AfnYdLJOD4I%2Fskv7iZZn%2FkWEjVqo9yWV9jlJRrJxDq1ID%2FtZgs5TgvecrtFGtUMJap8sIGOqUBKDtg6mo3AV2TTVvgiO1OmgpO%2B4qHZFvwXWdZiQ1mXUKYWs5g1fjvJFokYDYBnPdh8dZ0cCmrFmvxsPT4fqgo9zzhssJieRRYN6v4gyXt5ITpUd%2F6hBHo2Nd3ifcICfn1sHweUyshZKl0pTgQEA%2BCXFUiiHxQRgbdd4D1XXBa1Wt%2Bn1MZhWk5qzzVEQPqJUUdaRHzNq3GeP44V12TworMvFUzIefX&X-Amz-Signature=b8f1940c3d1710a647c26429a728f07522d64b159442629ee05af19a16b60f48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
