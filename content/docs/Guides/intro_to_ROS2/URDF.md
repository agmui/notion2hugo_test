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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQQGZDV2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCrqLsBI%2FevKQAfXZDTjYpSxEp8mroKWDtJ3T7wMskDnwIhAOVqfVljzzIXRsJtK1KgBbMK%2B%2BDe8UfML0urJcau5clcKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQd5%2BG1ZXMyZ8FD2Eq3ANxCIpq5sMNpXhWtemNHrMY2PnTynNrXpeV69AXK9tegfXt9CurzILBA7RmPOWThFJYCfI%2By2JNcPyZf0mHkLGLMhQC6KRfqwzDFPR%2FvLUBvB9wcwLdCmRcMGSLkm6QE%2BnkkkPsbbMRBywnn9KY0VhGaa%2FxIiSFT9PHvi3XBgJUNM9iPKetP8MqPDjjKk70gn9PfKOMRv9CfPHztIankHZLLJIJE5bhBNQZ58FA%2B%2BEg3kDjolZQT8fhVqMJXzWGRR7riV76OFsd%2BWfz5jd1EjWRuPStK1yygvgfj%2Bdc9OGXpBVAChaz4dwpI%2F0yZ6jGsvfhURtHiNANaL7BOlhWX%2BFnarn48rYjO1t5g%2FDiRvAYfb2DxyOEs6vnOhbdk1gW%2FJ7t0i0EHZHWBJupk6NDYstljVPlMyJw1cUm8%2FjngqfRjmcexiiQlCMmSMSQuW97CRmKyOCOFm1T%2FpUAdyDct3G9XZnwI2a4KFa%2BQlAw1P1JJnD3egrSsR%2F7QGcejsCU6T0X5lizaRUqdxWO%2FpT1xxo%2FfXYUUCwRmqhQHswseMkejFKmJumjNIrB2qa2C71jbYv18LWaB7USomEm4vc3efr%2FsQVB1ShJumEc0uIDDs2pojGVjiINu%2FMvWnvt9zDGlq6%2FBjqkAe9N82c6dtJMDxfSFbt4zfjG2VnTX78w8V96793JPOnA7rml1HeO3f8PgkppxZKC2hIWa%2BGaQzAuoUoH7SiUkFTiNabS2zHjDHSadKzthaWbskMU%2BF8mbmqxdXoItCAEC0PUJ1%2BswtxTNg%2F22SyybBW5x5GegCc866wreXezJjTclauUyOqMfOl3Csdiz30O3VO2yJ7msAryqUFMBFsiOTDeZyte&X-Amz-Signature=65587dbb1f6b33d429c1377ed78234ad974611265c2134c505823e4cb2b2371a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQQGZDV2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCrqLsBI%2FevKQAfXZDTjYpSxEp8mroKWDtJ3T7wMskDnwIhAOVqfVljzzIXRsJtK1KgBbMK%2B%2BDe8UfML0urJcau5clcKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQd5%2BG1ZXMyZ8FD2Eq3ANxCIpq5sMNpXhWtemNHrMY2PnTynNrXpeV69AXK9tegfXt9CurzILBA7RmPOWThFJYCfI%2By2JNcPyZf0mHkLGLMhQC6KRfqwzDFPR%2FvLUBvB9wcwLdCmRcMGSLkm6QE%2BnkkkPsbbMRBywnn9KY0VhGaa%2FxIiSFT9PHvi3XBgJUNM9iPKetP8MqPDjjKk70gn9PfKOMRv9CfPHztIankHZLLJIJE5bhBNQZ58FA%2B%2BEg3kDjolZQT8fhVqMJXzWGRR7riV76OFsd%2BWfz5jd1EjWRuPStK1yygvgfj%2Bdc9OGXpBVAChaz4dwpI%2F0yZ6jGsvfhURtHiNANaL7BOlhWX%2BFnarn48rYjO1t5g%2FDiRvAYfb2DxyOEs6vnOhbdk1gW%2FJ7t0i0EHZHWBJupk6NDYstljVPlMyJw1cUm8%2FjngqfRjmcexiiQlCMmSMSQuW97CRmKyOCOFm1T%2FpUAdyDct3G9XZnwI2a4KFa%2BQlAw1P1JJnD3egrSsR%2F7QGcejsCU6T0X5lizaRUqdxWO%2FpT1xxo%2FfXYUUCwRmqhQHswseMkejFKmJumjNIrB2qa2C71jbYv18LWaB7USomEm4vc3efr%2FsQVB1ShJumEc0uIDDs2pojGVjiINu%2FMvWnvt9zDGlq6%2FBjqkAe9N82c6dtJMDxfSFbt4zfjG2VnTX78w8V96793JPOnA7rml1HeO3f8PgkppxZKC2hIWa%2BGaQzAuoUoH7SiUkFTiNabS2zHjDHSadKzthaWbskMU%2BF8mbmqxdXoItCAEC0PUJ1%2BswtxTNg%2F22SyybBW5x5GegCc866wreXezJjTclauUyOqMfOl3Csdiz30O3VO2yJ7msAryqUFMBFsiOTDeZyte&X-Amz-Signature=9e1b57c7e19f95e4684105b23c6f01aea3ece7ee1f14e4d34d70665148f15c99&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
