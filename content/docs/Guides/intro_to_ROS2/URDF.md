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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O5JPHBI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD%2FPCuMSs0TxjhJH7%2BXBFMNfVlw1B6bNxw7YJMeaYNuqwIgIqfi6wt%2BqSTzyTiHpwiiI8otpDbjfYy2Jdkk1ricCKIqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXgKfrbLInrU%2BkbsyrcAy%2FWZ7tH6o9uHRBzdlBF6BFFTPavuz5VOpW5%2B3eTJ9Un5b6xn8%2FYVaohBFifN9Gq%2FtBvYoVuH%2F%2FOqoUoHtaMxBnhU2%2BjShPDhVt7Zc73fOINZxOGEwo2dMkUS9jXkXyQCPGLPRQ51aT591UFDFKkFT1H5aPu2Ay2qy%2Fnr7p1hkALwY4Y9WxGwmeVtpS4VNiQ%2FOuZJVctczBpMX7CqEXnejPykNYerPKcxHG1oszFWPwcUZPUmNjQIcxUngH4moXSoQTeAQYCKYH4h%2BxF%2Fj%2BC7UWae0UwmhtBg8AzHGZX5wy2iPqMFYj3Ub4cqSlWNJ2r4zKugrWAcVDdXplsrPo0rYnSsXQveXC23%2BiCy8mz%2FxZBZhz70TBhh%2BCftArN6aluhEy8lndcwt%2Bx%2Bqu6kyPy19ETYgnlo57Zh%2BPQLxHXC19Ua6y3OlC4X3E8ZsRUOTL8CRwCLUx%2BJkpxi68iH%2BEJ4Z7ybSJSZYW13k5L4s%2BUalNxs8wNBTLkOhnfiGB31AvGe%2FX8daHlurNmR%2BXH3vPI6Sps486%2F3XRB5hzb9GXklJ%2F9NNBoM40u%2Fsq9MRJSS3I4h0UmkPldSESZt0KXL7nxuzBSIW8B1UAfyxLBGeeE2UEBZAEKWCjmEthiW%2FzyMISEssMGOqUBr%2BHnHevBnzFVoyp%2B2AreNrRGFQGhFvL%2BFUp3GR25dM2DBwc2nxTkK6wsoGEhcOjg1KWHtoSzC5LCHcv9sHwsyUKUxfMJoZbTx6tvIrT6nDuhVtjKkzxjrsQoqhotlaaw2HK59%2FTVS%2Bg1hFsAhampIcqVIjSbqNxaZlgeRcqbKZa0ue5%2FevGnxnneJftrL6WVFRago%2FvS4eZ4h%2BrEc5PBZYDIf9ld&X-Amz-Signature=5aeff6182426331e1bce71743e536cd57f5bd60fb2ad3eb7229a61e329290cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O5JPHBI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD%2FPCuMSs0TxjhJH7%2BXBFMNfVlw1B6bNxw7YJMeaYNuqwIgIqfi6wt%2BqSTzyTiHpwiiI8otpDbjfYy2Jdkk1ricCKIqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXgKfrbLInrU%2BkbsyrcAy%2FWZ7tH6o9uHRBzdlBF6BFFTPavuz5VOpW5%2B3eTJ9Un5b6xn8%2FYVaohBFifN9Gq%2FtBvYoVuH%2F%2FOqoUoHtaMxBnhU2%2BjShPDhVt7Zc73fOINZxOGEwo2dMkUS9jXkXyQCPGLPRQ51aT591UFDFKkFT1H5aPu2Ay2qy%2Fnr7p1hkALwY4Y9WxGwmeVtpS4VNiQ%2FOuZJVctczBpMX7CqEXnejPykNYerPKcxHG1oszFWPwcUZPUmNjQIcxUngH4moXSoQTeAQYCKYH4h%2BxF%2Fj%2BC7UWae0UwmhtBg8AzHGZX5wy2iPqMFYj3Ub4cqSlWNJ2r4zKugrWAcVDdXplsrPo0rYnSsXQveXC23%2BiCy8mz%2FxZBZhz70TBhh%2BCftArN6aluhEy8lndcwt%2Bx%2Bqu6kyPy19ETYgnlo57Zh%2BPQLxHXC19Ua6y3OlC4X3E8ZsRUOTL8CRwCLUx%2BJkpxi68iH%2BEJ4Z7ybSJSZYW13k5L4s%2BUalNxs8wNBTLkOhnfiGB31AvGe%2FX8daHlurNmR%2BXH3vPI6Sps486%2F3XRB5hzb9GXklJ%2F9NNBoM40u%2Fsq9MRJSS3I4h0UmkPldSESZt0KXL7nxuzBSIW8B1UAfyxLBGeeE2UEBZAEKWCjmEthiW%2FzyMISEssMGOqUBr%2BHnHevBnzFVoyp%2B2AreNrRGFQGhFvL%2BFUp3GR25dM2DBwc2nxTkK6wsoGEhcOjg1KWHtoSzC5LCHcv9sHwsyUKUxfMJoZbTx6tvIrT6nDuhVtjKkzxjrsQoqhotlaaw2HK59%2FTVS%2Bg1hFsAhampIcqVIjSbqNxaZlgeRcqbKZa0ue5%2FevGnxnneJftrL6WVFRago%2FvS4eZ4h%2BrEc5PBZYDIf9ld&X-Amz-Signature=09f461635ec553c8ffd05926bb1065a31e250328ae36b569edd84e67115efb71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
