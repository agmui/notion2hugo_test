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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OJR2WPI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCICoIKf435YIY2RzlswIrVlaJm%2B4QaxNh9LBwAU4zR4xJAiEA0vmFhAKYVUNPjeo4qKp25zFpF3ncaef0LYrMlWs3%2B00qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBUIq3SrDPlo6NcBircA9rQcx0IGdwYDjUr53Hete%2BjzlCQU0zQCRJ4AB8QcVz%2FsoYh9Cnl%2F3kxhL9qXwxKjqrfNcQV1YxiIlinYr86n2TDP4wW6mWJmqn9BPBZVSQ%2BTO%2FYr66u89bqj3RBNTztlOAdv9uBhe7XkNchyHVf8O3Ps0jKzvlHT0EDE%2Fl9uHazCcRKI0culRA8e3dDVosodLOD33T7nsxFYJ1zCgG3%2BwjN3X20rHLaJii5vRdNAnGfoRMIMKscVXaFmngfqa6A4B8z2kg%2Fv3dSksFYtSucFwR3oeLUTOyIOltYe5plB9kCxsPOEzwgXTVEUJtUQ%2BbR4O4BAzRc3WgB0xfu2pjwvjcAfcZkkiKU%2F4CUPeDjeSRcLZdNLzTw4k%2BlpaJsqql3xjIPIU33kNeSmca5S8a8in8H8WT8sARrqmaSb4PiUVBdSFyynW6XnwZzPLmSED%2Fe0Jh8lABZvzz0veLU5lJ7EdIBZX%2FN%2BRq0yKNeMi9TTFvQMt%2FQ88zSkMgZWbnVQ3yeIeSLxoGmMmIY1rnjFQQLdEpt5BT32rz7CmXuvPMfyoC73UaHBUFgk6ruMQxd8QRKVqHji1GSW7Ac2H3JPXIfmdgsyubIUhndwSVq8fXl4g3cYxd11mKBDYCRT4sSMLuq%2Bb4GOqUB8rV97tBluvMRRJQ8ivR8SZuZPRUfR3CiG1x25zsUjOCTulMgs%2BWHrG6N2Oe7xk8TzjQ8uLj6FlBY%2ByBKrFUnjAYZ%2BBDD6yp7gcPgRF6tMZONbthPNRvXu6BcED1OdRI92dWY%2BMz%2Bq8vBLUeQdrCJZZw%2BxJG95SbinpW%2FQfzXsh3Whp1nOqscfjiAC%2FJh%2F7Zf1oXnA54PRfwFj0qDxVzGWNM0oDFU&X-Amz-Signature=5809df4df22a73bed4c8334c15d6f51bcc95e168073cff8f423fd7c9be1dc5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
