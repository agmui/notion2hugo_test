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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRH3RED%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlNxSOCfHS2JPHDimPhZFkjz8sL5nbY2sB6ddY%2BvAu5AiEAxyI0JWfyTI%2BggQug7Dje4qv%2B9TAhv9aY1lwPJJOcbKIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDER3s8Hky0HHlRUCmSrcA3FiQKxBi8KAAGP9eNTas5EKExS9EzlN68tNbvCPHZr1iWLoo2po0Z8jWrbWz89%2BUJht%2ByYlDlejnkb9enpjxnD%2B70%2BnwtuoZxUA%2F%2F211UQRC%2FGcsJTorlGjCgFZ11%2FuWXZlwUdw%2FQ%2B3zJgvM76gJsrnkWv24%2BnVeg%2FazzZ4w0tqCObDLZVERWz2Kvd8fTOIt8RlXCbKg%2BywIGx13zywTJVBznMbULsT%2FZyyibZQYvvVM0eAJk9FmWnxwaIWMouyybZaB1jPtWIG77bR2zUvB%2FWbSbCD1Ndiy29PezQEBlQYBrI3Z%2FbPLj6wgH46SiBLKFkkUQHd9tPAn4Aiu3MNxlCrRNtVdUmzJKY%2FUBlyK4wnGZIz5y9QE6NkAuJ6JcSc9PNwY2HIu19bX7Y3XLTrlMQSr9JAD8ZDD081UjMiXVyrPySVjXbfin9krJzap1jLYav%2BHFDozfO4CkW9YSR2UyFXGAFVQhtDF89a6B9Z4yJztCJpXJYBOPSH384E1GLnJS5WRs6ELU869Wz0Z2Ykm5IKBESa23%2Bnp44NZYzYeEXuYMa7prNxv%2BbQBF4QImR36v5U%2BeudmKJ%2FUoY84UCqoGuNlQ3Db3cv4W%2BGrx4cH%2BQp9DK10gYlihJluZj%2BMJ3I%2BLwGOqUB78kdl35lj0iDLy4zm1zPYbOe0OLWbz7p6%2FXhfPxQfwiURYUpqjBpMrYIjUt3Z0%2B0Zubvp%2BE%2Bu3I5aZEBEPSaTM0siejVrZHkuGuoCtDXByG5BFn7oJW%2BH0wlshQ8505xEs3A5DNLOvulXHZmEDeGHT%2BVU%2B22UpWHah6fxlGk6iMZgY6DWwdMwy1jq%2FqDyXrZkCSavug7mjmz9q6AZoy5YbGC84DI&X-Amz-Signature=9ae001bd89c4379841d6d6f26ca131eecb12a66446d7c067da9dc05c0b1f0317&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
