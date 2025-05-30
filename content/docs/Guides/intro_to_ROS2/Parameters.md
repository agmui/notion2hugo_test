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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X54GVOG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYs9a29pi%2BbdXCiJ3Pr8lXuo7kUYlsXmx04a2HyRirtgIgbtJHGXAQNsNuSq5B%2Bmt8ydtUbmBQBAq4g9vXY%2FeVC%2FoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR%2FSlmD6F7m%2F%2FL5ZircAzS%2FqFZ1bERvZi6Ec47%2FLuYtJ5sry8OWQ1foOXyMkLHBxl%2FjhOf%2FdPsbmgptLYOcIl8k5urjVq4lF37OOMB4XgNCXJ9%2Ff0KSqKWOal7qlZJVCZiXTdZHKPy9bKHVDR6X%2FFC%2FBw0p2%2BKWErHcJN38Lepe6xnPYE71vCHoM5xyP3PtcJgoCRvGAfq7C%2BIRnXYLe9%2F1mOttIHY3iQj%2BALIqDdoRapeD%2FC3i4q%2Bx9HTudQ8aETehaTTPgWXmLqhDCQvdk9MBEFPToZB7oyuHKvkEPUljA%2BadJdsdgKTUwQ2wr9Msirc7ryyr3JIOXEiaEhbpLqOy0Xq%2FcSdZ2tPVJTHZYGvUeD4DBo6WZ0rCGj047b%2BZ4nrV%2FKIivXbznY80JgUFW4djk6LQ0Nmn%2FNPLh8PX2ytwyRg5Iv9Fz%2B4eBUmwo1VNUN85ydAZ%2F6dBYxfyGOPE8FwTsh03vWoThWCeDPlofuU2L0xD31GrPEalmusR%2FGOY6G1SX2HBWhOYZOXtFeN4oIFIc1FXngXCvVkTwuPP8O6VEHW081y89L29q3pHB5WtUkcaV5nNZlA00hwkdWxsK4%2BiK0agsY1yah2478upU9hkOb%2BfeUOmcVob1XrrybblFQ01GsN%2FbmyRd7cmMJXd5cEGOqUBlGgjfU1yevck2%2BzuNBwmYyCRnTunVrUI3Q0xEpksAT3GPM5336eP560J0rrsQUAUZpOD%2FYXTxVpRZL2sjK5dm5kxq3lOpTkk1Csv3SKaBXS5ZE5fNFPGgO2h6Dn3%2BTiMrhCaZsJGVcftwXAjupx2%2B0io%2FM6s34xhbereL4RNQ2Y7FSSTeUXJxLrw6bGahNnYtt2m08pXFC1HNPm%2BWrt%2B6KhbF4E9&X-Amz-Signature=aae0e0e318b1f4fa2aa64661b17e80d45b1a5e1100596f34ca9d3ce46f3be307&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
