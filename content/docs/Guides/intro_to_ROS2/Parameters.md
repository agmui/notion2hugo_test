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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOH4LVOW%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIC3EVdCHnIHV%2F9ZN5VdRmn2l28wFxZf79cpIDaqb%2BeIZAiEAxdWOUA2nUiM3PvFgBFQlr8k2PSISA2YdMsBTZizmSI4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMi0Zw0bPFjC3SKZCrcAy4gVfC6dyFdUgsu1Ol8u19r9lqO7d5kJdLt1Mlt3q13Jy8UTxmPwQb7NyGqhiOGHOqSLz4VmdQvz4dGTxSPgKaOs2tbq3F66tXEGQ62CFIH8UtFEj38WnXj1CEsJ9Wry3rQNhzei%2B9o3fGGRPJ8wBJxli6GkjDuCuLnvHiDXjiHjwN6x7AoR4hm4tIeV9crEjf3cXWLVv6%2BKDJWpFtWtS4Yb0yCT0D8Y83NDgIo1KRpOC2ePK85XR2H%2FJrxfWaduvHBhPbGaEYaO7DYgxN%2BeZXaZdJcQ7UCdZyhaNcy1C2PKSVJtdRXQGg8Cuoq0jgcUGy7RJETyq8I1KZ3lgsHQXibRyeXPRVcQnDZWeilcjROz2ptM6UPdUxFo7DNH2M3388F5pUzQkJ2GZ0XQSSp0ckFbhoazZQo2p2sWrwqgKVHYiEaO2Npwf8%2B9VjyB3YoAQMVuEDoFQxvvqGGE8J6%2Fz6qLqgGcV402cOMHmAeh8aRzgjRE3bsxrKhol5a4bYhgUHWiDQCtgXWPAz3MMi7vEDyTtQLV%2FJLNIrRaZ1Dht7FXj9e08b1VTViKIFWs1LVDUraWyk8PZBRyJmpnHSQbQBZ9W0KfSxVB%2BrBRJD324NRovyJqA9hKj5opVddMMmu28cGOqUByi1QlGUd%2FmQzp9d9COxsmzTETM%2B0xv9dUlpiEpuZMNaATzHb%2BZaCCX4OfmeAEJQg%2B0mmZMt69XaK5GF3n9esVVIBNIuuRB5s2yd1a5boq5MKudlaxx2X4bm0xCJNY%2BfyaPqACCTcOCs8A2ppD69aZa9lOjrbfH9Y5iQyqn%2Bi9Wp7c%2F%2BaA0z5DJ5ZuCfuTlgYYK5ZAUFnjdN0KjOxoWHuPmVmvpIT&X-Amz-Signature=ca39979661b4d314202d507d8948bbe6e037a6dabfaed2309edefb9cbdb1ece7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
