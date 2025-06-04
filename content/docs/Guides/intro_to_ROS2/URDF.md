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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RA65QO%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDSWj35YVA0zNkV%2FcaaZdLdFXraopFvwD0mw6N%2Bxe2%2FDAIgVf8LcF9Ih6ZTL%2BLAbR1GQNjrBSqdAdfoEYil%2BzjRKeUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJfQmeBpMx0WXzTxDCrcA2ePtaGneGpBnswpkC8Is41dNQmS7dBNvJIWbeetiIqohGNfpTRmFit3PGo2UbZ51QShV3wNzx13LfaBRPlBzlTZQ8SkjdDqmaSgSA97S4JUXLlVH5KAeb09BBLSCjcbE9pdiSiTIZYUwsr0S8zf4TmC2jiTaeTf5SepnsE%2BNni%2FrDpheVyHWCZJf%2B0gOC3xK92FrWeBUAkidrlTyOiu6gRkAdzKG5cm7lwNmgozJlV750Bon91tz6b5rSGXzZsfl749ZxoX3qNET9e0N6XJ7ME%2BnqG7OYWX1ua9mYxpn2MUQjBSinqH%2FiczJz0WM70XNNnr1SYmNwpHAlY7%2B%2FhiGK5h8cDwboszvusaXKyNmLzGPVMsd%2B92C9Nb8rEG9g%2FXBf4NjaNcIkaLNE1UpIuwyq0LHx6NCKKz%2FiVKeVcnlSTtWoKQd7nDd%2BtGtU7CrWUQxkaxOcU6HaZjKOu2OEAkMae8exoSP52ms1luA07UeRCfz177PuUOiLK1A0mfkhNTPQpG4dkZZiOLOlKRUpuMx9wZPQILC3GGdS9p0wCPCmsqGYzqaXKaDechP7EHRJ%2FFoweGbUcojatDgzo2fpZGE1FTP5UihqSR6d7FmdwvSwH54facQlBzAcWryoprMLuZgMIGOqUB%2Fv6I3ArgIV8skPPbUEArOqeAZACwXYZ6V%2Bq1uhWMozVmJbFHdwcjMrtaxAM9qpua9MRVDxU4TNA2HD0IxHFywejiPTnItsx40qsz%2FbKWvc3rzId5LJOCGkg7VBKI4GQi34NuY%2BXb25I%2FrTv7bgX7XNpvMH%2FUUxw0MLlCt7AOm1dVEDN8C4yGFt1nj0BatoJ0TiQK2bpEcd4pzFLIZEDGoyiDmJg8&X-Amz-Signature=08db899979ae1d5a96e68cd943f4144ce3bc63b82f78464028ee4ac3eb9217c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RA65QO%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T091010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDSWj35YVA0zNkV%2FcaaZdLdFXraopFvwD0mw6N%2Bxe2%2FDAIgVf8LcF9Ih6ZTL%2BLAbR1GQNjrBSqdAdfoEYil%2BzjRKeUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJfQmeBpMx0WXzTxDCrcA2ePtaGneGpBnswpkC8Is41dNQmS7dBNvJIWbeetiIqohGNfpTRmFit3PGo2UbZ51QShV3wNzx13LfaBRPlBzlTZQ8SkjdDqmaSgSA97S4JUXLlVH5KAeb09BBLSCjcbE9pdiSiTIZYUwsr0S8zf4TmC2jiTaeTf5SepnsE%2BNni%2FrDpheVyHWCZJf%2B0gOC3xK92FrWeBUAkidrlTyOiu6gRkAdzKG5cm7lwNmgozJlV750Bon91tz6b5rSGXzZsfl749ZxoX3qNET9e0N6XJ7ME%2BnqG7OYWX1ua9mYxpn2MUQjBSinqH%2FiczJz0WM70XNNnr1SYmNwpHAlY7%2B%2FhiGK5h8cDwboszvusaXKyNmLzGPVMsd%2B92C9Nb8rEG9g%2FXBf4NjaNcIkaLNE1UpIuwyq0LHx6NCKKz%2FiVKeVcnlSTtWoKQd7nDd%2BtGtU7CrWUQxkaxOcU6HaZjKOu2OEAkMae8exoSP52ms1luA07UeRCfz177PuUOiLK1A0mfkhNTPQpG4dkZZiOLOlKRUpuMx9wZPQILC3GGdS9p0wCPCmsqGYzqaXKaDechP7EHRJ%2FFoweGbUcojatDgzo2fpZGE1FTP5UihqSR6d7FmdwvSwH54facQlBzAcWryoprMLuZgMIGOqUB%2Fv6I3ArgIV8skPPbUEArOqeAZACwXYZ6V%2Bq1uhWMozVmJbFHdwcjMrtaxAM9qpua9MRVDxU4TNA2HD0IxHFywejiPTnItsx40qsz%2FbKWvc3rzId5LJOCGkg7VBKI4GQi34NuY%2BXb25I%2FrTv7bgX7XNpvMH%2FUUxw0MLlCt7AOm1dVEDN8C4yGFt1nj0BatoJ0TiQK2bpEcd4pzFLIZEDGoyiDmJg8&X-Amz-Signature=5b06bace4dbd3f6f75cb1c104d5a1b60ea8c269b34c465928a4d3293fc12be06&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
