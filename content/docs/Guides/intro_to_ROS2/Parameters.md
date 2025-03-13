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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMZ6JAPC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPOUAUiXco8r8dfTg9ic9bqfYBfu%2BLwrXAhELzGkKDigIhAI6lRwOq%2BAOpTUfadtnxt4FlOjTBeIB3A5JJUgpBOJhBKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA%2BfPZdYXQH1SHWCIq3ANnmfihjIOPQ%2FZzHZWh8O2VqOrjPde6sGmXqiLd8KqpmnyqvgatFDKbLzsfc5E%2FAV5cZ%2Fs%2FmObzhruWnUOQj4sUNxyMYw5iNMLFlaQXupjF18dr9Lqpy6JUbo9GGnwVz%2FeRg6MPUXqbRjmYoOEk5sZ4ep2xlg%2B1EaroujyomeUt52bU9H4YFvP3XQ6dPa%2F3jbNRv2AcZt2uaPFAxb82zMBJkZvCDkROHdZLg8z3ceFjhyRiruW5ksZUfpr%2BxEeZV4gR7VIYL%2BsxqNgsk4eTcAJwg5qG0eKaQaXki4KnyZpEETPxJBbQ2LEepeQIvgvu6P7ckThxy%2F3hBfWM2eDV93HV3FznD6YECnVevZuER%2Fqp0jjGDsJ2507lfijXObvb0i4DvHEd22kJEbLeQGl7fuvwq0aLPq%2F8X6OHqLhvHeULf9qhKo71rrxkvxBGJrDd1vqybenJPZuEb%2BVVIsUD8hNDdlJCi73GhromF%2BvIypgvYlZGMtWJw7OZF0mvZooTCGiiJTK8pHENP0zW7OWnl3JlDSb6NdbHxZ%2B6QrPsbW%2F2F5HLi%2FIeUqAlhMOcB7HbRJyXz6FnCzFJ3OWYxPaPT68TIi%2BHS6VrDabPjzsnBIoxbxbvuN6jp%2BBYpmTFOTDNu8m%2BBjqkAQ2DDjeybG3CJsWfXKrCCETnLKl9Hho2BFeOLUfFRRz5RYzyvjlBkms7pPS0%2F6ZX6eca6qy35HEAtmo8XDxvbhfWlr88g10fk4bOZuuK8RgaaRwITOmaDk%2BziuUBEbhJZ%2F3lptXyvNY%2BMg2ge6s7XUaodD2Txm%2FEnnbupWKRCTS%2BARfScA0EHwn13WRm9MLU8cIjvTd9KZZL1%2Bvidq51n6o4e9n8&X-Amz-Signature=9bef2e345675a5dd7e44711f9398307cdb3c4d16c2b0ddba639ae8d7042d9558&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
