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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLAQWLOV%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBMawpqzvJlfV9jDrFsjUNsNiTZoF30FpTpYNBtzeWDKAiEA4%2BTTFPU9OczIYCSAuPczvTtDtcXY%2FLu7tUT9VRHf8%2FQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDI5rcyROvY0HgolaOircA%2BIsD%2FdaEMiTq74r%2B3O8wQZq9QN%2BUNppb9%2BxdVpiHSoUEwTg4awhfrPnyto82rplUMENYY8TDohCoHO2p%2FUh9r22EBJ8fm1Etoyl1Ew3QUDbKOfiPuOHmlXLiRduW0HCurQfSBuGSkeMzqKJmDwgARI4ShrtBDeFOpp5K7b4lR0L9Vrlwv6Nj6uUnONF4qHcqXGogxn6nRTw5%2FP1SaOLw5NIcCRxTJRObcuW6ywXShgJgjnJ0V3EJJVALEYHfePdenOyAjmG2DRU4EGHGM2%2FHQzn%2B9yORPU9Eo6S0YCiWBe%2BpIy8p4xB9nvSQXl5ZfJP04nkzSHqifpRSb4Efd6uxzOwPUjaceM7QaZPPQPdg7qFik3hpbuX7HOXJFRXJASzzpyEqEwPlvksZIuH13Jom4YlWlu1%2BMEMTW1ERL7RVNANdngYyy9wBkOoSHJjHwgAFzBJfqmMWhR%2F4VQSMLs33tqEUs%2Fqp15Hx6ExBQia65dL%2BAX0N8sP7cOC36LIxcFOU3vXhJHVe0POUfSgOze9s4kfHqhteDO%2B5ZWmRLO7tsqqJuKAsDlxcsaKLmSJK1yiz%2FCLpD7QCbFqXouuYBWzmZPstUBMPNi9gdXt56lqjIGaLldMQeNBvE2CkCMYMI%2BxickGOqUB%2FhdtLYF4OlbPomkk%2FhhJ%2FUw2dnE59BOc1pBAtpq8ujnGfUZZ51ZVsaJxTyokAanYGpAMoshF54jp0G5x5PxTSrNev4ko9lm4gNyTFoQAwktrNlcZrcV8J4zAAC6j4Q4YeKX5yXtOs13IjM4Hz%2Bt8rF9usho8WILnNMkQ%2FytEvWYbzhaZaCCXrJr7JwspZxdxfHVrlKkxSQJ3ppRTMHU8sRq5xy4I&X-Amz-Signature=2371c528eab757e51ad529ecb1985696a341767a3e04d3982a420bdb1006e0f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
