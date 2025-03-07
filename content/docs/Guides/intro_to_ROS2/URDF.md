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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRZJLP4Q%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F%2BuLfjoCSedI6P3DRc5h382FzM1ztgpUNWGo2nPyyyAIhANeDLydxwT3jPaMLw3Pmo7fiSH%2Fe63GsSd1lvosuqOs2Kv8DCEYQABoMNjM3NDIzMTgzODA1Igw5fjbvQFVQ%2FoOugwIq3AOscgPNxH0gRbh%2BntxCtTAMXzq4SA8BQf8%2Fvrtw04vq4paMjNeLINr87XLojgOewHhp%2BlYcHO2WMPlWUWJ%2FaqHjc9oG2yj4xQw9EC%2B12xGQMu2%2BvYcbMrPiqqstpCnOenUH0KXwBE0H3SF%2FcxKjhNWNOaku4uQfAYyYGu1KRfw7msNqloebFXOEEClPxm%2FNBGmQRgUa10wbOL0JQVSt%2FqU2FJ5uyeBLGfCBh2DuVVqTCb7IV4bt%2FvEZpf9Y3EFN9TNw1suM1bg6j2BEFCoPqx2DqDqqk0QnnZTMfIggtKuUVij3fQ4Ogh3ypIBuOCZxX%2Fffd6XYHVLc9VUvmCNglKc9rbrtO%2BRdtTTjKL6UxZy%2BpafSG0hTaapjoqp2QUk0Hv1pzYiE5JdgQH8ima8lbIsFadDX0aT%2BUDAIe7WHAmU9yLom%2FvkQaUQ8deMDI7ynlu8kSYYiRpXiNrY5ygRCaLAIxob40MhzyJSBHc2e1O0TFEelyOrpQauDRrxTVa%2Fa0%2BuHWJHZNN1CjbqsCJfJzLeeeGSoVOW0pkmkQ%2BbaTINtfV2o83k%2BOnaqLa0spLaXZI%2FguzswjrlEpuUwEzApCd1KB8SiNIX9Jci6pUV7RLZ6%2B8Jsp28saa1G8AkkrzDK36u%2BBjqkAeb%2FUK%2FIKeX1ULeJbDqBJRKVGV1PN4%2FbRBKDQNQ%2B71rQe3yaPfJaYsyp%2BD4gQjM2J6viATV%2BHHB6LvvYlkl%2F0cW5m%2BGSJ0nY2qBITFTbyRwedURoqYEb%2BYgXDJPgjyKUlfkqPQwpVMUZdmINTfFGNY421rcduSLrCfSby%2FpPsb%2BmvRqs3rncnlFY61ojNttL6%2FkCwLFvCptW3elUJ12eiITmOrLS&X-Amz-Signature=e4221ad6963d765dc2afa06416e9b00a8e79d9baedecec88301a90d85c61a921&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRZJLP4Q%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F%2BuLfjoCSedI6P3DRc5h382FzM1ztgpUNWGo2nPyyyAIhANeDLydxwT3jPaMLw3Pmo7fiSH%2Fe63GsSd1lvosuqOs2Kv8DCEYQABoMNjM3NDIzMTgzODA1Igw5fjbvQFVQ%2FoOugwIq3AOscgPNxH0gRbh%2BntxCtTAMXzq4SA8BQf8%2Fvrtw04vq4paMjNeLINr87XLojgOewHhp%2BlYcHO2WMPlWUWJ%2FaqHjc9oG2yj4xQw9EC%2B12xGQMu2%2BvYcbMrPiqqstpCnOenUH0KXwBE0H3SF%2FcxKjhNWNOaku4uQfAYyYGu1KRfw7msNqloebFXOEEClPxm%2FNBGmQRgUa10wbOL0JQVSt%2FqU2FJ5uyeBLGfCBh2DuVVqTCb7IV4bt%2FvEZpf9Y3EFN9TNw1suM1bg6j2BEFCoPqx2DqDqqk0QnnZTMfIggtKuUVij3fQ4Ogh3ypIBuOCZxX%2Fffd6XYHVLc9VUvmCNglKc9rbrtO%2BRdtTTjKL6UxZy%2BpafSG0hTaapjoqp2QUk0Hv1pzYiE5JdgQH8ima8lbIsFadDX0aT%2BUDAIe7WHAmU9yLom%2FvkQaUQ8deMDI7ynlu8kSYYiRpXiNrY5ygRCaLAIxob40MhzyJSBHc2e1O0TFEelyOrpQauDRrxTVa%2Fa0%2BuHWJHZNN1CjbqsCJfJzLeeeGSoVOW0pkmkQ%2BbaTINtfV2o83k%2BOnaqLa0spLaXZI%2FguzswjrlEpuUwEzApCd1KB8SiNIX9Jci6pUV7RLZ6%2B8Jsp28saa1G8AkkrzDK36u%2BBjqkAeb%2FUK%2FIKeX1ULeJbDqBJRKVGV1PN4%2FbRBKDQNQ%2B71rQe3yaPfJaYsyp%2BD4gQjM2J6viATV%2BHHB6LvvYlkl%2F0cW5m%2BGSJ0nY2qBITFTbyRwedURoqYEb%2BYgXDJPgjyKUlfkqPQwpVMUZdmINTfFGNY421rcduSLrCfSby%2FpPsb%2BmvRqs3rncnlFY61ojNttL6%2FkCwLFvCptW3elUJ12eiITmOrLS&X-Amz-Signature=13b9dac735a58b14f75fdf9ed23b135820b5195e416b2a2e785db00db8d0bcfd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
