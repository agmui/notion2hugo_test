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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRHA2TKI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdLw5GgwPxqXK4Ab%2B5BUeCZ261xqwvEXTlmKBlcjGWbAiAewGjNGVzZjTabcQJaaWvCQCXhx%2Bh0EC1xHLNN7o6%2BFSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMlRB5t51XiLagmUBRKtwDv1b%2FaeOIHcwYGi3xRbN52hU9szqxA99aDo%2FFBR8YZEXR%2B%2BsRJqH%2FOXeItieztHb8jojDBL1axZv8CmXcwTcxRf5ByAoGS88MbAl7FCVjAgvkMzszj6GQGwRVWqRDMqaPmad6QFQE9%2BveVZeyRMT8ccYottFtqc4kWWbrAl%2FGvFb7tAEUhfHkBGfAVHlGLxKfG0EH1IiyzeWt2DW7QKx3qFCYXCpnj9fW5enXspTWlnl%2BcgUmLB48xiuwTsZnpG61EtY89BxEj2Tlss5NWdcAHrQEp85Qeo6UE23kd1m0D%2BLlgkQHI4tyJzIzTgN8FwepoZxKAlptO%2FnSu1j4V%2F%2F7mwMW5evZAEpvchIGOOp5EsI78lT4Rqi70Vu6w3MAMQRZfXiMcPlXbum8%2F0Tho%2BNHr0RNHxDA0Y2azpEkHvcOhb9eM00V5GZR7We70hH%2BAw2REH7fwL5x8%2FlJm8b%2F3fphN3mbqXwTmeEEeiP9NYh6RWEMpcQ8oQpVLg6wTnPu3bQK3w8q6xDQqGpGKokiOCh%2BYecKHmFcZlfigenBSLtRUa3m70SLiWQU27LSZtYn8RhUWkpIIvJiG%2B6T8hSIP%2FSk96dJoxSB%2F4%2F%2FiqxowvIvQr171RFAKXtOOuocnIow5%2B2SvwY6pgHYluMojS8WEaD45lXflNk9NxQPMbJ2QqkNokPkPxUSHvO8dg9EOouZ3qh%2FvjPQRPdXKI2MFueMXmdmOJNinlw4uXe7e093oMSslvlh15GMaY7qlZSDAgIIGZrQy1C7afUiBciMZDLO58VoAgJiJGPs2N5B5NBbFNe6aF4%2F8DMHmBN9lZBF%2BjjDf5pmDwqmYfJNb4B7fAqFv3n34TICGDl5rcRgOpfP&X-Amz-Signature=85f06b471bec790d00e3541e58a6ef6265d7cf33458ea4a0164670ee75a7785c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
