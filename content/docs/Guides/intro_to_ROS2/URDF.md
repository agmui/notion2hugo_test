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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHSPQUF4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIFX2oCqA8w47PvcfJoG9kdcPjW7UGdsZ67T8YCxppMpZAiEAuFTFdWkqxaNRY9gaJLwfjD%2BkjnSHJ6reaKKmac5fHEoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOQcK%2F2PtA084I8eWCrcA9FUFR4nJsE9YjI7gl%2Fl4owIJMaj%2B98j3IUfJ1BxFJcp3SFLvw3GmqcjyNH%2F8ymEhxyzxK8p%2FOeRR%2BeDBwnhcLampt9GcuAN%2Fu5qcSqGuL6y2AqSUiF1fwqpp%2FhoxW8YcmMZc6QRvOZMiA7uL9eYWkjBwnyYwv2me9YPFa6TnGB3PX8nFQ6PxAosbmoYRKmM0jdFxq67XhlaKJYFqz77iomNegJxKcbXKuG6BoagyokoxO4whxBIlBQZFeW10H%2BbWtRqm42RlKjh0I94dliNYHF9O3wQW1LU01Az6LhqkvdqJAyQ6pOobhuTPF3he6dzb3pRwzfdMJD7WITvXIXhWLL6KccnzuEIOYD5EZbIJu1FNzRgyzbniHpV3e%2FE5mnyQhFespfxBq1p24W%2FbuAnLvg6hDe5bmlogo7yVY16bfxlyWVrujKHqEl%2BnVq0iF92tSKwvw5dQwpqZngwxpJJzMw1fDK%2Fz3KxVMOfbf%2B0rgsZZSELgWpv3Ansg6297hC15Z33IeO8K%2B2HflssUV14Hhoxblm8qLjCxnt4laW%2FuiO78ZyAYr9hLTE1UpVRxDcxJoIFcQCF6O3tw37Qt80%2F7GM1WKKRXfCSCwpWCRoot2gQ2kTRHpl%2BcWxMNNYNMLPrtL4GOqUBwjI47N1nIYgVODbypp97AetwSTliPKMeg%2BI9qzeID5ZLodb%2FTGo4mefn5Q7nnFCpINDxL1zNvdWqkK%2Bbj5BcA9kCzplj3xxLEBpK3NoMxPOcaDdxehdlOcfl2ERirD2Ej%2FghJZDGQ2dWoMWiarh2qGFKR3oNm2kwRoRkQj0MD57aKFom8xInl%2B5rgNohWZFTLIchFcvLnm0OqhOQOvBRveNZOWzT&X-Amz-Signature=93cdf62f6131199d3581a7491b0fb9445899cba95afc8e1b60a916eda0aa2f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHSPQUF4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIFX2oCqA8w47PvcfJoG9kdcPjW7UGdsZ67T8YCxppMpZAiEAuFTFdWkqxaNRY9gaJLwfjD%2BkjnSHJ6reaKKmac5fHEoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOQcK%2F2PtA084I8eWCrcA9FUFR4nJsE9YjI7gl%2Fl4owIJMaj%2B98j3IUfJ1BxFJcp3SFLvw3GmqcjyNH%2F8ymEhxyzxK8p%2FOeRR%2BeDBwnhcLampt9GcuAN%2Fu5qcSqGuL6y2AqSUiF1fwqpp%2FhoxW8YcmMZc6QRvOZMiA7uL9eYWkjBwnyYwv2me9YPFa6TnGB3PX8nFQ6PxAosbmoYRKmM0jdFxq67XhlaKJYFqz77iomNegJxKcbXKuG6BoagyokoxO4whxBIlBQZFeW10H%2BbWtRqm42RlKjh0I94dliNYHF9O3wQW1LU01Az6LhqkvdqJAyQ6pOobhuTPF3he6dzb3pRwzfdMJD7WITvXIXhWLL6KccnzuEIOYD5EZbIJu1FNzRgyzbniHpV3e%2FE5mnyQhFespfxBq1p24W%2FbuAnLvg6hDe5bmlogo7yVY16bfxlyWVrujKHqEl%2BnVq0iF92tSKwvw5dQwpqZngwxpJJzMw1fDK%2Fz3KxVMOfbf%2B0rgsZZSELgWpv3Ansg6297hC15Z33IeO8K%2B2HflssUV14Hhoxblm8qLjCxnt4laW%2FuiO78ZyAYr9hLTE1UpVRxDcxJoIFcQCF6O3tw37Qt80%2F7GM1WKKRXfCSCwpWCRoot2gQ2kTRHpl%2BcWxMNNYNMLPrtL4GOqUBwjI47N1nIYgVODbypp97AetwSTliPKMeg%2BI9qzeID5ZLodb%2FTGo4mefn5Q7nnFCpINDxL1zNvdWqkK%2Bbj5BcA9kCzplj3xxLEBpK3NoMxPOcaDdxehdlOcfl2ERirD2Ej%2FghJZDGQ2dWoMWiarh2qGFKR3oNm2kwRoRkQj0MD57aKFom8xInl%2B5rgNohWZFTLIchFcvLnm0OqhOQOvBRveNZOWzT&X-Amz-Signature=d49840c2fef2b0b0268828fa53c21f4405cecfb8a590fc8d47dd85f7bb0bb9be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
