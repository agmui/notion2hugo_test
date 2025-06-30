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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QXJRAOH%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPOc7AxpxzQ6ndE9ElsOkH865VsOHKqaO9Vqfvd2ak5AiEAnu9w6aMmdmNlvVWngxQHxDoip5vYzuNFQj0ls5Go%2FtIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBildCP3UfYGlZSgHCrcA8rZp5A0nH1j%2B6eHmJ4i5O%2BCuYT1%2BfR0D1hn62DEgccd%2BDmToQqLsFL9R4Fn0YK%2FYXdQKcVYZvZ%2FSzfbEHCtZa67nvtdtJ2TT418WKrvR0FnIwMhGqE%2FCuVgj9IvYxXduciSPSEl%2BuE7GceBl1HeaOM3Rk8Qh7KKM%2B1KpdwJuXdluBjNKaN81NBAE6hfd5Ebz3S%2Fbrp4BevDDThKpdbqPJl%2FKb8jzZ2onJsc0rYOCSIoabg0teP0ZgbGJer6JLnJxpfyGPrFnf01ethQxqNcu5KwP5cC%2FduiTeo7ysTmwaJdc4w72TpMv6KmQ9uDIj%2BE4Bb7OTVol8mGaxyfctdG6dq3UJigtb0mJL9OZ0MNjCvWc9ieC3sKOALDKfnwBcZJXqL0VcvjcpQLouGes0rnOuWNFf65Z6RPV2xDCb2Ou0tnb18oYYK0AsViIIGX38fmjnrtR1MvV30cFlLM%2F%2FjAwqKD%2FI226l3DwTPv5TY%2F9aANKu2igDvnPMKSyC2P7C0BZt8MtllE8jSsrk3T9%2B%2BqTjls6U7CGXdyk9PSByyyGsBHVcX8NAUZmsvVb4hLexzzqPrKKVj2WoEVIn%2BMU9nW2ytuCcI2O1LfkSK%2F73XNi5xdiDZIL0QQ9roGbiQmMKS7iMMGOqUBMT%2BbrTB8F8ziZR6AKW8WA2H5RcF%2BApjbcwnyi2SReLBXm56kcL6eMwA02btpb%2FuItpAfEcbGlyuCbpuT%2BzAMEeUZIg6yVIkaWZhoU1rclr1xVei8eqiKVN146juwCX26nbN8rYaY4ikPMKee1v%2FcN92t2GsMTd7O5ceWhTuPrMq000oc2rIH3abU9MlY71%2BsvOf8svMcZDuMnkSxBtpVgULKu2Wd&X-Amz-Signature=3dfc6c31e265938348794120a4536b441448e809e7cc12aefdcf6201108ba2c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QXJRAOH%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPOc7AxpxzQ6ndE9ElsOkH865VsOHKqaO9Vqfvd2ak5AiEAnu9w6aMmdmNlvVWngxQHxDoip5vYzuNFQj0ls5Go%2FtIqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBildCP3UfYGlZSgHCrcA8rZp5A0nH1j%2B6eHmJ4i5O%2BCuYT1%2BfR0D1hn62DEgccd%2BDmToQqLsFL9R4Fn0YK%2FYXdQKcVYZvZ%2FSzfbEHCtZa67nvtdtJ2TT418WKrvR0FnIwMhGqE%2FCuVgj9IvYxXduciSPSEl%2BuE7GceBl1HeaOM3Rk8Qh7KKM%2B1KpdwJuXdluBjNKaN81NBAE6hfd5Ebz3S%2Fbrp4BevDDThKpdbqPJl%2FKb8jzZ2onJsc0rYOCSIoabg0teP0ZgbGJer6JLnJxpfyGPrFnf01ethQxqNcu5KwP5cC%2FduiTeo7ysTmwaJdc4w72TpMv6KmQ9uDIj%2BE4Bb7OTVol8mGaxyfctdG6dq3UJigtb0mJL9OZ0MNjCvWc9ieC3sKOALDKfnwBcZJXqL0VcvjcpQLouGes0rnOuWNFf65Z6RPV2xDCb2Ou0tnb18oYYK0AsViIIGX38fmjnrtR1MvV30cFlLM%2F%2FjAwqKD%2FI226l3DwTPv5TY%2F9aANKu2igDvnPMKSyC2P7C0BZt8MtllE8jSsrk3T9%2B%2BqTjls6U7CGXdyk9PSByyyGsBHVcX8NAUZmsvVb4hLexzzqPrKKVj2WoEVIn%2BMU9nW2ytuCcI2O1LfkSK%2F73XNi5xdiDZIL0QQ9roGbiQmMKS7iMMGOqUBMT%2BbrTB8F8ziZR6AKW8WA2H5RcF%2BApjbcwnyi2SReLBXm56kcL6eMwA02btpb%2FuItpAfEcbGlyuCbpuT%2BzAMEeUZIg6yVIkaWZhoU1rclr1xVei8eqiKVN146juwCX26nbN8rYaY4ikPMKee1v%2FcN92t2GsMTd7O5ceWhTuPrMq000oc2rIH3abU9MlY71%2BsvOf8svMcZDuMnkSxBtpVgULKu2Wd&X-Amz-Signature=5791423884b7f3c0c70450f09c49db3e10f00fe4cd6bb3377f07736702887d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
