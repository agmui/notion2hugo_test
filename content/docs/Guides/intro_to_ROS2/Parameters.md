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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQYPPVZM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK5RXmDBgYqZwEk9tx7sBR9b%2BszQCDHvOxK0tm%2F4WjsgIhAPz%2Bb%2FFeQk9bXyI8Pe1mtV7PzNL0%2FbeshcVxwFIzNKlKKv8DCCgQABoMNjM3NDIzMTgzODA1Igy7gDyjTbLdKGxCyv0q3AN09bhuGGaIUdE4a9vcKCmKatjuE7gzzgiTZCHvbDEKB4bzkzQtu38C5nIsf6Tf6E%2F5PEPKBVtcP2agXe8AhqFlvzbKiL0%2BN4CPPK%2BpzkbHKEdFiqke5EdBu5LE4g%2BiIXEOwyUkbGnOKnZ%2Fz6hT81yhpKYyV9AYqcn%2B6jeIiE6e89PvI7yvWA%2FbDf9tFWiOs5p1EjktAF%2FSBDxsYiTJVU2CcmIVeUZEqLr4NH%2BkPHBHLZjrjVVgAtJg4G9zm46feZibDYz153bHfaUuAb6xE2MaGJcIE5FqWey5GxZmTM25NZazKgpbQa8jIpD2MU1icVEgf2z82aMNZ5Y8Nm0WEg6RyqD%2BNjUW%2FjDDN8uBlHim70jvaei0PvSoFbzcpPf2%2BuWhP37Cpr%2B1INnjqV%2FCVn2vy0Qy6M7ny5Z0GWpzcRLP1wNEFh6zur4A5njnQz7%2BNbWtxuAkHui5NCU7a8UgNq%2BNAaR2SSIcS1iyIznGpNhUMqaWB6U3jcz8pmp8kN6qVo34uWz7ND7oRuylzzokwjWwUWiZQG59oYeOcZVN5TiwVUaxxoTV%2BZyWpZVoYEEem%2Ba2Mai%2Bs878rVGAu8hD2bN3J6Z4WzmDCKxZ6faNBYQLqk3fkzCj%2F%2Br4TmA16TDm%2BPDEBjqkAY37BCWFfAcUtBvB81R0Ee4HtTr38C4VxPxWJf5OA0aG930wVOXf21E2lZX6OerV6bopESaBMqYO4UOeBMCWhOQ0QlN0EfxazzmC9aWejpTef8t6fqKiqDIO9aVluOZIzJjZck7PhNARkwvaOWDpA%2BPHWl51tpAyFh1oTfjhpke7QN9Evzj%2Fpj2J4BRZ2DGcd6s4%2BsXSaKxE3bvOtWewNMFuw0A5&X-Amz-Signature=3a400b9252c6ed17243efdeefeb3a133b0a4eda645466fde3e781a59f676e782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
