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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XKL5X3C%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2c%2F9TYNfKoezFwIO9SvWzCOLAnNlpdeT2shSXBEAkIAIgH4MzNgde06ayjhAOONl5HfFDVyQYcU%2F6QYDeS5CV0UsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxXwXAbIPr7cdEWryrcAzZymZLkz7BRzKVnU7VUYOoh%2BDekbb%2BfTEeGALvqOV0V093JeaBlArW6zk2a9NZWJl8PIxVa8zNlxI9pnX2X5UJq5NL18LJXNCtO7IdENdpsPlMxdJhM2NvjqgaU8M1zMPg3p2QlOn5eEaym1DI032Nn5GUp6pCjpoD0yYhaDItFgPyXMFtrfcX2B5WiW4zHYz2J%2B%2BjqoGLvf11ldvD1LxDAqAlq5AaYJyLHvCswTdx5UM9UR7Ffpveo2OFu83QyehDb5QC1NnalX3FWOveDgNsXSorxuBkdFRbjTD8OPj9UKMkSmfECyfTTLId2tUpnsyE56Er1IDFQyWngjj4CbwvnAkDg6kIgtXWFUopkDFF1BHMvYxf5cJX3TbVPhNZYkZobbKbmnsv86O4w8glUy%2FW73loa%2BkGUAWiGHSirI0GDNaUVIC13HBTuS3OqJ45Kp7zCgd9HT1UFmqGktD%2FAyiWtj%2BZqIoC4tzz4x64ZEvtdQBI1HMLGzdeKp1JJKr2%2Fye%2BMiGYmFvNv0kFuTsjyZ6HUW047jw%2FTn5kZRr8WjjQruKH5Lo%2BcJ0%2FoXKiZs%2B8aYtZrDUwNS8sM1%2BQ7PTZ%2BqyGVFVZSbDs2PeAZJGHCFTNLF4YJbX%2BV%2FWtIvHH0MImC8MsGOqUBJmxgtGxRyfaiZKw34yRE3RnK%2F1QQWCmqWGh%2BLaotcePxcsmXgl78KgDBNRqT1CsTd16jfsyKk%2Fn3z%2FyLY4P9SjGxS%2FmOYo4H492sdhccbnxexFmddHnd7KaoRUi3YmkvtASaEfpHAL2z9sAEC6ytCDnzJDgABDwSWj8qi1AqezJADM6v2Omfc4FmggFK4Q4PTEkmXMyRps6yg8XwBf4wEutiOxoJ&X-Amz-Signature=b3f0dd07648dea8419edd1f7c7ff2b61f41f15f7c1c261d9f14cec9f7c47df98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
