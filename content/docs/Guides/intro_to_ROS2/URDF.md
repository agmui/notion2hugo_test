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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAD7WQX2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCB9%2FTF4jlNjl702Bx4JyWbfmkOGlPFAtvswVuKaZo1ugIgLC4LYgzDXgiXk5MFaZs2A%2BcsM%2BDyjZkyQRo52rlCBOgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDPPTKqNOgiouuvPLByrcAzFBiOz6NwZSxXxH6d05lUOKqPeiwPI01VacYgfa30yb5U4hWs%2BiKr1VhTJmXd1se9XAiYIXnK45aQhMLWWGEK20GGkNXU5AOck4xO8qCCIIhVI3We52RapWRXU88vhVcChoKhZ%2FWniF24v8iLTdc929Kbps7xHIiccLeFNJ2OeZMUJTq2EZYuxkKdBQfwG%2FVNYruHOJaHS0ugc4pcQtrNMd0jcge04LIzI%2F7375UC757uyywj177bKYYGot%2B%2B12TFz8R2amAJrIEaUSENi5KNtRyY1pb0C9Ny0KNb9%2FZ6JiTG0sbJFOBJTBXTIOrxwEF4S9f8Q1z3cRRlDdWx19%2FC4euUKvJZ3M3RaIrUfJuPIg8aeLqyeCVGWucvzZKonVBM2RxoGFd3VNf3Dsgm5GlrspV2WKuelE8r2bSs3lScd2h2zMugs6z7BtRy3wbJaACdUkLcYn8n9gi%2B4plDea%2BC7koQkSUeu4VGA1Nj1rljl3djqeXzp%2FHu7ZGVJ1o0BRSpa%2BfRTvw2KLNOsO5gxDcSZXeJWL53q6n5MuSym%2FiB2CS5bcpzG3ySTHy8uEwdVPtNeFxvJ7jATokqoygy4CYTCkXQ2L1eZIxGzBNIqHW16S0Be47Hm7Y1vYH9jqMKimo8MGOqUB8CEJ7zAviBsMGQqCX3ul9iFNykzpXmSXMPmf0BPD7OGUF1UuNuBUA4uQ%2FjvlklghMd2Sa93OVu5RzNNxMXxRIl%2BhIfJAXLZEVzhnOSA3hJiyfblmCYEg1AX8pt6EX9%2B6qUqmO3Q%2FYbpU6U0vz7p5VYdbJElYFSG1J30Y66aSvbprPvBpeNflTTOBodVWhvDpzKN8JK6nWoiYKUIk%2BXGqAu6gPwpz&X-Amz-Signature=e88f1979e7537d1c08f4e8e5f2df066ea14d71e467fd9dad1cf6821cfe9688e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAD7WQX2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCB9%2FTF4jlNjl702Bx4JyWbfmkOGlPFAtvswVuKaZo1ugIgLC4LYgzDXgiXk5MFaZs2A%2BcsM%2BDyjZkyQRo52rlCBOgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDPPTKqNOgiouuvPLByrcAzFBiOz6NwZSxXxH6d05lUOKqPeiwPI01VacYgfa30yb5U4hWs%2BiKr1VhTJmXd1se9XAiYIXnK45aQhMLWWGEK20GGkNXU5AOck4xO8qCCIIhVI3We52RapWRXU88vhVcChoKhZ%2FWniF24v8iLTdc929Kbps7xHIiccLeFNJ2OeZMUJTq2EZYuxkKdBQfwG%2FVNYruHOJaHS0ugc4pcQtrNMd0jcge04LIzI%2F7375UC757uyywj177bKYYGot%2B%2B12TFz8R2amAJrIEaUSENi5KNtRyY1pb0C9Ny0KNb9%2FZ6JiTG0sbJFOBJTBXTIOrxwEF4S9f8Q1z3cRRlDdWx19%2FC4euUKvJZ3M3RaIrUfJuPIg8aeLqyeCVGWucvzZKonVBM2RxoGFd3VNf3Dsgm5GlrspV2WKuelE8r2bSs3lScd2h2zMugs6z7BtRy3wbJaACdUkLcYn8n9gi%2B4plDea%2BC7koQkSUeu4VGA1Nj1rljl3djqeXzp%2FHu7ZGVJ1o0BRSpa%2BfRTvw2KLNOsO5gxDcSZXeJWL53q6n5MuSym%2FiB2CS5bcpzG3ySTHy8uEwdVPtNeFxvJ7jATokqoygy4CYTCkXQ2L1eZIxGzBNIqHW16S0Be47Hm7Y1vYH9jqMKimo8MGOqUB8CEJ7zAviBsMGQqCX3ul9iFNykzpXmSXMPmf0BPD7OGUF1UuNuBUA4uQ%2FjvlklghMd2Sa93OVu5RzNNxMXxRIl%2BhIfJAXLZEVzhnOSA3hJiyfblmCYEg1AX8pt6EX9%2B6qUqmO3Q%2FYbpU6U0vz7p5VYdbJElYFSG1J30Y66aSvbprPvBpeNflTTOBodVWhvDpzKN8JK6nWoiYKUIk%2BXGqAu6gPwpz&X-Amz-Signature=f80da63f1227504a82b85a1590fda73961e04227208cebd4f34afbead5cda455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
