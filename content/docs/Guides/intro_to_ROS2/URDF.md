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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOF7KCXR%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAQ77MlJi2CQei1k8lZz9M%2F2cEo4VW1qt0508UcLHEewIhAIgzS432PgVvY4Eim%2B%2B7IaEEFyBNMXkG2A1n9c6ALg%2FMKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwi0phwne9YRxAlqrwq3ANTGjIMezHpa7WJ3LyZjyqe%2BCD6jEJUmLRAjSQLJAXxNCRs3dgDyTN7EkfG8VDaLtw0KSNpI2dXNxWSAWKCyJ95hLLfM0SPjwbTzzrF3BPMzeqlI1g1wrTZUYqFKU9pPGm19W80QEbMDgEfBQGet4UNdifqiNM1SVf2W2TFM8y0APSi7yHDJxHz8VNM%2F4Y6B%2FJfil8OrP4AeuohDFMAls1580FhAzeul2igfdu0VsUahMQ643rrNOl1TBrwLDwpC10abOM1oHs5YEltouk3UXpd%2BjNYrjNvUIP2xdxLc%2FhRiqMZcbeWpgJM%2FnnykrmvrIiBKXJdUHJmo1oiSwOp6SpdB5%2Ba3%2BbFxxvOwGe6RhdNt%2Fqe0bWL4gYWbMACXZlphOZkKJSiW6RDzDcFkb2cZfDVifN2CUEu9awmK1Fos%2FMYDMEf01lW3oTYVoVr%2FINcEL6ClnR7UhCRbT7XgKy%2B5YT34DrEOe7BD2yGHvFUQW%2BlA91gXObkkqkcLpbyE%2Fth5V%2FnqjHLWdAJmD3wxymUq8kDwlWokNVWNS9EI4nLRmhF%2FCgbj8o9Y8e%2FkKvZX4Pr0SnoB%2BKGNKphBCN%2Fwnwc%2Ft8fQoZIq6yhn6w%2FTzYxNbpiKiRhj%2BwMsYTV6EJIwjDS4KS9BjqkAZalU1TGTruxNudxW69qv3XYosn7f06WBwD4UCsmj6RFLDZff3zFnC88oXkkWGwQ%2FUzW7mtFg2Kyzo58oP4RX9q6Mci7JvxoDTbQV%2FICSm7SFZ4OFz2%2BqnFdPSzMkT1YBRSH4WMq%2FpEwl0KwvRzKojLaLefxa6Nj4gd%2BDJ54rOBM131FMDPB0SNiN3H%2BRoS07dKrXmQR8gmLh3Fwf%2F%2Bz29AWZ6Y8&X-Amz-Signature=c8f93feea7125f2de267e506a53f9ce00f84f8b9092557aedf481e27253adfc3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOF7KCXR%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAQ77MlJi2CQei1k8lZz9M%2F2cEo4VW1qt0508UcLHEewIhAIgzS432PgVvY4Eim%2B%2B7IaEEFyBNMXkG2A1n9c6ALg%2FMKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwi0phwne9YRxAlqrwq3ANTGjIMezHpa7WJ3LyZjyqe%2BCD6jEJUmLRAjSQLJAXxNCRs3dgDyTN7EkfG8VDaLtw0KSNpI2dXNxWSAWKCyJ95hLLfM0SPjwbTzzrF3BPMzeqlI1g1wrTZUYqFKU9pPGm19W80QEbMDgEfBQGet4UNdifqiNM1SVf2W2TFM8y0APSi7yHDJxHz8VNM%2F4Y6B%2FJfil8OrP4AeuohDFMAls1580FhAzeul2igfdu0VsUahMQ643rrNOl1TBrwLDwpC10abOM1oHs5YEltouk3UXpd%2BjNYrjNvUIP2xdxLc%2FhRiqMZcbeWpgJM%2FnnykrmvrIiBKXJdUHJmo1oiSwOp6SpdB5%2Ba3%2BbFxxvOwGe6RhdNt%2Fqe0bWL4gYWbMACXZlphOZkKJSiW6RDzDcFkb2cZfDVifN2CUEu9awmK1Fos%2FMYDMEf01lW3oTYVoVr%2FINcEL6ClnR7UhCRbT7XgKy%2B5YT34DrEOe7BD2yGHvFUQW%2BlA91gXObkkqkcLpbyE%2Fth5V%2FnqjHLWdAJmD3wxymUq8kDwlWokNVWNS9EI4nLRmhF%2FCgbj8o9Y8e%2FkKvZX4Pr0SnoB%2BKGNKphBCN%2Fwnwc%2Ft8fQoZIq6yhn6w%2FTzYxNbpiKiRhj%2BwMsYTV6EJIwjDS4KS9BjqkAZalU1TGTruxNudxW69qv3XYosn7f06WBwD4UCsmj6RFLDZff3zFnC88oXkkWGwQ%2FUzW7mtFg2Kyzo58oP4RX9q6Mci7JvxoDTbQV%2FICSm7SFZ4OFz2%2BqnFdPSzMkT1YBRSH4WMq%2FpEwl0KwvRzKojLaLefxa6Nj4gd%2BDJ54rOBM131FMDPB0SNiN3H%2BRoS07dKrXmQR8gmLh3Fwf%2F%2Bz29AWZ6Y8&X-Amz-Signature=5c965661709f8c43a140af3f6435f2767034d0ea5840a4998cb4f709990d7dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
