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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XLLJ4TQ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2By%2BFlYq8BACVIp%2FoBJWAsKfYdscFLqZMurDqkzArXcwIgEQJSz5ADFI80ya5yP1nf%2FiGvoH%2FCe0r3nInapn%2F6NhkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXI3sYmuNFd%2B3o6kCrcA3pdpjUFLEe7doHkyAfJC7oXwRFEeWYjHScNSQwNJODrNG2t%2BnlIOJAd16AochGLmYttA7rVO%2Fs6iXPwoqfUQle2tqpQSTMbBumrj6zOWgEMdirCfrQj7vhXJ0gw7GgENDBd1B8UTRd7745yZvkhTC%2BYTSIc8WSjiOjOYQyIPIu4efeB7cO4pdBX93TpEqflQx6WyfAUVakJPkWAP0%2B%2FyIT0f2UWdWi5AZpvN9vf2syqAv2Ioi%2FSljLPCUG4bMdaJEW8XEM8TSfhl1h9vaYgaRzjWtx9InmyUK5jpHSz%2Bz3vozmScJao782UCefhUS9vGI4h61E7bCofgdWmYrSM0TfbQWr%2FSx2JcKfmhOzLFFOxM%2BC%2BycM9YcnXEtgvnKvGB2BWp7QHqQDyO6tiINpkylA%2BhEvAWzg2BOyDeL304%2BEYaYX7ik06hibSp2RWDNPi972Xw0LvDYPHMYxcD%2FBjDgOEBVEkdJU75yqcmWDA7co9JznzbpdiZRa%2Bn9II4ITCcGyTCxvLm%2B994kDtg9I83%2FIraPdT%2FnlBl7p5c5fcDA5qlodNLVD6ReqLXuaktyN6zsE2tb93j1yUs8ERqenXiq%2BvmWQJUNnxETH6IzrYdW%2F2v%2FEZGRXr0WwygvulMIjZ8rwGOqUBTdtRLnrBrE8%2FLJJu3aOLNCJnIU2mI7QHUnwOF37JfJ9E1PaWwuvaSXbZ9B5HGGQLVgK78IkAYQTH3n3Gv2BF8czhZojgTKrMl%2B5dk1rvb7ctYAqE18C6dmHmKnQlSQvth5c7Bp6R6hs%2FtmyZ6e5Kw%2FIhNgcmhsJpRIi2%2BGG53rGnhAa4FUVPsdmsS5oYNfPPkj6j7hqYwoT5vql%2Bes9MJ7rvFmPu&X-Amz-Signature=dea3b5711a57cf0581071f96b463dcbb406aa74a60307c4b21ac291fb5e5a6bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XLLJ4TQ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2By%2BFlYq8BACVIp%2FoBJWAsKfYdscFLqZMurDqkzArXcwIgEQJSz5ADFI80ya5yP1nf%2FiGvoH%2FCe0r3nInapn%2F6NhkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXI3sYmuNFd%2B3o6kCrcA3pdpjUFLEe7doHkyAfJC7oXwRFEeWYjHScNSQwNJODrNG2t%2BnlIOJAd16AochGLmYttA7rVO%2Fs6iXPwoqfUQle2tqpQSTMbBumrj6zOWgEMdirCfrQj7vhXJ0gw7GgENDBd1B8UTRd7745yZvkhTC%2BYTSIc8WSjiOjOYQyIPIu4efeB7cO4pdBX93TpEqflQx6WyfAUVakJPkWAP0%2B%2FyIT0f2UWdWi5AZpvN9vf2syqAv2Ioi%2FSljLPCUG4bMdaJEW8XEM8TSfhl1h9vaYgaRzjWtx9InmyUK5jpHSz%2Bz3vozmScJao782UCefhUS9vGI4h61E7bCofgdWmYrSM0TfbQWr%2FSx2JcKfmhOzLFFOxM%2BC%2BycM9YcnXEtgvnKvGB2BWp7QHqQDyO6tiINpkylA%2BhEvAWzg2BOyDeL304%2BEYaYX7ik06hibSp2RWDNPi972Xw0LvDYPHMYxcD%2FBjDgOEBVEkdJU75yqcmWDA7co9JznzbpdiZRa%2Bn9II4ITCcGyTCxvLm%2B994kDtg9I83%2FIraPdT%2FnlBl7p5c5fcDA5qlodNLVD6ReqLXuaktyN6zsE2tb93j1yUs8ERqenXiq%2BvmWQJUNnxETH6IzrYdW%2F2v%2FEZGRXr0WwygvulMIjZ8rwGOqUBTdtRLnrBrE8%2FLJJu3aOLNCJnIU2mI7QHUnwOF37JfJ9E1PaWwuvaSXbZ9B5HGGQLVgK78IkAYQTH3n3Gv2BF8czhZojgTKrMl%2B5dk1rvb7ctYAqE18C6dmHmKnQlSQvth5c7Bp6R6hs%2FtmyZ6e5Kw%2FIhNgcmhsJpRIi2%2BGG53rGnhAa4FUVPsdmsS5oYNfPPkj6j7hqYwoT5vql%2Bes9MJ7rvFmPu&X-Amz-Signature=7bc59029d468ea9fb993c44ab5babd9836663e14bd065ec12e798d1909544757&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
