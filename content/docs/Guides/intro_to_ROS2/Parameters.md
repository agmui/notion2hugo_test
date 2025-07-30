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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NFEHTJG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLHwoyEg2%2FmhjmXSh9PpxO7GaHuK2FTZUqBfSGLmQWcAiEAtCVnontCakxNljXe%2BNCn470BtDUQGtur6YSaQ2UPtd8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZLng89PNrhuRPocCrcA0%2FVXCP93fCoMsJhQ8yxK98Lf6xLlCT%2FI1bAiyTM%2BkCokNH2XhHi3qBKDm%2B0eoNftdRDsPfbYRlmkTM726wBpNywZZodlkBfz1VhzuzTmRHB7ik14YlVcrryPAz9jn2%2B%2B1d%2B1Ber4RJzqXLUA4dgD6b9LT9JMQZpzkeGoJCXo%2Bgo8E4VZ1IsL6HLRP2%2Bd%2FtE85iKGGYyJOy7zh5nip3oLBqFFDdEeUSNQ7a9IJzFwzeKU5bJZKka957bVYMQ9IqltFkKICAFNQ%2FTu8ttUMXIMI5jybLPCoLm0E2eJ1AiKFGZLPQEL9b%2FKkr9Gi%2Bh%2Fj5O9GDvh7YTOVWMdaXnJy7JOVuWF2%2FOVsDlmvDrobtaIl3UYqr%2FYlrIecVLP7FNI%2BlP7jzICaW1fiVzzJYt6FDvKyfQ2xvfPUsUQdTqEi7QALMh7lVWHhUy%2F3tw0zVCYyV95ag7z20LF%2BcVGnSzZ%2BAkCXQxOJY50dp9%2B3VGJYLR%2Fx%2FyuFSn5QzdwekhWttYvNI%2B1SppLKbKFBTz%2FsAzn3hRfCaL4G539rJFna%2FJsRc53AcGwEossbjuQ4e0Mg0MbwCaQybYfWYmgm40J3rK62VJgUgiM4Wo%2BgXRwIHjMLlEu5X3bXet7roNn%2BbhdpjnMP%2FZpsQGOqUBWsNY8PRZ6vvrnPGtftgH0m7kW%2BhzhGdbOVHx%2BX0PPuqPlg%2BRt81P7q5H6SWiKaPGLkiXJ%2FsIboUgAJsT8Lq0KMAhZIH6MqqFSs0NP1SDSyOVVL4FQSTkbgWHlnsv9lHIi6HZz86Iz7h8sZzixvzUYXpdZBCY3%2BiFKYA1D0tr4XoEpm%2B1rHHCBgvKmWWYf5OrPdCnZK9IFXzOlQ813GgTfJeEWn7y&X-Amz-Signature=f3773a54424504da439784a8c4948701db88a6daf1b6a982263a6a43b896021b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
