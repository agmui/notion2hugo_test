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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL43ZBFM%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhaCzrtU0JElr714DimgghtnYND%2BMkDk9Y4T6lfeC26AiBJHfQdmzp0LhIVlVajJzEk8YsGjvfAQ3msLIzlVqTiVir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMq3SMvIq%2FaKi7VV4yKtwDJWEDTQRAW4zRUj8Ah1EUKzA6lC5KHkx9SUVxYEMNlpDehg28oJ1Z6H%2Fs2C5z%2BGOt20xYDE2yiOpd6vP3ixU%2BAEoowv1AFGIsMzltBxONwq7%2FgpdsTEm6ph2bsL754F4zYFPLHd4mDXxUZ8gjEpDNuqOIIXiHkOKVDBMzutaC78QO70%2FZ%2FHIGwLPAnvArptLm0SKe0eL6aV6mBQQ8KGUDzT4nW9t0R2alCpNgEgxdpo9pOhSBcZN8d8ToXmuJPPOgVrk0uRPnC%2Bo6df2qxjz3ubjOi9ZSpzQbvZl8g82S6IVx8T1U5mpraZpX8%2FNuudeyH2ovw5TIsyMpQeSANVq4EwqcjpcLbgQLXlqT1mx%2Bkw5%2BUSaLU5eWhlJtYbmJkGZrvgxycfr2V6AcawMIqF5%2F2B6gQI%2F3UQJp30ugi0naD1A3ZsPRhKKfWrLMEJuANDYwwXXX2%2BLRALh9jiNoLFE%2FbtxM75H65qDt3GD8u0JS3KJws6gCucijSxRVvgjs5cozyMtHttGbWHCxNXlogQDohTMbysuNi2AWVnEx8ELDXA%2BmyZFeol13SPgECEMF3LJAW5upR%2B7AdA8kntpTMD2D4NY2yk6EBZXKQ605IpM6ZYbrdnMUIz4Sd3EjXGsw9KGMwgY6pgH%2FGTxC%2FCkWjEMcPbWVphSJx%2BZwfjFpwfeRQKnHUVkewHxO31fQ2SqOVVWzhBuBLjrg0kQkfw7cSbbdJJ5xbarwqPw9IeksnYFs9VgxVPc9cYc4ojM%2F%2BtYduZuzNQqtyqG9nI20mLlRNWvuyo40x0woF4Q9SlbmyYDmMASyybKYxkHmNQg8oXJJ3anQORe%2Bwt6xMfLWQRGidz0RY47LoHiXw8NXPQpJ&X-Amz-Signature=b0668495faf0602ad03fb6b86a0ab2da46bd0304b0a09fea9dd4b22322eca221&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
