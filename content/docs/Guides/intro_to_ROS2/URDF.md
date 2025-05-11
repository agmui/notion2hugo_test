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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYFJ3GIC%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCMsbotSTM5qGTi%2FhVpGyf94nmQVsj5bmGrhG%2BYLWT0QgIgOj0ngZsbNBQmPmA3LBcraGPFiOydYow5oOdsp35pOcoqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpumjXIALGEeLBpnircAxLvKgI%2Basemvykq%2BluWB%2BB2eetXkIAJET19%2Fipwv5lIErZjm1%2BFcllCgQjSZ2W3HGagaia21U3tuK6Z6iu8qUG6pVZk1jdCfqKaEL%2B0SbugXg5nMVwMW0t31goAU%2B4eDg4ylZFxJmHIzO2SkSiYw3BhRdEL1%2BtWevObHp0EMs8AdC%2Fq%2BcjAA%2F6QWmdl%2F5huiclz%2FP%2FLi5rGQoSWz2thVSJEg%2FbPTRUmraLqg5c%2B%2ByQ4aU%2FarDEE%2B6wZfmV%2Fh%2FEZb14WEdFX2t07892ySb9acdjooeP9bKjlHh3jMxg1A4lvjHFfCl4udNsCYfhnC9kn1au66M4g2%2BqMAuoAGItkOmH1a1PTcHPdc7lqqt%2BkfVG3u%2F2PxYWeRZI%2B8%2FFARx7Bj06%2Fgvdm5Iozh9EOa0gZUaI5gxuC0D%2BqOzIaP%2B9%2Bbnm0%2BgJPVgpdR4s560PKbpUoOk4tmniZoO2k9%2FflInBmYaHTfV44A062VwfcFNodHJVA8oMKFviK25eALxe1pmanQH8oj5A%2BdPWKiV0NEi7aaBOgPYjzceYWGaXe0AENeoDmVoO9BNu5RcZJf68xsZumPF3Txf65L8ID3jnzLrCR3%2BnouAPbzxtWt9xx3Y1tgdEAej2C0QJps4DOERRPMK3VhMEGOqUBbyc1EV7nP3BEYScpZPxZww%2FDgGrrh59NqF8Q%2BHxnHVANNBLKTos0yU4aSyRj6D93l2lutpl9WMzr3OJfoqMCXiMHEh0m1JwHIHDfYv3CUwtpw1t0wJt9o0TF2sTfzGKly0R4LTeBVoZHEcQFRtL6QCV9n8hcaPR34hYB6DgXdPKAjqCC0mu4p9z3i3pegofVj%2FdrqkvgHpIY86Kbae35CAsk%2FboK&X-Amz-Signature=328df4a58c73edad788147f27b07b4f18244d5c08365cb5fa029fee3f7a4423d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYFJ3GIC%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCMsbotSTM5qGTi%2FhVpGyf94nmQVsj5bmGrhG%2BYLWT0QgIgOj0ngZsbNBQmPmA3LBcraGPFiOydYow5oOdsp35pOcoqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpumjXIALGEeLBpnircAxLvKgI%2Basemvykq%2BluWB%2BB2eetXkIAJET19%2Fipwv5lIErZjm1%2BFcllCgQjSZ2W3HGagaia21U3tuK6Z6iu8qUG6pVZk1jdCfqKaEL%2B0SbugXg5nMVwMW0t31goAU%2B4eDg4ylZFxJmHIzO2SkSiYw3BhRdEL1%2BtWevObHp0EMs8AdC%2Fq%2BcjAA%2F6QWmdl%2F5huiclz%2FP%2FLi5rGQoSWz2thVSJEg%2FbPTRUmraLqg5c%2B%2ByQ4aU%2FarDEE%2B6wZfmV%2Fh%2FEZb14WEdFX2t07892ySb9acdjooeP9bKjlHh3jMxg1A4lvjHFfCl4udNsCYfhnC9kn1au66M4g2%2BqMAuoAGItkOmH1a1PTcHPdc7lqqt%2BkfVG3u%2F2PxYWeRZI%2B8%2FFARx7Bj06%2Fgvdm5Iozh9EOa0gZUaI5gxuC0D%2BqOzIaP%2B9%2Bbnm0%2BgJPVgpdR4s560PKbpUoOk4tmniZoO2k9%2FflInBmYaHTfV44A062VwfcFNodHJVA8oMKFviK25eALxe1pmanQH8oj5A%2BdPWKiV0NEi7aaBOgPYjzceYWGaXe0AENeoDmVoO9BNu5RcZJf68xsZumPF3Txf65L8ID3jnzLrCR3%2BnouAPbzxtWt9xx3Y1tgdEAej2C0QJps4DOERRPMK3VhMEGOqUBbyc1EV7nP3BEYScpZPxZww%2FDgGrrh59NqF8Q%2BHxnHVANNBLKTos0yU4aSyRj6D93l2lutpl9WMzr3OJfoqMCXiMHEh0m1JwHIHDfYv3CUwtpw1t0wJt9o0TF2sTfzGKly0R4LTeBVoZHEcQFRtL6QCV9n8hcaPR34hYB6DgXdPKAjqCC0mu4p9z3i3pegofVj%2FdrqkvgHpIY86Kbae35CAsk%2FboK&X-Amz-Signature=1196540c2ed35c164b00776fc6faa9c32189d383426986b0c43ea699e7998328&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
