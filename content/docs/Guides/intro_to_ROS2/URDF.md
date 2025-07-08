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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QCS6FBZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEO9bXXLH4j30tB%2FKlYHLbcZbHzB4KO2Iindk7yhAsWiAiEA%2B6c2%2B%2FfiHbi6R8axiNm1xJBzprSxAFdYFCv6dQQ%2BIecqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgfkobQ1hh76s2dyircAzw4yvvveEIIUQaVCFKPD9U5qlh6EkHQDKoqR2gO3gWGQ8HUOWgMJEIi2dTaiEH98yQCj5gKwjlPLPr5xemZqDpoGZZ%2B%2FieMii%2BAFiozzpVwODTcxbt62OljUK3P45qHSMqXzeltEYtZ53Zx4wbfFB22DFK%2BaK1kzbEH3Qvs%2FdfEHvUAUheyR%2BTPrzJDCpNYb09ncekgPqT2%2Be9LTRcSngEG1JLgPeaF5guhmHyCiiMSY%2BkTwGlpQjFY5n2UeEfoUcQyUDdQ655%2FinyiyWOqHE6FTa37iJaCn5P0oYNG%2FywHQeqeZLdEzikAYZBqyPyM5hIuFi60JIFPdAE%2FpxKScgz03WYjB0P5UK4HJ3NchtlNUxMyKMu6lZLlAm4Y%2FdXNRhlhmYaLMrwXyMpMAFx%2FoeTGcUzlX6fTck%2FUJcluhsNYcOY5ELaCYf6IS5leHYrZqT9OzlHyc%2FK7V3%2BdKQnXdQDyfuJQBd0u5wxQmv1EvaG66FmJXHz07lOkv2Xuoe0ldr4c0J06O1ZpPgan0VYjoU6qcDfLuaeDiOQLOw%2Fx6ZiOSDKR8SLCuYKVEDVlOk2Bzf1Me6zlbEfxclgWzacUzYL11vTdOy7TiJGAr6bpdIwrzIbuvCnE57ovk%2FaYMIaEssMGOqUB3c%2BbV00gOtqFJIVLBKQcvr33Iyc7tWxW3I%2B7w6wWyQEhJ8KNr992waM034Sma89PjtpOde%2FWUkRd49YOvlHXj1ZPpRbdb2frAry%2B9enu28pALwhiqhhBnIQjZU4%2Fsa2R98jehTiY7AYoT%2FWNpgA12KY1dtwuKQ2B7iUFJn7QfqqFp84PP3SOFl87Lus3blj5YF1b%2FKEXJIWXkuhyxpW6MFfNgcj%2F&X-Amz-Signature=e932ab600c557cd736c1acd1013cf98771abf46b66da10853179af11999f0608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QCS6FBZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEO9bXXLH4j30tB%2FKlYHLbcZbHzB4KO2Iindk7yhAsWiAiEA%2B6c2%2B%2FfiHbi6R8axiNm1xJBzprSxAFdYFCv6dQQ%2BIecqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgfkobQ1hh76s2dyircAzw4yvvveEIIUQaVCFKPD9U5qlh6EkHQDKoqR2gO3gWGQ8HUOWgMJEIi2dTaiEH98yQCj5gKwjlPLPr5xemZqDpoGZZ%2B%2FieMii%2BAFiozzpVwODTcxbt62OljUK3P45qHSMqXzeltEYtZ53Zx4wbfFB22DFK%2BaK1kzbEH3Qvs%2FdfEHvUAUheyR%2BTPrzJDCpNYb09ncekgPqT2%2Be9LTRcSngEG1JLgPeaF5guhmHyCiiMSY%2BkTwGlpQjFY5n2UeEfoUcQyUDdQ655%2FinyiyWOqHE6FTa37iJaCn5P0oYNG%2FywHQeqeZLdEzikAYZBqyPyM5hIuFi60JIFPdAE%2FpxKScgz03WYjB0P5UK4HJ3NchtlNUxMyKMu6lZLlAm4Y%2FdXNRhlhmYaLMrwXyMpMAFx%2FoeTGcUzlX6fTck%2FUJcluhsNYcOY5ELaCYf6IS5leHYrZqT9OzlHyc%2FK7V3%2BdKQnXdQDyfuJQBd0u5wxQmv1EvaG66FmJXHz07lOkv2Xuoe0ldr4c0J06O1ZpPgan0VYjoU6qcDfLuaeDiOQLOw%2Fx6ZiOSDKR8SLCuYKVEDVlOk2Bzf1Me6zlbEfxclgWzacUzYL11vTdOy7TiJGAr6bpdIwrzIbuvCnE57ovk%2FaYMIaEssMGOqUB3c%2BbV00gOtqFJIVLBKQcvr33Iyc7tWxW3I%2B7w6wWyQEhJ8KNr992waM034Sma89PjtpOde%2FWUkRd49YOvlHXj1ZPpRbdb2frAry%2B9enu28pALwhiqhhBnIQjZU4%2Fsa2R98jehTiY7AYoT%2FWNpgA12KY1dtwuKQ2B7iUFJn7QfqqFp84PP3SOFl87Lus3blj5YF1b%2FKEXJIWXkuhyxpW6MFfNgcj%2F&X-Amz-Signature=5a3a055324c5c60d49743a0455d04c00a36abb2cfc562a6cad8e05fc88217d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
