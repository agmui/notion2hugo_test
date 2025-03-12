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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466346QIXJ6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIHNhM%2BglErQMcOLse7ODjzkxQcFzvPeiUQyeUch06cSsAiAxvUsJ6AvvCB%2FaUueOCUaU9Rs5wIWooqyTVMo9fUFZziqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7R9%2FY1ZXnltH6qs1KtwDgwtqkq8tntN%2Fpqwkj5p6iBc2iwB%2BHURlK1EyvjIeksMNYgb6WocC%2FtyKVNV46GgBv1Pr%2FjNaYC0%2B%2BZXUYksG8R110BnRMiGlJN1ilwKQivXey68pDJdfqwWlU%2FEYoPmZUj3y76CIxLlywWmRT51VHdWoSucmjQnuRrBuuTsOD3hgF%2BhJRKT7eHMF%2BS0%2BR4PwvYYUSOEKoUkhNydfq%2BvtKRMQNd0WRSuIsCJS9FPVZo45LNQgansFxQo1sE4esPWsh%2F0MaBIhF6FCALZmh0gyjSKQ5im2BMLYi2qOAi2RreP6YfZLUjRBP5ea9riex1IhCPZIwq1a2t7bHKTAEtcH1%2B7%2BGfyiYZM5wfY56dD4rr%2BvhIwogscVnMel7rjNWslykD%2FuRKoZ92hqjkwxE0DdTiQ44TP2zuLEA%2F2b8mR7YVmucnjpWr4mtUu7yEQXaJa8qoY5JDjk2av2Qi8p9rWITBIQLaRhng0fXrfnr%2BbE6KUh2Zm8LkviAne3H3UjrrDsSylyUpvkygCk9A0T0y5wISb%2F1fUmci%2Fb94N8NpxrRkdx47NeXOKVS2fjRcvLklnnb9xZ8JfHXzWOGyXx0Co5qFCmnmu6xt%2FKRA2kNvkmiQhjuS2ckiTBJpU0zQYwoL%2FGvgY6pgGGHRGDmxMHOHBY7aJlSStnMgH9Z8Z5uoLv%2F39wBjeeg1ded0Kccg7tskXp6Ozvp%2Fo4U9KAZh5gQS9bDTC1aJQCV4sAVF9Mvj8aGY5fkQlRlAtRTYP9RGujYF2svrCxOIEob53su23pC0bknaIvHes2LfVPSbckybi38NmHlJmaKNsC%2BAy18N1cDUMAjugd%2Ba42GickCxCHekMpmeVoqsCxUByoMvlq&X-Amz-Signature=eb75f82567bb8cdde0a8b033434ddcd766fd5fdaabcb7786bbca9322d30155ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
