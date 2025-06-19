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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DFZAVUP%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlqT6sF8cZ3fqtcbZ37hALY4Z%2FBTq%2BM8WQ4cJF9829QgIgTVhFqHHeqDqTFcCcljxl%2Fkb9qOFBfFnKbGGpT7cDJxMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtmIiKUVn%2FEXRH4nSrcA74WDR%2B2VlbPMMIjOyN4WH0neJOQUqlXaf0uyrtknfgNnz3ONLgU8SAOkquyIYmt5ZM9wMcDBW5nEccVsqM5PHxNkAoJeYakdhp16DI8Sw10YjZPfOeMxbXTpqhYixl4u9tt9ksupUgsMj0TGqlIS7%2BxpP46stxXDjdKUtFM0F1%2BKqAoYYkDHUkA0zsTqjxS2JqJKZwXLdkJLwl5NhVIpTg8EN83Cne8dVZ23IYGfzpD1fF2EaRPkV%2F2OEAoW0eRINieYw0ULHJ6woPBygsP3svfZrEMh%2BD2GeqGknHl5YPRuQHYT3HnKo1DAJOHabjV%2FhB8gwXy96hPVU7IB2c%2BsmXvBMMUZYgV6vev7dq7HIJqQOYCy8Gcvw20ksC2gIYPIyeM9%2FBZs1OFnHCSxw448P9KLw%2ByRG3Yqs1J0NQxZ%2FnGtyqM5gnKqtwy1Om%2BJ0erJlZQFwJiw8cTbn%2FHElbbmSomxLuLn0juq8GGjh7xfn09WPhnNZUFPRnOkCf7nLkQPGZVNj3ORteA%2FT1i0LT7kuDtwrslujmBFrLXmsynRGfXyQTEEmB0ohSQ8wq5%2FdvmW6n8NT%2FCFDA6g7CVOQDq174DCZlsO5by%2F3c1jSMYlVKfv2ztuokonobGa%2F3tMOWzzsIGOqUBQTiTSiuho0aJ3YgCpcwNV6Tjn2mOZfrq15rc0%2BMwOulRen3%2FZ7lf1ezA1ymlnpYGgyGoOhdN4OjT4iIQBmeGTCWIu6uQTdMt7LFTCYMBhe3rGMmymjuttFDTkbNxDh7krLwgtaioqUnjFZmyA2gf4oZZw8oSN0AcJx%2B8350iA4efg1YH7EfjtAEBfz%2FGcVD7%2FrgAgnbraMXjeoeXjULFFkHXhbPj&X-Amz-Signature=5cd7691244a880e95a75a1675d8c39a132cd78a85238c77b20f22911e72eaf7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
