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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDCTODPR%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCntrD8fwCQGSplayY4vq3mPeZW%2B1ebd9HWxu7jKxRRHwIhALv6uV5PmZV51Wx9%2BXrxEhDkl9qF4xd4ed1s6WiIlK6OKv8DCGoQABoMNjM3NDIzMTgzODA1Igwpokod690jy4uUx2sq3AO79fnN3zmpmbfpREpG3STWz7S62RlW2Hpa5b3GQsuXiPEVn7kz2Hy7GM%2B8%2Fc9M6vHoYBUn1IMAtpAijgp2ExfzWAFo1gZjNA9v6sxoTCFUm2kwxzmNgpQWj7rTI1mk%2F6Ecrj1tY4qiKjsfboWqiyD9lxiYTgmDbKh3R%2FMzZDDqXwd2keYV7kQ2R4RHeNdhssmSq7DzDXVSpjlaH2oZnOfAhWDO9YVjIY5tbU3DDJqZaGbOUGJEXI62W47oE3LD7v8Lt6KZo%2BySSg1CsY1%2BYa%2FXzLg0FpLQIHpMiMXAe4neQyaK97ovvWtQnbAVYwdzQ39W69eqsoCzVtAfNEammn64M2%2FZxwyCdPSrwuQggp0k0Sc0sg1MNOwRXsnX%2BofGG4K%2Fit9aipGl8UcdhndsfE8gfqmMZ%2Fnf0iVEDNEMfizbCiDNS3QQTkcj7Ss2g4TSaH8jdx3OeNRIicRj1%2FgTPmp0ozgie4AJx9UXqkO9UDOtYlPk6qqAIQeePIMREg55QhwIIPUmE7C5WFwIwrCAguOPODi9IRYxFsYJoNMuF2Movj6Zn9qItJeDHOW5azrThAJncwSyRe7%2B2ioS9H1bqd%2BVh4OOQ1NSlshm3egYqe7LP5ty4JXCgMAOV741NDDK%2BO%2FABjqkAWoKrmAhxMMHHkxjcxBIpY0EJErpVsyL7G6c6ZnRt2p0vfYWri%2B7hB0k24XmwqD2iQcsYARA%2Bu3%2BN3uWJx5QcQqQ6TD9pm1c%2BfTAlV0G%2BQkzCsnOtNHrh9Z0d0Eku1FYec3VF2D8JeQaW3dSJ9CxXE80jCjbCbpJn8uJF5tOC%2FedYj8SP5oDLtYbv1GytxT7p3%2FTRt8kAxm%2FnU1lUSu7PU7BpwQb&X-Amz-Signature=ed6f7b4023f98bdf2c69295929f98baca1dd9f7cf4dcf87e2718c615218d9943&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDCTODPR%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCntrD8fwCQGSplayY4vq3mPeZW%2B1ebd9HWxu7jKxRRHwIhALv6uV5PmZV51Wx9%2BXrxEhDkl9qF4xd4ed1s6WiIlK6OKv8DCGoQABoMNjM3NDIzMTgzODA1Igwpokod690jy4uUx2sq3AO79fnN3zmpmbfpREpG3STWz7S62RlW2Hpa5b3GQsuXiPEVn7kz2Hy7GM%2B8%2Fc9M6vHoYBUn1IMAtpAijgp2ExfzWAFo1gZjNA9v6sxoTCFUm2kwxzmNgpQWj7rTI1mk%2F6Ecrj1tY4qiKjsfboWqiyD9lxiYTgmDbKh3R%2FMzZDDqXwd2keYV7kQ2R4RHeNdhssmSq7DzDXVSpjlaH2oZnOfAhWDO9YVjIY5tbU3DDJqZaGbOUGJEXI62W47oE3LD7v8Lt6KZo%2BySSg1CsY1%2BYa%2FXzLg0FpLQIHpMiMXAe4neQyaK97ovvWtQnbAVYwdzQ39W69eqsoCzVtAfNEammn64M2%2FZxwyCdPSrwuQggp0k0Sc0sg1MNOwRXsnX%2BofGG4K%2Fit9aipGl8UcdhndsfE8gfqmMZ%2Fnf0iVEDNEMfizbCiDNS3QQTkcj7Ss2g4TSaH8jdx3OeNRIicRj1%2FgTPmp0ozgie4AJx9UXqkO9UDOtYlPk6qqAIQeePIMREg55QhwIIPUmE7C5WFwIwrCAguOPODi9IRYxFsYJoNMuF2Movj6Zn9qItJeDHOW5azrThAJncwSyRe7%2B2ioS9H1bqd%2BVh4OOQ1NSlshm3egYqe7LP5ty4JXCgMAOV741NDDK%2BO%2FABjqkAWoKrmAhxMMHHkxjcxBIpY0EJErpVsyL7G6c6ZnRt2p0vfYWri%2B7hB0k24XmwqD2iQcsYARA%2Bu3%2BN3uWJx5QcQqQ6TD9pm1c%2BfTAlV0G%2BQkzCsnOtNHrh9Z0d0Eku1FYec3VF2D8JeQaW3dSJ9CxXE80jCjbCbpJn8uJF5tOC%2FedYj8SP5oDLtYbv1GytxT7p3%2FTRt8kAxm%2FnU1lUSu7PU7BpwQb&X-Amz-Signature=5b59327d5182e97164ac2b8b3755e27841edfd7ee3fda543a41751650d7cef75&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
