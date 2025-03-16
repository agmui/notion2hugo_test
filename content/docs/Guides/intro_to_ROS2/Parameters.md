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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFCVURD%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHURXrFNSAJQu0dW%2BYUMYe4nZZiWLXxHBcDl9lQS93A7AiBDr1WcvnIz8FfQCnLa%2FdfqrUkBMLlqdYWSEAFPAQfkJir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMqQ5qIs6p97FoswNhKtwDercX0zgTWzWjC2Mlk3w1VeKckDxg8FPp0IeN9gXBlMMipiE6PXY8NjgcN%2FTHUzbbvll5O3SZ48kelZwA0KucT92BZHAys0Qldc4HjGYgBudagSBVrSljCO4xFrxy6s8CF7BwhZcizyGvWomUmW4pZPwNzpYI8Km9dXTg0JhXQNSlOF7ofmXByQ89DVsiBLi64upi6Ns9b9QECC%2BT0Z4KIWpQV6kfdLwt71wwzT4RNEABfTJ8R6wApiJBNBq6bUPWQkVu4I443MeI%2Bf3EGKCaE8mOiLRm8o6z%2BhDXd5WxzWWkIcMS7tpirNbD9qSVt9eqq0dbd%2BiI9qqqNmZTdFU8H2SK2DRDDACo6BWohxbtG5BPKr7o2WVqZdHdNhhvEtnHFkRvAYrutK4hECHbsW0wnhoqaSjenaoTD7itcuxNGsAeqD2D27yha9uEgRqa%2FraCedNni7brOWY0HOChsipB1nHBWrJCRzVJOSnTmFUh7s8Zmv99XPOh6D%2FAfZNhPSW8%2FH5nDdX77BbjKaH%2FX%2BZQ3RFUOOfOjLbc1LLpDqRwgynOKgSB9SvU4jh2Vov8qGp8G2Cz9LHVXtvognu68Dw2eePlYGLS50nTwOt5FFxU3%2FUjegGWq4r1WRSXo5Ew6IHYvgY6pgExgUksjlpq%2FwtLTGv0qBi3XRKzqgI87vaj4b1S8uSm9YxFw8TudiiBIAVrIV6qN7I78jBHfiNHreGbdmsqTPqtBmvaQCvXW5DbIxcz5ognRqKptUrc66zm7BuhPHRXfAG6qVWxAJ5b%2Fn2NxLRVzeLBbrpm%2BvTcnXrcmJZfLi%2B5k1WKDsNrpr7azN58zo%2F1TRew4Bcieq4EjT%2BEoLPhf8Zz6F8FQ5ee&X-Amz-Signature=3ae6cca7803013ba876e59e52f94b4ec66b8a4b327caf0dfc75963870d6f8ea4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
