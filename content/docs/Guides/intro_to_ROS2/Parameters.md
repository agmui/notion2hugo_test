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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ONGLY6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCY1gIm%2BOiDEVAoF9%2BnPDKebUvlylF74O8L%2BGRYuDJMsAIhALUvmgO3XJKcwySCcSl%2Bg%2FgR1qQdx9Rh0%2BcefOLz2c3VKv8DCD4QABoMNjM3NDIzMTgzODA1IgzcHkY1S4qiXa5m3Kgq3AO%2BJalngvEpn%2F7ct1JUzeQjhJP%2FIcVZFa8qcc2jiCxtRp1VT7k2ul45pLzxyYRKf%2BqFVfRzakCPjGXeZPzsZHos%2F5a9A%2BoKOWlrlhJd%2B7Ry8ujHFqPOc6SStBKd2isjC4EWSr%2F48NSwPYmHnVZuGGNMlYTl%2BBvEuiEosDbXvRhm6K0ZAEcEa%2FdsvBI%2FQT%2FBRzY74B2rOm%2BpaYDNVJ9kZZpRYlVK%2B8UZVymF%2FzoYWnC6w8G76NFHCpnvxX%2BMhyifkPRWcsr5BYMgbYIfXSNrVAZaZ9fWi6Pxu2X5JG7HhuRufybvar3u7AgOwfhYuPpq2UkTt%2Bjy%2B46rmLOSytCuklK78hxEmV1eWC9cdcyFSXAD5p%2BM8mRt2bnE8XnjXg9WkS9bzaqOI24WVsxxSzI7r6l%2FjRnZyZtqcToGerJSZC0%2BUXE3U9S7XoEp1yGCdkixK1DXUTYcN7nYXBrbYwDUBTCKZx5BE1suUf5znvgcvATqHS7YgSrSuqXTwu%2FBYjYb6V1hgBJb%2F5nwPrgH2WNnOEzi%2FT9lYExeawSV3gi%2FFKN4nVu7sVzXRBBABGGORQdmvTHmLqeD%2B8u9%2BsaYiEgeAhQXyrLpvxMqqwUKc%2BYk2x1spVXIrYKZry03bm%2BSFzDP4KLDBjqkAX%2FGg9mC6m%2FUkuQPtYHw%2BZTWY2mqn7CsZDVMwWTjiXNBEhkl7nOcXWpxciVtkMmFksF1jS6rjg9hDDXjHlZkBNrrYxBl2IqbH1HUYIPZtqsWRtGsPJLEJIs57GzUu0usBZdSVXVzFGxzkjOcvc5M847gEr6x1PaEFfPnSs1t9txnlZRjS9H55SEs5rrNlwjlnhqnG%2Bu6mhiXCxsf4UzwhGWF1pTu&X-Amz-Signature=cd0bb4d00072b52686b6f51fab592406815fefb8ae2957ba64790a3737f886b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
