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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQIV2SDY%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2IvqEfNcFqCXCl0hTlplcyxInjceIjfQ2gTlX0hnFGAIhAKCERTh0LFZ5pJX0Zh6bTCGBKWdjCFct9ABTezw5Ke%2BwKv8DCC0QABoMNjM3NDIzMTgzODA1IgxGRDWIAXs512XNQ5oq3ANb5BNa%2B5mAC3RdpE%2Frmu%2B6Zi9cFncWPQ4fwR%2B1LMdcYq0w1%2BinHd6Xahom1M7KaS3QV%2FG9jKpIr2%2FtNTlZ%2BopnfRrvCJHUp7UeFkOTJrjUC%2FZX2LUa9lE%2Bl3jHLDK%2B5WiXyMchpLoJyg0AUQsTFl39WhdXsZEFR%2BXavDZ3RZk75YcoNVjIEycGnvu3LaLxApbt2YJuEOQC62TevyOXLLDEAXSZNGXiwe3vBzwrHpiGUY9xNJr4HiY1tjm2NEWPq2jUuWV0VH%2BFT0m4k5eNuXjw%2FrULj19DVaXi9xYG0FAEZ1W%2BZRCPPetlooI6J4WAkyK92cKtEd2s7%2Btq9sIWvi7NxmmTEzFW0KvpBZgL7fJhLjmCnF%2BU476hk%2FETmJ1PhgwXc9rdmOFLK0cflOML7UgkbfvS4icii0dTCzgOFq3MrpkNQELV4nV4QQANFTHyM%2Fe2pxINsoIH48bDeideW9b95PcWadwVDpfhsWyqClEhg3x50kOlpXpeL%2Bn4iHZwIPHAW%2BISnloZwJbEBl%2B9ibbrmlmhzsymDCTl8oNq2HD%2B5%2BCffANhJr4jaF2AgEMjCUqfbek%2FjiJ4l4k5KuRQVCFfYf2pEknbPl3N1WON%2FY67BwZXaWkQLEKHYMEhWTDit%2FG9BjqkAdlZOfqhsBRKJ7Uu%2BfURPrPDoWEETqRm6VcPLgmONi8V7C3KGOxb0UDOjjMhrhhCcijMHmMRQOxRttKhZgNs0Blsmbzhh0O6G3xb84OCc5dW0DprWtHKQ2kYVwLgK7l1uL%2FuvNk%2Bj4l3BE1yl%2B%2B7aL4KfoS%2Br%2B4dq14WDdi2lfVRKZ4Q%2FIXyUI59jPla9Yf%2F4DIDJC4hZXTZqwrQgx16ktGykNcc&X-Amz-Signature=eeb58fc8533d81a949a3725f59cb6079e5c85ae57562289ea6250e7564f11de1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
