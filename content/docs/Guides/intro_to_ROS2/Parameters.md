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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUWH4KLO%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAUPYWB%2BWG8sHqBQFqzWbc1gmGpUd6qKQqouKPf1npEvAiEA9hWu2A7r10Oec9uTt5nKcwr5h9HdOp96uzVXzAh4rV0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIASjV5m0NnTHpplXircA8ZDZgHALi8D4E0B02aH3hQA4KIZc4kiwGZ9oZrtyel4kCzz0DagMvcG7vVN%2BxVk1AMo9dUTnUEaxRYU1D2nvU2tRL5QB7SsVmJt8vr2WYF6rKt4wh5Hp5nYsrSeXrV5XJw1RhbJH2MRoHB1nuTnPve62q%2FdryAIHPIZ91FvdwQ2QKGyq94vl6XdJEzETSS3SNEFlf9tmK4tCRt4F2EDcNteR2vVO83U6nWcXwBIqbqQnowHMBNKH7X8zyihHWh2EawefEthFWIz486FgK8pr%2BokXz4lQ4Bldv%2BSY7Tly3hey4XO8WoP8ti3M3p66r4I20exRC%2BwlexpKmjVANhJes9jXlk0%2BHIyguUop1%2BnA4uLXozIe2F4yeKabr9bNOuKJNFKZVlHPVbVg6IRTXlpSCyzyqZUE6YtpsJJD1Jh6GYD1uVXh8lyctB1%2FnsBy%2Bbz035wKB7C14YxftMHcO7fVWhp0QpA7QSTMkllrmIKOLs%2BNB52zpmw01kqONccmhCha4IyWAOWgAsGA%2B%2F3kcvO5Au8mIzMQmwnE9cBh5G8jLAKnmKmRrMK33mcAdUzSjXkX2Zr6Fk%2FLgeu4tGqHj0hmnJLYEjQ3CD2BAkiAYnWsyoJijxHDdPwodM6iv%2BrMMavwcIGOqUB5bc2W11iym%2FoBCkQR69sAoxncNJOnNnJSJOjFWlq8kweANiHJdNshctwGkM8a3zGHvft5Qv3FzNaoseRD3yEzy4e5VLb072YhBd%2FHtz7IVNqJwXFNkDHjWSE%2B182rzNz7v%2FcKa7jFamFMZ6E2if334smRT78gze83b%2FbRSe3YsRViMS0M4YFAe3XxDFLPEDARGhFfjBj2FUK77z9TcS7x4dUabSs&X-Amz-Signature=07cc6f8a589d4b219e2fb0b5adf2e204d1c7d6fd5a905806cea44e68dd8e873f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
