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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDIYJ3XL%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIATeVtDk1dLmW0KaODVWcoC3vz3jBlFUHbiUQYqPNag%2FAiBIXts0gH6djsjL2nhvjAV01hHxGBrSS1yNU5iA8gSAnir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM8YeXDNqjt60ETmCQKtwDWCK9wteTB75%2F4mDgliK5Io2jA2gtPB21%2BiJGYBJfPq%2F6dkUd3lc7TM7neP8m1lafgPnJZshFW0rouDbVbtivHgtg6UC4HQ5ZQvv2lOxeAgJdaSwX6lS4j01B%2FtR68b5u7YlXBSmAXeJRH2l%2FxWrDRBVRjYm74jb6ESTznDG6%2B7CH7jTwRYWvzY9M2sFtyNW%2FK8TAji2%2B5RQ46hRG7GwyRIpBhvbEJ0hUo8cSaVeS38cbfky5ODFI8Lxbbe55w%2BDnFJWkVXqN9c3CTsHiV4Qx90V6eQkhtUaRR4mfqhhVZ8H0V64SDusQH4d6ikgI5dejTdimwIgDgioDvBH2PlBP3IAGnkr55KE%2FST2P1Dt%2FbgDVrwAp2AzyJFjAGheY42aPXqGVqjsjH8buStCOXtbt7ZOy4FdcqoqhZ6LaZ10xAbkQWC7U15t70PuywYCWrxHPNnouhcQwYXwwnejm2nElrJIjcfXxlgx%2FrMK%2FuT4qXhrLOP0gMpEIZTfyl6gAhh%2BHmnxkhudNJLNRmHHK2v98pVocAcGT54L71WqpbUU%2FO%2BgD4icVjTZKwIz4jiY5Apn8FAaRIGSSlXbe3COnPuM2QAP7%2BSl7tMZBFWzaginj1MQnuwJ3sT5W8Y69JH8wmJ2WwQY6pgG1sOAru1XtQD1yP3FqVWKS56zvF%2FATu7dnyNcWS%2B3P%2FnlrvVviVuekVBScxa2Q7Rl9PM5IONBxvzhTP2Rsz1JvvWscWFum%2BfjtABvteJ0dyV%2F0V5iLlfjEA0mlJ%2FpyQpVBT%2Fspe8t3rPc5SI%2BjR7oZc00agGbUCND2i9UzCzNJvrKGr3ypx7Fsr5Q352Mo1ccYM3rqs75Y7XItrTL10OFHBuM2LcNn&X-Amz-Signature=01b9e585d4a505e1bd82980f9772de7330fbf464225f7f20988e195b01b62e87&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
