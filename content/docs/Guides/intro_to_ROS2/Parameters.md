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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6KXGAG%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdpBrhNkUnyOtmdEJtZwHtGCgfAYAj9UPe%2F2KKV9co%2FAiBKiBMsyP1eXINs4sFeETobvn24ClYSdDeYzouWjo7csyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIM0p3a%2BaAD6%2BAcldv3KtwDG5G%2B6jWUxmHqnGhSGZTK8TeTlkr2ss0slwMNWXQc23S%2FQBfN2Ssp9xBxc0oCa%2BE41LGwsbtj5Ukn8KxaQU44SKIYF5YOpinkq67PCJC0kF2HWx%2FiJCj0iZZ9Kx%2Fbcea%2FsDpH0P8GJv7AX8mK2hOMTfH0C7T5MQC2oR55uTRnReHNa6REvsji2t3hQivCUV642jmp5rEq6lNj%2BBWpO5weEPsCvBscQy5q7CoOvzg7Q9lQ3n%2FCr8XuuMDSj924cFVZn3%2BdZIDbVhz9G12OtRVptusGZXJ1Xo65r5d%2FtOP48k%2FVvJCsT9ar5v0U5J0VxOIKoF2sXEqtixgLhMOSDA3ud%2FgBbitgrJKt%2BKMuy8otpfs6POc4Sqj9r%2FZktNajhFwoq07d19Az8qk6PwyGg0s5ncirBmqwM3CTG8ODCE8OPWxClIK2cW4Y%2BTHNkRzJMD2dP0DC8vBBHYwYNHHltv6adK99RGbBiHfmzzpIpn%2BXtmPcW1ANqslMOspj%2FUpfdMc%2FltNS4r1pz5sJOyiZmvWGJ0dXgiQQcoQ5ije6RI6wAIfAGQgO1g16Ybb90eUfclcNuv9fuwIyAX0i%2Bd1cRKC0B%2BUfqKHXOnA6z8i7vRxR%2BIdlKjaqBaMErOayXdowh5LrwAY6pgE%2B1d%2ByPJJtg4O%2F4L%2FPOFWsj1CcyJdp7hBUk3IQzaFVqSHGrvTlI6jr8Z%2Fog7kWdduRnWh1YSPMwrdfZlJqTH%2BpW%2FdGw726nKzwDyGjIR7hLBUyYicR%2FMNknFeN2Utvs1F%2F4PCmTxQNpFEqqbuoN1m9GQKkQ1dsJla2VrKawfZ7rNa64tWAoUb%2FPRUvWgPTfh9r%2FFKmWPLn9ebX8Tth56tIZtPPFgNz&X-Amz-Signature=a59d89e2a9b05fdc73a22fc2fdd0c1ec9c5d123626a64baf2afb4a6d2ddf4ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
