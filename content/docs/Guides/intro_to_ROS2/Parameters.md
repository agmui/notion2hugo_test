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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVB5DGK2%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC2xINZRZr2jdLELxCIFDXXYmNNvQQuEFAjt%2BC7KchoZwIhAN4X10JU5yFUZhoKp%2BJWx8YQOLrjjjxeGSNhSKSCFRPYKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjFT9jokKABOU0Dlsq3APawX2ysC0%2FsLh4GALIgIDT2t9LqK30vJM9NH62rV7exHwXt63K5WOLIGJtMvrkbe5PNbrQieRnIgnWRpGuuK3sVr%2BTd5LC1EbjQMerBjUjOo4vnCjiIK4CXO5i29UdRPYjI0cqze6HCwH8Y3tHlBaXNujX9GnIzszLCZn%2BFNnHUXyFIojYiXPYJ8%2BWfd7xVoihj3i3hK2rmMTs31qNGQlLW0uWJB9WWBmrjJzv19YtD5JIRWntYwbCkI9%2FYloK5YOCb9d6%2Bk3rFohaEU0GawtINd737YPtVuLpFyIfbJp9%2FqeahgB081B64l90O6r5oBpYvHKy4bYiYVjh3SVCVzLGYt2vr5gYkhZEZIdTtQxGMXqdB8X4AvLbtuawxjAOABHATe5RE6l%2Fu93KylyeqOJzKn%2FQ289WVpVQb69fy6oHQxGZsZb8M37%2B6jA5%2BiEKafSt9TF4NAMCQCMxti8rKG%2F3%2B%2F%2FIvdh%2BAcaT33aFbFiNjojYeq%2BGAIPbecUX1hsQnTyV0e2ikV6O0YwES4CRH7%2FWXo4ussC0RdKLcBdbySl9QCgxoXuZg8OsIHL7aauFGDq7tzK4sQZD28PYFcbYj66PvCTAtITZF0UecWyZWSrrUq8v13Y8IzjC7KbX1jDDqbq%2BBjqkAUMVZNn1F%2BVp%2FER88%2F1E8r5ivdZ6WHZPtckFacVQGCqkxRzhU86BCleP1pOI3yyJnyzcwlU9Rkg0z8x8zOLkcrkGtSDlyl%2FfyKfY9k8J8Pc%2Br8Nx67GCvPa6HUK0%2BX50lfiHAzDQWg%2BNFpmY54BUZIxugz1e3zT8XqMD0YmCzDN2BCL7npgwzDcZXp0jJ4uGxaXBU5WSD6S%2FJXM25tl8ZuS%2BF5ke&X-Amz-Signature=d155808939740c275c263dab3c11cb92ad3bc3f60bdf3a956aaac5d9b22bd5b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
