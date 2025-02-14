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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DWKMSW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBd6XKvOsp%2B2K0uyaEGoFzmCIpdEm2if4d84N0s6MHqCAiEAmiFzccA2wDXP4koFCRrFqQqciKcp9CGmJwIdwi%2BUvk4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJn3aXwIUVRNv7veHSrcAxtRYxzxqgd9QhCEzf0e%2FqU6P4cblDU6PmeDwizLupt1KMHrQow4b4CI%2BcW30o1uuyc3Vd1PaAamFPak2iEWB3JxpaYuii49eQ%2BYEN97mSuzmUPbc1QoNc4hlzORXhNHaTq%2FZm5Tl7YcYIhQgBn%2FpPBWh6%2F4z%2BzSLCvyESPlWw8JiY2cX4Fgh0I1fbJCEYq%2BPTVDW5hfkSYHnW9yKlpTgEElJTwo46fypaLvU0DY8zHj1grwKV3iffyE1N0gu3rPN6MaB%2BY31gM8RpqunIB6aMWA%2BYfIp%2Fq157RGJzwmxZgAr0a31Q8sAIHJsIjy0aFXZqtnLhvfEEytOD%2FE4UhDP9mzPyaT8LLBN33EDlj%2BxQKxkh%2F0xveqLmIuuBVQ0%2BJ9ASkqZpKxKwym9v%2BQIoLzRkTyR7MKVKmsQVDhb%2BRgo6ZNfdGb8iu454Y9W3IAUyNXI%2F638ERtE%2Fk8z3o%2BX%2BqJvdPysHG7%2Bhd0NRNAmA8ej4geCipWNKlr03nMfJvBU7WzohpJXVASm4%2FXxK5LGQlLqtkaXYb3L5pgWTea%2B9Py%2FV62IoOe4uXK7Eda%2BW3LNRwyfGsqV0hxIBJQtVLcuJaEsgnwhC0iz4Udxi6r8xIrQghAUq%2B%2BNV7lsyIJDVouMLOyvL0GOqUBivOtOAh2Iy%2BR6Y8M2csLG5sJDlbuCCamCqdMryfNhU%2Fdt2mEEQvdCJUW0u2ukXHEzuCMsMNif9AVU6%2FObbQaaVUYaZxNmCk%2FgFR4onL%2BiQHJ2ErNMA85UrW3lARoHRNhSCL8d0fGRT2xsFJElDekpEy1MZG0%2FosVAK%2FZ%2BfCXcKQXFAGQmBhPfqqQwhnVnK%2FN8FI6z4ptea4olJg%2Fw5KoPL7Ii2yc&X-Amz-Signature=881a1bcb634bd45b206a7b2f900654e6ee0eda422a5d95c2a676d9bfc8d0aa47&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DWKMSW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBd6XKvOsp%2B2K0uyaEGoFzmCIpdEm2if4d84N0s6MHqCAiEAmiFzccA2wDXP4koFCRrFqQqciKcp9CGmJwIdwi%2BUvk4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJn3aXwIUVRNv7veHSrcAxtRYxzxqgd9QhCEzf0e%2FqU6P4cblDU6PmeDwizLupt1KMHrQow4b4CI%2BcW30o1uuyc3Vd1PaAamFPak2iEWB3JxpaYuii49eQ%2BYEN97mSuzmUPbc1QoNc4hlzORXhNHaTq%2FZm5Tl7YcYIhQgBn%2FpPBWh6%2F4z%2BzSLCvyESPlWw8JiY2cX4Fgh0I1fbJCEYq%2BPTVDW5hfkSYHnW9yKlpTgEElJTwo46fypaLvU0DY8zHj1grwKV3iffyE1N0gu3rPN6MaB%2BY31gM8RpqunIB6aMWA%2BYfIp%2Fq157RGJzwmxZgAr0a31Q8sAIHJsIjy0aFXZqtnLhvfEEytOD%2FE4UhDP9mzPyaT8LLBN33EDlj%2BxQKxkh%2F0xveqLmIuuBVQ0%2BJ9ASkqZpKxKwym9v%2BQIoLzRkTyR7MKVKmsQVDhb%2BRgo6ZNfdGb8iu454Y9W3IAUyNXI%2F638ERtE%2Fk8z3o%2BX%2BqJvdPysHG7%2Bhd0NRNAmA8ej4geCipWNKlr03nMfJvBU7WzohpJXVASm4%2FXxK5LGQlLqtkaXYb3L5pgWTea%2B9Py%2FV62IoOe4uXK7Eda%2BW3LNRwyfGsqV0hxIBJQtVLcuJaEsgnwhC0iz4Udxi6r8xIrQghAUq%2B%2BNV7lsyIJDVouMLOyvL0GOqUBivOtOAh2Iy%2BR6Y8M2csLG5sJDlbuCCamCqdMryfNhU%2Fdt2mEEQvdCJUW0u2ukXHEzuCMsMNif9AVU6%2FObbQaaVUYaZxNmCk%2FgFR4onL%2BiQHJ2ErNMA85UrW3lARoHRNhSCL8d0fGRT2xsFJElDekpEy1MZG0%2FosVAK%2FZ%2BfCXcKQXFAGQmBhPfqqQwhnVnK%2FN8FI6z4ptea4olJg%2Fw5KoPL7Ii2yc&X-Amz-Signature=a67724b278fe455a109613aeaef65da24888afe9da676e76063a313c711f44ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
