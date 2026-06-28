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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HPFO62R%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfZDVpkGZgV05YTFg8Lu7loqG99XbIaWD8p5zHSL1B1AIhAIPK1vrbWZx0i%2FB5nOshkGypKbP3lGbdetbkrEuiuNsGKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD8byoAqpIe%2FbRrXIq3APzWeXQL%2Fe2UyKuYgTMErMcWH%2BrExY6c8nOvdsLAmKHF3l41a6Bz8dVy3oUeQp0DdJd8cV8lRXXgvlH9ELnXSN87dDVarf73D5wqOXalLQrSYs6vdbwPbtNQ7F80dzMrXPL8nZXsERVOwRebWzbm%2FkTZQHaLo4irZtxGW9ANBQA6uaIT5NJqDR3Mslio5c6l17k%2Fe3TJzflSl5fQBBQ0itP0hGyvdKqkBHnUvDHxmTObuRmIXhXQ2z5fUEZvCyHd1p8bKg5G7bSTOfBvClhLMnoGLzpQjP2voPnhqC9ZxxotWz4%2F2PDA2aag9nBlzO%2FyRUzJkw4R7uKfbdIcROf9FUbp7pMEE9Dj7BZVddxJsv2es905TTSsAEnuULL8jNdkZRvPP3tvLDOG63KaOVB9kD1Bq06LyLSeWU0%2BkhOF350oA6ydlAfQTL%2FENBu4V0vhSe2rpQ%2FqBb2SpjK8cRvFSeXWPRGhTDdM%2FF43EikrZB9NDGkmN%2BC1UUyALcPkJcbfj5kO2Q%2FKQ2H629INBxL0iAzwmL2fr0NfFmHlmvGL9K3QLZ%2BNU3i569%2BDphwgzC6fZUXEzQw8Oef7ztC%2FgZkK8Rstr6nrQLqepf6WwI0Yy%2Bzzbab5PBkWagZ6w4qUTCZnoLSBjqkAU%2BXy7hzoNieu5GOzjLV73GeT9Km%2BRr0zekDB2O9vrzAHz%2FixEgV2i%2BaiqEbYnVMf%2BbDsQw394d5OrkgCWz2%2B2vg9Km0StIDbRyO7HMySQL3su6%2Fu1ap6DJjtDNXAxpwm2hhbsirlMrMW8hSqtifQ8AyHLoufRNp9bFElqoRHJWDYojccKZQRmyopIYV09tlTLtNZgXtSWoApgANGQ%2FuHCQKUCV%2F&X-Amz-Signature=bbeb3da615ca1bc78c10e5f254f6e7d9e75957b3060a1761e73f18fd255f12d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
