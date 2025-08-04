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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7I3SYJE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD27QYOCIZH6rp13PoshOlTtaXlbBSQ7MRYhUARkc0PZgIgEDvFefeVlffSboPYHAKfpScFG1w4uPotXK%2FXkI2X8A8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKtTlNVK6IGb4HyqYSrcAxtUQdX%2F6Rna2%2Bem3YRLEUPJ%2Bky3yLB9Ja5S3Gse6g1kYwZLHuDPZYx%2Fd%2FG%2BaY731cu2bzfXA64IxflhghDiOHiNWuS0F%2FzGw2YBEKvVHE6bVF%2FJCpbWStBfFw7lqASfEKxGEMyM0ZFl7iwVXawbH%2FqtpEE7vCnyQ80ps99%2Brm%2B7%2B8yecMgDIhSA05fGNQ%2Bgmw18SCCGVFQsC%2B3LC5asBB%2FL5ukzUJXoNkm15%2FVGVxsG3nkvH294D2SS1%2FUQJuKRnCwcoO9ogtJAMtzbD3QBSg2wmxIanRJ7rd37vVAqnphZQ7sTL%2BlwrbG4dTywSpSfCdhhR%2FmF4xZ4YtSTN5CbiJocfYYxkqJAG8Syu6CzqxUJC%2FT%2F1p85VpS0HfaV7EZpi9PCs6nqSnQx9edCLBYF1iJxhza%2Fd2UeG7IJBmsElIkvrUBLrCu%2FnCdm4xPBfiC14OvCOBTQrTjk4Je2TIkpbPyJBThPGQdfMa58vTV5p6F2EEUCCsvBXcBWESmsYkg2qi62xrS98ELGctu0moTkj2N4qGf4Ru%2FsGTSzOvhoAlDRC2NrXmbvc0d7zQ5v2IE8mVBbMMnFKeUyoF1duT3s7Z9P7vPIIWa2E3HJY4E4XWIeqJTY7jo4bDudEIxfMJj4v8QGOqUBfiukZRg6hxQPO3R4yMyq%2FSzG6qzF4403NHEN1kPoOjjj1en9cHy1pYMWGNTWzRe%2BHZp5m5ekNyXvK%2F5fhjDh1lBYO%2FG9YwDXrc0WyELO6U1H0MaCtV9WCQrdnv1qGwjyWx0UV74hP68t86jSSBa%2BlKU9d5qwA0VNjo9xSAj9bHJtpH31RMlDryggyWPVRORtTo4XzUcqCnbMA3fXZSqRrfzzDe0O&X-Amz-Signature=70926418c0dd5da96c39a895d8cf5bf71f58bbc849ba0166f697f8efd1e0d34a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
