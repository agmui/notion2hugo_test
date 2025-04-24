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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTLDNDU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC7K9hchqMnnN2Ab%2F7960Q6Kj10vwPixFaMjAPGH37xVwIhAPJGhaayjh%2Bn47uIVLk9DLbwWAP7%2FSrzU8djKKJ1oOWDKv8DCBMQABoMNjM3NDIzMTgzODA1IgxOyWgoeivJMPNfvLkq3ANhQ2bHqQ1O69C%2B2JiN0F%2BD7cu%2Fq7LEf1GaK3q%2FWNJvJs5mvLlD6z6ZYpJFHZNMNDCWOiffU9QSOB2PfD8AJBB19JYa6b9rqKMFgeyRfOQcaQeF6Sjdj5H%2F2%2FCzs2uFHruP2Pq%2B45uG%2Fv73HuE53xlWS0R1Tbzi1bJRfB5BZmks8VRJBY2qqYhHfQQ5pv0emdMtrLYvNfDIq%2FVA%2FkwIBux5a%2FSF5Oy%2FHelEV0EnlXv66ckJlVyFoGtHTvsEaBsIAgRG1gfu6hcjhGF3De3GJ8yVramG9hn1cEEvyveRHfILHbIWunvZ2gK9ShoTdzBljt%2BWmJb0Er%2BT9BewCIDiQ%2FxkFDRgpcI3%2FGEe%2FxFeGV2oVlvDP0vZgszM0A6vslYlm9gaAdS2S9E%2BdiM%2Ba8CpyiJ2UTOSZc5lJV%2B2Ci%2FQ5g2p%2BWZawmgA1%2FjZoz0HVy6Y3BwVA2NqG3fmlT9ciIshu7YBnZu5TpBvylYT3kMs3zpMPXUVGcH10bDsyX8dn81uS9X8K%2FuFqffU9ouPtBNuHzD6qQNUwdAyK%2FWT1ArxJXh6NMWsTpCVnQr7fv7sdHNwQm4vily9DCgOS%2FwB%2FEe2vevO1nhaIZWy%2FfA2b3y0xCyqX0E2H%2F7h7IttbZK0bDDjn6jABjqkAYSaWVnMULzp3WjDbyFj%2BQ0%2FUxqnaQOpMRLmX2CPY0wffY4hHnSR%2BYHtrmDPgvLGoj%2BHMPjyKrPPiKIovBNjjg4lMkOxfQLHHR%2BImesOQjRaVssL0kkKbSFLGBucXjLbvLqeb5ZiEatZkecr22afivlI4t%2BVDK%2FNKzIhZO6QzApPFeuVkyqXQj1MfCyzM5ofMcfDqWhJ6bOCsO2FAxFDdxb1SP95&X-Amz-Signature=6b38da48acc8592fe0e743a830b947eb4b5bdbcf0296b8c880b341194075c900&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
