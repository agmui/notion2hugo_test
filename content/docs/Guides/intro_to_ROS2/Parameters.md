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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V65A6APR%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIF3Ao65%2FhokvzGHKgPdE6X3jDBqTpNdzK5omogRlem47AiEA6zPhKVTdKzRGLdSekR%2BwKK7U5gts8A0Liwi2B9OpgHMqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyl9jkoAl6qaQLbmyrcA4GLA4CpYO9MchWMX93KqyvjFGq12Ljokf8pSt7tkS2UYvp3OIdmMxnlMQs6QmSKSu9itTGlxc59iUpKLIsWgpJZx9ALgNxfUut%2BUbLJzw5LLS09Bj3liz1u29Kabvc7ZVZr3EjrEu984eN%2BznyZDc27K0xGFylaOl4%2BdBdsb%2FIjzygs6AC5c8hIzZtzxES0FP3novJClqWH36sECNAH20m98VhO%2FGtJQvfJUA5EWVj9i%2FjhZ%2FeSv0dzyZOdsBqyXkH3uVrsnNNfcSKCsEYjeCv%2FlYXWIdbiu%2F1XYOxeJuTCfi7zqF%2F6X3zNwOB5wldDTV4pChXBCpsd03x%2FdTb%2BkiCOm71J7kOGrrGA2bCc%2BvAfJCGHvVRwyrsTJYsqoVGQwrURcvHKsdcE%2FT48RsMlWCZYEBXc%2F%2FmL3J5gJDCzXRwX5tNzcZwskRpPJxQGLYpjlt4XU6icE2UfYamWnxfD%2FG4I0uaMAivsWwMK3tcMeuBLc%2BPntBTz%2FWzC%2BWehX0WGmUi%2BSPgVqnj9S5xUyzVBftaMGciTjIQW4d0re5NUXkKXJ6UIYq76T7BVvbg3GbB%2BBlwnP1fZwTSj79PGAt31BElgYJTrDV8N%2B957Bjb1n3qF8ASAVrxqTXLMul56MI3lrr8GOqUB%2B5FhbfNINt0%2ByLzLVR9Usd121Eah6NMhcBt9SKWf9suX6HgnPgch%2BwGjm8VtDQjPq9sBIcoLFO5Wd4MJrqp2Pcmoa6VNE%2F83ftN%2BW1IM0vZatdS8idmbe6qIFPl5nnT6X4%2BObc5j9e6bhWebdkhLexx8uaMkjqyOfGtRQKI8atPz1NORixScJee%2Fet4GAFsSJrMfYM4wxkX6YQ85zVtxQ4P0WnAt&X-Amz-Signature=678e45c7dc5874c761a88d76e51211a070e7162ac9954b8e23536509b2c04b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
