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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAVRZ3H%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCM60m0Ju%2FKOnQ9xpySDnHLpwKPzw9omOiu9S%2BzUi8Y%2FAIhAIdlsQKZbTlGnRSgBDg0%2BuWY5qwB%2B5ZUfMwSHyE4y01cKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2h6f2HYeWVEspbY8q3AMQJ9x4p0DC6AcoWdSWUXmvwzWOz%2BQKXgHCZFoR8KqrUqu6ybe1W5vLEFToYz%2BI50hDsDxlv5M0a8A9HEDQMxvhFMu6sfe4ZrTHzNKN8eLR5XjizudPus1YSiEuSUyLGkLAfog0FJvlHk9T2l%2BRFz%2Fm1wWjIc8Cn6nIMkh5atSXTSYu1wCj3VEb5qPEW2KqUwKNVak5I9m30ZCnzqwNSkORdB9vq5NqW0mGVj3zLIDfRgxG25JOE09DgKEt5w7QKwwZNDEv9pnl9Cm9vz3Zv54OdpTyKj7HDMuttub0safTLEM28p%2BsXtNTIrI17Jxm7uyOgJjC0RF0B348m6q0Fvkep229KtChWdolYaiuV%2BviRPaT2lV3PyZp0Ezl66tq12Zk1f%2Bdc9tF9OuWVKIsBtofhCtAswhiu%2BrzfpEZKbSkFtcvJ4MJOrfG73vOqQ1mozp2tKAUhqqaH84ck6bYA5DArDSCx5dWNERlKtx37zhykCXr6RfELkp4nKoaBv%2FFEPedZPfm5%2Bx5XDEa%2BwLdNkAvIGFIgsqCPOHXdistGU9gmYDW1rkVDx1T4u6G7xDG0tZBlQW1yQT%2B1WXYgSoTxeS9MZH2J1%2BGKuzU8h5ps4W%2FJ89H6C7BmJjii6HHWjCH07%2FBBjqkAYrnG0RPbn%2F1COkb7nANRDEflcdyujwJnU5iM5YFfwSmH%2FfGsPoozeOg6IHRkqscSNMduFdBi1cRX3l%2BDH0GBZAFy8cwnyA0YPbn9LRQ5mr3%2B5Z%2Fd9BqUuyNsXp8WOGMtZiz88JxceqiilchI6B9wMXRPjVjJjiiGzs0eLAAJVq%2BNDx6eOqFZ6zhThS9AwHi6x5E625zyucdWnpOo8D6vVDVyzN8&X-Amz-Signature=7814df0a554019d66c7c1be31c3bef8b6173c08038c3d09295d80a9b0af1a23e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
