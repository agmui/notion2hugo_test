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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUC2BVZ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0HrEEFPnQBlRGQqvv0RxQ1masXwjZlDGsh2Okv%2FvNFAIhAMSlYas7QpuuDw7xzOH0slZXZEiCjRb%2BXBCkgkoJKSB3Kv8DCCwQABoMNjM3NDIzMTgzODA1Igx2x6cKxNJl359MJFsq3AMd%2F5w7zOq1KI4UpA0mYU%2FN6SN6eh6a%2BmhtL4w294GP%2BhQIfZ%2FUwPYjhLyh5ekt2jSC8jtpuqz9LMDB8l6SVz1HJiCV8OPasq3uKnX7MngoKv8v2UcLCYNYsskLctdhpAr6SFbv4skOPezRa5MF6epDT8V1FXTrp1XqVma8%2F%2FYXtHwj7xmcH%2FcSW0E5V0LbLOlW0dV18bZh7TBIVYkfCam93Tzi1M3000c1wt1YhD0lYwNI8iIegdDPnZmMREHiuOejJtE8CCtCFrqlgDnvBrLRlF27oKdsDgNBQFND5301KZ9rLi842QaIXJXqQhrXymskxQxXTHH6twieKgdw3Fn3aj%2Bl08iyxDo5Gb630dDF1ookWnb4mtBS6RlRaSJD6rDga18S%2FYY%2FayBkGrqmXwEsnz77fqX0imBmNOUKeAPKZbXtTfqhSQpAXZfI7UtOi0f1yZLHFD2YymHlOirKPoEj1bk1XQXTD2zIWUDz09w8e8LMsbzXOGy%2FeWlFZgp735CnOW0rjwSXtU2wD%2Bdc0Jy3Eukq18zvZOBBnpozv0CpydRcQv0K4ciQU10swlww%2BRkx4vQETyvitgmpK59ZWurjYZBZnmJhRJJ2FlboJQ9A8WjBQ2Rli6qpkJ8QDTC92Nq%2BBjqkAQC9ajdVK9FnCEKR9N7xd7%2FUb%2FnlcZ97hoKdovO7yKD20ewlq1CBN4HG2ML%2BKDMk%2FnvpLB8DqRCOkOsb%2BJ%2BUTZxPv9WYdjv4OXaONz9xbf7Q4hOFIwsXxtx%2FktiRAwOB0vECiwlAJmGxGe2%2BTQhOZ1hrrGn%2F2hvj5iHf4j9epGFo1UwR%2FMxbq7PqNruCQyHF5Pv3K1YZobbiD0gd2jZk%2F7k2PQD1&X-Amz-Signature=fd2ce62ae7b86fc467710cd0849123768e5e390d797e14ce361153d1ffd6847f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
