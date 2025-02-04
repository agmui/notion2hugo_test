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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TPSVE7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCvjdoTmXgxbGPACWI%2FUwNLttRsQzrkxZNJBGIJq64NJQIgWJ4HkxMe8u4LCvogUwZW7hhwqWAObw6WHbiw4yYaZ2Iq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDBVCauASs7iQ71fGKSrcA0z%2FbEAhhbtnIdPcemCyqFOgrRJr%2BZN03A9zaW9iVm%2Fs%2ByvVy3De3wxmzr8zdRixVnQI3aUirNC4Nlgoa4WFtGr5fsphJ08H9OAyf19mXY%2BMf0lWEG8OYZ9tVEXIpA8xGGQSKVdonrsLIVlRGuRzWtbpV5QKWmmSZKOwrRqaKDImwom9GdceA%2BOv5bDcwsYCOl9EhWHxTtUc93W0cmJbDi3j6wHFKYXVQ86N0fYc3M9P%2FzTIikOXAh8GEnyMBruymU7EtXaFP7ieB%2ByWEdxcl5NLuxjb3UD7f37DFnF%2FrkfqMkzNAxN%2B9mnBw7s0uQiInoXCH%2BVZaTVhdk9rzoIq0pVaOoxlO2Vp%2BF6z0qoAT61RF6PbP8fBwFQ6nuaHGX758Z1Iizu3iocYc7433BAvaYhoVY4hOq4x9KPBTxeZ7jWyHue1lgNB29Wl9r9VMemDqn4Z4G5%2BRPuP1WOjqR8ddq8pz85rHNlBIgwixkWNyQK43Hp62BHxJ9y1w9cbQMSfWWp9kZknUfMWYxJbQQATB3ACUMeVFp9xx7mM5qB4JSkEJ9l0CJP7EAE4Lkwa5s%2FrMiY1hOcR9vjSyOb3OqUiddrkv%2FHdYpk%2B8wRnKHY3eyh%2FIS7%2BM2YzFokuHK9wMJ7qhb0GOqUBsZYKhISELJ1v75lEDgp3RCdQAhX2JUp2HIYuLm8sUPOLeK2Sqgq20%2BEhZr7px5vxjHxv8zBZXHtF%2BxnEoF9ILpee0ZyGNDzCFpnwp4n85iT4xXhsiqzoy43wsJf2L4wU55xhV8rEY22TYFnLMiQuq0wKb%2FttOxT9XR4m9cD5kdIBxdTQgKPwvQEPrxlYBPO60H0tuxYM2uG6Zmipu%2BGZ%2FyO%2FbeAH&X-Amz-Signature=c0d2d6e19b96eb393c9a8c5abc5082baf0bde1b624e92f90c1accaaf9a41e5fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
