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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BE3KPDQ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh1cpvb98m8MLeEVWlUQSIRzcMPzFloBrrgEVlEXCcOAiEAt7SRW6gxYKvt10i3WvvElsB8W9xmoqZoJMnJUgBtUagq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHyVuPcFWvxdPE6kOCrcAxkXArvnmzTSkywMX3k4hM6RHUy%2BnKLWNChTgxnarU6%2FAHybGp9d20b8lvjEjoPZELAn%2B8iuz20rH5Wnp9N4lXBDB2vituo6%2BjZuRKVTBclyCOjSXZUHlKPlMPN%2FyQQpSX15qGeRQ6TICE6sGzlrOmdHI9dQYoZKhuAVgmaXgVDKp2cmYfPc3wndlcJ8MnP076S6hhlNr96xRzpfWXgszbjQj7LOnkI8Gb9CuKYJ5Fkbt2Lq57fDYzFq3IeCsOv7wGwn8UsAN9q02jiZfHEVQqje6Oo%2Bcm0dlRXIn0gv4jkMQTP7MuYSpAuFhR7VztneBNz%2FSi%2BkvzWHP5vH%2Bb3O6cjPlHelQ8qzF9J9ISMy1rOqIl3NUIFKMUtiY59pRD0YXEcRvF3spVNLCFTQZzlBRoyg2MdYdo3vMxe3b1KkAKK%2BuXPs2vHN46gvQSmm22B1m7yW4MUfHMNjGF4j%2BWUVnTLo0RgR0Mng7bp%2Fis58ixplp5K76flWEYxUZP80Un4QdhchkwLjrQTM4H%2Fwj9fepAgQllkgk4dyeBsj9fP7P3ahGupPuq39bxxdHCXpWy2tXNTaJXm1%2FBNi5QrkGnXZi%2FPNJdk1kVAxdkaY%2FTAawLxrwwMAf8xmp1%2F3cHgmMNWjwr8GOqUBpgIEZHRUnJ89zTbKkbRe1CZ%2Bh5Pqux88CLb6UcexFjbTsbZIw%2BBhsh0pgJSGhw7%2FFQmo1ZdMg8AOmOu10RYaNke11%2BeBXNZ%2FmF3qLxtSZwjXXCaouA%2B1k0TCGbFXPKU3ZGFgtLPtsQ7YaE8pnzJ%2Bh%2BUoBSSVPgbnQqCE3SD8v8tzqAvtuCV6eQ4O47EHOYGTFOkLyn8WUv1r9FBI2ZYcnVZUwONK&X-Amz-Signature=bfca7082c35fdead8d36fdc76c8bfcd62034e80cc167ff616997f03009468edd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BE3KPDQ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEh1cpvb98m8MLeEVWlUQSIRzcMPzFloBrrgEVlEXCcOAiEAt7SRW6gxYKvt10i3WvvElsB8W9xmoqZoJMnJUgBtUagq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHyVuPcFWvxdPE6kOCrcAxkXArvnmzTSkywMX3k4hM6RHUy%2BnKLWNChTgxnarU6%2FAHybGp9d20b8lvjEjoPZELAn%2B8iuz20rH5Wnp9N4lXBDB2vituo6%2BjZuRKVTBclyCOjSXZUHlKPlMPN%2FyQQpSX15qGeRQ6TICE6sGzlrOmdHI9dQYoZKhuAVgmaXgVDKp2cmYfPc3wndlcJ8MnP076S6hhlNr96xRzpfWXgszbjQj7LOnkI8Gb9CuKYJ5Fkbt2Lq57fDYzFq3IeCsOv7wGwn8UsAN9q02jiZfHEVQqje6Oo%2Bcm0dlRXIn0gv4jkMQTP7MuYSpAuFhR7VztneBNz%2FSi%2BkvzWHP5vH%2Bb3O6cjPlHelQ8qzF9J9ISMy1rOqIl3NUIFKMUtiY59pRD0YXEcRvF3spVNLCFTQZzlBRoyg2MdYdo3vMxe3b1KkAKK%2BuXPs2vHN46gvQSmm22B1m7yW4MUfHMNjGF4j%2BWUVnTLo0RgR0Mng7bp%2Fis58ixplp5K76flWEYxUZP80Un4QdhchkwLjrQTM4H%2Fwj9fepAgQllkgk4dyeBsj9fP7P3ahGupPuq39bxxdHCXpWy2tXNTaJXm1%2FBNi5QrkGnXZi%2FPNJdk1kVAxdkaY%2FTAawLxrwwMAf8xmp1%2F3cHgmMNWjwr8GOqUBpgIEZHRUnJ89zTbKkbRe1CZ%2Bh5Pqux88CLb6UcexFjbTsbZIw%2BBhsh0pgJSGhw7%2FFQmo1ZdMg8AOmOu10RYaNke11%2BeBXNZ%2FmF3qLxtSZwjXXCaouA%2B1k0TCGbFXPKU3ZGFgtLPtsQ7YaE8pnzJ%2Bh%2BUoBSSVPgbnQqCE3SD8v8tzqAvtuCV6eQ4O47EHOYGTFOkLyn8WUv1r9FBI2ZYcnVZUwONK&X-Amz-Signature=de906aafec83c25cc0fc22a02c21dcf7742a0ded2fdc87140f487d3885b07346&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
