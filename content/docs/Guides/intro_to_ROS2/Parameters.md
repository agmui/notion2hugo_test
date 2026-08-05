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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7C7TTUJ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDMBsSAm5j8PdLeBsoLjB1zkUSQ9xpj4tCZIwij7E5VHAIhANlM6U3PXZIf5fQY14c9GKqOWSYz5sl5DM9uYYy0eIGLKv8DCBoQABoMNjM3NDIzMTgzODA1IgwpK5L5zaK3oYUVKygq3AOcDoG%2B3RY%2B%2Fsu%2BUhMRieq8k4k0puRdyfeAefK6OQSiJtv6YL9L83rvBzqMYERTYvuZWWhLuWKnLJMvNVBhBGye2xnPFxYmdihBqoq4%2ByYD4IKMedJ8SwDxxb56d8SQ2owhESCndWv2Mpj4%2BvhAtVO3Md0J0LIdTt8FJjC8CuWHacpWi7qd47ORekPJkCwf205D6d0VtE0vOC4NIh%2BDbVFuPOu0SBZ%2BOH%2FIg0qo0qDlrib0g67gogVyvnqCXOMfpUU%2FWOARUgOSfhZfibJWzimoxfeVlpp8%2B4fg7uWR3tIs%2BqEL3%2Bj8LKB8XPuSMlavEWGWkNp9nwFq01IK45j5%2BngcjFBwSJrUE54RzULDphcmlh8dtOr%2FkOrMUEh3%2BQY%2BKDHdiesK5tABz2QExod83DhjFlHnlOtZfXrj%2FKjz87vXmqSSUUJHYS95Zsckjl916%2BBRRhaLJHK5lkuq%2BDMEQcI7qIMDjA%2FBeEqOXsDoqFUXYY96e%2FrY3MYhsrPGTYlK2K1L%2FHmI%2BTdkrGZ%2ByyiiSABHhq8ybyr%2BiXb1t009OAVBnXohtYlFpVDzcM8wapaoy477CywdgOSFWij7XhU5xfepSn%2FLHzeNAT8X%2F%2BiAfiHsBk9th6rX1wyspq93pzC3lMrTBjqkAW2q%2FOdyX1Q6tCMPm%2BF0aJi9WnPqhxJmRU7xQTPC3kf%2Bi263Di%2BGQXQUiqk1MZ%2Bbwo9aDKoKrENtemgtFJ%2BUIIyQQDJdBRHM9DcpdhUm5jenrwVeRAG1sgaaDTS6s4EL6wEIiBCxJDOqcuF7iA8rCvC0amygz0TZoBuJlh1jEKuY%2FJtDRcFyAV1e%2B1vnhdsalJSuIhotNzjgSHKnIsCiEoXdfplq&X-Amz-Signature=36283c3306dacce65eb1a556a04f752611b5717fa781ccac0a89e9f301401628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
