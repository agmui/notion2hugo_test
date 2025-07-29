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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFGQL4TA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHpPhejvYy7y41bFJyGOkn8KoObPe3SAYWExw35fn1weAiEA9twr8PPSRvesijI1tlTxlyXtCklIYrcyhU1ywitIwTgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsGIr9eVPUaZv1hLSrcA%2BJ0%2FnWmhsH9L7Ti5isgepZS%2BVl7p5blcBKK%2BWYmLsjQtcYlepblpyRojHEvz58%2Fe05ZwiE3q%2BQ41boNCeowCrTcFXv7%2FgFbdTx0ub34IfQtYAvtX%2FEKoXwGNtEkl46ZLSLgrlF0ygbfcQ8h5XJxEVBw2EsDCq73De9JQXO3f51%2FDd39VNthZTn7NdHp7MWiXzAIipJDWc7ZstZQ4nZr5mJXsph4QbHo4rhnOZ7klzwn%2FE1sJ5GcUv5blBXNti3h4HGfLAi6oUGrDKgBWHhrsC9ci4bsMeUjFeA4dCFKSCIhNLS2xJxUjmahzUTK9ap6Ln%2BVraintG93Ha38QH3goi6fNN%2Fjkr%2Fz7GPHYALw4sksrNbhuSvde1iqwaJvHWH5sBSYL0%2FYrqlkWiVcS7fe24ljUVo8zA5bPQpnfp3m%2Fe2UlpVPqMjjE6j5V02wojW0WREAf%2Bbz3wLGaZxb9qNyPd%2BBhOpCDdT3Q9Mukvc1RNgWK4ps7qeLfb6VNONVb6qgyynzvGLq7is5CxVdAjT9IoikGaomq9vC71%2FXvmmYpj898TKiLf%2BOwNene1DXTNOgSqhKaU%2BTdeiodXHD6JZSdhDEfRQWsDVLfr2hLwSHi%2Fnse43BinQAPxSGsXjQMOKDosQGOqUBIl%2B9eC1vZp8U9KyNLNfZMT9LJuDPvVrPUIk6ki%2BN7Bha3QWv5H%2BmKO0GVb9RlE8mxhAbwnOhPZZpdQ4KJTplKeOn1VR%2BC5t1HiT8Hi%2F9xuKUCRC%2FnjQ7bim2tEeMYancq5aPfJ%2F%2FQTSkoTt9RfAq6n7kg%2BVujoPRtTNiosLX5ng3HqgF9%2FN19LVLrF60e4PYcQiRKBPbWjDjBOraWEoDB0CwiQdU&X-Amz-Signature=23e3f18fa560578b590b410e66346ba2b79fc3a988ff5e1d432d499a05b14eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFGQL4TA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHpPhejvYy7y41bFJyGOkn8KoObPe3SAYWExw35fn1weAiEA9twr8PPSRvesijI1tlTxlyXtCklIYrcyhU1ywitIwTgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsGIr9eVPUaZv1hLSrcA%2BJ0%2FnWmhsH9L7Ti5isgepZS%2BVl7p5blcBKK%2BWYmLsjQtcYlepblpyRojHEvz58%2Fe05ZwiE3q%2BQ41boNCeowCrTcFXv7%2FgFbdTx0ub34IfQtYAvtX%2FEKoXwGNtEkl46ZLSLgrlF0ygbfcQ8h5XJxEVBw2EsDCq73De9JQXO3f51%2FDd39VNthZTn7NdHp7MWiXzAIipJDWc7ZstZQ4nZr5mJXsph4QbHo4rhnOZ7klzwn%2FE1sJ5GcUv5blBXNti3h4HGfLAi6oUGrDKgBWHhrsC9ci4bsMeUjFeA4dCFKSCIhNLS2xJxUjmahzUTK9ap6Ln%2BVraintG93Ha38QH3goi6fNN%2Fjkr%2Fz7GPHYALw4sksrNbhuSvde1iqwaJvHWH5sBSYL0%2FYrqlkWiVcS7fe24ljUVo8zA5bPQpnfp3m%2Fe2UlpVPqMjjE6j5V02wojW0WREAf%2Bbz3wLGaZxb9qNyPd%2BBhOpCDdT3Q9Mukvc1RNgWK4ps7qeLfb6VNONVb6qgyynzvGLq7is5CxVdAjT9IoikGaomq9vC71%2FXvmmYpj898TKiLf%2BOwNene1DXTNOgSqhKaU%2BTdeiodXHD6JZSdhDEfRQWsDVLfr2hLwSHi%2Fnse43BinQAPxSGsXjQMOKDosQGOqUBIl%2B9eC1vZp8U9KyNLNfZMT9LJuDPvVrPUIk6ki%2BN7Bha3QWv5H%2BmKO0GVb9RlE8mxhAbwnOhPZZpdQ4KJTplKeOn1VR%2BC5t1HiT8Hi%2F9xuKUCRC%2FnjQ7bim2tEeMYancq5aPfJ%2F%2FQTSkoTt9RfAq6n7kg%2BVujoPRtTNiosLX5ng3HqgF9%2FN19LVLrF60e4PYcQiRKBPbWjDjBOraWEoDB0CwiQdU&X-Amz-Signature=9e07e10b987a8df4ef902e5d4c76227300f727f9c71b541a492627d078b94f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
