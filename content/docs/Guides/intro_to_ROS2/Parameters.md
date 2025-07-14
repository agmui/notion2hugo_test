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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTGCEIUD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFzVHI7A4HK1VHhnuvoTGdf5%2BSnKcymXF3%2BKrzll%2BBklAiEAgjQXlX0daGBCaOIbSyfwJ%2B7Q0rgJvMLFWbn5OKLxt9kq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDO2jOTPN5sujw68CjyrcA56uzq6vqQ3aSt8QhtJGPCeGBj6FyaJYEl6nRB15TbUdksQy2L8m0HlCHgYus6Aynm%2F9qgIJvrKZy%2F3bqLT23jCAfx0VNjX30bQZeaj5SguBVxuosrRVTEltAWTRyDvSvwKqCP2zxxNZ3DK7vwMeSmmF6WYNw9atSjOm3nSZve965s90%2F8CFECYDh7NTcX7Adz5Fem8YjVfblaGWGBv7ExUIM0%2FEM1rcwYeCIA1pzt2BQ1ZaZ4HVz7TFPRvl%2BXgCL4osHDfqaZ6AUrJS1Pyt5hfF5mgZ0me42e368n4HJJTlBacriC%2FtJaPCpZfZLtPeI4B6viVRO66xziX7uXOBmTQdk%2FVtUaZxbOTxzrr5oWpz1dLWTzMRZ7EQWS1t5vdFzHTNvjx99%2F9Zsu%2Fqv8Lbkwu4L91qajigpsoC7lqOQIq8rzWffETeSOZ5315urCqOrFUu%2Bq2AJUhvRsLDqKvwzlbXUpvdYsXnhoAfjCxB2WSJV32a4oOAeMhz2I6jZikTFq3qUy9tQbWVuUcZTv3uli%2BUK9CsFiTh%2BMrW9bH4n4GndIy7H6qJe1nQgyzHvzxDRr3wO4XvSuOS7i47M4bKwrRuQlV7rGLdcfEXCSNraKp0cuSkgWkkr58TLexFMJDM0cMGOqUBus3%2FZRSoHmmYg2Ow%2Fu6o7yO6rKi5WxTtNOy8h0i8MLSdRnU%2F9YvZOdFcQXaZ%2B9g%2FhgLW7px1%2BRx9PMKZRhwjsrFi2RNZl0YYHnAkVk5JztOs2QSm1gdo1mUe62rklZPxUgqhD9JlDTPt0FXFUt8IgPpXNrWwTElUU%2FID4jEZiiEYbi0IUeuH96%2BzQTEh8JS%2BtZSz10%2Fxt7LK%2FGGojDW5p4xou0SV&X-Amz-Signature=3ae94fb3aa1c9294825614dbf8d08479b6b5ef929f87cdff20d94a078477688a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
