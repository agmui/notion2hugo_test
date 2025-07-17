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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGV7AR5%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC%2FeizP5k7fdBNt8yr4pwdtlT4JVLEkfSCQmUMQ%2F6RYggIgfibhyI%2Be0vdxM%2B%2BUNAJblMZwaLwsqqN4j9IGPqdHbsoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCHa6JVb5yJDZPqNHCrcA0aanNoaoxCCCM1hmaCFo24xVAm4BGUEDVoS0u0xeCw%2FyooSk%2F88BCTNeMIv48T0CcLZDYf9YVn2jMAPA79TQea9Hq7VeGJcjDXNmey7DIOvcXqJ%2BM%2BpFRRS92ie%2BNBCQZ8A2rGvnOz3Yf%2Bfr%2FZfO%2F5YNdt6emMhh9KyEM0x9YQ13rKSt0RhT9tSNQJipqg9kq70JiCljYtFeggzhFvoSisIlOR1j6qHdC%2B7iXU%2BOZhJfwC3nog3JMeOAODDYkA4FN%2FFYbNcvC1gsC979vpiR60MUt8hYIH05%2BD4fJbOdua%2F8zmzC%2BptLoDHhlkVcUgf0S1yagqtIqdoy7sA51h9675hecwG%2BG%2F6CAlcornwuQ22vIyOc10wzQmOLtjAoS7oKDk9KXU6%2B1rlCOztYEafCJigYTRSsIL%2F1A4A0SBqK9FzmGNLr%2Bpe%2F1IMPTuHkIt8Cg%2FPdO7xS4R%2FoDa0QS4XY0X1s4dB0mkDqAVEo6X4L6MSQ%2F7mD9TKwfnlSBRpbH%2BjEF8SVveUYs0wrfcnKOLxeNzyaiLFQbIyMyLSJqq4YLVwBNzCB06MC1gkho4%2BUVrsgiIk6ZGo0SAeHb74rZdlGHC7fubwcMLJu9fRR%2FY2DK2sROeH6T3m2vJxmk28MPjm5MMGOqUBz25s61imBUCoZPtI6Ww00igqfTUR9jpgOQitexXafQR5l%2FtAWyP9aGDfBNI%2FB0lYyIVuWtoRiUjsRWolGw%2BucLi4AmE%2FKLO1AeRTq%2BrNRqX%2B7Lt3qgvZV2%2BuejOjudrQwwqxabXu3bCapWQykPca7Ds4qCP%2FzQZZwJlXyOx0gxa8%2FL34AJqvkXmkSI3Uj3gqiBI6Ha5yCvF82O%2F5DnsKgyoFqhXY&X-Amz-Signature=78c74a4b783556f400658224653f080fc561c0b0e7fa6c078f84a3cc7578462c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
