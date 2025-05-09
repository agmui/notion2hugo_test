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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NTF3TP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfK0lePpybq04FnosQikyE6X58Pn9wnOL55bQAOiz1sAiAHpXnf%2BTs3%2BOoSoEE0BLvrQHpjnVBTTmRFdynOF1XBdSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0ajv%2FcVA%2Br0JjlUiKtwD3yOzoLaJ1PxqCDZu55ebjzdraoJSIzH8HTgSyPB5FBTp9XeHJ1a64O59FTpdbEv9HNZxLUOYAsKAzGFA8w7fYGh9%2BiBqcqAwvoR00ak1v4BR6gYob6maC1anweU8M%2Fju4VLseDud2klk7mu%2FULg0spycAFPTzzNgc9UIxzVutxcuOejkVl97b0hEWIBeNomzQ5y%2FbaZf88O9RH%2BXqkXsloOh4QyBeX7l7ZaYeiallsFyHmyuWJn5R09rNKEQtV%2FNrFSBxpFlM%2FztFcJLPCwcU%2Br9rKGtw38yxSTZoGuPRV2ud9BFxr5wnHmYpFK9bdSTpl7FH0RmlF%2BUlZye6PFlY9xm0yVR3ikhDdQLxBHthN2DSpmV5r1wdo6ixtXDfUqKDLm9P1XqbRTfRDf%2ForCDROyJMW1OfO5T2CA5tW%2BHPGVBxfoqIkE%2BGyVJ239cAN7TfiAB7K1m0DlGR5UCZKjaChI9iZSqwXuLYQ8ebofUbvFW3%2FXK%2BE%2FzaRIaoGlNSomcP3Tfq%2FvIe3oR41hfH9J5t3V975HWU8bTtzr5u%2BBHBSTS9E0CEbLPN1zTb1HCqkqCL3jEqsjK96hAa1gUPTiICo3FFRueib1W9wKlqhHZMpv5jG7gbtEbVHQFnDMwgfD4wAY6pgHeaieD9SQiOVUiKX8KxGnqxtXhTaJlgvzoq5O9o3aLqlLVs2GsWaAfgtKX7ajZVOXPWYdnNAn%2Fa%2Frmz%2F01kqUDsMifBP7GCzJoaOejhfn0VdQo7Q1I5Z0ydptQoBRHTO154cwgtx8J8Sa043AbkhAcdAoZWwxbm0g32W1faZZ1yYwzRoAEyMOS%2BZEFkC5GstEyGzFE4EiRTYK0loxoYj5fbw8kq0ke&X-Amz-Signature=aaa5f72fdccc850d9b1cfc09744939deebf33cffe2c52eb00222c86e23e8d4e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
