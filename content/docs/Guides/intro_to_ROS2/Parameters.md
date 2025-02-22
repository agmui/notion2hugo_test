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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6Z3S2A%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBT%2Bl8OGkbnGeHdcCVMM5kCqwsTh6Ft8ftVTx4FwsMBaAiEA4I2JRZSghgcoFvZU%2F10eIAbzys%2BbumCkVQ6XqT2lXg8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9F2e5HFI7Npd%2Bd8ircA7grdQnL99MoyxWo%2F8nGYHKaSm9Spg5TRMIU6rs8ZppetDupx%2FCjAzE8TJLowgAv30S17q7%2B4hiPmk6uMUkdpWwNE0Ago0aCQJkBxVrmLurmKuY65Z5lBe9Rcb72MrLVW%2F1a5zJbtCwp4UDI3I9am%2B4mxOphgCRtmFmA5ur%2B7J2AdiRYDx5%2B8BPOf4PTwS39CeCr9QHawxLNit%2BAEbR2hnP74OC9Cz%2FdNKlTqVwoGD7K6Cgy4iC6mAFInVdpAi8g9Y9Oi3o8e5CIgz60cw25%2Fb9l67iHrfnEhgxiCi0cTblpSTEcnsDu6KVTlZWBeZ8olRxb5YvwW2w2O%2BnAOEyuLUDPrxqpl8eXO6AtSEuR7nBExUee7SP81cVz8JzFVWevfyDejyX6XS3TZAxNoN4HeJrnT7DMiPb9Qn4izPM1ALQM9lPrsrDo%2FnhggUC3r8WqeZHMGHZjpukB4SEm1PYz4wMFes5RIrLcCDW6uAvDTzGJ7mPslgP1eHNDVssdbw%2F%2B3Mhtq6AvX%2F8yJSsGRFlpvWeAEm6jNh%2BNYEHasejHsvSc0qar076RUYEcaG6%2BI4bTsGIYv3QGe8eKcSWzkaa4B%2Bw7D3opx8NvEbOMUzEMY0tnn2oBAbH765Zpgjo0MJzf6L0GOqUBsJ6sPLQVQuzW4oP67LxkJ4%2FlSOCySATPiEFJgI%2FSBbRedjTsi2KzzXNQks4cIE%2BuakJbSao3X8%2BN7MFPbhQlYcobimoQit9%2FDNLBPtnymJtSiNz4rroG35B6Xdls7lz%2FQikHTXTa60Sh%2FQg4VxiQNE1CniEq8zdsqXJ28OM64i7BCkXIEmbLDDg80Gd5Swi%2Fd%2F67%2FEiL5PUXkruli0kyMn%2FPF4%2Fk&X-Amz-Signature=0fa70c9e6f374c6b5ca5d7c0bd5c1b39302db654e85ca55dc6c69ad32aed28ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
