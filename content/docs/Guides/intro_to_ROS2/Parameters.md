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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VADK7YF5%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIGeVXwnkXTgdxAWJhePgr25V%2BUIqjWnCmIGtpvicooDAAiB5ajI0ZLDRe98YI8Mfd48FKeOaqPm5Sk0hr1gECYac4Sr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMGa9Sg0du75uMH9UvKtwDai11JfIxljkzAKaKyCaU1AKR2r3gKhA2qunFNBstfALqqxURHE%2BVqYxJ16y1%2BwvpNDJMUyUyPZlM9Afgm5HM7uHL59JJeudFEQQAynLHgZDOqDa8YlzEneux%2F9Rf5JAh3vbqBm3Dxw%2Fh6Ubl9T2Q%2F%2BBrq9vDVC9P3z8AWDc5X00fTsOtboCqh7D0Ino%2BwpSl7BdFFpk%2BIHSL%2FlCR2yp9VSIeI6%2FfIBX8Yf%2FD2N7nPg1N1MVBrBhO4p%2Fhxi%2FKdX9eyNz3tclh6cbnIZkD5oL9pVWAuOq2SLGLQcSMH7ok%2BYpk1bF0mtlQSeQNWxKMTlGItUO%2B%2Bft0qJW9yfgSb%2BUVFIKNhwCK%2BP9U5KlfyLFeAZQHnPPQqPY9zE0ncDgHIfIqNpVv6sQ4MvCrH%2BUAVh%2BKl%2ByuMcn2i%2FzP6hRUgEhoSWwcDEm3gW62f05%2FqkrPszS1m52L2snCGvqq3Z0k%2BlPL7vk7IybVh%2BnUhRQMGwWOnUGsX%2FiK%2Fzn0kvgnZWTZvFg%2FWnqtc%2BaQWq2eIvtHOO6c7HSWukoNJbtGG3QZXtwV71LkZbUkl%2FQnaRUB3vRn%2B4LrQnd3oAocXAg2gFTQ6ds5S3h0%2FMhl6Q0RxMjdD30bMMgyIWfN4o%2BDXL%2FGfDww%2FOegwwY6pgFiVTack2GxsV24jKBpnLy5iKH1c5F5G%2FnOXIg0aTWM9VA4NiihiioChta6FHfzgLL2MRnDFprv5PKdqHiLecshW2hb7E2nAHChY%2FRde3%2F8svGYUDD99Z7pJOZhNIiVr0hRgOakDYqDgsOPkiiBRBE0%2BpaB8GetV8A8HtCTfcamkwjsWbNQCinXZ0ijGTzLWcAX1xQNPdLiMN%2BY5muVrzA%2BMOrImrM3&X-Amz-Signature=6fd82deb6aa554130d89ee69594861312d1973d8928415f36b735c06ecf0012c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
