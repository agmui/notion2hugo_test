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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOB4CMQR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHvZOPFKkyk%2BK0NvfOJMTme5gzhLKWc28oSYxXizwoiJAiEAgJlI0l3n45UKNZNAtzhPT97uPJ3Q8WLVQLsf5qzvVM8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMG5Q%2BOV249iffPsmircA4oJfqtPN95xgo7d473F4MTZDreZiwjdJWsxwlikmCU2Vld%2FLyGMvIYV%2FtHII8zvl2zDmTc3NXmRGIKEBun2yk%2FfcPGbO0m6cSYijWrY3IWNl3ZDRX7Q%2FAq1TjTBdvHK14FYP0X1vyMgv%2BstzLVpxjQxqNztP5jfR7UupY1CSp265jfptDevp%2BNIpQeY3eC3Iz3K6YDk95pBLCAIRIyDf%2FPJiV9GeSYR8opuUrsBlmLc6isDXgKjHcaIazLH7HSYvTq8tZkzNThveUL1avfYDc1dWIc6WMYVeHRlkZcpPzpRdI1DZXb0dr6%2BOBf7kk9fcIEQnZlwLobX705kRoiTWPa8wmXb1QE7GooTwd%2BaNRIjuW35QAiEOYBweVFq%2BqOcWPiPZy6Siqn4NWak8e7aqE36CTdqbUY64SUEe6ajBXYrQB3Y5M0HuYLTVjCeJIUvdD%2FOJXns19%2B4CKOFVdAKP57hQBlQ4bMM4WXkqXj%2B00QbD9oN6WZsC87i0IHY0ho%2BDl%2FAjy%2BuoJTiDUtx1JWnmm%2BOWZfjOcMrmW92TfKw63jnvfZNcL2sZM1jNKSyt627mnP11n%2F6t2aPLO8ZQw%2B%2BvSuxuYjpK8WCtdht9Sera4ELnivR0Ehdn485TKFNMPi3h8EGOqUB2uS4Y45YUbYSj0PAE%2F%2BL%2BHnTqG%2BRLri8jYOwy2%2Bjk%2FI6WTVwHC9ztDmrQDmBizkeoF20nJyVYIcpUuCndtbtFTqsJjNcc3SDPKIPRcHqRtxUMIsJXUBL5TVLK%2FWj0PI3fU5IQ%2FcA%2BEr62Apdr6LGM1AaCsyMHhLKHi1s8JdlcBA1BvZ5DEuQZX5WDyWXrKIPckX8gRE1c5oPRSnbGmvuC3VmBi%2F5&X-Amz-Signature=ac5ce47ef608f5cf4dd8b51b31aac846eb54b9f7a911371a9256baa730a6deab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
