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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSJKDJWC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIA8dbDdeMXFD7HZ3arbaIRT3VraYyE%2Bnz2D0KTiXJ92mAiEAy9hs7h3nEty971caS0rq3VOfc%2BVB7fTEqWL7jQrEGE8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDK0jcELqpGcB%2B9HwIyrcAwTPW0MI1iTzqFicp03FMTUfYqXle15B4lqOhJplhb1UxUyPYmtEJY6go7jjZD8pIWBHpZmC4x1u8Ck3hSQyBsKA3UZ%2Flf3yshl7AL8XqPxR6gEJ9ae08bp%2FmIt%2BhbTxLRedWCFHd1rERUj4fjZBf8VBM3TG0z2V%2FpOUZ0J0g86CapuKGF6NeSiNKLBYGfX%2FYv93Oa3MZgKH7%2FstJkh3oR0RNGXBzowCW%2BYCpRgVZ6d2ZUbVjoffevgnn1RXTKvuRE5y1XG80zPDbY320tJW%2FiFZrkYUdN%2BaebSGARaF1DYSJHktUiE7xZUPrAGLhaDYYD9RG%2BTRkGgcqVLD6fOpMPHVwC3QmPEh0HO0kWVEOdfYK%2BtrJ4moBIZNcCHsd%2B17YzPH4EvknBHSCrAxGKytUihAfdYvu%2FSVy5ulpVrdfS9NCeLiYx4ndayQMEpMovu19hQTAW%2BNuxmvGZOvlGtDIeknlZKk7DOln6lyxkaHbdoFustj7pS7RkkVNHHWhOL%2F5crSitXwi6p1caK0ANob%2FFiKjrVIJ9UlsElaAqH3GDqv8vi1qYl0nDHyrQ96LmhdORe9zvJKd9ZlZ2%2FQ4X9c4jJk6JvvCWPF%2Bva975z7TJnJNsqWPYzeCgiPEweKMK26lMEGOqUBRYOWIx50bLTlwZy6cJRz05Mp%2FhmybxStM3IWq2j34CoxGCMNMKTmFd2pOOd1t6qjUilr1fpYNpDe6NXEemq1TXKkZLHD5AExqNhLB1YABJO49%2Fp0AMEJuJSGCzdNBFOJQWQiCuWYu0aoYw%2FmFKPdfmMGSIudJ3rkOU4wLDvFm%2Fvt9rf88dxEUlrPxz%2BtAD9VgZ%2Fpv09%2F0YS7z89Jo%2FyDQ66%2FZhyM&X-Amz-Signature=96e384e2725fb309f85a3ec514a20dbebc35fa0d3f455e8bd14e2da4ff12136e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
