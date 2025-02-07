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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7YN76YQ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDl7EfnMxgb61BWZCz4PG5mW%2B%2FH%2Bg%2FKMIzS79tm86tXsAIhAIM%2B1oJEyuyge1bP5j5%2FBvfVWudLT6TXUFOVbNYfDpUBKv8DCHEQABoMNjM3NDIzMTgzODA1IgwgSttfdlCjgRYdDvMq3AOClo3k1jFXzQCxchgaWQTmtTmPJqyqIN%2FmuRkNrn7wMGew67dhoiqu5%2F3u%2FM%2F5iQyyfJVdsRp%2BP0oyC6l8rPv%2FmeF0gyzXyDE5cIQ1ZZdX8BT0xrZtoNYAvTZ%2B37hVfFDSquqGICpBeSRGq%2FfxUnVZ8%2BaQwaf4aEmpxapSk3Fbn%2Bo2EHHnuAiD6JRvrJrnOXA29vluIebXYkHtRPAMX5cWB5SfXm9x830rH6Y5Bm6dK4ZZQrb6XFqot7b4ZtxYzgGp5Fp2%2FBQPrNRNNZTIX7gzb07WNU1A%2Fi8aOJusQPw7NB4HegGwy9unqlNez7KFPs1eNxQTzzJIehMuATGWBVQCjYtUmRAQ06N1RQlQXmq1voE7PLMRKg7gynLDqdyCQeeVlvvsYi3TyD2UnLxmlJXcneSBNWU4YG8RNzL8GJKip1oi8ti4E4xOyvGfFhfFpktEypp1laAcfFQyPTTzp0G2F3QXhPq6I8HCJaaONjb0fwG5MPLI%2FcVpxPceWwy0aSMZ1iLo4RYN0zIrQwU1X3yF7%2F2HDeliBmn6AaF0Bq%2B%2FllBW8I4BeLR7D2EqTnnXyjPhe65r2dbzCWWZ3v8JTjdVmZsyY68fQp%2Fy%2FSaR0qvv4yIhHHglNGvy9VXMEDDw%2Bpa9BjqkASlZIHEEvrKBaM9zlD5Ww%2BXk7JDbgaa5qU%2BwlGQJgR3JZAZL%2B47O3zRrP4TX1KeOKMDdFl9O%2B%2BVwWz8BY%2BbJZHeupqrDdCqVPs7PbJrLs5EbgCLJdPNGACeEiwSocuHqn2YQCAdQh1BPTlzC%2BFYXCBYNBvHFB%2BjjE%2Fexc21%2FxwiYrRam2eb6sFJB7PRhm4D4MYGJBzfgAC0U5w%2BQ4cCV6FFsLwyV&X-Amz-Signature=30c8e8f3448dc649b8337f7d782f842b075b70ecb8ab5f172f975ff933c7d005&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
