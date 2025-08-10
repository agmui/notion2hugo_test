---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIY65WCB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2hCpr%2FTBFCcprPZ8pAOR3xmyaWfHDaubYM00zLnTfLAiEA%2BmS3GiIih70GenHkhn%2FC1CTuzjekhZ4bpk1xUtUaKykqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWf9ZydGc92l3YHayrcA7NKx1O9l0woCxu5EM%2BVOI958DkN%2FJ1e%2Bnjvr2WJSuwnoXt0SD346Rg9mgnwLsCAuphXXXaHEXzl%2FZqTXVERnAphtPzpUO3DgCS%2FsUA1enrtoq%2BnRTBClYXGSxRZ2XIg8Gzmp9HICK%2BNVAOiYFpV9T3NHZFGDBS9pl8qOmLqeyKu86r0VCSg5h9%2BZI2v7nGBhSocxd6UWtw0KVcP89ZVwe1dFmYvFe1EPgaJuNzvusLVu%2FtBMe9YfNi%2Fja%2BsyNK9Lg%2BVZPF%2FrUYaePEL8aSq2ONRTfW55B8uIF3GirCoZ3iWHNJC4uxSZNoMLoMdhGed4t8GozSd6S2EgkdMUIcr6FinnRMx7ayU0cGwqmZhUYjLQl%2FRtp8nhLFo2c6AaR8UuwLxQMuYixN9PuvT7UDzU8re%2B0MZullFk3ADzSuv7NqtIfUjgtChKrtU9eiSTutwpynLhHLJMQePic4W6D9Z8AsZJv6GdAAF55vhggbXAAJNvfb0%2FyXtxGYj6ZVQaOl7pRxb1UZJq8He7v1oomx1I%2Bggbm83FPg%2Bk8c8a8ZAndl1Dv2XmAihqR5E6KaO2V9guuXyXVfBlvnAlJl2RMJAwPuqiQJJgRkJ2Z6iWg0BpS6lXJ%2BHeaz5x6efLr26MOCV48QGOqUBEIi7202k3PH2SCL81sbXwmMPlMx%2F1pUtF5p3blR5Z0IRYTaz0a93cVEbHC2iC%2B7KVyQM3FmCPaO2eF7sbbkbuU5VMPo%2BCRTTuWlPSFmLQ8BDdWLjc4RDoQpS7CDAWu45qg3JowLwc83GwFX%2Bzg6%2FPOTPAFPgXNvVEDRHN6a74lNwLO%2Bgo8QdizGagiAkR5jfFeu8SLHf9KQOPsuyvNrG%2B29P94Qv&X-Amz-Signature=2d50d699b3f5d74f8c666f22402b99b9994cd0abc3087c76593c8822f81aeac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIY65WCB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2hCpr%2FTBFCcprPZ8pAOR3xmyaWfHDaubYM00zLnTfLAiEA%2BmS3GiIih70GenHkhn%2FC1CTuzjekhZ4bpk1xUtUaKykqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWf9ZydGc92l3YHayrcA7NKx1O9l0woCxu5EM%2BVOI958DkN%2FJ1e%2Bnjvr2WJSuwnoXt0SD346Rg9mgnwLsCAuphXXXaHEXzl%2FZqTXVERnAphtPzpUO3DgCS%2FsUA1enrtoq%2BnRTBClYXGSxRZ2XIg8Gzmp9HICK%2BNVAOiYFpV9T3NHZFGDBS9pl8qOmLqeyKu86r0VCSg5h9%2BZI2v7nGBhSocxd6UWtw0KVcP89ZVwe1dFmYvFe1EPgaJuNzvusLVu%2FtBMe9YfNi%2Fja%2BsyNK9Lg%2BVZPF%2FrUYaePEL8aSq2ONRTfW55B8uIF3GirCoZ3iWHNJC4uxSZNoMLoMdhGed4t8GozSd6S2EgkdMUIcr6FinnRMx7ayU0cGwqmZhUYjLQl%2FRtp8nhLFo2c6AaR8UuwLxQMuYixN9PuvT7UDzU8re%2B0MZullFk3ADzSuv7NqtIfUjgtChKrtU9eiSTutwpynLhHLJMQePic4W6D9Z8AsZJv6GdAAF55vhggbXAAJNvfb0%2FyXtxGYj6ZVQaOl7pRxb1UZJq8He7v1oomx1I%2Bggbm83FPg%2Bk8c8a8ZAndl1Dv2XmAihqR5E6KaO2V9guuXyXVfBlvnAlJl2RMJAwPuqiQJJgRkJ2Z6iWg0BpS6lXJ%2BHeaz5x6efLr26MOCV48QGOqUBEIi7202k3PH2SCL81sbXwmMPlMx%2F1pUtF5p3blR5Z0IRYTaz0a93cVEbHC2iC%2B7KVyQM3FmCPaO2eF7sbbkbuU5VMPo%2BCRTTuWlPSFmLQ8BDdWLjc4RDoQpS7CDAWu45qg3JowLwc83GwFX%2Bzg6%2FPOTPAFPgXNvVEDRHN6a74lNwLO%2Bgo8QdizGagiAkR5jfFeu8SLHf9KQOPsuyvNrG%2B29P94Qv&X-Amz-Signature=a2725b75fe41495a0e58b14edc4d8f67e736a39ec27065c51f8f75819de3eb65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
