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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WA2BR6M%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQD6sXCQHWe%2BQydO6Yvm7iRHLh%2Bhx%2B4kTuDnHBcHTQKs6gIhAPv%2FWzOYY3z9eV3o603lP01BIZVxHyQnh1C5P58h6f1jKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcyBhhoKla2PyRc7oq3AMh90SGcUE0zDhOt6dYCQa7Ng%2BvacPI2vNSdb9QufHI62LEBR6oTyapTX9P%2F79bbAQKBMJQIWG8X4bqwAwIzcK%2BrLjpjKJJFn8j7ESZU3BVqx7EbefZWiN2%2BZr%2BDtZh40FlvTihjKapk9zjwYopuHO%2FUW9Wc28pbB4DF3d%2Bbo0Xcpl6OTaueFZuHFv0ugvXcuwTGgALQPLAmjt9Ui7k9r9QKynF6BVc4xh3J24sT8gC2W0Ll0A3oRDtWy%2BxLhzNSfpbdgBaxnYLg6a23EQWE5JTxdJGxDtRFgTIIqx2tRXf%2F9zaTWkKy4kr6kKm3%2BWUBFvptOnQoD2QRZ9YRtiEnyhGjFoZRaBUvrbTnXmpz9WZtkHN2GC6WwQxzQ421x75DK5t4%2B6jGw6I5GCPglztgH6%2BSbepMWIps%2F8Vx9n9GjdHzl3nOTi%2B1DLnNw2ihHV1mJtMwXQfHQVTlgbYnfw5jc6fSZxVt3VeKbX7%2Fw6Xx9VKVt%2BRs1LwyqWJoWxSZRQZT8qU2Erl72WA%2F8PM%2FkhKnV1WvzuToneidjuN2EEbHRHbk8z%2FOg7OBLRCiZKd7hA9btDKrgHr3%2B9IFUK49icCQlulcG5QI9PAoQAEKNQ0WDmY%2FpzwhIQP366srTb9DTDE5PC%2BBjqkAUvfOLb5u0ZUMv7Oa7K5Zyt28kTJfphK%2BxZFPSUGaw1fP2kzlpCAnG1OAn9K9eQFNPpfJWAH1eqB0IaXgytzm74BBS1ltnSUU3jc0PgEjAHuprnZUef6u8jnWslrbm5TxjEw7YSyDjhn3C6ulTxXTX7uHMunhXS9ZXZNF34xDYUgIXVMlSIDI3nEAMr0jxkIwVeoereWJSqPG1BZH8ieoYN3ibXW&X-Amz-Signature=952df2e206371a20c046a39546c855fe078fb840784b9e9953dbfb2e13c957b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
