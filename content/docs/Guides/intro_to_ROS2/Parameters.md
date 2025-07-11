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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJXLJTF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgZpv6lPDC9WsM%2BmhPXJwOIvwIsucffoICSVgDWYMXHQIhAPhRAKXa7mcXDZM55FaInhENSjKPrJeoTi2ggTBM0O6yKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvtxaVwgU0YHQ4v%2FQq3AM6C2J4aNBzOT3UqIcNLbYskbO%2BOlL2lEv3QaCfYVDTD3BVL8LI2FBZ9pCWHU1bNXzEgyYCmIhEa61Ur%2FL7H9zP%2BJn9dN9IpxlA5ZpyzgyEqlzTD%2F0KWr2Xwwl0%2FNbvSiCJU1Brw61ukeDEcGGTM4A3O9SFEeruFzqUXzjTbX0QETMUQiglqPjB3lczNGjStUGFkm5Kxmj4Ci7C6oSxRmAXbSumk163dVU6xhiw%2F%2FdzbEvhcKA8LfsU0wV7XWJ3XlHkyllD5hN49dLEMPtvbHwS6u9pDpuKWXSloG3GYyQBN0nqHihBlaOO2etXH8BIRHVDBfjqzxWkzKlE24Z08qjpScnZW5sJo5Dr9OYZN0BUbThIR%2F%2Fj%2FnwSVi7rjeLXcLqZsvAgqftvgEwDDE7ymbgrHwnEq5CWmdPher9l9ME8IqF0dpv9297uWiWc73wpm1lTuWGnvaRej25Dq%2FYYXOPWzaxqbl7S1%2FaxGyLS7Ck56vuX8p0G2kQjYUnL66g%2FvfuccmJROE0S%2FlIUAK70sTj2XFt7j3zchH62jm01YddmkM1R536e6EQBdATcJgnUp2Grb0J6xULq6qV1X3U20%2BSlutnudxJw%2BUx6jAQVDCjKWlkctIdWnVigsJRcCzC4%2F8TDBjqkAZn1pnQCzd1fJ8VgbB2WpWEHALUb50BLT6t0p0Az7jtpjHAldqXxmIrXjEy%2FqlvvMertrSfG%2B%2Frprq9zSTDZDKRUKkeK7ZpehDTaaMEJBkJXj0gCLfB6IaLbv56gRNlGzFVBnb6qn8yXwciIpOcUBA9h2eHaebZjo9Vg6sxqPleutUo3U0Rpa2J4wBelL2OPi3TlSbCEivXKcDMmHQzQzuoBym%2FW&X-Amz-Signature=d6156e8a42fce18e39ed1a40cf95cfd6946e7bc7719bdc3912faf600977fdb79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
