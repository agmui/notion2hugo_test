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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466554B42XU%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFwrDqPNnu5FQf60rtX9IxLhbRcjCpEAVGv4Gh1qhL8AAiAzaETK2klOGQFpCz95RVmUXmeeew0JdBmuJvUqFYvEjiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv4ZbD9ESRyRbWTaHKtwD7JEj8TV6trpjYD%2F%2B3RbzRNq2JBpBC%2FiSnk4x0ZXwM00n%2F4DaCxGG%2FJ71svkkHrCd5xk0rthp57SaROus6tuWcaFnM8ms4tGYnx8joQMjFZ98qCyZOgnPjsCJxXGLu5HhPpR50QBsV2zeww1x7tRETf%2BhJv1gV3BSMtBsjfUAAexhZc%2BNuuRrz5xORLtxm6mXNCs4Oo1TPbSQV%2Bo9vb7vnKUHVc7cZGuukskU3C6A2axUE8ttc7XoQ6JcKPBVmxBo4Mph8vpLa0eAm4KzBRE9lvWyGmeq6mw5YwV%2Bno1mFRkLqMIj2Fh%2FUmusimp%2F8nviqP1OlAsHkKXiIdzMaW19eBhibCAmwHwDbeIorVfuoljQ4qRqA2aJFKnWCs22XgIP3dH8Ug34QBpf5CNSNkFyuSNDNz9pt0FyaRTRQnFemVINhDRh0o45IWE77HhCSjzAw5ABcl9NheLkdzSnKzx%2FZN%2Ff54MmTae9lJTtst%2FMdzFUKz5Qr2VczFa3lfNgxKL7Ugvqd%2B3THF67bCkfvTNawIUx2dZOLrxpZrGsgu%2BjvC%2ByHW%2BsaT0e9fM3sKUScjlYpzxecZYs%2Fs3dB84iI%2FINclTtk743EbNMPVcffun0YorJQC2z36r2Y7B%2B7O8wq%2FvWvQY6pgFlvBotUkhi5pzvvqq9mtScIntqp4lWKbq%2BjywalmyezbC4w6itd7KvekKUEU7op%2BbFBd31%2Boq%2Fwc%2BrSkt3jI%2B8nLC%2Bn%2FuVxlRG17p7roJrspS6S%2FtlKBsVj2zfPxFKqGp4kHoUTb96%2Bls3Uib21w5NaMVagSE9oznD9szhu5GtKS2vFB84ePRpUE%2FxEUA%2BwR7CSSWEkonFoMwx2X6rTFuXTRl%2B%2F3Of&X-Amz-Signature=91e9737f1755e10be64fc049c0cb05b25d31106dbd1eb8baa458e9d7c2f20e90&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466554B42XU%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFwrDqPNnu5FQf60rtX9IxLhbRcjCpEAVGv4Gh1qhL8AAiAzaETK2klOGQFpCz95RVmUXmeeew0JdBmuJvUqFYvEjiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv4ZbD9ESRyRbWTaHKtwD7JEj8TV6trpjYD%2F%2B3RbzRNq2JBpBC%2FiSnk4x0ZXwM00n%2F4DaCxGG%2FJ71svkkHrCd5xk0rthp57SaROus6tuWcaFnM8ms4tGYnx8joQMjFZ98qCyZOgnPjsCJxXGLu5HhPpR50QBsV2zeww1x7tRETf%2BhJv1gV3BSMtBsjfUAAexhZc%2BNuuRrz5xORLtxm6mXNCs4Oo1TPbSQV%2Bo9vb7vnKUHVc7cZGuukskU3C6A2axUE8ttc7XoQ6JcKPBVmxBo4Mph8vpLa0eAm4KzBRE9lvWyGmeq6mw5YwV%2Bno1mFRkLqMIj2Fh%2FUmusimp%2F8nviqP1OlAsHkKXiIdzMaW19eBhibCAmwHwDbeIorVfuoljQ4qRqA2aJFKnWCs22XgIP3dH8Ug34QBpf5CNSNkFyuSNDNz9pt0FyaRTRQnFemVINhDRh0o45IWE77HhCSjzAw5ABcl9NheLkdzSnKzx%2FZN%2Ff54MmTae9lJTtst%2FMdzFUKz5Qr2VczFa3lfNgxKL7Ugvqd%2B3THF67bCkfvTNawIUx2dZOLrxpZrGsgu%2BjvC%2ByHW%2BsaT0e9fM3sKUScjlYpzxecZYs%2Fs3dB84iI%2FINclTtk743EbNMPVcffun0YorJQC2z36r2Y7B%2B7O8wq%2FvWvQY6pgFlvBotUkhi5pzvvqq9mtScIntqp4lWKbq%2BjywalmyezbC4w6itd7KvekKUEU7op%2BbFBd31%2Boq%2Fwc%2BrSkt3jI%2B8nLC%2Bn%2FuVxlRG17p7roJrspS6S%2FtlKBsVj2zfPxFKqGp4kHoUTb96%2Bls3Uib21w5NaMVagSE9oznD9szhu5GtKS2vFB84ePRpUE%2FxEUA%2BwR7CSSWEkonFoMwx2X6rTFuXTRl%2B%2F3Of&X-Amz-Signature=d72988b00fad6a3be9d63ceab51e5154d6aafa5c472ba291d48978f134d9c833&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
