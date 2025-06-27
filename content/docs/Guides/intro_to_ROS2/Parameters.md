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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDLUQZ3I%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGK8XmDSWChZdIYfKXXqvAbB5MYnmmSPaTkXTa4oQTNAiAj%2Fbyb%2BlGh746qzK%2FKScBg%2FcHnj3d91bl6fz8D2aaNSCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMSr3C6kasRlNaZM2XKtwD%2ByC0YeTLIEajXKCIIIJ9BNtZt4AW%2B3RohuYKWxoCeW%2FYAdlnZ8YadazzJ6zcBseazs70kbc%2FI4LSGPjoj1oO5Js%2B5NJLyapQnMzw6hLpeJF2ZGMFI3RF0wxj59oEPFMW8DJcgb1mI95wbsScUIxkhaAB%2F9jnTS2pTXToPZZ8mdWKelyOwyh0nN8HF9rM1ZyZ4ztk5YwQdyNxauOjRots4BeDSl3bA7zHhFqAQiHdVBSFi3KHlaJLwph8fqXSUm8jXyvcmgD9qbnHoJkDu6ilvWIHWV%2F7f2%2FzyeweV8l3adNzhx535%2FAdHWoJ%2FSU5%2FfIeepP%2BTIsiGeht%2FtQvNHVPppUO6Qk3O5R9CFe7q7oE7q5ksORRhN8U8Cbd6oOgNZZuIDsaDkAARlDatLW%2FyCS8u01j%2Fx5uWZTyOZ2ZgkvNVxxg5%2B%2BKINEvaMEVpYFrtsQItF2RJWCu2KnizKvRkOZ8hgoRY%2FYk%2F%2FFI2rxrW83dK6bhhJ0F%2BvZb3qLFT2%2BSxIUeMV73EfYjDL%2BfGrCg0cmnpgLjIf3XlhNqo9p%2Bujjlv9Ks8FKgu6XxdrdsnxLhIWsVI3xwaL6hEj24o3Vm4Hs0Z4hvdM8dDmjoI7azJZQzutXsNk8KK7EvEQ0n9uEw36P7wgY6pgG4Z6FnYor3GtGo9rSv79cw29kLuCe5UmprPGPh1v8gfN%2BnN2uD6z7ffwFtjk8UdwIbozpX%2BSZFl%2FMMksSyfbhkgdi4XS6ebm3v2RsCgonngoANP7gVND2xLKFKTpwNlZPD9FPZgPW%2FiOo7xRKS31Xc5H73Fk6ft3aZkGyMr5F8hvoKx0ah33LtSS3Rz7CqqRyLXa325qL0JECJ95gc5bcNNHnu7ifv&X-Amz-Signature=a41f4e94ded3cc3bdbb18d925bdca3d8f725910772d06d920238ccf2159af080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
