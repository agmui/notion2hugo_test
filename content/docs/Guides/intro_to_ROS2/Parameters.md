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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ42Z72P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuYyo7Z2glkHExzEizdLq%2BijAy5XatZhyfn3fGIoBtlAiBmXLPdlAzH1YqOb61ZWVNacsyV2lXL4cEFHXFgY9ccyyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMawYjIDaog8LofkMZKtwDEU6%2FpcYxzT2CmHf42txFNRJIxAWrBUzUTKlgTNuHbBFHbUMPTJLxOlz7%2BaCydVGhYMnSTNGPn30hay%2BY8Brd%2BeJ7UnCsJhAtf1TG7uHenyhdWKsqb7OjaST1fbIgtyMud5hdLSWr4A4Uz%2BhXBn55oqTffmxS5hbaAHnzaHLQp2wztDHWSaw5%2Fv%2F5nX%2FmSuN89ZTaYke5reTqcqxmjfUr5MiLY4OH0jjw8suz3TyqDCYGEW4jFct2HZPNLWQa%2F59juDrzSn%2B73s0i7OR144NOp6fvhOy82XDrQYRZWCyNCsKKbsb0pGhlpxbeZubmlklyNqM950w5GXljJjC8pkRuMlPFQF%2BfnTdUyl7zGE0kPZNm5jH%2BBFm1k%2F2XD8W4YPz2xFZIj4M7ZVIXyrEK%2Ft5FYfxTcmaIlUXOz9B1Jec958O3faSagnnjK4%2FekmceV58IrZSKgH5gNwpxi4QL%2BNVoM3ZFrcJlfUpIZ6ve%2Fh5lpvwv9e7yvtf9IjgsfI%2Fw1hU1LrE1b7%2BV7uy9UgEDYHAAkUa3nVpN4OOw1oErJi4p%2Fuildg%2F5k1oW2qTQHBXPZubSxaKJnaAYRqlRuIi6fhTy7M7e%2BN7yVf4uaGTorgjihq5wdolyJBwW5ok8HLEwqtHwxAY6pgHza3vjCBcPsaB%2BwoYf3s%2Bhjm5Vo%2F17kBPA1T5gq%2FUl6EM5HSSJZyfD4KKeNaY6gwLguQMAesS04veqyl67lvNNpyneEAd1SvxiMHb8nXW%2FCeWcr6S8N%2BqS148XeA7PG%2F0zQRBcapyHCrt0mYCm3fzZBKj2M%2B%2FVwnLiUW46ZAaRUnSFpGVVneOF1bkT7D5vuQY7JvXl5PV0unhjVcoqj2GsYo0nKAKc&X-Amz-Signature=cdc473d02d0d6e4c6fb654d4f66a97125d3ab3be5a92fbffaa4892f42c47ddad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
