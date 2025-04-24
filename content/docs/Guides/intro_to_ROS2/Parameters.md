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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PATZHP4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIA9RJcTpc6h5otBf8MmnlHIyl%2FuyRbwj7W4hZALNonsyAiEApODryn01%2F75YAFfrqNyjujL7YPvfqB1E4K%2FyJbfKhnoqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCrs8aZlR2%2FuPqN%2BircA%2FZpB3zFEJbzg6vurO7MXgeB8dk%2BSvrP4TJFID01qeP6j6Pf5hIbGjwmDVOWZbHWtpC2zPUIkn2wU%2BYqMDtVOqMKG2iXZ9iHlHSmxoU68NM9vL9YXaBclPcMZXkWGsT5i%2FjH1ThhPNf2%2BWgUZubv7F2mYcjPtC3rQ3DIpd7Yd%2FDT1%2FUlpJ8S5JaGVarNKWtAsupvzr08%2FdXIq%2BTdRGFTPS4QVsv8L%2FcMBb95Lbczy09yI3V3m%2BmS6ppkz4hHQ9yIVyc4W1%2FUTP60Kro%2BFz0IDvuf%2Fr8sCB9%2FQYidQCE%2F9L36PlnIg8Qnyb5S1vNoleYaPfNyvLeSfqejaoG11uTKv8NXYRkJZOoG91tjfaI6Q16IRffu54uEoI4m9FEKasSpWnkGdVjbLQoY0ivpnQQYmjn1DNqOwjw4f7Uz7Se9x3MXEEBIr1lwDBO%2Fk6FtA0tCp%2BPde4CvUC2n8yJnEfcyz9FkURucbq8CUw0JlTo2rUmOD2qpbr9TaeffeZiHDehTIwU0OL4VQLHZF7PwtiDF8URIC%2FkUXYiizvyAzeOtA9n6z5S5bwsfKqBsiAAeRXUmRTL7CU5qTTYY%2BT9mdqApmPokkQR92TKeOVirwhrXErIoFh6QJcjY2G%2BGdNdsMM%2Bap8AGOqUBopg0f%2BeReuEPwB0X%2FsIpTrRUH2eJOqzzEj%2FIv4OOUPvynRkAtaTJsk0kOf9tC75%2FoGcj0%2Bdcw2XoKVeRnll21We%2BD0TdzCZzZye%2FzepgdjE6zkKV0lYVMobWJ0gJ7B0HH96MFdauqJxtYYj9SoPF%2F4W90mhZ8L3ypaOxj%2BzD8NmC0PRuDw7ntYGaeDcToIGvogT5CcfWwDaaiMZpaehv7QJbVr5r&X-Amz-Signature=7bda63758e835b1960544c1a2ea162136fd4265177b169cea1e3f4c48eb78672&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
