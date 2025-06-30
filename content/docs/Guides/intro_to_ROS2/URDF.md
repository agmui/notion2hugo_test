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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVH5ZQIE%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmsKa5XcSJoqr%2BfAoda5hSq7nLTsuxOCakxtGaC7SVPQIhAOuJ6hMqWm%2FqSaUikfP3yheDnCJ7W8fwn7JR3EeI%2FZvOKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5T53DVh6UwMb1ZFIq3AMA32ZJY4vS%2B%2BnegOeYt4ryk8330XXIlqpMhzFF26bOzKNEB5SbbJcwAptvPqcsxzq%2BZAAOEnZuvciZAe1%2F954%2BiPVSUet7xTUpm4fQ0e3G%2F%2FeojbYaH5kCFUOz86y%2BMnBP5LlAYNT96sedtCaXfsz74RiAfwj%2Fs9x6NrEtcPvhCu5HnNupVnFppHlTmteC93L9rpcRm3ZsyXFGWnLgu98LhIBlkyksi1EftoczFzsbS8LWFETec0jVn1KzUBzRNc0Wp3XB1LkwcNfhr5BulAH6OBdU8CozPSv6qB3JmI2KUxwge13XJfJsUbwaDGyH09PI2zr%2FYdd0PH0ZshgWFfrhhQIFmUUZPZTLFckLXNyZcydJABpMwYYKla9K5CPz958gyACM11UFBqsKVQUyTyFVABNmZaVapsAuiycCl%2FJpuRw7Bjpu8O35OHJaEkXS0%2BhzYJxtv9l3QxLTBPa23l45aLJJzrU%2B0Tbfx9owgvhDNZoz6%2B4GqqF%2Fga5%2Fk8A7F4UFYGH2yvjCp3tcNKHJpAWBQrRTQ65K0Yu2lmhzEhG0rEWEBnQjE%2B6FTDEWlCpMoWHoueLGoG42mB%2FhGYjI3g%2BQMveMaVppXWfoCICCMkabVwBzMUjM8K3s5OLzHDCvzYnDBjqkAark6CCDpdlBZXutYAg9SsqJ6EaVt8VGm%2BGpKosz1keubL7T7VMXfLFJ7lyeot8dqA9%2FY8%2BTLfIvsFhx5FlcsQPLSQw1QHCLZM8ShbuGofw5B2reSmZ2q%2FWDrxGcUQr5%2FWqUsTuomlORRX27Wzzfh6xqL4oifT6XBngiVMJu3cosrkTCc6gryjahhDkzqCsn8TnF7k2%2FJJ5S0D%2BYkzjD3q3wXuHg&X-Amz-Signature=b6809cc4df05dae78f4d2a07480fcf6b47927a52eb87c3de13cb7e61112bcc38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVH5ZQIE%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmsKa5XcSJoqr%2BfAoda5hSq7nLTsuxOCakxtGaC7SVPQIhAOuJ6hMqWm%2FqSaUikfP3yheDnCJ7W8fwn7JR3EeI%2FZvOKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5T53DVh6UwMb1ZFIq3AMA32ZJY4vS%2B%2BnegOeYt4ryk8330XXIlqpMhzFF26bOzKNEB5SbbJcwAptvPqcsxzq%2BZAAOEnZuvciZAe1%2F954%2BiPVSUet7xTUpm4fQ0e3G%2F%2FeojbYaH5kCFUOz86y%2BMnBP5LlAYNT96sedtCaXfsz74RiAfwj%2Fs9x6NrEtcPvhCu5HnNupVnFppHlTmteC93L9rpcRm3ZsyXFGWnLgu98LhIBlkyksi1EftoczFzsbS8LWFETec0jVn1KzUBzRNc0Wp3XB1LkwcNfhr5BulAH6OBdU8CozPSv6qB3JmI2KUxwge13XJfJsUbwaDGyH09PI2zr%2FYdd0PH0ZshgWFfrhhQIFmUUZPZTLFckLXNyZcydJABpMwYYKla9K5CPz958gyACM11UFBqsKVQUyTyFVABNmZaVapsAuiycCl%2FJpuRw7Bjpu8O35OHJaEkXS0%2BhzYJxtv9l3QxLTBPa23l45aLJJzrU%2B0Tbfx9owgvhDNZoz6%2B4GqqF%2Fga5%2Fk8A7F4UFYGH2yvjCp3tcNKHJpAWBQrRTQ65K0Yu2lmhzEhG0rEWEBnQjE%2B6FTDEWlCpMoWHoueLGoG42mB%2FhGYjI3g%2BQMveMaVppXWfoCICCMkabVwBzMUjM8K3s5OLzHDCvzYnDBjqkAark6CCDpdlBZXutYAg9SsqJ6EaVt8VGm%2BGpKosz1keubL7T7VMXfLFJ7lyeot8dqA9%2FY8%2BTLfIvsFhx5FlcsQPLSQw1QHCLZM8ShbuGofw5B2reSmZ2q%2FWDrxGcUQr5%2FWqUsTuomlORRX27Wzzfh6xqL4oifT6XBngiVMJu3cosrkTCc6gryjahhDkzqCsn8TnF7k2%2FJJ5S0D%2BYkzjD3q3wXuHg&X-Amz-Signature=d9d22093f29558e4e9e8a7c9f7fdc7c301712f5b5e4349bfcf7de0205c1d07f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
