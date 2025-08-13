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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O4LTA2T%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALTajOG6yhGfzJK51XPLmEvSnRvJG5Q1yd4f5L%2F4HSFAiBgEDiO2pqO0U6ye598EPfhBu0MrMdviVRjM3lFKW3Tgyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMMN3l35YFMkf6b5ONKtwDLGfEiRXqv55WaouGwge%2B%2F1EZRzIBs1CcuBF%2F%2BuR6ucOmbuUvtt5%2FJK2nygrPpsvxf634j3SUySzExvPeMnm%2BXPITZQ%2FoJSwL%2FLul1ow7EPbNAJjBZAANjxllwNrnHq4%2FZ0oPX5%2FmlOUXkS02UxvPw2RghQpMSKVk8SXzF3tU5unfKfASv13vjUpI8W2fE9HtQU0sj%2FzJPTRPSptP6JCVR4t01Qtn%2BWZX5JFi0IQMPDbn8DrKp1WCkmxEboBVRlBupRmIbVlKGsa8iYWcM7BZbXyLAMSzr%2F%2BtgIhfV1q%2FwQ8QBO0TI27jt%2BD7DBdTcYg%2FuYuGUDjmNt0Q15JPuVt1JCHP%2F4PhHZl3tWnRPxZ9BZv2bhiXGLddQrXPaMi151iYg7jS03KWhtILGljqPD4CXuZmqQ5OgUW6zk0e6eUFLp2uANGvun93wN5u0PX%2Be9%2Fs66q%2Fp3rI3gaOefKtMvjjbABWzF0T7mZz9OElTdneqQbVrKmWd7Or1R63CU0E3vA9xftZvtZvfekxcpdQ4ckJoQJJ2V%2FD1xywBqr3%2BmTXXGcT1HiNotdx8frlx6gMYlU5q%2By2I6gbbrOlDmdaQgda3lg8PpJu5iEoR%2FFgUDVt1KscSYRQyyxymuI9j%2BQwm%2BrzxAY6pgExg84NHe8yoRn9RtMJoaBkb9vKK71eJIPFTxMxJOIVWFuWxz7IC0AtyrnEWlUxx3uHphJpDw5FLqI5sesPKS0rA0bWnK1dAGCvfPOBw%2F2kqXRSG9BkLHCHPnyAZ4nQV9RE%2FddhXW6jFIaagwS0YlI6d7gRiwLYsoBtptg5qFmH8fYlr2lHMK3fak0tLgXSU86bbV8Y8Gbs3z8DZwfY2xRKCtn%2F4sBX&X-Amz-Signature=9c7134103d460f2ddaa2c4a00a060ccd7b5a02e1826079163c8676e0d56aaad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
