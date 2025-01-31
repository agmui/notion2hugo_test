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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WN4G2WO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD0rIOdcrme7n1N8cwNk4KGxmKtzo8ITA%2F3M4lOZlKoQIgEKS6dsIqloQWpZcsOlrreAFXoNCcXvm%2FlYcnCfrgre8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATQ92aAbI9%2BQrSbGCrcAySA408nneG9NuU3N%2Fz2BZmxyIBq4sSGcCNoYrgJN3RVW1eft3MCHtDKSwYpu%2BVeYlWm5%2FRj8TOjerNS1cMADZmbfNadcj3Qbz9idxVWjWgxV0uQGb3nHDcBu24SrUFlcaGjEqqDHdHAuBoJVj6moVv9Epn%2BLJi56PU7HFQU59YBjy45X3ESIDKID%2BrP%2B8AahiIelzrMyWParEAptDtF4eGTD99IbvY9tPQ0lWgy95%2FfnXBS%2F6je0cQYM7PohfqCq7YZjHJqSzrBIj%2FpdHqQCfJbxhey9r0F%2Fj7hqEYu2I2Y0q4H58xZhb7nU7gH%2BQEIyiosdWp2T9t4BPmjl1u1soWvb0e42MHij0Y6j9fJ5yzGgxsyp5JAW3dIZcboX1wsDLAe4rEysR5rcnJ6s75idy6xGCyrJAtNKpW5HpIO8FQPNYVaUqlF7dzNOpV2zP8j7ai6e1xXlJNI60Ov4nPQ1Q6MbNfUEtAkhAJt7Ge3piJcCjAdNhGJQ%2FiinIDoV7tP3vQJMcLZPsSa%2BW7tZ328ibmEfvDJU%2BenGrV1mmh80bry%2BmJK1l4sV2nYvjZnaMgXhIWDYTXOBDjY0zs5azqCaniNG4qwU4bT4S5bIiqIzov59LVyznHojW1Kgw2KMOXR8LwGOqUB8b5%2BlEHalR2OIOLf6c%2BgLpotwsUVQwkGLuvc5xXAcZCz20ZJZ0pjxWzINwTA5evhU5mgXBrPrilmYDn7ulhd7M0yCzFx7KytvRynxmg7pLNr564F0H50bpK2tMXEUi%2B%2B1Ybn8GLTI0ow3H4NHh8RnuoOkpl4HYR9624sGE2x8Zhz6QL0TPJ09YJBSV1JO%2FMBDr6Zf%2F5%2BTkRowJ6HEOAhvgwLaefm&X-Amz-Signature=218793663bd8dacec9595ba9b769be401f84b21f096d6367d6be1eddeaf2df43&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
