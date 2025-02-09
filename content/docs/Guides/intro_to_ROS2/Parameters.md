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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5AVBCQ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxStLdijFXZ8YHHiq3u1ZbPV0FOqwN7ARp%2BscdxTET2AiA548tIsftpAVqyrr%2BeoTRfVKJB6eE9AvhrS3hQjpVJ3SqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGt1ttSgeFzyzjgAWKtwDEYCRiEayo6zreVl%2FINY7vXVdmDXJucQ3CE6b6zssnKessCMHjGmw7%2BmfWHfOvrv1Y0yIu7jg1UHW75uBMds5KQ79%2BOUxOsGyvaKN0cu3i7vtVC%2FitJSEIt5CC6REFbzn8CncGIMse77U9HBDT6jZ9ZsguMaXcE6PTQcnvsX9o0qsR6IMEz3Ozf8JipfACGYhBq%2BZb%2B2eGorwFt02r3%2BT%2BQNOz87M%2Bz%2B1hIXNeZD9%2BdeTQ7JIUykWeWTCCoO3n1bl9obWLiJZZzZJzYfRy51oA%2FQua0TXKwW8RDIm4yhPpbWXYrTzuqoC4eo8%2Bp%2Bf8tFbH38MzFUHL9dkBUcgD4zPP7xw19vQhrs8O8CXzAKF5ZrW8BeepfdfQlxfeTSopS4HcdVDNxEBQMHCYUZ4s5C4yr0JArhd6aJxu1Cohj8Z6M8sSmZXuJvnfoRBajosEr6DfOzZN%2F3bW%2BZ9gXj9hA5Bp11bhHT%2BaONOdYSieXePqzz8U%2Bu2Ii2YLOERdv9qGRuXc15w%2BCUG6nfSyWPRUZGv2HmfNZujQR%2F1wRBx700qV%2BNxr7Ht5h%2BMSxB6pIIFDQ6EMOBohSZRf6dYm%2BRKqnVPx5oelJxPtykKlUxy6myre8TJbAm3bxiYJWbXA5Iw7eOhvQY6pgHs5WyvWKw%2Bu4UCoXbAVGli%2FKfGMT9XCeOllQ9bGq5h%2F9FkqTW4e2PCwkWF48Hw51s5FCVx6VWvlLV1bpb9jIDasIM9w6Vo7RofDzwCgikXl6nGZGFkVNF5J3Lki1oiR%2FAlkTY3259IREo1zCrs0npL2v3FjzlciOU9MVzviaNVvewxLgRKebCz6pLdvymCa1VnBwgkdPoMAawUsxVYe9U0QCp4ErRZ&X-Amz-Signature=8c57ea654fa31b3a7bedb232c4b0e12d921c951e639f58d8c994c927c1f0905b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
