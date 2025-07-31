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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQICZKV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGH9e8Vqv%2Bva5eBmBaTkYiAxdwhad9PhgIGWrQ0LM%2FzFAiEAgagB7pB9HW4Hy5faCt8D0r%2FgN5a02cinOVaaEZ997isqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRabmXt9pomce5DsyrcA3eVBezxYE3lzOCcdO%2FSChFIeK9UcjO2A4w97y253y5zStbblHOBxc82uEeZYTdr%2BfgNFWlr7sPJRY5ia%2FF1E2i69sK%2Fbem5AeFBA4TknvtduOyXYoiqFwRtqGQ6tK%2BXhj9swmLCGK%2BtdHF90Q4fdOYNqd2mH2smuZKhyLuiwsWUC1tvhu4Q2PoLg%2Bo5JjDrcXGQY3gyNcZtFBYzph7ILQYyQ4fRe7kqNYoCb9NEWllzJzBaNxFj%2FL1UIPXbE8NAoXiVzl02auxC89ykYj28ARPtnfFkRhc4dnUTOBN2x62NLzj00K2UsTCnfaluzSbgdiYzNVq%2BGjF4rcuyOHm1uLR5sWyIEw5YjCqT1wke5HEAAd5vktKbIaUgV%2Bz3U2mL%2BYAKfWfSzd8Bj%2BQ%2FraMLrWonCk4P8LsqTq6so1atsyzvYaib9SThoEIEsC%2BFVPEDsAMLgN9w%2F0%2BCoXrgTwD97iTcC2uL1JJJXO5eF2g6e9eFSjb5tKOtkp02WD5IlP3JH%2F0SQBSAmlxUXNVbSefyqyaGu3Vo7XoA4ZNFXmhTSF6BiZdybeTeJjLllnBdSscdqmUbZXX33bq3GI0a87yn1dtxDPOtxDJQYIqRp1eKRZt7k6OvArwfc4GRItgpMKelqsQGOqUBQ7SRupXxJg729UoiNM3zckK5YyWCXP1KcRDrshGbVqoPNWQj5vNLuFAgkvAk4kpYOLcOFlEg7fGoYm2xYkJGIl55RVxUvHpCdp4OVBqE6rdLLPWWsehGKaaNVQTbA4wlgPS2AYSBrdllPFku%2BbNNnT9Dhrj5PacRmHLwfvBLygWP2ewMaIAQMwziV74npuLXvYD2I16Rp%2BJw%2Fb%2BejBnX5ITnRrU0&X-Amz-Signature=f1ba16863315e036ccf411f5f9ebbb83262e92b8c476e2a1a783117de2bdd3b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
