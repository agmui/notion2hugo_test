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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3L6A3VY%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICTTTrErE7cdNaGIm4hQ5%2FR3IxX5ktFlMJCDlf4BYSytAiBVilpuiXT%2B1jZyNXYzQTlVSbFz7DtFqdBxihmQneWwPCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpo%2BBuIbXVB7jRrcPKtwDhO%2BXOM2f7DIEtKi1Eu2I2SEh2kAvC4wM7zTptz7JWfVt8M9NG%2F6d1A6W6Fo8uDNvMj9mUWSLvyhgApx8hcVjGBhhw7tQ%2F1g%2BZTvlziz13iWOGguqX39hi0CE8jica8IJyOoHkzmTL7we2HJUjWx1w%2B02ASYzH1JIEwthrysM3uOkXL%2FUQYxZULjNHF2Iua9%2FHidKCXRBe4Hqh6DJqksZx5itlhc2TUHM7Mf8nBPufYP7jmfNYnNO6IvSv01AW4mHJOtcI2dhLVBL4iA2Zi0UwUMy1XaJC1tJr7WlEEosKjvTeAYCbLrKDAaTVPhV%2FRGOaJgWsRR7TIDt38NrvvCFAaC4c2EFMMuPRezo%2FMjQH3%2Fa40a24mqNzQf34rWFYkVN5TI0lsH7BoEgbwG48wCztWlQ4NziKgsmO5Jtc0EmWQsKGmT3q9z1aBi3Pi9CVAiBvtL%2Bmqq7uWQ315n2PfiIQHklhHqbX8iRaBmYGW0sPAvh63uQyns8sjpG6Uneb8WMlOxF4t%2F6Iebm1pxWmGnVn%2BRAcZZ%2BZT2eX8MrP3CRMAMyOcjNtUtcAikS0D%2F3b7VqiCV%2BtLN4jTEG5P1RvrsE3NS5feXet3%2FgCjOrghKjXXoWmiq95IJvW%2BCe1hwwvZTMwAY6pgFPn3FMJ95j7CwpqG9CP6rUbg%2FRFL2cazYyBI5%2BGI%2BBbYNF3FUn06cKji%2BawtWtovUWBgHiZ%2FsEttxYEZYQ%2Bwl2NW%2F3m7nIOFHgju2WN%2FPltWihTa4XnASKXjxXelnq6tn8B6eB1UAW2qoYVefZqZfQFaVhciGhg6NvUlT2LplfGGz%2BqQutWBvS8FFsGRFcr9WYxtGzR5654G7rBt6eKKy3uFSeaTkt&X-Amz-Signature=9aeb10455af822b212e7e6f54c32f769fc9eb405a2f5ff9adb451bf6582b4ba5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
