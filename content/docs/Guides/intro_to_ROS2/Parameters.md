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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBY7K47%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCT4O%2BxBey4xsb3d5Fr3Ub8eZSxKHSFJcYuzO2hA5X1bgIhAK5GGzqvcihHJMUKCQPqRIzth33m80%2FKlTHvZyoT8KEgKv8DCHEQABoMNjM3NDIzMTgzODA1IgzczR58Ftw27C84yjUq3AOnP2CUTLMx8vwLoL9cipDtIKetKoS%2B46%2FrJSRLdGQ0ocp6kLXyUpEGNcUgQ87PE7c7ZjyBKvolFSLrQD1lAXqeLAIBJCpPJ%2BuHBQYI7WjkygdDGIZR2M%2F1NTIppBfVSW0EW0iJTpUJJ7vXH%2BGLoGZCLBSn3qjyBZTCbHbDUu7lHTv15k69ZCDcz7aPwjQ%2BP9AKxEAVSAsnvTRqPQlva%2FTcnIB8AZbrcjOlvBf%2F1X12H1fpLGBNiW3Ph60pv%2BT5uDh5ZffrHarF6Ikr8lclcMK5k20MLGmR6AxqmQaO8TBmypPL2BM9oHHoMeaxubkIlhe3J73zEmgAq8aWY6cfGBNy8fgok%2BV4WEr46dZuLkUKJO1QoT8%2FzDXN5J6nMS5PyiYyG9a0XM2q4vs05yDxwXynpisqZM5Rw%2Fyf90f1erNglrdRVQ6eGj37eDH%2FS2f9QfbiYNQvrvqYzkdpsgOc4dHArahy61WbRvpaM4yTZlsPsjA4AKJR4ZBykYeKulZvE7iuaP9Cpr6%2FeZ8%2BTylA%2B3LDKIf5M4pn2p%2BRVCvODLcLbQQZqOR36e1grt6mCyqPcefg3Q%2BlsE8ZxFeuv3xp8QSnglt1i3WmBZpD6EpPIcz5gW3SBUKP5QEX9Sp8jTD3%2Bpa9BjqkAY%2BJt1HKEKUYhzFbdq%2BsgPzip7r7JRJ5FgjV5frvhjMSQUq6Kj3ZhnPtRYCUaUL4Km%2B77vZuNzrwvpiMuFYI8RgFMZz59z50Bx5UsIJlWerLxS3rbs2bM9A9ULQxi7BjGQuqn6SSk1bAsYjAoOrZufeOP3d8bOvkTGZkbNBoE%2BxtitUNdJy4xBEpB7gEyHfkS2MTZIGuM3BK4z%2F7zIwrWRy6FkpS&X-Amz-Signature=c29d737482325898f70ccaee5458ff7b1ddb4efd3c386761ef3909772bc21b34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
