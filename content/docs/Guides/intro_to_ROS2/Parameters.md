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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJH7TF3V%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVnLSP1FVXU3Gjv%2BrEHRll%2BMCZhDlDHgd4mSHIcaoc5AiEA8X8F%2FdXFkkV%2B1iQMM6PkH0aCvQQsWLxzYyTHV%2BsFcEwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2BcGY4mHwZ4fSbjSrcA1KcswnNxBzGWWitw%2FCXdsy8OPllPn7Vrqj3idZXWPQ95L2DwW0P4AqZsM7z4OT%2B9gQdO%2FzBTpP8Cm61aOb1enIVfubi0STUD748sq9dm1QDi6cVPRuWTwWCgNNqtk3p05d6qnzv76aWA4kDvrtf8Py%2B6MZ%2Fao%2Fmhdp%2FgqcpQBXUl%2FTntmrPfGnwCjz6KukUQRtH8HuKrSnuPWM1nEOWFq52ksjMZ4M6%2BFzznK8Z%2B33rQEjaraRf0u8xdb7mfrrWWYyo4rgsFG7fJbiwjt%2Fpo%2BkFjIRNz4U2YADjRxKYj8gqXJG5WT7gNlNFSa82nw0k03TDj6HPNHzosWkns2z8vPyzhQxVRaaet%2F1kL4j%2F4qM5AcbbO4Ph6FaXV7nptM2GHabEvYKQM0JJYh%2BrGqq91ZyuQT0G0sKw4FaKnbosOcmjFexKGiy39lGBjMiY%2BY7pDUg96LEMQRuQE%2FB5EjNSDG%2F4tnzId9EcYjD9rC0ipomMCGVN4gajQ2OdKz3VRfLEpbEMCO3Y73evaimoTH8j%2BGVip5tJ3OKNEfGDUgASz4CqKNSa6%2BndYVqTWLC1%2BvCsn7HYGJUEfxLdj0%2Fkqdk6oMwh0JIoMmKxB4Zovk0L1Jr7%2FmDzXbcLFH1uex%2FuML6L6L0GOqUBE%2B2suowBOiQeLOSCPwtC7UGu0C13ErA%2FLtL2tun4flLBwtZD3voTUhDj3IGfGh8bhr4l3Fa2CUjT3dDAgy%2FDTG66FR6P0yj%2FZXfYYK4%2BC7udaocmu%2BiNqZrojc8HZR7Qo%2BuU9pH7ruSTix5hVUudSSVQQ6vsQpFLZYSc4cxIbGXwBBUEF9Hv%2FeAojpa9MF7cjuIl3%2FygZJRPuhWFgtLR7EOfrAED&X-Amz-Signature=d61ef04697574e248bebeeaa32f7cb4f5bebebb0cc90f64beaa98b2e3a788460&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
