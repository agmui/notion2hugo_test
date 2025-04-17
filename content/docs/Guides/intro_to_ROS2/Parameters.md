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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPVHIYSQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpKuXNc5Ld1gBU8DDt2%2BuBuQOtqrYMZSOs4LV7Jpt7yAiEAwd4TVWMw%2BDw02SqTTitrq3I5l8I%2B4uCoE14o40tVJngq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGaXO5EUJ2dsH%2FSPUCrcA5LPeMFTpq8rHxUyZ%2Bobj7F%2B%2FBJYv631qjwBIOtWX4UZPmXpuWtNLGkOi%2BXxvLS2e%2F6Ma9D4Qz0p9%2FIr4g6hq7k8Dy4zHWPzENFSzYtxznW0N6uAXyP5z6KRta4oCl1M4mnupHT7Eed%2FSvkUdLNkeNlTChiHtXcbZv0%2FWyz9oacPgbziap0U71l14eOWsLa%2BOU3nJRa88Jc%2FB7pEH6b58tfPg7Q%2Bhf9jPxw%2F8F574Iy9JUYK0n%2BjfbfQtMK8sjHR4inxpQzUefZOcRKAIdpQZ3l3fEsrl4p7oMEe%2FvJ9YoQheQv0zxhj2QJVcozUsqF6SpXVCE%2BuPLKaObuDARisHbcCvexP10hCRn%2BOuhTI4%2BPFcnukAhkes225T8I5aRJ5QI4X0EACxHT2i0zB4F1CHFfEy7zRIE5xk%2BUhtZeNfqgTVmqn3R259YaOwkIzSg%2F3jHC7UJfBxr8KOHZaw6uCP2j%2BEGdhfEx67qlukf373LV7bNuwOSEH1kOyWVCEUODcAHCf6L3F6T9m2mA%2Bwgvj8Qy4h3wNLpLdGfKrpCwUvx%2BSP7ey%2B0ZzFTU81Q8Ufg1ykmpsCf6Nd5Jl%2FJX2r2WmQfemlbvpM7GCJdYaz9Ml7plUZghQjVxtqyILixXtMKu3hcAGOqUBqYHFs3dK31IXSEvp8WuRroXoEjVtt09OzZBKdOPNX%2FnXQczUpH8mhDgBYbmFXyoXBK3wbvxOmrCG5a%2BIQLtPaHwylVO2LsSNsiYnVBjrTm3T2WyEuhAEz%2FCLqBvusFE93IAqhURZkK4IZv1t368yfFdpHBxc5WrVuoYXhtqzNatgwgNB8zOc0avF3znl8mXooGR4lkpDFTOncSHHV4Eo9MLUlWUg&X-Amz-Signature=6eb0a7c9c09b81f5173e47c20239ab5b171d70a4c1dad6bc825c781ae4647c38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
