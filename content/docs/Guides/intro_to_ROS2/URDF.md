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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5D7D6VW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz0czjTHzJmjhZewQCZ%2FpC4cLLwMa33GSqhjVQIYiy0wIgaZiqekyqI2gqHQRWkYKQnamkIuQXBEJFx4uA%2FLGAJCMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPrdwjnvu3ZJozb7ircA3j2NRyuTdfKOzlAHpOPQlq%2FYrKYndbI281OrE0I6zuTfnTJ4UFf22nupzXRe9xlSMaQN9k6ei2RMuobHkI5kri5%2FCA5mOcLRSNAY57fZcqGqieu1f%2FPq5sGh5F7%2FYcZE8rM4dq1bUEbgybNNVXpraoojPNJFomkUqOwP%2BEsGvwolYc2D%2BxCF7BK%2BKmpX4ZPVfMQDadutP0EUm0Kwse6yPCfZm6s165KASL%2B%2B7n0Gk05yP8AAiFp0vH2%2BPkIlJT1EbethgH%2FGK05cM1ikQwa2d4MPSVKfyqWE61Ed3j%2FIrxj0eER9aT5lBvA8CPkmtqU4AItozcEG5ZR5oDlC5wplwB5VOSNVgiTPiJRmCAegqTbG37%2FGQ%2FuJTwK4HZvELzGRIzGDQi8MLm9ZFgPmVKaiGPT7cKfphbPliXw6LANDzIc4fx0qowSoU3dUa5HQ6%2F5LNUtde1lhAIDHTMX5js4JUClQoeklihqziS1olYrfBZbdftMGLP4m%2B7iWvf3VngJnA2SRM8B5krmOC9AbcjgPAzyHY93oGK3kkHOzMZBGWVPuCUfRgdYcS77CSCkGI6h%2BctlbTCa4h%2B8h3kvZ9n6lPWMiUFipZQouJb%2FhZUsVPr4KjzRDne2V93gWzgRMNK1xsMGOqUBFAHGWmX4BY2rz2teQNgghfcpn6JTRWn%2FSDdxOReHJZ%2BgXdERuNMB3PqFeB7fkDHmy%2BbHaRCVv9t%2BEDNFRqWiRznvDmTEGvcCgMUhJn90eGw69htquTQEwNmde5S8G1FbON5Z%2FG%2Bn%2Fhvm52Et%2BVtxN6atEuyeEy5lsg1wFxTl1IqJeznAXixU2WE384ejbaM%2FVN7bpvxvebhfsHvbGb2yrjL0mJjB&X-Amz-Signature=82aa8364f47be3f45c1709092109efd7dd5dd3dec7fe5cf7154f19f18f95b2bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5D7D6VW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz0czjTHzJmjhZewQCZ%2FpC4cLLwMa33GSqhjVQIYiy0wIgaZiqekyqI2gqHQRWkYKQnamkIuQXBEJFx4uA%2FLGAJCMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPrdwjnvu3ZJozb7ircA3j2NRyuTdfKOzlAHpOPQlq%2FYrKYndbI281OrE0I6zuTfnTJ4UFf22nupzXRe9xlSMaQN9k6ei2RMuobHkI5kri5%2FCA5mOcLRSNAY57fZcqGqieu1f%2FPq5sGh5F7%2FYcZE8rM4dq1bUEbgybNNVXpraoojPNJFomkUqOwP%2BEsGvwolYc2D%2BxCF7BK%2BKmpX4ZPVfMQDadutP0EUm0Kwse6yPCfZm6s165KASL%2B%2B7n0Gk05yP8AAiFp0vH2%2BPkIlJT1EbethgH%2FGK05cM1ikQwa2d4MPSVKfyqWE61Ed3j%2FIrxj0eER9aT5lBvA8CPkmtqU4AItozcEG5ZR5oDlC5wplwB5VOSNVgiTPiJRmCAegqTbG37%2FGQ%2FuJTwK4HZvELzGRIzGDQi8MLm9ZFgPmVKaiGPT7cKfphbPliXw6LANDzIc4fx0qowSoU3dUa5HQ6%2F5LNUtde1lhAIDHTMX5js4JUClQoeklihqziS1olYrfBZbdftMGLP4m%2B7iWvf3VngJnA2SRM8B5krmOC9AbcjgPAzyHY93oGK3kkHOzMZBGWVPuCUfRgdYcS77CSCkGI6h%2BctlbTCa4h%2B8h3kvZ9n6lPWMiUFipZQouJb%2FhZUsVPr4KjzRDne2V93gWzgRMNK1xsMGOqUBFAHGWmX4BY2rz2teQNgghfcpn6JTRWn%2FSDdxOReHJZ%2BgXdERuNMB3PqFeB7fkDHmy%2BbHaRCVv9t%2BEDNFRqWiRznvDmTEGvcCgMUhJn90eGw69htquTQEwNmde5S8G1FbON5Z%2FG%2Bn%2Fhvm52Et%2BVtxN6atEuyeEy5lsg1wFxTl1IqJeznAXixU2WE384ejbaM%2FVN7bpvxvebhfsHvbGb2yrjL0mJjB&X-Amz-Signature=da4080f555f7840ea938cce6b5b353d245737c6feef3a608607e52629db5867e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
