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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BVOYNRB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T025018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDAg2GDGffcxdlWRT9UiKmhBbijBuZTDTDx%2B9WnORGKjAIhAPRO9XOjY3z%2FYETgNHthHOJ3gZn%2BmP0hb0jYvsUFUGsMKv8DCFIQABoMNjM3NDIzMTgzODA1Igzl%2FTpHGRVCd6046fgq3AOuT1HakONohgWWCeJinWZw8WuGz%2BlcoKD9OgEZhuWYEGdtkCsbEoZL%2FI8%2BSYslTQ%2FiCfdOrmmBwc9Y%2Bfpeptr3%2FmOzrWyXwBrBMzQRg5iz%2B5WkT5Hds8EkwtOMjxx2cnlFE0t2e6cbBYakufQSGUyLBtl2XgyYdh0f3%2FOURsBVT3aqvfA6tlMuW5LIeYCKtWXzCF2Un4QQmQf5eOXQKPi14N145V9o8056oLuXSIQje3i1Sa%2Fi7jO71wXNWGS7HYzpc5OveTXKhb5BDiNszlEH2i6pQ1jHzASpPq8Ta%2FSHKbL7%2FY9y1HyEHChvzjkSobbcYgsMexojdmeVFOeFPdR2kBh12fiyAsMz3kKmsMsKcUE8Dbu3TN9hCgMz823SrQL1w1%2F76pnudLum8lr1afoD9GmkELgZs0RQBJoJrNF9E28SDEByDfFbZhiikQxbC1PM4OrzK89JpW38nApLxMo%2FTSZb8ji36dKzJrGaw%2BGgck4UTQJKYh2mOBIT91xsWNhFF2NIhCHOAtvM79EyK1PmTAA4Rzkd92zWDzFUQsRXoD0CQC1VcQfS6B1D47crLwIAumuKgXdJp%2FrKMkUdvZQKWkA4Z%2FrMWjVIHSO53II2HwsL22L1A%2FZdKB8M%2FTD3jKfDBjqkAdOHCsCoWtmTmXD9T8eoWriQ7MIr9ne9qMXRLDvhcrRATxOZXR15UaK2HnZ7UL3nvL0Q%2BQ0NFXV1kS3xzIGTrZk6Rm25g3OlQx7rjSyeZVtqH1NcJnign79J2Oa8Pe4rjddvqnZeNrSwh%2BquShbP6595Nr%2BkqWAXLdUXDMuCIV%2FdDF6%2FL3e%2F9W4BwNfoxvdBNe6eYCGfWRo%2Bc5kuPW4Cd5KM04mf&X-Amz-Signature=aadf17ae981ec003627dc5bfc52c2c5b9b8eaa6c8f0fa0a704a6d60b2a684473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
