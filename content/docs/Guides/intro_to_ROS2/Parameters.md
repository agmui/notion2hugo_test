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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQYVRP2%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIGgYf3o8VO2LEqslUNJUDXBnluop%2BEB2AFuh1fSJ62E5AiEAz4YgYnE%2BbMoPX%2Fp6ZsCe0%2FFc175FndT8%2BpsgIfxZ0y0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuECqyZuu2oD1G7JSrcA2WHD1J9LJhaUARvFgrAxwKa%2Bea7etxiCN2u0U1neNwJKYXN3kHWaDZ3XmM1Os9L36R7404Inz1BIqrFzomtU%2F8QS%2FRorbE2DdqEmDxYWmmebNU4I47fO5vZHj64vR1PoimnybiJbUqN%2FHYI3D4E%2BjG4ri47uRBMOlzjOqpZ7sOz%2FvTPZaWZvTdWQNlrIGaoOBFlAgU6RhRNuXSpa0h5KXiD1etxKkn%2BU90%2F4m1Pq0R1OixPbKdJtCBrnUFWCAcTest1yLD0pqptOpU32oO8B4aSxQpLrcyqkI%2FiYrGDtDx18LA52JDhmfjmmG1J27p%2BFIsygA7hGchkWRCAgzUMwcnGUAaKdB%2B1CtxyXfDQtK5wDoMm4ZTEy7UznXDPicfPrTJLTYLQFeOp8HK%2B5h0LJLf0VTZYVN4Nnh0zvSyWs8Ci5zsPQKyzAilgw%2BthQR2FFRTNdHxHNJRfAT2DgKEwm%2Bj0XzFqzr5WJu7wEHDmPjHHsoF0lrKsblFCChSfEjY184UlQyX1ku2%2BKN5FavkixXDVQv5qCNSF6xzjD%2F8VB7qZdq2xH7Y0ck0m5hodcb3QdZrQQW%2BdPOTczd8TlA4WB56KRhX5sV7Xl%2F6%2B4Fyoplufu7dUaJ4TStoomEGzMIDq6cMGOqUBPiX8M4X50qPq54QHTHLVCMmTG3CXlBFvOCHLZKYfDZvGrqGu%2B0TkOC0N%2BkzrwC%2F49ItWKDDJEvDMJqqtzEPKmuUoAkFpLhyX0sPXfVKO4ZQ0%2FmDre8Ln1%2BCsWvZuUNJ7n3%2BAs%2BFJ%2FoWRDnR7ffUfLFFcClFJyedD46vPO2BM7a1YjAedylYGezitybqp7rm8YHeQjRWv1W6AI6Nc5nPJiH8p2eat&X-Amz-Signature=2c39ccff9f21833bca2651d74d9c1f99c3b30f091ae43672b65df4709c7fff94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
