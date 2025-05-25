---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Parameters.md"
title: "Parameters"
date: "2024-09-02T12:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 144
toc: false
icon: ""
---

Creating ROS nodes is nice but sometimes we want to have configurable settings for our nodes.

This is where Parameters come in.

For example, say we have a camera on our robot and we want to set how zoomed in it is. We would create a ROS node and ideally, we could have that node take a parameter that asks for how zoomed in the camera should be.

Later when we go run the node we can just input it into the command line saving us from manually changing it in the code.

Let's create a simple ROS node that takes in a string as its input:

import the ROS libraries and create a class called `MinimalParam`

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
```

In the constructor, we call the parent classes constructor and create a timer object.

Then to declare a parameter we run `self.declare_parameter()` which takes in the parameter name and a default argument

```python
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)
```

```python
    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

```

```python
rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()

```

To run:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624LO2JAQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCCVtX55UbAY2rp2iv5Gbu%2BD1zvaVvEd05ABbycPbVhwwIgJaSkaRMb2lKL9O%2BfZQ6FWaN500nGuY0eZMvmAyO4J1Qq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIIOTDtbHUkMYgSUZircA7z44LHO0RN%2BHNviPmRdfNIzv%2FyVt%2FnCYCvE0Z3EnbqA55h7%2BLqHaPY%2F%2BqKVMsqXvrngFZeVCdZaWoBeM9WQmGySb2T7dG4mFfcgT0etvLQ88hOFChYNv%2B6u4VreSrdXSX15s5Kmjo4eCjC6c%2BQMGWtEkcNWuVYbF6zp5KxKLHPBydazxyZY0Hd7G9kf7diiY0IEelTRIjT7A3IfPFKvtE6kJtYT%2BZVGORa7jophd554bGMHlS5A5XGsUiRhKI5Ay2ERM9JTPyzgFpaZsiLT1a99Dg868Ga7Ua9E8%2F%2Bnoxg229g%2Bx1LV4t4Vjw1Y57h%2B3%2FAxwasQg%2F94IYj22kTjX70E3gDUB4WYWzcRGqTghDvmf8C95fE3PccpKvy%2BGVr4rYwH70yN20AxCD125rySNO7q3uMgO1Jg2w7tTmvUWf2TCcYGc6QceASq%2FlduG3g2ojJ%2BLJyV7WvCY1w%2BmfisO8AWYrjKgflSP%2FMUrZ442x6SzE7w%2BLfPwcRZmxgN1aTJM76fcGmingLtOtQlgzmMEKUTutDXKwYgWCaYUWDG5fMASYoOIOdz4mUXl8IWqcpbzvyECZ4RJMQxDQ6b9AWJluuLZ842S5WYuamOD6aCc%2BPdkXSidbkOuERl2Ix%2BMPm4ysEGOqUBPYGnHx8NeqWPhOd0y%2BjTnx1PmgiLyDee7%2F7lbqVzek01ji8dElmcyIIiEJYMVYSMz1UFSZFiOy93gAf4oMK8CV7brM%2BF87WHjemqxkMhz6P%2BX9Lg0MuE%2B7tW%2Fnppkgy%2F1e19WDVdG0qe3AvnBEQHvE3aj%2FK3rJWVcpgLEX71tIWZwEIW6Ar4fcD0si4xkhdaJTJtXwkOerkdfeXWBLHK6RGI429Q&X-Amz-Signature=0feb27aac2d62051878b7166fd0c6e52cef4d3be8255c4a6bd2bfe9b9d1f6c81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
