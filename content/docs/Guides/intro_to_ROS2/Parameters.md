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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFX4VKXD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo7OwMk4klxmWGNEPe7vT%2BZ8gqosFwb4lBRZtVS2JfaAIgQAVNkqVzOy2xXi%2Fphjor9rwAdx7pFcTpQbxIK4DEy2UqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKv72iQmT0YRA4oGuSrcA4jbsJGCNMXDlN0iEMyRkvJddjpdIxr5GktnRuL%2Fu2sLl2P9S4Ct2jKT9qYn7Sb1%2FD2qbB2HLvqb2SU4aRpieXlsYTHTOMRNravQb6Eu%2FW08Eh7gz20qdYgDhNjLNpffbxRQCwZAbUcfeQfu%2FzygRPKVUQsdJHrg%2Ba0MVAb%2Bv0uI7VeUdN4hT1m65c0G8JzCwAwC7Sv9ih2WKvutETKrWAPg1V%2B%2B1QpGluwcyZoEGKHSKjLWVziJ8xmfrTq6JDJDeeODeprD20IxXAn0MPOHVOH4PYE59cKIzC84QjuXOOAMXWMDMrwc%2BhLJc3aFkHglEy1K%2B9KVmG7ppjf7OQatWcoY99Bb6OQAlt0HL458OiHA0w8cNxbVu4GhHB6KM%2BLNvGeIzGjKtW%2FmEn4o0OPxRyDkLQZkeNyiTmQZHeo1yy0Xx8w09YdtbajMTpzb8Q%2B2LwKeZTZOExqdN7SoDRMws%2FvnB7y455q9EsJ3tyRGJ9G7iw%2FpU3FVaN6TwsN1zaMmtsNUq00GWuml42ruEYSvkHPeyKlp98laVqwLCDPBOUVwD5Mb9Q7HYtc%2Fdx3wVFfcewbW5D1nAkuxHe%2FN8Z9vAFyQthDE0eY5xicAWNSHKd%2BoflMI4xxIY%2BVgH4MgMJOQtcEGOqUBzeDV3emcuD9KNzwgYtMfyJWeSgNjtOG8QOVoT%2BFC3PI4G7IBecqRCUgFTHLy%2FkCa1fhqSx92RihG8m8x6YqN7tU14l5cVzCCuc5hwCiqxMLbI3%2BFztVSGYLhkR%2Fd9V6F8Tqq3PwRapAxE4CxfM1MRxevz%2Bq1RtETrPxPXucsvHHow%2BzI8fPbCJ0VV8s%2BQbMZkoR2H%2Bs4HHacgUqXKj3PfBjFahQi&X-Amz-Signature=5b409d58394ba6f3ad7fb1c4e6371331b2f77beb1d898c9440075ca466b496e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
