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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3YVKFQ2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3AEMGONKgWPxbvhpyvdZ3pXbFBGTVXzps1qK7Yj356AiBUe1zKMYGnGIwNQCQr9Y6Vj%2FY19oaDgBP5MD4Yg0R2zCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM4ZTJVSwQMd71AhrLKtwDmbFvjrvFZ8GIux9k9WRN39sR4wp4ywoaIlWnmravhQMZqGNhZAIzuywxw5X4IKg%2BwgXZPfM%2BuUXWinF9lkutqXVA6QeoiShIUq9%2F9z7eNUNzS4FKwHnRkEE%2F5bs9gc9aRBT2c5Cx5gCAoc54oKfJkFcDLlsK91Mtj4mJjAhAPJTsBvVmdmRi3xX4jQG9BSZJrqECY9%2BlCATgsdvozOcpNFYOFQ8x0ihbsueJd0NA%2BdTW3liOO0cNMBbN4q3wASWGA7UnoibQlCx2f%2FnvhXw7rQH%2B6cC7LxvR25aU2gtLuwVHHmnyICz%2BZIZ8ec7a8Bbvyapcbdv3%2FUGHLcUbXGEPt745W2jgQn7rHfpkSYgjkGjpjug6tT1k7BwfI9ayUi52U6r8RHTF6E8B%2F8UjFpD7lIgUCq492AVa4%2FBOJZEpURKXSKYnFukMRfgPP%2FOu52TdtYKWlt0%2BT%2FWIpBVTnVjguno8yz5tJ7ZmLdjB5%2BcIZz2qxwlJumUSZ2z%2Fj%2BQXndKuzcdr83%2BTBxzJF0jXJNLPv7Ouy2to%2FrguKAwJO2LzDz5zO0LCylRS4W92cqlg7Dhzg5bHa8I9CN0%2FFx9%2B3esXb7zyuX2rwVsdfBNcqjCATJJrBfWQyIJyy3yNhSIwjf7lwAY6pgEMzZvh77lxUcYKt1c4LcIU3wm6Dr%2BnVLefvLME6Rw2Cv1FBYO7YyJsKQduC0lUIh5kPeBoKJuk1PrORvXjyk5a6SKdtnJSgPZTwaHqfLlOZAM1EJbzRZu93smbiHRPCIMG8IGohIXFSAzqOGTtFMl7fvI9qic4pZLnue8nFaHDvSP%2Fl0HRuu4UplWBEf8cj%2F1yG%2FCFW0Pwf3HS4IJQ7tJS%2Bru%2BRwVl&X-Amz-Signature=e25fa8c98444117717a191161b6a5773d87670bcd1426f2971a9feb462444765&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
