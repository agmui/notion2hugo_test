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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKRPZVN3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCPNLghJxXnfGX3Q7bz3MWEnT%2BSLQQj2lWZRR0CdQ5wVgIgWmAIxfWG05M8pRD3rs6Ss3HJRSHsD3c%2F9dOlIFKdC1Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNqHfJNzm2sQFdDDmCrcAzfi5YvF76QzhVeeUc9inGXN6DWT0E1H8g%2Bh7MlOgHZKEZS%2BrYETOcmr%2BSW32KLg1%2Fwl3GKyLEIA6w3lkPl2BzCzUaVH%2Bg4M1jsN4e%2Fa7jFPYFcGsLv4sl9vqG9X8tmIsahOlDOD8DXmqmV3s7qsLMAdH90OPNbfgWoN5u3dqLodeIm88qDVHxE%2B7zdXChYZFHI%2BpaghsLDvTNNRSFYJnhyj1%2Bi5oNfnCI95bDIlMqsjziys8Fy8JVkSVd2JNjY0lr7TiB0Cu9Jlm8FShu7mmng%2F%2F4duuCGPA%2B5oJkxN8jelnI22HfG2PKOWnz0pu0cUn4JrZ8ILJx2FD6E2l0tmdONDD6HxdQDN3QR3y53NI3gcwK22iZ77w5xaalfnhFZ2Phv2c532SvsK3%2BmC8dcGOdi0aSq0SN5Na%2BF15%2BqCnF7i7dRjRRUYOWcVd36lyahaST8MFlIV2srWwpRT3%2F%2BrqNau%2B56Snc%2FoLoXKTVxP8BrfvOYzMF8qRXTTJP8%2B04FX04Z4XYsvzvtUAzFoVoGJ0LRsvjdxpNiTKLvKxNuSV8LsXN0feBAR4y3PLAhNlfQZu9o0Lu8cwdzVEz3dmLFyiaWg%2FVs2HURMLYGr6CKWcUiXrIFmS9ltj2DIYhBEMJTu4cMGOqUBsV3T1VupfUVmPm2EQ3HcvrIKv%2B5CB2HBgPgoydR3M6TDFVrApHmZZUSaPWZqgb8e0sT99YlIVcTYjt3JSKibrds9Y0xhBqKdEFT5wF05PoFRKN%2B6bQCYYvqGClYU4HvURNj4SSd1vmLRKiGyjf%2FJwoR6NZf0dqdceyHnDZyhqjP3EZCoVu5SSEwqYSAf0TZ11ct96ypg6YGTTAi%2B9k%2BPxbYSccqP&X-Amz-Signature=99018c2c09b119bc48433d1d7210beb8dd4aaeae2aab146f624687c17777078a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
