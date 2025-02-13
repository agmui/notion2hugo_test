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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663POJG2XQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2B4VYbr%2BFbZfLuGaEHVeNFFKWHz4GcjBnL4IgdnsGo6AiEAmYxTeg5zBCdJGTBNK%2FwDYbgKq8ZZPsRWWdM3US4mOJ4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOspyXLCkZnR2YcLqyrcAzdwd7eIZk2Rcj2IZf07AiDgB2ul6XDNFUOqmuuEn%2Fx4XBcn1%2BbIrTyJq%2Bd4PH9P9j7BC41TQPVa1tP5SRTd%2FNz5RpoPGhYpCwWOdyQFrhE2fKiZ77ngzZzlBeeJN6%2F%2F%2BPrMxTlmelMp0LVWhXUZ0lhbNQzfLEV7DqqANZo%2BVHFI0AnT%2BjAxv4pLsx%2FHQSrkwXbhqsqptg8Pn6%2FOn1%2BMHpK%2FkBYhWh3djNTqe7kGfC01%2FVcqqo94TXjtm7sB9wFYNczbPR9Cl0Q3FP3%2FONFN8tLhxaTx%2FsFhquZIU7zGfzhFMPJDoFb4tfXrQh0EJntuQY91jHmnxsd%2F21u4gCZVZ%2F1ymYgz6CuxtMncl6rxVs6i7Hi6a%2FVdBryW%2FEGfBQHMUYToW9XsgB8n6bwnJjwDK%2BE3FrqvSen9kTwTSxoLYa6%2FA4H1rbtO1bnfUZT8keLNBVRir9Kzays7TYSYC7nOF8JQnQ8HyG1a2kk%2F1sKXJnoCFPFbWm1jbpqGvs%2FOAWdH%2BzfdYU8NcadzXYD7gXABcMFZ6SuhiEggVRQLqqok00QdrH5n6yW%2BvAZ8A6VCusNRct6vqqlevGY5DUPOFmfWta2MsGMdHxeiyA0SAxPCI28NDEZeddbnGB6KIiOgMO2ht70GOqUBkNfsH8VVB0Nuoms7RvOSWkuBqFaCgQtKo0kVt%2FBDCn%2FwSsNhvhpo1sU3fNWFuMYCO9hwC9tsyLfc3tEfDcxYG4SoNwV8fQsF2uibQ3Gr%2Fth%2B4gTSHH4HEIZ3Cbh2vCf4qJP9vmlHocChhWFvyE93Na%2B%2F5cLtEU%2F3GvIwxwk%2Bdia8oDx4S24nfzEfV0GbqicEBXUZKxpPbkJUulqVEG2Xmfonm1bh&X-Amz-Signature=65e8373b11e25ef57e2d2452c87579b20cbf642b12c2913fa7ead4e9fee3f571&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
