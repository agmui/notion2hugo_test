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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHTBPH4I%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIA1tZ%2BfRCq4IoOkJWlkXY81UibYW%2ByBupyAbDeQRhHKrAiAA3PyRYmVQSyUqegn5xcDYzkjqeyjjOMI6S%2BmclpHI7Sr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMwja5ekgmC%2BglJKG%2FKtwDCUlPetAGxopGjEnJR0bOuPipGfyiKRAjGI57WOVuOMZOBAHQdhUey5Xr1VNdBDjNWiW2stZ64QTr%2BZV9euIh3XWBWKt%2BezFEXqSwxmqFT0EMcH5ghpDzj%2Bj0kzde92uZmLWWc7uJ8ZmXrubPctwRt3mkFOh79pKzRkTxNH6Ie94TkK2B%2BQhFgzESgXtbAomB3BJ3hC0Y11dqPepNGCQWCKInhJxi52m0jutL4jIlw1y%2FEV18eikDIE%2FEjOxqiYCVRymQkoHpPQpTnnzZk9Rmf%2FSi%2B%2BPNsWkuOSg6JiVijG1dzsKzt5oU7JcPs1gC8Qx3OSMEyI6U%2B1T3fhcgUJktWlYAq%2FaXNh4mZckTRINIsM1cMbTTbI%2Bm958d6aNgWRKBZkU5k79PiBaaP%2BEFuwR7%2BUzQktC3Q2M%2FwYgCKJFYA%2BgUur3oI7lqGskxV0vKwFC%2FxO7x3glsCe8nGCBeeZbCF0WfQC%2FESbADFnYonkZsgRiExYeMvradHMNRJhYg%2BU3mskOf3Cme%2BhJWsljtTgv5n6a%2F6LF8bke64GORJaz6BKlWMi0u%2BuiMd559kRazA2HSc6ytz0IX5I4B7IikekSQkAJqgvIrbz9eKc7CDkyAFbNSXvStIAy3s4GRKXMw3rS%2FvQY6pgH7gg%2B024g%2BWrcUU1HfzWGh089uhcEpZEpUCQRjarZyeCo%2F88n5EwEec8XpEa1ivPyyP4qNLrPyjMbJjdk1s9Ln4RIPgfhqbkErDz64IdGcEOvEGf8KgMbUPYeNdf7foNFqNBq%2BO85HG2jdRaG4yoNY8wakY0eiuonWQ3WI6rpNhM7K3lYdGTeEt%2BuND%2Bfg42NGby5Jbe4eq0CEHBESmPBhLiVsNBJe&X-Amz-Signature=81279dd785b5b1707d5c8eb3381bc4d579dea354f7da7e2fa844456ed6445199&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
