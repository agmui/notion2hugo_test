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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HPPSDVI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICqJDCvJKVo3xA9HASe2t6KXnwk6%2BW7YhIMp8xG53GDxAiBCMQEh4IAL8P8aYn2HlA4tSoHQkUE%2BQj4hz30pNNKoWyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM8CmWO%2F%2BqVSaweS4%2FKtwD4rgeyXsXjMgSQDaNHRMp3WlpDw0%2Fa6apGiOasy9R6kKHYNr%2BVWo3pnSmHyBFKHkdgl9LO0N9Mn4uozXVgdeBdpYZATs%2B9CcvhItnNlkoi45N%2BQ4hOoucHF87MeH7e6SRUyLmpVnYkI3wccbTTg4St5jBpC5pra82gRnnF06E6jI6F42a7ldWFi7KGdg4nrPZ7ZXfI5MPCafp8j6p2jGhJMk6jgnZL6%2BveFNOKxIrCiEyKLeQZIRsd7IdgEf35VGi9lstuQBM%2FscjTxRLbY9drd2OQ6XDp1rfhysLldurSR6uJ3r2V9M%2BV6StPBZgmXgdRDYbATXBOxTCFEHVYVPZy6fWUvcHzfg83Yf8zqndRhUfzu7q%2BaM3pNdlwZ4YOVUiZkMai50nvS08PkW99WJqrUWpQlAJDP92ef2U0WUHLqyDpFg4mOJ7O1c19CPyYFoGZ0HokYwIfPizeZn9PMRaRGPmYqD7XvlLiBZ0edi178RKQAYWM96YVjjIyKjoB5NoJvoSHq9ZamSM4ngaPL2CoVXRBneQELoYO0QkehKCJh8uMHvdh%2BRkr%2FJ8riSKcPozc%2F7W%2FUdeKAwWV%2F7m6My4B6Y5k1KOQ4uO3KYWvKGoxcKBmM%2B8RKH56iQdLdsw5uegwwY6pgFVFCNxaEqhgSGKRnuqoDDeZ458TA2ck6E6xZBh0KzB5YF91Ik5DL1VPj7vxSex04fvxb3L978Z7toMXYXR5ed9%2F%2BxBZUEIurUXN%2BQbylame8DXX9bXQKVv0ZOi0zA5C9vBtsDj41sTIATMFikWLcv5XmHTsTLwBhuzjX3Z7cTTLuUTtUpLCJgEy07mspGIqDGvOJPj60uAPmwN7MpJgOqfu5EpfbAq&X-Amz-Signature=8f7ad76b40d94531cbb9b3d31522bf035d7dfdc3a855bce0518b4c60b5e08892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
