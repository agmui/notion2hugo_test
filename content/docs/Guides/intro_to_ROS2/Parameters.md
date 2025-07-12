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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP5AYV62%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPkdTtj2tg%2BnrL9f8%2FSmVi%2BO8NScGjx9PEfu0lDorG4QIgfTPGTCEiHyhjI61DdDX0eE9GFm8iz9sghiT2gBsxbp4qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6gx3qhGj2yhtYVvyrcAzqHXi5n4CUR7FSHtjtzt4fEcDFcLviIkBgXeI6WbxDi1Y42JtGN7quE50Iccu%2FCRPfpz7KLjMcvtsux91c94TJmVsndaeiPTuOnJRu3lFp8Dg6ypvbm%2FfZzR66ZpcSpjXoTLShEBEJms286pm4vsk4TLEx%2BgviFGeaYj1LNRDUgsJxWFLKo38d2Znw5grcLZsoJSGfF%2FnsTvSVA%2FOkPkWHAlxbWifxTi8kKWSbFZE7H2TbAAhYhfAg%2B59At70APzFvrOrC9qAfKh%2BzLiiuSnv0iNy5R18V4QUXjR5AWR8PbhmtgMVIgB43uVS3952PWFFOBL1GAiaw%2FXP3vw8Si6xL1%2BapjEPvJMbtB%2BT4MlMACx82vqSoG5fLIlHy9MA6qV%2BnXKKjTVPuKmXUDPCUoTRFLt7aHr19XPsmy9zZJ%2BMQAVzBwYDSLXJHYV%2FNmZadyUzUmHD7keU5gkNn0A%2F0fuM%2BYqpy9c2oUTgNLoT48rdnDTFOHS0dCPcBALJun7wjykfJvp1QrspdHg4kNC7E%2FY0q54E1sLkG6QXccputxPEe68O3WrCeDAegFByQy%2F7CJzYzlWJkQTyRxlghyKtwxd6HWkjQnOBxSlZiimKtG0n3ZEhldNJZ90HIbvwgOMNGty8MGOqUBzzCXT1yBDU3gNxQeJnJ6uf9nS6pwkn2WaBF6azbHfYkaP5Xa9Y7BdITHermSljYd9s8eF4898LyhJKvhofaYkCyuprrovTy8we7TpZQW82HoiWzOhtO4GZuj%2FUTCZyhnVYFHGyLFJU6DO4o5fYYBmbODH5z17GKoHk9Lvg6xid9CZ3z45kNlTfrpgEucNbUZ7dPRpt8SlczvEqVQ87HrUTUQUkXZ&X-Amz-Signature=e3f5fded5aad4982f896d4293f98734dd1e13ec06bde02d2ab6e379228d0f8c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
