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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JFWTAAM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDHMg7GMqpMfmXi9tXrj6T6YePAYpVcXO1IvQUh04lMYAiAwyEAj6IG8vn1IPil71EtXYLJY%2FLByIXW8a4TIhTQ7ySqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHM0Mlt9KUd%2Be0J67KtwDjfm%2BZAj017yoOtsQ2FtxkSpCxw4NMGp55exCR47B4vxDhmKXkcr9DWVDeh7zJ307F%2FaGURlhLcJEpy9e%2FnQTSv2zJmlmQvk1kBD1ti98ZcvDSXz3JZIxEPB6q9IfNvnGNUY4x0VjcV3bPhJehLJLJ19YoSaR134Sfap4jmNfoYJW2LRI%2FfA3PCVDEN0lS1IZJP%2FggHuN4qu5MRCPSm67cj2b7fxK9PWHd1ug2EtL0xUkXjGXxp86RGpJr%2Fb%2BWqywx9dRyB8WDVT8mVhtUwjb0VmlLVesf4s604PLlpa7hkEV%2FDEQLIBg565jufy0Ek0qA9wtHfMxN%2F1ff1DqnNHDVNxWOHsRL7wWwMrbO3BAXcrVrt7NV%2FdfqPc%2BoEJEmVPunvNrtKJHi6%2Fj9z2zTqtlwwyPbL2HqNAUYZdSgzpekBEHCCNM%2F7LjzwwvuD4oKr7jRa5MBm%2FWv7VIZNdv9XqW98I3QJbu0fmJ9NZkNqXTTXf8VM4DLlQBV9HLKSZywoYCZfAT91EP%2Bq%2BZ5hieS89t64cWUbaF%2B9gKHMe8g7prdm8f8wI1gzhG6Z2Kopi6auFS10hEyFJ%2BsGcIhPalhIHWby1zOHdND87PXaXRLx4VCcEYZN3oZxMsRqiZkp8w4te2vwY6pgHwyikTtN1j3OaM4Tjq6VhcAontWQvjzGbE718u6VsgGs9CBE1X%2BocOA%2BHPxxxktj%2B7iZ%2B4%2BhTPXaMEqyZdtJjydmIB2vBjjCLJHQdk8zv4s0zhCSJ6K8VREpcRDe1NA9L0aVq5v7LZg0fOtEc9fjvdouYL3yn%2B9z%2BuoylRQXtZutwwmjBGnRB6DmWT4NHqgTGXKdySyiuJDAusqNrcN9UhSZurq0vk&X-Amz-Signature=c5d8ae0a3d1009c8fc8546098107ae97817badf3e4cf0fe3083050c3b54b8694&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
