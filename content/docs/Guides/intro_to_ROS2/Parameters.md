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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSCGFK37%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCs%2BV5FG689B3c4ftCTAJCWz%2FJoFlLG31MkZIWoLuFWygIhAN%2BgkStPnKSYjgkkcWoSf72IPbtKNlHyE59x0RXr7Uu%2FKv8DCHYQABoMNjM3NDIzMTgzODA1IgyVUfe%2FQWqJEvMXMpcq3AM6bq0mPwtrO4fT088ZwgxCySDgoxInDZaksykJhLSbg0B4OTLv%2B7ZYY2zjnS8t6IB%2FlCh7AwZe5uz2Si7FgK4n%2FxolBx32%2F8q33kqj3GbmUHKtdGgzL0zSUjs7l%2BbwWU3ug2j9RXZtP0Toei6OckpUBYs2qmCatf6iJtT2R8JTEBvl918dc8eFOVNLnTj%2BUMEr8QlwUtm9KZhRZyti81SOBzr0qJelZubJC63UeJuOCmwJ80oG%2FBjrb6CUmwEqddqI02bQLw2iB5oic27dyQ7LFHPk00mcEeiq0Eak6JL6PbwY4t6JfsO7uG%2FgxY1PWYUVEEABZ3Cir3bdRht5W%2FM9eIieb7DqaxEfPd9dul3NDO4rs%2F5Uf0ncNX%2BJOv0r7UBlO%2BfBCL%2BuKhayNksbu0LPlLJRR7yz2y%2BVU3ZYjnnQ4DOm9fjyvJhUGrH3q1yR4Do3mzuke9%2FW%2Fi4z0%2BVi8v5Dd7Bax%2FRZuUMSwpXc33KwfusYaayDnGeRqmGrYhzBPQB6QkXqpzS6ZKCn4bO3fzsXCHYBVJrxE2n35b%2B4FtlL8a2aQ8PB954aGDxHO3fWLKXlWC1IRFJlba0P4v62JBPSEtdwi9kq9TpL3BF4X%2F9QU5%2BxaGexcFxC9qDPvDC528y9BjqkAWv5kpxVJdTUj4%2B%2B4ejhNHQgpI4NUEH8W5kEhcZ35p8xPUAw8dzuxYOGkURP1qpOQrWiTIizkrLa9KjCguPCRQROoe3%2FnzdQRVGZyTUNzcZkBnVmyx6ZwJKU1w5bRtMiVgaQEFK%2F%2BUv360FO9bk7JhWhPZX8S32ldcbLWF1XfAniCJoHFKDH4gk1k1LL80Z5AFcB6IeaFAHfheAQHOlMeJZJd4NQ&X-Amz-Signature=8126bcfb2e2dbc92f4a0afa9eb3a5f981f1eec4f9bc119b4be0f1278b6c9e91b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
