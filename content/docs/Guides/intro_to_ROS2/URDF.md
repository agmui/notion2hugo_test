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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDCPWW6W%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIH5IE4QIRwCzf7pfdyz2uJ4yRBLVhd528T5zCkDAzCSbAiAMIBKmCHtjesdgjQ7FIbrm1Sh7igk%2FUMdpXL%2FM%2FIlvDSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMZUUn8%2F4aDO0rBVNTKtwD3OOZtYd1n2RggipOUTtb6ULx1%2BhTCuJFs7cIXUPki8NTzRj1io8BDfEq%2BQZXWKMt4MKH%2FPgMNVxFDgMMy2BqCiFqxUWri7pIOUqP1td1XbPYZSgF7zixWq%2BGYxJnG44%2F2hewerD50pdMFy2mB7jN5fxd44FGFBrzKUPfOCh8klAjgu4TTS5CE3waxLLV%2BNCyh9Mpk1HmuVsU4TNkthdiE4QILjb9qF%2BCJ9gp%2FDnKObET%2F1kYPXBX3YT9l4G6AhFXgfZBvzjCWvpYZldtMIEmy8DqWPOIQaT7nQ6zG3%2B8MDMbRFX6rkEzrlZsKo6jUTcrj9gQ4vdoTlSTeMNBmvnkWLLv3aZE%2BTlWbMpsEiqNPcED91miqv7miJg0euvnPOuiBVNCtXjIXRq4yQ%2FnvlcaykJRselNSqHN4dI%2Bd7b6r76uX4KPBFLuc3SeG%2FiS6OUwRM%2FfYkXhjZRlNakYYcCcHcPAoxVbNepINElF3Zp9rrnvI2Yh%2BNJ%2BnBjZ622NfDDKqUXkH5ollVzPHTeVeWVtdZrN4PHoZzrwd%2BWgCHLqAeWzsuv4adHXztVTc3PhDM8u3cbfuV9833Xx%2FfcSKtDX4OjK%2F%2BxbpfrQrI0O7RX%2B1n9yFbDEYU084m%2FiDsIw6qbz0AY6pgE2Tc3km32o3uzQC6kCTNjJ4tA0xvzuZEunTJwduHPQ5%2FrJufDYPfVf5zCJ6HtMZ5%2FEplhYEiDC4P%2B8bIFeFMYCyjok7nkH7audOvHZXhIh83MJzBMnhMEoRsykvYmn53wL%2B7PaXRn%2BTbWTiGJ5JMPAVlv66SAqt9aKoXMxOnqfcsdSR5Vwba1y%2B7ejZz%2B9PUbisanqnrDAU1tOgiOCK7trUOsJndUr&X-Amz-Signature=f907da0f646adeca53f6c08b49dc9789bb21cfa4d2af4f003216939d8d181569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDCPWW6W%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIH5IE4QIRwCzf7pfdyz2uJ4yRBLVhd528T5zCkDAzCSbAiAMIBKmCHtjesdgjQ7FIbrm1Sh7igk%2FUMdpXL%2FM%2FIlvDSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMZUUn8%2F4aDO0rBVNTKtwD3OOZtYd1n2RggipOUTtb6ULx1%2BhTCuJFs7cIXUPki8NTzRj1io8BDfEq%2BQZXWKMt4MKH%2FPgMNVxFDgMMy2BqCiFqxUWri7pIOUqP1td1XbPYZSgF7zixWq%2BGYxJnG44%2F2hewerD50pdMFy2mB7jN5fxd44FGFBrzKUPfOCh8klAjgu4TTS5CE3waxLLV%2BNCyh9Mpk1HmuVsU4TNkthdiE4QILjb9qF%2BCJ9gp%2FDnKObET%2F1kYPXBX3YT9l4G6AhFXgfZBvzjCWvpYZldtMIEmy8DqWPOIQaT7nQ6zG3%2B8MDMbRFX6rkEzrlZsKo6jUTcrj9gQ4vdoTlSTeMNBmvnkWLLv3aZE%2BTlWbMpsEiqNPcED91miqv7miJg0euvnPOuiBVNCtXjIXRq4yQ%2FnvlcaykJRselNSqHN4dI%2Bd7b6r76uX4KPBFLuc3SeG%2FiS6OUwRM%2FfYkXhjZRlNakYYcCcHcPAoxVbNepINElF3Zp9rrnvI2Yh%2BNJ%2BnBjZ622NfDDKqUXkH5ollVzPHTeVeWVtdZrN4PHoZzrwd%2BWgCHLqAeWzsuv4adHXztVTc3PhDM8u3cbfuV9833Xx%2FfcSKtDX4OjK%2F%2BxbpfrQrI0O7RX%2B1n9yFbDEYU084m%2FiDsIw6qbz0AY6pgE2Tc3km32o3uzQC6kCTNjJ4tA0xvzuZEunTJwduHPQ5%2FrJufDYPfVf5zCJ6HtMZ5%2FEplhYEiDC4P%2B8bIFeFMYCyjok7nkH7audOvHZXhIh83MJzBMnhMEoRsykvYmn53wL%2B7PaXRn%2BTbWTiGJ5JMPAVlv66SAqt9aKoXMxOnqfcsdSR5Vwba1y%2B7ejZz%2B9PUbisanqnrDAU1tOgiOCK7trUOsJndUr&X-Amz-Signature=51b036a702b824fe8b3d35cf4e01b57ccc77acaa3f7c1589be4427b7aa98827d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
