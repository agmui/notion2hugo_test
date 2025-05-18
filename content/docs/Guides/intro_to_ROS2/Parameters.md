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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LGV2HTW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4HvfF8Yylu475Su6dI5TLzdAuLqp%2FJLP5pFP4MyPDuQIhAPIIdQroi4z289fO05Svpxzcv4Zo37SJRcfgTZ%2B6qebTKv8DCGoQABoMNjM3NDIzMTgzODA1Igz7tQxkwmmSYqfu%2BlMq3AO2lUScnjLKjbdiPms2L5qZB1MdJJ6pnXuKBEBqr2VaP%2B9gatIw6e1Lq8yB2I5VGCEfBXuSTg8NabwTfPf8ZpzirWxeVfVhOr0pn%2Bi9zZ2vYCk0meCuGdjwShSD7CvIm4B4ZCBQQgmBugWkCIh0E9Q8VAdGMrfLHtcqa2Mh%2FO2lh9nCHCjJiGgdcS14LFlVMfDc2N7IW7X5979s2R9CuFSBcGYYGAMD%2BZ5%2BLxYLmGkkQKQWTRBziBzkKiq8636xIFu0s2cTs%2FexqCGRf8aUNdi3kqwBjFPN4ScoW8blK8nS0aE%2F4BR6HXxyqumucKzZA%2FOtxdTRuwqmmunn%2BWoxajLz8vH2SOf4sgrGoaQHUkJ1wbuC6fm9bxxIlZJ1Wt82cBedTTQ3QL6o78Ct5x1D%2FJL29aBDYSA0OdP7hwM%2BCCTf0BtZ%2Fbm3KVWSnWrdlYLSmCbwWQw%2BbUwCY9q3Dl%2FAepma5oatlQ131a025esH5FxDsySV0TSQPuAUwcR39STDHgptlKZ35pBeDGGVATEWBEIChhFfLpuNx6LDVssea2%2FLFlgWaxx2PrELeDDY0oT0RPCkw%2FCP2GxnVpB6htsm6dBFHpCdZgPHBgPmvxU5m2BEhGuL7JwEOK7fAK%2FQpjC%2F16TBBjqkAfaJzxJAKzHxJtCQTMbagkuKIkGlrYbVvy%2FX2ebaM4TMGvUGvVKJgA%2Fnt2AuitDyAqD5IlWwlpy4Um9ZPMHEDcqkJlFQD%2F2amc6X7gJiEdILdgyoE8PO4NLkQnQ9vUD3rhXFxPezOrf8xaamRICjKXY28XCgV66ib38L8cDeMCJjquePGNVm%2FyBHU6OGq9zRNfNISAahNb5diS8M36ttwD5szkg6&X-Amz-Signature=b4d41f11e90bce607a77b481dbb0513c0c01a641583d431ccd8af613c9ee7750&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
